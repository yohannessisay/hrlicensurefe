<template>
  <div class="overflow-x-hidden">
    <LandingTopNav @setShowLogin="showLogin = true" />
    <GetCertifiedSection @setShowSignup="showSignUp = true" />
    <NewLicenseSection />
    <RenewalSection />
    <VerificationSection />
    <GoodStandingSection />
    <DeviceAccessibilitySection />
    <MinistryOfHealthSection />
    <FooterSection />


 
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
    onMounted(() => {});
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
    return {
      showLogin,
      showSignUp,
      redirectToSignup,
      redirectToLogin,
      forgotPassword, 
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
</style>
