<template>
  <section class="fixed top-0 z-50 w-full px-tiny sm:px-small glass shadow-md">
    <div class="grid grid-cols-1 mt-2 sm:mt-0 sm:grid-cols-7">
      <div
        class="flex justify-center sm:justify-start col-span-5 sm:col-span-4 border-b sm:border-none mb-2"
      >
        <RenderIllustration illustration="Logo" class="hidden sm:block" />
        <h1
          :class="
            isDarkMode
              ? 'ml-4 text-white text-xl sm:text-2xl mt-3'
              : 'ml-4 text-main-400 text-xl sm:text-2xl mt-3'
          "
        >
          eHPEL - License
        </h1>
      </div>
      <div class="col-span-5 sm:col-span-3">
        <div class="flex flex-wrap justify-content-evenly gap-2">
          <div class="sm:w-48 w-32 mb-3 mt-2  sm:mt-3 mr-1 ">
            <button
              class="py-2.5 bg-white transform hover:scale-110  w-full text-main-400 font-medium text-base leading-tight rounded-md hover:text-white hover:border-main-400 hover:bg-main-400 transition duration-150 ease-in-out"
              data-bs-toggle="modal"
              data-bs-target="#register"
            >
              <i class="fa fa-address-card"></i> {{ $t("Sign Up") }}
            </button>
          </div>
          <div class="sm:w-48 w-32 mb-3 mt-2 sm:mt-3 mr-2 sm:mr-1">
            <button
              type="button"
              class="py-2.5 transform hover:scale-110   bg-main-400 w-full text-white font-medium text-base leading-tight rounded-md hover:text-main-400 hover:border-main-400 hover:bg-white transition duration-150 ease-in-out"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <i class="fa fa-sign-in"></i> {{ $t("Log In") }}
            </button>
          </div>
          <div class="sm:w-8 justify-center mr-1 mt-2 sm:mt-3">
            <div
              class="dropdown mb-1 transition duration-300 ease-in-out mr-2 sm:mr-8"
            >
              <i
                class="fa fa-globe fa-lg mt-1 transform hover:scale-125 transition ease-in-out duration-300 cursor-pointer shadow-md p-2 rounded-md bg-primary-400 text-white"
              >
              </i>
              <span
                class="text-base ml-1"
                style="margin-top: -2px !important"
                >{{ locale ? locale.toUpperCase() : "" }}</span
              >
              <ul
                class="dropdown-menu -ml-12 w-32 absolute hidden p-2 mt-2 sm:mt-0 sm:w-40 text-gray-700 bg-main-400 sm:-ml-10 rounded-md shadow-md"
              >
                <li
                  @click="changeLocale('am')"
                  class="border-lightBlueB-500 border-b p-1 hover:text-yellow-300 rounded-t-md cursor-pointer"
                >
                  <div class="flex">
                    <svg
                      class="mt-2 mr-2"
                      width="20"
                      height="20"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 473.68 473.68"
                      style="enable-background: new 0 0 473.68 473.68"
                      xml:space="preserve"
                    >
                      <circle
                        style="fill: #ffffff"
                        cx="236.85"
                        cy="236.85"
                        r="236.83"
                      />
                      <path
                        style="fill: #d32027"
                        d="M326.532,314.868H13.219c0.079,0.221,0.15,0.445,0.228,0.673
		c32.452,92.102,120.19,158.135,223.387,158.135c7.173,0,14.263-0.352,21.274-0.98C294.514,452.743,317.336,389.338,326.532,314.868z"
                      />
                      <path
                        style="fill: #258f44"
                        d="M13.608,157.668c-0.026,0.067-0.049,0.131-0.075,0.206h312.879
		c-9.27-74.07-32.052-137.029-68.303-156.901C251.097,0.352,244.007,0,236.835,0C133.806,0,46.187,65.802,13.608,157.668z"
                      />
                      <path
                        style="fill: #f8d12e"
                        d="M0,236.842c0,27.348,4.693,53.588,13.219,78.026h313.313c6.256-50.66,6.215-106.402-0.12-156.995
		H13.534C4.798,182.573,0,209.139,0,236.842z"
                      />
                      <path
                        style="fill: #d32027"
                        d="M258.113,472.697c93.848-8.362,171.927-71.46,202.12-157.156c0.079-0.228,0.146-0.453,0.228-0.673
		h-146.12C305.145,389.338,294.514,452.743,258.113,472.697z"
                      />
                      <path
                        style="fill: #258f44"
                        d="M314.218,157.874H460.14c-0.026-0.075-0.049-0.138-0.075-0.206
		C429.752,72.2,351.785,9.319,258.105,0.972C294.361,20.844,304.947,83.804,314.218,157.874z"
                      />
                      <path
                        style="fill: #f8d12e"
                        d="M460.143,157.874H314.218c6.335,50.593,6.376,106.339,0.12,156.995h146.116
		c8.526-24.438,13.219-50.682,13.219-78.026C473.677,209.139,468.879,182.573,460.143,157.874z"
                      />
                    </svg>

                    <a
                      class="bg-gray-200 text-white py-2 block whitespace-no-wrap"
                      href="#"
                      >አማርኛ</a
                    >
                  </div>
                </li>
                <li
                  class="hover:text-yellow-300 rounded-b-md cursor-pointer p-1"
                  @click="changeLocale('en')"
                >
                  <div class="flex">
                    <svg
                      class="mr-2 mt-2"
                      width="20"
                      height="20"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      style="enable-background: new 0 0 512 512"
                      xml:space="preserve"
                    >
                      <circle style="fill: #f0f0f0" cx="256" cy="256" r="256" />
                      <g>
                        <path
                          style="fill: #d80027"
                          d="M244.87,256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256z"
                        />
                        <path
                          style="fill: #d80027"
                          d="M244.87,122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783H244.87V122.435z"
                        />
                        <path
                          style="fill: #d80027"
                          d="M256,512c60.249,0,115.626-20.824,159.356-55.652H96.644C140.374,491.176,195.751,512,256,512z"
                        />
                        <path
                          style="fill: #d80027"
                          d="M37.574,389.565h436.852c12.581-20.529,22.338-42.969,28.755-66.783H8.819
		C15.236,346.596,24.993,369.036,37.574,389.565z"
                        />
                      </g>
                      <path
                        style="fill: #0052b4"
                        d="M118.584,39.978h23.329l-21.7,15.765l8.289,25.509l-21.699-15.765L85.104,81.252l7.16-22.037
	C73.158,75.13,56.412,93.776,42.612,114.552h7.475l-13.813,10.035c-2.152,3.59-4.216,7.237-6.194,10.938l6.596,20.301l-12.306-8.941
	c-3.059,6.481-5.857,13.108-8.372,19.873l7.267,22.368h26.822l-21.7,15.765l8.289,25.509l-21.699-15.765l-12.998,9.444
	C0.678,234.537,0,245.189,0,256h256c0-141.384,0-158.052,0-256C205.428,0,158.285,14.67,118.584,39.978z M128.502,230.4
	l-21.699-15.765L85.104,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822l-21.7,15.765L128.502,230.4z
	 M120.213,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822
	L120.213,130.317z M220.328,230.4l-21.699-15.765L176.93,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822
	l-21.7,15.765L220.328,230.4z M212.039,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822
	l8.288-25.509l8.288,25.509h26.822L212.039,130.317z M212.039,55.743l8.289,25.509l-21.699-15.765L176.93,81.252l8.289-25.509
	l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822L212.039,55.743z"
                      />
                    </svg>

                    <a
                      class="bg-gray-200 text-white hover:bg-gray-400 py-2 block whitespace-no-wrap"
                      href="#"
                      >English</a
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <span
            class="mb-2 w-full sm:w-40 flex justify-center rounded-lg mt-2 transition ease-in-out duration-300 cursor-pointer"
            data-bs-toggle="modal"
            data-bs-target="#showHelp"
          >
            <h4
              :class="
                isDarkMode
                  ? 'font-bold border p-2 transform hover:scale-110  transition ease-in-out duration-300  text-white rounded-md sm:text-base text-sm mt-1 hover:bg-white hover:text-main-400'
                  : 'font-bold border p-2 transform hover:scale-110 transition ease-in-out duration-300 text-main-400 rounded-md sm:text-base text-sm mt-1 hover:bg-main-400 hover:text-white'
              "
            >
              {{ $t("How to apply?") }}
            </h4>
          </span>
        </div>
      </div>
    </div>
  </section>
  <!-- Help Part -->
  <div
    class="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade"
    id="showHelp"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="showHelpLabel"
    aria-hidden="true"
  >
    <div class="relative pointer-events-none modal-dialog modal-xl">
      <div
        class="relative flex flex-col w-full text-current bg-white border-none rounded-md outline-none pointer-events-auto modal-content md:w-9/12 mdlg:w-9/12 lg:w-10/12 sm:w-full bg-clip-padding"
      >
        <div
          class="flex items-center justify-center flex-shrink-0 p-4 border-b modal-header border-grey-100 rounded-t-md"
        >
          <button
            type="button"
            class="px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-yellow-300 rounded hover:bg-white hover:text-primary-700"
            @click="downloadHelpVideo()"
          >
            <i class="fa fa-download"></i>
            {{ $t("Download Video") }} (21.3 MB)
          </button>
          <button
            type="button"
            class="px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded bg-main-400 hover:border-main-400 hover:text-main-400 active:bg-purple-800 active:"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa fa-close fa-2x"></i>
          </button>
        </div>
        <div class="relative p-2 modal-body">
          <div class="flex justify-center">
            <h2 class="text-xl text-main-400">
              {{
                $t(
                  "This is a demo video showing you how to use the system if you are new here. Thanks for watching."
                )
              }}
            </h2>
          </div>
          <div class="container bg-secondaryDark">
            <vue3-video-player
              id="helpVideo"
              src="/template/help_video.mp4"
            ></vue3-video-player>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Register :isDarkMode="isDarkMode"></Register>
  <Login :isDarkMode="isDarkMode"></Login>
  <!--End Of Help Part -->
</template>
<script>
import RenderIllustration from "@/sharedComponents/RenderIllustration";
import Register from "./Register.vue";
import Login from "./Login.vue";
import { useStore } from "vuex";
import { onMounted, ref } from "vue";
import { useToast } from "vue-toastification";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { useI18n } from "vue-i18n";
export default {
  components: {
    RenderIllustration,
    Register,
    Login,
  },
  emits: ["setShowLogin", "setShowSignup"],
  props: ["isDarkMode"],
  setup() {
    const store = useStore();
    const toast = useToast();
    const i18n = useI18n();
    const locale = ref(JSON.parse(localStorage.getItem("locale")));
    let options = { quality: { default: "1080p" } };
    const downloadHelpVideo = () => {
      store
        .dispatch("user/downloadHelpVideo")
        .then((res) => {
          var fileURL = window.URL.createObjectURL(new Blob([res.data]));
          var fURL = document.createElement("a");

          fURL.href = fileURL;
          fURL.setAttribute("download", "file.mp4");
          document.body.appendChild(fURL);

          fURL.click();
          if (res.data.status === "Success") {
            toast.success("Download started", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
          } else {
            toast.error(
              "Please check permission of site or your download manager",
              {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              }
            );
          }
        })
        .catch(() => {
          toast.error("Server Error, please try again", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
        });
    };
    const changeLocale = (language) => {
      i18n.locale.value = language;
      locale.value = language;
      localStorage.setItem("locale", JSON.stringify(language));
    };
    onMounted(() => {});

    return {
      downloadHelpVideo,
      options,
      changeLocale,
      locale
    };
  },
};
</script>
<style lang="postcss" scoped>
.otp {
  display: inline-block;
  width: 43px;
  height: 43px;
  margin: 5px;
  text-align: center;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
