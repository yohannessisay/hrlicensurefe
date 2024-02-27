<template>
  <div
    :class="
      isDarkMode && isDarkMode == true
        ? 'bg-secondaryDark  mt-2 p-4 border-b-2'
        : '  bg-white  mt-2 p-4 border-b-2'
    "
  >
    <!-- applicant type -->
    <div class="grid grid-cols-1 sm:grid-cols-3">
      <div class=" mb-4">
        <label
          :class="
            isDarkMode && isDarkMode == true ? 'text-white ' : 'text-main-400'
          "
          >{{ $t("Applicant Type") }}</label
        ><span class="text-red-300">*</span>
        <select
          :class="selectClasses"
          aria-label="Default select example"
          :disabled="
            generalInfo.multipleDepartment
              ? generalInfo.multipleDepartment.length > 0
              : 0
          "
          @change="
            $emit(
              'applicantTypeChangeHandler',
              localGeneralInfo.applicantTypeSelected
            )
          "
          v-model="localGeneralInfo.applicantTypeSelected"
          required
        >
          <option
            v-for="applicant in applicantTypes"
            :key="applicant.name"
            :value="applicant"
          >
            {{ applicant.name }}
          </option>
        </select>
      </div>

      <div class=" " v-if="showLanguage">
        <label
          :class="
            isDarkMode && isDarkMode == true ? 'text-white ' : 'text-main-400'
          "
          >{{ $t("Language Type") }}</label
        ><span class="text-red-300">*</span>
        <select
          :class="selectClasses"
          @change="
            $emit(
              'languageChangeHandler',
              localGeneralInfo.nativeLanguageSelected
            )
          "
          v-model="localGeneralInfo.nativeLanguageSelected"
        >
          <option
            v-for="language in languages"
            :key="language.name"
            :value="language"
          >
            {{ language.name }}
          </option>
        </select>
      </div>
      <div class=" " v-if="showOccupation">
        <label
          :class="
            isDarkMode && isDarkMode == true
              ? 'text-white '
              : 'text-main-400 lg:ml-4'
          "
          >{{ $t("Employer Type") }}</label
        ><span class="text-red-300">*</span>
        <select
          :class="selectClasses"
          v-model="localGeneralInfo.occupationSelected"
          @change="
            $emit(
              'occupationChangeHandler',
              localGeneralInfo.occupationSelected
            )
          "
        >
          <option
            v-for="occupation in occupations"
            :key="occupation.name"
            :value="occupation"
          >
            {{ occupation.name }}
          </option>
        </select>
      </div>
    </div>
    <div>
      <small
        v-if="
          generalInfo.multipleDepartment
            ? generalInfo.multipleDepartment.length > 0
            : 0
        "
        :class="
          isDarkMode && isDarkMode == true
            ? 'text-white  col-span-12 '
            : 'text-main-400 col-span-12 text-base'
        "
        >{{
          $t(
            "You can change the applicant type when there is no added department data below"
          )
        }}</small
      >
    </div>
    <button
      v-if="localDataLength"
      class="inline-block px-4 mt-4 bg-main-400 text-white max-w-3xl font-medium text-xs leading-tight uppercase rounded hover:text-main-500 hover:border-main-500 focus:bg-blue-700 focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out"
      @click="$emit('clearLocalData')"
    >
      <i class="fa fa-close"></i>
      {{$t('Clear Form')}}
    </button>
  </div>
</template>
<script>
import { computed } from "vue";
export default {
  props: [
    "generalInfo",
    "isDarkMode",
    "localDataLength",
    "applicantTypes",
    "showLanguage",
    "showOccupation",
    "occupations",
    "languages",
  ],
  emits: [
    "clearLocalData",
    "applicantTypeChangeHandler",
    "languageChangeHandler",
    "occupationChangeHandler",
  ],
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
