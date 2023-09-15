<template>
  <div
    class="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none  modal fade"
    id="approvedDetail"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="approvedDetailLabel"
    aria-hidden="true"
  >
    <div
      class="relative w-auto pointer-events-none  modal-dialog modal-dialog-centered modal-xl"
    >
      <div
        class="relative flex flex-col w-full text-current bg-white border-none rounded-md   outline-none pointer-events-auto  modal-content bg-clip-padding"
      >
        <div
          class="flex justify-end flex-shrink-0 p-2 modal-header rounded-t-md"
        >
          <button
            type="button"
            class="px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded    bg-main-400 hover:text-main-400 hover:border hover:bg-purple-700 hover:  focus:bg-purple-700 focus:  focus:outline-none focus:ring-0 active:bg-purple-800 active: "
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
                    your license **
                  </h4>
                </div>
                <div class="flex justify-center">
                  <div class="loader"></div>
                </div>
                <div class="flex justify-center border-b-4 text-main-400">
                  <div class="text-center lg:max-w-3xl md:max-w-xl">
                    <h2 class="px-6 mb-8 text-2xl font-bold text-main-400">
                      Approved Renewal Detail
                    </h2>
                  </div>
                </div>

                <div
                  class="container px-4 mx-auto my-12 border-b md:px-12"
                  v-if="renewalData"
                >
                  <div class="flex flex-wrap -mx-1 lg:-mx-4">
                    <!-- Column -->
                    <div
                      class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                    >
                      <!-- Article -->
                      <article class="overflow-hidden rounded-lg  ">
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
                          <div class="flex justify-between px-4 py-1">
                            <div>Applicant Name</div>
                            <div class="font-bold text-main-400">
                              {{
                                (renewalData && renewalData.profile
                                  ? renewalData.profile.name
                                  : "-") +
                                  " " +
                                  (renewalData && renewalData.profile
                                    ? renewalData.profile.fatherName
                                    : "-") +
                                  " " +
                                  (renewalData && renewalData.profile
                                    ? renewalData.profile.grandFatherName
                                    : "-")
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Applicant Email</div>
                            <div class="font-bold text-main-400">
                              {{
                                renewalData && renewalData.applicant
                                  ? renewalData.applicant.emailAddress
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Applicant Phone</div>
                            <div class="font-bold text-main-400">
                              {{
                                renewalData && renewalData.applicant
                                  ? "+251" + renewalData.applicant.phoneNumber
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
                      <article class="overflow-hidden rounded-lg  ">
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
                            <div>Reviewer Level</div>
                            <div class="font-bold text-main-400">
                              {{
                                renewalData &&
                                renewalData.renewalReviewer &&
                                renewalData.renewalReviewer.reviewer &&
                                renewalData.renewalReviewer.reviewer.expertLevel
                                  ? renewalData.renewalReviewer.reviewer
                                      .expertLevel.name
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Reviewer Name</div>
                            <div class="font-bold text-main-400">
                              {{
                                renewalData && renewalData.renewalReviewer
                                  ? renewalData.renewalReviewer.reviewer.name
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Phone Number</div>
                            <div class="font-bold text-main-400">
                              {{
                                renewalData && renewalData.renewalReviewer
                                  ? renewalData.renewalReviewer.reviewer
                                      .phoneNumber
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
                      <article class="overflow-hidden rounded-lg  ">
                        <header
                          class="flex items-center justify-between p-2 leading-tight border-b-4  md:p-4 text-main-400"
                        >
                          <h1 class="text-lg">
                            <a
                              class="text-black no-underline hover:underline"
                              href="#"
                            >
                              Renewal Detail
                            </a>
                          </h1>
                          <p class="text-sm text-main-400">Active</p>
                        </header>

                        <div class="grid grid-flow-row auto-rows-max">
                          <div class="flex justify-between px-4 py-1">
                            <div>Applicant Type</div>
                            <div class="font-bold text-main-400">
                              {{
                                renewalData && renewalData.applicantType
                                  ? renewalData.applicantType.name
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Application Status</div>
                            <div class="font-bold text-main-400">
                              {{
                                renewalData && renewalData.applicationStatus
                                  ? renewalData.applicationStatus.name
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Certified Status</div>
                            <div class="font-bold text-main-400">
                              {{
                                renewalData && renewalData.certified
                                  ? "Certified"
                                  : "Not Certified"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Certified Date</div>
                            <div class="font-bold text-main-400">
                              {{
                                renewalData && renewalData.certifiedDate
                                  ? renewalData.certifiedDate.slice(0, 10)
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Expiration Date</div>
                            <div class="font-bold text-main-400">
                              {{
                                renewalData && renewalData.licenseExpirationDate
                                  ? renewalData.licenseExpirationDate.slice(
                                      0,
                                      10
                                    )
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
                      <article class="overflow-hidden rounded-lg  ">
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

                        <div
                          class="grid grid-flow-row auto-rows-max"
                          v-for="(education, index) in renewalData.educations"
                          :key="education ? education.id : ''"
                        >
                          <div class="flex justify-between px-4 py-1">
                            <div>Department</div>
                            <div class="font-bold text-main-400">
                              {{
                                education && education.department
                                  ? education.department.name
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Institution</div>
                            <div class="font-bold text-main-400">
                              {{
                                education && education.institution
                                  ? education.institution.name
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Education Level</div>
                            <div class="font-bold text-main-400">
                              {{
                                education && education.educationLevel
                                  ? education.educationLevel.name
                                  : "-"
                              }}
                            </div>
                          </div>

                          <hr
                            class="mt-3 mb-3"
                            style="color: lightgray"
                            v-if="index != renewalData.educations.length - 1"
                          />
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
                      v-if="droppedEducations && droppedEducations.length > 0"
                      class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                    >
                      <!-- Article -->
                      <article class="overflow-hidden rounded-lg  ">
                        <header
                          class="flex items-center justify-between p-2 leading-tight border-b-4  md:p-4 text-main-400"
                        >
                          <h1 class="text-lg">
                            <a
                              class="text-black no-underline hover:underline"
                              href="#"
                            >
                              Dropped Education Detail
                            </a>
                          </h1>
                        </header>

                        <div
                          class="grid grid-flow-row auto-rows-max"
                          v-for="(education, index) in droppedEducations"
                          :key="education ? education.id : ''"
                        >
                          <div class="flex justify-between px-4 py-1">
                            <div>Department</div>
                            <div class="font-bold text-main-400">
                              {{
                                education && education.department
                                  ? education.department.name
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Institution</div>
                            <div class="font-bold text-main-400">
                              {{
                                education && education.institution
                                  ? education.institution.name
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Education Level</div>
                            <div class="font-bold text-main-400">
                              {{
                                education && education.educationLevel
                                  ? education.educationLevel.name
                                  : "-"
                              }}
                            </div>
                          </div>

                          <hr
                            class="mt-3 mb-3"
                            style="color: lightgray"
                            v-if="index != droppedEducations.length - 1"
                          />
                        </div>

                        <footer
                          class="flex items-center justify-between p-2 leading-none border-t-2  md:p-4"
                        >
                          <div class="grid grid-rows-2">
                            <h4 class="font-bold text-main-400">Reason</h4>
                            <p
                              class="p-1 tracking-wider break-all border rounded-md "
                            >
                              {{ renewalData.remark }}
                            </p>
                          </div>
                        </footer>
                      </article>
                      <!-- END Article -->
                    </div>

                    <!-- END Column -->

                    <!-- Column -->
                    <div
                      class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                    >
                      <!-- Article -->
                      <article class="overflow-hidden rounded-lg  ">
                        <header
                          class="flex items-center justify-between p-2 leading-tight border-b-4  md:p-4 text-main-400"
                        >
                          <h1 class="text-lg">
                            <a
                              class="text-black no-underline hover:underline"
                              href="#"
                            >
                              Retrival Date
                            </a>
                          </h1>
                        </header>

                        <div class="grid grid-flow-row auto-rows-max">
                          <div class="flex justify-between px-4 py-1">
                            <div>Retrival Date</div>
                            <div class="font-bold text-main-400">
                              {{ renewalData.retrivalDate }}
                            </div>
                          </div>
                        </div>
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
        <div
          class="flex flex-wrap items-center justify-end flex-shrink-0 border-t  modal-footer border-grey-100 rounded-b-md"
        >
          <button
            type="button"
            class="inline-block px-6 text-xs font-semibold leading-tight text-white uppercase transition duration-150 ease-in-out rounded    bg-main-400 hover:text-main-400 hover:border"
            data-bs-dismiss="modal"
          >
            Close
          </button>
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
    let renewalData = ref({});
    let userInfo = ref({});
    let droppedEducations = ref([]);
    let isLoading = ref(false);
    watch(props.modalDataId, () => {
      isLoading.value = true;
      store
        .dispatch("renewal/getRenewalApplication", props.modalDataId.id)
        .then((res) => {
          renewalData.value = res.data.data;
          renewalData.value && renewalData.value.educations
            ? renewalData.value.educations.forEach((element) => {
                if (element.isDropped == true) {
                  droppedEducations.value.push(element);
                  return;
                }
              })
            : false;
          isLoading.value = false;
        });
    });
    onMounted(() => {
      userInfo.value = JSON.parse(window.localStorage.getItem("personalInfo"));
    });

    return {
      renewalData,
      droppedEducations,
      isLoading,
      googleApi,
      userInfo,
    };
  },
};
</script>
<style scoped>
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
