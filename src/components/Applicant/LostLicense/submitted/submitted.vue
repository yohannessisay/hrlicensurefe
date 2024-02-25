<template>
  <div>
    <ApplicationsList
      :finalUrl="'lostLicense'"
      :path="path"
      :link="'lostLicenses/getLostLicense'"
      :status="status"
      :detailModalLink="'lostLicenses/getLostLicenseById'"
      :editSubmittedLink="'/Applicant/LostLicense/submitted/detail/'"
      :detailPageName="'Submitted'"
    ></ApplicationsList>
  </div>
</template>

<script>
import { ref } from "vue";
import ApplicationsList from "../../Shared/Application/ApplicationsList.vue";
export default {
  components: { ApplicationsList },
  setup() {
    let status = ref(["UPD", "SUB"]);
    const path = ref([
      { name: "Home", link: "/menu" },
      { name: "LostLicense", link: "/Applicant/LostLicense" },
      { name: "Submitted", link: "/Applicant/LostLicense" },
    ]);

    return {
      status,
      path,
    };
  },
};
</script>
