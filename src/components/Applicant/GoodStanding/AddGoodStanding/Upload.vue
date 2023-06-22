<template>
  <div>
    <div class="accordion mr-8" id="FilesAccordion">
      <div class="accordion-item bg-white border border-grey-200 p-4 rounded-lg">
        <h2 class="accordion-header mb-0" id="headingOne">
          <span
            class="rounded-md collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-main-400 hover:text-main-400 text-white border-0 transition focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#commonFilesAccordion"
            aria-expanded="true"
            aria-controls="commonFilesAccordion"
          >
            Good Standing Letter Files
          </span>
        </h2>
        <div
          id="commonFilesAccordion"
          class="accordion-collapse collapse show"
          aria-labelledby="commonFilesAccordionheading"
          data-bs-parent="#FilesAccordion"
        >
          <div class="accordion-body py-4 px-5">
            <div class="bg-red-800 py-5">
              <div class="overflow-x-auto w-full rounded-lg">
                <table class="max-w-4xl w-full whitespace-nowrap bg-white">
                  <thead class="bg-lightMain-500">
                    <tr class="text-left">
                      <th class="font-semibold text-sm uppercase px-6 py-4 text-white">
                        Document Name
                      </th>
                      <th class="font-semibold text-sm uppercase px-6 py-4 text-white">
                        Document Description
                      </th>
                      <th
                        class="font-semibold text-sm uppercase px-6 py-4 text-left text-white"
                      >
                        Upload
                      </th>
                      <th
                        class="font-semibold text-sm uppercase px-6 py-4 text-center text-white"
                      >
                        View
                      </th>
                      <th
                        class="font-semibold text-sm uppercase px-6 py-4 text-white"
                      ></th>
                    </tr>
                  </thead>
                  <tbody class="divide-y">
                    <tr
                      v-for="item in documents"
                      :key="item.id"
                      :class="
                        documentError['file_upload_row_' + item.documentType.code]
                          ? 'border text-red-300'
                          : 'border-b text-main-400'
                      "
                    >
                      <td class="px-6 py-4">
                        <div class="flex items-center space-x-3">
                          <div>
                            <p class="">{{ item.documentType.name }}</p>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <div class="flex items-center space-x-3">
                          <div>
                            <p class="">
                              {{ item.documentType.description }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <p class="text-sm font-semibold tracking-wide">
                          <input
                            type="file"
                            required
                            :id="`files${item.id}`"
                            accept=".jpeg, .jpg, .pdf"
                            :ref="`imageUploader${item.id}`"
                            class="custom-file-input"
                            v-on:change="handleFileUpload(item, $event)"
                          />
                        </p>
                      </td>
                      <td class="px-6 py-4" v-if="item && item.fileName">
                        <div class="flex items-center p-4">
                          <div>
                            <p class="">
                              {{ item.fileName ? item.fileName : "---------------" }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 text-center" v-if="item && item.existingFile">
                        <a
                          :id="'common_image_href_' + item.documentType.id + item.id"
                          :href="item.existingFile"
                          :data-title="item.name ? item.name : '-----'"
                          data-lightbox="example-2"
                        >
                          <i
                            :id="'common_icon_' + item.documentType.id + item.id"
                            class="fa fa-eye cursor-pointer text-main-400"
                            aria-hidden="true"
                          >
                            <img
                              :id="
                                'common_image_lightbox_' + item.documentType.id + item.id
                              "
                              :src="item.existingFile"
                              class="w-full h-2 object-cover"
                            />
                          </i>
                        </a>
                      </td>
                      <td class="px-6 py-4 text-center" v-else>
                        <a
                          :id="'common_image_href_' + item.documentType.id + item.id"
                          href=""
                          :data-title="item.name ? item.name : '-----'"
                          data-lightbox="example-2"
                        >
                          <i
                            :id="'common_icon' + item.documentType.id + item.id"
                            class="fa fa-eye cursor-pointer text-main-400 disabled"
                            aria-hidden="true"
                          >
                            <img
                              :id="
                                'common_image_lightbox_' + item.documentType.id + item.id
                              "
                              src=""
                              class="w-full h-2 object-cover"
                            />
                          </i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          class="mt-8 inline-block px-6 py-2.5 bg-white hover:bg-main-400 hover:text-white text-main-400 text-xs font-bold leading-tight uppercase rounded shadow-md active:border-main-400 transition duration-150 ease-in-out border"
          type="submit"
          @click="saveDraft()"
        >
          Save as draft
        </button>
        <button
          class="mt-8 inline-block px-6 py-2.5 bg-white hover:bg-main-400 hover:text-white text-main-400 text-xs font-bold leading-tight uppercase rounded shadow-md active:border-main-400 transition duration-150 ease-in-out border"
          @click="back()"
        >
          back
        </button>
        <button
          class="mt-8 inline-block px-6 py-2.5 bg-main-400 hover:text-main-400 text-white text-xs font-bold leading-tight uppercase rounded shadow-md active:border-main-400 transition duration-150 ease-in-out"
          @click="next()"
        >
          next
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import MAX_FILE_SIZE from "../../../../composables/documentMessage";
import { boolean } from "yargs";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
export default {
  setup(props, { emit }) {
    let store = useStore();
    let toast = useToast();
    const router = useRouter();
    let imageUploader = ref(null);
    let goToNext = ref(false);
    let departmentDocuments = [];

    let documents = ref([]);
    let filePreviewData = ref({
      isImage: boolean,
      isPdf: boolean,
      file: "",
      name: "",
    });
    let localData = ref();
    let files = ref("");
    let documentError = ref([]);
    let maxFileSize = ref();
    let imageData = [];
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
    const previewFile = (code, name) => {
      filePreviewData.value.isImage = isImage.value[code];
      filePreviewData.value.isPdf = isPdf.value[code];
      filePreviewData.value.file = previewDocuments.value[code];
      filePreviewData.value.name = name;
    };
    let formData = new FormData();

    const handleFileUpload = (data, event) => {
      documentUploaded.value[data.documentType.code] = event?.target?.files[0];
      let reader = new FileReader();

      formData.append(data.documentType.code, event?.target?.files[0]);
      isImage.value[data.documentType.code] = true;
      let fileS = documentUploaded.value[data.documentType.code].size;
      if (fileS <= maxFileSize.value / 1000) {
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
          imageData = imageData.filter((el) => el.documenttype != data.documentType.name);
          imageData.push({
            documenttype: data.documentType ? data.documentType.name : "",
            documentCode: data.documentType ? data.documentType.code : "",
            educationalLevel: data.educationalLevel ? data.educationalLevel.name : "",
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
      } else {
        fileSizeExceed.value[data.documentType.code] = true;
        documentUploaded.value[data.documentType.code] = "";
      }
      let icon = document.getElementById("common_icon" + data.documentType.id + data.id);
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
        ? (output.onload = function () {
            URL.revokeObjectURL(output.src); // free memory
          })
        : "";
    };

    const checkDocuments = () => {
      let temp = false;
      existingDocs && existingDocs.length > 0
        ? documents.value
            .filter((cd) => cd.isRequired)
            .forEach((element) => {
              temp = existingDocs.filter(
                (el) => el.documentCode == element.documentType.code
              );
              if (!temp) {
                documentError.value[
                  "file_upload_row_" + element.documentType.code
                ] = true;
              } else {
                documentError.value[
                  "file_upload_row_" + element.documentType.code
                ] = false;
              }
            })
        : documents.value
            .filter((cd) => cd.isRequired)
            .forEach((element) => {
              temp = imageData.filter(
                (el) => el.documentCode == element.documentType.code
              );
              if (!temp) {
                documentError.value[
                  "file_upload_row_" + element.documentType.code
                ] = true;
              } else {
                documentError.value[
                  "file_upload_row_" + element.documentType.code
                ] = false;
              }
            });
      return temp;
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
            evt.target.result && evt.target.result[0] ? evt.target.result[0].data : {};
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
      if (documentValidation) {
        store.dispatch("goodstanding/setTempDocs", formData).then(() => {
          let finalLocalData = {
            created: new Date(),
            data: [],
          };
          let db;
          let request = indexedDB.open("GSdocumentUploads", 1);
          request.onsuccess = function () {
            db = request.result;
            let transaction = db.transaction(["GSdocumentUploads"], "readwrite");

            if (existingDocs.length > 0) {
              imageData.forEach((newImage) => {
                existingDocs.forEach((existing) => {
                  if (existing.documentCode == newImage.documentCode) {
                    existing.image = newImage.image;
                  }
                });
              });
              finalLocalData.data = existingDocs;
            } else {
              finalLocalData.data = imageData;
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
        });
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
          whoIssued: generalInfo.value.whoIssued ? generalInfo.value.whoIssued : "",
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
            otherProfessionalTypeAmharic: generalInfo.value.otherProfessionTypeAmharic
              ? generalInfo.value.otherProfessionTypeAmharic
              : "",
          },
          expertLevelId: generalInfo.value.expertLevelId
            ? generalInfo.value.expertLevelId
            : null,
          islegal: true,

          departmentId: generalInfo.value.departmentId.id
            ? generalInfo.value.departmentId.id
            : null,
          feedback: generalInfo.value.feedback ? generalInfo.value.feedback : "",
        },
      };

      store.dispatch("goodstanding/addGoodstandingLicense", license).then((res) => {
        let licenseId = res.data.data.id;
        let payload = { document: formData, id: licenseId };
        store
          .dispatch("goodstanding/updateDocuments", payload)
          .then((res) => {
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
      //Initialize indexdb for file storage
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
                ((set) => (f) => !set.has(f.documentTypeId) && set.add(f.documentTypeId))(
                  new Set()
                )
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
                documents.value = results;
              } else {
                documents.value = results;
              }
            });
        });
      }
    });

    return {
      files,
      localData,
      handleFileUpload,
      showImage,
      previewDocuments,
      showPreview,
      previewFile,
      saveDraft,
      documentError,
      generalInfo,
      goToNext,
      departmentDocuments,
      imageUploader,
      documents,
      filePreviewData,
      next,
      back,
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
.shadow-lg {
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
