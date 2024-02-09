<template>
  <div class="main" id="main">
    <side-nav :finalUrl="finalUrl"></side-nav>
    <div class="content" id="mainContent">
      <top-nav :userInfo="userInfo"></top-nav>
      <div class="mt-8 sm:p-4 p-1">
        <!-- <div class="float-container" @click="toggleDarkMode()">
          <a href="#" :class="isDarkMode ? 'icon two' : 'icon one'">
            <span style="margin-left: -16px !important;">{{
              isDarkMode ? "Light Mode" : " Dark Mode"
            }}</span></a
          >
        </div> -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import SideNav from "./Sidebar.vue";
import TopNav from "./Header.vue";
import "../../../styles/applicant.css";
import { googleApi } from "@/composables/baseURL";
import darkModeService from "./services/darkModeService";
export default {
  props: ["url"],
  components: { SideNav, TopNav },
  setup(props) {
    const userProfile = JSON.parse(localStorage.getItem("personalInfo"));
    let isFirstTime = ref(false);
    let userInfo = ref({});
    let finalUrl = computed(() => props.url);
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    const getProfile = () => {
      userInfo.value.fullName =
        userProfile && userProfile.name ? userProfile.name : "";
      if (!userProfile) {
        isFirstTime.value = true;
      } else {
        userInfo.value.pic = userProfile.profilePicturePath
          ? googleApi + userProfile.profilePicturePath
          : "";
      }
    };

    onMounted(() => {
      getProfile();
      darkModeService.initiateDarkMode();
    });

    const toggleDarkMode = () => {
      darkModeService.modeToggle(isDarkMode.value);
    };
    return { userInfo, toggleDarkMode, finalUrl, isDarkMode };
  },
};
</script>
