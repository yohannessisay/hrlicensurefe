<template>
  <div
    class="w-full bg-main-400 flex flex-col justify-center items-center pt-small sm:pt-xl box-border"
    ref="wrapperRef"
  >
    <transition name="fade">
      <div
        v-if="showElement"
        class="flex flex-col items-center justify-center mb-medium"
      >
        <h1
          class="text-2xl sm:text-largeDisplay white-text-gradient -mb-tiny sm:-mb-small text-center"
        >
          Accessible on any device
        </h1>
      </div>
    </transition>
    <transition name="slide-fade-to-top">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1312.243 590.639"
        v-if="showElement"
      >
        <defs>
          <pattern id="d" width="1" height="1" viewBox="0 0 399 240">
            <image
              preserveAspectRatio="xMidYMid slice"
              width="399"
              height="249.375"
              :xlink:href="landing_one"/>
          </pattern>
          <pattern id="e" width="1" height="1" viewBox="0 0 268 169">
            <!-- Girums pic -->
            <image
              preserveAspectRatio="xMidYMid slice"
              width="268"
              height="212.725"
              :xlink:href="landing_two"  />
          </pattern>
          <pattern id="f" width="1" height="1" viewBox="0 0 54.61 98.05">
            <image
              preserveAspectRatio="xMidYMid slice"
              width="54.61"
              height="118.103"
              :xlink:href="landing_three"
            />
          </pattern>
          <pattern
            id="g"
            preserveAspectRatio="xMidYMid slice"
            width="100%"
            height="100%"
            viewBox="0 0 1280 800"
          >
            <image
              width="1280"
              height="800"
              :xlink:href="landing_two"/>
          </pattern>
          <filter
            id="b"
            x="80"
            y="281.522"
            width="1232.243"
            height="309.117"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dx="40" dy="80" />
            <feGaussianBlur stdDeviation="49.5" result="blur" />
            <feFlood flood-opacity=".302" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="c"
            x="0"
            y="161.522"
            width="1232.243"
            height="309.117"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dx="-40" dy="-40" />
            <feGaussianBlur stdDeviation="49.5" result="blur-2" />
            <feFlood flood-color="#fff" flood-opacity=".333" />
            <feComposite operator="in" in2="blur-2" />
            <feComposite in="SourceGraphic" />
          </filter>
          <linearGradient
            id="device-gradient"
            x1=".5"
            x2=".5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#2f639d" />
            <stop offset="1" stop-color="#162b43" />
          </linearGradient>
        </defs>
        <g data-name="Group 492" transform="translate(-2442.5 -7431.716)">
          <path
            data-name="Path 781"
            d="M3253.073 7779.519h-124.5c-5.632 0-46.165-.512-46.165-.512s42.24-19.2 42.752-60.074c.085-6.827-2.219-9.9 3.413-9.9h86.954l-1.707 9.9c.427 42.666 39.253 60.586 39.253 60.586z"
            fill="#fff"
          />
          <path
            data-name="Path 782"
            d="M3381.584 7708.693a10.27 10.27 0 01-10.24 10.24h-404.475a10.27 10.27 0 01-10.24-10.24v-266.237a10.27 10.27 0 0110.24-10.24h404.476a10.27 10.27 0 0110.24 10.24z"
            fill="#2d1510"
          />
          <path
            data-name="Path 796"
            d="M806.555 493.677a10.27 10.27 0 01-10.24 10.24H391.84a10.27 10.27 0 01-10.24-10.24V227.44a10.27 10.27 0 0110.24-10.24h404.476a10.27 10.27 0 0110.24 10.24z"
            transform="translate(2575.029 7215.016)"
            stroke="rgba(236,239,245,0.39)"
            fill="url(#device-gradient)"
          />
          <path
            data-name="Path 787"
            d="M2936.063 7767.572a1.931 1.931 0 01-1.963 1.963h-75.69a1.931 1.931 0 01-1.963-1.963 1.931 1.931 0 011.963-1.963h75.69a1.985 1.985 0 011.963 1.963z"
            fill="#2d1510"
          />
          <path
            data-name="Path 791"
            d="M2902.784 7583.595a3.413 3.413 0 11-3.413-3.413 3.413 3.413 0 013.413 3.413z"
            fill="#fff"
          />
          <path
            data-name="Path 792"
            d="M3177.128 7703.914a5.973 5.973 0 11-5.973-5.973 5.973 5.973 0 015.973 5.973z"
            fill="#fff"
          />
          <g transform="translate(2442.5 7431.72)" filter="url(#b)">
            <path
              data-name="Path 793"
              d="M1123.743 356.079a6.1 6.1 0 01-6.144 6.059H194.644a6.1 6.1 0 01-6.144-6.059 6.1 6.1 0 016.144-6.059H1117.6a6.046 6.046 0 016.144 6.059z"
              fill="#fff"
            />
          </g>
          <g transform="translate(2442.5 7431.72)" filter="url(#c)">
            <path
              data-name="Path 797"
              d="M1123.743 356.079a6.1 6.1 0 01-6.144 6.059H194.644a6.1 6.1 0 01-6.144-6.059 6.1 6.1 0 016.144-6.059H1117.6a6.046 6.046 0 016.144 6.059z"
              fill="#fff"
            />
          </g>
          <g
            data-name="2"
            transform="translate(2970.622 7445.854)"
            stroke="rgba(156,174,204,0.53)"
            fill="url(#d)"
          >
            <rect width="399" height="240" rx="3" stroke="none" />
            <rect x=".5" y=".5" width="398" height="239" rx="2.5" fill="none" />
          </g>
          <path
            data-name="Path 784"
            d="M429.877 573.017a10.456 10.456 0 01-10.24 10.581H150.84a10.456 10.456 0 01-10.24-10.581V395.781a10.456 10.456 0 0110.24-10.581h268.8a10.456 10.456 0 0110.24 10.581z"
            transform="translate(2610.377 7190.374)"
            stroke="rgba(236,239,245,0.39)"
            fill="url(#device-gradient)"
          />
          <path
            data-name="Path 786"
            d="M3056.382 7773.631c0 3.413-4.352 6.144-9.813 6.144h-298.664c-5.376 0-9.813-2.731-9.813-6.144v-1.877c0-3.413 4.352-6.144 9.813-6.144h298.664c5.376 0 9.813 2.731 9.813 6.144z"
            fill="#fff"
          />
          <rect
            data-name="1"
            width="268"
            height="169"
            rx="3"
            transform="translate(2761.622 7589.854)"
            fill="url(#e)"
          />
          <path
            data-name="Path 794"
            d="M768.014 595.819c0 5.888-5.547 10.667-12.373 10.667h-39.168c-6.827 0-12.373-4.779-12.373-10.667v-96.852c0-5.888 5.547-10.667 12.373-10.667h39.168c6.827 0 12.373 4.779 12.373 10.667z"
            transform="translate(2527.725 7175.252)"
            stroke="rgba(236,239,245,0.39)"
            fill="url(#device-gradient)"
          />
          <path
            data-name="Path 795"
            d="M3260.582 7774.825a3.332 3.332 0 013.328-3.328 3.332 3.332 0 013.328 3.328 3.332 3.332 0 01-3.328 3.328 3.388 3.388 0 01-3.328-3.328z"
            fill="#fff"
          />
          <rect
            data-name="1"
            width="54.61"
            height="98.05"
            rx="3"
            transform="translate(3236.478 7671.574)"
            fill="url(#f)"
          />
          <path
            data-name="Path 788"
            d="M1000.385 589.089a10.27 10.27 0 01-10.24 10.24H809.24a10.27 10.27 0 01-10.24-10.24V472.44a10.27 10.27 0 0110.24-10.24h180.9a10.27 10.27 0 0110.24 10.24z"
            transform="translate(2513.806 7179.08)"
            stroke="rgba(236,239,245,0.39)"
            fill="url(#device-gradient)"
          />
          <path
            data-name="Path 790"
            d="M3324.24 7709.888a3.755 3.755 0 11-3.755-3.755 3.755 3.755 0 013.755 3.755z"
            fill="#fff"
          />
          <rect
            data-name="1"
            width="174"
            height="116"
            rx="3"
            transform="translate(3328.622 7651.854)"
            fill="url(#g)"
          />
        </g>
      </svg>
    </transition>
  </div>
</template>
<script>
import useIntersectionObserver from "@/composables/useIntersectionObserver";
import landing_three from "../images/landing_three";
import landing_two from "../images/landing_two";
import landing_one from "../images/landing_one";
export default {
  setup() {
    const { showElement, wrapperRef } = useIntersectionObserver("2%");
    return {
      showElement,
      wrapperRef,
      landing_three,
      landing_two,
      landing_one,
    };
  },
};
</script>
<style lang="postcss" scoped>
svg {
  width: 100%;
}

@screen md {
  svg {
    width: 935px !important;
    max-width: 935px !important;
  }
}
</style>
