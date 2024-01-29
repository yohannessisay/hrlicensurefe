<template>
  <!-- Sidebar -->
  <reviewer-side-bar> </reviewer-side-bar>

  <!-- Sidebar -->
  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar
      ><ol class="list-reset flex">
        <li>
          <router-link to="/admin/review"
            ><span class="text-grey-300 ">Home</span></router-link
          >
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>

        <li>
          <a href="#" class="pointer-events-none  text-primary-600"
            >Profile</a
          >
        </li>
      </ol></reviewer-nav-bar
    >
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="parent">
        <div class="bg-gray-100">
          <div class="container mx-auto my-5 p-5">
            <div class="md:flex no-wrap md:-mx-2">
              <!-- Left Side -->

              <!-- Right Side -->
              <div class="w-full md:w-4/5 mx-2 h-64">
                <!-- Profile tab -->
                <!-- About Section -->
                <div class="bg-white p-3 rounded-sm">
                  <div class="vld-parent mt-4">
                    <loading
                      :active="isLoadingUserInfo"
                      :is-full-page="false"
                      :color="'#2F639D'"
                      :opacity="1"
                    ></loading>
                    <div
                      class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
                    >
                      <span clas="text-green-500">
                        <svg
                          class="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </span>
                      <span class="tracking-wide">About</span>
                    </div>
                    <div class="text-gray-700">
                      <div class="grid md:grid-cols-2 text-sm">
                        <div class="grid grid-cols-2">
                          <div class="px-4 py-2 font-semibold">Full Name</div>
                          <div class="mb-3 xl:w-96">
                            <input
                              type="text"
                              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:bg-white focus:border-primary-600 focus:outline-none"
                              id="firstName"
                              placeholder="Full name"
                              v-model="userInfo.name"
                            />
                          </div>
                        </div>
                        <div class="grid grid-cols-2">
                          <div class="px-4 py-2 font-semibold">Full Amharic Name</div>
                          <div class="mb-3 xl:w-96">
                            <input
                              type="text"
                              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:bg-white focus:border-primary-600 focus:outline-none"
                              id="fatherName"
                              placeholder="Full Amharic Name"
                              v-model="userInfo.amharic_name"
                            />
                          </div>
                        </div>
                    
                        <div class="grid grid-cols-2">
                          <div class="px-4 py-2 font-semibold">Gender</div>
                          <div class="mb-3 xl:w-96">
                            <select
                              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              v-model="userInfo.gender"
                              aria-label="Default select example"
                            >
                              <option selected :value="userInfo.gender">
                                {{ userInfo.gender }}
                              </option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                            </select>
                          </div>
                        </div>
                        <div class="grid grid-cols-2">
                          <div class="px-4 py-2 font-semibold">
                            Office Phone Number
                          </div>
                          <div class="mb-3 xl:w-96">
                            <input
                              type="text"
                              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:bg-white focus:border-primary-600 focus:outline-none"
                              id="phoneNumber"
                              placeholder="Office Phone Number"
                              v-model="userInfo.phoneNumber"
                            />
                          </div>
                        </div>
                        <div class="grid grid-cols-2">
                          <div class="px-4 py-2 font-semibold">Address</div>
                          <div class="mb-3 xl:w-96">
                            <input
                              type="text"
                              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:bg-white focus:border-primary-600 focus:outline-none"
                              id="address"
                              placeholder="Address"
                              v-model="userInfo.address"
                            />
                          </div>
                        </div>
                        <div class="grid grid-cols-2">
                          <div class="px-4 py-2 font-semibold">Email</div>
                          <div class="mb-3 xl:w-96">
                            <input
                              type="text"
                              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:bg-white focus:border-primary-600 focus:outline-none"
                              id="firstName"
                              placeholder="First name"
                              v-model="userInfo.email"
                            />
                          </div>
                        </div>
                        <div class="grid grid-cols-2">
                          <div class="px-4 py-2 font-semibold">Birthdate</div>
                          <input
                            :max="minimumBirthDate"
                            min="1899-01-01"
                            v-model="userInfo.birthDate"
                            type="date"
                            name="birthDate"
                            id="birthDate"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      class="block w-full text-white bg-primary-600 font-semibold rounded-lg hover:bg-white hover:text-primary-600 hover:shadow-xs p-3 my-4"
                      @click="updateUserInfo()"
                    >
                      <i class="fa fa-save"></i>
                      Update Profile
                    </button>
                  </div>
                </div>
                <!-- End of about section -->

                <!-- When education feature is added to reviewer  -->
                <!-- Experience and education -->
                <!--   <div class="bg-white p-3   rounded-sm">
                 <div class="grid grid-cols-2">
                    <div>
                      <div
                        class="
                          flex
                          items-center
                          space-x-2
                          font-semibold
                          text-gray-900
                          leading-8
                          mb-3
                        "
                      >
                        <span clas="text-green-500">
                          <svg
                            class="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </span>
                        <span class="tracking-wide">Experience</span>
                      </div>
                      <ul class="list-inside space-y-2">
                        <li>
                          <div class="text-teal-600">Owner at Company Inc.</div>
                          <div class="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                        <li>
                          <div class="text-teal-600">Owner at Company Inc.</div>
                          <div class="text-gray-500 text-xs">
                            March 2020 - Now
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div
                        class="
                          flex
                          items-center
                          space-x-2
                          font-semibold
                          text-gray-900
                          leading-8
                          mb-3
                        "
                      >
                        <span clas="text-green-500">
                          <svg
                            class="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                              fill="#fff"
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                          </svg>
                        </span>
                        <span class="tracking-wide">Education</span>
                      </div>
                      <ul class="list-inside space-y-2">
                        <li>
                          <div class="text-teal-600">Masters Degree At AAU</div>
                          <div class="text-gray-500 text-xs">
                            March 2024 - Now
                          </div>
                        </li>
                        <li>
                          <div class="text-teal-600">
                            Bachelors Degreen At AASTU
                          </div>
                          <div class="text-gray-500 text-xs">March 2016</div>
                        </li>
                      </ul>
                    </div>
                  </div> 
                </div>-->
                <!-- End of Experience and education grid -->
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
    let display = ref("dashboard");
    let userInfo = ref({ name: "" ,amharic_name:""});
    let userId = +window.localStorage.getItem("adminId");
    let isLoadingUserInfo = ref(true);
    let minimumBirthDate = new Date(`${new Date().getFullYear() - 18}`)
      .toISOString()
      .slice(0, 10);
    const updateUserInfo = () => {
      isLoadingUserInfo.value = true; 
      store.dispatch("admin/updateAdmin", userInfo.value).then((res) => {
        if (res.data.status == "Success") {
          toast.success("Profile Updated successfuly", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
          getProfile();
          isLoadingUserInfo.value = false;
        } else {
          toast.error("Please try again", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
          getProfile();
          isLoadingUserInfo.value = false;
        }
      });
    };
    const getProfile = () => {
      store.dispatch("admin/getAdminById", userId).then((res) => {
        userInfo.value = res.data.data;

        userInfo.value ? (isLoadingUserInfo.value = false) : "";
      });
    };
    onMounted(() => {
      getProfile();
    });
    return {
      display,
      isLoadingUserInfo,
      minimumBirthDate,
      userInfo,
      updateUserInfo,
    };
  },
};
</script>

 