<template>
  <div>
    <reviewer-nav-bar tab="renewalUnderSuperVision" />
    <div class="bg-lightBlueB-200 h-full" v-if="!allInfo.searchByInput">
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
        <button @click="filterUnderSuperVisionApplication">
          Filter
        </button>
      </div>
      
      <div class="flex pl-12 pt-tiny" v-if="expertLevel === 3">
        <Title message="Renewal Finished" />
      </div>
      <div class="flex pl-12 pt-tiny" v-else>
        <Title message="Renewal Under Super Vision" />
      </div>
      <div class="flex flex-wrap pb-medium rounded h-full" v-if="!showLoading">
        <nothing-to-show :nothingToShow="nothingToShow" />
        <under-super-vision-applications
          :underSuperVisionApplication="getRenewalUnderSuperVision"
          app_type="Renewal"
          all_underSuperVision="false"
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
            'Under Super Vision Applicants on Date Range ' +
              moment(allInfo.searchFromDate).format('MMM D, YYYY') +
              ' To ' +
              moment(allInfo.searchUpToDate).format('MMM D, YYYY')
          "
        />
        <button @click="backClicked">back</button>
      </div>
      <filtered-info
        :filteredData="allInfo.filteredByDate"
        type="under-super-vision-detail"
        app_type="Renewal"
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
import UnderSuperVisionApplications from "../ChildApplicationTypes/UnderSuperVisionApplications.vue";
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
    getRenewalUnderSuperVision() {
      return store.getters[
        "reviewerRenewal/getRenewalUnderSuperVisionSearched"
      ];
    },
  },
  components: {
    ReviewerNavBar,
    ErrorFlashMessage,
    FilteredInfo,
    Spinner,
    NothingToShow,
    UnderSuperVisionApplications,
    Title,
  },
  setup() {
    const store = useStore();

    let expertLevel = JSON.parse(localStorage.getItem("allAdminData")).expertLevelId

    let renewalUnderSuperVision = ref([]);

    const adminId = +localStorage.getItem("adminId");

    let nothingToShow = ref(false);
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

    const filterUnderSuperVisionApplication = () => {
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

    const fetchRenewalUnderSuperVision = () => {
      showLoading.value = true;
      store
        .dispatch("reviewerRenewal/getRenewalUnderSuperVision", adminId)
        .then((res) => {
          showLoading.value = false;
          renewalUnderSuperVision.value =
            store.getters[
              "reviewerRenewal/getRenewalUnderSuperVisionSearched"
            ];
          allInfo.value.assignApplication =
            store.getters[
              "reviewerRenewal/getRenewalUnderSuperVisionSearched"
            ];

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
          if (
            renewalUnderSuperVision.value.length === 0
          ) {
            nothingToShow.value = true;
          }
        });
    };
    onMounted(() => {
      fetchRenewalUnderSuperVision();
    });

    return {
      expertLevel,
      nothingToShow,
      allInfo,
      showLoading,
      filterUnderSuperVisionApplication,
      backClicked,
    };
  },
};
</script>
