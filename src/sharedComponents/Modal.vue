<template>
  <div
    class="fixed w-screen h-screen top-0 left-0 glass z-50 flex justify-end sm:justify-center items-center flex-col"
  >
    <section class="w-full md:w-1/2 px-small flex justify-end items-end">
      <button
        class="flex items-center justify-center rounded-full relative"
        :onClick="closeOption"
      >
        <svg
          viewBox="0 0 329.269 329"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current text-primary-100 relative"
        >
          <path
            d="M194.8 164.77L323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
          />
        </svg>
      </button>
    </section>
    <transition name="slide-fade-to-top">
      <slot v-if="showContent"></slot>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showContent: false
    };
  },
  mounted() {
    this.showContent = true;
  },
  methods: {
    closeOption() {
      this.$emit("closeModal", false);
    }
  }
};
</script>
<style lang="postcss" scoped>
svg {
  min-width: 22px;
}
button {
  min-width: 54px;
  min-height: 59px;
  width: 54px;
  height: 59px;
  border-radius: 9999px !important;
}

.close-section-wrapper {
  width: auto;
}

.slide-fade-to-top-enter-active,
.slide-fade-to-right-enter-active,
.slide-fade-to-left-enter-active {
  transition: all 0.8s ease-in;
}

.slide-fade-to-top-leave-active,
.slide-fade-to-right-leave-active,
.slide-fade-to-left-leave-active {
  transition: all 0.3s all-ease;
}

.slide-fade-to-top-enter-from,
.slide-fade-to-top-leave-to {
  transform: translateY(50px);
  opacity: 0;
}

.slide-fade-to-right-enter-from,
.slide-fade-to-right-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}

.slide-fade-to-left-enter-from,
.slide-fade-to-left-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>
