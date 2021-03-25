<template>
  <div class="w-screen overflow-x-hidden">
    <LandingTopNav @setShowLogin="setShowLogin" />
    <GetCertifiedSection @setShowSignup="setShowSignup" />
    <NewLicenseSection />
    <RenewalSection />
    <VerificationSection />
    <GoodStandingSection />
    <DeviceAccessibilitySection />
    <MinistryOfHealthSection />
    <FooterSection />
    <Modal v-if="showLogin" @closeModal="setShowLogin">
      <Login />
    </Modal>
    <Modal v-if="showSignUp" @closeModal="setShowSignup">
      <h1>Sign Up</h1>
    </Modal>
  </div>
</template>
<script>
import LandingTopNav from "./sections/LandingTopNav";
import GetCertifiedSection from "./sections/GetCertifiedSection";
import NewLicenseSection from "./sections/NewLicenseSection";
import RenewalSection from "./sections/RenewalSection";
import VerificationSection from "./sections/VerificationSection";
import GoodStandingSection from "./sections/GoodStandingSection";
import DeviceAccessibilitySection from "./sections/DeviceAccessibilitySection";
import MinistryOfHealthSection from "./sections/MinistryOfHealthSection";
import FooterSection from "./sections/FooterSection";
import Modal from "@/sharedComponents/Modal";
import Login from "@/components/Login/Login";

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
    Modal,
    Login
  },
  data() {
    return {
      showLogin: false,
      showSignUp: false
    };
  },
  methods: {
    setShowLogin(showLogin) {
      this.showLogin = showLogin;
    },
    setShowSignup(showSignUp) {
      this.showSignUp = showSignUp;
    }
  }
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
