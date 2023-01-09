<template>
  <main-content>
    <nav class="bg-gray-100 px-5 py-3 rounded-md w-full">
      <ol class="list-reset flex">
        <li><a href="#" class="text-main-400 hover:text-blue-700">Home</a></li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li>
          <a href="#" class="text-main-400 hover:text-blue-700">Goodstanding</a>
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li class="text-gray-500">Draft</li>
      </ol>
    </nav>

    <h2 class="ml-8 mt-8" v-if="isLoading">Loading...</h2>

    <div class="container my-12 mx-auto px-4 md:px-12" v-if="noData == false">
      <div class="flex flex-wrap sm:-mx-1 lg:-mx-4">
        <!-- Column -->

        <div
          v-for="license in userDraftLicenses"
          :key="license.id"
          class="
            bg-white
            my-1
            px-1
            md:w-1/4
            lg:w-1/4
            mdlg:w-1/4
            sm:w-full sm:mr-4
            shadow-lg
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
                license.goodStandingCode
              }}</span>
            </h2>

            <header
              class="
                flex
                items-center
                justify-between
                leading-tight
                p-2
                md:p-2
                mt-2
              "
            ></header>

            <div class="border-b-2 text-main-400">
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
                    Who Issued the letter
                  </a>
                </h1>
                <p class="text-black text-sm">
                  {{ license ? license.whoIssued : "Waiting for review" }}
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
                    License Registration Number
                  </a>
                </h1>
                <p class="text-black text-sm">
                  {{
                    license
                      ? license.licenseRegistrationNumber
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
                    To whom the goodstanding is
                  </a>
                </h1>
                <p class="text-black text-sm">
                  {{
                    license ? license.whomGoodStandingFor : "Waiting for review"
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
                  shadow-lg
                  mb-4
                  transition
                  duration-150
                  ease-in-out
                "
                @click="openDraftDetail(license.id)"
                data-bs-toggle="modal"
                data-bs-target="#draftModalInfo"
              >
                View Detail
              </button>

              <router-link
                :to="'/Applicant/GoodStanding/draft/detail/' + license.id"
              >
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
                    shadow-lg
                    mb-4
                    transition
                    duration-150
                    ease-in-out
                  "
                >
                  Edit
                </button>
              </router-link>
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
        shadow-lg
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
        There are no drafted applications currently.
      </h2>
    </div>
    <draft-modal-info :modalDataId="modalDataId"></draft-modal-info>
  </main-content>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import MainContent from "../sharedComponents/Menu.vue";
import { googleApi } from "@/composables/baseURL";
import draftModalInfo from "./draftModalInfo.vue";

export default {
  components: { MainContent, draftModalInfo },
  setup() {
    let store = useStore();
    let userDraftLicenses = ref([]);
    let userInfo = ref({});
    let isLoading = ref(true);
    let noData = ref(false);
    let modalDataId = ref({ change: 0, id: "" });

    onMounted(() => {
      isLoading.value = true;
      userInfo.value = JSON.parse(window.localStorage.getItem("personalInfo"));

      store.dispatch("goodstanding/getGoodStandingLicense").then((res) => {
        const results = res.data.data;

        if (results && results.length > 0) {
          userDraftLicenses.value = results.filter((draftLicense) => {
            return draftLicense.applicationStatus.code === "DRA";
          });

          if (userDraftLicenses.value.length === 0) {
            noData.value = true;
          }

          isLoading.value = false;
        } else {
          noData.value = true;
          isLoading.value = false;
        }
      });
    });

    const openDraftDetail = (id) => {
      modalDataId.value.id = id;
      modalDataId.value.change++;
    };

    return {
      userDraftLicenses,
      googleApi,
      userInfo,
      noData,
      isLoading,
      openDraftDetail,
      modalDataId,
    };
  },
};
</script>
