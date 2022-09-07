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
                  bg-blue-600
                  text-white
                  max-w-3xl
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-blue-700 hover:shadow-lg
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
                <select
                  class="max-w-3xl"
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
          <div id="main" v-if="generalInfo.multipleDepartment.length < 3">
            <div class="flex mt-4 pt-8">
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
                <select
                  class="max-w-3xl"
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
            <span v-if="checkForAddedError" style="color: red"
              >You already added the department</span
            >
            <span v-if="multipleDepartmentMaxError" style="color: red"
              >Only three departments can be selected</span
            >
            <button
              class="
                float-right
                mt-8
                inline-block
                px-6
                py-2.5
                bg-blue-600
                text-white
                max-w-3xl
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
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
              Add
            </button>
          </div>
          <div
            v-if="generalInfo.multipleDepartment.length > 0"
            class="table-multiple"
          >
            <table class="h-full">
              <thead>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                >
                  Department
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                >
                  Education Level
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                >
                  Institution
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                >
                  Professional Type
                </th>
              </thead>
              <tbody class="">
                <tr
                  v-for="item in generalInfo.multipleDepartment"
                  :key="item.id"
                >
                  <td class="px-2 py-3 border-gray-200 bg-white text-sm">
                    <div class="flex">
                      <div class="ml-3">
                        <p class="text-gray-900">
                          {{ item.department.name }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-2 py-3 border-gray-200 bg-white text-sm">
                    <div class="flex">
                      <div class="ml-3">
                        <p class="text-gray-900">
                          {{ item.educationalLevel.name }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-2 py-3 border-gray-200 bg-white text-sm">
                    <div class="flex">
                      <div class="ml-3">
                        <p class="text-gray-900">
                          {{ item.institution.name }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-2 py-3 border-gray-200 bg-white text-sm">
                    <div class="flex">
                      <div class="ml-3">
                        <p class="text-gray-900">
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
          class="
                float-right
                mt-8
                inline-block
                px-6
                py-2.5
                bg-blue-600
                text-white
                max-w-3xl
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
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
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
export default {
  props: ["activeState"],
  components: {
    TitleWithIllustration,
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
      applicantTypeSelected: localData.value
        ? localData.value.applicantTypeSelected
        : "",
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
      store.dispatch("renewal/getApplicantType").then((res) => {
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
        regions.value = regionsResult;
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

    const fetchWoredas = () => {
      store
        .dispatch("renewal/getWoredas", generalInfo.value.zoneSelected.id)
        .then((res) => {
          const woredasResult = res.data.data;
          woredas.value = woredasResult;
        });
    };
    const fetchProfessionalType = (id) => {
      store.dispatch("renewal/getProfessionalTypes", id).then((res) => {
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
        .dispatch("renewal/setGeneralInfo", generalInfo.value)
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
      applicantTypeSelected,
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
