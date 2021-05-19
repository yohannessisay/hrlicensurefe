<template>
  <div>
    <ReviewerNavBar tab="AllWork" />
    <div class="bg-lightBlueB-200 h-full">
      <div class="flex pl-12 pt-tiny">
        <Title message="Others Finished" />
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
            <div class="p-4 w-48 h-64">
              <div class="flex content-center justify-center">
                <router-link to="/newlicense">
                  <img class="box-shadow-pop" 
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp" />
                </router-link>
              </div>
              <h4
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                {{ item.applicant.profile.name + " " + item.applicant.profile.fatherName }}
              </h4>
              <h5
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                Reviewed By:
                {{
                  item.reviewer.name
                    ? item.reviewer.name
                    : "-"
                }}
              </h5>
              <!-- <h6
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                {{ item.createdAt }}
              </h6> -->
              <h6
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                Licence ID: {{ item.newLicenseCode }}
              </h6>
              <h6
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                {{item.applicationStatus.name}}
              </h6>
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

import { ref, onMounted } from "vue";

import store from "../../store"
import Spinner from "@/sharedComponents/Spinner";

export default {
  components: { ReviewerNavBar, Title, Spinner },
  computed: {
    getRecentlyFinished() {
      return store.getters['reviewer/getAllRecentlyFinishedSearched']
    }
  },
  setup() {
    const store = useStore();

    let recentlyFinished = ref({});

    let adminId = +localStorage.getItem("adminId");
    let showLoading = ref(false)

    const fetchRecentlyFinished = () => {
      showLoading.value = true
      store.dispatch("reviewer/getAllRecentlyFinished").then(res => {
        showLoading.value = false
        recentlyFinished.value = store.getters['reviewer/getAllRecentlyFinishedSearched'];
      });
    };

    onMounted(() => {
      fetchRecentlyFinished();
    });

    return {
      recentlyFinished,
      showLoading
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
</style>
