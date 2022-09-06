<template>
  <div>
    <div class="accordion mr-8" id="FilesAccordion">
      <div
        class="accordion-item bg-white border border-grey-200 p-4 rounded-lg"
      >
        <h2 class="accordion-header mb-0" id="headingOne">
          <span
            class="
              rounded-md
              collapsed
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-main-400
              hover:text-main-400
              text-white
              border-0
              transition
              focus:outline-none
            "
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
          class="accordion-collapse collapse"
          aria-labelledby="commonFilesAccordionheading"
          data-bs-parent="#FilesAccordion"
        >
          <div class="accordion-body py-4 px-5">
            <div class="bg-red-800 py-5">
              <div class="overflow-x-auto w-full">
                <table
                  class="
                    max-w-4xl
                    w-full
                    whitespace-nowrap
                    rounded-lg
                    bg-white
                    divide-y
                    overflow-hidden
                  "
                >
                  <thead class="bg-main-400">
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
                      >
                        View
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
                      ></th>
                    </tr>
                  </thead>
                  <tbody class="divide-y">
                    <tr
                      v-for="item in documents"
                      :key="item.id"
                      class="border-b text-main-400"
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
                            :id="`files${item}`"
                            accept=".jpeg, .png, .gif, .jpg, .pdf, .webp, .tiff , .svg"
                            :ref="`imageUploader${item}`"
                            class="custom-file-input"
                            v-on:change="handleFileUpload(item, $event)"
                          />
                        </p>
                      </td>

                      <td class="px-6 py-4 text-center">
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#filePreview"
                          @click="
                            previewFile(
                              item.documentType.code,
                              item.documentType.name
                            )
                          "
                        >
                          <i
                            class="fa fa-eye cursor-pointer"
                            aria-hidden="true"
                          ></i>
                        </span>
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
    <div class="flex justify-end mr-8">
      <button
        class="
          mt-8
          inline-block
          px-6
          py-2.5
          bg-main-400
          hover:text-main-400
          text-white text-xs
          font-bold
          leading-tight
          uppercase
          rounded
          shadow-md
          active:border-main-400
          transition
          duration-150
          ease-in-out
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
import MAX_FILE_SIZE from "../../../../composables/documentMessage";
import filePreview from "@/sharedComponents/FilePreview";
import { boolean } from "yargs";

export default {
  components: { filePreview },

  setup(props, { emit }) {
    let store = useStore();
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
    let maxFileSize = ref();
    let imageData = [];
    let isImage = ref({});
    let isPdf = ref({});
    let fileSizeExceed = ref({});
    let fileSize = ref("");
    let showImage = ref(false);
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
    const handleCommonFileUpload = (code, event) => {
      documentUploaded.value[code] = event?.target?.files[0];
      let reader = new FileReader();
      isImage.value[code] = true;
      let fileS = documentUploaded.value[code].size;
      if (fileS <= maxFileSize.value / 1000) {
        fileSizeExceed.value[code] = false;
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

            previewDocuments.value[code] = reader.result;
          },
          false
        );
        if (documentUploaded.value[code]) {
          if (/\.(jpe?g|png|gif)$/i.test(documentUploaded.value[code].name)) {
            isImage.value[code] = true;
            isPdf.value[code] = false;

            reader.readAsDataURL(documentUploaded.value[code]);
          } else if (/\.(pdf)$/i.test(documentUploaded.value[code].name)) {
            isImage.value[code] = false;
            isPdf.value[code] = true;
            reader.readAsDataURL(documentUploaded.value[code]);
          }
        }
      } else {
        fileSizeExceed.value[code] = true;
        documentUploaded.value[code] = "";
      }
    };

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
    };
    const next = () => { 

      store.dispatch("goodstanding/setTempDocs", formData);
      window.localStorage.setItem(
        "GSApplicationData",
        JSON.stringify(generalInfo.value)
      );
      window.localStorage.setItem(
        "GSApplicationImageData",
        JSON.stringify(imageData)
      );
      emit("changeActiveState");
    };

    onMounted(() => {
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

              documents.value = results.filter(
                (
                  (set) => (f) =>
                    !set.has(f.documentTypeId) && set.add(f.documentTypeId)
                )(new Set())
              );
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
      handleCommonFileUpload,
      generalInfo,
      goToNext,
      departmentDocuments,
      imageUploader,
      documents,
      filePreviewData,
      next,
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
