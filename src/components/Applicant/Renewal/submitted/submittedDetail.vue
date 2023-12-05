<template>
  <main-content :url="'renewal'">
    <nav class="bg-gray-100 px-5 py-3 rounded-md w-full mb-10" id="topNav">
      <ol class="list-reset flex">
        <li>
          <router-link to="/menu">
            <a href="#" class="text-main-400 hover:text-blue-700">Home</a>
          </router-link>
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li>
          <router-link to="/Applicant/Renewal">
            <a href="#" class="text-main-400 hover:text-blue-700">Renewal</a>
          </router-link>
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li class="text-gray-500">Edit</li>
      </ol>
    </nav>
    <div class="vld-parent">
      <loading
        :active="isLoading"
        :can-cancel="true"
        :is-full-page="false"
        :color="'#2F639D'"
        :opacity="1"
      ></loading>
      <div v-if="invalidLicenseStat != true">
        <div
          v-if="activeState == 1"
          class="block p-6 rounded-lg bg-white max-w-full mr-8 mb-8 sm:p-4 ml-8"
        >
          <div class="mt-small flex justify-center">
            <h2 class="text-main-400 text-3xl font-bold">General Information</h2>
          </div>

          <form @submit.prevent="submit" class="mx-auto w-full mt-10">
            <div class="mb-4 border-b-2">
              <!-- applican type -->
              <div
                class="grid grid-cols-1 sm:grid-rows-1 lg:grid-cols-4 mdlg:grid-cols-2 md:grid-cols-2 p-2 mb-2"
              >
                <div class="">
                  <label class="text-main-400">Applicant Type</label>

                  <select
                    class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    aria-label="Default select example"
                    @change="applicantTypeChangeHandler()"
                    v-model="generalInfo.applicantType"
                    :disabled="
                      generalInfo.multipleDepartment
                        ? generalInfo.multipleDepartment.length > 0
                        : 0
                    "
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
                </div>
                <div v-if="showLanguage" class="">
                  <label class="text-main-400 lg:ml-4">Language Type</label>
                  <select
                    class="form-select appearance-none block lg:ml-4 w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    v-model="generalInfo.nativeLanguageSelected"
                  >
                    <option
                      v-for="language in languages"
                      :key="language.name"
                      :value="language"
                    >
                      {{ language.name }}
                    </option>
                  </select>
                </div>
                <div v-if="showOccupation">
                  <label class="text-main-400 lg:ml-4">Occupation Type</label>
                  <select
                    class="form-select appearance-none block lg:ml-4 w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    v-model="generalInfo.occupationTypes"
                  >
                    <option
                      v-for="occupation in occupations"
                      :key="occupation.name"
                      :value="occupation"
                    >
                      {{ occupation.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <!-- region -->
            <div v-if="showLocation" class="border-b-2">
              <h2 class="text-yellow-300 text-xl">
                ***Please select the region you are applying for, not where you are
                currently living***
              </h2>
              <div
                class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 mdlg:grid-cols-3 md:grid-cols-3 p-2"
              >
                <div class="mr-4">
                  <label class="text-main-400">Region</label>
                  <select
                    class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    :disabled="
                      generalInfo.multipleDepartment
                        ? generalInfo.multipleDepartment.length > 0
                        : 0
                    "
                    v-model="generalInfo.regionSelected"
                    @change="regionChangeHandler()"
                    required
                  >
                    <option v-for="region in regions" :key="region.name" :value="region">
                      {{ region.name }}
                    </option>
                  </select>
                </div>
                <div class="mr-4" v-if="generalInfo.regionSelected.code != 'HAR'">
                  <label class="text-main-400">Zone</label>
                  <select
                    class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    :disabled="
                      generalInfo.multipleDepartment
                        ? generalInfo.multipleDepartment.length > 0
                        : 0
                    "
                    v-model="generalInfo.zoneSelected"
                    @change="zoneChangeHandler()"
                    required
                  >
                    <option
                      :value="generalInfo.zoneSelected.id"
                      :key="generalInfo.zoneSelected.id"
                      selected
                    >
                      {{ generalInfo.zoneSelected.name }}
                    </option>
                    <option v-for="zone in zones" :key="zone.name" :value="zone">
                      {{ zone.name }}
                    </option>
                  </select>
                </div>

                <div class="mr-4">
                  <label class="text-main-400">Woreda</label>
                  <select
                    class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    :disabled="
                      generalInfo.multipleDepartment
                        ? generalInfo.multipleDepartment.length > 0
                        : 0
                    "
                    v-model="generalInfo.woredaSelected"
                    required
                  >
                    <option v-for="woreda in woredas" :key="woreda.name" :value="woreda">
                      {{ woreda.name }}
                    </option>
                    <option selected>
                      {{ generalInfo ? generalInfo.woredaSelected.name : "" }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <!-- end -->

            <!-- educational institution and department -->
            <div class="border-b-2 mb-4" v-if="generalInfo.educations.length < 3">
              <div
                class="grid grid-cols-1 gap-4 sm:grid-rows-1 lg:grid-cols-4 mdlg:grid-cols-2 md:grid-cols-2 p-2"
              >
                <div class="">
                  <label class="text-main-400">Department</label>
                  <select
                    class="form-select mb-2 appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    v-model="generalInfo.departmentSelected"
                    @change="departmentChange()"
                  >
                    <option
                      v-for="department in departments"
                      :key="department.name"
                      :value="department"
                    >
                      {{ department.name }}
                    </option>
                  </select>
                </div>
                <div>
                  <label class="text-main-400">Education Level </label>
                  <select
                    class="form-select mb-2 appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    :disabled="!isDepartmentSelected"
                    v-model="generalInfo.educationalLevelSelected"
                    @change="educationalLevelChange()"
                  >
                    <option
                      v-for="educationalLevel in educationalLevels"
                      :key="educationalLevel.name"
                      :value="educationalLevel"
                    >
                      {{ educationalLevel.name }}
                    </option>
                  </select>
                </div>
                <div>
                  <label class="text-main-400">Professional Types</label>
                  <select
                    class="form-select mb-2 appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    :disabled="!isEdLevelSelected"
                    v-model="generalInfo.professionalTypeSelected"
                    @change="ProfessionTypeChange(institution)"
                  >
                    <option disabled>First Select Department from above</option>
                    <option v-for="pf in professionalTypes" :key="pf.id" :value="pf">
                      {{ pf.name }}
                    </option>
                  </select>
                  <div class="grid grid-rows-2">
                    <input
                      v-model="generalInfo.otherProfessionalType"
                      v-if="showOtherProfession"
                      class="mb-2 w-full"
                      placeholder="Other profession title"
                      type="text"
                    />
                    <input
                      v-model="generalInfo.otherProfessionalTypeAmharic"
                      v-if="showOtherProfession"
                      class="mb-2 w-full"
                      placeholder="Amharic other profession name"
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <label class="text-main-400">Educational Institution</label>

                  <select
                    class="form-select mb-2 appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    v-model="generalInfo.institutionSelected"
                    @change="institutionChange(institution)"
                  >
                    <option disabled>Please Select Applicant Type first</option>
                    <option
                      v-for="institution in institutions"
                      :key="institution.name"
                      :value="institution"
                    >
                      {{ institution.name }}
                    </option>
                  </select>
                  <input
                    v-model="generalInfo.otherEducationalInstitution"
                    v-if="showOtherEducation"
                    class="mb-2 w-full"
                    placeholder="Write Educational Institution"
                    type="text"
                  />
                </div>
              </div>

              <div class="text-right">
                <button
                  type="button"
                  class="px-6 mr-2 mb-8 py-2.5 bg-white text-main-400 font-medium border text-xs leading-tight uppercase rounded hover:text-white hover:border-main-400 hover:bg-main-400 focus:bg-blue-700 focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out"
                  @click="addMultiple()"
                >
                  <i class="fa fa-plus"></i>
                  Add
                </button>
              </div>

              <span v-if="multipleDepartmentError" class="ml-8 text-red-300"
                >Please fill in all fields</span
              >
              <span v-if="checkForAddedError" class="ml-8 text-red-300"
                >You already added the department</span
              >
              <span v-if="multipleDepartmentMaxError" class="ml-8 text-red-300"
                >Only three departments can be selected</span
              >
            </div>
            <!-- Table for selected departments data -->
            <div class="table-multiple border mb-8 bg-white">
              <h2 class="text-main-400 font-bold m-2 text-2xl">Selected Departments</h2>

              <div class="flex flex-col">
                <div class="overflow-x-scroll">
                  <div
                    class="flex justify-center"
                    v-if="generalInfo.multipleDepartment.length < 1"
                  >
                    No Data
                  </div>
                  <div v-else>
                    <table class="min-w-full p-4">
                      <thead class="border-b border-t text-main-400 p-4">
                        <tr>
                          <th
                            scope="col"
                            class="text-sm text-gray-900 p-5 text-left font-bold text-main-400"
                          >
                            Department
                          </th>
                          <th
                            scope="col"
                            class="text-sm text-gray-900 px-6 py-4 text-left font-bold text-main-400"
                          >
                            Education Level
                          </th>
                          <th
                            scope="col"
                            class="text-sm text-gray-900 px-6 py-4 text-left font-bold text-main-400"
                          >
                            Institution
                          </th>
                          <th
                            scope="col"
                            class="text-sm text-gray-900 px-6 py-4 text-left font-bold text-main-400"
                          >
                            Professional Type
                          </th>
                          <th
                            scope="col"
                            class="text-sm text-gray-900 px-6 py-4 text-left font-bold text-main-400"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                      <tbody>
                        <tr
                          class="border-b border-main-400 p-4"
                          v-for="(item, index) in generalInfo.multipleDepartment"
                          :key="item.id"
                        >
                          <td
                            class="p-4 whitespace-nowrap text-sm font-medium text-gray-900"
                          >
                            {{ item.department ? item.department.name : "" }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light p-4 whitespace-nowrap"
                          >
                            {{ item.educationLevel ? item.educationLevel.name : "" }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light p-4 whitespace-nowrap"
                          >
                            {{ item.institution ? item.institution.name : "" }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light p-4 whitespace-nowrap"
                          >
                            {{ item.professionType ? item.professionType.name : "" }}
                          </td>
                          <td
                            class="text-sm text-gray-900 font-light p-5 whitespace-nowrap"
                          >
                            <span @click="removeDepartment(index)" title="Remove"
                              ><i class="fa fa-trash text-red-300 cursor-pointer"></i
                            ></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!-- Table for selected departments data -->

            <div class="flex justify-end mb-2 mr-1">
              <button
                class="px-6 mr-2 mb-2 py-2.5 bg-yellow-300 text-white font-medium border text-xs leading-tight uppercase rounded hover:text-yellow-300 hover:border-yellow-300 hover:bg-white transition duration-150 ease-in-out"
                type="submit"
                @click="withdraw()"
              >
                Withdraw
              </button>
              <button
                :class="
                  generalInfo.educations.length > 0
                    ? 'px-6 mr-2 mb-2 py-2.5 bg-white text-main-400 font-medium border text-xs leading-tight uppercase rounded   hover:text-white hover:border-main-400 hover:bg-main-400 transition duration-150   ease-in-out'
                    : 'px-6 mr-2 mb-2 py-2.5 bg-white text-main-400 font-medium border text-xs leading-tight uppercase rounded   hover:text-white hover:border-main-400 hover:bg-main-400 transition duration-150   ease-in-out  disabled'
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
import LicenseSummary from "./submittedSummary.vue";
import Upload from "./submittedUpload.vue";
import MainContent from "../../Shared/Menu.vue";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  components: { MainContent, LicenseSummary, Upload, Loading },

  setup(props, { emit }) {
    const route = useRoute();
    const router = useRouter();
    const toast = useToast();
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

    const fetchApplicantType = () => {
      store.dispatch("renewal/getApplicantType").then((res) => {
        const results = res.data.data;
        applicantTypes.value = results;
      });
    };
    const fetchEducationLevel = () => {
      store.dispatch("lookups/getEducationLevel").then((res) => {
        educationalLevels.value = res.data.data;
      });
    };
    const fetchInstitutions = (value) => {
      store.dispatch("renewal/getInstitution", value).then((res) => {
        const institution = res.data.data;
        institutions.value = institution;
      });
    };
    const fetchDepartments = () => {
      store.dispatch("renewal/getDepartmentType").then((res) => {
        const department = res.data.data;
        departments.value = department;
      });
    };
    const fetchRegions = () => {
      store.dispatch("renewal/getRegions").then((res) => {
        const regionsResult = res.data.data;
        regions.value = regionsResult.filter((el) => el.code != "FED");
      });
    };

    const fetchZones = () => {
      store

        .dispatch("renewal/getZones", generalInfo.value.regionSelected.id)
        .then((res) => {
          const zonesResult = res.data.data;
          zones.value = zonesResult;
        });
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
            toast.success("Done", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            router.push({ path: "/withdraw" });
          } else {
            toast.error(res.data.message, {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            router.push({ path: "/withdraw" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const fetchWoredas = () => {
      store
        .dispatch("renewal/getWoredas", generalInfo.value.zoneSelected.id)
        .then((res) => {
          const woredasResult = res.data.data;
          woredas.value = woredasResult;
        });
    };
    const fetchProfessionalType = (departmentId, educationalLevelId) => {
      store
        .dispatch("renewal/getProfessionalTypes", { departmentId, educationalLevelId })
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
        fetchInstitutions(true);
      } else {
        showLocation.value = false;
        showOccupation.value = false;
        fetchInstitutions(false);
      }
      if (generalInfo.value.applicantType.code == "FOR") {
        fetchLanguages();
        showLanguage.value = true;
      } else {
        showLanguage.value = false;
      }
    };
    const regionChangeHandler = () => {
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
        fetchZones();
      }
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

    const checkForAdded = (data) => {
      let tempStatus = false;
      if (generalInfo.value.multipleDepartment) {
        generalInfo.value.multipleDepartment.forEach((element) => {
          if (element.department.code == data.code) {
            checkForAddedError.value = true;
            tempStatus = true;
          }
        });
        return tempStatus;
      }
    };
    const removeDepartment = (index) => {
      generalInfo.value.multipleDepartment.splice(index, 1);
      generalInfo.value.educations.splice(index, 1);
    };
    const addMultiple = () => {
      if (
        generalInfo.value.departmentSelected &&
        generalInfo.value.educationalLevelSelected &&
        generalInfo.value.institutionSelected &&
        generalInfo.value.professionalTypeSelected
      ) {
        if (
          generalInfo.value.applicantTypeSelected.code != "FOR" &&
          showOtherProfession.value &&
          showOtherProfession.value == true &&
          (generalInfo.value.otherProfessionalType == undefined ||
            generalInfo.value.otherProfessionalTypeAmharic == undefined)
        ) {
          toast.error("Please fill other profession name in amharic and english", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
          return;
        }
        if (generalInfo.value.multipleDepartment.length > 3) {
          multipleDepartmentMaxError.value = true;
        } else {
          multipleDepartmentMaxError.value = false;
          multipleDepartmentError.value = false;

          if (
            generalInfo.value.multipleDepartment.length > 0 &&
            generalInfo.value.multipleDepartment.length <= 3
          ) {
            if (
              checkForAdded(
                generalInfo.value.departmentSelected
                  ? generalInfo.value.departmentSelected
                  : ""
              ) == false
            ) {
              checkForAddedError.value = false;
              generalInfo.value.professionChanged = true;
              generalInfo.value.multipleDepartment.push({
                department: generalInfo.value.departmentSelected,
                educationLevel: generalInfo.value.educationalLevelSelected,
                institution: generalInfo.value.institutionSelected,
                professionType: generalInfo.value.professionalTypeSelected,

                otherEducationalInstitution:
                  generalInfo.value.otherEducationalInstitution,
                otherProfessionTypeAmharic:
                  generalInfo.value.otherProfessionalTypeAmharic,
                otherProfessionType: generalInfo.value.otherProfessionalType,
              });
              generalInfo.value.educations.push({
                departmentId: generalInfo.value.departmentSelected.id,
                educationalLevelId: generalInfo.value.educationalLevelSelected.id,
                institutionId: generalInfo.value.institutionSelected.id,
                professionTypeId: generalInfo.value.professionalTypeSelected.id,
                otherInstitution: generalInfo.value.otherEducationalInstitution,
                otherProfessionTypeAmharic:
                  generalInfo.value.otherProfessionalTypeAmharic,
                otherProfessionType: generalInfo.value.otherProfessionalType,
              });
            }
          } else {
            checkForAddedError.value = false;
            generalInfo.value.professionChanged = true;
            generalInfo.value.multipleDepartment.push({
              department: generalInfo.value.departmentSelected,
              educationLevel: generalInfo.value.educationalLevelSelected,
              institution: generalInfo.value.institutionSelected,
              professionType: generalInfo.value.professionalTypeSelected,

              otherEducationalInstitution: generalInfo.value.otherEducationalInstitution,
              otherProfessionalTypeAmharic:
                generalInfo.value.otherProfessionalTypeAmharic,
              otherProfessionalType: generalInfo.value.otherProfessionalType,
            });
            generalInfo.value.educations.push({
              departmentId: generalInfo.value.departmentSelected.id,
              educationalLevelId: generalInfo.value.educationalLevelSelected.id,
              institutionId: generalInfo.value.institutionSelected.id,
              professionTypeId: generalInfo.value.professionalTypeSelected.id,
              otherInstitution: generalInfo.value.otherEducationalInstitution,
              otherProfessionTypeAmharic: generalInfo.value.otherProfessionalTypeAmharic,
              otherProfessionType: generalInfo.value.otherProfessionalType,
            });
          }
          generalInfo.value.departmentSelected = "";
          generalInfo.value.educationalLevelSelected = "";
          generalInfo.value.institutionSelected = "";
          generalInfo.value.professionalTypeSelected = "";
          generalInfo.value.otherProfessionalType = "";
          generalInfo.value.otherProfessionalTypeAmharic = "";
          generalInfo.value.otherEducationalInstitution = "";
        }
      } else {
        multipleDepartmentError.value = true;
      }
    };
    const fetchOccupation = () => {
      store.dispatch("lookups/getGovernment").then((res) => {
        if (res.data.status == "Success") {
          occupations.value = res.data.data;
        }
      });
    };
    const apply = () => {
      let tempApplicationData = generalInfo.value;
      window.localStorage.setItem(
        "RNApplicationData",
        JSON.stringify(tempApplicationData)
      );
      store.dispatch("renewal/setGeneralInfo", generalInfo.value).then(() => {
        emit("changeActiveState");
        activeState.value += 1;
      });
    };
    const fetchApplicationStatuses = () => {
      store.dispatch("renewal/getApplicationStatuses").then((res) => {
        const results = res.data.data;
        applicationStatuses.value = results;

        let status = applicationStatuses.value.filter(function (e) {
          return e.code == "SUB";
        });
        store.dispatch("renewal/setButtons", status[0].buttons);
      });
    };
    const educationalLevelChange = () => {
      isEdLevelSelected.value = true;
      fetchProfessionalType(
        generalInfo.value.departmentSelected.id,
        generalInfo.value.educationalLevelSelected.id
      );
    };
    onMounted(async () => {
      isLoading.value = true;
      fetchApplicantType();
      fetchDepartments();
      fetchInstitutions();
      fetchEducationLevel();
      fetchRegions();
      fetchOccupation();
      fetchApplicationStatuses();

      store.dispatch("renewal/getRenewalApplication", route.params.id).then((res) => {
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
          res.data.data && res.data.data.woreda ? res.data.data.woreda.zone.region : "";

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
