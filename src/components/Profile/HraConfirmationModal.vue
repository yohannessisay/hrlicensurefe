<template>
  <div class="   card-wrapper
      max-w-4xl
      bg-white 
      p-4
      mb-4 
      justify-center
  
      relative
  
    
      shadow-md">
    <h2 class="text-main-400 font-bold text-base">
      The Human resource administration system (HRA) for the Ministry of health is a
      system developed for managing and keeping record of employee data, if you
      have previously registered by your self or by your institution you may
      click on YES button and fetch your data from HRA
    </h2>
    OR
    <h2 class="text-main-400 font-bold text-base">
   You can click on NO and fill out your profile as new
    </h2>
  </div>
  <div
    class="
      card-wrapper
      max-w-4xl
      bg-white
      sm:rounded-lg
      p-large
      flex flex-row
      justify-center
      items-center
      relative
      pt-8
      pb-8
      shadow-lg
    "
  >
    <div id="holder" class="flex justify-center rounded mb-medium pb-4">
      <div>
        <div class="flex flex-col pt-medium rounded mb-medium w-72">
          <div class="text-center">
            <span class="text-lg">
              <h2><b>Did You Register On HRA Before ?</b></h2>
            </span>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <button
            class="
            inline-block
              px-6
              py-2.5
              bg-primary-600
              hover:text-primary-600
              hover:border 
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-lg
              transition
              duration-150
              ease-in-out
            "
            @click="$emit('approvalModal', 1)"
            type="button"
          >
            Yes
          </button>
          <button
            class="
              inline-block
              px-6
              py-2.5
              bg-main-400
              hover:text-main-400 hover:border
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-lg
              transition
              duration-150
              ease-in-out
            "
            @click="$emit('approvalModal', 2)"
            type="button"
          >
            No
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  components: {},
  setup() {

    onMounted(() => {});
    return {};
  },
};
</script>
<style>
.card-wrapper {
  width: auto;
  height: auto;
}
#holder {
  width: auto;
  height: auto;
}
.photoFile {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 260px;
  position: absolute;
  cursor: pointer;
  border-radius: 0%;
}
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}

img {
  width: 250px;
  height: 250px;
  border-radius: 0px;
}
.withdraw {
  background-image: linear-gradient(to right, #d63232, #e63636) !important;
  color: white;
  border-color: tomato;
}
.close-svg {
  width: 16px;
}
</style>
