<template>
  <nav
    :class="
      isDarkMode && isDarkMode == true
        ? 'bg-secondaryDark mb-4 px-5 py-3 rounded-md w-full'
        : 'bg-grey-100 mb-4 px-5 py-3 rounded-md w-full'
    "
    id="topNav"
  >
    <ol class="list-reset flex">
      <li>
        <router-link to="/menu">
          <a
            href="#"
            :class="
              isDarkMode && isDarkMode == true
                ? 'text-white '
                : 'text-main-400 hover:text-blue-700'
            "
            >Home</a
          >
        </router-link>
      </li>
      <li><span class="text-gray-500 mx-2">/</span></li>
      <li>
        <router-link to="/Applicant/NewLicense">
          <a
            href="#"
            :class="
              isDarkMode && isDarkMode == true
                ? 'text-white '
                : 'text-main-400 hover:text-blue-700'
            "
            >New License</a
          >
        </router-link>
      </li>
      <li>
        <span
          :class="
            isDarkMode && isDarkMode == true
              ? 'text-white mx-2 '
              : 'text-main-400 mx-2'
          "
          >/</span
        >
      </li>
      <li
        :class="
          isDarkMode && isDarkMode == true
            ? 'text-main-400 '
            : 'text-main-400 hover:text-blue-700'
        "
      >
        Apply
      </li>
    </ol>
  </nav>

  <div
    :class="
      isDarkMode && isDarkMode == true
        ? '    block p-6 rounded-lg shadow-md bg-primaryDark  max-w-full mb-8 '
        : '  block p-6 rounded-lg shadow-md bg-white max-w-full mb-8 ml-4 '
    "
  >
    <div class=" flex justify-center ">
      <h2
        :class="
          isDarkMode && isDarkMode == true
            ? 'text-white text-3xl font-bold'
            : 'text-main-400 text-xl lg:text-3xl border-b-4 font-bold sm:text-xl '
        "
      >
        General Information
      </h2>
    </div>

    <form @submit.prevent="submit" class="mx-auto w-full mt-2 ">
      <div
        :class="
          isDarkMode && isDarkMode == true
            ? 'bg-secondaryDark  border-white rounded-md mt-2 p-4'
            : '  bg-white  mt-2 p-4 border-b-2'
        "
      >
        <!-- applicant type -->
        <div
          class="grid grid-cols-1 sm:grid-rows-1 lg:grid-cols-4 mdlg:grid-cols-2 md:grid-cols-2 "
        >
          <div>
            <label
              :class="
                isDarkMode && isDarkMode == true
                  ? 'text-white '
                  : 'text-main-400'
              "
              >Applicant Type</label
            ><span class="text-red-300">*</span>
            <select
              class="form-select appearance-none block xl:w-64 md:w-64 sm:w-64 w-full mb-2 px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
              aria-label="Default select example"
              :disabled="
                generalInfo.multipleDepartment
                  ? generalInfo.multipleDepartment.length > 0
                  : 0
              "
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
            <small
              v-if="
                generalInfo.multipleDepartment
                  ? generalInfo.multipleDepartment.length > 0
                  : 0
              "
              :class="
                isDarkMode && isDarkMode == true
                  ? 'text-white '
                  : 'text-main-400'
              "
              >You can change applicant type when there is no added
              education/department data below</small
            >
          </div>
          <div v-if="showLanguage">
            <label
              :class="
                isDarkMode && isDarkMode == true
                  ? 'text-white '
                  : 'text-main-400'
              "
              >Language Type</label
            ><span class="text-red-300">*</span>
            <select
              class="form-select appearance-none block xl:w-64 md:w-64 sm:w-64 w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
              v-model="generalInfo.nativeLanguageSelected"
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
          <div v-if="showOccupation">
            <label
              :class="
                isDarkMode && isDarkMode == true
                  ? 'text-white '
                  : 'text-main-400'
              "
              >Employer Type</label
            ><span class="text-red-300">*</span>
            <select
              class="form-select appearance-none block xl:w-64 md:w-64 sm:w-64 w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
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
      </div>
      <button
        v-show="Object.keys(localData).length != 0"
        class="inline-block px-6 bg-main-400 text-white max-w-3xl font-medium text-xs leading-tight uppercase rounded shadow-md hover:text-main-500 hover:border-main-500 focus:bg-blue-700 focus:shadow-md focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out"
        @click="clearLocalData()"
      >
        <i class="fa fa-close"></i>
        Clear Form
      </button>
      <!-- region -->
      <div
        v-if="showLocation"
        :class="
          isDarkMode && isDarkMode == true
            ? '  rounded-md generalInfoCard  border-white mt-2 p-4'
            : ' bg-white border-b-2 mt-2 p-4'
        "
      >
        <div
          class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 mdlg:grid-cols-3 md:grid-cols-3 p-4"
        >
          <div>
            <label
              :class="
                isDarkMode && isDarkMode == true
                  ? 'text-white '
                  : 'text-main-400'
              "
              >Region</label
            ><span class="text-red-300">*</span>
            <select
              class="form-select appearance-none block xl:w-64 md:w-64 sm:w-64 w-full mb-2 px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
              :disabled="
                generalInfo.multipleDepartment
                  ? generalInfo.multipleDepartment.length > 0
                  : 0
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
            <small
              v-if="
                generalInfo.multipleDepartment
                  ? generalInfo.multipleDepartment.length > 0
                  : 0
              "
              :class="
                isDarkMode && isDarkMode == true
                  ? 'text-white '
                  : 'text-main-400'
              "
              >You can change region when there is no added education/department
              data below</small
            >
          </div>

          <div>
            <label
              :class="
                isDarkMode && isDarkMode == true
                  ? 'text-white '
                  : 'text-main-400'
              "
              >Zone</label
            ><span class="text-red-300">*</span>
            <select
              class="form-select appearance-none block xl:w-64 md:w-64 sm:w-64 w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
              :disabled="
                generalInfo.multipleDepartment
                  ? generalInfo.multipleDepartment.length > 0
                  : 0
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
            <small
              v-if="
                generalInfo.multipleDepartment
                  ? generalInfo.multipleDepartment.length > 0
                  : 0
              "
              :class="
                isDarkMode && isDarkMode == true
                  ? 'text-white '
                  : 'text-main-400'
              "
              >You can change zone when there is no added education/department
              data below</small
            >
          </div>

          <div>
            <label
              :class="
                isDarkMode && isDarkMode == true
                  ? 'text-white '
                  : 'text-main-400'
              "
              >Woreda</label
            ><span class="text-red-300">*</span>
            <select
              class="form-select appearance-none block xl:w-64 md:w-64 sm:w-64 w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
              :disabled="
                generalInfo.multipleDepartment
                  ? generalInfo.multipleDepartment.length > 0
                  : 0
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
            <small
              v-if="
                generalInfo.multipleDepartment
                  ? generalInfo.multipleDepartment.length > 0
                  : 0
              "
              class="text-green-200"
              >You can change woreda when there is no added education/department
              data below</small
            >
          </div>
        </div>
      </div>

      <!-- end -->

      <!-- educational institution and department -->
      <div
        :class="
          isDarkMode && isDarkMode == true
            ? 'generalInfoCard border-white rounded-md   mt-2  '
            : ' bg-white mb-4  mt-2 border-b-2  '
        "
        v-if="generalInfo.multipleDepartment.length < 3"
      >
        <!-- Container -->

        <div
          class="grid grid-cols-1 sm:grid-rows-1 lg:grid-cols-4 mdlg:grid-cols-2 md:grid-cols-2 p-4"
        >
          <div class="mt-12">
            <label
              :class="
                isDarkMode && isDarkMode == true
                  ? 'text-white '
                  : 'text-main-400'
              "
              >Department</label
            ><span class="text-red-300">*</span>
            <select
              class="form-select appearance-none block xl:w-64 md:w-64 sm:w-64 w-full mb-2 px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
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
          <!-- ... -->
          <div class="mt-12 ">
            <label
              :class="
                isDarkMode && isDarkMode == true
                  ? 'text-white '
                  : 'text-main-400'
              "
              >Education Level </label
            ><span class="text-red-300">*</span>
            <select
              class="form-select appearance-none block xl:w-64 md:w-64 sm:w-64 w-full mb-2 px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
              :disabled="!isDepartmentSelected"
              v-model="generalInfo.educationalLevelSelected"
              @change="educationalLevelChange()"
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
          <div class="mt-12">
            <label
              :class="
                isDarkMode && isDarkMode == true
                  ? 'text-white '
                  : 'text-main-400'
              "
              >Professional Types</label
            ><span class="text-red-300">*</span>
            <select
              class="form-select appearance-none block xl:w-64 md:w-64 sm:w-64 w-full mb-2 px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
              :disabled="!isEdLevelSelected"
              v-model="generalInfo.professionalTypeSelected"
              @change="ProfessionTypeChange(institution)"
            >
              <option
                v-for="pf in professionalTypes"
                v-bind:key="pf.id"
                v-bind:value="pf"
              >
                {{ pf.name }}
              </option>
            </select>
            <div class="grid grid-rows-2">
              <input
                v-model="generalInfo.otherProfessionalType"
                v-if="showOtherProfession"
                class="mb-2 xl:w-64 md:w-64 sm:w-64 w-full"
                placeholder="Other profession title"
                type="text"
              />
              <input
                v-model="generalInfo.otherProfessionalTypeAmharic"
                v-if="showOtherProfession"
                class="xl:w-64 md:w-64 sm:w-64 w-full"
                placeholder="Amharic other profession name"
                type="text"
              />
            </div>
          </div>
          <!-- ... -->

          <div class="mt-12">
            <label
              :class="
                isDarkMode && isDarkMode == true
                  ? 'text-white '
                  : 'text-main-400'
              "
              >Educational Institution</label
            ><span class="text-red-300">*</span>

            <select
              class="form-select appearance-none block xl:w-64 md:w-64 sm:w-64 w-full mb-2 px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
              :disabled="!isAppTypeSelected"
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
              class="mb-2 xl:w-64 md:w-64 sm:w-64 w-full"
              placeholder="Write Educational Institution"
              type="text"
            />
          </div>
        </div>

        <div class="text-right">
          <button
            type="button"
            class="px-6 mr-2 mb-2 py-2.5 bg-white text-main-400 font-medium border text-xs leading-tight uppercase rounded  hover:text-white hover:border-main-400 hover:bg-main-400 focus:bg-blue-700 focus:shadow-md focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-md transition duration-150 ease-in-out"
            @click="addMultiple()"
          >
            <i class="fa fa-plus"></i>

            <span
              v-if="
                generalInfo.multipleDepartment &&
                  generalInfo.multipleDepartment.length > 0
              "
            >
              Add More Department
            </span>
            <span v-else>Add</span>
          </button>
        </div>

        <div
          class="flex justify-center m-4"
          v-if="
            generalInfo.multipleDepartment &&
              generalInfo.multipleDepartment.length == 0
          "
        >
          <h2 class="text-xl text-yellow-300 font-bold border p-2 rounded-md">
            * In order to proceed to the next step please choose one or more
            department and add to the list
          </h2>
        </div>
        <span v-if="multipleDepartmentError" class="text-red-300 m-4 "
          >Please fill in all fields</span
        >
        <span v-if="checkForAddedError" class="ml-8 text-red-300 m-4"
          >You already added the department</span
        >
        <span v-if="multipleDepartmentMaxError" class="ml-8 text-red-300 m-4"
          >Only three departments can be selected</span
        >

        <!-- ./Container -->
      </div>
      <!-- Table for selected departments data -->
      <div
        :class="
          isDarkMode && isDarkMode == true
            ? 'generalInfoCard  table-multiple border  shadow-md mt-2 mb-8 rounded-sm  '
            : ' table-multiple border mt-2 mb-8 rounded-sm bg-white'
        "
      >
        <h2
          :class="
            isDarkMode && isDarkMode == true
              ? 'text-white font-bold m-4 border-b-2'
              : 'text-main-400 font-bold m-4 border-b-4 text-xl'
          "
        >
          Selected Departments
        </h2>

        <div class="flex flex-col">
          <div class="">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
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
                          :class="
                            isDarkMode && isDarkMode == true
                              ? ' text-xl text-gray-900 p-5 text-left font-bold text-white'
                              : ' text-xl text-gray-900 p-5 text-left font-bold text-main-400'
                          "
                        >
                          Department
                        </th>
                        <th
                          scope="col"
                          :class="
                            isDarkMode && isDarkMode == true
                              ? ' text-xl text-gray-900 p-5 text-left font-bold text-white'
                              : ' text-xl text-gray-900 p-5 text-left font-bold text-main-400'
                          "
                        >
                          Education Level
                        </th>
                        <th
                          scope="col"
                          :class="
                            isDarkMode && isDarkMode == true
                              ? ' text-xl text-gray-900 p-5 text-left font-bold text-white'
                              : ' text-xl text-gray-900 p-5 text-left font-bold text-main-400'
                          "
                        >
                          Institution
                        </th>
                        <th
                          scope="col"
                          :class="
                            isDarkMode && isDarkMode == true
                              ? ' text-xl text-gray-900 p-5 text-left font-bold text-white'
                              : ' text-xl text-gray-900 p-5 text-left font-bold text-main-400'
                          "
                        >
                          Professional Type
                        </th>
                        <th
                          scope="col"
                          :class="
                            isDarkMode && isDarkMode == true
                              ? ' text-xl text-gray-900 p-5 text-left font-bold text-white'
                              : ' text-xl text-gray-900 p-5 text-left font-bold text-main-400'
                          "
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                    <tbody>
                      <tr
                        :class="
                          isDarkMode && isDarkMode == true
                            ? ' border-b border-white   p-4 text-white'
                            : ' border-b border-main-400   p-4 text-grey-800'
                        "
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
                          {{
                            item.educationalLevel
                              ? item.educationalLevel.name
                              : ""
                          }}
                        </td>
                        <td
                          class="text-sm text-gray-900 font-light p-4 whitespace-nowrap"
                        >
                          {{
                            item.institution && item.institution.code != "OTH"
                              ? item.institution.name
                              : item.otherEducationalInstitution
                          }}
                        </td>
                        <td
                          class="text-sm text-gray-900 font-light p-4 whitespace-nowrap"
                        >
                          {{
                            item.professionalType &&
                            item.professionalType.code != "OTH"
                              ? item.professionalType.name
                              : item.otherProfessionalType +
                                " ( " +
                                item.otherProfessionalTypeAmharic +
                                " )"
                          }}
                        </td>
                        <td
                          class="text-sm text-gray-900 font-light p-5 whitespace-nowrap"
                        >
                          <span @click="removeDepartment(index)" title="Remove"
                            ><i
                              class="fa fa-trash text-red-300 cursor-pointer"
                            ></i
                          ></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vld-parent mt-4">
        <loading
          :active="isLoading"
          :is-full-page="false"
          :color="'#2F639D'"
          :opacity="1"
        ></loading>
        <div class="flex justify-end mb-2 mr-1">
          <button
            :class="
              generalInfo.multipleDepartment.length > 0
                ? 'px-6 mr-2 mb-2 py-2.5 bg-white text-main-400  border text-base leading-tight font-bold   rounded shadow-md hover:text-white hover:border-main-400 hover:bg-main-400 transition duration-150   ease-in-out'
                : 'px-6 mr-2 mb-2 py-2.5 bg-white text-main-400 font-bold border text-base leading-tight   rounded shadow-md hover:text-white hover:border-main-400 hover:bg-main-400 transition duration-150   ease-in-out  disabled'
            "
            type="submit"
            @click="saveDraft()"
          >
            Save as Draft
          </button>
          <button
            :class="
              generalInfo.multipleDepartment.length > 0
                ? 'px-6 mr-2 mb-2 py-2.5 bg-main-400 text-white font-medium border text-base leading-tight  rounded shadow-md hover:text-main-400 hover:border-main-400 hover:bg-white transition duration-150   ease-in-out'
                : 'px-6 mr-2 mb-2 py-2.5 bg-main-400 text-white font-medium border text-base leading-tight  rounded shadow-md hover:text-main-400 hover:border-main-400 hover:bg-white transition duration-150   ease-in-out  disabled'
            "
            type="submit"
            @click="apply()"
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
import { ref, onMounted } from "vue";
import { useToast } from "vue-toastification";

import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  props: ["activeState"],
  components: { Loading },
  emits: ["changeActiveState", "changeActiveStateMinus"],
  setup(props, { emit }) {
    let applicantTypes = ref("");
    const toast = useToast();
    let departments = ref([]);
    let institutions = ref([]);
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    let educationalLevels = ref([]);
    let educationalLevelSelected = ref({});
    let professionalTypes = ref([]);
    let isDepartmentSelected = ref(false);
    let isEdLevelSelected = ref(false);
    let isAppTypeSelected = ref(false);
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
    let existingLicense = ref({});
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
      education: [],
    });
    let isLoading = ref(false);
    const fetchApplicantType = () => {
      store.dispatch("newlicense/getApplicantType").then((res) => {
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
      isAppTypeSelected.value = true;
      if (
        generalInfo.value.applicantTypeSelected &&
        generalInfo.value.applicantTypeSelected.code &&
        generalInfo.value.applicantTypeSelected.code == "ETH"
      ) {
        showLocation.value = true;
        showOccupation.value = true;
        fetchInstitutions(true);
      } else {
        showLocation.value = false;
        showOccupation.value = false;
        fetchInstitutions(false);
      }
      if (
        generalInfo.value.applicantTypeSelected &&
        generalInfo.value.applicantTypeSelected.code &&
        generalInfo.value.applicantTypeSelected.code == "FOR"
      ) {
        fetchLanguages();
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
      generalInfo.value.education.splice(index, 1);
    };
    const addMultiple = () => {
      if (
        generalInfo.value.departmentSelected &&
        generalInfo.value.educationalLevelSelected &&
        generalInfo.value.institutionSelected &&
        generalInfo.value.professionalTypeSelected
      ) {
        if (
          showOtherProfession.value &&
          showOtherProfession.value == true &&
          (generalInfo.value.otherProfessionalType == undefined ||
            generalInfo.value.otherProfessionalTypeAmharic == undefined)
        ) {
          toast.error(
            "Please fill other profession name in amharic and english",
            {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            }
          );
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
              generalInfo.value.multipleDepartment.push({
                department: generalInfo.value.departmentSelected,
                educationalLevel: generalInfo.value.educationalLevelSelected,
                institution: generalInfo.value.institutionSelected,
                professionalType: generalInfo.value.professionalTypeSelected,

                otherEducationalInstitution:
                  generalInfo.value.otherEducationalInstitution,
                otherProfessionalTypeAmharic:
                  generalInfo.value.otherProfessionalTypeAmharic,
                otherProfessionalType: generalInfo.value.otherProfessionalType,
              });
              generalInfo.value.education.push({
                departmentId: generalInfo.value.departmentSelected.id,
                educationalLevelId:
                  generalInfo.value.educationalLevelSelected.id,
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
            generalInfo.value.multipleDepartment.push({
              department: generalInfo.value.departmentSelected,
              educationalLevel: generalInfo.value.educationalLevelSelected,
              institution: generalInfo.value.institutionSelected,
              professionalType: generalInfo.value.professionalTypeSelected,

              otherEducationalInstitution:
                generalInfo.value.otherEducationalInstitution,
              otherProfessionalTypeAmharic:
                generalInfo.value.otherProfessionalTypeAmharic,
              otherProfessionalType: generalInfo.value.otherProfessionalType,
            });
            generalInfo.value.education.push({
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
      let tempFieldError = {};
      let tempComparision = [];
      if (
        existingLicense.value &&
        generalInfo.value.education &&
        existingLicense.value.length > 0
      ) {
        existingLicense.value.forEach((element) => {
          if (element.educations) {
            tempComparision.push({
              licenseId: element.id,
              educations: element.educations,
            });
          }
        });
      }
      let tempError = false;
      tempComparision.forEach((existingEd) => {
        generalInfo.value.education.forEach((newEd) => {
          if (existingEd.educations) {
            existingEd.educations.forEach((element) => {
              if (
                element.departmentId == newEd.departmentId &&
                element.professionTypeId == newEd.professionTypeId
              ) {
                tempError = true;
                return;
              }
            });
          }
        });
      });
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

      if (tempError == false) {
        if (Object.keys(tempFieldError).length > 0) {
          toast.error("Fill out fileds marked red", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
        } else {
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
        }
      } else {
        toast.error(
          "Sorry, seems like you have applied for this department and profession already",
          {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          }
        );
      }
    };
    const clearLocalData = () => {
      window.localStorage.removeItem("NLApplicationData");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    };
    const educationalLevelChange = () => {
      isEdLevelSelected.value = true;
      fetchProfessionalType(
        generalInfo.value.departmentSelected.id,
        generalInfo.value.educationalLevelSelected.id
      );
    };

    const saveDraft = () => {
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
          educations: generalInfo.value ? generalInfo.value.education : {},
          occupationTypeId: generalInfo.value.occupationSelected
            ? generalInfo.value.occupationSelected.id
            : null,
          nativeLanguageId: generalInfo.value.nativeLanguageSelected
            ? generalInfo.value.nativeLanguageSelected.id
            : null,
          isLegal: true,
        },
      };
      store.dispatch("newlicense/addNewLicense", license).then((res) => {
        if (res.data.status == "Success") {
          toast.success("Applied successfuly", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
          isLoading.value = false;
          localStorage.removeItem("NLApplicationData");
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
      window.addEventListener("darkModeChanged", (data) => {
        isDarkMode.value = data.detail ? data.detail.content : "";
      });
      applicantTypeChangeHandler();
      fetchApplicantType();
      fetchDepartments();
      fetchEducationLevel();
      fetchRegions();
      fetchOccupation();
      localData.value = window.localStorage.getItem("NLApplicationData")
        ? JSON.parse(window.localStorage.getItem("NLApplicationData"))
        : {};
      if (Object.keys(localData.value).length != 0) {
        generalInfo.value = localData.value;
        isAppTypeSelected.value = true;
        applicantTypeChangeHandler();
      }
      let userId = JSON.parse(window.localStorage.getItem("userId"));
      store.dispatch("newlicense/getNewLicenseByUser", userId).then((res) => {
        existingLicense.value = res.data.data;
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
      saveDraft,
      fetchOccupation,
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
