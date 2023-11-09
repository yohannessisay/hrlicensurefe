<template>
  <!-- Modal -->
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="staticBackdropOthers"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropOthersLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
      <div
        class="modal-content border-none relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div class="modal-header flex flex-shrink-0 justify-end p-2 rounded-t-md">
          <button
            type="button"
            class="px-6 text-white bg-primary-600 hover:text-primary-600 hover:border font-medium text-xs leading-tight uppercase rounded hover:border-primary-600 hover:bg-purple-700 hover: focus:bg-purple-700 focus: focus:outline-none focus:ring-0 active:bg-purple-800 active: transition duration-150 ease-in-out"
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
                <div class="flex justify-center">
                  <div class="text-center lg:max-w-3xl md:max-w-xl">
                    <h2 class="text-2xl font-bold mb-8 px-6">
                      Showing
                      <span class="text-2xl font-bold px-6">
                        {{ modalData.name }}
                      </span>
                      's License Data
                    </h2>
                  </div>
                </div>

                <div class="flex flex-wrap">
                  <div class="grow-0 shrink-0 basis-auto w-full lg:w-11/12">
                    <div class="flex flex-wrap">
                      <div
                        class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6"
                      >
                        <div class="flex items-start">
                          <div class="shrink-0">
                            <div
                              class="p-4 bg-blue-600 rounded-md w-48 h-48 flex mb-12 items-center justify-center"
                            >
                              <picture>
                                <source
                                  :srcset="
                                    modalData.profile && modalData.profile.profilePicture
                                      ? googleApi +
                                        modalData.profile.profilePicture.filePath
                                      : ''
                                  "
                                  type="image/jpg"
                                />

                                <img
                                  src="../../../../../assets/showLicense/profile.png"
                                />
                              </picture>
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <h2 class="font-extrabold text-2xl mb-1">Personal Info</h2>
                            <div class="border-2 p-2 rounded-lg m-1 text-primary-500">
                              <p class="text-gray-500">
                                <span class="font-semibold text-lg text-primary-700 mb-1"
                                  >Full Name:</span
                                >
                                <span class="text-grey-800">
                                  {{ modalData.name }}
                                </span>
                              </p>
                              <p class="text-gray-500">
                                <span class="font-semibold text-primary-700 mb-1"
                                  >Gender:</span
                                >
                                <span class="text-grey-800"> {{ modalData.gender }}</span>
                              </p>
                              <p class="text-gray-500">
                                <span class="font-semibold text-primary-700 mb-1"
                                  >Nationality:</span
                                >
                                <span class="text-grey-800">
                                  {{ modalData.nationality }}
                                </span>
                              </p>
                              <p class="text-gray-500">
                                <span class="font-semibold text-primary-700 mb-1"
                                  >Date Of Birth:</span
                                >
                                <span class="text-grey-800">
                                  {{
                                    modalData.dateOfBirth
                                      ? modalData.dateOfBirth.slice(0, 10)
                                      : ""
                                  }}
                                </span>
                              </p>
                              <p class="text-gray-500">
                                <span class="font-semibold text-primary-700 mb-1"
                                  >marital Status:</span
                                >
                                <span class="text-grey-800">
                                  {{ modalData.maritalStatus }}</span
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6"
                      >
                        <div class="flex items-start">
                          <div class="shrink-0">
                            <div
                              class="p-4 bg-blue-600 rounded-md w-40 h-40 flex items-center justify-center"
                            >
                              <i class="fa fa-phone fa-4x"></i>
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <h2 class="font-bold mb-1 text-2xl">Contact Info</h2>
                            <div class="border-2 p-2 rounded-lg m-1 text-primary-500">
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >Mobile Number:</span
                                >
                                <span class="text-grey-800">
                                  {{ modalData.mobileNumber }}
                                </span>
                              </p>
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >Email:</span
                                >
                                <span class="text-grey-800"> {{ modalData.email }}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6"
                      >
                        <div class="flex items-start">
                          <div class="shrink-0">
                            <div
                              class="p-4 bg-blue-600 rounded-md w-48 h-64 flex items-center justify-center"
                            >
                              <i class="fa fa-building fa-4x"></i>
                            </div>
                          </div>
                          <div class="grow ml-6 mb-4">
                            <h2 class="font-bold mb-1 text-2xl">Education Detail</h2>

                            <div
                              class="border-2 p-2 rounded-lg m-1 text-primary-500"
                              v-for="education in modalData.data
                                ? modalData.data.educations
                                : []"
                              :key="education.id"
                            >
                              <p class="text-gray-500">
                                <span class="font-semibold text-primary-700 mb-1"
                                  >Department:</span
                                >

                                <span class="text-grey-800">
                                  {{
                                    education.department ? education.department.name : ""
                                  }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span class="font-semibold text-primary-700 mb-1"
                                  >Education Level:</span
                                >

                                <span class="text-grey-800">
                                  {{
                                    education.educationLevel
                                      ? education.educationLevel.name
                                      : ""
                                  }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span class="font-semibold text-primary-700 mb-1"
                                  >Profession:</span
                                >

                                <span class="text-grey-800">
                                  {{
                                    education.professionType
                                      ? education.professionType.name
                                      : ""
                                  }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span class="font-semibold text-primary-700 mb-1"
                                  >Institution:</span
                                >
                                <span class="text-grey-800">
                                  {{
                                    education.institution
                                      ? education.institution.name
                                      : ""
                                  }}</span
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6"
                      >
                        <div class="flex items-start">
                          <div class="shrink-0">
                            <div
                              class="p-4 bg-blue-600 rounded-md w-48 h-48 flex items-center justify-center"
                            >
                              <i class="bx bx-certification text-largeDisplay"></i>
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <h2 class="font-bold mb-1 text-xl">License Detail</h2>
                            <p class="text-gray-500">
                              <span class="font-medium text-primary-700 mb-1"
                                >Approved By:</span
                              >
                              {{
                                modalData.data &&
                                modalData.data.renewalReviewer &&
                                modalData.data.renewalReviewer.reviewer
                                  ? modalData.data.renewalReviewer.reviewer.name
                                  : ""
                              }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-medium text-primary-700 mb-1"
                                >Licensed Date:</span
                              >
                              {{
                                modalData.data
                                  ? modalData.data.certifiedDate.slice(0, 10)
                                  : ""
                              }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-medium text-primary-700 mb-1"
                                >Expiration Date:</span
                              >
                              {{
                                modalData.data
                                  ? modalData.data.licenseExpirationDate.slice(0, 10)
                                  : ""
                              }}
                            </p>
                          </div>
                        </div>
                        <div
                          v-if="adminRole == 'ADM'"
                          class="grid grid-cols-4 gap-2 w-full border rounded-md p-2 mt-4"
                        >
                          <button
                            v-if="adminRole != 'REV'"
                            class="inline-block mt-4 px-6 py-2.5 bg-yellow-300 text-white hover:bg-ywhite hover:text-yellow-300 font-medium text-xs leading-tight uppercase rounded focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#suspendLicenseOther"
                          >
                            <i class="fa fa-ban"></i>
                            Suspend
                          </button>

                          <button
                            v-if="adminRole != 'REV'"
                            class="inline-block mt-4 px-6 py-2.5 bg-red-300 hover:text-white hover:bg-white hover:text-red-300 text-white font-medium text-xs leading-tight uppercase rounded focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#revokeLicenseOther"
                          >
                            <i class="fa fa-remove"></i>
                            Revoke
                          </button>

                          <button
                            class="col-span-2 mt-4 inline-block px-6 py-2.5 bg-primary-700 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-primary-600 transition duration-150 ease-in-out"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#generatePdfOther"
                            @click="
                              changePrintType(
                                modalData &&
                                  modalData.data &&
                                  modalData.data.applicantType &&
                                  modalData.data.applicantType.code == 'FOR'
                                  ? 'foreigners'
                                  : ''
                              )
                            "
                          >
                            <i class="fa fa-file-text"></i>
                            Generate License
                          </button>
                          <button
                            class="col-span-2 inline-block mt-4 px-6 py-2.5 bg-grey-500 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-primary-600 transition duration-150 ease-in-out"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#requestStatusOther"
                          >
                            <i class="fa fa-file-archive"></i>
                            Request Status Change
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="collapse mt-12" id="collapseExample">
                      <div class="block p-6 rounded-lg bg-white">
                        <div class="flex justify-content-evenly align-center">
                          <h1>Attached Documents</h1>
                        </div>
                        <div class="grid grid-cols-4 gap-4">
                          <div
                            class="mt-4 mb-8 bg-white"
                            style="border-radius: 15px; padding: 10px"
                            v-for="document in modalData.documents"
                            :key="document.id"
                          >
                            <div class="flex justify-center">
                              <div class="mt-large bg-white">
                                <a
                                  :href="googleApi + document.filePath"
                                  :data-title="
                                    document.documentType
                                      ? document.documentType.name
                                      : ''
                                  "
                                  data-lightbox="example-2"
                                >
                                  <img
                                    :src="googleApi + document.filePath"
                                    class="w-full h-48 object-cover"
                                  />
                                </a>

                                <h4 style="font-weight: bold">Document Type</h4>
                                <h5 class="text-primary-500">
                                  {{
                                    document.documentType
                                      ? document.documentType.name
                                      : ""
                                  }}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end border-t border-grey-100 rounded-b-md"
        >
          <button
            class="inline-block px-6 py-2.5 m-2 bg-blue-600 hover:text-primary-600 hover:border text-white font-medium text-xs leading-tight uppercase rounded hover:bg-blue-700 hover: focus:bg-blue-700 focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Show Attached Documents
          </button>
          <button
            type="button"
            class="inline-block px-6 text-white font-medium text-xs bg-primary-700 leading-tight uppercase rounded hover:border-primary-600 hover:bg-white hover:text-primary-700 transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <generate-pdf :modalData="modalData"></generate-pdf>
  <revoke-license-modal :modalData="modalData"></revoke-license-modal>
  <request-status-change-modal :modalData="modalData"></request-status-change-modal>
  <suspend-license-modal :modalData="modalData"></suspend-license-modal>
</template>
<script>
import { useStore } from "vuex";
import { ref, watch } from "vue";
import moment from "moment";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { googleApi } from "@/composables/baseURL";
import generatePdf from "./generateLicensedPdfOth.vue";
import revokeLicenseModal from "./sharedComponents/byOthers/revokeLicenseModal.vue";
import requestStatusChangeModal from "./sharedComponents/byOthers/requestStatusChange.vue";
import suspendLicenseModal from "./sharedComponents/byOthers/suspendLicenseModal.vue";
export default {
  props: ["modalDataIdOthers"],
  components: {
    Loading,
    generatePdf,
    revokeLicenseModal,
    requestStatusChangeModal,
    suspendLicenseModal,
  },
  computed: {
    moment: () => moment,
  },
  setup(props) {
    const store = useStore();

    let show = ref(true);
    let adminId = +localStorage.getItem("adminId");
    let adminRole = localStorage.getItem("allAdminData")
      ? JSON.parse(localStorage.getItem("allAdminData")).role.code
      : "";
    let adminExpLevel = localStorage.getItem("allAdminData")
      ? JSON.parse(localStorage.getItem("allAdminData")).expertLevel.code
      : "";
    let isLoading = ref(false);
    let reviewerAdminId = ref(0);
    let year = new Date().getFullYear();
    let expirationDate = localStorage.getItem("regionExpDate")
      ? new Date(
          `${
            Number(year) + Number(JSON.parse(localStorage.getItem("regionExpDate")))
          }T00:00`
        ).toISOString()
      : "";
    const showModal = () => {
      show.value = true;
    };
    const changePrintType = (type) => {
      modalData.value.printType = type;
    };

    const modalData = ref({});
    let result = {};

    const check = () => {
      store
        .dispatch("reviewer/getRenewalApplication", props.modalDataIdOthers.id)
        .then((res) => {
          if (
            res.data.status == "Success" &&
            res.data.message != "New licenses total count retrieved successfully!"
          ) {
            result = res.data.data;
            modalData.value.name =
              result.profile.name +
              " " +
              result.profile.fatherName +
              "  " +
              result.profile.grandFatherName;
            modalData.value.gender = result.profile.gender
              ? result.profile.gender
              : "-----";
            modalData.value.nationality = result.profile.nationality
              ? result.profile.nationality.name
              : "-----";
            modalData.value.dateOfBirth = result.profile.dateOfBirth
              ? result.profile.dateOfBirth
              : "-----";
            modalData.value.maritalStatus = result.profile.maritalStatus?.name
              ? result.profile.maritalStatus.name
              : "-----";
            modalData.value.mobileNumber = result.applicant.phoneNumber
              ? result.applicant.phoneNumber
              : "-----";
            modalData.value.email = result.applicant.emailAddress
              ? result.applicant.emailAddress
              : "-----";
            modalData.value.newEducations = result.educations ? result.educations : {};
            modalData.value.profile = result.profile;
            modalData.value.certifiedDate = result.certifiedDate;

            modalData.value.documents = result.documents;
            modalData.value.data = result;
            modalData.value.id = result.id;
            modalData.value.profileImage =
              result.profile && result.profile.profilePicture
                ? googleApi + result.profile.profilePicture.filePath
                : "";
            modalData.value.licenseExpirationDate = expirationDate;
            isLoading.value = false;
          }
        });
    };

    watch(props.modalDataIdOthers, () => {
      isLoading.value = true;
      check();
    });

    return {
      adminId,
      reviewerAdminId,
      showModal,
      check,
      isLoading,
      adminRole,
      adminExpLevel,
      modalData,
      googleApi,
      changePrintType,
    };
  },
};
</script>
