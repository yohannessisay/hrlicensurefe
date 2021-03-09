<template>
  <div class="w-screen flex items-center justify-center">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
  <!-- <PersonalInfo /> -->
  <!-- <AddressInfo /> -->
  <!-- <ContactInfo/> -->
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import PersonalInfo from "@/components/PersonalInfo.vue";
import AddressInfo from "@/components/AddressInfo.vue";
import ContactInfo from "@/components/ContactInfo.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    PersonalInfo,
    AddressInfo,
    ContactInfo
  }
};
</script>
