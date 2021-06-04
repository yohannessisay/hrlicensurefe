<template>
  <div class="flex justify-center items">
    <div class="w-screen max-w-4xl">
      <div
        class="flex flex-col pt-large w-full bg-white blue-box-shadow-light rounded"
      >
        <div class="mt-small">
          <TitleWithIllustration
            illustration="Institution"
            message="Institution"
          />
        </div>
        <form @submit.prevent="submit" class="mx-auto max-w-3xl w-full mt-10">
          <div class="flex">
            <div class="flex flex-col mb-medium w-2/5 mr-12">
              <label class="text-primary-700">Region</label>
              <select
                class="max-w-3xl"
                v-model="state.cityObj"
                @change="fetchZones()"
              >
                <option
                  v-for="types in state.regions"
                  v-bind:key="types.name"
                  v-bind:value="types"
                >
                  {{ types.name }}
                </option>
              </select>
              <span style="color: red">{{ addressErrors.city }}</span>
            </div>
            <div class="flex flex-col mb-medium w-2/5 mr-12 ml-medium">
              <label class="text-primary-700">Zone</label>
              <select
                class="max-w-3xl"
                @change="fetchWoredas()"
                v-model="state.zoneId"
              >
                <option
                  v-for="types in state.zones"
                  v-bind:key="types.name"
                  v-bind:value="types.id"
                >
                  {{ types.name }}
                </option>
              </select>
              <span style="color: red">{{ addressErrors.zone }}</span>
            </div>
          </div>

          <div class="flex">
            <div class="flex flex-col mb-medium w-2/5 mr-12">
              <label class="text-primary-700">Woreda</label>
              <select
                class="max-w-3xl"
                v-model="licenseInfo.residenceWoredaId"
                @change="woredaChanged()"
              >
                <option
                  v-for="types in state.woredas"
                  v-bind:key="types.name"
                  v-bind:value="types.id"
                >
                  {{ types.name }}
                </option>
              </select>
              <span style="color: red">{{ addressErrors.woreda }}</span>
            </div>
            <div class="flex flex-col mb-medium w-2/5 mr-12 ml-medium">
              <label class="text-primary-700">Applicant Title</label>
              <input
                class="max-w-3xl"
                type="text"
                v-model="licenseInfo.applicantTitle"
              />
              <span style="color: red">{{ addressErrors.applicantTitle }}</span>
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col mb-medium w-2/5 mr-12">
              <label class="text-primary-700">For Whom Goodstanding</label>
              <input
                class="max-w-3xl"
                type="text"
                v-model="licenseInfo.whomGoodStandingFor"
              />
              <span style="color: red">{{
                addressErrors.whomGoodStandingFor
              }}</span>
            </div>
            <div class="flex flex-col mb-medium w-2/5 mr-12 ml-medium">
              <label class="text-primary-700">License Issued Date</label>
              <input
                class="max-w-3xl"
                type="date"
                v-model="licenseInfo.licenseIssuedDate"
              />
              <span style="color: red">{{
                addressErrors.licenseIssuedDate
              }}</span>
            </div>
          </div>

          <div class="flex">
            <div class="flex flex-col mb-medium w-2/5 mr-12">
              <label class="text-primary-700">Who Issued</label>
              <input
                class="max-w-3xl"
                type="text"
                v-model="licenseInfo.whoIssued"
              />
              <span style="color: red">{{ addressErrors.whoIssued }}</span>
            </div>
            <div class="flex flex-col mb-medium w-2/5 mr-12 ml-medium">
              <label class="text-primary-700"
                >License Registration Number</label
              >
              <input
                class="max-w-3xl"
                type="text"
                v-model="licenseInfo.licenseRegistrationNumber"
              />
              <span style="color: red">{{
                addressErrors.licenseRegistrationNumber
              }}</span>
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col mb-medium w-2/5 mr-12">
              <label class="text-primary-700">Applicant Position</label>
              <select
                class="max-w-3xl"
                v-model="licenseInfo.applicantPositionId"
              >
                <option
                  v-for="applicant in applicationPositions"
                  v-bind:key="applicant.name"
                  v-bind:value="applicant.id"
                >
                  {{ applicant.name }}
                </option>
              </select>
              <span style="color: red">{{
                addressErrors.applicantPositionId
              }}</span>
            </div>
          </div>
        </form>
        <div
          v-if="this.showButtons && !this.draftStatus"
          class="flex justify-center mb-8"
        >
          <button @click="submit">
            Next
          </button>
          <button @click="draft(this.buttons[1].action)" variant="outline">
            {{ this.buttons[1]["name"] }}
          </button>
        </div>
        <div
          v-if="this.showButtons && this.draftStatus == 'DRA'"
          class="flex justify-center mb-8"
        >
          <button @click="submit">
            Next
          </button>
          <button @click="draft(this.buttons[0].action)" variant="outline">
            {{ this.buttons[0]["name"] }}
          </button>
          <button
            class="withdraw"
            @click="withdraw(this.buttons[2].action)"
            variant="outline"
          >
            {{ this.buttons[2]["name"] }}
          </button>
        </div>
        <div
          v-if="this.showButtons && this.draftStatus == 'SUB'"
          class="flex justify-center mb-8"
        >
          <button @click="submit">
            Next
          </button>
          <button
            class="withdraw"
            @click="withdraw(this.buttons[1].action)"
            variant="outline"
          >
            {{ this.buttons[1]["name"] }}
          </button>
        </div>
        <div
          v-if="this.showButtons && this.draftStatus == 'USUP'"
          class="flex justify-center mb-8"
        >
          <button @click="submit">
            Next
          </button>
          <button @click="draft(this.buttons[0].action)" variant="outline">
            {{ this.buttons[0]["name"] }}
          </button>
          <button @click="update(this.buttons[1].action)" variant="outline">
            {{ this.buttons[1]["name"] }}
          </button>
        </div>
        <div
          v-if="this.showButtons && this.draftStatus == 'DEC'"
          class="flex justify-center mb-8"
        >
          <button @click="submit">
            Next
          </button>
          <button @click="draft(this.buttons[0].action)" variant="outline">
            {{ this.buttons[0]["name"] }}
          </button>
          <button @click="update(this.buttons[1].action)" variant="outline">
            {{ this.buttons[1]["name"] }}
          </button>
        </div>
        <div>
          <Spinner v-if="showLoading" />
        </div>
      </div>
    </div>
  </div>
  <div class="mr-3xl" v-if="showFlash">
    <FlashMessage message="New license saved Successful!" />
  </div>
  <div v-if="showErrorFlash">
    <ErrorFlashMessage message="Savning new license Failed!" />
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
    this.fetchRegions();
    this.fetchApplicationPositions();
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
      getButtons: "goodstanding/getButtons",
      getDraft: "goodstanding/getDraft",
    }),
  },
  data: () => ({
    licenseInfo: {
      applicantId: localStorage.getItem("userId"),
      residenceWoredaId: "",
      applicantTitle: "",
      whomGoodStandingFor: "",
      licenseIssuedDate: "",
      whoIssued: "",
      licenseRegistrationNumber: "",
      applicantPositionId: "",
    },

    state: {
      regionId: "",
      regions: [],
      zones: [],
      woredas: [],
      cityObj: {},
      zoneId: "",
    },
    addressErrors: {
      woreda: "",
      city: "",
      zone: "",
      applicantTitle: "",
      whomGoodStandingFor: "",
      licenseIssuedDate: "",
      whoIssued: "",
      licenseRegistrationNumber: "",
      applicantPositionId: "",
    },
    address: {
      woreda: "",
      residence: "",
      zone: "",
    },
    applicationPositions: [],
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
            residenceWoredaId: this.licenseInfo.residenceWoredaId,
            applicantTitle: this.licenseInfo.applicantTitle,
            whomGoodStandingFor: this.licenseInfo.whomGoodStandingFor,
            licenseIssuedDate: this.licenseInfo.licenseIssuedDate,
            whoIssued: this.licenseInfo.whoIssued,
            licenseRegistrationNumber: this.licenseInfo
              .licenseRegistrationNumber,
            applicantPositionId: this.licenseInfo.applicantPositionId,
          },
        },
        id: this.draftId,
      };

      if (this.draftId != undefined) {
        this.$store
          .dispatch("goodstanding/editGoodstandingLicense", license)
          .then((res) => {
            if (res.data.status == "Success") {
              this.showFlash = true;
              this.showLoading = false;
              setTimeout(() => {}, 1500);
              this.$router.push({ path: "/menu" });
            } else {
              this.showErrorFlash = true;
            }
          });
      } else {
        this.$store
          .dispatch("goodstanding/addGoodstandingLicense", license.data)
          .then((res) => {
            if (res.data.status == "Success") {
              this.showFlash = true;
              this.showLoading = false;
              setTimeout(() => {}, 1500);
              this.$router.push({ path: "/menu" });
            }
          });
      }
    },
    update(action) {
      this.showLoading = true;
      let license = {
        data: {
          action: action,
          data: {
            applicantId: this.licenseInfo.applicantId,
            residenceWoredaId: this.licenseInfo.residenceWoredaId,
            applicantTitle: this.licenseInfo.applicantTitle,
            whomGoodStandingFor: this.licenseInfo.whomGoodStandingFor,
            licenseIssuedDate: this.licenseInfo.licenseIssuedDate,
            whoIssued: this.licenseInfo.whoIssued,
            licenseRegistrationNumber: this.licenseInfo
              .licenseRegistrationNumber,
            applicantPositionId: this.licenseInfo.applicantPositionId,
          },
        },
        id: this.draftId,
      };

      if (this.draftId != undefined) {
        this.$store
          .dispatch("goodstanding/editGoodstandingLicense", license)
          .then((res) => {
            if (res.data.status == "Success") {
              this.showFlash = true;
              this.showLoading = false;
              setTimeout(() => {}, 1500);
              this.$router.push({ path: "/menu" });
            } else {
              this.showErrorFlash = true;
            }
          });
      } else {
        this.$store
          .dispatch("goodstanding/addGoodstandingLicense", license.data)
          .then((res) => {
            if (res.data.status == "Success") {
              this.showFlash = true;
              this.showLoading = false;
              setTimeout(() => {}, 1500);
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
      this.$store.dispatch("goodstanding/withdraw", payload).then((res) => {
        if (res.data.status == "Success") {
          this.showFlash = true;
          this.showLoading = false;
          setTimeout(() => {
            this.$router.push({ path: "/menu" });
          }, 1500);
        } else {
          this.showErrorFlash = true;
        }
      });
    },
    submit() {
      let license = {
        applicantId: this.licenseInfo.applicantId,
        residenceWoredaId: this.licenseInfo.residenceWoredaId,
        applicantTitle: this.licenseInfo.applicantTitle,
        whomGoodStandingFor: this.licenseInfo.whomGoodStandingFor,
        licenseIssuedDate: this.licenseInfo.licenseIssuedDate,
        whoIssued: this.licenseInfo.whoIssued,
        licenseRegistrationNumber: this.licenseInfo.licenseRegistrationNumber,
        applicantPositionId: this.licenseInfo.applicantPositionId,
      };
      this.addressErrors = this.validateForm(license);
      let empty = this.isEmpty(this.addressErrors);
      if (empty == false) {
        return;
      }
      if (empty == true) {
        // this.$emit("changeActiveState");

        console.log(license);
        // this.$emit("applicantTypeValue", this.licenseInfo.applicantTypeId);
        // this.$store.dispatch("goodstanding/setLicense", license);
      }
    },
    fetchApplicantType() {
      this.$store.dispatch("goodstanding/getApplicantType").then((res) => {
        const results = res.data.data;
        this.applicantTypes = results;
      });
    },
    fetchInstitutions() {
      this.$store.dispatch("goodstanding/getInstitution").then((res) => {
        const results = res.data.data;
        this.institutions = results;
      });
    },
    fetchDepartments() {
      this.$store.dispatch("goodstanding/getDepartmentType").then((res) => {
        const results = res.data.data;
        this.departments = results;
      });
    },
    fetchRegions() {
      this.$store.dispatch("goodstanding/getRegions").then((res) => {
        const regionsResult = res.data;
        this.state.regions = regionsResult.data;
      });
    },
    fetchApplicationPositions() {
      // this.$store.dispatch("goodstanding/getApplicantPosition").then((res) => {
      //   const applicationPositions = res.data;
      //   this.applicationPositions = applicationPositions;
      //   console.log(this.applicationPositions);
      // });
    },

    fetchZones() {
      this.address.city = this.state.cityObj.name;
      this.state.regionId = this.state.cityObj.id;
      this.$store
        .dispatch("goodstanding/getZones", this.state.regionId)
        .then((res) => {
          const zonesResult = res.data;
          this.state.zones = zonesResult.data;
        });
    },

    fetchWoredas() {
      this.$store
        .dispatch("goodstanding/getWoredas", this.state.zoneId)
        .then((res) => {
          const woredasResult = res.data;
          this.state.woredas = woredasResult.data;
          for (const item of Object.entries(this.state.zones)) {
            if (item[1].id == this.state.zoneId) {
              this.address.zone = item[1].name;
            }
          }
        });
    },

    woredaChanged() {
      for (const item of Object.entries(this.state.woredas)) {
        if (item[1].id == this.address.woredaId) {
          this.address.woreda = item[1].name;
        }
      }
    },
    validateForm(formData) {
      const errors = {};
      if (!this.state.cityObj.name) errors.city = "Region Required";
      if (!this.state.zoneId) errors.zone = "Zone Required";
      if (!formData.residenceWoredaId) errors.woreda = "Woreda Required";
      if (!formData.applicantTitle)
        errors.applicantTitle = "Applicant Title Required";
      if (!formData.whomGoodStandingFor)
        errors.whomGoodStandingFor = "Whom Goodstanding Required";
      if (!formData.licenseIssuedDate)
        errors.licenseIssuedDate = "License Issued Date Required";
      if (!formData.whoIssued) errors.whoIssued = "Issuer Required";
      if (!formData.licenseRegistrationNumber)
        errors.licenseRegistrationNumber =
          "License Registration Number Required";
      if (!formData.applicantPositionId)
        errors.applicantPositionId = "Applicant Position Required";

      return errors;
    },

    isEmpty(obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          return false;
        }
      }

      return true;
    },
    fetchDraft() {
      let draftData = this.getDraft;
      this.licenseInfo.applicantId = this.draftData.applicantId;
      this.licenseInfo.residenceWoredaId = this.draftData.residenceWoredaId;
      this.licenseInfo.applicantTitle = this.draftData.applicantTitle;
      this.licenseInfo.whomGoodStandingFor = this.draftData.whomGoodStandingFor;
      this.licenseInfo.licenseIssuedDate = this.draftData.licenseIssuedDate;
      this.licenseInfo.whoIssued = this.draftData.whoIssued;
      this.licenseInfo.licenseRegistrationNumber = this.draftData.licenseRegistrationNumber;
      this.licenseInfo.applicantPositionId = this.draftData.applicantPositionId;
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
