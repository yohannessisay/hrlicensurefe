<template>
  <!-- Registration Part -->
  <div
    id="register"
    class="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div
      class="relative w-auto pointer-events-none modal-dialog-center modal-dialog modal-xl"
    >
      <div
        :class="
          isDarkMode
            ? 'relative flex flex-col w-full text-current bg-secondaryDark text-white border-none rounded-md outline-none pointer-events-auto modal-content md:w-9/12 mdlg:w-9/12 lg:w-10/12 sm:w-full bg-clip-padding'
            : 'relative flex flex-col w-full text-current bg-white border-none text-main-400 rounded-md outline-none pointer-events-auto modal-content md:w-9/12 mdlg:w-9/12 lg:w-10/12 sm:w-full bg-clip-padding'
        "
      >
        <div
          class="flex justify-end flex-shrink-0 p-2 shadow-md modal-header rounded-t-md"
        >
          <button
            type="button"
            class="text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded bg-main-400 hover:text-main-400 hover:border hover:border-main-400 hover:bg-purple-700 hover:"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa fa-close fa-2x"></i>
          </button>
        </div>

        <div
          class="w-full overflow-hidden text-gray-500 bg-gray-100 rounded-3xl"
          style="max-width: 1000px"
        >
          <div class="vld-parent">
            <loading
              :active="isLoading"
              :is-full-page="false"
              :color="'#2F639D'"
              :opacity="0.7"
            ></loading>
            <div class="w-full md:flex">
              <div class="hidden w-1/2 px-10 py-10 bg-indigo-500 md:block">
                <svg
                  id="a87032b8-5b37-4b7e-a4d9-4dbfbe394641"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="auto"
                  viewBox="0 0 744.84799 747.07702"
                >
                  <path
                    id="fa3b9e12-7275-481e-bee9-64fd9595a50d"
                    data-name="Path 1"
                    d="M299.205,705.80851l-6.56-25.872a335.96693,335.96693,0,0,0-35.643-12.788l-.828,12.024-3.358-13.247c-15.021-4.29394-25.24-6.183-25.24-6.183s13.8,52.489,42.754,92.617l33.734,5.926-26.207,3.779a135.92592,135.92592,0,0,0,11.719,12.422c42.115,39.092,89.024,57.028,104.773,40.06s-5.625-62.412-47.74-101.5c-13.056-12.119-29.457-21.844-45.875-29.5Z"
                    transform="translate(-227.576 -76.46149)"
                    fill="#f2f2f2"
                  />
                  <path
                    id="bde08021-c30f-4979-a9d8-cb90b72b5ca2"
                    data-name="Path 2"
                    d="M361.591,677.70647l7.758-25.538a335.93951,335.93951,0,0,0-23.9-29.371l-6.924,9.865,3.972-13.076c-10.641-11.436-18.412-18.335-18.412-18.335s-15.315,52.067-11.275,101.384l25.815,22.51-24.392-10.312a135.91879,135.91879,0,0,0,3.614,16.694c15.846,55.234,46.731,94.835,68.983,88.451s27.446-56.335,11.6-111.569c-4.912-17.123-13.926-33.926-24.023-48.965Z"
                    transform="translate(-227.576 -76.46149)"
                    fill="#f2f2f2"
                  />
                  <path
                    id="b3ac2088-de9b-4f7f-bc99-0ed9705c1a9d"
                    data-name="Path 22"
                    d="M747.327,253.4445h-4.092v-112.1a64.883,64.883,0,0,0-64.883-64.883H440.845a64.883,64.883,0,0,0-64.883,64.883v615a64.883,64.883,0,0,0,64.883,64.883H678.352a64.883,64.883,0,0,0,64.882-64.883v-423.105h4.092Z"
                    transform="translate(-227.576 -76.46149)"
                    fill="#e6e6e6"
                  />
                  <path
                    id="b2715b96-3117-487c-acc0-20904544b5b7"
                    data-name="Path 23"
                    d="M680.97,93.3355h-31a23.02,23.02,0,0,1-21.316,31.714H492.589a23.02,23.02,0,0,1-21.314-31.714H442.319a48.454,48.454,0,0,0-48.454,48.454v614.107a48.454,48.454,0,0,0,48.454,48.454H680.97a48.454,48.454,0,0,0,48.454-48.454h0V141.7885a48.454,48.454,0,0,0-48.454-48.453Z"
                    transform="translate(-227.576 -76.46149)"
                    fill="#fff"
                  />
                  <path
                    id="b06d66ec-6c84-45dd-8c27-1263a6253192"
                    data-name="Path 6"
                    d="M531.234,337.96451a24.437,24.437,0,0,1,12.23-21.174,24.45,24.45,0,1,0,0,42.345A24.43391,24.43391,0,0,1,531.234,337.96451Z"
                    transform="translate(-227.576 -76.46149)"
                    fill="#ccc"
                  />
                  <path
                    id="e73810fe-4cf4-40cc-8c7c-ca544ce30bd4"
                    data-name="Path 7"
                    d="M561.971,337.96451a24.43594,24.43594,0,0,1,12.23-21.174,24.45,24.45,0,1,0,0,42.345A24.43391,24.43391,0,0,1,561.971,337.96451Z"
                    transform="translate(-227.576 -76.46149)"
                    fill="#ccc"
                  />
                  <circle
                    id="a4813fcf-056e-4514-bb8b-e6506f49341f"
                    data-name="Ellipse 1"
                    cx="364.43401"
                    cy="261.50202"
                    r="24.45"
                    fill="#07677e"
                  />
                  <path
                    id="bbe451c3-febc-41ba-8083-4c8307a2e73e"
                    data-name="Path 8"
                    d="M632.872,414.3305h-142.5a5.123,5.123,0,0,1-5.117-5.117v-142.5a5.123,5.123,0,0,1,5.117-5.117h142.5a5.123,5.123,0,0,1,5.117,5.117v142.5A5.123,5.123,0,0,1,632.872,414.3305Zm-142.5-150.686a3.073,3.073,0,0,0-3.07,3.07v142.5a3.073,3.073,0,0,0,3.07,3.07h142.5a3.073,3.073,0,0,0,3.07-3.07v-142.5a3.073,3.073,0,0,0-3.07-3.07Z"
                    transform="translate(-227.576 -76.46149)"
                    fill="#ccc"
                  />
                  <rect
                    id="bb28937d-932f-4fdf-befe-f406e51091fe"
                    data-name="Rectangle 1"
                    x="218.56201"
                    y="447.10197"
                    width="218.552"
                    height="2.047"
                    fill="#ccc"
                  />
                  <circle
                    id="fcef55fc-4968-45b2-93bb-1a1080c85fc7"
                    data-name="Ellipse 2"
                    cx="225.46401"
                    cy="427.41999"
                    r="6.902"
                    fill="#07677e"
                  />
                  <rect
                    id="ff33d889-4c74-4b91-85ef-b4882cc8fe76"
                    data-name="Rectangle 2"
                    x="218.56201"
                    y="516.11803"
                    width="218.552"
                    height="2.047"
                    fill="#ccc"
                  />
                  <circle
                    id="e8fa0310-b872-4adf-aedd-0c6eda09f3b8"
                    data-name="Ellipse 3"
                    cx="225.46401"
                    cy="496.43702"
                    r="6.902"
                    fill="#07677e"
                  />
                  <path
                    d="M660.69043,671.17188H591.62207a4.50493,4.50493,0,0,1-4.5-4.5v-24.208a4.50492,4.50492,0,0,1,4.5-4.5h69.06836a4.50491,4.50491,0,0,1,4.5,4.5v24.208A4.50492,4.50492,0,0,1,660.69043,671.17188Z"
                    transform="translate(-227.576 -76.46149)"
                    fill="#07677e"
                  />
                  <circle
                    id="e12ee00d-aa4a-4413-a013-11d20b7f97f7"
                    data-name="Ellipse 7"
                    cx="247.97799"
                    cy="427.41999"
                    r="6.902"
                    fill="#07677e"
                  />
                  <circle
                    id="f58f497e-6949-45c8-be5f-eee2aa0f6586"
                    data-name="Ellipse 8"
                    cx="270.492"
                    cy="427.41999"
                    r="6.902"
                    fill="#07677e"
                  />
                  <circle
                    id="b4d4939a-c6e6-4f4d-ba6c-e8b05485017d"
                    data-name="Ellipse 9"
                    cx="247.97799"
                    cy="496.43702"
                    r="6.902"
                    fill="#07677e"
                  />
                  <circle
                    id="aff120b1-519b-4e96-ac87-836aa55663de"
                    data-name="Ellipse 10"
                    cx="270.492"
                    cy="496.43702"
                    r="6.902"
                    fill="#07677e"
                  />
                  <path
                    id="f1094013-1297-477a-ac57-08eac07c4bd5"
                    data-name="Path 88"
                    d="M969.642,823.53851H251.656c-1.537,0-2.782-.546-2.782-1.218s1.245-1.219,2.782-1.219H969.642c1.536,0,2.782.546,2.782,1.219S971.178,823.53851,969.642,823.53851Z"
                    transform="translate(-227.576 -76.46149)"
                    fill="#3f3d56"
                  />
                  <path
                    d="M792.25256,565.92292a10.09371,10.09371,0,0,1,1.41075.78731l44.8523-19.14319,1.60093-11.81526,17.92157-.10956-1.05873,27.0982-59.19987,15.65584a10.60791,10.60791,0,0,1-.44749,1.20835,10.2346,10.2346,0,1,1-5.07946-13.68169Z"
                    transform="translate(-227.576 -76.46149)"
                    fill="#ffb8b8"
                  />
                  <polygon
                    points="636.98 735.021 624.72 735.021 618.888 687.733 636.982 687.734 636.98 735.021"
                    fill="#ffb8b8"
                  />
                  <path
                    d="M615.96281,731.51778h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H601.076a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,615.96281,731.51778Z"
                    fill="#2f2e41"
                  />
                  <polygon
                    points="684.66 731.557 672.459 732.759 662.018 686.271 680.025 684.497 684.66 731.557"
                    fill="#ffb8b8"
                  />
                  <path
                    d="M891.68576,806.12757h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H876.7989a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,891.68576,806.12757Z"
                    transform="translate(-303.00873 15.2906) rotate(-5.62529)"
                    fill="#2f2e41"
                  />
                  <circle
                    cx="640.3925"
                    cy="384.57375"
                    r="24.56103"
                    fill="#ffb8b8"
                  />
                  <path
                    d="M849.55636,801.91945a4.47086,4.47086,0,0,1-4.415-3.69726c-6.34571-35.22559-27.08789-150.40528-27.584-153.59571a1.42684,1.42684,0,0,1-.01562-.22168v-8.58789a1.489,1.489,0,0,1,.27929-.87207l2.74024-3.83789a1.47845,1.47845,0,0,1,1.14355-.625c15.62207-.73242,66.78418-2.8789,69.25586.209h0c2.48242,3.10351,1.60547,12.50683,1.4043,14.36035l.00977.19336,22.98535,146.99512a4.51238,4.51238,0,0,1-3.71485,5.13476l-14.35644,2.36524a4.52127,4.52127,0,0,1-5.02539-3.09278c-4.44043-14.18847-19.3291-61.918-24.48926-80.38672a.49922.49922,0,0,0-.98047.13868c.25781,17.60546.88086,62.52343,1.0957,78.0371l.02344,1.6709a4.51811,4.51811,0,0,1-4.09277,4.53614l-13.84375,1.25781C849.83565,801.91359,849.695,801.91945,849.55636,801.91945Z"
                    transform="translate(-227.576 -76.46149)"
                    fill="#07677e"
                  />
                  <path
                    id="ae7af94f-88d7-4204-9f07-e3651de85c05"
                    data-name="Path 99"
                    d="M852.38089,495.2538c-4.28634,2.548-6.85116,7.23043-8.32276,11.9951a113.681,113.681,0,0,0-4.88444,27.15943l-1.55553,27.60021-19.25508,73.1699c16.68871,14.1207,26.31542,10.91153,48.78049-.63879s25.03222,3.85117,25.03222,3.85117l4.49236-62.25839,6.41837-68.03232a30.16418,30.16418,0,0,0-4.86143-4.67415,49.65848,49.65848,0,0,0-42.44229-8.99538Z"
                    transform="translate(-227.576 -76.46149)"
                    fill="#c5c5c5"
                  />
                  <path
                    d="M846.12661,580.70047a10.52561,10.52561,0,0,1,1.50061.70389l44.34832-22.1972.736-12.02551,18.2938-1.26127.98041,27.4126L852.7199,592.93235a10.4958,10.4958,0,1,1-6.59329-12.23188Z"
                    transform="translate(-227.576 -76.46149)"
                    fill="#ffb8b8"
                  />
                  <path
                    id="a6768b0e-63d0-4b31-8462-9b2e0b00f0fd"
                    data-name="Path 101"
                    d="M902.76552,508.41151c10.91151,3.85117,12.83354,45.57369,12.83354,45.57369-12.8367-7.06036-28.24139,4.49318-28.24139,4.49318s-3.20916-10.91154-7.06034-25.03223a24.52987,24.52987,0,0,1,5.13436-23.10625S891.854,504.558,902.76552,508.41151Z"
                    transform="translate(-227.576 -76.46149)"
                    fill="#07677e"
                  />
                  <path
                    id="bfd7963f-0cf8-4885-9d3a-2c00bccda2e3"
                    data-name="Path 102"
                    d="M889.99122,467.53052c-3.06-2.44837-7.23517,2.00173-7.23517,2.00173l-2.4484-22.03349s-15.30095,1.8329-25.0935-.61161-11.32255,8.87513-11.32255,8.87513a78.57978,78.57978,0,0,1-.30582-13.77092c.61158-5.50838,8.56838-11.01675,22.6451-14.68932S887.6518,439.543,887.6518,439.543C897.44542,444.43877,893.05121,469.97891,889.99122,467.53052Z"
                    transform="translate(-227.576 -76.46149)"
                    fill="#2f2e41"
                  />
                </svg>
              </div>
              <div class="w-full px-5 py-2 md:w-1/2 md:px-10">
                <div class="mb-4 text-center">
                  <h1 class="text-3xl font-bold text-gray-900 ">
                    {{ $t("REGISTER") }}
                  </h1>
                  <h2 class="text-xl">{{ $t("Enter Your Information") }}</h2>
                </div>
                <div>
                  <form @submit.prevent="registerSubmit">
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-1">
                        <label
                          for="email"
                          class="px-1 text-lg  font-semibold"
                          >{{ $t("Email") }}</label
                        >
                        <div class="flex mt-1">
                          <div
                            class="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none"
                          >
                            <i
                              class="text-lg  text-main-400 fa fa-mail-bulk"
                            ></i>
                          </div>
                          <input
                            v-model="registerCredentials.emailAddress"
                            required
                            name="email"
                            type="email"
                            class="w-full py-2 pl-10 pr-3 -ml-10 border-2 text-main-400 border-gray-200 rounded-lg outline-none focus:border-indigo-500"
                            placeholder="abebe@example.com"
                          />
                        </div>
                        <span class="ml-4 text-red-300">{{
                          registerCredentialsErrors.email
                        }}</span>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <label
                          for="phone"
                          class="px-1 text-lg  font-semibold"
                          >{{ $t("Phone Number") }}</label
                        >
                        <div class="flex mt-1">
                          <div
                            class="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none"
                          >
                            <i class="text-lg  text-main-400  fa fa-phone"></i>
                          </div>
                          <input
                            name="phone"
                            required
                            type="number"
                            v-model="registerCredentials.phoneNumber"
                            class="w-full py-2 pl-10 pr-3 -ml-10 border-2  text-main-400 border-gray-200 rounded-lg outline-none focus:border-indigo-500"
                            placeholder="912345678"
                          />
                        </div>
                        <span class="text-xs"
                          >({{ $t("Area code for phone is not needed") }})</span
                        >
                        <div
                          v-if="showOtp"
                          class="flex justify-center w-full p-1 mt-2 mb-4 border rounded-md cursor-pointer bg-main-400 sm:w-10/12"
                          @click="sendSmsOtp()"
                        >
                          <i class="mt-2 text-white fa fa-paper-plane"></i
                          ><span class="ml-4 font-bold text-white"
                            >Send OTP</span
                          >
                        </div>

                        <div
                          v-if="showOtp"
                          id="phoneError"
                          class="mt-1 text-xs text-red-300"
                          style="display: none"
                        ></div>
                        <div
                          v-if="showOtp"
                          id="validPhone"
                          class="mt-1 text-xs text-green-200"
                          style="display: none"
                        ></div>
                        <!-- <div v-if="!showOtp" class="mt-1 text-xs text-green-200">
                Phone is verified
              </div> -->
                        <span
                          v-if="enableVerification"
                          class="mt-2 text-sm text-main-400"
                        >
                          Verify Phone Number</span
                        >
                        <form
                          v-if="enableVerification"
                          action=""
                          class="w-full"
                        >
                          <input
                            class="otp"
                            id="opt1"
                            type="text"
                            maxlength="1"
                            v-model="otpInput.one"
                          />
                          <input
                            class="otp"
                            id="opt2"
                            type="text"
                            maxlength="1"
                            v-model="otpInput.two"
                          />
                          <input
                            class="otp"
                            id="opt3"
                            type="text"
                            maxlength="1"
                            v-model="otpInput.three"
                          />
                          <input
                            class="otp"
                            id="opt4"
                            type="text"
                            maxlength="1"
                            v-model="otpInput.four"
                          />
                          <input
                            id="opt5"
                            class="otp"
                            type="text"
                            maxlength="1"
                            v-model="otpInput.five"
                          />
                          <input
                            class="otp"
                            id="opt6"
                            type="text"
                            maxlength="1"
                            :onkeyup="tabChange()"
                            v-model="otpInput.six"
                          />

                          <span
                            :class="
                              enableVerification
                                ? 'bg-main-400 cursor-pointer p-1 rounded-md'
                                : 'bg-grey-200 pointer-events-none p-1 rounded-md'
                            "
                            @click="enableVerification ? verifySmsOtp() : ''"
                          >
                            <i class="mt-2 text-white fa fa-check"></i
                          ></span>
                        </form>
                        <br />
                        <span class="text-red-300">{{
                          registerCredentialsErrors.phoneNumber
                            ? registerCredentialsErrors.phoneNumber
                            : ""
                        }}</span>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-3">
                        <label
                          for="password"
                          class="px-1 text-lg  font-semibold"
                          >{{ $t("Password") }}</label
                        >
                        <div class="flex mt-1">
                          <div
                            class="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none"
                          >
                            <i class="text-lg text-main-400 fa fa-lock"></i>
                          </div>
                          <input
                            type="password"
                            required
                            id="registerpassword"
                            name="password"
                            v-model="registerCredentials.password"
                            placeholder="************"
                            :disabled="isVerified == false"
                            v-on:keyup="
                              showPasswordStrength(registerCredentials.password)
                            "
                            :class="
                              !isVerified
                                ? 'bg-grey-200 text-main-400 w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-500'
                                : 'text-main-400 w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-500'
                            "
                          />
                        </div>
                        <span v-if="showOtp" class="text-xs text-main-400"
                          >Please verify your phone first</span
                        >
                        <span class="text-sm text-red-300">{{
                          registerCredentialsErrors.password
                        }}</span>
                        <div class="ml-4">
                          <password-meter
                            :password="registerCredentials.password"
                          />
                          <div v-if="passwordStrengthDisplay">
                            <ul class="text-sm">
                              {{
                                $t("Password should be:")
                              }}
                              <div class="pl-4 ml-8">
                                <li class=" ">
                                  {{ $t("Minimum of eight Characters") }}
                                </li>
                                <li class=" ">
                                  {{ $t("At least one uppercase Character") }}
                                </li>
                                <li class="">
                                  {{ $t("At least one lowercase Character") }}
                                </li>
                                <li class="">
                                  {{ $t("At least one number") }}
                                </li>
                                <li class="">
                                  {{ $t("At least one special character") }}
                                </li>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-12">
                        <label
                          for="repassword"
                          class="px-1 text-lg   font-semibold"
                          >{{ $t("Re-type Password") }}</label
                        >
                        <div class="flex mt-1">
                          <div
                            class="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none"
                          >
                            <i class="text-lg text-main-400 fa fa-lock"></i>
                          </div>
                          <input
                            required
                            type="password"
                            id="repassword"
                            name="repassword"
                            :disabled="isVerified == false"
                            v-model="registerCredentials.repassword"
                            :class="
                              !isVerified
                                ? 'w-full  pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none  bg-grey-200 text-main-400'
                                : 'w-full  pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none text-main-400 '
                            "
                            class=""
                            placeholder="************"
                          />
                        </div>
                        <span class="mt-2 text-sm text-red-300">{{
                          registerCredentialsErrors.repassword
                        }}</span>

                        <div class="mt-2">
                          <password-meter
                            :password="registerCredentials.repassword"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-5">
                        <button
                          :class="
                            isLoading == false &&
                            registerCredentials.repassword ==
                              registerCredentials.password
                              ? 'transition duration-200 bg-main-400 text-white hover:text-main-400 hover:bg-white w-full mb-4 h-12 rounded-md text-md font-semibold text-center  '
                              : 'pointer-events-none transition duration-200 bg-grey-200 text-white hover:text-main-400 hover:bg-white w-full mb-4 h-12 rounded-md text-md font-semibold text-center  '
                          "
                        >
                          {{ $t("REGISTER NOW") }}
                        </button>
                      </div>
                    </div>
                  </form>
                  <div class="flex justify-center">
                    <a
                      class="text-xl cursor-pointer   hover:underline"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      >{{ $t("Already have an account? Log in") }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Of Registration Part -->
</template>
<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import { useToast } from "vue-toastification";
import PasswordMeter from "vue-simple-password-meter";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  components: { PasswordMeter, Loading },
  props: ["isDarkMode"],
  setup() {
    const store = useStore();
    const toast = useToast();
    let show = ref(false);
    let isLoading = ref(false);
    let isVerified = ref(true);
    let enableVerification = ref(false);
    let showLoading = ref(false);
    let showOtp = ref(false);
    let showVerificationButton = ref(true);
    let otpInput = ref({
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
    });

    const tabChange = () => {
      if (
        otpInput.value &&
        otpInput.value.six != "" &&
        otpInput.value.five != "" &&
        otpInput.value.four != "" &&
        otpInput.value.three != "" &&
        otpInput.value.two != "" &&
        otpInput.value.one != ""
      ) {
        enableVerification.value = true;
      }
    };

    const verifySmsOtp = () => {
      let otpData = {
        otp:
          otpInput.value.one +
          otpInput.value.two +
          otpInput.value.three +
          otpInput.value.four +
          otpInput.value.five +
          otpInput.value.six,
        phone: registerCredentials.value.phoneNumber,
        hash: localStorage.getItem("secretOtp"),
      };

      if (otpData && otpData.phone.length == 9) {
        store
          .dispatch("sms/verifySmsOtp", otpData)
          .then((res) => {
            if (res && res.status == "Success" && res.data == true) {
              showOtp.value = false;
              isVerified.value = true;
              localStorage.removeItem("secretOtp");
            } else {
              toast.error("Verification failed, please try again", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
            }
          })
          .catch((err) => console.log(err));
      } else {
        toast.error("Phone number digit must be 9", {
          timeout: 5000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true,
        });
      }
    };

    const sendSmsOtp = () => {
      let phone = registerCredentials.value
        ? registerCredentials.value.phoneNumber
        : "";

      if (phone.length == 9) {
        store
          .dispatch("sms/sendSmsOtp", { phone: phone })
          .then((res) => {
            if (res && res.status == "Success") {
              enableVerification.value = true;
              localStorage.setItem(
                "secretOtp",
                JSON.stringify(res.data.fullHash)
              );
            } else {
              toast.error("Service error, please try again", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
            }
          })
          .catch((err) => console.log(err));
      } else {
        toast.error("Phone number digit must be 9", {
          timeout: 5000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true,
        });
      }
    };

    let phoneError = ref(false);
    const registerCredentials = ref({
      emailAddress: "",
      phoneNumber: "",
      password: "",
      repassword: "",
    });
    const password = ref("");
    const passwordStrengthDisplay = ref(false);
    const registerCredentialsErrors = ref({});

    const showPasswordStrength = (password) => {
      if (password != "") {
        passwordStrengthDisplay.value = true;
      } else {
        passwordStrengthDisplay.value = false;
      }
    };
    const registerSubmit = () => {
      show.value = true;

      let signup = {
        emailAddress: registerCredentials.value.emailAddress.toLowerCase(),
        phoneNumber: +registerCredentials.value.phoneNumber,
        password: registerCredentials.value.password,
      };

      registerCredentialsErrors.value = {};
      if (!validateRegisterForm(registerCredentials.value)) {
        isLoading.value = true;
        if (registerCredentials.value.phoneNumber.toString().length != 9) {
          phoneError.value = true;
          isLoading.value = false;
          toast.warning(
            "Please correct phone number format (phone number length must be 9)",
            {
              timeout: 10000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            }
          );
          return;
        }
        let smsData = {
          recipients: [
            registerCredentials.value.phoneNumber
              ? "251" + registerCredentials.value.phoneNumber
              : "",
          ],
          message:
            "Dear applicant you have successfully registered on eHPL for your license/s, please complete the process of creating your account by loging in to your account using the credentials you entered previously and fill remaining data, Thank you for using eHPL.",
        };

        store.dispatch("user/signUp", signup).then((res) => {
          if (res.data.status == "Error") {
            show.value = false;
            toast.error(
              "User with this email exists, please change your email",
              {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              }
            );
            isLoading.value = false;
          } else if (res.data.status == "Success") {
            show.value = false;
            isLoading.value = false;
            store.dispatch("sms/sendSms", smsData).then(() => {
              toast.success("Registered Successfully", {
                timeout: 1000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              setTimeout(() => {
                location.reload();
              }, 1000);
            });
          } else {
            show.value = false;
            toast.error(
              "The email is already registered, please change email",
              {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              }
            );
          }
        });
      }
    };
    const isEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };
    const validateRegisterForm = (formData) => {
      if (formData.emailAddress && !isEmail(formData.emailAddress)) {
        registerCredentialsErrors.value.email = "Invalid Email";
      }
      if (formData.password !== formData.repassword) {
        registerCredentialsErrors.value.repassword = "Passwords don't match";
      }

      if (Object.keys(registerCredentialsErrors.value).length == 0)
        return false;
      return true;
    };

    onMounted(() => {});

    return {
      tabChange,
      sendSmsOtp,
      show,
      otpInput,
      enableVerification,
      showLoading,
      registerCredentials,
      registerCredentialsErrors,
      registerSubmit,
      validateRegisterForm,
      password,
      showOtp,
      showVerificationButton,
      phoneError,
      isVerified,
      isLoading,
      verifySmsOtp,
      showPasswordStrength,
      passwordStrengthDisplay,
    };
  },
};
</script>
<style scoped>
.otp {
  display: inline-block;
  width: 43px;
  height: 43px;
  margin: 5px;
  text-align: center;
  color: #c5c5c5;
}
</style>
