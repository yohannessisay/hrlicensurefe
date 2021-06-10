<template>
  <div class="flex pl-12 pt-tiny">
    <Title message="Evaluate Review" />
  </div>
  <div class="flex flex-wrap pb-medium rounded h-full" v-if="!showLoading">
    <nothing-to-show :nothingToShow="nothingToShowevaluateApplication" />
    <evaluate-review :evaluateReview="getEvalauteReview" />
  </div>
  <div v-if="showLoading" class="flex justify-center justify-items-center">
        <Spinner />
      </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import moment from "moment";

import Spinner from "@/sharedComponents/Spinner";

import store from "../../../../store";
import Title from "@/sharedComponents/TitleWithIllustration";
import EvaluateReview from "@/components/Reviewer/ChildComponents/EvaluateApplication";
import NothingToShow from "@/components/Reviewer/ChildComponents/NothingToShow";

export default {
    computed: {
        moment: () => moment,
        getEvalauteReview() {
      return store.getters["reviewer/getEvaluateReviewerSearched"];
    },
    },
  components: {
      Spinner,
      Title,
    EvaluateReview,
    NothingToShow
  },
  name: "EvaluateApplicationContainer",
  setup() {
    const store = useStore();
    const router = useRouter();

    let evaluateApplication = ref({});
    let adminId = +localStorage.getItem("adminId");
    let nothingToShowevaluateApplication = ref(false);
    let showLoading = ref(false);

    const fetchevaluateApplication = () => {
      showLoading.value = true;
      store.dispatch("reviewer/getEvaluateReviewer", adminId).then((res) => {
        showLoading.value = false;
        evaluateApplication.value = store.getters["reviewer/getEvaluateReviewerSearched"];
        if (store.getters["reviewer/getEvaluateReviewerSearched"].length !== 0) {
          for (var prop in store.getters["reviewer/getEvaluateReviewerSearched"]) {
            if (evaluateApplication.value[prop].applicationType == "Renewal") {
              evaluateApplication.value[prop].newLicenseCode =
                evaluateApplication.value[prop].renewalCode;
            }
            if (evaluateApplication.value[prop].applicationType == "Good Standing") {
              evaluateApplication.value[prop].newLicenseCode =
                evaluateApplication.value[prop].goodStandingCode;
            }
            if (evaluateApplication.value[prop].applicationType == "Verification") {
              evaluateApplication.value[prop].newLicenseCode =
                evaluateApplication.value[prop].verificationCode;
            }
          }
        } else {
          nothingToShowevaluateApplication.value = true;
        }
      });
    };

    const detail = (data, applicationType, applicationId, applicantId) => {
      const url =
        data + "/" + applicationType + "/" + applicationId + "/" + applicantId;
      router.push(url);
    };

    onMounted(() => {
      fetchevaluateApplication();
    });

    return {
      evaluateApplication,
      detail,
      nothingToShowevaluateApplication,
      showLoading,
    };
  },
};
</script>
