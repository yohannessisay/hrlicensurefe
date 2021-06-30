<template>
  <div>
    <reviewer-nav-bar tab="newLicenseUnassigned" />
    <div class="bg-lightBlueB-200 h-full" v-if="!allInfo.searchByInput">
      <div class="pl-12">
        <div>Filter By</div>
      </div>

      <div class="flex flex-wrap mb-medium pl-12 pt-1">
        <!-- <label class="text-primary-700">Type</label> -->
        <!-- <select class="max-w-3xl mr-2" v-model="allInfo.app_type">
          <option
            v-for="item in applicationTypes"
            v-bind:key="item.id"
            v-bind:value="item.name"
          >
            {{ item.name }}
          </option>
        </select> -->
        <label class="text-primary-700 mr-2">From</label>
        <input
          class="max-w-3xl mr-5"
          type="date"
          v-model="allInfo.searchFromDate"
        />
        <label class="text-primary-700 mr-2">To</label>
        <input
          class="max-w-3xl mr-5"
          type="date"
          v-model="allInfo.searchUpToDate"
        />
        <button @click="filterAssignedApplication">
          Filter
        </button>
      </div>
      <div class="flex pl-12 pt-tiny">
        <Title message="New License Unassigned" />
      </div>
      <div class="flex flex-wrap pb-medium rounded h-full" v-if="!showLoading">
        <nothing-to-show :nothingToShow="nothingToShowUnfinished" />
        <!-- <my-unfinished :unFinishedSearched="getNewLicenseUnassigned" /> -->
        <!-- <unassigned-new-license :newLicenseUnassigned="getNewLicenseUnassigned" /> -->
        <unassigned-applications :unassignedApplication="getNewLicenseUnassigned" app_type="New License"/>
      </div>
    </div>
    <div
      v-if="showLoading"
      class="flex justify-center justify-items-center mt-24"
    >
      <Spinner />
    </div>
    <div class="bg-lightBlueB-200 h-full" v-if="allInfo.searchByInput">
      <div class="flex pl-12 pt-tiny">
        <Title
        :message="
          'Unassigned Applicants on Date Range ' + moment(allInfo.searchFromDate).format('MMM D, YYYY') + ' To ' + moment(allInfo.searchUpToDate).format('MMM D, YYYY')
        "
      />
        <button @click="backClicked">back</button>
      </div>
      <filtered-info
        :filteredData="allInfo.filteredByDate"
        type="unassignedDetail"
        app_type="New License"
      />
    </div>
  </div>
  <div v-if="allInfo.message.showErrorFlash">
    <ErrorFlashMessage
      message="Date Range is not valid, Please Enter Valid Date"
    />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Title from "@/sharedComponents/TitleWithIllustration";
import ReviewerNavBar from "../../ReviewerNavBar.vue";
import UnassignedNewLicense from "./NewLicneseChildComponents/UnassignedNewLicense.vue"
import UnassignedApplications from "../ChildApplicationTypes/UnassignedApplications.vue"
import NothingToShow from "../../ChildComponents/NothingToShow.vue";
import { useStore } from "vuex";
import store from "../../../../store";
import Spinner from "@/sharedComponents/Spinner";
import moment from "moment";
import filterApplication from "../../ChildComponents/FilteredDatas/FilterApplication.js";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import FilteredInfo from "../../ChildComponents/FilteredDatas/FilteredInfo.vue";


export default {
  computed: {
    moment: () => moment,
    getNewLicenseUnassigned() {
      return store.getters["reviewer/getNewLicenseUnassignedSearched"];
    },
  },
  components: {
    ReviewerNavBar,
    ErrorFlashMessage,
    FilteredInfo,
    Spinner,
    UnassignedNewLicense,
    NothingToShow,
    UnassignedApplications,
    Title,
  },
  setup() {
    const store = useStore();
    let newLicenseUnassigned = ref([]);

    let nothingToShowonReview = ref(false);
    let showLoading = ref(false);

    let allInfo = ref({
      alreadyPushed: false,
      searchByInput: false,
      assignApplication: [],
      message: {
        showErrorFlash: false,
      },
      filteredByDate: [],
      searchFromDate: "",
      searchUpToDate: "",
      app_type: "",
    });

    const applicationTypes = ref([
      {
        id: 1,
        name: "",
      },
      {
        id: 2,
        name: "Verification",
      },
      {
        id: 3,
        name: "New License",
      },
      {
        id: 4,
        name: "Good Standing",
      },
      {
        id: 5,
        name: "Renewal",
      },
    ]);

    const filterAssignedApplication = () => {
      filterApplication(moment, allInfo.value);
    };

    const backClicked = () => {
      allInfo.value.searchByInput = false;
      allInfo.value.filteredByDate = [];
      allInfo.value.alreadyPushed = false;
      allInfo.value.searchFromDate = "";
      allInfo.value.searchUpToDate = "";
      allInfo.value.app_type = "";
    };

    const fetchNewLicenseUnassigned = () => {
      showLoading.value = true;
      store.dispatch("reviewer/getNewLicenseUnassigned").then((res) => {
        showLoading.value = false;
        newLicenseUnassigned.value =
          store.getters["reviewer/getNewLicenseUnassignedSearched"];
        allInfo.value.assignApplication =
          store.getters["reviewer/getNewLicenseUnassignedSearched"];

        console.log("new license unassigned---", store.getters["reviewer/getNewLicenseUnassignedSearched"]);

        for (let applicant in allInfo.value.assignApplication) {
          allInfo.value.assignApplication[applicant].createdAt = moment(
            allInfo.value.assignApplication[applicant].createdAt
          ).format("MMMM D, YYYY");
          if (
            allInfo.value.assignApplication[applicant].applicationType ===
            undefined
          ) {
            allInfo.value.assignApplication[applicant].applicationType =
              allInfo.value.assignApplication[applicant].applicantType;
          }
        }
        if (store.getters["reviewer/getNewLicenseUnassigned"].length === 0) {
          nothingToShowonReview.value = true;
        }
      });
    };
    onMounted(() => {
      fetchNewLicenseUnassigned();
    });

    return {
      nothingToShowonReview,
      allInfo,
      applicationTypes,
      showLoading,
      filterAssignedApplication,
      backClicked,
    };
  },
};
</script>
