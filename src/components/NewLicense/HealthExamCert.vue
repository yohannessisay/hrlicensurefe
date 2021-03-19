<template>
  <div class="flex justify-center">
    <div class="w-screen max-w-4xl h-screen">
      <div
        class="flex flex-col mt-large w-full bg-white blue-box-shadow-light rounded "
      >
        <TitleWithIllustration
          illustration="Certificate"
          message="Health Examination Certificate"
          class="mt-8"
        />
        <form @submit.prevent="submit" class="mx-auto max-w-3xl w-full mt-8">
          <div class="flex justify-center">
            <div>
              <picture>
                <img src="/fonts/logo.png" />
              </picture>
              <h6>Your photo should be passport size</h6>
            </div>
          </div>

          <div class="flex justify-center mb-8">
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
  </div>
</template>

<script>
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";

export default {
  props: ["activeState"],
  components: { TitleWithIllustration },
  methods: {
    submit() {
      this.$emit("changeActiveState");
    },
  },
  setup() {},
};
</script>
<style>
img {
  width: 250px;
  height: 250px;
}
</style>
