<template>
  <div>
    <ReviewerNavBar tab="AllPendigs" />
    <div class="bg-lightBlueB-200 h-full">
      <div class="flex pl-12 pt-tiny">
        <Title message="Others Penging Payments" />
      </div>
      <div 
      class="flex flex-wrap pb-medium rounded h-full" 
      v-if="!showLoading">
        <div class="pl-large w-52 h-26" v-if="nothingToShowAllPengings == true">
          <div class="flex content-center justify-center">
            <h2>Nothing To Show!</h2>
          </div>
        </div>
        <div
          class="container"
          v-for="item in getAllPendingPayments"
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
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
              <i class="fas fa-user-cog"></i> &nbsp;
                {{
                  item.reviewer.name
                    ? item.reviewer.name
                    : "-"
                }}
              </span>
              <!-- <h6
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center">
                {{ item.createdAt ? item.createdAt : "-" }}
              </h6> -->
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
    getAllPendingPayments() {
      return store.getters['reviewer/getAllPendingPaymentSearched'];
    }
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    let allPendings = ref({});
    let x = ref([]);
    let userId = +localStorage.getItem("adminId");
    let nothingToShowAllPengings = ref(false);
    let showLoading = ref(false);

    const fetchAllPendings = () => {
      showLoading.value = true;
      store.dispatch("reviewer/getAllPendingPayments", userId).then(res => {
        showLoading.value = false
          allPendings.value = store.getters['reviewer/getAllPendingPaymentSearched'];
        if(store.getters['reviewer/getAllPendingPaymentSearched'].length !== 0) {
          for (var prop in store.getters['reviewer/getAllPendingPaymentSearched']) {
            if (store.getters['reviewer/getAllPendingPaymentSearched'][prop].applicationType == "Renewal") {
              store.getters['reviewer/getAllPendingPaymentSearched'][prop].newLicenseCode =
                store.getters['reviewer/getAllPendingPaymentSearched'][prop].renewalCode;
            }
            if (store.getters['reviewer/getAllPendingPaymentSearched'][prop].applicationType == "Good Standing") {
              store.getters['reviewer/getAllPendingPaymentSearched'][prop].newLicenseCode =
                store.getters['reviewer/getAllPendingPaymentSearched'][prop].goodStandingCode;
            }
            if (store.getters['reviewer/getAllPendingPaymentSearched'][prop].applicationType == "Verification") {
              store.getters['reviewer/getAllPendingPaymentSearched'][prop].newLicenseCode =
                store.getters['reviewer/getAllPendingPaymentSearched'][prop].verificationCode;
            }
          }
        } else {
          nothingToShowAllPengings.value = true;
        }
      });
    };

    const detail = (data, applicationType, applicationId, applicantId) => {
      const url =
        data + "/" + applicationType + "/" + applicationId + "/" + applicantId;
      router.push(url);
    };

    onMounted(() => {
      fetchAllPendings();
    });

    return {
      allPendings,
      detail,
      nothingToShowAllPengings,
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
