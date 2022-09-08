<template>
  <div
    class="
      modal
      fade
      fixed
      top-0
      left-0
      hidden
      w-full
      h-full
      outline-none
      overflow-x-hidden overflow-y-auto
    "
    id="filePreview"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="filePreviewLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog max-w-sm max p-5 relative w-auto pointer-events-none">
      <div
        class="
          modal-content
          border-none
          shadow-lg
          relative
          flex flex-col
          w-full
          pointer-events-auto
          bg-white bg-clip-padding
          rounded-md
          outline-none
          text-current
        "
      >
        <div
          class="
            modal-header
            flex flex-shrink-0
            items-center
            justify-between
            p-2
            rounded-t-md
          
          "
        >
        <h4>{{modalData?modalData.name:''}}</h4>
          <button
            type="button"
            class="btn-close border-none rounded-lg hover:text-primary-400"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div v-if="modalData && modalData?.isImage" class="  ml-5 mb-2">
          <img 
            v-bind:src="modalData && modalData.file ? modalData.file : ''"
          />
        </div>
         <div v-if="modalData && modalData?.isPdf" class="  ml-5 mb-2">
          <embed 
            v-bind:src="modalData && modalData.file ? modalData.file : ''"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["modalData"],

  setup(props) {
    let dataFromProps = props;
  },
};
</script>
<style></style>
