<template>
  <div class="side-navbar" id="mainSideBar">
    <div
      :class="
        isDarkMode
          ? 'flex justify-center p-4 cursor-pointer fixed z-10 bg-secondaryDark'
          : 'flex justify-center p-4 cursor-pointer fixed z-10 bg-main-400'
      "
      id="sidebarLogo"
      style="border-bottom: 2px solid white; margin-top: -5px; width: 305px"
    >
      <img
        src="../../../assets/image.png"
        style="height: 40px; width: 40px"
        alt="logo"
        class="cursor-pointer"
      />
      <span
        class="text-white font-bold mt-2 ml-2 cursor-pointer"
        id="header-text"
        >EHPL</span
      >
    </div>
    <!-- New License routes -->
    <SideBarTemplate
      v-if="finalUrl && finalUrl === 'newLicense'"
      :isDarkMode="isDarkMode"
      :links="newLicenseSideBarItems"
      :page="'New License'"
    ></SideBarTemplate>
    <!-- End of New License routes -->
    <!-- Renewal Routes -->
    <SideBarTemplate
      v-if="finalUrl && finalUrl === 'renewal'"
      :isDarkMode="isDarkMode"
      :links="renewalSideBarItems"
      :page="'Renewal'"
    ></SideBarTemplate>
    <!--End of Renewal Routes -->

    <!-- Goodstanding routes -->
    <SideBarTemplate
      v-if="finalUrl && finalUrl === 'goodstanding'"
      :isDarkMode="isDarkMode"
      :links="gSSideBarItems"
      :page="'Good Standing'"
    ></SideBarTemplate>
    <!--End of Goodstanding routes -->

    <!--Lost License  routes -->
    <SideBarTemplate
      v-if="finalUrl && finalUrl === 'lostLicense'"
      :isDarkMode="isDarkMode"
      :links="LLicenseSideBarItems"
      :page="'Lost License'"
    ></SideBarTemplate>
    <!--End of Lost License  routes -->
  </div>
</template>

<script> 
import SideBarTemplate from "./SideBar/sideBarTemplate.vue";
import {
  newLicenseSideBarItems,
  renewalSideBarItems,
  gSSideBarItems,
  LLicenseSideBarItems,
} from "./SideBar/sideBarLinks.js";
export default {
  props: ["finalUrl", "isDarkMode"],
  components: { SideBarTemplate },
  setup() {
    return {
      newLicenseSideBarItems,
      renewalSideBarItems,
      gSSideBarItems,
      LLicenseSideBarItems,
    };
  },
};
</script>
