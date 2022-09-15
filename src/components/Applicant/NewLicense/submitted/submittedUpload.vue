<template>
  <div>
    <div class="accordion mr-8" id="FilesAccordion">
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
                        <div class="flex items-center p-4">
                          <div>
                            <p class="">
                              {{ item.documentType.name }}
                              <b v-if="item.isRequired" class="text-red-300"
                                >(*Required)</b
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
                    w-full
                    p-4
                    whitespace-nowrap
                    rounded-lg
                    bg-white
                    shadow-lg
                    divide-y divide-gray-300
                    overflow-hidden
                    table-auto
                  "
                >
                  <thead class="bg-lightMain-500 p-4">
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
                  <tbody class="divide-y p-4">
                    <tr
                      v-for="item in table.docs"
                      :key="item.id"
                      class="border-b text-main-400"
                    >
                      <td class="px-6 py-4">
                        <div class="flex items-center ml-4">
                          <div>
                            <p class="">
                              {{ item.documentType.name }}
                              <b v-if="item.isRequired" class="text-red-300"
                                >(*Required)</b
                              >
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <div class="flex items-center ml-4">
                          <div>
                            <p class="">
                              {{
                                item.documentType.description
                                  ? item.documentType.description
                                  : "-----------------"
                              }}
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

                  <tbody
                    class="divide-y p-4"
                    v-for="parentItem in table.parentDoc"
                    :key="parentItem.id"
                  >
                    <tr
                      v-if="parentItem.length < 2"
                      class="border-b text-main-400 bg-lightGrey-100"
                    >
                      <td class="px-6 py-4">
                        <div class="flex items-center ml-4">
                          <div>
                            <p class="">
                              {{ parentItem[0].documentType.name }}
                              <b
                                v-if="parentItem[0].isRequired"
                                class="text-red-300"
                                >(*Required)</b
                              >
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4">
                        <div class="flex items-center ml-4">
                          <div>
                            <p class="">
                              {{
                                parentItem[0].documentType.description
                                  ? parentItem[0].documentType.description
                                  : "-----------------------"
                              }}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td class="px-6 py-4">
                        <p class="">
                          <input
                            type="file"
                            :required="parentItem[0].isRequired"
                            :id="`files${parentItem[0].id}`"
                            accept=".jpeg, .png, .gif, .jpg, .pdf, .webp, .tiff , .svg"
                            :ref="`imageUploader${parentItem[0].id}`"
                            class="custom-file-input"
                            v-on:change="
                              handleFileUpload(parentItem[0], $event)
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
                              parentItem[0].documentType.code,
                              parentItem[0].documentType.name
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
                    <!-- if parent doc has more than 1 elements -->
                    <tr v-else class="border-b text-main-400 bg-lightGrey-100">
                      <td class="px-6">
                        <div class="flex items-center ml-4">
                          <div>
                            <p class="">
                              {{
                                parentItem[0].documentType.name.slice(
                                  0,
                                  parentItem[0].documentType.name.length - 2
                                )
                              }}
                              <b
                                v-if="parentItem[0].isRequired"
                                class="text-red-300"
                                >(*Required)</b
                              >
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-6"></td>

                      <td class="px-6 py-4"></td>

                      <td class="px-6 py-4 text-center"></td>

                      <td class="px-6 text-center">
                        <button
                          class="
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
                          type="button"
                          data-bs-toggle="collapse"
                          :data-bs-target="
                            '#docAccordion' + parentItem[0].documentType.id
                          "
                          aria-expanded="true"
                          :aria-controls="
                            'collapse' + parentItem[0].documentType.id
                          "
                        >
                          Upload
                        </button>
                      </td>
                    </tr>
                    <!-- end table row -->

                    <tr>
                      <div
                        class="accordion"
                        id="accordionExample"
                        style="width: max-content"
                      >
                        <div
                          class="
                            accordion-item
                            shadow-lg
                            w-full
                            bg-white
                            border border-grey-400
                            ml-8
                          "
                        >
                          <div
                            :id="'docAccordion' + parentItem[0].documentType.id"
                            class="accordion-collapse collapse"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body py-4 px-5">
                              <div class="bg-lightMain-500 rounded-sm p-2">
                                <small class="text-white"
                                  >Only the first file upload is required, the
                                  remaining ones are optional</small
                                >
                              </div>

                              <tr
                                v-for="parentItem in parentItem"
                                :key="parentItem"
                                class="border-b text-main-400 mt-4"
                              >
                                <td class="px-6 py-4">
                                  <div class="flex items-center ml-4">
                                    <div>
                                      <p class="">
                                        {{ parentItem.documentType.name }}
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td class="px-6 py-4">
                                  <div class="flex items-center ml-4">
                                    <div>
                                      <p class="">
                                        {{
                                          parentItem.documentType.description
                                            ? parentItem.documentType
                                                .description
                                            : "- "
                                        }}
                                      </p>
                                    </div>
                                  </div>
                                </td>

                                <td class="px-6 py-4">
                                  <p class="">
                                    <input
                                      type="file"
                                      :required="parentItem.isRequired"
                                      :id="`files${parentItem.id}`"
                                      accept=".jpeg, .png, .gif, .jpg, .pdf, .webp, .tiff , .svg"
                                      :ref="`imageUploader${parentItem.id}`"
                                      class="custom-file-input"
                                      v-on:change="
                                        handleFileUpload(parentItem, $event)
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
                                        parentItem.documentType.code,
                                        parentItem.documentType.name
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </tr>
                  </tbody>
                </table>
                <small
                  >Note:-document names with
                  <b class="text-red-300">(*Required)</b> must be uploaded in
                  order to go forward with application process</small
                >
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
    let divId = ref(0);
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
      formData.append(
        data.educationalLevel.code.slice(0, 2).toUpperCase() +
          "_" +
          data.documentType.code,
        event?.target?.files[0]
      );

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
      store.dispatch("newlicense/setTempDocs", formData).then(() => {
        window.localStorage.setItem(
          "NLApplicationImageData",
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

    const addMoreFile = (doc) => {
      divId.value == doc.length;
      if (divId.value < doc.length) {
        divId.value++;
        let divElement = document.createElement("div");
        divElement.classList.add("border-t-2");
        divElement.classList.add("mt-4");
        divElement.classList.add("mb-4");
        let toBeAddedDoc = doc[divId.value];
        let template =
          '<tr id="parent_doc_' +
          toBeAddedDoc.id +
          '" class="p-4 text-gray-300"><td class="px-6 py-4"><div class="flex items-center ml-8"><div><p class="">' +
          (toBeAddedDoc.documentType.name + "(optional)") +
          '</p></div></div></td><td class="px-6 py-4"><div class="flex items-center ml-8"><div><p class="">' +
          (toBeAddedDoc.documentType.description
            ? toBeAddedDoc.documentType.description
            : "") +
          '</p></div></div></td><td class="px-6 py-4 "><p class="ml-8"><input type="file" :id="files' +
          toBeAddedDoc.id +
          '" accept=".jpeg, .png, .gif, .jpg, .pdf, .webp, .tiff , .svg" :ref="imageUploader' +
          toBeAddedDoc.id +
          '" class="custom-file-input" v-on:change=" handleFileUpload(' +
          toBeAddedDoc +
          ', $event) " /></p></td><td><button id="remove_' +
          toBeAddedDoc.id +
          '" class="bg-main-400 mt-8 inline-block px-6 py-2.5 bg-main-400 hover:text-main-400 text-white text-xs font-bold leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out " onclick="removeFileUpload()>Remove </button> </td>';

        divElement.innerHTML = template;
        document.getElementById(doc[0].id).appendChild(divElement);
      }
    };

    const removeFileUpload = (id) => {
      console.log("here");
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
          let educationLevels = generalInfo.value.educations;
         
          //Get department docs
          educationLevels.forEach((element) => {
            store
              .dispatch("newlicense/getNLdocuments", [
                categoryResults[0].id,
                generalInfo.value.applicantTypeSelected.id,
                element&&element.educationalLevel?element.educationalLevel.id:element.educationalLevelId,
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
          console.log(educationalDocs.value)
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
        });
      }
    });
    // emit("changeActiveStateMinus");

    return {
      documents,
      commonDocuments,
      files,
      handleFileUpload,
      addMoreFile,
      showImage,
      previewDocuments,
      showPreview,
      previewFile,
      removeFileUpload,
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
</style>
