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
          <a href="#" class="text-lg pointer-events-none text-grey-300"
            >Status Log</a
          >
        </li>
      </ol>
    </reviewer-nav-bar>
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="p-2 m-4 bg-white rounded-md">
        <div class="grid grid-cols-4 gap-8">
          <div class="mb-3 xl:w-full">
            <label for="" class="ml-4">License Type</label>
            <select
              class="block w-full px-6 py-2 ml-4 text-base font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded appearance-none form-select bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
            <h2 class="font-bold text-primary-600">
              {{
                licenseType && licenseType == "goodstanding"
                  ? "Letter Code"
                  : "License Code"
              }}
            </h2>
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
        <div class="p-2 m-4 bg-white rounded-md">
          <div class="grid grid-cols-2 gap-2">
            <div class="shadow-md p-2">
              <h2 class="text-xl border-b">Applicant Info</h2>
              <div class="grid grid-cols-2 mt-2 gap-2">
                <h2 class="text-lg">First Name</h2>
                <h2 class="text-lg text-primary-600">
                  {{ userInfo.applicant ? userInfo.applicant.name : "" }}
                </h2>
                <h2 class="text-lg">Father Name</h2>
                <h2 class="text-lg text-primary-600">
                  {{ userInfo.applicant ? userInfo.applicant.fatherName : "" }}
                </h2>
                <h2 class="text-lg">Grandfather Name</h2>
                <h2 class="text-lg text-primary-600">
                  {{
                    userInfo.applicant ? userInfo.applicant.grandFatherName : ""
                  }}
                </h2>
                <h2 class="text-lg">Gender</h2>
                <h2 class="text-lg text-primary-600">
                  {{ userInfo.applicant ? userInfo.applicant.gender : "" }}
                </h2>
                <h2 class="text-lg">Date Of Birth</h2>
                <h2 class="text-lg text-primary-600">
                  {{
                    userInfo.applicant && userInfo.applicant.dateOfBirth
                      ? userInfo.applicant.dateOfBirth.slice(0, 10)
                      : ""
                  }}
                </h2>
              </div>
            </div>
            <div class="shadow-md p-2">
              <h2 class="text-xl">Reviewer Info</h2>

              <div class="grid grid-cols-2 mt-2 gap-2">
                <h2 class="text-lg">Name</h2>
                <h2 class="text-lg text-primary-600">
                  {{ userInfo.reviewer ? userInfo.reviewer.name : "" }}
                </h2>
                <h2 class="text-lg">Expert Level</h2>
                <h2 class="text-lg text-primary-600">
                  {{
                    userInfo.reviewer ? userInfo.reviewer.expertLevel.name : ""
                  }}
                </h2>
                <h2 class="text-lg">Gender</h2>
                <h2 class="text-lg text-primary-600">
                  {{ userInfo.reviewer ? userInfo.reviewer.gender : "" }}
                </h2>
                <h2 class="text-lg">Region</h2>
                <h2 class="text-lg text-primary-600">
                  {{
                    userInfo.reviewer && userInfo.reviewer.region
                      ? userInfo.reviewer.region.name
                      : "Federal"
                  }}
                </h2>
                   <h2 class="text-lg">Email</h2>
                <h2 class="text-lg text-primary-600">
                  {{ userInfo.reviewer ? userInfo.reviewer.email : "" }}
                </h2>
              </div>
            </div>
          </div>
          <div class="p-4 mt-4">
            <h1 class="mb-6 text-2xl font-semibold text-center">
              {{
                licenseType && licenseType == "goodstanding"
                  ? "Letter History"
                  : "License History"
              }}
            </h1>
            <div class="container">
              <div class="flex flex-col grid-cols-12 md:grid text-gray-50">
                <div
                  class="flex md:contents"
                  v-for="history in licenseHistory"
                  :key="history.id"
                >
                  <div class="relative col-start-2 col-end-4 mr-10 md:mx-auto">
                    <div class="flex items-center justify-center w-6 h-full">
                      <div
                        class="w-1 h-full pointer-events-none bg-primary-300"
                      ></div>
                    </div>
                    <div
                      class="absolute w-6 h-6 -mt-20 text-center rounded-full shadow top-1/2 "
                    >
                      <i
                        class="text-3xl fas fa-check-circle text-primary-600"
                      ></i>
                    </div>
                  </div>
                  <div
                    class="w-full col-start-4 col-end-12 p-4 my-4 mr-auto bg-grey-200 rounded-xl shadow-md"
                  >
                    <div class="grid grid-cols-2">
                      <div>
                        <h2 class="text-2xl mb-4 text-white">
                         Applied Date - {{ history.createdAt.slice(0, 10) }}
                        </h2>
                        <h3 class="mb-4 text-lg font-semibold text-white ">
                          License Status
                        </h3>
                        <p class="w-full leading-tight text-justify text-white">
                          From
                          <span
                            class="p-2 m-2 text-2xl bg-white rounded-md text-primary-600"
                          >
                            {{ history.fromStatus.name }}
                          </span>
                          To
                          <span
                            class="p-2 m-2 text-2xl bg-white rounded-md text-primary-600"
                          >
                            {{ history.toStatus.name }}
                          </span>
                          <span
                            v-if="
                              history.toStatus.name == 'In Review' &&
                              history.toStatus.name == history.fromStatus.name
                            "
                            class="p-2 m-2 text-2xl text-white rounded-md bg-primary-600"
                          >
                            This is a Transfer
                          </span>
                          <span
                            v-if="
                              history.toStatus.name == 'Approve' &&
                              history.toStatus.name == history.fromStatus.name
                            "
                            class="p-2 m-2 text-2xl text-white rounded-md bg-primary-600"
                          >
                            This is a license print
                          </span>
                          <span
                            v-if="
                              history.toStatus.name == 'Submit' &&
                              history.toStatus.name == history.fromStatus.name
                            "
                            class="p-2 m-2 text-2xl text-white rounded-md bg-primary-600"
                          >
                            This is a license update from applicant side
                          </span>
                        </p>
                      </div>
                      <div>
                        <h2 class="text-xl font-bold text-white">Remark</h2>
                        <div class="p-2 text-white border rounded-md">
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
    let userInfo = ref("");
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
        let result = res.data && res.data.data ? res.data.data : [];
        licenseHistory.value = result.data;
        userInfo.value = result.userInfo;
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
      userInfo,
    };
  },
};
</script>
