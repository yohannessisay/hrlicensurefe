<template>
  <div
    class="
      modal
      fade
      fixed
      top-0
      left-0
      hidden
      w-full
      h-full
      outline-none
      overflow-x-hidden overflow-y-auto
    "
    id="undersupervisionDetail"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="undersupervisionDetailLabel"
    aria-hidden="true"
  >
    <div
      class="
        modal-dialog modal-dialog-centered modal-xl
        relative
        w-auto
        pointer-events-none
      "
    >
      <div
        class="
          modal-content
          border-none
           
          relative
          flex flex-col
          w-full
          pointer-events-auto
          bg-white bg-clip-padding
          rounded-md
          outline-none
          text-current
        "
      >
        <div
          class="modal-header flex flex-shrink-0 justify-end p-2 rounded-t-md"
        >
          <button
            type="button"
            class="
              px-6
              text-white
              bg-main-400
              hover:text-main-400 hover:border
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
               
              hover:bg-purple-700 hover: 
              focus:bg-purple-700
              focus: 
              focus:outline-none
              focus:ring-0
              active:bg-purple-800 active: 
              transition
              duration-150
              ease-in-out
            "
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa fa-close fa-2x"></i>
          </button>
        </div>
        <div class="vld-parent mt-4">
          <loading
            :active="isLoading"
            :is-full-page="false"
            :color="'#07677e'"
            :opacity="1"
          ></loading>
          <div class="modal-body relative p-4">
            <div class="container px-6 mx-auto">
              <section class="text-gray-800">
                <div class="flex justify-center border-b-4 text-main-400">
                  <h4 class="text-black ml-8">
                    Please bring required documents when coming to pick up your
                    license
                  </h4>
                </div>

                <div class="flex justify-center border-b-4 text-main-400">
                  <div class="text-center lg:max-w-3xl md:max-w-xl">
                    <h2 class="text-2xl font-bold mb-8 px-6 text-main-400">
                      Under Supervision License Detail
                    </h2>
                  </div>
                </div>

                <div
                  class="container my-12 mx-auto px-4 md:px-12 border-b"
                  v-if="licenseData"
                >
                  <div class="flex flex-wrap -mx-1 lg:-mx-4">
                    <!-- Column -->
                    <div
                      class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                    >
                      <!-- Article -->
                      <article class="overflow-hidden rounded-lg   ">
                        <header
                          class="
                            flex
                            items-center
                            justify-between
                            leading-tight
                            p-2
                            md:p-4
                            border-b-4  
                            text-main-400
                          "
                        >
                          <h1 class="text-lg">
                            <a
                              class="no-underline hover:underline text-black"
                              href="#"
                            >
                              Applicant Profile
                            </a>
                          </h1>
                          <p class="text-main-400 text-sm">
                            <i class="fa fa-user fa-2x"></i>
                          </p>
                        </header>

                        <div class="grid grid-flow-row auto-rows-max">
                          <div class="flex justify-between px-4 py-1 ">
                            <div>Applicant Name</div>
                            <div class="text-main-400 font-bold">
                              {{
                                (licenseData && licenseData.profile
                                  ? licenseData.profile.name
                                  : "-") +
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
                            <div class="text-main-400 font-bold">
                              {{
                                licenseData && licenseData.applicant
                                  ? licenseData.applicant.emailAddress
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Applicant Phone</div>
                            <div class="text-main-400 font-bold">
                              {{
                                licenseData && licenseData.applicant
                                  ? "+251" + licenseData.applicant.phoneNumber
                                  : "-"
                              }}
                            </div>
                          </div>
                        </div>

                        <footer
                          class="
                            flex
                            items-center
                            justify-between
                            leading-none
                            p-2
                            md:p-4
                          "
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
                      <article class="overflow-hidden rounded-lg  ">
                        <header
                          class="
                            flex
                            items-center
                            justify-between
                            leading-tight
                            p-2
                            md:p-4
                            border-b-4
                            text-main-400
                          "
                        >
                          <h1 class="text-lg">
                            <a
                              class="no-underline hover:underline text-black"
                              href="#"
                            >
                              Reviewer Detail
                            </a>
                          </h1>
                          <p class="text-main-400 text-sm">
                            <i class="fa fa-thumbs-up"></i>
                            <i class="fa fa-thumbs-down"></i>
                          </p>
                        </header>

                        <div class="grid grid-flow-row auto-rows-max">
                          <div class="flex justify-between px-4 py-1">
                            <div>Reviewer Level</div>
                            <div class="text-main-400 font-bold">
                              {{
                                licenseData &&
                                licenseData.licenseReviewer &&
                                licenseData.licenseReviewer.reviewer &&
                                licenseData.licenseReviewer.reviewer.expertLevel
                                  ? licenseData.licenseReviewer.reviewer
                                      .expertLevel.name
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Reviewer Name</div>
                            <div class="text-main-400 font-bold">
                              {{
                                licenseData && licenseData.licenseReviewer
                                  ? licenseData.licenseReviewer.reviewer.name
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Office Phone Number</div>
                            <div class="text-main-400 font-bold">
                              {{
                                licenseData && licenseData.licenseReviewer
                                  ? licenseData.licenseReviewer.reviewer
                                      .phoneNumber
                                  : "-"
                              }}
                            </div>
                          </div>
                        </div>

                        <footer
                          class="
                            flex
                            items-center
                            justify-between
                            leading-none
                            p-2
                            md:p-4
                          "
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
                      <article class="overflow-hidden rounded-lg  ">
                        <header
                          class="
                            flex
                            items-center
                            justify-between
                            leading-tight
                            p-2
                            md:p-4
                            border-b-4
                            text-main-400
                          "
                        >
                          <h1 class="text-lg">
                            <a
                              class="no-underline hover:underline text-black"
                              href="#"
                            >
                              Applicants Education Detail
                            </a>
                          </h1>
                          <p class="text-main-400 text-sm">Active</p>
                        </header>

                        <div
                          class="grid grid-flow-row auto-rows-max"
                          v-for="(education, index) in licenseData.educations"
                          :key="education ? education.id : ''"
                        >
                          <div class="flex justify-between px-4 py-1">
                            <div>Department</div>
                            <div class="text-main-400 font-bold">
                              {{
                                education && education.department
                                  ? education.department.name
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Institution</div>
                            <div class="text-main-400 font-bold">
                              {{
                                education && education.institution
                                  ? education.institution.name
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Education Level</div>
                            <div class="text-main-400 font-bold">
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
                            v-if="index != licenseData.educations.length - 1"
                          />
                        </div>

                        <footer
                          class="
                            flex
                            items-center
                            justify-between
                            leading-none
                            p-2
                            md:p-4
                          "
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
                        <article class="overflow-hidden rounded-lg  ">
                        <header
                          class="
                            flex
                            items-center
                            justify-between
                            leading-tight
                            p-2
                            md:p-4
                            border-b-4
                            text-main-400
                          "
                        >
                          <h1 class="text-lg">
                            <a
                              class="no-underline hover:underline text-black"
                              href="#"
                            >
                              License Detail
                            </a>
                          </h1>
                          <p class="text-main-400 text-sm">Active</p>
                        </header>

                        <div class="grid grid-flow-row auto-rows-max">
                          <div class="flex justify-between px-4 py-1">
                            <div>Applicant Type</div>
                            <div class="text-main-400 font-bold">
                              {{
                                licenseData && licenseData.applicantType
                                  ? licenseData.applicantType.name
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Application Status</div>
                            <div class="text-main-400 font-bold">
                              {{
                                licenseData && licenseData.applicationStatus
                                  ? licenseData.applicationStatus.name
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Certified Status</div>
                            <div class="text-main-400 font-bold">
                              {{
                                licenseData && licenseData.certified
                                  ? "Certified"
                                  : "Not Certified"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Supervision Start Date</div>
                            <div class="text-main-400 font-bold">
                              {{
                                licenseData && licenseData.suspStartDate
                                  ? licenseData.suspStartDate
                                  : "-"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Supervision End Date</div>
                            <div class="text-main-400 font-bold">
                              {{
                                licenseData && licenseData.suspEndDate
                                  ? licenseData.suspEndDate
                                  : "-"
                              }}
                            </div>
                          </div>
                        </div>

                        <footer
                          class="
                            flex
                            items-center
                            justify-between
                            leading-none
                            p-2
                            md:p-4
                          "
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
        <div
          class="
            modal-footer
            flex flex-shrink-0 flex-wrap
            items-center
            justify-end
            border-t border-grey-100
            rounded-b-md
          "
        >
          <button
            type="button"
            class="
             inline-block
              px-6
              text-white
              bg-main-400
              hover:text-main-400 hover:border
              font-semibold
              text-xs
              leading-tight
              uppercase
              rounded
                
              transition
              duration-150
              ease-in-out
            "
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
    let licenseData = ref({});
    let userInfo = ref({});
    let isLoading = ref(false);
    watch(props.modalDataId, () => {
      isLoading.value = true;
      store
        .dispatch("newlicense/getNewLicenseApplication", props.modalDataId.id)
        .then((res) => {
          licenseData.value = res.data.data;
          isLoading.value = false;
        });
    });
    onMounted(() => {
      userInfo.value = JSON.parse(window.localStorage.getItem("personalInfo"));
    });

    return {
      licenseData,
      isLoading,
      googleApi,
      userInfo,
    };
  },
};
</script>
