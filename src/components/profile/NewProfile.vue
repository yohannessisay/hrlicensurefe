<template>
  <PersonalInfo v-if="showPersonalInfo == true" />

  <AddressInfo v-if="showAddressInfo == true" />

  <ContactInfo v-if="showAddressInfo == true" />

  <Preview v-if="showAddressInfo == true" />
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
