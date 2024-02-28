<template>
  <div v-if="educationalDocs && educationalDocs.length > 0">
    <div
      v-for="(table, index) in educationalDocs"
      :key="index"
      class="border-b-4 text-main-400 mb-8 p-1 rounded-md"
    >
      <h1
        :class="
          isDarkMode
            ? 'text-primary-200 text-2xl font-bold border-b mb-4'
            : 'text-grey-800 font-bold text-2xl border-b mb-4'
        "
      >
        {{
          table.professionType
            ? table.professionType.name
            : table.professionalType
            ? table.professionalType.name
            : ""
        }}
        {{ $t("Related Files") }}
      </h1>
      <div class="overflow-x-auto w-full sm:p-4">
        <table
          style="border-radius: 5px"
          v-if="table"
          class="w-full rounded-md striped sm:border mt-2 mb-8"
        >
          <thead class="hidden border-0 sm:table-header-group bg-lightMain-500">
            <tr>
              <th
                v-for="(header, index) in headers"
                :key="index"
                class="px-4 py-4 uppercase font-medium text-white text-left text-lg"
              >
                {{ $t(header) }}
              </th>
            </tr>
          </thead>
          <!-- For single file uploads -->
          <tbody
            :class="
              isDarkMode
                ? 'divide-y bg-secondaryDark text-primary-200'
                : 'divide-y bg-white text-main-400'
            "
          >
            <tr
              v-for="item in table.docs"
              :key="item.id"
              :class="
                fileUploadError[`file_upload_row_${uniqueFileId(item, table)}`]
                  ? 'text-sm  shadow-md  flex flex-col mb-4 py-1 divide-y   sm:table-row sm:mb-0    sm:divide-none border-red-300 border-2'
                  : 'text-sm border rounded-md  shadow-md  flex flex-col mb-8  py-1 divide-y    sm:table-row sm:mb-0    sm:divide-none'
              "
            >
              <td
                class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <h2 class="sm:hidden mb-2 text-xl underline">
                  {{ $t(headers[0]) }}
                </h2>
                <h2 class="text-lg break-words">
                  {{ item.documentType.name }}
                  <b v-if="item.isRequired" class="text-red-300">(*)</b>
                </h2>
              </td>
              <td
                class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <h2 class="sm:hidden mb-2 text-xl underline">
                  {{ $t(headers[1]) }}
                </h2>
                <h2 class="text-lg break-words">
                  {{
                    item.documentType && item.documentType.description
                      ? item.documentType.description
                      : "-----------------"
                  }}
                </h2>
              </td>
              <td
                class="flex whitespace-no-wrap flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <h2 class="sm:hidden mb-2 text-xl underline">
                  {{ $t(headers[2]) }}
                </h2>

                <input
                  type="file"
                  :required="item.isRequired"
                  :id="`files_$${uniqueFileId(item, table)}`"
                  accept=".jpeg, .png, .jpg, .pdf, .webp, .tiff , .svg , .heic , .heif "
                  :ref="`imageUploader${item.id}`"
                  class="custom-file-input"
                  @change="$emit('handleFileUpload', item, $event, table)"
                />
              </td>
              <td
                v-if="documentsSaved[`${uniqueFileId(item, table)}`]?.name"
                class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <h2 class="sm:hidden mb-2 text-xl underline">
                  {{ $t("Uploaded File Name") }}
                </h2>
                <h2 class="text-lg break-words">
                  {{ documentsSaved[`${uniqueFileId(item, table)}`]?.name }}
                  <i class="fa fa-check-circle text-green-300"></i>
                </h2>
              </td>

              <td
                class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <div class="flex justify-center">
                  <a
                    :id="'image_href_' + `${uniqueFileId(item, table)}`"
                    :href="documentsSaved[`${uniqueFileId(item, table)}`]?.path"
                    :data-title="item.name ? item.name : '-----'"
                    data-lightbox="example-2"
                  >
                    <i
                      :id="'educational_icon_' + `${uniqueFileId(item, table)}`"
                      class="fa fa-eye cursor-pointer text-main-400"
                      aria-hidden="true"
                    >
                      <img
                        :id="'image_lightbox_' + `${uniqueFileId(item, table)}`"
                        :src="
                          documentsSaved[`${uniqueFileId(item, table)}`]?.path
                        "
                        class="w-full h-2 object-cover"
                      />
                    </i>
                    {{ $t("View") }}
                  </a>
                </div>
              </td>
            </tr>
          </tbody>

          <!-- For multiple file uploads -->
          <tbody
            :class="
              isDarkMode
                ? 'divide-y bg-secondaryDark text-primary-200'
                : 'divide-y bg-white text-main-400'
            "
            v-for="parentItem in table.parentDoc"
            :key="parentItem.id"
          >
            <!-- If document upload has less than 3 items -->
            <tr
              v-if="parentItem.length < 2"
              :class="
                fileUploadError[
                  `file_upload_row_
                   ${uniqueFileId(parentItem[0], table)}`
                ]
                  ? 'text-sm  shadow-md flex flex-col mb-4 py-1 divide-y   sm:table-row sm:mb-0    sm:divide-none border-red-300 border-2'
                  : 'text-sm border-t flex shadow-md flex-col mb-8  py-1 divide-y    sm:table-row sm:mb-0    sm:divide-none'
              "
            >
              <td
                class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <h2 class="sm:hidden mb-2 text-xl underline">
                  {{ $t(headers[0]) }}
                </h2>
                <h2 class="text-lg break-words">
                  {{ parentItem[0].documentType.name }}
                  <b v-if="parentItem[0].isRequired" class="text-red-300"
                    >(*)</b
                  >
                </h2>
              </td>
              <td
                class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <h2 class="sm:hidden mb-2 text-xl underline">
                  {{ $t(headers[1]) }}
                </h2>
                <h2 class="text-lg break-words">
                  {{
                    parentItem[0].documentType.description
                      ? parentItem[0].documentType.description
                      : "-----------------------"
                  }}
                </h2>
              </td>
              <td
                class="flex whitespace-no-wrap flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <h2 class="sm:hidden mb-2 text-xl underline">
                  {{ $t(headers[2]) }}
                </h2>

                <input
                  :required="parentItem[0].isRequired"
                  type="file"
                  :id="`files_${uniqueFileId(parentItem[0], table)}`"
                  accept="*/*"
                  :ref="`imageUploader${parentItem[0].id}`"
                  class="custom-file-input"
                  @change="
                    $emit('handleFileUpload', parentItem[0], $event, table)
                  "
                />
              </td>
              <td
                v-if="
                  documentsSaved[`${uniqueFileId(parentItem[0], table)}`]?.name
                "
                class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <h2 class="sm:hidden mb-2 text-xl underline">
                  {{ $t("Uploaded File Name") }}
                </h2>
                {{
                  documentsSaved[`${uniqueFileId(parentItem[0], table)}`]?.name
                }}
                <i class="fa fa-check-circle text-green-300"></i>
              </td>

              <td
                class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <div class="flex justify-center">
                  <a
                    :id="
                      'image_href_' + `${uniqueFileId(parentItem[0], table)}`
                    "
                    :href="
                      documentsSaved[`${uniqueFileId(parentItem[0], table)}`]
                        ?.path
                    "
                    :data-title="
                      parentItem[0].name ? parentItem[0].name : '-----'
                    "
                    data-lightbox="example-2"
                  >
                    <i
                      :id="
                        'educational_icon_' +
                        `${uniqueFileId(parentItem[0], table)}`
                      "
                      class="fa fa-eye cursor-pointer text-main-400"
                      aria-hidden="true"
                    >
                      <img
                        :id="
                          'image_lightbox_' +
                          `${uniqueFileId(parentItem[0], table)}`
                        "
                        :src="
                          documentsSaved[
                            `${uniqueFileId(parentItem[0], table)}`
                          ]?.path
                        "
                        class="w-full h-2 object-cover"
                      /> </i
                    >{{ $t("View") }}
                  </a>
                </div>
              </td>
            </tr>
            <!-- If document upload has more than 2 items -->
            <tr
              v-else
              :class="
                fileUploadError[
                  'file_upload_row_' + `${uniqueFileId(parentItem[0], table)}`
                ]
                  ? 'text-sm    flex flex-col mb-4 py-1 divide-y text-white    sm:table-row sm:mb-0    sm:divide-none border-red-300 border-2'
                  : 'text-sm border-t  bg-grey-400 text-white flex flex-col mb-8  py-1 divide-y    sm:table-row sm:mb-0    sm:divide-none'
              "
            >
              <td
                class="flex bg-grey-400 sm flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <h2 class="sm:hidden mb-2 text-xl underline">
                  {{ $t(headers[0]) }}
                </h2>
                <div class="flex">
                  <h2 class="text-lg break-words">
                    {{ parentItem[0].parentDocument }}
                    <b v-if="parentItem[0].isRequired" class="text-red-300"
                      >(*)</b
                    >
                  </h2>
                  <button
                    class="block px-6 py-2.5 ml-4 sm:w-32 sm:ml-20 -mt-1 bg-white hover:bg-main-400 hover:text-white text-main-400 text-xs font-bold leading-tight uppercase rounded transition duration-150 ease-in-out border"
                    type="button"
                    @click="$emit('addMore', parentItem[0])"
                  >
                    {{ $t("Add More") }}
                  </button>
                </div>

                <h2 class=" ">
                  ({{ $t("You can upload up to") }}
                  {{ parentItem.length }} Files)
                </h2>
              </td>
              <td
                class="flex flex-col bg-grey-400 sm px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              ></td>
              <td
                class="flex flex-col bg-grey-400 sm px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              ></td>
            </tr>
            <!-- For nested documents upload -->
            <tr
              class="text-sm flex bg-grey-400 flex-col mb-8 py-1 divide-y sm:table-row sm:mb-0 sm:divide-none"
            >
              <div
                v-if="
                  showNestedDocuments[parentItem[0].documentType.code] != null
                "
                class="accordion sm:p-2"
                :id="`accordion_${uniqueFileId(parentItem[0], table)}`"
                style="width: max-content"
              >
                <div
                  :class="
                    isDarkMode
                      ? 'w-full border-grey-400 bg-secondaryDark rounded-md'
                      : 'w-full border-grey-400 bg-white rounded-md'
                  "
                >
                  <div
                    :id="
                      'docAccordion_' + `${uniqueFileId(parentItem[0], table)}`
                    "
                    :class="isDarkMode ? 'text-white' : ''"
                    :aria-labelledby="`headingOne_${uniqueFileId(
                      parentItem[0],
                      table
                    )}`"
                    :data-bs-parent="`#accordion_${uniqueFileId(
                      parentItem[0],
                      table
                    )}`"
                  >
                    <div class="accordion-body py-4">
                      <table>
                        <thead
                          class="hidden border-0 sm:table-header-group bg-lightMain-500"
                        >
                          <tr>
                            <th
                              v-for="(header, index) in headers"
                              :key="index"
                              class="px-2 py-2 uppercase font-medium text-white text-left text-lg"
                            >
                              {{ $t(header) }}
                            </th>
                            <th
                              class="px-2 py-2 uppercase font-medium text-white text-left text-lg"
                            >
                              {{ $t("Remove") }}
                            </th>
                          </tr>
                        </thead>
                        <tbody
                          :class="
                            isDarkMode
                              ? 'divide-y bg-secondaryDark text-primary-200'
                              : 'divide-y bg-white text-main-400'
                          "
                        >
                          <tr
                            v-for="(parentChildItem, index) in parentItem"
                            :key="index"
                            :class="
                              fileUploadError[
                                'file_upload_row_' +
                                  `${uniqueFileId(parentChildItem, table)}`
                              ]
                                ? 'text-sm   shadow-md flex flex-col mb-4 py-1 divide-y   sm:table-row sm:mb-0    sm:divide-none border-red-300 border-2'
                                : 'text-sm   shadow-md rounded-md border flex flex-col mb-4  py-1 divide-y    sm:table-row sm:mb-0    sm:divide-none'
                            "
                          >
                            <td
                              v-if="
                                showNestedDocuments[
                                  parentItem[0].documentType.code
                                ] >= index
                              "
                              class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
                            >
                              <h2 class="text-xl underline sm:invisible">
                                {{ $t("Document Name") }}
                              </h2>
                              <h2
                                :class="
                                  isDarkMode
                                    ? 'text-white'
                                    : 'text-lg  break-all sm:-mt-5'
                                "
                              >
                                {{ parentChildItem.documentType.name }}
                              </h2>
                            </td>
                            <td
                              v-if="
                                showNestedDocuments[
                                  parentItem[0].documentType.code
                                ] >= index
                              "
                              class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
                            >
                              <div class="flex items-center ml-4">
                                <div>
                                  <p :class="isDarkMode ? 'text-white' : ''">
                                    {{
                                      parentChildItem.documentType.description
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
                              class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
                            >
                              <p :class="isDarkMode ? 'text-white' : ''">
                                <input
                                  type="file"
                                  :required="parentChildItem.isRequired"
                                  :id="`files_${uniqueFileId(
                                    parentChildItem,
                                    table
                                  )}`"
                                  accept=".jpeg, .png, .jpg, .pdf, .webp, .tiff , .svg , .heic , .heif "
                                  :ref="`imageUploader${parentChildItem.id}`"
                                  class="custom-file-input"
                                  @change="
                                    $emit(
                                      'handleFileUpload',
                                      parentChildItem,
                                      $event,
                                      table
                                    )
                                  "
                                />
                              </p>
                            </td>
                            <td
                              v-if="
                                documentsSaved[
                                  `${uniqueFileId(parentChildItem, table)}`
                                ]?.name
                              "
                              class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
                            >
                              <h2 class="sm:hidden mb-2 text-xl underline">
                                {{ $t("Uploaded File Name") }}
                              </h2>
                              {{
                                documentsSaved[
                                  `${uniqueFileId(parentChildItem, table)}`
                                ]?.name
                              }}
                              <i class="fa fa-check-circle text-green-300"></i>
                            </td>

                            <td
                              v-if="
                                documentsSaved[
                                  `${uniqueFileId(parentChildItem, table)}`
                                ]?.path
                              "
                              class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
                            >
                              <div class="flex justify-center">
                                <a
                                  :id="
                                    'image_href_' +
                                    `${uniqueFileId(parentChildItem, table)}`
                                  "
                                  :href="
                                    documentsSaved[
                                      `${uniqueFileId(parentChildItem, table)}`
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
                                      `${uniqueFileId(parentChildItem, table)}`
                                    "
                                    class="fa fa-eye cursor-pointer text-main-400"
                                    aria-hidden="true"
                                  >
                                    <img
                                      :id="
                                        'image_lightbox_' +
                                        `${uniqueFileId(
                                          parentChildItem,
                                          table
                                        )}`
                                      "
                                      :src="
                                        documentsSaved[
                                          `${uniqueFileId(
                                            parentChildItem,
                                            table
                                          )}`
                                        ]?.path
                                      "
                                      class="w-full h-2 object-cover"
                                    />
                                  </i>
                                  {{ $t("View") }}
                                </a>
                              </div>
                            </td>

                            <td
                              v-if="
                                showNestedDocuments[
                                  parentItem[0].documentType.code
                                ] >= index
                              "
                            >
                              <div class="flex justify-center">
                                <span
                                  class="cursor-pointer"
                                  @click="
                                    $emit(
                                      'removeChildUpload',
                                      parentItem[0].documentType.code
                                    )
                                  "
                                  ><i
                                    class="fa-solid fa-trash text-red-300 mr-2"
                                  ></i
                                  >Remove</span
                                >
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </tr>
          </tbody>
        </table>

        <small class="text-lg text-yellow-300 break-all"
          >{{ $t("Note:-document names with") }}
          <b class="text-red-300">(*)</b>
          {{
            $t("must be uploaded to go forward with the application process")
          }}</small
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "headers",
    "fileUploadError",
    "isDarkMode",
    "educationalDocs",
    "showNestedDocuments",
    "documentsSaved",
  ],
  setup() {
    const uniqueFileId = (item, table) => {
      return `${item.documentType.code}_${
        table.educationalLevel
          ? table.educationalLevel.code.toUpperCase()
          : table.educationLevel
          ? table.educationLevel.code.toUpperCase()
          : ""
      }_${
        table.professionType
          ? table.professionType.code.toUpperCase()
          : table.professionalType
          ? table.professionalType.code.toUpperCase()
          : ""
      }`;
    };
    return {
      uniqueFileId,
    };
  },
};
</script>
