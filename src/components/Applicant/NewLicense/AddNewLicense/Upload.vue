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
                      :class="
                        fileUploadError[
                          `file_upload_row_${item.documentType.code}`
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
                            id="common_files"
                            accept=".jpeg, .png, .gif, .jpg, .pdf, .webp, .tiff , .svg"
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
                              {{
                                item.fileName
                                  ? item.fileName
                                  : "---------------"
                              }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-6 py-4 text-center"
                        v-if="item && item.existingFile"
                      >
                        <a
                          :id="
                            'common_image_href_' +
                              item.documentType.id +
                              item.id
                          "
                          :href="item.existingFile"
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
                              :src="item.existingFile"
                              class="w-full h-2 object-cover"
                            />
                          </i>
                        </a>
                      </td>
                      <td class="px-6 py-4 text-center" v-else>
                        <a
                          :id="
                            'common_image_href_' +
                              item.documentType.id +
                              item.id
                          "
                          href=""
                          :data-title="item.name ? item.name : '-----'"
                          data-lightbox="example-2"
                        >
                          <i
                            :id="'common_icon' + item.documentType.id + item.id"
                            class="
                              fa fa-eye
                              cursor-pointer
                              text-main-400
                              disabled
                            "
                            aria-hidden="true"
                          >
                            <img
                              :id="
                                'common_image_lightbox_' +
                                  item.documentType.id +
                                  item.id
                              "
                              src=""
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
              class="border-b-4 text-main-400 mb-8"
            >
              <h4 class="text-main-400 font-bold">
                {{ table.educationalLevel ? table.educationalLevel.name : "" }}
                Related Files
              </h4>
              <h5 v-if="existingDocs && existingDocs.length > 0">
                Images are saved, only upload files you want to change
              </h5>
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

                      <td class="px-6 py-4" v-if="item && item.fileName">
                        <div class="flex items-center p-4">
                          <div>
                            <p class="">
                              {{
                                item.fileName
                                  ? item.fileName
                                  : "---------------"
                              }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        v-if="item.existingFile"
                        class="px-6 py-4 text-center"
                      >
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
                              `${item.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                          "
                          href=""
                          :data-title="item.name ? item.name : '-----'"
                          data-lightbox="example-2"
                        >
                          <i
                            :id="
                              'educational_icon_' +
                                `${item.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                            "
                            class="
                              fa fa-eye
                              cursor-pointer
                              text-main-400
                              disabled
                             
                            "
                            aria-hidden="true"
                          >
                            <img
                              :id="
                                'image_lightbox_' +
                                  `${item.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
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
                      <td
                        v-if="parentItem[0].existingFile"
                        class="px-6 py-4 text-center"
                      >
                        <a
                          :id="
                            'image_href_' +
                              `${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                          "
                          :href="parentItem[0].existingFile"
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
                              `${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                          "
                          href=""
                          :data-title="parentItem[0].name ? item.name : '-----'"
                          data-lightbox="example-2"
                        >
                          <i
                            :id="
                              'educational_icon_' +
                                `${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                            "
                            class="
                              fa fa-eye
                              cursor-pointer
                              text-main-400
                              disabled
                            "
                            aria-hidden="true"
                          >
                            <img
                              :id="
                                'image_lightbox_' +
                                  `${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
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
                          Add
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
                        class="accordion p-4"
                        :id="
                          `accordion_${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                        "
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
                            :id="
                              'docAccordion_' +
                                `${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                            "
                            class=""
                            :aria-labelledby="
                              `headingOne_${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                            "
                            :data-bs-parent="
                              `#accordion_${parentItem[0].documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                            "
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
                                :class="
                                  fileUploadError[
                                    'file_upload_row_' +
                                      `${parentChildItem.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
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
                                  class="p-4"
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
                                <td
                                  class="px-6 py-4"
                                  v-if="
                                    parentChildItem && parentChildItem.fileName
                                  "
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
                                        `${parentChildItem.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
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
                                          `${parentChildItem.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
                                      "
                                      class="fa fa-eye cursor-pointer text-main-400"
                                      aria-hidden="true"
                                    >
                                      <img
                                        :id="
                                          'image_lightbox_' +
                                            `${parentChildItem.documentType.code}_${table.educationalLevel.code}_${table.professionType.code}`
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
                                      class="
                                        fa fa-eye
                                        cursor-pointer
                                        text-main-400
                                        disabled
                                      "
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
                  <b class="text-red-300">(*)</b> must be uploaded in order to
                  go forward with application process</small
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end mr-8 mb-8">
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
        type="submit"
        @click="saveDraft()"
      >
        Save as draft
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

    <div class="flex justify-right mr-0"></div>
  </div>
  <!--<filePreview :modalData="filePreviewData"> </filePreview>-->
</template>
<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";

import MAX_FILE_SIZE from "../../../../composables/documentMessage";
import { boolean } from "yargs";

export default {
  components: {},

  // eslint-disable-next-line vue/no-setup-props-destructure
  setup(props, { emit }) {
    let store = useStore();
    const toast = useToast();

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
    let existingDocs = [];
    let files = ref("");
    let maxFileSize = ref();
    let db;
    let isBackButtonClicked = ref(false);
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
    let documentUploaded = ref({});
    let documentToSave = ref({});
    let fileUploadError = ref([]);
    let imageData = [];
    let formData = new FormData();
    let documentsUploaded = ref({});
    let newLicenseDocuments = ref([]);
    let errorDocuments = ref([
      {
        name: "",
        code: "",
      },
    ]);
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
          function() {
            showPreview.value = true;

            previewDocuments.value[data.documentType.code] = reader.result;
            imageData = imageData.filter(
              (el) => el.documenttype != data.documentType.name
            );
            imageData.push({
              imageId: "common_image_lightbox_" + data.documentType.code,
              documenttype: data.documentType ? data.documentType.name : "",
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
      if (icon.classList.contains("disabled")) {
        icon.classList.toggle("disabled");
      }

      let output = document.getElementById(
        "common_image_lightbox" + data.documentType.id + data.id
      );

      let outputHref = document.getElementById(
        "common_image_href" + data.documentType.id + data.id
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
    };

    const handleFileUpload = (data, event, pro) => {
      documentUploaded.value[
        data.documentType.code +
          "_" +
          data.educationalLevel.code.toUpperCase() +
          "_" +
          pro.professionType.code.toUpperCase()
      ] = event?.target?.files[0];
      let reader = new FileReader();
      formData.append(
        data.documentType.code +
          "_" +
          data.educationalLevel.code.toUpperCase() +
          "_" +
          pro.professionType.code.toUpperCase(),

        event?.target?.files[0]
      );
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
      let fileS =
        documentUploaded.value[
          data.documentType.code +
            "_" +
            data.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase()
        ].size;
      if (fileS <= maxFileSize.value / 1000) {
        fileSizeExceed.value[
          data.documentType.code +
            "_" +
            data.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase()
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
            // documentUploaded.value[data.documentType.code] = reader.result;
          },
          false
        );

        if (
          documentUploaded.value[
            data.documentType.code +
              "_" +
              data.educationalLevel.code.toUpperCase() +
              "_" +
              pro.professionType.code.toUpperCase()
          ]
        ) {
          if (
            /\.(jpe?g|png|gif)$/i.test(
              documentUploaded.value[
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
              documentUploaded.value[
                data.documentType.code +
                  "_" +
                  data.educationalLevel.code.toUpperCase() +
                  "_" +
                  pro.professionType.code.toUpperCase()
              ]
            );
          } else if (
            /\.(pdf)$/i.test(
              documentUploaded.value[
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
              documentUploaded.value[
                data.documentType.code +
                  "_" +
                  data.educationalLevel.code.toUpperCase() +
                  "_" +
                  pro.professionType.code.toUpperCase()
              ]
            );
          }
        }
      } else {
        fileSizeExceed.value[
          data.documentType.code +
            "_" +
            data.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase()
        ] = true;
        documentUploaded.value[
          data.documentType.code +
            "_" +
            data.educationalLevel.code.toUpperCase() +
            "_" +
            pro.professionType.code.toUpperCase()
        ] = "";
      }
      let icon = document.getElementById(
        "educational_icon_" +
          data.documentType.code +
          "_" +
          pro.educationalLevel.code +
          "_" +
          pro.professionType.code
      );
      if (icon.classList.contains("disabled")) {
        icon.classList.toggle("disabled");
      }

      let output = document.getElementById(
        "image_lightbox_" +
          data.documentType.code +
          "_" +
          pro.educationalLevel.code +
          "_" +
          pro.professionType.code
      );
      let outputHref = document.getElementById(
        "image_href_" +
          data.documentType.code +
          "_" +
          pro.educationalLevel.code +
          "_" +
          pro.professionType.code
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
    };

    const checkDocuments = () => {
      let temp = true;
      let CMtemp = true;

      // if back button is clicked
      if (isBackButtonClicked.value == true) {
        // check common documents
        commonDocuments.value
          .filter((cd) => cd.isRequired)
          .forEach((element) => {
            CMtemp = element.fileName;

            if (!CMtemp || CMtemp == "") {
              CMtemp = false;
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
        // check normal docs with no parents
        educationalDocs.value.forEach((ed) => {
          ed.docs
            .filter((docs) => docs.isRequired)
            .forEach((single) => {
              if (
                documentsUploaded.value.some(
                  (docs) =>
                    docs.documentCode ===
                    single.documentType.code.toUpperCase() +
                      "_" +
                      ed.educationalLevel.code.toUpperCase() +
                      "_" +
                      ed.professionType.code.toUpperCase()
                )
              ) {
                fileUploadError.value[
                  "file_upload_row_" +
                    single.documentType.code +
                    "_" +
                    ed.educationalLevel.code +
                    "_" +
                    ed.professionType.code
                ] = false;
              } else {
                temp = false;
                fileUploadError.value[
                  "file_upload_row_" +
                    single.documentType.code +
                    "_" +
                    ed.educationalLevel.code +
                    "_" +
                    ed.professionType.code
                ] = true;
                errorDocuments.value.push({
                  name: single.documentType.name,
                  code:
                    single.documentType.code +
                    "_" +
                    ed.educationalLevel.code +
                    "_" +
                    ed.professionType.code,
                });
              }
            });
        });
      } else {
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
        });
      }

      return CMtemp && temp;
    };

    const next = () => {
      let documentValidation = checkDocuments();

      if (documentValidation) {
        store.dispatch("newlicense/setTempDocs", formData).then(() => {
          let finalLocalData = {
            created: new Date(),
            data: [],
          };
          let db;
          let request = indexedDB.open("NLdocumentUploads", dbVersion);
          request.onsuccess = function() {
            db = request.result;
            let transaction = db.transaction(
              ["NLdocumentUploads"],
              "readwrite"
            );

            if (existingDocs.length > 0 && imageData.length > 0) {
              existingDocs.forEach((existing) => {
                imageData.forEach((newImage) => {
                  if (existing.imageId == newImage.imageId) {
                    existing.image = newImage.image;
                    existing.fileName = newImage.fileName;
                  }
                });
              });
              finalLocalData.data = existingDocs;
            } else {
              finalLocalData.data = imageData;
            }
            finalLocalData.data = [...new Set(finalLocalData.data)];

            const objectStore = transaction.objectStore("NLdocumentUploads");

            const objectStoreRequest = objectStore.clear();

            objectStoreRequest.onsuccess = () => {
              let addReq = transaction
                .objectStore("NLdocumentUploads")
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
      emit("changeActiveStateMinus");
    };

    const saveDraft = () => {
      generalInfo.value.licenseFile = [];

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
        },
      };
      store.dispatch("newlicense/addNewLicense", license).then((res) => {
        let licenseId = res.data.data.id;
        let payload = { document: formData, id: licenseId };
        store
          .dispatch("newlicense/uploadDocuments", payload)
          .then((res) => {
            if (res.data.status == "Success") {
              toast.success("Applied successfuly", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              localStorage.removeItem("NLApplicationData");
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
      let request = indexedDB.open("NLdocumentUploads", dbVersion);

      request.onerror = function() {
        console.error("Unable to open database.");
      };

      request.onsuccess = function() {
        let db = request.result;
        const tx = db.transaction("NLdocumentUploads", "readonly");
        const store = tx.objectStore("NLdocumentUploads");
        let getAllIDB = store.getAll();
        getAllIDB.onsuccess = function(evt) {
          existingDocs =
            evt.target.result && evt.target.result[0]
              ? evt.target.result[0].data
              : {};
        };
      };

      request.onupgradeneeded = function() {
        let db = request.result;
        db.createObjectStore("NLdocumentUploads", {
          keyPath: "id",
          autoIncrement: true,
        });
      };
    };

    onMounted(() => {
      //Initialize indexdb for file storage
      if (!("indexedDB" in window)) {
        alert(
          "This browser doesn't support Temporary storage please update your browser to the latest version"
        );

      } else {
        initDb();
        localData.value = window.localStorage.getItem("NLApplicationData")
          ? JSON.parse(window.localStorage.getItem("NLApplicationData"))
          : {};

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
                null,
              ])
              .then((res) => {
                let resp = res.data.data;
                newLicenseDocuments.value = res.data.data;

                educationalDocs.value.push({
                  educationalLevel: element.educationalLevel,
                  professionType: element.professionalType,
                  docs: resp.filter(
                    (element) => element.parentDocument == null
                  ),
                  parentDoc: groupByKey(resp, "parentDocument"),
                });

                if (
                  existingDocs &&
                  existingDocs.length > 0 &&
                  resp &&
                  resp.length > 0
                ) {
                  isBackButtonClicked.value = true;
                  documentsUploaded.value = existingDocs;
                  educationalDocs.value.forEach((ed) => {
                    ed.docs
                      .filter((docs) => docs.isRequired)
                      .forEach((Cd) => {
                        documentsUploaded.value.forEach((element) => {
                          if (
                            element.documentCode ===
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
                            element.documentCode ===
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
              if (
                existingDocs &&
                existingDocs.length > 0 &&
                result &&
                result.length > 0
              ) {
                isBackButtonClicked.value = true;
                documentsUploaded.value = existingDocs;
                existingDocs.forEach((existing) => {
                  result.forEach((Cd) => {
                    if (
                      existing.imageId ==
                      "common_image_lightbox_" +
                        Cd.documentType.code.toUpperCase()
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

    return {
      documents,
      commonDocuments,
      files,
      handleFileUpload,
      showImage,
      previewDocuments,
      showPreview,
      existingDocs,
      fileUploadError,
      previewFile,
      handleCommonFileUpload,
      generalInfo,
      goToNext,
      saveDraft,
      educationalDocs,
      imageUploader,
      filePreviewData,
      next,
      back,
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
</style>
