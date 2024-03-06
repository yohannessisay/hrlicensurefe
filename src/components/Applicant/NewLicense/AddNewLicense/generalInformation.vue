<template>
  <PageHeader :path="path" :isDarkMode="isDarkMode"></PageHeader>

  <div
    :class="
      isDarkMode && isDarkMode == true
        ? '    block p-6 rounded-lg   bg-primaryDark   mb-8 '
        : '  block p-6 rounded-lg   bg-white max-w-full mb-8 '
    "
  >
    <div class="flex justify-center">
      <h2
        :class="
          isDarkMode && isDarkMode == true
            ? 'text-primary-200 text-3xl font-bold border-b-4'
            : 'text-main-400 text-xl lg:text-3xl border-b-4 font-bold sm:text-xl '
        "
      >
        {{ $t("General Information") }}
      </h2>
    </div>
    <div class="vld-parent mt-4">
      <loading
        :active="isLoadingGeneral"
        :is-full-page="false"
        :color="'#2F639D'"
        :opacity="0.6"
        class="rounded-md"
      ></loading>
      <form @submit.prevent="submit" class="mx-auto w-full mt-2">
        <!-- applicant info -->
        <ApplicantInfo
          :generalInfo="generalInfo"
          :isDarkMode="isDarkMode"
          :localDataLength="Object.keys(localData).length != 0"
          :applicantTypes="applicantTypes"
          :showLanguage="showLanguage"
          :showOccupation="showOccupation"
          :languages="languages"
          :occupations="occupations"
          @clearLocalData="clearLocalData"
          @applicantTypeChangeHandler="applicantTypeChangeHandler"
          @languageChangeHandler="languageChangeHandler"
          @occupationChangeHandler="occupationChangeHandler"
        ></ApplicantInfo>

        <!-- region -->
        <LocationInfo
          :generalInfo="generalInfo"
          :isDarkMode="isDarkMode"
          :regions="regions"
          :zones="zones"
          :woredas="woredas"
          :showLocation="showLocation"
          @regionChangeHandler="regionChangeHandler"
          @zoneChangeHandler="zoneChangeHandler"
          @woredaChangeHandler="woredaChangeHandler"
        ></LocationInfo>

        <!-- educational institution and department -->
        <EducationInfo
          :isDarkMode="isDarkMode"
          :generalInfo="generalInfo"
          :departments="departments"
          :educationalLevels="educationalLevels"
          :professionalTypes="professionalTypes"
          :institutions="institutions"
          :isDepartmentSelected="isDepartmentSelected"
          :isEdLevelSelected="isEdLevelSelected"
          :isAppTypeSelected="isAppTypeSelected"
          :showOtherProfession="showOtherProfession"
          :showOtherEducation="showOtherEducation"
          :multipleDepartmentError="multipleDepartmentError"
          :checkForAddedError="checkForAddedError"
          :multipleDepartmentMaxError="multipleDepartmentMaxError"
          @department-change="departmentChange"
          @educationalLevelChange="educationalLevelChange"
          @professionTypeChange="ProfessionTypeChange"
          @institutionChange="institutionChange"
          @addMultiple="addMultiple"
        ></EducationInfo>

        <!-- Table for selected departments data -->
        <AddedDepartmentTable
          :isDarkMode="isDarkMode"
          :generalInfo="generalInfo"
          @removeDepartment="removeDepartment"
        ></AddedDepartmentTable>
        <div class="vld-parent mt-4">
          <loading
            :active="isLoading"
            :is-full-page="false"
            :color="'#2F639D'"
            :opacity="1"
            class="rounded-md"
          ></loading>
          <div class="flex justify-end mb-2 mr-1">
            <button
              :class="
                generalInfo.multipleDepartment &&
                generalInfo.multipleDepartment.length > 0
                  ? 'px-4 mr-2 mb-2 py-2.5 bg-white text-main-400  border text-base leading-tight font-bold   rounded   hover:text-white hover:border-main-400 hover:bg-main-400 transition duration-150   ease-in-out'
                  : 'px-4 mr-2 mb-2 py-2.5 bg-white text-main-400 font-bold border text-base leading-tight   rounded   hover:text-white hover:border-main-400 hover:bg-main-400 transition duration-150   ease-in-out  disabled'
              "
              type="submit"
              @click="saveDraft()"
            >
              {{ $t("Save as Draft") }}
            </button>
            <button
              :class="
                generalInfo.multipleDepartment &&
                generalInfo.multipleDepartment.length > 0
                  ? 'px-4  mr-2 mb-2 pb-4 bg-main-400 text-white font-medium border text-base leading-tight  rounded   hover:text-main-400 hover:border-main-400 hover:bg-white transition duration-150   ease-in-out'
                  : 'px-4 mr-2 mb-2 pb-4 bg-main-400 text-white font-medium border text-base leading-tight  rounded   hover:text-main-400 hover:border-main-400 hover:bg-white transition duration-150   ease-in-out  disabled'
              "
              type="submit"
              @click="apply()"
            >
              {{ $t("Next") }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import PageHeader from "../../Shared/PagesHeader.vue";
import ApplicantInfo from "../../Shared/GeneralInformation/ApplicantInfo.vue";
import AddedDepartmentTable from "../../Shared/GeneralInformation/AddedDepartmentTable.vue";
import LocationInfo from "../../Shared/GeneralInformation/LocationInfo.vue";
import EducationInfo from "../../Shared/GeneralInformation/EducationalInfo.vue";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { AddMultipleDepartment } from "../../Shared/services/addMultipleDepartment";
import { fetchDataMixin } from "../../Shared/GeneralInformation/fetchDataService";
import { toastMixin } from "../../Shared/services/toastMessage";

export default {
  props: ["activeState"],
  mixins: [fetchDataMixin],
  components: {
    Loading,
    PageHeader,
    EducationInfo,
    ApplicantInfo,
    LocationInfo,
    AddedDepartmentTable,
  },
  emits: ["changeActiveState", "changeActiveStateMinus"],
  setup(props, { emit }) {
    const { fetchData } = fetchDataMixin.setup();
    const { toastMessage } = toastMixin.setup();
    let store = useStore();

    const path = ref([
      { name: "Home", link: "/menu" },
      { name: "New License", link: "/Applicant/NewLicense" },
      { name: "Apply", link: "/Applicant/NewLicense" },
    ]);
    let applicantTypes = ref("");
    let departments = ref([]);
    let institutions = ref([]);
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    let educationalLevels = ref([]);
    let educationalLevelSelected = ref({});
    let professionalTypes = ref([]);
    let isDepartmentSelected = ref(false);
    let isLoadingGeneral = ref(false);
    let isEdLevelSelected = ref(false);
    let isAppTypeSelected = ref(false);
    let regions = ref("");
    let woredas = ref("");
    let zones = ref("");
    let localData = ref({});
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
    let multipleDepartmentError = ref(false);
    let multipleDepartmentMaxError = ref(false);
    let checkForAddedError = ref(false);
    let existingLicense = ref({});
    let existingData = { id: null, step: 1 };

    let generalInfo = ref({
      educationalLevelSelected: "",
      applicantTypeSelected: JSON.parse(
        localStorage.getItem("applicantTypeSelected")
      ),
      applicantPositionId: "",
      regionSelected: "",
      zoneSelected: "",
      woredaSelected: "",
      languageSelected: "",
      occupationSelected: "",
      nativeLanguageSelected: "",
      otherEducationalInstitution: "",
      multipleDepartment: [],
      educations: [],
    });
    let isLoading = ref(false);

    const woredaChangeHandler = (woreda) => {
      generalInfo.value.woredaSelected = woreda;
    };
    const fetchWoredas = async () => {
      woredas.value = await fetchData(
        "newlicense/getWoredas",
        generalInfo.value.zoneSelected.id
      );
    };

    const applicantTypeChangeHandler = async () => {
      isAppTypeSelected.value = true;
      if (
        generalInfo.value.applicantTypeSelected &&
        generalInfo.value.applicantTypeSelected.code &&
        generalInfo.value.applicantTypeSelected.code == "ETH"
      ) {
        showLocation.value = true;
        showOccupation.value = true;
        institutions.value = await fetchData("newlicense/getInstitution", true);
      } else {
        showLocation.value = false;
        showOccupation.value = false;
        institutions.value = await fetchData(
          "newlicense/getInstitution",
          false
        );
      }
      if (
        generalInfo.value.applicantTypeSelected &&
        generalInfo.value.applicantTypeSelected.code &&
        generalInfo.value.applicantTypeSelected.code == "FOR"
      ) {
        languages.value = await fetchData("lookups/getNativeLanguage");
        showLanguage.value = true;
      } else {
        showLanguage.value = false;
      }
    };
    const regionChangeHandler = async (region) => {
      if (region) generalInfo.value.regionSelected = region;
      if (
        generalInfo.value.regionSelected &&
        generalInfo.value.regionSelected.code == "HAR"
      ) {
        generalInfo.value.zoneSelected = {
          name: "Default Harar",
          id: 464,
          code: "ZN_HAR_DEF_54",
        };
        fetchWoredas();
      }
      zones.value = await fetchData(
        "newlicense/getZones",
        generalInfo.value.regionSelected.id
      );
    };
    const zoneChangeHandler = async (zone) => {
      if (zone) generalInfo.value.zoneSelected = zone;

      await fetchWoredas();
    };

    const departmentChange = (department) => {
      generalInfo.value.departmentSelected = department;
      isDepartmentSelected.value = true;
      generalInfo.value.educationalLevelSelected = "";
    };
    const institutionChange = (institution) => {
      generalInfo.value.institutionSelected = institution;
      if (generalInfo.value.institutionSelected.code == "OTH") {
        showOtherEducation.value = true;
      } else {
        showOtherEducation.value = false;
      }
    };
    const ProfessionTypeChange = (professionalTypeSelected) => {
      generalInfo.value.professionalTypeSelected = professionalTypeSelected;
      if (
        generalInfo.value.professionalTypeSelected.name &&
        generalInfo.value.professionalTypeSelected.name.toLowerCase() == "other"
      ) {
        showOtherProfession.value = true;
      } else {
        showOtherProfession.value = false;
      }
    };

    const removeDepartment = (index) => {
      generalInfo.value.multipleDepartment.splice(index, 1);
      generalInfo.value.educations.splice(index, 1);
    };
    const addMultiple = async (localGeneralInfo) => {
      if (localGeneralInfo) {
        generalInfo.value = localGeneralInfo;
      }
      let result = await AddMultipleDepartment(
        generalInfo.value,
        showOtherProfession.value,
        multipleDepartmentMaxError.value,
        multipleDepartmentError.value,
        checkForAddedError.value
      );
      generalInfo.value = result.generalInfo;
      showOtherProfession.value = result.showOtherProfession;
      multipleDepartmentMaxError.value = result.multipleDepartmentMaxError;
      multipleDepartmentError.value = result.multipleDepartmentError;
      checkForAddedError.value = result.checkForAddedError;
    };

    const apply = async () => {
      let tempFieldError = {};

      let checkResult = checkForExistingLicense();
      generalInfo.value.applicantTypeSelected == ""
        ? (tempFieldError.applicantTypeSelected = true)
        : delete tempFieldError.applicantTypeSelected;

      generalInfo.value.nativeLanguageSelected == "" &&
      generalInfo.value.applicantTypeSelected &&
      generalInfo.value.applicantTypeSelected.code == "FOR"
        ? (tempFieldError.nativeLanguageSelected = true)
        : delete tempFieldError.nativeLanguageSelected;

      generalInfo.value.occupationSelected == "" &&
      generalInfo.value.applicantTypeSelected &&
      generalInfo.value.applicantTypeSelected.code == "ETH"
        ? (tempFieldError.occupationSelected = true)
        : delete tempFieldError.occupationSelected;

      //Check if the user has already submitted a license and if not also check for any mandatory fields after
      if (!checkResult) {
        let tempApplicationData = generalInfo.value;
        window.localStorage.setItem(
          "NLApplicationData",
          JSON.stringify(tempApplicationData)
        );
        await fetchData(
          "newlicense/setGeneralInfo",
          generalInfo.value,
          "noReturnData"
        );
        let tempNL = { step: 2 };
        localStorage.setItem("tempNL", JSON.stringify(tempNL));
        emit("changeActiveState");
      } else if (checkResult) {
        toastMessage(
          "You have already submitted or saved it as a draft application for this department and professional type combination",
          50000,
          "warning"
        );
      } else if (Object.keys(tempFieldError).length > 0) {
        toastMessage("Fill out fields marked red", "error", 3000);
        return;
      }
    };
    const checkForExistingLicense = () => {
      let alreadySubmitted = false;
      let tempComparison = [];
      if (
        existingLicense.value &&
        generalInfo.value.educations &&
        existingLicense.value.length > 0
      ) {
        existingLicense.value.forEach((element) => {
          if (
            element.educations &&
            element.applicationStatus.code != "WD" &&
            element.applicationStatus.code != "DEC"
          ) {
            tempComparison.push({
              licenseId: element.id,
              licenseStatus: element.applicationStatus.code,
              educations: element.educations,
            });
          }
        });
      }
      tempComparison.forEach((existingEd) => {
        generalInfo.value.educations.forEach((newEd) => {
          existingEd.educations.forEach((element) => {
            if (
              element.departmentId == newEd.departmentId &&
              element.professionTypeId == newEd.professionTypeId
            ) {
              alreadySubmitted = true;
              existingData.id = existingEd.licenseId;
              existingData.step = 2;
              return;
            }
          });
        });
      });
      return alreadySubmitted;
    };
    const clearLocalData = () => {
      localStorage.removeItem("applicantTypeSelected");
      localStorage.removeItem("NLApplicationData");
      localStorage.removeItem("tempNL");
      localStorage.removeItem("isLicenseDesignation");
      indexedDB.deleteDatabase("NLdocumentUploads");
      setTimeout(() => {
        window.location.reload();
      }, 100);
    };
    const educationalLevelChange = async (educationalLevelSelected) => {
      generalInfo.value.educationalLevelSelected = educationalLevelSelected;
      isEdLevelSelected.value = true;
      professionalTypes.value = await fetchData(
        "newlicense/getProfessionalTypes",
        {
          departmentId: generalInfo.value.departmentSelected.id,
          educationalLevelId: generalInfo.value.educationalLevelSelected.id,
        }
      );
    };

    const saveDraft = () => {
      let checkResult = checkForExistingLicense();
      if (checkResult) {
        toastMessage(
          "You have already submitted or saved it as a draft application for this department and professional type combination",
          50000,
          "warning"
        );
      }
      generalInfo.value.licenseFile = [];
      isLoading.value = true;
      let license = {
        action: "DraftEvent",
        data: {
          applicantTypeId:
            generalInfo.value && generalInfo.value.applicantTypeSelected
              ? generalInfo.value.applicantTypeSelected.id
              : null,
          residenceWoredaId:
            generalInfo.value && generalInfo.value.woredaSelected
              ? generalInfo.value.woredaSelected.id
              : null,
          educations: generalInfo.value ? generalInfo.value.educations : {},
          occupationTypeId: generalInfo.value.occupationSelected
            ? generalInfo.value.occupationSelected.id
            : null,
          nativeLanguageId: generalInfo.value.nativeLanguageSelected
            ? generalInfo.value.nativeLanguageSelected.id
            : null,
          isLegal: true,
          regionId: generalInfo.value.regionSelected
            ? generalInfo.value.regionSelected.id
            : "",
          regionCode: generalInfo.value.regionSelected
            ? generalInfo.value.regionSelected.code
            : "FED",
        },
      };
      let tempError = checkForExistingLicense();
      if (!tempError) {
        store.dispatch("newlicense/addNewLicense", license).then((res) => {
          if (res.data.status == "Success") {
            toastMessage("Applied successfuly", "success", 3000);
            isLoading.value = false;
            clearLocalData();
          } else {
            toastMessage("Error occured, please try again", "error", 3000);
          }
        });
      } else if (tempError == 1) {
        isLoading.value = false;
        toastMessage(
          "You have already submitted or saved it as a draft application for this department and professional type combination",
          "warning",
          3000
        );
      } else {
        isLoading.value = false;
        toastMessage(
          "Sorry,seems like you already applied using this department and profession type,please check your draft or submitted page",
          "warning",
          3000
        );
      }
    };
    const languageChangeHandler = (language) => {
      generalInfo.value.languageSelected = language;
    };
    const occupationChangeHandler = (occupation) => {
      generalInfo.value.occupationSelected = occupation;
    };
    onMounted(async () => {
      isLoadingGeneral.value = true;
      window.addEventListener("darkModeChanged", (data) => {
        isDarkMode.value = data.detail ? data.detail.content : "";
      });
      let tryAgain = localStorage.getItem("tempNL")
        ? JSON.parse(localStorage.getItem("tempNL"))
        : {};

      if (
        tryAgain &&
        tryAgain.id != null &&
        tryAgain.backButtonClicked == false
      ) {
        tryAgain.step = 3;
        localStorage.setItem("tempNL", JSON.stringify(tryAgain));
        emit("changeActiveState");
      } else {
        if (tryAgain && tryAgain.backButtonClicked) {
          tryAgain.step = 1;
          localStorage.setItem("tempNL", JSON.stringify(tryAgain));
        }

        applicantTypes.value = await fetchData("newlicense/getApplicantType");
        departments.value = await fetchData("newlicense/getDepartmentType");
        educationalLevels.value = await fetchData("lookups/getEducationLevel");
        regions.value = await fetchData("newlicense/getRegions");
        regions.value = regions.value?.filter((el) => el.code != "FED");
        occupations.value = await fetchData("lookups/getGovernment");

        localData.value = window.localStorage.getItem("NLApplicationData")
          ? JSON.parse(window.localStorage.getItem("NLApplicationData"))
          : {};

        if (localData.value.fromDraft) {
          localData.value = [];
          localStorage.removeItem("NLApplicationData");
        }
        applicantTypeChangeHandler();
        if (Object.keys(localData.value).length != 0) {
          generalInfo.value = localData.value;
          isAppTypeSelected.value = true;

          if (generalInfo.value.regionSelected) {
            regionChangeHandler();
            zoneChangeHandler();
          }
        } else {
          if (generalInfo.value.applicantTypeSelected) {
            isAppTypeSelected.value = true;
          }
        }
        let userId = JSON.parse(window.localStorage.getItem("userId"));
        existingLicense.value = await fetchData(
          "newlicense/getNewLicenseByUser",
          userId
        );
        isLoadingGeneral.value = false;
      }
    });
    return {
      isLoadingGeneral,
      languageChangeHandler,
      occupationChangeHandler,
      applicantTypeChangeHandler,
      regionChangeHandler,
      zoneChangeHandler,
      departmentChange,
      institutionChange,
      ProfessionTypeChange,
      addMultiple,
      removeDepartment,
      apply,
      saveDraft,
      educationalLevelChange,
      showLocation,
      isEdLevelSelected,
      isDepartmentSelected,
      woredaSelected,
      zoneSelected,
      isDarkMode,
      isAppTypeSelected,
      regionSelected,
      departments,
      institutions,
      educationalLevels,
      applicantTypes,
      clearLocalData,
      regions,
      woredas,
      localData,
      checkForAddedError,
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
      multipleDepartmentError,
      multipleDepartmentMaxError,
      generalInfo,
      isLoading,
      path,
      woredaChangeHandler,
    };
  },
};
</script>
<style scoped>
#main {
  border-radius: 5px;
}
.table-multiple {
  border-radius: 5px;
  overflow-x: scroll;
}
.form-select:disabled {
  background-color: #686869;
}
</style>
