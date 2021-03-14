<template>
  <div class="w-screen flex flex-col justify-center items-center">
    <div class="flex flex-col mt-large w-3/12">
      <RenderIllustration />
    </div>
  </div>
</template>
<script>
import RenderIllustration from "@/sharedComponents/RenderIllustration";
export default {
  components: { RenderIllustration },
  setup() {}
};
</script>
