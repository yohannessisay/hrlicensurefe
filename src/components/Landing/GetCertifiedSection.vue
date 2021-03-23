<template>
  <section class="wrapper">
    <div class="illustration-and-message">
      <LandingIllustration />
    </div>
  </section>
</template>
<script>
import LandingIllustration from "./LandingIllustration";

export default {
  components: {
    LandingIllustration
  }
};
</script>
<style lang="postcss" scoped>
.wrapper {
  @apply w-screen bg-primary-100 flex justify-center items-center;
  height: 530px;
}
svg {
  margin-top: 30px;
  height: 590px;
}

.illustration-and-message {
  @apply w-screen;
  max-width: 1185px;
}
</style>
