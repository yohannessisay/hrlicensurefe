<template>
  <div class="main" id="main">
    <side-nav :isDarkMode="isDarkMode"></side-nav>
    <div class="content" id="mainContent">
      <top-nav :userInfo="userInfo"></top-nav>
      <div class="ml-4 mr-4 sm:mt-8 sm:ml-8 sm:mr-8">
        <nav
          :class="
            isDarkMode
              ? 'bg-secondaryDark p-4 rounded-md w-full mt-24'
              : 'bg-grey-100 p-4 rounded-md w-full mt-24'
          "
        >
          <ol class="list-reset flex">
            <li>
              <a
                href="#"
                :class="
                  isDarkMode ? 'text-white text-xl ' : 'text-main-400 text-xl'
                "
                >{{ $t("Welcome Back,") }}
                {{ userInfo.fullName ? userInfo.fullName : "" }}</a
              >
            </li>
            <li><span class="text-gray-500 mx-2"></span></li>
          </ol>
        </nav>

        <div id="home" class="sm:mt-12">
          <div class="float-container" @click="toggleDarkMode()">
            <a href="#" class="icon one"> </a>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-4 mr-8 ml-8 sm:m-0 gap-8">
            <!-- New license box -->
            <div class="w-full overview-boxes rounded-md">
              <div
                :class="
                  isDarkMode
                    ? 'bg-secondaryDark text-white box rounded-2xl hover:shadow-4xl transition duration-500 transform hover:scale-110 cursor-pointer'
                    : 'bg-white text-main-400 box rounded-2xl hover:shadow-4xl transition duration-500 transform hover:scale-110 cursor-pointer'
                "
                data-bs-toggle="modal"
                data-bs-target="#NewLicenseModal"
                @mouseover="changeModalData('NewLicense')"
              >
                <p
                  class="py-6 px-4 text-lg tracking-wide text-center flex flex-row justify-center"
                >
                  <img
                    src="../../../assets/applicant/newLicense.png"
                    alt=""
                    style="height: 100px; width: 100px"
                  />
                </p>

                <div class="flex justify-center px-5 mb-2 text-sm mt-5">
                  <h1 class="text-2xl">{{ $t("New License") }}</h1>
                </div>
              </div>
            </div>
            <!-- New license box -->
            <!-- Renewal box -->
            <div class="overview-boxes">
              <div
                :class="
                  isDarkMode
                    ? 'bg-secondaryDark text-white  box rounded-2xl hover:shadow-4xl transition duration-500 transform hover:scale-110 cursor-pointer'
                    : 'bg-white box rounded-2xl text-main-400  hover:shadow-4xl transition duration-500 transform hover:scale-110 cursor-pointer'
                "
                @mouseover="changeModalData('Renewal')"
                data-bs-toggle="modal"
                data-bs-target="#RenewalModal"
              >
                <p
                  class="py-6 px-4 text-lg tracking-wide text-center flex flex-row justify-center"
                >
                  <img
                    src="../../../assets/applicant/renewal.png"
                    alt=""
                    style="height: 100px; width: 100px"
                  />
                </p>

                <div class="flex justify-center px-5 mb-2 text-sm mt-4">
                  <h1 class="text-2xl">{{ $t("Renewal")}}</h1>
                </div>
              </div>
            </div>
            <!-- Renewal box -->
            <!-- Goodstanding box -->
            <div class="overview-boxes">
              <div
                :class="
                  isDarkMode
                    ? 'bg-secondaryDark box text-white rounded-2xl hover:shadow-4xl transition duration-500 transform hover:scale-110 cursor-pointer'
                    : 'bg-white box rounded-2xl text-main-400 hover:shadow-4xl transition duration-500 transform hover:scale-110 cursor-pointer'
                "
                data-bs-toggle="modal"
                data-bs-target="#GoodStandingModal"
                @mouseover="changeModalData('GoodStanding')"
              >
                <p
                  class="py-6 px-4 text-lg tracking-wide text-center flex flex-row justify-center"
                >
                  <img
                    src="../../../assets/applicant/goodStanding.png"
                    alt=""
                    style="height: 100px; width: 100px"
                  />
                </p>

                <div class="flex justify-center px-5 mb-2 text-sm mt-4">
                  <h1 class="text-2xl">{{ $t("Goodstanding")}}</h1>
                </div>
              </div>
            </div>
            <!-- Goodstanding box -->
            <!--  License designation box -->
            <div class="mb-8 overview-boxes">
              <div
                :class="
                  isDarkMode
                    ? 'bg-secondaryDark box text-white rounded-2xl hover:shadow-4xl transition duration-500 transform hover:scale-110 cursor-pointer'
                    : 'bg-white box text-main-400 rounded-2xl hover:shadow-4xl transition duration-500 transform hover:scale-110 cursor-pointer'
                "
                data-bs-target="#LicenseDesignationModal"
                @mouseover="changeModalData('LicenseDesignation')"
                data-bs-toggle="modal"
              >
                <p
                  class="py-6 px-4 text-lg tracking-wide text-center flex flex-row justify-center"
                >
                  <i
                    class="fa fa-tasks text-main-400"
                    style="font-size: 111px"
                  ></i>
                </p>

                <div class="flex justify-center px-5 mb-2 text-sm mt-1">
                  <h1 class="text-2xl">{{ $t("License Designation")}}</h1>
                </div>
              </div>
            </div>
            <!-- License designation box -->

            <!-- Lost License box -->
            <div class="mb-8 overview-boxes">
              <div
                :class="
                  isDarkMode
                    ? 'bg-secondaryDark box text-white  rounded-2xl hover:shadow-4xl transition duration-500 transform hover:scale-110 cursor-pointer'
                    : 'bg-white box text-main-400 rounded-2xl hover:shadow-4xl transition duration-500 transform hover:scale-110 cursor-pointer'
                "
                data-bs-target="#LostLicenseModal"
                @mouseover="changeModalData('LostLicense')"
                data-bs-toggle="modal"
              >
                <p
                  class="py-6 px-4 text-lg tracking-wide text-center flex flex-row justify-center"
                >
                  <i
                    class="fa fa-recycle text-main-400"
                    style="font-size: 111px"
                  ></i>
                </p>

                <div class="flex justify-center px-5 mb-2 text-sm mt-1">
                  <h1 class="text-2xl">{{ $t("Lost License")}}</h1>
                </div>
              </div>
            </div>
            <!-- Lost License box -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <Modal :modalType="modalType" :isDarkMode="isDarkMode" :list="currentList">
    <template v-slot:ethiopianDetail>
      <div class="p-6 mb-2">
        <div class="mt-6 py-4">
          <a
            :href="`/Applicant/${
              modalType && modalType !== 'LicenseDesignation'
                ? modalType
                : 'NewLicense'
            }`"
          >
            <button
              class="font-medium leading-tight rounded-md hover:border-main-400 focus:bg-blue-700 focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out text-xl text-white pt-2 pb-4 bg-main-400 hover:text-main-400 hover:border hover:bg-white px-4"
              @click="setApplicantType('Ethiopian')"
            >
              {{$t('Get Started')}}
            </button>
          </a>
        </div>
      </div>
    </template>
    <template v-slot:foreignerDetail>
      <div class="p-6 mb-2">
        <div class="mt-6 py-4">
          <a
            :href="`/Applicant/${
              modalType && modalType !== 'LicenseDesignation'
                ? modalType
                : 'NewLicense'
            }`"
          >
            <button
              class="text-xl text-white py-2 bg-main-400 hover:text-main-400 hover:border hover:bg-white px-4 rounded-sm"
              @click="setApplicantType('Foreign')"
            >
               {{$t('Get Started')}}
            </button>
          </a>
        </div>
      </div>
    </template>
    <template v-slot:ethAbroadDetail>
      <div class="p-6 mb-2">
        <div class="mt-6 py-4">
          <a
            :href="`/Applicant/${
              modalType && modalType !== 'LicenseDesignation'
                ? modalType
                : 'NewLicense'
            }`"
          >
            <button
              class="text-xl text-white py-2 bg-main-400 hover:text-main-400 hover:border hover:bg-white px-4 rounded-sm"
              @click="setApplicantType('EthiopianFromAbroad')"
            >
              {{$t('Get Started')}}
            </button>
          </a>
        </div>
      </div>
    </template>
  </Modal>

  -
</template>

<script>
import { ref, onMounted } from "vue";
import SideNav from "./Sidebar.vue";
import TopNav from "../Shared/Header.vue";
import { googleApi } from "@/composables/baseURL";
import "../../../styles/applicant.css";
import { useStore } from "vuex";
import Modal from "./Shared/Modal.vue";
import darkModeService from "../Shared/services/darkModeService";
import {
  newLicenseList,
  renewalList,
  goodStandingList,
  licenseDesignationList,
  lostLicenseList,
} from "./Shared/documentSpecs";
export default {
  components: { SideNav, TopNav, Modal },
  setup() {
    const store = useStore();
    const id = +localStorage.getItem("userId");
    let isFirstTime = ref(false);
    let userInfo = ref({});
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    let modalType = ref("");
    let currentList = ref({});
    const changeModalData = (type) => {
      switch (type) {
        case "NewLicense":
          currentList.value = newLicenseList;
          break;
        case "Renewal":
          currentList.value = renewalList;
          break;
        case "GoodStanding":
          currentList.value = goodStandingList;
          break;
        case "LicenseDesignation":
          currentList.value = licenseDesignationList;
          break;
        case "LostLicense":
          currentList.value = lostLicenseList;
          break;

        default:
          break;
      }

      modalType.value = type;
    };
    const getProfile = () => {
      store.dispatch("profile/getProfileByUserId", id).then((res) => {
        getImage(res.data.data);
        getName(res.data.data);
      });
    };
    const capitalized = (name) => {
      const capitalizedFirst = name[0].toUpperCase();
      const rest = name.slice(1);

      return capitalizedFirst + rest;
    };
    const getName = (profile) => {
      if (profile) {
        userInfo.value.fullName =
          capitalized(profile.name) + " " + capitalized(profile.fatherName);
      }
    };
    const getImage = (profile) => {
      if (!profile) {
        isFirstTime.value = true;
      } else {
        userInfo.value.pic = profile.profilePicture
          ? googleApi + profile.profilePicture.filePath
          : "";
      }
    };
    const setApplicantType = (type) => {
      switch (type) {
        case "Ethiopian":
          localStorage.setItem(
            "applicantTypeSelected",
            JSON.stringify({
              code: "ETH",
              createdAt: "2021-11-17T17:29:25.271Z",
              id: 1,
              name: "Ethiopian",
              updatedAt: "2021-11-17T17:29:25.271Z",
            })
          );
          break;
        case "EthiopianFromAbroad":
          localStorage.setItem(
            "applicantTypeSelected",
            JSON.stringify({
              code: "ETHABRO",
              createdAt: "2021-11-17T17:29:25.271Z",
              id: 3,
              name: "Ethiopian From Abroad",
              updatedAt: "2021-11-17T17:29:25.271Z",
            })
          );
          break;
        case "Foreign":
          localStorage.setItem(
            "applicantTypeSelected",
            JSON.stringify({
              code: "FOR",
              createdAt: "2021-11-17T17:29:25.271Z",
              id: 2,
              name: "Foreigner",
              updatedAt: "2021-11-17T17:29:25.271Z",
            })
          );
          break;
        default:
          break;
      }
      if (modalType.value && modalType.value === "LicenseDesignation") {
        localStorage.setItem("isLicenseDesignation", JSON.stringify(true));
      }
    };
    onMounted(() => {
      getProfile();
      initiateDarkMode();
    });

    const initiateDarkMode = () => {
      if (JSON.parse(localStorage.getItem("darkMode")) == true) {
        darkModeService.dark();
      } else {
        darkModeService.light();
      }
    };
    const toggleDarkMode = () => {
      isDarkMode.value = darkModeService.modeToggle(isDarkMode.value);
    };

    return {
      userInfo,
      currentList,
      toggleDarkMode,
      isDarkMode,
      setApplicantType,
      modalType,
      changeModalData,
    };
  },
};
</script>
<style scoped>
.overview-boxes .box:hover {
  align-items: center;
  justify-content: center;
  padding: 15px 14px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.884);
}
</style>
