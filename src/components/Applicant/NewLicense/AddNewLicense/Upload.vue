<template>
  <div>
    <div class="accordion mr-0 sm:mr-8 mt-24" id="FilesAccordion">
      <h2
        v-if="alreadyUploaded"
        class="text-xl sm:text-2xl text-yellow-300 border mb-2 rounded-md p-2"
      >
        {{
          $t(
            "It seems like you have already attached the documents required to go to the next step, if you wish to change any file, you can do so, else click next at the bottom of the screen"
          )
        }}
      </h2>
      <h2
        class="text-xl sm:text-2xl text-yellow-300 border mb-2 rounded-md p-2"
      >
        {{$t('Please upload all documents marked with a red asterix')}}
        <small class="text-red-300"> (*)</small>
      </h2>
      <div
        :class="
          isDarkMode
            ? 'accordion-item bg-secondaryDark  border border-grey-200  rounded-lg'
            : 'accordion-item  bg-white border border-grey-200  rounded-lg'
        "
      >
        <h2 id="headingOne" class="accordion-header mb-0 mr-1">
          <button
            class="accordion-button relative flex items-center w-full p-4 border text-gray-800 text-xl rounded-md transition focus:outline-none"
            style="background: #d8d8d8 !important; color: #27687e !important"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#commonFilesAccordion"
            aria-expanded="true"
            aria-controls="commonFilesAccordion"
          >
            {{$t('Common Files')}}
          </button>
        </h2>
        <div
          id="commonFilesAccordion"
          class="accordion-collapse collapse show"
          aria-labelledby="commonFilesAccordionheading"
          data-bs-parent="#FilesAccordion"
        >
          <div class="accordion-body sm:p-4 p-1">
            <div class="overflow-x-auto w-full">
              <CommonFileUploadTable
                :headers="commonFileUploadHeaders"
                :tableRows="commonDocuments"
                :fileUploadError="fileUploadError"
                :isDarkMode="isDarkMode"
                @handleCommonFileUpload="handleCommonFileUpload"
              ></CommonFileUploadTable>
            </div>
          </div>
        </div>
      </div>
      <div
        :class="
          isDarkMode
            ? 'accordion-item bg-secondaryDark  border border-grey-200  rounded-lg'
            : 'accordion-item  bg-white border border-grey-200  rounded-lg'
        "
      >
        <h2 class="accordion-header mb-0 mr-1">
          <button
            class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0 rounded-md transition focus:outline-none"
            style="background: #d8d8d8 !important; color: #27687e !important"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#departmentFilesAccordion"
            aria-expanded="true"
            aria-controls="departmentFilesAccordion"
          >
           {{$t('Education Level Related Files')}}
          </button>
        </h2>
        <div
          id="departmentFilesAccordion"
          class="accordion-collapse collapse show"
          aria-labelledby="departmentFilesAccordionheading"
          data-bs-parent="#FilesAccordion"
        >
          <div class="accordion-body sm:p-4 p-0">
            <FileUploadTable
              :headers="commonFileUploadHeaders"
              :fileUploadError="fileUploadError"
              :isDarkMode="isDarkMode"
              :educationalDocs="educationalDocs"
              :existingDocs="existingDocs"
              :showNestedDocuments="showNestedDocuments"
              @handleFileUpload="handleFileUpload"
              @addMore="addMore"
              @removeChildUpload="removeChildUpload"
            >
            </FileUploadTable>
          </div>
        </div>
      </div>
      <div
        class="shadow-md p-2 m-4 rounded-md text-yellow-300 border"
        v-if="errorDocuments && errorDocuments.length > 0"
      >
        <h2 class="text-yellow-300 font-bold text-xl sm:text-3xl border-b">
          {{$t('Please attach the following files to proceed')}}
        </h2>
        <li
          class="text-yellow-300 text-xl font-bold p-2 m-1 break-all"
          v-for="(error, index) in errorDocuments"
          :key="error"
        >
          <small
            :class="
              isDarkMode ? 'text-primary-200 text-xl' : 'text-grey-800 text-xl'
            "
            >{{ index + 1 }}-
          </small>
          {{ error.name }}
        </li>
      </div>
    </div>
    <div class="vld-parent mt-4">
      <loading
        :active="isLoading"
        :is-full-page="false"
        :color="'#2F639D'"
        :opacity="1"
        class="rounded-md"
      ></loading>
      <div class="flex justify-end mr-8 mb-8">
        <button
          class="mt-8 inline-block px-6 py-2.5 bg-white hover:bg-main-400 hover:text-white text-main-400 text-xs font-bold leading-tight uppercase rounded active:border-main-400 transition duration-150 ease-in-out border"
          type="submit"
          @click="saveDraft()"
        >
          {{$t('Save As Draft')}}
        </button>
        <button
          class="mt-8 inline-block px-6 py-2.5 bg-white hover:bg-main-400 hover:text-white text-main-400 text-xs font-bold leading-tight uppercase rounded active:border-main-400 transition duration-150 ease-in-out border"
          @click="back()"
        >
          {{$t('Back')}}
        </button>
        <button
          class="mt-8 inline-block px-6 py-2.5 bg-white hover:bg-main-400 hover:text-white text-main-400 text-xs font-bold leading-tight uppercase rounded active:border-main-400 transition duration-150 ease-in-out border"
          @click="next()"
        >
          {{$t('Next')}}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, toRaw } from "vue";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
import Compressor from "compressorjs";
import MAX_FILE_SIZE from "../../../../composables/documentMessage";
import { checkDocuments } from "../../Shared/services/checkDocumentUpload";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import CommonFileUploadTable from "../../Shared/FileUpload/CommonFileUploadTable.vue";
import FileUploadTable from "../../Shared/FileUpload/FileUploadTable.vue";
export default {
  components: { Loading, CommonFileUploadTable, FileUploadTable },

  // eslint-disable-next-line vue/no-setup-props-destructure
  setup(props, { emit }) {
    let store = useStore();
    const toast = useToast();
    let isLoading = ref(false);
    let documents = ref([]);
    let commonDocuments = ref([]);
    let imageUploader = ref(null);
    let goToNext = ref(false);
    let educationalDocs = ref([]);
    let localData = ref({});
    let alreadyUploaded = ref(false);
    let existingDocs = [];
    let files = ref("");
    let commonFileUploadHeaders = ref([
      "Document Name",
      "Document Description",
      "Upload Document",
      "Uploaded File Name",
      "View",
    ]);
    let maxFileSize = ref();
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    let isBackButtonClicked = ref(false);
    let dbVersion = 1;
    let isImage = ref({});
    let isPdf = ref({});
    let fileSizeExceed = ref({});
    let fileSize = ref("");
    let showImage = ref(false);
    let previewDocuments = ref({});
    let showPreview = ref("");
    maxFileSize.value = MAX_FILE_SIZE.MAX_FILE_SIZE;
    let generalInfo = ref({});
    let documentsUploaded = ref({});
    let documentToSave = ref({});
    let fileUploadError = ref([]);
    let imageData = [];
    let formData = new FormData();
    let newLicenseDocuments = ref([]);
    let errorDocuments = ref([]);
    let showNestedDocuments = ref({});
    let isLicenseDesignation = localStorage.getItem("isLicenseDesignation")
      ? ref(JSON.parse(localStorage.getItem("isLicenseDesignation")))
      : false;
    const handleCommonFileUpload = (data, event) => {
      if (/\.(pdf)$/i.test(event?.target?.files[0].name)) {
        documentsUploaded.value[data.documentType.code] = "";
        documentsUploaded.value[data.documentType.code] =
          event?.target?.files[0];
        let reader = new FileReader();

        let fileS = documentsUploaded.value[data.documentType.code].size;

        isImage.value[data.documentType.code] = false;

        delete fileUploadError.value[
          "file_upload_row_" + data.documentType.code
        ];

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
            imageData = imageData.filter(
              (el) => el.documenttype != data.documentType.name
            );
            imageData.push({
              imageId: "common_image_lightbox_" + data.documentType.code,
              documenttype: data.documentType ? data.documentType.name : "",
              documentCode: data.documentType ? data.documentType.code : "",
              educationalLevel: data.educationalLevel
                ? data.educationalLevel.name
                : "",
              fileName: event?.target?.files[0].name,
              image: reader.result,
            });

            documentToSave.value[data.documentType.code] = reader.result;
          },
          false
        );

        isPdf.value[data.documentType.code] = true;
        formData.append(data.documentType.code, event?.target?.files[0]);
        reader.readAsDataURL(documentsUploaded.value[data.documentType.code]);
        let icon = document.getElementById(
          "common_icon_" + data.documentType.id + data.id
        );

        if (icon.classList.contains("disabled")) {
          icon.classList.toggle("disabled");
        }

        let output = document.getElementById(
          "common_image_lightbox_" + data.documentType.id + data.id
        );

        let outputHref = document.getElementById(
          "common_image_" + data.documentType.id + data.id
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
      } else {
        new Compressor(event?.target?.files[0], {
          quality: 0.5,

          // The compression process is asynchronous,
          // which means you have to access the `result` in the `success` hook function.
          success(result) {
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(new File([result], result.name));
            event.target.files = dataTransfer.files;
            documentsUploaded.value[data.documentType.code] = "";
            documentsUploaded.value[data.documentType.code] =
              event?.target?.files[0];
            let reader = new FileReader();

            let fileS = documentsUploaded.value[data.documentType.code].size;

            delete fileUploadError.value[
              "file_upload_row_" + data.documentType.code
            ];
            showImage.value = true;

            if (fileS > 0 && fileS < 1000) {
              fileSize.value += "B";
            } else if (fileS > 1000 && fileS < 1000000) {
              fileSize.value = fileS / 1000 + "kB";
            } else {
              fileSize.value = fileS / 1000000 + "MB";
            }
            let commonImageLighBox = document.getElementById(
              "common_image_light_box_" + data.documentType.id + data.id
            );
            reader.addEventListener(
              "load",
              function () {
                showPreview.value = true;

                previewDocuments.value[data.documentType.code] = reader.result;
                imageData = imageData.filter(
                  (el) => el.documenttype != data.documentType.name
                );
                imageData.push({
                  imageId: "common_image_lightbox_" + data.documentType.code,
                  documenttype: data.documentType ? data.documentType.name : "",
                  documentCode: data.documentType ? data.documentType.code : "",
                  educationalLevel: data.educationalLevel
                    ? data.educationalLevel.name
                    : "",
                  fileName: event?.target?.files[0].name,
                  image: reader.result,
                });

                documentToSave.value[data.documentType.code] = reader.result;

                if (commonImageLighBox) {
                  commonImageLighBox.src = reader.result;
                }
              },
              false
            );

            isImage.value[data.documentType.code] = true;
            isPdf.value[data.documentType.code] = false;
            formData.append(data.documentType.code, event?.target?.files[0]);
            reader.readAsDataURL(
              documentsUploaded.value[data.documentType.code]
            );

            let icon = document.getElementById(
              "common_icon_" + data.documentType.id + data.id
            );

            if (icon.classList.contains("disabled")) {
              icon.classList.toggle("disabled");
            }

            let output = document.getElementById(
              "common_image_lightbox_" + data.documentType.id + data.id
            );

            let outputHref = document.getElementById(
              "common_image_href_" + data.documentType.id + data.id
            );
            outputHref.href = URL.createObjectURL(event.target.files[0]);
            if (output && output.src) {
              output.src = URL.createObjectURL(event.target.files[0]);
              output.onload = function () {
                URL.revokeObjectURL(output.src);
              };
            }
          },
          error(err) {
            console.log(err.message);
          },
        });
      }
    };

    const handleFileUpload = (data, event, pro) => {
      if (/\.(pdf)$/i.test(event?.target?.files[0].name)) {
        let reader = new FileReader();
        documentsUploaded.value[
          data.documentType.code +
            "_" +
            data.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase()
        ] = "";

        documentsUploaded.value[
          data.documentType.code +
            "_" +
            data.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase()
        ] = event?.target?.files[0];

        delete fileUploadError.value[
          "file_upload_row_" +
            data.documentType.code.toUpperCase() +
            "_" +
            data.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase()
        ];

        let fileS =
          documentsUploaded.value[
            data.documentType.code +
              "_" +
              data.educationalLevel.code.toUpperCase() +
              "_" +
              pro.professionType.code.toUpperCase()
          ].size;

        isImage.value[
          data.documentType.code +
            "_" +
            data.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase()
        ] = false;
        isPdf.value[
          data.documentType.code +
            "_" +
            data.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase()
        ] = true;
        formData.append(
          data.documentType.code +
            "_" +
            data.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase(),

          event?.target?.files[0]
        );

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

            previewDocuments.value[
              data.documentType.code +
                "_" +
                data.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase()
            ] = reader.result;

            imageData.push({
              imageId:
                "image_lightbox_" +
                data.documentType.code +
                "_" +
                pro.educationalLevel.code +
                "_" +
                pro.professionType.code,
              documenttype: data.documentType ? data.documentType.name : "",
              documentCode:
                data.documentType.code +
                "_" +
                data.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase(),
              educationalLevel: data.educationalLevel
                ? data.educationalLevel.name
                : "",
              fileName: event?.target?.files[0].name,
              image: reader.result,
            });
          },
          false
        );

        reader.readAsDataURL(
          documentsUploaded.value[
            data.documentType.code +
              "_" +
              data.educationalLevel.code.toUpperCase() +
              "_" +
              pro.professionType.code.toUpperCase()
          ]
        );
        let icon = document.getElementById(
          "educational_icon_" +
            data.documentType.code +
            "_" +
            pro.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase()
        );
        if (icon.classList.contains("disabled")) {
          icon.classList.toggle("disabled");
        }

        let output = document.getElementById(
          "image_lightbox_" +
            data.documentType.code +
            "_" +
            pro.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase()
        );
        let outputHref = document.getElementById(
          "image_href_" +
            data.documentType.code +
            "_" +
            pro.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase()
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
      } else {
        new Compressor(event?.target?.files[0], {
          quality: 0.5,

          // The compression process is asynchronous,
          // which means you have to access the `result` in the `success` hook function.
          success(result) {
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(new File([result], result.name));
            let reader = new FileReader();
            event.target.files = dataTransfer.files;
            documentsUploaded.value[
              data.documentType.code +
                "_" +
                data.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase()
            ] = "";
            documentsUploaded.value[
              data.documentType.code +
                "_" +
                data.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase()
            ] = event?.target?.files[0];

            let fileS =
              documentsUploaded.value[
                data.documentType.code +
                  "_" +
                  data.educationalLevel.code.toUpperCase() +
                  "_" +
                  pro.professionType.code.toUpperCase()
              ].size;

            isImage.value[
              data.documentType.code +
                "_" +
                data.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase()
            ] = true;
            formData.append(
              data.documentType.code +
                "_" +
                data.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase(),

              event?.target?.files[0]
            );

            showImage.value = true;
            if (fileS > 0 && fileS < 1000) {
              fileSize.value += "B";
            } else if (fileS > 1000 && fileS < 1000000) {
              fileSize.value = fileS / 1000 + "kB";
            } else {
              fileSize.value = fileS / 1000000 + "MB";
            }

            delete fileUploadError.value[
              "file_upload_row_" +
                data.documentType.code +
                "_" +
                data.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase()
            ];
            reader.addEventListener(
              "load",
              function () {
                showPreview.value = true;

                previewDocuments.value[
                  data.documentType.code +
                    "_" +
                    data.educationalLevel.code.toUpperCase() +
                    "_" +
                    pro.professionType.code.toUpperCase()
                ] = reader.result;

                imageData.push({
                  imageId:
                    "image_lightbox_" +
                    data.documentType.code +
                    "_" +
                    pro.educationalLevel.code +
                    "_" +
                    pro.professionType.code,
                  documenttype: data.documentType ? data.documentType.name : "",
                  documentCode:
                    data.documentType.code +
                    "_" +
                    data.educationalLevel.code.toUpperCase() +
                    "_" +
                    pro.professionType.code.toUpperCase(),
                  educationalLevel: data.educationalLevel
                    ? data.educationalLevel.name
                    : "",
                  fileName: event?.target?.files[0].name,
                  image: reader.result,
                });
                // documentsUploaded.value[data.documentType.code] = reader.result;
              },
              false
            );

            isImage.value[
              data.documentType.code +
                "_" +
                data.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase()
            ] = true;
            isPdf.value[
              data.documentType.code +
                "_" +
                data.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase()
            ] = false;

            reader.readAsDataURL(
              documentsUploaded.value[
                data.documentType.code +
                  "_" +
                  data.educationalLevel.code.toUpperCase() +
                  "_" +
                  pro.professionType.code.toUpperCase()
              ]
            );

            let icon = document.getElementById(
              "educational_icon_" +
                data.documentType.code +
                "_" +
                pro.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase()
            );
            if (icon.classList.contains("disabled")) {
              icon.classList.toggle("disabled");
            }

            let output = document.getElementById(
              "image_lightbox_" +
                data.documentType.code +
                "_" +
                pro.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase()
            );
            let outputHref = document.getElementById(
              "image_href_" +
                data.documentType.code +
                "_" +
                pro.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase()
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
            // formData.append(data.documentType.code, result);
          },
          error(err) {
            console.log(err.message);
          },
        });
      }
    };

    const urltoFile = async (data, fileName) => {
      let url = data;
      let file = await fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
          return new File([blob], fileName, {
            type: /\.(pdf)$/i.test(fileName) ? "application/pdf" : "image/png",
          });
        });
      return file;
    };
    const next = async () => {
      let documentValidation = await checkDocuments(
        errorDocuments.value,
        isBackButtonClicked.value,
        commonDocuments.value,
        fileUploadError.value,
        educationalDocs.value,
        documentsUploaded.value,
        newLicenseDocuments.value
      );
      fileUploadError.value = documentValidation.fileUploadError
        ? documentValidation.fileUploadError
        : [];
      errorDocuments.value = documentValidation.errorDocuments
        ? documentValidation.errorDocuments
        : [];
      if (errorDocuments.value && errorDocuments.value.length == 0) {
        let finalLocalData = {
          created: new Date(),
          data: [],
        };
        let db;
        let request = indexedDB.open("NLdocumentUploads", dbVersion);
        request.onsuccess = function () {
          db = request.result;
          let transaction = db.transaction(["NLdocumentUploads"], "readwrite");

          if (documentsUploaded.value.length > 0 && imageData.length > 0) {
            documentsUploaded.value.forEach((existing) => {
              imageData.forEach((newImage) => {
                if (existing.imageId == newImage.imageId) {
                  existing.image = newImage.image;
                  existing.fileName = newImage.fileName;
                }
              });
            });

            finalLocalData.data = toRaw(documentsUploaded.value);
            formData = new FormData();
            finalLocalData.data.forEach((element) => {
              urltoFile(element.image, element.fileName).then((res) => {
                let tempImage = res;

                formData.append(element.documentCode, tempImage);
              });
            });

            store.dispatch("newlicense/setTempDocs", formData);
          } else if (isBackButtonClicked.value == true) {
            finalLocalData.data = toRaw(documentsUploaded.value);
            formData = new FormData();

            finalLocalData.data.forEach((element) => {
              urltoFile(element.image, element.fileName).then((res) => {
                let tempImage = res;
                formData.append(element.documentCode, tempImage);
              });
            });

            store.dispatch("newlicense/setTempDocs", formData);
          } else {
            finalLocalData.data = imageData;
            store.dispatch("newlicense/setTempDocs", formData);
          }

          finalLocalData.data = [...new Set(finalLocalData.data)];

          const objectStore = transaction.objectStore("NLdocumentUploads");

          const objectStoreRequest = objectStore.clear();
          objectStoreRequest.onsuccess = () => {
            let addReq = transaction
              .objectStore("NLdocumentUploads")
              .put(finalLocalData);

            addReq.onerror = function () {
              alert(
                "Error regarding your browser, please update your browser to the latest version"
              );
            };

            transaction.oncomplete = function () {
              console.log("data stored");
              let tempNL = localStorage.getItem("tempNL")
                ? JSON.parse(localStorage.getItem("tempNL"))
                : {};
              tempNL.step = 3;
              tempNL.backButtonClicked = false;
              localStorage.setItem("tempNL", JSON.stringify(tempNL));
              emit("changeActiveState");
            };
          };
        };
      } else {
        toast.error(
          "Please attach documents marked with red border and this icon (*) next to their name to proceed",
          {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          }
        );
      }
    };
    const back = () => {
      let tempNL = localStorage.getItem("tempNL")
        ? JSON.parse(localStorage.getItem("tempNL"))
        : false;
      if (tempNL && tempNL.step != null) {
        tempNL.step = 1;
        tempNL.backButtonClicked = true;
        localStorage.setItem("tempNL", JSON.stringify(tempNL));
      }
      emit("changeActiveStateMinus");
    };

    const saveDraft = () => {
      generalInfo.value.licenseFile = [];
      isLoading.value = true;
      let license = {
        action: "DraftEvent",
        data: {
          applicantTypeId:
            localData.value && localData.value.applicantTypeSelected
              ? localData.value.applicantTypeSelected.id
              : null,
          residenceWoredaId:
            localData.value && localData.value.woredaSelected
              ? localData.value.woredaSelected.id
              : null,
          educations: localData.value ? localData.value.education : {},
          occupationTypeId: localData.value.occupationSelected
            ? localData.value.occupationSelected.id
            : null,
          nativeLanguageId: localData.value.nativeLanguageSelected
            ? localData.value.nativeLanguageSelected.id
            : null,
          isLegal: true,
          regionId: generalInfo.value.regionSelected
            ? generalInfo.value.regionSelected.id
            : "",
          regionCode: generalInfo.value.regionSelected
            ? generalInfo.value.regionSelected.code
            : "FED",
        },
      };
      store.dispatch("newlicense/addNewLicense", license).then((res) => {
        let licenseId = res.data.data.id;
        let payload = { document: formData, id: licenseId };
        store
          .dispatch("newlicense/uploadDocuments", payload)
          .then((res) => {
            if (res.data.status == "Success") {
              toast.success("Applied successfuly", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              isLoading.value = false;
              localStorage.removeItem("applicantTypeSelected");
              localStorage.removeItem("NLApplicationData");
              localStorage.removeItem("tempNL");
              localStorage.removeItem("isLicenseDesignation");
              indexedDB.deleteDatabase("NLdocumentUploads");
              location.reload();
            } else {
              toast.error("Error occured, please try again", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
            }
          })
          .catch(() => {
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

    const groupByKey = (array, key) => {
      return array.reduce((hash, obj) => {
        if (obj[key] === undefined || obj[key] == null || obj[key] == "")
          return hash;
        return Object.assign(hash, {
          [obj[key]]: (hash[obj[key]] || []).concat(obj),
        });
      }, {});
    };

    const addMore = (parentItem) => {
      if (
        showNestedDocuments.value[parentItem.documentType.code] == undefined
      ) {
        showNestedDocuments.value[parentItem.documentType.code] = 0;
      } else {
        showNestedDocuments.value[parentItem.documentType.code] =
          showNestedDocuments.value[parentItem.documentType.code] + 1;
      }
    };
    const removeChildUpload = (docCode) => {
      showNestedDocuments.value[docCode] -= 1;
    };
    const initDb = async () => {
      existingDocs;
      let request = indexedDB.open("NLdocumentUploads", dbVersion);

      request.onerror = function () {
        console.error("Unable to open database.");
      };

      request.onsuccess = function () {
        let db = request.result;
        const tx = db.transaction("NLdocumentUploads", "readonly");
        const store = tx.objectStore("NLdocumentUploads");
        let getAllIDB = store.getAll();
        getAllIDB.onsuccess = function (evt) {
          existingDocs =
            evt.target.result && evt.target.result[0]
              ? evt.target.result[0].data
              : {};
        };
      };

      request.onupgradeneeded = function () {
        let db = request.result;
        db.createObjectStore("NLdocumentUploads", {
          keyPath: "id",
          autoIncrement: true,
        });
      };
    };

    onMounted(async () => {
      let tryAgain = localStorage.getItem("tempNL")
        ? JSON.parse(localStorage.getItem("tempNL"))
        : false;
      window.addEventListener("darkModeChanged", (data) => {
        isDarkMode.value = data.detail ? data.detail.content : "";
      });
      //Initialize indexdb for file storage
      if (!("indexedDB" in window)) {
        alert(
          "This browser doesn't support Temporary storage please update your browser to the latest version"
        );
      } else {
        await initDb();
        localData.value = window.localStorage.getItem("NLApplicationData")
          ? JSON.parse(window.localStorage.getItem("NLApplicationData"))
          : {};

        generalInfo.value = localData.value;

        await store
          .dispatch("newlicense/getApplicationCategories")
          .then(async (res) => {
            let categoryResults = res.data.data
              ? res.data.data.filter((ele) => ele.code == "NA")
              : "";
            let educationLevels = generalInfo.value.multipleDepartment;
            //Get department docs
            await educationLevels.forEach((element) => {
              store
                .dispatch("newlicense/getNLdocuments", [
                  categoryResults[0].id,
                  generalInfo.value.applicantTypeSelected.id,
                  element.educationalLevel.id,
                  null,
                ])
                .then(async (res) => {
                  let result = res.data ? await res.data.data : [];
                  let resp = [];
                  newLicenseDocuments.value = result;
                  if (isLicenseDesignation.value == true) {
                    resp = result.filter(
                      (ed) =>
                        ed.documentType.code == "SUPINST" ||
                        ed.documentType.code == "SENSUP"
                    );
                  } else {
                    resp = result.filter(
                      (ed) =>
                        ed.documentType.code !== "SUPINST" &&
                        ed.documentType.code !== "SENSUP"
                    );
                  }
                  resp.forEach((ed, index) => {
                    if (
                      generalInfo.value &&
                      generalInfo.value.nativeLanguageSelected &&
                      generalInfo.value.nativeLanguageSelected.code !=
                        "NENGS" &&
                      ed.documentType.code == "ELPC"
                    ) {
                      resp.splice(index, 1);
                    }
                  });

                  educationalDocs.value.push({
                    educationalLevel: element.educationalLevel,
                    professionType: element.professionalType,
                    docs: resp.filter(
                      (element) =>
                        element.parentDocument == null ||
                        element.parentDocument == ""
                    ),
                    parentDoc: groupByKey(resp, "parentDocument"),
                  });

                  if (
                    existingDocs &&
                    existingDocs.length > 0 &&
                    resp &&
                    resp.length > 0
                  ) {
                    isBackButtonClicked.value = true;
                    documentsUploaded.value = existingDocs;
                    educationalDocs.value.forEach((ed) => {
                      ed.docs
                        .filter((docs) => docs.isRequired)
                        .forEach((Cd) => {
                          documentsUploaded.value.forEach((element) => {
                            if (
                              element.documentCode ===
                              Cd.documentType.code.toUpperCase() +
                                "_" +
                                ed.educationalLevel.code.toUpperCase() +
                                "_" +
                                ed.professionType.code.toUpperCase()
                            ) {
                              Cd.existingFile = element.image;
                              Cd.fileName = element.fileName;
                            }
                          });
                        });
                      for (const property in ed.parentDoc) {
                        ed.parentDoc[property].forEach((Cd) => {
                          documentsUploaded.value.forEach((element) => {
                            if (
                              element.documentCode ===
                              Cd.documentType.code.toUpperCase() +
                                "_" +
                                ed.educationalLevel.code.toUpperCase() +
                                "_" +
                                ed.professionType.code.toUpperCase()
                            ) {
                              Cd.existingFile = element.image;
                              Cd.fileName = element.fileName;
                            }
                          });
                        });
                      }
                    });
                  }
                  if (tryAgain && tryAgain.id != null && tryAgain.step == 3) {
                    next();
                  }
                });
            });

            //Get Common Docs

            await store
              .dispatch("newlicense/getCommonNLdocuments", [
                categoryResults[0].id,
                generalInfo.value.applicantTypeSelected.id,
              ])
              .then((res) => {
                let result = res.data.data;
                if (isLicenseDesignation.value == true) {
                  result = result.filter((el) => el.documentType.code == "PSP");
                }
                commonDocuments.value = result;
                if (
                  existingDocs &&
                  existingDocs.length > 0 &&
                  result &&
                  result.length > 0
                ) {
                  isBackButtonClicked.value = true;
                  alreadyUploaded.value = true;
                  documentsUploaded.value = existingDocs;
                  existingDocs.forEach((existing) => {
                    result.forEach((Cd) => {
                      if (
                        existing.imageId ==
                        "common_image_lightbox_" +
                          Cd.documentType.code.toUpperCase()
                      ) {
                        Cd.existingFile = existing.image;
                        Cd.fileName = existing.fileName;
                      }
                    });
                  });
                } else {
                  commonDocuments.value = result;
                }
              });
          });
      }
    });

    return {
      removeChildUpload,
      documents,
      isLoading,
      errorDocuments,
      fileSizeExceed,
      commonDocuments,
      files,
      handleFileUpload,
      showImage,
      alreadyUploaded,
      previewDocuments,
      showPreview,
      existingDocs,
      fileUploadError,
      handleCommonFileUpload,
      generalInfo,
      goToNext,
      saveDraft,
      isDarkMode,
      educationalDocs,
      imageUploader,
      next,
      back,
      addMore,
      showNestedDocuments,
      commonFileUploadHeaders,
    };
  },
};
</script>

<style>
.upload-button {
  cursor: pointer;
  background-color: #ffffff;
  color: #1f677e;
  border: 1px;
  border-radius: 5%;
  padding: 7px;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 34%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}

.document-name {
  font-size: small;
}

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
  color: #000000;
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
