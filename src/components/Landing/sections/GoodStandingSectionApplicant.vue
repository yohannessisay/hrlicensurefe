<template>
  <!-- w-full blue-gradient flex justify-center items-center -->
  <div
    :class="isDarkMode?'w-full bg-secondaryDark text-white flex justify-center items-center py-large sm:py-xl box-border':'w-full bg-white text-main-400 flex justify-center items-center py-large sm:py-xl box-border'"
    ref="wrapperRef"
  >
    <section
      class="content-wrapper flex flex-col md:flex-row justify-center md:justify-start items-center"
    >
      <!-- <transition name="slide-fade-to-right">
        <svg
          v-if="showElement"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 136.063 136.002"
        >
          <defs>
            <linearGradient
              id="goodStanding"
              y1=".535"
              x2="1"
              y2=".537"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#285180" />
              <stop offset="1" stop-color="#4185D0" />
            </linearGradient>
          </defs>
          <path
            data-name="Intersection 48"
            d="M-16594.758 103.743a2.164 2.164 0 01-.973-.562l-33.533-33.567-33.533 33.567a2.2 2.2 0 01-.973.562h-1.148a1.968 1.968 0 01-.273-.1 2.182 2.182 0 01-1.357-2.012V86.53l-17.326 1.907a2.19 2.19 0 01-2.187-1.228 2.18 2.18 0 01.414-2.5l26.117-26.109a50.483 50.483 0 01-17.586-56.326 50.45 50.45 0 0147.854-34.5 50.45 50.45 0 0147.854 34.5A50.477 50.477 0 01-16599 58.6l26.1 26.109a2.186 2.186 0 01.414 2.5 2.19 2.19 0 01-2.187 1.228l-17.309-1.907v15.1a2.186 2.186 0 01-1.355 2.012 2.1 2.1 0 01-.268.1zm-29.463-35.294l27.848 27.89V84.074a2.195 2.195 0 01.73-1.668 2.17 2.17 0 011.711-.524l13.527 1.509-22.277-22.285a49.629 49.629 0 01-21.539 7.343zm-38.66 13.977a2.178 2.178 0 01.717 1.648V96.34l27.857-27.89a49.629 49.629 0 01-21.539-7.345l-22.277 22.285 13.527-1.488a1.957 1.957 0 01.27-.017 2.217 2.217 0 011.445.541zm-12.434-64.169a46.057 46.057 0 0046.051 46.072 46.063 46.063 0 0046.055-46.072 46.067 46.067 0 00-46.055-46.076 46.061 46.061 0 00-46.05 46.076zm4.385 0a41.674 41.674 0 0141.666-41.687 41.674 41.674 0 0141.666 41.687 41.673 41.673 0 01-41.666 41.683 41.673 41.673 0 01-41.666-41.683zm53.174 35.487a37.291 37.291 0 0025.738-37.977 37.287 37.287 0 00-30.568-34.212 37.279 37.279 0 00-40.605 21.345h19.867l7.482-7.483v-7.873a2.189 2.189 0 012.189-2.2h2.2a8.778 8.778 0 018.775 8.774V2.9h19.736a2.193 2.193 0 012.191 2.188v30.72a6.577 6.577 0 01-6.58 6.577h-26.318a2.195 2.195 0 01-.986-.239l-8.312-4.15h-17.893a37.261 37.261 0 0043.084 15.747zm-48.793-35.487a36.883 36.883 0 003.357 15.36h20.773a2.174 2.174 0 01.984.239l8.309 4.142h25.791a2.194 2.194 0 002.2-2.188v-2.193h-17.543v-4.389h17.543v-4.39h-17.543v-4.384h17.543v-4.39h-17.543v-4.389h17.543V7.286h-19.74a2.194 2.194 0 01-2.193-2.2V-5.877a4.389 4.389 0 00-4.385-4.389v6.582a2.179 2.179 0 01-.637 1.559l-8.773 8.774a2.191 2.191 0 01-1.551.637h-22.488a37.909 37.909 0 00-1.647 10.971zm86.387-28.917a2.186 2.186 0 01-.854-2.39l1.865-6.364-3.162-2.3a2.188 2.188 0 01-.85-2.2 2.185 2.185 0 011.617-1.71l5.244-1.291 2.193-4.192a2.192 2.192 0 011.928-1.153 2.2 2.2 0 011.934 1.153l2.191 4.192 5.111 1.291a2.207 2.207 0 011.668 1.777 2.194 2.194 0 01-.814 2.192l-3.16 2.306 1.773 6.3a2.18 2.18 0 01-.381 1.949 2.2 2.2 0 01-1.807.834 2.139 2.139 0 01-1.291-.5l-5.291-3.882-5.375 3.991a2.161 2.161 0 01-1.27.407 2.175 2.175 0 01-1.269-.411zm9.211-8.38l1.357 1.052-.455-1.622a2.2 2.2 0 01.941-2.369l.592-.457-1.555-.4a2.184 2.184 0 01-1.385-1.073l-.791-1.442-.809 1.442a2.184 2.184 0 01-1.385 1.073l-1.445.4.637.457a2.193 2.193 0 01.809 2.369l-.549 1.622 1.451-1.052a2.179 2.179 0 011.295-.419 2.184 2.184 0 011.292.418zm-123.254 8.38a2.188 2.188 0 01-.846-2.39l1.857-6.3-3.2-2.306a2.182 2.182 0 01-.855-2.192 2.2 2.2 0 011.664-1.777l5.244-1.228 2.189-4.192a2.207 2.207 0 011.932-1.149 2.212 2.212 0 011.934 1.149l2.188 4.192 5.115 1.228a2.185 2.185 0 011.617 1.777 2.174 2.174 0 01-.855 2.192l-3.156 2.306 1.865 6.3a2.171 2.171 0 01-.389 1.949 2.186 2.186 0 01-1.8.834 2.139 2.139 0 01-1.291-.5l-5.291-3.882-5.375 3.991a2.17 2.17 0 01-1.27.407 2.2 2.2 0 01-1.277-.41zm9.215-8.38l1.363 1.052-.463-1.622a2.2 2.2 0 01.9-2.369l.662-.457-1.561-.4a2.192 2.192 0 01-1.408-1.073l-.787-1.442-.809 1.442a2.184 2.184 0 01-1.385 1.073l-1.533.4.721.457a2.189 2.189 0 01.813 2.369l-.549 1.622 1.451-1.052a2.176 2.176 0 011.291-.419 2.187 2.187 0 011.294.418z"
            transform="translate(16697.291 32.259)"
            fill="url(#goodStanding)"
          />
        </svg>
      </transition> -->
      <transition name="slide-fade-to-top">
        <section
          class="flex flex-col px-small sm:ml-large items-center md:items-start"
          v-if="showElement"
        >
          <div class="flex flex-col items-center">
            <!-- <h5 class="mt-small text-primary-100 text-center">

              If your application is approved, you are expected to pay a service fee and take your license. Please note that foreigners will pay in dollars and Ethiopians will pay in birr. 
            </h5> -->
            <!-- <hr class="yellow-gradient glow separator border-none" /> -->
          </div>
          <h5 class="mt-small text-2xl text-center">
            {{
              $t(
                "If your application is approved, you are expected to pay a service fee and take your license. Please note that foreigners will pay in dollars and Ethiopians will pay in birr."
              )
            }}
          </h5>
        </section>
      </transition>
    </section>
  </div>
</template>
<script>
import useIntersectionObserver from "@/composables/useIntersectionObserver";
export default {
  props: ["isDarkMode"],
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

.content-wrapper {
  width: 90%;
  max-width: 714px;
}

svg {
  height: 143px !important;
}
</style>
