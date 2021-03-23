<template>
  <div class="w-screen overflow-x-hidden">
    <LandingTopNav />
    <GetCertifiedSection />
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
import LandingTopNav from "./LandingTopNav";
import GetCertifiedSection from "./GetCertifiedSection";
import NewLicenseSection from "./NewLicenseSection";
import RenewalSection from "./RenewalSection";
import VerificationSection from "./VerificationSection";
import GoodStandingSection from "./GoodStandingSection";
import DeviceAccessibilitySection from "./DeviceAccessibilitySection";
import MinistryOfHealthSection from "./MinistryOfHealthSection";
import FooterSection from "./FooterSection";

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
    FooterSection
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
</style>
