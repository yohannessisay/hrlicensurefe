<template>
  <div
    class="w-screen h-screen bg-lightBlue-100 flex items-center justify-center"
  >
    <NewProfile />
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
