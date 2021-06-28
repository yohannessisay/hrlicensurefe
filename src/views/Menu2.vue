<template>
  <div>
    <Navigation />
    <div class="flex flex-row">
      <div>
        <SideNav :display="menu" @changeDisplay="displaySet" />
      </div>
      <div v-if="this.display == 1" class="w-screen">
        <Draft />
      </div>
      <div v-if="this.display == 2" class="w-screen">
        <Withdrawn />
      </div>
      <div v-if="this.display == 3" class="w-screen">
        <Submitted />
      </div>
      <div v-if="this.display == 4" class="w-screen">
        <Approved />
      </div>
      <div v-if="this.display == 5" class="w-screen">
        <Declined />
      </div>
      <div v-if="this.display == 6" class="w-screen">
        <UnderSupervision />
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
  },
  data: () => ({
    display: 1,
  }),
  methods: {
    displaySet: function(display) {
      console.log(display);
      this.display = display;
    },
  },
};
</script>
