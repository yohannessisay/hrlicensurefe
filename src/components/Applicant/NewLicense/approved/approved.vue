<template>
  <div>
    <ApplicationsList
     :finalUrl="'newLicense'"
      :path="path"
      :link="'newlicense/getNewLicenseByUser'"
      :status="status"
      :detailModalLink="'newlicense/getNewLicenseApplication'"
        :detailPageName="'Approved'"
    ></ApplicationsList>
  </div>
</template>
  
<script>
import { ref } from "vue";
import ApplicationsList from "../../Shared/Application/ApplicationsList.vue";

export default {
  components: { ApplicationsList },
  setup() {
    let status = ref(["APP"]);
    const path = ref([
      { name: "Home", link: "/menu" },
      { name: "New License", link: "/Applicant/NewLicense" },
      { name: "Approved", link: "/Applicant/NewLicense" },
    ]);

    return {
      path,
      status,
    };
  },
};
</script>
