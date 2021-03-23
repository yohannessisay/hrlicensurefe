<template>
  <div>
    <Navigation />
    <div
      class="w-screen h-full bg-lightBlueB-200 flex items-center justify-center"
    >
      <div class="w-screen max-w-4xl mt-medium h-screen">
        <div
          class="flex flex-col mt-large w-full bg-white blue-box-shadow-light rounded mb-large"
        >
          <div class="mt-large">
            <TitleWithIllustration
              illustration="Verification"
              message="Good Standing"
            />
          </div>
          <form
            class="mx-auto max-w-3xl w-full mt-10"
            @submit.prevent="nextStep"
          >
            <div class="flex">
              <div class="flex flex-col mb-medium w-1/2 mr-12">
                <label class="text-primary-700">Name of inistitution</label>
                <select class="max-w-3xl" v-model="selected">
                  <option disabled value="">Please select one</option>
                  <option>Value one</option>
                  <option>I'm the second one</option>
                  <option>Select me</option>
                </select>
              </div>
              <div class="flex flex-col mb-medium w-1/2 m1-12">
                <label class="text-primary-700">Department</label>
                <select class="max-w-3xl" v-model="selected">
                  <option disabled value="">Please select one</option>
                  <option>Value one</option>
                  <option>I'm the second one</option>
                  <option>Select me</option>
                </select>
              </div>
            </div>
            <div class="flex">
              <div class="flex flex-col mb-medium w-1/2 mr-12">
                <label class="text-primary-700">Inistitution Email</label>
                <select class="max-w-3xl" v-model="selected">
                  <option disabled value="">Please select one</option>
                  <option>Value one</option>
                  <option>I'm the second one</option>
                  <option>Select me</option>
                </select>
              </div>
              <div class="flex flex-col mb-medium w-1/2 m1-12">
                <label class="text-primary-700">Application Institution</label>
                <select class="max-w-3xl" v-model="selected">
                  <option disabled value="">Please select one</option>
                  <option>Value one</option>
                  <option>I'm the second one</option>
                  <option>Select me</option>
                </select>
              </div>
            </div>
            <div class="flex">
              <div class="flex mb-small mr-12">
                <div class="flex flex-col mb-medium mr-4">
                  <label class="text-primary-700"> Institution Type</label>
                  <div class="flex items-center mb-small">
                    <input type="radio" id="moh" value="moh" />
                    <label class="ml-tiny text-primary-700" for="moh">Public</label>
                  </div>
                  <div class="flex items-center mb-small">
                    <input type="radio" id="hris" value="hris" />
                    <label class="ml-tiny text-primary-700" for="hris">Private</label>
                  </div>
                  <div class="flex items-center mb-small">
                    <input type="radio" id="fbc" value="fbc" />
                    <label class="ml-tiny text-primary-700" for="fbc">
                      Faith based or Charity
                    </label>
                  </div>
                </div>
              </div>
              <div class="flex w-1/2 mb-small m1-12"></div>
            </div>
            <div class="flex justify-center mb-medium">
              <div>
                <button>Submit Request</button>
              </div>
              <div>
                <button variant="outline">
                  Save as Draft
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/views/Navigation";
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";

export default {
  components: { TitleWithIllustration, Navigation },
  setup() {}
};
</script>
