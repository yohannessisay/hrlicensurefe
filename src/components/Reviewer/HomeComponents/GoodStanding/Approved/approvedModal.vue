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
                              <img
                                src="../../../../../assets/showLicense/profile.png"
                                alt=""
                                style="height: 152px; width: 150px"
                              />
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <h2 class="font-extrabold text-2xl mb-1">Personal Info</h2>

                            <div class="border-2 p-2 rounded-lg m-1 text-primary-500">
                              <p class="text-gray-500">
                                <span class="font-semibold text-lg text-primary-700 mb-1"
                                  >Full Name:</span
                                >
                                <span class="text-grey-800 ml-2">{{
                                  modalData.name ? modalData.name : ""
                                }}</span>
                              </p>
                              <p class="text-gray-500">
                                <span class="font-semibold text-primary-700 mb-1"
                                  >Gender:</span
                                >
                                <span class="text-grey-800 ml-2">{{
                                  modalData.gender ? modalData.gender : ""
                                }}</span>
                              </p>
                              <p class="text-gray-500">
                                <span class="font-semibold text-primary-700 mb-1"
                                  >Nationality:</span
                                >
                                <span class="text-grey-800 ml-2">
                                  {{
                                    modalData.nationality ? modalData.nationality : ""
                                  }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span class="font-semibold text-primary-700 mb-1"
                                  >Date Of Birth:</span
                                >
                                <span class="text-grey-800 ml-2">
                                  {{
                                    modalData.dateOfBirth
                                      ? modalData.dateOfBirth.slice(0, 10)
                                      : ""
                                  }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span class="font-semibold text-primary-700 mb-1"
                                  >Marital Status:</span
                                >
                                <span class="text-grey-800 ml-2">
                                  {{
                                    modalData.maritalStatus ? modalData.maritalStatus : ""
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
                        <div class="flex align-center">
                          <div class="shrink-0">
                            <div
                              class="p-4 bg-blue-600 rounded-md w-48 h-48 flex items-center justify-center"
                            >
                              <i class="fa fa-building fa-4x"></i>
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <h2 class="font-bold mb-1">Education Info</h2>
                            <div class="border-2 p-2 rounded-lg m-1 text-primary-500">
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >Profession Name:</span
                                >
                                <span class="text-grey-800 ml-2">
                                  {{
                                    modalData.data &&
                                    modalData.data.GSProfessionals &&
                                    modalData.data.GSProfessionals.professionalTypes
                                      ? modalData.data.GSProfessionals.professionalTypes
                                          .name
                                      : ""
                                  }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >Department:</span
                                >
                                <span class="text-grey-800 ml-2">
                                  {{
                                    modalData.data && modalData.data.department
                                      ? modalData.data.department.name
                                      : ""
                                  }}</span
                                >
                              </p>
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >Education Level:</span
                                >
                                <span class="text-grey-800 ml-2">
                                  {{
                                    modalData.data &&
                                    modalData.data.GSProfessionals &&
                                    modalData.data.GSProfessionals.educationLevel
                                      ? modalData.data.GSProfessionals.educationLevel.name
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
                              <i class="fa fa-phone fa-4x"></i>
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <h2 class="font-bold mb-1">Contact Info</h2>
                            <div class="border-2 p-2 rounded-lg m-1 text-primary-500">
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >Mobile Number:</span
                                >
                                <span class="text-grey-800 ml-2">{{
                                  modalData.mobileNumber
                                }}</span>
                              </p>
                              <p class="text-gray-500">
                                <span class="font-medium text-primary-700 mb-1"
                                  >Email:</span
                                >
                                <span class="text-grey-800 ml-2">{{
                                  modalData.email
                                }}</span>
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
                          class="inline-block px-6 py-2.5 bg-primary-700 hover:text-primary-600 hover:bg-white hover:border text-white font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#generatePdf"
                        >
                          <i class="fa fa-file-text"></i>
                          Generate PDF
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
                                    document.filePath ? googleApi + document.filePath : ''
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
          class="modal-footer p-2 flex flex-shrink-0 flex-wrap items-center justify-end border-t border-grey-100 rounded-b-md"
        >
          <button
            class="inline-block px-6 py-2.5 bg-primary-700 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-primary-600 transition duration-150 ease-in-out"
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
            class="inline-block px-6 text-white font-medium text-xs bg-primary-700 leading-tight uppercase rounded hover:bg-white hover:text-primary-700 transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <generate-pdf :modalDataGenerate="modalDataGenerate"></generate-pdf> 
  <request-status-change-modal :modalData="modalData"></request-status-change-modal>
</template>
<script>
import { useStore } from "vuex";
import { ref, watch } from "vue";
import moment from "moment";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { googleApi } from "@/composables/baseURL";
import generatePdf from "./generateLicensedPdf.vue"; 
import requestStatusChangeModal from "./requestStatusChange.vue";
export default {
  props: ["modalDataId"],
  components: {
    Loading,
    generatePdf, 
    requestStatusChangeModal,
  },
  computed: {
    moment: () => moment,
  },
  setup(props) {
    const store = useStore();

    let show = ref(true);
    let adminId = +localStorage.getItem("adminId");
    let adminRole = localStorage.getItem("role");
    let isLoading = ref(false);
    let reviewerAdminId = ref(0);
    const modalDataGenerate = ref({});
    const showModal = () => {
      show.value = true;
    };
    let pdfFilePath = ref("");
    const modalData = ref({});
    let result = {};
    const openPdfInNewTab = (pdfPath) => {
      pdfFilePath.value = pdfPath;
      window.open(googleApi + "" + pdfPath, "_blank");
    };
    const check = () => {
      store
        .dispatch("reviewer/getGoodStandingApplication", props.modalDataId.id)
        .then((res) => {
          if (res.data.status == "Success") {
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
            modalData.value.nationality = result.profile.nationality?.name
              ? result.profile.nationality?.name
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

            modalData.value.profile = result.profile;
            modalData.value.professionalTypes = result.licenseProfessions;
            modalData.value.certifiedDate = result.certifiedDate;
            modalData.value.licenseExpirationDate = result.licenseExpirationDate;

            modalData.value.data = result;

            modalData.value.documents = result.documents;
            modalDataGenerate.value = result;
            modalDataGenerate.value.withExperiance = false;

            result && result.documents
              ? result.documents.forEach((element) => {
                  if (element.documentTypeCode == "WESLFO") {
                    modalDataGenerate.value.withExperiance = true;
                  }
                })
              : "";
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
      adminRole,
      reviewerAdminId,
      showModal,
      check,
      isLoading,
      modalData,
      openPdfInNewTab,
      pdfFilePath,
      googleApi,
      modalDataGenerate,
    };
  },
};
</script>
