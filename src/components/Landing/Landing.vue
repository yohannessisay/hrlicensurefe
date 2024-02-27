<template>
  <div :class="isDarkMode?'overflow-x-hidden bg-secondaryDark':'overflow-x-hidden bg-white'">
    <div class="float-container" @click="toggleDarkMode()">
      <a href="#" :class="isDarkMode ? 'icon two' : 'icon one'">
        <span>{{ isDarkMode ? "Light Mode" : " Dark Mode" }}</span></a
      >
    </div>
    <LandingTopNav :isDarkMode="isDarkMode" />
    <GetCertifiedSection :isDarkMode="isDarkMode" />
    <NewLicenseSection :isDarkMode="isDarkMode" />
    <RenewalSection :isDarkMode="isDarkMode" />
    <VerificationSection :isDarkMode="isDarkMode" />
    <GoodStandingSection :isDarkMode="isDarkMode" />
    <DeviceAccessibilitySection :isDarkMode="isDarkMode" />
    <MinistryOfHealthSection :isDarkMode="isDarkMode" />
    <FooterSection :isDarkMode="isDarkMode" />
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import LandingTopNav from "./sections/LandingTopNav";
import GetCertifiedSection from "./sections/GetCertifiedSectionApplicant.vue";
import NewLicenseSection from "./sections/NewLicenseSectionApplicant.vue";
import RenewalSection from "./sections/RenewalSectionApplicant.vue";
import VerificationSection from "./sections/VerificationSection";
import GoodStandingSection from "./sections/GoodStandingSectionApplicant.vue";
import DeviceAccessibilitySection from "./sections/DeviceAccessibilitySection";
import MinistryOfHealthSection from "./sections/MinistryOfHealthSection";
import FooterSection from "./sections/FooterSection";
import darkModeService from "../Applicant/Shared/services/darkModeService";

export default {
  components: {
    LandingTopNav,
    GetCertifiedSection,
    NewLicenseSection,
    RenewalSection,
    VerificationSection,
    GoodStandingSection,
    DeviceAccessibilitySection,
    MinistryOfHealthSection,
    FooterSection,
  },
  setup() {
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    const showLogin = ref(false);
    const showSignUp = ref(false);
    const redirectToSignup = () => {
      showLogin.value = false;
      showSignUp.value = true;
    };
    const redirectToLogin = () => {
      showLogin.value = true;
      showSignUp.value = false;
    };
    const forgotPassword = () => {
      showLogin.value = false;
      showSignUp.value = false;
    };
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
    onMounted(() => {
      initiateDarkMode();
    });
    return {
      showLogin,
      showSignUp,
      redirectToSignup,
      redirectToLogin,
      forgotPassword,
      isDarkMode,
      toggleDarkMode,
    };
  },
};
</script>
<style lang="postcss">
.blue-gradient {
  background-image: linear-gradient(to bottom, #285180, #162b43);
}

.separator {
  height: 13px;
  border-radius: 12px;
  height: 10px;
  width: 144px;
}

.separator-large {
  width: 250px;
}

.glow {
  box-shadow: 0px 3px 6px #fde68a;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-to-top-enter-active,
.slide-fade-to-right-enter-active,
.slide-fade-to-left-enter-active {
  transition: all 0.8s ease-in;
}

.slide-fade-to-top-leave-active,
.slide-fade-to-right-leave-active,
.slide-fade-to-left-leave-active {
  transition: all 0.3s all-ease;
}

.slide-fade-to-top-enter-from,
.slide-fade-to-top-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.slide-fade-to-right-enter-from,
.slide-fade-to-right-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}

.slide-fade-to-left-enter-from,
.slide-fade-to-left-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

.float-container {
  position: fixed;
  top: 33%;
  z-index: 9999;
  right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  width: auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
}

.float-container a {
  z-index: 99;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 110px;
  height: 50px;
  margin-right: -70px;
  margin-bottom: 10px;
  padding: 10px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  color: white;
  border-color: #46b8da;
  border-radius: 100px;
  background-color: #07677e;
  -webkit-box-shadow: 0 2px 4px #7d7d7d;
  box-shadow: 0 2px 4px #7d7d7d;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  font-family: sans-serif;
}
.float-container a span {
  margin-left: -16px;
}
.float-container a:hover {
  margin-right: -20px;
  background-color: #07677e;
  -webkit-box-shadow: 0 2px 4px #c7c7c7;
  box-shadow: 0 2px 4px #c9c6c6;
}

.float-container .icon:before {
  font-family: "Font Awesome 5 Free";
  margin-right: 25px;
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}

.icon.one:before {
  content: "\f186";
}
.icon.two:before {
  content: "\1F323";
}

@media screen and (max-width: 760px) {
  .float-container {
    position: fixed;
    z-index: 9999px;
    top: 50%;
    right: 0;
    margin-left: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    width: auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
  .float-container a span {
    margin-left: 0px;
  }
  .float-container a {
    z-index: 99;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 70px;
    height: 50px;
    margin-right: -30px;
    margin-bottom: 10px;
    padding: 10px 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: white;
    border-color: #46b8da;
    border-radius: 100px;
    background-color: #07677e;
    -webkit-box-shadow: 0 2px 4px #313131;
    box-shadow: 0 2px 4px #3f3f3f;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    font-family: sans-serif;
  }
}
</style>
