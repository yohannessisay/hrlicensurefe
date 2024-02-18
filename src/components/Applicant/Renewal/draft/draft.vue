<template>
  <div>
    <ApplicationsList
      :path="path"
      :link="'renewal/getRenewalLicense'"
      :status="status"
      :editSubmittedLink="'/Applicant/Renewal/draft/detail/'"
      :detailModalLink="'renewal/getRenewalApplication'"
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
      { name: "Renewal", link: "/Applicant/Renewal" },
      { name: "Draft", link: "/Applicant/Renewal" },
    ]);

    return {
      path,
      status,
    };
  },
};
</script>
