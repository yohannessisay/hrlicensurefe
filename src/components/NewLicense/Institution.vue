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
              <!-- <label class="text-primary-700">Expert Level</label>
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
              }}</span> -->
            </div>
          </div>
          <div id="main" class="flex mt-4 pt-8">
            <div class="flex flex-col mb-medium w-2/5 ml-medium mr-12">
              <label class="text-primary-700">Department</label>
              <select
                class="max-w-3xl"
                v-model="licenseInfo.education.departmentId"
                @change="
                  fetchProfessionalType(licenseInfo.education.departmentId)
                "
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
              <select
                v-model="institution"
                @change="checkOtherEducation(institution)"
              >
                <option
                  v-for="institution in institutions"
                  v-bind:key="institution.name"
                  v-bind:value="institution"
                >
                  {{ institution.name }}
                </option>
              </select>
              <span style="color: red">{{
                licenseInfoErrors.education.institutionId
              }}</span>
              <input
                v-model="licenseInfo.otherEducationalInstitution"
                v-if="showOtherEducation"
                class="mt-2"
                placeholder="Write Education Level"
                type="text"
              />
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
              <label class="text-primary-700">Education Level </label>
              <select
                class="max-w-3xl"
                @change="setEducationLevel(licenseInfo.educationalLevelId)"
                v-model="licenseInfo.educationalLevelId"
              >
                <option
                  v-for="types in this.educationData"
                  v-bind:key="types.name"
                  v-bind:value="types.id"
                >
                  {{ types.name }}
                </option>
              </select>
            </div>
            <div
              v-if="showProfessionalTypes"
              class="flex flex-col items-start mb-6"
            >
              <label class="text-primary-700">Professional Type </label>
              <div
                class="flex"
                v-for="types in this.professionalTypes"
                v-bind:key="types.name"
                v-bind:value="types"
              >
                <input
                  v-on:click="checkOtherProfession(types)"
                  type="checkbox"
                  class="bg-gray-50 mr-4 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
                <label
                  for="remember"
                  class="font-medium text-gray-900 dark:text-gray-300"
                  >{{ types.name }}</label
                >
              </div>
              <div v-if="professionalTypeRepeat">
                <span
                  style="font-size: 18px; color: red"
                  v-for="prof in this.repeatedProfArray"
                  v-bind:key="prof.name"
                  v-bind:value="prof.id"
                >
                  {{ prof.name }} was previously saved.
                </span>
              </div>
              <div>
                <input
                  v-model="licenseInfo.otherProfessionalType"
                  v-if="showOtherProfession"
                  class="mt-2"
                  placeholder="Write Other Profession"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div
            v-if="this.displayEnglishLanguageOption || this.displayPayrollDoc"
            id="main"
            class="flex pt-8 mt-4"
          >
            <div
              v-if="this.displayEnglishLanguageOption"
              class="flex flex-col mb-medium w-2/5 mr-12 ml-medium"
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
              class="flex flex-col mb-medium w-2/5 mr-12 ml-medium"
            >
              <label class="text-primary-700">Occupation Type</label>
              <select
                class="max-w-3xl"
                @change="setPayrollDoc(licenseInfo.occupationTypeId)"
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
import { mapGetters } from "vuex";
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
      if (this.licenseInfo.applicantTypeId == 1) {
        this.fetchInstitutions(true);
      } else {
        this.fetchInstitutions(false);
      }
      this.licenseInfo.education.departmentId =
        draftData.education.departmentId;
      if (this.licenseInfo.education.departmentId != "") {
        this.showProfessionalTypes = true;
        this.fetchProfessionalType(this.licenseInfo.education.departmentId);
      }
      this.licenseInfo.education.institutionId =
        draftData.education.institutionId;
      for (var i = 0; i < draftData.professionalTypeIds.length; i++) {
        this.licenseInfo.professionalTypeIds[i] =
          draftData.professionalTypeIds[i];
      }
      this.licenseInfo.educationalLevelId = draftData.educationalLevelId;
      this.licenseInfo.nativeLanguageId = draftData.nativeLanguageId;
      this.setEducationLevel(this.licenseInfo.educationalLevelId);
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
      if (this.licenseInfo.applicantTypeId == 1) {
        this.showRegion = true;
      } else {
        this.showRegion = false;
        this.displayEnglishLanguageOption = true;
      }
      if (
        draftData.regionId != undefined ||
        draftData.regionId ||
        draftData.regionId != ""
      ) {
        this.regionID = draftData.regionId;
        this.fetchZones();
        if (draftData.zoneId != undefined || draftData.zoneId) {
          this.zoneID = draftData.zoneId;
          this.fetchWoredas();
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
    await this.fetchDepartments();
    await this.fetchRegions();
    await this.fetchEnglishSpeaker();
    await this.fetchPayrollData();
    await this.fetchEducationLevel();
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
      professionalTypeIds: [],
      nativeLanguageId: null,
      occupationTypeId: null,
      expertLevelId: null,
      educationalLevelId: null,
      otherEducationalInstitution: null,
      otherProfessionalType: null,
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
      professionalTypeIds: [],
      expertLevelId: null,
      educationalLevelId: null,
      otherEducationalInstitution: null,
      otherProfessionalType: null,
    },
    regionID: "",
    zoneID: "",

    regionArray: [],
    zoneArray: [],
    woredaArray: [],
    expertLevels: [],
    educationLevel: [],

    professionalTypes: [],

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
    educationData: [],
    showProfessionalTypes: false,

    professionalTypeRepeat: false,
    repeatedProfArray: [],

    institution: "",
    showOtherEducation: false,

    profession: "",
    showOtherProfession: false,
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

    fetchEducationLevel() {
      this.$store.dispatch("lookups/getEducationalLevel").then((res) => {
        if (res.data.status == "Success") {
          this.educationData = res.data.data;
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
    // checkExpertLevel(expertLevel) {
    //   this.regionID = null;
    //   this.zoneID = null;
    //   this.licenseInfo.residenceWoredaId = null;
    //   if (expertLevel == 4) {
    //     this.showRegion = true;
    //   } else {
    //     this.showRegion = false;
    //   }
    // },

    checkOtherEducation(institution) {
      this.licenseInfo.education.institutionId = institution.id;
      if (institution.name == "Other") {
        this.showOtherEducation = true;
      }
    },
    checkOtherProfession(profession) {
      if (profession.name == "Other") {
        this.showOtherProfession = !this.showOtherProfession;
      }
      if (!this.licenseInfo.professionalTypeIds.includes(profession.id)) {
        this.licenseInfo.professionalTypeIds.push(profession.id);
      } else {
        for (var i = 0; i < this.licenseInfo.professionalTypeIds.length; i++) {
          if (this.licenseInfo.professionalTypeIds[i] == profession.id) {
            this.licenseInfo.professionalTypeIds.splice(i, 1);
          }
        }
      }
    },
    checkApplicantType(applicantType) {
      this.regionID = null;
      this.zoneID = null;
      this.licenseInfo.residenceWoredaId = null;
      if (applicantType == 1) {
        this.fetchInstitutions(true);
        this.showRegion = true;
      } else {
        this.fetchInstitutions(false);
        this.showRegion = false;
      }
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
        window.localStorage.setItem("language", "english");
      } else {
        this.nativeEnglishSpeaker = true;
        window.localStorage.setItem("language", "non-english");
      }
    },
    setEducationLevel(educationLevelId) {
      if (educationLevelId == 1) {
        window.localStorage.setItem("educationalLevel", "diploma");
      } else if (educationLevelId == 2) {
        window.localStorage.setItem("educationalLevel", "degree");
      } else if (educationLevelId == 3) {
        window.localStorage.setItem("educationalLevel", "masters");
      } else {
        window.localStorage.setItem("educationalLevel", "phd");
      }
    },
    setPayrollDoc(id) {
      if (id == 2) {
        window.localStorage.setItem("payroll", "payroll");
      } else {
        window.localStorage.setItem("payroll", "non-payroll");
      }
    },

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
            professionalTypeIds: this.licenseInfo.professionalTypeIds,
            educationalLevelId: this.licenseInfo.educationalLevelId,
            paymentSlip: null,
            occupationTypeId: this.licenseInfo.occupationTypeId,
            nativeLanguageId: this.licenseInfo.nativeLanguageId,
            expertLevelId: this.licenseInfo.expertLevelId,
            otherEducationalInstitution: this.licenseInfo
              .otherEducationalInstitution,
            otherProfessionalType: this.licenseInfo.otherProfessionalType,
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
            professionalTypeIds: this.licenseInfo.professionalTypeIds,
            educationalLevelId: this.licenseInfo.educationalLevelId,
            paymentSlip: null,
            occupationTypeId: this.licenseInfo.occupationTypeId,
            nativeLanguageId: this.licenseInfo.nativeLanguageId,
            otherEducationalInstitution: this.licenseInfo
              .otherEducationalInstitution,
            expertLevelId: this.licenseInfo.expertLevelId,
            otherProfessionalType: this.licenseInfo.otherProfessionalType,
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
        professionalTypeIds: this.licenseInfo.professionalTypeIds,
        educationalLevelId: this.licenseInfo.educationalLevelId,
        paymentSlip: null,
        occupationTypeId: this.licenseInfo.occupationTypeId,
        nativeLanguageId: this.licenseInfo.nativeLanguageId,
        expertLevelId: this.licenseInfo.expertLevelId,
        otherProfessionalType: this.licenseInfo.otherProfessionalType,
        otherEducationalInstitution: this.licenseInfo
          .otherEducationalInstitution,
      };
      if (this.licenseInfo.educationalLevelId == null) {
        this.licenseInfo.educationalLevelId = 4;
      }
      let profTypes = {
        professionalTypeIds: this.licenseInfo.professionalTypeIds,
      };
      this.$store
        .dispatch("newlicense/searchProfessionalType", profTypes)
        .then((res) => {
          if (res.data.data.length > 0) {
            this.professionalTypeRepeat = true;
            this.repeatedProfArray = res.data.data;
          } else {
            this.$emit("changeActiveState");
            this.$emit("applicantTypeValue", this.licenseInfo.applicantTypeId);
            this.$emit("nativeLanguageSet", this.licenseInfo.nativeLanguageId);
            this.$emit("payrollDocumentSet", this.licenseInfo.occupationTypeId);
            this.$emit("diplomaSet", this.licenseInfo.educationalLevelId);
            this.$store.dispatch("newlicense/setLicense", license);
          }
        });
    },
    fetchApplicantType() {
      this.$store.dispatch("newlicense/getApplicantType").then((res) => {
        const results = res.data.data;
        this.applicantTypes = results;
      });
    },
    fetchInstitutions(value) {
      this.$store.dispatch("newlicense/getInstitution", value).then((res) => {
        const results = res.data.data;
        this.institutions = results;
        let draftData = this.getLicense;
        if (draftData.education.institutionId != null) {
          this.licenseInfo.education.institutionId =
            draftData.education.institutionId;
          for (var i = 0; i < this.institutions.length; i++) {
            if (
              this.institutions[i].id ==
              this.licenseInfo.education.institutionId
            ) {
              this.institution = this.institutions[i];
            }
          }
          if (this.institution.name == "Other") {
            this.showOtherEducation = true;
            this.licenseInfo.otherEducationalInstitution =
              draftData.otherEducationalInstitution;
          }
        }
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
    fetchProfessionalType(id) {
      this.professionalTypes = [];
      this.repeatedProfArray = "";
      this.licenseInfo.professionalTypeIds = [];
      this.showProfessionalTypes = true;
      this.$store
        .dispatch("newlicense/getProfessionalTypes", id)
        .then((res) => {
          this.professionalTypes = res.data.data;
        });
      let draftData = this.getLicense;
      if (
        draftData.otherProfessionalType != null ||
        draftData.otherProfessionalType != ""
      ) {
        this.showOtherProfession = true;
        this.licenseInfo.otherProfessionalType =
          draftData.otherProfessionalType;
      }
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
      this.licenseInfo.professionalTypeIds = draftData.professionalTypeIds;
      this.payrollData = draftData.occupationTypes;
      this.licenseInfo.expertLevelId = draftData.expertLevelId;
      this.licenseInfo.educationalLevelId = draftData.educationalLevelId;
      this.setEducationLevel(this.licenseInfo.educationalLevelId);
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
