<template>
  <div>
    <ReviewerNavBar tab="Unconfirmed" />
    <div class="bg-lightBlueB-200 h-full">
      <unconfirmed-container />
    </div>
    <div class="bg-lightBlueB-200 h-full">
      <others-unconfirmed-container />
    </div>
    <div class="bg-lightBlueB-200 h-full">
      <returned-to-me-container />
    </div>
    <div class="bg-lightBlueB-200 h-full">>
      <returned-to-others-container />
    </div>
    <div class="bg-lightBlueB-200 h-full">
      <confirm-review-container />
    </div>
    <div class="bg-lightBlueB-200 h-full">
      <others-confirm-review-container />
    </div>
  </div>
</template>

<script>
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import UnconfirmedContainer from './ChildComponents/Containers/UnconfirmedContainer.vue';
import ReturnedToMeContainer from './ChildComponents/Containers/ReturnedToMeContainer.vue';
import ReturnedToOthersContainer from "./ChildComponents/Containers/ReturnedToOthersContainer.vue"
import ConfirmReviewContainer from './ChildComponents/Containers/ConfirmReviewContainer.vue';
import OthersUnconfirmedContainer from './ChildComponents/Containers/OthersUnconfirmedContainer.vue';
import OthersConfirmReviewContainer from './ChildComponents/Containers/OthersConfirmReviewContainer.vue';

export default {
  components: {
    ReviewerNavBar,
    UnconfirmedContainer,
    ReturnedToMeContainer,
    ConfirmReviewContainer,
    OthersUnconfirmedContainer,
    OthersConfirmReviewContainer,
    ReturnedToOthersContainer,
  },
  computed: {
    moment: () => moment,
    getUnfinished() {
      return store.getters["reviewer/getUnfinishedSearched"];
    },
  },
  setup() {
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
