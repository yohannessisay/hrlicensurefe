<template>
  <div>
    <div class="accordion sm:mr-8 mt-24" id="FilesAccordion">
      <div
        :class="
          isDarkMode
            ? 'accordion-item bg-secondaryDark  border border-grey-200  rounded-lg'
            : 'accordion-item  bg-white border border-grey-200  rounded-lg'
        "
      >
        <h2 id="headingOne" class="accordion-header mb-0 mr-1">
          <button
            class="accordion-button relative flex items-center w-full p-4 border text-gray-800 py-8 text-xl rounded-md transition focus:outline-none"
            style="background: #d8d8d8 !important; color: #27687e !important"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#commonFilesAccordion"
            aria-expanded="true"
            aria-controls="commonFilesAccordion"
          >
            {{ $t("Lost License Document Upload") }}
          </button>
        </h2>
        <div class="vld-parent mt-4">
          <loading
            :active="isLoading"
            :is-full-page="false"
            :color="'#2F639D'"
            :opacity="0.6"
            class="rounded-md"
          ></loading>
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
                  :tableRows="documents"
                  :fileUploadError="errorDocuments"
                  :isDarkMode="isDarkMode"
                  :documentsSaved="documentsSaved"
                  @handleCommonFileUpload="handleFileUpload"
                ></CommonFileUploadTable>
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

    <div class="flex justify-end mr-8">
      <button
        class="mt-8 inline-block px-6 py-2.5 bg-white hover:bg-main-400 hover:text-white text-main-400 text-xs font-bold leading-tight uppercase rounded active:border-main-400 transition duration-150 ease-in-out border"
        type="submit"
        @click="saveDraft()"
      >
        {{ $t("Update") }}
      </button>
      <button
        class="mt-8 inline-block px-6 py-2.5 bg-white hover:bg-main-400 hover:text-white text-main-400 text-xs font-bold leading-tight uppercase rounded active:border-main-400 transition duration-150 ease-in-out border"
        @click="back()"
      >
        {{ $t("Back") }}
      </button>
      <button
        class="mt-8 inline-block px-6 py-2.5 bg-main-400 hover:text-main-400 text-white text-xs font-bold leading-tight uppercase rounded active:border-main-400 transition duration-150 ease-in-out"
        @click="next()"
      >
        {{ $t("Next") }}
      </button>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import MAX_FILE_SIZE from "../../../../composables/documentMessage";
import { useToast } from "vue-toastification";
import { googleApi } from "@/composables/baseURL";
import { useRoute } from "vue-router";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import Loading from "vue3-loading-overlay";
import CommonFileUploadTable from "../../Shared/SavedFileUpload/CommonFileUploadTable.vue";
export default {
  components: { Loading, CommonFileUploadTable },
  setup(props, { emit }) {
    let store = useStore();
    let toast = useToast();
    let route = useRoute();
    let commonFileUploadHeaders = ref([
      "Document Name",
      "Document Description",
      "Upload Document",
      "Uploaded File",
      "View Uploaded"
    ]);
    let imageUploader = ref(null);
    let goToNext = ref(false);
    let departmentDocuments = [];
    let isLoading = ref(false);
    let documents = ref([]);
    let errorDocuments = ref([]);
    let localData = ref();
    let files = ref("");
    let documentError = ref([]);
    let maxFileSize = ref();
    let imageData = [];
    let isImage = ref({});
    let documentsSaved = ref([]);
    let isPdf = ref({});
    let fileSizeExceed = ref({});
    let fileSize = ref("");
    let showImage = ref(false);
    let existingDocs = [];
    let previewDocuments = ref({});
    let documentsUploaded = ref([]);
    let showPreview = ref("");
    maxFileSize.value = MAX_FILE_SIZE.MAX_FILE_SIZE;
    let generalInfo = ref({});
    let documentUploaded = ref([]);
    let formData = new FormData();
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    const handleFileUpload = (data, event) => {
      documentUploaded.value[data.documentType.code] = event?.target?.files[0];
      let reader = new FileReader();

      formData.append(data.documentType.code, event?.target?.files[0]);
      isImage.value[data.documentType.code] = true;
      delete documentError.value["file_upload_row_" + data.documentType.code];
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
      reader.addEventListener("load", function() {
        showPreview.value = true;

        previewDocuments.value[data.documentType.code] = reader.result;

        imageData = imageData.filter(
          el => el.documenttype != data.documentType.name
        );
        imageData.push({
          documenttype: data.documentType ? data.documentType.name : "",
          documentCode: data.documentType ? data.documentType.code : "",
          educationalLevel: data.educationalLevel
            ? data.educationalLevel.name
            : "",
          image: reader.result
        });
      });
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
        "common_icon" + data.documentType.id + data.id
      );
      if (icon.classList.contains("disabled")) {
        icon.classList.toggle("disabled");
      }

      let output = document.getElementById(
        "common_image_lightbox" + data.documentType.id + data.id
      );

      let outputHref = document.getElementById(
        "common_image_href" + data.documentType.id + data.id
      );
      outputHref.href = URL.createObjectURL(event.target.files[0]);
      if (output && output.src) {
        output.src = URL.createObjectURL(event.target.files[0]);
      }

      output
        ? (output.onload = function() {
            URL.revokeObjectURL(output.src); // free memory
          })
        : "";
    };

    const initDb = () => {
      let request = indexedDB.open("LLdocumentUploads", 1);

      request.onerror = function() {
        console.error("Unable to open database.");
      };

      request.onsuccess = function() {
        let db = request.result;
        const tx = db.transaction("LLdocumentUploads", "readwrite");
        const store = tx.objectStore("LLdocumentUploads");
        let getAllIDB = store.getAll();
        getAllIDB.onsuccess = function(evt) {
          existingDocs =
            evt.target.result && evt.target.result[0]
              ? evt.target.result[0].data
              : {};
        };
      };

      request.onupgradeneeded = function() {
        let db = request.result;
        db.createObjectStore("LLdocumentUploads", {
          keyPath: "id",
          autoIncrement: true
        });
      };
    };
    const checkDocuments = () => {
      let temp = false;
      documentError.value = [];
      errorDocuments.value = [];
      existingDocs && existingDocs.length > 0
        ? documents.value
            .filter(cd => cd.isRequired)
            .forEach(element => {
              temp = existingDocs.filter(
                el => el.documentTypeCode == element.documentType.code
              );
              if (temp.length == 0 || !temp) {
                documentError.value[
                  "file_upload_row_" + element.documentType.code
                ] = true;
                errorDocuments.value.push({
                  name: element.documentType.name,
                  code: element.documentType.code
                });
              } else {
                delete documentError.value[
                  "file_upload_row_" + element.documentType.code
                ];
              }
            })
        : documents.value
            .filter(cd => cd.isRequired)
            .forEach(element => {
              temp = imageData.filter(
                el => el.documentCode == element.documentType.code
              );

              if (temp.length == 0 || !temp) {
                documentError.value[
                  "file_upload_row_" + element.documentType.code
                ] = true;

                errorDocuments.value.push({
                  name: element.documentType.name,
                  code: element.documentType.code
                });
              } else {
                delete documentError.value[
                  "file_upload_row_" + element.documentType.code
                ];
              }
            });
      return documentError.value;
    };
    const next = () => {
      let documentValidation = checkDocuments();
      if (documentValidation && Object.keys(documentValidation).length == 0) {
        store.dispatch("lostLicenses/setTempDocs", formData).then(() => {
          let finalLocalData = {
            created: new Date(),
            data: []
          };
          let db;
          let request = indexedDB.open("LLdocumentUploads", 1);
          request.onsuccess = function() {
            db = request.result;
            let transaction = db.transaction(
              ["LLdocumentUploads"],
              "readwrite"
            );
            let tempStat = false;

            if (
              imageData &&
              imageData.length > 0 &&
              existingDocs &&
              existingDocs.length > 0
            ) {
              imageData.forEach(newImage => {
                existingDocs.forEach(existing => {
                  if (existing.documentTypeCode == newImage.documentCode) {
                    tempStat = true;
                    return 0;
                  } else {
                    finalLocalData.data.push(existing);
                  }
                });
                if (tempStat == true) {
                  finalLocalData.data.push(newImage);
                }
              });
              finalLocalData.data.concat(imageData);
            } else {
              finalLocalData.data = imageData;
            }

            const objectStore = transaction.objectStore("LLdocumentUploads");

            const objectStoreRequest = objectStore.clear();

            objectStoreRequest.onsuccess = () => {
              let addReq = transaction
                .objectStore("LLdocumentUploads")
                .put(finalLocalData);

              addReq.onerror = function() {
                console.log(
                  "Error regarding your browser, please update your browser to the latest version"
                );
              };

              transaction.oncomplete = function() {
                console.log("data stored");

                emit("changeActiveState");
              };
            };
          };
        });
      } else {
        toast.error("Please attach the required documents ", {
          timeout: 5000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true
        });
      }
    };
    const back = () => {
      emit("changeActiveStateMinus");
    };

    onMounted(() => {
      window.addEventListener("darkModeChanged", data => {
        isDarkMode.value = data.detail ? data.detail.content : "";
      });
      if (!("indexedDB" in window)) {
        console.log("This browser doesn't support IndexedDB");
        return;
      } else {
        initDb();
      }

      store
        .dispatch("lostLicenses/getLostLicenseById", route.params.id)
        .then(res => {
          generalInfo.value = res.data.data;
          generalInfo.value?.documents.forEach(element => {
            documentsSaved.value[element.documentTypeCode] = {};
            documentsSaved.value[element.documentTypeCode].path =
              googleApi + element.filePath;
            documentsSaved.value[element.documentTypeCode].name =
              element.documentType.name;
            documentsSaved.value[element.documentTypeCode].code =
              element.documentType.code;
            documentsSaved.value[element.documentTypeCode].fileName =
              element.fileName;
          });

          existingDocs = generalInfo.value?.documents;
        });

      localData.value = window.localStorage.getItem("LLApplicationData")
        ? JSON.parse(window.localStorage.getItem("LLApplicationData"))
        : {};

      generalInfo.value = localData.value;
      store.dispatch("goodstanding/getApplicationCategories").then(res => {
        let categoryResults = res.data.data
          ? res.data.data.filter(ele => ele.code == "LL")
          : "";

        store
          .dispatch("lostLicenses/getLLdocuments", categoryResults[0].id)
          .then(res => {
            let results = res.data.data;

            documents.value = results.filter(
              (set => f =>
                !set.has(f.documentTypeId) && set.add(f.documentTypeId))(
                new Set()
              )
            );
          });
      });
    });

    return {
      files,
      localData,
      handleFileUpload,
      showImage,
      previewDocuments,
      showPreview,
      documentsSaved,
      documentsUploaded,
      documentError,
      generalInfo,
      goToNext,
      departmentDocuments,
      imageUploader,
      documents,
      isLoading,
      errorDocuments,
      next,
      back,
      isDarkMode,
      commonFileUploadHeaders
    };
  }
};
</script>

<style>
.upload-button {
  cursor: pointer;
  background-color: #1f677e;
  color: white;
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
  background: #1f677e;
  border-radius: 3px;
  padding: 5px 5px;
  outline: none;
  color: white;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
}
.custom-file-input:hover::before {
}
.custom-file-input:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
</style>
