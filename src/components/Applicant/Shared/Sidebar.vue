<template>
  <div class="side-navbar" id="mainSideBar">
    <div
      class="flex justify-center p-4 cursor-pointer fixed z-10 bg-main-400"
      id="sidebarLogo"
      style="border-bottom: 2px solid white; margin-top: -5px; width: 305px"
    >
      <img
        src="../../../assets/image.png"
        style="height: 40px; width: 40px"
        alt="logo"
        class="cursor-pointer"
      />
      <span class="text-white font-bold mt-2 ml-2 cursor-pointer" id="header-text"
        >EHPL</span
      >
    </div>
    <!-- New License routes -->
    <NewLicense v-if="finalUrl && finalUrl === 'newLicense'"></NewLicense>
    <!-- End of New License routes -->
    <!-- Renewal Routes -->
    <Renewal v-if="finalUrl && finalUrl === 'renewal'"></Renewal>
    <!--End of Renewal Routes -->

    <!-- Goodstanding routes -->
    <Goodstanding v-if="finalUrl && finalUrl === 'goodstanding'"></Goodstanding>
    <!--End of Goodstanding routes -->

    <!--Lost License  routes -->
    <LostLicense v-if="finalUrl && finalUrl === 'lostLicense'"></LostLicense>
    <!--End of Lost License  routes -->
  </div>
</template>

<script>
import LostLicense from "./sidebarLinks/lostLicense.vue";
import NewLicense from "./sidebarLinks/newLicense.vue";
import Renewal from "./sidebarLinks/renewal.vue";
import Goodstanding from "./sidebarLinks/goodstanding.vue";
export default {
  props: ["finalUrl"],
  components: { LostLicense, NewLicense, Renewal, Goodstanding },
  setup() {
    return {};
  },
};
</script>
