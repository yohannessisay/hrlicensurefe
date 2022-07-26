<template>
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
      shadow-2xl
    "
  >
    <div class="relative p-4 w-full max-w-7xl h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div
          style="overflow-x: auto; overflow-y: scroll"
          class="shadow-md rounded-lg min-w-full"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["editData"],
  data: function() {
    return {
      content: "",
      err: ""
    };
  },
  methods: {}
};
</script>
<style>
.card-wrapper {
  width: 1200px;
  height: auto;
}
#holder {
  width: 1200px;
  height: auto;
}
.max-w-4xl {
  max-width: 112rem;
}
</style>
