<template>
  <!-- Sidebar -->
  <reviewer-side-nav></reviewer-side-nav>
  <!-- Sidebar -->

  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar
      ><ol class="list-reset flex">
        <li>
          <router-link to="/admin/review"
            ><span class="text-grey-300">Home</span></router-link
          >
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li>
          <a href="#" class="pointer-events-none text-primary-600"
            >Verification</a
          >
        </li>
      </ol></reviewer-nav-bar
    >
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="tab-content ml-12" id="tabs-tabContentFill">
        <div
          class="tab-pane fade show active"
          id="tabs-unassigned"
          role="tabpanel"
          aria-labelledby="tabs-home-tabFill"
        >
          <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
              <div class="grid grid-cols-2">
                <h2
                  class="text-2xl text-left mt-1 font-semibold leading-tight"
                ></h2>
                <div class="flex justify-end ...">
                  <button
                    type="button"
                    class="px-6 text-white bg-primary-600 hover:text-primary-600 font-medium text-xs leading-tight uppercase rounded focus: focus:outline-none focus:ring-0 transition duration-150 mt-0 ease-in-out text-right"
                    data-bs-toggle="modal"
                    data-bs-target="#addRequest"
                  >
                    Add Request
                  </button>
                </div>
              </div>

              <div class="tabs-wrapper mt-40">
                <input
                  type="radio"
                  name="tab"
                  id="tab1"
                  checked="checked"
                  class="tab-head"
                />
                <label for="tab1" class="tabs_wrapper_label"
                  >Initiated By You</label
                >
                <input type="radio" name="tab" id="tab2" class="tab-head" />
                <label for="tab2" class="tabs_wrapper_label"
                  >Initiated By Others</label
                >

                <div class="tab-body-wrapper">
                  <div id="tab-body-1" class="tab-body">
                    <slot name="toyou">
                      <div
                        class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"
                      >
                        <div class="p-4 bg-grey-200 mb-4 rounded-lg">
                          <h1 class="text-2xl mb-1">Filters</h1>
                          <div class="grid lg:grid-cols-4 xl:gap-6 mt-4">
                            <div class="mb-3 xl:w-full">
                              <label for="" class="">Applicant Name</label>
                              <input
                                type="search"
                                class="form-control relative flex-auto min-w-0 block w-full px-6 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                @keyup.enter="applyFilter()"
                                placeholder="Start Searching For Name"
                                aria-label="Search"
                                aria-describedby="button-addon2"
                                v-model="searchTerm"
                              />
                            </div>
                            <div class="mb-3 xl:w-full">
                              <label for="" class="">Code</label>
                              <input
                                type="search"
                                class="form-control relative flex-auto min-w-0 block w-full px-6 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                @keyup.enter="applyFilter()"
                                placeholder="Start Searching For code"
                                aria-label="Search"
                                aria-describedby="button-addon2"
                                v-model="codeSearchTerm"
                              />
                            </div>
                            <div class="mb-3 xl:w-full mr-2">
                              <label for="" class="ml-4">Region</label>
                              <select
                                class="form-select appearance-none block w-full px-6 ml-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                v-model="regionSearchTerm"
                                @change="applyFilter()"
                                aria-label="Default select"
                              >
                                <option selected value="">All</option>
                                <option
                                  v-for="region in regions"
                                  :key="region.id"
                                  :value="region.id"
                                >
                                  {{ region.name }}
                                </option>
                              </select>
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
                                v-model="searchTermToDate"
                                @change="applyFilter()"
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
                            :is-loading="verificationTable.isLoading"
                            :columns="verificationTable.columns"
                            :rows="verificationTable.rows"
                            :total="verificationTable.totalRecordCount"
                            :sortable="verificationTable.sortable"
                            @is-finished="tableLoadingFinish"
                            @row-clicked="rowClicked"
                            @do-search="doSearch"
                          ></vue-table-lite>
                        </div>
                      </div>
                    </slot>
                  </div>
                  <div id="tab-body-2" class="tab-body">
                    <slot name="to_others">
                      <div
                        class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"
                      >
                        <div class="p-4 bg-grey-200 mb-4 rounded-lg">
                          <h1 class="text-2xl mb-1">Filters</h1>
                          <div class="grid lg:grid-cols-4 xl:gap-6 mt-4">
                            <div class="mb-3 xl:w-full">
                              <label for="" class="">Applicant Name</label>
                              <input
                                type="search"
                                class="form-control relative flex-auto min-w-0 block w-full px-6 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                @keyup.enter="applyFilterOth()"
                                placeholder="Start Searching For Name"
                                aria-label="Search"
                                aria-describedby="button-addon2"
                                v-model="searchTermOth"
                              />
                            </div>
                            <div class="mb-3 xl:w-full">
                              <label for="" class="">Code</label>
                              <input
                                type="search"
                                class="form-control relative flex-auto min-w-0 block w-full px-6 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                @keyup.enter="applyFilterOth()"
                                placeholder="Start Searching For code"
                                aria-label="Search"
                                aria-describedby="button-addon2"
                                v-model="codeSearchTermOth"
                              />
                            </div>
                            <div class="mb-3 xl:w-full mr-2">
                              <label for="" class="ml-4">Region</label>
                              <select
                                class="form-select appearance-none block w-full px-6 ml-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                v-model="regionSearchTermOth"
                                @change="applyFilterOth()"
                                aria-label="Default select"
                              >
                                <option selected value="">All</option>
                                <option
                                  v-for="region in regions"
                                  :key="region.id"
                                  :value="region.id"
                                >
                                  {{ region.name }}
                                </option>
                              </select>
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
                                v-model="searchTermToDateOth"
                                @change="applyFilterOth()"
                                aria-label="Default select example"
                              />
                            </div>
                            <div class="ml-8 mt-4">
                              <button
                                type="button"
                                class="inline-block px-6 py-2 mt-2 border-2 border-primary-300 text-white font-medium text-xs leading-tight uppercase rounded bg-primary-600 hover:bg-white hover:bg-opacity-5 hover:text-primary-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                @click="clearFiltersOth()"
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
                            :is-loading="verificationTableOthers.isLoading"
                            :columns="verificationTableOthers.columns"
                            :rows="verificationTableOthers.rows"
                            :total="verificationTableOthers.totalRecordCount"
                            :sortable="verificationTableOthers.sortable"
                            @is-finished="tableLoadingFinishOthers"
                            @row-clicked="rowClickedOthers"
                            @do-search="doSearchOth"
                          ></vue-table-lite>
                        </div>
                      </div>
                    </slot>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main Content -->
  </section>
  <add-request :regions="regions"></add-request>
  <view-modal :modalData="modalData"></view-modal>
  <view-modal-others :modalDataOthers="modalDataOthers"></view-modal-others>
</template>

<script>
import ReviewerSideNav from "./SharedComponents/sideNav.vue";
import ReviewerNavBar from "./SharedComponents/navBar.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import VueTableLite from "vue3-table-lite";
import viewModal from "./viewModal.vue";
import viewModalOthers from "./viewModalOthers.vue";
import addRequest from "./addRequestModal.vue";

export default {
  name: "home",
  components: {
    ReviewerSideNav,
    ReviewerNavBar,
    VueTableLite,
    viewModal,
    addRequest,
    viewModalOthers,
  },
  setup() {
    const store = useStore();
    const showModal = ref(true);

    let loading = ref(false);

    let modalData = ref({});
    let modalDataOthers = ref({ change: 0 });

    const verificationTable = ref({});
    const verificationTableOthers = ref({});

    verificationTable.value = {
      isLoading: true,
    };
    verificationTableOthers.value = {
      isLoading: true,
    };
    let tableData = [];
    let tableDataOthers = [];
    let allInfo = [];
    let regions = ref([]);
    let allInfoOth = [];
    let searchTerm = ref("");
    let codeSearchTerm = ref("");
    let regionSearchTerm = ref("");
    let searchTermFromDate = ref("");
    let searchTermToDate = ref("");

    let searchTermOth = ref("");
    let codeSearchTermOth = ref("");
    let regionSearchTermOth = ref("");
    let searchTermFromDateOth = ref("");
    let searchTermToDateOth = ref("");

    const getVerification = (apiParameters) => {
      verificationTable.value.isLoading = true;
      store
        .dispatch("applicationVerification/getRequests", {
          params: apiParameters,
        })
        .then((res) => {
          allInfo = res.data?.data || [];
          tableData = [];
          allInfo.rows.forEach((element) => {
            tableData.push({
              Number: element.id,
              ApplicantName:
                (element.profile.name ? element.profile.name : "") +
                " " +
                (element.profile.fatherName ? element.profile.fatherName : "") +
                " " +
                (element.profile.grandFatherName
                  ? element.profile.grandFatherName
                  : ""),
              RequestedRegion: element.region.name,
              LicenseCode: element.newLicense
                ? element.newLicense.newLicenseCode
                : element.renewal
                ? element.renewal.renewalCode
                : "-------",
              IsVerified: element.isVerified ? "Verified" : "Not Verified",

              RequestedDate: element.createdAt
                ? element.createdAt.slice(0, 10)
                : "----",
              data: element,
            });
          });

          verificationTable.value = {
            columns: [
              {
                label: "Number",
                field: "Number",
                width: "3%",
                sortable: true,
                isKey: true,
              },
              {
                label: "Applicant Name",
                field: "ApplicantName",
                width: "20%",
                sortable: true,
              },
              {
                label: "Requested Region",
                field: "RequestedRegion",
                width: "20%",
                sortable: true,
              },
              {
                label: "License Code",
                field: "LicenseCode",
                width: "20%",
                sortable: true,
              },
              {
                label: "Status",
                field: "IsVerified",
                width: "20%",
                sortable: true,
              },
              {
                label: "Requested Date",
                field: "RequestedDate",
                width: "20%",
                sortable: true,
              },
              {
                label: "",
                field: "quick",
                width: "10%",
                display: function (row) {
                  return (
                    '<button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="edit-btn bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block  font-medium text-xs leading-tight uppercase rounded-md   transition duration-150 ease-in-out" data-id="' +
                    row +
                    '" >View</button>'
                  );
                },
              },
            ],
            rows: tableData,
            totalRecordCount: allInfo?.count,
            sortable: {
              order: "id",
              sort: "asc",
            },
          };
        });
      verificationTable.value.isLoading = true;
    };
    const getVerificationOthers = (apiParameters) => {
      verificationTableOthers.value.isLoading = true;
      allInfo = [];
      apiParameters.push({ key: "others", value: 1 });
      store
        .dispatch("applicationVerification/getRequests", {
          params: apiParameters,
        })
        .then((res) => {
          allInfoOth = res.data?.data || [];
          tableDataOthers = [];
          allInfoOth.rows.forEach((element) => {
            tableDataOthers.push({
              Number: element.id,
              ApplicantName:
                (element.profile.name ? element.profile.name : "") +
                " " +
                (element.profile.fatherName ? element.profile.fatherName : "") +
                " " +
                (element.profile.grandFatherName
                  ? element.profile.grandFatherName
                  : ""),
              RequestedRegion: element.region.name,
              LicenseCode: element.newLicense
                ? element.newLicense.newLicenseCode
                : element.renewal
                ? element.renewal.renewalCode
                : "-------",
              IsVerified: element.isVerified ? "Verified" : "Not Verified",
              RequestedDate: element.createdAt
                ? element.createdAt.slice(0, 10)
                : "----",
              data: element,
            });
          });
          verificationTableOthers.value = {
            columns: [
              {
                label: "Number",
                field: "Number",
                width: "3%",
                sortable: true,
                isKey: true,
              },
              {
                label: "Applicant Name",
                field: "ApplicantName",
                width: "20%",
                sortable: true,
              },
              {
                label: "Requested Region",
                field: "RequestedRegion",
                width: "20%",
                sortable: true,
              },
              {
                label: "License Code",
                field: "LicenseCode",
                width: "20%",
                sortable: true,
              },
              {
                label: "Status",
                field: "IsVerified",
                width: "20%",
                sortable: true,
              },
              {
                label: "Requested Date",
                field: "RequestedDate",
                width: "20%",
                sortable: true,
              },
              {
                label: "",
                field: "quick",
                width: "10%",
                display: function (row) {
                  return (
                    '<button data-bs-toggle="modal" data-bs-target="#staticBackdropOthers" class="edit-btn-others bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5    font-medium text-xs leading-tight uppercase rounded     hover:     transition duration-150 ease-in-out" data-id="' +
                    row +
                    '" >View</button>'
                  );
                },
              },
            ],
            rows: tableDataOthers,
            totalRecordCount: allInfoOth?.count,
            sortable: {
              order: "id",
              sort: "asc",
            },
          };
        });
      verificationTableOthers.value.isLoading = true;
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
      let elements = document.getElementsByClassName("edit-btn-others");

      Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains("edit-btn-others")) {
          element.addEventListener("click", rowClickedOthers());
        }
      });
    };

    const rowClicked = (row) => {
      modalData.value = {};
      if (row != undefined) {
        row = JSON.parse(JSON.stringify(row));
        modalData.value = row ? row : {};
      }
    };
    const rowClickedOthers = (row) => {
      if (row != undefined) {
        row = JSON.parse(JSON.stringify(row));

        modalDataOthers.value.data = row.data ? row.data : {};
        modalDataOthers.value.change += 1;
      }
    };

    onMounted(() => {
      getVerification([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
      ]);
      getVerificationOthers([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
      ]);

      store.dispatch("applicationVerification/getRegions").then((res) => {
        regions.value = res.data.data;
      });
    });
    const applyFilter = () => {
      verificationTable.value.isLoading = true;
      tableData = [];
      getVerification([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTerm.value },
        { key: "region", value: regionSearchTerm.value },
        { key: "code", value: codeSearchTerm.value },
        { key: "fromDate", value: searchTermFromDate.value },
        {
          key: "toDate",
          value:
            searchTermFromDate.value && searchTermFromDate.value != ""
              ? searchTermToDate.value
              : new Date().toISOString().slice(0, 10),
        },
      ]);
    };
    const clearFilters = () => {
      searchTerm.value = "";
      searchTermFromDate.value = "";
      searchTermToDate.value = "";
      verificationTable.value.isLoading = true;
      verificationTable.value.rows = [];
      tableData = [];
      getVerification([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTerm.value },
        { key: "region", value: regionSearchTerm.value },
        { key: "code", value: codeSearchTerm.value },
        { key: "fromDate", value: searchTermFromDate.value },
        { key: "toDate", value: searchTermToDate.value },
      ]);
    };

    const searchApplication = () => {
      verificationTable.value.isLoading = true;
      verificationTable.value.rows = [];
      tableData = [];
      getVerification([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTerm.value },
        { key: "region", value: regionSearchTerm.value },
        { key: "code", value: codeSearchTerm.value },
        { key: "fromDate", value: searchTermFromDate.value },
        {
          key: "toDate",
          value:
            searchTermFromDate.value && searchTermFromDate.value != ""
              ? searchTermToDate.value
              : new Date().toISOString().slice(0, 10),
        },
      ]);
    };

    const doSearch = (offset, limit, order, sort) => {
      setTimeout(() => {
        verificationTable.value.isReSearch = offset == undefined ? true : false;
        offset = offset / 10;
        if (sort == "asc") {
          getVerification([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "value", value: searchTerm.value },
            { key: "region", value: regionSearchTerm.value },
            { key: "code", value: codeSearchTerm.value },
            { key: "fromDate", value: searchTermFromDate.value },
            {
              key: "toDate",
              value:
                searchTermFromDate.value && searchTermFromDate.value != ""
                  ? searchTermToDate.value
                  : new Date().toISOString().slice(0, 10),
            },
          ]);
        } else {
          getVerification([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "value", value: searchTerm.value },
            { key: "region", value: regionSearchTerm.value },
            { key: "code", value: codeSearchTerm.value },
            { key: "fromDate", value: searchTermFromDate.value },
            {
              key: "toDate",
              value:
                searchTermFromDate.value && searchTermFromDate.value != ""
                  ? searchTermToDate.value
                  : new Date().toISOString().slice(0, 10),
            },
          ]);
        }
        verificationTable.value.sortable.order = order;
        verificationTable.value.sortable.sort = sort;
      }, 200);
    };
    const applyFilterOth = () => {
      verificationTableOthers.value.isLoading = true;
      tableDataOthers = [];
      
      getVerificationOthers([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTermOth.value },
        { key: "region", value: regionSearchTermOth.value },
        { key: "code", value: codeSearchTermOth.value },
        { key: "fromDate", value: searchTermFromDateOth.value },
        {
          key: "toDate",
          value:
            searchTermFromDateOth.value && searchTermFromDateOth.value != ""
              ? searchTermToDateOth.value
              : new Date().toISOString().slice(0, 10),
        },
      ]);
      
    };
    const clearFiltersOth = () => {
      searchTermOth.value = "";
      searchTermFromDateOth.value = "";
      searchTermToDateOth.value = "";
      verificationTableOthers.value.isLoading = true;
      verificationTableOthers.value.rows = [];
      tableDataOthers = [];
      getVerificationOthers([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTermOth.value },
        { key: "region", value: regionSearchTermOth.value },
        { key: "code", value: codeSearchTermOth.value },
        { key: "fromDate", value: searchTermFromDateOth.value },
        { key: "toDate", value: searchTermToDateOth.value },
      ]);
    };

    const searchApplicationOth = () => {
      verificationTableOthers.value.isLoading = true;
      verificationTableOthers.value.rows = [];
      tableDataOthers = [];
      getVerificationOthers([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTermOth.value },
        { key: "region", value: regionSearchTermOth.value },
        { key: "code", value: codeSearchTermOth.value },
        { key: "fromDate", value: searchTermFromDateOth.value },
        {
          key: "toDate",
          value:
            searchTermFromDateOth.value && searchTermFromDateOth.value != ""
              ? searchTermToDateOth.value
              : new Date().toISOString().slice(0, 10),
        },
      ]);
    };
    const doSearchOth = (offset, limit, order, sort) => {
      setTimeout(() => {
        verificationTableOthers.value.isReSearch =
          offset == undefined ? true : false;
        offset = offset / 10;
        if (sort == "asc") {
          getVerificationOthers([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "value", value: searchTermOth.value },
            { key: "region", value: regionSearchTermOth.value },
            { key: "code", value: codeSearchTermOth.value },
            { key: "fromDate", value: searchTermFromDateOth.value },
            {
              key: "toDate",
              value:
                searchTermFromDateOth.value && searchTermFromDateOth.value != ""
                  ? searchTermToDateOth.value
                  : new Date().toISOString().slice(0, 10),
            },
          ]);
        } else {
          getVerificationOthers([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "value", value: searchTermOth.value },
            { key: "region", value: regionSearchTermOth.value },
            { key: "code", value: codeSearchTermOth.value },
            { key: "fromDate", value: searchTermFromDateOth.value },
            {
              key: "toDate",
              value:
                searchTermFromDateOth.value && searchTermFromDateOth.value != ""
                  ? searchTermToDateOth.value
                  : new Date().toISOString().slice(0, 10),
            },
          ]);
        }
        verificationTableOthers.value.sortable.order = order;
        verificationTableOthers.value.sortable.sort = sort;
      }, 200);
    };
    return {
      loading,
      verificationTable,
      verificationTableOthers,
      showModal,
      tableLoadingFinish,
      rowClickedOthers,
      tableLoadingFinishOthers,
      rowClicked,
      getVerification,
      doSearchOth,
      modalData,
      searchTerm,
      codeSearchTerm,
      regionSearchTerm,
      searchTermFromDate,
      searchTermToDate,
      modalDataOthers,
      applyFilter,
      clearFilters,
      searchApplication,
      doSearch,
      applyFilterOth,
      clearFiltersOth,
      searchApplicationOth,
      searchTermOth,
      regions,
      codeSearchTermOth,
      regionSearchTermOth,
      searchTermFromDateOth,
      searchTermToDateOth,
    };
  },
};
</script>
<style scoped>
/* Apply these ones for table  */
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
