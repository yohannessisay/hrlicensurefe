<template>
  <!-- Sidebar -->
  <reviewer-side-nav :finalUrl="'newLicense'"></reviewer-side-nav>
  <!-- Sidebar -->

  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar>
      <ol class="list-reset flex">
        <li>
          <router-link to="/admin/review"
            ><span class="text-grey-300 ">Home</span></router-link
          >
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li>
          <a href="#" class="hover:text-primary-600 text-grey-300">New License</a>
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li>
          <a href="#" class="pointer-events-none  text-primary-600">Approved</a>
        </li>
      </ol>
    </reviewer-nav-bar>
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <new-license-main-content>
        <template v-slot:toyou>
          <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
              <div>
                <h2 class="text-2xl font-semibold leading-tight">
                  Applications Approved By You
                </h2>
              </div>
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="p-4 bg-grey-200 mb-4 rounded-lg">
                  <h1 class="text-2xl mb-1">Filters</h1>
                  <div class="mb-3 xl:w-full">
                    <h2 class="text-primary-800 text-lg">Applicant Name</h2>
                    <div
                      class="input-group relative flex flex-wrap items-stretch w-full mb-4"
                    >
                      <input
                        type="search"
                        class="form-control relative flex-auto min-w-0 block w-full px-6 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Search Using Applicant's Name"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                        v-model="searchTerm"
                      />
                      <button
                        class="inline-block px-6 py-2 bg-primary-600 border-primary-300 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-primary-600 transition duration-150 ease-in-out items-center"
                        @click="searchApplication()"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="search"
                          class="w-5"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <h2 class="text-primary-800 text-lg">Applied Date</h2>
                  <div class="grid grid-cols-4">
                    <div class="mb-3">
                      <label for="" class="ml-2">From</label>
                      <input
                        v-model="searchTermFromDate"
                        type="date"
                        class="appearance-none block w-full px-6 ml-2 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                      />
                    </div>
                    <div class="mb-3 ml-2">
                      <label for="" class="ml-4"> To</label>
                      <input
                        type="date"
                        class="appearance-none block w-full px-6 ml-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        @change="searchApplication()"
                        v-model="searchTermToDate"
                        aria-label="Default select example"
                      />
                    </div>
                    <div class="ml-8 mt-4">
                      <button
                        type="button"
                        class="inline-block px-6 py-2 mt-2 border-2 border-primary-300 text-white font-medium text-xs leading-tight uppercase rounded bg-primary-600 hover:bg-white hover:bg-opacity-5 hover:text-primary-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        @click="clearFilters()"
                      >
                        <i class="fa fa-close"></i>
                        Clear Filters
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="inline-block min-w-full rounded-lg overflow-hidden bg-primary-800"
                >
                  <vue-table-lite
                    :is-loading="toYouTable.isLoading"
                    :columns="toYouTable.columns"
                    :rows="toYouTable.rows"
                    :total="toYouTable.totalRecordCount"
                    :sortable="toYouTable.sortable"
                    @is-finished="tableLoadingFinish"
                    @row-clicked="rowClicked"
                    @do-search="doSearch"
                  ></vue-table-lite>
                  <edit-modal :modalDataId="modalDataId"> </edit-modal>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:to_others>
          <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
              <div>
                <h2 class="text-2xl font-semibold leading-tight">
                  Approved Applications Assigned To Others
                </h2>
              </div>
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="p-4 bg-grey-200 mb-4 rounded-lg">
                  <h1 class="text-2xl mb-1">Filters</h1>
                  <div class="mb-3 xl:w-full">
                    <h2 class="text-primary-800 text-lg">Applicant Name</h2>
                    <div
                      class="input-group relative flex flex-wrap items-stretch w-full mb-4"
                    >
                      <input
                        type="search"
                        class="form-control relative flex-auto min-w-0 block w-full px-6 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Search Using Applicant's Name"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                        v-model="searchTermOthers"
                      />
                      <button
                        class="inline-block px-6 py-2 bg-primary-600 border-primary-300 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-primary-600 transition focus:border-blue-600 duration-150 ease-in-out items-center"
                        @click="searchApplicationOther()"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="search"
                          class="w-5"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <h2 class="text-primary-800 text-lg">Applied Date</h2>
                  <div class="grid grid-cols-4">
                    <div class="mb-3">
                      <label for="" class="ml-2">From</label>
                      <input
                        v-model="searchTermFromDateOth"
                        type="date"
                        class="appearance-none block w-full px-6 ml-2 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                      />
                    </div>
                    <div class="mb-3 ml-2">
                      <label for="" class="ml-4"> To</label>
                      <input
                        type="date"
                        class="appearance-none block w-full px-6 ml-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        @change="searchApplicationOther()"
                        v-model="searchTermToDateOth"
                        aria-label="Default select example"
                      />
                    </div>
                    <div class="ml-8 mt-4">
                      <button
                        type="button"
                        class="inline-block px-6 py-2 mt-2 border-2 border-primary-300 text-white font-medium text-xs leading-tight uppercase rounded bg-primary-600 hover:bg-white hover:bg-opacity-5 hover:text-primary-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        @click="clearFiltersOther()"
                      >
                        <i class="fa fa-close"></i>
                        Clear Filters
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="inline-block min-w-full rounded-lg overflow-hidden bg-primary-800"
                >
                  <vue-table-lite
                    :is-loading="toOthersTable.isLoading"
                    :columns="toOthersTable.columns"
                    :rows="toOthersTable.rows"
                    :total="toOthersTable.totalRecordCount"
                    @is-finished="tableLoadingFinishOthers"
                    @row-clicked="rowClickedOthers"
                    @do-search="doSearchOth"
                  ></vue-table-lite>

                  <edit-modal-others :modalDataIdOthers="modalDataIdOthers">
                  </edit-modal-others>
                </div>
              </div>
            </div>
          </div>
        </template>
      </new-license-main-content>
    </div>
    <!-- Main Content -->
  </section>
</template>

<script>
import ReviewerSideNav from "../../../SharedComponents/sideNav.vue";
import ReviewerNavBar from "../../../SharedComponents/navBar.vue";
import NewLicenseMainContent from "../../../SharedComponents/approved.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import VueTableLite from "vue3-table-lite";
import editModal from "./approvedModal.vue";
import editModalOthers from "./approvedModalOthers.vue";
export default {
  name: "home",
  components: {
    ReviewerSideNav,
    ReviewerNavBar,
    NewLicenseMainContent,
    VueTableLite,
    editModal,
    editModalOthers,
  },
  setup() {
    const store = useStore();
    let modalDataId = ref({
      id: "",
      change: 0,
    });
    let modalDataIdOthers = ref({
      id: "",
      change: 0,
    });
    let allInfo = [];
    let allInfoOth = [];
    let searchTerm = ref("");
    let searchTermOthers = ref("");
    let searchTermFromDate = ref("");
    let searchTermToDate = ref("");
    let searchTermFromDateOth = ref("");
    let searchTermToDateOth = ref("");
    let toOthersTable = ref({ isLoading: false });
    let toYouTable = ref({ isLoading: false });
    let adminRegionId = localStorage.getItem("allAdminData")
      ? JSON.parse(localStorage.getItem("allAdminData")).regionId
      : "";
    let adminRegionExpLevel = localStorage.getItem("allAdminData")
      ? JSON.parse(localStorage.getItem("allAdminData")).expertLevel.code
      : "";
    let tableData = [];
    let toYouTableData = [];

    const refreshTable = () => {
      toOthersTable.value.rows = [];

      toYouTable.value.rows = [];

      approvedApplicationsByYou([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
      ]);
      approvedApplicationsByOthers([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
      ]);
    };
    const clearFiltersOther = () => {
      searchTermOthers.value = "";
      searchTermFromDateOth.value = "";
      searchTermToDateOth.value = "";
      toOthersTable.value.rows = [];
      toOthersTable.value.isLoading = true;
      approvedApplicationsByOthers([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
      ]);
    };
    const clearFilters = () => {
      searchTerm.value = "";
      searchTermFromDate.value = "";
      searchTermToDate.value = "";
      toYouTable.value.rows = [];
      approvedApplicationsByYou([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
      ]);
    };

    const approvedApplicationsByYou = (apiParameters) => {
      toYouTableData = [];
      toYouTable.value.isLoading = true;
      store
        .dispatch("reviewerNewLicense/getNewLicenseApproved", [
          {
            params: apiParameters,
          },
          {
            other: false,
          },
        ])
        .then((res) => {
          allInfo = res ? res.rows : [];
          if (allInfo) {
            allInfo.forEach((element) => {
              toYouTableData.push({
                LicenseNumber: element.newLicenseCode,
                ApplicantName:
                  (element.profile ? element.profile.name : "") +
                  " " +
                  (element.profile ? element.profile.fatherName : "") +
                  " " +
                  (element.profile ? element.profile.grandFatherName : ""),
                ApplicantType: element.applicantType ? element.applicantType.name : "",
                Date: new Date(element.createdAt)
                  .toJSON()
                  .slice(0, 10)
                  .replace(/-/g, "/"),
                data: element,
              });
            });
          }

          toYouTable.value = {
            columns: [
              {
                label: "License Number",
                field: "LicenseNumber",
                width: "15%",
                sortable: true,
                isKey: true,
              },
              {
                label: "Applicant Name",
                field: "ApplicantName",
                width: "45%",
                sortable: true,
              },
              {
                label: "Applicant Type",
                field: "ApplicantType",
                width: "20%",
                sortable: true,
              },
              {
                label: "Applied Date",
                field: "Date",
                width: "20%",
                sortable: true,
              },
              {
                label: "Action",
                field: "quick",
                width: "10%",
                display: function (row) {
                  return (
                    '<button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="edit-btn bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block  font-medium text-xs leading-tight uppercase rounded-md   transition duration-150 ease-in-out" data-id="' +
                    row +
                    '" ><i class="fa fa-eye mr-2"></i>View/Edit</button>'
                  );
                },
              },
            ],
            rows: toYouTableData,
            totalRecordCount: res.count,
          };
        });
    };
    const approvedApplicationsByOthers = (apiParameters) => {
      tableData = [];

      store
        .dispatch("reviewerNewLicense/getNewLicenseApproved", [
          {
            params: apiParameters,
          },
          {
            other: true,
          },
        ])
        .then((res) => {
          allInfoOth = res ? res.rows : [];
          allInfoOth.forEach((element) => {
            tableData.push({
              LicenseNumber: element.newLicenseCode,
              ApplicantName:
                element.profile.name +
                " " +
                element.profile.fatherName +
                " " +
                element.profile.grandFatherName,
              ApplicantType: element.applicantType ? element.applicantType.name : "",
              ReviewerName:
                element.licenseReviewer && element.licenseReviewer.reviewer
                  ? element.licenseReviewer.reviewer.name
                  : "",
              Date: new Date(element.createdAt).toJSON().slice(0, 10).replace(/-/g, "/"),
              data: element,
            });
          });

          toOthersTable.value = {
            columns: [
              {
                label: "License Number",
                field: "LicenseNumber",
                width: "15%",
                sortable: true,
                isKey: true,
              },
              {
                label: "Applicant Name",
                field: "ApplicantName",
                width: "45%",
                sortable: true,
              },
              {
                label: "Applicant Type",
                field: "ApplicantType",
                width: "20%",
                sortable: true,
              },
              {
                label: "Reviewer Name",
                field: "ReviewerName",
                width: "40%",
                sortable: true,
              },
              {
                label: "Applied Date",
                field: "Date",
                width: "20%",
                sortable: true,
              },
              {
                label: "Action",
                field: "quick",
                width: "10%",
                display: function (row) {
                  return (
                    '<button data-bs-toggle="modal" data-bs-target="#staticBackdropOthers" class="edit-btn-others bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5    font-medium text-xs leading-tight uppercase rounded     hover:     transition duration-150 ease-in-out" data-id="' +
                    row +
                    '" ><i class="fa fa-eye mr-2"></i>View/Edit</button>'
                  );
                },
              },
            ],

            rows: tableData,
            totalRecordCount: res.count,
          };
        });
    };

    const tableLoadingFinish = () => {
      let elements = document.getElementsByClassName("edit-btn");

      Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains("edit-btn")) {
          element.addEventListener("click", rowClicked());
        }
      });
    };
    const tableLoadingFinishOthers = () => {
      let elementOthers = document.getElementsByClassName("edit-btn-others");
      Array.prototype.forEach.call(elementOthers, function (element) {
        if (element.classList.contains("edit-btn-others")) {
          element.addEventListener("click", rowClickedOthers());
        }
      });
    };
    const rowClicked = (row) => {
      if (row != undefined) {
        row = JSON.parse(JSON.stringify(row));

        modalDataId.value.id = row.data ? row.data.id : "-----";
        modalDataId.value.change++;
      }
    };
    const rowClickedOthers = (row) => {
      if (row != undefined) {
        row = JSON.parse(JSON.stringify(row));
        modalDataIdOthers.value.id = row.data ? row.data.id : "-----";
        modalDataIdOthers.value.change++;
      }
    };

    const searchApplication = () => {
      toYouTable.value.rows = [];
      approvedApplicationsByYou([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTerm.value },
        { key: "fromDate", value: searchTermFromDate.value },
        { key: "toDate", value: searchTermToDate.value },
      ]);
    };
    const searchApplicationOther = () => {
      toOthersTable.value.rows = [];
      toOthersTable.value.isLoading = true;
      approvedApplicationsByOthers([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTermOthers.value },
        { key: "fromDate", value: searchTermFromDateOth.value },
        { key: "toDate", value: searchTermToDateOth.value },
      ]);
    };
    onMounted(() => {
      approvedApplicationsByOthers([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
      ]);
      toOthersTable.value.isLoading = true;
      approvedApplicationsByYou([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
      ]);

      store.dispatch("lookups/getLicenseExpirationDates").then((res) => {
        if (res.data && res.data.data) {
          let result = res.data.data;
          localStorage.removeItem("regionExpDate");
          let expiryDate = "";
          adminRegionExpLevel && adminRegionExpLevel == "FED"
            ? (expiryDate = 3)
            : result.filter((el) => (el.regionId = adminRegionId))[0]
            ? (expiryDate = result.filter((el) => (el.regionId = adminRegionId))[0].years)
            : "";
          localStorage.setItem("regionExpDate", JSON.stringify(expiryDate));
        }
      });
    });
    const doSearch = (offset, limit, order, sort) => {
      setTimeout(() => {
        toYouTable.value.isReSearch = offset == undefined ? true : false;
        offset = offset / 10;
        if (sort == "asc") {
          approvedApplicationsByYou([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "value", value: searchTerm.value },
            { key: "fromDate", value: searchTermFromDate.value },
            { key: "toDate", value: searchTermToDate.value },
          ]);
        } else {
          approvedApplicationsByYou([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "value", value: searchTerm.value },
            { key: "fromDate", value: searchTermFromDate.value },
            { key: "toDate", value: searchTermToDate.value },
          ]);
        }
      }, 600);
    };
    const doSearchOth = (offset, limit, order, sort) => {
      toOthersTable.value.isLoading = true;
      setTimeout(() => {
        toOthersTable.value.isReSearch = offset == undefined ? true : false;
        offset = offset / 10;
        if (sort == "asc") {
          approvedApplicationsByOthers([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "value", value: searchTermOthers.value },
            { key: "fromDate", value: searchTermFromDateOth.value },
            { key: "toDate", value: searchTermToDateOth.value },
          ]);
        } else {
          approvedApplicationsByOthers([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "value", value: searchTermOthers.value },
            { key: "fromDate", value: searchTermFromDateOth.value },
            { key: "toDate", value: searchTermToDateOth.value },
          ]);
        }
      }, 600);
    };
    return {
      allInfo,
      toOthersTable,
      clearFilters,
      refreshTable,
      clearFiltersOther,
      searchApplication,
      searchApplicationOther,
      doSearch,
      doSearchOth,
      searchTerm,
      searchTermOthers,
      searchTermFromDate,
      searchTermToDate,
      searchTermFromDateOth,
      searchTermToDateOth,
      toYouTable,
      tableLoadingFinish,
      tableLoadingFinishOthers,
      rowClicked,
      rowClickedOthers,
      modalDataId,
      modalDataIdOthers,
    };
  },
};
</script>
<style scoped>
/* Apply these for table */
::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  color: #fff;
  background-color: #0d3552;
  border-color: #0d3552;
}
::v-deep(.vtl-table td),
::v-deep(.vtl-table tr) {
  border: none;
}
::v-deep(.vtl-paging-info) {
  color: rgb(25, 155, 230);
}
::v-deep(.vtl-paging-count-label),
::v-deep(.vtl-paging-page-label) {
  margin-right: 10px;
  margin-left: 10px;
  color: rgb(25, 155, 230);
}
::v-deep(.vtl-paging-pagination-page-link) {
  border: none;
}
::v-deep(.vtl-paging-count-dropdown) {
  margin-right: 10px;
  margin-left: 10px;
  color: rgb(0, 0, 0);
}

::v-deep(.vtl-tbody-tr) {
  border-bottom: 1px solid rgb(128, 128, 128) !important;
  padding: 5px !important;
}
</style>
