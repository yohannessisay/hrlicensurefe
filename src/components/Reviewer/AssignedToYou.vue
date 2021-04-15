<template>
  <div>
    <ReviewerNavBar tab="AssignedToYou" />
    <div class="bg-lightBlueB-200 h-full">
      <div class="flex pl-12 pt-tiny">
        <Title message="Assigned To You" />
      </div>
      <div class="flex flex-wrap pb-medium rounded h-full">
        <div
          class="container"
          v-for="item in assignedToyou"
          v-bind:key="item.applicationStatus.name"
          v-bind:value="item.id"
        >
          <div
            class="flex justify-center items-center ml-8 mt-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
          >
            <div
              class="p-4 w-48 h-64"
              @Click="detail(`/detail`, item.id, item.applicant.id)"
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
        <!-- Second !-->
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/sharedComponents/TitleWithIllustration";
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { ref, onMounted } from "vue";

export default {
  components: { ReviewerNavBar, Title },
  setup() {
    const store = useStore();
    const router = useRouter();

    let assignedToyou = ref({});
    let x = ref("");
    let userId = +localStorage.getItem("userId");

    const fetchAssignedtoYou = () => {
      store.dispatch("reviewer/getUnfinished", userId).then(res => {
        x.value = res.data.data;
        assignedToyou.value = x.value.filter(a => {
          if (a.applicationStatus.code == "IRV") {
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
      fetchAssignedtoYou();
    });

    return {
      assignedToyou,
      detail
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
.container {
  cursor: pointer;
}
</style>
