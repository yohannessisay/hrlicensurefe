<template>
  <div class="flex flex-row mr-10">
    <div v-for="element in generalInfo.multipleDepartment" class="mr-10">
      {{ element.department.name }}
    </div>
  </div>
  <div>
    <table class="min-w-full h-full">
      <thead>
        <th
          class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
        >
          Document Name
        </th>
        <th
          class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
        >
          Document Description
        </th>

        <th
          class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
        >
          Upload
        </th>
        <th
          class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
        >
          Status
        </th>
        <th
          class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
        >
          View
        </th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in documents">
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
                  style="visibility:hidden; max-width: 20px;"
                  v-on:change="handleFileUpload(item.documentCode, $event)"
                />
                <span
                  class="document-name"
                  v-if="fileName[item.documentCode]"
                  >{{ fileName[item.documentCode] }}</span
                >
              </div>
            </div>
          </td>
          <td class="px-4 py-1 border-gray-200 bg-white text-sm">
            <div class="flex text-center">
              <div v-if="fileName[item.documentCode]">
                <i class="fa fa-check" title="Uploaded"> </i>
              </div>
            </div>
          </td>
          <td class="px-2 py-1 border-gray-200 bg-white text-sm">
            <div class="flex bg-white">
              <div class=" bg-white">
                <span
                  data-bs-toggle="modal"
                  data-bs-target="#filePreview"
                  @click="previewFile(item.documentCode, item.documentName)"
                >
                  <i class="fa fa-eye cursor-pointer" aria-hidden="true"></i>
                </span>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
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

  setup() {
    let documents = ref([]);
    let imageUploader = ref(null);
    let fileName = ref({});
    let generalInfo = ref({});
    let store = useStore();
    documents = [
      {
        documentName: "passport",
        documentDescription: "passport",
        documentCode: "PSP",
        parentCode: "",
      },
      {
        documentName: "Health exam certificate",
        documentDescription: "passport",
        documentCode: "HEC",
        parentCode: "",
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
        parentCode: "",
      },
      {
        documentName: "COC",
        documentDescription: "COC Document",
        documentCode: "COC",
        parentCode: "COC",
      },
      {
        documentName: "COC1",
        documentDescription: "COC",
        documentCode: "COC1",
        parentCode: "COC",
      },
      {
        documentName: "COC2",
        documentDescription: "COC2",
        documentCode: "COC2",
        parentCode: "COC",
      },
      {
        documentName: "COC3",
        documentDescription: "COC3",
        documentCode: "COC3",
        parentCode: "COC",
      },
      {
        documentName: "COC4",
        documentDescription: "COC4",
        documentCode: "COC4",
        parentCode: "COC",
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

    let documentUploaded = ref({});
    const previewFile = (code, name) => {
      filePreviewData.value.isImage = isImage.value[code];
      filePreviewData.value.isPdf = isPdf.value[code];
      filePreviewData.value.file = previewDocuments.value[code];
      filePreviewData.value.name = name;
      // console.log(filePreviewData.value);
    };

    const handleFileUpload = (code, event) => {
      console.log(event?.target?.files);
      documentUploaded.value[code] = event?.target?.files[0];
      fileName.value[code] = documentUploaded.value[code].name;
      console.log(documentUploaded.value);
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
          function() {
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

    onMounted(() => {
      generalInfo.value = store.getters["newlicense/getGeneralInfo"];
      console.log(generalInfo.value);
    });
    return {
      documents,
      files,
      handleFileUpload,
      showImage,
      previewDocuments,
      showPreview,
      previewFile,
      imageUploader,
      filePreviewData,
      fileName,
      generalInfo,
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
</style>
