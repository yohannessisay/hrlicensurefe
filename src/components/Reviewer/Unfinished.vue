<template>
  <div>
    <ReviewerNavBar tab="Unfinished" />
    <div class="bg-lightBlueB-200 h-full">
      <div class="flex pl-12 pt-tiny">
        <Title message="Unfinished" />
      </div>
      <div class="flex flex-wrap pb-medium rounded h-full">
        <div
          class="container"
          v-for="item in unfinished"
          v-bind:key="item.applicationStatus.name"
          v-bind:value="item.id"
        >
          <div
            class="flex justify-center items-center  ml-8 mt-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
          >
            <div
              class="p-4 w-48 h-64"
              @Click="detail(`admin/unfinishedDetail`, item.id, item.applicant.id)"
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
                {{
                  item.applicant.profile.name +
                    " " +
                    item.applicant.profile.fatherName
                }}
              </h4>
              <h6
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center">
                {{ item.createdAt }}
              </h6>
              <h6
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                New Licence ID: {{ item.newLicenseCode }}
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
import { useRouter } from "vue-router";

export default {
  components: { ReviewerNavBar, Title },
  setup() {
    const store = useStore();
    const router = useRouter();

    let unfinished = ref({});
    let x = ref([]);
    let userId = +localStorage.getItem("userId");
    const fetchUnfinished = () => {
      store.dispatch("reviewer/getUnfinished", userId).then(res => {
        // unfinished.value = res.data.results;
        x.value = res.data.data;

        unfinished.value = x.value.filter(a => {
          if (a.applicationStatus.code == "REVDRA") {
            console.log(a);
            return a;
          }
        });
      });
    };

    const detail = (data, applicationId, applicantId) => {
      const url = data + "/" + applicationId + "/" + applicantId;
      router.push(url);
    };

    onMounted(() => {
      fetchUnfinished();
    });

    return {
      unfinished,
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
  border-color: steelblue;
  background-color: steelblue;
}
.container {
  cursor: pointer;
}
</style>
