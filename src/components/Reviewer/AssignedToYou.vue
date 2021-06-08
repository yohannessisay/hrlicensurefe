<template>
  <div>
    <ReviewerNavBar tab="AssignedToYou" />
    <div class="bg-lightBlueB-200 h-full">
      <div class="flex pl-12 pt-tiny">
        <Title message="Assigned To You" />
      </div>
      <div class="flex flex-wrap pb-medium rounded h-full" v-if="!showLoading">
        <nothing-to-show :nothingToShow="nothingToShow" />
        <my-assigned :assignedToMe = "getAssignedToYou" />
      </div>
    </div>
    <div
      v-if="showLoading"
      class="flex justify-center justify-items-center mt-24"
    >
      <Spinner />
    </div>
  </div>
</template>

<script>
import Title from "@/sharedComponents/TitleWithIllustration";
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import NothingToShow from "@/components/Reviewer/ChildComponents/NothingToShow";
import MyAssigned from "@/components/Reviewer/ChildComponents/MyAssigned";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { ref, onMounted } from "vue";
import store from "../../store";
import Spinner from "@/sharedComponents/Spinner";
import moment from "moment";

export default {
  components: { ReviewerNavBar, 
              Title, Spinner,
              NothingToShow,
              MyAssigned },
  computed: {
    moment: () => moment,
    getAssignedToYou() {
      return store.getters["reviewer/getAssignedToYouSearched"];
    },
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    let assignedToyou = ref({});
    let nothingToShow = ref(false);
    let x = ref("");
    let userId = +localStorage.getItem("userId");
    let adminId = +localStorage.getItem("adminId");
    let showLoading = ref(false);

    const fetchAssignedtoYou = () => {
      showLoading.value = true;
      store.dispatch("reviewer/getAssignedToYou", adminId).then((res) => {
        showLoading.value = false;
        // if (res.status != "Error") {
        assignedToyou.value =
          store.getters["reviewer/getAssignedToYouSearched"];
        if (assignedToyou.value.length !== 0) {
          for (var prop in store.getters["reviewer/getAssignedToYouSearched"]) {
            if (
              store.getters["reviewer/getAssignedToYouSearched"][prop]
                .applicationType == "Renewal"
            ) {
              store.getters["reviewer/getAssignedToYouSearched"][
                prop
              ].newLicenseCode =
                store.getters["reviewer/getAssignedToYouSearched"][
                  prop
                ].renewalCode;
            }
            if (
              store.getters["reviewer/getAssignedToYouSearched"][prop]
                .applicationType == "Good Standing"
            ) {
              store.getters["reviewer/getAssignedToYouSearched"][
                prop
              ].newLicenseCode =
                store.getters["reviewer/getAssignedToYouSearched"][
                  prop
                ].goodStandingCode;
            }
            if (
              store.getters["reviewer/getAssignedToYouSearched"][prop]
                .applicationType == "Verification"
            ) {
              store.getters["reviewer/getAssignedToYouSearched"][
                prop
              ].newLicenseCode =
                store.getters["reviewer/getAssignedToYouSearched"][
                  prop
                ].verificationCode;
            }
          }
        } else {
          nothingToShow.value = true;
        }
      });
    };

    const detail = (data, applicationType, applicationId, applicantId) => {
      const url =
        data + "/" + applicationType + "/" + applicationId + "/" + applicantId;
      router.push(url);
    };

    onMounted(() => {
      fetchAssignedtoYou();
    });

    return {
      assignedToyou,
      nothingToShow,
      detail,
      showLoading,
    };
  },
};
</script>
<style scoped>
img {
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 80px;
  height: 80px;
  border-color: steelblue;
  background-color: steelblue;
}
.container {
  cursor: pointer;
}
</style>
