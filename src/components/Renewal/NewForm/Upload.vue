<template>
  <div>
    <button
      class="
        inline-block
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out
      "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#commonFiles"
      aria-expanded="false"
      aria-controls="commonFiles"
    >
      Common Files Upload
    </button>
    <button
      class="
        inline-block
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out
      "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainFiles"
      aria-expanded="false"
      aria-controls="mainFiles"
    >
      Department Files Upload
    </button>

    <div class="collapse" id="commonFiles">
      <div class="block p-6 rounded-lg shadow-lg bg-white mt-8">
        <h4 class="text-primary-600 font-bold">Common Files</h4>
        <table
          class="min-w-full h-full"
          style="overflow-x: scroll; overflow-y: scroll"
        >
          <thead>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-700
                uppercase
                tracking-wider
              "
            >
              Document Name
            </th>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-700
                uppercase
                tracking-wider
              "
            >
              Document Description
            </th>

            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-700
                uppercase
                tracking-wider
              "
            >
              Upload
            </th>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-700
                uppercase
                tracking-wider
              "
            >
              Status
            </th>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-700
                uppercase
                tracking-wider
              "
            >
              View
            </th>
          </thead>
          <tbody>
            <tr v-for="item in documents" :key="item.id">
              <td class="px-2 py-3 border-gray-200 bg-white text-sm">
                <div class="flex">
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ item.documentName }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-2 py-1 border-gray-200 bg-white text-sm">
                <div class="flex">
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ item.documentDescription }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-2 py-1 border-gray-200 bg-white text-sm">
                <div class="flex">
                  <div class="">
                    <label :for="`files${index}`" class="upload-button"
                      >Upload</label
                    >

                    <input
                      type="file"
                      class=""
                      :id="`files${index}`"
                      accept=".jpeg, .png, .gif, .jpg, .pdf, .webp, .tiff , .svg"
                      :ref="`imageUploader${index}`"
                      style="visibility: hidden; max-width: 20px"
                      v-on:change="handleFileUpload(item.documentCode, $event)"
                    />
                  </div>
                </div>
              </td>
              <td class="px-4 py-1 border-gray-200 bg-white text-sm">
                <div class="flex text-center">
                  <div>
                    <i class="fa fa-check" title="Uploaded"> </i>
                  </div>
                </div>
              </td>
              <td class="px-2 py-1 border-gray-200 bg-white text-sm">
                <div class="flex bg-white">
                  <div class="bg-white">
                    <span
                      data-bs-toggle="modal"
                      data-bs-target="#filePreview"
                      @click="previewFile(item.documentCode, item.documentName)"
                    >
                      <i
                        class="fa fa-eye cursor-pointer"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="collapse" id="mainFiles">
      <div
        class="block p-6 rounded-lg shadow-lg bg-white mt-8"
        v-for="table in generalInfo.multipleDepartment"
        :key="table"
      >
        <h4 class="text-primary-600 font-bold">
          {{ table.department ? table.department.name : "" }} Department Related
          Files
        </h4>
        <table
          class="min-w-full h-full"
          style="overflow-x: scroll; overflow-y: scroll"
        >
          <thead>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-700
                uppercase
                tracking-wider
              "
            >
              Document Name
            </th>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-700
                uppercase
                tracking-wider
              "
            >
              Document Description
            </th>

            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-700
                uppercase
                tracking-wider
              "
            >
              Upload
            </th>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-700
                uppercase
                tracking-wider
              "
            >
              Status
            </th>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-700
                uppercase
                tracking-wider
              "
            >
              View
            </th>
          </thead>
          <tbody>
            <tr v-for="(item, index) in departmentDocuments" :key="item.id">
              <td class="px-2 py-3 border-gray-200 bg-white text-sm">
                <div class="flex">
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ item.documentType.name }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-2 py-1 border-gray-200 bg-white text-sm">
                <div class="flex">
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ item.documentType.description }}
                    </p>
                  </div>
                </div>
              </td>

              <td class="px-2 py-1 border-gray-200 bg-white text-sm">
                <div class="flex">
                  <div class="">
                    <input
                      type="file"
                      :required="item.isRequired"
                      :id="`files${index}`"
                      accept=".jpeg, .png, .gif, .jpg, .pdf, .webp, .tiff , .svg"
                      :ref="`imageUploader${index}`"
                      class="custom-file-input"
                      v-on:change="handleFileUpload(item, $event)"
                    />
                  </div>
                </div>
              </td>

              <td class="px-4 py-1 border-gray-200 bg-white text-sm">
                <div class="flex text-center">
                  <div>
                    <i class="fa fa-check" title="Uploaded"> </i>
                  </div>
                </div>
              </td>
              <td class="px-2 py-1 border-gray-200 bg-white text-sm">
                <div class="flex bg-white">
                  <div class="bg-white">
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
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <button
      class="
        mt-8
        inline-block
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out
      "
      @click="next()"
    >
      next
    </button>
  </div>
  <filePreview :modalData="filePreviewData"> </filePreview>
</template>
<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import MAX_FILE_SIZE from "../../../composables/documentMessage";
import filePreview from "@/sharedComponents/FilePreview";
import { boolean } from "yargs";

export default {
  components: { filePreview },

  setup(props, { emit }) {
    let store = useStore();
    let documents = ref([]);
    let imageUploader = ref(null);
    let goToNext = ref(false);
    let departmentDocuments = [];

    documents = [
      {
        documentName: "passport",
        documentDescription: "passport",
        documentCode: "PSP",
      },
      {
        documentName: "Health exam certificate",
        documentDescription: "passport",
        documentCode: "HEC",
      },
      {
        documentName: "herqa",
        documentDescription: "passport",
        documentCode: "HERQA",
      },
      {
        documentName: "transcript",
        documentDescription: "passport",
        documentCode: "TRS",
      },
      {
        documentName: "passport",
        documentDescription: "passport",
        documentCode: "PSP1",
      },
    ];
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
      // console.log(filePreviewData.value);
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
    const next = () => {
      let imageData = [];

      documentUploaded.value.forEach((element) => {
        imageData.push({
          documenttype: element.documentType,
          educationalLevel: element.educationalLevel,
          image: element.base[element.code ? element.code : ""],
        });
      });

      window.localStorage.setItem(
        "NLApplicationImageData",
        JSON.stringify(imageData)
      );
      // emit("changeActiveState");
    };
    onMounted(() => {
      generalInfo.value = store.getters["renewal/getGeneralInfo"];
      generalInfo.value
        ? generalInfo.value.multipleDepartment.forEach((element) => {
            departmentDocuments.push({
              educationData: element,
              id: 1,
              documentType: {
                name: "Tempo",
                code: "TEMP",
                description: "doc",
                id: 1,
              },
              isRequired: true,
              educationalLevel: {
                code: "DEG",
                name: "Degree",
                id: 2,
              },
              isCommonDocument: false,
            });
          })
        : "";
    });
    return {
      documents,
      files,
      handleFileUpload,
      showImage,
      previewDocuments,
      showPreview,
      previewFile,
      generalInfo,
      goToNext,
      departmentDocuments,
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
  background-color: #50c878;
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
  background: #089ca7;
  border-radius: 3px;
  padding: 5px 5px;
  outline: none;
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
