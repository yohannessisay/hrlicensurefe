<template>
  <div
    class="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none  modal fade"
    id="approvedModalInfo"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="approvedModalInfoLabel"
    aria-hidden="true"
  >
    <div
      class="relative w-auto pointer-events-none  modal-dialog modal-dialog-centered modal-xl"
    >
      <div
        class="relative flex flex-col w-full text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto  modal-content bg-clip-padding"
      >
        <div
          class="flex justify-end flex-shrink-0 p-2 modal-header rounded-t-md"
        >
          <button
            type="button"
            class="px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded shadow-lg  bg-main-400 hover:text-main-400 hover:border hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa fa-close fa-2x"></i>
          </button>
        </div>
        <div class="mt-4 vld-parent">
          <loading
            :active="isLoading"
            :is-full-page="false"
            :color="'#07677e'"
            :opacity="1"
          ></loading>
          <div class="relative p-4 modal-body">
            <div class="container px-6 mx-auto">
              <section class="text-gray-800">
                <div
                  class="flex justify-center border-b-4  text-main-400 message_container"
                >
                  <h4 class="ml-8">
                    ** Please bring required documents when coming to pick up
                    your letter **
                  </h4>
                </div>
                <div class="flex justify-center">
                  <div class="loader"></div>
                </div>
                <div class="flex justify-center border-b-4 text-main-400">
                  
                  <div class="text-center lg:max-w-3xl md:max-w-xl">
                    <h2 class="px-6 mb-8 text-2xl font-bold text-main-400">
                      Approved License Detail
                    </h2>
                  </div>
                </div>

                <div
                  class="container px-4 mx-auto my-12 border-b md:px-12"
                  v-if="licenseData"
                >
                  <div class="flex flex-wrap -mx-1 lg:-mx-4">
                    <!-- Column -->
                    <div
                      class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                    >
                      <!-- Article -->
                      <article class="overflow-hidden rounded-lg shadow-xl ">
                        <header
                          class="flex items-center justify-between p-2 leading-tight border-b-4  md:p-4 text-main-400"
                        >
                          <h1 class="text-lg">
                            <a
                              class="text-black no-underline hover:underline"
                              href="#"
                            >
                              Applicant Profile
                            </a>
                          </h1>
                          <p class="text-sm text-main-400">
                            <i class="fa fa-user fa-2x"></i>
                          </p>
                        </header>

                        <div class="grid grid-flow-row auto-rows-max">
                          <div class="flex justify-between px-4 py-1 ">
                            <div>Applicant Name</div>
                            <div class="font-bold text-main-400">
                              {{
                                licenseData && licenseData.profile
                                  ? licenseData.profile.name
                                  : "-" +
                                    " " +
                                    (licenseData && licenseData.profile
                                      ? licenseData.profile.fatherName
                                      : "-") +
                                    " " +
                                    (licenseData && licenseData.profile
                                      ? licenseData.profile.grandFatherName
                                      : "-")
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Applicant Email</div>
                            <div class="font-bold text-main-400">
                              {{
                                licenseData && licenseData.applicant
                                  ? licenseData.applicant.emailAddress
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Applicant Phone</div>
                            <div class="font-bold text-main-400">
                              {{
                                licenseData && licenseData.applicant
                                  ? "+251" + licenseData.applicant.phoneNumber
                                  : "-"
                              }}
                            </div>
                          </div>
                        </div>

                        <footer
                          class="flex items-center justify-between p-2 leading-none  md:p-4"
                        ></footer>
                      </article>
                      <!-- END Article -->
                    </div>
                    <!-- END Column -->

                    <!-- Column -->
                    <div
                      class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                    >
                      <!-- Article -->
                      <article class="overflow-hidden rounded-lg shadow-xl">
                        <header
                          class="flex items-center justify-between p-2 leading-tight border-b-4  md:p-4 text-main-400"
                        >
                          <h1 class="text-lg">
                            <a
                              class="text-black no-underline hover:underline"
                              href="#"
                            >
                              Reviewer Detail
                            </a>
                          </h1>
                          <p class="text-sm text-main-400">
                            <i class="fa fa-thumbs-up"></i>
                            <i class="fa fa-thumbs-down"></i>
                          </p>
                        </header>
                        <div class="grid grid-flow-row auto-rows-max">
                          <div class="flex justify-between px-4 py-1">
                            <div>Reviewer Name</div>
                            <div class="font-bold text-main-400">
                              {{
                                licenseData.goodstandingReviewer
                                  ? licenseData.goodstandingReviewer.reviewer
                                      .name
                                  : ""
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Phone Number</div>
                            <div class="font-bold text-main-400">
                              {{
                                licenseData.goodstandingReviewer
                                  ? licenseData.goodstandingReviewer.reviewer
                                      .phoneNumber
                                  : ""
                              }}
                            </div>
                          </div>
                        </div>

                        <footer
                          class="flex items-center justify-between p-2 leading-none  md:p-4"
                        ></footer>
                      </article>
                      <!-- END Article -->
                    </div>
                    <!-- END Column -->

                    <!-- Column -->
                    <div
                      class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                    >
                      <!-- Article -->
                      <article class="overflow-hidden rounded-lg shadow-xl">
                        <header
                          class="flex items-center justify-between p-2 leading-tight border-b-4  md:p-4 text-main-400"
                        >
                          <h1 class="text-lg">
                            <a
                              class="text-black no-underline hover:underline"
                              href="#"
                            >
                              Applicants Education Detail
                            </a>
                          </h1>
                          <p class="text-sm text-main-400">Active</p>
                        </header>

                        <div class="grid grid-flow-row auto-rows-max">
                          <div class="flex justify-between px-4 py-1">
                            <div>Department</div>
                            <div class="font-bold text-main-400">
                              {{
                                licenseData.department
                                  ? licenseData.department.name
                                  : ""
                              }}
                            </div>
                          </div>
                          <div class="flex justify-start ml-4">
                            <div>Profession</div>
                            <div class="ml-4 font-bold text-main-400">
                              {{
                                licenseData.GSProfessionals &&
                                licenseData.GSProfessionals.professionalTypes
                                  ? licenseData.GSProfessionals
                                      .professionalTypes.name
                                  : ""
                              }}
                            </div>
                          </div>
                        </div>

                        <footer
                          class="flex items-center justify-between p-2 leading-none  md:p-4"
                        ></footer>
                      </article>
                      <!-- END Article -->
                    </div>

                    <!-- END Column -->

                    <!-- Column -->
                    <div
                      class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                    >
                      <!-- Article -->
                      <article class="overflow-hidden rounded-lg shadow-xl">
                        <header
                          class="flex items-center justify-between p-2 leading-tight border-b-4  md:p-4 text-main-400"
                        >
                          <h1 class="text-lg">
                            <a
                              class="text-black no-underline hover:underline"
                              href="#"
                            >
                              License Detail
                            </a>
                          </h1>
                          <p class="text-sm text-main-400">Active</p>
                        </header>

                        <div class="grid grid-flow-row auto-rows-max">
                          <div class="flex justify-between px-4 py-1">
                            <div>Applicant Type</div>
                            <div class="font-bold text-main-400">
                              {{
                                licenseData && licenseData.applicantType
                                  ? licenseData.applicantType.name
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Application Status</div>
                            <div class="font-bold text-main-400">
                              {{
                                licenseData && licenseData.applicationStatus
                                  ? licenseData.applicationStatus.name
                                  : "-"
                              }}
                            </div>
                          </div>
                        </div>

                        <footer
                          class="flex items-center justify-between p-2 leading-none  md:p-4"
                        ></footer>
                      </article>
                      <!-- END Article -->
                    </div>
                    <!-- END Column -->
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { googleApi } from "@/composables/baseURL";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

export default {
  props: ["modalDataId"],
  components: { Loading },
  setup(props) {
    let store = useStore();
    let userInfo = ref({});
    let isLoading = ref(false);
    let licenseData = ref({});

    watch(props.modalDataId, () => {
      isLoading.value = true;
      store
        .dispatch(
          "goodstanding/getGoodStandingLicenseById",
          props.modalDataId.id
        )
        .then((res) => {
          licenseData.value = res.data.data;
          isLoading.value = false;
        });
    });
    onMounted(() => {
      userInfo.value = JSON.parse(window.localStorage.getItem("personalInfo"));
    });

    return {
      userInfo,
      isLoading,
      googleApi,
      licenseData,
    };
  },
};
</script>
<style>

.loader {
  position: relative;
  width: 800px;
  height: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: #e9ecef;
  border-radius: 50px;
}

.loader::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100px;

  background: #52cd77;
  box-shadow: 0 0 30px 1px #8b8b8bd1;
  transform-origin: left;

  animation: animate 4s linear infinite;
}

@keyframes animate {
  0%,
  20% {
    transform: scaleX(0);
  }
  40% {
    transform: scaleX(1);
    transform-origin: left;
  }
  40.00001%,
  60% {
    transform: scaleX(1);
    transform-origin: right;
  }
  70%,
  100% {
    transform: scaleX(0);
    transform-origin: left;
  }
}
</style>
