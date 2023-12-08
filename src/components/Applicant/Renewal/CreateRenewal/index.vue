<template>
  <nav class="bg-grey-100 mb-4 px-5 py-3 rounded-md w-full" id="topNav">
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
      <li>
        <span class="text-gray-500 mx-2">/</span>
      </li>
      <li>
        <router-link to="/Applicant/Renewal">
          <a
            href="#"
            :class="
              isDarkMode && isDarkMode == true
                ? 'text-white '
                : 'text-main-400 hover:text-blue-700'
            "
            >Renewal</a
          >
        </router-link>
      </li>
      <li>
        <span
          :class="
            isDarkMode && isDarkMode == true ? 'text-white mx-2 ' : 'text-main-400 mx-2'
          "
          >/</span
        >
      </li>
      <li
        :class="
          isDarkMode && isDarkMode == true
            ? 'text-grey-100 '
            : 'text-main-400 hover:text-blue-700'
        "
      >
        Apply
      </li>
    </ol>
  </nav>
  <div class="vld-parent mt-4">
    <loading
      :active="isLoading"
      :is-full-page="false"
      :color="'#2F639D'"
      :opacity="1"
    ></loading>
    <!-- {{ previousLicense }} -->
    <div class="flex justify-center m-4">
      <h1
        :class="
          isDarkMode && isDarkMode == true
            ? 'text-xl sm:text-3x text-white'
            : 'text-xl sm:text-3xl text-yellow-300'
        "
      >
        You can choose an existing license that you have on this system for renewal or
        apply for a renewal form
      </h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 m-4">
      <div
        class="flex justify-center bg-white p-4 rounded-lg m-4 hover:-translate-y-2 transition-all duration-200 transform"
      >
        <button
          :class="
            previousLicense && previousLicense.length > 0
              ? 'inline-block px-6 text-white bg-main-400 hover:text-main-400 hover:border text-sm font-bold uppercase rounded   mb-4 transition duration-150 ease-in-out'
              : 'inline-block px-6 text-white bg-grey-300 hover:text-main-400 hover:border text-sm font-bold uppercase rounded   mb-4 transition duration-150 ease-in-out pointer-events-none'
          "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          title="Choose and renew an existing license of which you applied through this system"
          data-toggle="tooltip"
          data-placement="right"
          data-ripple-init
          data-ripple-color="light"
        >
          {{
            previousLicense && previousLicense.length == 0
              ? "No existing license"
              : "Show Existing License/s"
          }}
        </button>
        <br />
      </div>
      <div
        class="flex justify-center bg-white p-4 rounded-lg m-4 hover:-translate-y-2 transition-all duration-200 transform"
      >
        <button
          class="inline-block px-6 text-white bg-main-400 hover:text-main-400 hover:border text-sm font-bold uppercase rounded mb-4 transition duration-150 ease-in-out"
          type="button"
          @click="applyForNew()"
          title="Your License exists before this system and you want to renew it"
          data-toggle="tooltip"
          data-placement="right"
          data-ripple-init
          data-ripple-color="light"
        >
          Apply For A New Form
        </button>
      </div>
    </div>
    <div class="collapse" id="collapseExample" data-te-collapse-item>
      <div
        :class="
          isDarkMode && isDarkMode == true
            ? 'block rounded-lg darkModeSecondLayer p-6 dark:bg-neutral-700 dark:text-neutral-50  '
            : 'block rounded-lg bg-primary-200 p-6 dark:bg-neutral-700 dark:text-neutral-50  '
        "
      >
        <div v-if="previousLicense && previousLicense.length != 0" class="w-full p-4">
          <div class="flex flex-row sm:-mx-1 lg:-mx-2">
            <div
              v-for="license in previousLicense"
              :key="license.id"
              :class="
                expirationDatesHelper(
                  license.licenseExpirationDate
                    ? license.licenseExpirationDate.slice(0, 10)
                    : new Date().toISOString().slice(0, 10)
                ) < 90
                  ? 'bg-white border-4 text-red-300 my-1 px-1 md:w-1/4 lg:w-1/4 mdlg:w-1/4 sm:w-full sm:mr-3   rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2'
                  : expirationDatesHelper(
                      license.licenseExpirationDate
                        ? license.licenseExpirationDate.slice(0, 10)
                        : new Date().toISOString().slice(0, 10)
                    ) > 60 &&
                    expirationDatesHelper(
                      license.licenseExpirationDate
                        ? license.licenseExpirationDate.slice(0, 10)
                        : new Date().toISOString().slice(0, 10)
                    ) < 90
                  ? 'bg-white border-4 text-yellow-300 my-1 px-1 md:w-1/4 lg:w-1/4 mdlg:w-1/4 sm:w-full sm:mr-3   rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2'
                  : 'bg-white my-1 px-1 md:w-1/4 lg:w-1/4 mdlg:w-1/4 sm:w-full sm:mr-3   rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2'
              "
            >
              <!-- Article -->
              <div>
                <h2 class="text-main-400 border-b-2 text-xl p-2">
                  License Number-
                  <span class="text-base text-main-400">
                    {{ license.newLicenseCode }}
                  </span>
                </h2>

                <div class="border-b-2 text-main-400 p-2">
                  <div class="grid grid-cols-3">
                    <h1 class="text-lg">
                      <a class="text-main-400 pointer-events-none" href="#">Department</a>
                    </h1>

                    <ul class="text-black text-sm col-span-2">
                      <li
                        v-for="(education, index) in license.educations"
                        :key="education.id"
                        style="display: inline"
                      >
                        <span class="text-grey-800 text-sm">
                          {{
                            education.department ? "*" + education.department.name : "-"
                          }}
                          <span v-if="index != license.educations.length - 1">,</span>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div class="grid grid-cols-3">
                    <h1 class="text-lg">
                      <a class="text-main-400 pointer-events-none" href="#">Profession</a>
                    </h1>
                    <ul class="text-black text-sm col-span-2">
                      <li
                        v-for="(education, index) in license.educations"
                        :key="education.id"
                        style="display: inline"
                      >
                        <span class="text-grey-800 text-sm">
                          {{
                            "*" + education.professionType
                              ? education.professionType.name
                              : "-"
                          }}
                          <span v-if="index != license.educations.length - 1">,</span>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div class="grid grid-cols-2">
                    <h1 class="text-lg">
                      <a class="text-main-400 pointer-events-none" href="#"
                        >License Expiration Date</a
                      >
                    </h1>
                    <ul class="text-black text-sm">
                      <h2>
                        <span class="text-grey-800 text-sm">
                          {{
                            license.licenseExpirationDate
                              ? license.licenseExpirationDate.slice(0, 10)
                              : ""
                          }}
                        </span>
                      </h2>
                    </ul>
                  </div>
                </div>
                <footer class="flex items-center justify-between leading-none p-2 md:p-2">
                  <span class="text-main-400 text-sm">
                    {{ license.createdAt.slice(0, 10) }}
                  </span>
                </footer>
                <div class="flex justify-center">
                  <button
                    :class="
                      expirationDatesHelper(
                        license.licenseExpirationDate
                          ? license.licenseExpirationDate.slice(0, 10)
                          : new Date().toISOString().slice(0, 10)
                      ) < 90
                        ? 'inline-block px-6 text-white bg-main-400 hover:text-main-400 hover:border text-sm font-bold uppercase rounded   mb-4 transition duration-150 ease-in-out'
                        : 'inline-block px-6 text-white bg-grey-400 hover:text-main-400 hover:border text-sm font-bold uppercase rounded   mb-4 transition duration-150 ease-in-out pointer-events-none'
                    "
                    data-bs-toggle="modal"
                    data-bs-target="#declinedDetail"
                    @click="renewExisting(license)"
                  >
                    Renew
                  </button>
                </div>
                <div class="text-center">
                  <h2
                    :class="
                      expirationDatesHelper(
                        license.licenseExpirationDate
                          ? license.licenseExpirationDate.slice(0, 10)
                          : new Date().toISOString().slice(0, 10)
                      ) < 60
                        ? 'text-red-300 text-xl'
                        : 'text-grey-800 text-xl'
                    "
                  >
                    <span
                      v-if="
                        expirationDatesHelper(
                          license.licenseExpirationDate
                            ? license.licenseExpirationDate.slice(0, 10)
                            : new Date().toISOString().slice(0, 10)
                        ) > 0
                      "
                    >
                      {{
                        expirationDatesHelper(
                          license.licenseExpirationDate
                            ? license.licenseExpirationDate.slice(0, 10)
                            : new Date().toISOString().slice(0, 10)
                        )
                      }}
                      Days Remaining For Expiration</span
                    >
                    <h4 v-else class="text-red-300 text-2xl font-bold">Expired</h4>
                  </h2>
                </div>
              </div>

              <!-- END Article -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, onMounted, getCurrentInstance } from "vue";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  props: ["activeState"],
  components: { Loading },
  emits: ["darkMode", "changeActiveState", "changeActiveStateMinus"],
  setup(props, { emit }) {
    let isLoading = ref(false);
    const store = useStore();
    const id = +localStorage.getItem("userId");
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    let previousLicense = ref([]);
    const darkMode = () => {
      emit("darkMode");
      const instance = getCurrentInstance();

      if (isDarkMode.value == true) {
        isDarkMode.value = false;
        instance?.proxy?.forceUpdate();
      } else {
        isDarkMode.value = true;

        instance?.proxy?.forceUpdate();
      }
    };
    const expirationDatesHelper = (date_1) => {
      let date_2 = new Date().toISOString().slice(0, 10);
      let difference = new Date(date_1).getTime() - new Date(date_2).getTime();
      let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
      return TotalDays;
    };
    onMounted(() => {
      isLoading.value = true;

      checkForNewLicenses(id);
    });
    const checkForNewLicenses = (userId) => {
      store.dispatch("newlicense/getNewLicenseByUser", userId).then((res) => {
        let results = res.data.data ? res.data.data : [];
        if (results.length > 0) {
          previousLicense.value = results
            ? results.filter((license) =>
                license.applicationStatus
                  ? license.applicationStatus.code == "APP" &&
                    license.isReturned != true &&
                    license.isreturned != true
                  : ""
              )
            : [];
        }
        isLoading.value = false;
      });
    };
    const renewExisting = (license) => {
      let tempApplicationData = {};
      license.educations.forEach((element) => {
        delete element.id;
        element.educationalLevel = element.educationLevel;
        element.professionalType = element.professionType;
      });
      tempApplicationData.education = license.educations;
      tempApplicationData.multipleDepartment = license.educations;

      tempApplicationData.nativeLanguageSelected = license.nativeLanguage
        ? license.nativeLanguage
        : null;
      tempApplicationData.occupationSelected = license.occupationType
        ? license.occupationType
        : null;
      tempApplicationData.woredaSelected = license.woreda ? license.woreda : null;
      tempApplicationData.zoneSelected = license.woreda ? license.woreda.zone : null;
      tempApplicationData.regionSelected = license.woreda
        ? license.woreda.zone.region
        : null;
      tempApplicationData.applicantTypeSelected = license.applicantType
        ? license.applicantType
        : null;
      tempApplicationData.newLicenseId = license.id;
      tempApplicationData.newLicenseCode = license.newLicenseCode;
      window.localStorage.setItem(
        "RNApplicationData",
        JSON.stringify(tempApplicationData)
      );
      store.dispatch("renewal/setGeneralInfo", tempApplicationData).then(() => {
        emit("changeActiveState");
      });
    };
    const applyForNew = () => {
      emit("changeActiveState");
    };
    return {
      darkMode,
      renewExisting,
      applyForNew,
      isLoading,
      expirationDatesHelper,
      isDarkMode,
      previousLicense,
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
