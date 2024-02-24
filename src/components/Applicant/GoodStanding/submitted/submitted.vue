<template>
  <div>
    <ApplicationsList
      :finalUrl="'goodstanding'"
      :path="path"
      :link="'goodstanding/getGoodStandingLicense'"
      :status="status"
      :detailModalLink="'goodstanding/getGoodStandingLicenseById'"
      :editSubmittedLink="'/Applicant/Goodstanding/submitted/detail/'"
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
      { name: "Goodstanding", link: "/Applicant/Goodstanding" },
      { name: "Submitted", link: "/Applicant/Goodstanding" },
    ]);

    return {
      status,
      path,
    };
  },
};
</script>
