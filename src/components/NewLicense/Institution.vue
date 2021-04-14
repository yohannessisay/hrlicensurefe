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
            <div class="flex flex-col mb-medium w-1/2 mr-12">
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
            <div class="flex flex-col mb-medium w-1/2 mr-12">
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

          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Institution</label>
            <select
              class="max-w-3xl"
              v-model="licenseInfo.education.institutionId"
            >
              <option
                v-for="institution in institutions"
                v-bind:key="institution.name"
                v-bind:value="institution.id"
              >
                {{ institution.name }}
              </option>
            </select>
          </div>
        </form>
        <div v-if="this.showButtons" class="flex justify-center mb-8">
          <button @click="submit">
            Next
          </button>
          <button @click="draft(this.buttons[0].action)" variant="outline">
            {{ this.buttons[0]["name"] }}
          </button>
          <button
            v-if="this.buttons.length > 2"
            @click="withdraw(this.buttons[2].action)"
            variant="outline"
          >
            {{ this.buttons[2]["name"] }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["activeState"],

  components: { TitleWithIllustration },

  async created() {
    this.fetchApplicantType();
    this.fetchInstitutions();
    this.fetchDepartments();
    setTimeout(() => {
      this.buttons = this.getButtons;
      this.showButtons = true;
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
      getButtons: "newlicense/getButtons",
      getDraft: "newlicense/getDraft",
    }),
  },
  data: () => ({
    licenseInfo: {
      applicantId: localStorage.getItem('userId'),
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
  }),

  methods: {
    draft(action) {
      let license = {
        action: action,
        data: {
          applicantId: this.licenseInfo.applicantId,
          applicantTypeId: this.licenseInfo.applicantTypeId,
          education: {
            departmentId: this.licenseInfo.education.departmentId,
            institutionId: this.licenseInfo.education.institutionId,
          },
        },
      };
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
      this.$store.dispatch("newlicense/setLicense", license);
    },
    fetchApplicantType() {
      this.$store.dispatch("newlicense/getApplicantType").then((res) => {
        const results = res.data.data;
        this.applicantTypes = results;
      });
    },
    fetchInstitutions() {
      this.$store.dispatch("newlicense/getInstitution").then((res) => {
        const results = res.data.data;
        this.institutions = results;
      });
    },
    fetchDepartments() {
      this.$store.dispatch("newlicense/getDepartmentType").then((res) => {
        const results = res.data.data;
        this.departments = results;
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
