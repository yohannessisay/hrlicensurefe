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
              @Click="detail(`/admin/detail`, item.applicationType, item.id, item.applicant.id)"
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
                  item.applicant.profile.name
                    ? item.applicant.profile.name +
                      " " +
                      item.applicant.profile.fatherName
                    : "-"
                }}
              </h4>
              <h6
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center">
                {{ item.createdAt ? item.createdAt : "-" }}
              </h6>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                Application Type:
                {{ item.applicationType ? item.applicationType : "-" }}
              </span>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                Application ID:
                {{ item.newLicenseCode ? item.newLicenseCode : "-" }}
              </span>
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
      store.dispatch("reviewer/getAssignedToYou").then(res => {
        if (res.status != "Error") {
          assignedToyou.value = res.data.data;
          for (var prop in assignedToyou.value) {
            console.log(assignedToyou.value[prop]);
            if (assignedToyou.value[prop].applicationType == "Renewal") {
              assignedToyou.value[prop].newLicenseCode =
                assignedToyou.value[prop].renewalCode;
            }
            if (assignedToyou.value[prop].applicationType == "Good Standing") {
              assignedToyou.value[prop].newLicenseCode =
                assignedToyou.value[prop].goodStandingCode;
            }
            if (assignedToyou.value[prop].applicationType == "Verification") {
              assignedToyou.value[prop].newLicenseCode =
                assignedToyou.value[prop].verificationCode;
            }
          }
        }
      });
    };

    const detail = (data, applicationType, applicationId, applicantId) => {
      const url = data + "/" + applicationType + "/" + applicationId + "/" + applicantId;
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
