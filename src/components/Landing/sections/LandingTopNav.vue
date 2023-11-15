<template>
  <section class="fixed top-0 z-50 w-full bg-white px-tiny sm:px-small glass">
    <div class="grid grid-cols-5 mt-2 sm:mt-0">
      <div
        class="flex items-center justify-center col-span-5 sm:col-span-2 border-b sm:border-none sm:-ml-24 mb-2"
      >
        <RenderIllustration illustration="Logo" class="hidden sm:block" />
        <h3
          class="ml-4 text-main-400 text-sm md:text-lg lg:text-2xl mdlg:text-2xl sm:mt-0"
        >
          eHPEL - License
        </h3>
      </div>
      <span
        class="mdlg:mt-1 mb-2 rounded-lg cursor-pointer col-span-5 sm:col-span-1 flex items-center justify-center"
        data-bs-toggle="modal"
        data-bs-target="#showHelp"
      >
        <h4
          class="font-bold text-main-400 border p-2 rounded-md text-sm md:text-lg lg:text-2xl mdlg:text-2xl mt-1 sm:mt-0 hover:bg-main-400 hover:text-white"
        >
          How to apply?
        </h4>
      </span>
      <button
        class="col-span-5 sm:col-span-1 mb-2 w-full sm:w-1/2 sm:mt-3 bg-white text-main-400 font-medium border text-base leading-tight rounded hover:text-white hover:border-main-400 hover:bg-main-400 transition duration-150 ease-in-out"
        data-bs-toggle="modal"
        data-bs-target="#register"
      >
        <i class="fa fa-address-card"></i> Sign Up
      </button>
      <button
        type="button"
        class="col-span-5 sm:col-span-1 w-full sm:mt-3 sm:w-1/2 mb-2 py-2.5 bg-main-400 text-white font-medium text-base leading-tight rounded-md hover:text-main-400 hover:border-main-400 hover:bg-white transition duration-150 ease-in-out"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <i class="fa fa-sign-in"></i> Log In
      </button>
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
            Download Video (21.3 MB)
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
              This is a demo video showing you how to use the system if you are new here.
              Thanks for watching.
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
  <Register></Register>
  <Login></Login>
  <!--End Of Help Part -->
</template>
<script>
import RenderIllustration from "@/sharedComponents/RenderIllustration";
import Register from "./Register.vue";
import Login from "./Login.vue";
import { useStore } from "vuex";
import { onMounted } from "vue";
import { useToast } from "vue-toastification";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  components: {
    RenderIllustration,
    Register,
    Login,
  },
  emits: ["setShowLogin", "setShowSignup"],
  setup() {
    const store = useStore();
    const toast = useToast();
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
            toast.error("Please check permission of site or your download manager", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
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

    onMounted(() => {});

    return {
      downloadHelpVideo,
      options,
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
</style>
