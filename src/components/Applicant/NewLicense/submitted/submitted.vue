<template>
  <div>
    <ApplicationsList
      :finalUrl="'newLicense'"
      :path="path"
      :link="'newlicense/getNewLicenseByUser'"
      :status="status"
      :editSubmittedLink="'/Applicant/NewLicense/submitted/detail/'"
      :detailModalLink="'newlicense/getNewLicenseApplication'"
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
      { name: "New License", link: "/Applicant/NewLicense" },
      { name: "Submitted", link: "/Applicant/NewLicense" },
    ]);

    return {
      path,
      status,
    };
  },
};
</script>
