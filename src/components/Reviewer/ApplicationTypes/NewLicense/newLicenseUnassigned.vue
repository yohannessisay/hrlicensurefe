<template>
  <reviewer-nav-bar tab="newLicenseUnassigned" />
  <div style="width: 100%" class="flex flex-row">
    <div class="sidenav">
      <reviewer-side-nav />
    </div>
    <div class="menu" style="width: -webkit-fill-available">
      <div class="wrapper">
        <div class="tabs">
          <div class="tab">
            <input
              type="radio"
              name="css-tabs"
              id="tab-1"
              checked
              class="tab-switch"
            />
            <label for="tab-1" class="tab-label">Unassigned</label>
            <div class="tab-content">
              <h2>Unassigned</h2>
            </div>
          </div>
       

          
        </div>
      </div>
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
import ReviewerSideNav from "../../ReviewerSideNav.vue";

export default {
  computed: {
    moment: () => moment,
    getNewLicenseUnassigned() {
      return store.getters[
        "reviewerNewLicense/getNewLicenseUnassignedSearched"
      ];
    },
    getNewLicenseFromOtherRegion() {
      return store.getters[
        "reviewerNewLicense/getNewLicenseFromOtherRegionSearched"
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
    ReviewerSideNav,
  },
  setup() {
    const store = useStore();
    let expertLevel = JSON.parse(
      localStorage.getItem("allAdminData")
    ).expertLevelId;

    let newLicenseUnassigned = ref([]);
    let newLicenseFromOtherRegion = ref([]);

    let nothingToShowUnassigned = ref(false);
    let nothingToShowFromOtherRegion = ref(false);

    let showLoadingUnassigned = ref(false);
    let showLoadingFromOtherRegion = ref(false);

    let selectedTabClass = "py-2 px-6 bg-white rounded-t-lg mr-4";
    let notSelectedTabClass = "py-2 px-6 rounded-t-lg mr-4";
    let message = ref("New License Unassigned");

    let selectedTab = ref("Unassigned");

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

    const changeTab = (type) => {
      selectedTab.value = type;
      message.value = `New License ${type}`;

      type == "Unassigned"
        ? (allInfo.value.assignApplication = newLicenseUnassigned.value)
        : (allInfo.value.assignApplication = newLicenseFromOtherRegion.value);

      for (let applicant in allInfo.value.assignApplication) {
        if (
          allInfo.value.assignApplication[applicant].applicationType ===
          undefined
        ) {
          allInfo.value.assignApplication[applicant].applicationType =
            allInfo.value.assignApplication[applicant].applicantType;
        }
      }
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
      showLoadingUnassigned.value = true;
      const statusId = applicationStatus(store, "SUB");
      store
        .dispatch("reviewerNewLicense/getNewLicenseUnassigned", statusId)
        .then((res) => {
          showLoadingUnassigned.value = false;
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
            nothingToShowUnassigned.value = true;
          }
        });
    };

    const fetchNewLicenseFromOtherRegion = () => {
      showLoadingFromOtherRegion.value = true;
      const statusId = applicationStatus(store, "SUB");
      store
        .dispatch("reviewerNewLicense/getNewLicenseFromOtherRegion", statusId)
        .then((res) => {
          showLoadingFromOtherRegion.value = false;
          newLicenseFromOtherRegion.value =
            store.getters[
              "reviewerNewLicense/getNewLicenseFromOtherRegionSearched"
            ];
          if (newLicenseFromOtherRegion.value.length === 0) {
            nothingToShowFromOtherRegion.value = true;
          }
        });
    };

    onMounted(() => {
      fetchNewLicenseUnassigned();
      fetchNewLicenseFromOtherRegion();
    });

    return {
      expertLevel,
      nothingToShowUnassigned,
      nothingToShowFromOtherRegion,
      allInfo,
      showLoadingUnassigned,
      filterAssignedApplication,
      backClicked,
      selectedTabClass,
      notSelectedTabClass,
      selectedTab,
      changeTab,
      message,
    };
  },
};
</script>
<style scoped>
.tabs {
  position: relative;
  margin: 10px 0 0 30px;
  background: white;
  height: 14.75rem;
 
}
.tabs::before,
.tabs::after {
  content: "";
  display: table;
}
.tabs::after {
  clear: both;
}
.tab {
  float: left;
}
.tab-switch {
  display: none;
}
.tab-label {
  position: relative;
  display: block;
  line-height: 2.75em;
  margin-right: 5px;
  padding: 0 1.618em;
  background: white;
  border-right: 2px solid white;
  color: #285180;
  cursor: pointer;
  top: 0;
  transition: all 0.25s;
  border-bottom:1px solid grey;
}
.tab-label:hover {
  top: -0.5rem;
  transition: top 0.25s;
}
.tab-content {
  height: webkit-fill-available;
  position: absolute;
  z-index: 1;
  margin-top: 10px;
  left: 0;
  padding: 1.618rem;
  background: #fff;
  color: #2c3e50;
  border: 0.25rem solid #bdc3c7;
  opacity: 0;
  transition: all 0.35s;
}
.tab-switch:checked + .tab-label {
  background: #285180;
  margin-top: 10px;
  color: white;
  border-bottom: 2px solid #2c3e50;
  margin-right: 2px;
  border:2px solid #2c3e50;

  transition: all 0.5s;
  z-index: 1;
  top: -0.0625rem;
}
.tab-switch:checked + label + .tab-content {
  z-index: 1;
  opacity: 1;
  transition: all 0.5s;
}
</style>