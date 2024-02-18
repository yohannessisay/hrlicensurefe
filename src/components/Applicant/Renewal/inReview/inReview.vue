<template>
  <div>
    <ApplicationsList
      :path="path"
      :link="'renewal/getRenewalLicense'"
      :status="status"
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
    let status = ref(["IRV"]);
    const path = ref([
      { name: "Home", link: "/menu" },
      { name: "Renewal", link: "/Applicant/Renewal" },
      { name: "In Review", link: "/Applicant/Renewal" },
    ]);

    return {
      path,
      status,
    };
  },
};
</script>
