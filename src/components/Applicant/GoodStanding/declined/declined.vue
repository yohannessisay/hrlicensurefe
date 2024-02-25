<template>
  <div>
    <ApplicationsList
      :finalUrl="'goodstanding'"
      :path="path"
      :link="'goodstanding/getGoodStandingLicense'"
      :status="status"
      :detailModalLink="'goodstanding/getGoodStandingLicenseById'"
      :detailPageName="'Declined'"
    ></ApplicationsList>
  </div>
</template>
<script>
import { ref } from "vue";
import ApplicationsList from "../../Shared/Application/ApplicationsList.vue";

export default {
  components: { ApplicationsList },
  setup() {
    let status = ref(["DEC"]);
    const path = ref([
      { name: "Home", link: "/menu" },
      { name: "GoodStanding", link: "/Applicant/GoodStanding" },
      { name: "Declined", link: "/Applicant/GoodStanding" },
    ]);
    return {
      path,
      status,
    };
  },
};
</script>
