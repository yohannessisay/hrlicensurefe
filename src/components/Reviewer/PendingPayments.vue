<template>
  <div>
    <ReviewerNavBar tab="myPendings" />
    <div class="bg-lightBlueB-200 h-full">
      <div class="flex pl-12 pt-tiny">
        <Title message="Pending Payments" />
      </div>
      <div class="flex flex-wrap pb-medium rounded h-full" v-if="!showLoading">
        <div class="pl-large w-52 h-26" v-if="nothingToShowUnfinished == true">
          <div class="flex content-center justify-center">
            <h2>Nothing To Show!</h2>
          </div>
        </div>
        <div
          class="container"
          v-for="item in getUnfinished"
          v-bind:key="item.id"
          v-bind:value="item.id"
        >
          <div
            class="flex justify-center items-center  ml-8 mt-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
          >
            <div
              class="p-4 w-48 h-64"
              @Click="
                detail(
                  `/admin/unfinishedDetail`,
                  item.applicationType,
                  item.id,
                  item.applicant.id
                )
              "
            >
              <div class="flex content-center justify-center">
                <!-- <img class="box-shadow-pop" v-bind:src="item.picture.large" /> -->
                <img
                  class="box-shadow-pop"
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
                />
              </div>
              <h4
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                <b>{{
                  item.applicant.profile.name
                    ? item.applicant.profile.name +
                      " " +
                      item.applicant.profile.fatherName
                    : "-"
                }}</b>
              </h4>
              <br />
              <span
                  class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                >
                  {{ item.applicationType ? item.applicationType : "-" }}
                </span>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
                {{ item.newLicenseCode ? item.newLicenseCode : "-" }}
              </span>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-end content-center">
                  {{item.createdAt ? moment(item.createdAt).fromNow() : '-'}}
              </span>
            </div>
          </div>
        </div>
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
import { useStore } from "vuex";

import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";

import store from '../../store'
import Spinner from "@/sharedComponents/Spinner";
import moment from 'moment'

export default {
  components: { ReviewerNavBar, Title, Spinner },
  computed: {
    moment: () => moment,
    getUnfinished() {
      return store.getters['reviewer/getPendingPayments'];
    }
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    let unfinished = ref({});
    let x = ref([]);
    let adminId = +localStorage.getItem("adminId");
    let nothingToShowUnfinished = ref(false);
    let showLoading = ref(false);

    const fetchPendings = () => {
      showLoading.value = true
      store.dispatch("reviewer/getPendingPayments", adminId).then(res => {
        showLoading.value = false
          unfinished.value = store.getters['reviewer/getPendingPayments'];
        // if(store.getters['reviewer/getUnfinished'].length !== 0) {
        //   for (var prop in store.getters['reviewer/getUnfinishedSearched']) {
        //     if (store.getters['reviewer/getUnfinishedSearched'][prop].applicationType == "Renewal") {
        //       store.getters['reviewer/getUnfinishedSearched'][prop].newLicenseCode =
        //         store.getters['reviewer/getUnfinishedSearched'][prop].renewalCode;
        //     }
        //     if (store.getters['reviewer/getUnfinishedSearched'][prop].applicationType == "Good Standing") {
        //       store.getters['reviewer/getUnfinishedSearched'][prop].newLicenseCode =
        //         store.getters['reviewer/getUnfinishedSearched'][prop].goodStandingCode;
        //     }
        //     if (store.getters['reviewer/getUnfinishedSearched'][prop].applicationType == "Verification") {
        //       store.getters['reviewer/getUnfinishedSearched'][prop].newLicenseCode =
        //         store.getters['reviewer/getUnfinishedSearched'][prop].verificationCode;
        //     }
        //   }
        // } else {
        //   nothingToShowUnfinished.value = true;
        // }
      });
    };

    const detail = (data, applicationType, applicationId, applicantId) => {
      const url =
        data + "/" + applicationType + "/" + applicationId + "/" + applicantId;
      router.push(url);
    };


    onMounted(() => {
      fetchPendings();
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
