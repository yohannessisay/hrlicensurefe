<template>
  <div>
    <ReviewerNavBar />
    <div class="bg-lightBlueB-200 h-full">
      <div class="flex pl-12 pt-medium"><Title message="Unfinished" /></div>
      <div class="flex justify-center items-center mt-medium rounded ">
        <div
          class="container"
          v-for="(item, index) in unfinished"
          v-bind:key="item.name.first"
          v-bind:value="item.id"
        >
          <div
            v-if="index < 5"
            class="flex justify-center items-center  ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100">
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
      </div>

      <div class="flex pl-12 mt-medium"><Title message="Assigned to You" /></div>
      <div class="flex justify-center items-center mt-medium rounded ">
        <div
          class="container"
          v-for="(item, index) in assignedToyou"
          v-bind:key="item.name.first"
          v-bind:value="item.id"
        >
          <div
            v-if="index < 5"
            class="flex justify-center items-center ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100">
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
      </div>

      <div class="flex pl-12 mt-medium">
        <Title message="Pending Orders" />
        <div class="flex ml-small" v-if="pendingOrders.length >= 5">
          <button
            class="block mx-auto  bg-lightBlue-300 hover:bg-lightBlue-600 hover:shadow-lg"
          >
            View All
          </button>
        </div>
      </div>
      <div class="flex justify-center items-center mt-medium rounded ">
        <div
          class="container"
          v-for="(item, index) in pendingOrders"
          v-bind:key="item.name.first"
          v-bind:value="item.id"
        >
          <div
            v-if="index < 5"
            class="flex justify-center items-center ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
          >
            <div
              class="p-4 w-48 h-64"
              @mouseover="hover = true"
              @mouseleave="hover = false"
            >
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
              <!-- <div class="flex ml-small w-32" v-if="hover==true">
                <button
                  class="block mx-auto  bg-lightBlue-300 hover:bg-lightBlue-600 hover:shadow-lg"
                >
                  View All
                </button>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <div class="flex pl-12 mt-medium ">
        <Title message="Recently Finished" />
        <div class="flex ml-small" v-if="recentlyFinished.length >= 5">
          <button
            class="block mx-auto  bg-lightBlue-300 hover:bg-lightBlue-600 hover:shadow-lg"
          >
            View All
          </button>
        </div>
      </div>
      <div
        class="flex justify-center items-center mt-medium pb-medium rounded "
      >
        <div
          class="container"
          v-for="(item, index) in recentlyFinished"
          v-bind:key="item.name.first"
          v-bind:value="item.id"
        >
          <div
            v-if="index < 5"
            class="justify-center items-center ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100">
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
    let assignedToyou = ref({});
    let pendingOrders = ref({});
    let recentlyFinished = ref({});
    let hover = ref(false);

    const fetchUnfinished = () => {
      store.dispatch("reviewer/getUnfinished").then(res => {
        unfinished.value = res.data.results;
      });
    };

    const fetchAssignedtoYou = () => {
      store.dispatch("reviewer/getAssignedToYou").then(res => {
        assignedToyou.value = res.data.results;
      });
    };

    const fetchPendingOrders = () => {
      store.dispatch("reviewer/getPendingOrders").then(res => {
        pendingOrders.value = res.data.results;
      });
    };

    const fetchRecentlyFinished = () => {
      store.dispatch("reviewer/getRecentlyFinished").then(res => {
        recentlyFinished.value = res.data.results;
      });
    };

    onMounted(() => {
      fetchUnfinished();
      fetchAssignedtoYou();
      fetchPendingOrders();
      fetchRecentlyFinished();
    });

    return {
      unfinished,
      assignedToyou,
      pendingOrders,
      recentlyFinished,
      hover
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
.hoveredCard{
  background-color: white;
}
</style>
