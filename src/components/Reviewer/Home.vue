<template>
  <div>
    <ReviewerNavBar tab="Home" />
    <div class="bg-lightBlueB-200 h-full">
      <div class="flex pl-12 pt-medium">
        <div v-if="myTitleMessage">
          <Title message="My Unfinished" />
        </div>
        <div v-else>
          <Title message="Unfinished" />
        </div>

        <div class="flex ml-small" v-if="unfinished.length >= 5">
          <router-link to="/admin/unfinished">
            <button
              class="block mx-auto bg-lightBlue-300 hover:bg-lightBlue-600 hover:shadow-lg"
            >
              View All
            </button>
          </router-link>
        </div>
      </div>
      <div class="flex ml-small mt-medium rounded">
        <div class="pl-large w-52 h-26" v-if="nothingToShowUnfinished == true">
          <div class="flex content-center justify-center">
            <h2>Nothing To Show!</h2>
          </div>
        </div>
        <!-- <div v-if="nothingToShowUnfinished != true"> -->
        <!-- <div v-if="nothingToShowUnfinished != true"> -->
        <div
          class="container"
          v-for="(item, index) in unFinishedSearched"
          v-bind:key="item.id"
          v-bind:value="item.id"
        >
          <div
            v-if="index < 5"
            class="flex justify-center items-center ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
          >
            <div
              class="p-4 w-48 h-64"
              @Click="
                detail(
                  `/admin/unfinishedDetail`,
                  item.applicationType,
                  item.id,
                  item.applicant.id
                )
              "
            >
              <div class="flex content-center justify-center">
                <span v-if="item.profilePic != ''">
                  <img
                  class="box-shadow-pop"
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
                /> 
                  <!-- <img
                  class="box-shadow-pop"
                  :src="'https://hrlicensurebe.dev.k8s.sandboxaddis.com/'+item.profilePic"
                />  -->
                </span>
                <span v-else>
                   <img
                  class="box-shadow-pop"
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
                /> 
                </span>
              </div>
              <h4
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                <b>{{
                  item.applicant.profile.name
                    ? item.applicant.profile.name +
                      " " +
                      item.applicant.profile.fatherName
                    : "-"
                }}</b>
              </h4>
              <br/>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
                {{ item.applicationType ? item.applicationType : "-" }}
              </span>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
                {{ item.newLicenseCode ? item.newLicenseCode : "-" }}
              </span>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-end content-center">
                  {{item.createdAt ? moment(item.createdAt).fromNow() : '-'}}
              </span>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
      <div
        v-if="showUnfinishedLoading"
        class="flex content-center justify-center"
      >
        <Spinner />
      </div>

      <div v-if="adminRole === 'SA'">
        <div class="flex pl-12 mt-medium">
          <Title message="Others Unfinished" />
          <div class="flex ml-small" v-if="everyoneUnfinished.length >= 5">
            <router-link to="/admin/unfinishedAll">
              <button
                class="block mx-auto bg-lightBlue-300 hover:bg-lightBlue-600 hover:shadow-lg"
              >
                View All
              </button>
            </router-link>
          </div>
        </div>
        <div class="flex ml-small mt-medium rounded">
          <div
            class="pl-large w-52 h-26"
            v-if="nothingToShowAllUnfinished == true"
          >
            <div class="flex content-center justify-center">
              <h2>Nothing To Show!</h2>
            </div>
          </div>
          <!-- <div v-if="nothingToShowAllUnfinished != true"> -->
          <div
            class="container"
            v-for="(item, index) in unFinishedForEveryOneSearched"
            v-bind:key="item.id"
            v-bind:value="item.id"
          >
            <div
              v-if="index < 5"
              class="flex justify-center items-center ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
            >
              <div
                class="p-4 w-48 h-64"
                @Click="
                  detail(
                    `/admin/unfinishedDetail`,
                    item.applicationType,
                    item.id,
                    item.applicant.id
                  )
                "
              >
                <div class="flex content-center justify-center">
                  <span v-if="item.profilePic != ''">
                    <img
                  class="box-shadow-pop"
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
                /> 
                  <!-- <img
                  class="box-shadow-pop"
                  :src="'https://hrlicensurebe.dev.k8s.sandboxaddis.com/'+item.profilePic"
                />  -->
                </span>
                <span v-else>
                   <img
                  class="box-shadow-pop"
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
                /> 
                </span>
                </div>
                <h4
                  class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                >
                  <b>{{
                    item.applicant.profile.name
                      ? item.applicant.profile.name +
                        " " +
                        item.applicant.profile.fatherName
                      : "-"
                  }}</b>
                </h4>
                <span
                  class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                >
                <i class="fas fa-user-cog"></i> &nbsp;
                  {{ item.reviewer.name ? item.reviewer.name : "-" }}
                </span>
                <!-- <h6
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center">
                {{ item.createdAt ? item.createdAt : "-" }}
              </h6> -->
                <span
                  class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                >
                  {{ item.applicationType ? item.applicationType : "-" }}
                </span>
                <span
                  class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                >
                  {{ item.newLicenseCode ? item.newLicenseCode : "-" }}
                </span>
                <span
                class="text-lightBlueB-500 mt-tiny flex justify-end content-center">
                  {{item.createdAt ? moment(item.createdAt).fromNow() : '-'}}
              </span>
              </div>
            </div>
          </div>
          <!-- </div> -->
        </div>
        <div
          v-if="showAllUnfinishedLoaing"
          class="flex content-center justify-center"
        >
          <Spinner />
        </div>
      </div>

      <div class="flex pl-12 mt-medium">
        <Title message="Assigned to You" />
        <div class="flex ml-small" v-if="assignedToyou.length >= 5">
          <router-link to="/admin/assignedToyou">
            <button
              class="block mx-auto bg-lightBlue-300 hover:bg-lightBlue-600 hover:shadow-lg"
            >
              View All
            </button>
          </router-link>
        </div>
      </div>
      <div class="flex ml-small mt-medium rounded">
        <div class="pl-large w-52 h-26" v-if="nothingToShow == true">
          <div class="flex content-center justify-center">
            <h2>Nothing To Show!</h2>
          </div>
        </div>
        <div
          class="container"
          v-for="(item, index) in assignedToYouSearched"
          v-bind:key="item.id"
          v-bind:value="item.id"
        >
          <div
            v-if="index < 5"
            class="flex justify-center items-center ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
          >
            <div
              class="p-4 w-48 h-64"
              @Click="
                detail(
                  `/admin/detail`,
                  item.applicationType,
                  item.id,
                  item.applicant.id
                )
              "
            >
              <div class="flex content-center justify-center">
                <router-link to="/newlicense">
                  <span v-if="item.profilePic != ''">
                    <img
                  class="box-shadow-pop"
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
                /> 
                  <!-- <img
                  class="box-shadow-pop"
                  :src="'https://hrlicensurebe.dev.k8s.sandboxaddis.com/'+item.profilePic"
                />  -->
                </span>
                <span v-else>
                   <img
                  class="box-shadow-pop"
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
                /> 
                </span>
                </router-link>
              </div>
              <h4
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
              >
                <b>{{
                  item.applicant.profile.name
                    ? item.applicant.profile.name +
                      " " +
                      item.applicant.profile.fatherName
                    : "-"
                }}</b>
              </h4>
              <!-- <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
                {{ item.createdAt ? item.createdAt : "-" }}
              </span> -->
              <br />
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
                {{ item.applicationType ? item.applicationType : "-" }}
              </span>
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
              >
                {{ item.newLicenseCode ? item.newLicenseCode : "-" }}
              </span>
              <!-- <br/> -->
              <span
                class="text-lightBlueB-500 mt-tiny flex justify-end content-center">
                  {{item.createdAt ? moment(item.createdAt).fromNow() : '-'}}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="showAssignedToMeLoading"
        class="flex content-center justify-center"
      >
        <Spinner />
      </div>
      <div v-if="adminRole === 'SA'">
        <div class="flex pl-12 mt-medium">
          <Title message="Assigned to Others" />
          <div class="flex ml-small" v-if="assignedToEveryone.length >= 5">
            <router-link to="/admin/assignedToyou">
              <button
                class="block mx-auto bg-lightBlue-300 hover:bg-lightBlue-600 hover:shadow-lg"
              >
                View All
              </button>
            </router-link>
          </div>
        </div>

        <div class="flex ml-small mt-medium rounded">
          <div
            class="pl-large w-52 h-26"
            v-if="nothingToShowEveryoneAssigned == true"
          >
            <div class="flex content-center justify-center">
              <h2>Nothing To Show!</h2>
            </div>
          </div>
          <div
            class="container"
            v-for="(item, index) in assignedToEveryOneSearched"
            v-bind:key="item.id"
            v-bind:value="item.id"
          >
            <div
              v-if="index < 5"
              class="flex justify-center items-center ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
            >
              <div
                class="p-4 w-48 h-64"
                @Click="
                  detail(
                    `/admin/detail`,
                    item.applicationType,
                    item.id,
                    item.applicant.id
                  )
                "
              >
                <div class="flex content-center justify-center">
                  <router-link to="/newlicense">
                    <span v-if="item.profilePic != ''">
                      <img
                  class="box-shadow-pop"
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
                /> 
                  <!-- <img
                  class="box-shadow-pop"
                  :src="'https://hrlicensurebe.dev.k8s.sandboxaddis.com/'+item.profilePic"
                />  -->
                </span>
                <span v-else>
                   <img
                  class="box-shadow-pop"
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
                /> 
                </span>
                  </router-link>
                </div>
                <h4
                  class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                >
                  <b>{{
                    item.applicant.profile.name
                      ? item.applicant.profile.name +
                        " " +
                        item.applicant.profile.fatherName
                      : "-"
                  }}</b>
                </h4>
                <span
                  class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                >
                  <!-- Assigned Reviewer: -->
                  <!-- <i class="far fa-user-cog"></i> -->
                  <i class="fas fa-user-cog"></i> &nbsp;
                   {{ item.reviewer.name ? item.reviewer.name : "-" }}
                </span>
                <!-- <h6
                class="text-lightBlueB-500 mt-tiny flex justify-center content-center">
                {{ item.createdAt ? item.createdAt : "-" }}
              </h6> -->
                <span
                  class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                >
                  {{ item.applicationType ? item.applicationType : "-" }}
                </span>
                <span
                  class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                >
                  {{ item.newLicenseCode ? item.newLicenseCode : "-" }}
                </span>
                <span
                class="text-lightBlueB-500 mt-tiny flex justify-end content-center">
                  {{item.createdAt ? moment(item.createdAt).fromNow() : '-'}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="showAssignedToOthersLoading"
        class="flex content-center justify-center"
      >
        <Spinner />
      </div>

      <div class="flex pl-12 mt-medium">
        <Title message="Unassigned" />
        <div class="flex ml-small" v-if="unassigned.length >= 5">
          <router-link to="/admin/unassigned">
            <button
              class="block mx-auto bg-lightBlue-300 hover:bg-lightBlue-600 hover:shadow-lg"
            >
              View All
            </button>
          </router-link>
        </div>
      </div>

      <div class="box">
        <div class="flex ml-small mt-medium pb-large rounded">
          <div
            class="pl-large w-52 h-26"
            v-if="nothingToShowUnassigned == true"
          >
            <div class="flex content-center justify-center">
              <h2>Nothing To Show!</h2>
            </div>
          </div>
          <div
            class="container flip-box"
            v-for="(item, index) in unAssignedSearched"
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
                  <img
                    class="box-shadow-pop"
                    src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp"
                  />
                </div>
                <h4
                  class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                >
                  <b>{{
                    item.applicant.profile.name
                      ? item.applicant.profile.name +
                        " " +
                        item.applicant.profile.fatherName
                      : "-"
                  }}</b>
                </h4>
                <span
                  class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                >
                  unassigned
                </span>
                <span
                  class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                >
                  {{ item.applicationType ? item.applicationType : "-" }}
                </span>
                <span
                  class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                >
                  {{ item.newLicenseCode ? item.newLicenseCode : "-" }}
                </span>
                <span class="text-lightBlueB-500 mt-tiny flex justify-end content-center">

                  {{item.createdAt ? moment(item.createdAt).fromNow() : '-'}}

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
                @Click="
                  detail(
                    `/admin/unassignedDetail`,
                    item.applicationType,
                    item.id,
                    item.applicant.id
                  )
                "
              >
                <h4
                  class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                >
                  <b>{{
                    item.applicant.profile.name
                      ? item.applicant.profile.name +
                        " " +
                        item.applicant.profile.fatherName
                      : "-"
                  }}</b>
                </h4>
                <span
                  class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                >
                  {{ item.applicationType ? item.applicationType : "-" }}
                </span>
                <span
                  class="text-lightBlueB-500 mt-tiny flex justify-start content-center"
                >
                  {{ item.newLicenseCode ? item.newLicenseCode : "-" }}
                </span>
                <span
                class="text-lightBlueB-500 mt-tiny flex justify-end content-center">
                  {{item.createdAt ? moment(item.createdAt).fromNow() : '-'}}
                </span>
                <div
                  class="flex ml-small w-32 pt-small justify-center content-center"
                >
                  <button
                    class="block mx-auto bg-lightBlue-300 hover:bg-lightBlue-600 hover:shadow-lg"
                  >
                    Assign to
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="showUnassignedLoading"
        class="flex content-center justify-center"
      >
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/sharedComponents/TitleWithIllustration";
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref, onMounted, watch } from "vue";
import store from "../../store";
import Spinner from "@/sharedComponents/Spinner";
import moment from 'moment';

export default {
  components: { ReviewerNavBar, Title, Spinner },
  computed: {
    moment: () => moment,
    unAssignedSearched() {
      return store.getters["reviewer/getUnassignedSearched"];
    },
    unFinishedSearched() {
      return store.getters["reviewer/getUnfinishedSearched"];
    },
    assignedToYouSearched() {
      return store.getters["reviewer/getAssignedToYouSearched"];
    },
    unFinishedForEveryOneSearched() {
      return store.getters["reviewer/getEveryOneUnfinishedSearched"];
    },
    assignedToEveryOneSearched() {
      return store.getters["reviewer/getAssignedForEveryOneSearched"];
    },
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    let unfinished = ref({
      applicant: { profile: { name: "", fatherName: "" } },
      applicationStatus: { name: "" },
    });
    let assignedToyou = ref({ applicationStatus: { name: "" } });
    let unassigned = ref({ applicationStatus: { name: "" } });
    let recentlyFinished = ref({});
    let assignedToEveryone = ref({});
    let everyoneUnfinished = ref({
      applicant: { profile: { name: "", fatherName: "" } },
      applicationStatus: { name: "" },
    });
    let hover = ref(false);
    let userId = +localStorage.getItem("adminId");
    let adminRole = localStorage.getItem("role");
    let x = ref([]);
    let activeFilters = ref([]);
    let nothingToShow = ref(false);
    let nothingToShowUnassigned = ref(false);
    let nothingToShowEveryoneAssigned = ref(false);
    let nothingToShowAllUnfinished = ref(false);

    let profilePic = ref("");

    let nothingToShowUnfinished = ref(false);

    let myTitleMessage = ref(false);

    let showUnfinishedLoading = ref(false);
    let showAllUnfinishedLoaing = ref(false);
    let showAssignedToMeLoading = ref(false);
    let showAssignedToOthersLoading = ref(false);
    let showUnassignedLoading = ref(false);

    adminRole === "SA"
      ? (myTitleMessage.value = true)
      : (myTitleMessage.value = false);
    const fetchUnfinished = () => {
      showUnfinishedLoading.value = true;
      store.dispatch("reviewer/getUnfinished", userId).then((res) => {
        showUnfinishedLoading.value = false;
        if (store.getters["reviewer/getUnfinishedSearched"].length !== 0) {
          unfinished.value = store.getters["reviewer/getUnfinishedSearched"];
          for (var prop in store.getters["reviewer/getUnfinishedSearched"]) {
            if(store.getters["reviewer/getUnfinishedSearched"][prop].documents !== null) {
              for(var psp in store.getters["reviewer/getUnfinishedSearched"][prop].documents) {
                if(store.getters["reviewer/getUnfinishedSearched"][prop].documents[psp].documentTypeCode === "LHI") {
                  store.getters["reviewer/getUnfinishedSearched"][prop].profilePic = store.getters["reviewer/getUnfinishedSearched"][prop].documents[psp].fileName
                  // store.getters["reviewer/getUnfinishedSearched"]
                  break;
                }
              }
            }
            
            if (
              store.getters["reviewer/getUnfinishedSearched"][prop]
                .applicationType == "Renewal"
            ) {
              store.getters["reviewer/getUnfinishedSearched"][
                prop
              ].newLicenseCode =
                store.getters["reviewer/getUnfinishedSearched"][
                  prop
                ].renewalCode;
            }
            if (
              store.getters["reviewer/getUnfinishedSearched"][prop]
                .applicationType == "Good Standing"
            ) {
              store.getters["reviewer/getUnfinishedSearched"][
                prop
              ].newLicenseCode =
                store.getters["reviewer/getUnfinishedSearched"][
                  prop
                ].goodStandingCode;
            }
            if (
              store.getters["reviewer/getUnfinishedSearched"][prop]
                .applicationType == "Verification"
            ) {
              store.getters["reviewer/getUnfinishedSearched"][
                prop
              ].newLicenseCode =
                store.getters["reviewer/getUnfinishedSearched"][
                  prop
                ].verificationCode;
            }
          }
        } else {
          nothingToShowUnfinished.value = true;
        }
      });
    };

    const fetchAssignedtoYou = () => {
      showAssignedToMeLoading.value = true;
      store.dispatch("reviewer/getAssignedToYou", userId).then((res) => {
        showAssignedToMeLoading.value = false;
        if (store.getters["reviewer/getAssignedToYouSearched"].length !== 0) {
          assignedToyou.value =
            store.getters["reviewer/getAssignedToYouSearched"];
          for (var prop in store.getters["reviewer/getAssignedToYouSearched"]) {

            if(store.getters["reviewer/getAssignedToYouSearched"][prop].documents !== null) {
              for(var psp in store.getters["reviewer/getAssignedToYouSearched"][prop].documents) {
                if(store.getters["reviewer/getAssignedToYouSearched"][prop].documents[psp].documentTypeCode === "PSP") {
                  store.getters["reviewer/getAssignedToYouSearched"][prop].profilePic = store.getters["reviewer/getAssignedToYouSearched"][prop].documents[psp].fileName
                  // store.getters["reviewer/getUnfinishedSearched"]
                  break;
                }
              }
            }

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

    const fetchAssignedToEveryone = () => {
      showAssignedToOthersLoading.value = true;
      store.dispatch("reviewer/getAssignedToEveryOne").then((res) => {
        showAssignedToOthersLoading.value = false;
        assignedToEveryone.value =
          store.getters["reviewer/getAssignedForEveryOneSearched"];
        if (
          store.getters["reviewer/getAssignedForEveryOneSearched"].length !== 0
        ) {
          // do some logic to manipulate data
          for (var prop in store.getters["reviewer/getAssignedForEveryOneSearched"]) {
            if(store.getters["reviewer/getAssignedForEveryOneSearched"][prop].documents !== null) {
              for(var psp in store.getters["reviewer/getAssignedForEveryOneSearched"][prop].documents) {
                if(store.getters["reviewer/getAssignedForEveryOneSearched"][prop].documents[psp].documentTypeCode === "PSP") {
                  store.getters["reviewer/getAssignedForEveryOneSearched"][prop].profilePic = store.getters["reviewer/getAssignedForEveryOneSearched"][prop].documents[psp].fileName
                  // store.getters["reviewer/getUnfinishedSearched"]
                  break;
                }
              }
            }

            if (
              store.getters["reviewer/getAssignedForEveryOneSearched"][prop]
                .applicationType == "Renewal"
            ) {
              store.getters["reviewer/getAssignedForEveryOneSearched"][
                prop
              ].newLicenseCode =
                store.getters["reviewer/getAssignedForEveryOneSearched"][
                  prop
                ].renewalCode;
            }
            if (
              store.getters["reviewer/getAssignedForEveryOneSearched"][prop]
                .applicationType == "Good Standing"
            ) {
              store.getters["reviewer/getAssignedForEveryOneSearched"][
                prop
              ].newLicenseCode =
                store.getters["reviewer/getAssignedForEveryOneSearched"][
                  prop
                ].goodStandingCode;
            }
            if (
              store.getters["reviewer/getAssignedForEveryOneSearched"][prop]
                .applicationType == "Verification"
            ) {
              store.getters["reviewer/getAssignedForEveryOneSearched"][
                prop
              ].newLicenseCode =
                store.getters["reviewer/getAssignedForEveryOneSearched"][
                  prop
                ].verificationCode;
            }
          }
        } else {
          nothingToShowEveryoneAssigned.value = true;
        }
      });
    };

    const fetchEveryOneUnfinished = () => {
      showAllUnfinishedLoaing.value = true;
      store.dispatch("reviewer/getEveryOneUnfinished").then((res) => {
        showAllUnfinishedLoaing.value = false;
        everyoneUnfinished.value =
          store.getters["reviewer/getEveryOneUnfinishedSearched"];
        console.log("every one unfinished", everyoneUnfinished.value);
        
        if (
          store.getters["reviewer/getEveryOneUnfinishedSearched"].length !== 0
        ) {
          for (var prop in store.getters["reviewer/getEveryOneUnfinishedSearched"]) {
            if(store.getters["reviewer/getEveryOneUnfinishedSearched"][prop].documents !== null) {
              for(var psp in store.getters["reviewer/getEveryOneUnfinishedSearched"][prop].documents) {
                if(store.getters["reviewer/getEveryOneUnfinishedSearched"][prop].documents[psp].documentTypeCode === "PSP") {
                  store.getters["reviewer/getEveryOneUnfinishedSearched"][prop].profilePic = store.getters["reviewer/getEveryOneUnfinishedSearched"][prop].documents[psp].fileName
                  // store.getters["reviewer/getUnfinishedSearched"]
                  break;
                }
              }
            }
            if (
              store.getters["reviewer/getEveryOneUnfinishedSearched"][prop]
                .applicationType == "Renewal"
            ) {
              store.getters["reviewer/getEveryOneUnfinishedSearched"][
                prop
              ].newLicenseCode =
                store.getters["reviewer/getEveryOneUnfinishedSearched"][
                  prop
                ].renewalCode;
            }
            if (
              store.getters["reviewer/getEveryOneUnfinishedSearched"][prop]
                .applicationType == "Good Standing"
            ) {
              store.getters["reviewer/getEveryOneUnfinishedSearched"][
                prop
              ].newLicenseCode =
                store.getters["reviewer/getEveryOneUnfinishedSearched"][
                  prop
                ].goodStandingCode;
            }
            if (
              store.getters["reviewer/getEveryOneUnfinishedSearched"][prop]
                .applicationType == "Verification"
            ) {
              store.getters["reviewer/getEveryOneUnfinishedSearched"][
                prop
              ].newLicenseCode =
                store.getters["reviewer/getEveryOneUnfinishedSearched"][
                  prop
                ].verificationCode;
            }
          }
          // do some logic to manipulate data
        } else {
          nothingToShowAllUnfinished.value = true;
        }
      });
    };

    const fetchUnassignedApplications = () => {
      showUnassignedLoading.value = true;
      store.dispatch("reviewer/getUnassigned").then((res) => {
        showUnassignedLoading.value = false;
        unassigned.value = store.getters["reviewer/getUnassignedSearched"];
        if (store.getters["reviewer/getUnassignedSearched"].length !== 0) {
          for (var prop in store.getters["reviewer/getUnassignedSearched"]) {
            if(unassigned.value[prop].documents !== null) {
              for(var psp in unassigned.value[prop].documents) {
                if(unassigned.value[prop].documents[psp].documentTypeCode === "PSP") {
                  unassigned.value[prop].profilePic = unassigned.value[prop].documents[psp].fileName
                  // store.getters["reviewer/getUnfinishedSearched"]
                  break;
                }
              }
            }

            if (
              unassigned.value[prop]
                .applicationType == "Renewal"
            ) {
              unassigned.value[
                prop
              ].newLicenseCode =
                unassigned.value[
                  prop
                ].renewalCode;
            }
            if (
              unassigned.value[prop]
                .applicationType == "Good Standing"
            ) {
              unassigned.value[
                prop
              ].newLicenseCode =
                unassigned.value[
                  prop
                ].goodStandingCode;
            }
            if (
              unassigned.value[prop]
                .applicationType == "Verification"
            ) {
              unassigned.value[
                prop
              ].newLicenseCode =
                unassigned.value[
                  prop
                ].verificationCode;
            }
          }
        } else {
          nothingToShowUnassigned.value = true;
        }
      });
    };

    // const fetchRecentlyFinished = () => {
    //   store.dispatch("reviewer/getRecentlyFinished").then((res) => {
    //     // recentlyFinished.value = res.data.results;
    //   });
    // };

    const detail = (data, applicationType, applicationId, applicantId) => {
      const url =
        data + "/" + applicationType + "/" + applicationId + "/" + applicantId;
      router.push(url);
    };

    onMounted(() => {
      fetchUnfinished();
      // fetchAssignedtoYou();
      fetchUnassignedApplications();
      // fetchRecentlyFinished();
      fetchAssignedtoYou();
      if (adminRole === "SA") {
        fetchAssignedToEveryone();
        fetchEveryOneUnfinished();
      }
    });

    return {
      userId,
      adminRole,
      unfinished,
      assignedToyou,
      assignedToEveryone,
      unassigned,
      recentlyFinished,
      everyoneUnfinished,
      hover,
      nothingToShow,
      nothingToShowUnfinished,
      nothingToShowUnassigned,
      nothingToShowEveryoneAssigned,
      nothingToShowAllUnfinished,
      detail,
      activeFilters,
      myTitleMessage,
      showUnfinishedLoading,
      showAllUnfinishedLoaing,
      showAssignedToMeLoading,
      showAssignedToOthersLoading,
      showUnassignedLoading,
      profilePic
    };
  },
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
