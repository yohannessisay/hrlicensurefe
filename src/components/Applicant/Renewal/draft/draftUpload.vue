<template>
  <div>
    <div class="text-yellow-300 p-2 rounded-md border mb-4 mt-2">
      <h2 class="text-yellow-300 font-bold text-xl">
        Note:- Please upload only the documents marked with a red asterisk
        <small class="text-red-300 text-xl"> (*) </small> to proceed to the next
        step.
      </h2>
    </div>
    <div class="accordion sm:mr-8" id="FilesAccordion">
      <span
        v-if="errorDocuments && errorDocuments.length > 0"
        class="text-red-300"
        >Upload all files highlighted in red borders to proceed</span
      >
      <div
        class="accordion-item bg-white border border-grey-200 sm:p-4 rounded-lg"
      >
        <h2 class="accordion-header mb-0" id="headingOne">
          <button
            class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0 rounded-md transition focus:outline-none"
            style="background: #d8d8d8 !important; color: #27687e !important"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#commonFilesAccordion"
            aria-expanded="true"
            aria-controls="commonFilesAccordion"
          >
            Common Files
          </button>
        </h2>
        <div
          id="commonFilesAccordion"
          class="accordion-collapse collapse show"
          aria-labelledby="commonFilesAccordionheading"
          data-bs-parent="#FilesAccordion"
        >
          <div class="accordion-body py-4">
            <div class="bg-red-800 py-5">
              <div class="overflow-x-auto w-full p-1">
                <CommonFileUploadTable
                  :headers="commonFileUploadHeaders"
                  :tableRows="commonDocuments"
                  :fileUploadError="fileUploadError"
                  :isDarkMode="isDarkMode"
                  :documentsSaved="documentsSaved"
                  @handleCommonFileUpload="handleCommonFileUpload"
                ></CommonFileUploadTable>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="accordion-item bg-white border border-grey-200 sm:p-2 mt-8 rounded-lg"
      >
        <h2 class="accordion-header mb-0" id="headingTwo">
          <button
            class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0 rounded-md transition focus:outline-none"
            style="background: #d8d8d8 !important; color: #27687e !important"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#departmentFilesAccordion"
            aria-expanded="true"
            aria-controls="departmentFilesAccordion"
          >
            Education Level Related Files
          </button>
        </h2>
        <div
          id="departmentFilesAccordion"
          class="accordion-collapse collapse show"
          aria-labelledby="departmentFilesAccordionheading"
          data-bs-parent="#FilesAccordion"
        >
          <div class="accordion-body sm:p-2">
            <div
              v-for="table in educationalDocs"
              :key="table"
              class="accordion-body sm:p-4ounded-lg"
            >
              <div class="accordion-body sm:p-1 p-0">
                <FileUploadTable
                  :headers="commonFileUploadHeaders"
                  :fileUploadError="fileUploadError"
                  :isDarkMode="isDarkMode"
                  :educationalDocs="educationalDocs"
                  :showNestedDocuments="showNestedDocuments"
                  :documentsSaved="documentsSaved"
                  @handleFileUpload="handleFileUpload"
                  @addMore="addMore"
                  @removeChildUpload="removeChildUpload"
                >
                </FileUploadTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="shadow-md p-2 m-4 rounded-md text-yellow-300 border"
      v-if="errorDocuments && errorDocuments.length > 0"
    >
      <h2 class="text-yellow-300 font-bold text-3xl border-b">
        Please attach the following files to proceed
      </h2>
      <li
        class="text-yellow-300 text-xl font-bold p-2 m-1"
        v-for="(error, index) in errorDocuments"
        :key="error"
      >
        <small class="text-grey-800 text-xl">{{ index + 1 }}- </small>
        {{ error.name }}
      </li>
    </div>
    <div class="flex justify-end mr-8 mb-12">
      <button
        class="mt-8 inline-block px-6 py-2.5 bg-white hover:bg-main-400 hover:text-white text-main-400 text-xs font-bold leading-tight uppercase rounded active:border-main-400 transition duration-150 ease-in-out border"
        @click="back()"
      >
        back
      </button>
      <button
        class="mt-8 inline-block px-6 py-2.5 bg-main-400 hover:bg-white hover:text-main-400 text-white text-xs font-bold leading-tight uppercase rounded active:border-main-400 transition duration-150 ease-in-out border"
        @click="next()"
      >
        next
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import Compressor from "compressorjs";
import MAX_FILE_SIZE from "../../../../composables/documentMessage";
import { googleApi } from "@/composables/baseURL";
import { useRoute } from "vue-router";
import { useToast } from "vue-toastification";
import { checkDocuments } from "../../Shared/services/checkDocumentUpload";
import CommonFileUploadTable from "../../Shared/SavedFileUpload/CommonFileUploadTable.vue";
import FileUploadTable from "../../Shared/SavedFileUpload/FileUploadTable.vue";
export default {
  components: { CommonFileUploadTable, FileUploadTable },

  setup(props, { emit }) {
    let store = useStore();
    const route = useRoute();
    let documents = ref([]);
    let commonDocuments = ref([]);
    let imageUploader = ref(null);
    let goToNext = ref(false);
    let educationalDocs = ref([]);
    let fileUploadError = ref([]);
    const toast = useToast();
    let files = ref("");
    let maxFileSize = ref(5000000);
    let isImage = ref({});
    let isPdf = ref({});
    let fileSize = ref("");
    let showImage = ref(false);
    let previewDocuments = ref({});
    let showPreview = ref("");
    maxFileSize.value = MAX_FILE_SIZE.MAX_FILE_SIZE;
    let generalInfo = ref({});
    let documentToSave = ref({});
    let imageData = [];
    let formData = new FormData();
    let documentsSaved = ref({});
    let documentsUploaded = ref({});
    let renewalDocuments = ref([]);
    let errorDocuments = ref([]);
    let showNestedDocuments = ref({});
    let commonFileUploadHeaders = ref([
      "Document Name",
      "Document Description",
      "Upload Document",
      "Uploaded File",
      "View Uploaded",
    ]);
    const handleCommonFileUpload = (data, event) => {
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

          isImage.value[data.documentType.code] = true;
          documentsUploaded.value[data.documentType.code] =
            event?.target?.files[0];
          formData.append(data.documentType.code, event?.target?.files[0]);

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
              documentsSaved[data.documentType.code] = reader.result;
            },
            false
          );

          if (documentsUploaded.value[data.documentType.code]) {
            if (
              /\.(jpe?g|png|gif)$/i.test(
                documentsUploaded.value[data.documentType.code].name
              )
            ) {
              isImage.value[data.documentType.code] = true;
              isPdf.value[data.documentType.code] = false;

              reader.readAsDataURL(
                documentsUploaded.value[data.documentType.code]
              );
            } else if (
              /\.(pdf)$/i.test(
                documentsUploaded.value[data.documentType.code].name
              )
            ) {
              isImage.value[data.documentType.code] = false;
              isPdf.value[data.documentType.code] = true;
              reader.readAsDataURL(
                documentsUploaded.value[data.documentType.code]
              );
            }
          }
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
        },
        error(err) {
          console.log(err.message);
        },
      });
    };

    const handleFileUpload = (data, event, pro) => {
      new Compressor(event?.target?.files[0], {
        quality: 0.5,

        // The compression process is asynchronous,
        // which means you have to access the `result` in the `success` hook function.
        success(result) {
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(new File([result], result.name));
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
          let reader = new FileReader();

          let fileS =
            documentsUploaded.value[
              data.documentType.code +
                "_" +
                data.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase()
            ].size;

          if (data.parentDocument) {
            documentsUploaded.value[
              data.documentType.code +
                "_" +
                data.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase()
            ] = event?.target?.files[0];
          } else {
            documentsUploaded.value[
              data.documentType.code +
                "_" +
                data.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase()
            ] = event?.target?.files[0];
          }

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

          if (
            documentsUploaded.value[
              data.documentType.code +
                "_" +
                data.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase()
            ]
          ) {
            if (
              /\.(jpe?g|png|gif)$/i.test(
                documentsUploaded.value[
                  data.documentType.code +
                    "_" +
                    data.educationalLevel.code.toUpperCase() +
                    "_" +
                    pro.professionType.code.toUpperCase()
                ].name
              )
            ) {
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
            } else if (
              /\.(pdf)$/i.test(
                documentsUploaded.value[
                  data.documentType.code +
                    "_" +
                    data.educationalLevel.code.toUpperCase() +
                    "_" +
                    pro.professionType.code.toUpperCase()
                ].name
              )
            ) {
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
              reader.readAsDataURL(
                documentsUploaded.value[
                  data.documentType.code +
                    "_" +
                    data.educationalLevel.code.toUpperCase() +
                    "_" +
                    pro.professionType.code.toUpperCase()
                ]
              );
            }
          }
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
        },
        error(err) {
          console.log(err.message);
        },
      });
    };

    const next = async () => {
      console.log( educationalDocs.value);
      let documentValidation = await checkDocuments(
        errorDocuments.value,
        false,
        commonDocuments.value,
        fileUploadError.value,
        educationalDocs.value,
        documentsUploaded.value,
        renewalDocuments.value
      );
      fileUploadError.value = documentValidation.fileUploadError
        ? documentValidation.fileUploadError
        : [];
      errorDocuments.value = documentValidation.errorDocuments
        ? documentValidation.errorDocuments
        : [];

      if (documentValidation && Object.keys(documentValidation).length == 0) {
        store.dispatch("renewal/setTempDocs", formData).then(() => {
          //Save images to indexed Db

          let finalLocalData = {
            created: new Date(),
            data: [],
          };
          let db;
          let request = indexedDB.open("RNdocumentUploads", 1);
          request.onsuccess = function () {
            db = request.result;
            let transaction = db.transaction(
              ["RNdocumentUploads"],
              "readwrite"
            );

            finalLocalData.data = imageData;

            finalLocalData.data = [...new Set(finalLocalData.data)];

            const objectStore = transaction.objectStore("RNdocumentUploads");

            const objectStoreRequest = objectStore.clear();

            objectStoreRequest.onsuccess = () => {
              let addReq = transaction
                .objectStore("RNdocumentUploads")
                .put(finalLocalData);

              addReq.onerror = function () {
                console.log(
                  "Error regarding your browser, please update your browser to the latest version"
                );
              };

              transaction.oncomplete = function () {
                console.log("data stored");
                emit("changeActiveState");
              };
            };
          };
        });
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
 
    const groupByKey = (array, key) => {
      return array.reduce((hash, obj) => {
        if (obj[key] === undefined || obj[key] == null) return hash;
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

    const initDb = () => {
      let request = indexedDB.open("RNdocumentUploads", 1);

      request.onerror = function () {
        console.error("Unable to open database.");
      };

      request.onupgradeneeded = function () {
        let db = request.result;
        db.createObjectStore("RNdocumentUploads", {
          keyPath: "id",
          autoIncrement: true,
        });
      };
    };
    onMounted(() => {
      //Initialize indexdb for file storage
      if (!("indexedDB" in window)) {
        console.log("This browser doesn't support IndexedDB");
        return;
      } else {
        initDb();
      }
      store
        .dispatch("renewal/getRenewalApplication", route.params.id)
        .then((res) => {
          if (res.data.data) {
            let localData = JSON.parse(
              localStorage.getItem("RNApplicationData")
            );
            let professionChanged = localData.professionChanged;
            if (professionChanged && professionChanged == true) {
              documentsUploaded.value = [];
              documentsSaved.value = [];
              generalInfo.value = localData;
            } else {
              generalInfo.value = res.data.data;
              generalInfo.value?.documents.forEach((element) => {
                documentsSaved.value[element.fileName] = {};
                documentsSaved.value[element.fileName].path =
                  googleApi + element.filePath;
                documentsSaved.value[element.fileName].name =
                  element.originalFileName;
              });
              documentsUploaded.value = documentsSaved.value;
              store.dispatch("renewal/getApplicationCategories").then((res) => {
                let categoryResults = res.data.data
                  ? res.data.data.filter((ele) => ele.code == "RA")
                  : "";
                let educationLevels =
                  generalInfo.value.multipleDepartment &&
                  generalInfo.value.multipleDepartment.length > 0
                    ? generalInfo.value.multipleDepartment
                    : generalInfo.value.educations
                    ? generalInfo.value.educations
                    : [];

                //Get department docs
                educationLevels.forEach((element) => {
                  store
                    .dispatch("renewal/getRNdocuments", [
                      categoryResults[0].id,
                      generalInfo.value.applicantType.id,
                      element.educationLevel.id,
                      element.department.id,
                    ])
                    .then((res) => {
                      let resp = res.data.data;
                      renewalDocuments.value = res.data.data;
                      educationalDocs.value.push({
                        professionType:
                          element && element.professionType
                            ? element.professionType
                            : "",
                        educationalLevel: element.educationLevel
                          ? element.educationLevel
                          : "",
                        docs: resp.filter(
                          (element) => element.parentDocument == null
                        ),
                        parentDoc: groupByKey(resp, "parentDocument"),
                      });
                       
                    });
                    
                });

                    
                //Get Common Docs

                store
                  .dispatch("renewal/getCommonRNdocuments", [
                    categoryResults[0].id,
                    generalInfo.value.applicantType.id,
                  ])
                  .then((res) => {
                    let result = res.data.data;
                    commonDocuments.value = result;
                  });
              });
            }
          }
        });
    });
    const back = () => {
      emit("changeActiveStateMinus");
    };
    const removeChildUpload = (docCode) => {
      showNestedDocuments.value[docCode] -= 1;
    };
    const isDarkMode = false;
    return {
      isDarkMode,
      commonFileUploadHeaders,
      removeChildUpload,
      documents,
      commonDocuments,
      files,
      fileUploadError,
      errorDocuments,
      handleFileUpload,
      showImage,
      previewDocuments,
      showPreview,
      handleCommonFileUpload,
      generalInfo,
      back,
      goToNext,
      educationalDocs,
      imageUploader,
      next,
      documentsSaved,
      googleApi,
      addMore,
      showNestedDocuments,
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
.document-name {
  font-size: small;
}
</style>
