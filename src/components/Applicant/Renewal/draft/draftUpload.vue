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
              class="accordion-body py-4 px-5 rounded-lg"
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
                        Upload Document
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
                  <tbody class="p-4">
                    <tr
                      v-for="item in table.docs"
                      :key="item.id"
                      :class="
                        fileUploadError[
                          'file_upload_row_' +
                            `${item.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                        ]
                          ? 'accordion-body py-4 px-5 border-2 border-red-300 rounded-lg'
                          : 'accordion-body py-4 px-5 border-b  rounded-lg'
                      "
                    >
                      <td class="px-6 py-4">
                        <div class="flex items-center ml-4">
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
                            v-on:change="
                              handleFileUpload(
                                item,
                                $event,
                                table.professionType
                              )
                            "
                          />
                        </p>
                      </td>
                      <td class="px-6 py-4">
                     
                        <span
                          class="document-name"
                          v-if="
                            documentsSaved[
                              `${item.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                            ]?.name
                          "
                          >{{
                            documentsSaved[
                              `${item.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                            ]?.name
                          }}</span
                        >
                      </td>
                      <td class="px-6 py-4 text-center">
                        <a
                          :id="
                            'image_href_' +
                            `${item.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                          "
                          :href="
                            documentsSaved[
                              `${item.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                            ]?.path
                          "
                          :data-title="item.name ? item.name : '-----'"
                          data-lightbox="example-2"
                        >
                          <i
                            :id="
                              'educational_icon_' +
                              `${item.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                            "
                            class="fa fa-eye cursor-pointer text-main-400"
                            aria-hidden="true"
                          >
                            <img
                              :id="
                                'image_lightbox_' +
                                `${item.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                              "
                              :src="
                                documentsSaved[
                                  `${item.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                                ]?.path
                              "
                              class="w-full h-2 object-cover"
                            />
                          </i>
                        </a>
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
                                >(*)</b
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
                              handleFileUpload(
                                parentItem[0],
                                $event,
                                table.professionType
                              )
                            "
                          />
                        </p>
                      </td>
                      <td class="px-6 py-4">
                        <span
                          class="document-name"
                          v-if="
                            documentsSaved[
                              `${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                            ]?.name
                          "
                          >{{
                            documentsSaved[
                              `${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                            ]?.name
                          }}</span
                        >
                      </td>
                      <td class="px-6 py-4 text-center">
                        <a
                          :id="
                            'image_href_' +
                            `${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                          "
                          :href="
                            documentsSaved[
                              `${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                            ]?.path
                          "
                          :data-title="
                            parentItem[0].name ? parentItem[0].name : '-----'
                          "
                          data-lightbox="example-2"
                        >
                          <i
                            :id="
                              'educational_icon_' +
                              `${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                            "
                            class="fa fa-eye cursor-pointer text-main-400"
                            aria-hidden="true"
                          >
                            <img
                              :id="
                                'image_lightbox_' +
                                `${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                              "
                              :src="
                                documentsSaved[
                                  `${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                                ]?.path
                              "
                              class="w-full h-2 object-cover"
                            />
                          </i>
                        </a>
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
                                >(* )</b
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
                          @click="addMore(parentItem[0])"
                        >
                          Upload
                        </button>
                      </td>
                    </tr>
                    <!-- end table row -->

                    <tr>
                      <div
                        v-if="
                          showNestedDocuments[
                            parentItem[0].documentType.code
                          ] != null
                        "
                        class="accordion mt-4 mb-4"
                        id="accordionExample"
                        style="width: max-content"
                      >
                        <div
                          class="
                            shadow-lg
                            w-full
                            bg-white
                            border border-grey-400
                            ml-8
                          "
                        >
                          <div
                            :id="'docAccordion' + parentItem[0].documentType.id"
                            class=""
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
                                v-for="(parentChildItem, index) in parentItem"
                                :key="parentChildItem"
                                class="border-b text-main-400 mt-4"
                              >
                                <td
                                  v-if="
                                    showNestedDocuments[
                                      parentItem[0].documentType.code
                                    ] >= index
                                  "
                                  class="px-6 py-4"
                                >
                                  <div class="flex items-center ml-4">
                                    <div>
                                      <p class="">
                                        {{ parentChildItem.documentType.name }}
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  v-if="
                                    showNestedDocuments[
                                      parentItem[0].documentType.code
                                    ] >= index
                                  "
                                  class="px-6 py-4"
                                >
                                  <div class="flex items-center ml-4">
                                    <div>
                                      <p class="">
                                        {{
                                          parentChildItem.documentType
                                            .description
                                            ? parentChildItem.documentType
                                                .description
                                            : "- "
                                        }}
                                      </p>
                                    </div>
                                  </div>
                                </td>

                                <td
                                  v-if="
                                    showNestedDocuments[
                                      parentItem[0].documentType.code
                                    ] >= index
                                  "
                                  class="px-6 py-4"
                                >
                                  <p class="">
                                    <input
                                      type="file"
                                      :required="parentChildItem.isRequired"
                                      :id="`files${parentChildItem.id}`"
                                      accept=".jpeg, .png, .gif, .jpg, .pdf, .webp, .tiff , .svg"
                                      :ref="`imageUploader${parentChildItem.id}`"
                                      class="custom-file-input"
                                      v-on:change="
                                        handleFileUpload(
                                          parentChildItem,
                                          $event,
                                          table.professionType
                                        )
                                      "
                                    />
                                  </p>
                                </td>
                                <td class="px-6 py-4">
                                  <span
                                    class="document-name"
                                    v-if="
                                      documentsSaved[
                                        `${parentChildItem.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                                      ]?.name
                                    "
                                    >{{
                                      documentsSaved[
                                        `${parentChildItem.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                                      ]?.name
                                    }}</span
                                  >
                                </td>
                                <td
                                  v-if="
                                    showNestedDocuments[
                                      parentItem[0].documentType.code
                                    ] >= index
                                  "
                                  class="px-6 py-4 text-center"
                                >
                                  <a
                                    :id="
                                      'image_href_' +
                                      `${parentChildItem.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                                    "
                                    :href="
                                      documentsSaved[
                                        `${parentChildItem.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                                      ]?.path
                                    "
                                    :data-title="
                                      parentChildItem.name ? item.name : '-----'
                                    "
                                    data-lightbox="example-2"
                                  >
                                    <i
                                      :id="
                                        'educational_icon_' +
                                        `${parentChildItem.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                                      "
                                      class="
                                        fa fa-eye
                                        cursor-pointer
                                        text-main-400
                                      "
                                      aria-hidden="true"
                                    >
                                      <img
                                        :id="
                                          'image_lightbox_' +
                                          `${parentChildItem.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                                        "
                                        :src="
                                          documentsSaved[
                                            `${parentChildItem.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                                          ]?.path
                                        "
                                        class="w-full h-2 object-cover"
                                      />
                                    </i>
                                  </a>
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
                  >Note:-document names marked with
                  <b class="text-red-300">(*)</b>must be uploaded in order to go
                  forward with application process</small
                >
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

    const handleCommonFileUpload = (data, event) => {
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
              commonDocCode: data.documentType ? data.documentType.code : "",
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

    const handleFileUpload = (data, event, pro) => {
      let uniqueId =
        data.documentType.code +
        "_" +
        data.educationalLevel.code.toUpperCase() +
        "_" +
        pro.code.toUpperCase();
      let reader = new FileReader();
      documentUploaded.value[uniqueId] = "";
      documentUploaded.value[uniqueId] = event?.target?.files[0];

      formData.append(uniqueId, event?.target?.files[0]);

      documentsUploaded.value[uniqueId] = event?.target?.files[0];
      isImage.value[uniqueId] = true;
      //check file size
      let fileS = documentsUploaded.value[uniqueId]
        ? documentsUploaded.value[uniqueId].size
        : 0;

      if (fileS <= maxFileSize.value / 1000) {
        fileSizeExceed.value[uniqueId] = false;
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

            previewDocuments.value[uniqueId] = reader.result;

            imageData = imageData.filter((el) => el.documenttype != uniqueId);

            imageData.push({
              imageId: "image_lightbox_" + uniqueId,
              documenttype: uniqueId,
              documentName: data.documentType.name,
              educationalLevel: data.educationalLevel
                ? data.educationalLevel.name
                : "",
              image: reader.result,
            });

            documentUploaded.value[uniqueId] = reader.result;
          },
          false
        );
        if (documentUploaded.value[uniqueId]) {
          if (
            /\.(jpe?g|png|gif)$/i.test(documentUploaded.value[uniqueId].name)
          ) {
            isImage.value[uniqueId] = true;
            isPdf.value[uniqueId] = false;

            reader.readAsDataURL(documentUploaded.value[uniqueId]);
          } else if (/\.(pdf)$/i.test(documentUploaded.value[uniqueId].name)) {
            isImage.value[uniqueId] = false;
            isPdf.value[uniqueId] = true;
            reader.readAsDataURL(documentUploaded.value[uniqueId]);
          }
        }
      } else {
        toast.error("Files size exceeded the allowed limit", {
          timeout: 3000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true,
        });
        fileSizeExceed.value[uniqueId] = true;
        documentUploaded.value[uniqueId] = "";
      }
      //end of check file size
      let icon = document.getElementById("educational_icon_" + uniqueId);
      icon.classList.toggle("disabled");
      let output = document.getElementById("image_lightbox_" + uniqueId);
      let outputHref = document.getElementById("image_href_" + uniqueId);
      outputHref.href = URL.createObjectURL(event.target.files[0]);
      if (output && output.src) {
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
          URL.revokeObjectURL(output.src); // free memory
        };
      }
    };
    const checkDocuments = () => {
      let temp = false;
      let CMtemp = false; 

      /// check common documents

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

      educationalDocs.value.forEach((ed) => {
        // check normal docs with no parents

        ed.docs
          .filter((docs) => docs.isRequired)
          .forEach((single) => {
            temp = documentsUploaded.value.hasOwnProperty(
              single.documentType.code +
                "_" +
                ed.educationalLevel.code.toUpperCase() +
                "_" +
                ed.professionType.code.toUpperCase()
            );
            if (!temp) {
              fileUploadError.value[
                "file_upload_row_" +
                  single.documentType.code +
                  "_" +
                  ed.educationalLevel.code.toUpperCase() +
                  "_" +
                  ed.professionType.code.toUpperCase()
              ] = true;
              errorDocuments.value.push({
                name: single.documentType.name,
                code:
                  single.documentType.code +
                  "_" +
                  ed.educationalLevel.code.toUpperCase() +
                  "_" +
                  ed.professionType.code.toUpperCase(),
              });
            } else {
              fileUploadError.value[
                "file_upload_row_" +
                  single.documentType.code +
                  "_" +
                  ed.educationalLevel.code.toUpperCase() +
                  "_" +
                  ed.professionType.code.toUpperCase()
              ] = false;
            }
          });

        //// check documetns with parents
 

        // fileUploadError.value[
        //         "file_upload_row_" +
        //           single.documentType.code +
        //           "_" +
        //           ed.educationalLevel.code.toUpperCase() +
        //           "_" +
        //           ed.professionType.code.toUpperCase()
        //       ] = true;
      });

      return CMtemp && temp;
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
          let request = indexedDB.open("RNdocumentUploads", 1);
          request.onsuccess = function () {
            db = request.result;
            let transaction = db.transaction(
              ["RNdocumentUploads"],
              "readwrite"
            );

            finalLocalData.data = imageData;

            finalLocalData.data = [...new Set(finalLocalData.data)];

            const objectStore = transaction.objectStore("RNdocumentUploads");

            const objectStoreRequest = objectStore.clear();

            objectStoreRequest.onsuccess = (event) => {
              let addReq = transaction
                .objectStore("RNdocumentUploads")
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
      let request = indexedDB.open("RNdocumentUploads", 1);

      request.onerror = function () {
        console.error("Unable to open database.");
      };

      request.onupgradeneeded = function () {
        let db = request.result;
        db.createObjectStore("RNdocumentUploads", {
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
        .dispatch("renewal/getRenewalApplication", route.params.id)
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
            console.log(documentsUploaded.value)
            store
              .dispatch("renewal/getApplicationCategories")
              .then((res) => {
                let categoryResults = res.data.data
                  ? res.data.data.filter((ele) => ele.code == "NA")
                  : "";
                let educationLevels = generalInfo.value.educations;

                //Get department docs
                educationLevels.forEach((element) => {
                  store
                    .dispatch("renewal/getRNdocuments", [
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
                  .dispatch("renewal/getCommonRNdocuments", [
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
      handleCommonFileUpload,
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
