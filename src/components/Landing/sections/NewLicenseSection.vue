<template>
  <!-- w-full blue-gradient flex justify-center items-center -->
  <div
    class="
      w-full
    bg-main-400
      flex
      justify-center
      items-center
      py-large
      sm:py-xl
      box-border
    "
    ref="wrapperRef"
  >
    <section
      class="
        content-wrapper-new-license
        w-full
        flex flex-col
        md:flex-row
        justify-center
        md:justify-start
        items-center
      "
    >
      <transition name="slide-fade-to-right">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 700 700"
          v-if="showElement"
        >
          <linearGradient
            id="newLicense"
            x1="-.569"
            y1="-.524"
            x2="1"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#fde68a" />
            <stop offset="1" stop-color="#3674b9" />
          </linearGradient>
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="59.9541"
            y1="328.8946"
            x2="677"
            y2="328.8946"
          >
            <stop offset="0" style="stop-color: #a8b1a1" />
            <stop offset="1" style="stop-color: #07677e;" />
          </linearGradient>
          <path
            class="st0"
            d="M283.7,110.2l3,0.2l12.7-2.5l7.6-4.4l1.1-1.7h2.1l2.5,2l1,1.9l1.6,2.5l3,0.4l7.2-1.7l3.6-1.1l3,0.9l3.8,0.7
		h2.4l5.7,2.5l6.9-0.8l3.2,0.1l3.3,1.1l5.4,3.9l7.1,4.8l10.1,3.4l2.1,1.4l4.9,5.4l7.6,10.4l9.9,10l10.8,7.9l5.8,5.4l3.9,6.6l3.8,6
		l3.9,2.6l3.6,2.1l3.7,4.6l2.7,3.8l3.6,4.4l-4,5.9l-5.4,8l-6.3,9.3l-1.9,2.3l-5.5,5.6l-1,1.6l-1.1,4.1l-0.1,7.4l0.7,9.4l0.7,8.7l3,1
		l3.5,0.6l3.9-1.1l4.7-1l5.8-0.6l6.5-1.7l3.8-1.4l4,0.1l3.6,1.5l1.7,1.4l2.5,0.5l3.2-0.1l-0.7,1.6l-1.8,2.4l-2.2,2.4l-1.9,2.5
		l-4.3,6.9l-0.1,0.9l0.5,1.4l2.3,3.1l2.4,5.1l1.4,4.7l1,2.3l2.9,2.6l4.2,5.3l2.2,3.6l4.7,1.9l1.5,4.6l3.5,6.7l3.8,5.3l3.6,4.2
		l4.1,1.6l1.6,0.1l8.5,7.7l6.5,5.9l1.6,0.9l11.7,3.9l13.4,4.4l10.8,3.6l13.7,4.5l13.5,4.5l12.7,4.3l17.8,6l14.4,4.8l11.3,3.8
		l2.4,1.2H677l-10.2,9.8l-11.5,11.1l-12.1,11.7l-7.8,7.5l-12.3,11.9l-10.3,9.9l-10.6,10.8l-9.5,9.8l-12.4,13.5l-8,8.7l-12.6,13.7
		l-7.9,8.6l-1.2,0.5l-11.3-0.6l-11-0.6l-14.1-0.8l-1.6,0l-4.1,0.8l-2.5,0.8l-10.1,2.3l-1.9,0.6l-8.4,3.7l-8.6,4.3l-4.5,3.3l-3.5,4.8
		l-1.5,3.4l-1.6,1.5l-2.7,1.3l-18,3.3l-5.2,0.4l-8.4,2.6l-4.5,4.4l-1.3,2.2l-6-0.1l-10.5,0.6l-4.5,0.7l-2.2,0.1l-4,0l-3.3-0.8
		l-2.2-1.2l-2.7-2.7l-6.1-5.4l-4.4-3.4l-9.7,3.9l-8.8,3.9l-12.4,5.5l-7.1,4l-2.1,4l-5.5,7.2l-4.9,4.4l-1.8,0.5l-11.1-0.9l-4-0.9
		l-6.6-0.8l-8.9-1.6l-5.9-1.7l-6.5-0.2l-9.3-0.6l-5.7-1.2l-5.8-4l-7.5-4.8l-7.7-5l-8-5.1l-9.4-5.9l-10.3-6.4l-2.3-0.6l-1-0.1
		l-11.1-0.3l-11.6-0.3l-7.8-0.2l-2.5-0.7l-1.8-1.5l-2.4-4.8l-3.1-3.4l-3.4-4.3l-0.3-5.8l0.9-6.4l0.9-2.1l-0.5-2.1l0.1-2.9l-1.9-2.7
		l-11.4-3.1l-1.8,0.2l-1.9,1.2l-2.2,0.8l-1.6-0.8l-1-1.1l0-1.9l0.2-1.4l-0.7-0.8l-3.6-2.9l-3.4-3.8l-2.1-4.2l-2-3.4l-1-7.7l-2.5-4.7
		l-2.5-5.8l-3.7-11l-1.6-3.8l-3-2.6l-3.1-2.4l-3.2-4.9l-8.4-4.3l-3.2-3.4l-5.6-5.8l-1.4-3l-0.4-2.9l-1.7-2.7l-3.1-3.1l-9.7-6.7
		l-2.7-0.8l-3.5-0.7l-5.1-0.7l-6.8-1.5l-6-2.6l-2.7-1.8l-0.7-1.3l0.6-2.1l2.2-3.7l4.1-8.7l2.8-6l1.9-1.7l5.3-0.4l5.6,0.2l4.1,0.4
		l5.8,0.1l6.9-0.5l2.7-2l2.2-2.2l0.9-1.5l0.3-3.9l0-3.1l-0.4-12l-0.3-7.3l-0.3-8.4l0-1.7l0.1-2.2l1.7-9l1.6-5.1l1.1-2.7l4.4-8.6
		l0.8-2.7l0.1-2.5l-1.6-11.5l2.8-5.4l3.6-5.4l3.2-2.3l2.6-1.6l1.2,0.7l3,2.5l4,2.5l1.8-0.5l2.7-2.1l2-2.3l-0.3-4.1l1.8-8.3l-0.4-4.8
		l2-6l2.1-8.4l1-5.3l1.2-2.9l5.8-5.9l5-8.3l3.2-6.1l6-9.9l3.1-3.6l2.5-1.6l3.7-1l6.9-0.9l4.9-0.8l0.7-1.3l0.4-2l0.1-4.4l1-7.6
		l2.1-7.5l2.5-5.7l1.4-2.6l1.6-2.5l1.8-4.2l2.3-9.1l-0.1-6.2l3.3-11.3l0.7-0.1l5.6-2.1l5.5-0.3l5.3,1.5l3.4,0.4l1.6-0.7l1.5-1.9
		l1.4-3.1l2.2-1.7l3-0.3l4,3.4l6.3,9.1l1.6,0.5l1-0.2l3.2-7.3l2.5-5.7l4.6-10.6l2.6-6.1l2.5,1.8l2.4,3.1l2.8,1.5l3,0.9l1.4,0.1
		l1.8,1.2l6.4,7.6L283.7,110.2z"
          />
          <path
            class="st1"
            d="M304.2,218.6c-68.1,0-123.6,55.3-123.6,123.5S236,465.6,304.2,465.6S427.7,410.3,427.7,342
		C427.7,274,372.2,218.6,304.2,218.6L304.2,218.6z M304.2,233.2c60,0,108.9,48.9,108.9,109c0,21.8-6.5,42-17.5,59
		c-16-17.7-36.5-30.3-59.3-36.4c14.3-10.1,23.5-26.6,23.5-45.3c0-30.7-24.9-55.6-55.6-55.6s-55.7,24.9-55.7,55.6
		c0,18.7,9.3,35.2,23.6,45.4c-22.8,6.1-43.2,18.6-59.3,36.5c-11-17.1-17.6-37.2-17.6-59.2C195.2,282,244.1,233.2,304.2,233.2z
		 M304.2,360.4L304.2,360.4c-22.6-0.1-41.1-18.4-41.1-41.1c0-22.5,18.4-41,41.1-41c22.5,0,41,18.4,41,41S326.8,360.3,304.2,360.4
		C304.2,360.5,304.2,360.4,304.2,360.4z M304.2,451c-32.9,0-62.5-14.7-82.5-38c20.6-24.1,50.2-38,82.3-38h0.2h0.2
		c32,0,61.6,13.9,82.2,38.1C366.6,436.3,337.1,451,304.2,451L304.2,451z"
          />
        </svg>
      </transition>
      <transition name="slide-fade-to-top">
        <section
          v-if="showElement"
          class="flex flex-col px-small sm:ml-large items-center md:items-start"
        >
          <div class="flex flex-col items-center">
            <h1
              class="
                text-3xl
                sm:text-largeDisplay
                white-text-gradient
                -mb-tiny
                sm:-mb-small
              "
            >
              Ethiopian Applicants
            </h1> 
          </div>
          <h5 class="mt-small text-primary-100 text-center block relative">
            <div>
              Diploma graduates should pass level 4 COC exam before applying. If
              you are a degree graduate and your profession is under licensure
              examination, you should pass the exam to be able to apply.
            </div>
            <div>
              If your profession type is not under the licensure exam please
              have your university send your graduation list to the ministry of
              health through this email nhpled.moh@gmail.com.
            </div>
          </h5>
        </section>
      </transition>
    </section>
  </div>
</template>
<script>
import useIntersectionObserver from "@/composables/useIntersectionObserver";

export default {
  setup() {
    const { showElement, wrapperRef } = useIntersectionObserver();
    return {
      showElement,
      wrapperRef,
    };
  },
};
</script>
<style lang="postcss" scoped>
.new-license-wrapper {
  height: 370px;
}

.content-wrapper-new-license {
  max-width: 714px;
}

.st1 {
  fill: #ffffff;
}
.st0 {
  fill: url(#SVGID_1_);
}
@screen sm {
  svg {
    width: 70%;
  }
}
</style>
