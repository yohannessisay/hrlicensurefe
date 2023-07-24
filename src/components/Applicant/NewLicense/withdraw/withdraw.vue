<template>
 <main-content :url="'newLicense'">
    <nav class="bg-gray-100 px-5 py-3 rounded-md w-full mb-10" id="topNav">
      <ol class="list-reset flex">
        <li><a href="#" class="text-main-400 hover:text-blue-700">Home</a></li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li>
          <a href="#" class="text-main-400 hover:text-blue-700">New License</a>
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li class="text-gray-500">Withdraw</li>
      </ol>
    </nav>
    <h2 class="ml-8 mt-8" v-if="isLoading">Loading...</h2>
    <div class="container my-12 mx-auto px-4 md:px-12" v-if="noData == false">
      <div class="flex flex-wrap sm:-mx-1 lg:-mx-4">
        <!-- Column -->

        <div
          v-for="license in withdrawnLicenses"
          :key="license.id"
          class="
            bg-white
            my-1
            px-1
            md:w-1/4
            lg:w-1/4
            mdlg:w-1/4
            sm:w-full sm:mr-4
            shadow-md
            rounded-lg
            transform
            transition
            duration-300
            ease-in-out
            hover:-translate-y-2
          "
        >
          <!-- Article -->
          <div>
            <h2 class="text-main-400 border-b-2 text-xl p-2">
              License Number-
              <span class="text-base text-main-400">{{
                license.newLicenseCode
              }}</span>
            </h2>

            <div class="border-b-2 text-main-400">
              <div class="grid grid-rows-2 p-2 mb-2 border-b-2">
                <h1 class="text-lg">
                  <a class=" hover:underline underline text-main-400" href="#">
                    Department
                  </a>
                </h1>

                <ul class="text-black text-sm">
                  <li
                    v-for="(education, index) in license.educations"
                    :key="education.id"
                    style="display: inline"
                  >
                    <span class="text-black text-sm">
                      {{ education.department ? "*" + education.department.name : "-" }}</span
                    >
                    <span v-if="index != license.educations.length - 1">
                      ,
                    </span>
                  </li>
                </ul>
              </div>

              <div
                class="
                  flex
                  items-center
                  justify-between
                  leading-tight
                  p-2
                  md:p-2
                "
              >
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-main-400"
                    href="#"
                  >
                    Certified Date
                  </a>
                </h1>
                <p class="text-black text-sm">
                  {{
                    license.certifiedDate
                      ? license.certifiedDate.slice(0, 10)
                      : "Waiting for review"
                  }}
                </p>
              </div>
              <div
                class="
                  flex
                  items-center
                  justify-between
                  leading-tight
                  p-2
                  md:p-2
                "
              >
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-main-400"
                    href="#"
                  >
                    Expiry Date
                  </a>
                </h1>
                <p class="text-black text-sm">
                  {{
                    license.certifiedDate
                      ? license.certifiedDate.slice(0, 10)
                      : "Waiting for review"
                  }}
                </p>
              </div>
            </div>
            <footer
              class="flex items-center justify-between leading-none p-2 md:p-4"
            >
              <a
                class="
                  flex
                  items-center
                  no-underline
                  hover:underline
                  text-black
                "
                href="#"
              >
                <img
                  alt="Placeholder"
                  class="block rounded-full h-8"
                  v-bind:src="
                    userInfo.profilePicturePath
                      ? googleApi + userInfo.profilePicturePath
                      : ''
                  "
                />
                <p class="ml-2 text-sm text-main-400">{{ userInfo.name }}</p>
              </a>

              <span class="text-main-400 text-sm">{{
                license.createdAt.slice(0, 10)
              }}</span>
            </footer>
            <div class="flex justify-center">
              <button
                class="
                  inline-block
                  px-6
                  text-white
                  bg-main-400
                  hover:text-main-400 hover:border
                  text-sm
                  font-bold
                  uppercase
                  rounded
                  shadow-md
                  mb-4
                  transition
                  duration-150
                  ease-in-out
                "
                @click="changeLicenseId(license.id)"
                data-bs-toggle="modal"
                data-bs-target="#withdrawnDetail"
              >
                View Detail
              </button>
            </div>
          </div>

          <!-- END Article -->
        </div>

        <!-- END Article -->
      </div>
      <!-- END Column -->
    </div>
    <div
      v-else
      class="
        bg-white
        my-1
        px-1
        md:w-1/4
        lg:w-1/4
        mdlg:w-1/4
        sm:w-full sm:mr-4
        shadow-md
        rounded-lg
        transform
        transition
        duration-300
        ease-in-out
        hover:-translate-y-2
      "
    >
      <!-- Article -->

      <h2 class="text-main-400 border-b-2 text-xl p-2">
        There are no withdrawn applications currently.
      </h2>
    </div>
    <withdraw-detail :modalDataId="modalDataId"></withdraw-detail>
  </main-content>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import MainContent from "../../Shared/Menu.vue";
import { googleApi } from "@/composables/baseURL";
import withdrawDetail from "./withdrawDetail.vue";

export default {
  components: { MainContent, withdrawDetail },
  setup() {
    let store = useStore();
    let withdrawnLicenses = ref([]);
    let userInfo = ref({});
    let isLoading = ref(false);
    let noData = ref(false);
    let modalDataId = ref({ change: 0, id: "" });
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    const changeLicenseId = (id) => {
      modalDataId.value.id = id;
      modalDataId.value.change++;
    };

    onMounted(() => {
      window.addEventListener("darkModeChanged", (data) => {
        isDarkMode.value = data.detail ? data.detail.content : "";
      });
      isLoading.value = true;
      userInfo.value = JSON.parse(window.localStorage.getItem("personalInfo"));
      let userId = JSON.parse(window.localStorage.getItem("userId"));

      store.dispatch("newlicense/getNewLicenseByUser", userId).then((res) => {
        const results = res.data.data ? res.data.data : [];

        if (results.length > 0) {
          withdrawnLicenses.value = results.filter((withdrawnLicense) => {
            return withdrawnLicense.applicationStatus.code === "WD";
          });

          if (withdrawnLicenses.value.length === 0) {
            noData.value = true;
          }

          isLoading.value = false;
        } else {
          noData.value = true;
          isLoading.value = false;
        }
      });
    });

    return {
      withdrawnLicenses,
      googleApi,
      userInfo,
      noData,
      changeLicenseId,
      isLoading,
      modalDataId,
      isDarkMode
    };
  },
};
</script>
