<template>
  <div
    class="   card-wrapper
      max-w-4xl
      bg-white 
      p-4
      mb-4 
      justify-center
      tracking-wide
      relative
       "
  >
    <div class="border p-4 rounded-md">
      <h2 class="text-main-400 font-bold text-xl  tracking-wide">
        Kindly note that if you are currently employed as a public servant and
        your information is already registered in the Ministry of Health Human
        Resource Administration (HRA) database through your health facility,
        please click on the "YES" button to fetch your data from the HRA
        database by providing your Employee ID and File Number.
      </h2>
      OR
      <h2 class="text-main-400 font-bold text-xl  tracking-wide">
        You can click on "NO" and fill out your profile as new
      </h2>
    </div>

    <div class="flex flex-col pt-medium rounded mb-medium w-72">
      <div class="text-center">
        <span class="text-lg">
          <h2 class="text-xl">
            Are you registed on HRA ( Human Resource Administration System )
            Before ?
          </h2>
        </span>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <button
        class="
            inline-block
              px-6
              py-2.5
              bg-white
              hover:text-white
              hover:bg-primary-600
              hover:text-white 
              text-primary-600
              border
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
               
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
<style></style>
