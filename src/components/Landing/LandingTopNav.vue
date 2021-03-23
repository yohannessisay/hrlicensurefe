<template>
  <section class="wrapper">
    <div class="flex justify-center items-center">
      <RenderIllustration illustration="Logo" class="hidden sm:block" />
      <h3 class="ml-tiny font-AtkinsonHyperlegibleBold">HRIS - Lisence</h3>
    </div>
    <button variant="outline" class="h-small">Log In</button>
  </section>
</template>
<script>
import RenderIllustration from "@/sharedComponents/RenderIllustration";
export default {
  components: { RenderIllustration }
};
</script>
<style lang="postcss" scoped>
.wrapper {
  @apply w-full bg-white shadow-md h-large px-tiny flex justify-between items-center fixed top-0;
  background: #ffffff20;
  backdrop-filter: blur(5px);
}

@screen sm {
  .wrapper {
    @apply px-small;
  }
}

h3 {
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  background: linear-gradient(-70deg, #3674b9, #b5b173);
  -webkit-background-clip: text;
}
</style>
