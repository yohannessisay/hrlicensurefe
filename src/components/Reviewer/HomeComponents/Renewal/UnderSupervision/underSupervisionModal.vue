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
        class="modal-content border-none   relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div class="modal-header flex flex-shrink-0 justify-end p-2 rounded-t-md">
          <button
            type="button"
            class="px-6 text-white bg-primary-600 hover:text-primary-600 hover:border font-medium text-xs leading-tight uppercase rounded hover:border-primary-600   hover:bg-purple-700 hover:  focus:bg-purple-700 focus:  focus:outline-none focus:ring-0 active:bg-purple-800 active:  transition duration-150 ease-in-out"
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
                  <div class="grow-0 shrink-0 basis-auto w-full">
                    <div class="flex flex-wrap">
                      <div
                        class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6"
                      >
                        <div class="flex items-start">
                          <div class="shrink-0">
                            <div
                              class="p-4 bg-blue-600 rounded-md   w-48 h-48 flex mb-12 items-center justify-center"
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
                            <p class="text-gray-500">
                              <span class="font-semibold text-lg text-primary-700 mb-1"
                                >Full Name:</span
                              >
                              {{ modalData.name }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-semibold text-primary-700 mb-1"
                                >Gender:</span
                              >
                              {{ modalData.gender }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-semibold text-primary-700 mb-1"
                                >Nationality:</span
                              >
                              {{ modalData.nationality }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-semibold text-primary-700 mb-1"
                                >Date Of Birth:</span
                              >
                              {{
                                modalData.dateOfBirth
                                  ? modalData.dateOfBirth.slice(0, 10)
                                  : ""
                              }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-semibold text-primary-700 mb-1"
                                >marital Status:</span
                              >
                              {{ modalData.maritalStatus }}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6"
                      >
                        <div class="flex align-center">
                          <div class="shrink-0">
                            <div
                              class="p-4 bg-blue-600 rounded-md   w-40 h-40 flex items-center justify-center"
                            >
                              <i class="fa fa-building fa-4x"></i>
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <h2 class="font-bold mb-1">Institution Info</h2>
                            <p class="text-gray-500">
                              <span class="font-medium text-primary-700 mb-1"
                                >Institution Name:</span
                              >
                              {{ modalData.instName }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-medium text-primary-700 mb-1"
                                >Department:</span
                              >
                              {{ modalData.department }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-medium text-primary-700 mb-1"
                                >Institution Type:</span
                              >
                              {{ modalData.instType }}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6"
                      >
                        <div class="flex items-start">
                          <div class="shrink-0">
                            <div
                              class="p-4 bg-blue-600 rounded-md   w-40 h-40 flex items-center justify-center"
                            >
                              <i class="fa fa-phone fa-4x"></i>
                            </div>
                          </div>
                          <div class="grow ml-6">
                            <h2 class="font-bold mb-1">Contact Info</h2>
                            <p class="text-gray-500">
                              <span class="font-medium text-primary-700 mb-1"
                                >Mobile Number:</span
                              >
                              {{ modalData.mobileNumber }}
                            </p>
                            <p class="text-gray-500">
                              <span class="font-medium text-primary-700 mb-1"
                                >Email:</span
                              >
                              {{ modalData.email }}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div
                        class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6"
                      >
                        <button
                          class="inline-block px-6 py-2.5 bg-yellow-300 hover:text-primary-600 hover:border text-white font-medium text-xs leading-tight uppercase rounded   hover:bg-blue-700 hover:  focus:bg-blue-700 focus:  focus:outline-none focus:ring-0 active:bg-blue-800 active:  transition duration-150 ease-in-out"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#printSupervision"
                          aria-expanded="false"
                          aria-controls="printSupervision"
                        >
                          Print Letter
                        </button>
                        <button
                          class="inline-block px-6 py-2.5 bg-blue-600 hover:text-primary-600 hover:border text-white font-medium text-xs leading-tight uppercase rounded   hover:bg-blue-700 hover:  focus:bg-blue-700 focus:  focus:outline-none focus:ring-0 active:bg-blue-800 active:  transition duration-150 ease-in-out"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          Show Attached Documents
                        </button>
                      </div>
                    </div>

                    <div class="collapse mt-12" id="collapseExample">
                      <div class="block p-6 rounded-lg   bg-white">
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
                                      : '-----'
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
            type="button"
            class="inline-block px-6 text-white font-medium text-xs bg-primary-700 leading-tight uppercase rounded hover:border-primary-600   hover:bg-white hover:text-primary-700 transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="printSupervision"
    tabindex="-1"
    aria-labelledby="printSupervisionModalTitle"
    aria-modal="true"
    role="dialog"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-lg relative w-auto pointer-events-none"
    >
      <div
        class="modal-content border-none   relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div
          class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-grey-100 rounded-t-md"
        >
          <h5
            class="text-xl font-medium leading-normal text-gray-800"
            id="superviseModalLabel"
          >
            Supervision Letter Detail
          </h5>
          <button
            type="button"
            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            data-bs-dismiss="modal"
            aria-label="Close"
            style="min-height: 28px; min-width: 28px"
          ></button>
        </div>

        <div class="container   rounded-lg" contenteditable="true">
          <div class="px-8 m-4" id="printSupervisionModal">
            <div class="grid grid-cols-2 mb-8 mt-48">
              <div class="flex justify-start" contenteditable="false">
                <img :src="qrSrc" alt="" style="height: 150px; width: 150px" />
              </div>
            </div>

            <h5 class="mt-4 px-8">ለ________________________</h5>
            <h5 class="mt-4 px-8">አዲስ አበባ</h5>

            <p class="mt-8 px-8" style="letter-spacing: 2px">
              ከዚህ በታች
              {{
                modalData &&
                modalData.data &&
                modalData.data.profile &&
                modalData.data.profile.gender == "male"
                  ? "ስሙ "
                  : "ስሟ "
              }}
              በሰንጠረዥ የተመለከቱት ባለሙያ በቻይና ሀገር ከሚገኘው
              {{
                modalData.data && modalData.data.supervisingInstitution
                  ? modalData.data.supervisingInstitution.name
                  : ""
              }}
              የህክምና
              {{
                modalData &&
                modalData.data &&
                modalData.data.profile &&
                modalData.data.profile.gender == "male"
                  ? "ትምህርቱን ሲከታተል ቆይቶ"
                  : "ትምህርቷን ስትከታተል ቆይታ"
              }}
              ኢንተርንሽፕ ሀገር ውስጥ ለመስራት በቀን17/03/2013ዓ.ም ባቀረቡት ማመልከቻ ጠይቀዋል፡፡ በዚህም መሠረት ጉዳያቸው በ
              __/__/__ ዓ.ም ቀርቦ ከታየ ከተገመገመ በኃላ To Work Rotating Medical Intern for One
              Years በሚል ፀድቆቸው ተመዝገበዋል፡፡ ስለዚህም ልምምዱን ከ 18/3/2013ዓ.ም ጀምሮ ለአንድ አመት እንዲከታተሉ
              የተመደቡ መሆኑን እየገለጽን ሆስፒታሉ በአንድ አመት መጨረሻ አስፈላጊውን ሁሉ በመፈጸም
              {{
                modalData &&
                modalData.data &&
                modalData.data.profile &&
                modalData.data.profile.gender == "male"
                  ? "የባለሙያዉን "
                  : "የባለሙያዋን"
              }}
              ውጤቱን እንድታሳውቁን እንጠይቃለን፡፡
            </p>

            <div class="grid justify-items-center mt-8">
              <table class="border text-center text-sm font-light">
                <thead class="border-b font-medium bg-primary-200">
                  <tr>
                    <th scope="col" class="border-r px-6 py-4">#ተ.ቁ</th>
                    <th scope="col" class="border-r px-6 py-4 dark:border-neutral-500">
                      የስም ዝርዝር
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b dark:border-neutral-500">
                    <td
                      class="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500"
                    >
                      1
                    </td>
                    <td
                      contenteditable="false"
                      class="whitespace-nowrap border-r px-6 py-4"
                    >
                      <span class="text-yellow-300">
                        {{ modalData && modalData.name ? modalData.name : "" }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5 class="mt-8 mb-48 text-right">//ከሰላምታ ጋር//</h5>
          </div>
        </div>

        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-1 border-t border-grey-100 rounded-b-md"
        >
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-primary-700 text-white font-medium text-xs leading-tight uppercase rounded   hover:bg-white hover:text-primary-600 transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            class="inline-block px-6 py-2.5 bg-primary-700 text-white font-medium text-xs leading-tight uppercase rounded   hover:bg-white hover:text-primary-600 transition duration-150 ease-in-out"
            @click="print()"
          >
            Print
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
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { googleApi } from "@/composables/baseURL";
import html2pdf from "html2pdf.js";
import STATIC_CERTIFICATE_URL from "../../../../../sharedComponents/constants/message.js";
export default {
  props: ["modalDataId"],
  components: {
    Loading,
  },
  computed: {
    moment: () => moment,
  },
  emits: ["refreshTable"],
  setup(props) {
    const store = useStore();
    let qrSrc = ref("");
    let show = ref(true);
    let adminId = +localStorage.getItem("adminId");

    let isLoading = ref(false);
    const licenseData = ref({});
    let reviewerAdminId = ref(0);

    const showModal = () => {
      show.value = true;
    };

    const onCancel = () => {
      isLoading.value = false;
    };
    const modalData = ref({});
    let result = {};
    const print = async () => {
      var data = document.getElementById("printSupervisionModal");
      const staticUrl = STATIC_CERTIFICATE_URL;
      const userId = modalData.value.data.profile.id;
      const applicationId = modalData.value.data.id;
      const applicationType = "Renewal";

      const qrParam = { url: null };

      qrParam.url =
        staticUrl + "/" + applicationType + "/" + userId + "/" + applicationId;
      store
        .dispatch("reviewer/getQrCode", qrParam)
        .then((res) => {
          qrSrc.value = res.data.data;
        })
        .finally(async () => {
          var element = data;
          var opt = {
            margin: 1,
            filename: "myfile.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { orientation: "p", unit: "mm", format: "a4" },
          };

          html2pdf()
            .set(opt)
            .from(element)
            .save(
              modalData.value.data &&
                modalData.value.data.profile &&
                modalData.value.data.profile.name
                ? modalData.value.data.profile.name +
                    " " +
                    new Date().toISOString().slice(0, 10)
                : ""
            )
            .then(() => {
              document.getElementById("applicantCopyHeader").style.display = "none";
              document.getElementById("applicantCopyFooter").style.display = "none";
              html2pdf()
                .set(opt)
                .from(document.getElementById("printSupervisionModal"))
                .save(
                  modalData.value.data &&
                    modalData.value.data.profile &&
                    modalData.value.data.profile.name
                    ? modalData.value.data.profile.name +
                        " " +
                        new Date().toISOString().slice(0, 10)
                    : ""
                );
            });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const check = () => {
      store
        .dispatch("reviewer/getRenewalApplication", props.modalDataId.id)
        .then((res) => {
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
          licenseData.value = result;
          modalData.value.documents = result.documents;
          isLoading.value = false;
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
      print,
      check,
      isLoading,
      onCancel,
      modalData,
      googleApi,
      qrSrc,
    };
  },
};
</script>
 
