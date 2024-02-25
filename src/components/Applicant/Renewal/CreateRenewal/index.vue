<template>
  <PageHeader :path="path" :isDarkMode="isDarkMode"></PageHeader>

  <div class="vld-parent mt-4">
    <loading
      :active="isLoading"
      :is-full-page="false"
      :color="'#2F639D'"
      :opacity="0.6"
      class="rounded-md"
    ></loading>
    <!-- {{ previousLicense }} -->
    <div class="flex justify-center m-4">
      <h1
        :class="
          isDarkMode && isDarkMode == true
            ? 'text-2xl sm:text-3xl text-white'
            : 'text-2xl sm:text-3xl text-yellow-300'
        "
      >
        {{
          $t(
            "You have the option to select a license you already have in the system for renewal or fill out a new application form for the renewal process."
          )
        }}
      </h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 m-4">
      <div
        :class="
          isDarkMode
            ? 'flex justify-center bg-secondaryDark p-4 rounded-lg m-4 hover:-translate-y-2 transition-all duration-200 transform'
            : 'flex justify-center bg-white p-4 rounded-lg m-4 hover:-translate-y-2 transition-all duration-200 transform'
        "
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
            $t(
              previousLicense && previousLicense.length == 0
                ? "No existing license"
                : "Show Existing License/s"
            )
          }}
        </button>
        <br />
      </div>
      <div
        :class="
          isDarkMode
            ? 'flex justify-center bg-secondaryDark p-4 rounded-lg m-4 hover:-translate-y-2 transition-all duration-200 transform'
            : 'flex justify-center bg-white p-4 rounded-lg m-4 hover:-translate-y-2 transition-all duration-200 transform'
        "
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
          {{ $t("Apply For A New Form") }}
        </button>
      </div>
    </div>
    <div class="collapse" id="collapseExample" data-te-collapse-item>
      <div
        :class="
          isDarkMode && isDarkMode == true
            ? 'block rounded-lg darkModeSecondLayer p-6 dark:bg-neutral-700 dark:text-neutral-50  '
            : 'block rounded-lg bg-secondaryDark p-6 dark:bg-neutral-700 dark:text-neutral-50  '
        "
      >
        <div
          v-if="previousLicense && previousLicense.length != 0"
          class="w-full p-4"
        >
          <div class="grid grid-cols-1 sm:grid-cols-4">
            <div
              v-for="license in previousLicense"
              :key="license.id"
              :class="
                expirationDatesHelper(
                  license.licenseExpirationDate
                    ? license.licenseExpirationDate.slice(0, 10)
                    : new Date().toISOString().slice(0, 10)
                ) < 90
                  ? 'bg-white border-4 mb-2 text-red-300 mt-2 px-1 w-full sm:mr-3   rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2'
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
                  ? 'bg-white border-4 mb-2 text-yellow-300 mt-2 px-1 w-full sm:mr-3   rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2'
                  : 'bg-white mt-2 mb-2 px-1 w-full sm:mr-3   rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2'
              "
            >
              <!-- Article -->
              <div>
                <h2 class="text-main-400 border-b-2 text-xl p-2">
                  {{ $t("License Number") }}
                  <span class="text-base text-main-400">
                    {{ license.newLicenseCode }}
                  </span>
                </h2>

                <div class="border-b-2 text-main-400 p-2">
                  <div class="grid grid-cols-3">
                    <h1 class="text-lg">
                      <a class="text-main-400 pointer-events-none" href="#">{{
                        $t("Department")
                      }}</a>
                    </h1>

                    <ul class="text-black text-sm col-span-2">
                      <li
                        v-for="(education, index) in license.educations"
                        :key="education.id"
                        style="display: inline"
                      >
                        <span class="text-grey-800 text-sm">
                          {{
                            education.department
                              ? "*" + education.department.name
                              : "-"
                          }}
                          <span v-if="index != license.educations.length - 1"
                            >,</span
                          >
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div class="grid grid-cols-3">
                    <h1 class="text-lg">
                      <a class="text-main-400 pointer-events-none" href="#">{{
                        $t("Profession")
                      }}</a>
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
                          <span v-if="index != license.educations.length - 1"
                            >,</span
                          >
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div class="grid grid-cols-2">
                    <h1 class="text-lg">
                      <a class="text-main-400 pointer-events-none" href="#">{{
                        $t("License Expiration Date")
                      }}</a>
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
                <footer
                  class="flex items-center justify-between leading-none p-2 md:p-2"
                >
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
                    {{ $t("Renew") }}
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
                      {{ $t("Days Remaining For Expiration") }}</span
                    >
                    <h4 v-else class="text-red-300 text-2xl font-bold">
                      {{ $t("Expired") }}
                    </h4>
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
import { ref, onMounted } from "vue";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import PageHeader from "../../Shared/PagesHeader.vue";
export default {
  props: ["activeState"],
  components: { Loading, PageHeader },
  emits: ["changeActiveState", "changeActiveStateMinus"],
  setup(props, { emit }) {
    let isLoading = ref(false);
    const store = useStore();
    const id = +localStorage.getItem("userId");
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    let previousLicense = ref([]);
    const path = ref([
      { name: "Home", link: "/menu" },
      { name: "Renewal", link: "/Applicant/Renewal" },
      { name: "Renewal Home", link: "/Applicant/Renewal" },
    ]);

    const expirationDatesHelper = (date_1) => {
      let date_2 = new Date().toISOString().slice(0, 10);
      let difference = new Date(date_1).getTime() - new Date(date_2).getTime();
      let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
      return TotalDays;
    };
    onMounted(() => {
      window.addEventListener("darkModeChanged", (data) => {
        isDarkMode.value = data.detail ? data.detail.content : "";
      });
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
      tempApplicationData.woredaSelected = license.woreda
        ? license.woreda
        : null;
      tempApplicationData.zoneSelected = license.woreda
        ? license.woreda.zone
        : null;
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
      renewExisting,
      applyForNew,
      isLoading,
      expirationDatesHelper,
      previousLicense,
      path,
      isDarkMode,
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
