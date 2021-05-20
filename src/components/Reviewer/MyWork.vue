<template>
  <div>
    <ReviewerNavBar tab="MyWork" />
    <div class="bg-lightBlueB-200 h-full">
      <div class="flex pl-12 pt-tiny">
        <Title message="Approved" />
      </div>
      <div
        class="flex flex-wrap justify-center items-center pb-medium rounded h-full"
          v-if="!showLoadingApproved">
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
                <b>{{ item.applicant.profile.name + " " + item.applicant.profile.fatherName }}</b>
              </h4>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
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
      <div
      v-if="showLoadingApproved"
        class="flex content-center justify-center"
      >
        <Spinner />
      </div>
      <div class="flex pl-12 pt-tiny">
        <Title message="Rejected" />
      </div>
      <div
        class="flex flex-wrap justify-center items-center pb-medium rounded h-full"
          v-if="!showLoadingRejected">
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
                <b>{{ item.applicant.profile.name + " " + item.applicant.profile.fatherName }}</b>
              </h4>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
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
      <div v-if="showLoadingRejected"
          class="flex content-center justify-center"
        >
          <Spinner />
        </div>
      <div class="flex pl-12 pt-tiny">
        <Title message="Under SuperVision" />
      </div>
      <div
        class="flex flex-wrap justify-center items-center pb-medium rounded h-full"
          v-if="!showLoadingSuperVision">
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
      <div
      v-if="showLoadingSuperVision"
      class="flex content-center justify-center"
    >
      <Spinner />
    </div>
    </div>
    
  </div>
</template>

<script>
import Title from "@/sharedComponents/TitleWithIllustration";
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import { useStore } from "vuex";
import { useRouter } from "vue-router"
import moment from 'moment'

import { ref, onMounted } from "vue";

import store from "../../store"
import Spinner from "@/sharedComponents/Spinner";

export default {
  components: { ReviewerNavBar, Title, Spinner },
  computed: {
    moment: () => moment,
    getRecentlyFinished() {
      return store.getters['reviewer/getRecentlyFinishedSearched']
    }
  },
  setup() {
    const store = useStore();
    const router = useRouter()

    let recentlyFinished = ref({});

    let adminId = +localStorage.getItem("adminId");

    let showLoadingApproved = ref(false);
    let showLoadingRejected = ref(false);
    let showLoadingSuperVision = ref(false);

    const fetchRecentlyFinished = () => {
      showLoadingApproved.value = true
      showLoadingRejected.value = true
      showLoadingSuperVision.value = true
      store.dispatch("reviewer/getRecentlyFinished", adminId).then(res => {
        console.log("id- admin", adminId)
        showLoadingApproved.value = false
        showLoadingRejected.value = false
        showLoadingSuperVision.value = false
        recentlyFinished.value = store.getters['reviewer/getRecentlyFinishedSearched'];
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
      detail,
      showLoadingApproved,
      showLoadingRejected,
      showLoadingSuperVision
    };
  }
};
</script>
<style scoped>
img {
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 80px;
  border-color: steelblue;
  background-color: steelblue;
}
.container {
  cursor: pointer;
}
</style>
