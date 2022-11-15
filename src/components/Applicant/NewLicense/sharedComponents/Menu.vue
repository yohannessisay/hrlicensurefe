<template>
  <div class="main" id="main">
    <side-nav></side-nav>
    <div class="content" id="mainContent">
      <top-nav></top-nav>
      <div class="mt-8 ml-8  overflow-y-scroll">
      <slot></slot>
      </div>
    </div>
  </div>
</template>

<script> 
import SideNav from "./Sidebar.vue";
import TopNav from "./Header.vue";
import "../../../../styles/applicant.css";
export default {
  components: { SideNav, TopNav },
  setup() {
    return {};
  },
};
</script>
