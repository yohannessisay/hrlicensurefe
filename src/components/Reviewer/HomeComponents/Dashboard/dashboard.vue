<template>
  <!-- Sidebar -->
  <reviewer-side-bar> </reviewer-side-bar>

  <!-- Sidebar -->
  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar><h2>Dashboard</h2></reviewer-nav-bar>
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="parent">
        <iframe
          src="https://hrdelk.sandboxaddis.com/s/hrl/app/dashboards#/view/9908c940-d900-11ec-adc0-8b86323e9901?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1y%2Cto%3Anow))&show-time-filter=true&hide-filter-bar=true"
        ></iframe>
      </div>
    </div>
    <!-- Main Content -->
  </section>
</template>

<script>
import { ref } from "vue";
import ReviewerNavBar from "./SharedComponents/navBar.vue";
import ReviewerSideBar from "./SharedComponents/sideNav.vue";
export default {
  components: {
    ReviewerNavBar,
    ReviewerSideBar,
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