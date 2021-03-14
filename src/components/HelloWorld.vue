<template>
  <div class="w-screen flex flex-col justify-center items-center">
    <div class="flex flex-col mt-large w-3/12">
      <Title message="Illustrations" />
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
import Title from "@/sharedComponents/Title";
export default {
  components: { RenderIllustration, Title },
  setup() {}
};
</script>
