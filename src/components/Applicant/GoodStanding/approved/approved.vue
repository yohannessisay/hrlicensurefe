<template>
  <main-content>
    <nav class="bg-gray-100 px-5 py-3 rounded-md w-full">
      <ol class="list-reset flex">
        <li><a href="#" class="text-main-400 hover:text-blue-700">Home</a></li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li>
          <a href="#" class="text-main-400 hover:text-blue-700">Good Standing </a>
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li class="text-gray-500">Approved</li>
      </ol>
    </nav>
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap sm:-mx-1 lg:-mx-4">
        <!-- Column -->

        <div
          v-for="license in newLicense"
          :key="license.id"
          class="
            bg-white
            my-1
            px-1
            md:w-1/4
            lg:w-1/4
            mdlg:w-1/4
            sm:w-full sm:mr-4
            shadow-2xl
            rounded-lg
            transform
            transition
            duration-300
            ease-in-out
            hover:-translate-y-2
          "
        >
          <!-- Article -->
          <router-link
            :to="'/Applicant/NewLicense/approved/detail/' + license.id"
          >
            <h2 class="text-main-400 border-b-2 text-xl p-2">
              License Number-
              <span class="text-base text-main-400">{{
                license.newLicenseCode
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
            >
              <h1 class="text-lg">
                <a class="no-underline hover:underline text-main-400" href="#">
                  Profession Name
                </a>
              </h1>
              <p
                v-for="eds in license.educations"
                :key="eds.id"
                class="text-black text-sm"
              >
                {{ eds.professionType.name + " ," }}
              </p>
            </header>
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
                    Certified Date
                  </a>
                </h1>
                <p class="text-black text-sm">
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
                <p class="text-black text-sm">
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
          </router-link>

          <!-- END Article -->
        </div>
        <!-- END Column -->
      </div>
    </div>
  </main-content>
</template>
  
  <script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import MainContent from "../sharedComponents/Menu.vue";
import { googleApi } from "@/composables/baseURL";
export default {
  components: { MainContent },
  setup() {
    let store = useStore();
    let newLicense = ref({});
    let userInfo = ref({});
    let isLoading = ref(false);
    onMounted(() => {
      isLoading.value = true;
      userInfo.value = JSON.parse(window.localStorage.getItem("personalInfo"));
      store.dispatch("lookups/getApplicationStatuses").then((resp) => {
        let appStatus = resp.data.data.filter((element) => {
          return element.code == "DEC";
        });
        store.dispatch("goodstanding/getGoodStanding").then((res) => {
          newLicense.value = res.data.data;

          if (newLicense.value) {
            newLicense.value = newLicense.value.filter(function (e) {
              return e.applicationStatus.code.includes(appStatus.code);
            });
          }
        });
      });
    });

    return {
      newLicense,
      googleApi,
      userInfo,
      isLoading,
    };
  },
};
</script>
  