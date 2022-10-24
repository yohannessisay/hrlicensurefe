<template>
  <div>
    <div class="accordion mr-8" id="FilesAccordion">
      <span
        v-if="errorDocuments && errorDocuments.length > 0"
        class="text-red-300"
        >Please upload files highlighted in red borders to proceed</span
      >
      <div
        class="accordion-item bg-white border border-grey-200 p-4 rounded-lg"
      >
        <h2 class="accordion-header mb-0" id="headingOne">
          <button
            class="
              accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              border-0
              rounded-md
              transition
              focus:outline-none
            "
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
          <div class="accordion-body py-4 px-5">
            <div class="bg-red-800 py-5">
              <div class="overflow-x-auto w-full p-4">
                <table
                  class="
                    max-w-4xl
                    w-full
                    whitespace-nowrap
                    rounded-lg
                    shadow-lg
                    mb-8
                    bg-white
                    divide-y
                    overflow-hidden
                  "
                >
                  <thead class="bg-lightMain-500">
                    <tr class="text-left">
                      <th
                        class="
                          font-semibold
                          text-sm
                          uppercase
                          px-6
                          py-4
                          text-white
                        "
                      >
                        Document Name
                      </th>
                      <th
                        class="
                          font-semibold
                          text-sm
                          uppercase
                          px-6
                          py-4
                          text-white
                        "
                      >
                        Document Description
                      </th>
                      <th
                        class="
                          font-semibold
                          text-sm
                          uppercase
                          px-6
                          py-4
                          text-left text-white
                        "
                      >
                        Upload
                      </th>
                      <th
                        class="
                          font-semibold
                          text-sm
                          uppercase
                          px-6
                          py-4
                          text-center text-white
                        "
                      ></th>

                      <th
                        class="
                          font-semibold
                          text-sm
                          uppercase
                          px-6
                          py-4
                          text-white
                        "
                      ></th>
                    </tr>
                  </thead>
                  <tbody class="">
                    <tr
                      v-for="item in commonDocuments"
                      :key="item.id"
                      :class="
                        fileUploadError[
                          'file_upload_row_' + `${item.documentType.code}`
                        ]
                          ? 'accordion-body py-4 px-5 border-2 border-red-300 rounded-lg'
                          : 'accordion-body py-4 px-5 border-b rounded-lg'
                      "
                    >
                      <td class="px-6 py-4">
                        <div class="flex items-center p-4">
                          <div>
                            <p class="">
                              {{ item.documentType.name }}
                              <b v-if="item.isRequired" class="text-red-300"
                                >(*)</b
                              >
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <div class="flex items-center p-4">
                          <div>
                            <p class="">
                              {{
                                item.documentType.description
                                  ? item.documentType.description
                                  : "---------------"
                              }}
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
                            accept=".jpeg, .png, .gif, .jpg, .pdf, .webp, .tiff , .svg"
                            :ref="`imageUploader${item.id}`"
                            class="custom-file-input"
                            v-on:change="handleCommonFileUpload(item, $event)"
                          />
                        </p>
                      </td>
                      <td class="px-6 py-4">
                        <span
                          class="document-name"
                          v-if="documentsSaved[item.documentType.code]"
                          >{{
                            documentsSaved[item.documentType.code].name
                          }}</span
                        >
                      </td>
                      <td class="px-6 py-4 text-center">
                        <a
                          :id="
                            'common_image_href' + item.documentType.id + item.id
                          "
                          :href="documentsSaved[item.documentType.code]?.path"
                          :data-title="item.name ? item.name : '-----'"
                          data-lightbox="example-2"
                        >
                          <i
                            :id="'common_icon' + item.documentType.id + item.id"
                            class="fa fa-eye cursor-pointer text-main-400"
                            aria-hidden="true"
                          >
                            <img
                              :id="
                                'common_image_lightbox' +
                                item.documentType.id +
                                item.id
                              "
                              v-bind:src="
                                documentsSaved[item.documentType.code]
                              "
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
    <div class="flex justify-end mr-8 mb-12">
      <button
        class="
          mt-8
          inline-block
          px-6
          py-2.5
          bg-white
          hover:bg-main-400 hover:text-white
          text-main-400 text-xs
          font-bold
          leading-tight
          uppercase
          rounded
          shadow-md
          active:border-main-400
          transition
          duration-150
          ease-in-out
          border
        "
        @click="back()"
      >
        back
      </button>
      <button
        class="
          mt-8
          inline-block
          px-6
          py-2.5
          bg-white
          hover:bg-main-400 hover:text-white
          text-main-400 text-xs
          font-bold
          leading-tight
          uppercase
          rounded
          shadow-md
          active:border-main-400
          transition
          duration-150
          ease-in-out
          border
        "
        @click="next()"
      >
        next
      </button>
    </div>
  </div>
  <filePreview :modalData="filePreviewData"> </filePreview>
</template>
<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";

import MAX_FILE_SIZE from "../../../../composables/documentMessage";
import filePreview from "@/sharedComponents/FilePreview";
import { boolean } from "yargs";
import { googleApi } from "@/composables/baseURL";
import { useRoute } from "vue-router";
export default {
  components: { filePreview },

  setup(props, { emit }) {
    let store = useStore();
    const toast = useToast();
    const route = useRoute();
    let documents = ref([]);
    let commonDocuments = ref([]);
    let imageUploader = ref(null);
    let goToNext = ref(false);
    let educationalDocs = ref([]);
    let fileUploadError = ref([]);
    let filePreviewData = ref({
      isImage: boolean,
      isPdf: boolean,
      file: "",
      name: "",
    });
    let files = ref("");
    let maxFileSize = ref(5000000);
    let parentDocs = ref([]);
    let isImage = ref({});
    let isPdf = ref({});
    let fileSizeExceed = ref({});
    let fileSize = ref("");
    let showImage = ref(false);
    let previewDocuments = ref({});
    let showPreview = ref("");
    maxFileSize.value = MAX_FILE_SIZE.MAX_FILE_SIZE;
    let generalInfo = ref({});
    let documentUploaded = ref({});
    let documentToSave = ref({});
    let imageData = [];
    let formData = new FormData();
    let documentsSaved = ref({});
    let documentsUploaded = ref({});
    let renewalDocuments = ref([]);
    let errorDocuments = ref([]);
    let showNestedDocuments = ref({});

    const previewFile = (code, name) => {
      filePreviewData.value.isImage = isImage.value[code];
      filePreviewData.value.isPdf = isPdf.value[code];
      filePreviewData.value.file = previewDocuments.value[code];
      filePreviewData.value.name = name;
    };

    const handleFileUpload = (data, event) => {
      documentUploaded.value[data.documentType.code] = "";
      documentUploaded.value[data.documentType.code] = event?.target?.files[0];
      formData.append(data.documentType.code, event?.target?.files[0]);

      documentsUploaded.value[data.documentType.code] = event?.target?.files[0];
      let reader = new FileReader();
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
        reader.addEventListener(
          "load",
          function () {
            showPreview.value = true;

            previewDocuments.value[data.documentType.code] = reader.result;
            imageData.push({
              documenttype: data.documentType ? data.documentType.name : "",
              educationalLevel: data.educationalLevel
                ? data.educationalLevel.name
                : "",
              image: reader.result,
            });
            documentToSave.value[data.documentType.code] = reader.result;
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

            reader.readAsDataURL(
              documentUploaded.value[data.documentType.code]
            );
          } else if (
            /\.(pdf)$/i.test(
              documentUploaded.value[data.documentType.code].name
            )
          ) {
            isImage.value[data.documentType.code] = false;
            isPdf.value[data.documentType.code] = true;
            reader.readAsDataURL(
              documentUploaded.value[data.documentType.code]
            );
          }
        }
      } else {
        fileSizeExceed.value[data.documentType.code] = true;
        documentUploaded.value[data.documentType.code] = "";
      }
      let icon = document.getElementById(
        "common_icon" + data.documentType.id + data.id
      );
      icon.classList.toggle("disabled");
      let output = document.getElementById(
        "common_image_lightbox" + data.documentType.id + data.id
      );
      let outputHref = document.getElementById(
        "common_image_href" + data.documentType.id + data.id
      );
      outputHref.href = URL.createObjectURL(event.target.files[0]);
      output.src = URL.createObjectURL(event.target.files[0]);
      output.onload = function () {
        URL.revokeObjectURL(output.src); // free memory
      };
    };

    const checkDocuments = () => {
      let CMtemp = false;

      /// check   documents

      commonDocuments.value
        .filter((cd) => cd.isRequired)
        .forEach((element) => {
          CMtemp = documentsUploaded.value.hasOwnProperty(
            element.documentType.code
          );
          if (!CMtemp) {
            fileUploadError.value[
              "file_upload_row_" + element.documentType.code
            ] = true;
            errorDocuments.value.push({
              isCommon: true,
              name: element.documentType.name,
              code: element.documentType.code,
            });
          } else {
            fileUploadError.value[
              "file_upload_row_" + element.documentType.code
            ] = false;
          }
        });

      return CMtemp;
    };
    const next = () => {
      let documentValidation = checkDocuments();
      if (documentValidation) {
        store.dispatch("renewal/setTempDocs", formData).then(() => {
          //Save images to indexed Db

          let finalLocalData = {
            created: new Date(),
            data: [],
          };
          let db;
          let request = indexedDB.open("GSdocumentUploads", 1);
          request.onsuccess = function () {
            db = request.result;
            let transaction = db.transaction(
              ["GSdocumentUploads"],
              "readwrite"
            );

            finalLocalData.data = imageData;

            finalLocalData.data = [...new Set(finalLocalData.data)];

            const objectStore = transaction.objectStore("GSdocumentUploads");

            const objectStoreRequest = objectStore.clear();

            objectStoreRequest.onsuccess = (event) => {
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
        let errors = "";

        errorDocuments.value.forEach((element) => {
          if (!errors) {
            errors = element.name;
          } else {
            errors = errors + " , " + element.name;
          }
        });
        toast.error(
          "Please attach the following required documents " + errors,
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

    // const addMoreFile = (doc) => {
    //   //For future use on adding individual files, good luck

    //   divId.value == doc.length;
    //   if (divId.value < doc.length) {
    //     divId.value++;
    //     let divElement = document.createElement("div");
    //     divElement.classList.add("border-t-2");
    //     divElement.classList.add("mt-4");
    //     divElement.classList.add("mb-4");
    //     let toBeAddedDoc = doc[divId.value];
    //     let template =
    //       '<tr id="parent_doc_' +
    //       toBeAddedDoc.id +
    //       '" class="p-4 text-gray-300"><td class="px-6 py-4"><div class="flex items-center ml-8"><div><p class="">' +
    //       (toBeAddedDoc.documentType.name + "(optional)") +
    //       '</p></div></div></td><td class="px-6 py-4"><div class="flex items-center ml-8"><div><p class="">' +
    //       (toBeAddedDoc.documentType.description
    //         ? toBeAddedDoc.documentType.description
    //         : "") +
    //       '</p></div></div></td><td class="px-6 py-4 "><p class="ml-8"><input type="file" :id="files' +
    //       toBeAddedDoc.id +
    //       '" accept=".jpeg, .png, .gif, .jpg, .pdf, .webp, .tiff , .svg" :ref="imageUploader' +
    //       toBeAddedDoc.id +
    //       '" class="custom-file-input" v-on:change=" handleFileUpload(' +
    //       toBeAddedDoc +
    //       ', $event) " /></p></td><td><button id="remove_' +
    //       toBeAddedDoc.id +
    //       '" class="bg-main-400 mt-8 inline-block px-6 py-2.5 bg-main-400 hover:text-main-400 text-white text-xs font-bold leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out " onclick="removeFileUpload()>Remove </button> </td>';

    //     divElement.innerHTML = template;
    //     document.getElementById(doc[0].id).appendChild(divElement);
    //   }
    // };

    const initDb = () => {
      let request = indexedDB.open("GSdocumentUploads", 1);

      request.onerror = function () {
        console.error("Unable to open database.");
      };

      request.onupgradeneeded = function () {
        let db = request.result;
        db.createObjectStore("GSdocumentUploads", {
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
        .dispatch("goodstanding/getGoodStandingLicenseById", route.params.id)
        .then((res) => {
          if (res.data.data) {
            generalInfo.value = res.data.data;
            generalInfo.value?.documents.forEach((element) => {
              documentsSaved.value[element.fileName] = {};
              documentsSaved.value[element.fileName].path =
                googleApi + element.filePath;
              documentsSaved.value[element.fileName].name =
                element.originalFileName;
            });
            documentsUploaded.value = documentsSaved.value;

            store
              .dispatch("goodstanding/getApplicationCategories")
              .then((res) => {
                let categoryResults = res.data.data
                  ? res.data.data.filter((ele) => ele.code == "GS")
                  : "";
                let educationLevels = generalInfo.value.GSProfessionals;
              
                //Get department docs
                educationLevels.forEach((element) => {
                  store
                    .dispatch("goodstanding/getGSdocuments", [
                      categoryResults[0].id,
                      generalInfo.value.applicantType.id,
                      element.educationalLevel
                        ? element.educationalLevel.id
                        : element.educationLevel
                        ? element.educationLevel.id
                        : "",
                    ])
                    .then((res) => {
                      let resp = res.data.data;
                      renewalDocuments.value = res.data.data;
                      educationalDocs.value.push({
                        professionType:
                          element && element.professionType
                            ? element.professionType
                            : element
                            ? element.professionTypeId
                            : "",
                        educationalLevel: element.educationalLevel
                          ? element.educationalLevel
                          : element.educationLevel
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
                  .dispatch("goodstanding/getCommonGSdocuments", [
                    categoryResults[0].id,
                    generalInfo.value.applicantType.id,
                  ])
                  .then((res) => {
                    let result = res.data.data;
                    commonDocuments.value = result;
                  });
              });
          }
        });
    });
    const back = () => {
      emit("changeActiveStateMinus");
    };
    // emit("changeActiveStateMinus");

    return {
      documents,
      commonDocuments,
      files,
      fileUploadError,
      errorDocuments,
      handleFileUpload,
      showImage,
      previewDocuments,
      showPreview,
      previewFile,
      
      generalInfo,
      back,
      goToNext,
      educationalDocs,
      imageUploader,
      filePreviewData,
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