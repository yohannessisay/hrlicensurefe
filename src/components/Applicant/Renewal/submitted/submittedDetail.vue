<template>
  <main-content :url="'renewal'">
    <PageHeader :path="path" :isDarkMode="isDarkMode"></PageHeader>

    <div
      :class="
        isDarkMode && isDarkMode == true
          ? 'block p-6 rounded-lg bg-primaryDark   mb-8 '
          : 'block p-6 rounded-lg bg-white max-w-full mb-8 '
      "
      v-if="activeState === 1"
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
            :localDataLength="false"
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

          <AddedDepartmentTable
            :isDarkMode="isDarkMode"
            :generalInfo="generalInfo"
          ></AddedDepartmentTable>
          <div class="vld-parent mt-4">
            <loading
              :active="isLoading"
              :is-full-page="false"
              :color="'#2F639D'"
              :opacity="0.6"
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
    <transition name="fade" mode="out-in">
      <div v-if="activeState == 2">
        <Upload
          :activeState="2"
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
        />
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="activeState == 3">
        <LicenseSummary
          :activeState="3"
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
        />
      </div>
    </transition>
  </main-content>
</template>
<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import PageHeader from "../../Shared/PagesHeader.vue";
import ApplicantInfo from "../../Shared/GeneralInformation/ApplicantInfo.vue";
import AddedDepartmentTable from "../../Shared/GeneralInformation/AddedDepartmentTable.vue";
import LocationInfo from "../../Shared/GeneralInformation/LocationInfo.vue";
import EducationInfo from "../../Shared/GeneralInformation/EducationalInfo.vue";
import MainContent from "../../Shared/Menu.vue";
import { AddMultipleDepartment } from "../../Shared/services/addMultipleDepartment";
import { fetchDataMixin } from "../../Shared/GeneralInformation/fetchDataService";
import { toastMixin } from "../../Shared/services/toastMessage";
import LicenseSummary from "./submittedSummary.vue";
import Upload from "./submittedUpload.vue";
export default {
  components: {
    MainContent,
    AddedDepartmentTable,
    ApplicantInfo,
    LocationInfo,
    EducationInfo,
    Loading,
    PageHeader,
    Upload,
    LicenseSummary,
  },
  emits: ["changeActiveState", "changeActiveStateMinus", "activeState"],
  mixins: [fetchDataMixin],
  setup(props, { emit }) {
    const route = useRoute();
    const router = useRouter();
    const { fetchData } = fetchDataMixin.setup();
    const { toastMessage } = toastMixin.setup();
    const path = ref([
      { name: "Home", link: "/menu" },
      { name: "Renewal", link: "/Applicant/Renewal" },
      { name: "Submitted", link: "/Applicant/Renewal" },
    ]);
    let activeState = ref(1);
    let applicantTypes = ref("");
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
    let showOccupation = ref(false);
    let showLanguage = ref(false);
    let isDepartmentSelected = ref(false);
    let isEdLevelSelected = ref(false);
    let isAppTypeSelected = ref(false);
    let isLoadingGeneral = ref(false);
    let languageSelected = ref({});
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
    let withdrawData = ref({});
    let invalidLicenseStat = ref(false);
    let generalInfo = ref({
      educationalLevelSelected: "",
      applicantType: "",
      applicantPositionId: "",
      regionSelected: "",
      zoneSelected: "",
      woredaSelected: "",
      languageSelected: "",
      multipleDepartment: [],
      occupationTypes: "",
      nativeLanguageSelected: "",
      educations: [],
    });
    let applicationStatuses = ref([]);
    let isLoading = ref(false);
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    const languageChangeHandler = (language) => {
      generalInfo.value.languageSelected = language;
    };

    const woredaChangeHandler = (woreda) => {
      generalInfo.value.woredaSelected = woreda;
    };
    const fetchWoredas = async () => {
      woredas.value = await fetchData(
        "newlicense/getWoredas",
        generalInfo.value.zoneSelected.id
      );
    };
    const occupationChangeHandler = (occupation) => {
      generalInfo.value.occupationSelected = occupation;
    };
    const withdraw = () => {
      isLoading.value = true;
      let req = {
        data: withdrawData.value,
        action: "WithdrawEvent",
      };
      store
        .dispatch("reviewer/editRenewal", req)
        .then((res) => {
          isLoading.value = false;
          if (res.statusText == "Created") {
            toastMessage("Withdraw Successfully", "success", 3000);
            router.push({ path: "/Applicant/Renewal/withdraw" });
            location.reload();
          } else {
            toastMessage(
              "Error has occured,pleas try again later",
              "error",
              3000
            );
            location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const applicantTypeChangeHandler = async () => {
      generalInfo.value.applicantTypeSelected = generalInfo.value.applicantType;
      generalInfo.value.applicantTypeId = generalInfo.value.applicantType.id;
      if (generalInfo.value.applicantType.code == "ETH") {
        showLocation.value = true;
        showOccupation.value = true;
        institutions.value = await fetchData(
          "newlicense/getInstitution",
          false
        );
      } else {
        showLocation.value = false;
        showOccupation.value = false;
        institutions.value = await fetchData(
          "newlicense/getInstitution",
          false
        );
      }
      if (generalInfo.value.applicantType.code == "FOR") {
        languages.value = await fetchData("lookups/getNativeLanguage");
        showLanguage.value = true;
      } else {
        showLanguage.value = false;
      }
    };
    const regionChangeHandler = async () => {
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
      } else {
        zones.value = await fetchData(
          "newlicense/getZones",
          generalInfo.value.regionSelected.id
        );
      }
    };
    const zoneChangeHandler = async (zone) => {
      if (zone) generalInfo.value.zoneSelected = zone;

      await fetchWoredas();
    };

    const departmentChange = () => {
      isDepartmentSelected.value = true;
      generalInfo.value.educationalLevelSelected = "";
    };
    const institutionChange = () => {
      if (generalInfo.value.institutionSelected.code == "OTH") {
        showOtherEducation.value = true;
      } else {
        showOtherEducation.value = false;
      }
    };
    const ProfessionTypeChange = () => {
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
    const addMultiple = async () => {
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
      let tempApplicationData = generalInfo.value;
      tempApplicationData.fromDraft = true;
      window.localStorage.setItem(
        "RNApplicationData",
        JSON.stringify(tempApplicationData)
      );

      await fetchData(
        "renewal/setGeneralInfo",
        generalInfo.value,
        "noReturnData"
      );
      emit("changeActiveState");
      activeState.value += 1;
    };
    const fetchApplicationStatuses = async () => {
      applicationStatuses.value = await fetchData(
        "renewal/getApplicationStatuses"
      );

      let status = applicationStatuses.value.filter(function (e) {
        return e.code == "SUB";
      });
      fetchData("renewal/setButtons", status[0].buttons, "noReturnData");
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
    const clearLocalData = () => {};
    onMounted(async () => {
      isLoading.value = true;
      applicantTypes.value = await fetchData("newlicense/getApplicantType");
      departments.value = await fetchData("newlicense/getDepartmentType");
      educationalLevels.value = await fetchData("lookups/getEducationLevel");
      regions.value = await fetchData("newlicense/getRegions");
      occupations.value = await fetchData("lookups/getGovernment");
      fetchApplicationStatuses();

      store
        .dispatch("renewal/getRenewalApplication", route.params.id)
        .then((res) => {
          withdrawData.value = res.data.data;
          generalInfo.value = res.data.data;

          if (
            generalInfo.value.applicationStatus.code == "UPD" ||
            generalInfo.value.applicationStatus.code == "SUB"
          ) {
            invalidLicenseStat.value = false;
            isLoading.value = false;
          } else {
            isLoading.value = false;
          }
          generalInfo.value.regionSelected =
            res.data.data && res.data.data.woreda
              ? res.data.data.woreda.zone.region
              : "";

          generalInfo.value.zoneSelected =
            res.data.data && res.data.data.woreda
              ? {
                  id: res.data.data.woreda.zone.id,
                  name: res.data.data.woreda.zone.name,
                  code: res.data.data.woreda.zone.code,
                  regionId: res.data.data.woreda.zone.regionId,
                  rowguid: res.data.data.woreda.zone.rowguid,
                  status: res.data.data.woreda.zone.status,
                  createdAt: res.data.data.woreda.zone.createdAt,
                  updatedAt: res.data.data.woreda.zone.updatedAt,
                }
              : "";

          generalInfo.value.woredaSelected =
            res.data.data && res.data.data.woreda
              ? {
                  id: res.data.data.woreda.id,
                  name: res.data.data.woreda.name,
                  code: res.data.data.woreda.code,
                  zoneId: res.data.data.woreda.zoneId,
                  rowguid: res.data.data.woreda.rowguid,
                  status: res.data.data.woreda.zone.status,
                  createdAt: res.data.data.woreda.createdAt,
                  updatedAt: res.data.data.woreda.updatedAt,
                }
              : "";
          isAppTypeSelected.value = true;
          applicantTypeChangeHandler();
          if (generalInfo.value.regionSelected) {
            regionChangeHandler();
            zoneChangeHandler();
          }

          generalInfo.value.multipleDepartment = JSON.parse(
            JSON.stringify(res.data.data.educations)
          );
          generalInfo.value.applicantTypeSelected = res.data.data.applicantType;
          isLoading.value = false;
        });
    });
    return {
      applicantTypeChangeHandler,
      regionChangeHandler,
      zoneChangeHandler,
      departmentChange,
      institutionChange,
      ProfessionTypeChange,
      addMultiple,
      removeDepartment,
      apply,
      educationalLevelChange,
      showLocation,
      departments,
      withdraw,
      institutions,
      educationalLevels,
      applicantTypes,
      regions,
      woredas,
      isDepartmentSelected,
      isAppTypeSelected,
      isEdLevelSelected,
      checkForAddedError,
      zones,
      professionalTypes,
      showOccupation,
      showLanguage,
      languageSelected,
      languages,
      occupations,
      activeState,
      isLoading,
      invalidLicenseStat,
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
      path,
      isDarkMode,
      isLoadingGeneral,
      languageChangeHandler,
      woredaChangeHandler,
      occupationChangeHandler,
      clearLocalData,
    };
  },
};
</script>
<style>
#main {
  border-radius: 5px;
}
.table-multiple {
  border-radius: 5px;
  overflow-x: scroll;
}
</style>
