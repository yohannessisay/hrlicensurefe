<template>
  <div class="flex justify-center items">
    <div class="bg-lightBlueB-200 w-screen h-screen max-w-4xl">
      <div
        class="
          flex flex-col
          pt-small
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
            <!-- applican type -->
            <div class="flex flex-col mb-small pt-8 w-2/5 ml-medium mr-12">
              <label class="text-primary-700">Applicant Type</label>
              <select
                class="max-w-3xl"
                @change="applicantTypeChangeHandler()"
                v-model="generalInfo.applicantTypeSelected"
                required
              >
                <option
                  v-for="applicant in applicantTypes"
                  v-bind:key="applicant.name"
                  v-bind:value="applicant"
                >
                  {{ applicant.name }}
                </option>
              </select>
            </div>
            <div class="flex flex-col mb-small pt-8 w-2/5 mr-12"></div>
          </div>
          <!-- region -->
          <div v-if="showLocation" id="main" class="pt-8 mt-4">
            <div class="flex">
              <div class="flex flex-col mb-medium w-2/5 ml-medium mr-12">
                <label class="text-primary-700">Region</label>
                <select
                  class="max-w-3xl"
                  v-model="generalInfo.regionSelected"
                  @change="regionChangeHandler()"
                  required
                >
                  <option
                    v-for="region in regions"
                    v-bind:key="region.name"
                    v-bind:value="region"
                  >
                    {{ region.name }}
                  </option>
                </select>
              </div>
              <div class="flex flex-col mb-medium w-2/5 mr-12">
                <label class="text-primary-700">Zone</label>
                <select
                  class="max-w-3xl"
                  @change="zoneChangeHandler()"
                  v-model="generalInfo.zoneSelected"
                >
                  <option
                    v-for="zone in zones"
                    v-bind:key="zone.name"
                    v-bind:value="zone"
                  >
                    {{ zone.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="flex">
              <div class="flex flex-col mb-medium w-2/5 ml-medium mr-12">
                <label class="text-primary-700">Woreda</label>
                <select class="max-w-3xl" v-model="generalInfo.woredaSelected" required>
                  <option
                    v-for="woreda in woredas"
                    v-bind:key="woreda.name"
                    v-bind:value="woreda"
                  >
                    {{ woreda.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <!-- end -->

          <!-- language -->
          <div
            v-if="showLanguage || showOccupation"
            id="main"
            class="flex pt-8 mt-4"
          >
            <div
              v-if="showLanguage"
              class="flex flex-col mb-medium w-2/5 mr-12 ml-medium"
            >
              <label class="text-primary-700">English Language</label>
              <select class="max-w-3xl" v-model="generalInfo.languageSelected">
                <option
                  v-for="language in languages"
                  v-bind:key="language.name"
                  v-bind:value="language"
                >
                  {{ language.name }}
                </option>
              </select>
            </div>
            <div
              v-if="showOccupation"
              class="flex flex-col mb-medium w-2/5 mr-12 ml-medium"
            >
              <label class="text-primary-700">Occupation Type</label>
              <select
                class="max-w-3xl"
                @change="setPayrollDoc(licenseInfo.occupationTypeId)"
                v-model="generalInfo.occupationSelected"
              >
                <option
                  v-for="occupation in occupations"
                  v-bind:key="occupation.name"
                  v-bind:value="occupation"
                >
                  {{ occupation.name }}
                </option>
              </select>
            </div>
          </div>

          <!-- end -->

          <!-- educational institution and department -->
          <div id="main">
            <div class="flex  mt-4 pt-8">
              <div class="flex flex-col mb-medium w-2/5 ml-medium mr-12">
                <label class="text-primary-700">Department</label>
                <select
                  class="max-w-3xl"
                  v-model="generalInfo.departmentSelected"
                  @change="departmentChange()"
                >
                  <option
                    v-for="department in departments"
                    v-bind:key="department.name"
                    v-bind:value="department"
                  >
                    {{ department.name }}
                  </option>
                </select>
                <!-- <span
                v-if="licenseInfoErrors.departmentId !== null"
                style="color: red"
                >{{ licenseInfoErrors.departmentId }}</span
              > -->
              </div>
              <div class="flex flex-col mb-medium w-2/5 ml-medium mr-12">
                <label class="text-primary-700">Educational Institution</label>
                <select
                  v-model="generalInfo.institutionSelected"
                  @change="institutionChange(institution)"
                >
                  <option
                    v-for="institution in institutions"
                    v-bind:key="institution.name"
                    v-bind:value="institution"
                  >
                    {{ institution.name }}
                  </option>
                </select>
                <!-- <span
                v-if="licenseInfoErrors.institutionId !== null"
                style="color: red"
                >{{ licenseInfoErrors.institutionId }}</span
              > -->
                <input
                  v-model="generalInfo.otherEducationalInstitution"
                  v-if="showOtherEducation"
                  class="mt-2"
                  placeholder="Write Educational Institution"
                  type="text"
                />
              </div>
            </div>
            <div class="flex mt-2 pt-2">
              <div class="flex flex-col mb-medium w-2/5 ml-medium mr-12">
                <label class="text-primary-700">Professional Types</label>
                <select
                  v-model="generalInfo.professionalTypeSelected"
                  @change="ProfessionTypeChange(institution)"
                >
                  <option
                    v-for="pf in professionalTypes"
                    v-bind:key="pf.name"
                    v-bind:value="pf"
                  >
                    {{ pf.name }}
                  </option>
                </select>
                <!-- <span
                 v-if="licenseInfoErrors.institutionId !== null"
                 style="color: red"
                 >{{ licenseInfoErrors.institutionId }}</span
               > -->
                <input
                  v-model="generalInfo.otherProfessionalType"
                  v-if="showOtherProfession"
                  class="mt-2"
                  placeholder="Write Educational Institution"
                  type="text"
                />
                <input
                  v-model="generalInfo.otherProfessionalTypeAmharic"
                  v-if="showOtherProfession"
                  class="mt-2"
                  placeholder="Write Educational Institution In Amharic"
                  type="text"
                />
              </div>
              <div class="flex flex-col mb-medium w-2/5 mr-12 ml-medium">
                <label class="text-primary-700">Education Level </label>
                <select class="max-w-3xl" v-model="generalInfo.educationalLevelSelected">
                  <option
                    v-for="educationalLevel in educationalLevels"
                    v-bind:key="educationalLevel.name"
                    v-bind:value="educationalLevel"
                  >
                    {{ educationalLevel.name }}
                  </option>
                </select>
                <!-- <span
                v-if="licenseInfoErrors.educationalLevelId !== null"
                style="color: red"
                >{{ licenseInfoErrors.educationalLevelId }}</span
              > -->
              </div>
            </div>
            <span v-if="multipleDepartmentError" style="color: red"
              >Please fill all fields</span
            >
            <span v-if="multipleDepartmentMaxError" style="color: red"
              >Only three departments can be selected</span
            >
            <button class="float-right btn-sm mb-5" @click="addMultiple()">
              Add
            </button>
          </div>
          <div v-if="generalInfo.multipleDepartment.length > 0" class="table-multiple">
            <table class=" h-full">
              <thead>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Department
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Education Level
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Institution
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Professional Type
                </th>
              </thead>
              <tbody class="">
                <tr v-for="(item, index) in generalInfo.multipleDepartment">
                  <td class="px-2 py-3 border-gray-200 bg-white text-sm">
                    <div class="flex">
                      <div class="ml-3">
                        <p class="text-gray-900 ">
                          {{ item.department.name }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-2 py-3 border-gray-200 bg-white text-sm">
                    <div class="flex">
                      <div class="ml-3">
                        <p class="text-gray-900 ">
                          {{ item.educationalLevel.name }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-2 py-3 border-gray-200 bg-white text-sm">
                    <div class="flex">
                      <div class="ml-3">
                        <p class="text-gray-900 ">
                          {{ item.institution.name }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-2 py-3 border-gray-200 bg-white text-sm">
                    <div class="flex">
                      <div class="ml-3">
                        <p class="text-gray-900 ">
                          {{ item.professionalType.name }}
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            class="float-right"
            v-if="generalInfo.multipleDepartment.length > 0"
            type="submit"
            @click="apply()"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
import { mapGetters, useStore } from "vuex";
import FlashMessage from "@/sharedComponents/FlashMessage";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import Spinner from "@/sharedComponents/Spinner";
import { ref, onMounted } from "vue";
export default {
  props: ["activeState"],
  components: {
    TitleWithIllustration,
    FlashMessage,
    ErrorFlashMessage,
    Spinner,
  },

  setup(props, { emit }) {
    let applicantTypes = ref("");
    let applicantTypeSelected = ref("");
    let departments = ref([]);
    let institutions = ref([]);
    let educationalLevels = ref([]);
    let educationalLevelSelected = ref({});
    let professionalTypes = ref([]);
    let regions = ref("");
    let woredas = ref("");
    let zones = ref("");
    let store = useStore();
    let showLocation = ref(false);
    let regionSelected = ref({});
    let zoneSelected = ref({});
    let woredaSelected = ref({});
    let showOccupation = ref(false);
    let showLanguage = ref(false);
    let languageSelected = ref({});
    let occupationSelected = ref({});
    let occupations = ref([]);
    let languages = ref([]);
    let departmentSelected = ref({});
    let professionalTypeSelected = ref({});
    let otherEducationalInstitution = ref("");
    let showOtherEducation = ref(false);
    let institutionSelected = ref({});
    let otherProfessionalTypeAmharic = ref("");
    let otherProfessionalType = ref("");
    let showOtherProfession = ref(false);
    let multipleDepartment = ref([]);
    let multipleDepartmentError = ref(false);
    let multipleDepartmentMaxError = ref(false);
    let generalInfo = ref({
      educationalLevelSelected: "",
      applicantTypeSelected: "",
      regionSelected: "",
      zoneSelected: "",
      woredaSelected: "",
      languageSelected: "",
      occupationSelected: "",
      departmentSelected: "",
      professionalTypeSelected: "",
      institutionSelected: "",
      otherEducationalInstitution: "",
      otherProfessionalTypeAmharic: "",
      otherProfessionalType: "",
      multipleDepartment: [],
    });
    const fetchApplicantType = () => {
      store.dispatch("newlicense/getApplicantType").then((res) => {
        const results = res.data.data;
        applicantTypes.value = results;
      });
    };
    const fetchEducationLevel = () => {
      store.dispatch("lookups/getEducationalLevel").then((res) => {
        educationalLevels.value = res.data.data;
      });
    };
    const fetchInstitutions = (value) => {
      store.dispatch("newlicense/getInstitution", value).then((res) => {
        const institution = res.data.data;
        institutions.value = institution;
      });
    };
    const fetchDepartments = () => {
      store.dispatch("newlicense/getDepartmentType").then((res) => {
        const department = res.data.data;
        departments.value = department;
      });
    };
    const fetchRegions = () => {
      store.dispatch("newlicense/getRegions").then((res) => {
        const regionsResult = res.data.data;
        regions.value = regionsResult;
      });
    };

    const fetchZones = () => {
      store
        .dispatch("newlicense/getZones", generalInfo.value.regionSelected.id)
        .then((res) => {
          const zonesResult = res.data.data;
          zones.value = zonesResult;
        });
    };

    const fetchWoredas = () => {
      store
        .dispatch("newlicense/getWoredas", generalInfo.value.zoneSelected.id)
        .then((res) => {
          const woredasResult = res.data.data;
          woredas.value = woredasResult;
        });
    };
    const fetchProfessionalType = (id) => {
      store.dispatch("newlicense/getProfessionalTypes", id).then((res) => {
        professionalTypes.value = res.data.data;
      });
    };
    const applicantTypeChangeHandler = async () => {
      if (generalInfo.value.applicantTypeSelected.code == "ETH") {
        showLocation.value = true;
        showOccupation.value = true;
        await fetchInstitutions(true);
      } else {
        showLocation.value = false;
        showOccupation.value = false;
        await fetchInstitutions(false);
      }
      if (generalInfo.value.applicantTypeSelected.code == "FOR") {
        await fetchLanguages();
        showLanguage.value = true;
      } else {
        showLanguage.value = false;
      }
    };
    const regionChangeHandler = () => {
      fetchZones();
    };
    const zoneChangeHandler = () => {
      fetchWoredas();
    };
    const fetchLanguages = () => {
      store.dispatch("lookups/getNativeLanguage").then((res) => {
        if (res.data.status == "Success") {
          languages.value = res.data.data;
        }
      });
    };
    const departmentChange = () => {
      fetchProfessionalType(generalInfo.value.departmentSelected.id);
    };
    const institutionChange = () => {
      if (generalInfo.value.institutionSelected.code == "OTH") {
        showOtherEducation.value = true;
      } else {
        showOtherEducation.value = false;
      }
    };
    const ProfessionTypeChange = () => {
      if (generalInfo.value.professionalTypeSelected.code == "OTH") {
        showOtherProfession.value = true;
      } else {
        showOtherProfession.value = false;
      }
    };
    const addMultiple = () => {
      if (
       generalInfo.value.departmentSelected?.name &&
       generalInfo.value.educationalLevelSelected?.name &&
        generalInfo.value.institutionSelected?.name &&
        generalInfo.value.professionalTypeSelected?.name
      ) {
        if (generalInfo.value.multipleDepartment.length > 3) {
          multipleDepartmentMaxError.value = true;
        } else {
          multipleDepartmentMaxError.value = false;
          multipleDepartmentError.value = false;
          generalInfo.value.multipleDepartment.push({
            department: generalInfo.value.departmentSelected,
            educationalLevel: generalInfo.value.educationalLevelSelected,
            institution: generalInfo.value.institutionSelected,
            professionalType: generalInfo.value.professionalTypeSelected,
          });
          generalInfo.value.departmentSelected = "";
          generalInfo.value.educationalLevelSelected = "";
          generalInfo.value.institutionSelected = "";
          generalInfo.value.professionalTypeSelected = "";
        }
      } else {
        multipleDepartmentError.value = true;
      }
    };
    const apply = () => {
      store.dispatch('newlicense/setGeneralInfo', generalInfo.value).then( ()=>
      {
      emit("changeActiveState");

      })
    };
    onMounted(async () => {
      await fetchApplicantType();
      await fetchDepartments();
      await fetchInstitutions();
      await fetchEducationLevel();
      await fetchRegions();
    });
    return {
      applicantTypeChangeHandler,
      regionChangeHandler,
      zoneChangeHandler,
      departmentChange,
      institutionChange,
      ProfessionTypeChange,
      addMultiple,
      apply,
      applicantTypeSelected,
      showLocation,
      woredaSelected,
      zoneSelected,
      regionSelected,
      departments,
      institutions,
      educationalLevels,
      applicantTypes,
      regions,
      woredas,
      zones,
      professionalTypes,
      showOccupation,
      showLanguage,
      languageSelected,
      occupationSelected,
      languages,
      occupations,
      departmentSelected,
      professionalTypeSelected,
      otherEducationalInstitution,
      showOtherEducation,
      institutionSelected,
      showOtherProfession,
      otherProfessionalType,
      otherProfessionalTypeAmharic,
      educationalLevelSelected,
      multipleDepartment,
      multipleDepartmentError,
      multipleDepartmentMaxError,
      generalInfo
    };
  },
};

//   async created() {
//     this.draftStatus = this.$route.params.status;
//     await this.fetchApplicantType();
//     await this.fetchDepartments();
//     await this.fetchRegions();
//     await this.fetchEnglishSpeaker();
//     await this.fetchPayrollData();
//     await this.fetchEducationLevel();
//     this.showLoading = true;
//     setTimeout(() => {
//       this.buttons = this.getButtons;
//       console.log(this.buttons);
//       this.showButtons = true;
//       this.showLoading = false;
//     }, 5000);
//     console.table(this.buttons);
//     if (this.getLicense && Object.keys(this.getLicense).length != 0) {
//       let draftData = this.getLicense;
//       this.licenseInfo.applicantId = draftData.applicantId;
//       this.licenseInfo.applicantTypeId = draftData.applicantTypeId;
//       this.licenseInfo.education.departmentId =
//         draftData.education.departmentId;
//       if (this.licenseInfo.applicantTypeId == 1) {
//         this.fetchInstitutions(true);
//       } else {
//         this.fetchInstitutions(false);
//       }
//       this.licenseInfo.education.institutionId =
//         draftData.education.institutionId;
//       this.licenseInfo.educationalLevelId = draftData.educationalLevelId;
//       this.licenseInfo.nativeLanguageId = draftData.nativeLanguageId;
//       this.setEducationLevel(this.licenseInfo.educationalLevelId);
//       this.licenseInfo.expertLevelId = draftData.expertLevelId;
//       if (this.licenseInfo.applicantTypeId == 1) {
//         this.$store.dispatch("newlicense/getExpertLevel").then((res) => {
//           this.expertLevels = res.data.data.filter(function(e) {
//             return e.code.includes("REG");
//           });
//         });
//       } else {
//         this.$store.dispatch("newlicense/getExpertLevel").then((res) => {
//           this.expertLevels = res.data.data.filter(function(e) {
//             return e.code.includes("FED");
//           });
//         });
//       }
//       if (this.licenseInfo.applicantTypeId == 1) {
//         this.showRegion = true;
//       } else {
//         this.showRegion = false;
//         this.displayEnglishLanguageOption = true;
//       }
//       if (
//         draftData.regionId != undefined ||
//         draftData.regionId ||
//         draftData.regionId != ""
//       ) {
//         this.regionID = draftData.regionId;
//         this.fetchZones();
//         if (draftData.zoneId != undefined || draftData.zoneId) {
//           this.zoneID = draftData.zoneId;
//           this.fetchWoredas();
//           if (
//             draftData.residenceWoredaId != undefined ||
//             draftData.residenceWoredaId
//           ) {
//             this.licenseInfo.residenceWoredaId = draftData.residenceWoredaId;
//           }
//         }
//       }
//       if (this.licenseInfo.education.departmentId != "") {
//         this.showProfessionalTypes = true;
//         await this.fetchProfessionalType(
//           this.licenseInfo.education.departmentId
//         );
//         for (var j = 0; j < this.professionalTypes.length; j++) {
//           for (var i = 0; i < draftData.professionalTypeIds.length; i++) {
//             if (
//               this.professionalTypes[j].id == draftData.professionalTypeIds[i]
//             ) {
//               this.professionalTypes[j].checked = true;
//             }
//           }
//         }
//         for (var k = 0; k < draftData.professionalTypeIds.length; k++) {
//           this.licenseInfo.professionalTypeIds.push(
//             draftData.professionalTypeIds[k]
//           );
//         }
//       }
//       if (
//         draftData.otherProfessionalType != null ||
//         draftData.otherProfessionalType != ""
//       ) {
//         this.showOtherProfession = true;
//         this.licenseInfo.otherProfessionalType =
//           draftData.otherProfessionalType;
//       }
//     } else if (this.$route.params.id != undefined) {
//       this.draftId = this.$route.params.id;
//       if (this.draftId != undefined || this.draftStatus) {
//         setTimeout(() => {
//           this.fetchDraft();
//         }, 6500);
//       }
//     } else {
//     }
//   },
//   computed: {
//     ...mapGetters({
//       getButtons: "newlicense/getButtons",
//       getDraft: "newlicense/getDraft",
//       getLicense: "newlicense/getLicense",
//     }),
//   },
//   data: () => ({
//     licenseInfo: {
//       applicantId: +localStorage.getItem("userId"),
//       applicantTypeId: null,
//       education: {
//         departmentId: null,
//         institutionId: null,
//         id: null,
//       },
//       residenceWoredaId: null,
//       professionalTypeIds: [],
//       nativeLanguageId: null,
//       occupationTypeId: null,
//       expertLevelId: null,
//       educationalLevelId: null,
//       otherEducationalInstitution: null,
//       otherProfessionalType: null,
//       otherProfessionalTypeAmharic: null,
//       applicationStatusId: null,
//     },
//     licenseInfoErrors: {
//       applicantTypeId: null,
//       departmentId: null,
//       institutionId: null,
//       educationalLevelId: null,
//     },
//     regionID: "",
//     zoneID: "",

//     regionArray: [],
//     zoneArray: [],
//     woredaArray: [],
//     expertLevels: [],
//     educationLevel: [],

//     professionalTypes: [],

//     applicantTypes: [],
//     institutions: [],
//     departments: [],
//     buttons: [],
//     showButtons: false,
//     showFlash: false,
//     showErrorFlash: false,
//     showLoading: false,
//     showRegion: false,

//     displayEnglishLanguageOption: false,
//     displayPayrollDoc: false,

//     nativeEnglishSpeaker: false,
//     payrollDocType: false,

//     englishData: "",
//     payrollData: "",
//     educationData: [],
//     showProfessionalTypes: false,

//     professionalTypeRepeat: false,
//     professionalTypeLimit: false,
//     repeatedProfArray: [],

//     institution: "",
//     showOtherEducation: false,

//     profession: "",
//     showOtherProfession: false,
//     checkedProfessionalTypes: [],
//   }),

//   methods: {
//     fetchEnglishSpeaker() {
//       this.$store.dispatch("lookups/getNativeLanguage").then((res) => {
//         if (res.data.status == "Success") {
//           this.englishData = res.data;
//         } else {
//         }
//       });
//     },

//     fetchEducationLevel() {
//       this.$store.dispatch("lookups/getEducationalLevel").then((res) => {
//         if (res.data.status == "Success") {
//           this.educationData = res.data.data;
//         }
//       });
//     },
//     fetchPayrollData() {
//       this.$store.dispatch("lookups/getGovernment").then((res) => {
//         if (res.data.status == "Success") {
//           this.payrollData = res.data;
//         } else {
//         }
//       });
//     },
//     checkOtherEducation(institution) {
//       this.licenseInfo.education.institutionId = institution.id;
//       if (institution.name == "Other") {
//         this.showOtherEducation = true;
//       } else {
//         this.showOtherEducation = false;
//       }
//     },
//     checkOtherProfession(profession, event) {
//       this.professionalTypeRepeat = false;
//       if (!event.target.checked) {
//         for (var i = 0; i < this.licenseInfo.professionalTypeIds.length; i++) {
//           if (this.licenseInfo.professionalTypeIds[i] == profession.id) {
//             this.licenseInfo.professionalTypeIds.splice(i, 1);
//           }
//         }
//         if (profession.name == "Other") {
//           this.showOtherProfession = false;
//         }
//       } else if (this.licenseInfo.professionalTypeIds.length + 1 > 3) {
//         this.professionalTypeLimit = true;
//         event.target.checked = false;
//         for (var i = 0; i < this.licenseInfo.professionalTypeIds.length; i++) {
//           if (this.licenseInfo.professionalTypeIds[i] == profession.id) {
//             this.licenseInfo.professionalTypeIds.splice(i, 1);
//           }
//         }
//       } else {
//         this.professionalTypeLimit = false;
//         this.repeatedProfArray = [];
//         if (profession.name == "Other") {
//           this.showOtherProfession = true;
//         }
//         if (!this.licenseInfo.professionalTypeIds.includes(profession.id)) {
//           this.licenseInfo.professionalTypeIds.push(profession.id);
//         } else {
//           for (
//             var i = 0;
//             i < this.licenseInfo.professionalTypeIds.length;
//             i++
//           ) {
//             if (this.licenseInfo.professionalTypeIds[i] == profession.id) {
//               this.licenseInfo.professionalTypeIds.splice(i, 1);
//             }
//           }
//         }
//       }
//     },
//     checkApplicantType(applicantType) {
//       this.regionID = null;
//       this.zoneID = null;
//       this.licenseInfo.residenceWoredaId = null;
//       if (applicantType == 1) {
//         this.licenseInfo.expertLevelId = 4;
//         this.fetchInstitutions(true);
//         this.showRegion = true;
//       } else {
//         this.licenseInfo.expertLevelId = 3;
//         this.fetchInstitutions(false);
//         this.showRegion = false;
//       }
//       if (applicantType == 1) {
//         this.$store.dispatch("newlicense/getExpertLevel").then((res) => {
//           this.expertLevels = res.data.data.filter(function(e) {
//             return e.code.includes("REG");
//           });
//         });
//       } else {
//         this.$store.dispatch("newlicense/getExpertLevel").then((res) => {
//           this.expertLevels = res.data.data.filter(function(e) {
//             return e.code.includes("FED");
//           });
//         });
//       }
//       if (applicantType == 1) {
//         this.displayPayrollDoc = true;
//       } else {
//         this.displayPayrollDoc = false;
//       }
//       if (applicantType == 2) {
//         this.displayEnglishLanguageOption = true;
//       } else {
//         this.displayEnglishLanguageOption = false;
//       }
//     },
//     setEnglishLanguage() {
//       if (this.languageID == 1) {
//         this.nativeEnglishSpeaker = false;
//         window.localStorage.setItem("language", "english");
//       } else {
//         this.nativeEnglishSpeaker = true;
//         window.localStorage.setItem("language", "non-english");
//       }
//     },
//     setEducationLevel(educationLevelId) {
//       if (educationLevelId == 1) {
//         window.localStorage.setItem("educationalLevel", "diploma");
//       } else if (educationLevelId == 2) {
//         window.localStorage.setItem("educationalLevel", "degree");
//       } else if (educationLevelId == 3) {
//         window.localStorage.setItem("educationalLevel", "masters");
//       } else {
//         window.localStorage.setItem("educationalLevel", "phd");
//       }
//     },
//     setPayrollDoc(id) {
//       if (id == 2) {
//         window.localStorage.setItem("payroll", "payroll");
//       } else {
//         window.localStorage.setItem("payroll", "non-payroll");
//       }
//     },

//     draft(action) {
//       this.licenseInfoErrors = this.validateForm(this.licenseInfo);
//       if (
//         this.licenseInfoErrors &&
//         Object.keys(this.licenseInfoErrors).length === 0 &&
//         Object.getPrototypeOf(this.licenseInfoErrors) === Object.prototype
//       ) {
//         this.showLoading = true;
//         if (this.licenseInfo.professionalTypeIds.length <= 0) {
//           this.licenseInfo.professionalTypeIds = [null];
//         }
//         let license = {
//           data: {
//             action: action,
//             data: {
//               applicantId: this.licenseInfo.applicantId,
//               applicantTypeId: this.licenseInfo.applicantTypeId,
//               education: {
//                 departmentId: this.licenseInfo.education.departmentId,
//                 institutionId: this.licenseInfo.education.institutionId,
//                 id: this.licenseInfo.education.id,
//               },
//               residenceWoredaId: this.licenseInfo.residenceWoredaId,
//               professionalTypeIds: this.licenseInfo.professionalTypeIds,
//               educationalLevelId: this.licenseInfo.educationalLevelId,
//               paymentSlip: null,
//               occupationTypeId: this.licenseInfo.occupationTypeId,
//               nativeLanguageId: this.licenseInfo.nativeLanguageId,
//               expertLevelId: this.licenseInfo.expertLevelId,
//               otherEducationalInstitution: this.licenseInfo
//                 .otherEducationalInstitution,
//               otherProfessionalType: this.licenseInfo.otherProfessionalType,
//               otherProfessionalTypeAmharic: this.licenseInfo
//                 .otherProfessionalTypeAmharic,
//               applicationStatusId: this.licenseInfo.applicationStatusId,
//             },
//           },
//           id: this.draftId,
//         };
//         if (this.draftId != undefined) {
//           this.$store
//             .dispatch("newlicense/editNewLicense", license)
//             .then((res) => {
//               if (res.data.status == "Success") {
//                 this.showFlash = true;
//                 this.showLoading = false;
//                 setTimeout(() => {
//                   this.$router.push({ path: "/menu" });
//                 }, 1500);
//               } else {
//                 this.showErrorFlash = true;
//               }
//             });
//         } else {
//           this.$store
//             .dispatch("newlicense/addNewLicense", license.data)
//             .then((res) => {
//               if (res.data.status == "Success") {
//                 this.showFlash = true;
//                 this.showLoading = false;
//                 setTimeout(() => {}, 1500);
//                 this.$router.push({ path: "/menu" });
//               }
//             });
//         }
//       }
//     },
//     update(action) {
//       this.showLoading = true;
//       let license = {
//         data: {
//           action: action,
//           data: {
//             applicantId: this.licenseInfo.applicantId,
//             applicantTypeId: this.licenseInfo.applicantTypeId,
//             education: {
//               departmentId: this.licenseInfo.education.departmentId,
//               institutionId: this.licenseInfo.education.institutionId,
//               id: this.licenseInfo.education.id,
//             },
//             residenceWoredaId: this.licenseInfo.residenceWoredaId,
//             professionalTypeIds: this.licenseInfo.professionalTypeIds,
//             educationalLevelId: this.licenseInfo.educationalLevelId,
//             paymentSlip: null,
//             occupationTypeId: this.licenseInfo.occupationTypeId,
//             nativeLanguageId: this.licenseInfo.nativeLanguageId,
//             otherEducationalInstitution: this.licenseInfo
//               .otherEducationalInstitution,
//             expertLevelId: this.licenseInfo.expertLevelId,
//             otherProfessionalType: this.licenseInfo.otherProfessionalType,
//             otherProfessionalTypeAmharic: this.licenseInfo
//               .otherProfessionalTypeAmharic,
//             applicationStatusId: this.licenseInfo.applicationStatusId,
//           },
//         },
//         id: this.draftId,
//       };

//       if (this.draftId != undefined) {
//         this.$store
//           .dispatch("newlicense/editNewLicense", license)
//           .then((res) => {
//             if (res.data.status == "Success") {
//               this.showFlash = true;
//               this.showLoading = false;
//               setTimeout(() => {}, 1500);
//               this.$router.push({ path: "/menu" });
//             } else {
//               this.showErrorFlash = true;
//             }
//           });
//       } else {
//         this.$store
//           .dispatch("newlicense/addNewLicense", license.data)
//           .then((res) => {
//             if (res.data.status == "Success") {
//               this.showFlash = true;
//               this.showLoading = false;
//               setTimeout(() => {}, 1500);
//               this.$router.push({ path: "/menu" });
//             }
//           });
//       }
//     },
//     withdraw(action) {
//       this.showLoading = true;
//       let withdrawObj = {
//         action: action,
//         data: this.getDraft,
//       };
//       let payload = {
//         licenseId: this.getDraft.id,
//         withdrawData: withdrawObj,
//       };
//       this.$store.dispatch("newlicense/withdraw", payload).then((res) => {
//         if (res.data.status == "Success") {
//           this.showFlash = true;
//           this.showLoading = false;
//           setTimeout(() => {
//             this.$router.push({ path: "/menu" });
//           }, 1500);
//         } else {
//           this.showErrorFlash = true;
//         }
//       });
//     },
//     submit() {
//       this.licenseInfoErrors = this.validateForm(this.licenseInfo);

//       if (
//         this.licenseInfoErrors &&
//         Object.keys(this.licenseInfoErrors).length === 0 &&
//         Object.getPrototypeOf(this.licenseInfoErrors) === Object.prototype
//       ) {
//         let license = {
//           applicantId: this.licenseInfo.applicantId,
//           applicantTypeId: this.licenseInfo.applicantTypeId,
//           education: {
//             departmentId: this.licenseInfo.education.departmentId,
//             institutionId: this.licenseInfo.education.institutionId,
//             id: this.licenseInfo.education.id,
//           },
//           regionId: this.regionID,
//           zoneId: this.zoneID,
//           residenceWoredaId: this.licenseInfo.residenceWoredaId,
//           professionalTypeIds: this.licenseInfo.professionalTypeIds,
//           educationalLevelId: this.licenseInfo.educationalLevelId,
//           paymentSlip: null,
//           occupationTypeId: this.licenseInfo.occupationTypeId,
//           nativeLanguageId: this.licenseInfo.nativeLanguageId,
//           expertLevelId: this.licenseInfo.expertLevelId,
//           otherEducationalInstitution: this.licenseInfo
//             .otherEducationalInstitution,
//           otherProfessionalType: this.licenseInfo.otherProfessionalType,
//           otherProfessionalTypeAmharic: this.licenseInfo
//             .otherProfessionalTypeAmharic,
//           applicationStatusId: this.licenseInfo.applicationStatusId,
//         };

//         let profTypes = {
//           professionalTypeIds: this.licenseInfo.professionalTypeIds,
//         };
//         if (this.$route.params.status == undefined) {
//           this.$store
//             .dispatch("newlicense/searchProfessionalType", profTypes)
//             .then((res) => {
//               if (res.data.data.length > 0) {
//                 this.professionalTypeRepeat = true;
//                 this.repeatedProfArray = res.data.data;
//               } else {
//                 this.$emit("changeActiveState");
//                 this.$emit(
//                   "applicantTypeValue",
//                   this.licenseInfo.applicantTypeId
//                 );
//                 this.$emit(
//                   "nativeLanguageSet",
//                   this.licenseInfo.nativeLanguageId
//                 );
//                 this.$emit(
//                   "payrollDocumentSet",
//                   this.licenseInfo.occupationTypeId
//                 );
//                 this.$emit("diplomaSet", this.licenseInfo.educationalLevelId);
//                 localStorage.setItem(
//                   "applicantTypeId",
//                   this.licenseInfo.applicantTypeId
//                 );
//                 this.$store.dispatch("newlicense/setLicense", license);
//               }
//             });
//         } else {
//           this.$emit("changeActiveState");
//           this.$emit("applicantTypeValue", this.licenseInfo.applicantTypeId);
//           this.$emit("nativeLanguageSet", this.licenseInfo.nativeLanguageId);
//           this.$emit("payrollDocumentSet", this.licenseInfo.occupationTypeId);
//           this.$emit("diplomaSet", this.licenseInfo.educationalLevelId);
//           localStorage.setItem(
//             "applicantTypeId",
//             this.licenseInfo.applicantTypeId
//           );
//           this.$store.dispatch("newlicense/setLicense", license);
//         }
//       }
//     },
//     fetchApplicantType() {
//       this.$store.dispatch("newlicense/getApplicantType").then((res) => {
//         const results = res.data.data;
//         this.applicantTypes = results;
//       });
//     },
//     fetchInstitutions(value) {
//       this.$store.dispatch("newlicense/getInstitution", value).then((res) => {
//         const results = res.data.data;
//         this.institutions = results;
//         if (this.getLicense && Object.keys(this.getLicense).length != 0) {
//           let draftData = this.getLicense;
//           if (draftData.education.institutionId != null) {
//             this.licenseInfo.education.institutionId =
//               draftData.education.institutionId;
//             for (var i = 0; i < this.institutions.length; i++) {
//               if (
//                 this.institutions[i].id ==
//                 this.licenseInfo.education.institutionId
//               ) {
//                 this.institution = this.institutions[i];
//               }
//             }
//             if (this.institution.name == "Other") {
//               this.showOtherEducation = true;
//               this.licenseInfo.otherEducationalInstitution =
//                 draftData.otherEducationalInstitution;
//             }
//           }
//         } else {
//           let draftData = this.getDraft;
//           if (draftData?.education?.institutionId != null) {
//             this.licenseInfo.education.institutionId =
//               draftData.education.institutionId;
//             for (var i = 0; i < this.institutions.length; i++) {
//               if (
//                 this.institutions[i].id ==
//                 this.licenseInfo.education.institutionId
//               ) {
//                 this.institution = this.institutions[i];
//               }
//             }
//             if (this.institution.name == "Other") {
//               this.showOtherEducation = true;
//               this.licenseInfo.otherEducationalInstitution =
//                 draftData.otherEducationalInstitution;
//             }
//           }
//         }
//       });
//     },
//     fetchDepartments() {
//       this.$store.dispatch("newlicense/getDepartmentType").then((res) => {
//         const results = res.data.data;
//         this.departments = results;
//       });
//     },
//     fetchRegions() {
//       this.$store.dispatch("newlicense/getRegions").then((res) => {
//         const regionsResult = res.data;
//         this.regionArray = regionsResult.data;
//       });
//     },

//     fetchZones() {
//       this.$store.dispatch("newlicense/getZones", this.regionID).then((res) => {
//         const zonesResult = res.data;
//         this.zoneArray = zonesResult.data;
//       });
//     },

//     fetchWoredas() {
//       this.$store.dispatch("newlicense/getWoredas", this.zoneID).then((res) => {
//         const woredasResult = res.data;
//         this.woredaArray = woredasResult.data;
//       });
//     },
//     async fetchProfessionalType(id) {
//       this.professionalTypes = [];
//       this.repeatedProfArray = "";
//       this.licenseInfo.professionalTypeIds = [];
//       this.showProfessionalTypes = true;
//       await this.$store
//         .dispatch("newlicense/getProfessionalTypes", id)
//         .then((res) => {
//           this.professionalTypes = res.data.data;
//         });
//       // if (this.getLicense && Object.keys(this.getLicense).length != 0) {
//       //   let draftData = this.getLicense;
//       // } else {
//       //   let draftData = this.getDraft;
//       // }
//     },
//     woredaChanged() {},
//     validateForm(formData) {
//       const errors = {};
//       if (formData.applicantTypeId == null) {
//         errors.applicantTypeId = "Applicant Type Required";
//       }
//       if (formData.education.departmentId == null) {
//         errors.departmentId = "Department Required";
//       }
//       if (formData.education.institutionId == null) {
//         errors.institutionId = "Institution Required";
//       }
//       if (formData.educationalLevelId == null) {
//         errors.educationalLevelId = "Education Level Required";
//       }
//       return errors;
//     },

//     isEmpty(obj) {
//       for (var prop in obj) {
//         if (obj.hasOwnProperty(prop)) {
//           return false;
//         }
//       }

//       return true;
//     },
//     async fetchDraft() {
//       let draftData = this.getDraft;

//       this.licenseInfo.applicantId = draftData.applicantId;
//       this.licenseInfo.applicantTypeId = draftData.applicantTypeId;
//       if (this.licenseInfo.applicantTypeId == 1) {
//         this.fetchInstitutions(true);
//       } else {
//         this.fetchInstitutions(false);
//       }
//       this.licenseInfo.education.institutionId =
//         draftData.education.institutionId;
//       this.payrollData = draftData.occupationTypes;
//       this.licenseInfo.expertLevelId = draftData.expertLevelId;
//       this.licenseInfo.educationalLevelId = draftData.educationalLevelId;
//       this.licenseInfo.education.departmentId =
//         draftData.education.departmentId;
//       this.licenseInfo.education.institutionId =
//         draftData.education.institutionId;
//       this.payrollData = draftData.occupationTypes;
//       this.licenseInfo.expertLevelId = draftData.expertLevelId;
//       this.licenseInfo.educationalLevelId = draftData.educationalLevelId;
//       this.licenseInfo.education.id = draftData.education.id;
//       this.licenseInfo.applicationStatusId = draftData.applicationStatusId;
//       this.setEducationLevel(this.licenseInfo.educationalLevelId);
//       if (this.licenseInfo.applicantTypeId == 1) {
//         this.displayPayrollDoc = true;
//         this.$store.dispatch("newlicense/getExpertLevel").then((res) => {
//           this.expertLevels = res.data.data.filter(function(e) {
//             return e.code.includes("REG");
//           });
//         });
//         this.fetchPayrollData();
//         this.licenseInfo.occupationTypeId = draftData.occupationTypeId;
//       } else {
//         this.displayEnglishLanguageOption = true;
//         this.$store.dispatch("newlicense/getExpertLevel").then((res) => {
//           this.expertLevels = res.data.data.filter(function(e) {
//             return e.code.includes("FED");
//           });
//         });
//         this.fetchEnglishSpeaker();
//         this.licenseInfo.nativeLanguageId = draftData.nativeLanguageId;
//       }
//       this.licenseInfo.expertLevelId = draftData.expertLevelId;
//       if (this.licenseInfo.expertLevelId == 4) {
//         this.showRegion = true;
//       } else {
//         this.showRegion = false;
//       }
//       if (draftData.woreda || draftData.woreda != undefined) {
//         this.licenseInfo.residenceWoredaId = draftData.woreda.id;
//         if (draftData.woreda.zone || draftData.woreda.zone != undefined) {
//           this.zoneID = draftData.woreda.zone.id;
//           if (
//             draftData.woreda.zone.region ||
//             draftData.woreda.zone.region != undefined
//           ) {
//             this.regionID = draftData.woreda.zone.region.id;
//           }
//         }
//       }
//       if (this.licenseInfo.applicantTypeId == 1) {
//         this.displayPayrollDoc = true;
//       } else {
//         this.displayPayrollDoc = false;
//       }
//       if (this.licenseInfo.applicantTypeId == 2) {
//         this.displayEnglishLanguageOption = true;
//       } else {
//         this.displayEnglishLanguageOption = false;
//       }
//       this.$store
//         .dispatch("newlicense/getZones", this.regionID)
//         .then((res) => {
//           const zonesResult = res.data;
//           this.zoneArray = zonesResult.data;
//         })
//         .then((res) => {
//           this.$store
//             .dispatch("newlicense/getWoredas", this.zoneID)
//             .then((res) => {
//               const woredasResult = res.data;
//               this.woredaArray = woredasResult.data;
//             });
//         });
//       if (this.licenseInfo.education.departmentId != "") {
//         this.showProfessionalTypes = true;
//         await this.fetchProfessionalType(
//           this.licenseInfo.education.departmentId
//         );
//         this.showOtherProfession = false;
//         for (var k = 0; k < draftData.licenseProfessions.length; k++) {
//           if (
//             draftData.licenseProfessions[k].professionalTypes.name == "Other"
//           ) {
//             this.showOtherProfession = true;
//             break;
//           }
//         }
//         this.professionalTypes.map((profData) => {
//           for (var j = 0; j < draftData.licenseProfessions.length; j++) {
//             if (
//               profData.id == draftData.licenseProfessions[j].professionalTypeId
//             ) {
//               profData.checked = true;
//             }
//             if (profData.name == "Other") {
//               this.showOtherProfession = true;
//             } else {
//               this.showOtherProfession = false;
//             }
//           }
//           return profData;
//         });
//       }
//       if (draftData.licenseProfessions.length > 0) {
//         for (var k = 0; k < draftData.licenseProfessions.length; k++) {
//           this.licenseInfo.professionalTypeIds.push(
//             draftData.licenseProfessions[k].professionalTypeId
//           );
//         }
//       }
//       if (
//         draftData.otherProfessionalType != null ||
//         draftData.otherProfessionalType != ""
//       ) {
//         this.showOtherProfession = true;
//         this.licenseInfo.otherProfessionalType =
//           draftData.otherProfessionalType;
//         this.licenseInfo.otherProfessionalTypeAmharic =
//           draftData.otherProfessionalTypeAmharic;
//       }
//     },
//   },
// };
</script>
<style>
#main {
  border: 1px solid #cccccc;
  border-radius: 5px;
}
.table-multiple {
  border: 1px solid #cccccc;
  border-radius: 5px;
}
</style>
