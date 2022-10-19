<template>
  <!-- Sidebar -->
  <reviewer-side-bar> </reviewer-side-bar>

  <!-- Sidebar -->
  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar><ol class="list-reset flex">
          <li>
            <router-link to="/admin/review"
              ><span class="text-primary-600 text-base">Home</span></router-link
            >
          </li>
          <li><span class="text-gray-500 mx-2">/</span></li>
     
          <li>
            <a href="#" class="pointer-events-none text-lg text-grey-300"
              >Dashboard</a
            >
          </li>
        </ol></reviewer-nav-bar>
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