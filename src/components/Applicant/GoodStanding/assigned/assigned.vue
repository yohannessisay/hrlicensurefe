<template>
  <main-content :url="'goodstanding'">
    <nav class="bg-gray-100 px-5 py-3 rounded-md w-full mb-10" id="topNav">
      <ol class="list-reset flex">
        <li><a href="#" class="text-main-400 hover:text-blue-700">Home</a></li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li>
          <a href="#" class="text-main-400 hover:text-blue-700">Goodstanding</a>
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li class="text-gray-500">Assigned</li>
      </ol>
    </nav>

    <h2 class="ml-8 mt-8" v-if="isLoading">Loading...</h2>

    <div class="container my-12 mx-auto px-4 md:px-12" v-if="noData == false">
      <div class="flex flex-wrap sm:-mx-1 lg:-mx-4">
        <!-- Column -->

        <div
          v-for="license in inReviewLicenses"
          :key="license.id"
          class="
            bg-white
            my-1
            px-1
            md:w-1/4
            lg:w-1/4
            mdlg:w-1/4
            sm:w-full sm:mr-4
             
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
            <h2 class="text-grey-800 border-b-2 text-xl p-2">
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
                    class="no-underline  text-grey-800"
                    href="#"
                  >
                    Who Issued the letter
                  </a>
                </h1>
                <p class="text-black text-sm">
                  {{ license&&license.whoIssued ? license.whoIssued.name : "Waiting for review" }}
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
                    class="no-underline text-grey-800"
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
                    class="no-underline text-grey-800"
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
              <h2 class="text-lg text-grey-800">Applied Date</h2>

              <span class="text-main-400 text-sm">{{
               license.createdAt?license.createdAt.slice(0, 10):''
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
                   
                  mb-4
                  transition
                  duration-150
                  ease-in-out
                "
                @click="openAssignedDetail(license.id)"
                data-bs-toggle="modal"
                data-bs-target="#assignedModalInfo"
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
        There are no assigned applications currently.
      </h2>
    </div>
    <assignedDetail :modalDataId="modalDataId"></assignedDetail>
  </main-content>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import MainContent from "../../Shared/Menu.vue";
import { googleApi } from "@/composables/baseURL";
import assignedDetail from "./assignedDetail.vue";

export default {
  components: { MainContent, assignedDetail },
  setup() {
    let store = useStore();
    let inReviewLicenses = ref([]);
    let userInfo = ref({});
    let isLoading = ref(false);
    let noData = ref(false);
    let modalDataId = ref({ change: 0, id: "" });

    onMounted(() => {
      isLoading.value = true;
      userInfo.value = JSON.parse(window.localStorage.getItem("personalInfo"));

      store.dispatch("goodstanding/getGoodStandingLicense").then((res) => {
        const results = res.data.data ? res.data.data : [];

        if (results.length > 0) {
          inReviewLicenses.value = results.filter((approvedLicense) => {
            return approvedLicense.applicationStatus.code === "IRV";
          });

          if (inReviewLicenses.value.length === 0) {
            noData.value = true;
          }

          isLoading.value = false;
        } else {
          noData.value = true;
          isLoading.value = false;
        }
      });
    });


    const openAssignedDetail = (id) => {
      modalDataId.value.id = id;
      modalDataId.value.change++;
    };

    return {
      inReviewLicenses,
      googleApi,
      userInfo,
      isLoading,
      noData,
      openAssignedDetail,
      modalDataId,
    };
  },
};
</script>
  