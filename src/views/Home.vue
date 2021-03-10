<template>
  <div class="w-screen flex items-center justify-center">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
  <!-- <PersonalInfo /> -->
  <!-- <AddressInfo /> -->
  <!-- <ContactInfo/> -->
  <Preview/>
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
