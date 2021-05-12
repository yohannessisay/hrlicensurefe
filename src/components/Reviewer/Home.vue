<template>
  <div>
    <ReviewerNavBar tab="Home" />
    <div class="bg-lightBlueB-200 h-full">
      <div class="flex pl-12 pt-medium">
        <Title message="Unfinished" />
        <div class="flex ml-small" v-if="unfinished.length >= 5">
          <router-link to="/admin/unfinished">
            <button
              class="block mx-auto  bg-lightBlue-300 hover:bg-lightBlue-600 hover:shadow-lg"
            >
              View All
            </button>
          </router-link>
        </div>
      </div>
      <div class="flex ml-small mt-medium rounded ">
        <div class="pl-large w-52 h-26" v-if="nothingToShow == true">
          <div class="flex content-center justify-center">
            <h2>Nothing To Show!!</h2>
          </div>
        </div>
        <div
          class="container"
          v-for="(item, index) in unfinished"
          v-bind:key="item.id"
          v-bind:value="item.id"
        >
          <div
            v-if="index < 5"
            class="flex justify-center items-center  ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
          >
            <div
              class="p-4 w-48 h-64"
              @Click="
                detail(`/admin/unfinishedDetail`, item.applicationType, item.id, item.applicant.id)
              "
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
              <h6
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                Application ID:
                {{ item.newLicenseCode ? item.newLicenseCode : "-" }}
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div class="flex pl-12 mt-medium">
        <Title message="Assigned to You" />
        <div class="flex ml-small" v-if="assignedToyou.length >= 5">
          <router-link to="/admin/assignedToyou">
            <button
              class="block mx-auto  bg-lightBlue-300 hover:bg-lightBlue-600 hover:shadow-lg"
            >
              View All
            </button>
          </router-link>
        </div>
      </div>
      <div class="flex ml-small mt-medium rounded ">
        <div
          class="pl-large w-52 h-26"
          v-if="nothingToShowUnfinished == true"
        >
          <div class="flex content-center justify-center">
            <h2>Nothing To Show!!</h2>
          </div>
        </div>
        <div
          class="container"
          v-for="(item, index) in assignedToyou"
          v-bind:key="item.id"
          v-bind:value="item.id"
        >
          <div
            v-if="index < 5"
            class="flex justify-center items-center ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
          >
            <div
              class="p-4 w-48 h-64"
              @Click="detail(`/admin/detail`, item.applicationType, item.id, item.applicant.id)"
            >
              <div class="flex content-center justify-center">
                <router-link to="/newlicense">
                  <!-- <img class="box-shadow-pop" v-bind:src="item.picture.large" /> -->
                  <img
                    class="box-shadow-pop"
                    src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
                  />
                </router-link>
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
      </div>

      <div class="flex pl-12 mt-medium">
        <Title message="Unassigned"/>
        <div class="flex ml-small" v-if="unassigned.length >= 5">
          <router-link to="/admin/unassigned">
            <button
              class="block mx-auto  bg-lightBlue-300 hover:bg-lightBlue-600 hover:shadow-lg"
            >
              View All
            </button>
          </router-link>
        </div>
      </div>

      <div class="box">
        <div class="flex ml-small mt-medium pb-large rounded">
          <div
            class="container flip-box"
            v-for="(item, index) in unassigned"
            v-bind:key="item.id"
            v-bind:value="item.id"
          >
            <div
              v-if="index < 5"
              class="flex justify-center items-center ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100 flip-box-front"
            >
              <div
                class="p-4 w-48 h-64"
                @mouseover="hover = true"
                @mouseleave="hover = false"
              >
                <div class="flex content-center justify-center">
                  <!-- <img
                      class="box-shadow-pop"
                      v-bind:src="item.picture.large"
                  /> -->
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
                  class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                >
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

            <div
              v-if="index < 5"
              class="absolute inset-0 flex justify-center items-center z-10 ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100 flip-box-back"
            >
              <div
                class="p-4 w-48 h-64"
                @mouseover="hover = true"
                @mouseleave="hover = false"
                @Click="detail(`/admin/unassignedDetail`, item.applicationType, item.id, item.applicant.id)"
              >
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
                  class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                >
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
                <div
                  class="flex ml-small w-32 pt-small justify-center content-center"
                >
                  <button
                    class="block mx-auto  bg-lightBlue-300 hover:bg-lightBlue-600 hover:shadow-lg"
                  >
                    Assign to
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Flip Box End!-->

      <!-- <div class="flex pl-12 mt-medium ">
        <Title message="Recently Finished" />
        <div class="flex ml-small" v-if="recentlyFinished.length >= 5">
          <router-link to="/newlicense">
            <button
              class="block mx-auto  bg-lightBlue-300 hover:bg-lightBlue-600 hover:shadow-lg"
            >
              View All
            </button>
          </router-link>
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
            class="justify-center items-center ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
          >
            <div
              class="p-4 w-48 h-64"
              @Click="detail(`/recentlyFinishedDetail`)"
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
              <h6
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                Approved
              </h6>
            </div>
          </div>
        </div>
      </div> -->
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

    let unfinished = ref({ applicant: { profile:{ name:"" , fatherName: ""} } , applicationStatus: { name: "" }});
    let assignedToyou = ref({ applicationStatus: { name: "" } });
    let unassigned = ref({ applicationStatus: { name: "" }});
    let recentlyFinished = ref({});
    let hover = ref(false);
    let userId = +localStorage.getItem("adminId");
    // let userId = 2;
    let x = ref([]);
    let activeFilters = ref([]);
    let nothingToShow = ref(false);
    let nothingToShowUnfinished = ref(false);

    const fetchUnfinished = () => {
      store.dispatch("reviewer/getUnfinished", userId).then(res => {
        if (res.status != "Error") {
          unfinished.value = res.data.data;
          for (var prop in unfinished.value) {
            console.log(unfinished.value[prop]);
            if (unfinished.value[prop].applicationType == "Renewal") {
              unfinished.value[prop].newLicenseCode =
                unfinished.value[prop].renewalCode;
            }
            if (unfinished.value[prop].applicationType == "Good Standing") {
              unfinished.value[prop].newLicenseCode =
                unfinished.value[prop].goodStandingCode;
            }
            if (unfinished.value[prop].applicationType == "Verification") {
              unfinished.value[prop].newLicenseCode =
                unfinished.value[prop].verificationCode;
            }
          }
          console.log(unfinished.value);
        } else {
          nothingToShowUnfinished.value = true;
        }
      });
      // store.dispatch("reviewer/getUnfinished", userId).then(res => {
      //   console.log(res.status);
      //   if (res.status != "Error") {
      //     // unfinished.value = res.data.results;
      //     x.value = res.data.data;

      //     unfinished.value = x.value.filter(a => {
      //       if (a.applicationStatus.code == "REVDRA") {
      //         return a;
      //       }
      //     });
      //     // assignedToyou.value = x.value.filter(a => {
      //     //   if (a.applicationStatus.code == "IRV") {
      //     //     return a;
      //     //   }
      //     // });
      //   } else {
      //     nothingToShow.value = true;
      //   }
      // });
    };

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
        } else {
          nothingToShow.value = true;
        }
      });
    };

    const fetchUnassignedApplications = () => {
      store.dispatch("reviewer/getUnassigned").then(res => {
        unassigned.value = res.data.data;
        for (var prop in unassigned.value) {
          console.log(unassigned.value[prop]);
          if (unassigned.value[prop].applicationType == "Renewal") {
            unassigned.value[prop].newLicenseCode =
              unassigned.value[prop].renewalCode;
          }
          if (unassigned.value[prop].applicationType == "Good Standing") {
            unassigned.value[prop].newLicenseCode =
              unassigned.value[prop].goodStandingCode;
          }
          if (unassigned.value[prop].applicationType == "Verification") {
            unassigned.value[prop].newLicenseCode =
              unassigned.value[prop].verificationCode;
          }
        }
        console.log(unassigned.value[0].applicationId);
        console.log(unassigned.value);
      });
    };

    const fetchRecentlyFinished = () => {
      store.dispatch("reviewer/getRecentlyFinished").then(res => {
        recentlyFinished.value = res.data.results;
      });
    };

    const detail = (data, applicationType, applicationId, applicantId) => {
      const url =
        data + "/" + applicationType + "/" + applicationId + "/" + applicantId;
      router.push(url);
    };

    onMounted(() => {
      console.log(localStorage);
      fetchUnfinished();
      // fetchAssignedtoYou();
      fetchUnassignedApplications();
      fetchRecentlyFinished();
      fetchAssignedtoYou();
    });

    return {
      userId,
      unfinished,
      assignedToyou,
      unassigned,
      recentlyFinished,
      hover,
      nothingToShow,
      nothingToShowUnfinished,
      detail,
      activeFilters
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
.hoveredCard {
  background-color: white;
}
/* .b{
  cursor: pointer;
  position: absolute;
  transform: translate(-50%, -50%);
} */
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

.flip-box .inner {
  /* position:absolute;
  perspective: inherit;
  z-index: 2;
  transform: translateY(-50%)translateZ(60px) scale(.94); */
}
/* .box {
  position: relative;
} */

.b {
  /* position: absolute; */
}
</style>
