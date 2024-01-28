<template>
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="declinedDetail"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="declinedDetailLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-xl relative w-auto pointer-events-none"
    >
      <div
        class="modal-content border-none relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div class="modal-header flex flex-shrink-0 justify-end p-2 rounded-t-md">
          <button
            type="button"
            class="px-6 text-white bg-main-400 hover:text-main-400 hover:border font-medium text-xs leading-tight uppercase rounded hover:bg-purple-700 hover: focus:bg-purple-700 focus: focus:outline-none focus:ring-0 active:bg-purple-800 active: transition duration-150 ease-in-out"
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
                <div class="flex justify-center border-b-4 text-main-400"></div>

                <div class="flex justify-center border-b-4 text-main-400">
                  <div class="text-center lg:max-w-3xl md:max-w-xl">
                    <h2 class="text-2xl font-bold mb-8 px-6 text-main-400">
                      Declined License Detail
                    </h2>
                  </div>
                </div>

                <div
                  class="container my-12 mx-auto px-4 md:px-12 border-b"
                  v-if="licenseData"
                >
                  <div class="flex flex-wrap -mx-1 lg:-mx-4">
                    <!-- Column -->
                    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                      <!-- Article -->
                      <article class="overflow-hidden rounded-lg">
                        <header
                          class="flex items-center justify-between leading-tight p-2 md:p-4 border-b-4 text-main-400"
                        >
                          <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                              Applicant Profile
                            </a>
                          </h1>
                          <p class="text-main-400 text-sm">
                            <i class="fa fa-user fa-2x"></i>
                          </p>
                        </header>

                        <div class="grid grid-flow-row auto-rows-max">
                          <div class="flex justify-between px-4 py-1">
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
                          class="flex items-center justify-between leading-none p-2 md:p-4"
                        ></footer>
                      </article>
                      <!-- END Article -->
                    </div>
                    <!-- END Column -->

                    <!-- Column -->
                    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                      <!-- Article -->
                      <article class="overflow-hidden rounded-lg">
                        <header
                          class="flex items-center justify-between leading-tight p-2 md:p-4 border-b-4 text-main-400"
                        >
                          <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
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
                                  ? licenseData.licenseReviewer.reviewer.expertLevel.name
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
                                  ? licenseData.licenseReviewer.reviewer.phoneNumber
                                  : "-"
                              }}
                            </div>
                          </div>
                        </div>

                        <footer
                          class="flex items-center justify-between leading-none p-2 md:p-4"
                        ></footer>
                      </article>
                      <!-- END Article -->
                    </div>
                    <!-- END Column -->

                    <!-- Column -->
                    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                      <!-- Article -->
                      <article class="overflow-hidden rounded-lg">
                        <header
                          class="flex items-center justify-between leading-tight p-2 md:p-4 border-b-4 text-main-400"
                        >
                          <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
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
                          class="flex items-center justify-between leading-none p-2 md:p-4"
                        ></footer>
                      </article>
                      <!-- END Article -->
                    </div>

                    <!-- END Column -->

                    <!-- Column -->
                    <div class="my-1 px-1 w-1/2 md:w-1/2 lg:my-4 lg:px-4 lg:w-8/12">
                      <!-- Article -->
                      <article class="overflow-hidden rounded-lg">
                        <header
                          class="flex items-center justify-between leading-tight p-2 md:p-4 border-b-4 text-main-400"
                        >
                          <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                              Remark on why the license is declined
                            </a>
                          </h1>
                          <p class="text-main-400 text-sm">Active</p>
                        </header>

                        <div class="grid grid-flow-row auto-rows-max">
                          <div class="flex justify-between px-4 py-1">
                            <div class="text-main-400 font-bold">
                              <p class="text-gray-700 text-base mb-4">
                                {{
                                  licenseData && licenseData.remark
                                    ? licenseData.remark
                                    : "-"
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
                    <!-- END Column -->
                  </div>
                </div>
              </section>

              <div class="accordion" id="accordionExample">
                <div class="accordion-item bg-white">
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
                  <h2>Re-apply here by uploading the declined documents</h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse "
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body py-4 px-5">
                      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
                        <div
                          class="mt-4 mb-8 bg-white border p-2 rounded-md shadow-md"
                          v-for="document in declinedDocuments"
                          :key="document.id"
                        >
                          <i class="fa fa-upload fa-2x text-main-400 cursor-pointer"> </i
                          ><span class="text-main-400 ml-2">Re-upload</span>
                          <a
                            :id="'image_href_' + `${document.documentTypeCode}`"
                            href=""
                            :data-title="document.name ? document.name : '-----'"
                            data-lightbox="example-2"
                          >
                            <i
                              :id="'re_educational_icon_' + document.documentTypeCode"
                              class="fa fa-eye cursor-pointer text-main-400 disabled"
                              aria-hidden="true"
                            >
                              <img
                                :id="
                                  're_image_lightbox_' + `${document.documentTypeCode}`
                                "
                                src=""
                                class="w-full h-2 object-cover"
                              />
                            </i>
                          </a>
                          <div class="break-words">
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
                          <div class="flex justify-center border-t-4 text-main-400 mt-2">
                            <div
                              v-if="
                                document.fileType &&
                                document.fileType != 'application/pdf'
                              "
                              class="mt-large bg-white"
                            >
                              <a
                                :href="googleApi + document.filePath"
                                :data-title="
                                  document.documentType ? document.documentType.name : ''
                                "
                                data-lightbox="example-2"
                              >
                                <img
                                  :src="googleApi + document.filePath"
                                  class="w-full h-48 object-cover"
                                />
                              </a>

                              <h4 class="font-bold text-grey-800">Document Type:-</h4>
                              <h6>
                                {{
                                  document.documentType ? document.documentType.name : ""
                                }}
                              </h6>
                            </div>
                            <div v-else>
                              <h4 class="font-bold text-grey-800">Document Type:-</h4>
                              <h6>
                                {{
                                  document.documentType ? document.documentType.name : ""
                                }}
                              </h6>
                              <button
                                class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded mt-8 bg-primary-400 hover:bg-white hover:text-primary-600"
                                @click="
                                  openPdfInNewTab(document ? document.filePath : '')
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
        </div>
        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end border-t border-grey-100 rounded-b-md p-2"
        >
          <button
            type="button"
            class="inline-block px-6 text-white bg-main-400 hover:text-main-400 hover:border font-semibold text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
            @click="reApply()"
          >
            Re-apply
          </button>
          <button
            type="button"
            class="inline-block px-6 text-white bg-main-400 hover:text-main-400 hover:border font-semibold text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
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
import MAX_FILE_SIZE from "../../../../composables/documentMessage";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
export default {
  props: ["modalDataId"],
  components: { Loading },
  setup(props) {
    let store = useStore();
    const router = useRouter();
    const toast = useToast();
    let licenseData = ref({});
    let userInfo = ref({});
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
    let maxFileSize = ref();
    let pdfFilePath = ref("");
    maxFileSize.value = MAX_FILE_SIZE.MAX_FILE_SIZE;
    let isLoading = ref(false);
    watch(props.modalDataId, () => {
      isLoading.value = true;
      store
        .dispatch("newlicense/getNewLicenseApplication", props.modalDataId.id)
        .then((res) => {
          licenseData.value = res.data.data;
          if (
            licenseData.value.declinedFields &&
            licenseData.value.declinedFields.length > 0
          ) {
            licenseData.value.declinedFields.forEach((rejected) => {
              licenseData.value.documents.forEach((doc) => {
                if (rejected == doc.fileName) {
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
      let reader = new FileReader();
      formData.append(data.fileName, event?.target?.files[0]);

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
        function () {
          showPreview.value = true;
          previewDocuments.value[data.documentType.code] = reader.result;
        },
        false
      );
      if (documentUploaded.value[data.documentType.code]) {
        if (
          /\.(jpe?g|png|gif)$/i.test(documentUploaded.value[data.documentType.code].name)
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
      let icon = document.getElementById("re_educational_icon_" + data.documentTypeCode);

      if (icon && icon.classList.contains("disabled")) {
        icon.classList.toggle("disabled");
      }

      let output = document.getElementById("re_image_lightbox_" + data.documentTypeCode);

      let outputHref = document.getElementById("re_image_href_" + data.documentTypeCode);

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
      let license = {
        licenseId: licenseData.value.id,
        declinedData: {
          action: "UpdateEvent",
          data: licenseData.value,
        },
      };
      isLoading.value = true;
      store.dispatch("newlicense/updateDeclined", license).then(() => {
        let licenseId = licenseData.value.id;
        let payload = { document: formData, id: licenseId };
        store
          .dispatch("newlicense/updateDocuments", payload)
          .then(() => {
            toast.success("Applied successfuly", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            setTimeout(() => {
              window.location.reload();
            }, 1000);
            router.push({ path: "/Applicant/NewLicense/submitted" });
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
    onMounted(() => {
      userInfo.value = JSON.parse(window.localStorage.getItem("personalInfo"));
    });
    const openPdfInNewTab = (pdfPath) => {
      pdfFilePath.value = pdfPath;
      window.open(googleApi + "" + pdfPath, "_blank");
    };
    return {
      licenseData,
      openPdfInNewTab,
      isLoading,
      handleFileUpload,
      googleApi,
      userInfo,
      declinedDocuments,
      reApply,
    };
  },
};
</script>
<style>
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: "Upload";
  display: inline-block;
  background: #ffffff;
  border-radius: 3px;
  padding: 5px 5px;
  border: 1px solid;
  outline: none;
  color: #1f677e;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
}
.custom-file-input:hover::before {
  background: -webkit-linear-gradient(top, #1f677e, #1f677e);
  color: white;
}
.custom-file-input:active::before {
  background: -webkit-linear-gradient(top, #1f677e, #1f677e);
}
</style>
