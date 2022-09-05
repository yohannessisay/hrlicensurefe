<template>
  <main-content>
    <div
      class="pages-navbar flex justify-center h-12 rounded-sm"
      style="width: 98% !important"
    >
      <div
        :class="
          isLoading ? 'profile p-4 loading-overlay is-overlay' : 'profile p-4'
        "
      >
        <h2 class="text-white">Your submitted applications</h2>

      </div>
    </div>
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap sm:-mx-1 lg:-mx-4">
        <!-- Column -->
        <div
          v-for="license in newLicense"
          :key="license.id"
          class="
            bg-main-400
            my-1
            px-1
            md:w-1/4
            lg:w-1/4
            mdlg:w-1/4
            sm:w-full sm:mr-4
            shadow-2xl
            rounded-lg
          "
        >
          <!-- Article -->
          <router-link
            :to="'/Applicant/NewLicense/submitted/detail/' + license.id"
          >
            <h2 class="text-white border-b-2 text-xl p-2">
              License Number-
              <span class="text-base text-white">{{
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
                <a class="no-underline hover:underline text-white" href="#">
                  Profession Name
                </a>
              </h1>
              <p class="text-white text-sm">Profession Name</p>
            </header>
            <div class="border-b-2 text-white">
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
                  <a class="no-underline hover:underline text-white" href="#">
                    Certified Date
                  </a>
                </h1>
                <p class="text-white text-sm">Certified Date</p>
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
                  <a class="no-underline hover:underline text-white" href="#">
                    Expiry Date
                  </a>
                </h1>
                <p class="text-white text-sm">Expiry Date</p>
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
                  <a class="no-underline hover:underline text-white" href="#">
                    Other Kotets
                  </a>
                </h1>
                <p class="text-white text-sm">kotets</p>
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
                <p class="ml-2 text-sm text-white">{{ userInfo.name }}</p>
              </a>

              <span class="text-white text-sm">{{
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
      store.dispatch("newlicense/getNewLicense").then((res) => {
        newLicense.value = res.data.data;
        console.log(newLicense);
        if (newLicense.value) {
          newLicense.value = newLicense.value.filter(function (e) {
            return (
              e.applicationStatus.code.includes("UPD") ||
              e.applicationStatus.code.includes("SUB")
            );
          });
          isLoading.value = false;
        }
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
  