<template>
  <div>
    <ReviewerNavBar tab="Unfinished" />
    <div class="bg-lightBlueB-200 h-full">
      <div class="flex pl-12 pt-tiny">
        <Title message="Unfinished" />
      </div>
      <div class="flex flex-wrap pb-medium rounded h-full" v-if="!showLoading">
        <nothing-to-show :nothingToShow="nothingToShowUnfinished" />
        <my-unfinished :unFinishedSearched="getUnfinished" />
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
import MyUnfinished from "./HomeComponents/MyUnfinished.vue";
import NothingToShow from "./ChildComponents/NothingToShow.vue";
import { useStore } from "vuex";

import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";

import store from '../../store'
import Spinner from "@/sharedComponents/Spinner";
import moment from 'moment'

export default {
  components: { ReviewerNavBar,
             Title, Spinner,
             MyUnfinished, NothingToShow },
  computed: {
    moment: () => moment,
    getUnfinished() {
      return store.getters['reviewer/getUnfinishedSearched'];
    }
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    let unfinished = ref({});
    let x = ref([]);
    let userId = +localStorage.getItem("adminId");
    let nothingToShowUnfinished = ref(false);
    let showLoading = ref(false);

    const fetchUnfinished = () => {
      showLoading.value = true
      store.dispatch("reviewer/getUnfinished", userId).then(res => {
        showLoading.value = false
          unfinished.value = store.getters['reviewer/getUnfinishedSearched'];
        if(store.getters['reviewer/getUnfinished'].length !== 0) {
          for (var prop in store.getters['reviewer/getUnfinishedSearched']) {
            if (store.getters['reviewer/getUnfinishedSearched'][prop].applicationType == "Renewal") {
              store.getters['reviewer/getUnfinishedSearched'][prop].newLicenseCode =
                store.getters['reviewer/getUnfinishedSearched'][prop].renewalCode;
            }
            if (store.getters['reviewer/getUnfinishedSearched'][prop].applicationType == "Good Standing") {
              store.getters['reviewer/getUnfinishedSearched'][prop].newLicenseCode =
                store.getters['reviewer/getUnfinishedSearched'][prop].goodStandingCode;
            }
            if (store.getters['reviewer/getUnfinishedSearched'][prop].applicationType == "Verification") {
              store.getters['reviewer/getUnfinishedSearched'][prop].newLicenseCode =
                store.getters['reviewer/getUnfinishedSearched'][prop].verificationCode;
            }
          }
        } else {
          nothingToShowUnfinished.value = true;
        }
      });
    };

    const detail = (data, applicationType, applicationId, applicantId) => {
      const url =
        data + "/" + applicationType + "/" + applicationId + "/" + applicantId;
      router.push(url);
    };

    onMounted(() => {
      fetchUnfinished();
    });

    return {
      unfinished,
      detail,
      nothingToShowUnfinished,
      showLoading,
    };
  }
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
