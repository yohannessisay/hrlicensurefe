<template>
  <div
    v-if="showLocation"
    :class="
      isDarkMode && isDarkMode == true
        ? '  rounded-md generalInfoCard  border-white mt-2 p-4'
        : ' bg-white border-b-2 mt-2 p-4'
    "
  >
    <h2 class="text-yellow-300 text-lg break-all">
      ***Please select the region you are applying for, not where you are
      currently living***
    </h2>
    <h2 class="text-yellow-300 font-bold text-base mb-4 break-all">
      *** እባክዎ የሚያመለክቱበትን ክልል ይምረጡ እንጂ አሁን የሚኖሩበትን ቦታ አይምረጡ***
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-3">
      <div class="mb-4">
        <label
          :class="
            isDarkMode && isDarkMode == true ? 'text-white ' : 'text-main-400'
          "
          >{{ $t("Region") }}</label
        ><span class="text-red-300">*</span>
        <select
          :class="selectClasses"
          :disabled="
            generalInfo.multipleDepartment
              ? generalInfo.multipleDepartment.length > 0
              : 0
          "
          v-model="localGeneralInfo.regionSelected"
          @change="
            $emit('regionChangeHandler', localGeneralInfo.regionSelected)
          "
          required
        >
          <option v-for="region in regions" :key="region.id" :value="region">
            {{ region.name }}
          </option>
        </select>
      </div>

      <div class="mb-4" v-if="localGeneralInfo.regionSelected.code != 'HAR'">
        <label
          :class="
            isDarkMode && isDarkMode == true ? 'text-white ' : 'text-main-400'
          "
          >{{ $t("Zone") }}</label
        ><span class="text-red-300">*</span>
        <select
          :class="selectClasses"
          :disabled="
            generalInfo.multipleDepartment
              ? generalInfo.multipleDepartment.length > 0
              : 0
          "
          @change="$emit('zoneChangeHandler', localGeneralInfo.zoneSelected)"
          v-model="localGeneralInfo.zoneSelected"
        >
          <option v-for="zone in zones" :key="zone.id" :value="zone">
            {{ zone.name }}
          </option>
        </select>
      </div>

      <div class="mb-2">
        <label
          :class="
            isDarkMode && isDarkMode == true ? 'text-white ' : 'text-main-400'
          "
          >{{ $t("Woreda") }}</label
        ><span class="text-red-300">*</span>
        <select
          :class="selectClasses"
          :disabled="
            generalInfo.multipleDepartment
              ? generalInfo.multipleDepartment.length > 0
              : 0
          "
          @change="
            $emit('woredaChangeHandler', localGeneralInfo.woredaSelected)
          "
          v-model="localGeneralInfo.woredaSelected"
          required
        >
          <option v-for="woreda in woredas" :key="woreda.id" :value="woreda">
            {{ woreda.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="">
      <small
        v-if="
          generalInfo.multipleDepartment
            ? generalInfo.multipleDepartment.length > 0
            : 0
        "
        class=" text-base"
      >
        {{
          $t(
            "You can change woreda when there is no added education/department data below"
          )
        }}</small
      >
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
export default {
  props: [
    "generalInfo",
    "isDarkMode",
    "regions",
    "zones",
    "woredas",
    "showLocation",
  ],
  emits: ["regionChangeHandler", "zoneChangeHandler", "woredaChangeHandler"],

  setup(props) {
    const localGeneralInfo = computed(() => props.generalInfo);

    const selectClasses = computed(() => {
      return props.isDarkMode
        ? "form-select bg-primary-200 appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 rounded transition ease-in-out m-0 focus:text-gray-700"
        : "form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 rounded transition ease-in-out m-0 focus:text-gray-700";
    });

    return {
      localGeneralInfo,
      selectClasses,
    };
  },
};
</script>