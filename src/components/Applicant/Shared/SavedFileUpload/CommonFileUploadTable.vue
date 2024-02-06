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
          class="px-4 py-4 border-0 border-b uppercase font-medium text-white text-left text-xl"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody class="divide-y bg-white ">
      <tr
        v-for="item in tableRows"
        :key="item.id"
        :class="
          fileUploadError[`file_upload_row_${item.documentType.code}`]
            ? 'text-sm    flex flex-col mb-4 py-1 divide-y   sm:table-row sm:mb-0    sm:divide-none border-red-300 border-2'
            : 'text-sm border rounded-md    flex flex-col mb-8  py-1 divide-y    sm:table-row sm:mb-0    sm:divide-none'
        "
      >
        <td
          class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:text-[0.625rem] before:uppercase before:font-medium sm:pl-6"
        >
          <h2 class="sm:hidden mb-2 text-xl underline text-main-400">
            {{ headers[0] }}
          </h2>
          <h2 class="text-lg break-words">
            {{ item.documentType.name }}
            <b v-if="item.isRequired" class="text-red-300">(*)</b>
          </h2>
        </td>
        <td
          class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:text-[0.625rem] before:uppercase before:font-medium sm:pl-6"
        >
          <h2 class="sm:hidden mb-2 text-xl underline text-main-400">
            {{ headers[1] }}
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
          <h2 class="sm:hidden mb-2 text-xl underline text-main-400">
            {{ headers[2] }}
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
          v-if="documentsSaved[item.documentType.code]"
          class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:text-[0.625rem] before:uppercase before:font-medium sm:pl-6"
        >
          <h2 class="sm:hidden mb-2 text-xl underline text-main-400">
            Uploaded File Name
          </h2>
          <h2 class="text-lg break-words">
            {{ documentsSaved[item.documentType.code].name }}
            <i class="fa fa-check-circle text-green-300"></i>
          </h2>
        </td>
        <td
          class="flex flex-col px-4 py-2 sm:table-cell sm:py-4 lg:table-cell sm:before:content-none before:text-[0.625rem] before:uppercase before:font-medium sm:pl-6"
        >
          <div class="flex justify-center">
            <a
              :id="'common_image_href_' + item.documentType.id + item.id"
              :href="documentsSaved[item.documentType.code]?.path"
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
                  :src="documentsSaved[item.documentType.code]"
                  class="w-full h-2 object-cover"
                />
              </i>
            </a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: [
    "headers",
    "tableRows",
    "fileUploadError",
    "isDarkMode",
    "documentsSaved",
  ],
};
</script>