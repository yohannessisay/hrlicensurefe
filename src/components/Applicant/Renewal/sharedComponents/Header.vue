<template>
  <div class="top-navbar flex justify-items-center">
    <div id="menu-icon">
      <i class="bx bx-menu text-main-400 " @click="sidebarMenu()"></i>
    </div>
    <div class="profile">
      <div class="flex items-center space-x-5">
        <p
          class="text-main-400 font-bold"
          v-text="userInfo ? userInfo.name : ''"
        ></p>
        <div class="relative inline-block text-left" style="z-index: 1">
          <a
            class="
              focus:outline-none
              bg-lightBlueB-300
              text-lightBlueB-400
              hover:text-gray-800
              w-7
              h-7
              rounded-full
              flex
              items-center
              justify-center
            "
            id="options-menu"
            aria-expanded="true"
            aria-haspopup="true"
            v-on:click="showDropDown()"
          >
            <div v-if="userInfo != {}" class="w-12 h-12">
              <img
                v-bind:src="
                 userInfo.profilePicturePath
                    ? googleApi + userInfo.profilePicturePath
                    : ''
                "
                alt="image here"
                class="w-20 h-12"
              />
            </div>
            <div v-if="userInfo == {}">
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
            class="
              origin-top-right
              absolute
              right-0
              mt-1
              w-56
              p-4
              rounded-md
              shadow-lg
              bg-white
              focus:outline-none
            "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div role="none">
              <router-link to="/about">
                <li
                  class="
                    block
                    border-b
                    px-4
                    py-2
                    p-2
                    text-sm
                     text-main-400
                    font-bold
                    hover:bg-grey-100 hover:text-gray-900
                    cursor-pointer
                  "
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
                  class="
                  block
                    border-b
                    px-4
                    py-2
                    p-2
                    text-sm
                     text-main-400
                    font-bold
                    hover:bg-grey-100 hover:text-gray-900
                    cursor-pointer
                  "
                  role="menuitem"
                >
                <i class="fa fa-message"></i>
                  Leave a Feedback
                </li>
              </router-link>
              <a  href="/applicant/profile">
                <li
                  class="
                  block
                    border-b
                    px-4
                    py-2
                    p-2
                    text-sm
                     text-main-400
                    font-bold
                    hover:bg-grey-100 hover:text-gray-900
                    cursor-pointer
                  "
                  role="menuitem"
                >
                <i class="fa fa-user"></i>
                  Profile
                </li>
              </a>
              <a
                @click="logout()"
                class="
                block
                    border-b
                    px-4
                    py-2
                    p-2
                    text-sm
                     text-main-400
                    font-bold
                    hover:bg-grey-100 hover:text-gray-900
                    cursor-pointer
                "
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
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import { googleApi } from "@/composables/baseURL";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    let showDD = ref(false);
    let showNotificationDropDown = ref(false);
    let isFirstTime = ref(false);
    let userInfo = ref({});
    const logout = () => {
      localStorage.clear();
      window.indexedDB.deleteDatabase("NLdocumentUploads");
      window.indexedDB.deleteDatabase("RNdocumentUploads");
      window.indexedDB.deleteDatabase("GSdocumentUploads");

      router.push({ path: "/" });
      window.setTimeout(() => {
        location.reload();
      }, 1000);
    };
    const showDropDown = () => {
      showNotificationDropDown.value = false;
      showDD.value = !showDD.value;
    };
    const showNotification = () => {
      showNotificationDropDown.value = !showNotificationDropDown.value;
      showDD.value = false;
    };
    const selectMenu = (menu) => {
      if (this.$route.name != "Menu") {
        this.$router.push({ path: "/menu" });
      } else {
        this.$emit("changeDisplay", menu);
      }
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
    onMounted(() => {
      userInfo.value = JSON.parse(window.localStorage.getItem('personalInfo'));
      
    });
    return {
      showDropDown,
      showNotification,
      selectMenu,
      isFirstTime,
      googleApi,
      showDD,
      userInfo,
      sidebarMenu,
      updateProfile,
      logout,
    };
  },
};
</script>
  