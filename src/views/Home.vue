<template>
  <div
    class="w-screen h-screen bg-lightBlue-100 flex items-center justify-center"
  >
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <PersonalInfo /> -->
    <AddressInfo />
    <!-- <ContactInfo /> -->
    <!-- <Preview /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import PersonalInfo from "@/components/profile/PersonalInfo.vue";
import AddressInfo from "@/components/profile/AddressInfo.vue";
import ContactInfo from "@/components/profile/ContactInfo.vue";
import Preview from "@/components/profile/Preview.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    PersonalInfo,
    AddressInfo,
    ContactInfo,
    Preview
  }
};
</script>
