<template>
  <table
    v-if="tableRows && tableRows.length > 0"
    class="w-full rounded-md striped sm:border mb-8"
  >
    <thead class="hidden border-0 sm:table-header-group bg-lightMain-500">
      <tr>
        <th
          v-for="(header, index) in headers"
          :key="index"
          class="px-4 py-4 border-0 border-b uppercase font-medium text-white text-left text-lg"
        >
          {{ $t(header) }}
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
        v-for="item in tableRows"
        :key="item.id"
        :class="
          fileUploadError[`file_upload_row_${item.documentType.code}`]
            ? 'text-sm   shadow-md flex flex-col mb-4 py-1 divide-y   sm:table-row sm:mb-0    sm:divide-none border-red-300 border-2'
            : 'text-sm border rounded-md shadow-md  flex flex-col mb-8  py-1 divide-y    sm:table-row sm:mb-0    sm:divide-none'
        "
      >
        <td
          class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:text-[0.625rem] before:uppercase before:font-medium sm:pl-6"
        >
          <h2 class="sm:hidden mb-2 text-xl underline">
            {{$t( headers[0]) }}
          </h2>
          <h2 class="text-lg break-words">
            {{ item.documentType.name }}
            <b v-if="item.isRequired" class="text-red-300">(*)</b>
          </h2>
        </td>
        <td
          class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:text-[0.625rem] before:uppercase before:font-medium sm:pl-6"
        >
          <h2 class="sm:hidden mb-2 text-xl underline">
             {{$t( headers[1]) }}
          </h2>
          <h2 class="text-lg break-words">
            {{
              item.documentType.description
                ? item.documentType.description
                : "---------------"
            }}
          </h2>
        </td>
        <td
          class="flex whitespace-no-wrap flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:text-[0.625rem] before:uppercase before:font-medium sm:pl-6"
        >
          <h2 class="sm:hidden mb-2 text-xl underline">
            {{$t( headers[2]) }}
          </h2>

          <input
            type="file"
            required
            :id="'common_image_' + item.documentType.id + item.id"
            accept="*/*"
            :ref="`imageUploader${item.id}`"
            class="custom-file-input"
            @change="$emit('handleCommonFileUpload', item, $event)"
          />
        </td>
        <td
          v-if="item && item.fileName"
          class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:text-[0.625rem] before:uppercase before:font-medium sm:pl-6"
        >
          <h2 class="sm:hidden mb-2 text-xl underline">{{$t('Uploaded File Name') }}</h2>
          <h2 class="text-lg break-words">
            {{ item.fileName ? item.fileName : "---------------" }}
          </h2>
        </td>
        <td
          v-else
          class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:text-[0.625rem] before:uppercase before:font-medium sm:pl-6"
        ></td>
        <td
          v-if="item && item.existingFile"
          class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:text-[0.625rem] before:uppercase before:font-medium sm:pl-6"
        >
          <div class="flex justify-center">
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
              <small class="text-base ml-2"> {{$t('View') }}</small>
            </a>
          </div>
        </td>
        <td
          v-else
          class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:text-[0.625rem] before:uppercase before:font-medium sm:pl-6"
        >
          <div class="flex justify-center">
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
              <small class="text-base ml-2">{{$t('View') }}</small>
            </a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: ["headers", "tableRows", "fileUploadError", "isDarkMode"],
};
</script>