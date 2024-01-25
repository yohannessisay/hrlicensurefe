<template>
  <main-content :url="'lostLicense'">
    <nav
      class="bg-gray-100 px-5 py-3 rounded-md w-full mb-2 sm:mb-8"
      id="topNav"
    >
      <ol class="list-reset flex">
        <li>
          <router-link to="/menu">
            <a href="#" class="text-main-400 hover:text-blue-700">Home</a>
          </router-link>
        </li>
        <li>
          <span class="text-gray-500 mx-2">/</span>
        </li>
        <li>
          <router-link to="/Applicant/LostLicense">
            <a href="#" class="text-main-400 hover:text-blue-700"
              >Lost License</a
            >
          </router-link>
        </li>
        <li>
          <span class="text-gray-500 mx-2">/</span>
        </li>
        <li class="text-gray-500">Submitted</li>
        <li>
          <span class="text-gray-500 mx-2">/</span>
        </li>
        <li class="text-gray-500">Edit</li>
      </ol>
    </nav>

    <div
      v-if="activeState == 1"
      class="block p-6 rounded-lg max-w-full mr-0 sm:mr-8 mb-8 sm:p-4"
    >
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
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4 p-4">
                <div>
                  <label :class="isDarkMode ? 'text-white' : 'text-main-400'"
                    >Applicant Type</label
                  ><span class="text-red-300">*</span>
                  <select
                    class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    aria-label="Default select example"
                    @change="checkApplicantType(generalInfo.applicantType)"
                    v-model="generalInfo.applicantType"
                    required
                  >
                    <option
                      v-for="type in applicantTypes"
                      :key="type.name"
                      :value="type"
                    >
                      {{ type.name }}
                    </option>
                  </select>
                  <button
                    v-show="Object.keys(localData).length != 0"
                    type="button"
                    class="mt-8 inline-block px-6 py-2.5 bg-white text-main-400 max-w-3xl border hover:bg-main-400 hover:text-white font-medium text-xs leading-tight uppercase rounded hover:border-main-500 focus:bg-blue-700 focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out"
                    @click="clearLocalData()"
                  >
                    <i class="fa fa-close"></i>
                    Clear Form
                  </button>
                </div>
                <div>
                  <label :class="isDarkMode ? 'text-white' : 'text-main-400'"
                    >License Type</label
                  ><span class="text-red-300">*</span>
                  <select
                    class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    aria-label="Default select example"
                    @change="checkApplicationType(generalInfo.applicationType)"
                    v-model="generalInfo.applicationType"
                    required
                  >
                    <option
                      v-for="application in applicationCategories"
                      :key="application.name"
                      :value="application"
                    >
                      {{ application.name }}
                    </option>
                  </select>
                  <button
                    v-show="Object.keys(localData).length != 0"
                    type="button"
                    class="mt-8 inline-block px-6 py-2.5 bg-white text-main-400 max-w-3xl border hover:bg-main-400 hover:text-white font-medium text-xs leading-tight uppercase rounded hover:border-main-500 focus:bg-blue-700 focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out"
                    @click="clearLocalData()"
                  >
                    <i class="fa fa-close"></i>
                    Clear Form
                  </button>
                </div>

                <div>
                  <div class="overflow-hidden shadow-sm">
                    <label
                      for=""
                      :class="isDarkMode ? 'text-white' : 'text-main-400'"
                      >License Loss Date</label
                    >
                    <span class="text-red-300">*</span>
                    <input
                      type="date"
                      name="issuedDate"
                      v-model="generalInfo.loss_date"
                      class="appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                      autocomplete="off"
                      placeholder="example-MR,MRS"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="mb-4" v-if="showLicenses">
                <h2 class="text-yellow-300 text-lg">
                  Here you can find your previous applied licenses in the
                  system, select the one you want to apply as a lost one
                </h2>
                <div class="vld-parent mt-4">
                  <loading
                    :active="licensesLoading"
                    :is-full-page="false"
                    :color="'#2F639D'"
                    :opacity="1"
                  ></loading>

                  <div
                    v-if="
                      (approvedNewLicenses && approvedNewLicenses.length > 0) ||
                        (approvedRenewals && approvedRenewals.length > 0)
                    "
                  >
                    <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
                      <div
                        v-for="license in approvedNewLicenses ||
                          approvedRenewals"
                        :key="license.id"
                        :class="
                          license.isSelected
                            ? 'rounded-md p-2 shadow-md bg-primary-300'
                            : 'rounded-md p-2 shadow-md'
                        "
                      >
                        <div class="grid grid-cols-1 sm:grid-cols-2">
                          <h2 class="text-grey-800 text-lg mb-2">
                            License Number
                          </h2>
                          <h2 class="text-main-400 text-lg">
                            {{
                              license.newLicenseCode
                                ? license.newLicenseCode
                                : license.renewalCode
                                ? license.renewalCode
                                : ""
                            }}
                          </h2>
                          <h2 class="text-grey-800 text-lg">Profession</h2>
                          <h2 class="text-main-400 text-lg mb-2">
                            <span
                              v-for="education in license.educations"
                              :key="education.id"
                            >
                              {{
                                education && education.professionType
                                  ? education.professionType.name + " "
                                  : ""
                              }}</span
                            >
                          </h2>
                          <h2 class="text-grey-800 text-lg mb-2">
                            License Expiry Date
                          </h2>
                          <h2 class="text-main-400 text-lg">
                            {{
                              license.licenseExpirationDate
                                ? license.licenseExpirationDate.slice(0, 10)
                                : ""
                            }}
                          </h2>
                        </div>
                        <button
                          :class="
                            !license.isSelected
                              ? 'mb-2 w-full col-span-12 block px-6 py-2.5 bg-main-400 text-white   font-medium text-xs leading-tight uppercase rounded hover:text-main-400 hover:border-main-500 hover:bg-white transition duration-300 ease-in-out'
                              : 'mb-2 w-full col-span-12 block px-6 py-2.5 bg-red-300 text-white   font-medium text-xs leading-tight uppercase rounded hover:text-main-400 hover:border-main-500 hover:bg-white transition duration-300 ease-in-out'
                          "
                          type="button"
                          @click="
                            selectLicense(
                              license && license.newLicenseCode
                                ? 'newLicense'
                                : 'renewal',
                              license.id,
                              license
                            )
                          "
                        >
                          {{ license.isSelected ? "Remove" : "Select" }}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div v-else class="p-2 border rounded-md shadow-md">
                    No licenses found, Select this if you do not have any
                    license or renewal application approved prior
                    <button
                      class="mb-2 w-full col-span-12 block px-6 py-2.5 bg-main-400 text-white max-w-3xl font-medium text-xs leading-tight uppercase rounded hover:text-main-400 hover:border-main-500 hover:bg-white transition duration-150 ease-in-out"
                      type="button"
                      @click="selectLicense('none')"
                    >
                      Select
                    </button>
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
              <h2 class="text-yellow-300 font-bold text-lg">
                ***Please select the region where you have lost the license (you
                can select random woreda if you do not exactly know the woreda
                name where you lost the license)***
              </h2>
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
                      :key="region.name"
                      :value="region"
                    >
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
                      :key="zone.name"
                      :value="zone"
                    >
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
                    >Woreda<span class="text-red-300">*</span></label
                  >
                  <select
                    class="form-select appearance-none block max-w-3xl px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
          </div>

          <div class="vld-parent">
            <loading
              :active="isLoading"
              :is-full-page="false"
              :color="'#2F639D'"
              :opacity="1"
            ></loading>
            <div class="flex justify-end mb-2 mr-1 bg-white">
              <button
                class="float-right mb-8 inline-block px-6 py-2.5 bg-main-400 text-white max-w-3xl font-medium text-xs leading-tight uppercase rounded border hover:text-main-400 hover:border-main-500 hover:bg-white focus:bg-blue-700 focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out"
                type="submit"
              >
                Next
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
import LicenseSummary from "./submittedSummary.vue";
import Upload from "./submittedUpload.vue";
import MainContent from "../../Shared/Menu.vue";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import Loading from "vue3-loading-overlay";
export default {
  components: {
    MainContent,
    LicenseSummary,
    Upload,
    Loading
  },
  emits: ["changeActiveState", "changeActiveStateMinus", "activeState"],
  setup() {
    const store = useStore();
    const route = useRoute();
    let isLoading = ref(false);
    let generalInfo = ref({});
    let localData = ref([]);
    let regions = ref([]);
    let isAppTypeSelected = ref(false);
    let zones = ref([]);
    let woredas = ref([]);
    let applicantTypes = ref([]);
    let showLocation = ref(false);
    let activeState = ref(1);

    const checkApplicantType = applicantType => {
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
              code: "ZN_HAR_DEF_54"
            };
            fetchWoredas();
            break;
          default:
            fetchZones();
            break;
        }
      }
    };

    const fetchZones = () => {
      store
        .dispatch("newlicense/getZones", generalInfo.value.regionSelected.id)
        .then(res => {
          const zonesResult = res.data.data;
          zones.value = zonesResult;
        });
    };

    const fetchRegions = async () => {
      await store.dispatch("goodstanding/getRegions").then(res => {
        regions.value = res.data.data;
      });
    };
    const fetchZone = () => {
      store
        .dispatch("goodstanding/getZones", generalInfo.value.regionId)
        .then(res => {
          zones.value = res.data.data;
        });
    };

    const fetchWoredas = () => {
      store
        .dispatch("goodstanding/getWoredas", generalInfo.value.zoneSelected.id)
        .then(res => {
          woredas.value = res.data.data;
        });
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

      store
        .dispatch("goodstanding/setGeneralInfo", generalInfo.value)
        .then(() => {
          activeState.value++;
        });
    };
    const clearLocalData = () => {
      window.localStorage.removeItem("GSApplicationData");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    };

    const applicantTypeChangeHandler = async () => {
      if (generalInfo.value.applicantType.code == "ETH") {
        showLocation.value = true;
      } else {
        showLocation.value = false;
      }
    };
    const loadFunctions = async () => {
      isLoading.value = true;

      await store
        .dispatch("goodstanding/getGoodStandingLicenseById", route.params.id)
        .then(res => {
          generalInfo.value = res.data.data;

          generalInfo.value.regionSelected =
            res.data.data && res.data.data.woreda
              ? res.data.data.woreda.zone.region
              : "";

          generalInfo.value.zoneSelected =
            res.data.data && res.data.data.woreda
              ? res.data.data.woreda.zone
              : "";
          generalInfo.value.woredaSelected =
            res.data.data && res.data.data.woreda ? res.data.data.woreda : "";

          applicantTypeChangeHandler();
          regionChangeHandler();
          zoneChangeHandler();
          generalInfo.value.education = JSON.parse(
            JSON.stringify(res.data.data.GSProfessionals)
          );
          if (
            res.data.data.residenceWoredaId == null &&
            res.data.data.applicantTypeId == 1
          ) {
            generalInfo.value.regionSelected = regions.value.filter(
              el => el.code == "FED"
            )
              ? regions.value.filter(el => el.code == "FED")[0]
              : [];
          }
          generalInfo.value.applicantTypeSelected = res.data.data.applicantType;

          fetchRegions();
          fetchZone();
          fetchWoredas();
          isLoading.value = false;
        });
    };
    onMounted(async () => {
      loadFunctions();
    });
    return {
      checkApplicantType,
      regionChangeHandler,
      applicantTypeChangeHandler,
      zoneChangeHandler,
      apply,
      fetchZone,
      isAppTypeSelected,
      showLocation,
      regions,
      woredas,
      activeState,
      zones,
      generalInfo,
      applicantTypes,
      isLoading,
      clearLocalData,
      localData
    };
  }
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
