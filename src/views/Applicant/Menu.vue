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
        <div class="container my-12 mx-auto px-4 md:px-12">
          <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <!-- Column -->
            <div
              class="
                my-1
                px-1
                w-10/12
                mdlg:mr-8 mdlg:w-1/4
                md:w-1/2
                lg:w-1/5 lg:px-4 
              "
            >
              <!-- Article -->
              <article
                class="
                  overflow-hidden
                  rounded-lg
                  shadow-lg
                  transform
                  transition
                  duration-300
                  ease-in-out
                  hover:-translate-y-4
                "
              >
                <router-link to="/Applicant/NewLicense">
                  <div
                    class="
                      relative
                      overflow-hidden
                      rounded-lg
                      shadow-lg
                      cursor-pointer
                      w-full
                    "
                  >
                    <img
                      class="
                        bg-opacity-10
                        backdrop-filter backdrop-blur-sm
                        w-full
                      "
                      src="../../assets/applicant/newLicense.jpg"
                      alt="Flower and sky"
                    />

                    <div class="absolute top-0 left-0 px-6 py-4">
                      <div
                        class="
                          flex
                          justify-center
                          backdrop-filter backdrop-blur-md
                          bg-opacity-75
                          rounded-sm
                          text-center
                          p-2
                        "
                        style="background: #046572ea"
                      >
                        <span class="text-white text-lg font-semibold">
                          New License
                        </span>
                      </div>
                    </div>
                  </div>
                </router-link>
              </article>
              <!-- END Article -->
            </div>
            <!-- END Column -->

            <!-- Column -->
            <div
              class="
                my-1
                px-1
                w-full
                mdlg:w-1/4 mdlg:mr-8
                md:w-1/2
                lg:my-4 lg:px-4 lg:w-1/5 
              "
            >
              <!-- Article -->
              <article
                class="
                  overflow-hidden
                  rounded-lg
                  shadow-lg
                  transform
                  transition
                  duration-300
                  ease-in-out
                  hover:-translate-y-4
                "
              >
                <router-link to="/Applicant/Renewal">
                  <div
                    class="
                      relative
                      overflow-hidden
                      rounded-lg
                      shadow-lg
                      cursor-pointer
                    "
                  >
                    <img
                      class="
                        w-full
                        bg-opacity-25
                        backdrop-filter backdrop-blur-lg
                      "
                      src="../../assets/applicant/renewal.jpg"
                      alt="Flower and sky"
                    />

                    <div class="absolute top-0 left-0 px-6 py-4">
                      <div
                        class="
                          flex
                          justify-center
                          backdrop-filter backdrop-blur-md
                          bg-opacity-75
                          rounded-sm
                          text-center
                          p-2
                        "
                        style="background: #046572ea"
                      >
                        <span class="text-white text-lg font-semibold">
                          Renewal
                        </span>
                      </div>
                    </div>
                  </div>
                </router-link>
              </article>
              <!-- END Article -->
            </div>
            <!-- END Column -->
            <!-- END Column -->

            <!-- Column -->
            <div
              class="
                my-1
                px-1
                mdlg:w-1/4 mdlg:mr-8
                w-full
                md:w-1/2
                lg:my-4 lg:px-4 lg:w-1/5 
              "
            >
              <!-- Article -->
              <article
                class="
                  overflow-hidden
                  rounded-lg
                  shadow-lg
                  transform
                  transition
                  duration-300
                  ease-in-out
                  hover:-translate-y-4
                "
              >
                <router-link to="/Applicant/GoodStanding">
                  <div
                    class="
                      relative
                      overflow-hidden
                      rounded-lg
                      shadow-lg
                      cursor-pointer
                    "
                  >
                    <img
                      class="
                        w-full
                        bg-opacity-25
                        backdrop-filter backdrop-blur-lg
                        h-full
                      "
                      src="../../assets/applicant/goodStanding.jpg"
                      alt="Flower and sky"
                    />

                    <div class="absolute top-0 left-0 px-6 py-4">
                      <div
                        class="
                          flex
                          justify-center
                          backdrop-filter backdrop-blur-md
                          bg-opacity-75
                          rounded-sm
                          text-center
                          p-2
                        "
                        style="background: #046572ea"
                      >
                        <span class="text-white text-lg font-semibold">
                          GoodStanding
                        </span>
                      </div>
                    </div>
                  </div>
                </router-link>
              </article>
              <!-- END Article -->
            </div>
            <!-- END Column -->
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
