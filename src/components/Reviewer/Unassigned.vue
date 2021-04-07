<template>
  <div>
    <ReviewerNavBar tab="Unassigned" />
    <div class="bg-lightBlueB-200 h-full">
      <div class="flex pl-12 pt-tiny">
        <Title message="unassigned" />
      </div>
      <div
        class="flex flex-wrap justify-center items-center pb-medium rounded h-full"
      >
        <div
          class="container flip-box"
          v-for="(item, index) in unassigned"
          v-bind:key="item.name.first"
          v-bind:value="item.id"
        >
          <div
            class="flex justify-center items-center ml-8 mt-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100 flip-box-front"
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
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                {{ item.registered.date }}
              </h6>
              <h6
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                New Licence ID: {{ item.id.value }}
              </h6>
            </div>
          </div>

          <div
            class="absolute inset-0 flex justify-center items-center z-10 ml-8 mt-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100 flip-box-back"
          >
            <div
              class="p-4 w-48 h-64"
              @mouseover="hover = true"
              @mouseleave="hover = false"
            >
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
              <div
                class="flex ml-small w-32 pt-small justify-center content-center"
              >
                <router-link to="/newlicense">
                  <button
                    class="block mx-auto  bg-lightBlue-300 hover:bg-lightBlue-600 hover:shadow-lg"
                  >
                    Assign to Me
                  </button>
                </router-link>
              </div>
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

    let unassigned = ref({});

    const fetchUnassignedApplications = () => {
      store.dispatch("reviewer/getUnassigned").then(res => {
        unassigned.value = res.data.results;
      });
    };

    onMounted(() => {
      fetchUnassignedApplications();
    });

    return {
      unassigned
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
.flip-box {
  transform-style: preserve-3d;
  perspective: 1000px;
  cursor: pointer;
}

.flip-box-front,
.flip-box-back {
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  backface-visibility: hidden;
}

.flip-box-front {
  transform: rotateY(0deg);
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-front {
  transform: rotateY(-180deg);
  transform-style: preserve-3d;
}

.flip-box-back {
  /* position: absolute; */
  transform: rotateY(180deg);
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-back {
  transform: rotateY(0deg);
  transform-style: preserve-3d;
}
</style>
