<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div
        :class="
          darkMode
            ? 'modal-container sm:w-1/2 w-11/12 bg-primaryDark text-primary-200'
            : 'modal-container sm:w-1/2 w-11/12 bg-white text-main-400'
        "
      >
        <div class="modal-header">
          <h2 class="text-xl border-b-4">
            
            <slot name="modalHeader"></slot>
          </h2>
        </div>

        <div class="modal-body">
          <slot name="modalBody"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue';
export default {
  props: ["isDarkMode"],
  setup(props) {
  let darkMode=computed(()=>props.isDarkMode);
  return{
    darkMode
  }
  },
};
</script>

<style>
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
  height: 90vh;
  overflow-y: scroll;
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
