<template>
  <!-- <div>
    <Navigation />
    <div class="bg-lightBlueB-200 h-screen">
      <div class="flex pl-24 pt-8">
        <div class="mt-5">
          <h2 class="text-lightBlueB-400">New Requests</h2>
        </div>
      </div>
      <div class="flex justify-center mt-8 rounded ">
        <transition name="slide-fade-to-left">
          <div
            class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
          >
            <div class="flex justify-center items-center w-64 h-40">
              <div class="p-1">
                <div class="flex content-center justify-center">
                  <router-link to="/newlicense">
                    <RenderIllustration illustration="SimpleCertificate" />
                  </router-link>
                </div>
                <h4 class="text-lightBlueB-500 mt-tiny">New License</h4>
              </div>
            </div>
          </div>
        </transition>
        <transition name="slide-fade-to-left">
          <div
            class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
          >
            <div class="flex justify-center items-center w-64 h-40">
              <div class="p-1">
                <div class="my-auto flex justify-center">
                  <router-link to="/renewal">
                    <RenderIllustration illustration="Renewal" />
                  </router-link>
                </div>
                <h4 class="text-lightBlueB-500 mt-tiny">Renewal</h4>
              </div>
            </div>
          </div>
        </transition>
        <transition name="slide-fade-to-left">
          <div
            class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
          >
            <div class="flex justify-center items-center w-64 h-40">
              <div class="p-1">
                <div class="flex">
                  <router-link to="/verification">
                    <RenderIllustration illustration="Verification" />
                  </router-link>
                </div>
                <h4
                  class="text-lightBlueB-500 justify-center items-center ml-2 mt-tiny"
                >
                  Verification
                </h4>
              </div>
            </div>
          </div>
        </transition>
        <transition name="slide-fade-to-left">
          <div
            class="container mr-12 box-shadow-pop rounded-lg bg-lightGrey-100 "
          >
            <div class="flex justify-center items-center w-64 h-40">
              <div class="p-1">
                <div class="my-auto flex justify-center">
                  <router-link to="/goodstanding">
                    <RenderIllustration illustration="GoodStanding" />
                  </router-link>
                </div>
                <h4 class="text-lightBlueB-500 mt-tiny">Good Standing</h4>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div> -->
  
  <div>
    <reviewer-nav-bar :tab="display" @changeSelectedSideBar="displaySet" :getSelectedSideNav="getSelectedSideNav"/>
    <!-- <reviewer-nav-bar :display="menu" @changeDisplay="displaySet" /> -->
    <div style="width:100%" class="flex flex-row">
      <div class="sidenav">
        <reviewer-side-nav :display="menu" @changeDisplay="displaySet" />
      </div>
      <div class="menu">
        <div v-if="this.display == 'newLicenseUnassigned'">
          <new-license-unassigned />
        </div>
        <div v-if="this.display == 'newLicenseAssigned'">
          <new-license-assigned />
        </div>
        <div v-if="this.display == 'newLicenseAssignedToOthers'">
          <new-license-assigned-to-others />
        </div>
        <div v-if="this.display == 'newLicenseUnfinished'">
          <new-license-unfinished />
        </div>
        <div v-if="this.display == 'newLicenseOthersUnfinished'">
          <new-license-others-unfinished />
        </div>
        <div v-if="this.display == 'newLicenseUnconfirmed'">
          <new-license-un-confirmed />
        </div>
        <div v-if="this.display == 'allNewLicenseUnconfirmed'">
          <new-license-all-un-confirmed />
        </div>
        <div v-if="this.display == 'newLicenseOnReview'">
          <new-license-on-review />
        </div>
        <div v-if="this.display == 'othersNewLicenseOnReview'">
          <new-license-others-on-review />
        </div>
        <div v-if="this.display == 'newLicenseReEvaluate'">
          <new-license-re-evaluate />
        </div>
         <div v-if="this.display == 'othersNewLicenseReEvaluate'">
          <new-license-others-re-evaluate />
        </div>
        <div v-if="this.display == 'newLicenseDeclined'">
          <new-license-declined />
        </div>
        <div v-if="this.display == 'allNewLicenseDeclined'">
          <new-license-all-declined />
        </div>
        <div v-if="this.display == 'newLicenseUnderSuperVision'">
          <new-license-under-super-vision />
        </div>
         <div v-if="this.display == 'newLicenseOthersUnderSuperVision'">
          <new-license-others-under-super-vision />
        </div>
        <div v-if="this.display == 'newLicenseConfirmed'">
          <new-license-confirmed />
        </div>
        <div v-if="this.display == 'othersNewLicenseConfirmed'">
          <new-license-others-confirmed />
        </div>

        <!-- renewal -->
        <div v-if="this.display == 'RenewalUnassigned'">
          <renewal-unassigned />
        </div>
        <div v-if="this.display == 'renewalAssigned'">
          <renewal-assigned />
        </div>
        <div v-if="this.display == 'renewalAssignedToOthers'">
          <renewal-assigned-to-others />
        </div>
        <div v-if="this.display == 'renewalUnfinished'">
          <renewal-unfinished />
        </div>
        <div v-if="this.display == 'renewalOthersUnfinished'">
          <renewal-others-unfinished />
        </div>
        <div v-if="this.display == 'renewalUnconfirmed'">
          <renewal-unconfirmed />
        </div>
        <div v-if="this.display == 'allRenewalUnconfirmed'">
          <renewal-all-unconfirmed />
        </div>
        <div v-if="this.display == 'renewalOnReview'">
          <renewal-on-review />
        </div>
        <div v-if="this.display == 'othersRenewalOnReview'">
          <renewal-others-on-review />
        </div>
        <div v-if="this.display == 'renewalReEvaluate'">
          <renewal-re-evaluate />
        </div>
         <div v-if="this.display == 'othersRenewalReEvaluate'">
          <renewal-others-re-evaluate />
        </div>
        <div v-if="this.display == 'renewalDeclined'">
          <renewal-declined />
        </div>
        <div v-if="this.display == 'allRenewalDeclined'">
          <renewal-all-declined />
        </div>
        <div v-if="this.display == 'renewalUnderSuperVision'">
          <renewal-under-super-vision />
        </div>
         <div v-if="this.display == 'renewalOthersUnderSuperVision'">
          <renewal-others-under-super-vision />
        </div>
        <div v-if="this.display == 'renewalConfirmed'">
          <renewal-confirmed />
        </div>
        <div v-if="this.display == 'othersRenewalConfirmed'">
          <renewal-others-confirmed />
        </div>

        <!-- start verification -->
        <div v-if="this.display == 'verificationUnassigned'">
          <verification-unassigned />
        </div>
        <div v-if="this.display == 'verificationAssigned'">
          <verification-assigned />
        </div>
        <div v-if="this.display == 'verificationAssignedToOthers'">
          <verification-assigned-to-others />
        </div>
        <div v-if="this.display == 'verificationUnfinished'">
          <verification-unfinished />
        </div>
        <div v-if="this.display == 'verificationOthersUnfinished'">
          <verification-others-unfinished />
        </div>
        <div v-if="this.display == 'verificationUnconfirmed'">
          <verification-unconfirmed />
        </div>
        <div v-if="this.display == 'allVerificationUnconfirmed'">
          <verification-all-unconfirmed />
        </div>
        <div v-if="this.display == 'verificationDeclined'">
          <verification-declined />
        </div>
        <div v-if="this.display == 'allVerificationDeclined'">
          <verification-all-declined />
        </div>
        <!-- end verification -->

        <!-- start goodstanding -->
        <div v-if="this.display == 'goodStandingUnassigned'">
          <good-standing-unassigned />
        </div>
        <div v-if="this.display == 'goodStandingAssigned'">
          <good-standing-assigned />
        </div>
        <div v-if="this.display == 'goodStandingAssignedToOthers'">
          <good-standing-assigned-to-others />
        </div>
        <div v-if="this.display == 'goodStandingUnfinished'">
          <good-standing-unfinished />
        </div>
        <div v-if="this.display == 'goodStandingOthersUnfinished'">
          <good-standing-others-unfinished />
        </div>
        <div v-if="this.display == 'goodStandingUnconfirmed'">
          <good-standing-unconfirmed />
        </div>
        <div v-if="this.display == 'allGoodStandingUnconfirmed'">
          <good-standing-all-unconfirmed />
        </div>
        <div v-if="this.display == 'goodStandingDeclined'">
          <good-standing-declined />
        </div>
        <div v-if="this.display == 'allGoodStandingDeclined'">
          <good-standing-all-declined />
        </div>
        <!-- end goodstanding -->

      </div>
    </div>
  </div>
</template>

<script>

import { ref, onMounted } from "vue";
import { useStore } from "vuex";

import newLicenseUnassigned from "./ApplicationTypes/NewLicense/newLicenseUnassigned.vue"
import NewLicenseAssigned from "./ApplicationTypes/NewLicense/NewLicenseAssigned.vue"
import NewLicenseAssignedToOthers from "./ApplicationTypes/NewLicense/NewLicenseAssignedToOthers.vue"
import NewLicenseUnfinished from "./ApplicationTypes/NewLicense/NewLicenseUnfinished.vue"
import NewLicenseOthersUnfinished from "./ApplicationTypes/NewLicense/NewLicenseOthersUnfinished.vue"
import NewLicenseUnConfirmed from "./ApplicationTypes/NewLicense/NewLicenseUnConfirmed.vue"
import NewLicenseAllUnConfirmed from "./ApplicationTypes/NewLicense/NewLicenseAllUnConfirmed.vue"
import NewLicenseOnReview from "./ApplicationTypes/NewLicense/NewLicenseOnReview.vue"
import NewLicenseOthersOnReview from "./ApplicationTypes/NewLicense/NewLicenseOthersOnReview.vue"
import NewLicenseReEvaluate from "./ApplicationTypes/NewLicense/NewLicenseReEvaluate.vue"
import NewLicenseOthersReEvaluate from "./ApplicationTypes/NewLicense/NewLicenseOthersReEvaluate.vue"
import NewLicenseDeclined from "./ApplicationTypes/NewLicense/NewLicenseDeclined.vue";
import NewLicenseAllDeclined from "./ApplicationTypes/NewLicense/NewLicenseAllDeclined.vue";
import NewLicenseUnderSuperVision from "./ApplicationTypes/NewLicense/NewLicenseUnderSuperVision.vue";
import NewLicenseOthersUnderSuperVision from "./ApplicationTypes/NewLicense/NewLicenseOthersUnderSuperVision.vue";
import NewLicenseConfirmed from "./ApplicationTypes/NewLicense/NewLicenseConfirmed.vue";
import NewLicenseOthersConfirmed from "./ApplicationTypes/NewLicense/NewLicenseOthersConfirmed.vue";

// import renewal components
import RenewalUnassigned from "./ApplicationTypes/Renewal/RenewalUnassigned.vue"
import RenewalAssigned from "./ApplicationTypes/Renewal/RenewalAssigned.vue"
import RenewalAssignedToOthers from "./ApplicationTypes/Renewal/RenewalAssignedToOthers.vue"
import RenewalUnfinished from "./ApplicationTypes/Renewal/RenewalUnfinished.vue"
import RenewalOthersUnfinished from "./ApplicationTypes/Renewal/RenewalOthersUnfinished.vue"
import RenewalUnconfirmed from "./ApplicationTypes/Renewal/RenewalUnconfirmed.vue"
import RenewalAllUnconfirmed from "./ApplicationTypes/Renewal/RenewalAllUnconfirmed.vue"
import RenewalOnReview from "./ApplicationTypes/Renewal/RenewalOnReview.vue"
import RenewalOthersOnReview from "./ApplicationTypes/Renewal/RenewalOthersOnReview.vue"
import RenewalReEvaluate from "./ApplicationTypes/Renewal/RenewalReEvaluate.vue"
import RenewalOthersReEvaluate from "./ApplicationTypes/Renewal/RenewalOthersReEvaluate.vue"
import RenewalDeclined from "./ApplicationTypes/Renewal/RenewalDeclined.vue";
import RenewalAllDeclined from "./ApplicationTypes/Renewal/RenewalAllDeclined.vue";
import RenewalUnderSuperVision from "./ApplicationTypes/Renewal/RenewalUnderSuperVision.vue";
import RenewalOthersUnderSuperVision from "./ApplicationTypes/Renewal/RenewalOthersUnderSuperVision.vue";
import RenewalConfirmed from "./ApplicationTypes/Renewal/RenewalConfirmed.vue";
import RenewalOthersConfirmed from "./ApplicationTypes/Renewal/RenewalOthersConfirmed.vue";

// import verification components
import VerificationUnassigned from "./ApplicationTypes/Verification/VerificationUnassigned.vue"
import VerificationAssigned from "./ApplicationTypes/Verification/VerificationAssigned.vue"
import VerificationAssignedToOthers from "./ApplicationTypes/Verification/VerificationAssignedToOthers.vue"
import VerificationUnfinished from "./ApplicationTypes/Verification/VerificationUnfinished.vue"
import VerificationOthersUnfinished from "./ApplicationTypes/Verification/VerificationOthersUnfinished.vue"
import VerificationUnconfirmed from "./ApplicationTypes/Verification/VerificationUnconfirmed.vue"
import VerificationAllUnconfirmed from "./ApplicationTypes/Verification/VerificationUnconfirmed.vue"
import VerificationDeclined from "./ApplicationTypes/Verification/VerificationDeclined.vue"
import VerificationAllDeclined from "./ApplicationTypes/Verification/VerificationAllDeclined.vue"

// import goodstanding components
import GoodStandingUnassigned from "./ApplicationTypes/GoodStanding/GoodStandingUnassigned.vue"
import GoodStandingAssigned from "./ApplicationTypes/GoodStanding/GoodStandingAssigned.vue"
import GoodStandingAssignedToOthers from "./ApplicationTypes/GoodStanding/GoodStandingAssignedToOthers.vue"
import GoodStandingUnfinished from "./ApplicationTypes/GoodStanding/GoodStandingUnfinished.vue"
import GoodStandingOthersUnfinished from "./ApplicationTypes/GoodStanding/GoodStandingOthersUnfinished.vue"
import GoodStandingUnconfirmed from "./ApplicationTypes/GoodStanding/GoodStandingUnconfirmed.vue"
import GoodStandingAllUnconfirmed from "./ApplicationTypes/GoodStanding/GoodStandingAllUnconfirmed.vue"
import GoodStandingDeclined from "./ApplicationTypes/GoodStanding/GoodStandingDeclined.vue"
import GoodStandingAllDeclined from "./ApplicationTypes/GoodStanding/GoodStandingAllDeclined.vue"


import ReviewerNavBar from './ReviewerNavBar.vue';
import ReviewerSideNav from "./ReviewerSideNav.vue";
import store from "../../store"

export default {
  components: {
    newLicenseUnassigned,
    ReviewerNavBar,
    ReviewerSideNav,
    NewLicenseAssigned,
    NewLicenseAssignedToOthers,
    NewLicenseUnfinished,
    NewLicenseOthersUnfinished,
    NewLicenseUnConfirmed,
    NewLicenseAllUnConfirmed,
    NewLicenseOnReview,
    NewLicenseOthersOnReview,
    NewLicenseReEvaluate,
    NewLicenseOthersReEvaluate,
    NewLicenseDeclined,
    NewLicenseAllDeclined,
    NewLicenseUnderSuperVision,
    NewLicenseOthersUnderSuperVision,
    NewLicenseConfirmed,
    NewLicenseOthersConfirmed,

    RenewalUnassigned,
    RenewalAssigned,
    RenewalAssignedToOthers,
    RenewalUnfinished,
    RenewalOthersUnfinished,
    RenewalUnconfirmed,
    RenewalAllUnconfirmed,
    RenewalOnReview,
    RenewalOthersOnReview,
    RenewalReEvaluate,
    RenewalOthersReEvaluate,
    RenewalDeclined,
    RenewalAllDeclined,
    RenewalUnderSuperVision,
    RenewalOthersUnderSuperVision,
    RenewalConfirmed,
    RenewalOthersConfirmed,


    VerificationUnassigned,
    VerificationAssigned,
    VerificationAssignedToOthers,
    VerificationUnfinished,
    VerificationOthersUnfinished,
    VerificationUnconfirmed,
    VerificationAllUnconfirmed,
    VerificationDeclined,
    VerificationAllDeclined,

    GoodStandingUnassigned,
    GoodStandingAssigned,
    GoodStandingAssignedToOthers,
    GoodStandingUnfinished,
    GoodStandingOthersUnfinished,
    GoodStandingUnconfirmed,
    GoodStandingAllUnconfirmed,
    GoodStandingDeclined,
    GoodStandingAllDeclined,

  },
  computed: {
    getSelectedSideNav() {
      return store.getters["reviewerNewLicense/getNewLicenseUnassignedSearched"];
    }
  },
  // data: () => ({
  //   display: 0,
  // }),
  // methods: {
  //   displaySet: function(display) {
  //     this.display = display;
  //   },
  // },
  setup() {

    const store = useStore();
    let display = ref("newLicenseUnassigned");
    let selectedValue = ref("");

    const displaySet = (menu) => {
      display.value = menu;
    }

    onMounted(() => {
      console.log("store value is ", store.getters["reviewerNewLicense/getNewLicenseUnassignedSearched"])
    })
    
    return {
      displaySet,
      display,
      selectedValue,
    }
  }
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