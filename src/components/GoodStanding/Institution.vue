<template>
  <div class="flex justify-center items">
    <div class="bg-lightBlueB-200 w-screen h-screen max-w-4xl">
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
          <div id="main" class="mt-4 pt-8 pl-4">
            <div class="flex">
              <div class="flex flex-col mb-medium w-2/5 mr-12">
                <label class="text-primary-700">Applicant Type</label>
                <select
                  class="max-w-3xl"
                  v-model="licenseInfo.applicantTypeId"
                  @change="checkApplicantType(licenseInfo.applicantTypeId)"
                >
                  <option
                    v-for="applicant in applicantTypes"
                    v-bind:key="applicant.name"
                    v-bind:value="applicant.id"
                  >
                    {{ applicant.name }}
                  </option>
                </select>
                <span style="color: red">{{
                  licenseInfoErrors.applicantTypeId
                }}</span>
              </div>
              <div class="flex flex-col mb-small w-2/5 mr-12">
                <label class="text-primary-700">Expert Level</label>
                <select
                  class="max-w-3xl"
                  @change="checkExpertLevel(licenseInfo.expertLevelId)"
                  v-model="licenseInfo.expertLevelId"
                >
                  <option
                    v-for="expert in expertLevels"
                    v-bind:key="expert.name"
                    v-bind:value="expert.id"
                  >
                    {{ expert.name }}
                  </option>
                </select>
                <span style="color: red">{{
                  licenseInfoErrors.expertLevelId
                }}</span>
              </div>
            </div>
            <div class="flex">
              <div class="flex flex-col mb-medium w-2/5 mr-12">
                <label class="text-primary-700">Applicant Title</label>
                <input
                  class="max-w-3xl"
                  type="text"
                  v-model="licenseInfo.applicantTitle"
                />
                <span style="color: red">{{
                  licenseInfoErrors.applicantTitle
                }}</span>
              </div>
            </div>
          </div>
          <div v-if="this.showRegion" id="main" class="mt-4 pt-8 pl-4">
            <div class="flex">
              <div class="flex flex-col mb-medium w-2/5 mr-12">
                <label class="text-primary-700">Region</label>
                <select
                  class="max-w-3xl"
                  v-model="regionID"
                  @change="fetchZones()"
                >
                  <option
                    v-for="types in regionArray"
                    v-bind:key="types.name"
                    v-bind:value="types.id"
                  >
                    {{ types.name }}
                  </option>
                </select>
              </div>
              <div class="flex flex-col mb-medium w-2/5 mr-12 ml-medium">
                <label class="text-primary-700">Zone</label>
                <select
                  class="max-w-3xl"
                  @change="fetchWoredas()"
                  v-model="zoneID"
                >
                  <option
                    v-for="types in zoneArray"
                    v-bind:key="types.name"
                    v-bind:value="types.id"
                  >
                    {{ types.name }}
                  </option>
                </select>
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
                    v-for="types in woredaArray"
                    v-bind:key="types.name"
                    v-bind:value="types.id"
                  >
                    {{ types.name }}
                  </option>
                </select>
                <span style="color: red">{{
                  licenseInfoErrors.residenceWoredaId
                }}</span>
              </div>
            </div>
          </div>
          <div id="main" class="mt-4 pt-8 pl-4">
            <div class="flex">
              <div class="flex flex-col mb-medium w-2/5 mr-12">
                <label class="text-primary-700"
                  >Organization Letter is written for:
                </label>
                <input
                  class="max-w-3xl"
                  type="text"
                  v-model="licenseInfo.whomGoodStandingFor"
                />
                <span style="color: red">{{
                  licenseInfoErrors.whomGoodStandingFor
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
                  licenseInfoErrors.licenseIssuedDate
                }}</span>
              </div>
            </div>

            <div class="flex">
              <div class="flex flex-col mb-medium w-2/5 mr-12">
                <label class="text-primary-700"
                  >Who Issued Previous License</label
                >
                <input
                  class="max-w-3xl"
                  type="text"
                  v-model="licenseInfo.whoIssued"
                />
                <span style="color: red">{{
                  licenseInfoErrors.whoIssued
                }}</span>
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
                  licenseInfoErrors.licenseRegistrationNumber
                }}</span>
              </div>
            </div>
          </div>
          <div id="main" class="flex mt-4 pt-8 pl-4 mb-medium">
            <div class="flex flex-col mb-medium w-2/5 mr-12">
              <label class="text-primary-700">Applicant Position (Title)</label>
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
                licenseInfoErrors.applicantPositionId
              }}</span>
            </div>
            <div class="flex flex-col mb-medium w-2/5 mr-12 ml-medium">
              <label class="text-primary-700">Professional Type</label>
              <select
                class="max-w-3xl"
                @change="fetchProfessionalType()"
                v-model="licenseInfo.professionalTypeID"
              >
                <option
                  v-for="types in professionalTypes"
                  v-bind:key="types.name"
                  v-bind:value="types.id"
                >
                  {{ types.name }}
                </option>
              </select>
              <span style="color: red">{{
                licenseInfoErrors.professionalTypeID
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
          <button @click="draft(this.buttons[2].action)" variant="outline">
            {{ this.buttons[2]["name"] }}
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
          v-if="this.showButtons && this.draftStatus == 'SUB'"
          class="flex justify-center mb-8"
        >
          <button @click="submit">
            Next
          </button>
          <button
            class="withdraw"
            @click="withdraw(this.buttons[0].action)"
            variant="outline"
          >
            {{ this.buttons[0]["name"] }}
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
    this.draftStatus = this.$route.params.status;
    this.fetchApplicantType();
    this.fetchInstitutions();
    this.fetchDepartments();
    this.fetchRegions();
    this.fetchApplicationPositions();
    this.fetchProfessionalType();
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
      }, 6500);
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
      applicantId: +localStorage.getItem("userId"),
      residenceWoredaId: "",
      applicantTitle: "",
      whomGoodStandingFor: "",
      licenseIssuedDate: "",
      whoIssued: "",
      licenseRegistrationNumber: "",
      applicantPositionId: "",
      professionalTypeID: "",
    },

    licenseInfoErrors: {
      applicantTypeId: "",
      applicantTitle: "",
      whomGoodStandingFor: "",
      licenseIssuedDate: "",
      whoIssued: "",
      licenseRegistrationNumber: "",
      applicantPositionId: "",
      residenceWoredaId: "",
      regionID: "",
      zoneID: "",
      professionalTypeID: "",
    },
    regionID: "",
    zoneID: "",

    regionArray: [],
    zoneArray: [],
    woredaArray: [],

    applicationPositions: [],
    applicantTypes: [],
    institutions: [],
    departments: [],
    buttons: [],
    showButtons: false,
    showFlash: false,
    showErrorFlash: false,
    showLoading: false,
    showRegion: false,
  }),

  methods: {
    checkExpertLevel(expertLevel) {
      if (expertLevel == 4) {
        this.showRegion = true;
      } else {
        this.showRegion = false;
      }
    },
    checkApplicantType(applicantType) {
      if (applicantType == 1) {
        this.$store.dispatch("newlicense/getExpertLevel").then((res) => {
          this.expertLevels = res.data.data.filter(function(e) {
            return e.code.includes("REG") || e.code.includes("FED");
          });
        });
      } else {
        this.$store.dispatch("newlicense/getExpertLevel").then((res) => {
          this.expertLevels = res.data.data.filter(function(e) {
            return e.code.includes("FED");
          });
        });
      }
      if (applicantType == 1) {
        this.displayPayrollDoc = true;
      } else {
        this.displayPayrollDoc = false;
      }
    },
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
            licenseIssuedDate:
              this.licenseInfo.licenseIssuedDate + " 17:23:50.228+01",
            whoIssued: this.licenseInfo.whoIssued,
            licenseRegistrationNumber: this.licenseInfo
              .licenseRegistrationNumber,
            applicantPositionId: this.licenseInfo.applicantPositionId,
            professionalTypeId: this.licenseInfo.professionalTypeID,
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
            licenseIssuedDate:
              this.licenseInfo.licenseIssuedDate + " 17:23:50.228+01",
            whoIssued: this.licenseInfo.whoIssued,
            licenseRegistrationNumber: this.licenseInfo
              .licenseRegistrationNumber,
            applicantPositionId: this.licenseInfo.applicantPositionId,
            professionalTypeId: this.licenseInfo.professionalTypeID,
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
        licenseIssuedDate:
          this.licenseInfo.licenseIssuedDate + " 17:23:50.228+01",
        whoIssued: this.licenseInfo.whoIssued,
        licenseRegistrationNumber: this.licenseInfo.licenseRegistrationNumber,
        applicantPositionId: this.licenseInfo.applicantPositionId,
        professionalTypeId: this.licenseInfo.professionalTypeID,
      };
      console.log(license);
      this.addressErrors = this.validateForm(license);
      let empty = this.isEmpty(this.addressErrors);
      if (empty == false) {
        return;
      }
      if (empty == true) {
        this.$emit("changeActiveState");
        this.$emit("applicantTypeValue", this.licenseInfo.applicantTypeId);
        this.$store.dispatch("goodstanding/setLicense", license);
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

    fetchApplicationPositions() {
      this.$store.dispatch("goodstanding/getApplicantPosition").then((res) => {
        const applicationPositions = res.data.data;
        this.applicationPositions = applicationPositions;
      });
    },

    fetchRegions() {
      this.$store.dispatch("goodstanding/getRegions").then((res) => {
        const regionsResult = res.data;
        this.regionArray = regionsResult.data;
      });
    },

    fetchZones() {
      this.$store
        .dispatch("goodstanding/getZones", this.regionID)
        .then((res) => {
          const zonesResult = res.data;
          this.zoneArray = zonesResult.data;
        });
    },

    fetchWoredas() {
      this.$store
        .dispatch("goodstanding/getWoredas", this.zoneID)
        .then((res) => {
          const woredasResult = res.data;
          this.woredaArray = woredasResult.data;
        });
    },
    fetchProfessionalType() {
      this.$store.dispatch("goodstanding/getProfessionalTypes").then((res) => {
        this.professionalTypes = res.data.data;
      });
    },

    validateForm(formData) {
      const errors = {};
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
      if (!formData.residenceWoredaId)
        errors.residenceWoredaId = "Woreda Required";

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
      this.licenseInfo.applicantId = draftData.applicantId;
      this.licenseInfo.applicantTitle = draftData.applicantTitle;
      this.licenseInfo.whomGoodStandingFor = draftData.whomGoodStandingFor;
      this.licenseInfo.licenseIssuedDate = draftData.licenseIssuedDate;
      this.licenseInfo.whoIssued = draftData.whoIssued;
      this.licenseInfo.licenseRegistrationNumber =
        draftData.licenseRegistrationNumber;
      this.licenseInfo.applicantPositionId = draftData.applicantPositionId;
      this.licenseInfo.residenceWoredaId = draftData.woreda.id;
      this.regionID = draftData.woreda.zone.region.id;
      this.zoneID = draftData.woreda.zone.id;
      this.licenseInfo.professionalTypeID = draftData.professionalTypeId;

      this.$store
        .dispatch("goodstanding/getZones", this.regionID)
        .then((res) => {
          const zonesResult = res.data;
          this.zoneArray = zonesResult.data;
        })
        .then((res) => {
          this.$store
            .dispatch("goodstanding/getWoredas", this.zoneID)
            .then((res) => {
              const woredasResult = res.data;
              this.woredaArray = woredasResult.data;
            });
        });
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
#main {
  border: 1px solid #cccccc;
  border-radius: 5px;
}
</style>
