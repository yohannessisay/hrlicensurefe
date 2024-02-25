<template>
  <PageHeader :path="path" :isDarkMode="isDarkMode"></PageHeader>

  <div class="mt-small flex justify-center">
    <h2
      :class="
        isDarkMode
          ? 'text-white text-3xl font-bold'
          : 'text-main-400 text-3xl font-bold'
      "
    >
      {{ $t("General Information") }}
    </h2>
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
      class="mx-auto max-w-4xl rounded-md w-full mt-10"
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
                >{{ $t("Applicant Type")}}</label
              ><span class="text-red-300">*</span>
              <select
                :class="
                  isDarkMode
                    ? 'form-select appearance-none bg-primary-100 block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                    : 'form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
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
                type="button"
                class="mt-8 inline-block px-6 py-2.5 bg-white text-main-400 max-w-3xl border hover:bg-main-400 hover:text-white font-medium text-xs leading-tight uppercase rounded hover:border-main-500 focus:bg-blue-700 focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out"
                @click="clearLocalData()"
              >
                <i class="fa fa-close"></i>
               {{ $t("Clear Form")}} 
              </button>
            </div>

            <div>
              <div class="overflow-hidden">
                <label
                  for=""
                  :class="isDarkMode ? 'text-white' : 'text-main-400'"
                  >{{ $t("Applicant Title")}}</label
                ><span class="text-red-300">*</span>

                <select
                  :class="
                    isDarkMode
                      ? 'form-select appearance-none bg-primary-100 block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                      : 'form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
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
        <!-- region -->
        <div
          v-if="showLocation"
          :class="
            isDarkMode
              ? ' rounded bg-secondaryDark border-b-2'
              : 'rounded bg-white border-b-2'
          "
        >
          <h2 class="text-yellow-300 text-lg">
            ***Please select the region you are applying for, not where you are
            currently living***
          </h2>
          <h2 class="text-yellow-300 font-bold text-base mb-4">
            *** እባክዎ የሚያመለክቱበትን ክልል ይምረጡ እንጂ አሁን የሚኖሩበትን ቦታ አይምረጡ***
          </h2>
          <div
            class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-2 mb-4 p-4 border-b"
          >
            <div class="flex flex-col mb-4">
              <label :class="isDarkMode ? 'text-white' : 'text-main-400'"
                >{{ $t("Region")}}<span class="text-red-300">*</span></label
              >
              <select
                :class="
                  isDarkMode
                    ? 'form-select appearance-none bg-primary-100 block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                    : 'form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                "
                v-model="generalInfo.regionSelected"
                @change="regionChangeHandler()"
                required
              >
                <option
                  v-for="region in regions"
                  :key="region.name"
                  :value="region"
                >
                  {{ region.name }}
                </option>
              </select>
            </div>
            <div
              class="flex flex-col mb-4"
              v-if="
                generalInfo.regionSelected &&
                generalInfo.regionSelected.code != 'FED' &&
                generalInfo.regionSelected.code != 'HAR'
              "
            >
              <label :class="isDarkMode ? 'text-white' : 'text-main-400'"
                >{{ $t("Zone")}}<span class="text-red-300">*</span></label
              >
              <select
                :class="
                  isDarkMode
                    ? 'form-select appearance-none bg-primary-100 block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                    : 'form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                "
                @change="zoneChangeHandler()"
                v-model="generalInfo.zoneSelected"
              >
                <option v-for="zone in zones" :key="zone.name" :value="zone">
                  {{ zone.name }}
                </option>
              </select>
            </div>
            <div
              class="flex flex-col"
              v-if="
                generalInfo.regionSelected &&
                generalInfo.regionSelected.code != 'FED'
              "
            >
              <label :class="isDarkMode ? 'text-white' : 'text-main-400'"
                >{{ $t("Woreda")}}<span class="text-red-300">*</span></label
              >
              <select
                :class="
                  isDarkMode
                    ? 'form-select appearance-none bg-primary-100 block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                    : 'form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                "
                v-model="generalInfo.woredaSelected"
                required
              >
                <option
                  v-for="woreda in woredas"
                  :key="woreda.name"
                  :value="woreda"
                >
                  {{ woreda.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <!-- end -->
        <div class="container border-b mb-4">
          <div
            class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-2 mb-4 p-4 border-b"
          >
            <div class="mb-4">
              <label :class="isDarkMode ? 'text-white' : 'text-main-400'"
                >{{ $t("Department")}}</label
              ><span class="text-red-300">*</span>
              <select
                :class="
                  isDarkMode
                    ? 'form-select appearance-none bg-primary-100 block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                    : 'form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                "
                v-model="generalInfo.departmentId"
                @change="setDepartment()"
                required
              >
                <option
                  v-for="department in departments"
                  :key="department.id"
                  :value="department"
                >
                  {{ department.name }}
                </option>
              </select>
            </div>

          <div class="mb-4">
              <label :class="isDarkMode ? 'text-white' : 'text-main-400'"
                >{{ $t("Education Level")}}</label
              ><span class="text-red-300">*</span>
              <select
                :class="
                  isDarkMode
                    ? 'form-select appearance-none bg-primary-100 block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                    : 'form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                "
                :disabled="!isDepartmentSelected"
                v-model="generalInfo.educationLevelId"
                @change="educationalLevelChange()"
                required
              >
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
                <label :class="isDarkMode ? 'text-white' : 'text-main-400'"
                  >{{ $t("Professional Type")}}</label
                ><span class="text-red-300">*</span>
                <select
                  :class="
                    isDarkMode
                      ? 'form-select appearance-none bg-primary-100 block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                      : 'form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                  "
                  :disabled="!isEdLevelSelected"
                  @change="checkOtherProfession()"
                  v-model="generalInfo.professionTypeId"
                  required
                >
                  <option
                    v-for="profession in professionalTypes"
                    :key="profession.name"
                    :value="profession"
                  >
                    {{ profession.name }}
                  </option>
                  <option value=""></option>
                </select>
              </div>

              <div v-if="showOtherProfession">
                <input
                  type="text"
                  :required="
                    generalInfo.applicantTypeId.code != 'FOR' &&
                    generalInfo.otherProfessionType &&
                    generalInfo.otherProfessionType.length > 0
                  "
                  name="otherProf"
                  v-model="generalInfo.otherProfessionType"
                  :class="
                    isDarkMode
                      ? 'appearance-none bg-primary-100 mb-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                      : 'appearance-none block w-full px-3 mb-2 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                  "
                  autocomplete="off"
                  placeholder="Profession english title"
                />
              </div>

              <div v-if="showOtherProfession">
                <input
                  type="text"
                  name="otherProfAmh"
                  :required="
                    generalInfo.applicantTypeId.code != 'FOR' &&
                    generalInfo.otherProfessionTypeAmharic &&
                    generalInfo.otherProfessionTypeAmharic.length > 0
                  "
                  v-model="generalInfo.otherProfessionTypeAmharic"
                  :class="
                    isDarkMode
                      ? 'appearance-none bg-primary-100 block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                      : 'appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                  "
                  autocomplete="off"
                  placeholder="Profession amharic title"
                />
              </div>
            </div>

            <div>
              <label :class="isDarkMode ? 'text-white' : 'text-main-400'"
                >{{ $t("Applicant Position")}}</label
              ><span class="text-red-300">*</span>
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
                :class="
                  isDarkMode
                    ? 'appearance-none bg-primary-100 block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out mt-1'
                    : 'appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out mt-1'
                "
                autocomplete="off"
                placeholder="Other Applicant Position"
              />
            </div>
          </div>
        </div>

        <!-- GS details -->
        <div
          :class="
            isDarkMode
              ? ' rounded-sm bg-secondaryDark  '
              : ' rounded-sm bg-white '
          "
        >
          <div class="container mx-auto">
            <div
              class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-2 p-4 border-b"
            >
              <div>
                <div class="overflow-hidden shadow-sm mb-4">
                  <label
                    for=""
                    :class="isDarkMode ? 'text-white' : 'text-main-400'"
                    >{{ $t("Organization Letter written for")}}</label
                  ><span class="text-red-300">*</span>
                  <input
                    type="text"
                    name="whomGS"
                    v-model="generalInfo.whomGoodStandingFor"
                    :class="
                      isDarkMode
                        ? 'appearance-none bg-primary-100 block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                        : 'appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                    "
                    autocomplete="off"
                    placeholder=""
                    required
                  />
                </div>
              </div>

              <div>
                <div class="overflow-hidden shadow-sm  mb-4">
                  <label
                    for=""
                    :class="isDarkMode ? 'text-white' : 'text-main-400'"
                    >{{ $t("License Issued Date")}}</label
                  >
                  <span class="text-red-300">*</span>
                  <input
                    type="date"
                    name="issuedDate"
                    v-model="generalInfo.licenseIssuedDate"
                    :class="
                      isDarkMode
                        ? 'appearance-none bg-primary-100 block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                        : 'appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                    "
                    autocomplete="off"
                    placeholder="example-MR,MRS"
                    required
                  />
                </div>
              </div>
              <div>
                <div class="overflow-hidden shadow-sm  mb-4">
                  <label
                    for=""
                    :class="isDarkMode ? 'text-white' : 'text-main-400'"
                    >{{ $t("License Registration Number")}}</label
                  ><span class="text-red-300">*</span>

                  <input
                    type="text"
                    name="licenseNum"
                    v-model="generalInfo.licenseRegistrationNumber"
                    :class="
                      isDarkMode
                        ? 'appearance-none bg-primary-100 block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                        : 'appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                    "
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
                    >{{ $t("Who Issued Previous License")}}</label
                  ><span class="text-red-300">*</span>

                  <select
                    :class="
                      isDarkMode
                        ? 'form-select appearance-none bg-primary-100 block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                        : 'form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0'
                    "
                    v-model="generalInfo.whoIssuedId"
                    required
                  >
                    <option
                      v-for="region in regions"
                      :key="region.id"
                      :value="region"
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

      <div class="vld-parent">
        <loading
          :active="isLoading"
          :is-full-page="false"
          :color="'#2F639D'"
          :opacity="1"
        ></loading>
        <div
          :class="
            isDarkMode
              ? 'flex justify-end mb-2  bg-secondaryDark p-2'
              : 'flex justify-end mb-2 bg-white p-2'
          "
        >
          <button
            class="float-right mb-4 inline-block px-6 py-2.5 bg-blue-700 text-main-400 max-w-3xl font-medium text-xs leading-tight uppercase rounded bg-white border hover:text-white hover:border-main-500 hover:bg-main-400 focus:bg-blue-700 focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out"
            type="submit"
            @click="saveDraft()"
          >
            {{ $t("Save As Draft")}}
          </button>
          <button
            class="float-right mb-4 inline-block px-6 py-2.5 bg-main-400 text-white max-w-3xl font-medium text-xs leading-tight uppercase rounded border hover:text-main-400 hover:border-main-500 hover:bg-white focus:bg-blue-700 focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out"
            type="submit"
          >
            {{ $t("Next")}}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import Loading from "vue3-loading-overlay";
import PageHeader from "../../Shared/PagesHeader.vue";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  props: ["activeState"],
  components: { Loading, PageHeader },
  emits: ["changeActiveState", "changeActiveStateMinus"],
  setup(props, { emit }) {
    const store = useStore();
    const toast = useToast();
    const router = useRouter();
    let isLoading = ref(false);
    const path = ref([
      { name: "Home", link: "/menu" },
      { name: "Goodstanding", link: "/Applicant/Goodstanding" },
      { name: "Apply", link: "/Applicant/Goodstanding" },
    ]);
    let generalInfo = ref({
      applicantId: +localStorage.getItem("userId"),
      applicantTypeId: JSON.parse(
        localStorage.getItem("applicantTypeSelected")
      ),
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
      otherApplicantPosition: "",
      licenseFile: [],
    });
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
    const convertOtherProf = (inputString) => {
      let trimmedString = inputString.replace(/\s+/g, " ").trim();
      let formattedString = trimmedString.replace(/\b\w/g, function (match) {
        return match.toUpperCase();
      });

      return formattedString;
    };
    const convertOtherProfAmh = (inputString) => {
      let trimmedString = inputString.replace(/\s+/g, " ").trim();

      return trimmedString;
    };
    const regionChangeHandler = () => {
      if (
        generalInfo.value.regionSelected &&
        generalInfo.value.regionSelected.code
      ) {
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
        generalInfo.value.otherProfessionTypeAmharic = "";
        generalInfo.value.otherProfessionType = "";
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
    const fetchProfessionalType = async (departmentId, educationalLevelId) => {
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
      (generalInfo.value.professionType.otherProfessionalType = generalInfo
        .value.otherProfessionType
        ? convertOtherProf(generalInfo.value.otherProfessionType)
        : ""),
        (generalInfo.value.professionType.otherProfessionTypeAmharic =
          generalInfo.value.otherProfessionTypeAmharic
            ? convertOtherProfAmh(generalInfo.value.otherProfessionTypeAmharic)
            : "");
      generalInfo.value.professionType.other_applicant_position = generalInfo
        .value.otherApplicantPosition
        ? convertOtherProf(generalInfo.value.otherApplicantPosition)
        : "";

      (generalInfo.value.otherProfessionType = generalInfo.value
        .otherProfessionType
        ? convertOtherProf(generalInfo.value.otherProfessionType)
        : ""),
        (generalInfo.value.otherProfessionTypeAmharic = generalInfo.value
          .otherProfessionTypeAmharic
          ? convertOtherProfAmh(generalInfo.value.otherProfessionTypeAmharic)
          : "");
      generalInfo.value.otherApplicantPosition = generalInfo.value
        .otherApplicantPosition
        ? convertOtherProf(generalInfo.value.otherApplicantPosition)
        : "";
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
              ? convertOtherProf(generalInfo.value.otherProfessionType)
              : "",
            otherProfessionTypeAmharic: generalInfo.value
              .otherProfessionTypeAmharic
              ? convertOtherProfAmh(
                  generalInfo.value.otherProfessionTypeAmharic
                )
              : "",
          },
          other_applicant_position: generalInfo.value.otherApplicantPosition
            ? convertOtherProf(generalInfo.value.otherApplicantPosition)
            : "",
          expertLevelId: generalInfo.value.expertLevelId
            ? generalInfo.value.expertLevelId
            : null,
          islegal: true,
          regionId: generalInfo.value.regionSelected
            ? generalInfo.value.regionSelected.id
            : "",
          regionCode: generalInfo.value.regionSelected
            ? generalInfo.value.regionSelected.code
            : "FED",
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
        .then(() => {
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
        });
    };

    onMounted(async () => {
      window.addEventListener("darkModeChanged", (data) => {
        isDarkMode.value = data.detail ? data.detail.content : "";
      });
      fetchApplicantType();
      fetchDepartments();

      fetchEducationLevel();
      fetchRegions();
      fetchZone();
      fetchWoredas();
      fetchApplicantTitle();
      fetchApplicationPositions();
      localData.value = window.localStorage.getItem("GSApplicationData")
        ? await JSON.parse(window.localStorage.getItem("GSApplicationData"))
        : {};
      if (localData.value.fromDraft) {
        localData.value = [];
        localStorage.removeItem("GSApplicationData");
      }
      if (Object.keys(localData.value).length != 0) {
        generalInfo.value = localData.value;
        checkOtherApplicantPosition();
        await fetchProfessionalType(generalInfo.value.departmentId.id);
        checkOtherProfession();
        isDepartmentSelected.value = true;
        isEdLevelSelected.value = true;
      }
      if (
        localStorage.getItem("applicantTypeSelected") &&
        Object.keys(JSON.parse(localStorage.getItem("applicantTypeSelected")))
          .length != 0
      ) {
        checkApplicantType(
          JSON.parse(localStorage.getItem("applicantTypeSelected"))
        );
      }
    });
    return {
      checkApplicantType,
      showOtherApplicantPosition,
      checkOtherProfession,
      fetchProfessionalType,
      regionChangeHandler,
      zoneChangeHandler,
      educationalLevelChange,
      setDepartment,
      submit,
      fetchZone,
      showOtherProfession,
      checkOtherApplicantPosition,
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
      path,
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
