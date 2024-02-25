<template>
  <div>
    <ApplicationsList
      :finalUrl="'lostLicense'"
      :path="path"
      :link="'lostLicenses/getLostLicense'"
      :status="status"
      :detailModalLink="'lostLicenses/getLostLicenseById'"
      :detailPageName="'Declined'"
    ></ApplicationsList>
  </div>
</template>
<script>
import { ref } from "vue";
import ApplicationsList from "../../Shared/Application/ApplicationsList.vue";

export default {
  components: { ApplicationsList },
  setup() {
    let status = ref(["DEC"]);
    const path = ref([
      { name: "Home", link: "/menu" },
      { name: "LostLicense", link: "/Applicant/LostLicense" },
      { name: "Declined", link: "/Applicant/LostLicense" },
    ]);
    return {
      path,
      status,
    };
  },
};
</script>
