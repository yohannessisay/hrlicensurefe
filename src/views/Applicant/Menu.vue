<template>
  <div class="main">
    <side-nav></side-nav>
    <div class="content">
      <top-nav></top-nav>
      <div class="mt-8 ml-8 mr-8">
        <div class="top-navbar flex justify-center h-12">
          <div class="profile p-4">
            <h2 class="text-white">Welcome Back MR/MRS {{  }}</h2>
          </div>
        </div>
        <div class="container my-12 mx-auto px-4 md:px-12">
          <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <!-- Column -->
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
              <!-- Article -->
              <article class="overflow-hidden rounded-lg shadow-lg">
                <router-link to="newLicense">
                  <div
                    class="
                      relative
                      overflow-hidden
                      rounded-lg
                      shadow-lg
                      cursor-pointer
                      w-full
                    "
                  >
                    <img
                      class="
                        bg-opacity-10
                        backdrop-filter backdrop-blur-sm
                        w-full
                      "
                      src="../../assets/applicant/newLicense.jpg"
                      alt="Flower and sky"
                    />

                    <div class="absolute top-0 left-0 px-6 py-4">
                      <div
                        class="
                          flex
                          justify-center
                          backdrop-filter backdrop-blur-md
                          bg-opacity-75
                          rounded-lg
                          text-center
                          p-4
                          mt-2
                        "
                        style="background: #046572ea"
                      >
                        <span class="text-white text-lg font-semibold">
                          New License
                        </span>
                      </div>
                    </div>
                  </div>
                </router-link>
              </article>
              <!-- END Article -->
            </div>
            <!-- END Column -->

            <!-- Column -->
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
              <!-- Article -->
              <article class="overflow-hidden rounded-lg shadow-lg">
                <router-link to="renewal">
                  <div
                    class="
                      relative
                      overflow-hidden
                      rounded-lg
                      shadow-lg
                      cursor-pointer
                    "
                  >
                    <img
                      class="
                        w-full
                        bg-opacity-25
                        backdrop-filter backdrop-blur-lg
                      "
                      src="../../assets/applicant/renewal.jpg"
                      alt="Flower and sky"
                    />

                    <div class="absolute top-0 left-0 px-6 py-4">
                      <div
                        class="
                          flex
                          justify-center
                          backdrop-filter backdrop-blur-md
                          bg-opacity-75
                          rounded-lg
                          text-center
                          p-4
                          mt-2
                        "
                        style="background: #046572ea"
                      >
                        <span class="text-white text-lg font-semibold">
                          Renewal
                        </span>
                      </div>
                    </div>
                  </div>
                </router-link>
              </article>
              <!-- END Article -->
            </div>
            <!-- END Column -->
       <!-- END Column -->

            <!-- Column -->
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
              <!-- Article -->
              <article class="overflow-hidden rounded-lg shadow-lg">
                <router-link to="renewal">
                  <div
                    class="
                      relative
                      overflow-hidden
                      rounded-lg
                      shadow-lg
                      cursor-pointer
                    "
                  >
                    <img
                      class="
                        w-full
                        bg-opacity-25
                        backdrop-filter backdrop-blur-lg
                        h-full
                      "
                      src="../../assets/applicant/goodStanding.jpg"
                      alt="Flower and sky"
                    />

                    <div class="absolute top-0 left-0 px-6 py-4">
                      <div
                        class="
                          flex
                          justify-center
                          backdrop-filter backdrop-blur-md
                          bg-opacity-75
                          rounded-lg
                          text-center
                          p-4
                          mt-2
                        "
                        style="background: #046572ea"
                      >
                        <span class="text-white text-lg font-semibold">
                          GoodStanding
                        </span>
                      </div>
                    </div>
                  </div>
                </router-link>
              </article>
              <!-- END Article -->
            </div>
            <!-- END Column -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SideNav from "./Sidebar.vue";
import TopNav from "./Header.vue";
import "../../styles/applicant.css";
export default {
  components: { SideNav, TopNav },
  setup() {
    return {};
  },
};
</script>
