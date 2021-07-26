<template>
  <div>
    <Navigation :display="menu" @changeDisplay="displaySet" />
    <div style="width:100%" class="flex flex-row">
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
