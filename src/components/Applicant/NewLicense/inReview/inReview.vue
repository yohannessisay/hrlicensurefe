<template>
  <div>
    <ApplicationsList
      :finalUrl="'newLicense'"
      :path="path"
      :link="'newlicense/getNewLicenseByUser'"
      :status="status"
      :detailModalLink="'newlicense/getNewLicenseApplication'"
        :detailPageName="'In Review'"
    ></ApplicationsList>
  </div>
</template>
  
<script>
import { ref } from "vue";
import ApplicationsList from "../../Shared/Application/ApplicationsList.vue";

export default {
  components: { ApplicationsList },
  setup() {
    let status = ref(["IRV"]);
    const path = ref([
      { name: "Home", link: "/menu" },
      { name: "New License", link: "/Applicant/NewLicense" },
      { name: "In Review", link: "/Applicant/NewLicense" },
    ]);

    return {
      path,
      status,
    };
  },
};
</script>
