<template>
  <!-- Modal -->
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
      <div
        class="modal-content border-none relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div
          class="modal-header flex flex-shrink-0 justify-end p-2 rounded-t-md"
        >
          <button
            type="button"
            class="px-6 text-white bg-primary-600 hover:text-primary-600 hover:border font-medium text-xs leading-tight uppercase rounded hover:border-primary-600 transition duration-150 ease-in-out"
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
                      's Application
                    </h2>
                  </div>
                </div>

                <div class="flex flex-wrap">
                  <div class="grow-0 shrink-0 basis-auto w-full">
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
                                    modalData.profile &&
                                    modalData.profile.profilePicture
                                      ? googleApi +
                                        modalData.profile.profilePicture
                                          .filePath
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
                            <h2 class="font-extrabold text-2xl mb-1">
                              Personal Info
                            </h2>
                            <div class="border text-primary-600 rounded-lg p-2">
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-lg text-primary-700 mb-1"
                                  >Full Name:</span
                                >
                                <span class="font-semibold text-grey-800 mb-1">
                                  {{ modalData.name }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Gender:</span
                                >
                                <span class="font-semibold text-grey-800 mb-1">
                                  {{ modalData.gender }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Nationality:</span
                                >
                                <span class="font-semibold text-grey-800 mb-1">
                                  {{ modalData.nationality }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Date Of Birth:</span
                                >
                                <span class="font-semibold text-grey-800 mb-1">
                                  {{
                                    modalData.dateOfBirth
                                      ? modalData.dateOfBirth.slice(0, 10)
                                      : ""
                                  }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Marital Status:</span
                                >
                                <span class="font-semibold text-grey-800 mb-1">
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
                              <i class="fa fa-phone fa-4x text-white"></i>
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <h2 class="font-bold mb-1 text-2xl">
                              Contact Info
                            </h2>
                            <div class="border text-primary-600 rounded-lg p-2">
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >Mobile Number:</span
                                >
                                <span class="font-semibold text-grey-800 mb-1">
                                  {{ modalData.mobileNumber }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >Email:</span
                                >
                                <span class="font-semibold text-grey-800 mb-1">
                                  {{ modalData.email }}</span
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
                              class="p-4 bg-blue-600 rounded-md w-48 h-64 flex items-center justify-center"
                            >
                              <i class="fa fa-building fa-4x"></i>
                            </div>
                          </div>
                          <div class="grow ml-6 mb-4">
                            <h2 class="font-bold mb-1 text-2xl">
                              Education Detail
                            </h2>

                            <div
                              class="border-2 p-2 rounded-lg m-1 text-primary-500"
                              v-for="education in modalData.data
                                ? modalData.data.educations
                                : []"
                              :key="education.id"
                            >
                              <p class="">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Department:</span
                                >
                                <span style="color: black">
                                  {{
                                    education.department
                                      ? education.department.name
                                      : ""
                                  }}
                                </span>
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Education Level:</span
                                >
                                <span style="color: black">
                                  {{
                                    education.educationLevel
                                      ? education.educationLevel.name
                                      : ""
                                  }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Profession:</span
                                >
                                <span style="color: black">
                                  {{
                                    education.professionType
                                      ? education.professionType.name
                                      : ""
                                  }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span
                                  class="font-semibold text-primary-700 mb-1"
                                  >Institution:</span
                                >
                                <span style="color: black">
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
                        <label class="font-bold text-lg text-primary-600 mb-1"
                          >Actions</label
                        >
                        <br />
                        <button
                          v-if="adminRole != 'REV'"
                          class="inline-block px-6 py-2.5 bg-yellow-300 text-white hover:bg-ywhite hover:text-yellow-300 font-medium text-xs leading-tight uppercase rounded focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#suspendLicense"
                        >
                          <i class="fa fa-ban"></i>
                          Suspend
                        </button>
                        <button
                          v-if="adminRole != 'REV'"
                          class="inline-block px-6 py-2.5 bg-red-300 hover:text-white hover:bg-white hover:text-red-300 text-white font-medium text-xs leading-tight uppercase rounded focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#revokeLicense"
                        >
                          <i class="fa fa-remove"></i>
                          Revoke
                        </button>
                        <button
                          v-if="showGenerate"
                          class="inline-block px-6 py-2.5 bg-primary-700 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-primary-600 transition duration-150 ease-in-out"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#generatePdf"
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
                          v-if="showPreviousLicense"
                          type="button"
                          class="inline-block px-6 text-white bg-primary-600 font-medium text-xs leading-tight uppercase rounded hover:text-primary-600 hover: focus:bg-purple-700 focus: focus:outline-none focus:ring-0 active:bg-purple-800 active: transition duration-150 ease-in-out"
                          data-bs-toggle="modal"
                          data-bs-target="#returnPreviousLicense"
                        >
                          Return Previous License
                        </button>
                        <button
                          class="inline-block mt-4 px-6 py-2.5 bg-grey-500 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-primary-600 transition duration-150 ease-in-out"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#requestStatus"
                        >
                          <i class="fa fa-file-archive"></i>
                          Request Status Change
                        </button>
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
                            <div
                              v-if="
                                document &&
                                document.fileType &&
                                document.fileType.split('/')[1] == 'pdf'
                              "
                            >
                              <button
                                class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded bg-primary-400 hover:bg-purple-700 hover: focus:bg-purple-700 focus: focus:outline-none focus:ring-0 active:bg-purple-800 active: hover:bg-white hover:text-primary-600"
                                @click="openPdfInNewTab(document.filePath)"
                              >
                                See pdf in detail
                              </button>
                            </div>
                            <div class="flex justify-center" v-else>
                              <div class="mt-large bg-white">
                                <a
                                  :href="
                                    document.filePath
                                      ? googleApi + document.filePath
                                      : ''
                                  "
                                  :data-title="
                                    document.documentType
                                      ? document.documentType.name
                                      : '-----'
                                  "
                                  data-lightbox="example-2"
                                >
                                  <img
                                    :src="
                                      document.filePath
                                        ? googleApi + document.filePath
                                        : ''
                                    "
                                    class="w-full h-48 object-cover"
                                  />
                                </a>

                                <h4 style="font-weight: bold">Document Type</h4>
                                <h5 class="text-primary-500">
                                  {{
                                    document.documentType
                                      ? document.documentType.name
                                      : "------"
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
            class="inline-block px-6 py-2.5 bg-primary-700 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-primary-600 transition duration-150 ease-in-out"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <i class="fa fa-eye"></i>
            Show Attached Documents
          </button>
          <button
            type="button"
            class="inline-block px-6 text-white font-medium text-xs bg-primary-700 leading-tight uppercase rounded hover:bg-white hover:text-primary-700 transition duration-150 ease-in-out"
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
  <suspend-license-modal :modalData="modalData"></suspend-license-modal>
  <request-status-change-modal
    :modalData="modalData"
  ></request-status-change-modal>
  <previous-license
    :previousLicenseData="previousLicenseData"
  ></previous-license>
</template>
<script>
import { useStore } from "vuex";
import { ref, watch } from "vue";
import moment from "moment";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { googleApi } from "@/composables/baseURL";

import generatePdf from "./generateLicensedPdf.vue";
import revokeLicenseModal from "./sharedComponents/byYou/revokeLicenseModal.vue";
import suspendLicenseModal from "./sharedComponents/byYou/suspendLicenseModal.vue";
import previousLicense from "./sharedComponents/byYou/returnPreviousLicense.vue";
import requestStatusChangeModal from "./sharedComponents/byYou/requestStatusChange.vue";

export default {
  props: ["modalDataId"],
  components: {
    Loading,
    generatePdf,
    revokeLicenseModal,
    suspendLicenseModal,
    previousLicense,
    requestStatusChangeModal,
  },
  computed: {
    moment: () => moment,
  },
  setup(props) {
    const store = useStore();
    let adminRole = localStorage.getItem("role");
    let show = ref(true);
    let adminId = +localStorage.getItem("adminId");
    let userId = ref("");
    let isLoading = ref(false);
    let reviewerAdminId = ref(0);
    let showPreviousLicense = ref(false);
    const showModal = () => {
      show.value = true;
    };
    let pdfFilePath = ref("");
    let showGenerate = ref(false);
    let previousLicenseData = ref([]);
    const modalData = ref({ educations: [] });
    let result = {};
    let toBeGeneratedProfs = [];
    let regionExpDate = localStorage.getItem("regionExpDate")
      ? JSON.parse(localStorage.getItem("regionExpDate"))
      : "";
    const changePrintType = (type) => {
      modalData.value.printType = type;
    };
    const openPdfInNewTab = (pdfPath) => {
      pdfFilePath.value = pdfPath;
      window.open(googleApi + "" + pdfPath, "_blank");
    };
    const check = () => {
      modalData.value = {};
      store
        .dispatch("reviewer/getRenewalApplication", props.modalDataId.id)
        .then((res) => {
          if (res.data.status == "Success") {
            result = res.data.data;
            let tempEvaluateResult = 0;

            userId.value = result.profile ? result.profile.userId : "";
            store
              .dispatch("reviewerRenewal/getRenewalByUserId", userId.value)
              .then((res) => {
                let tempEd = [];
                if (res.data && res.data.data && res.data.data.length > 0) {
                  res.data.data.forEach((element) => {
                    if (
                      element &&
                      element.isLicenseGenerated == true &&
                      element.isReprint == false &&
                      element.applicationStatus.code == "APP"
                    ) {
                      previousLicenseData.value.push(element);
                      tempEvaluateResult++;
                    }
                    if (
                      element &&
                      element.isLicenseGenerated == true &&
                      element.applicationStatus.code == "RTN"
                    ) {
                      tempEd.push([...new Set(element.educations)]);
                    }
                  });
                  tempEd.forEach((element) => {
                    if (element.length < 2) {
                      toBeGeneratedProfs.push(element[0]);
                    } else {
                      element.forEach((element) => {
                        toBeGeneratedProfs.push(element);
                      });
                    }
                  });
                  modalData.value.previousEducations = [
                    ...new Set(toBeGeneratedProfs),
                  ];
                  if (tempEvaluateResult > 1) {
                    showGenerate.value = false;
                    showPreviousLicense.value = true;
                  } else {
                    showGenerate.value = true;
                    showPreviousLicense.value = false;
                  }
                } else {
                  showGenerate.value = true;
                  showPreviousLicense.value = false;
                }

                if (toBeGeneratedProfs.length == 0) {
                  modalData.value.educations = result.educations;
                }
              })

              .catch((err) => console.log(err));

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
            modalData.value.newEducations = result.educations
              ? result.educations
              : {};
            modalData.value.profile = result.profile;
            modalData.value.certifiedDate = result.certifiedDate;

            modalData.value.documents = result.documents;
            modalData.value.data = result;
            modalData.value.id = result.id;
            modalData.value.profileImage =
              result.profile && result.profile.profilePicture
                ? googleApi + result.profile.profilePicture.filePath
                : "";
            const inputDate = new Date(result.certifiedDate);
            inputDate.setFullYear(inputDate.getFullYear() + regionExpDate);
            modalData.value.licenseExpirationDate = inputDate.toISOString();
            isLoading.value = false;
          }
        });
    };

    watch(props.modalDataId, () => {
      isLoading.value = true;
      check();
    });

    return {
      adminId,
      reviewerAdminId,
      showModal,
      showGenerate,
      showPreviousLicense,
      previousLicenseData,
      check,
      isLoading,
      modalData,
      googleApi,
      adminRole,
      openPdfInNewTab,
      pdfFilePath,
      changePrintType,
    };
  },
};
</script>
