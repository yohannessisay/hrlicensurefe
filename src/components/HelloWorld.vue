<template>
  <div class="w-lg flex flex-col justify-center items-center">
    <div class="flex flex-col mt-large">
      <TitleWithIllustration illustration="Address" message="Address" />
      <form class="flex flex-col mt-4">
        <div class="flex flex-col mb-medium">
          <label>Input text</label>
          <input type="text" />
        </div>
        <div class="flex flex-col mb-medium">
          <label>Email</label>
          <input type="email" />
        </div>
        <div class="flex flex-col mb-medium">
          <label>Password</label>
          <input type="password" />
        </div>
        <div class="flex flex-col mb-medium">
          <label>Number</label>
          <input type="number" />
        </div>

        <div class="flex flex-col mb-medium">
          <label>Url</label>
          <input type="url" />
        </div>

        <div class="flex flex-col mb-medium">
          <label>Date</label>
          <input type="date" />
        </div>

        <div class="flex flex-col mb-medium">
          <label>Date time</label>
          <input type="datetime-local" />
        </div>

        <div class="flex flex-col mb-medium">
          <label>Month</label>
          <input type="month" />
        </div>

        <div class="flex flex-col mb-medium">
          <label>Week</label>
          <input type="week" />
        </div>

        <div class="flex flex-col mb-medium">
          <label>Time</label>
          <input type="time" />
        </div>

        <div class="flex flex-col mb-medium">
          <label>Search</label>
          <input type="search" />
        </div>

        <div class="flex flex-col mb-medium">
          <label>Tel</label>
          <input type="tel" />
        </div>

        <div class="flex flex-col mb-medium">
          <div class="flex items-center mb-small">
            <input type="checkbox" id="jack" value="Jack" />
            <label class="ml-tiny" for="jack">Jack</label>
          </div>
          <div class="flex items-center mb-small">
            <input type="checkbox" id="john" value="John" />
            <label class="ml-tiny" for="john">John</label>
          </div>
          <div class="flex items-center mb-small">
            <input type="checkbox" id="mike" value="Mike" />
            <label class="ml-tiny" for="mike">Mike</label>
          </div>
        </div>

        <div class="flex flex-col mb-medium">
          <div class="flex items-center mb-small">
            <input type="radio" id="moh" value="moh" />
            <label class="ml-tiny" for="moh">MOH</label>
          </div>
          <div class="flex items-center mb-small">
            <input type="radio" id="hris" value="hris" />
            <label class="ml-tiny" for="hris">HRIS</label>
          </div>
          <div class="flex items-center mb-small">
            <input type="radio" id="license" value="license" />
            <label class="ml-tiny" for="license">License</label>
          </div>
        </div>

        <div class="flex flex-col mb-medium">
          <label>Select</label>
          <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>Value one</option>
            <option>I'm the second one</option>
            <option>Select me</option>
          </select>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
export default {
  components: { TitleWithIllustration },
  setup() {}
};
</script>
