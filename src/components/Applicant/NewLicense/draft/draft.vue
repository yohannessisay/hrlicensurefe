<template>
  <main-content :url="'newLicense'">
    <nav class="bg-gray-100 px-5 py-3 rounded-md w-full mb-10" id="topNav">
      <ol class="list-reset flex">
        <li>
          <a href="#" :class="isDarkMode ? 'text-white' : 'text-main-400'"
            >Home</a
          >
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li>
          <a href="#" :class="isDarkMode ? 'text-white' : 'text-main-400'"
            >New License</a
          >
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li href="#" :class="isDarkMode ? 'text-main-400' : 'text-grey-400'">
          Draft
        </li>
      </ol>
    </nav>

    <h2 class="ml-8 mt-8" v-if="isLoading">Loading...</h2>
  

    <div class="container my-12 mx-auto px-4 md:px-12" v-if="noData == false">
      <div class="flex flex-wrap sm:-mx-1 lg:-mx-4">
        <!-- Column -->

        <div
          v-for="license in userDraftLicenses"
          :key="license.id"
          :class="
            isDarkMode
              ? 'bg-secondaryDark my-1 px-1 md:w-1/4 lg:w-1/4 mdlg:w-1/4 sm:w-full sm:mr-4   rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2'
              : 'bg-white my-1 px-1 md:w-1/4 lg:w-1/4 mdlg:w-1/4 sm:w-full sm:mr-4   rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2'
          "
        >
          <!-- Article -->
          <div>
            <h2
              :class="
                isDarkMode
                  ? 'text-white border-b-2 text-xl p-2'
                  : 'text-main-400 border-b-2 text-xl p-2'
              "
            >
              License Number-
              <span
                :class="
                  isDarkMode
                    ? 'text-base text-white'
                    : 'text-base text-grey-800'
                "
                >{{ license.newLicenseCode }}</span
              >
            </h2>

            <div class="border-b-2 text-main-400">
              <div class="grid grid-cols-2 p-2">
                <h1 class="text-lg">
                  <a
                    class="no-underline hover:underline text-main-400"
                    href="#"
                  >
                    Profession Name
                  </a>
                </h1>

                <ul
                  :class="
                    isDarkMode ? 'text-white text-sm' : 'text-black text-sm'
                  "
                >
                  <li
                    v-for="(education, index) in license.educations"
                    :key="education.id"
                    style="display: inline"
                  >
                    <span
                      :class="
                        isDarkMode ? 'text-white text-sm' : 'text-grey-800 text-sm'
                      "
                    >
                      {{
                        education.professionType
                          ? education.professionType.name
                            ? "*" + education.professionType.name
                            : "-"
                          : "-"
                      }}
                      <span v-if="index != license.educations.length - 1">
                        ,
                      </span>
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
                <p
                  :class="
                    isDarkMode ? 'text-white text-sm' : 'text-grey-800 text-sm'
                  "
                >
                  {{
                    license.certifiedDate
                      ? license.certifiedDate
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
                <p
                  :class="
                    isDarkMode ? 'text-white text-sm' : 'text-grey-800 text-sm'
                  "
                >
                  {{
                    license.certifiedDate
                      ? license.certifiedDate
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
                  class="block rounded-full h-8 w-8"
                  :src="
                    userInfo.profilePicturePath
                      ? googleApi + userInfo.profilePicturePath
                      : ''
                  "
                />
                <p class="ml-2 text-sm text-main-400">{{ userInfo.name }}</p>
              </a>

              <span
                :class="
                  isDarkMode
                    ? 'text-white ml-2 text-sm'
                    : 'text-black ml-2 text-sm'
                "
                >{{ license.createdAt.slice(0, 10) }}</span
              >
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
                @click="openDraftDetail(license.id)"
                data-bs-toggle="modal"
                data-bs-target="#draftModalInfo"
              >
                View Detail
              </button>

              <router-link
                :to="'/Applicant/NewLicense/draft/detail/' + license.id"
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
         
        rounded-lg
        transform
        transition
        duration-300
        ease-in-out
        hover:-translate-y-2
      "
    >
      <!-- Article -->

      <h2
        :class="
          isDarkMode
            ? 'text-white border-b-2 text-xl p-2'
            : 'text-main-400 border-b-2 text-xl p-2'
        "
      >
        There are no drafted applications currently.
      </h2>
    </div>
    <draft-modal-info :modalDataId="modalDataId" :isDarkMode="isDarkMode"></draft-modal-info>
  </main-content>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import MainContent from "../../Shared/Menu.vue";
import { googleApi } from "@/composables/baseURL";
import draftModalInfo from "./draftModalInfo.vue";

export default {
  components: { MainContent, draftModalInfo },
  setup( ) {
    let store = useStore();
    let userDraftLicenses = ref([]);
    let userInfo = ref({});
    let isLoading = ref(true);
    let noData = ref(false);
    let modalDataId = ref({ change: 0, id: "" });
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
   
    onMounted(() => {  
      isLoading.value = true;
      userInfo.value = JSON.parse(window.localStorage.getItem("personalInfo"));
      let userId = JSON.parse(window.localStorage.getItem("userId"));
      window.addEventListener("darkModeChanged", (data) => {
        isDarkMode.value = data.detail ? data.detail.content : "";
      });
      store.dispatch("newlicense/getNewLicenseByUser", userId).then((res) => {
        const results =  res.data.data?res.data.data:[];

        if (results.length > 0) {
          userDraftLicenses.value = results.filter((draftLicenses) => {
            return draftLicenses.applicationStatus.code === "DRA";
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
      isDarkMode,
      openDraftDetail,
      modalDataId, 
    };
  },
};
</script>
