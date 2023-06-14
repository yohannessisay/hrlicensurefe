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
            ><span class="text-primary-600 text-base ">Home</span></router-link
          >
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li>
          <a
            href="/admin/newLicense/"
            class="hover:text-primary-600 text-grey-300"
            >New License</a
          >
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li>
          <a href="#" class="pointer-events-none text-lg text-grey-300"
            >Unassigned</a
          >
        </li>
      </ol></reviewer-nav-bar
    >
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <new-license-main-content>
        <template v-slot:unassigned>
          <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="p-4 bg-grey-200 mb-4 rounded-lg">
                  <h1 class="text-2xl mb-1">Filters</h1>
                  <div class="mb-3 xl:w-full">
                    <h2 class="text-primary-800 text-lg">Applicant Name</h2>
                    <div
                      class="
                      input-group
                      relative
                      flex flex-wrap
                      items-stretch
                      w-full
                      mb-4
                    "
                    >
                      <input
                        type="search"
                        class="
                        form-control
                        relative
                        flex-auto
                        min-w-0
                        block
                        w-full
                        px-6
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        focus:text-gray-700
                        focus:bg-white
                        focus:border-blue-600
                        focus:outline-none
                      "
                        placeholder="Search Using Applicant's Name"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                        v-model="searchTerm"
                      />
                      <button
                        class="
                        inline-block
                        px-6
                        py-2
                        bg-primary-600
                        border-primary-300
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-white hover:text-primary-600  
                        transition
                        focus:border-blue-600
                        duration-150
                        ease-in-out
                        items-center
                      "
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
                    <h2 class="text-primary-800 text-lg">Applied Date</h2>
                    <div class="grid grid-cols-4">
                      <div class="mb-3">
                        <label for="" class="ml-2">From</label>
                        <input
                          v-model="searchTermFromDate"
                          type="date"
                          class="
                        appearance-none
                        block
                        w-full
                        px-6
                        ml-2
                        py-2
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        focus:text-gray-700
                        focus:bg-white
                        focus:border-blue-600
                        focus:outline-none
                      "
                          aria-label="Default select example"
                        />
                      </div>
                      <div class="mb-3 ml-2">
                        <label for="" class="ml-4"> To</label>
                        <input
                          type="date"
                          class="
                        appearance-none
                        block
                        w-full
                        px-6
                        ml-4
                        py-2
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        focus:text-gray-700
                        focus:bg-white
                        focus:border-blue-600
                        focus:outline-none
                      "
                          v-model="searchTermToDate"
                          aria-label="Default select example"
                        />
                      </div>
                      <div class="ml-8 mt-4">
                        <button
                          type="button"
                          class="
                        inline-block
                        px-6
                        py-2
                        mt-2
                        border-2 border-primary-300
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        bg-primary-600
                        hover:bg-white hover:bg-opacity-5 hover:text-primary-600
                        focus:outline-none focus:ring-0
                        transition
                        duration-150
                        ease-in-out
                      "
                          @click="clearFilters()"
                        >
                          <i class="fa fa-close"></i>
                          Clear Filters
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    inline-block
                    min-w-full
                    shadow-md
                    rounded-lg
                    overflow-hidden
                    bg-primary-800
                  "
                >
                  <vue-table-lite
                  
                    :is-loading="unassignedTable.isLoading"
                    :columns="unassignedTable.columns"
                    :rows="unassignedTable.rows"
                    :total="unassignedTable.totalRecordCount"
                    :sortable="unassignedTable.sortable"
                    @is-finished="tableLoadingFinish"
                    @row-clicked="rowClicked"
                    @do-search="doSearch"
                  ></vue-table-lite>
                  <edit-modal
                    v-if="showModal"
                    :modalDataId="modalDataId"
                    :reviewers="reviewers"
                  >
                  </edit-modal>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:resubmitted>
          <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="p-4 bg-grey-200 mb-4 rounded-lg">
                  <h1 class="text-2xl mb-1">Filters</h1>
                  <div class="mb-3 xl:w-full">
                    <h2 class="text-primary-800 text-lg">Applicant Name</h2>
                    <div
                      class="
                      input-group
                      relative
                      flex flex-wrap
                      items-stretch
                      w-full
                      mb-4
                    "
                    >
                      <input
                        type="search"
                        class="
                        form-control
                        relative
                        flex-auto
                        min-w-0
                        block
                        w-full
                        px-6
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        focus:text-gray-700
                        focus:bg-white
                        focus:border-blue-600
                        focus:outline-none
                      "
                        placeholder="Search Using Applicant's Name"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                        v-model="searchTermOthers"
                      />
                      <button
                        class="
                      inline-block
                        px-6
                        py-2
                        bg-primary-600
                        border-primary-300
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-white hover:text-primary-600  
                        transition
                        focus:border-blue-600
                        duration-150
                        ease-in-out
                        items-center
                      "
                        @click="searchApplicationResub()"
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
                        v-model="searchTermFromDateResub"
                        type="date"
                        class="
                        appearance-none
                        block
                        w-full
                        px-6
                        ml-2
                        py-2
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        focus:text-gray-700
                        focus:bg-white
                        focus:border-blue-600
                        focus:outline-none
                      "
                        aria-label="Default select example"
                      />
                    </div>
                    <div class="mb-3 ml-2">
                      <label for="" class="ml-4"> To</label>
                      <input
                        type="date"
                        class="
                        appearance-none
                        block
                        w-full
                        px-6
                        ml-4
                        py-2
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        focus:text-gray-700
                        focus:bg-white
                        focus:border-blue-600
                        focus:outline-none
                      "
                        v-model="searchTermToDateResub"
                        aria-label="Default select example"
                      />
                    </div>
                    <div class="ml-8 mt-4">
                      <button
                        type="button"
                        class="
                      inline-block
                        px-6
                        py-2
                        mt-2
                        border-2 border-primary-300
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        bg-primary-600
                        hover:bg-white hover:bg-opacity-5 hover:text-primary-600
                        focus:outline-none focus:ring-0
                        transition
                        duration-150
                        ease-in-out
                      "
                        @click="clearFiltersResub()"
                      >
                        <i class="fa fa-close"></i>
                        Clear Filters
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    inline-block
                    min-w-full
                    shadow-md
                    rounded-lg
                    overflow-hidden
                    bg-primary-800
                  "
                >
                  <vue-table-lite
                   
                    :is-loading="reSubmittedTable.isLoading"
                    :columns="reSubmittedTable.columns"
                    :rows="reSubmittedTable.rows"
                    :total="reSubmittedTable.totalRecordCount"
                    :sortable="reSubmittedTable.sortable"
                    @is-finished="tableLoadingFinish"
                    @row-clicked="rowClickedResub"
                    @do-search="doSearchResub"
                  ></vue-table-lite>
                  <edit-modal-resubmitted
                    v-if="showModalResubmitted"
                    :modalDataIdResub="modalDataIdResub"
                    :reviewers="reviewers"
                  >
                  </edit-modal-resubmitted>
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
import NewLicenseMainContent from "../../../SharedComponents/unassigned.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import VueTableLite from "vue3-table-lite";
import editModal from "./unassignedModal.vue";
import editModalResubmitted from "./unassignedResubmittedModal.vue";
export default {
  name: "home",
  components: {
    ReviewerSideNav,
    ReviewerNavBar,
    NewLicenseMainContent,
    editModal,
    VueTableLite,
    editModalResubmitted
  },
  setup() {
    const store = useStore();
    const showModal = ref(true);
    const showModalResubmitted = ref(true);
    const reviewers = ref([]);
    const include = ref(false);
    const includeResub = ref(false);
    const searchTerm = ref("");
    const searchTermOthers = ref("");
    let searchTermFromDate = ref("");
    let searchTermToDate = ref("");
    let searchTermFromDateResub = ref("");
    let searchTermToDateResub = ref("");
    let searchedReviewer = ref("");
    const adminLevel = JSON.parse(localStorage.getItem("allAdminData"))
      .expertLevel;
    const adminRegion = JSON.parse(localStorage.getItem("allAdminData"))
      .regionId;
    let statuses = JSON.parse(localStorage.getItem("applicationStatuses"));
    let modalDataId = ref({
      id: "",
      change: 0
    });
    let modalDataIdResub = ref({
      id: "",
      change: 0
    });

    let allInfo = ref({});

    const unassignedTable = ref({});
    const reSubmittedTable = ref([]);
    unassignedTable.value = {
      isLoading: true
    };
    reSubmittedTable.value = {
      isLoading: true
    };
    let tableData = ref([]);
    let tableDataTemp = ref([]);
    let tableDataTempResub = ref([]);
    let reTableData = ref([]);
    const clearFilters = () => {
      searchTerm.value = "";
      searchTermFromDate.value = "";
      searchTermToDate.value = "";
      unassignedTable.value.isLoading = true;
      unassignedTable.value.rows = [];
      tableData.value = [];
      unassigned([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTerm.value },
        { key: "fromDate", value: searchTermFromDate.value },
        { key: "toDate", value: searchTermToDate.value }
      ]);
    };

    const clearFiltersResub = () => {
      searchTermOthers.value = "";
      searchTermFromDateResub.value = "";
      searchTermToDateResub.value = "";
      reSubmittedTable.value.isLoading = true;
      reSubmittedTable.value.rows = [];
      reTableData.value = [];
      reSubmitted([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTermOthers.value },
        { key: "fromDate", value: searchTermFromDateResub.value },
        { key: "toDate", value: searchTermToDateResub.value }
      ]);
    };
    const unassigned = apiParameters => {
      // modalDataId.value.apStatusUnassigned = res;
      let subId = statuses
        ? statuses.filter(stat => stat.code == "SUB")[0].id
        : "";

      store
        .dispatch("reviewerNewLicense/getNewLicenseByStatus", [
          { statusId: subId },
          { params: apiParameters }
        ])
        .then(res => {
          allInfo.value = res ? res.rows : [];
          if (allInfo.value) {
            allInfo.value.forEach(element => {
              tableData.value.push({
                LicenseNumber: element.newLicenseCode,
                ApplicantName:
                  (element.profile ? element.profile.name : "") +
                  " " +
                  (element.profile ? element.profile.fatherName : "") +
                  " " +
                  (element.profile ? element.profile.grandFatherName : ""),
                ApplicantType: element.applicantType
                  ? element.applicantType.name
                  : "",
                Date: new Date(element.createdAt)
                  .toJSON()
                  .slice(0, 10)
                  .replace(/-/g, "/"),
                data: element
              });
            });
          }

          tableDataTemp.value = tableData.value;
          unassignedTable.value = {
            columns: [
              {
                label: "License Number",
                field: "LicenseNumber",
                width: "15%",
                sortable: true,
                isKey: true
              },
              {
                label: "Applicant Name",
                field: "ApplicantName",
                width: "45%",
                sortable: true
              },
              {
                label: "Applicant Type",
                field: "ApplicantType",
                width: "20%",
                sortable: true
              },
              {
                label: "Applied Date",
                field: "Date",
                width: "20%",
                sortable: true
              },
              {
                label: "Action",
                field: "quick",
                width: "10%",
                display: function(row) {
                  return (
                    '<button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="edit-btn bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5    font-medium text-xs leading-tight uppercase rounded shadow-md   hover:shadow-lg    transition duration-150 ease-in-out" data-id="' +
                    row.id +
                    '" ><i class="fa fa-eye"></i>View/Edit</button>'
                  );
                }
              }
            ],
            rows: tableData.value,
            totalRecordCount: res.count,
            sortable: {
              order: "id",
              sort: "asc"
            }
          };
        });
    };

    const reSubmitted = apiParameters => {
      let updId = statuses
        ? statuses.filter(stat => stat.code == "UPD")[0].id
        : "";
      store
        .dispatch("reviewerNewLicense/getNewLicenseByStatus", [
          { statusId: updId },
          { params: apiParameters }
        ])
        .then(res => {
          allInfo.value = res ? res.rows : [];

          allInfo.value.forEach(element => {
            reTableData.value.push({
              LicenseNumber: element.newLicenseCode,
              ApplicantName:
                (element.profile ? element.profile.name : "") +
                " " +
                (element.profile ? element.profile.fatherName : "") +
                " " +
                (element.profile ? element.profile.grandFatherName : ""),
              ApplicationType: element ? element.applicantType.name : "",
              Date: new Date(element.createdAt)
                .toJSON()
                .slice(0, 10)
                .replace(/-/g, "/"),
              data: element
            });
          });
          tableDataTempResub.value = reTableData.value;
          reSubmittedTable.value = {
            columns: [
              {
                label: "License Number",
                field: "LicenseNumber",
                width: "20%",
                sortable: true,
                isKey: true
              },
              {
                label: "Applicant Name",
                field: "ApplicantName",
                width: "45%",
                sortable: true
              },
              {
                label: "Application Type",
                field: "ApplicationType",
                width: "15%",
                sortable: true
              },
              {
                label: "Date",
                field: "Date",
                width: "20%",
                sortable: true
              },
              {
                label: "Actions",
                field: "quick",
                width: "10%",
                display: function(row) {
                  return (
                    '<button  data-set="' +
                    row +
                    '"  data-bs-toggle="modal" data-bs-target="#staticBackdropReSubmitted" class="edit-btn-resubmitted inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white  hover:shadow-lg hover:border hover:text-primary-600 focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-id="' +
                    row.id +
                    '" ><i class="fa fa-eye"></i>View/Edit</button>'
                  );
                }
              }
            ],
            rows: reTableData.value,
            totalRecordCount: res.count,
            sortable: {
              order: "id",
              sort: "asc"
            }
          };
        });
    };

    const tableLoadingFinish = () => {
      let elements = document.getElementsByClassName("edit-btn");
      Array.prototype.forEach.call(elements, function(element) {
        if (element.classList.contains("edit-btn")) {
          element.addEventListener("click", rowClicked());
        }
      });
      unassignedTable.value.isLoading = false;
    };

    const tableLoadingFinishResub = () => {
      let elementsResub = document.getElementsByClassName(
        "edit-btn-resubmitted"
      );
      Array.prototype.forEach.call(elementsResub, function(element) {
        if (element.classList.contains("edit-btn-resubmitted")) {
          element.addEventListener("click", rowClickedResub());
        }
      });
      reSubmittedTable.value.isLoading = false;
    };

    const rowClicked = row => {
      if (row != undefined) {
        row = JSON.parse(JSON.stringify(row));
        modalDataId.value.id = row.data.id ? row.data.id : "";
        modalDataId.value.change++;
      }
    };
    const rowClickedResub = row => {
      if (row != undefined) {
        row = JSON.parse(JSON.stringify(row));
        modalDataIdResub.value.change++;
        modalDataIdResub.value.id = row.data.id ? row.data.id : "";
      }
    };
    const searchApplication = () => {
      unassignedTable.value.isLoading = true;
      unassignedTable.value.rows = [];
      tableData.value = [];
      unassigned([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTerm.value },
        { key: "fromDate", value: searchTermFromDate.value },
        {
          key: "toDate",
          value:
            searchTermToDate.value && searchTermToDate.value != ""
              ? searchTermToDate.value
              : new Date().toISOString().slice(0, 10)
        }
      ]);
    };
    const searchApplicationResub = () => {
      reSubmittedTable.value.isLoading = true;
      reSubmittedTable.value.rows = [];
      reTableData.value = [];
      reSubmitted([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTermOthers.value },
        { key: "fromDate", value: searchTermFromDateResub.value },
        { key: "toDate", value: searchTermToDateResub.value }
      ]);
    };
    onMounted(() => {
      unassigned([
        { key: "page", value: 0 },
        { key: "size", value: 10 }
      ]);
      reSubmitted([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTermOthers.value },
        { key: "fromDate", value: searchTermFromDateResub.value },
        { key: "toDate", value: searchTermToDateResub.value }
      ]);
      store.dispatch("reviewer/getAdminsByRegion", adminRegion).then(res => {
        reviewers.value = res.data.data.filter(e => {
          return e.role.code !== "UM";
        });
      });
    });
    const doSearch = (offset, limit, order, sort) => {
      unassignedTable.value.isLoading = true;

      setTimeout(() => {
        unassignedTable.value.isReSearch = offset == undefined ? true : false;
        offset = offset / 10;
        if (sort == "asc") {
          unassigned([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "value", value: searchTerm.value },
            { key: "fromDate", value: searchTermFromDate.value },
            { key: "toDate", value: searchTermToDate.value }
          ]);
        } else {
          unassigned([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "value", value: searchTerm.value },
            { key: "fromDate", value: searchTermFromDate.value },
            { key: "toDate", value: searchTermToDate.value }
          ]);
        }
        unassignedTable.value.sortable.order = order;
        unassignedTable.value.sortable.sort = sort;
      }, 600);
    };
    const doSearchResub = (offset, limit, order, sort) => {
      reSubmittedTable.value.isLoading = true;

      setTimeout(() => {
        reSubmittedTable.value.isReSearch = offset == undefined ? true : false;
        offset = offset / 10;
        if (sort == "asc") {
          reSubmitted([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "value", value: searchTermOthers.value },
            { key: "fromDate", value: searchTermFromDateResub.value },
            { key: "toDate", value: searchTermToDateResub.value }
          ]);
        } else {
          reSubmitted([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "value", value: searchTermOthers.value },
            { key: "fromDate", value: searchTermFromDateResub.value },
            { key: "toDate", value: searchTermToDateResub.value }
          ]);
        }
        reSubmittedTable.value.sortable.order = order;
        reSubmittedTable.value.sortable.sort = sort;
      }, 600);
    };
    return {
      allInfo,
      unassignedTable,
      searchTermOthers,
      searchTerm,
      reSubmittedTable,
      showModal,
      include,
      includeResub,
      clearFilters,
      searchApplication,
      searchApplicationResub,
      clearFiltersResub,
      doSearch,
      doSearchResub,
      searchTermFromDate,
      searchTermToDate,
      searchTermFromDateResub,
      searchTermToDateResub,
      reviewers,
      showModalResubmitted,
      searchedReviewer,
      tableLoadingFinish,
      tableLoadingFinishResub,
      unassigned,
      rowClicked,
      reSubmitted,
      rowClickedResub,
      modalDataId,
      adminLevel,
      modalDataIdResub
    };
  }
};
</script>
