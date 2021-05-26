<template>
  <div>
    <ReviewerNavBar tab="AssignedToAll" />
    <div class="bg-lightBlueB-200 h-full">
      <div class="flex pl-12 pt-tiny">
        <Title message="Assigned To Others" />
      </div>
      <div class="flex flex-wrap pb-medium rounded h-full" v-if="!showLoading">
        <div class="pl-large w-52 h-26" v-if="nothingToShow == true">
          <div class="flex content-center justify-center">
            <h2>Nothing To Show!</h2>
          </div>
        </div>
        <div
          class="container"
          v-for="item in getAllAssignedToYou"
          v-bind:key="item.applicationStatus.name"
          v-bind:value="item.id"
        >
          <div
            class="flex justify-center items-center ml-8 mt-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
          >
            <div
              class="p-4 w-48 h-64"
              @Click="
                detail(
                  `/admin/detail`,
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
                {{ item.reviewer.name ? item.reviewer.name : "-" }}
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
        <!-- Second !-->
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
import { useRouter } from "vue-router";

import { ref, onMounted } from "vue";
import store from "../../store";
import Spinner from "@/sharedComponents/Spinner";
import moment from 'moment'

export default {
  components: {
    ReviewerNavBar,
    Title,
    Spinner,
  },
  computed: {
    moment: () => moment,
    getAllAssignedToYou() {
      return store.getters["reviewer/getAssignedForEveryOneSearched"];
    },
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    let assignedToyou = ref({});
    let nothingToShow = ref(false);
    let showLoading = ref(false);
    let x = ref("");
    let userId = +localStorage.getItem("userId");
    let adminId = +localStorage.getItem("adminId");
    let adminRole = localStorage.getItem("role");

    const fetchAssignedtoYou = () => {
      const adminData = [adminRole, adminId]
      showLoading.value = true;
      store.dispatch("reviewer/getAssignedToEveryOne", adminData).then((res) => {
        showLoading.value = false;
        // if (res.status != "Error") {
        assignedToyou.value =
          store.getters["reviewer/getAssignedForEveryOneSearched"];
        if (assignedToyou.value.length !== 0) {
          for (var prop in store.getters[
            "reviewer/getAssignedForEveryOneSearched"
          ]) {
            if (
              store.getters["reviewer/getAssignedForEveryOneSearched"][prop]
                .applicationType == "Renewal"
            ) {
              store.getters["reviewer/getAssignedForEveryOneSearched"][
                prop
              ].newLicenseCode =
                store.getters["reviewer/getAssignedForEveryOneSearched"][
                  prop
                ].renewalCode;
            }
            if (
              store.getters["reviewer/getAssignedForEveryOneSearched"][prop]
                .applicationType == "Good Standing"
            ) {
              store.getters["reviewer/getAssignedForEveryOneSearched"][
                prop
              ].newLicenseCode =
                store.getters["reviewer/getAssignedForEveryOneSearched"][
                  prop
                ].goodStandingCode;
            }
            if (
              store.getters["reviewer/getAssignedForEveryOneSearched"][prop]
                .applicationType == "Verification"
            ) {
              store.getters["reviewer/getAssignedForEveryOneSearched"][
                prop
              ].newLicenseCode =
                store.getters["reviewer/getAssignedForEveryOneSearched"][
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
      adminRole,
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
