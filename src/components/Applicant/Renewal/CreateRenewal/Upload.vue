<!-- eslint-disable no-unused-vars -->
<template>
  <div>
    <div class="accordion mr-8 mt-24 sm" id="FilesAccordion">
      <h2
        v-if="alreadyUploaded"
        class="text-xl sm:text-2xl text-yellow-300 border mb-2 rounded-md p-2"
      >
        It seems like you have already attached the documents required to go to the next
        step, if you wish to change any file, you can do so, else click next at the bottom
        of the screen
      </h2>
      <div class="accordion-item bg-white border border-grey-200 p-4 rounded-lg">
        <h2 class="accordion-header mb-0" id="headingOne">
          <button
            class="accordion-button relative flex items-center w-full p-4 border text-gray-800 text-xl rounded-md transition focus:outline-none"
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
          <div class="accordion-body py-1 px-5">
            <div class="bg-red-800 py-5">
              <div class="overflow-x-auto w-full p-4">
                <table
                  class="max-w-full w-full whitespace-nowrap rounded-lg mb-8 bg-white divide-y overflow-hidden"
                >
                  <thead class="bg-lightMain-500">
                    <tr class="text-left">
                      <th class="font-semibold text-sm uppercase px-6 py-4 text-white">
                        Document Name
                      </th>
                      <th class="font-semibold text-sm uppercase px-6 py-4 text-white">
                        Document Description
                      </th>
                      <th
                        class="font-semibold text-sm uppercase px-6 py-4 text-left text-white"
                      >
                        Upload
                      </th>

                      <th
                        class="font-semibold text-sm uppercase px-6 py-4 text-center text-white"
                      >
                        View
                      </th>

                      <th class="font-semibold text-sm uppercase px-6 py-4 text-white">
                        Remark
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y">
                    <tr
                      v-for="item in commonDocuments"
                      :key="item.id"
                      :class="
                        fileUploadError[`file_upload_row_${item.documentType.code}`]
                          ? 'accordion-body py-4 px-5 border-2 border-red-300 rounded-lg'
                          : 'accordion-body py-4 px-5 border-b rounded-lg'
                      "
                    >
                      <td class="px-6 py-4">
                        <div class="flex items-center p-4">
                          <div>
                            <p class="">
                              {{ item.documentType.name }}
                              <b v-if="item.isRequired" class="text-red-300">(*)</b>
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
                            :id="'common_image_' + item.documentType.id + item.id"
                            accept=".jpeg, .png, .jpg, .pdf, .webp, .tiff , .svg , .heic , .heif "
                            :ref="`imageUploader${item.id}`"
                            class="custom-file-input"
                            v-on:change="handleCommonFileUpload(item, $event)"
                          />
                        </p>
                      </td>
                      <td class="px-6 py-4" v-if="item && item.fileName">
                        <div class="flex items-center p-4">
                          <div>
                            <p class="">
                              {{ item.fileName ? item.fileName : "---------------" }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 text-center" v-if="item && item.existingFile">
                        <a
                          :id="'common_image_href_' + item.documentType.id + item.id"
                          :href="item.existingFile"
                          :data-title="item.name ? item.name : '-----'"
                          data-lightbox="example-2"
                        >
                          <i
                            :id="'common_icon_' + item.documentType.id + item.id"
                            class="fa fa-eye cursor-pointer text-main-400"
                            aria-hidden="true"
                          >
                            <img
                              :id="
                                'common_image_lightbox_' + item.documentType.id + item.id
                              "
                              :src="item.existingFile"
                              class="w-full h-2 object-cover"
                            />
                          </i>
                        </a>
                      </td>
                      <td class="px-6 py-4 text-center" v-else>
                        <a
                          :id="'common_image_href_' + item.documentType.id + item.id"
                          href=""
                          :data-title="item.name ? item.name : '-----'"
                          data-lightbox="example-2"
                        >
                          <i
                            :id="'common_icon_' + item.documentType.id + item.id"
                            class="fa fa-eye cursor-pointer text-main-400 disabled"
                            aria-hidden="true"
                          >
                            <img
                              :id="
                                'common_image_lightbox_' + item.documentType.id + item.id
                              "
                              src=""
                              class="w-full h-2 object-cover"
                            />
                          </i>
                        </a>
                      </td>

                      <td class="px-6 py-4">
                        <div class="flex items-center p-4">
                          <div>
                            <p
                              v-if="fileSizeExceed[item.documentType.code]"
                              class="text-red-300"
                            >
                              Uploaded file Size has exceeded the limit (3 MB)
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item bg-white border border-grey-200 p-1 mt-8 rounded-lg">
        <h2 class="accordion-header mb-0 mr-1">
          <button
            class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left border-0 rounded-md transition focus:outline-none"
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
              class="border-b-4 text-main-400 mb-8 border p-1 rounded-md"
            >
              <h4 class="text-grey-800 font-bold border-b">
                {{ table.educationalLevel ? table.educationalLevel.name : "" }}
                Related Files
              </h4>
              <h5 v-if="existingDocs && existingDocs.length > 0">
                Images are saved, only upload files you want to change
              </h5>
              <div class="overflow-x-auto w-full p-4">
                <table
                  class="w-full p-4 whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden table-auto"
                >
                  <thead class="bg-lightMain-500 p-4">
                    <tr class="text-left">
                      <th class="font-semibold text-sm uppercase px-6 py-4 text-white">
                        Document Name
                      </th>
                      <th class="font-semibold text-sm uppercase px-6 py-4 text-white">
                        Document Description
                      </th>

                      <th
                        class="font-semibold text-sm uppercase px-6 py-4 text-left text-white"
                      >
                        Upload
                      </th>
                      <th
                        class="font-semibold text-sm uppercase px-6 py-4 text-center text-white"
                      >
                        View
                      </th>
                      <th class="font-semibold text-sm uppercase px-6 py-4 text-white">
                        Remark
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y p-4">
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
                              <b v-if="item.isRequired" class="text-red-300">(*)</b>
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
                            :id="`files_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`"
                            accept=".jpeg, .png, .jpg, .pdf, .webp, .tiff , .svg , .heic , .heif "
                            :ref="`imageUploader${item.id}`"
                            class="custom-file-input"
                            v-on:change="handleFileUpload(item, $event, table)"
                          />
                        </p>
                      </td>

                      <td class="px-6 py-4" v-if="item && item.fileName">
                        <div class="flex items-center p-4">
                          <div>
                            <p class="">
                              {{ item.fileName ? item.fileName : "---------------" }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td v-if="item.existingFile" class="px-6 py-4 text-center">
                        <a
                          :id="
                            'image_href_' +
                            `${item.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                          "
                          :href="item.existingFile"
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
                              :src="item.existingFile"
                              class="w-full h-2 object-cover"
                            />
                          </i>
                        </a>
                      </td>
                      <td v-else class="px-6 py-4 text-center">
                        <a
                          :id="
                            'image_href_' +
                            `${
                              item.documentType.code
                            }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                          "
                          href=""
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
                            class="fa fa-eye cursor-pointer text-main-400 disabled"
                            aria-hidden="true"
                          >
                            <img
                              :id="
                                'image_lightbox_' +
                                `${
                                  item.documentType.code
                                }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                              "
                              src=""
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
                      :class="
                        fileUploadError[
                          'file_upload_row_' +
                            `${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                        ]
                          ? 'accordion-body py-4 px-5 border-2 border-red-300 rounded-lg'
                          : 'accordion-body py-4 px-5 border-b  rounded-lg'
                      "
                    >
                      <td class="px-6 py-4">
                        <div class="flex items-center ml-4">
                          <div>
                            <p class="">
                              {{ parentItem[0].documentType.name }}
                              <b v-if="parentItem[0].isRequired" class="text-red-300"
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
                            :id="`files_
                                    ${
                                      parentItem[0].documentType.code
                                    }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`"
                            accept=".jpeg, .png, .jpg, .pdf, .webp, .tiff , .svg , .heic , .heif "
                            :ref="`imageUploader${parentItem[0].id}`"
                            class="custom-file-input"
                            v-on:change="handleFileUpload(parentItem[0], $event, table)"
                          />
                        </p>
                      </td>
                      <td
                        class="px-6 py-4"
                        v-if="parentItem[0] && parentItem[0].fileName"
                      >
                        <div class="flex items-center p-4">
                          <div>
                            <p class="">
                              {{
                                parentItem[0].fileName
                                  ? parentItem[0].fileName
                                  : "---------------"
                              }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td v-if="parentItem[0].existingFile" class="px-6 py-4 text-center">
                        <a
                          :id="
                            'image_href_' +
                            `${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                          "
                          :href="parentItem[0].existingFile"
                          :data-title="parentItem[0].name ? parentItem[0].name : '-----'"
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
                              :src="parentItem[0].existingFile"
                              class="w-full h-2 object-cover"
                            />
                          </i>
                        </a>
                      </td>
                      <td v-else class="px-6 py-4 text-center">
                        <a
                          :id="
                            'image_href_' +
                            `${
                              parentItem[0].documentType.code
                            }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                          "
                          href=""
                          :data-title="parentItem[0].name ? item.name : '-----'"
                          data-lightbox="example-2"
                        >
                          <i
                            :id="
                              'educational_icon_' +
                              `${
                                parentItem[0].documentType.code
                              }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                            "
                            class="fa fa-eye cursor-pointer text-main-400 disabled"
                            aria-hidden="true"
                          >
                            <img
                              :id="
                                'image_lightbox_' +
                                `${
                                  parentItem[0].documentType.code
                                }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                              "
                              src=""
                              class="w-full h-2 object-cover"
                            />
                          </i>
                        </a>
                      </td>
                    </tr>
                    <!-- if parent doc has more than 1 elements -->
                    <tr v-else class="border-b text-main-400 bg-lightGrey-100">
                      <td
                        :class="
                          fileUploadError[
                            'file_upload_row_' +
                              `${
                                parentItem[0].documentType.code
                              }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                          ]
                            ? 'accordion-body py-4 px-5 border-2 border-red-300 rounded-lg'
                            : 'accordion-body py-4 px-5 border-b  rounded-lg'
                        "
                      >
                        <div class="flex items-center ml-4">
                          <div>
                            <p class="">
                              {{
                                parentItem[0].documentType.name.slice(
                                  0,
                                  parentItem[0].documentType.name.length - 2
                                )
                              }}
                              <b v-if="parentItem[0].isRequired" class="text-red-300"
                                >(*)</b
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
                          class="inline-block px-6 py-2.5 bg-white hover:bg-main-400 hover:text-white text-main-400 text-xs font-bold leading-tight uppercase rounded active:border-main-400 transition duration-150 ease-in-out border"
                          type="button"
                          @click="addMore(parentItem[0])"
                        >
                          Add
                        </button>
                      </td>
                    </tr>
                    <!-- end table row -->

                    <tr>
                      <div
                        v-if="
                          showNestedDocuments[parentItem[0].documentType.code] != null
                        "
                        class="accordion p-4"
                        :id="`accordion_${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`"
                        style="width: max-content"
                      >
                        <div class="w-full bg-white border border-grey-400 ml-8">
                          <div
                            :id="
                              'docAccordion_' +
                              `${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                            "
                            class=""
                            :aria-labelledby="`headingOne_${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`"
                            :data-bs-parent="`#accordion_${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`"
                          >
                            <div class="accordion-body py-4 px-5">
                              <div class="bg-lightMain-500 rounded-sm p-2">
                                <small class="text-white"
                                  >Only the first file upload is required, the remaining
                                  ones are optional</small
                                >
                              </div>

                              <tr
                                v-for="(parentChildItem, index) in parentItem"
                                :key="parentChildItem"
                                :class="
                                  fileUploadError[
                                    'file_upload_row_' +
                                      `${
                                        parentChildItem.documentType.code
                                      }_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                                  ]
                                    ? 'accordion-body py-4 px-5 border-2 border-red-300 rounded-lg'
                                    : 'accordion-body py-4 px-5 border-b  rounded-lg'
                                "
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
                                          parentChildItem.documentType.description
                                            ? parentChildItem.documentType.description
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
                                  class="p-4"
                                >
                                  <p class="">
                                    <input
                                      type="file"
                                      :required="parentChildItem.isRequired"
                                      :id="`files_${parentChildItem.documentType.code.toUpperCase()}_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`"
                                      accept=".jpeg, .png, .jpg, .pdf, .webp, .tiff , .svg , .heic , .heif "
                                      :ref="`imageUploader${parentChildItem.id}`"
                                      class="custom-file-input"
                                      v-on:change="
                                        handleFileUpload(parentChildItem, $event, table)
                                      "
                                    />
                                  </p>
                                </td>
                                <td
                                  class="px-6 py-4"
                                  v-if="parentChildItem && parentChildItem.fileName"
                                >
                                  <div class="flex items-center p-4">
                                    <div>
                                      <p class="">
                                        {{
                                          parentChildItem.fileName
                                            ? parentChildItem.fileName
                                            : "---------------"
                                        }}
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  v-if="
                                    parentChildItem.existingFile &&
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
                                    :href="parentChildItem.existingFile"
                                    :data-title="
                                      parentChildItem.name
                                        ? parentChildItem.name
                                        : '-----'
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
                                        :src="parentChildItem.existingFile"
                                        class="w-full h-2 object-cover"
                                      />
                                    </i>
                                  </a>
                                </td>
                                <td
                                  v-if="
                                    showNestedDocuments[
                                      parentItem[0].documentType.code
                                    ] >= index && !parentChildItem.existingFile
                                  "
                                  class="px-6 py-4 text-center"
                                >
                                  <a
                                    :id="
                                      'image_href_' +
                                      `${parentChildItem.documentType.code.toUpperCase()}_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                                    "
                                    href=""
                                    :data-title="
                                      parentChildItem.name ? item.name : '-----'
                                    "
                                    data-lightbox="example-2"
                                  >
                                    <i
                                      :id="
                                        'educational_icon_' +
                                        `${parentChildItem.documentType.code.toUpperCase()}_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                                      "
                                      class="fa fa-eye cursor-pointer text-main-400 disabled"
                                      aria-hidden="true"
                                    >
                                      <img
                                        :id="
                                          'image_lightbox_' +
                                          `${parentChildItem.documentType.code.toUpperCase()}_${table.educationalLevel.code.toUpperCase()}_${table.professionType.code.toUpperCase()}`
                                        "
                                        src=""
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
                                  <span
                                    class="ml-4 cursor-pointer"
                                    @click="
                                      removeChildUpload(parentItem[0].documentType.code)
                                    "
                                    ><i class="fa-solid fa-trash text-red-300"></i
                                  ></span>
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
                  >Note:-document names with <b class="text-red-300">(*)</b> must be
                  uploaded in order to go forward with application process</small
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-2 m-4 rounded-md" v-if="errorDocuments && errorDocuments.length > 0">
        <h2 class="text-yellow-300 font-bold text-3xl">
          Please attach the following files to proceed
        </h2>
        <li
          class="text-yellow-300 text-xl font-bold border-2 rounded-md p-2 m-1"
          v-for="error in errorDocuments"
          :key="error"
        >
          {{ error.name }}
        </li>
      </div>
    </div>
    <div class="vld-parent mt-4">
      <loading
        :active="isLoading"
        :is-full-page="false"
        :color="'#2F639D'"
        :opacity="1"
      ></loading>
      <div class="flex justify-end mr-8 mb-8">
        <button
          class="mt-8 inline-block px-6 py-2.5 bg-white hover:bg-main-400 hover:text-white text-main-400 text-xs font-bold leading-tight uppercase rounded active:border-main-400 transition duration-150 ease-in-out border"
          type="submit"
          @click="saveDraft()"
        >
          Save as draft
        </button>
        <button
          class="mt-8 inline-block px-6 py-2.5 bg-white hover:bg-main-400 hover:text-white text-main-400 text-xs font-bold leading-tight uppercase rounded active:border-main-400 transition duration-150 ease-in-out border"
          @click="back()"
        >
          back
        </button>
        <button
          class="mt-8 inline-block px-6 py-2.5 bg-white hover:bg-main-400 hover:text-white text-main-400 text-xs font-bold leading-tight uppercase rounded active:border-main-400 transition duration-150 ease-in-out border"
          @click="next()"
        >
          next
        </button>
      </div>
    </div>
  </div>
  <!--<filePreview :modalData="filePreviewData"> </filePreview>-->
</template>
<script>
import { ref, onMounted, toRaw } from "vue";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
import Compressor from "compressorjs";
import MAX_FILE_SIZE from "../../../../composables/documentMessage"; 
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  components: { Loading },

  // eslint-disable-next-line vue/no-setup-props-destructure
  setup(props, { emit }) {
    let store = useStore();
    const toast = useToast();
    let isLoading = ref(false);
    let documents = ref([]);
    let commonDocuments = ref([]);
    let imageUploader = ref(null);
    let goToNext = ref(false);
    let alreadyUploaded = ref(false);
    let educationalDocs = ref([]);
    let localData = ref({}); 
    let existingDocs = [];
    let files = ref("");
    let maxFileSize = ref();
    let dbVersion = 1;
    let isImage = ref({});
    let isPdf = ref({});
    let fileSizeExceed = ref({});
    let fileSize = ref("");
    let showImage = ref(false);
    let previewDocuments = ref({});
    let showPreview = ref("");
    maxFileSize.value = MAX_FILE_SIZE.MAX_FILE_SIZE;
    let generalInfo = ref({});
    let documentToSave = ref({});
    let isBackButtonClicked = ref(false);
    let fileUploadError = ref([]);
    let imageData = [];
    let formData = new FormData();
    let documentsUploaded = ref({});
    let renewalDocuments = ref([]);
    let errorDocuments = ref([]);
    let showNestedDocuments = ref({});

 

    const handleCommonFileUpload = (data, event) => {
      if (/\.(pdf)$/i.test(event?.target?.files[0].name)) {
        documentsUploaded.value[data.documentType.code] = "";
        documentsUploaded.value[data.documentType.code] = event?.target?.files[0];
        let reader = new FileReader();

        let fileS = documentsUploaded.value[data.documentType.code].size;

        isImage.value[data.documentType.code] = false;

        delete fileUploadError.value["file_upload_row_" + data.documentType.code];

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
            imageData = imageData.filter(
              (el) => el.documenttype != data.documentType.name
            );
            imageData.push({
              imageId: "common_image_lightbox_" + data.documentType.code,
              documenttype: data.documentType ? data.documentType.name : "",
              documentCode: data.documentType ? data.documentType.code : "",
              educationalLevel: data.educationalLevel ? data.educationalLevel.name : "",
              fileName: event?.target?.files[0].name,
              image: reader.result,
            });

            documentToSave.value[data.documentType.code] = reader.result;
          },
          false
        );

        isPdf.value[data.documentType.code] = true;
        formData.append(data.documentType.code, event?.target?.files[0]);
        reader.readAsDataURL(documentsUploaded.value[data.documentType.code]);
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
          ? (output.onload = function () {
              URL.revokeObjectURL(output.src); // free memory
            })
          : "";
      } else {
        new Compressor(event?.target?.files[0], {
          quality: 0.5,

          // The compression process is asynchronous,
          // which means you have to access the `result` in the `success` hook function.
          success(result) {
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(new File([result], result.name));
            event.target.files = dataTransfer.files;
            documentsUploaded.value[data.documentType.code] = "";
            documentsUploaded.value[data.documentType.code] = event?.target?.files[0];
            let reader = new FileReader();

            let fileS = documentsUploaded.value[data.documentType.code].size;

            delete fileUploadError.value["file_upload_row_" + data.documentType.code];
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

            isImage.value[data.documentType.code] = true;
            isPdf.value[data.documentType.code] = false;
            formData.append(data.documentType.code, event?.target?.files[0]);
            reader.readAsDataURL(documentsUploaded.value[data.documentType.code]);

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
              ? (output.onload = function () {
                  URL.revokeObjectURL(output.src); // free memory
                })
              : "";
          },
          error(err) {
            console.log(err.message);
          },
        });
      }
    };

    const handleFileUpload = (data, event, pro) => {
      if (/\.(pdf)$/i.test(event?.target?.files[0].name)) {
        let reader = new FileReader();
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

        delete fileUploadError.value[
          "file_upload_row_" +
            data.documentType.code.toUpperCase() +
            "_" +
            data.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase()
        ];

        let fileS =
          documentsUploaded.value[
            data.documentType.code +
              "_" +
              data.educationalLevel.code.toUpperCase() +
              "_" +
              pro.professionType.code.toUpperCase()
          ].size;

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
        formData.append(
          data.documentType.code +
            "_" +
            data.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase(),

          event?.target?.files[0]
        );

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
              educationalLevel: data.educationalLevel ? data.educationalLevel.name : "",
              fileName: event?.target?.files[0].name,
              image: reader.result,
            });
          },
          false
        );

        reader.readAsDataURL(
          documentsUploaded.value[
            data.documentType.code +
              "_" +
              data.educationalLevel.code.toUpperCase() +
              "_" +
              pro.professionType.code.toUpperCase()
          ]
        );
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
          ? (output.onload = function () {
              URL.revokeObjectURL(output.src); // free memory
            })
          : "";
      } else {
        new Compressor(event?.target?.files[0], {
          quality: 0.5,

          // The compression process is asynchronous,
          // which means you have to access the `result` in the `success` hook function.
          success(result) {
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(new File([result], result.name));
            let reader = new FileReader();
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

            let fileS =
              documentsUploaded.value[
                data.documentType.code +
                  "_" +
                  data.educationalLevel.code.toUpperCase() +
                  "_" +
                  pro.professionType.code.toUpperCase()
              ].size;

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
              function () {
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
              ? (output.onload = function () {
                  URL.revokeObjectURL(output.src); // free memory
                })
              : "";
            // formData.append(data.documentType.code, result);
          },
          error(err) {
            console.log(err.message);
          },
        });
      }
    };

    const checkDocuments = () => {
      let temp = "";
      let CMtemp = "";
      let NSTemp = "";
      var tempVal;
      errorDocuments.value = [];
      console.log(documentsUploaded.value);
      // if back button is clicked
      if (isBackButtonClicked.value == true) {
        // check common documents

        commonDocuments.value
          .filter((cd) => cd.isRequired)
          .forEach((element) => {
            CMtemp = element.fileName;

            if (!CMtemp || CMtemp == "") {
              fileUploadError.value[
                "file_upload_row_" + element.documentType.code
              ] = true;
              errorDocuments.value.push({
                isCommon: true,
                name: element.documentType.name,
                code: element.documentType.code,
              });
            } else {
              delete fileUploadError.value[
                "file_upload_row_" + element.documentType.code
              ];
            }
          });

        // check normal docs with no parents
        educationalDocs.value.forEach((ed) => {
          ed.docs
            .filter((docs) => docs.isRequired)
            .forEach((single) => {
              let tempEdVal = documentsUploaded.value.filter(
                (el) =>
                  el.documentCode ==
                  single.documentType.code.toUpperCase() +
                    "_" +
                    ed.educationalLevel.code.toUpperCase() +
                    "_" +
                    ed.professionType.code.toUpperCase()
              );

              if (tempEdVal) {
                delete fileUploadError.value[
                  "file_upload_row_" +
                    single.documentType.code.toUpperCase() +
                    "_" +
                    ed.educationalLevel.code.toUpperCase() +
                    "_" +
                    ed.professionType.code.toUpperCase()
                ];
              } else {
                fileUploadError.value[
                  "file_upload_row_" +
                    single.documentType.code.toUpperCase() +
                    "_" +
                    ed.educationalLevel.code.toUpperCase() +
                    "_" +
                    ed.professionType.code.toUpperCase()
                ] = true;
                errorDocuments.value.push({
                  name: single.documentType.name,
                  code:
                    single.documentType.code.toUpperCase() +
                    "_" +
                    ed.educationalLevel.code.toUpperCase() +
                    "_" +
                    ed.professionType.code.toUpperCase(),
                });
              }
            });

          //// check documetns with parents
          for (var pd in ed.parentDoc) {
            tempVal = renewalDocuments.value.filter(
              (nld) => nld.parentDocument == pd && nld.isRequired
            );

            if (
              tempVal &&
              tempVal.length > 0 &&
              tempVal[0] &&
              tempVal[0].isRequired == true
            ) {
              // eslint-disable-next-line no-prototype-builtins
              NSTemp = documentsUploaded.value.filter(
                (el) =>
                  el.documentCode ==
                  tempVal[0].documentType.code +
                    "_" +
                    ed.educationalLevel.code.toUpperCase() +
                    "_" +
                    ed.professionType.code.toUpperCase()
              );

              if (NSTemp && NSTemp != "" && NSTemp[0]) {
                delete fileUploadError.value[
                  "file_upload_row_" +
                    renewalDocuments.value.filter(
                      (nld) => nld.parentDocument == pd && nld.isRequired
                    )[0].documentType.code +
                    "_" +
                    ed.educationalLevel.code.toUpperCase() +
                    "_" +
                    ed.professionType.code.toUpperCase()
                ];
              } else {
                fileUploadError.value[
                  "file_upload_row_" +
                    renewalDocuments.value.filter(
                      (nld) => nld.parentDocument == pd && nld.isRequired
                    )[0].documentType.code +
                    "_" +
                    ed.educationalLevel.code.toUpperCase() +
                    "_" +
                    ed.professionType.code.toUpperCase()
                ] = true;
                errorDocuments.value.push({
                  name: renewalDocuments.value.filter(
                    (nld) => nld.parentDocument == pd && nld.isRequired
                  )[0].documentType.name,
                  code:
                    renewalDocuments.value.filter(
                      (nld) => nld.parentDocument == pd && nld.isRequired
                    )[0].documentType.code +
                    "_" +
                    ed.educationalLevel.code.toUpperCase() +
                    "_" +
                    ed.professionType.code.toUpperCase(),
                });
              }
            }
          }
        });
      } else {
        commonDocuments.value
          .filter((cd) => cd.isRequired)
          .forEach((element) => {
            // eslint-disable-next-line no-prototype-builtins
            CMtemp = documentsUploaded.value.hasOwnProperty(element.documentType.code);

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
              delete fileUploadError.value[
                "file_upload_row_" + element.documentType.code
              ];
            }
          });

        educationalDocs.value.forEach((ed) => {
          // check normal docs with no parents

          ed.docs
            .filter((docs) => docs.isRequired)
            .forEach((single) => {
              // eslint-disable-next-line no-prototype-builtins
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
                delete fileUploadError.value[
                  "file_upload_row_" +
                    single.documentType.code +
                    "_" +
                    ed.educationalLevel.code.toUpperCase() +
                    "_" +
                    ed.professionType.code.toUpperCase()
                ];
              }
            });

          //// check documetns with parents
          for (var pd in ed.parentDoc) {
            tempVal = renewalDocuments.value.filter(
              (nld) => nld.parentDocument == pd && nld.isRequired
            );

            if (
              tempVal &&
              tempVal.length > 0 &&
              tempVal[0] &&
              tempVal[0].isRequired == true
            ) {
              // eslint-disable-next-line no-prototype-builtins
              NSTemp = documentsUploaded.value.hasOwnProperty(
                tempVal[0].documentType.code +
                  "_" +
                  ed.educationalLevel.code.toUpperCase() +
                  "_" +
                  ed.professionType.code.toUpperCase()
              );
              if (NSTemp == "") {
                fileUploadError.value[
                  "file_upload_row_" +
                    renewalDocuments.value.filter(
                      (nld) => nld.parentDocument == pd && nld.isRequired
                    )[0].documentType.code +
                    "_" +
                    ed.educationalLevel.code.toUpperCase() +
                    "_" +
                    ed.professionType.code.toUpperCase()
                ] = true;
                errorDocuments.value.push({
                  name: renewalDocuments.value.filter(
                    (nld) => nld.parentDocument == pd && nld.isRequired
                  )[0].documentType.name,
                  code:
                    renewalDocuments.value.filter(
                      (nld) => nld.parentDocument == pd && nld.isRequired
                    )[0].documentType.code +
                    "_" +
                    ed.educationalLevel.code.toUpperCase() +
                    "_" +
                    ed.professionType.code.toUpperCase(),
                });
              }
            }
          }
        });
      }

      return fileUploadError.value;
    };
    const urltoFile = async (data, fileName) => {
      let url = data;
      let file = await fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
          return new File([blob], fileName, {
            type: /\.(pdf)$/i.test(fileName) ? "application/pdf" : "image/png",
          });
        });
      return file;
    };
    const next = () => {
      let documentValidation = checkDocuments();

      if (documentValidation && Object.keys(documentValidation).length == 0) {
        let finalLocalData = {
          created: new Date(),
          data: [],
        };
        let db;
        let request = indexedDB.open("RNdocumentUploads", dbVersion);
        request.onsuccess = function () {
          db = request.result;
          let transaction = db.transaction(["RNdocumentUploads"], "readwrite");

          if (documentsUploaded.value.length > 0 && imageData.length > 0) {
            documentsUploaded.value.forEach((existing) => {
              imageData.forEach((newImage) => {
                if (existing.imageId == newImage.imageId) {
                  existing.image = newImage.image;
                  existing.fileName = newImage.fileName;
                }
              });
            });

            finalLocalData.data = toRaw(documentsUploaded.value);
            formData = new FormData();
            finalLocalData.data.forEach((element) => {
              urltoFile(element.image, element.fileName).then((res) => {
                let tempImage = res;

                formData.append(element.documentCode, tempImage);
              });
            });

            store.dispatch("renewal/setTempDocs", formData);
          } else if (isBackButtonClicked.value == true) {
            finalLocalData.data = toRaw(documentsUploaded.value);
            formData = new FormData();
            finalLocalData.data.forEach((element) => {
              urltoFile(element.image, element.fileName).then((res) => {
                let tempImage = res;
                formData.append(element.documentCode, tempImage);
              });
            });

            store.dispatch("renewal/setTempDocs", formData);
          } else {
            finalLocalData.data = imageData;
            store.dispatch("renewal/setTempDocs", formData);
          }
          finalLocalData.data = [...new Set(finalLocalData.data)];
          const objectStore = transaction.objectStore("RNdocumentUploads");

          const objectStoreRequest = objectStore.clear();

          objectStoreRequest.onsuccess = () => {
            let addReq = transaction.objectStore("RNdocumentUploads").put(finalLocalData);

            addReq.onerror = function () {
              console.log(
                "Error regarding your browser, please update your browser to the latest version"
              );
            };

            transaction.oncomplete = function () {
              console.log("data stored");
              let tempRN = localStorage.getItem("tempRN")
                ? JSON.parse(localStorage.getItem("tempRN"))
                : {};
              tempRN.step = 3;
              localStorage.setItem("tempRN", JSON.stringify(tempRN));
              emit("changeActiveState");
            };
          };
        };
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
          "Please attach documents marked with red border and this icon (*) next to their name to proceed",
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
    const back = () => {
      let tempRN = localStorage.getItem("tempRN")
        ? JSON.parse(localStorage.getItem("tempRN"))
        : false;
      if (tempRN && tempRN.step != null) {
        tempRN.step = 1;
        localStorage.setItem("tempRN", JSON.stringify(tempRN));
      }

      emit("changeActiveStateMinus");
    };

    const saveDraft = () => {
      generalInfo.value.licenseFile = [];
      isLoading.value = true;
      let license = {
        action: "DraftEvent",
        data: {
          applicantTypeId:
            localData.value && localData.value.applicantTypeSelected
              ? localData.value.applicantTypeSelected.id
              : null,
          residenceWoredaId:
            localData.value && localData.value.woredaSelected
              ? localData.value.woredaSelected.id
              : null,
          educations: localData.value ? localData.value.education : {},
          occupationTypeId: localData.value.occupationSelected
            ? localData.value.occupationSelected.id
            : null,
          nativeLanguageId: localData.value.nativeLanguageSelected
            ? localData.value.nativeLanguageSelected.id
            : null,
          isLegal: true,
          regionId: generalInfo.value.regionSelected
            ? generalInfo.value.regionSelected.id
            : "",
          regionCode: generalInfo.value.regionSelected
            ? generalInfo.value.regionSelected.code
            : "FED",
        },
      };
      store.dispatch("renewal/addRenewalLicense", license).then((res) => {
        let licenseId = res.data.data.id;
        let payload = { document: formData, id: licenseId };
        localStorage.setItem("tempRN", JSON.stringify({ id: licenseId, step: 3 }));
        store
          .dispatch("renewal/uploadDocuments", payload)
          .then((res) => {
            if (res.data.status == "Success") {
              toast.success("Applied successfuly", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              isLoading.value = false;
              localStorage.removeItem("RNApplicationData");
              indexedDB.deleteDatabase("RNdocumentUploads");
              localStorage.removeItem("tempRN");
              location.reload();
            } else {
              toast.error("Error occured, please try again", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
            }
          })
          .catch(() => {
            toast.error("Error occured, please try again", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
          });
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
      if (showNestedDocuments.value[parentItem.documentType.code] == undefined) {
        showNestedDocuments.value[parentItem.documentType.code] = 0;
      } else {
        showNestedDocuments.value[parentItem.documentType.code] =
          showNestedDocuments.value[parentItem.documentType.code] + 1;
      }
    };

    const initDb = async () => {
      let request = indexedDB.open("RNdocumentUploads", dbVersion);

      request.onerror = function () {
        console.error("Unable to open database.");
      };

      request.onsuccess = function () {
        let db = request.result;
        const tx = db.transaction("RNdocumentUploads", "readwrite");
        const store = tx.objectStore("RNdocumentUploads");
        let getAllIDB = store.getAll();
        getAllIDB.onsuccess = function (evt) {
          existingDocs =
            evt.target.result && evt.target.result[0] ? evt.target.result[0].data : {};
        };
      };

      request.onupgradeneeded = function () {
        let db = request.result;
        db.createObjectStore("RNdocumentUploads", {
          keyPath: "id",
          autoIncrement: true,
        });
      };
    };

    onMounted(async () => {
      let tryAgain = localStorage.getItem("tempRN")
        ? JSON.parse(localStorage.getItem("tempRN"))
        : false;

      //Initialize indexdb for file storage
      if (!("indexedDB" in window)) {
        alert(
          "This browser doesn't support Temporary storage please update your browser to the latest version"
        );

        return;
      } else {
        await initDb();

        localData.value = window.localStorage.getItem("RNApplicationData")
          ? JSON.parse(window.localStorage.getItem("RNApplicationData"))
          : {};

        generalInfo.value = localData.value;

        await store.dispatch("newlicense/getApplicationCategories").then(async (res) => {
          let categoryResults = res.data.data
            ? res.data.data.filter((ele) => ele.code == "RA")
            : "";
          let educationLevels = generalInfo.value.multipleDepartment;

          //Get department docs
          await educationLevels.forEach((element) => {
            store
              .dispatch("renewal/getRNdocuments", [
                categoryResults[0].id,
                generalInfo.value.applicantTypeSelected.id,
                element.educationalLevel.id,
                element.department.id,
              ])
              .then((res) => {
                let resp = res.data.data;
                renewalDocuments.value = res.data.data;

                educationalDocs.value.push({
                  educationalLevel: element.educationalLevel,
                  professionType: element.professionalType,
                  docs: resp.filter((element) => element.parentDocument == null),
                  parentDoc: groupByKey(resp, "parentDocument"),
                });
                if (existingDocs && existingDocs.length > 0 && resp && resp.length > 0) {
                  isBackButtonClicked.value = true;
                  alreadyUploaded.value = true;
                  documentsUploaded.value = existingDocs;
                  educationalDocs.value.forEach((ed) => {
                    ed.docs
                      .filter((docs) => docs.isRequired)
                      .forEach((Cd) => {
                        documentsUploaded.value.forEach((element) => {
                          if (
                            element.documentCode ==
                            Cd.documentType.code.toUpperCase() +
                              "_" +
                              ed.educationalLevel.code.toUpperCase() +
                              "_" +
                              ed.professionType.code.toUpperCase()
                          ) {
                            Cd.existingFile = element.image;
                            Cd.fileName = element.fileName;
                          }
                        });
                      });
                    for (const property in ed.parentDoc) {
                      ed.parentDoc[property].forEach((Cd) => {
                        documentsUploaded.value.forEach((element) => {
                          if (
                            element.documentCode ==
                            Cd.documentType.code.toUpperCase() +
                              "_" +
                              ed.educationalLevel.code.toUpperCase() +
                              "_" +
                              ed.professionType.code.toUpperCase()
                          ) {
                            Cd.existingFile = element.image;
                            Cd.fileName = element.fileName;
                          }
                        });
                      });
                    }
                  });
                }
                if (tryAgain && tryAgain.id != null && tryAgain.step == 3) {
                  next();
                }
              });
          });

          //Get Common Docs

          await store
            .dispatch("renewal/getCommonRNdocuments", [
              categoryResults[0].id,
              generalInfo.value.applicantTypeSelected.id,
            ])
            .then((res) => {
              let result = res.data.data;
              commonDocuments.value = result;
              if (
                existingDocs &&
                existingDocs.length > 0 &&
                result &&
                result.length > 0
              ) {
                existingDocs.forEach((existing) => {
                  result.forEach((Cd) => {
                    if (
                      existing.imageId ==
                      "common_image_lightbox_" + Cd.documentType.code
                    ) {
                      Cd.existingFile = existing.image;
                      Cd.fileName = existing.fileName;
                    }
                  });
                });
              } else {
                commonDocuments.value = result;
              }
            });
        });
      }
    });
    const removeChildUpload = (docCode) => {
      showNestedDocuments.value[docCode] -= 1;
    };
    return {
      removeChildUpload,
      documents,
      commonDocuments,
      files,
      handleFileUpload,
      fileUploadError,
      showImage,
      previewDocuments,
      showPreview,
      existingDocs, 
      handleCommonFileUpload,
      generalInfo,
      goToNext,
      saveDraft,
      educationalDocs,
      imageUploader, 
      next,
      back,
      addMore,
      alreadyUploaded,
      showNestedDocuments,
      errorDocuments,
      fileSizeExceed,
      isLoading,
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

.shadow-md {
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
