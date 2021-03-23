<template>
  <section class="wrapper">
    <div class="illustration-and-message relative">
      <LandingIllustration class="absolute" />
      <div class="flex justify-center flex-col ml-small w-5/12">
        <section class="flex flex-col items-end">
          <h1 class="text-largeDisplay blue-text-gradient -mb-small">
            Get Certified
          </h1>
          <hr
            class="yellow-gradient separator glow border-none separator-large"
          />
        </section>

        <section class="flex flex-col">
          <h3 class="mt-medium text-primary-600">
            Everything you need for managing you medical licenses in Ethiopia.
          </h3>
          <h3 class="mt-small text-primary-600">
            Create, Manage and follow up on your license request online
          </h3>

          <button class="self-end px-xl">Sign Up</button>
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
  @apply w-full bg-primary-100 flex justify-center items-center;
  height: 530px;
}
svg {
  margin-top: 60px;
  height: 590px;
  left: 0px;
}

.illustration-and-message {
  @apply w-full flex justify-end items-center;
  max-width: 1185px;
}
</style>
