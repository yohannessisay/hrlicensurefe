<template>
  <div id="wrapper">
    <!-- Sidebar -->
    <SideNav></SideNav>

    <div id="page-content-wrapper">
      <span href="#menu-toggle" id="menu-toggle" > &#9776; </span>

      <h1 class="h1 mt-12">Header 1</h1>

      <p>Body</p>
      <p>
        Make sure to keep all page content within the
        <code>#page-content-wrapper</code>.
      </p>
    </div>
  </div>
  >
</template>

<script>
import { ref, onMounted } from "vue";
import SideNav from "./Sidebar.vue";
export default {
  components: { SideNav },
  setup() {
    onMounted(() => {
      document
        .getElementById("menu-toggle")
        .addEventListener("click", toggleSidebar, true);
      console.log(document.getElementById("wrapper").className);
      function toggleSidebar() {
        if (document.getElementById("wrapper").className != "toggled") {
          document.getElementById("wrapper").className = "toggled";
        } else {
          document.getElementById("wrapper").className = "";
        }
      }
    });

    return {};
  },
};
</script>
