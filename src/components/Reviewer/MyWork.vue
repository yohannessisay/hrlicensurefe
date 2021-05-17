<template>
  <div>
    <ReviewerNavBar tab="MyWork" />
    <div class="bg-lightBlueB-200 h-full">
      <div class="flex pl-12 pt-tiny">
        <Title message="Recently Finished" />
      </div>
      <div
        class="flex flex-wrap justify-center items-center pb-medium rounded h-full"
      >
        <div
          class="container"
          v-for="(item, index) in getRecentlyFinishedSearched"
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
                  <img class="box-shadow-pop" v-bind:src="item.picture.large" />
                </router-link>
              </div>
              <h4
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                {{ item.name.first + " " + item.name.last }}
              </h4>
              <h6
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                {{ item.registered.date }}
              </h6>
              <h6
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                New Licence ID: {{ item.id.value }}
              </h6>
              <h6
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                Approved
              </h6>
            </div>
          </div>
        </div>
        <!-- Second !-->
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/sharedComponents/TitleWithIllustration";
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import { useStore } from "vuex";

import { ref, onMounted } from "vue";

import store from "../../store"

export default {
  components: { ReviewerNavBar, Title },
  computed: {
    getRecentlyFinishedSearched() {
      return store.getters['reviewer/getRecentlyFinishedSearched']
    }
  },
  setup() {
    const store = useStore();

    let recentlyFinished = ref({});

    const fetchRecentlyFinished = () => {
      store.dispatch("reviewer/getRecentlyFinished").then(res => {
        recentlyFinished.value = store.getters['reviewer/getRecentlyFinishedSearched'];
      });
    };

    onMounted(() => {
      fetchRecentlyFinished();
    });

    return {
      recentlyFinished
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
