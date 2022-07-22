<template>
  <!-- Sidebar -->
  <reviewer-side-bar>
        <ul class="nav-links">
      <router-link to="/admin/newLicense/">
        <li class="mb-2">
          <a href="#NewLicense" >
            <i class="bx bx-certification"></i>
            <span class="links_name">New License</span>
          </a>
        </li>
      </router-link>
      <router-link to="/admin/renewal/">
        <li class="mb-2">
          <a href="#Renewal">
            <i class="bx bx-refresh"></i>
            <span class="links_name">Renewal</span>
          </a>
        </li>
      </router-link>
      <router-link to="/admin/verification/">
        <li class="mb-2">
          <a href="#Verification">
            <i class="bx bx-message-check"></i>
            <span class="links_name">Verification</span>
          </a>
        </li>
      </router-link>
      <router-link to="/admin/goodStanding/">
        <li class="mb-2">
          <a href="#GoodStanding">
            <i class="bx bx-mail-send"></i>
            <span class="links_name">Good Standing</span>
          </a>
        </li>
      </router-link>
            <router-link to="/admin/cpdCertified">
        <li class="mb-2">
          <a href="#CpdCertified">
            <i class="bx bx-badge-check"></i>
            <span class="links_name">Cpd Certified</span>
          </a>
        </li>
      </router-link>

        <router-link to="/admin/dashboard">
        <li class="mb-2">
          <a href="#Dashboard">
            <i class="bx bx-badge-check"></i>
            <span class="links_name">Dashboard</span>
          </a>
        </li>
      </router-link>
    </ul>
  </reviewer-side-bar>

  <!-- Sidebar -->
  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar><h2>Home</h2></reviewer-nav-bar>
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <reviewer-main-content></reviewer-main-content>
    </div>
    <!-- Main Content -->
  </section>
</template>

<script>
import { ref } from "vue";
import ReviewerNavBar from "./ReviewerNavBar.vue";
import ReviewerSideBar from "./ReviewerSideNav.vue";
import ReviewerMainContent from "./ReviewerMainContent.vue";
import { useStore } from "vuex";
export default {
  components: {
    ReviewerNavBar,
    ReviewerSideBar,
    ReviewerMainContent,

  
  },
  setup() {
    const store = useStore();
    store.dispatch("ReviewerSideNav/assignSelectedSideBar", "mainPage");
    let currentMenu = store.getters["ReviewerSideNav/getSelectedSideBar"];

    function updateMenu(menu) {
      currentMenu = menu;
      console.log(currentMenu);
    }

    return {
      currentMenu,
      updateMenu,
    };
  },
};
</script>

