<template>
  <nav class="bg-gray-100 px-5 py-3 rounded-md w-full mb-10" id="topNav">
    <ol class="list-reset flex">
      <li>
        <router-link to="/menu">
          <a href="#" :class="isDarkMode ? 'text-white' : 'text-main-400'"
            >Home</a
          >
        </router-link>
      </li>
      <li><span class="text-gray-500 mx-2">/</span></li>
      <li>
        <router-link to="/Applicant/GoodStanding">
          <a href="#" :class="isDarkMode ? 'text-white' : 'text-main-400'"
            >Goodstanding</a
          >
        </router-link>
      </li>
      <li><span class="text-gray-500 mx-2">/</span></li>
      <li :class="isDarkMode ? 'text-main-400' : 'text-main-400'">Apply</li>
    </ol>
  </nav>

  <div class="mt-small flex justify-center">
    <h2 class="text-main-400 text-3xl font-bold">General Information</h2>
  </div>
  <!-- <div class="float-container" @click="darkMode()">
    <a href="#" class="icon one"> </a>
  </div> -->
  <div class="vld-parent mt-4">
    <loading
      :active="isLoading"
      :is-full-page="false"
      :color="'#2F639D'"
      :opacity="1"
    ></loading>
    <form
      @submit.prevent="submit"
      class="mx-auto max-w-4xl rounded-md shadow-md w-full mt-10"
    >
      <div
        :class="
          isDarkMode
            ? 'mt-12 rounded-sm bg-secondaryDark '
            : 'mt-12 rounded-sm bg-white  p-2'
        "
      >
        <div class="container mx-auto border-b mb-4">
          <div
            class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-2 mb-4 p-4"
          >
            <div>
              <label :class="isDarkMode ? 'text-white' : 'text-main-400'"
                >Applicant Type</label
              ><span class="text-red-300">*</span>
              <select
                class="form-select appearance-none block xl:w-64 md:w-64 sm:w-64 px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                aria-label="Default select example"
                @change="checkApplicantType(generalInfo.applicantTypeId)"
                v-model="generalInfo.applicantTypeId"
                required
              >
                <option
                  v-for="applicant in applicantTypes"
                  :key="applicant.name"
                  :value="applicant"
                >
                  {{ applicant.name }}
                </option>
              </select>
              <button
                v-show="Object.keys(localData).length != 0"
                type="button"
                class="mt-8 inline-block px-6 py-2.5 bg-white text-main-400 max-w-3xl border hover:bg-main-400 hover:text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:border-main-500 focus:bg-blue-700 focus:shadow-md focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out"
                @click="clearLocalData()"
              >
                <i class="fa fa-close"></i>
                Clear Form
              </button>
            </div>

            <div>
              <div class="overflow-hidden  ">
                <label
                  for=""
                  :class="isDarkMode ? 'text-white' : 'text-main-400'"
                  >Applicant Title</label
                ><span class="text-red-300">*</span>

                <select
                  class="form-select appearance-none block xl:w-64 md:w-64 sm:w-64 px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                  aria-label="Default select example"
                  v-model="generalInfo.applicantTitleId"
                  required
                >
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
        <div
          v-if="showLocation"
          :class="
            isDarkMode ? ' rounded bg-secondaryDark ' : 'rounded bg-white '
          "
        >
          <div
            class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-2 mb-4 p-4 border-b"
          >
            <div class="flex flex-col mb-4">
              <label :class="isDarkMode ? 'text-white' : 'text-main-400'"
                >Region<span class="text-red-300">*</span></label
              >
              <select
                class="form-select appearance-none block max-w-3xl px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
            <div class="flex flex-col ">
              <label :class="isDarkMode ? 'text-white' : 'text-main-400'"
                >Zone<span class="text-red-300">*</span></label
              >
              <select
                class="form-select appearance-none block max-w-3xl px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
            <div class="flex flex-col ">
              <label :class="isDarkMode ? 'text-white' : 'text-main-400'"
                >Woreda<span class="text-red-300">*</span></label
              >
              <select
                class="form-select appearance-none block max-w-3xl px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                v-model="generalInfo.woredaSelected"
                required
              >
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
        <div class="container mx-auto border-b mb-4">
          <div
            class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-2 mb-4 p-4 border-b"
          >
            <div
              class="flex justify-center text-6xl rounded-xl p-2 bg-gray-100"
            >
              <div>
                <label :class="isDarkMode ? 'text-white' : 'text-main-400'"
                  >Department</label
                ><span class="text-red-300">*</span>
                <select
                  class="form-select appearance-none block xl:w-64 md:w-64 sm:w-64 px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                  v-model="generalInfo.departmentId"
                  @change="setDepartment()"
                  required
                >
                  <option
                    v-for="department in departments"
                    v-bind:key="department.id"
                    v-bind:value="department"
                  >
                    {{ department.name }}
                  </option>
                </select>
              </div>
            </div>
            <div
              class="flex justify-center text-6xl rounded-xl p-2 bg-gray-100"
            >
              <div>
                <label :class="isDarkMode ? 'text-white' : 'text-main-400'"
                  >Education Level</label
                ><span class="text-red-300">*</span>
                <select
                  class="form-select appearance-none block xl:w-64 md:w-64 sm:w-64 px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                  :disabled="!isDepartmentSelected"
                  v-model="generalInfo.educationLevelId"
                  @change="educationalLevelChange()"
                  required
                >
                  <option value="" disabled
                    >Please select department first</option
                  >
                  <option
                    v-for="edLevel in educationLevels"
                    v-bind:key="edLevel.name"
                    v-bind:value="edLevel"
                  >
                    {{ edLevel.name }}
                  </option>
                </select>
              </div>
            </div>
            <div
              class="flex justify-center text-6xl rounded-xl p-2 bg-gray-100"
            >
              <div class="grid grid-cols-1">
                <div class="mb-4 ">
                  <label :class="isDarkMode ? 'text-white' : 'text-main-400'"
                    >Profession</label
                  ><span class="text-red-300">*</span>
                  <select
                    class="form-select appearance-none block xl:w-64 md:w-64 sm:w-64 px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    :disabled="!isEdLevelSelected"
                    @change="checkOtherProfession()"
                    v-model="generalInfo.professionTypeId"
                    required
                  >
                    <option value="" disabled
                      >Please select education level first</option
                    >
                    <option
                      v-for="profession in professionalTypes"
                      v-bind:key="profession.name"
                      v-bind:value="profession"
                    >
                      {{ profession.name }}
                    </option>
                    <option value=""></option>
                  </select>
                </div>

                <div v-show="showOtherProfession">
                  <input
                    type="text"
                    name="otherProf"
                    v-model="generalInfo.otherProfessionType"
                    class="mb-2 appearance-none block xl:w-64 md:w-64 sm:w-64 px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    autocomplete="off"
                    placeholder="Profession english title"
                  />
                </div>

                <div v-show="showOtherProfession">
                  <input
                    type="text"
                    name="otherProfAmh"
                    v-model="generalInfo.otherProfessionTypeAmharic"
                    class="appearance-none block xl:w-64 md:w-64 sm:w-64 px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    autocomplete="off"
                    placeholder="Profession amharic title"
                  />
                </div>
              </div>
            </div>

            <div
              class="flex justify-center text-6xl rounded-xl p-2 bg-gray-100"
            >
              <div>
                <label :class="isDarkMode ? 'text-white' : 'text-main-400'"
                  >Applicant Position</label
                ><span class="text-red-300">*</span>
                <select
                  class="form-select appearance-none block xl:w-64 md:w-64 sm:w-64 px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                  v-model="generalInfo.applicantPosition"
                  required
                >
                  <option
                    v-for="position in applicationPositions"
                    v-bind:key="position.id"
                    v-bind:value="position"
                  >
                    {{ position.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- GS details -->
        <div
          :class="
            isDarkMode
              ? ' rounded-sm bg-secondaryDark shadow-md mb-8'
              : ' rounded-sm bg-white mb-8'
          "
        >
          <div class="container mx-auto">
            <div
              class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-2 mb-4 p-4 border-b"
            >
              <div>
                <div class="overflow-hidden shadow-sm">
                  <label
                    for=""
                    :class="isDarkMode ? 'text-white' : 'text-main-400'"
                    >Organization Letter written for</label
                  ><span class="text-red-300">*</span>
                  <input
                    type="text"
                    name="whomGS"
                    v-model="generalInfo.whomGoodStandingFor"
                    class="appearance-none block xl:w-64 md:w-64 sm:w-64 px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    autocomplete="off"
                    placeholder=""
                    required
                  />
                </div>
              </div>

              <div>
                <div class="overflow-hidden shadow-sm">
                  <label
                    for=""
                    :class="isDarkMode ? 'text-white' : 'text-main-400'"
                    >License Issued Date</label
                  >
                  <span class="text-red-300">*</span>
                  <input
                    type="date"
                    name="issuedDate"
                    v-model="generalInfo.licenseIssuedDate"
                    class="appearance-none block xl:w-64 md:w-64 sm:w-64 px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    autocomplete="off"
                    placeholder="example-MR,MRS"
                    required
                  />
                </div>
              </div>
              <div>
                <div class="overflow-hidden shadow-sm">
                  <label
                    for=""
                    :class="isDarkMode ? 'text-white' : 'text-main-400'"
                    >License Registration Number</label
                  ><span class="text-red-300">*</span>

                  <input
                    type="text"
                    name="licenseNum"
                    v-model="generalInfo.licenseRegistrationNumber"
                    class="appearance-none block xl:w-64 md:w-64 sm:w-64 px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    autocomplete="off"
                    placeholder=""
                    required
                  />
                </div>
              </div>

              <div>
                <div class="overflow-hidden shadow-sm">
                  <label
                    for=""
                    :class="isDarkMode ? 'text-white' : 'text-main-400'"
                    >Who Issued Previous License</label
                  ><span class="text-red-300">*</span>

                  <select
                    class="form-select appearance-none block max-w-3xl px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    v-model="generalInfo.whoIssuedId"
                    required
                  >
                    <option
                      v-for="region in regions"
                      v-bind:key="region.id"
                      v-bind:value="region"
                    >
                      {{ region.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="vld-parent ">
        <loading
          :active="isLoading"
          :is-full-page="false"
          :color="'#2F639D'"
          :opacity="1"
        ></loading>
        <div class="flex justify-end mb-2 mr-1 bg-white">
          <button
            class="float-right mb-8 inline-block px-6 py-2.5 bg-blue-700 text-main-400 max-w-3xl font-medium text-xs leading-tight uppercase rounded   bg-white border hover:text-white hover:border-main-500 hover:bg-main-400 focus:bg-blue-700 focus:shadow-md focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out"
            type="submit"
            @click="saveDraft()"
          >
            Save as draft
          </button>
          <button
            class="float-right mb-8 inline-block px-6 py-2.5 bg-main-400 text-white max-w-3xl font-medium text-xs leading-tight uppercase rounded  border hover:text-main-400 hover:border-main-500 hover:bg-white focus:bg-blue-700 focus:shadow-md focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out"
            type="submit"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, onMounted, getCurrentInstance } from "vue";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  props: ["activeState"],
  components: { Loading },
  emits: ["darkMode", "changeActiveState", "changeActiveStateMinus"],
  setup(props, { emit }) {
    const store = useStore();
    const toast = useToast();
    const router = useRouter();
    let isLoading = ref(false);
    let generalInfo = ref({
      applicantId: +localStorage.getItem("userId"),
      applicantTypeId: "",
      residenceWoredaId: "",
      whomGoodStandingFor: "",
      licenseIssuedDate: "",
      whoIssuedId: {},
      licenseRegistrationNumber: "",
      professionType: { professionTypeId: "", educationLevelId: "" },
      applicantPositionId: "",
      otherProfessionType: "",
      otherProfessionTypeAmharic: "",
      applicantTitleId: "",
      applicationStatusId: "",
      applicantPosition: "",
      professionTypeId: "",
      educationLevelId: "",
      regionSelected: "",
      zoneSelected: "",
      woredaSelected: "",
      departmentId: "",
      expertLevelId: "",
      licenseFile: [],
    });
    let showOtherProfession = ref(false);
    let localData = ref([]);
    let regions = ref([]);
    let errorFields = ref({});
    let isDepartmentSelected = ref(false);
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
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    let professionalTypes = ref([]);

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
      fetchZones();
    };
    const educationalLevelChange = () => {
      isEdLevelSelected.value = true;

      fetchProfessionalType(
        generalInfo.value.departmentId.id,
        generalInfo.value.educationLevelId.id
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
        generalInfo.value.professionTypeId.name &&
        generalInfo.value.professionTypeId.name.toLowerCase() == "other"
      ) {
        showOtherProfession.value = true;
      } else {
        showOtherProfession.value = false;
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
    const fetchRegions = () => {
      store.dispatch("goodstanding/getRegions").then((res) => {
        regions.value = res.data.data;
      });
    };
    const fetchZone = () => {
      store
        .dispatch("goodstanding/getZones", generalInfo.value.regionId)
        .then((res) => {
          zones.value = res.data.data;
        });
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
      store
        .dispatch("newlicense/getProfessionalTypes", profession)
        .then((res) => {
          professionalTypes.value = res.data.data;
        });
    };
    const setDepartment = () => {
      isDepartmentSelected.value = true;
      fetchProfessionalType(generalInfo.value.departmentId.id);
    };

    const submit = () => {
      generalInfo.value.applicantTypeId == ""
        ? (errorFields.value.applicantTypeId = true)
        : delete errorFields.value.applicantTypeId;

      generalInfo.value.applicantTitleId == ""
        ? (errorFields.value.applicantTitleId = true)
        : delete errorFields.value.applicantTitleId;

      generalInfo.value.departmentId == ""
        ? (errorFields.value.departmentId = true)
        : delete errorFields.value.departmentId;

      generalInfo.value.educationLevelId == ""
        ? (errorFields.value.educationLevelId = true)
        : delete errorFields.value.educationLevelId;

      generalInfo.value.professionTypeId == ""
        ? (errorFields.value.professionTypeId = true)
        : delete errorFields.value.professionTypeId;

      generalInfo.value.applicantPosition == ""
        ? (errorFields.value.applicantPosition = true)
        : delete errorFields.value.applicantPosition;

      generalInfo.value.whomGoodStandingFor == ""
        ? (errorFields.value.whomGoodStandingFor = true)
        : delete errorFields.value.whomGoodStandingFor;
      generalInfo.value.whoIssuedId == ""
        ? (errorFields.value.whoIssuedId = true)
        : delete errorFields.value.whoIssuedId;
      generalInfo.value.licenseRegistrationNumber == ""
        ? (errorFields.value.licenseRegistrationNumber = true)
        : delete errorFields.value.licenseRegistrationNumber;
      generalInfo.value.licenseIssuedDate == ""
        ? (errorFields.value.licenseIssuedDate = true)
        : delete errorFields.value.licenseIssuedDate;

      if (Object.keys(errorFields.value).length > 0) {
        toast.error("Fill out fileds marked red", {
          timeout: 5000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true,
        });
        return;
      }

      let tempApplicationData = generalInfo.value;
      window.localStorage.setItem(
        "GSApplicationData",
        JSON.stringify(tempApplicationData)
      );
      store
        .dispatch("goodstanding/setGeneralInfo", generalInfo.value)
        .then(() => {
          emit("changeActiveState");
        });
    };
    const clearLocalData = () => {
      window.localStorage.removeItem("GSApplicationData");
      window.indexedDB.deleteDatabase("GSdocumentUploads");

      window.location.reload();
    };
    const fetchEducationLevel = () => {
      store.dispatch("lookups/getEducationLevel").then((res) => {
        educationLevels.value = res.data.data;
      });
    };
    const darkMode = () => {
      const instance = getCurrentInstance();
      emit("darkMode");
      if (isDarkMode.value == true) {
        isDarkMode.value = false;
        instance?.proxy?.forceUpdate();
      } else {
        isDarkMode.value = true;

        instance?.proxy?.forceUpdate();
      }
    };
    const saveDraft = () => {
      generalInfo.value.licenseFile = [];
      isLoading.value = true;
      let license = {
        action: "DraftEvent",
        data: {
          applicantId: generalInfo.value.applicantId,
          applicantTypeId: generalInfo.value.applicantTypeId.id,
          residenceWoredaId: generalInfo.value.woredaSelected
            ? generalInfo.value.woredaSelected.id
            : null,
          applicantTitleId: generalInfo.value.applicantTitleId
            ? generalInfo.value.applicantTitleId.id
            : "",
          whomGoodStandingFor: generalInfo.value.whomGoodStandingFor
            ? generalInfo.value.whomGoodStandingFor
            : "",
          applicantPositionId: generalInfo.value.applicantPosition
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
            professionTypeId: generalInfo.value
              ? generalInfo.value.professionTypeId.id
              : null,
            educationLevelId: generalInfo.value
              ? generalInfo.value.educationLevelId.id
              : null,
            otherProfessionalType: generalInfo.value.otherProfessionType
              ? generalInfo.value.otherProfessionType
              : "",
            otherProfessionalTypeAmharic: generalInfo.value
              .otherProfessionTypeAmharic
              ? generalInfo.value.otherProfessionTypeAmharic
              : "",
          },
          expertLevelId: generalInfo.value.expertLevelId
            ? generalInfo.value.expertLevelId
            : null,
          islegal: true,

          departmentId: generalInfo.value.departmentId.id
            ? generalInfo.value.departmentId.id
            : null,
          feedback: generalInfo.value.feedback
            ? generalInfo.value.feedback
            : "",
        },
      };
      store
        .dispatch("goodstanding/addGoodstandingLicense", license)
        .then((res) => {
          if (res.data.status == "Success") {
            toast.success("Applied successfuly", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            isLoading.value = false;
            localStorage.removeItem("GSApplicationData");
            router.push({ path: "/Applicant/GoodStanding/draft" });
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
    onMounted(async () => {
      fetchApplicantType();
      fetchDepartments();
      fetchProfessionalType();
      fetchEducationLevel();
      fetchRegions();
      fetchZone();
      fetchWoredas();
      fetchApplicantTitle();
      fetchApplicationPositions();
      localData.value = window.localStorage.getItem("GSApplicationData")
        ? JSON.parse(window.localStorage.getItem("GSApplicationData"))
        : {};
      if (Object.keys(localData.value).length != 0) {
        generalInfo.value = localData.value;
      }
    });
    return {
      checkApplicantType,
      checkOtherProfession,
      fetchProfessionalType,
      regionChangeHandler,
      zoneChangeHandler,
      educationalLevelChange,
      setDepartment,
      submit,
      darkMode,
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
      zones,
      isDarkMode,
      professionalTypes,
      generalInfo,
      applicantTypes,
      departments,
      clearLocalData,
      localData,
      isLoading,
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
