<template>
  <div class="flex justify-center">
    <div class="w-screen max-w-4xl">
      <div
        class="flex flex-col pt-large w-full bg-white blue-box-shadow-light rounded"
      >
        <div class="mt-large">
          <TitleWithIllustration
            illustration="Institution"
            message="Institution"
          />
        </div>
        <form @submit.prevent="submit" class="mx-auto max-w-3xl w-full mt-10">
          <div class="flex">
            <div class="flex flex-col mb-medium w-2/5 mr-12">
              <label class="text-primary-700">Applicant Type</label>
              <select class="max-w-3xl" v-model="licenseInfo.applicantTypeId">
                <option
                  v-for="applicant in applicantTypes"
                  v-bind:key="applicant.name"
                  v-bind:value="applicant.id"
                >
                  {{ applicant.name }}
                </option>
              </select>
            </div>
            <div class="flex flex-col mb-medium w-2/5 mr-12">
              <label class="text-primary-700">Department</label>
              <select
                class="max-w-3xl"
                v-model="licenseInfo.education.departmentId"
              >
                <option
                  v-for="department in departments"
                  v-bind:key="department.name"
                  v-bind:value="department.id"
                >
                  {{ department.name }}
                </option>
              </select>
            </div>
          </div>

          <div class="flex">
            <div class="flex flex-col mb-medium w-2/5 mr-12">
              <label class="text-primary-700">Institution</label>
              <select v-model="licenseInfo.education.institutionId">
                <option
                  v-for="institution in institutions"
                  v-bind:key="institution.name"
                  v-bind:value="institution.id"
                >
                  {{ institution.name }}
                </option>
              </select>
            </div>
          </div>
        </form>
        <div v-if="this.showButtons" class="flex justify-center mb-8">
          <button @click="submit">
            Next
          </button>
          <button
            v-if="this.buttons.length < 3"
            @click="draft(this.buttons[1].action)"
            variant="outline"
          >
            {{ this.buttons[1]["name"] }}
          </button>
          <button
            v-if="this.buttons.length > 2"
            @click="draft(this.buttons[0].action)"
            variant="outline"
          >
            {{ this.buttons[0]["name"] }}
          </button>
          <button
            class="withdraw"
            v-if="this.buttons.length > 2"
            @click="withdraw(this.buttons[2].action)"
            variant="outline"
          >
            {{ this.buttons[2]["name"] }}
          </button>
        </div>
        <div>
          <Spinner v-if="showLoading" />
        </div>
      </div>
    </div>
  </div>
  <div class="mr-3xl" v-if="showFlash">
    <FlashMessage message="Operation Successful!" />
  </div>
  <div v-if="showErrorFlash">
    <ErrorFlashMessage message="Operation Failed!" />
  </div>
</template>

<script>
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
import { mapGetters, mapActions } from "vuex";
import FlashMessage from "@/sharedComponents/FlashMessage";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import Spinner from "@/sharedComponents/Spinner";

export default {
  props: ["activeState"],

  components: {
    TitleWithIllustration,
    FlashMessage,
    ErrorFlashMessage,
    Spinner,
  },

  async created() {
    this.fetchApplicantType();
    this.fetchInstitutions();
    this.fetchDepartments();
    this.showLoading = true;
    setTimeout(() => {
      this.buttons = this.getButtons;
      this.showButtons = true;
      this.showLoading = false;
    }, 5000);
    this.draftId = this.$route.params.id;
    if (this.draftId != undefined) {
      setTimeout(() => {
        this.fetchDraft();
      }, 5000);
    }
  },

  computed: {
    ...mapGetters({
      getButtons: "verification/getButtons",
      getDraft: "verification/getDraft",
    }),
  },
  data: () => ({
    licenseInfo: {
      applicantId: localStorage.getItem("userId"),
      applicantTypeId: "",
      education: {
        departmentId: "",
        institutionId: "",
      },
    },
    applicantTypes: [],
    institutions: [],
    departments: [],
    buttons: [],
    showButtons: false,
    showFlash: false,
    showErrorFlash: false,
    showLoading: false,
  }),

  methods: {
    draft(action) {
      this.showLoading = true;
      let license = {
        data: {
          action: action,
          data: {
            applicantId: this.licenseInfo.applicantId,
            applicantTypeId: this.licenseInfo.applicantTypeId,
            education: {
              departmentId: this.licenseInfo.education.departmentId,
              institutionId: this.licenseInfo.education.institutionId,
            },
          },
        },
        id: this.draftId,
      };

      if (this.draftId != undefined) {
        this.$store
          .dispatch("verification/editVerificationLicense", license)
          .then((res) => {
            if (res.data.status == "Success") {
              this.showFlash = true;
              this.showLoading = false;
              setTimeout(() => {}, 2000);
              this.$router.push({ path: "/menu" });
            } else {
              this.showErrorFlash = true;
            }
          });
      } else {
        this.$store
          .dispatch("verification/addVerificationLicense", license.data)
          .then((res) => {
            if (res.data.status == "Success") {
              this.showFlash = true;
              this.showLoading = false;
              setTimeout(() => {}, 2000);
              this.$router.push({ path: "/menu" });
            }
          });
      }
    },
    withdraw(action) {
      this.showLoading = true;
      let withdrawObj = {
        action: action,
        data: this.getDraft,
      };
      let payload = {
        licenseId: this.getDraft.id,
        withdrawData: withdrawObj,
      };
      this.$store.dispatch("verification/withdraw", payload).then((res) => {
        if (res.data.status == "Success") {
          this.showFlash = true;
          this.showLoading = false;
          setTimeout(() => {
            this.$router.push({ path: "/menu" });
          }, 3000);
        } else {
          this.showErrorFlash = true;
        }
      });
    },
    submit() {
      this.$emit("changeActiveState");
      let license = {
        applicantId: this.licenseInfo.applicantId,
        applicantTypeId: this.licenseInfo.applicantTypeId,
        education: {
          departmentId: this.licenseInfo.education.departmentId,
          institutionId: this.licenseInfo.education.institutionId,
        },
      };
      this.$emit("applicantTypeValue", this.licenseInfo.applicantTypeId);
      this.$store.dispatch("verification/setLicense", license);
    },
    fetchApplicantType() {
      this.$store.dispatch("verification/getApplicantType").then((res) => {
        if (res.data.status == "Success") {
          const results = res.data.data;
          this.applicantTypes = results;
        } else {
        }
      });
    },
    fetchInstitutions() {
      this.$store.dispatch("verification/getInstitution").then((res) => {
        if (res.data.status == "Success") {
          const results = res.data.data;
          this.institutions = results;
        } else {
        }
      });
    },
    fetchDepartments() {
      this.$store.dispatch("verification/getDepartmentType").then((res) => {
        if (res.data.status == "Success") {
          const results = res.data.data;
          this.departments = results;
        } else {
        }
      });
    },
    fetchDraft() {
      let draftData = this.getDraft;
      this.licenseInfo.applicantId = draftData.applicantId;
      this.licenseInfo.applicantTypeId = draftData.applicantTypeId;
      this.licenseInfo.education.departmentId =
        draftData.education.departmentId;
      this.licenseInfo.education.institutionId =
        draftData.education.institutionId;
    },
  },
};
</script>
<style>
.withdraw {
  background-image: linear-gradient(to right, #d63232, #e63636) !important;
  color: white;
  border-color: tomato;
}
</style>
