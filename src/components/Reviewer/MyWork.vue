<template>
  <div>
    <ReviewerNavBar tab="MyWork" />
    <div class="bg-lightBlueB-200 h-full">
      <div class="flex pl-12 pt-tiny">
        <Title message="Confirmed" />
      </div>
      <div
        class="flex flex-wrap pb-medium rounded h-full"
        v-if="!showLoadingApproved"
      >
        <div class="pl-large w-52 h-26" v-if="nothingToShowApproved == true">
          <div class="flex content-center justify-center">
            <h2>Nothing To Show!</h2>
          </div>
        </div>
        <div
          class="container"
          v-for="(item, index) in getApproved"
          v-bind:key="index"
          v-bind:value="item.id"
        >
          <div
            class="justify-center items-center mt-8 ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
          >
            <div
              class="p-4 w-48 h-64"
              @click="
                detail(
                  '/admin/finishedDetail',
                  item.applicationType,
                  item.id,
                  'approved'
                )
              "
            >
              <div class="flex content-center justify-center">
                <img
                  class="box-shadow-pop"
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
                />
              </div>
              <h4
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                <b>{{
                  item.applicant.profile.name +
                    " " +
                    item.applicant.profile.fatherName
                }}</b>
              </h4>
              <br />
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
                {{ item.applicationType }}
              </span>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
                {{ item.newLicenseCode ? item.newLicenseCode : "-" }}
              </span>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-end content-center"
              >
                {{ item.createdAt ? moment(item.createdAt).fromNow() : "-" }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="showLoadingApproved"
        class="flex content-center justify-center"
      >
        <Spinner />
      </div>
      <!-- <div class="flex pl-12 pt-tiny">
        <Title message="Rejected" />
      </div>
      <div
        class="flex flex-wrap pb-medium rounded h-full"
        v-if="!showLoadingRejected"
      >
        <div class="pl-large w-52 h-26" v-if="nothingToShowRejected == true">
          <div class="flex content-center justify-center">
            <h2>Nothing To Show!</h2>
          </div>
        </div>
        <div
          class="container"
          v-for="(item, index) in getRejected"
          v-bind:key="index"
          v-bind:value="item.id"
        >
          <div
            class="justify-center items-center mt-8 ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
          >
            <div
              class="p-4 w-48 h-64"
              @click="
                detail(
                  '/admin/finishedDetail',
                  item.applicationType,
                  item.id,
                  'rejected'
                )
              "
            >
              <div class="flex content-center justify-center">
                <img
                  class="box-shadow-pop"
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
                />
              </div>
              <h4
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                <b>{{
                  item.applicant.profile.name +
                    " " +
                    item.applicant.profile.fatherName
                }}</b>
              </h4>
              <br />
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
                {{ item.applicationType }}
              </span>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
                {{ item.newLicenseCode ? item.newLicenseCode : "-" }}
              </span>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-end content-center"
              >
                {{ item.createdAt ? moment(item.createdAt).fromNow() : "-" }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="showLoadingRejected"
        class="flex content-center justify-center"
      >
        <Spinner />
      </div>
      <div class="flex pl-12 pt-tiny">
        <Title message="Under SuperVision" />
      </div>
      <div
        class="flex flex-wrap pb-medium rounded h-full"
        v-if="!showLoadingSuperVision"
      >
        <div
          class="pl-large w-52 h-26"
          v-if="nothingToShowUnderSuperVision == true"
        >
          <div class="flex content-center justify-center">
            <h2>Nothing To Show!</h2>
          </div>
        </div>
        <div
          class="container"
          v-for="(item, index) in getUnderSuperVision"
          v-bind:key="index"
          v-bind:value="item.id"
        >
          <div
            class="justify-center items-center mt-8 ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
          >
            <div
              class="p-4 w-48 h-64"
              @click="
                detail(
                  '/admin/finishedDetail',
                  item.applicationType,
                  item.id,
                  'underSuperVision'
                )
              "
            >
              <div class="flex content-center justify-center">
                <img
                  class="box-shadow-pop"
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
                />
              </div>
              <h4
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                <b>
                  {{
                    item.applicant.profile.name +
                      " " +
                      item.applicant.profile.fatherName
                  }}
                </b>
              </h4>
              <br />
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
                {{ item.applicationType }}
              </span>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
                {{ item.newLicenseCode ? item.newLicenseCode : "-" }}
              </span>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-end content-center"
              >
                {{ item.createdAt ? moment(item.createdAt).fromNow() : "-" }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="showLoadingSuperVision"
        class="flex content-center justify-center"
      >
        <Spinner />
      </div> -->
    </div>
  </div>
</template>

<script>
import Title from "@/sharedComponents/TitleWithIllustration";
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import moment from "moment";

import { ref, onMounted } from "vue";

import store from "../../store";
import Spinner from "@/sharedComponents/Spinner";

export default {
  components: { ReviewerNavBar, Title, Spinner },
  computed: {
    moment: () => moment,
    getApproved() {
      return store.getters["reviewer/getApprovedSearched"];
    },
    getRecentlyFinished() {
      return store.getters["reviewer/getRecentlyFinishedSearched"];
    },
    getRejected() {
      return store.getters["reviewer/getRejectedSearched"];
    },
    getUnderSuperVision() {
      return store.getters["reviewer/getUnderSuperVisionSearched"];
    },
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    let adminId = +localStorage.getItem("adminId");

    let showLoadingApproved = ref(false);
    let showLoadingRejected = ref(false);
    let showLoadingSuperVision = ref(false);

    let nothingToShowApproved = ref(false);
    let nothingToShowRejected = ref(false);
    let nothingToShowUnderSuperVision = ref(false);

    let approved = ref({});
    let rejected = ref({});
    let underSuperVision = ref({});

    const fetchRecentlyFinished = () => {
      showLoadingApproved.value = true;
      showLoadingRejected.value = true;
      showLoadingSuperVision.value = true;
      store.dispatch("reviewer/getRecentlyFinished", adminId).then((res) => {
        showLoadingApproved.value = false;
        showLoadingRejected.value = false;
        showLoadingSuperVision.value = false;
        if (store.getters["reviewer/getApprovedSearched"].length == 0) {
          nothingToShowApproved.value = true;
        } else {
          approved.value = store.getters["reviewer/getApprovedSearched"];
          for (var prop in store.getters["reviewer/getApprovedSearched"]) {
            if (approved.value[prop].applicationType == "Renewal") {
              approved.value[prop].newLicenseCode =
                approved.value[prop].renewalCode;
            }
            if (approved.value[prop].applicationType == "Good Standing") {
              approved.value[prop].newLicenseCode =
                approved.value[prop].goodStandingCode;
            }
            if (approved.value[prop].applicationType == "Verification") {
              approved.value[prop].newLicenseCode =
                approved.value[prop].verificationCode;
            }
          }
        }
        if (store.getters["reviewer/getRejectedSearched"].length == 0) {
          nothingToShowRejected.value = true;
        } else {
          rejected.value = store.getters["reviewer/getRejectedSearched"];
          for (var prop in store.getters["reviewer/getRejectedSearched"]) {
            if (rejected.value[prop].applicationType == "Renewal") {
              rejected.value[prop].newLicenseCode =
                rejected.value[prop].renewalCode;
            }
            if (rejected.value[prop].applicationType == "Good Standing") {
              rejected.value[prop].newLicenseCode =
                rejected.value[prop].goodStandingCode;
            }
            if (rejected.value[prop].applicationType == "Verification") {
              rejected.value[prop].newLicenseCode =
                rejected.value[prop].verificationCode;
            }
          }
        }
        if (store.getters["reviewer/getUnderSuperVisionSearched"].length == 0) {
          nothingToShowUnderSuperVision.value = true;
        } else {
          underSuperVision.value =
            store.getters["reviewer/getUnderSuperVisionSearched"];
          for (var prop in store.getters[
            "reviewer/getUnderSuperVisionSearched"
          ]) {
            if (underSuperVision.value[prop].applicationType == "Renewal") {
              underSuperVision.value[prop].newLicenseCode =
                underSuperVision.value[prop].renewalCode;
            }
            if (
              underSuperVision.value[prop].applicationType == "Good Standing"
            ) {
              underSuperVision.value[prop].newLicenseCode =
                underSuperVision.value[prop].goodStandingCode;
            }
            if (
              underSuperVision.value[prop].applicationType == "Verification"
            ) {
              underSuperVision.value[prop].newLicenseCode =
                underSuperVision.value[prop].verificationCode;
            }
          }
        }
      });
    };

    const detail = (data, appilcationType, appilcationId, status) => {
      const url =
        data + "/" + appilcationType + "/" + appilcationId + "/" + status;
      router.push(url);
    };

    onMounted(() => {
      fetchRecentlyFinished();
    });

    return {
      detail,
      showLoadingApproved,
      showLoadingRejected,
      showLoadingSuperVision,
      nothingToShowApproved,
      nothingToShowRejected,
      nothingToShowUnderSuperVision,
      approved,
      rejected,
      underSuperVision,
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
