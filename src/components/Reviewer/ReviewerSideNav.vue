<template>
  <div
    class=" overflow-y-auto overflow-x-hidden shadow-xl  fixed lg:sticky h-screen lg:h-auto z-40 top-0 bg-gray-900 "
    style="max-width: 380px; background: #285180;"
  >
    <div class="px-8 h-screen">
      <ul class="py-1 ">
        <new-license-side-nav :dropdownValue="dropdownValue" @applicationTypeSelected="applicationTypeHandler" @selectNewLicenseMenu="selectMenu"/>
        <renewal-side-nav :dropdownValue="dropdownValue" @applicationTypeSelected="applicationTypeHandler" @selectRenewalMenu="selectMenu" />
        <verification-side-nav :dropdownValue="dropdownValue" @applicationTypeSelected="applicationTypeHandler" @selectVerificationMenu="selectMenu" />
        <good-standing-side-nav :dropdownValue="dropdownValue" @applicationTypeSelected="applicationTypeHandler" @selectGoodStandingMenu="selectMenu" />
        <!-- start verification Side Nav here -->
        <!-- end verification Side Nav here -->

        <!-- start good standing Side Nav here -->
        <!-- end good standing Side Nav here -->
      </ul>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import NewLicenseSideNav from './ReviewerSideNavComponents/NewLicenseSideNav.vue';
import RenewalSideNav from './ReviewerSideNavComponents/RenewalSideNav.vue';
import VerificationSideNav from './ReviewerSideNavComponents/VerificationSideNav.vue';
import GoodStandingSideNav from './ReviewerSideNavComponents/GoodStandingSideNav.vue';
import { dropdown, applicationTypeDD } from "./Configurations/ApplicationDetailDropDown";
export default {
  props: ["display"],
  // methods: {
  //   selectMenu(menu) {
  //     this.$emit("changeDisplay", menu);
  //   },
  // },
 components: {
     NewLicenseSideNav,
     RenewalSideNav,
     VerificationSideNav,
     GoodStandingSideNav,
 },
  setup(props, {emit}) {
    
    let dropdownValue = ref({
      ...dropdown
    });

    const applicationTypeHandler = (value) => {
      console.log("in side nav", value)
      applicationTypeDD(value, dropdownValue.value);
    }



    const renewalAssignedDD = () => {
      dropdownValue.value.renewalAssigned = !dropdownValue.value.renewalAssigned;
    }

    const renewalDD = () => {
      dropdownValue.value.renewal = !dropdownValue.value.renewal;
      dropdownValue.value.newLicense = false;
      dropdownValue.value.verification = false;
      dropdownValue.value.goodStanding = false;
    };

    const selectMenu = (menu) => {
        emit("changeDisplay", menu);
    }

    const verificationDD = () => {
      console.log("verification", dropdownValue.verification)
      dropdownValue.verification = !dropdownValue.verification;
      dropdownValue.renewal = false;
      dropdownValue.newLicense = false;
      dropdownValue.goodStanding = false;
      console.log("verification after i s", dropdownValue.verification)
    };
    const newlicenseDD = () => {
      console.log("what")
    }
    const goodStandingDD = () => {
      console.log("what")
    }

    

    return {
      dropdownValue,
      newlicenseDD,
      renewalDD,
      renewalAssignedDD,
      verificationDD,
      goodStandingDD,
      selectMenu,
      applicationTypeHandler,

    };
  },
};
</script>
<style>
li {
  cursor: pointer;
}
</style>
