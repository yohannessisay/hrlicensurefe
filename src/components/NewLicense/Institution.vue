<template>
  <div class="flex justify-center items">
    <div class="bg-lightBlueB-200 w-screen h-screen max-w-4xl">
      <div
        class="
          flex flex-col
          pt-large
          w-full
          bg-white
          blue-box-shadow-light
          rounded
        "
      >
        <div class="mt-small">
          <TitleWithIllustration
            illustration="Institution"
            message="Institution"
          />
        </div>
        <form @submit.prevent="submit" class="mx-auto max-w-3xl w-full mt-10">
          <div id="main" class="flex">
            <div class="flex flex-col mb-small pt-8 w-2/5 ml-medium mr-12">
              <label class="text-primary-700">Applicant Type</label>
              <select
                class="max-w-3xl"
                @change="checkApplicantType(licenseInfo.applicantTypeId)"
                v-model="licenseInfo.applicantTypeId"
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
            <div class="flex flex-col mb-small pt-8 w-2/5 mr-12">
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
          <div id="main" class="flex mt-4 pt-8">
            <div class="flex flex-col mb-medium w-2/5 ml-medium mr-12">
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
              <span style="color: red">{{
                licenseInfoErrors.education.departmentId
              }}</span>
            </div>
            <div class="flex flex-col mb-medium w-2/5 mr-12">
              <label class="text-primary-700">Educational Institution</label>
              <select v-model="licenseInfo.education.institutionId">
                <option
                  v-for="institution in institutions"
                  v-bind:key="institution.name"
                  v-bind:value="institution.id"
                >
                  {{ institution.name }}
                </option>
              </select>
              <span style="color: red">{{
                licenseInfoErrors.education.institutionId
              }}</span>
            </div>
          </div>
          <div v-if="this.showRegion" id="main" class="pt-8 mt-4">
            <div class="flex">
              <div class="flex flex-col mb-medium w-2/5 ml-medium mr-12">
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
              <div class="flex flex-col mb-medium w-2/5 mr-12">
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
              <div class="flex flex-col mb-medium w-2/5 ml-medium mr-12">
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

          <div id="main" class="flex pt-8 mt-4">
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
            <div
              v-if="this.displayEnglishLanguageOption"
              class="flex flex-col mb-medium w-2/5 mr-12 mr-12"
            >
              <label class="text-primary-700">English Language</label>
              <select
                class="max-w-3xl"
                @change="setEnglishLanguage()"
                v-model="licenseInfo.nativeLanguageId"
              >
                <option
                  v-for="types in this.englishData.data"
                  v-bind:key="types.name"
                  v-bind:value="types.id"
                >
                  {{ types.name }}
                </option>
              </select>
            </div>
            <div
              v-if="this.displayPayrollDoc"
              class="flex flex-col mb-medium w-2/5 mr-12 mr-12"
            >
              <label class="text-primary-700">Occupation Type</label>
              <select
                class="max-w-3xl"
                @change="setPayrollDoc()"
                v-model="licenseInfo.occupationTypeId"
              >
                <option
                  v-for="types in this.payrollData.data"
                  v-bind:key="types.name"
                  v-bind:value="types.id"
                >
                  {{ types.name }}
                </option>
              </select>
            </div>
          </div>
        </form>
        <div
          v-if="this.showButtons && !this.draftStatus"
          class="flex justify-center mb-8"
        >
          <button @click="submit">Next</button>
          <button @click="draft(this.buttons[1].action)" variant="outline">
            {{ this.buttons[1]["name"] }}
          </button>
        </div>
        <div
          v-if="this.showButtons && this.draftStatus == 'DRA'"
          class="flex justify-center mb-8"
        >
          <button @click="submit">Next</button>
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
          <button @click="submit">Next</button>
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
          <button @click="submit">Next</button>
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
          <button @click="submit">Next</button>
          <!-- <button @click="draft(this.buttons[0].action)" variant="outline">
            {{ this.buttons[0]["name"] }}
          </button> -->
          <button @click="update(this.buttons[1].action)" variant="outline">
            {{ this.buttons[1]["name"] }}
          </button>
        </div>
        <div class="pt-8">
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
    if (
      this.getLicense ||
      this.getLicense != undefined ||
      this.getLicense != null
    ) {
      let draftData = this.getLicense;
      this.licenseInfo.applicantId = draftData.applicantId;
      this.licenseInfo.applicantTypeId = draftData.applicantTypeId;
      this.licenseInfo.education.departmentId =
        draftData.education.departmentId;
      this.licenseInfo.education.institutionId =
        draftData.education.institutionId;
      this.licenseInfo.professionalTypeID = draftData.professionalTypeId;
      this.licenseInfo.expertLevelId = draftData.expertLevelId;
      if (this.licenseInfo.applicantTypeId == 1) {
        this.$store.dispatch("newlicense/getExpertLevel").then((res) => {
          this.expertLevels = res.data.data.filter(function(e) {
            return e.code.includes("REG");
          });
        });
      } else {
        this.$store.dispatch("newlicense/getExpertLevel").then((res) => {
          this.expertLevels = res.data.data.filter(function(e) {
            return e.code.includes("FED");
          });
        });
      }
      if (this.licenseInfo.expertLevelId == 3) {
        this.showRegion = false;
      } else {
        this.showRegion = true;
      }
      if (draftData.regionId != undefined || draftData.regionId) {
        this.regionID = draftData.regionId;
        if (draftData.zoneId != undefined || draftData.zoneId) {
          this.zoneID = draftData.zoneId;
          if (
            draftData.residenceWoredaId != undefined ||
            draftData.residenceWoredaId
          ) {
            this.licenseInfo.residenceWoredaId = draftData.residenceWoredaId;
          }
        }
      }
    }
    await this.fetchApplicantType();
    await this.fetchInstitutions();
    await this.fetchDepartments();
    await this.fetchRegions();
    await this.fetchProfessionalType();
    await this.fetchEnglishSpeaker();
    await this.fetchPayrollData();
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
      getButtons: "newlicense/getButtons",
      getDraft: "newlicense/getDraft",
      getLicense: "newlicense/getLicense",
    }),
  },
  data: () => ({
    licenseInfo: {
      applicantId: +localStorage.getItem("userId"),
      applicantTypeId: null,
      education: {
        departmentId: null,
        institutionId: null,
      },
      residenceWoredaId: null,
      professionalTypeID: null,
      nativeLanguageId: null,
      occupationTypeId: null,
      expertLevelId: null,
    },
    licenseInfoErrors: {
      applicantTypeId: "",
      education: {
        departmentId: "",
        institutionId: "",
      },
      residenceWoredaId: "",
      regionID: "",
      zoneID: "",
      professionalTypeID: "",
      expertLevelId: null,
    },
    regionID: "",
    zoneID: "",

    regionArray: [],
    zoneArray: [],
    woredaArray: [],
    expertLevels: [],

    applicantTypes: [],
    institutions: [],
    departments: [],
    buttons: [],
    showButtons: false,
    showFlash: false,
    showErrorFlash: false,
    showLoading: false,
    showRegion: false,

    displayEnglishLanguageOption: false,
    displayPayrollDoc: false,

    nativeEnglishSpeaker: false,
    payrollDocType: false,

    englishData: "",
    payrollData: "",
  }),

  methods: {
    fetchEnglishSpeaker() {
      this.$store.dispatch("lookups/getNativeLanguage").then((res) => {
        if (res.data.status == "Success") {
          this.englishData = res.data;
        } else {
        }
      });
    },
    fetchPayrollData() {
      this.$store.dispatch("lookups/getGovernment").then((res) => {
        if (res.data.status == "Success") {
          this.payrollData = res.data;
        } else {
        }
      });
    },
    checkExpertLevel(expertLevel) {
      this.regionID = null;
      this.zoneID = null;
      this.licenseInfo.residenceWoredaId = null;
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
            return e.code.includes("REG");
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
      if (applicantType == 2) {
        this.displayEnglishLanguageOption = true;
      } else {
        this.displayEnglishLanguageOption = false;
      }
    },
    setEnglishLanguage() {
      if (this.languageID == 1) {
        this.nativeEnglishSpeaker = false;
      } else {
        this.nativeEnglishSpeaker = true;
      }
    },
    setPayrollDoc() {},

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
            residenceWoredaId: this.licenseInfo.residenceWoredaId,
            professionalTypeId: this.licenseInfo.professionalTypeID,
            paymentSlip: null,
            occupationTypeId: this.licenseInfo.occupationTypeId,
            nativeLanguageId: this.licenseInfo.nativeLanguageId,
            expertLevelId: this.licenseInfo.expertLevelId,
          },
        },
        id: this.draftId,
      };
      if (this.draftId != undefined) {
        this.$store
          .dispatch("newlicense/editNewLicense", license)
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
          .dispatch("newlicense/addNewLicense", license.data)
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
            applicantTypeId: this.licenseInfo.applicantTypeId,
            education: {
              departmentId: this.licenseInfo.education.departmentId,
              institutionId: this.licenseInfo.education.institutionId,
            },
            residenceWoredaId: this.licenseInfo.residenceWoredaId,
            professionalTypeId: this.licenseInfo.professionalTypeID,
            paymentSlip: null,
            occupationTypeId: this.licenseInfo.occupationTypeId,
            nativeLanguageId: this.licenseInfo.nativeLanguageId,
            expertLevelId: this.licenseInfo.expertLevelId,
          },
        },
        id: this.draftId,
      };

      if (this.draftId != undefined) {
        this.$store
          .dispatch("newlicense/editNewLicense", license)
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
          .dispatch("newlicense/addNewLicense", license.data)
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
      this.$store.dispatch("newlicense/withdraw", payload).then((res) => {
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
        applicantTypeId: this.licenseInfo.applicantTypeId,
        education: {
          departmentId: this.licenseInfo.education.departmentId,
          institutionId: this.licenseInfo.education.institutionId,
        },
        regionId: this.regionID,
        zoneId: this.zoneID,
        residenceWoredaId: this.licenseInfo.residenceWoredaId,
        professionalTypeId: this.licenseInfo.professionalTypeID,
        paymentSlip: null,
        occupationTypeId: this.licenseInfo.occupationTypeId,
        nativeLanguageId: this.licenseInfo.nativeLanguageId,
        expertLevelId: this.licenseInfo.expertLevelId,
      };
      this.$emit("changeActiveState");
      this.$emit("applicantTypeValue", this.licenseInfo.applicantTypeId);
      this.$emit("nativeLanguageSet", this.licenseInfo.nativeLanguageId);
      this.$emit("payrollDocumentSet", this.licenseInfo.occupationTypeId);
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
    fetchRegions() {
      this.$store.dispatch("newlicense/getRegions").then((res) => {
        const regionsResult = res.data;
        this.regionArray = regionsResult.data;
      });
    },

    fetchZones() {
      this.$store.dispatch("newlicense/getZones", this.regionID).then((res) => {
        const zonesResult = res.data;
        this.zoneArray = zonesResult.data;
      });
    },

    fetchWoredas() {
      this.$store.dispatch("newlicense/getWoredas", this.zoneID).then((res) => {
        const woredasResult = res.data;
        this.woredaArray = woredasResult.data;
      });
    },
    fetchProfessionalType() {
      this.$store.dispatch("newlicense/getProfessionalTypes").then((res) => {
        this.professionalTypes = res.data.data;
      });
    },
    woredaChanged() {},
    validateForm(formData) {
      const errors = {};

      if (!formData.applicantTypeId)
        errors.applicantTypeId = "Applicant Type Required";
      if (!formData.education.departmentId)
        errors.education.departmentId = "Department Required";
      if (!formData.education.institutionId)
        errors.education.institutionId = "Institution Required";
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
      this.licenseInfo.applicantTypeId = draftData.applicantTypeId;
      this.licenseInfo.education.departmentId =
        draftData.education.departmentId;
      this.licenseInfo.education.institutionId =
        draftData.education.institutionId;
      this.licenseInfo.professionalTypeID = draftData.professionalTypeId;
      this.payrollData = draftData.occupationTypes;
      this.licenseInfo.expertLevelId = draftData.expertLevelId;
      if (this.licenseInfo.applicantTypeId == 1) {
        this.displayPayrollDoc = true;
        this.$store.dispatch("newlicense/getExpertLevel").then((res) => {
          this.expertLevels = res.data.data.filter(function(e) {
            return e.code.includes("REG");
          });
        });
        this.fetchPayrollData();
        this.licenseInfo.occupationTypeId = draftData.occupationTypeId;
      } else {
        this.displayEnglishLanguageOption = true;
        this.$store.dispatch("newlicense/getExpertLevel").then((res) => {
          this.expertLevels = res.data.data.filter(function(e) {
            return e.code.includes("FED");
          });
        });
        this.fetchEnglishSpeaker();
        this.licenseInfo.nativeLanguageId = draftData.nativeLanguageId;
      }
      this.licenseInfo.expertLevelId = draftData.expertLevelId;
      if (this.licenseInfo.expertLevelId == 3) {
        this.showRegion = false;
      } else {
        this.showRegion = true;
      }
      if (draftData.woreda || draftData.woreda != undefined) {
        this.licenseInfo.residenceWoredaId = draftData.woreda.id;
        if (draftData.woreda.zone || draftData.woreda.zone != undefined) {
          this.zoneID = draftData.woreda.zone.id;
          if (
            draftData.woreda.zone.region ||
            draftData.woreda.zone.region != undefined
          ) {
            this.regionID = draftData.woreda.zone.region.id;
          }
        }
      }
      if (this.licenseInfo.applicantTypeId == 1) {
        this.displayPayrollDoc = true;
      } else {
        this.displayPayrollDoc = false;
      }
      if (this.licenseInfo.applicantTypeId == 2) {
        this.displayEnglishLanguageOption = true;
      } else {
        this.displayEnglishLanguageOption = false;
      }
      this.$store
        .dispatch("newlicense/getZones", this.regionID)
        .then((res) => {
          const zonesResult = res.data;
          this.zoneArray = zonesResult.data;
        })
        .then((res) => {
          this.$store
            .dispatch("newlicense/getWoredas", this.zoneID)
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
