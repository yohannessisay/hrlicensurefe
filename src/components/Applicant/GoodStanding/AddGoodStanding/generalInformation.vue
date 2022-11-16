<template>
  <nav class="bg-gray-100 px-5 py-3 rounded-md w-full">
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
      <li class="text-gray-500">Apply</li>
    </ol>
  </nav>
  <div
    class="
      block
      p-4
      rounded-lg
      shadow-lg
      bg-primary-200
      max-w-full
      mr-8
      mb-8
      sm:p-4
    "
  >
    <div class="mt-small flex justify-center">
      <h2 class="text-main-400 text-3xl font-bold">General Information</h2>
    </div>

    <form @submit.prevent="submit" class="mx-auto max-w-3xl w-full mt-10">
      <div class="mt-12 rounded-sm bg-white shadow-lg mb-8">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div
              class="
                flex
                justify-center
                text-6xl
                min-w-full
                rounded-xl
                p-6
                bg-gray-100
              "
            >
              <div>
                <label class="text-main-400">Applicant Type</label>
                <select
                  class="
                    form-select
                    appearance-none
                    block
                    xl:w-64
                    md:w-64
                    sm:w-64
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    hover:text-main-500 hover:border-main-500
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-main-400
                    focus:outline-none
                  "
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
                  class="
                    mt-8
                    inline-block
                    px-6
                    py-2.5
                    bg-white
                    text-main-400
                    max-w-3xl
                    border
                    hover:bg-main-400 hover:text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:border-main-500
                    focus:bg-blue-700
                    focus:shadow-lg
                    focus:outline-none
                    focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out
                  "
                  @click="clearLocalData()"
                >
                  <i class="fa fa-close"></i>
                  Clear Form
                </button>
              </div>
            </div>

            <div
              class="flex justify-center text-6xl rounded-none p-2 bg-gray-100"
            >
              <div>
                <div class="overflow-hidden shadow-sm">
                  <label for="" class="text-main-400">Applicant Title</label>

                  <select
                    class="
                      form-select
                      appearance-none
                      block
                      xl:w-64
                      md:w-64
                      sm:w-64
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      hover:text-main-500 hover:border-main-500
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700
                      focus:bg-white
                      focus:border-main-400
                      focus:outline-none
                    "
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
        </div>

        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div
              class="flex justify-center text-6xl rounded-xl p-2 bg-gray-100"
            >
              <div>
                <label class="text-main-400">Department</label>
                <select
                  class="
                    form-select
                    appearance-none
                    block
                    xl:w-64
                    md:w-64
                    sm:w-64
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    hover:text-main-500 hover:border-main-500
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-main-400
                    focus:outline-none
                  "
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
                <label class="text-main-400">Education Level</label>
                <select
                  class="
                    form-select
                    appearance-none
                    block
                    xl:w-64
                    md:w-64
                    sm:w-64
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    hover:text-main-500 hover:border-main-500
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-main-400
                    focus:outline-none
                  "
                  :disabled="!isDepartmentSelected"
                  v-model="generalInfo.professionType.educationLevelId"
                  @change="educationalLevelChange()"
                  required
                >
                  <option value="" disabled>
                    Please select department first
                  </option>
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
              class="
                grid grid-rows-3
                justify-center
                text-6xl
                rounded-xl
                p-2
                bg-gray-100
              "
            >
              <div class="mb-4">
                <label class="text-main-400">Profession</label>
                <select
                  class="
                    form-select
                    appearance-none
                    block
                    xl:w-64
                    md:w-64
                    sm:w-64
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    hover:text-main-500 hover:border-main-500
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-main-400
                    focus:outline-none
                  "
                  :disabled="!isEdLevelSelected"
                  @change="checkOtherProfession()"
                  v-model="generalInfo.professionType.professionTypeId"
                  required
                >
                  <option value="" disabled>
                    Please select education level first
                  </option>
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
                <label class="text-main-400">Other Profession</label>
                <input
                  type="text"
                  v-model="generalInfo.professionType.otherProfessionType"
                  class="
                    appearance-none
                    block
                    xl:w-64
                    md:w-64
                    sm:w-64
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    hover:text-main-500 hover:border-main-500
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-main-400
                    focus:outline-none
                  "
                  autocomplete="off"
                  placeholder=""
                  required
                />
              </div>

              <div v-show="showOtherProfession">
                <label class="text-main-400">Other Profession Amharic</label>
                <input
                  type="text"
                  v-model="generalInfo.professionType.otherProfessionTypeAmharic"
                  class="
                    appearance-none
                    block
                    xl:w-64
                    md:w-64
                    sm:w-64
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    hover:text-main-500 hover:border-main-500
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-main-400
                    focus:outline-none
                  "
                  autocomplete="off"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div
              class="flex justify-center text-6xl rounded-xl p-2 bg-gray-100"
            >
              <div>
                <label class="text-main-400">Applicant Position</label>
                <select
                  class="
                    form-select
                    appearance-none
                    block
                    xl:w-64
                    md:w-64
                    sm:w-64
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    hover:text-main-500 hover:border-main-500
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700
                    focus:bg-white
                    focus:border-main-400
                    focus:outline-none
                  "
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
      </div>

      <!-- region -->
      <div v-if="showLocation" class="pt-8 mt-12 rounded bg-white shadow-lg">
        <div class="flex">
          <div class="flex flex-col mb-medium w-2/5 ml-medium mr-12">
            <label class="text-main-400">Region</label>
            <select
              class="
                form-select
                appearance-none
                block
                max-w-3xl
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
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
            <label class="text-main-400">Zone</label>
            <select
              class="
                form-select
                appearance-none
                block
                max-w-3xl
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
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
            <label class="text-main-400">Woreda</label>
            <select
              class="
                form-select
                appearance-none
                block
                max-w-3xl
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
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

      <!-- GS details -->
      <div class="mt-12 rounded-sm bg-white shadow-lg mb-8">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div
              class="
                flex
                justify-center
                text-6xl
                rounded-xl
                ml-4
                p-2
                bg-gray-100
              "
            >
              <div>
                <div class="overflow-hidden shadow-sm">
                  <label for="" class="text-main-400"
                    >Organization Letter written for</label
                  >

                  <input
                    type="text"
                    v-model="generalInfo.whomGoodStandingFor"
                    class="
                      appearance-none
                      block
                      xl:w-64
                      md:w-64
                      sm:w-64
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      hover:text-main-500 hover:border-main-500
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700
                      focus:bg-white
                      focus:border-main-400
                      focus:outline-none
                    "
                    autocomplete="off"
                    placeholder=""
                    required
                  />
                </div>
              </div>
            </div>

            <div
              class="
                flex
                justify-center
                text-6xl
                rounded-xl
                ml-4
                p-2
                bg-gray-100
              "
            >
              <div>
                <div class="overflow-hidden shadow-sm">
                  <label for="" class="text-main-400"
                    >Who Issued Previous License</label
                  >

                  <input
                    type="text"
                    v-model="generalInfo.whoIssued"
                    class="
                      appearance-none
                      block
                      xl:w-64
                      md:w-64
                      sm:w-64
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      hover:text-main-500 hover:border-main-500
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700
                      focus:bg-white
                      focus:border-main-400
                      focus:outline-none
                    "
                    autocomplete="off"
                    placeholder=""
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div
              class="
                flex
                justify-center
                text-6xl
                ml-4
                mb-4
                rounded-xl
                p-2
                bg-gray-100
              "
            >
              <div>
                <div class="overflow-hidden shadow-sm">
                  <label for="" class="text-main-400"
                    >License Registration Number</label
                  >

                  <input
                    type="text"
                    v-model="generalInfo.licenseRegistrationNumber"
                    class="
                      appearance-none
                      block
                      xl:w-64
                      md:w-64
                      sm:w-64
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      hover:text-main-500 hover:border-main-500
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700
                      focus:bg-white
                      focus:border-main-400
                      focus:outline-none
                    "
                    autocomplete="off"
                    placeholder=""
                    required
                  />
                </div>
              </div>
            </div>

            <div
              class="flex justify-center text-6xl rounded-xl p-2 bg-gray-100"
            >
              <div>
                <div class="overflow-hidden shadow-sm">
                  <label for="" class="text-main-400"
                    >License Issued Date</label
                  >

                  <input
                    type="date"
                    v-model="generalInfo.licenseIssuedDate"
                    class="
                      appearance-none
                      block
                      xl:w-64
                      md:w-64
                      sm:w-64
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      hover:text-main-500 hover:border-main-500
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700
                      focus:bg-white
                      focus:border-main-400
                      focus:outline-none
                    "
                    autocomplete="off"
                    placeholder="example-MR,MRS"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- GS details -->
      <div class="flex justify-end mb-2 mr-1">
        <button
          class="
            float-right
            mt-8
            inline-block
            px-6
            py-2.5
            bg-blue-700
            text-main-400
            max-w-3xl
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            bg-white
            border
            hover:text-white hover:border-main-500 hover:bg-main-400
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
          type="submit"
          @click="saveDraft()"
        >
          Save as draft
        </button>
        <button
          class="
            float-right
            mt-8
            inline-block
            px-6
            py-2.5
            bg-blue-700
            text-main-400
            max-w-3xl
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            bg-white
            border
            hover:text-white hover:border-main-500 hover:bg-main-400
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
          type="submit"
          @click="apply()"
        >
          Next
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import { useToast } from "vue-toastification";
export default {
  props: ["activeState"],
  components: {},

  setup(props, { emit }) {
    const store = useStore();
    const toast = useToast();
    let generalInfo = ref({
      applicantId: +localStorage.getItem("userId"),
      applicantTypeId: "",
      residenceWoredaId: "",
      whomGoodStandingFor: "",
      licenseIssuedDate: "",
      whoIssued: "",
      licenseRegistrationNumber: "",
      professionType: { professionTypeId: "", educationLevelId: "" },
      applicantPositionId: "",
      otherProfessionType: "",
      otherProfessionTypeAmharic: "",
      applicantTitleId: "",
      applicationStatusId: "",
      applicantPosition: "",
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
        generalInfo.value.professionType.educationLevelId.id
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
        generalInfo.value.professionType &&
        generalInfo.value.professionType.professionTypeId &&
        generalInfo.value.professionType.professionTypeId.code == "OTH"
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

    const apply = () => {
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
      window.localStorage.setItem("GSApplicationData", "");
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
          whoIssued: generalInfo.value.whoIssued
            ? generalInfo.value.whoIssued
            : "",
          licenseRegistrationNumber: generalInfo.value.licenseRegistrationNumber
            ? generalInfo.value.licenseRegistrationNumber
            : "",
          professionType: {
            professionTypeId: generalInfo.value.professionType
              ? generalInfo.value.professionType.professionTypeId.id
              : null,
            educationLevelId: generalInfo.value.professionType
              ? generalInfo.value.professionType.educationLevelId.id
              : null,
          },
          expertLevelId: generalInfo.value.expertLevelId
            ? generalInfo.value.expertLevelId
            : null,
          islegal: true,
          otherProfessionalType: generalInfo.value.otherProfessionType
            ? generalInfo.value.otherProfessionType
            : "",
          otherProfessionalTypeAmharic: generalInfo.value
            .otherProfessionTypeAmharic
            ? generalInfo.value.otherProfessionTypeAmharic
            : "",
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
            localStorage.removeItem("GSApplicationData");
            location.reload();
          } else {
            toast.error("Error occured, please try again", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
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
      zones,
      professionalTypes,
      generalInfo,
      applicantTypes,
      departments,
      clearLocalData,
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
