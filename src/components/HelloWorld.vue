<template>
  <div class="w-screen flex flex-col justify-center items-center">
    <div class="flex flex-col mt-large w-3/12">
      <TitleWithIllustration illustration="Address" message="Address" />
      <form class="flex flex-col w-full mt-4">
        <div class="flex flex-col mb-medium">
          <label>Input text</label>
          <input type="text" />
        </div>
        <div class="flex flex-col mb-medium">
          <label>Input text</label>
          <input type="text" />
        </div>
        <div class="flex flex-col mb-medium">
          <label>Input text</label>
          <input type="text" />
        </div>
        <div class="flex flex-col mb-medium">
          <label>Input text</label>
          <input type="text" />
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
