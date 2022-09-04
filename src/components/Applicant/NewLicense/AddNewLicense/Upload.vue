<template>
  <main-content>
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
                              v-on:change="
                                handleCommonFileUpload(
                                  item.documentCode,
                                  $event
                                )
                              "
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
              <div v-for="table in educationalDocs" :key="table" class="border-b-4 text-main-400 mb-8">
                <h4 class="text-main-400 font-bold">
                  {{
                    table.educationalLevel ? table.educationalLevel.name : ""
                  }}
                  Related Files
                </h4>

                <div class="overflow-x-auto w-full">
                  <table
                    class="
                      max-w-4xl
                      w-full
                      whitespace-nowrap
                      rounded-lg
                      bg-white
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
                                {{ item.isRequired?'Yes':'No' }}
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
  </main-content>
</template>
<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import MAX_FILE_SIZE from "../../../../composables/documentMessage";
import filePreview from "@/sharedComponents/FilePreview";
import { boolean } from "yargs";
import MainContent from "../sharedComponents/Menu.vue";

export default {
  components: { filePreview, MainContent },

  setup() {
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
      let reader = new FileReader();
      isImage.value[
        data.educationalLevel ? data.educationalLevel.code : ""
      ] = true;
      let fileS = event.target.files[0].size;
      if (fileS <= maxFileSize.value / 1000) {
        fileSizeExceed.value[
          data.educationalLevel ? data.educationalLevel.code : ""
        ] = false;
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

            previewDocuments.value[
              data.educationalLevel ? data.educationalLevel.code : ""
            ] = reader.result;
          },
          false
        );
        if (event.target.files[0]) {
          if (/\.(jpe?g|png|gif)$/i.test(event.target.files[0].name)) {
            isImage.value[
              data.educationalLevel ? data.educationalLevel.code : ""
            ] = true;
            isPdf.value[
              data.educationalLevel ? data.educationalLevel.code : ""
            ] = false;

            reader.readAsDataURL(event.target.files[0]);
            documentUploaded.value.push({
              documentType: data.documentType.name,
              educationalLevel: data.educationalLevel.name,
              file: event.target.files[0],
              fileName: event.target.files[0].name,
              base: previewDocuments.value,
              code: data.educationalLevel ? data.educationalLevel.code : "",
            });
          } else if (/\.(pdf)$/i.test(event.target.files[0].name)) {
            isImage.value[
              data.educationalLevel ? data.educationalLevel.code : ""
            ] = false;
            isPdf.value[
              data.educationalLevel ? data.educationalLevel.code : ""
            ] = true;
            reader.readAsDataURL(event.target.files[0]);
            documentUploaded.value.push({
              documentType: data.documentType.name,
              educationalLevel: data.educationalLevel.name,
              file: event.target.files[0],
              fileName: event.target.files[0].name,
              base: previewDocuments.value,
              code: data.educationalLevel ? data.educationalLevel.code : "",
            });
          }
        }
      } else {
        fileSizeExceed.value[
          data.educationalLevel ? data.educationalLevel.code : ""
        ] = true;
        event.target.files[0] = "";
      }
    };
    const checkForFiles=(docs)=>{
      console.log(docs)
    }
    const next = () => {
      let imageData = [];

      documentUploaded.value.forEach((element) => {
        imageData.push({
          documenttype: element.documentType,
          educationalLevel: element.educationalLevel,
          image: element.base[element.code ? element.code : ""],
        });
      });
      checkForFiles(documentUploaded.value)

      window.localStorage.setItem(
        "NLApplicationImageData",
        JSON.stringify(imageData)
      );
      // emit("changeActiveState");
    };
    onMounted(() => {
      localData.value = window.localStorage.getItem("NLApplicationData")
        ? JSON.parse(window.localStorage.getItem("NLApplicationData"))
        : {};
      if (Object.keys(localData.value).length != 0) {
        generalInfo.value = localData.value;

        store.dispatch("newlicense/getApplicationCategories").then((res) => {
          let categoryResults = res.data.data
            ? res.data.data.filter((ele) => ele.code == "NA")
            : "";
          let educationLevels = generalInfo.value.multipleDepartment;
          //Get department docs
          educationLevels.forEach((element) => {
            store
              .dispatch("newlicense/getNLdocuments", [
                categoryResults[0].id,
                generalInfo.value.applicantTypeSelected.id,
                element.educationalLevel.id,
              ])
              .then((res) => {
                let result = res.data.data;

                educationalDocs.value.push({
                  educationalLevel: element.educationalLevel,
                  docs: result,
                });
              });
          });
         
          //Get Common Docs

          store
            .dispatch("newlicense/getCommonNLdocuments", [
              categoryResults[0].id,
              generalInfo.value.applicantTypeSelected.id,
            ])
            .then((res) => {
              let result = res.data.data;
              commonDocuments.value = result;
            });

            console.log(educationalDocs.value);
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
