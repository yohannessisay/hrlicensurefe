<template>
  <div>
    <Navigation :display="menu" @changeDisplay="displaySet" />
    <div style="width: 100%" class="flex flex-row bg-lightBlueB-200">
      <div class="sidenav">
        <SideNav :display="menu" @changeDisplay="displaySet" />
      </div>
      <div class="menu">
        <div v-if="this.display == 0">
          <LicenseRequests />
        </div>
        <div v-if="this.display == 1">
          <Draft />
        </div>
        <div v-if="this.display == 2">
          <Withdrawn />
        </div>
        <div v-if="this.display == 3">
          <Submitted />
        </div>
        <div v-if="this.display == 4">
          <InReview />
        </div>
        <div v-if="this.display == 5">
          <Approved />
        </div>
        <div v-if="this.display == 6">
          <ApprovedPayment />
        </div>
        <div v-if="this.display == 7">
          <Declined />
        </div>
        <div v-if="this.display == 8">
          <DeclinedPayment />
        </div>
        <div v-if="this.display == 9">
          <UnderSupervision />
        </div>
        <div v-if="this.display == 10">
          <PendingPayment />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from "@/views/Navigation";
import SideNav from "@/views/SideNav.vue";
import Draft from "@/views/Draft.vue";
import Withdrawn from "@/views/Withdraw.vue";
import Submitted from "@/views/Submitted";
import Approved from "@/views/Approved";
import Declined from "@/views/Declined";
import UnderSupervision from "@/views/UnderSupervision";
import LicenseRequests from "@/views/LicenseRequests";
import InReview from "@/views/InReview";
import ApprovedPayment from "@/views/ApprovedPayment";
import DeclinedPayment from "@/views/DeclinedPayment";
import PendingPayment from "@/views/PendingPayment";

export default {
  components: {
    Navigation,
    SideNav,
    Draft,
    Withdrawn,
    Submitted,
    Approved,
    Declined,
    UnderSupervision,
    LicenseRequests,
    InReview,
    ApprovedPayment,
    DeclinedPayment,
    PendingPayment,
  },
  created() {
    this.$route.params.status = undefined;
    console.log(this.$route.params.status);
    // resetting new license store
    this.$store.dispatch("newlicense/storeAcceptedFields", []);
    this.$store.dispatch("newlicense/storeDeclinedFields", []);
    this.$store.dispatch("newlicense/setLicense", {});
    this.$store.dispatch("newlicense/setPassport", "");
    this.$store.dispatch("newlicense/setHealthExamCert", "");
    this.$store.dispatch("newlicense/setLanguage", "");
    this.$store.dispatch("newlicense/setProfessionalDoc", []);
    this.$store.dispatch("newlicense/setHerqa", "");
    this.$store.dispatch("newlicense/setSupportLetter", "");
    this.$store.dispatch("newlicense/setCOC", "");
    this.$store.dispatch("newlicense/setEducationalDocument", []);
    this.$store.dispatch("newlicense/setWorkExperience", "");
    this.$store.dispatch("newlicense/setServiceFee", "");
    this.$store.dispatch("newlicense/setLetterfromOrg", "");
    this.$store.dispatch("newlicense/setRenewedLicense", "");
    this.$store.dispatch("newlicense/setProfessionalLicense", "");
    this.$store.dispatch("newlicense/setPayroll", "");
    this.$store.dispatch("newlicense/setDegree", "");
    this.$store.dispatch("newlicense/setTranscript", "");
    this.$store.dispatch("newlicense/setDiploma", "");
    this.$store.dispatch("newlicense/setProCertificate", "");
    this.$store.dispatch("newlicense/setProDiploma", "");
    this.$store.dispatch("newlicense/setProTranscript", "");
    this.$store.dispatch("newlicense/setEduEighth", "");
    this.$store.dispatch("newlicense/setEduTenth", "");
    this.$store.dispatch("newlicense/setEduTwelveth", "");
    this.$store.dispatch("newlicense/setEduTranscript1", "");
    this.$store.dispatch("newlicense/setEduTranscript2", "");
    this.$store.dispatch("newlicense/setMasters", "");
    this.$store.dispatch("newlicense/setMastersTranscript", "");
    this.$store.dispatch("newlicense/setPhd", "");
    this.$store.dispatch("newlicense/setPhdTranscript", "");

    // resetting renewal store
    this.$store.dispatch("renewal/storeAcceptedFields", []);
    this.$store.dispatch("renewal/storeDeclinedFields", []);
    this.$store.dispatch("renewal/setLicense", {});
    this.$store.dispatch("renewal/setRenewalLetter", "");
    this.$store.dispatch("renewal/setRenewalServiceFee", "");
    this.$store.dispatch("renewal/setRenewalCpd", "");
    this.$store.dispatch("renewal/setProfessionalDoc", []);
    this.$store.dispatch("renewal/setRenewalWorkExperience", "");
    this.$store.dispatch("renewal/setRenewalHealthExamCert", "");
    this.$store.dispatch("renewal/setPreviousLicense", "");
    this.$store.dispatch("renewal/setCertificate", "");
    this.$store.dispatch("renewal/setDiploma", "");
    this.$store.dispatch("renewal/setTranscript", "");
    this.$store.dispatch("renewal/setPayroll", "");
    this.$store.dispatch("renewal/setPassport", "");
    this.$store.dispatch("renewal/setLanguage", "");
    this.$store.dispatch("renewal/setHerqa", "");
    this.$store.dispatch("renewal/setLetterfromOrg", "");
    this.$store.dispatch("renewal/setProfessionalLicense", "");
    this.$store.dispatch("renewal/setRenewedLicense", "");
    this.$store.dispatch("renewal/setCOC", "");
    this.$store.dispatch("renewal/setDegree", "");
    this.$store.dispatch("renewal/setEducationalDocument", []);
    this.$store.dispatch("renewal/setEduEighth", "");
    this.$store.dispatch("renewal/setEduTenth", "");
    this.$store.dispatch("renewal/setEduTwelveth", "");
    this.$store.dispatch("renewal/setEduTranscript1", "");
    this.$store.dispatch("renewal/setEduTranscript2", "");
    this.$store.dispatch("renewal/setSupportLetter", "");
    this.$store.dispatch("renewal/setProCertificate", "");
    this.$store.dispatch("renewal/setProDiploma", "");
    this.$store.dispatch("renewal/setProTranscript", "");
    this.$store.dispatch("renewal/setMasters", "");
    this.$store.dispatch("renewal/setMastersTranscript", "");
    this.$store.dispatch("renewal/setPhd", "");
    this.$store.dispatch("renewal/setPhdTranscript", "");

    // resetting good standing store
    this.$store.dispatch("goodstanding/storeAcceptedFields", []);
    this.$store.dispatch("goodstanding/storeDeclinedFields", []);
    this.$store.dispatch("goodstanding/setLicense", {});
    this.$store.dispatch("goodstanding/set_License_Copy", "");
    this.$store.dispatch("goodstanding/set_Service_Fee", "");
    this.$store.dispatch("goodstanding/set_Goodstanding_Letter", "");

    // resetting payroll and language
    localStorage.removeItem("educationalLevel");
    localStorage.removeItem("language");
    localStorage.removeItem("payroll");
  },
  data: () => ({
    display: 0,
  }),
  methods: {
    displaySet: function(display) {
      this.display = display;
    },
  },
};
</script>
<style>
.menu {
  width: 80%;
}
.sidenav {
  width: 20%;
}
</style>
