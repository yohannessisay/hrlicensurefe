<template>
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="applicationDetail"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="applicationDetailLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-xl relative w-auto pointer-events-none"
    >
      <div
        :class="
          isDarkMode
            ? 'modal-content border-none relative mr-3 ml-2 sm:m-0 flex flex-col w-full pointer-events-auto bg-secondaryDark text-primary-200 bg-clip-padding rounded-md outline-none text-current'
            : 'modal-content border-none relative mr-3 ml-2 sm:m-0 flex flex-col w-full pointer-events-auto bg-white bg-clip-padding text-main-400 rounded-md outline-none text-current'
        "
      >
        <div
          :class="isDarkMode?'modal-header flex flex-shrink-0 justify-end rounded-t-md bg-grey-500 shadow-md p-1':'modal-header flex flex-shrink-0 justify-end rounded-t-md  shadow-md p-1'"
        >
          <button
            type="button"
            class="px-6 text-white bg-main-400 hover:text-main-400 hover:border font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa fa-close fa-2x"></i>
          </button>
        </div>
        <div class="vld-parent">
          <loading
            :active="isLoading"
            :is-full-page="false"
            :color="'#07677e'"
            :opacity="0.6"
            class="rounded-md"
          ></loading>
          <div class="modal-body relative">
            <div class="container mx-auto">
              <section>
                <div class="text-center border-b-4">
                  <h2 class="sm:text-3xl text-3xl font-bold mb-2">
                    Submitted License Detail
                  </h2>
                </div>

                <div
                  class="container my-4 mx-auto px-1 border-b"
                  v-if="licenseData"
                >
                  <div class="flex flex-wrap">
                    <!-- Column -->
                    <div
                      class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                    >
                      <!-- Article -->
                      <article
                        class="overflow-hidden rounded-lg shadow-md p-2 break-all border"
                      >
                        <header
                          class="flex items-center justify-between leading-tight p-2 mb-2 border-b-4"
                        >
                          <h1 class="text-xl">Applicant Profile</h1>
                          <p class="text-sm">
                            <i class="fa fa-user fa-2x"></i>
                          </p>
                        </header>

                        <div class="grid grid-cols-2 gap-2">
                          <h2 class="text-xl">Applicant Name</h2>
                          <h3 class="text-lg font-bold">
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
                          </h3>

                          <h2 class="text-xl">Applicant Email</h2>
                          <h2 class="text-lg font-bold">
                            {{
                              licenseData && licenseData.applicant
                                ? licenseData.applicant.emailAddress
                                : "-"
                            }}
                          </h2>

                          <h2 class="text-xl">Applicant Phone</h2>
                          <h2 class="text-lg break-words font-bold">
                            {{
                              licenseData && licenseData.applicant
                                ? "+251" + licenseData.applicant.phoneNumber
                                : "-"
                            }}
                          </h2>
                        </div>
                      </article>
                      <!-- END Article -->
                    </div>
                    <!-- END Column -->

                    <!-- Column -->
                    <div
                      class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 mb-4"
                    >
                      <!-- Article -->
                      <article
                        class="overflow-hidden rounded-lg shadow-md p-2 break-all sm:mt-0 mt-4 border"
                      >
                        <header
                          class="flex items-center justify-between leading-tight p-2 mb-2 border-b-4"
                        >
                          <h1 class="text-lg">
                            <a
                              class="no-underline hover:underline text-black"
                              href="#"
                            >
                              Reviewer Detail
                            </a>
                          </h1>
                          <p class="text-sm">
                            <i class="fa fa-thumbs-up"></i>
                            <i class="fa fa-thumbs-down"></i>
                          </p>
                        </header>
                        <div class="grid grid-cols-2 gap-2">
                          <h2 class="text-xl">Reviewer Name</h2>
                          <h2 class="font-bold text-lg">
                            {{
                              licenseData && licenseData.licenseReviewer
                                ? licenseData.licenseReviewer.reviewer.name
                                : "Not Assigned Yet"
                            }}
                          </h2>

                          <h2 class="text-xl">Expert Level</h2>
                          <h2 class="font-bold text-lg">
                            {{
                              licenseData &&
                              licenseData.licenseReviewer &&
                              licenseData.licenseReviewer.reviewer &&
                              licenseData.licenseReviewer.reviewer.expertLevel
                                ? licenseData.licenseReviewer.reviewer
                                    .expertLevel.name
                                : "Not Assigned Yet"
                            }}
                          </h2>

                          <h2 class="text-xl">Region</h2>
                          <h2 class="font-bold text-lg">
                            {{
                              licenseData &&
                              licenseData.licenseReviewer &&
                              licenseData.licenseReviewer.reviewer &&
                              licenseData.licenseReviewer.reviewer.region
                                ? licenseData.licenseReviewer.reviewer.region
                                    .name
                                : "Not Assigned Yet"
                            }}
                          </h2>
                        </div>

                        <footer
                          class="flex items-center justify-between leading-none p-2 md:p-4"
                        ></footer>
                      </article>
                      <!-- END Article -->
                    </div>
                    <!-- END Column -->

                    <!-- Column -->
                    <div
                      class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 mb-4"
                    >
                      <!-- Article -->
                      <article
                        class="overflow-hidden rounded-lg shadow-md p-2 break-all border"
                      >
                        <header
                          class="flex items-center justify-between leading-tight p-2 mb-2 border-b-4"
                        >
                          <h1 class="text-xl">Applicants Education Detail</h1>
                        </header>

                        <div
                          class="grid grid-cols-2 gap-1"
                          v-for="education in licenseData.educations"
                          :key="education ? education.id : ''"
                        >
                          <h2 class="text-xl">Department</h2>
                          <h3 class="text-lg font-bold">
                            {{
                              education && education.department
                                ? education.department.name
                                : "-"
                            }}
                          </h3>

                          <h2 class="text-xl">Institution</h2>
                          <h3 class="text-lg font-bold">
                            {{
                              education && education.institution
                                ? education.institution.name
                                : "-"
                            }}
                          </h3>

                          <h2 class="text-xl">Education Level</h2>
                          <h3 class="text-lg font-bold">
                            {{
                              education && education.educationLevel
                                ? education.educationLevel.name
                                : "-"
                            }}
                          </h3>
                        </div>

                        <footer
                          class="flex items-center justify-between leading-none p-2 md:p-4"
                        ></footer>
                      </article>
                      <!-- END Article -->
                    </div>

                    <!-- END Column -->

                    <!-- Column -->
                    <div
                      class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                    >
                      <!-- Article -->
                      <article
                        class="overflow-hidden rounded-lg shadow-md p-2 break-all border"
                      >
                        <header
                          class="flex items-center justify-between leading-tight p-2 mb-2 border-b-4"
                        >
                          <h1 class="text-xl">License Detail</h1>
                        </header>

                        <div class="grid grid-cols-2 gap-1">
                          <h2 class="text-xl">Applicant Type</h2>
                          <h3 class="text-lg font-bold">
                            {{
                              licenseData && licenseData.applicantType
                                ? licenseData.applicantType.name
                                : "-"
                            }}
                          </h3>

                          <h2 class="text-xl">Application Status</h2>
                          <h3 class="text-lg font-bold">
                            {{
                              licenseData && licenseData.applicationStatus
                                ? licenseData.applicationStatus.name
                                : "-"
                            }}
                          </h3>

                          <h2 class="text-xl">Certified Status</h2>
                          <h3 class="text-lg font-bold">
                            {{
                              licenseData && licenseData.certified
                                ? "Certified"
                                : "Not Certified"
                            }}
                          </h3>

                          <h2 class="text-xl">Certified Date</h2>
                          <h3 class="text-lg font-bold">
                            {{
                              licenseData && licenseData.certifiedDate
                                ? licenseData.certifiedDate.slice(0, 10)
                                : "-"
                            }}
                          </h3>

                          <h2 class="text-xl">Expiration Date</h2>
                          <h3 class="text-lg font-bold">
                            {{
                              licenseData && licenseData.licenseExpirationDate
                                ? licenseData.licenseExpirationDate.slice(0, 10)
                                : "-"
                            }}
                          </h3>
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
  props: ["modalDataId", "applicationDetailLink", "isDarkMode"],
  components: { Loading },
  setup(props) {
    let store = useStore();
    let userInfo = ref({});
    let isLoading = ref(false);
    let licenseData = ref({});

    watch(props.modalDataId, () => {
      isLoading.value = true;
      store
        .dispatch(props.applicationDetailLink.toString(), props.modalDataId.id)
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
