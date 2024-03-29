<template>
  <PageHeader :path="path" :isDarkMode="isDarkMode"></PageHeader>
  <div :class="isDarkMode ? ' text-white ' : ' text-main-400'">
    <div class="mt-small flex justify-center">
      <h2 class="text-3xl font-bold">
        {{ $t("General Information") }}
      </h2>
    </div>

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
              ? 'mt-12 rounded-sm bg-secondaryDark text-white '
              : 'mt-12 rounded-sm bg-white text-main-400 p-2'
          "
        >
          <div class="container mx-auto border-b mb-4">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4 p-4">
              <div class="mb-4">
                <label :class="isDarkMode ? 'text-white' : 'text-main-400'">{{
                  $t("Applicant Type")
                }}</label
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
                  {{ $t("Clear Form") }}
                </button>
              </div>
              <div class="mb-4">
                <label :class="isDarkMode ? 'text-white' : 'text-main-400'">{{
                  $t("License Type")
                }}</label
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
              </div>

              <div>
                <div class="overflow-hidden shadow-sm">
                  <label
                    for=""
                    :class="isDarkMode ? 'text-white' : 'text-main-400'"
                    >{{ $t("License Loss Date") }}</label
                  >
                  <span class="text-red-300">*</span>
                  <input
                    type="date"
                    name="issuedDate"
                    v-model="generalInfo.loss_date"
                    class="appearance-none block w-full text-main-400 px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                    autocomplete="off"
                    placeholder="example-MR,MRS"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="mb-4 break-all" v-if="showLicenses">
              <h2 class="text-yellow-300 text-lg">
                {{
                  $t(
                    "Here you can find your previously applied licenses in the system, select the one you want to apply as a lost one"
                  )
                }}
              </h2>
              <div class="vld-parent mt-4">
                <loading
                  :active="licensesLoading"
                  :is-full-page="false"
                  :color="'#2F639D'"
                  :opacity="1"
                ></loading>

                <div v-if="approvedLicenses && approvedLicenses.length > 0">
                  <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
                    <div
                      v-for="license in approvedLicenses"
                      :key="license.id"
                      :class="
                        license.isSelected
                          ? 'rounded-md p-2 shadow-md bg-primary-300'
                          : 'rounded-md p-2 shadow-md'
                      "
                    >
                      <div class="grid grid-cols-1 sm:grid-cols-2">
                        <h2 class="text-lg mb-2">
                          {{ $t("License Number") }}
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
                        <h2 class="text-lg">
                          {{ $t("Professional Type") }}
                        </h2>
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
                        <h2 class="text-lg mb-2">
                          {{ $t("License Expiry Date") }}
                        </h2>
                        <h2 class="text-lg">
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
                        {{ $t(license.isSelected ? "Remove" : "Select") }}
                      </button>
                    </div>
                  </div>
                </div>

                <div v-else class="p-2 border rounded-md shadow-md">
                  {{
                    $t(
                      "No licenses found, Select this if you do not have any license or renewal application approved prior"
                    )
                  }}
                  <button
                    class="mb-2 w-full col-span-12 block px-6 py-2.5 bg-main-400 text-white max-w-3xl font-medium text-xs leading-tight uppercase rounded hover:text-main-400 hover:border-main-500 hover:bg-white transition duration-150 ease-in-out"
                    type="button"
                    @click="selectLicense('none')"
                  >
                    {{ $t("Select") }}
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
              ***{{
                $t(
                  "Please select the region where you have taken the license from"
                )
              }}***
            </h2>

            <div
              class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-2 mb-4 p-4 border-b"
            >
              <div class="flex flex-col mb-4">
                <label :class="isDarkMode ? 'text-white' : 'text-main-400'">
                  {{ $t("Region") }}<span class="text-red-300">*</span></label
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
                class="flex flex-col mb-4"
                v-if="
                  generalInfo.regionSelected &&
                  generalInfo.regionSelected.code != 'FED' &&
                  generalInfo.regionSelected.code != 'HAR'
                "
              >
                <label :class="isDarkMode ? 'text-white' : 'text-main-400'">
                  {{ $t("Zone") }}<span class="text-red-300">*</span></label
                >
                <select
                  class="form-select appearance-none block max-w-3xl px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                <label :class="isDarkMode ? 'text-white' : 'text-main-400'">
                  {{ $t("Woreda") }}<span class="text-red-300">*</span></label
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
          <div class="flex justify-end mb-2 mr-1 mt-4">
            <button
              class="float-right mb-8 inline-block px-6 py-2.5 bg-main-400 text-white max-w-3xl font-medium text-xs leading-tight uppercase rounded border hover:text-main-400 hover:border-main-500 hover:bg-white focus:bg-blue-700 focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out"
              type="submit"
            >
              {{ $t("Next") }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import { useToast } from "vue-toastification";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import PageHeader from "../../Shared/PagesHeader.vue";
export default {
  props: ["activeState", "applicationCategories"],
  components: { Loading, PageHeader },
  emits: ["darkMode", "changeActiveState", "changeActiveStateMinus"],
  setup(props, { emit }) {
    const store = useStore();
    const toast = useToast();
    let applicantTypes = ref([]);
    let isLoading = ref(false);
    let licensesLoading = ref(false);
    let licenseIsSelected = ref(false);
    let showLicenses = ref(false);
    const path = ref([
      { name: "Home", link: "/menu" },
      { name: "LostLicense", link: "/Applicant/LostLicense" },
      { name: "LostLicense", link: "/Applicant/LostLicense" },
    ]);
    let generalInfo = ref({
      applicationType: "",
      renewal_id: null,
      new_license_id: null,
      has_previous_license_in_system: false,
      applicant_id: +localStorage.getItem("userId"),
      loss_date: "",
      regionSelected: "",
      zoneSelected: "",
      woredaSelected: "",
      expertLevelId: "",
      applicantType: "",
    });
    let approvedLicenses = ref([]);
    let localData = ref([]);
    let regions = ref([]);

    let zones = ref([]);
    let woredas = ref([]);

    let showLocation = ref(false);
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    const selectLicense = (type, id, license) => {
      switch (type) {
        case "newLicense":
          generalInfo.value.new_license_id = id;
          generalInfo.value.renewal_id = null;
          generalInfo.value.has_previous_license_in_system = true;

          approvedLicenses.value.forEach((element) => {
            element.id != id
              ? (element.isSelected = false)
              : (license.isSelected = !license.isSelected);
          });

          break;
        case "renewal":
          generalInfo.value.renewal_id = id;
          generalInfo.value.new_license_id = null;
          generalInfo.value.has_previous_license_in_system = true;
          approvedLicenses.value.forEach((element) => {
            element.id != id
              ? element.isSelected == false
              : (license.isSelected = !license.isSelected);
          });
          break;
        case "none":
          generalInfo.value.renewal_id = null;
          generalInfo.value.new_license_id = null;
          generalInfo.value.has_previous_license_in_system = false;

          break;

        default:
          break;
      }
    };
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
      generalInfo.value.applicantType = applicantType;
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

    const fetchZones = () => {
      store

        .dispatch("newlicense/getZones", generalInfo.value.regionSelected.id)
        .then((res) => {
          const zonesResult = res.data.data;
          zones.value = zonesResult;
        });
    };

    const fetchRegions = () => {
      store.dispatch("goodstanding/getRegions").then((res) => {
        regions.value = res.data.data.filter((reg) => reg.code !== "FED");
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

    const submit = () => {
      if (
        generalInfo.value.renewal_id == null &&
        generalInfo.value.new_license_id == null &&
        generalInfo.value.has_previous_license_in_system
      ) {
        toast.error("Please select the lost license", {
          timeout: 5000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true,
        });
        return;
      }
      if (
        generalInfo.value.regionSelected &&
        generalInfo.value.regionSelected.code
      ) {
        generalInfo.value.expertLevelId = 4;
      } else {
        generalInfo.value.expertLevelId = 3;
      }

      let tempApplicationData = generalInfo.value;
      window.localStorage.setItem(
        "LLApplicationData",
        JSON.stringify(tempApplicationData)
      );
      store
        .dispatch("lostLicenses/setGeneralInfo", generalInfo.value)
        .then(() => {
          emit("changeActiveState");
        });
    };
    const clearLocalData = () => {
      window.localStorage.removeItem("LLApplicationData");
      window.indexedDB.deleteDatabase("LLdocumentUploads");

      window.location.reload();
    };
    const checkApplicationType = (applicationType) => {
      approvedLicenses.value = [];
      showLicenses.value = true;
      licensesLoading.value = true;

      if (applicationType) {
        if (applicationType.code === "NA") {
          fetchAndProcessLicenses("newlicense/getNewLicense", "newLicense");
        } else if (applicationType.code === "RA") {
          fetchAndProcessLicenses("renewal/getRenewalLicense", "renewal");
        }
      }
    };
    const fetchAndProcessLicenses = (actionType) => {
      let targetArray = [];
      store.dispatch(actionType).then((res) => {
        const results = res.data.data || [];

        if (results.length > 0) {
          targetArray = results.filter((approvedLicense) => {
            return approvedLicense.applicationStatus.code === "APP";
          });
        }

        approvedLicenses.value = targetArray;
        licensesLoading.value = false;
      });
    };

    const fetchApplicantType = () => {
      store.dispatch("goodstanding/getApplicantType").then((res) => {
        applicantTypes.value = res.data.data;
      });
    };
    onMounted(async () => {
      window.addEventListener("darkModeChanged", (data) => {
        isDarkMode.value = data.detail ? data.detail.content : "";
      });
      fetchRegions();
      fetchApplicantType();
      localData.value = window.localStorage.getItem("LLApplicationData")
        ? await JSON.parse(window.localStorage.getItem("LLApplicationData"))
        : {};

      if (Object.keys(localData.value).length != 0) {
        generalInfo.value = localData.value;
        fetchZone();
        fetchWoredas();
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
      checkApplicationType,
      regionChangeHandler,
      zoneChangeHandler,
      submit,
      fetchZone,
      showLocation,
      regions,
      woredas,
      generalInfo,
      zones,
      isDarkMode,
      clearLocalData,
      localData,
      isLoading,
      approvedLicenses,
      licensesLoading,
      showLicenses,
      licenseIsSelected,
      selectLicense,
      applicantTypes,
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
