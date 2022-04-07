<template>
  <div>
    <!-- <reviewer-nav-bar tab="newLicenseUnassigned" /> -->
    <div class="bg-lightBlueB-200 h-full" v-if="!allInfo.searchByInput">
      <div class="pl-12">
        <div style="border-bottom: 2px solid #eaeaea">
          <ul class="flex cursor-pointer">
            <li
              :class="[
                selectedTab == 'Unassigned'
                  ? selectedTabClass
                  : notSelectedTabClass,
              ]"
              @click="changeTab('Unassigned')"
              :style="[
                selectedTab == 'Unassigned'
                  ? 'background-color: white'
                  : 'background-color: #C3DBD9',
              ]"
            >
              New License
            </li>
            <li
              :class="[
                selectedTab == 'From Other Region'
                  ? selectedTabClass
                  : notSelectedTabClass,
              ]"
              :style="[
                selectedTab == 'From Other Region'
                  ? 'background-color: white'
                  : 'background-color: #C3DBD9',
              ]"
              @click="changeTab('From Other Region')"
            >
              Renewal
            </li>
          </ul>
        </div>
      </div>
      <div class="pl-12">
        <div>Filter By</div>
      </div>

      <div class="flex flex-wrap mb-medium pl-12 pt-1">
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
        <nothing-to-show :nothingToShow="nothingToShow" />
        <unassigned-applications
          :unassignedApplication="getNewLicenseUnassigned"
          app_type="New License"
        />
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
            'Unassigned Applicants on Date Range ' +
              moment(allInfo.searchFromDate).format('MMM D, YYYY') +
              ' To ' +
              moment(allInfo.searchUpToDate).format('MMM D, YYYY')
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
import UnassignedApplications from "../ChildApplicationTypes/UnassignedApplications.vue";
import NothingToShow from "../../ChildComponents/NothingToShow.vue";
import { useStore } from "vuex";
import store from "../../../../store";
import Spinner from "@/sharedComponents/Spinner";
import moment from "moment";
import filterApplication from "../../ChildComponents/FilteredDatas/FilterApplication.js";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import FilteredInfo from "../../ChildComponents/FilteredDatas/FilteredInfo.vue";
import applicationStatus from "../../Configurations/getApplicationStatus.js";

export default {
  computed: {
    moment: () => moment,
    getNewLicenseUnassigned() {
      return store.getters[
        "reviewerNewLicense/getNewLicenseUnassignedSearched"
      ];
    },
  },
  components: {
    ReviewerNavBar,
    ErrorFlashMessage,
    FilteredInfo,
    Spinner,
    NothingToShow,
    UnassignedApplications,
    Title,
  },
  setup() {
    const store = useStore();
    let newLicenseUnassigned = ref([]);

    let nothingToShow = ref(false);
    let showLoading = ref(false);

    let selectedTabClass = "py-2 px-6 bg-white rounded-t-lg mr-4";
    let notSelectedTabClass = "py-2 px-6 rounded-t-lg mr-4";

    let selectedTab = ref("New License");

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

    const filterAssignedApplication = () => {
      filterApplication(moment, allInfo.value);
    };

    const changeTab = (type) => {};

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
      const statusId = applicationStatus(store, "SUB");
      store
        .dispatch("reviewerNewLicense/getNewLicenseUnassigned", statusId)
        .then((res) => {
          showLoading.value = false;
          newLicenseUnassigned.value =
            store.getters["reviewerNewLicense/getNewLicenseUnassignedSearched"];
          allInfo.value.assignApplication =
            store.getters["reviewerNewLicense/getNewLicenseUnassignedSearched"];
          for (let applicant in allInfo.value.assignApplication) {
            if (
              allInfo.value.assignApplication[applicant].applicationType ===
              undefined
            ) {
              allInfo.value.assignApplication[applicant].applicationType =
                allInfo.value.assignApplication[applicant].applicantType;
            }
          }
          if (
            store.getters["reviewerNewLicense/getNewLicenseUnassigned"]
              .length === 0
          ) {
            nothingToShow.value = true;
          }
        });
    };

    onMounted(() => {
      fetchNewLicenseUnassigned();
    });

    return {
      nothingToShow,
      allInfo,
      showLoading,
      filterAssignedApplication,
      backClicked,
      selectedTabClass,
      notSelectedTabClass,
      selectedTab,
    };
  },
};
</script>
