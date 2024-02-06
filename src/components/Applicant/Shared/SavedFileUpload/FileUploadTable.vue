<template>
  <div v-if="educationalDocs && educationalDocs.length > 0">
    <div
      v-for="table in educationalDocs"
      :key="table"
      class="border-b-4 text-main-400 mb-8 p-1 rounded-md"
    >
      <h4 class="text-grey-800 font-bold border-b">
        {{ table.professionType ? table.professionType.name : "" }}
        Related Files
      </h4>
      <div class="overflow-x-auto w-full sm:p-4">
        <table
          v-if="table"
          class="w-full rounded-md striped sm:border mt-2 mb-8"
        >
          <thead class="hidden border-0 sm:table-header-group bg-lightMain-500">
            <tr>
              <th
                v-for="(header, index) in headers"
                :key="index"
                class="px-4 py-4 uppercase font-medium text-white text-left text-xl"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <!-- For single file uploads -->
          <tbody class="divide-y bg-white">
            <tr
              v-for="item in table.docs"
              :key="item.id"
              :class="
                fileUploadError[
                  `file_upload_row_${
                    item.documentType.code
                  }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                ]
                  ? 'text-sm    flex flex-col mb-4 py-1 divide-y   sm:table-row sm:mb-0    sm:divide-none border-red-300 border-2'
                  : 'text-sm border rounded-md  text-grey-800 flex flex-col mb-8  py-1 divide-y    sm:table-row sm:mb-0    sm:divide-none'
              "
            >
              <td
                class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <h2 class="sm:hidden mb-2 text-xl underline text-main-400">
                  {{ headers[0] }}
                </h2>
                <h2 class="text-lg text-grey-800 break-words">
                  {{ item.documentType.name }}
                  <b v-if="item.isRequired" class="text-red-300">(*)</b>
                </h2>
              </td>
              <td
                class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <h2 class="sm:hidden mb-2 text-xl underline text-main-400">
                  {{ headers[1] }}
                </h2>
                <h2 class="text-lg text-grey-800 break-words">
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
                <h2 class="sm:hidden mb-2 text-xl underline text-main-400">
                  {{ headers[2] }}
                </h2>

                <input
                  type="file"
                  :required="item.isRequired"
                  :id="`files_${
                    item.documentType.code
                  }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`"
                  accept=".jpeg, .png, .jpg, .pdf, .webp, .tiff , .svg , .heic , .heif "
                  :ref="`imageUploader${item.id}`"
                  class="custom-file-input"
                  @change="$emit('handleFileUpload', item, $event, table)"
                />
              </td>
              <td
                v-if="
                  documentsSaved[
                    `${
                      item.documentType.code
                    }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                  ]?.name
                "
                class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <h2 class="sm:hidden mb-2 text-xl underline text-main-400">
                  Uploaded File Name
                </h2>
                <h2 class="text-lg break-words">
                  {{
                    documentsSaved[
                      `${
                        item.documentType.code
                      }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                    ]?.name
                  }}
                   <i
                                  class="fa fa-check-circle text-green-300"
                                ></i>
                </h2>
              </td>

              <td
                class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <div class="flex justify-center">
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
                </div>
              </td>
            </tr>
          </tbody>

          <!-- For multiple file uploads -->
          <tbody
            class="divide-y bg-white"
            v-for="parentItem in table.parentDoc"
            :key="parentItem.id"
          >
            <!-- If document upload has less than 3 items -->
            <tr
              v-if="parentItem.length < 2"
              :class="
                fileUploadError[
                  `file_upload_row_
                    ${
                      parentItem[0].documentType.code
                    }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                ]
                  ? 'text-sm  flex flex-col mb-4 py-1 divide-y   sm:table-row sm:mb-0    sm:divide-none border-red-300 border-2'
                  : 'text-sm border-t flex flex-col mb-8  py-1 divide-y    sm:table-row sm:mb-0    sm:divide-none'
              "
            >
              <td
                class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <h2 class="sm:hidden mb-2 text-xl underline text-main-400">
                  {{ headers[0] }}
                </h2>
                <h2 class="text-lg text-grey-800 break-words">
                  {{ parentItem[0].documentType.name }}
                  <b v-if="parentItem[0].isRequired" class="text-red-300"
                    >(*)</b
                  >
                </h2>
              </td>
              <td
                class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <h2 class="sm:hidden mb-2 text-xl underline text-main-400">
                  {{ headers[1] }}
                </h2>
                <h2 class="text-lg text-grey-800 break-words">
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
                <h2 class="sm:hidden mb-2 text-xl underline text-main-400">
                  {{ headers[2] }}
                </h2>

                <input
                  :required="parentItem[0].isRequired"
                  type="file"
                  :id="`files_${
                    parentItem[0].documentType.code
                  }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`"
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
                  documentsSaved[
                    `${
                      parentItem[0].documentType.code
                    }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                  ]?.name
                "
                class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <h2 class="sm:hidden mb-2 text-xl underline text-main-400">
                  Uploaded File Name
                </h2>
                {{
                  documentsSaved[
                    `${
                      parentItem[0].documentType.code
                    }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                  ]?.name
                }}
                <i class="fa fa-check-circle text-green-300"></i>
              </td>

              <td
                class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <div class="flex justify-center">
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
                </div>
              </td>
            </tr>
            <!-- If document upload has more than 2 items -->
            <tr
              v-else
              :class="
                fileUploadError[
                  'file_upload_row_' +
                    `${
                      parentItem[0].documentType.code
                    }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                ]
                  ? 'text-sm    flex flex-col mb-4 py-1 divide-y   sm:table-row sm:mb-0    sm:divide-none border-red-300 border-2'
                  : 'text-sm border-t  bg-primary-300 flex flex-col mb-8  py-1 divide-y    sm:table-row sm:mb-0    sm:divide-none'
              "
            >
              <td
                class="flex bg-primary-300 sm flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              >
                <h2 class="sm:hidden mb-2 text-xl underline text-main-400">
                  {{ headers[0] }}
                </h2>
                <div class="flex">
                  <h2 class="text-lg text-grey-800 break-words">
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
                    Add More
                  </button>
                </div>

                <h2 class="text-grey-800">
                  (You can upload up to {{ parentItem.length }} files)
                </h2>
              </td>
              <td
                class="flex flex-col bg-primary-300 sm px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              ></td>
              <td
                class="flex flex-col bg-primary-300 sm px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
              ></td>
            </tr>
            <!-- For nested documents upload -->
            <tr
              class="text-sm flex bg-primary-300 flex-col mb-8 py-1 divide-y sm:table-row sm:mb-0 sm:divide-none"
            >
              <div
                v-if="
                  showNestedDocuments[parentItem[0].documentType.code] != null
                "
                class="accordion sm:p-2"
                :id="`accordion_${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`"
                style="width: max-content"
              >
                <div class="w-full border-grey-400 bg-white rounded-md">
                  <div
                    :id="
                      'docAccordion_' +
                      `${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                    "
                    :class="isDarkMode ? 'text-white' : ''"
                    :aria-labelledby="`headingOne_${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`"
                    :data-bs-parent="`#accordion_${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`"
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
                              {{ header }}
                            </th>
                            <th
                              class="px-2 py-2 uppercase font-medium text-white text-left text-lg"
                            >
                              Remove
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(parentChildItem, index) in parentItem"
                            :key="index"
                            :class="
                              fileUploadError[
                                'file_upload_row_' +
                                  `${
                                    parentChildItem.documentType.code
                                  }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                              ]
                                ? 'text-sm    flex flex-col mb-4 py-1 divide-y   sm:table-row sm:mb-0    sm:divide-none border-red-300 border-2'
                                : 'text-sm  bg-white rounded-md border flex flex-col mb-8  py-1 divide-y    sm:table-row sm:mb-0    sm:divide-none'
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
                              <h2
                                class="text-xl text-main-400 underline sm:invisible"
                              >
                                Document Name
                              </h2>
                              <h2
                                :class="
                                  isDarkMode
                                    ? 'text-white'
                                    : 'text-lg text-grey-800 break-all sm:-mt-5'
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
                                  :id="`files_${parentChildItem.documentType.code.toUpperCase()}_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`"
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
                              class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
                              v-if="
                                documentsSaved[
                                  `${
                                    parentChildItem.documentType.code
                                  }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                                ]?.name
                              "
                            >
                              <h2
                                class="text-xl text-main-400 underline sm:invisible mb-4"
                              >
                                Uploaded File Name
                              </h2>
                              <h2 class="document-name text-xl text-grey-800">
                                {{
                                  documentsSaved[
                                    `${
                                      parentChildItem.documentType.code
                                    }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                                  ]?.name
                                }}
                                <i
                                  class="fa fa-check-circle text-green-300"
                                ></i>
                              </h2>
                            </td>
                            <td
                              v-if="
                                parentChildItem.existingFile &&
                                showNestedDocuments[
                                  parentItem[0].documentType.code
                                ] >= index
                              "
                              class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:uppercase before:font-medium sm:pl-6"
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
                                  class="fa fa-eye cursor-pointer text-main-400"
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

                            <td
                              v-if="
                                showNestedDocuments[
                                  parentItem[0].documentType.code
                                ] >= index
                              "
                            >
                              <div class="flex justify-center">
                                <span
                                  class="cursor-pointer text-grey-800"
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

        <small class="text-base text-yellow-300"
          >Note:-document names with <b class="text-red-300">(*)</b> must be
          uploaded in order to go forward with application process</small
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
};
</script>
