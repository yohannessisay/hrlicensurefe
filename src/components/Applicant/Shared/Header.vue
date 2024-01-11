<template>
  <div class="top-navbar glass">
    <div id="menu-icon">
      <i class="bx bx-menu text-main-400" @click="sidebarMenu()"></i>
    </div>
    <div class="profile">
      <div class="flex items-center space-x-5">
        <!-- <div class="m-4">
          <div class="toggle slim colour">
            <input
              id="check4"
              class="toggle-checkbox hidden"
              type="checkbox"
              :checked="isDarkMode==true"
              @click="modeToggle()"
            />
            <label
              for="check4"
              class="
                toggle-label
                block
                w-10
                h-4
                rounded-full
                transition-color
                duration-150
                ease-out
              "
            ></label>
          </div>
        </div> -->

        <div class="relative inline-block text-left" style="z-index: 1">
          <span
            :class="notif && notif.length > 0 ? 'cursor-pointer notifIcon ' : ''"
            v-on:click="showNotifications()"
            ><i class="fa fa-bell text-main-400 text-2xl"></i
          ></span>
          <div
            v-if="showNotif == true"
            class="origin-top-right absolute right-0 sm:w-40 lg:w-64 mt-1 h-64 overflow-y-scroll p-4 rounded-md bg-white focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <span v-if="notif && notif.length > 0">
              <li
                class="text-main-400 cursor-pointer hover:underline hover:bg-primary-300 p-2 rounded-md border-b-4"
                v-for="notif in notif"
                :key="notif"
              >
                <h6 @click="updateNotif(notif)">
                  <span class="text-grey-800">{{
                    notif.data ? notif.data.createdAt.slice(0, 10) : ""
                  }}</span>
                  {{ notif && notif.message ? notif.message : "" }}
                </h6>
              </li></span
            >
            <span v-else>No Notifications</span>
          </div>
        </div>

        <h2
          class="text-main-400 font-bold hidden sm:block"
          v-text="userInfo.fullName"
        ></h2>
        <div class="relative inline-block text-left" style="z-index: 1">
          <a
            class="focus:outline-none bg-lightBlueB-300 text-main-400 hover:text-gray-800 w-7 h-7 rounded-full flex items-center justify-center"
            id="options-menu"
            aria-expanded="true"
            aria-haspopup="true"
            v-on:click="showDropDown()"
          >
            <div v-if="!userInfo.isFirstTime" class="w-12 h-12">
              <img :src="userInfo.pic" alt="image here" class="w-20 h-12" />
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
            class="origin-top-right absolute right-0 mt-1 w-56 p-4 rounded-md bg-white focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div role="none">
              <router-link to="/about">
                <li
                  class="block border-b px-4 py-2 p-2 text-sm text-main-400 font-bold hover:bg-grey-100 hover:text-gray-900 cursor-pointer"
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
                  class="block border-b px-4 py-2 p-2 text-sm text-main-400 font-bold hover:bg-grey-100 hover:text-gray-900 cursor-pointer"
                  role="menuitem"
                >
                  <i class="fa fa-message"></i>
                  Leave a Feedback
                </li>
              </router-link>
              <a href="/applicant/profile">
                <li
                  class="block border-b px-4 py-2 p-2 text-sm text-main-400 font-bold hover:bg-grey-100 hover:text-gray-900 cursor-pointer"
                  role="menuitem"
                >
                  <i class="fa fa-user"></i>
                  Profile
                </li>
              </a>
              <a
                @click="logout()"
                class="block border-b px-4 py-2 p-2 text-sm text-main-400 font-bold hover:bg-grey-100 hover:text-gray-900 cursor-pointer"
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
export default {
  props: ["userInfo"],

  setup() {
    const store = useStore();
    let showDD = ref(false);
    let darkMode = ref(false);
    let showNotif = ref(false);
    const router = useRouter();
    let checkedForNotification = JSON.parse(localStorage.getItem("checkedForExpired"));
    let tempData = [];
    let notif = ref([]);
    const id = +localStorage.getItem("userId");
    let notifications = ref([]);
    let showNotificationDropDown = ref(false);
    let isDarkMode = JSON.parse(localStorage.getItem("nightMode"));
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
      store.dispatch("notification/getApplicantNotification", id).then((res) => {
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
            let tempData = res && res.data && res.data.data ? res.data.data : [];

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

    const dark = () => {
      document.getElementById("mainContent").classList.add("dark-mode");
      document.getElementById("activeMenu").classList.add("dark-mode");
      document.getElementById("mainSideBar").classList.add("dark-mode");
      document.getElementById("options-menu").classList.add("dark-mode");
      document.getElementById("home").classList.add("dark-mode");
      document.getElementById("menu-icon").classList.add("dark-mode");
      document.querySelector("body").classList.add("dark-mode");
      darkMode.value = true;
      localStorage.setItem("nightMode", JSON.stringify(darkMode.value));
    };

    const light = () => {
      document.getElementById("mainContent").classList.remove("dark-mode");
      document.getElementById("activeMenu").classList.remove("dark-mode");
      document.getElementById("mainSideBar").classList.remove("dark-mode");
      document.getElementById("options-menu").classList.remove("dark-mode");
      document.getElementById("menu-icon").classList.remove("dark-mode");
      document.getElementById("home").classList.remove("dark-mode");
      document.querySelector("body").classList.remove("dark-mode");
      darkMode.value = false;
      localStorage.setItem("nightMode", JSON.stringify(darkMode.value));
    };

    const modeToggle = () => {
      if (
        darkMode.value ||
        document.getElementById("mainContent").classList.contains("dark-mode")
      ) {
        light();
      } else {
        dark();
      }
    };
    onMounted(() => {
      checkForExpiredLicense();
      checkForNotification();
    });
    return {
      showDropDown,
      showNotification,
      showNotifications,
      showNotif,
      updateNotif,
      modeToggle,
      darkMode,
      light,
      isDarkMode,
      notifications,
      dark,
      showDD,
      notif,
      sidebarMenu,
      updateProfile,
      logout,
    };
  },
};
</script>
<style scoped>
.notifIcon {
  animation: pulse 2s infinite;
  border-radius: 50%;
  margin: 5px;
}
@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 #ffc400;
  }
  70% {
    -webkit-box-shadow: 0 0 0 10px #ffc400;
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 #ffc400;
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 #ffc400;
    color: #fcca2946;
    box-shadow: 0 0 0 0 rgba(244, 157, 22, 1);
  }
  70% {
    -moz-box-shadow: 0 0 0 10px #ffc400;

    box-shadow: 0 0 0 10px rgba(244, 157, 22, 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 #ffc400;
    box-shadow: 0 0 0 0 rgba(244, 157, 22, 0);
  }
}
.toggle-label {
  position: relative;
}
.toggle-label:before {
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  display: block;
  content: "";
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 9999%;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 40%;
  background-image: url('data:image/svg+xml;charset=UTF-8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240 240" style="enable-background:new 0 0 240 240" xml:space="preserve"><g><path d="M58.57,25.81c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8l9.88,17.1c2.13,3.67,0.87,8.38-2.8,10.51 c-3.67,2.13-8.38,0.88-10.51-2.8L58.57,25.81L58.57,25.81z M120,51.17c19.01,0,36.21,7.7,48.67,20.16 C181.12,83.79,188.83,101,188.83,120c0,19.01-7.7,36.21-20.16,48.67c-12.46,12.46-29.66,20.16-48.67,20.16 c-19.01,0-36.21-7.7-48.67-20.16C58.88,156.21,51.17,139.01,51.17,120c0-19.01,7.7-36.21,20.16-48.67 C83.79,58.88,101,51.17,120,51.17L120,51.17z M158.27,81.73c-9.79-9.79-23.32-15.85-38.27-15.85c-14.95,0-28.48,6.06-38.27,15.85 c-9.79,9.79-15.85,23.32-15.85,38.27c0,14.95,6.06,28.48,15.85,38.27c9.79,9.79,23.32,15.85,38.27,15.85 c14.95,0,28.48-6.06,38.27-15.85c9.79-9.79,15.85-23.32,15.85-38.27C174.12,105.05,168.06,91.52,158.27,81.73L158.27,81.73z M113.88,7.71c0-4.26,3.45-7.71,7.71-7.71c4.26,0,7.71,3.45,7.71,7.71v19.75c0,4.26-3.45,7.71-7.71,7.71 c-4.26,0-7.71-3.45-7.71-7.71V7.71L113.88,7.71z M170.87,19.72c2.11-3.67,6.8-4.94,10.48-2.83c3.67,2.11,4.94,6.8,2.83,10.48 l-9.88,17.1c-2.11,3.67-6.8,4.94-10.48,2.83c-3.67-2.11-4.94-6.8-2.83-10.48L170.87,19.72L170.87,19.72z M214.19,58.57 c3.67-2.13,8.38-0.87,10.51,2.8c2.13,3.67,0.88,8.38-2.8,10.51l-17.1,9.88c-3.67,2.13-8.38,0.87-10.51-2.8 c-2.13-3.67-0.88-8.38,2.8-10.51L214.19,58.57L214.19,58.57z M232.29,113.88c4.26,0,7.71,3.45,7.71,7.71 c0,4.26-3.45,7.71-7.71,7.71h-19.75c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71H232.29L232.29,113.88z M220.28,170.87 c3.67,2.11,4.94,6.8,2.83,10.48c-2.11,3.67-6.8,4.94-10.48,2.83l-17.1-9.88c-3.67-2.11-4.94-6.8-2.83-10.48 c2.11-3.67,6.8-4.94,10.48-2.83L220.28,170.87L220.28,170.87z M181.43,214.19c2.13,3.67,0.87,8.38-2.8,10.51 c-3.67,2.13-8.38,0.88-10.51-2.8l-9.88-17.1c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8L181.43,214.19 L181.43,214.19z M126.12,232.29c0,4.26-3.45,7.71-7.71,7.71c-4.26,0-7.71-3.45-7.71-7.71v-19.75c0-4.26,3.45-7.71,7.71-7.71 c4.26,0,7.71,3.45,7.71,7.71V232.29L126.12,232.29z M69.13,220.28c-2.11,3.67-6.8,4.94-10.48,2.83c-3.67-2.11-4.94-6.8-2.83-10.48 l9.88-17.1c2.11-3.67,6.8-4.94,10.48-2.83c3.67,2.11,4.94,6.8,2.83,10.48L69.13,220.28L69.13,220.28z M25.81,181.43 c-3.67,2.13-8.38,0.87-10.51-2.8c-2.13-3.67-0.88-8.38,2.8-10.51l17.1-9.88c3.67-2.13,8.38-0.87,10.51,2.8 c2.13,3.67,0.88,8.38-2.8,10.51L25.81,181.43L25.81,181.43z M7.71,126.12c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71 h19.75c4.26,0,7.71,3.45,7.71,7.71c0,4.26-3.45,7.71-7.71,7.71H7.71L7.71,126.12z M19.72,69.13c-3.67-2.11-4.94-6.8-2.83-10.48 c2.11-3.67,6.8-4.94,10.48-2.83l17.1,9.88c3.67,2.11,4.94,6.8,2.83,10.48c-2.11,3.67-6.8,4.94-10.48,2.83L19.72,69.13L19.72,69.13z"/></g></svg>');
  transition: transform 0.15s cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.toggle-checkbox:checked + .toggle-label:before {
  transform: translateX(1.5rem);
  background-image: url('data:image/svg+xml;charset=UTF-8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.89" style="enable-background:new 0 0 122.88 122.89" xml:space="preserve"><g><path d="M49.06,1.27c2.17-0.45,4.34-0.77,6.48-0.98c2.2-0.21,4.38-0.31,6.53-0.29c1.21,0.01,2.18,1,2.17,2.21 c-0.01,0.93-0.6,1.72-1.42,2.03c-9.15,3.6-16.47,10.31-20.96,18.62c-4.42,8.17-6.1,17.88-4.09,27.68l0.01,0.07 c2.29,11.06,8.83,20.15,17.58,25.91c8.74,5.76,19.67,8.18,30.73,5.92l0.07-0.01c7.96-1.65,14.89-5.49,20.3-10.78 c5.6-5.47,9.56-12.48,11.33-20.16c0.27-1.18,1.45-1.91,2.62-1.64c0.89,0.21,1.53,0.93,1.67,1.78c2.64,16.2-1.35,32.07-10.06,44.71 c-8.67,12.58-22.03,21.97-38.18,25.29c-16.62,3.42-33.05-0.22-46.18-8.86C14.52,104.1,4.69,90.45,1.27,73.83 C-2.07,57.6,1.32,41.55,9.53,28.58C17.78,15.57,30.88,5.64,46.91,1.75c0.31-0.08,0.67-0.16,1.06-0.25l0.01,0l0,0L49.06,1.27 L49.06,1.27z"/></g></svg>');
}

.toggle.slim .toggle-label:before {
  top: -0.15rem;
  left: 0;
}
.toggle.slim .toggle-checkbox:checked + .toggle-label:before {
  transform: translateX(1.75rem);
}
.toggle.colour .toggle-label {
  background-color: #000000;
}
.toggle.colour .toggle-checkbox:checked + .toggle-label {
  background-color: #07677e;
}
</style>
