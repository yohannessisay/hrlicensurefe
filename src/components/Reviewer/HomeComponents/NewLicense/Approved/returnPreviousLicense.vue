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
    id="returnPreviousLicense"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="returnPreviousLicenseLabel"
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
          shadow-lg
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
              bg-primary-600
              hover:text-primary-600 hover:border
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              hover:border-primary-600
              shadow-lg
              hover:bg-purple-700 hover:shadow-lg
              focus:bg-purple-700
              focus:shadow-lg
              focus:outline-none
              focus:ring-0
              active:bg-purple-800 active:shadow-lg
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
            :color="'#2F639D'"
            :opacity="1"
          ></loading>
          <div class="modal-body relative p-4">
            <div class="container px-6 mx-auto">
              <section class="text-gray-800">
                <div class="flex justify-center border-b-4 text-primary-600">
                  <div class="text-center lg:max-w-3xl md:max-w-xl">
                    <h2 class="text-2xl font-bold mb-8 px-6">
                      Previous License/s Detail
                    </h2>
                  </div>
                </div>

                <div
                  class="container my-12 mx-auto px-4 md:px-12 border-b" 
                >
                  <div class="flex flex-wrap -mx-1 lg:-mx-4">
                    <!-- Column -->
                    <div
                      class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                    >
                      <!-- Article -->
                      <article class="overflow-hidden rounded-lg shadow-lg">
                        <header
                          class="
                            flex
                            items-center
                            justify-between
                            leading-tight
                            p-2
                            md:p-4
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
                          <p class="text-primary-600 text-sm">
                            <i class="fa fa-user fa-2x"></i>
                          </p>
                        </header>

                        <div class="grid grid-flow-row auto-rows-max">
                          <div class="flex justify-between px-4 py-1">
                            <div>Applicant Name</div>
                            <div class="text-primary-600 font-bold">
                              {{
                                (licenseData&&licenseData.profile
                                  ? licenseData.profile.name
                                  : "") +
                                " " +
                                (licenseData&&licenseData.profile
                                  ? licenseData.profile.fatherName
                                  : "") +
                                " " +
                                (licenseData&&licenseData.profile
                                  ? licenseData.profile.grandFatherName
                                  : "")
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Applicant Email</div>
                            <div class="text-primary-600 font-bold">
                              {{
                                licenseData&&licenseData.applicant
                                  ? licenseData.applicant.emailAddress
                                  : ""
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Applicant Phone</div>
                            <div class="text-primary-600 font-bold">
                              {{
                                licenseData&&licenseData.applicant
                                  ? "+251" + licenseData.applicant.phoneNumber
                                  : ""
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
                      <article class="overflow-hidden rounded-lg shadow-lg">
                        <header
                          class="
                            flex
                            items-center
                            justify-between
                            leading-tight
                            p-2
                            md:p-4
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
                          <p class="text-primary-600 text-sm">
                            <i class="fa fa-thumbs-up"></i>
                            <i class="fa fa-thumbs-down"></i>
                          </p>
                        </header>

                        <div class="grid grid-flow-row auto-rows-max">
                          <div class="flex justify-between px-4 py-1">
                            <div>Reviewer Level</div>
                            <div class="text-primary-600 font-bold">
                              {{
                                licenseData &&
                                licenseData.licenseReviewer &&
                                licenseData.licenseReviewer.reviewer &&
                                licenseData.licenseReviewer.reviewer.expertLevel
                                  ? licenseData.licenseReviewer.reviewer
                                      .expertLevel.name
                                  : ""
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Reviewer Name</div>
                            <div class="text-primary-600 font-bold">
                              {{
                                licenseData&& licenseData.licenseReviewer
                                  ? licenseData.licenseReviewer.reviewer.name
                                  : ""
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Phone Number</div>
                            <div class="text-primary-600 font-bold">
                              {{
                                licenseData&&licenseData.licenseReviewer
                                  ? licenseData.licenseReviewer.reviewer
                                      .phoneNumber
                                  : ""
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
                      v-for="education in licenseData.educations"
                      :key="education?education.id:''"
                      class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                    >
                      <!-- Article -->
                      <article class="overflow-hidden rounded-lg shadow-lg">
                        <header
                          class="
                            flex
                            items-center
                            justify-between
                            leading-tight
                            p-2
                            md:p-4
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
                          <p class="text-primary-600 text-sm">Active</p>
                        </header>

                        <div class="grid grid-flow-row auto-rows-max">
                          <div class="flex justify-between px-4 py-1">
                            <div>Department</div>
                            <div class="text-primary-600 font-bold">
                              {{
                                education&& education.department
                                  ? education.department.name
                                  : ""
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Institution</div>
                            <div class="text-primary-600 font-bold">
                              {{
                                education&&education.institution
                                  ? education.institution.name
                                  : ""
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Education Level</div>
                            <div class="text-primary-600 font-bold">
                              {{
                                education&&education.educationLevel
                                  ? education.educationLevel.name
                                  : ""
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
                      <article class="overflow-hidden rounded-lg shadow-lg">
                        <header
                          class="
                            flex
                            items-center
                            justify-between
                            leading-tight
                            p-2
                            md:p-4
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
                          <p class="text-primary-600 text-sm">Active</p>
                        </header>

                        <div class="grid grid-flow-row auto-rows-max">
                          <div class="flex justify-between px-4 py-1">
                            <div>Applicant Type</div>
                            <div class="text-primary-600 font-bold">
                              {{
                                licenseData&&licenseData.applicantType
                                  ? licenseData.applicantType.name
                                  : ""
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Application Status</div>
                            <div class="text-primary-600 font-bold">
                              {{
                                licenseData&&licenseData.applicationStatus
                                  ? licenseData.applicationStatus.name
                                  : ""
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Certified Status</div>
                            <div class="text-primary-600 font-bold">
                              {{
                                licenseData&& licenseData.certified
                                  ? "Certified"
                                  : "Not Certified"
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Certified Date</div>
                            <div class="text-primary-600 font-bold">
                              {{
                                licenseData&& licenseData.applicationStatus
                                  ? licenseData.applicationStatus.name
                                  : ""
                              }}
                            </div>
                          </div>
                          <div class="flex justify-between px-4 py-1">
                            <div>Expiration Date</div>
                            <div class="text-primary-600 font-bold">
                              {{
                                licenseData&& licenseData.applicationStatus
                                  ? licenseData.applicationStatus.name
                                  : ""
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
              bg-primary-600
              hover:text-primary-600 hover:border
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              hover:border-primary-600
              shadow-lg
              hover:bg-purple-700 hover:shadow-lg
              focus:bg-purple-700
              focus:shadow-lg
              focus:outline-none
              focus:ring-0
              active:bg-purple-800 active:shadow-lg
              transition
              duration-150
              ease-in-out
            "
            @click="returnLicense()"
          >
            Return
          </button>
          <button
            type="button"
            class="
              inline-block
                  px-6
              text-white
              bg-primary-600
              hover:text-primary-600 hover:border
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              hover:border-primary-600
              shadow-lg
              hover:bg-purple-700 hover:shadow-lg
              focus:bg-purple-700
              focus:shadow-lg
              focus:outline-none
              focus:ring-0
              active:bg-purple-800 active:shadow-lg
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
import { useStore } from "vuex";
import { ref, watch } from "vue";
import moment from "moment";
// Import stylesheet
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

import Loading from "vue3-loading-overlay";

import { useToast } from "vue-toastification";

export default {
  props: ["previousLicenseData"],
  components: { Loading },
  computed: {
    moment: () => moment,
  },
  setup(props) {
    const store = useStore();
    const toast = useToast();
    let licenseData = ref({});
    let isLoading = ref(false);

    const returnLicense = () => {
      isLoading.value = true;
      let action =
        licenseData.value &&
        licenseData.value.applicationStatus &&
        licenseData.value.applicationStatus.buttons
          ? licenseData.value.applicationStatus.buttons.filter(
              (button) => button.code == "RTN"
            )
          : "";
      let req = {
        action: action ? action[0].action : null,
        data: licenseData.value,
      };

      store
        .dispatch("reviewer/editNewLicense", req)
        .then((res) => {
          if (res.statusText == "Created") {
            isLoading.value = true;
            toast.success("Application returned Successfully", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            setTimeout(() => {
              window.location.reload()
            }, 3000);
           
          } else {
            isLoading.value = true;
            toast.error("Please try again", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            setTimeout(() => {
              window.location.reload()
            }, 3000);
          }
        })
        .catch(() => {
          isLoading.value = true;
          toast.error("Please try again", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
          setTimeout(() => {
              window.location.reload()
            }, 3000);
        });
    };
    watch(props.previousLicenseData, () => {
      if (props.previousLicenseData) { 
        let toBeReturned = [];
 
        toBeReturned = Math.min(
          ...props.previousLicenseData.map((item) =>
            Date.parse(item.certifiedDate)
          )
        );
        let toBeReturnedDate = new Date(toBeReturned).toISOString();
        toBeReturned = props.previousLicenseData.filter(
          (element) => element.certifiedDate == toBeReturnedDate
        );

        store
          .dispatch(
            "reviewerNewLicense/getNewLicenseApplicationById",
            toBeReturned && toBeReturned[0] ? toBeReturned[0].id : ""
          )
          .then((res) => { 
            licenseData.value = res.data.data;
          })
          .catch((err) => console.log(err));
      }
    });
    return {
      returnLicense,
      isLoading,
      licenseData,
    };
  },
};
</script>

<style scoped>
.shadow-lg {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 34%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
</style>
