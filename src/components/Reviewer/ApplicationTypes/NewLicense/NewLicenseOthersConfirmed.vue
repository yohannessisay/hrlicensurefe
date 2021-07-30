<template>
  <div>
    <reviewer-nav-bar tab="othersNewLicenseConfirmed" />
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
        <button @click="filterConfirmedApplication">
          Filter
        </button>
      </div>
    
      <div class="flex pl-12 pt-tiny">
        <Title message="Others New License Confirmed" />
      </div>
      <div class="flex flex-wrap pb-medium rounded h-full" v-if="!showLoading">
        <nothing-to-show :nothingToShow="nothingToShow" />
        <confirmed-applications
          :confirmedApplication="getNewLicenseOthersConfirmed"
          app_type="New License"
          all_confirmed="true"
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
            'Others Confirmed Applicants on Date Range ' +
              moment(allInfo.searchFromDate).format('MMM D, YYYY') +
              ' To ' +
              moment(allInfo.searchUpToDate).format('MMM D, YYYY')
          "
        />
        <button @click="backClicked">back</button>
      </div>
      <filtered-info
        :filteredData="allInfo.filteredByDate"
        type="applicant-detail"
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
import ConfirmedApplications from "../ChildApplicationTypes/ConfirmedApplications.vue";
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
    getNewLicenseOthersConfirmed() {
      return store.getters[
        "reviewerNewLicense/getNewLicenseOthersConfirmedSearched"
      ];
    },
  },
  components: {
    ReviewerNavBar,
    ErrorFlashMessage,
    FilteredInfo,
    Spinner,
    NothingToShow,
    ConfirmedApplications,
    Title,
  },
  setup() {
    const store = useStore();

    let newLicenseConfirmed = ref([]);

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

    const filterConfirmedApplication = () => {
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

    const fetchNewLicenseConfirmed = () => {
      showLoading.value = true;
      store
        .dispatch("reviewerNewLicense/getNewLicenseOthersConfirmed", adminId)
        .then((res) => {
          showLoading.value = false;
          newLicenseConfirmed.value =
            store.getters[
              "reviewerNewLicense/getNewLicenseOthersConfirmedSearched"
            ];
          allInfo.value.assignApplication =
            store.getters[
              "reviewerNewLicense/getNewLicenseOthersConfirmedSearched"
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
            newLicenseConfirmed.value.length === 0
          ) {
            nothingToShow.value = true;
          }
        });
    };
    onMounted(() => {
      fetchNewLicenseConfirmed();
    });

    return {
      nothingToShow,
      allInfo,
      showLoading,
      filterConfirmedApplication,
      backClicked,
    };
  },
};
</script>
