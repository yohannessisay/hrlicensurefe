<template>
  <ul
    class="
      nav nav-tabs
      flex flex-col
      md:flex-row
      flex-wrap
      list-none
      border-b-0
      pl-0
      ml-24
      mr-24
    "
    id="tabs-tabFill"
    role="tablist"
  >
    <li class="nav-item flex-auto text-center" role="presentation">
      <a
        href="#tabs-homeFill"
        class="
          nav-link
          w-full
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          focus:border-transparent
          active
        "
        id="tabs-home-tabFill"
        data-bs-toggle="pill"
        data-bs-target="#tabs-unassigned"
        role="tab"
        aria-controls="tabs-unassigned"
        aria-selected="true"
        >Unassigned</a
      >
    </li>

    <li class="nav-item flex-auto text-center" role="presentation">
      <a
        href="#tabs-messagesFill"
        class="
          nav-link
          w-full
          block
          font-medium
          text-xs
          leading-tight
          uppercase
          border-x-0 border-t-0 border-b-2 border-transparent
          px-6
          py-3
          my-2
          hover:border-r
        "
        id="tabs-messages-tabFill"
        data-bs-toggle="pill"
        data-bs-target="#tabs-resubmitted"
        role="tab"
        aria-controls="tabs-resubmitted"
        aria-selected="false"
        >Resubmitted</a
      >
    </li>
  </ul>

  <div class="tab-content ml-12" id="tabs-tabContentFill">
    <div
      class="tab-pane fade show active"
      id="tabs-unassigned"
      role="tabpanel"
      aria-labelledby="tabs-home-tabFill"
    >
      <slot name="unassigned"></slot>
    </div>
    <div
      class="tab-pane fade"
      id="tabs-resubmitted"
      role="tabpanel"
      aria-labelledby="tabs-profile-tabFill"
    >
      <slot name="resubmitted"></slot>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import store from "../../../../store";
import moment from "moment";
import applicationStatus from "../../Configurations/getApplicationStatus.js";
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



    // const fetchNewLicenseUnassigned = () => {
    //   showLoadingUnassigned.value = true;
    //   const statusId = applicationStatus(store, "SUB");
    //   store
    //     .dispatch("reviewerNewLicense/getNewLicenseUnassigned", statusId)
    //     .then((res) => {
    //       console.log('here',res);
    //       showLoadingUnassigned.value = false;
    //       newLicenseUnassigned.value =
    //         store.getters["reviewerNewLicense/getNewLicenseUnassignedSearched"];
    //       allInfo.value.assignApplication =
    //         store.getters["reviewerNewLicense/getNewLicenseUnassignedSearched"];
    //       for (let applicant in allInfo.value.assignApplication) {
    //         if (
    //           allInfo.value.assignApplication[applicant].applicationType ===
    //           undefined
    //         ) {
    //           allInfo.value.assignApplication[applicant].applicationType =
    //             allInfo.value.assignApplication[applicant].applicantType;
    //         }
    //       }
    //       if (
    //         store.getters["reviewerNewLicense/getNewLicenseUnassigned"]
    //           .length === 0
    //       ) {
    //         nothingToShowUnassigned.value = true;
    //       }
    //     });
    // };

    const fetchNewLicenseFromOtherRegion = () => {
      showLoadingFromOtherRegion.value = true;
      const statusId = applicationStatus(store, "SUB");
      store
        .dispatch("reviewerNewLicense/ ", statusId)
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
      // fetchNewLicenseUnassigned();
      fetchNewLicenseFromOtherRegion();
    
    });

    return {
      expertLevel,
      nothingToShowUnassigned,
      nothingToShowFromOtherRegion,
      allInfo,
      showLoadingUnassigned,


      selectedTab,

      message,
    };
  },
};
</script>
<style scoped>
.nav-tabs .nav-link.active {
  color: white;
  border-color: #4185d0;
  margin-top: -1px;
  background-color: #0d3552;
  border-radius: 5px;
}

.nav-tabs :hover.nav-link {
  color: #4185d0;
}
</style>