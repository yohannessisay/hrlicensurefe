<template>
  <main-content :url="'goodstanding'">
    <nav class="bg-gray-100 px-5 py-3 rounded-md w-full mb-10" id="topNav">
      <ol class="list-reset flex">
        <li>
          <router-link to="/menu">
            <a href="#" class="text-main-400 hover:text-blue-700">Home</a>
          </router-link>
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li>
          <router-link to="/Applicant/GoodStanding">
            <a href="#" class="text-main-400 hover:text-blue-700">Goodstanding</a>
          </router-link>
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li class="text-gray-500">Draft</li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li class="text-gray-500">Edit</li>
      </ol>
    </nav>

    <div v-if="activeState == 1" class="block p-6 rounded-lg max-w-full mr-8 mb-8 sm:p-4">
      <div class="vld-parent mt-4">
        <loading
          :active="isLoading"
          :is-full-page="false"
          :color="'#2F639D'"
          :opacity="1"
        ></loading>
        <form @submit.prevent="submit" class="mx-auto max-w-4xl p-2 w-full mt-2">
          <div class="mt-small flex justify-center">
            <h2 class="text-main-400 text-3xl font-bold">General Information</h2>
          </div>
          <div class="mt-12 rounded-sm bg-white">
            <div class="container mx-auto border-b-2">
              <div
                class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-2 mb-4 p-4"
              >
                <div>
                  <label class="text-main-400">Applicant Type</label>
                  <select
                    class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    aria-label="Default select example"
                    @change="checkApplicantType(generalInfo.applicantType)"
                    v-model="generalInfo.applicantType"
                    required
                  >
                    <option
                      :value="
                        generalInfo && generalInfo.applicantTypeId
                          ? generalInfo.applicantTypeId
                          : null
                      "
                      selected
                    >
                      {{
                        generalInfo && generalInfo.applicantType
                          ? generalInfo.applicantType.name
                          : ""
                      }}
                    </option>

                    <option
                      v-for="applicant in applicantTypes"
                      :key="applicant.name"
                      :value="applicant"
                    >
                      {{ applicant.name }}
                    </option>
                  </select>
                </div>

                <div>
                  <div class="overflow-hidden shadow-sm">
                    <label for class="text-main-400">Applicant Title</label>

                    <select
                      class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                      aria-label="Default select example"
                      v-model="generalInfo.applicantTitle"
                      required
                    >
                      <option
                        :value="
                          generalInfo && generalInfo.applicantTitleId
                            ? generalInfo.applicantTitleId
                            : null
                        "
                      >
                        {{
                          generalInfo && generalInfo.applicantTitle
                            ? generalInfo.applicantTitle.name
                            : ""
                        }}
                      </option>
                      <option
                        v-for="title in applicantTitle"
                        :key="title.name"
                        :value="title"
                      >
                        {{ title.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <!-- region -->
            <div v-if="showLocation" class="rounded bg-white border-b-2">
              <div
                class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-2 mb-4 p-4"
              >
                <div class="flex flex-col">
                  <label class="text-main-400">Region</label>
                  <select
                    class="form-select appearance-none block max-w-3xl px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    v-model="generalInfo.regionSelected"
                    @change="regionChangeHandler()"
                    required
                  >
                    <option
                      :value="
                        generalInfo && generalInfo.regionSelected
                          ? generalInfo.regionSelected.id
                          : null
                      "
                      selected
                    >
                      {{
                        generalInfo && generalInfo.regionSelected
                          ? generalInfo.regionSelected.name
                          : ""
                      }}
                    </option>
                    <option v-for="region in regions" :key="region.name" :value="region">
                      {{ region.name }}
                    </option>
                  </select>
                </div>
                <div
                  class="flex flex-col"
                  v-if="
                    generalInfo.regionSelected &&
                    generalInfo.regionSelected.code != 'FED' &&
                    generalInfo.regionSelected.code != 'HAR'
                  "
                >
                  <label class="text-main-400">Zone</label>
                  <select
                    class="form-select appearance-none block max-w-3xl px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    @change="zoneChangeHandler()"
                    v-model="generalInfo.zoneSelected"
                  >
                    <option
                      :value="
                        generalInfo && generalInfo.zoneSelected
                          ? generalInfo.zoneSelected.id
                          : null
                      "
                      selected
                    >
                      {{
                        generalInfo && generalInfo.zoneSelected
                          ? generalInfo.zoneSelected.name
                          : ""
                      }}
                    </option>
                    <option v-for="zone in zones" :key="zone.name" :value="zone">
                      {{ zone.name }}
                    </option>
                  </select>
                </div>
                <div
                  class="flex flex-col"
                  v-if="
                    generalInfo.regionSelected && generalInfo.regionSelected.code != 'FED'
                  "
                >
                  <label class="text-main-400">Woreda</label>
                  <select
                    class="form-select appearance-none block max-w-3xl px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    v-model="generalInfo.woredaSelected"
                    required
                  >
                    <option
                      :value="
                        generalInfo && generalInfo.woredaSelected
                          ? generalInfo.woredaSelected.id
                          : null
                      "
                      selected
                    >
                      {{
                        generalInfo && generalInfo.woredaSelected
                          ? generalInfo.woredaSelected.name
                          : ""
                      }}
                    </option>
                    <option v-for="woreda in woredas" :key="woreda.name" :value="woreda">
                      {{ woreda.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <!-- end -->
            <div class="container mx-auto border-b-2">
              <div
                class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-2 mb-4 p-4"
              >
                <div>
                  <label class="text-main-400">Department</label>
                  <select
                    class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    v-model="generalInfo.department"
                    @change="setDepartment()"
                  >
                    <option
                      :value="
                        generalInfo && generalInfo.departmentId
                          ? generalInfo.departmentId
                          : null
                      "
                    >
                      {{
                        generalInfo && generalInfo.department
                          ? generalInfo.department.name
                          : ""
                      }}
                    </option>
                    <option
                      v-for="department in departments"
                      :key="department.id"
                      :value="department"
                    >
                      {{ department.name }}
                    </option>
                  </select>
                </div>

                <div>
                  <label class="text-main-400">Education Level</label>
                  <select
                    class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    v-model="generalInfo.GSProfessionals.educationLevel"
                    @change="educationalLevelChange()"
                  >
                    <option
                      :value="
                        generalInfo && generalInfo.GSProfessionals
                          ? generalInfo.GSProfessionals.educationLevelId
                          : null
                      "
                      selected
                    >
                      {{
                        generalInfo &&
                        generalInfo.GSProfessionals &&
                        generalInfo.GSProfessionals.educationLevel
                          ? generalInfo.GSProfessionals.educationLevel.name
                          : ""
                      }}
                    </option>

                    <option
                      v-for="edLevel in educationLevels"
                      :key="edLevel.name"
                      :value="edLevel"
                    >
                      {{ edLevel.name }}
                    </option>
                  </select>
                </div>

                <div class="grid grid-cols-1">
                  <div class="mb-4">
                    <label class="text-main-400">Profession</label>
                    <select
                      class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                      @change="checkOtherProfession()"
                      v-model="generalInfo.GSProfessionals.professionalTypes"
                    >
                      <option
                        :value="
                          generalInfo && generalInfo.GSProfessionals.professionalTypes
                            ? generalInfo.GSProfessionals.professionalTypes.id
                            : null
                        "
                        selected
                      >
                        {{
                          generalInfo &&
                          generalInfo.GSProfessionals &&
                          generalInfo.GSProfessionals.professionalTypes
                            ? generalInfo.GSProfessionals.professionalTypes.name
                            : ""
                        }}
                      </option>
                      <option
                        v-for="profession in professionalTypes"
                        :key="profession.name"
                        :value="profession"
                      >
                        {{ profession.name }}
                      </option>
                      <option value></option>
                    </select>
                  </div>

                  <div
                    v-if="
                      generalInfo.GSProfessionals.professionalTypes &&
                      generalInfo.GSProfessionals.professionalTypes.name == 'other'
                    "
                  >
                    <label class="text-main-400">Other Profession</label>
                    <input
                      type="text"
                      v-model="generalInfo.GSProfessionals.otherProfessionType"
                      class="appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                      autocomplete="off"
                      placeholder
                    />
                  </div>

                  <div
                    v-if="
                      generalInfo.GSProfessionals.professionalTypes &&
                      generalInfo.GSProfessionals.professionalTypes.name == 'other'
                    "
                  >
                    <label class="text-main-400">Other Profession Amharic</label>
                    <input
                      type="text"
                      v-model="generalInfo.GSProfessionals.otherProfessionTypeAmharic"
                      class="appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                      autocomplete="off"
                      placeholder
                    />
                  </div>
                </div>

                <div>
                  <label class="text-main-400">Applicant Position</label>
                  <select
                    class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    v-model="generalInfo.applicantPosition"
                    required
                    @change="checkOtherApplicantPosition"
                  >
                    <option
                      v-for="position in applicationPositions"
                      :key="position.id"
                      :value="position"
                    >
                      {{ position.name }}
                    </option>
                  </select>
                </div>
                <div v-if="showOtherApplicantPosition" class="mt-5">
                  <input
                    type="text"
                    name="otherProfAmh"
                    required
                    v-model="generalInfo.otherApplicantPosition"
                    class="mt-1 appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    autocomplete="off"
                    placeholder="Other Applicant Position"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- GS details -->

          <div class="container mx-auto bg-white">
            <div
              class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-2 mb-4 p-4"
            >
              <div>
                <div class="overflow-hidden shadow-sm">
                  <label for class="text-main-400">Organization Letter written for</label>

                  <input
                    type="text"
                    v-model="generalInfo.whomGoodStandingFor"
                    class="appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    autocomplete="off"
                    placeholder
                    required
                  />
                </div>
              </div>

              <div>
                <div class="overflow-hidden shadow-sm">
                  <label for class="text-main-400">Who Issued Previous License</label>

                  <select
                    class="form-select appearance-none block max-w-3xl px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    v-model="generalInfo.whoIssuedId"
                    required
                  >
                    <option v-for="region in regions" :key="region.id" :value="region">
                      {{ region.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <div class="overflow-hidden shadow-sm">
                  <label for class="text-main-400">License Registration Number</label>

                  <input
                    type="text"
                    v-model="generalInfo.licenseRegistrationNumber"
                    class="appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    autocomplete="off"
                    placeholder
                    required
                  />
                </div>
              </div>
              <div>
                <div class="overflow-hidden shadow-sm">
                  <label for class="text-main-400">License Issued Date</label>

                  <input
                    type="date"
                    v-model="generalInfo.licenseIssuedDate"
                    class="appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    autocomplete="off"
                    placeholder="example-MR,MRS"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- GS details -->
          <div class="flex justify-end mb-2 mr-1">
            <button
              class="float-right mt-8 inline-block px-6 py-2.5 bg-blue-700 text-main-400 max-w-3xl font-medium text-xs leading-tight uppercase rounded bg-white border hover:text-white hover:border-main-500 hover:bg-main-400 focus:bg-blue-700 focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out"
              type="submit"
              @click="saveDraft()"
            >
              Update
            </button>
            <button
              class="float-right mt-8 inline-block px-6 py-2.5 bg-blue-700 text-white max-w-3xl font-medium text-xs leading-tight uppercase rounded bg-main-400 border hover:text-main-400 hover:border-main-500 hover:bg-white focus:bg-blue-700 focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out"
              type="submit"
              @click="apply()"
            >
              Next
            </button>
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
import LicenseSummary from "./draftSummary.vue";
import Upload from "./draftUpload.vue";
import MainContent from "../../Shared/Menu.vue";
import { useToast } from "vue-toastification";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import Loading from "vue3-loading-overlay";
export default {
  components: { MainContent, LicenseSummary, Upload, Loading },

  setup() {
    const store = useStore();
    const toast = useToast();
    const route = useRoute();
    let generalInfo = ref({
      applicantId: +localStorage.getItem("userId"),
      applicantTypeId: "",
      residenceWoredaId: "",
      whomGoodStandingFor: "",
      licenseIssuedDate: "",
      whoIssuedId: {},
      licenseRegistrationNumber: "",
      GSProfessionals: {
        professionTypeId: "",
        professionalTypes: {},
        educationLevelId: "",
        otherProfessionType: "",
        otherProfessionTypeAmharic: "",
      },
      applicantPositionId: "",
      applicantTitleId: "",
      applicationStatusId: "",
      applicantPosition: "",
      educationLevelId: "",
      regionSelected: "",
      zoneSelected: "",
      woredaSelected: "",
      departmentId: "",
      applicantTypeSelected: "",
      expertLevelId: "",
      otherApplicantPosition: "",
      licenseFile: [],
    });

    let languages = ref([]);
    let withdrawData = ref({});
    let showOtherProfession = ref(false);
    let localData = ref([]);
    let regions = ref([]);
    let isDepartmentSelected = ref(false);
    let showOtherApplicantPosition = ref(false);
    let isEdLevelSelected = ref(false);
    let isAppTypeSelected = ref(false);
    let educationLevels = ref([]);
    let zones = ref([]);
    let woredas = ref([]);
    let departments = ref([]);
    let applicationPositions = ref([]);
    let applicantTitle = ref([]);
    let applicantTypes = ref([]);
    let showLocation = ref(false);
    let professionalTypes = ref([]);
    let activeState = ref(1);
    let showOccupation = ref(false);
    let showLanguage = ref(false);
    let isLoading = ref(false);
    const checkApplicantType = (applicantType) => {
      generalInfo.value.regionId = null;
      generalInfo.value.zoneId = null;
      generalInfo.value.woredaId = null;

      if (applicantType.code == "ETH") {
        generalInfo.value.expertLevelId = 4;
        showLocation.value = true;
      } else {
        generalInfo.value.expertLevelId = 3;
        showLocation.value = false;
      }
    };
    const zoneChangeHandler = () => {
      fetchWoredas();
    };
    const regionChangeHandler = () => {
      if (generalInfo.value.regionSelected && generalInfo.value.regionSelected.code) {
        switch (generalInfo.value.regionSelected.code) {
          case "FED":
            generalInfo.value.zoneSelected = null;
            generalInfo.value.woredaSelected = null;
            break;
          case "HAR":
            generalInfo.value.zoneSelected = {
              name: "Default Harar",
              id: 464,
              code: "ZN_HAR_DEF_54",
            };
            fetchWoredas();
            break;
          default:
            fetchZones();
            break;
        }
      }
    };
    const educationalLevelChange = () => {
      isEdLevelSelected.value = true;
      fetchProfessionalType(
        generalInfo.value.department.id,
        generalInfo.value.GSProfessionals.educationLevel.id
      );
    };
    const fetchZones = () => {
      store
        .dispatch("newlicense/getZones", generalInfo.value.regionSelected.id)
        .then((res) => {
          const zonesResult = res.data.data;
          zones.value = zonesResult;
        });
    };
    const checkOtherProfession = () => {
      if (
        generalInfo.value.GSProfessionals &&
        generalInfo.value.GSProfessionals.professionTypeId &&
        generalInfo.value.GSProfessionals.professionTypeId.name &&
        generalInfo.value.GSProfessionals.professionTypeId.name.toLowerCase() == "other"
      ) {
        showOtherProfession.value = true;
      } else {
        showOtherProfession.value = false;
      }
    };
    const checkOtherApplicantPosition = () => {
      if (
        generalInfo.value.applicantPosition.name &&
        generalInfo.value.applicantPosition.name.toLowerCase() == "other"
      ) {
        showOtherApplicantPosition.value = true;
      } else {
        showOtherApplicantPosition.value = false;
        generalInfo.value.otherApplicantPosition = "";
      }
    };
    const fetchApplicantType = () => {
      store.dispatch("goodstanding/getApplicantType").then((res) => {
        applicantTypes.value = res.data.data;
      });
    };
    const fetchApplicantTitle = () => {
      store.dispatch("goodstanding/getApplicantTitle").then((res) => {
        applicantTitle.value = res.data.data;
      });
    };

    const fetchDepartments = () => {
      store.dispatch("goodstanding/getDepartmentType").then((res) => {
        departments.value = res.data.data;
      });
    };
    const fetchApplicationPositions = () => {
      store.dispatch("goodstanding/getApplicantPosition").then((res) => {
        applicationPositions.value = res.data.data;
      });
    };
    const fetchRegions = async () => {
      await store.dispatch("goodstanding/getRegions").then((res) => {
        regions.value = res.data.data;
      });
    };
    const fetchZone = () => {
      generalInfo.value.regionId
        ? store
            .dispatch("goodstanding/getZones", generalInfo.value.regionId)
            .then((res) => {
              zones.value = res.data.data;
            })
        : "";
    };
    const fetchWoredas = () => {
      store
        .dispatch("goodstanding/getWoredas", generalInfo.value.zoneSelected.id)
        .then((res) => {
          woredas.value = res.data.data;
        });
    };
    const fetchProfessionalType = (departmentId, educationalLevelId) => {
      let profession = {
        departmentId: departmentId,
        educationalLevelId: educationalLevelId,
      };
      store.dispatch("newlicense/getProfessionalTypes", profession).then((res) => {
        professionalTypes.value = res.data.data;
      });
    };
    const setDepartment = () => {
      isDepartmentSelected.value = true;
    };

    const apply = () => {
      if (
        generalInfo.value.regionSelected &&
        generalInfo.value.regionSelected.code == "FED"
      ) {
        generalInfo.value.expertLevelId = 3;
      } else if (
        generalInfo.value.regionSelected &&
        generalInfo.value.regionSelected.code != "FED"
      ) {
        generalInfo.value.expertLevelId = 4;
      }
      let tempApplicationData = generalInfo.value;
      window.localStorage.setItem(
        "GSApplicationData",
        JSON.stringify(tempApplicationData)
      );
      store.dispatch("goodstanding/setGeneralInfo", generalInfo.value).then(() => {
        activeState.value++;
      });
    };
    const clearLocalData = () => {
      window.localStorage.removeItem("GSApplicationData");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    };
    const fetchEducationLevel = () => {
      store.dispatch("lookups/getEducationLevel").then((res) => {
        educationLevels.value = res.data.data;
      });
    };

    const saveDraft = () => {
      generalInfo.value.licenseFile = [];
      isLoading.value = true;
      if (
        generalInfo.value.regionSelected &&
        generalInfo.value.regionSelected.code == "FED"
      ) {
        generalInfo.value.expertLevelId = 3;
      } else if (
        generalInfo.value.regionSelected &&
        generalInfo.value.regionSelected.code != "FED"
      ) {
        generalInfo.value.expertLevelId = 4;
      }
      let license = {
        action: "DraftEvent",
        data: {
          applicantId: generalInfo.value.applicantId,
          applicantTypeId: generalInfo.value.applicantTypeId
            ? generalInfo.value.applicantTypeId
            : generalInfo.value.applicantType
            ? generalInfo.value.applicantType.id
            : null,
          applicationStatusId: generalInfo.value.applicationStatusId,
          residenceWoredaId: generalInfo.value.woredaSelected
            ? generalInfo.value.woredaSelected.id
            : null,
          applicantTitleId: generalInfo.value.applicantTitleId
            ? generalInfo.value.applicantTitleId
            : generalInfo.value.applicantTitle
            ? generalInfo.value.applicantTitle.id
            : null,
          whomGoodStandingFor: generalInfo.value.whomGoodStandingFor
            ? generalInfo.value.whomGoodStandingFor
            : "",
          applicantPositionId: generalInfo.value.applicantPositionId
            ? generalInfo.value.applicantPositionId
            : generalInfo.value.applicantPosition
            ? generalInfo.value.applicantPosition.id
            : null,
          licenseIssuedDate: generalInfo.value.licenseIssuedDate
            ? generalInfo.value.licenseIssuedDate
            : null,
          whoIssuedId: generalInfo.value.whoIssuedId
            ? generalInfo.value.whoIssuedId.id
            : "",
          licenseRegistrationNumber: generalInfo.value.licenseRegistrationNumber
            ? generalInfo.value.licenseRegistrationNumber
            : "",
          professionType: {
            professionTypeId:
              generalInfo.value.GSProfessionals &&
              generalInfo.value.GSProfessionals.professionalTypes
                ? generalInfo.value.GSProfessionals.professionalTypes.id
                : generalInfo.value.GSProfessionals &&
                  generalInfo.value.GSProfessionals.professionalTypeId
                ? generalInfo.value.GSProfessionals.professionalTypeId
                : null,
            educationLevelId:
              generalInfo.value.GSProfessionals &&
              generalInfo.value.GSProfessionals.educationLevel
                ? generalInfo.value.GSProfessionals.educationLevel.id
                : generalInfo.value.GSProfessionals.educationLevelId
                ? generalInfo.value.GSProfessionals.educationLevelId
                : null,
            otherProfessionType: generalInfo.value.GSProfessionals.otherProfessionType
              ? generalInfo.value.GSProfessionals.otherProfessionType
              : "",
            otherProfessionTypeAmharic: generalInfo.value.GSProfessionals
              .otherProfessionTypeAmharic
              ? generalInfo.value.GSProfessionals.otherProfessionTypeAmharic
              : "",
          },
          expertLevelId: generalInfo.value.expertLevelId
            ? generalInfo.value.expertLevelId
            : null,
          islegal: true,
          other_applicant_position: generalInfo.value.otherApplicantPosition
            ? generalInfo.value.otherApplicantPosition
            : "",
          departmentId: generalInfo.value.department
            ? generalInfo.value.department.id
            : generalInfo.value.departmentId
            ? generalInfo.value.departmentId
            : null,
          feedback: generalInfo.value.feedback ? generalInfo.value.feedback : "",
          id: route.params.id,
        },
      };

      store.dispatch("goodstanding/editGoodstandingLicense", license).then((res) => {
        if (res.data.status == "Success") {
          toast.success("Updated successfuly", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
          isLoading.value = false;
          localStorage.removeItem("GSApplicationData");
          loadFunctions();
        } else {
          toast.error("Error occured, please try again", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
          isLoading.value = false;
        }
      });
    };
    const fetchLanguages = () => {
      store.dispatch("lookups/getNativeLanguage").then((res) => {
        if (res.data.status == "Success") {
          languages.value = res.data.data;
        }
      });
    };
    const applicantTypeChangeHandler = async () => {
      if (generalInfo.value.applicantType.code == "ETH") {
        showLocation.value = true;
        showOccupation.value = true;
      } else {
        showLocation.value = false;
        showOccupation.value = false;
      }
      if (generalInfo.value.applicantType.code == "FOR") {
        fetchLanguages();
        showLanguage.value = true;
      } else {
        showLanguage.value = false;
      }
    };
    const loadFunctions = async () => {
      isLoading.value = true;

      await store
        .dispatch("goodstanding/getGoodStandingLicenseById", route.params.id)
        .then((res) => {
          withdrawData.value = res.data.data;
          generalInfo.value = res.data.data;
          generalInfo.value.whoIssuedId = res.data.data.whoIssued;
          generalInfo.value.licenseIssuedDate = res.data.data.licenseIssuedDate
            ? res.data.data.licenseIssuedDate.slice(0, 10)
            : "";
          generalInfo.value.regionSelected =
            res.data.data && res.data.data.woreda ? res.data.data.woreda.zone.region : "";
          generalInfo.value.otherApplicantPosition = generalInfo.value
            .other_applicant_position
            ? generalInfo.value.other_applicant_position
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
          applicantTypeChangeHandler();
          regionChangeHandler();
          zoneChangeHandler();
          generalInfo.value.education = JSON.parse(
            JSON.stringify(res.data.data.GSProfessionals)
          );

          generalInfo.value.applicantTypeSelected = res.data.data.applicantType;
          educationalLevelChange();
          if (
            res.data.data.residenceWoredaId == null &&
            res.data.data.applicantTypeId == 1
          ) {
            generalInfo.value.regionSelected = regions.value.filter(
              (el) => el.code == "FED"
            )
              ? regions.value.filter((el) => el.code == "FED")[0]
              : [];
          }
          checkOtherApplicantPosition();
          fetchProfessionalType(generalInfo.value.departmentId.id);
          checkOtherProfession();

          isDepartmentSelected.value = true;
          isEdLevelSelected.value = true;
          fetchApplicantType();
          fetchDepartments();
          fetchEducationLevel();

          fetchRegions();
          fetchZone();
          fetchWoredas();
          fetchApplicantTitle();
          fetchApplicationPositions();
          isLoading.value = false;
        });
    };
    onMounted(async () => {
      loadFunctions();
    });
    return {
      checkApplicantType,
      checkOtherProfession,
      fetchProfessionalType,
      regionChangeHandler,
      applicantTypeChangeHandler,
      zoneChangeHandler,
      educationalLevelChange,
      setDepartment,
      apply,
      fetchZone,
      showOtherProfession,
      saveDraft,
      applicantTitle,
      isDepartmentSelected,
      isEdLevelSelected,
      isAppTypeSelected,
      applicationPositions,
      educationLevels,
      showLocation,
      regions,
      woredas,
      isLoading,
      activeState,
      zones,
      professionalTypes,
      generalInfo,
      applicantTypes,
      departments,
      clearLocalData,
      showOtherApplicantPosition,
      checkOtherApplicantPosition,
      localData,
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
}
</style>
