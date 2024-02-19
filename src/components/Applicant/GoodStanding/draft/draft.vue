<template>
  <div>
    <ApplicationsList
      :path="path"
      :link="'goodstanding/getGoodStandingLicense'"
      :status="status"
      :detailModalLink="'goodstanding/getGoodStandingLicenseById'"
      :editSubmittedLink="'/Applicant/Goodstanding/draft/detail/'"
    ></ApplicationsList>
  </div>
</template>

<script>
import { ref } from "vue";
import ApplicationsList from "../../Shared/Application/ApplicationsList.vue";
export default {
  components: { ApplicationsList },
  setup() {
    let status = ref(["DRA"]);
    const path = ref([
      { name: "Home", link: "/menu" },
      { name: "Goodstanding", link: "/Applicant/Goodstanding" },
      { name: "Apply", link: "/Applicant/Goodstanding" },
    ]);

    return {
      status,
      path,
    };
  },
};
</script>
