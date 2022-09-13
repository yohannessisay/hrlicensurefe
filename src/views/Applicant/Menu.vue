<template>
  <div class="main">
    <side-nav></side-nav>
    <div class="content">
      <top-nav :userInfo="userInfo"></top-nav>
      <div class="mt-8 ml-8 mr-8">
        <nav class="bg-grey-100 p-4 rounded-sm w-full shadow-lg">
          <ol class="list-reset flex">
            <li>
              <a href="#" class="text-main-400 hover:text-main-100">Home</a>
            </li>
            <li><span class="text-gray-500 mx-2"></span></li>
          </ol>
        </nav>

        <div id="home" class="flex flex-row justify-center ml-4 mt-12">
          <div class="flex flex-col md:flex-row justify-center flex-wrap gap-2">
            <div class="mr-12 mb-8 overview-boxes rounded-xl">
              <router-link to="/Applicant/NewLicense">
                <div
                  class="
                    bg-main-400
                    hover:bg-white
                    shadow-lg
                    box
                    w-full
                    rounded-lg 
                    transition
                    duration-500
                    transform
                    hover:scale-110
                    cursor-pointer
                    cart
                  "
                  style="height: 200px; width: 300px"
                >
                  <p
                    class="
                      py-6
                      px-6
                      text-lg
                      tracking-wide
                      text-center
                      flex flex-row
                      justify-center
                    "
                  >
                    <img
                      src="../../assets/applicant/newLicense.png"
                      alt=""
                      style="height: 100px; width: 100px"
                    />
                  </p>

                  <div class="flex justify-center px-5 mb-2 text-sm mt-4">
                    <h1 class="text-2xl text-main-400">New License</h1>
                  </div>
                </div>
              </router-link>
            </div>

            <div class="mr-12 mb-8 overview-boxes">
              <router-link to="/Applicant/Renewal">
                <div
                  class="
                    bg-main-400
                    shadow-lg
                    box
                    rounded-2xl
                    hover:shadow-4xl
                    transition
                    duration-500
                    transform
                    hover:scale-110
                    cursor-pointer
                  "
                  style="height: 200px; width: 300px"
                >
                  <p
                    class="
                      py-6
                      px-6
                      text-lg
                      tracking-wide
                      text-center
                      flex flex-row
                      justify-center
                    "
                  >
                    <img
                      src="../../assets/applicant/renewal.png"
                      alt=""
                      style="height: 100px; width: 100px"
                    />
                  </p>

                  <div class="flex justify-center px-5 mb-2 text-sm mt-4">
                    <h1 class="text-2xl text-main-400">Renewal</h1>
                  </div>
                </div>
              </router-link>
            </div>

            <div class="mr-12 mb-8 overview-boxes">
              <router-link to="/Applicant/GoodStanding">
                <div
                  class="
                    bg-white
                    shadow-lg
                    box
                    rounded-2xl
                    hover:shadow-4xl
                    transition
                    duration-500
                    transform
                    hover:scale-110
                    cursor-pointer
                  "
                  style="height: 200px; width: 300px"
                >
                  <p
                    class="
                      py-6
                      px-6
                      text-lg
                      tracking-wide
                      text-center
                      flex flex-row
                      justify-center
                    "
                  >
                    <img
                    src="../../assets/applicant/goodStanding.png"
                      alt=""
                      style="height: 100px; width: 100px"
                    />
                  </p>

                  <div class="flex justify-center px-5 mb-2 text-sm mt-4">
                    <h1 class="text-2xl text-main-400">Goodstanding</h1>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>

    
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import SideNav from "./Sidebar.vue";
import TopNav from "./Header.vue";
import { googleApi } from "@/composables/baseURL";
import "../../styles/applicant.css";
import { useStore } from "vuex";
export default {
  components: { SideNav, TopNav },
  setup() {
    const store = useStore();
    const id = +localStorage.getItem("userId");
    let isFirstTime = ref(false);
    let userInfo = ref({});

    let NLdocumentSpecs = ref([]);
    let RNdocumentSpecs = ref([]);
    let GSdocumentSpecs = ref([]);
    const getProfile = () => {
      store.dispatch("profile/getProfileByUserId", id).then((res) => {
        getImage(res.data.data);
        getName(res.data.data);
      });
    };
    const getName = (profile) => {
      if (profile) {
        userInfo.value.fullName = profile.name + " " + profile.fatherName;
      }
    };
    const getImage = (profile) => {
      if (!profile) {
        isFirstTime.value = true;
      } else {
        userInfo.value.pic = googleApi + profile.profilePicture.filePath;
      }
    };
    onMounted(() => {
      getProfile();
      store.dispatch("lookups/getAllDocumentSpecs").then((res) => {
        if (res.data.status == "Success") {
          res.data.data.forEach((element) => {
            // if (element.applicantType &&
            //  element.applicantType.code == "ETH"
            //  ) {
            //   NLdocumentSpecs.value.push(element)
            // }
            // if (element.applicantType &&
            //  element.applicantType.code == "FOR"
            //  ) {
            //   NLdocumentSpecs.value.push(element)
            // }
            // if (element.applicantType &&
            //  element.applicantType.code == "ETH"
            //  ) {
            //   NLdocumentSpecs.value.push(element)
            // }
            NLdocumentSpecs.value.push({
              LicenseType: "New License",
              ApplicantTypeL: "Ethiopian",
              DocumnetType: "COC",
            });
          });
        }
      });
    });
    return { userInfo };
  },
};
</script>
<style scoped>
 
.overview-boxes .box:hover {
    align-items: center;
    justify-content: center;
    width: calc(100% / 4 - 15px); 
    padding: 15px 14px;
    border-radius: 12px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.884);
}
</style>