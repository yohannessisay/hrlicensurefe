<template>
  <div class="w-full justify-center items-center">
    <div class="w-full flex flex-col mt-large">
      <TitleWithIllustration
        illustration="Verification"
        message="Verification"
      />
      <form @submit.prevent="submit" class="flex flex-col mt-4">
        <div class="flex justify-center">
          <div class="flex flex-col mb-medium mr-4">
            <label>Institution</label>
            <select v-model="selected">
              <option disabled value="">Please select one</option>
              <option>Value one</option>
              <option>I'm the second one</option>
              <option>Select me</option>
            </select>
          </div>
          <div class="flex flex-col mb-medium ml-4">
            <label>Department</label>
            <select v-model="selected">
              <option disabled value="">Please select one</option>
              <option>Value one</option>
              <option>I'm the second one</option>
              <option>Select me</option>
            </select>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="flex flex-col mb-medium mr-4">
            <label>Institution Email</label>
            <input type="email" />
          </div>
          <div class="flex flex-col mb-medium ml-4">
            <label>Application Institution</label>
            <input type="text" />
          </div>
        </div>
        <div class="flex justify-center">
          <div class="flex flex-col mb-medium mr-4">
            <label> Institution Type</label>
            <div class="flex items-center mb-small">
              <input type="radio" id="moh" value="moh" />
              <label class="ml-tiny" for="moh">Public</label>
            </div>
            <div class="flex items-center mb-small">
              <input type="radio" id="hris" value="hris" />
              <label class="ml-tiny" for="hris">Private</label>
            </div>
            <div class="flex items-center mb-small">
              <input type="radio" id="hris" value="hris" />
              <label class="ml-tiny" for="hris">Faith based or Charity</label>
            </div>
          </div>
          <div class="flex flex-col mb-medium ml-4">
            <label>Applicant Type</label>

            <div class="flex items-center mb-small">
              <input type="radio" id="moh" value="moh" />
              <label class="ml-tiny" for="moh">Local</label>
            </div>
            <div class="flex items-center mb-small">
              <input type="radio" id="hris" value="hris" />
              <label class="ml-tiny" for="hris">International</label>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
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
</template>

<script>
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";

export default {
  components: { TitleWithIllustration },
  setup() {},
};
</script>
