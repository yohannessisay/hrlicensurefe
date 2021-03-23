<template>
  <section class="wrapper">
    <div class="illustration-and-message">
      <LandingIllustration />
      <div class="flex justify-center">
        <section class="flex flex-col items-end">
          <h1 class="text-largeDisplay blue-text-gradient -mb-small">
            Get Certified
          </h1>
          <hr class="yellow-gradient separator-glow border-none" />
        </section>
      </div>
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
  @apply w-screen flex justify-between items-center;
  max-width: 1185px;
}
.separator-glow {
  width: 64px;
  height: 8px;
  border-radius: 12px;
  height: 10px;
  width: 250px;
  box-shadow: 0px 3px 6px #fde68a;
}
</style>
