<template>
  <div class="main ">
    <side-nav></side-nav>
    <div class="content h-screen overflow-y-scroll">
      <top-nav></top-nav>
      <div class="mt-8 ml-8">
      <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
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
