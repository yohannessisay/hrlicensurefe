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
          :class="
            isDarkMode
              ? 'modal-header flex flex-shrink-0 justify-end rounded-t-md bg-grey-500 shadow-md p-1'
              : 'modal-header flex flex-shrink-0 justify-end rounded-t-md  shadow-md p-1'
          "
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
                  <h1 class="sm:text-3xl text-2xl font-bold mb-2">
                    {{ $t(detailPageName) }} {{ $t("License Detail") }}
                  </h1>
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
                        class="overflow-hidden rounded-lg shadow-md p-2 break-all"
                      >
                        <header
                          class="flex items-center justify-between leading-tight p-2 mb-2 border-b-4"
                        >
                          <h2 class="text-xl">{{ $t("Applicant Profile") }}</h2>
                          <p class="text-sm">
                            <i class="fa fa-user fa-2x"></i>
                          </p>
                        </header>

                        <div class="grid grid-cols-2 gap-2">
                          <h2 class="text-xl">{{ $t("Applicant Name") }}</h2>
                          <h3
                            :class="
                              isDarkMode
                                ? 'text-green-200 text-lg'
                                : 'text-grey-800 text-lg'
                            "
                          >
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

                          <h2 class="text-xl">{{ $t("Applicant Email") }}</h2>
                          <h2
                            :class="
                              isDarkMode
                                ? 'text-green-200 text-lg'
                                : 'text-grey-800 text-lg'
                            "
                          >
                            {{
                              licenseData && licenseData.applicant
                                ? licenseData.applicant.emailAddress
                                : "-"
                            }}
                          </h2>

                          <h2 class="text-xl">{{ $t("Applicant Phone") }}</h2>
                          <h2
                            :class="
                              isDarkMode
                                ? 'text-green-200 text-lg break-words '
                                : 'text-grey-800 text-lg break-words'
                            "
                          >
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
                        class="overflow-hidden rounded-lg shadow-md p-2 break-all sm:mt-0 mt-4"
                      >
                        <header
                          class="flex items-center justify-between leading-tight p-2 mb-2 border-b-4"
                        >
                          <h2 class="text-lg">{{ $t("Reviewer Detail") }}</h2>
                          <p class="text-sm">
                            <i class="fa fa-thumbs-up fa-2x"></i>
                          </p>
                        </header>
                        <div class="grid grid-cols-2 gap-2">
                          <h2 class="text-xl">{{ $t("Reviewer Name") }}</h2>
                          <h2
                            :class="
                              isDarkMode
                                ? 'text-green-200 text-lg break-words '
                                : 'text-grey-800 text-lg break-words'
                            "
                          >
                            {{
                              licenseData && licenseData.licenseReviewer
                                ? licenseData.licenseReviewer.reviewer.name
                                : licenseData && licenseData.renewalReviewer
                                ? licenseData.renewalReviewer.reviewer.name
                                : licenseData &&
                                  licenseData.goodstandingReviewer
                                ? licenseData.goodstandingReviewer.reviewer.name
                                : "Not Assigned Yet"
                            }}
                          </h2>

                          <h2 class="text-xl">{{ $t("Expert Level") }}</h2>
                          <h2
                            :class="
                              isDarkMode
                                ? 'text-green-200 text-lg break-words '
                                : 'text-grey-800 text-lg break-words'
                            "
                          >
                            {{
                              licenseData && licenseData.licenseReviewer
                                ? licenseData.licenseReviewer.reviewer
                                    .expertLevel.name
                                : licenseData && licenseData.renewalReviewer
                                ? licenseData.renewalReviewer.reviewer
                                    .expertLevel.name
                                : licenseData &&
                                  licenseData.goodstandingReviewer
                                ? licenseData.goodstandingReviewer.reviewer
                                    .expertLevel.name
                                : "Not Assigned Yet"
                            }}
                          </h2>

                          <h2 class="text-xl">{{ $t("Region") }}</h2>
                          <h2
                            :class="
                              isDarkMode
                                ? 'text-green-200 text-lg break-words '
                                : 'text-grey-800 text-lg break-words'
                            "
                          >
                            {{
                              licenseData && licenseData.licenseReviewer
                                ? licenseData.licenseReviewer.reviewer.region
                                    .name
                                : licenseData && licenseData.renewalReviewer
                                ? licenseData.renewalReviewer.reviewer.region
                                    .name
                                : licenseData &&
                                  licenseData.goodstandingReviewer
                                ? licenseData.goodstandingReviewer.reviewer
                                    .region.name
                                : "Not Assigned Yet"
                            }}
                          </h2>
                        </div>
                      </article>
                      <!-- END Article -->
                    </div>
                    <!-- END Column -->

                    <!-- Column -->
                    <div
                      v-if="
                        !licenseData.goodStandingCode &&
                        !licenseData.lost_license_code
                      "
                      class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 mb-4"
                    >
                      <!-- Article -->
                      <article
                        class="overflow-hidden rounded-lg shadow-md p-2 break-all"
                      >
                        <header
                          class="flex items-center justify-between leading-tight p-2 mb-2 border-b-4"
                        >
                          <h2 class="text-xl">
                            {{ $t("Applicants Education Detail") }}
                          </h2>
                        </header>

                        <div
                          class="grid grid-cols-2 gap-1"
                          v-for="education in licenseData.educations"
                          :key="education ? education.id : ''"
                        >
                          <h2 class="text-xl">{{ $t("Department") }}</h2>
                          <h3
                            :class="
                              isDarkMode
                                ? 'text-green-200 text-lg break-words '
                                : 'text-grey-800 text-lg break-words'
                            "
                          >
                            {{
                              education && education.department
                                ? education.department.name
                                : "-"
                            }}
                          </h3>

                          <h2 class="text-xl">{{ $t("Institution") }}</h2>
                          <h3
                            :class="
                              isDarkMode
                                ? 'text-green-200 text-lg break-words '
                                : 'text-grey-800 text-lg break-words'
                            "
                          >
                            {{
                              education && education.institution
                                ? education.institution.name
                                : "-"
                            }}
                          </h3>

                          <h2 class="text-xl">{{ $t("Education Level") }}</h2>
                          <h3
                            :class="
                              isDarkMode
                                ? 'text-green-200 text-lg break-words '
                                : 'text-grey-800 text-lg break-words'
                            "
                          >
                            {{
                              education && education.educationLevel
                                ? education.educationLevel.name
                                : "-"
                            }}
                          </h3>
                        </div>
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
                        class="overflow-hidden rounded-lg shadow-md p-2 break-all"
                      >
                        <header
                          class="flex items-center justify-between leading-tight p-2 mb-2 border-b-4"
                        >
                          <h2 class="text-xl">
                            {{
                              licenseData.goodStandingCode
                                ? "Letter "
                                : "License "
                            }}{{ $t("Detail") }}
                          </h2>
                        </header>

                        <div class="grid grid-cols-2 gap-1">
                          <h2 class="text-xl">{{ $t("Applicant Type") }}</h2>
                          <h3
                            :class="
                              isDarkMode
                                ? 'text-green-200 text-lg break-words '
                                : 'text-grey-800 text-lg break-words'
                            "
                          >
                            {{
                              licenseData && licenseData.applicantType
                                ? licenseData.applicantType.name
                                : "-"
                            }}
                          </h3>

                          <h2 class="text-xl">
                            {{ $t("Application Status") }}
                          </h2>
                          <h3
                            :class="
                              isDarkMode
                                ? 'text-green-200 text-lg break-words '
                                : 'text-grey-800 text-lg break-words'
                            "
                          >
                            {{
                              licenseData && licenseData.applicationStatus
                                ? licenseData.applicationStatus.name
                                : "-"
                            }}
                          </h3>

                          <h2 class="text-xl">{{ $t("Certified Status") }}</h2>
                          <h3
                            :class="
                              isDarkMode
                                ? 'text-green-200 text-lg break-words '
                                : 'text-grey-800 text-lg break-words'
                            "
                          >
                            {{
                              licenseData && licenseData.certified
                                ? "Certified"
                                : "Not Certified"
                            }}
                          </h3>

                          <h2 class="text-xl">{{ $t("Certified Date") }}</h2>
                          <h3
                            :class="
                              isDarkMode
                                ? 'text-green-200 text-lg break-words '
                                : 'text-grey-800 text-lg break-words'
                            "
                          >
                            {{
                              licenseData && licenseData.certifiedDate
                                ? licenseData.certifiedDate.slice(0, 10)
                                : "-"
                            }}
                          </h3>

                          <h2 class="text-xl">{{ $t("Expiration Date") }}</h2>
                          <h3
                            :class="
                              isDarkMode
                                ? 'text-green-200 text-lg break-words '
                                : 'text-grey-800 text-lg break-words'
                            "
                          >
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

                    <div
                      v-if="detailPageName === 'Declined'"
                      class="my-1 px-1 w-full sm:w-1/2"
                    >
                      <!-- Article -->
                      <article
                        class="overflow-hidden rounded-lg shadow-md p-2 break-all"
                      >
                        <header
                          class="flex items-center justify-between leading-tight p-2 mb-2 border-b-4"
                        >
                          <h2 class="text-xl">
                            {{ $t("Remark on why the license is declined") }}
                          </h2>
                        </header>

                        <div class="grid grid-flow-row auto-rows-max">
                          <div class="flex justify-between px-4 py-1">
                            <div class="font-bold">
                              <p class="text-gray-700 text-base mb-4">
                                {{
                                  licenseData && licenseData.remark
                                    ? licenseData.remark
                                    : "-----------------------"
                                }}
                              </p>
                            </div>
                          </div>
                        </div>

                        <footer
                          class="flex items-center justify-between leading-none p-2 md:p-4"
                        ></footer>
                      </article>
                      <!-- END Article -->
                    </div>
                  </div>
                </div>
              </section>
              <!-- If the license is declined one -->
              <div class="p-4 shadow-md" v-if="detailPageName === 'Declined'">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item shadow-md p-2">
                    <h2 class="accordion-header mb-0" id="headingTwo">
                      <button
                        class="accordion-button collapsed relative flex items-center text-white bg-main-400 focus:bg-main-400 focus:text-white w-full py-4 px-5 text-base text-left hover:border-main-400 hover:text-main-400 border-0 rounded-none transition"
                        type="button"
                        aria-controls="collapseTwo"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                      >
                        Re-apply
                      </button>
                    </h2>
                    <h2 class="text-xl ml-4 underline mt-4">
                      Re-apply here by uploading the declined documents
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body py-4 px-5">
                        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
                          <div
                            class="mt-4 mb-8 border-lightBlue-600 border p-2 rounded-md shadow-md"
                            v-for="document in declinedDocuments"
                            :key="document.id"
                          >
                            <i class="fa fa-upload fa-2x cursor-pointer"> </i
                            ><span class="ml-2">Re-upload</span>

                            <div class="break-words mt-4">
                              <input
                                type="file"
                                required
                                :id="`re_image_href_${document.documentTypeCode}`"
                                accept=".jpeg, .png, .gif, .jpg, .pdf, .webp, .tiff , .svg"
                                :ref="`imageUploader${document.id}`"
                                class="custom-file-input"
                                v-on:change="handleFileUpload(document, $event)"
                              />
                            </div>
                            <div class="flex justify-center border-t-4 mt-2">
                              <div
                                v-if="
                                  document.fileType &&
                                  document.fileType != 'application/pdf'
                                "
                                class="mt-large"
                              >
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
                                    :id="`cur_img_${document.documentTypeCode}`"
                                    :src="googleApi + document.filePath"
                                    class="w-full h-48 object-cover"
                                  />
                                </a>

                                <h4 class="font-bold">Document Type:-</h4>
                                <h6>
                                  {{
                                    document.documentType
                                      ? document.documentType.name
                                      : ""
                                  }}
                                </h6>
                              </div>
                              <div v-else>
                                <h4 class="font-bold text-grey-800">
                                  Document Type:-
                                </h4>
                                <h6>
                                  {{
                                    document.documentType
                                      ? document.documentType.name
                                      : ""
                                  }}
                                </h6>
                                <button
                                  class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded mt-8 bg-primary-400 hover:bg-white hover:text-primary-600"
                                  @click="
                                    openPdfInNewTab(
                                      document ? document.filePath : ''
                                    )
                                  "
                                >
                                  See pdf in detail
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="detailPageName === 'Declined'"
              class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end border-t border-grey-100 rounded-b-md p-2"
            >
              <button
                type="button"
                class="inline-block px-6 text-white bg-main-400 hover:text-main-400 hover:border font-semibold text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
                @click="reApply()"
              >
                {{ $t("Re-apply") }}
              </button>
              <button
                type="button"
                class="inline-block px-6 text-white bg-main-400 hover:text-main-400 hover:border font-semibold text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
                data-bs-dismiss="modal"
              >
                {{ $t("Close") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { useStore } from "vuex";
import { googleApi } from "@/composables/baseURL";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { useToast } from "vue-toastification";
export default {
  props: [
    "modalDataId",
    "applicationDetailLink",
    "isDarkMode",
    "detailPageName",
    "finalUrl",
  ],
  components: { Loading },
  setup(props) {
    let store = useStore();
    const toast = useToast();
    let userInfo = ref({});
    let isLoading = ref(false);
    let licenseData = ref({});

    let documentUploaded = ref({});
    let formData = new FormData();
    let isImage = ref({});
    let fileSizeExceed = ref({});
    let showImage = ref(false);
    let fileSize = ref("");
    let declinedDocuments = ref([]);
    let showPreview = ref("");
    let previewDocuments = ref({});
    let isPdf = ref({});
    let pdfFilePath = ref("");

    watch(props.modalDataId, () => {
      isLoading.value = true;
      store
        .dispatch(props.applicationDetailLink.toString(), props.modalDataId.id)
        .then((res) => {
          licenseData.value = res.data.data;

          if (
            licenseData.value.declinedFields &&
            licenseData.value.declinedFields.length > 0
          ) {
            licenseData.value.declinedFields.forEach((rejected) => {
              licenseData.value.documents.forEach((doc) => {
                if (
                  rejected == doc.fileName ||
                  rejected == doc.documentTypeCode
                ) {
                  declinedDocuments.value.push(doc);
                }
              });
            });
          }
          isLoading.value = false;
        });
    });

    const handleFileUpload = (data, event) => {
      documentUploaded.value[data.documentType.code] = event?.target?.files[0];
      const finalFileName = computed(() =>
        props.finalUrl === "newLicense"
          ? data.fileName
          : props.finalUrl === "renewal"
          ? data.fileName
          : props.finalUrl === "goodstanding"
          ? data.documentTypeCode
          : props.finalUrl === "lostLicense"
          ? data.documentTypeCode
          : ""
      );
      let reader = new FileReader();
      formData.append(finalFileName.value, event?.target?.files[0]);

      isImage.value[data.documentType.code] = true;
      let fileS = documentUploaded.value[data.documentType.code].size;

      fileSizeExceed.value[data.documentType.code] = false;
      showImage.value = true;
      if (fileS > 0 && fileS < 1000) {
        fileSize.value += "B";
      } else if (fileS > 1000 && fileS < 1000000) {
        fileSize.value = fileS / 1000 + "kB";
      } else {
        fileSize.value = fileS / 1000000 + "MB";
      }
      reader.addEventListener(
        "load",
        function (e) {
          showPreview.value = true;
          previewDocuments.value[data.documentType.code] = reader.result;
          document.getElementById(`cur_img_${data.documentTypeCode}`).src =
            e.target.result;
        },
        false
      );
      if (documentUploaded.value[data.documentType.code]) {
        if (
          /\.(jpe?g|png|gif)$/i.test(
            documentUploaded.value[data.documentType.code].name
          )
        ) {
          isImage.value[data.documentType.code] = true;
          isPdf.value[data.documentType.code] = false;

          reader.readAsDataURL(documentUploaded.value[data.documentType.code]);
        } else if (
          /\.(pdf)$/i.test(documentUploaded.value[data.documentType.code].name)
        ) {
          isImage.value[data.documentType.code] = false;
          isPdf.value[data.documentType.code] = true;
          reader.readAsDataURL(documentUploaded.value[data.documentType.code]);
        }
      }
      let icon = document.getElementById(
        "re_educational_icon_" + data.documentTypeCode
      );

      if (icon && icon.classList.contains("disabled")) {
        icon.classList.toggle("disabled");
      }

      let output = document.getElementById(
        "re_image_lightbox_" + data.documentTypeCode
      );

      let outputHref = document.getElementById(
        "re_image_href_" + data.documentTypeCode
      );

      outputHref.href = URL.createObjectURL(event.target.files[0]);
      if (output && output.src) {
        output.src = URL.createObjectURL(event.target.files[0]);
      }

      output
        ? (output.onload = function () {
            URL.revokeObjectURL(output.src); // free memory
          })
        : "";
    };
    const reApply = () => {
      const url = computed(() =>
        props.finalUrl === "newLicense"
          ? "newlicense"
          : props.finalUrl === "renewal"
          ? "renewal"
          : props.finalUrl === "goodstanding"
          ? "goodstanding"
          : props.finalUrl === "lostLicense"
          ? "lostLicenses"
          : ""
      );

      let license = {
        licenseId: licenseData.value.id,
        declinedData: {
          action: "UpdateEvent",
          data: licenseData.value,
        },
      };
      isLoading.value = true;

      store.dispatch(`${url.value}/updateDeclined`, license).then(() => {
        let licenseId = licenseData.value.id;
        let payload = { document: formData, id: licenseId };
        store
          .dispatch(`${url.value}/updateDocuments`, payload)
          .then(() => {
            toast.success("Applied successfully", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          })
          .catch(() => {
            isLoading.value = false;
            toast.error("Error occured, please try again", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
          });
      });
    };
    const openPdfInNewTab = (pdfPath) => {
      pdfFilePath.value = pdfPath;
      window.open(googleApi + "" + pdfPath, "_blank");
    };

    onMounted(() => {
      userInfo.value = JSON.parse(window.localStorage.getItem("personalInfo"));
    });

    return {
      userInfo,
      isLoading,
      googleApi,
      licenseData,
      declinedDocuments,
      handleFileUpload,
      reApply,
      openPdfInNewTab,
    };
  },
};
</script>
