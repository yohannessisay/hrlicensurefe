<template>
  <div class="flex justify-center">
    <div class="w-screen max-w-4xl h-screen">
      <div
        class="flex flex-col mt-large w-full bg-white blue-box-shadow-light rounded"
      >
        <div class="mt-large">
          <TitleWithIllustration
            illustration="Institution"
            message="Institution"
          />
        </div>
        <form @submit.prevent="submit" class="mx-auto max-w-3xl w-full mt-10">
          <div class="flex">
            <div class="flex flex-col mb-medium w-1/2 mr-12">
              <label class="text-primary-700">Institution</label>
              <select
                class="max-w-3xl"
                v-model="licenseInfo.education.institutionId"
              >
                <option
                  v-for="institution in institutions"
                  v-bind:key="institution.name"
                >
                  {{ institution }}
                </option>
              </select>
            </div>
            <div class="flex flex-col mb-medium w-1/2 mr-12">
              <label class="text-primary-700">Department</label>
              <select
                class="max-w-3xl"
                v-model="licenseInfo.education.departmentId"
              >
                <option
                  v-for="department in departments"
                  v-bind:key="department.name"
                >
                  {{ department }}
                </option>
              </select>
            </div>
          </div>
          <div class="flex">
            <div class="flex w-1/2 mb-medium  mr-12">
              <div class="flex flex-col w-full">
                <label class="text-primary-700">Institution Type</label>
                <div class="flex w-full">
                  <div class="flex flex-col mb-small w-1/3">
                    <div class="flex py-2">
                      <input
                        v-model="institutionTypeId"
                        class="flex flex-col"
                        type="radio"
                        id="inst"
                        value="public"
                      />
                      <label
                        class="ml-tiny flex flex-col text-primary-700"
                        for="public"
                      >
                        Public
                      </label>
                    </div>
                  </div>
                  <div class="flex w-1/3">
                    <div class="flex flex-col w-1/3">
                      <div class="flex py-2">
                        <input
                          type="radio"
                          id="private"
                          value="private"
                          v-model="institutionTypeId"
                        />
                        <label class="ml-tiny text-primary-700" for="private">
                          Private
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="flex w-1/3">
                    <div class="flex flex-col w-1/3">
                      <div class="flex py-2">
                        <input
                          type="radio"
                          id="faith"
                          value="faith"
                          v-model="institutionTypeId"
                        />
                        <label class="ml-tiny text-primary-700" for="faith">
                          Faith Based or Charity
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex w-1/2 mb-medium  mr-12">
              <div class="flex flex-col w-full">
                <label class="text-primary-700">Institution Type</label>
                <div class="flex w-full">
                  <div class="flex flex-col mb-small w-1/3">
                    <div class="flex py-2">
                      <input
                        v-model="departmentTypeId"
                        class="flex flex-col"
                        type="radio"
                        id="apptype"
                        value="local"
                      />
                      <label
                        class="ml-tiny flex flex-col text-primary-700"
                        for="local"
                      >
                        Local
                      </label>
                    </div>
                  </div>
                  <div class="flex w-1/3">
                    <div class="flex flex-col w-1/3">
                      <div class="flex py-2">
                        <input
                          v-model="departmentTypeId"
                          type="radio"
                          id="international"
                          value="international"
                        />
                        <label
                          class="ml-tiny text-primary-700"
                          for="international"
                        >
                          International
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <button click="submit()">
              Next
            </button>
            <button variant="outline">
              Finish Later
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
export default {
  props: ["activeState"],
  components: { TitleWithIllustration },
  data: () => ({
    licenseInfo: {
      applicantId: 1,
      applicantTypeId: 2,
      education: {
        departmentId: "",
        institutionId: "",
      },
    },
    institutionTypeId: "",
    departmentTypeId: "",
    institutions: ["ald", "lskd"],
    departments: ["ald", "lskd"],
  }),

  methods: {
    submit() {
       this.$emit('changeActiveState');
    },
  },
};
</script>
