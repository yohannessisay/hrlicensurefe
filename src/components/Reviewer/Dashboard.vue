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
    <reviewer-nav-bar><h2>Dashboard</h2></reviewer-nav-bar>
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
 <div class="parent">
    <iframe
      src="https://hrdelk.sandboxaddis.com/s/hrl/app/dashboards#/view/9908c940-d900-11ec-adc0-8b86323e9901?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1y%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true"></iframe>

    </div>

         </div>
    <!-- Main Content -->
  </section>
  
</template>

<script>

import Title from "@/sharedComponents/TitleWithIllustration";
import { ref } from "vue";
import ReviewerNavBar from "./ReviewerNavBar.vue";
import ReviewerSideBar from "./ReviewerSideNav.vue";
export default {
  components: {
    ReviewerNavBar,
    ReviewerSideBar,
    Title,
  },
  setup() {
    let display = ref("dashboard");

    const displaySet = (menu) => {
      display.value = menu;
    };

    return {
      displaySet,
      display,
    };
  },
};
</script>

<style>
.parent {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.parent iframe {
  border: none;
  flex-grow: 1;
}
</style>