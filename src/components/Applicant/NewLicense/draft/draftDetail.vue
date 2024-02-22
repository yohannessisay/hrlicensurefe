<template>
  <main-content :url="'newLicense'">
    <PageHeader :path="path" :isDarkMode="isDarkMode"></PageHeader>

    <div class="vld-parent">
      <loading
        :active="isLoading"
        :can-cancel="true"
        :is-full-page="false"
        :color="'#2F639D'"
        :opacity="0.7"
      ></loading>
      <div v-if="invalidLicenseStat == false">
        <div
          v-if="activeState == 1"
          :class="
            isDarkMode && isDarkMode == true
              ? '    block p-6 rounded-lg   bg-primaryDark   mb-8 '
              : '  block p-6 rounded-lg   bg-white max-w-full mb-8 '
          "
        >
          <div class="mt-small flex justify-center">
            <h2
              :class="
                isDarkMode && isDarkMode == true
                  ? 'text-primary-200 text-3xl font-bold border-b-4'
                  : 'text-main-400 text-xl lg:text-3xl border-b-4 font-bold sm:text-xl '
              "
            >
              General Information
            </h2>
          </div>

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
              @clearLocalData="() => {}"
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
            ></AddedDepartmentTable>
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
                Save as Draft
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
                Next
              </button>
            </div>
          </form>
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
        <div
          class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="withdrawalModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-sm relative w-auto pointer-events-none"
          >
            <div
              class="modal-content border-none relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
            >
              <div
                class="modal-header flex flex-shrink-0 justify-end p-2 rounded-t-md"
              >
                <button
                  type="button"
                  class="px-6 text-white bg-red-200 hover:text-white hover:border font-medium text-xs leading-tight uppercase rounded hover:border-primary-600 hover:bg-purple-700 hover: focus:bg-purple-700 focus: focus:outline-none focus:ring-0 active:bg-purple-800 active: transition duration-150 ease-in-out"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="fa fa-close fa-2x"></i>
                </button>
              </div>

              <div class="modal-body relative p-4">
                <div class="flex justify-center">
                  <h2 class="text-red-300 text-2xl">
                    Are you sure you want to withdraw this application?
                  </h2>
                </div>
              </div>
              <div
                class="modal-footer p-2 flex flex-shrink-0 flex-wrap items-center justify-end border-t border-grey-100 rounded-b-md"
              >
                <button
                  class="inline-block px-6 py-2.5 bg-yellow-300 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-yellow-300 transition duration-150 ease-in-out"
                  type="button"
                  @click="withdraw()"
                >
                  Confirm
                </button>
                <button
                  type="button"
                  class="inline-block px-6 text-white font-medium text-xs bg-primary-700 leading-tight uppercase rounded hover:bg-white hover:text-primary-700 transition duration-150 ease-in-out"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="invalidLicenseStat == true">
        <h2 class="text-main-400 font-bold text-2xl">
          License is currently being reviewed and editing is not allowed
        </h2>
      </div>
    </div>
  </main-content>
</template>
<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import LicenseSummary from "./draftSummary.vue";
import Upload from "./draftUpload.vue";
import MainContent from "../../Shared/Menu.vue";
import Loading from "vue3-loading-overlay";
import { useRouter } from "vue-router";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import PageHeader from "../../Shared/PagesHeader.vue";
import ApplicantInfo from "../../Shared/GeneralInformation/ApplicantInfo.vue";
import AddedDepartmentTable from "../../Shared/GeneralInformation/AddedDepartmentTable.vue";
import LocationInfo from "../../Shared/GeneralInformation/LocationInfo.vue";
import EducationInfo from "../../Shared/GeneralInformation/EducationalInfo.vue";
import { AddMultipleDepartment } from "../../Shared/services/addMultipleDepartment";
import { fetchDataMixin } from "../../Shared/GeneralInformation/fetchDataService";
import { toastMixin } from "../../Shared/services/toastMessage";
export default {
  components: {
    MainContent,
    LicenseSummary,
    Upload,
    Loading,
    PageHeader,
    ApplicantInfo,
    AddedDepartmentTable,
    LocationInfo,
    EducationInfo,
  },

  setup(props, { emit }) {
    const route = useRoute();
    const router = useRouter();
    const { fetchData } = fetchDataMixin.setup();
    const { toastMessage } = toastMixin.setup();
    const path = ref([
      { name: "Home", link: "/menu" },
      { name: "New License", link: "/Applicant/NewLicense" },
      { name: "Draft", link: "/Applicant/NewLicense" },
    ]);
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    let activeState = ref(1);
    let isLoading = ref(true);
    let applicantTypes = ref("");
    let departments = ref([]);
    let institutions = ref([]);
    let educationalLevels = ref([]);
    let educationalLevelSelected = ref({});
    let professionalTypes = ref([]);
    let regions = ref("");
    let woredas = ref("");
    let zones = ref("");
    let invalidLicenseStat = ref(false);
    let store = useStore();
    let showLocation = ref(false);
    let showOccupation = ref(false);
    let showLanguage = ref(false);
    let isDepartmentSelected = ref(false);
    let isEdLevelSelected = ref(false);
    let isAppTypeSelected = ref(false);
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
    let generalInfo = ref({
      educationalLevelSelected: "",
      applicantType: "",
      applicantPositionId: "",
      regionSelected: {},
      selectedRegion: {},
      zoneSelected: {},
      woredaSelected: {},
      languageSelected: "",
      multipleDepartment: [],
      occupationTypes: "",
      nativeLanguageSelected: "",
      educations: [],
      professionChanged: false,
    });

    const withdraw = () => {
      isLoading.value = true;
      let req = {
        data: withdrawData.value,
        action: "WithdrawEvent",
      };
      store
        .dispatch("reviewer/editNewLicense", req)
        .then((res) => {
          isLoading.value = false;
          if (res.statusText == "Created") {
            toastMessage(
              "Successfully withdrawed an application",
              "Success",
              3000
            );
            router.push({ path: "/Applicant/NewLicense/withdraw" });
            location.reload();
          } else {
            toastMessage("Please try again", "error", 3000);
            location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const fetchProfessionalType = (departmentId, educationalLevelId) => {
      let profession = {
        departmentId: departmentId,
        educationalLevelId: educationalLevelId,
      };
      store
        .dispatch("newlicense/getProfessionalTypes", profession)
        .then((res) => {
          professionalTypes.value = res.data.data;
        });
    };
    const applicantTypeChangeHandler = async () => {
      generalInfo.value.applicantTypeSelected = generalInfo.value.applicantType;
      generalInfo.value.applicantTypeId = generalInfo.value.applicantType.id;
      if (generalInfo.value.applicantType.code == "ETH") {
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
      if (generalInfo.value.applicantType.code == "FOR") {
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
    const fetchWoredas = async () => {
      woredas.value = await fetchData(
        "newlicense/getWoredas",
        generalInfo.value.zoneSelected.id
      );
    };
    const woredaChangeHandler = (woreda) => {
      generalInfo.value.woredaSelected = woreda;
    };
    const zoneChangeHandler = () => {
      fetchWoredas();
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
      generalInfo.value.professionChanged = true;
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
    const fetchOccupation = () => {
      store.dispatch("lookups/getGovernment").then((res) => {
        if (res.data.status == "Success") {
          occupations.value = res.data.data;
        }
      });
    };
    const apply = async () => {
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
      activeState.value += 1;
    };

    const educationalLevelChange = () => {
      isEdLevelSelected.value = true;
      fetchProfessionalType(
        generalInfo.value.departmentSelected.id,
        generalInfo.value.educationalLevelSelected.id
      );
    };

    const languageChangeHandler = (language) => {
      generalInfo.value.languageSelected = language;
    };
    const occupationChangeHandler = (occupation) => {
      generalInfo.value.occupationSelected = occupation;
    };
    onMounted(async () => {
      window.addEventListener("darkModeChanged", (data) => {
        isDarkMode.value = data.detail ? data.detail.content : "";
      });
      applicantTypes.value = await fetchData("newlicense/getApplicantType");
      departments.value = await fetchData("newlicense/getDepartmentType");
      educationalLevels.value = await fetchData("lookups/getEducationLevel");
      regions.value = await fetchData("newlicense/getRegions");
      occupations.value = await fetchData("lookups/getGovernment");
      const statuses = await fetchData("newlicense/getApplicationStatuses");

      let status = statuses.filter(function (e) {
        return e.code == "DRA";
      });
      await fetchData(
        "newlicense/setButtons",
        status[0].buttons,
        "noReturnData"
      );
      store
        .dispatch("newlicense/getNewLicenseApplication", route.params.id)
        .then((res) => {
          withdrawData.value = res.data.data;
          generalInfo.value = res.data.data;

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
          regionChangeHandler();
          zoneChangeHandler();
          generalInfo.value.multipleDepartment = JSON.parse(
            JSON.stringify(res.data.data.educations)
          );
          generalInfo.value.applicantTypeSelected = res.data.data.applicantType;
          generalInfo.value.occupationSelected = res.data.data.occupationTypes;
          generalInfo.value.languageSelected = res.data.data.nativeLanguages; 

          if (
            generalInfo.value.applicationStatus.code == "UPD" ||
            generalInfo.value.applicationStatus.code == "SUB"
          ) {
            invalidLicenseStat.value = false;
            isLoading.value = false;
          } else {
            isLoading.value = false;
          }
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
      fetchOccupation,
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
      isDarkMode,
      professionalTypes,
      showOccupation,
      showLanguage,
      languageSelected,
      languages,
      occupations,
      activeState,
      isLoading,
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
      invalidLicenseStat,
      path,
      languageChangeHandler,
      occupationChangeHandler,
      woredaChangeHandler,
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
