<template>
  <div
    :class="
      isDarkMode
        ? 'table-multiple  mb-8 bg-secondaryDark text-white mt-4'
        : 'table-multiple border mb-8 bg-white text-main-400'
    "
  >
    <h2 class="font-bold m-2 text-2xl">{{ $t("Selected Departments") }}</h2>

    <div class="flex flex-col">
      <div class="">
        <div
          class="flex justify-center"
          v-if="
            generalInfo.multipleDepartment &&
            generalInfo.multipleDepartment.length < 1
          "
        >
          {{ $t("No Data") }}
        </div>
        <div v-else>
          <table class="min-w-full p-4">
            <thead class="border-b border-t bg-primary-300 text-main-400 p-4">
              <tr>
                <th
                  scope="col"
                  class="text-xl text-gray-900 p-5 text-left font-bold"
                >
                  {{ $t("Department") }}
                </th>
                <th
                  scope="col"
                  class="text-xl text-gray-900 px-6 py-4 text-left font-bold"
                >
                  {{ $t("Education Level") }}
                </th>
                <th
                  scope="col"
                  class="text-xl text-gray-900 px-6 py-4 text-left font-bold"
                >
                  {{ $t("Institution") }}
                </th>
                <th
                  scope="col"
                  class="text-xl text-gray-900 px-6 py-4 text-left font-bold"
                >
                  {{ $t("Professional Type") }}
                </th>
                <th
                  scope="col"
                  class="text-xl text-gray-900 px-6 py-4 text-left font-bold"
                >
                  {{ $t("Action") }}
                </th>
              </tr>
            </thead>
            <tbody></tbody>
            <tbody>
              <tr
                class="border-b border-main-400 p-4"
                v-for="(item, index) in generalInfo.multipleDepartment"
                :key="item.id"
              >
                <td
                  class="p-4 whitespace-nowrap text-lg font-medium text-gray-900"
                >
                  {{ item.department ? item.department.name : "" }}
                </td>
                <td
                  class="text-lg text-gray-900 font-light p-4 whitespace-nowrap"
                >
                  {{
                    item.educationalLevel
                      ? item.educationalLevel.name
                      : item.educationLevel
                      ? item.educationLevel.name
                      : ""
                  }}
                </td>
                <td
                  class="text-lg text-gray-900 font-light p-4 whitespace-nowrap"
                >
                  {{ item.institution ? item.institution.name : "" }}
                </td>
                <td
                  class="text-lg text-gray-900 font-light p-4 whitespace-nowrap"
                >
                  {{
                    item.professionalType
                      ? item.professionalType.name
                      : item.professionType
                      ? item.professionType.name
                      : ""
                  }}
                </td>
                <td
                  class="text-lg text-gray-900 font-light p-5 whitespace-nowrap"
                >
                  <span @click="$emit('removeDepartment', index)" title="Remove"
                    ><i class="fa fa-trash text-red-300 cursor-pointer"></i
                  ></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["generalInfo", "isDarkMode"],
  emits: ["removeDepartment"],
};
</script>