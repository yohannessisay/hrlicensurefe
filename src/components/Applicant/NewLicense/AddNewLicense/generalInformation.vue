<template>
  <main-content>
    <div
      class="pages-navbar flex justify-center h-12 rounded-sm mb-8 shadow-2xl"
      style="width: 98% !important"
    >
      <div class="profile p-4">
        <h2 class="text-white">Apply for a new license</h2>
      </div>
    </div>
    <div
      class="
        block
        p-6
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
        <div
          class="flex border border-main-400 shadow-2xl rounded-md bg-main-400"
        >
          <!-- applican type -->
          <div class="flex flex-col mb-4 pt-8 sm:ml-4">
            <label class="text-white">Applicant Type</label>
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
              @change="applicantTypeChangeHandler()"
              v-model="generalInfo.applicantTypeSelected"
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
                bg-main-400
                text-white
                max-w-3xl
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:text-main-500 hover:border-main-500
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
        <!-- region -->
        <div
          v-if="showLocation"
          class="
            pt-8
            mt-12
            border border-main-400
            rounded
            bg-main-400
            shadow-2xl
          "
        >
          <div class="flex">
            <div class="flex flex-col mb-medium w-2/5 ml-medium mr-12">
              <label class="text-white">Region</label>
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
              <label class="text-white">Zone</label>
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
              <label class="text-white">Woreda</label>
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

        <!-- language -->
        <div
          v-if="showLanguage || showOccupation"
          class="
            flex
            pt-8
            mt-12
            border border-main-400
            rounded-sm
            bg-main-400
            shadow-2xl
          "
        >
          <div
            v-if="showLanguage"
            class="flex flex-col mb-medium w-2/5 mr-12 ml-medium"
          >
            <label class="text-white">English Language</label>
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
              v-model="generalInfo.languageSelected"
            >
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
            <label class="text-white">Occupation Type</label>
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
                hover:text-main-500 hover:border-main-500
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
        <div
          class="
            mt-12
            border border-main-400
            rounded-sm
            bg-main-400
            shadow-2xl
            mb-8
          "
          v-if="generalInfo.multipleDepartment.length < 3"
        >
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
                  <label class="text-white">Department</label>
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
                      hover:text-main-500 hover:border-main-500
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
                </div>
              </div>

              <div
                class="flex justify-center text-6xl rounded-xl p-2 bg-gray-100"
              >
                <div>
                  <label class="text-white">Education Level </label>
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
                      hover:text-main-500 hover:border-main-500
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
                    v-model="generalInfo.educationalLevelSelected"
                  >
                    <option
                      v-for="educationalLevel in educationalLevels"
                      v-bind:key="educationalLevel.name"
                      v-bind:value="educationalLevel"
                    >
                      {{ educationalLevel.name }}
                    </option>
                  </select>
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
                  <label class="text-white">Professional Types</label>
                  <select
                    class="
                      form-select
                      appearance-none
                      block
                      px-3
                      xl:w-64
                      md:w-64
                      sm:w-64
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
                      focus:border-blue-600
                      focus:outline-none
                    "
                    v-model="generalInfo.professionalTypeSelected"
                    @change="ProfessionTypeChange(institution)"
                  >
                    <option disabled>First Select Department from above</option>
                    <option
                      v-for="pf in professionalTypes"
                      v-bind:key="pf.id"
                      v-bind:value="pf"
                    >
                      {{ pf.name }}
                    </option>
                  </select>
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
              </div>
              <div
                class="flex justify-center text-6xl rounded-xl p-2 bg-gray-100"
              >
                <div>
                  <label class="text-white">Educational Institution</label>

                  <select
                    class="
                      xl:w-64
                      md:w-64
                      sm:w-64
                      form-select
                      appearance-none
                      block
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
                      focus:border-blue-600
                      focus:outline-none
                    "
                    v-model="generalInfo.institutionSelected"
                    @change="institutionChange(institution)"
                  >
                    <option disabled>Please Select Applicant Type first</option>
                    <option
                      v-for="institution in institutions"
                      v-bind:key="institution.name"
                      v-bind:value="institution"
                    >
                      {{ institution.name }}
                    </option>
                  </select>
                  <input
                    v-model="generalInfo.otherEducationalInstitution"
                    v-if="showOtherEducation"
                    class="mt-2"
                    placeholder="Write Educational Institution"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="text-right">
            <button
              type="button"
              class="
                px-6
                mr-2
                mb-2
                py-2.5
                bg-white
                text-main-400
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:text-main-500 hover:border-main-500 hover:shadow-lg
                focus:bg-blue-700
                focus:shadow-lg
                focus:outline-none
                focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out
              "
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
        <div
          v-if="generalInfo.multipleDepartment.length > 0"
          class="
            table-multiple
            border border-white
            shadow-2xl
            mt-12
            mb-8
            rounded-sm
            bg-primary-200
          "
        >
          <h2 class="text-main-400 font-bold m-4 border-b-2">
            Selected Departments
          </h2>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="border-b text-main-400">
                      <tr>
                        <th
                          scope="col"
                          class="
                            text-sm text-gray-900
                            px-6
                            py-4
                            text-left
                            font-bold
                            text-main-400
                          "
                        >
                          Department
                        </th>
                        <th
                          scope="col"
                          class="
                            text-sm text-gray-900
                            px-6
                            py-4
                            text-left
                            font-bold
                            text-main-400
                          "
                        >
                          Education Level
                        </th>
                        <th
                          scope="col"
                          class="
                            text-sm text-gray-900
                            px-6
                            py-4
                            text-left
                            font-bold
                            text-main-400
                          "
                        >
                          Institution
                        </th>
                        <th
                          scope="col"
                          class="
                            text-sm text-gray-900
                            px-6
                            py-4
                            text-left
                            font-bold
                            text-main-400
                          "
                        >
                          Professional Type
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class="border-b border-main-400"
                        v-for="item in generalInfo.multipleDepartment"
                        :key="item.id"
                      >
                        <td
                          class="
                            px-6
                            py-4
                            whitespace-nowrap
                            text-sm
                            font-medium
                            text-gray-900
                          "
                        >
                          {{ item.department.name }}
                        </td>
                        <td
                          class="
                            text-sm text-gray-900
                            font-light
                            px-6
                            py-4
                            whitespace-nowrap
                          "
                        >
                          {{ item.educationalLevel.name }}
                        </td>
                        <td
                          class="
                            text-sm text-gray-900
                            font-light
                            px-6
                            py-4
                            whitespace-nowrap
                          "
                        >
                          {{ item.institution.name }}
                        </td>
                        <td
                          class="
                            text-sm text-gray-900
                            font-light
                            px-6
                            py-4
                            whitespace-nowrap
                          "
                        >
                          {{ item.professionalType.name }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="flex justify-end mb-2 mr-1">
              <button
                class="
                  float-right
                  mt-8
                  inline-block
                  px-6
                  py-2.5
                  bg-blue-700
                  text-white
                  max-w-3xl
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  bg-main-400
                  hover:text-main-500 hover:border-main-500
                  focus:bg-blue-700
                  focus:shadow-lg
                  focus:outline-none
                  focus:ring-0
                  active:bg-blue-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                "
                v-if="generalInfo.multipleDepartment.length > 0"
                type="submit"
                @click="apply()"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <!-- Table for selected departments data -->
      </form>
    </div>
  </main-content>
</template>
  <script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import MainContent from "../sharedComponents/Menu.vue";
export default {
  props: ["activeState"],
  components: {
    MainContent,
  },

  setup(props, { emit }) {
    let applicantTypes = ref("");
    let departments = ref([]);
    let institutions = ref([]);
    let educationalLevels = ref([]);
    let educationalLevelSelected = ref({});
    let professionalTypes = ref([]);
    let regions = ref("");
    let woredas = ref("");
    let zones = ref("");
    let localData = ref({});
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
    let multipleDepartmentError = ref(false);
    let multipleDepartmentMaxError = ref(false);
    let checkForAddedError = ref(false);
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
          console.log(generalInfo.value.regionSelected.id,res)
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
    const addMultiple = () => {
      if (
        generalInfo.value.departmentSelected &&
        generalInfo.value.educationalLevelSelected &&
        generalInfo.value.institutionSelected &&
        generalInfo.value.professionalTypeSelected
      ) {
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
              generalInfo.value.multipleDepartment.push({
                department: generalInfo.value.departmentSelected,
                educationalLevel: generalInfo.value.educationalLevelSelected,
                institution: generalInfo.value.institutionSelected,
                professionalType: generalInfo.value.professionalTypeSelected,
              });
            }
          } else {
            checkForAddedError.value = false;
            generalInfo.value.multipleDepartment.push({
              department: generalInfo.value.departmentSelected,
              educationalLevel: generalInfo.value.educationalLevelSelected,
              institution: generalInfo.value.institutionSelected,
              professionalType: generalInfo.value.professionalTypeSelected,
            });
          }
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
      let tempApplicationData = generalInfo.value;
      window.localStorage.setItem(
        "NLApplicationData",
        JSON.stringify(tempApplicationData)
      );
      store
        .dispatch("newlicense/setGeneralInfo", generalInfo.value)
        .then(() => {
          emit("changeActiveState");
        });
    };
    const clearLocalData = () => {
      window.localStorage.setItem("NLApplicationData", "");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    };
    onMounted(async () => {
      await fetchApplicantType();
      await fetchDepartments();
      await fetchInstitutions();
      await fetchEducationLevel();
      await fetchRegions();
      localData.value = window.localStorage.getItem("NLApplicationData")
        ? JSON.parse(window.localStorage.getItem("NLApplicationData"))
        : {};
      if (Object.keys(localData.value).length != 0) {
        console.log(Object.keys(localData.value).length);
        generalInfo.value = localData.value;
      }
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
      showLocation,
      woredaSelected,
      zoneSelected,
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
    };
  },
};
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
  