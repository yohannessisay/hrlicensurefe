<template>
  <div
    class="w-screen h-screen bg-lightBlueB-200 flex items-center justify-center"
  >
    <!-- <NewProfile /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import NewProfile from "@/components/profile/NewProfile.vue";

export default {
  name: "Home",
  components: {
    NewProfile
  }
};
</script>
