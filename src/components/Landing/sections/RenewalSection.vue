<template>
  <!-- w-full blue-gradient flex justify-center items-center -->
  <div
    class="w-full bg-white flex justify-center items-center py-large sm:py-xl renewal-wrapper"
    ref="wrapperRef"
  >
    <section
      class="content-wrapper flex flex-col md:flex-row justify-center md:justify-start items-center"
    >
      <transition name="slide-fade-to-right">
        <svg
          v-if="showElement"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 700 700"
          id="renewal-icon"
        >
          <linearGradient
            id="renewal"
            y1=".535"
            x2="1"
            y2=".537"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#285180" />
            <stop offset="1" stop-color="#4185d0" />
          </linearGradient>

          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="109"
            y1="337.2499"
            x2="575.7"
            y2="337.2499"
          >
            <stop offset="0" style="stop-color: #a8b1a1" />
            <stop offset="1" style="stop-color: #5073b1" />
          </linearGradient>
          <linearGradient
            id="SVGID_00000152258613290190427970000014672087932831548319_"
            gradientUnits="userSpaceOnUse"
            x1="219.8"
            y1="331.3"
            x2="511.1995"
            y2="331.3"
          >
            <stop offset="0" style="stop-color: #a8b1a1" />
            <stop offset="1" style="stop-color: #5073b1" />
          </linearGradient>
          <linearGradient
            id="SVGID_00000139274009759108834900000011828330170416738211_"
            gradientUnits="userSpaceOnUse"
            x1="416.8"
            y1="181.85"
            x2="623.1"
            y2="181.85"
          >
            <stop offset="0" style="stop-color: #a8b1a1" />
            <stop offset="1" style="stop-color: #5073b1" />
          </linearGradient>
          <linearGradient
            id="SVGID_00000036937789321318926510000005519152967707838367_"
            gradientUnits="userSpaceOnUse"
            x1="101.2"
            y1="504.55"
            x2="307.5"
            y2="504.55"
          >
            <stop offset="0" style="stop-color: #a8b1a1" />
            <stop offset="1" style="stop-color: #5073b1" />
          </linearGradient>
          <path
            class="st0"
            d="M574.3,313.5c-0.8-7.2-1.8-14.5-3.2-21.7c-0.7-3.3-3.9-5.4-7.1-4.8c-3.3,0.7-5.4,3.9-4.8,7.1
		c1.4,6.9,2.4,13.7,3.1,20.6c0.6,5.4,0.8,11,1,16.5h-86.5c-0.2-14.2-1-28.3-2.6-42.1c-0.4-3.4-3.4-5.6-6.8-5.3
		c-3.3,0.4-5.8,3.5-5.3,6.8c1.6,13.3,2.4,26.9,2.5,40.6H348.4v-74c23.5-0.6,46.7-4.6,68.8-12c3.2-1.1,4.9-4.6,3.8-7.7
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
		c-10,31.6-15.9,67.6-16.5,105.9H121C122.5,276.9,143.7,227.4,177.8,189.5L177.8,189.5z M219.8,331.3c0.5-36.1,5.9-70.1,14.9-100
		c31,16.1,65.4,25.1,101.3,26v73.9L219.8,331.3L219.8,331.3z M464.5,343.5c-0.5,36.2-5.9,70.3-15,100.1
		c-31.1-16.1-65.8-25.3-101.2-26.2v-73.9H464.5z M445.5,455.4c-20.7,59.1-56.4,99.3-97.4,102.9V429.7
		C382.4,430.6,415.8,439.6,445.5,455.4L445.5,455.4z M456.1,461.3c15.2,9.2,29.3,20.1,41.9,32.8c-28.1,27.9-63.6,48.4-103.3,58.1
		C420.1,533.4,441.6,501.4,456.1,461.3L456.1,461.3z"
          />

          <path
            style="
              fill: url(#SVGID_00000139274009759108834900000011828330170416738211_);
            "
            d="M520,78.7c-56.9,0-103.2,46.2-103.2,103.1
		S463.1,285,520,285s103.1-46.2,103.1-103.2C623.1,125,576.8,78.7,520,78.7L520,78.7z M520,90.9c50.1,0,90.9,40.8,90.9,91
		c0,18.2-5.4,35.1-14.6,49.3c-13.4-14.8-30.5-25.3-49.5-30.4c11.9-8.4,19.6-22.2,19.6-37.8c0-25.6-20.8-46.4-46.4-46.4
		s-46.5,20.8-46.5,46.4c0,15.6,7.8,29.4,19.7,37.9c-19,5.1-36.1,15.5-49.5,30.5c-9.2-14.3-14.7-31.1-14.7-49.4
		C429,131.7,469.8,90.9,520,90.9z M520,197.1L520,197.1c-18.9-0.1-34.3-15.4-34.3-34.3c0-18.8,15.4-34.2,34.3-34.2
		c18.8,0,34.2,15.4,34.2,34.2S538.9,197,520,197.1C520,197.2,520,197.1,520,197.1z M520,272.8c-27.5,0-52.2-12.3-68.9-31.7
		c17.2-20.1,41.9-31.7,68.7-31.7h0.2h0.2c26.7,0,51.4,11.6,68.6,31.8C572.1,260.5,547.5,272.8,520,272.8L520,272.8z"
          />

          <path
            style="
              fill: url(#SVGID_00000036937789321318926510000005519152967707838367_);
            "
            d="M204.4,401.4
		c-56.9,0-103.2,46.2-103.2,103.1s46.3,103.2,103.2,103.2s103.1-46.3,103.1-103.2C307.5,447.7,261.3,401.4,204.4,401.4L204.4,401.4z
		 M204.4,595.5c-27.5,0-52.2-12.3-68.9-31.7c17.2-20.2,42-31.7,68.8-31.7h0.1h0.1c26.7,0,51.5,11.6,68.7,31.8
		C256.5,583.2,231.9,595.5,204.4,595.5L204.4,595.5z M170.1,485.6c0-18.9,15.4-34.3,34.3-34.3c18.8,0,34.2,15.4,34.2,34.3
		c0,18.8-15.4,34.2-34.2,34.3h-0.1C185.5,519.8,170.1,504.4,170.1,485.6L170.1,485.6z M280.7,553.8c-13.4-14.8-30.5-25.3-49.6-30.4
		c11.9-8.4,19.6-22.2,19.6-37.8c0-25.6-20.8-46.4-46.4-46.4s-46.5,20.9-46.5,46.4c0,15.6,7.8,29.4,19.7,37.8
		c-19,5.1-36.1,15.5-49.6,30.4c-9.2-14.3-14.6-31.1-14.6-49.3c0-50.1,40.8-90.9,91-90.9s90.9,40.8,90.9,90.9
		C295.3,522.7,289.9,539.6,280.7,553.8L280.7,553.8z"
          />
          <path
            class="st3"
            d="M321.1,216.7l1.6,0.1l6.6-1.3l4-2.3l0.6-0.9h1.1l1.3,1l0.5,1l0.8,1.3l1.6,0.2l3.8-0.9l1.9-0.6l1.6,0.5l2,0.4
	h1.3l3,1.3l3.6-0.4l1.7,0.1l1.7,0.6l2.8,2.1l3.7,2.5l5.3,1.8l1.1,0.7l2.6,2.8l4,5.5l5.2,5.2l5.7,4.1l3,2.8l2,3.5l2,3.2l2,1.4
	l1.9,1.1l2,2.4l1.4,2l1.9,2.3l-2.1,3.1l-2.8,4.2l-3.3,4.9l-1,1.2l-2.9,2.9l-0.5,0.8l-0.6,2.1l0,3.9l0.4,4.9l0.4,4.5l1.6,0.5l1.8,0.3
	l2-0.6l2.5-0.5l3.1-0.3l3.4-0.9l2-0.7l2.1,0.1l1.9,0.8l0.9,0.7l1.3,0.2l1.7,0l-0.4,0.9l-0.9,1.2l-1.1,1.2l-1,1.3l-2.2,3.6l-0.1,0.5
	l0.3,0.7l1.2,1.6l1.3,2.7l0.7,2.4l0.5,1.2l1.5,1.4l2.2,2.8l1.2,1.9l2.4,1l0.8,2.4l1.8,3.5l2,2.8l1.9,2.2l2.1,0.8l0.9,0.1l4.5,4.1
	l3.4,3.1l0.8,0.5l6.1,2l7,2.3l5.6,1.9l7.2,2.4l7.1,2.3l6.7,2.2l9.3,3.1l7.5,2.5l5.9,2l1.3,0.6h21.6l-5.3,5.1l-6,5.8l-6.3,6.1
	l-4.1,3.9l-6.5,6.2l-5.4,5.2l-5.5,5.7l-5,5.1l-6.5,7.1l-4.2,4.6l-6.6,7.2l-4.1,4.5l-0.6,0.3l-5.9-0.3l-5.8-0.3l-7.4-0.4l-0.8,0
	l-2.1,0.4l-1.3,0.4l-5.3,1.2l-1,0.3l-4.4,1.9l-4.5,2.3l-2.4,1.8l-1.8,2.5l-0.8,1.8l-0.8,0.8l-1.4,0.7l-9.4,1.7l-2.7,0.2l-4.4,1.4
	l-2.4,2.3l-0.7,1.2l-3.2,0l-5.5,0.3l-2.4,0.4l-1.2,0.1l-2.1,0l-1.7-0.4l-1.2-0.6l-1.4-1.4l-3.2-2.9l-2.3-1.8l-5.1,2.1l-4.6,2
	l-6.5,2.9l-3.7,2.1l-1.1,2.1l-2.9,3.8L345,455l-1,0.3l-5.8-0.5l-2.1-0.5l-3.5-0.4l-4.7-0.8l-3.1-0.9l-3.4-0.1l-4.9-0.3l-3-0.6
	l-3.1-2.1l-3.9-2.5l-4-2.6l-4.2-2.7l-4.9-3.1l-5.4-3.4l-1.2-0.3l-0.5-0.1l-5.8-0.2l-6.1-0.2l-4.1-0.1l-1.3-0.4l-0.9-0.8l-1.3-2.5
	l-1.6-1.8l-1.8-2.3l-0.1-3.1l0.5-3.3l0.5-1.1l-0.3-1.1l0.1-1.5l-1-1.4l-6-1.6l-1,0.1l-1,0.6l-1.1,0.4l-0.8-0.4l-0.5-0.6l0-1l0.1-0.7
	l-0.3-0.4l-1.9-1.5l-1.8-2l-1.1-2.2l-1-1.8l-0.5-4l-1.3-2.5l-1.3-3l-1.9-5.8l-0.8-2l-1.6-1.3l-1.6-1.2l-1.7-2.6l-4.4-2.3l-1.7-1.8
	l-2.9-3.1l-0.7-1.5l-0.2-1.5l-0.9-1.4l-1.6-1.6l-5.1-3.5l-1.4-0.4l-1.8-0.4l-2.7-0.3l-3.6-0.8l-3.1-1.4l-1.4-1l-0.3-0.7l0.3-1.1
	l1.1-1.9l2.2-4.6l1.5-3.1l1-0.9l2.8-0.2l2.9,0.1l2.1,0.2l3,0l3.6-0.3l1.4-1.1l1.1-1.2l0.5-0.8l0.2-2l0-1.6l-0.2-6.3l-0.1-3.8
	l-0.2-4.4l0-0.9l0-1.1l0.9-4.7l0.8-2.7l0.6-1.4l2.3-4.5l0.4-1.4l0.1-1.3l-0.8-6l1.5-2.8l1.9-2.8l1.7-1.2l1.4-0.8l0.6,0.3l1.6,1.3
	l2.1,1.3l1-0.3l1.4-1.1l1.1-1.2l-0.1-2.1l1-4.4l-0.2-2.5l1-3.1l1.1-4.4l0.5-2.8l0.6-1.5l3-3.1l2.6-4.4l1.7-3.2l3.2-5.2l1.6-1.9
	l1.3-0.8l1.9-0.5l3.6-0.5l2.6-0.4l0.4-0.7l0.2-1.1l0-2.3l0.5-4l1.1-3.9l1.3-3l0.7-1.4l0.9-1.3l1-2.2l1.2-4.8l-0.1-3.2l1.7-5.9l0.4,0
	l3-1.1l2.9-0.2l2.8,0.8l1.8,0.2l0.8-0.4l0.8-1l0.7-1.6l1.1-0.9l1.6-0.2l2.1,1.8l3.3,4.8l0.9,0.3l0.5-0.1l1.7-3.8l1.3-3l2.4-5.6
	l1.4-3.2l1.3,0.9l1.3,1.6l1.4,0.8l1.6,0.5l0.8,0.1l1,0.6l3.4,4L321.1,216.7z"
          />

          <path
            style="
              fill: url(#SVGID_00000152258613290190427970000014672087932831548319_);
            "
            d="M325.5,228l1.4,0.1l6-1.2l3.6-2.1l0.5-0.8
	h1l1.2,0.9l0.5,0.9l0.8,1.2l1.4,0.2l3.4-0.8l1.7-0.5l1.4,0.4l1.8,0.3h1.1l2.7,1.2l3.2-0.4l1.5,0.1l1.6,0.5l2.6,1.9l3.3,2.3l4.8,1.6
	l1,0.7l2.3,2.6l3.6,4.9l4.7,4.7l5.1,3.7l2.7,2.6l1.8,3.1l1.8,2.8l1.8,1.2l1.7,1l1.8,2.2l1.3,1.8l1.7,2.1l-1.9,2.8l-2.6,3.8l-3,4.4
	l-0.9,1.1l-2.6,2.6l-0.5,0.7l-0.5,1.9l0,3.5l0.3,4.4l0.3,4.1l1.4,0.5l1.7,0.3l1.8-0.5l2.2-0.5l2.8-0.3l3-0.8l1.8-0.7l1.9,0l1.7,0.7
	l0.8,0.7l1.2,0.2l1.5,0l-0.3,0.8l-0.8,1.1l-1,1.1l-0.9,1.2l-2,3.3l-0.1,0.4l0.2,0.6l1.1,1.5l1.1,2.4l0.6,2.2l0.5,1.1l1.4,1.2l2,2.5
	l1.1,1.7l2.2,0.9l0.7,2.1l1.6,3.2l1.8,2.5l1.7,2l1.9,0.8l0.8,0.1l4,3.7l3.1,2.8l0.8,0.4l5.5,1.8l6.3,2.1l5.1,1.7l6.5,2.1l6.4,2.1
	l6,2l8.4,2.8l6.8,2.3l5.4,1.8l1.1,0.6h19.5l-4.8,4.6l-5.4,5.2l-5.7,5.5l-3.7,3.5l-5.8,5.6l-4.8,4.7l-5,5.1l-4.5,4.6l-5.9,6.4
	l-3.8,4.1l-5.9,6.5l-3.7,4.1l-0.6,0.2l-5.3-0.3l-5.2-0.3l-6.6-0.4l-0.8,0l-1.9,0.4l-1.2,0.4l-4.8,1.1l-0.9,0.3l-4,1.7l-4.1,2.1
	l-2.1,1.6l-1.7,2.3l-0.7,1.6l-0.7,0.7l-1.3,0.6l-8.5,1.5l-2.5,0.2l-4,1.2l-2.1,2.1l-0.6,1l-2.8,0l-5,0.3l-2.1,0.3l-1,0.1l-1.9,0
	l-1.6-0.4l-1-0.6l-1.3-1.3l-2.9-2.6l-2.1-1.6l-4.6,1.9l-4.1,1.8l-5.9,2.6l-3.3,1.9l-1,1.9l-2.6,3.4l-2.3,2.1l-0.9,0.3l-5.2-0.4
	l-1.9-0.4l-3.1-0.4l-4.2-0.7l-2.8-0.8l-3-0.1l-4.4-0.3l-2.7-0.6l-2.8-1.9l-3.5-2.3l-3.6-2.4l-3.8-2.4l-4.4-2.8l-4.8-3l-1.1-0.3
	l-0.5-0.1l-5.3-0.1l-5.5-0.1l-3.7-0.1l-1.2-0.4l-0.8-0.7l-1.1-2.3l-1.4-1.6l-1.6-2l-0.1-2.8l0.4-3l0.4-1l-0.2-1l0.1-1.4l-0.9-1.3
	l-5.4-1.5l-0.9,0.1l-0.9,0.5l-1,0.4l-0.7-0.4l-0.5-0.5l0-0.9l0.1-0.7l-0.3-0.4l-1.7-1.4l-1.6-1.8l-1-2l-0.9-1.6l-0.5-3.6l-1.2-2.2
	l-1.2-2.7l-1.7-5.2l-0.7-1.8l-1.4-1.2l-1.5-1.1l-1.5-2.3l-4-2l-1.5-1.6l-2.7-2.8l-0.7-1.4l-0.2-1.4l-0.8-1.3l-1.5-1.5l-4.6-3.1
	l-1.3-0.4l-1.6-0.3l-2.4-0.3l-3.2-0.7l-2.8-1.2l-1.3-0.9l-0.3-0.6l0.3-1l1-1.7l1.9-4.1l1.3-2.8l0.9-0.8l2.5-0.2l2.6,0.1l1.9,0.2
	l2.7,0l3.3-0.2l1.3-1l1-1l0.4-0.7l0.1-1.8l0-1.5l-0.2-5.7l-0.1-3.5l-0.1-4l0-0.8l0-1l0.8-4.2l0.7-2.4l0.5-1.3l2.1-4l0.4-1.3l0.1-1.2
	l-0.8-5.4l1.3-2.6l1.7-2.5l1.5-1.1l1.2-0.7l0.6,0.3l1.4,1.2l1.9,1.2l0.9-0.3l1.3-1l1-1.1l-0.1-1.9l0.9-3.9l-0.2-2.3l0.9-2.8l1-4
	l0.5-2.5l0.6-1.4l2.7-2.8l2.3-3.9l1.5-2.9l2.9-4.7l1.4-1.7l1.2-0.7l1.7-0.5l3.2-0.4l2.3-0.4l0.3-0.6l0.2-1l0-2.1l0.5-3.6l1-3.5
	l1.2-2.7l0.6-1.2l0.8-1.2l0.9-2l1.1-4.3l-0.1-2.9l1.6-5.4l0.3,0l2.7-1l2.6-0.1l2.5,0.7l1.6,0.2l0.8-0.3l0.7-0.9l0.6-1.4l1-0.8
	l1.4-0.2l1.9,1.6l3,4.3l0.8,0.3l0.5-0.1l1.5-3.5l1.2-2.7l2.2-5l1.2-2.9l1.2,0.8l1.2,1.5l1.3,0.7l1.4,0.4l0.7,0.1l0.9,0.6l3,3.6
	L325.5,228z"
          />
        </svg>
      </transition>
      <transition name="slide-fade-to-top">
        <section
          class="flex flex-col sm:ml-large items-center md:items-start"
          v-if="showElement"
        >
          <div class="flex flex-col items-center">
            <h1
              class="text-3xl sm:text-largeDisplay blue-text-gradient -mb-small"
            >
              {{ $t("Ethiopian from abroad Applicants") }}
            </h1>
            <hr class="yellow-gradient glow separator border-none" />
          </div>
          <h5 class="mt-small text-primary-600 text-center">
            {{
              $t(
                "All your educational document should be authenticated by the Ethiopian ministry of foreign affairs and you should have an equivalence letter from the Educational and Training Authority (ETA)"
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
  setup() {
    const { showElement, wrapperRef } = useIntersectionObserver();
    return {
      showElement,
      wrapperRef,
    };
  },
};
</script>
<style lang="postcss">
.renewal-wrapper {
  min-height: 300px;
}
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
  fill: url(#SVGID_00000040575453145413792080000000397794096398363320_);
}
.st2 {
  fill: url(#SVGID_00000037670340420727466120000012791833485969394822_);
}
.st3 {
  fill: #ffffff;
}
.st4 {
  fill: url(#SVGID_00000033365489975568511130000011028552761134250386_);
}
</style>
