<template>
  <!-- w-full blue-gradient flex justify-center items-center -->
  <div
    :class="isDarkMode?'w-full bg-primaryDark text-white flex justify-center items-center py-large sm:py-xl box-border':'w-full bg-main-400 flex justify-center items-center py-large sm:py-xl box-border'"
    ref="wrapperRef"
  >
    <section
      class="content-wrapper flex flex-col md:flex-row justify-center md:justify-start items-center"
    >
      <transition name="slide-fade-to-right">
        <svg xmlns="http://www.w3.org/2000/svg" v-if="showElement" viewBox="0 0 700 700">
          <linearGradient
            id="verification"
            x1="-.569"
            y1="-.524"
            x2="1"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#EBBC02" />
            <stop offset="1" stop-color="#FFFFFF" />
          </linearGradient>
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="108.9599"
            y1="337.246"
            x2="575.622"
            y2="337.246"
          >
            <stop offset="0" style="stop-color: #ebbc02" />
            <stop offset="1" style="stop-color: #ffffff" />
          </linearGradient>
          <path
            class="st0"
            d="M574.3,313.5c-0.8-7.2-1.8-14.5-3.2-21.7c-0.7-3.3-3.9-5.4-7.1-4.8c-3.3,0.7-5.4,3.9-4.8,7.1
          c1.4,6.9,2.4,13.7,3.1,20.6c0.6,5.4,0.8,11,1,16.5h-86.5c-0.2-14.2-1-28.3-2.6-42.1c-0.4-3.4-3.4-5.6-6.8-5.3
          c-3.3,0.4-5.8,3.5-5.3,6.8c1.6,13.3,2.4,26.9,2.5,40.6l-116.2,0v-74c23.5-0.6,46.7-4.6,68.8-12c3.2-1.1,4.9-4.6,3.8-7.7
          c-1.1-3.2-4.6-4.9-7.7-3.8c-20.9,7-42.7,10.8-64.8,11.5V116.7c19,1.8,37.7,11.5,54.3,28.8c2.4,2.5,6.2,2.5,8.7,0.2
          c2.5-2.4,2.5-6.2,0.2-8.7c-5.2-5.3-10.6-10.1-16.1-14.3c5.9,1.4,11.9,3.1,17.6,5.1c3.2,1.1,6.6-0.6,7.7-3.8
          c1.1-3.2-0.7-6.6-3.8-7.7c-23.9-8.1-49-12.2-74.6-12.2C213.7,104,109,208.7,109,337.3c0,22.1,3.1,44.1,9.2,65.2
          c0.8,2.6,3.2,4.4,5.9,4.4c0.6,0,1.1-0.1,1.7-0.3c3.2-0.9,5.1-4.3,4.2-7.6c-5.3-18.1-8.1-36.7-8.6-55.7h86.5
          c0.3,14.2,1,28.4,2.7,42.2c0.3,3.1,3,5.3,6,5.3c0.3,0,0.5,0,0.8-0.1c3.3-0.4,5.8-3.5,5.3-6.8c-1.6-13.3-2.4-27-2.6-40.7h116.2v73.9
          c-12.6,0.3-25.2,1.6-37.5,3.9c-3.3,0.6-5.5,3.8-4.8,7.1c0.6,3.3,3.8,5.5,7.1,4.8c11.5-2.2,23.3-3.4,35.2-3.7v128.5
          c-1.5-0.2-3.1-0.1-4.6-0.3c-3.4-0.6-6.4,1.7-7,5.1c-0.1,0.3,0,0.6,0,0.9c0,0.2-0.1,0.3-0.1,0.3c0,0.3,0.1,0.7,0.2,1v0.2
          c0.4,2.8,2.6,5.1,5.6,5.2c4,0.2,7.9,0.3,12,0.3c128.6,0,233.3-104.7,233.3-233.3C575.5,329.4,575,321.4,574.3,313.5L574.3,313.5z
           M506.4,485.2c-13.9-13.9-29.5-25.8-46.2-35.7c10-31.6,16-67.7,16.5-106.1h86.5C561.6,397.9,540.4,447.5,506.4,485.2L506.4,485.2z
           M336,245.2c-34.6-0.9-67.8-9.7-97.5-25.5c20.7-59.1,56.4-99.4,97.5-103.1V245.2z M228,213.6c-15-9.2-29.1-20.2-41.8-32.9
          c28.1-27.9,63.6-48.4,103.3-58.1C264,141.4,242.6,173.4,228,213.6L228,213.6z M177.8,189.5c14.1,14,29.5,26,46.2,35.9
          c-10,31.6-15.9,67.6-16.5,105.9h-86.5C122.5,276.9,143.7,227.4,177.8,189.5L177.8,189.5z M219.8,331.3c0.5-36.1,5.9-70.1,14.9-100
          c31,16.1,65.4,25.1,101.3,26v73.9L219.8,331.3L219.8,331.3z M464.5,343.5c-0.5,36.2-5.9,70.3-15,100.1
          c-31.1-16.1-65.8-25.3-101.2-26.2v-73.9L464.5,343.5z M445.5,455.4c-20.7,59.1-56.4,99.3-97.4,102.9V429.7
          C382.4,430.6,415.8,439.6,445.5,455.4L445.5,455.4z M456.1,461.3c15.2,9.2,29.3,20.1,41.9,32.8c-28.1,27.9-63.6,48.4-103.3,58.1
          C420.1,533.4,441.6,501.4,456.1,461.3L456.1,461.3z"
          />

          <linearGradient
            id="SVGID_00000047782681910066937670000006148370083747561640_"
            gradientUnits="userSpaceOnUse"
            x1="416.783"
            y1="181.865"
            x2="623.053"
            y2="181.865"
          >
            <stop offset="0" style="stop-color: #a8b1a1" />
            <stop offset="1" style="stop-color: #ffffff" />
          </linearGradient>
          <path
            style="fill: url(#SVGID_00000047782681910066937670000006148370083747561640_)"
            d="M520,78.7c-56.9,0-103.2,46.2-103.2,103.1
          c0,56.9,46.3,103.2,103.2,103.2s103.1-46.2,103.1-103.2C623.1,125,576.8,78.7,520,78.7L520,78.7z M520,90.9
          c50.1,0,90.9,40.8,90.9,91c0,18.2-5.4,35.1-14.6,49.3c-13.4-14.8-30.5-25.3-49.5-30.4c11.9-8.4,19.6-22.2,19.6-37.8
          c0-25.6-20.8-46.4-46.4-46.4s-46.5,20.8-46.5,46.4c0,15.6,7.8,29.4,19.7,37.9c-19,5.1-36.1,15.5-49.5,30.5
          c-9.2-14.3-14.7-31.1-14.7-49.4C429,131.7,469.8,90.9,520,90.9z M520,197.1L520,197.1c-18.9-0.1-34.3-15.4-34.3-34.3
          c0-18.8,15.4-34.2,34.3-34.2c18.8,0,34.2,15.4,34.2,34.2S538.9,197,520,197.1C520,197.2,520,197.1,520,197.1z M520,272.8
          c-27.5,0-52.2-12.3-68.9-31.7c17.2-20.1,41.9-31.7,68.7-31.7h0.2h0.2c26.7,0,51.4,11.6,68.6,31.8
          C572.1,260.5,547.5,272.8,520,272.8L520,272.8z"
          />

          <linearGradient
            id="SVGID_00000118396780671797878760000017281893121410540986_"
            gradientUnits="userSpaceOnUse"
            x1="101.233"
            y1="504.548"
            x2="307.503"
            y2="504.548"
          >
            <stop offset="0" style="stop-color: #a8b1a1" />
            <stop offset="1" style="stop-color: #ffffff" />
          </linearGradient>
          <path
            style="fill: url(#SVGID_00000118396780671797878760000017281893121410540986_)"
            d="M204.4,401.4
          c-56.9,0-103.2,46.2-103.2,103.1c0,56.9,46.3,103.2,103.2,103.2s103.1-46.3,103.1-103.2C307.5,447.7,261.3,401.4,204.4,401.4
          L204.4,401.4z M204.4,595.5c-27.5,0-52.2-12.3-68.9-31.7c17.2-20.2,42-31.7,68.8-31.7h0.1h0.1c26.7,0,51.5,11.6,68.7,31.8
          C256.5,583.2,231.9,595.5,204.4,595.5L204.4,595.5z M170.1,485.6c0-18.9,15.4-34.3,34.3-34.3c18.8,0,34.2,15.4,34.2,34.3
          c0,18.8-15.4,34.2-34.2,34.3h-0.1C185.5,519.8,170.1,504.4,170.1,485.6L170.1,485.6z M280.7,553.8c-13.4-14.8-30.5-25.3-49.6-30.4
          c11.9-8.4,19.6-22.2,19.6-37.8c0-25.6-20.8-46.4-46.4-46.4s-46.5,20.9-46.5,46.4c0,15.6,7.8,29.4,19.7,37.8
          c-19,5.1-36.1,15.5-49.6,30.4c-9.2-14.3-14.6-31.1-14.6-49.3c0-50.1,40.8-90.9,91-90.9s90.9,40.8,90.9,90.9
          C295.3,522.7,289.9,539.6,280.7,553.8L280.7,553.8z"
          />
        </svg>
      </transition>
      <transition name="slide-fade-to-top">
        <section
          v-if="showElement"
          class="flex flex-col sm:ml-large items-center md:items-start"
        >
          <div class="flex flex-col items-center">
            <h1
              class="text-3xl sm:text-largeDisplay white-text-gradient -mb-tiny sm:-mb-small"
            >
              {{$t('Foreign Applicants')}}
            </h1>
          </div>
          <h5 class="mt-small text-2xl text-primary-100 text-center">
         {{$t('All foreigner applicants must authenticate their educational document and professional license. Applicants must have at least two years of work  experience when applying and applicants must have a valid passport in order to apply')}}
          </h5>
        </section>
      </transition>
    </section>
  </div>
</template>

<script>
import useIntersectionObserver from "@/composables/useIntersectionObserver";
export default {
  props:['isDarkMode'],
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
.st0 {
  fill: url(#SVGID_1_);
}
.st1 {
  fill: url(#SVGID_00000122691386389552051400000009324463607062572468_);
}
.st2 {
  fill: url(#SVGID_00000001642809056259780800000013184893846374717603_);
}
</style>
