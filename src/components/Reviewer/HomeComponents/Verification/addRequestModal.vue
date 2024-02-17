<template>
  <!-- Modal -->
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="addRequest"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="addRequestLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg relative w-auto pointer-events-none">
      <div
        class="modal-content border-none relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div
          class="modal-header flex flex-shrink-0 justify-end p-2 rounded-t-md"
        >
          <button
            type="button"
            class="px-6 text-white bg-primary-600 hover:text-primary-600 hover:border font-medium text-xs leading-tight uppercase rounded hover:border-primary-600 hover:bg-purple-700 hover: focus:bg-purple-700 focus: focus:outline-none focus:ring-0 active:bg-purple-800 active: transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa fa-close fa-2x"></i>
          </button>
        </div>

        <div class="modal-body relative p-4">
          <div class="vld-parent">
            <loading
              :active="isLoading"
              :is-full-page="false"
              :color="'#2F639D'"
              :opacity="0.7"
            ></loading>
            <div class="container px-6 mx-auto">
              <div class="text-center lg:max-w-3xl md:max-w-xl">
                <h2 class="text-2xl font-bold mb-8 px-6">
                  Add A Verification Request
                </h2>
              </div>
              <div class="grid grid-cols-2 p-2">
                <div class="p-2 mr-2 rounded-lg bg-white">
                  <div class="form-group mb-6">
                    <label for="region" class="ml-4"
                      >Select Application Type</label
                    >
                    <select
                      class="m-4 mt-0 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      v-model="licenseType"
                    >
                      <option value="newLicense">New License</option>
                      <option value="renewal">Renewal</option>
                    </select>
                  </div>
                  <div class="form-group mb-6">
                    <label for="users" class="ml-4">License Code</label>
                    <input
                      type="text"
                      class="shadow form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-4 mt-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="lNumber"
                      :disabled="licenseType == ''"
                      placeholder="License Code"
                      v-model="licenseNumber"
                    />
                    <div class="flex justify-center">
                      <button
                        type="submit"
                        :class="
                          licenseType != ''
                            ? 'px-6 text-white bg-primary-600 hover:text-primary-600 font-medium text-xs leading-tight uppercase rounded   focus:  focus:outline-none focus:ring-0 transition duration-150 mt-0 ease-in-out text-right'
                            : 'px-6 text-white bg-grey-300 hover:text-primary-600 font-medium text-xs leading-tight uppercase rounded   focus:  focus:outline-none focus:ring-0 transition duration-150 mt-0 ease-in-out text-right pointer-events-none'
                        "
                        @click="searchLicense()"
                      >
                        Search License
                      </button>
                    </div>
                  </div>
                </div>
                <div class="vld-parent">
                  <loading
                    :active="searchLoading"
                    :is-full-page="false"
                    :color="'#2F639D'"
                    :opacity="0.7"
                  >
                  </loading>
                  <div class="p-2 rounded-lg bg-white">
                    <h3>License Detail</h3>
                    <div class="grid grid-cols-2">
                      <h2>Applicant Name</h2>
                      <h2 class="text-primary-600">
                        {{
                          licenseData && licenseData.profile
                            ? licenseData.profile.name
                            : "" + " " + licenseData && licenseData.profile
                            ? licenseData.profile.fatherName
                            : "" + " " + licenseData && licenseData.profile
                            ? licenseData.profile.grandFatherName
                            : ""
                        }}
                      </h2>
                    </div>
                    <div class="grid grid-cols-2">
                      <h2>Applicant Email</h2>
                      <h2 class="text-primary-600">
                        {{
                          licenseData && licenseData.applicant
                            ? licenseData.applicant.emailAddress
                            : ""
                        }}
                      </h2>
                    </div>
                    <div class="grid grid-cols-2">
                      <h2>Applicant Phone</h2>
                      <h2 class="text-primary-600">
                        {{
                          licenseData && licenseData.applicant
                            ? licenseData.applicant.phoneNumber
                            : ""
                        }}
                      </h2>
                    </div>
                    <div class="grid grid-cols-2">
                      <h2>Certified Date</h2>
                      <h2 class="text-primary-600">
                        {{
                          licenseData.certifiedDate
                            ? licenseData.certifiedDate.slice(0, 10)
                            : ""
                        }}
                      </h2>
                    </div>
                    <div class="grid grid-cols-2">
                      <h2>Reviewed By</h2>
                      <h2 class="text-primary-600">
                        {{
                          licenseData && licenseData.licenseReviewer
                            ? licenseData.licenseReviewer.reviewer.name
                            : licenseData && licenseData.renewalReviewer
                            ? licenseData.renewalReviewer.reviewer.name
                            : ""
                        }}
                      </h2>
                    </div>
                    <div class="grid grid-cols-2">
                      <h2>Reviewer Phone</h2>
                      <h2 class="text-primary-600">
                        {{
                          licenseData && licenseData.licenseReviewer
                            ? licenseData.licenseReviewer.reviewer.phoneNumber
                            : licenseData && licenseData.renewalReviewer
                            ? licenseData.renewalReviewer.reviewer.phoneNumber
                            : ""
                        }}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <section class="text-gray-800">
                <div class="form-group mb-6">
                  <label for="region" class="ml-4">Region</label>
                  <h2 class="text-base text-primary-600 ml-4">
                    Select the region to which this request will be sent to
                  </h2>
                  <select
                    class="m-4 mt-0 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    :disabled="licenseData && !licenseData.id"
                    v-model="region"
                  >
                    <option
                      v-for="region in allRegions"
                      :key="region.name"
                      :value="region.id"
                    >
                      {{ region.name }}
                    </option>
                  </select>
                </div>
                <div class="flex justify-center">
                  <button
                    type="submit"
                    :class="
                      licenseData && licenseData.id
                        ? 'px-6 text-white bg-primary-600 hover:text-primary-600 font-medium text-xs leading-tight uppercase rounded   focus:  focus:outline-none focus:ring-0 transition duration-150 mt-0 ease-in-out text-right'
                        : 'px-6 text-white bg-grey-300 hover:text-primary-600 font-medium text-xs leading-tight uppercase rounded   focus:  focus:outline-none focus:ring-0 transition duration-150 mt-0 ease-in-out text-right pointer-events-none'
                    "
                    @click="submit()"
                  >
                    Add Request
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div
          class="modal-footer p-2 flex flex-shrink-0 flex-wrap items-center justify-end border-t border-grey-100 rounded-b-md"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { useToast } from "vue-toastification";

export default {
  components: {
    Loading,
  },
  props: ["regions"],
  setup(props) {
    const store = useStore();
    const toast = useToast();
    let users = ref([]);
    let licenseData = ref({});
    let filteredUsers = ref([]);
    let searchInput = ref("");
    let allRegions = computed(() => props.regions);
    let licenseType = ref("");
    let region = ref();
    let searchLoading = ref(false);
    let licenseNumber = ref("");
    let loggedInAdmin = JSON.parse(localStorage.getItem("allAdminData"));

    let showRes = ref(false);
    let showOptions = ref(false);
    const assignedUser = ref({ id: "", name: "" });
    const isLoading = ref(false);

    const searchLicense = () => {
      searchLoading.value = true;
      if (licenseType.value == "newLicense") {
        store
          .dispatch(
            "reviewerNewLicense/getNewLicenseApplicationByCode",
            licenseNumber.value
          )
          .then((res) => {
            licenseData.value =
              res && res.data && res.data.data ? res.data.data : {};
            assignedUser.value = {
              id: licenseData.value.applicantId
                ? licenseData.value.applicantId
                : null,
              name:
                licenseData.value && licenseData.value.profile
                  ? licenseData.value.profile.name
                  : "" + " " + licenseData.value && licenseData.value.profile
                  ? licenseData.value.profile.fatherName
                  : "" + " " + licenseData.value && licenseData.value.profile
                  ? licenseData.value.profile.grandFatherName
                  : "",
            };
            searchLoading.value = false;
          });
      }
      if (licenseType.value == "renewal") {
        store
          .dispatch(
            "reviewerRenewal/getRenewalApplicationByCode",
            licenseNumber.value
          )
          .then((res) => {
            licenseData.value =
              res && res.data && res.data.data ? res.data.data : {};
            assignedUser.value = {
              id: licenseData.value.applicantId
                ? licenseData.value.applicantId
                : null,
              name:
                licenseData.value && licenseData.value.profile
                  ? licenseData.value.profile.name
                  : "" + " " + licenseData.value && licenseData.value.profile
                  ? licenseData.value.profile.fatherName
                  : "" + " " + licenseData.value && licenseData.value.profile
                  ? licenseData.value.profile.grandFatherName
                  : "",
            };
            searchLoading.value = false;
          });
      }
    };

    const submit = () => {
      isLoading.value = true;
      let submittedData = {
        regionId: region.value,
        licenseNumber: licenseNumber.value,
        applicantId: assignedUser.value.id,
        requesterId: loggedInAdmin.id,
      };
      if (licenseType.value == "renewal") {
        submittedData.renewalId = licenseData.value.id;
        submittedData.licenseType = "renewal";
      }
      if (licenseType.value == "newLicense") {
        submittedData.licenseId = licenseData.value.id;
        submittedData.licenseType = "newLicense";
      }
      store
        .dispatch(
          "applicationVerification/saveVerificationRequest",
          submittedData
        )
        .then(
          (res) => {
            if (res.data.status == "Success") {
              isLoading.value = false;
              toast.success("Verification request added Successfully", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });

              setTimeout(() => {
                window.location.reload();
              }, 1000);
            } else {
              isLoading.value = false;

              toast.error(res.data.message, {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
            }
          },
          () => {
            toast.error(
              "Sorry there seems to be a problem, try again later and if problem persists contact system admins.",
              {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              }
            );

            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        );
    };

    return {
      users,
      licenseData,
      licenseType,
      submit,
      allRegions,
      searchInput,
      filteredUsers,
      searchLicense,
      region,
      licenseNumber,
      searchLoading,
      showRes,
      showOptions,
      assignedUser,
      isLoading,
    };
  },
};
</script>
 
