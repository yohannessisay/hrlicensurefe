<template>
  <div class="w-screen flex flex-col justify-center items-center">
    <div class="flex flex-col mt-large w-3/12">
      <RenderIllustration illustration="Address" />
      <RenderIllustration illustration="Certificate" />
      <RenderIllustration illustration="Contact" />
      <RenderIllustration illustration="GoodStanding" />
      <RenderIllustration illustration="Institution" />
      <RenderIllustration illustration="Id" />
      <RenderIllustration illustration="Logo" />
      <RenderIllustration illustration="MOH" />
      <RenderIllustration illustration="PersonalInfo" />
      <RenderIllustration illustration="Renewal" />
      <RenderIllustration illustration="SimpleCertificate" />
      <RenderIllustration illustration="Success" />
      <RenderIllustration illustration="User" />
      <RenderIllustration illustration="Verification" />
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
