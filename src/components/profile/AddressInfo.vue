<template>
  <div class="w-screen max-w-4xl">
    <div 
      class="flex flex-col mt-large w-full bg-white blue-box-shadow-light rounded"
    >
      <div class="mt-large">
        <TitleWithIllustration illustration="Address" message="Address Info" />
      </div>
      <form class="mx-auto max-w-3xl w-full mt-10">
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Region</label>
            <select class="max-w-3xl" v-model="selected">
              <option disabled value="">Please select one</option>
              <option>Value one</option>
              <option>I'm the second one</option>
              <option>Select me</option>
            </select>
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">Kebele</label>
            <input class="max-w-3xl" type="text" />
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Zone</label>
            <select class="max-w-3xl" v-model="selected">
              <option disabled value="">Please select one</option>
              <option>Value one</option>
              <option>I'm the second one</option>
              <option>Select me</option>
            </select>
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">House No(Optional)</label>
            <input class="max-w-3xl" type="text" />
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Wereda</label>
            <select class="max-w-3xl" v-model="selected">
              <option disabled value="">Please select one</option>
              <option>Value one</option>
              <option>I'm the second one</option>
              <option>Select me</option>
            </select>
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">Residence</label>
            <input class="max-w-3xl" type="text" />
          </div>
        </div>
        <div class="flex mb-medium w-full mt-medium">
          <button class="mx-auto w-1/2 blue-with-light-blue-gradient" variant="block">
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
    address: {
      region: null,
      kebele: null,
      zone: null,
      houseNo: null,
      wereda: null,
      residence: null
    }
  }),
  methods: {
    nextStep: function() {
      console.log(this.address);
    }
  },
  mounted() {}
};
</script>
