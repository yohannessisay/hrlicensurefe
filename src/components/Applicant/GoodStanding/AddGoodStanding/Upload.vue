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
            {{$t('Good Standing Letter Document Upload')}}
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
                :tableRows="documents"
                :fileUploadError="errorDocuments"
                :isDarkMode="isDarkMode"
                @handleCommonFileUpload="handleFileUpload"
              ></CommonFileUploadTable>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="shadow-md p-2 m-4 rounded-md text-yellow-300 border"
      v-if="errorDocuments && errorDocuments.length > 0"
    >
      <h2 class="text-yellow-300 font-bold text-2xl border-b">
        {{$t('Please attach the following files to proceed')}} 
      </h2>
      <li
        class="text-yellow-300 text-xl font-bold p-2 m-1"
        v-for="(error, index) in errorDocuments"
        :key="error"
      >
        <small class="text-xl">{{ index + 1 }}- </small>
        {{ error.name }}
      </li>
    </div>
    <div class="vld-parent mt-4">
      <loading
        :active="isLoading"
        :is-full-page="false"
        :color="'#2F639D'"
        :opacity="1"
      ></loading>
      <div class="flex justify-end mr-8">
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
          class="mt-8 inline-block px-6 py-2.5 bg-main-400 hover:text-main-400 text-white text-xs font-bold leading-tight uppercase rounded active:border-main-400 transition duration-150 ease-in-out"
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
import MAX_FILE_SIZE from "../../../../composables/documentMessage";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import CommonFileUploadTable from "../../Shared/FileUpload/CommonFileUploadTable.vue";
export default {
  components: { Loading, CommonFileUploadTable },
  emits: ["changeActiveState", "changeActiveStateMinus"],
  setup(props, { emit }) {
    let store = useStore();
    let toast = useToast();
    const router = useRouter();
    let commonFileUploadHeaders = ref([
      "Document Name",
      "Document Description",
      "Upload Document",
      "Uploaded File Name",
      "View",
    ]);
    let imageUploader = ref(null);
    let goToNext = ref(false);
    let departmentDocuments = [];
    let isLoading = ref(false);
    let documents = ref([]);
    let localData = ref();
    let files = ref("");
    let documentError = ref([]);
    let maxFileSize = ref();
    let imageData = [];
    let errorDocuments = ref([]);
    let isImage = ref({});
    let isPdf = ref({});
    let fileSizeExceed = ref({});
    let fileSize = ref("");
    let showImage = ref(false);
    let isBackButtonClicked = ref(false);
    let existingDocs = [];
    let previewDocuments = ref({});
    let showPreview = ref("");
    maxFileSize.value = MAX_FILE_SIZE.MAX_FILE_SIZE;
    let generalInfo = ref({});
    let documentUploaded = ref([]);
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    let formData = new FormData();

    const handleFileUpload = (data, event) => {
      documentUploaded.value[data.documentType.code] = event?.target?.files[0];
      let reader = new FileReader();

      formData.append(data.documentType.code, event?.target?.files[0]);
      isImage.value[data.documentType.code] = true;
      let fileS = documentUploaded.value[data.documentType.code].size;
      delete documentError.value["file_upload_row_" + data.documentType.code];
      fileSizeExceed.value[data.documentType.code] = false;
      showImage.value = true;

      if (fileS > 0 && fileS < 1000) {
        fileSize.value += "B";
      } else if (fileS > 1000 && fileS < 1000000) {
        fileSize.value = fileS / 1000 + "kB";
      } else {
        fileSize.value = fileS / 1000000 + "MB";
      }
      reader.addEventListener("load", function () {
        showPreview.value = true;

        previewDocuments.value[data.documentType.code] = reader.result;
        imageData = imageData.filter(
          (el) => el.documenttype != data.documentType.name
        );
        imageData.push({
          documenttype: data.documentType ? data.documentType.name : "",
          documentCode: data.documentType ? data.documentType.code : "",
          educationalLevel: data.educationalLevel
            ? data.educationalLevel.name
            : "",
          fileName: event?.target?.files[0].name,
          image: reader.result,
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
      }

      output
        ? (output.onload = function () {
            URL.revokeObjectURL(output.src); // free memory
          })
        : "";
    };

    const checkDocuments = () => {
      let temp = false;
      documentError.value = [];
      errorDocuments.value = [];
      existingDocs && existingDocs.length > 0
        ? documents.value
            .filter((cd) => cd.isRequired)
            .forEach((element) => {
              temp = existingDocs.filter(
                (el) => el.documentCode == element.documentType.code
              );
              if (temp.length == 0 || !temp) {
                documentError.value[
                  "file_upload_row_" + element.documentType.code
                ] = true;
                errorDocuments.value.push({
                  name: element.documentType.name,
                  code: element.documentType.code,
                });
              } else {
                delete documentError.value[
                  "file_upload_row_" + element.documentType.code
                ];
              }
            })
        : documents.value
            .filter((cd) => cd.isRequired)
            .forEach((element) => {
              temp = imageData.filter(
                (el) => el.documentCode == element.documentType.code
              );

              if (temp.length == 0 || !temp) {
                documentError.value[
                  "file_upload_row_" + element.documentType.code
                ] = true;

                errorDocuments.value.push({
                  name: element.documentType.name,
                  code: element.documentType.code,
                });
              } else {
                delete documentError.value[
                  "file_upload_row_" + element.documentType.code
                ];
              }
            });
      return documentError.value;
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
    const initDb = () => {
      let request = indexedDB.open("GSdocumentUploads", 1);

      request.onerror = function () {
        console.error("Unable to open database.");
      };

      request.onsuccess = function () {
        let db = request.result;
        const tx = db.transaction("GSdocumentUploads", "readwrite");
        const store = tx.objectStore("GSdocumentUploads");
        let getAllIDB = store.getAll();
        getAllIDB.onsuccess = function (evt) {
          existingDocs =
            evt.target.result &&
            evt.target.result[0] &&
            evt.target.result[0].data
              ? evt.target.result[0].data
              : {};
        };
      };

      request.onupgradeneeded = function () {
        let db = request.result;
        db.createObjectStore("GSdocumentUploads", {
          keyPath: "id",
          autoIncrement: true,
        });
      };
    };

    const next = () => {
      let documentValidation = checkDocuments();

      if (documentValidation && Object.keys(documentValidation).length == 0) {
        let finalLocalData = {
          created: new Date(),
          data: [],
        };
        let db;
        let request = indexedDB.open("GSdocumentUploads", 1);
        request.onsuccess = function () {
          db = request.result;
          let transaction = db.transaction(["GSdocumentUploads"], "readwrite");

          if (documentUploaded.value.length > 0 && imageData.length > 0) {
            documentUploaded.value.forEach((existing) => {
              imageData.forEach((newImage) => {
                if (existing.imageId == newImage.imageId) {
                  existing.image = newImage.image;
                  existing.fileName = newImage.fileName;
                }
              });
            });

            finalLocalData.data = toRaw(documentUploaded.value);
            formData = new FormData();
            finalLocalData.data.forEach((element) => {
              urltoFile(element.image, element.fileName).then((res) => {
                let tempImage = res;

                formData.append(element.documentCode, tempImage);
              });
            });

            store.dispatch("goodstanding/setTempDocs", formData);
          } else if (isBackButtonClicked.value == true) {
            finalLocalData.data = toRaw(documentUploaded.value);
            formData = new FormData();

            finalLocalData.data.forEach((element) => {
              urltoFile(element.image, element.fileName).then((res) => {
                let tempImage = res;
                formData.append(element.documentCode, tempImage);
              });
            });

            store.dispatch("goodstanding/setTempDocs", formData);
          } else {
            finalLocalData.data = imageData;
            store.dispatch("goodstanding/setTempDocs", formData);
          }

          finalLocalData.data = [...new Set(finalLocalData.data)];

          const objectStore = transaction.objectStore("GSdocumentUploads");

          const objectStoreRequest = objectStore.clear();

          objectStoreRequest.onsuccess = () => {
            let addReq = transaction
              .objectStore("GSdocumentUploads")
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
      } else {
        toast.error("Please attach the required documents ", {
          timeout: 5000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true,
        });
      }
    };
    const back = () => {
      emit("changeActiveStateMinus");
    };

    const saveDraft = () => {
      generalInfo.value.licenseFile = [];
      isLoading.value = true;
      let license = {
        action: "DraftEvent",
        data: {
          applicantId: generalInfo.value.applicantId,
          applicantTypeId: generalInfo.value.applicantTypeId.id,
          residenceWoredaId: generalInfo.value.woredaSelected
            ? generalInfo.value.woredaSelected.id
            : null,
          applicantTitleId: generalInfo.value.applicantTitleId
            ? generalInfo.value.applicantTitleId.id
            : "",
          whomGoodStandingFor: generalInfo.value.whomGoodStandingFor
            ? generalInfo.value.whomGoodStandingFor
            : "",
          applicantPositionId: generalInfo.value.applicantPosition
            ? generalInfo.value.applicantPosition.id
            : null,
          licenseIssuedDate: generalInfo.value.licenseIssuedDate
            ? generalInfo.value.licenseIssuedDate
            : null,
          whoIssued: generalInfo.value.whoIssued
            ? generalInfo.value.whoIssued
            : "",
          licenseRegistrationNumber: generalInfo.value.licenseRegistrationNumber
            ? generalInfo.value.licenseRegistrationNumber
            : "",
          professionType: {
            professionTypeId: generalInfo.value
              ? generalInfo.value.professionTypeId.id
              : null,
            educationLevelId: generalInfo.value
              ? generalInfo.value.educationLevelId.id
              : null,
            otherProfessionalType: generalInfo.value.otherProfessionType
              ? generalInfo.value.otherProfessionType
              : "",
            otherProfessionalTypeAmharic: generalInfo.value
              .otherProfessionTypeAmharic
              ? generalInfo.value.otherProfessionTypeAmharic
              : "",
          },
          regionId: generalInfo.value.regionSelected
            ? generalInfo.value.regionSelected.id
            : "",
          regionCode: generalInfo.value.regionSelected
            ? generalInfo.value.regionSelected.code
            : "FED",
          expertLevelId: generalInfo.value.expertLevelId
            ? generalInfo.value.expertLevelId
            : null,
          islegal: true,
          other_applicant_position: generalInfo.value.otherApplicantPosition
            ? generalInfo.value.otherApplicantPosition
            : "",
          departmentId: generalInfo.value.departmentId.id
            ? generalInfo.value.departmentId.id
            : null,
          feedback: generalInfo.value.feedback
            ? generalInfo.value.feedback
            : "",
        },
      };

      store
        .dispatch("goodstanding/addGoodstandingLicense", license)
        .then((res) => {
          let licenseId = res.data.data.id;
          let payload = { document: formData, id: licenseId };
          store
            .dispatch("goodstanding/updateDocuments", payload)
            .then((res) => {
              isLoading.value = false;
              if (res.data.status == "Success") {
                toast.success("Applied successfuly", {
                  timeout: 5000,
                  position: "bottom-center",
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  icon: true,
                });
                localStorage.removeItem("GSApplicationData");
                router.push({ path: "/Applicant/GoodStanding/draft" });
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

    onMounted(() => {
      window.addEventListener("darkModeChanged", (data) => {
        isDarkMode.value = data.detail ? data.detail.content : "";
      });
      if (!("indexedDB" in window)) {
        console.log("This browser doesn't support IndexedDB");
        return;
      } else {
        initDb();
      }
      localData.value = window.localStorage.getItem("GSApplicationData")
        ? JSON.parse(window.localStorage.getItem("GSApplicationData"))
        : {};
      if (Object.keys(localData.value).length != 0) {
        generalInfo.value = localData.value;

        store.dispatch("goodstanding/getApplicationCategories").then((res) => {
          let categoryResults = res.data.data
            ? res.data.data.filter((ele) => ele.code == "GSL")
            : "";

          store
            .dispatch("goodstanding/getGSdocuments", categoryResults[0].id)
            .then((res) => {
              let results = res.data.data;
              results = results.filter(
                (
                  (set) => (f) =>
                    !set.has(f.documentTypeId) && set.add(f.documentTypeId)
                )(new Set())
              );
              if (
                existingDocs &&
                existingDocs.length > 0 &&
                results &&
                results.length > 0
              ) {
                isBackButtonClicked.value = true;
                existingDocs.forEach((existing) => {
                  results.forEach((Cd) => {
                    if (
                      existing.documenttype &&
                      existing.documentCode == Cd.documentType.code
                    ) {
                      Cd.existingFile = existing.image;
                      Cd.fileName = existing.fileName;
                    }
                  });
                });
                documentUploaded.value = existingDocs;
                documents.value = results;
              } else {
                documents.value = results;
              }
            });
        });
      }
    });

    return {
      commonFileUploadHeaders,
      files,
      localData,
      handleFileUpload,
      showImage,
      previewDocuments,
      showPreview,
      saveDraft,
      documentError,
      generalInfo,
      goToNext,
      departmentDocuments,
      imageUploader,
      documents,
      errorDocuments,
      next,
      isLoading,
      back,
      isDarkMode,
    };
  },
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
