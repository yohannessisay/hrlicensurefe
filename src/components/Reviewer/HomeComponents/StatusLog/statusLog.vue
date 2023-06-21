<template>
  <!-- Sidebar -->
  <reviewer-side-bar></reviewer-side-bar>

  <!-- Sidebar -->
  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar>
      <ol class="flex list-reset">
        <li>
          <router-link to="/admin/review">
            <span class="text-base text-primary-600">Home</span>
          </router-link>
        </li>
        <li>
          <span class="mx-2 text-gray-500">/</span>
        </li>

        <li>
          <a href="#" class="text-lg pointer-events-none text-grey-300">Status Log</a>
        </li>
      </ol>
    </reviewer-nav-bar>
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="p-2 m-4 bg-white rounded-md shadow-md">
        <div class="grid grid-cols-4 gap-8">
          <div class="mb-3 xl:w-full">
            <label for="" class="ml-4">License Type</label>
            <select
              class="form-select appearance-none block w-full px-6 ml-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              v-model="licenseType"
            >
              <option value="newLicense">New License Applications</option>
              <option value="goodstanding">Goodstanding Applications</option>
              <option value="renewal">Renewed Applications</option>
              <!-- <option value="verification">
                        Verification Applications
                      </option> -->
            </select>
          </div>
          <div>
            <h2 class="font-bold text-primary-600">License/Letter Code</h2>
            <input
              type="search"
              class="form-control relative flex-auto min-w-0 block w-full px-6 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Press enter key to search"
              v-model="licenseCode"
              @keyup.enter="searchApplication()"
            />
          </div>
        </div>
      </div>
      <div class="vld-parent">
        <loading
          :active="isLoading"
          :is-full-page="false"
          :color="'#2F639D'"
          :opacity="0.7"
        ></loading>
        <div class="bg-white rounded-md shadow-md p-2 m-4">
          <div class="p-4 mt-4">
            <h1 class="text-2xl text-center font-semibold mb-6">License History</h1>
            <div class="container">
              <div class="flex flex-col md:grid grid-cols-12 text-gray-50">
                <div
                  class="flex md:contents"
                  v-for="history in licenseHistory"
                  :key="history.id"
                >
                  <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                    <div class="h-full w-6 flex items-center justify-center">
                      <div class="h-full w-1 bg-main-500 pointer-events-none"></div>
                    </div>
                    <div
                      class="w-6 h-6 absolute top-1/2 -mt-20 rounded-full bg-main-500 shadow text-center"
                    >
                      <i class="fas fa-check-circle text-primary-600 text-3xl"></i>
                    </div>
                  </div>
                  <div
                    class="bg-main-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full"
                  >
                    <div class="grid grid-cols-2">
                      <div>
                        <h2 class="text-white text-2xl">
                          {{ history.createdAt.slice(0, 10) }}
                        </h2>
                        <h3 class="text-white font-semibold text-lg mb-2">
                          License Status
                        </h3>
                        <p class="text-white leading-tight text-justify w-full">
                          From
                          <span
                            class="text-2xl m-2 p-2 rounded-md text-primary-600 bg-white"
                          >
                            {{ history.fromStatus.name }}
                          </span>
                          To
                          <span
                            class="text-2xl m-2 p-2 rounded-md text-primary-600 bg-white"
                          >
                            {{ history.toStatus.name }}
                          </span>
                        </p>
                      </div>
                      <div>
                        <h2 class="text-xl text-white font-bold">Remark</h2>
                        <div class="border text-white rounded-md p-2">
                          {{ history.remark }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import ReviewerNavBar from "./../../SharedComponents/navBar.vue";
import ReviewerSideBar from "./SharedComponents/sideNav.vue";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
export default {
  components: {
    ReviewerNavBar,
    ReviewerSideBar,
    Loading,
  },
  setup() {
    const store = useStore();
    const toast = useToast();
    let isLoading = ref(false);
    let licenseCode = ref("");
    let licenseType = ref("");
    let apiParameters = ref({});
    let licenseHistory = ref([]);

    const searchApplication = () => {
      if (licenseType.value == "") {
        toast.error("Please select application type first", {
          timeout: 5000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true,
        });
        return;
      }
      isLoading.value = true;
      apiParameters.value = {
        code: licenseCode.value,
        type: licenseType.value,
      };
      store.dispatch("report/statusLog", apiParameters.value).then((res) => {
        licenseHistory.value = res.data && res.data.data ? res.data.data : [];
        if (licenseHistory.value && licenseHistory.value.length == 0) {
          toast.warning("No log found with " + licenseCode.value, {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
        }
        isLoading.value = false;
      });
    };
    onMounted(() => {});
    return {
      licenseCode,
      licenseType,
      searchApplication,
      licenseHistory,
      isLoading,
    };
  },
};
</script>
