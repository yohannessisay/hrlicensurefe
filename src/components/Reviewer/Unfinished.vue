<template>
  <div>
    <ReviewerNavBar tab="Unfinished" />
    <div class="bg-lightBlueB-200 h-full">
      <div class="flex pl-12 pt-tiny">
        <Title message="Unfinished" />
      </div>
      <div
        class="flex flex-wrap justify-center items-center pb-medium rounded h-full"
      >
        <div
          class="container"
          v-for="item in unfinished"
          v-bind:key="item.name.first"
          v-bind:value="item.id"
        >
          <div
            class="flex justify-center items-center  ml-8 mt-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
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
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center">
                {{ item.registered.date }}
              </h6>
              <h6
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                New Licence ID: {{ item.id.value }}
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

export default {
  components: { ReviewerNavBar, Title },
  setup() {
    const store = useStore();

    let unfinished = ref({});

    const fetchUnfinished = () => {
      store.dispatch("reviewer/getUnfinished").then(res => {
        unfinished.value = res.data.results;
      });
    };

    onMounted(() => {
      fetchUnfinished();
    });

    return {
      unfinished
    };
  }
};
</script>
<style>
img {
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 80px;
  border-color: steelblue;
  background-color: steelblue;
}
</style>
