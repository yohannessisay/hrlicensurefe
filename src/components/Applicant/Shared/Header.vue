<template>
  <div
    :class="
      isDarkMode
        ? 'top-navbar glass text-white'
        : 'top-navbar glass text-main-400'
    "
  >
    <div id="menu-icon">
      <i class="bx bx-menu" @click="sidebarMenu()"></i>
    </div>
    <div class="profile">
      <div class="flex justify-end items-end space-x-2">
        <div class="relative inline-block mb-1">
          <span
            :class="
              notif && notif.length > 0
                ? 'cursor-pointer notifIcon mr-4'
                : 'cursor-pointer mr-4 '
            "
            v-on:click="showNotifications()"
            ><i
              :class="
                isDarkMode
                  ? 'fa fa-bell text-xl text-white cursor-pointer  shadow-md p-1 rounded-md bg-primary-400'
                  : 'fa fa-bell  text-xl text-white cursor-pointer  shadow-md p-1 rounded-md bg-primary-400'
              "
            ></i
          ></span>
          <div
            v-if="showNotif == true"
            :class="
              isDarkMode
                ? 'origin-top-right absolute right-0 bg-primary-300 w-56 mt-1 h-64 overflow-y-scroll p-4 rounded-md shadow-md focus:outline-none'
                : 'origin-top-right absolute right-0 bg-primary-300  w-56 mt-1 h-64 overflow-y-scroll p-4 rounded-md shadow-md focus:outline-none'
            "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <span v-if="notif && notif.length > 0">
              <li
                class="cursor-pointer hover:underline hover:bg-primary-300 p-2   border-b-4"
                v-for="notif in notif"
                :key="notif"
              >
                <h6 @click="updateNotif(notif)">
                  <span class="text-grey-800">{{
                    notif.data ? notif.data.createdAt.slice(0, 10) : ""
                  }}</span>
                  <span class="text-main-400 ml-2 break-all">{{ notif && notif.message ? notif.message : "" }}</span>
                </h6>
              </li></span
            >
            <span v-else>No Notifications</span>
          </div>
        </div>
        <div
          class="dropdown mb-1 transition duration-300 ease-in-out mr-2 sm:mr-8"
        >
          <i
            class="fa fa-globe fa-lg t cursor-pointer shadow-md p-2 rounded-md bg-primary-400"
          >
          </i>
          <span class="text-base ml-1" style="margin-top: -2px !important">{{
            locale ? locale.toUpperCase() : ""
          }}</span>
          <ul
            class="dropdown-menu absolute hidden p-2 sm:w-40 text-gray-700 bg-main-400 rounded-md shadow-md"
          >
            <li
              @click="changeLocale('am')"
              class="border-lightBlueB-500 border-b p-1 hover:text-yellow-300 rounded-t-md cursor-pointer"
            >
              <div class="flex">
                <svg
                  class="mt-2 mr-2"
                  width="20"
                  height="20"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 473.68 473.68"
                  style="enable-background: new 0 0 473.68 473.68"
                  xml:space="preserve"
                >
                  <circle
                    style="fill: #ffffff"
                    cx="236.85"
                    cy="236.85"
                    r="236.83"
                  />
                  <path
                    style="fill: #d32027"
                    d="M326.532,314.868H13.219c0.079,0.221,0.15,0.445,0.228,0.673
		c32.452,92.102,120.19,158.135,223.387,158.135c7.173,0,14.263-0.352,21.274-0.98C294.514,452.743,317.336,389.338,326.532,314.868z"
                  />
                  <path
                    style="fill: #258f44"
                    d="M13.608,157.668c-0.026,0.067-0.049,0.131-0.075,0.206h312.879
		c-9.27-74.07-32.052-137.029-68.303-156.901C251.097,0.352,244.007,0,236.835,0C133.806,0,46.187,65.802,13.608,157.668z"
                  />
                  <path
                    style="fill: #f8d12e"
                    d="M0,236.842c0,27.348,4.693,53.588,13.219,78.026h313.313c6.256-50.66,6.215-106.402-0.12-156.995
		H13.534C4.798,182.573,0,209.139,0,236.842z"
                  />
                  <path
                    style="fill: #d32027"
                    d="M258.113,472.697c93.848-8.362,171.927-71.46,202.12-157.156c0.079-0.228,0.146-0.453,0.228-0.673
		h-146.12C305.145,389.338,294.514,452.743,258.113,472.697z"
                  />
                  <path
                    style="fill: #258f44"
                    d="M314.218,157.874H460.14c-0.026-0.075-0.049-0.138-0.075-0.206
		C429.752,72.2,351.785,9.319,258.105,0.972C294.361,20.844,304.947,83.804,314.218,157.874z"
                  />
                  <path
                    style="fill: #f8d12e"
                    d="M460.143,157.874H314.218c6.335,50.593,6.376,106.339,0.12,156.995h146.116
		c8.526-24.438,13.219-50.682,13.219-78.026C473.677,209.139,468.879,182.573,460.143,157.874z"
                  />
                </svg>

                <a
                  class="bg-gray-200 text-white   py-2 block whitespace-no-wrap"
                  href="#"
                  >Amharic</a
                >
              </div>
            </li>
            <li
              class="hover:text-yellow-300 rounded-b-md cursor-pointer p-1"
              @click="changeLocale('en')"
            >
              <div class="flex">
                <svg
                  class="mr-2 mt-2"
                  width="20"
                  height="20"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                >
                  <circle style="fill: #f0f0f0" cx="256" cy="256" r="256" />
                  <g>
                    <path
                      style="fill: #d80027"
                      d="M244.87,256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256z"
                    />
                    <path
                      style="fill: #d80027"
                      d="M244.87,122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783H244.87V122.435z"
                    />
                    <path
                      style="fill: #d80027"
                      d="M256,512c60.249,0,115.626-20.824,159.356-55.652H96.644C140.374,491.176,195.751,512,256,512z"
                    />
                    <path
                      style="fill: #d80027"
                      d="M37.574,389.565h436.852c12.581-20.529,22.338-42.969,28.755-66.783H8.819
		C15.236,346.596,24.993,369.036,37.574,389.565z"
                    />
                  </g>
                  <path
                    style="fill: #0052b4"
                    d="M118.584,39.978h23.329l-21.7,15.765l8.289,25.509l-21.699-15.765L85.104,81.252l7.16-22.037
	C73.158,75.13,56.412,93.776,42.612,114.552h7.475l-13.813,10.035c-2.152,3.59-4.216,7.237-6.194,10.938l6.596,20.301l-12.306-8.941
	c-3.059,6.481-5.857,13.108-8.372,19.873l7.267,22.368h26.822l-21.7,15.765l8.289,25.509l-21.699-15.765l-12.998,9.444
	C0.678,234.537,0,245.189,0,256h256c0-141.384,0-158.052,0-256C205.428,0,158.285,14.67,118.584,39.978z M128.502,230.4
	l-21.699-15.765L85.104,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822l-21.7,15.765L128.502,230.4z
	 M120.213,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822
	L120.213,130.317z M220.328,230.4l-21.699-15.765L176.93,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822
	l-21.7,15.765L220.328,230.4z M212.039,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822
	l8.288-25.509l8.288,25.509h26.822L212.039,130.317z M212.039,55.743l8.289,25.509l-21.699-15.765L176.93,81.252l8.289-25.509
	l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822L212.039,55.743z"
                  />
                </svg>

                <a
                  class="bg-gray-200 text-white  hover:bg-gray-400 py-2 block whitespace-no-wrap"
                  href="#"
                  >English</a
                >
              </div>
            </li>
          </ul>
        </div>
        <h2
          :class="
            isDarkMode
              ? 'text-lg text-main-400 hidden sm:block mb-2'
              : 'text-lg text-main-400 hidden sm:block mb-2'
          "
        >
          {{ userInfo.fullName }}
        </h2>
        <div class="relative inline-block text-left" style="z-index: 1">
          <a
            class="focus:outline-none bg-grey-200 hover:text-gray-800 w-7 h-7 rounded-full flex items-center justify-center"
            id="options-menu"
            aria-expanded="true"
            aria-haspopup="true"
            v-on:click="showDropDown()"
          >
            <div v-if="!userInfo.isFirstTime" class="">
              <img
                :src="userInfo.pic"
                alt="image here"
                class="w-20 h-12 border-white border-4"
              />
            </div>
            <div v-if="userInfo.isFirstTime">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </a>
          <div
            v-if="showDD == true"
            class="origin-top-right shadow-md absolute right-0 mt-1 w-56 p-2 rounded-md bg-primary-300 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div role="none">
              <router-link to="/about">
                <li
                  class="block border-b mb-2 text-lg text-main-400 font-bold hover:bg-white rounded-t-md cursor-pointer"
                  role="menuitem"
                >
                  <i class="fa fa-info-circle"></i>
                  About
                </li>
              </router-link>
            </div>
            <div role="none">
              <router-link to="/google-form">
                <li
                  class="block border-b mb-2 text-lg text-main-400 font-bold hover:bg-white rounded-t-md cursor-pointer"
                  role="menuitem"
                >
                  <i class="fa fa-message"></i>
                  Leave a Feedback
                </li>
              </router-link>
              <a href="/applicant/profile">
                <li
                  class="block border-b mb-2 text-lg text-main-400 font-bold hover:bg-white rounded-t-md cursor-pointer"
                  role="menuitem"
                >
                  <i class="fa fa-user"></i>
                  Profile
                </li>
              </a>
              <a
                @click="logout()"
                class="block border-b text-lg text-main-400 font-bold hover:bg-white rounded-t-md cursor-pointer"
                role="menuitem"
                id="logout"
              >
                <i class="fa fa-sign-out"></i>
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import darkModeService from "../Shared/services/darkModeService";
import { useI18n } from "vue-i18n";
export default {
  props: ["userInfo"],

  setup() {
    const store = useStore();
    let showDD = ref(false);
    let showNotif = ref(false);
    const router = useRouter();
    const i18n = useI18n();
    const locale = ref(JSON.parse(localStorage.getItem("locale")));
    let checkedForNotification = JSON.parse(
      localStorage.getItem("checkedForExpired")
    );
    let tempData = [];
    let notif = ref([]);
    const id = +localStorage.getItem("userId");
    let notifications = ref([]);
    let showNotificationDropDown = ref(false);
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    const logout = () => {
      localStorage.clear();
      window.indexedDB.deleteDatabase("NLdocumentUploads");
      window.indexedDB.deleteDatabase("RNdocumentUploads");
      window.indexedDB.deleteDatabase("GSdocumentUploads");
      router.push({ path: "/landing" });
    };
    const showDropDown = () => {
      showNotificationDropDown.value = false;
      showDD.value = !showDD.value;
    };
    const showNotifications = () => {
      showNotif.value = !showNotif.value;
    };
    const showNotification = () => {
      showNotificationDropDown.value = !showNotificationDropDown.value;
      showDD.value = false;
    };

    const checkForNotification = () => {
      store
        .dispatch("notification/getApplicantNotification", id)
        .then((res) => {
          tempData = res && res.data ? res.data : [];
          notif.value = [];
          if (tempData.length > 0) {
            tempData.forEach((element) => {
              notif.value.push({
                data: element,
                message: element.message,
                url:
                  element && element.new_license_id
                    ? "/Applicant/NewLicense/approved"
                    : element && element.renewal_id
                    ? "/Applicant/Renewal/approved"
                    : element && element.goodstanding_id
                    ? "/Applicant/Goodstanding/approved"
                    : "",
              });
            });
          }
        });
    };
    const updateNotif = (notifData) => {
      router.push({ path: notifData.url.toString() });
      showNotif.value = false;
      store
        .dispatch("notification/updateApplicantNotification", notifData.data)
        .then(() => {
          checkForNotification();
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const checkForExpiredLicense = () => {
      checkedForNotification == false
        ? store.dispatch("newlicense/getNewLicenseByUserId", id).then((res) => {
            let tempData =
              res && res.data && res.data.data ? res.data.data : [];

            tempData.forEach((element) => {
              let tempDate = expirationDatesHelper(
                element.licenseExpirationDate
                  ? element.licenseExpirationDate.slice(0, 10)
                  : new Date().toISOString().slice(0, 10)
              );

              notifications.value.push({
                message:
                  tempDate && tempDate <= 0
                    ? `Your license with number ${element.newLicenseCode} has expired please renew your license.`
                    : tempDate && tempDate < 60
                    ? `Your license with number ${element.newLicenseCode} is about to expire in ${tempDate} days, please renew your license.`
                    : "",
                url: "/Applicant/Renewal",
              });
              localStorage.setItem(
                "expiredNotifications",
                JSON.stringify(notifications.value)
              );
            });
          })
        : (notifications.value = JSON.parse(
            localStorage.getItem("expiredNotifications")
          ));
    };
    const expirationDatesHelper = (date_1) => {
      let date_2 = new Date().toISOString().slice(0, 10);
      let difference = new Date(date_1).getTime() - new Date(date_2).getTime();
      let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
      return TotalDays;
    };
    const updateProfile = () => {
      let id = +localStorage.getItem("userId");
      let url = "/update-profile/:" + id;
      this.$router.push(url);
    };

    const sidebarMenu = () => {
      let menu = document.querySelector("#menu-icon");
      let sidenavbar = document.querySelector(".side-navbar");
      let content = document.querySelector(".content");
      let sidenavbarHeader = document.querySelector("#header-text");
      menu.onclick = () => {
        sidenavbar.classList.toggle("active");
        content.classList.toggle("active");
        sidenavbarHeader.classList.toggle("disable-header-text");
      };
    };
    const changeLocale = (language) => {
      i18n.locale.value = language;
      locale.value = language;
      localStorage.setItem("locale", JSON.stringify(language));
    };
    onMounted(() => {
      checkForExpiredLicense();
      checkForNotification();
      darkModeService.initiateDarkMode();
    });
    return {
      changeLocale,
      showDropDown,
      showNotification,
      showNotifications,
      showNotif,
      updateNotif,
      isDarkMode,
      notifications,
      showDD,
      notif,
      sidebarMenu,
      updateProfile,
      logout,
      locale,
    };
  },
};
</script>
<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
