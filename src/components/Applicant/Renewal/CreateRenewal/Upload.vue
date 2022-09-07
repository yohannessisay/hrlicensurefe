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
            Common Files
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
                      v-for="item in commonDocuments"
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
                            :id="`files${item.id}`"
                            accept=".jpeg, .png, .gif, .jpg, .pdf, .webp, .tiff , .svg"
                            :ref="`imageUploader${item.id}`"
                            class="custom-file-input"
                            v-on:change="handleCommonFileUpload(item, $event)"
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
      <div
        class="
          accordion-item
          bg-white
          border border-grey-200
          p-4
          mt-8
          rounded-lg
        "
      >
        <h2 class="accordion-header mb-0" id="headingTwo">
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
            data-bs-target="#departmentFilesAccordion"
            aria-expanded="true"
            aria-controls="departmentFilesAccordion"
          >
            Education Level Related Files
          </span>
        </h2>
        <div
          id="departmentFilesAccordion"
          class="accordion-collapse collapse"
          aria-labelledby="departmentFilesAccordionheading"
          data-bs-parent="#FilesAccordion"
        >
          <div class="accordion-body py-4 px-5">
            <div
              v-for="table in educationalDocs"
              :key="table"
              class="border-b-4 text-main-400 mb-8"
            >
              <h4 class="text-main-400 font-bold">
                {{ table.educationalLevel ? table.educationalLevel.name : "" }}
                Related Files
              </h4>

              <div class="overflow-x-auto w-full p-4">
                <table
                  class="
                    max-w-4xl
                    w-full
                    whitespace-nowrap
                    rounded-lg
                    bg-white
                    shadow-lg
                    divide-y divide-gray-300
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
                          text-white
                        "
                      >
                        Required
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
                      v-for="item in table.docs"
                      :key="item.id"
                      class="border-b text-main-400"
                    >
                      <td class="px-6 py-4">
                        <div class="flex items-center space-x-3">
                          <div>
                            <p class="">
                              {{ item.documentType.name }}
                            </p>
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
                        <div class="flex items-center space-x-3">
                          <div>
                            <p class="">
                              {{ item.isRequired ? "Yes" : "No" }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <p class="">
                          <input
                            type="file"
                            :required="item.isRequired"
                            :id="`files${item.id}`"
                            accept=".jpeg, .png, .gif, .jpg, .pdf, .webp, .tiff , .svg"
                            :ref="`imageUploader${item.id}`"
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

                <h4 class="text-main-400 font-bold mt-2">
                  Multiple File Uploads For
                  {{
                    table.educationalLevel ? table.educationalLevel.name : ""
                  }}
                </h4>

                <table
                  v-for="(parentDoc, index) in table.parentDoc"
                  :key="index"
                  class="
                    max-w-4xl
                    w-full
                    mt-2
                    whitespace-nowrap
                    rounded-lg
                    bg-white
                    shadow-lg
                    divide-y divide-gray-300
                    overflow-hidden
                  "
                >
                  <h4 class="text-main-400 font-bold mt-2">
                    Multiple File Uploads For
                    {{
                      parentDoc[0].documentType.name.slice(
                        0,
                        parentDoc[0].documentType.name.length - 2
                      )
                    }}
                  </h4>
                  <thead class="bg-primary-300">
                    <tr class="text-left">
                      <th
                        class="
                          font-semibold
                          text-sm
                          uppercase
                          px-6
                          py-4
                          text-main-400
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
                          text-main-400
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
                          text-main-400
                        "
                      >
                        Required
                      </th>
                      <th
                        class="
                          font-semibold
                          text-sm
                          uppercase
                          px-6
                          py-4
                          text-left text-main-400
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
                          text-center text-main-400
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
                          text-main-400
                        "
                      ></th>
                    </tr>
                  </thead>
                  <tbody class="divide-y">
                    <tr
                      v-for="(item, key) in parentDoc"
                      :key="key"
                      class="border-b text-main-400"
                    >
                      <td class="px-6 py-4">
                        <div class="flex items-center space-x-3">
                          <div>
                            <p class="">
                              {{ item.documentType.name }}
                            </p>
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
                        <div class="flex items-center space-x-3">
                          <div>
                            <p class="">{{ item.isRequired }}</p>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <p class="">
                          <input
                            type="file"
                            :id="`files${item.id}`"
                            accept=".jpeg, .png, .gif, .jpg, .pdf, .webp, .tiff , .svg"
                            :ref="`imageUploader${item.id}`"
                            class="custom-file-input"
                            v-on:change="handleFileUpload(item, $event)"
                          />
                        </p>
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
    let documents = ref([]);
    let commonDocuments = ref([]);
    let imageUploader = ref(null);
    let goToNext = ref(false);
    let educationalDocs = ref([]);
    let localData = ref({});
    let filePreviewData = ref({
      isImage: boolean,
      isPdf: boolean,
      file: "",
      name: "",
    });
    let files = ref("");
    let maxFileSize = ref();
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

    const previewFile = (code, name) => {
      filePreviewData.value.isImage = isImage.value[code];
      filePreviewData.value.isPdf = isPdf.value[code];
      filePreviewData.value.file = previewDocuments.value[code];
      filePreviewData.value.name = name;
    };

    const handleCommonFileUpload = (data, event) => {
      documentUploaded.value[data.documentType.code] = "";
      documentUploaded.value[data.documentType.code] = event?.target?.files[0];
      formData.append(data.documentType.code, event?.target?.files[0]);
 
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
    };

    const handleFileUpload = (data, event) => {
      documentUploaded.value[data.documentType.code] = event?.target?.files[0];
      let reader = new FileReader();
      formData.append(data.educationalLevel.code.slice(0,2).toUpperCase() + "_" +data.documentType.code, event?.target?.files[0]);
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
            // documentUploaded.value[data.documentType.code] = reader.result;
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
    const checkForFiles = (docs) => {};
    const next = () => {
      checkForFiles(documentUploaded.value);
      store.dispatch("renewal/setTempDocs", formData).then(() => {
        window.localStorage.setItem(
          "RNApplicationImageData",
          JSON.stringify(imageData)
        );
        emit("changeActiveState");
      });
    };

    const groupByKey = (array, key) => {
      return array.reduce((hash, obj) => {
        if (obj[key] === undefined || obj[key] == null) return hash;
        return Object.assign(hash, {
          [obj[key]]: (hash[obj[key]] || []).concat(obj),
        });
      }, {});
    };

    onMounted(() => {
      localData.value = window.localStorage.getItem("RNApplicationData")
        ? JSON.parse(window.localStorage.getItem("RNApplicationData"))
        : {};
      if (Object.keys(localData.value).length != 0) {
        generalInfo.value = localData.value;

        store.dispatch("renewal/getApplicationCategories").then((res) => {
          let categoryResults = res.data.data
            ? res.data.data.filter((ele) => ele.code == "NA")
            : "";
          let educationLevels = generalInfo.value.multipleDepartment;
          //Get department docs
          educationLevels.forEach((element) => {
            store
              .dispatch("renewal/getRNdocuments", [
                categoryResults[0].id,
                generalInfo.value.applicantTypeSelected.id,
                element.educationalLevel.id,
              ])
              .then((res) => {
                let resp = res.data.data;

                educationalDocs.value.push({
                  educationalLevel: element.educationalLevel,
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
              generalInfo.value.applicantTypeSelected.id,
            ])
            .then((res) => {
              let result = res.data.data;
              commonDocuments.value = result;
            });
        });
      }
    });

    return {
      documents,
      commonDocuments,
      files,
      handleFileUpload,
      showImage,
      previewDocuments,
      showPreview,
      previewFile,
      handleCommonFileUpload,
      generalInfo,
      goToNext,
      educationalDocs,
      imageUploader,
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
