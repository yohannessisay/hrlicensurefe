<template>
  <div class="vld-parent">
    <loading
      :active="isLoading"
      :is-full-page="true"
      :color="'#2F639D'"
      :opacity="0.7"
    ></loading>
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
                            :id="
                              'common_image_' + item.documentType.id + item.id
                            "
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
                            'common_image_href_' +
                              item.documentType.id +
                              item.id
                          "
                          :href="documentsSaved[item.documentType.code]?.path"
                          :data-title="item.name ? item.name : '-----'"
                          data-lightbox="example-2"
                        >
                          <i
                            :id="
                              'common_icon_' + item.documentType.id + item.id
                            "
                            class="fa fa-eye cursor-pointer text-main-400"
                            aria-hidden="true"
                          >
                            <img
                              :id="
                                'common_image_lightbox_' +
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
                {{ table.professionType ? table.professionType.name : "" }}
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
                            v-on:change="handleFileUpload(item, $event, table)"
                          />
                        </p>
                      </td>
                      <td class="px-6 py-4">
                        <span class="document-name">{{
                          documentsSaved[
                            `${
                              item.documentType.code
                            }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                          ]?.name
                        }}</span>
                      </td>
                      <td class="px-6 py-4 text-center">
                        <a
                          :id="
                            'image_href_' +
                              `${
                                item.documentType.code
                              }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                          "
                          :href="
                            documentsSaved[
                              `${
                                item.documentType.code
                              }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                            ]?.path
                          "
                          :data-title="item.name ? item.name : '-----'"
                          data-lightbox="example-2"
                        >
                          <i
                            :id="
                              'educational_icon_' +
                                `${
                                  item.documentType.code
                                }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                            "
                            class="fa fa-eye cursor-pointer text-main-400"
                            aria-hidden="true"
                          >
                            <img
                              :id="
                                'image_lightbox_' +
                                  `${
                                    item.documentType.code
                                  }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                              "
                              :src="
                                documentsSaved[
                                  `${
                                    item.documentType.code
                                  }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
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
                              handleFileUpload(parentItem[0], $event, table)
                            "
                          />
                        </p>
                      </td>
                      <td class="px-6 py-4">
                        <span
                          class="document-name"
                          v-if="
                            documentsSaved[
                              `${
                                parentItem[0].documentType.code
                              }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                            ]?.name
                          "
                          >{{
                            documentsSaved[
                              `${
                                parentItem[0].documentType.code
                              }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                            ]?.name
                          }}</span
                        >
                      </td>
                      <td class="px-6 py-4 text-center">
                        <a
                          :id="
                            'image_href_' +
                              `${
                                parentItem[0].documentType.code
                              }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                          "
                          :href="
                            documentsSaved[
                              `${
                                parentItem[0].documentType.code
                              }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
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
                                `${
                                  parentItem[0].documentType.code
                                }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                            "
                            class="fa fa-eye cursor-pointer text-main-400"
                            aria-hidden="true"
                          >
                            <img
                              :id="
                                'image_lightbox_' +
                                  `${
                                    parentItem[0].documentType.code
                                  }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                              "
                              :src="
                                documentsSaved[
                                  `${
                                    parentItem[0].documentType.code
                                  }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
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
                                      :ref="
                                        `imageUploader${parentChildItem.id}`
                                      "
                                      class="custom-file-input"
                                      v-on:change="
                                        handleFileUpload(
                                          parentChildItem,
                                          $event,
                                          table
                                        )
                                      "
                                    />
                                  </p>
                                </td>
                                <td       v-if="
                                    showNestedDocuments[
                                      parentItem[0].documentType.code
                                    ] >= index
                                  " class="px-6 py-4">
                                  <span
                                    class="document-name"
                                    v-if="
                                      documentsSaved[
                                        `${
                                          parentChildItem.documentType.code
                                        }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                                      ]?.name
                                    "
                                    >{{
                                      documentsSaved[
                                        `${
                                          parentChildItem.documentType.code
                                        }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
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
                                        `${
                                          parentChildItem.documentType.code
                                        }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                                    "
                                    :href="
                                      documentsSaved[
                                        `${
                                          parentChildItem.documentType.code
                                        }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
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
                                          `${
                                            parentChildItem.documentType.code
                                          }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
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
                                            `${
                                              parentChildItem.documentType.code
                                            }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                                        "
                                        :src="
                                          documentsSaved[
                                            `${
                                              parentChildItem.documentType.code
                                            }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
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
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import Compressor from "compressorjs";
import MAX_FILE_SIZE from "../../../../composables/documentMessage";
import { boolean } from "yargs";
import { googleApi } from "@/composables/baseURL";
import { useRoute } from "vue-router";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  components: { Loading },

  setup(props, { emit }) {
    let isLoading = ref(false);
    let store = useStore();
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
    let isImage = ref({});
    let isPdf = ref({});
    let fileSize = ref("");
    let showImage = ref(false);
    let previewDocuments = ref({});
    let showPreview = ref("");
    maxFileSize.value = MAX_FILE_SIZE.MAX_FILE_SIZE;
    let generalInfo = ref({});
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
      new Compressor(event?.target?.files[0], {
        quality: 0.5,

        // The compression process is asynchronous,
        // which means you have to access the `result` in the `success` hook function.
        success(result) {
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(new File([result], result.name));
          event.target.files = dataTransfer.files;
          documentsUploaded.value[data.documentType.code] = "";
          documentsUploaded.value[data.documentType.code] =
            event?.target?.files[0];
          let reader = new FileReader();

          let fileS = documentsUploaded.value[data.documentType.code].size;

          isImage.value[data.documentType.code] = true;
          documentsUploaded.value[data.documentType.code] =
            event?.target?.files[0];
          formData.append(data.documentType.code, event?.target?.files[0]);

          delete fileUploadError.value[
            "file_upload_row_" + data.documentType.code
          ];
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

              previewDocuments.value[data.documentType.code] = reader.result;
              imageData = imageData.filter(
                (el) => el.documenttype != data.documentType.name
              );
              imageData.push({
                imageId: "common_image_lightbox_" + data.documentType.code,
                documenttype: data.documentType ? data.documentType.name : "",
                documentCode: data.documentType ? data.documentType.code : "",
                educationalLevel: data.educationalLevel
                  ? data.educationalLevel.name
                  : "",
                fileName: event?.target?.files[0].name,
                image: reader.result,
              });

              documentToSave.value[data.documentType.code] = reader.result;
            },
            false
          );

          if (documentsUploaded.value[data.documentType.code]) {
            if (
              /\.(jpe?g|png|gif)$/i.test(
                documentsUploaded.value[data.documentType.code].name
              )
            ) {
              isImage.value[data.documentType.code] = true;
              isPdf.value[data.documentType.code] = false;

              reader.readAsDataURL(
                documentsUploaded.value[data.documentType.code]
              );
            } else if (
              /\.(pdf)$/i.test(
                documentsUploaded.value[data.documentType.code].name
              )
            ) {
              isImage.value[data.documentType.code] = false;
              isPdf.value[data.documentType.code] = true;
              reader.readAsDataURL(
                documentsUploaded.value[data.documentType.code]
              );
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
            "common_image_" + data.documentType.id + data.id
          );

          outputHref.href = URL.createObjectURL(event.target.files[0]);
          if (output && output.src) {
            output.src = URL.createObjectURL(event.target.files[0]);
          }

          output
            ? (output.onload = function() {
                URL.revokeObjectURL(output.src); // free memory
              })
            : "";
        },
        error(err) {
          console.log(err.message);
        },
      });
    };

    const handleFileUpload = (data, event, pro) => {
      new Compressor(event?.target?.files[0], {
        quality: 0.5,

        // The compression process is asynchronous,
        // which means you have to access the `result` in the `success` hook function.
        success(result) {
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(new File([result], result.name));
          event.target.files = dataTransfer.files;
          documentsUploaded.value[
            data.documentType.code +
              "_" +
              data.educationalLevel.code.toUpperCase() +
              "_" +
              pro.professionType.code.toUpperCase()
          ] = "";
          documentsUploaded.value[
            data.documentType.code +
              "_" +
              data.educationalLevel.code.toUpperCase() +
              "_" +
              pro.professionType.code.toUpperCase()
          ] = event?.target?.files[0];
          let reader = new FileReader();

          let fileS =
            documentsUploaded.value[
              data.documentType.code +
                "_" +
                data.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase()
            ].size;

          if (data.parentDocument) {
            documentsUploaded.value[
              data.documentType.code +
                "_" +
                data.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase()
            ] = event?.target?.files[0];
          } else {
            documentsUploaded.value[
              data.documentType.code +
                "_" +
                data.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase()
            ] = event?.target?.files[0];
          }

          isImage.value[
            data.documentType.code +
              "_" +
              data.educationalLevel.code.toUpperCase() +
              "_" +
              pro.professionType.code.toUpperCase()
          ] = true;
          formData.append(
            data.documentType.code +
              "_" +
              data.educationalLevel.code.toUpperCase() +
              "_" +
              pro.professionType.code.toUpperCase(),

            event?.target?.files[0]
          );

          showImage.value = true;

          if (fileS > 0 && fileS < 1000) {
            fileSize.value += "B";
          } else if (fileS > 1000 && fileS < 1000000) {
            fileSize.value = fileS / 1000 + "kB";
          } else {
            fileSize.value = fileS / 1000000 + "MB";
          }
          delete fileUploadError.value[
            "file_upload_row_" +
              data.documentType.code +
              "_" +
              data.educationalLevel.code.toUpperCase() +
              "_" +
              pro.professionType.code.toUpperCase()
          ];
          reader.addEventListener(
            "load",
            function() {
              showPreview.value = true;

              previewDocuments.value[
                data.documentType.code +
                  "_" +
                  data.educationalLevel.code.toUpperCase() +
                  "_" +
                  pro.professionType.code.toUpperCase()
              ] = reader.result;

              imageData.push({
                imageId:
                  "image_lightbox_" +
                  data.documentType.code +
                  "_" +
                  pro.educationalLevel.code +
                  "_" +
                  pro.professionType.code,
                documenttype: data.documentType ? data.documentType.name : "",
                documentCode:
                  data.documentType.code +
                  "_" +
                  data.educationalLevel.code.toUpperCase() +
                  "_" +
                  pro.professionType.code.toUpperCase(),
                educationalLevel: data.educationalLevel
                  ? data.educationalLevel.name
                  : "",
                fileName: event?.target?.files[0].name,
                image: reader.result,
              });
              // documentsUploaded.value[data.documentType.code] = reader.result;
            },
            false
          );

          if (
            documentsUploaded.value[
              data.documentType.code +
                "_" +
                data.educationalLevel.code.toUpperCase() +
                "_" +
                pro.professionType.code.toUpperCase()
            ]
          ) {
            if (
              /\.(jpe?g|png|gif)$/i.test(
                documentsUploaded.value[
                  data.documentType.code +
                    "_" +
                    data.educationalLevel.code.toUpperCase() +
                    "_" +
                    pro.professionType.code.toUpperCase()
                ].name
              )
            ) {
              isImage.value[
                data.documentType.code +
                  "_" +
                  data.educationalLevel.code.toUpperCase() +
                  "_" +
                  pro.professionType.code.toUpperCase()
              ] = true;
              isPdf.value[
                data.documentType.code +
                  "_" +
                  data.educationalLevel.code.toUpperCase() +
                  "_" +
                  pro.professionType.code.toUpperCase()
              ] = false;

              reader.readAsDataURL(
                documentsUploaded.value[
                  data.documentType.code +
                    "_" +
                    data.educationalLevel.code.toUpperCase() +
                    "_" +
                    pro.professionType.code.toUpperCase()
                ]
              );
            } else if (
              /\.(pdf)$/i.test(
                documentsUploaded.value[
                  data.documentType.code +
                    "_" +
                    data.educationalLevel.code.toUpperCase() +
                    "_" +
                    pro.professionType.code.toUpperCase()
                ].name
              )
            ) {
              isImage.value[
                data.documentType.code +
                  "_" +
                  data.educationalLevel.code.toUpperCase() +
                  "_" +
                  pro.professionType.code.toUpperCase()
              ] = false;
              isPdf.value[
                data.documentType.code +
                  "_" +
                  data.educationalLevel.code.toUpperCase() +
                  "_" +
                  pro.professionType.code.toUpperCase()
              ] = true;
              reader.readAsDataURL(
                documentsUploaded.value[
                  data.documentType.code +
                    "_" +
                    data.educationalLevel.code.toUpperCase() +
                    "_" +
                    pro.professionType.code.toUpperCase()
                ]
              );
            }
          }
          let icon = document.getElementById(
            "educational_icon_" +
              data.documentType.code +
              "_" +
              pro.educationalLevel.code.toUpperCase() +
              "_" +
              pro.professionType.code.toUpperCase()
          );
          if (icon.classList.contains("disabled")) {
            icon.classList.toggle("disabled");
          }

          let output = document.getElementById(
            "image_lightbox_" +
              data.documentType.code +
              "_" +
              pro.educationalLevel.code.toUpperCase() +
              "_" +
              pro.professionType.code.toUpperCase()
          );
          let outputHref = document.getElementById(
            "image_href_" +
              data.documentType.code +
              "_" +
              pro.educationalLevel.code.toUpperCase() +
              "_" +
              pro.professionType.code.toUpperCase()
          );
          outputHref.href = URL.createObjectURL(event.target.files[0]);
          if (output && output.src) {
            output.src = URL.createObjectURL(event.target.files[0]);
          }

          output
            ? (output.onload = function() {
                URL.revokeObjectURL(output.src); // free memory
              })
            : "";
        },
        error(err) {
          console.log(err.message);
        },
      });
    };

    const next = () => {
      store.dispatch("renewal/setTempDocs", formData).then(() => {
        //Save images to indexed Db

        let finalLocalData = {
          created: new Date(),
          data: [],
        };
        let db;
        let request = indexedDB.open("RNdocumentUploads", 1);
        request.onsuccess = function() {
          db = request.result;
          let transaction = db.transaction(["RNdocumentUploads"], "readwrite");

          finalLocalData.data = imageData;

          finalLocalData.data = [...new Set(finalLocalData.data)];

          const objectStore = transaction.objectStore("RNdocumentUploads");

          const objectStoreRequest = objectStore.clear();

          objectStoreRequest.onsuccess = () => {
            let addReq = transaction
              .objectStore("RNdocumentUploads")
              .put(finalLocalData);

            addReq.onerror = function() {
              console.log(
                "Error regarding your browser, please update your browser to the latest version"
              );
            };

            transaction.oncomplete = function() {
              console.log("data stored");
              emit("changeActiveState");
            };
          };
        };
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

    const initDb = () => {
      let request = indexedDB.open("RNdocumentUploads", 1);

      request.onerror = function() {
        console.error("Unable to open database.");
      };

      request.onupgradeneeded = function() {
        let db = request.result;
        db.createObjectStore("RNdocumentUploads", {
          keyPath: "id",
          autoIncrement: true,
        });
      };
    };
    onMounted(() => {
      isLoading.value = true;
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
            store.dispatch("renewal/getApplicationCategories").then((res) => {
              let categoryResults = res.data.data
                ? res.data.data.filter((ele) => ele.code == "RA")
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
                    element.department.id,
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
                    isLoading.value = false;
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
      isLoading,
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
