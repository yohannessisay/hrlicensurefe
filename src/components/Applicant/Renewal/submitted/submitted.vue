<template>
  <div>
    <ApplicationsList
    :finalUrl="'renewal'"
      :path="path"
      :link="'renewal/getRenewalLicense'"
      :status="status"
      :detailModalLink="'renewal/getRenewalApplication'"
      :editSubmittedLink="'/Applicant/Renewal/submitted/detail/'"
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
      { name: "Renewal", link: "/Applicant/Renewal" },
      { name: "Submitted", link: "/Applicant/Renewal" },
    ]);

    return {
      path,
      status,
    };
  },
};
</script>
