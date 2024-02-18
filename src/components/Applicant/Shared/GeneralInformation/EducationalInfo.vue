<template>
  <div
    :class="
      isDarkMode && isDarkMode == true
        ? 'bg-secondaryDark mb-4  mt-2 border-b-2 '
        : ' bg-white mb-4  mt-2 border-b-2  '
    "
    v-if="generalInfo.multipleDepartment.length < 3"
  >
    <!-- Container -->

    <div
      class="grid grid-cols-1 gap-4 sm:grid-rows-1 lg:grid-cols-4 mdlg:grid-cols-2 md:grid-cols-2 p-4"
    >
      <div class="mt-0 sm:mt-8">
        <label
          :class="
            isDarkMode && isDarkMode == true ? 'text-white ' : 'text-main-400'
          "
          >Department</label
        ><span class="text-red-300">*</span>
        <select
          :class="selectClasses"
          v-model="localGeneralInfo.departmentSelected"
          @change="
            $emit('departmentChange', localGeneralInfo.departmentSelected)
          "
        >
          <option
            v-for="department in departments"
            :key="department.name"
            :value="department"
          >
            {{ department.name }}
          </option>
        </select>
      </div>
      <!-- ... -->
      <div class="mt-0 sm:mt-8">
        <label
          :class="
            isDarkMode && isDarkMode == true ? 'text-white ' : 'text-main-400'
          "
          >Education Level </label
        ><span class="text-red-300">*</span>
        <select
          :class="selectClasses"
          :disabled="!isDepartmentSelected"
          v-model="localGeneralInfo.educationalLevelSelected"
          @change="
            $emit(
              'educationalLevelChange',
              localGeneralInfo.educationalLevelSelected
            )
          "
        >
          <option
            v-for="educationalLevel in educationalLevels"
            :key="educationalLevel.name"
            :value="educationalLevel"
          >
            {{ educationalLevel.name }}
          </option>
        </select>
      </div>
      <div class="mt-0 sm:mt-8">
        <label
          :class="
            isDarkMode && isDarkMode == true ? 'text-white ' : 'text-main-400'
          "
          >Professional Types</label
        ><span class="text-red-300">*</span>
        <select
          :class="selectClasses"
          :disabled="!isEdLevelSelected"
          v-model="localGeneralInfo.professionalTypeSelected"
          @change="
            $emit(
              'professionTypeChange',
              localGeneralInfo.professionalTypeSelected
            )
          "
        >
          <option v-for="pf in professionalTypes" :key="pf.id" :value="pf">
            {{ pf.name }}
          </option>
        </select>
        <div class="grid grid-rows-2 sm:mt-0 mt-4">
          <input
            v-model="localGeneralInfo.otherProfessionalType"
            v-if="showOtherProfession"
            class="mb-2 w-full"
            placeholder="Other profession title"
            type="text"
          />
          <input
            v-model="localGeneralInfo.otherProfessionalTypeAmharic"
            v-if="showOtherProfession"
            class="w-full"
            placeholder="Amharic other profession name"
            type="text"
          />
        </div>
      </div>
      <!-- ... -->

      <div class="mt-0 sm:mt-8">
        <label
          :class="
            isDarkMode && isDarkMode == true ? 'text-white ' : 'text-main-400'
          "
          >Educational Institution</label
        ><span class="text-red-300">*</span>

        <select
          :class="selectClasses"
          :disabled="!isAppTypeSelected"
          v-model="localGeneralInfo.institutionSelected"
          @change="
            $emit('institutionChange', localGeneralInfo.institutionSelected)
          "
        >
          <option
            v-for="institution in institutions"
            :key="institution.name"
            :value="institution"
          >
            {{ institution.name }}
          </option>
        </select>
        <input
          v-model="localGeneralInfo.otherEducationalInstitution"
          v-if="showOtherEducation"
          class="mb-2 w-full sm:mt-0 mt-4"
          placeholder="Write Educational Institution"
          type="text"
        />
      </div>
    </div>

    <div class="text-right">
      <button
        type="button"
        :class="
          isDarkMode
            ? 'px-4 mr-2 mb-4 bg-grey-300 text-primary-200 font-medium border text-xs leading-tight uppercase rounded hover:text-white hover:border-main-400 hover:bg-main-400  transition duration-150 ease-in-out'
            : 'px-4 mr-2 mb-4 bg-white text-main-400 font-medium border text-xs leading-tight uppercase rounded hover:text-white hover:border-main-400 hover:bg-main-400  transition duration-150 ease-in-out'
        "
        @click="$emit('addMultiple')"
      >
        <i class="fa fa-plus"></i>

        <span
          v-if="
            generalInfo.multipleDepartment &&
            generalInfo.multipleDepartment.length > 0
          "
        >
          Add More Department
        </span>
        <span v-else>Add</span>
      </button>
    </div>

    <div
      class="border text-yellow-300 rounded-md m-4"
      v-if="
        generalInfo.multipleDepartment &&
        generalInfo.multipleDepartment.length == 0
      "
    >
      <h2 class="text-xl text-yellow-300 font-bold p-2">
        * In order to proceed to the next step please choose one or more
        departments and add them to the list*
      </h2>
      <h2 class="text-xl text-yellow-300 font-bold p-2">
        * ወደ ቀጣዩ ደረጃ ለመቀጠል እባክዎ አንድ ወይም ከዛ በላይ ክፍል(Department) ይምረጡ *
      </h2>
    </div>
    <span v-if="multipleDepartmentError" class="text-red-300 m-4"
      >Please fill in all fields</span
    >
    <span v-if="checkForAddedError" class="ml-8 text-red-300 m-4"
      >You already added the department</span
    >
    <span v-if="multipleDepartmentMaxError" class="ml-8 text-red-300 m-4"
      >Only three departments can be selected</span
    >

    <!-- ./Container -->
  </div>
</template>
<script>
import { computed } from "vue";
export default {
  props: [
    "isDarkMode",
    "generalInfo",
    "departments",
    "educationalLevels",
    "professionalTypes",
    "institutions",
    "isEdLevelSelected",
    "isAppTypeSelected",
    "showOtherProfession",
    "showOtherEducation",
    "isDepartmentSelected",
    "multipleDepartmentError",
    "checkForAddedError",
    "multipleDepartmentMaxError",
  ],
  emits: [
    "departmentChange",
    "educationalLevelChange",
    "professionTypeChange",
    "institutionChange",
    "addMultiple",
  ],
  setup(props) {
    const localGeneralInfo = computed(()=>props.generalInfo);

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