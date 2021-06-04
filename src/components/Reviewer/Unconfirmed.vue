<template>
  <div>
    <ReviewerNavBar tab="Unconfirmed" />
    <div class="bg-lightBlueB-200 h-full">
      <unconfirmed-container />
    </div>

    <div class="bg-lightBlueB-200 h-full">
      <!-- <div class="flex pl-12 pt-tiny">
        <Title message="Unconfirmed" />
      </div>
      <div class="flex flex-wrap pb-medium rounded h-full" v-if="!showLoading">
        <nothing-to-show :nothingToShow="nothingToShowUnfinished" />
        <my-unconfirmed :myUnconfirmed="getUnfinished" />
      </div>

      <div v-if="showLoading" class="flex justify-center justify-items-center">
        <Spinner />
      </div> -->
      <returned-to-me-container />
    </div>
    <div class="bg-lightBlueB-200 h-full">
      <confirm-review-container />
    </div>
  </div>
</template>

<script>
import Title from "@/sharedComponents/TitleWithIllustration";
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import MyUnconfirmed from "@/components/Reviewer/ChildComponents/MyUnconfirmed";
import NothingToShow from "@/components/Reviewer/ChildComponents/NothingToShow";
import { useStore } from "vuex";

import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";

import store from "../../store";
import Spinner from "@/sharedComponents/Spinner";
import moment from "moment";
import UnconfirmedContainer from './ChildComponents/Containers/UnconfirmedContainer.vue';
import ReturnedToMeContainer from './ChildComponents/Containers/ReturnedToMeContainer.vue';
import ConfirmReviewContainer from './ChildComponents/Containers/ConfirmReviewContainer.vue';

export default {
  components: {
    ReviewerNavBar,
    Title,
    Spinner,
    MyUnconfirmed,
    NothingToShow,
    UnconfirmedContainer,
    ReturnedToMeContainer,
    ConfirmReviewContainer,
  },
  computed: {
    moment: () => moment,
    getUnfinished() {
      return store.getters["reviewer/getUnfinishedSearched"];
    },
  },
  setup() {

    onMounted(() => {
    });
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
