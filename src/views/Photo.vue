<template>
  <div class="w-full justify-center items-center">
    <div class="w-full flex flex-col mt-large">
      <TitleWithIllustration illustration="User" message="Photo" />
      <form @submit.prevent="submit" class="flex flex-col mt-4">
        <div class="flex justify-center">
          <div>
            <picture>
              <img src="/fonts/logo.png" />
            </picture>
            <h6>Your photo should be passport size</h6>
          </div>
        </div>

        <div class="flex justify-center">
          <div>
            <button>Next</button>
          </div>
          <div>
            <button variant="outline">
              Finish Later
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
<style>
img {
  width: 250px;
  height: 250px;
}
</style>
