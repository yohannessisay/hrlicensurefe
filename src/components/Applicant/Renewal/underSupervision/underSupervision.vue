<template>
  <div>
    <ApplicationsList
    :finalUrl="'renewal'"
      :path="path"
      :link="'renewal/getRenewalLicense'"
      :status="status"
      :detailModalLink="'renewal/getRenewalApplication'"
      :detailPageName="'Under Supervision'"
    ></ApplicationsList>
  </div>
</template>
  
<script>
import { ref } from "vue";
import ApplicationsList from "../../Shared/Application/ApplicationsList.vue";

export default {
  components: { ApplicationsList },
  setup() {
    let status = ref(["USUP"]);
    const path = ref([
      { name: "Home", link: "/menu" },
      { name: "Renewal", link: "/Applicant/Renewal" },
      { name: "Under Supervision", link: "/Applicant/Renewal" },
    ]);

    return {
      path,
      status,
    };
  },
};
</script>
