<template>
  <div v-if="showPersonalInfo == true">
    <PersonalInfo />
  </div>
  <div v-if="showAddressInfo == true">
    <AddressInfo />
  </div>
  <div v-if="showContactInfo == true">
    <ContactInfo />
  </div>
 <div v-if="showPreview == true">
    <Preview />
 </div>

</template>

<script>
// @ is an alias to /src
import PersonalInfo from "@/components/profile/PersonalInfo.vue";
import AddressInfo from "@/components/profile/AddressInfo.vue";
import ContactInfo from "@/components/profile/ContactInfo.vue";
import Preview from "@/components/profile/Preview.vue";

export default {
  name: "NewProfile",
  data: () => ({
    showContactInfo: false,
    showPersonalInfo: true,
    showAddressInfo: false,
    showPreview: false
  }),
  components: {
    PersonalInfo,
    AddressInfo,
    ContactInfo,
    Preview
  }
};
</script>
