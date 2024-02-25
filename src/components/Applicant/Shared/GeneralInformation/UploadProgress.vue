<template>
  <div class="modal-mask h-screen p-1">
    <div class="modal-wrapper">
      <div
        :class="
          isDarkMode
            ? 'modal-container sm:w-1/2 w-11/12 bg-primaryDark text-primary-200'
            : 'modal-container sm:w-1/2 w-11/12 bg-white text-main-400'
        "
      >
        <div class="modal-header">
          <h2 class="text-xl border-b-4">{{ $t("Uploading") }}</h2>
        </div>

        <div class="modal-body">
          <div class="flex justify-center text-yellow-300 p-2 rounded-md">
            <h2 class="text-yellow-300 border rounded p-2 text-xl">
              {{ $t("Total file size you have uploaded so far is") }}
              <h2 class="text-2xl">{{ totalSize }} MB</h2>
            </h2>
          </div>
          <div class="flex justify-center">
            <RadialProgress
              :diameter="200"
              :completed-steps="progress"
              :total-steps="totalSteps"
            >
              <h1 class="text-3xl font-bold">{{ progress }} %</h1>
            </RadialProgress>
          </div>
          <div>
            <div
              class="flex border justify-center text-yellow-300 p-2 rounded-md"
            >
              <h2 class="text-xl">
                Please wait patiently as your files are being uploaded, if for
                any reason the files you uploaded are not successful you will be
                redirected to the submitted page automatically so you can
                re-attach your documents again{{ $t("Document Type") }}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RadialProgress from "vue3-radial-progress";
export default {
  components: { RadialProgress },
  props: ["progress", "isDarkMode", "totalSteps", "totalSize"],
};
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
  padding: 20px 30px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>