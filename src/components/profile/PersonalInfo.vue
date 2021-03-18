<template>
  <div class="w-screen max-w-4xl">
    <div
      class="flex flex-col mt-large w-full bg-white blue-box-shadow-light rounded"
    >
      <div class="mt-large">
        <TitleWithIllustration
          illustration="PersonalInfo"
          message="Personal Info"
        />
      </div>
      <form class="mx-auto max-w-3xl w-full mt-10">
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">First Name</label>
            <input class="max-w-3xl" type="text" />
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">Nationality</label>
            <input class="max-w-3xl" type="text" />
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Father Name</label>
            <input class="max-w-3xl" type="text" />
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">Place of birth(Optional)</label>
            <input class="max-w-3xl" type="text" />
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Grand Father Name</label>
            <input class="max-w-3xl" type="text" />
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">Date of birth(Optional)</label>
            <input class="max-w-3xl" type="text" />
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Gender</label>
            <input class="max-w-3xl" type="text" />
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">Date of birth(Optional)</label>
            <input class="max-w-3xl" type="date" />
          </div>
        </div>
        <div class="flex">
          <div class="flex w-1/2 mb-medium  mr-12">
            <div class="flex flex-col w-full">
              <label class="text-primary-700">Gender</label>
              <div class="flex w-full">
                <div class="flex flex-col mb-small w-1/3">
                  <div class="flex py-2">
                    <input
                      class="flex flex-col"
                      type="radio"
                      id="male"
                      value="male"
                    />
                    <label
                      class="ml-tiny flex flex-col text-primary-700"
                      for="male"
                    >
                      Male
                    </label>
                  </div>
                </div>
                <div class="flex w-1/3">
                  <div class="flex flex-col w-1/3">
                    <div class="flex py-2">
                      <input type="radio" id="female" value="female" />
                      <label class="ml-tiny text-primary-700" for="female">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex w-1/2 mb-medium m1-12">
            <div class="flex flex-col w-full">
              <label class="text-primary-700">Martial Status</label>
              <div class="flex w-full">
                <div class="flex flex-col w-1/3">
                  <div class="flex py-2">
                    <input
                      class="flex flex-col"
                      type="radio"
                      id="single"
                      value="single"
                    />
                    <label
                      class="ml-tiny flex flex-col text-primary-700"
                      for="single"
                    >
                      Single
                    </label>
                  </div>
                </div>
                <div class="flex w-1/3">
                  <div class="flex flex-col w-1/3">
                    <div class="flex py-2">
                      <input type="radio" id="married" value="married" />
                      <label class="ml-tiny text-primary-700" for="married">
                        Married
                      </label>
                    </div>
                  </div>
                </div>
                <div class="flex  flex-col w-1/3">
                  <div class="flex py-2">
                    <input type="radio" id="divorced" value="divorced" />
                    <label class="ml-tiny text-primary-700" for="divorced">
                      Divorced
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">User Type</label>
            <select class="max-w-3xl" v-model="selected">
              <option disabled value="">Please select one</option>
              <option>Value one</option>
              <option>I'm the second one</option>
              <option>Select me</option>
            </select>
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">Expert Level</label>
            <select class="max-w-3xl" v-model="selected">
              <option disabled value="">Please select one</option>
              <option>Value one</option>
              <option>I'm the second one</option>
              <option>Select me</option>
            </select>
          </div>
        </div>
        <div class="flex mb-medium w-full mt-medium">
          <button
            class="block mx-auto w-1/2  bg-lightBlue-500 hover:bg-lightBlue-600 hover:shadow-lg"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";

export default {
  components: { TitleWithIllustration },
  data: () => ({
    personalInfo: {
      firstName: null,
      grandFatherName: null,
      fatherName: null,
      nationality: null,
      pob: null,
      dob: null,
      gender: null,
      martialStatus: null
    },
    userType: {},
    expertLevel: {},
    healthOffice: {}
  }),
  methods: {
    nextStep: function() {
      console.log(this.personalInfo);
    }
  },
  mounted() {}
};
</script>
