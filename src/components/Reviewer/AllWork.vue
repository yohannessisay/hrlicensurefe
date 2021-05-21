<template>
  <div>
    <ReviewerNavBar tab="AllWork" />
    <div class="bg-lightBlueB-200 h-full">
      <div class="flex pl-12 pt-tiny">
        <Title message="Approved" />
      </div>
      <div
        class="flex flex-wrap justify-center items-center pb-medium rounded h-full"
      v-if="!showLoading">
        <div
          class="container"
          v-for="(item, index) in getRecentlyFinished"
          v-bind:key="index"
          v-bind:value="item.id"
        >
          <!-- <div
            v-if="index < 5" -->
          <div
            class="justify-center items-center mt-8 ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
          >
            <div class="p-4 w-48 h-64"
              @click="detail('/admin/finishedDetail',
                item.applicationType,
                item.id
                )"
            >
              <div class="flex content-center justify-center">
                  <img class="box-shadow-pop" 
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp" />
              </div>
              <h4
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
               <b>
                {{ item.applicant.profile.name + " " + item.applicant.profile.fatherName }}
               </b>
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
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
                {{item.applicationType}}
              </span>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
                {{ item.newLicenseCode ? item.newLicenseCode : '-' }}
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
      <div class="flex pl-12 pt-tiny">
        <Title message="Rejected" />
      </div>
      <div
        class="flex flex-wrap justify-center items-center pb-medium rounded h-full"
      v-if="!showLoading">
        <div
          class="container"
          v-for="(item, index) in getRecentlyFinished"
          v-bind:key="index"
          v-bind:value="item.id"
        >
          <!-- <div
            v-if="index < 5" -->
          <div
            class="justify-center items-center mt-8 ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
          >
            <div class="p-4 w-48 h-64"
              @click="detail('/admin/finishedDetail',
                item.applicationType,
                item.id
                )"
            >
              <div class="flex content-center justify-center">
                  <img class="box-shadow-pop" 
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp" />
              </div>
              <h4
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
               <b>
                {{ item.applicant.profile.name + " " + item.applicant.profile.fatherName }}
               </b>
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
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
                {{item.applicationType}}
              </span>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
                {{ item.newLicenseCode ? item.newLicenseCode : '-' }}
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
      <div class="flex pl-12 pt-tiny">
        <Title message="Under Supervision" />
      </div>
      <div
        class="flex flex-wrap justify-center items-center pb-medium rounded h-full"
      v-if="!showLoading">
        <div
          class="container"
          v-for="(item, index) in getRecentlyFinished"
          v-bind:key="index"
          v-bind:value="item.id"
        >
          <!-- <div
            v-if="index < 5" -->
          <div
            class="justify-center items-center mt-8 ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
          >
            <div class="p-4 w-48 h-64"
              @click="detail('/admin/finishedDetail',
                item.applicationType,
                item.id
                )"
            >
              <div class="flex content-center justify-center">
                  <img class="box-shadow-pop" 
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp" />
              </div>
              <h4
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
               <b>
                {{ item.applicant.profile.name + " " + item.applicant.profile.fatherName }}
               </b>
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
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
                {{item.applicationType}}
              </span>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
                {{ item.newLicenseCode ? item.newLicenseCode : '-' }}
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
import { useRouter } from "vue-router"

import { ref, onMounted } from "vue";

import store from "../../store"
import Spinner from "@/sharedComponents/Spinner";

import moment from 'moment'

export default {
  components: { ReviewerNavBar, Title, Spinner },
  computed: {
    moment: () => moment,
    getRecentlyFinished() {
      return store.getters['reviewer/getAllRecentlyFinishedSearched']
    }
  },
  setup() {
    const store = useStore();
    const router = useRouter()

    let recentlyFinished = ref({});

    let adminId = +localStorage.getItem("adminId");
    let showLoading = ref(false)

    const fetchRecentlyFinished = () => {
      showLoading.value = true
      store.dispatch("reviewer/getAllRecentlyFinished").then(res => {
        console.log("------", store.getters['reviewer/getAllRecentlyFinishedSearched'])
        showLoading.value = false
        recentlyFinished.value = store.getters['reviewer/getAllRecentlyFinishedSearched'];
      });
    };

    const detail = (data, appilcationType, appilcationId, applicantId) => {
      const url = 
        data + "/" + appilcationType + "/" + appilcationId;
        router.push(url)
    }

    onMounted(() => {
      fetchRecentlyFinished();
    });

    return {
      recentlyFinished,
      showLoading,
      detail
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
