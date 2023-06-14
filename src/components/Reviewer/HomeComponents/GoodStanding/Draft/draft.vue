<template>
  <!-- Sidebar -->
  <reviewer-side-nav />
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
            href="/admin/goodstanding/"
            class="hover:text-primary-600 text-grey-300"
            >Goodstanding</a
          >
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li>
          <a href="#" class="pointer-events-none text-lg text-grey-300"
            >Draft</a
          >
        </li>
      </ol></reviewer-nav-bar
    >
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <main-body>
        <template v-slot:yourHeader> Assigned To You </template>
        <template v-slot:toyou>
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
                    :is-loading="assignedToYouTable.isLoading"
                    :columns="assignedToYouTable.columns"
                    :rows="assignedToYouTable.rows"
                    :total="assignedToYouTable.totalRecordCount"
                    :sortable="assignedToYouTable.sortable"
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
        <template v-slot:othersHeader> Assigned To Others </template>
        <template v-slot:to_others>
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
                    :is-loading="assignedToOthersTable.isLoading"
                    :columns="assignedToOthersTable.columns"
                    :rows="assignedToOthersTable.rows"
                    :total="assignedToOthersTable.totalRecordCount"
                    :sortable="assignedToOthersTable.sortable"
                    @is-finished="tableLoadingFinishOthers"
                    @row-clicked="rowClickedOth"
                    @do-search="doSearchOthers"
                  ></vue-table-lite>
                  <edit-modal-resubmitted
                    :modalDataIdOthers="modalDataIdOthers"
                    :reviewers="reviewers"
                  >
                  </edit-modal-resubmitted>
                </div>
              </div>
            </div>
          </div>
        </template>
      </main-body>
    </div>
    <!-- Main Content -->
  </section>
</template>

<script>
import ReviewerSideNav from "../SharedComponents/sideNav.vue";
import ReviewerNavBar from "../../../SharedComponents/navBar.vue";
import MainBody from "../../../SharedComponents/mainBody.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import VueTableLite from "vue3-table-lite";
import editModal from "./draftModal.vue";
import editModalResubmitted from "./draftOthersModal.vue";
export default {
  name: "home",
  components: {
    ReviewerSideNav,
    ReviewerNavBar,
    MainBody,
    editModal,
    VueTableLite,
    editModalResubmitted,
  },
  setup() {
    const store = useStore();
    const showModal = ref(true);
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
      change: 0,
    });
    let modalDataIdOthers = ref({
      id: "",
      change: 0,
    });

    let allInfo = [];

    const assignedToYouTable = ref({});
    const assignedToOthersTable = ref([]);
    assignedToYouTable.value = {
      isLoading: true,
    };
    assignedToOthersTable.value = {
      isLoading: true,
    };
    let tableData = [];
    let othersTable = [];
    const clearFilters = () => {
      searchTerm.value = "";
      searchTermFromDate.value = "";
      searchTermToDate.value = "";
      assignedToYouTable.value.isLoading = true;
      assignedToYouTable.value.rows = [];

      assignedToYou([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTerm.value },
        { key: "fromDate", value: searchTermFromDate.value },
        { key: "toDate", value: searchTermToDate.value },
      ]);
    };

    const clearFiltersResub = () => {
      searchTermOthers.value = "";
      searchTermFromDateResub.value = "";
      searchTermToDateResub.value = "";
      assignedToOthersTable.value.isLoading = true;
      assignedToOthersTable.value.rows = [];

      assignedToOthers([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTermOthers.value },
        { key: "fromDate", value: searchTermFromDateResub.value },
        { key: "toDate", value: searchTermToDateResub.value },
      ]);
    };
    const assignedToYou = (apiParameters) => {
      // modalDataId.value.apStatusUnassigned = res;
      let subId = statuses
        ? statuses.filter((stat) => stat.code == "REVDRA")[0].id
        : "";
      tableData = [];
      store
        .dispatch("reviewerGoodStanding/getGoodstandingsByStatus", [
          { statusId: subId },
          { params: apiParameters },
        ])
        .then((res) => {
          allInfo = res ? res.rows : [];

          allInfo.forEach((element) => {
            tableData.push({
              LicenseNumber: element.goodStandingCode,
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
              data: element,
            });
          });

          assignedToYouTable.value = {
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
                display: function(row) {
                  return (
                    '<button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="edit-btn bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5    font-medium text-xs leading-tight uppercase rounded shadow-md   hover:shadow-lg    transition duration-150 ease-in-out" data-id="' +
                    row.id +
                    '" ><i class="fa fa-eye"></i>View/Edit</button>'
                  );
                },
              },
            ],
            rows: tableData,
            totalRecordCount: res.count,
            sortable: {
              order: "id",
              sort: "asc",
            },
          };
        });
    };

    const assignedToOthers = (apiParameters) => {
      let updId = statuses
        ? statuses.filter((stat) => stat.code == "REVDRA")[0].id
        : "";
      othersTable = [];
      store
        .dispatch("reviewerGoodStanding/getOtherGoodstandingsByStatus", [
          { statusId: updId },
          { params: apiParameters },
        ])
        .then((res) => {
          allInfo = res && res.rows ? res.rows : [];

          allInfo.forEach((element) => {
            othersTable.push({
              LicenseNumber: element.goodStandingCode,
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
              data: element,
            });
          });
          assignedToOthersTable.value = {
            columns: [
              {
                label: "License Number",
                field: "LicenseNumber",
                width: "20%",
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
                label: "Application Type",
                field: "ApplicationType",
                width: "15%",
                sortable: true,
              },
              {
                label: "Date",
                field: "Date",
                width: "20%",
                sortable: true,
              },
              {
                label: "Actions",
                field: "quick",
                width: "10%",
                display: function(row) {
                  return (
                    '<button  data-set="' +
                    row +
                    '"  data-bs-toggle="modal" data-bs-target="#staticBackdropOthers" class="edit-btn-others inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white  hover:shadow-lg hover:border hover:text-primary-600 focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-id="' +
                    row.id +
                    '" ><i class="fa fa-eye"></i>View/Edit</button>'
                  );
                },
              },
            ],
            rows: othersTable,
            totalRecordCount: res.count,
            sortable: {
              order: "id",
              sort: "asc",
            },
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
      assignedToYouTable.value.isLoading = false;
    };

    const tableLoadingFinishOthers = () => {
      let elementsResub = document.getElementsByClassName("edit-btn-others");
      Array.prototype.forEach.call(elementsResub, function(element) {
        if (element.classList.contains("edit-btn-others")) {
          element.addEventListener("click", rowClickedOth());
        }
      });
      assignedToOthersTable.value.isLoading = false;
    };

    const rowClicked = (row) => {
      if (row != undefined) {
        row = JSON.parse(JSON.stringify(row));
        modalDataId.value.id = row.data.id ? row.data.id : "";
        modalDataId.value.change++;
      }
    };
    const rowClickedOth = (row) => {
      if (row != undefined) {
        row = JSON.parse(JSON.stringify(row));
        modalDataIdOthers.value.change++;
        modalDataIdOthers.value.id = row.data.id ? row.data.id : "";
      }
    };
    const searchApplication = () => {
      assignedToYouTable.value.isLoading = true;
      assignedToYouTable.value.rows = [];
      
      assignedToYou([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTerm.value },
        { key: "fromDate", value: searchTermFromDate.value },
        {
          key: "toDate",
          value:
            searchTermToDate.value && searchTermToDate.value != ""
              ? searchTermToDate.value
              : new Date().toISOString().slice(0, 10),
        },
      ]);
    };
    const searchApplicationResub = () => {
      assignedToOthersTable.value.isLoading = true;
      assignedToOthersTable.value.rows = [];
    
      assignedToOthers([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTermOthers.value },
        { key: "fromDate", value: searchTermFromDateResub.value },
        { key: "toDate", value: searchTermToDateResub.value },
      ]);
    };
    onMounted(() => {
      assignedToYou([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
      ]);
      assignedToOthers([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTermOthers.value },
        { key: "fromDate", value: searchTermFromDateResub.value },
        { key: "toDate", value: searchTermToDateResub.value },
      ]);
      store.dispatch("reviewer/getAdminsByRegion", adminRegion).then((res) => {
        reviewers.value = res.data.data.filter((e) => {
          return e.role.code !== "UM";
        });
      });
    });
    const doSearch = (offset, limit, order, sort) => {
      assignedToYouTable.value.isLoading = true;

      setTimeout(() => {
        assignedToYouTable.value.isReSearch =
          offset == undefined ? true : false;
        offset = offset / 10;
        if (sort == "asc") {
          assignedToYou([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "value", value: searchTerm.value },
            { key: "fromDate", value: searchTermFromDate.value },
            { key: "toDate", value: searchTermToDate.value },
          ]);
        } else {
          assignedToYou([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "value", value: searchTerm.value },
            { key: "fromDate", value: searchTermFromDate.value },
            { key: "toDate", value: searchTermToDate.value },
          ]);
        }
        assignedToYouTable.value.sortable.order = order;
        assignedToYouTable.value.sortable.sort = sort;
      }, 600);
    };
    const doSearchOthers = (offset, limit, order, sort) => {
      assignedToOthersTable.value.isLoading = true;

      setTimeout(() => {
        assignedToOthersTable.value.isReSearch =
          offset == undefined ? true : false;
        offset = offset / 10;
        if (sort == "asc") {
          assignedToOthers([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "value", value: searchTermOthers.value },
            { key: "fromDate", value: searchTermFromDateResub.value },
            { key: "toDate", value: searchTermToDateResub.value },
          ]);
        } else {
          assignedToOthers([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "value", value: searchTermOthers.value },
            { key: "fromDate", value: searchTermFromDateResub.value },
            { key: "toDate", value: searchTermToDateResub.value },
          ]);
        }
        assignedToOthersTable.value.sortable.order = order;
        assignedToOthersTable.value.sortable.sort = sort;
      }, 600);
    };
    return {
      allInfo,
      assignedToYouTable,
      searchTermOthers,
      searchTerm,
      assignedToOthersTable,
      showModal,
      include,
      includeResub,
      clearFilters,
      searchApplication,
      searchApplicationResub,
      clearFiltersResub,
      doSearch,
      doSearchOthers,
      searchTermFromDate,
      searchTermToDate,
      searchTermFromDateResub,
      searchTermToDateResub,
      reviewers,
      searchedReviewer,
      tableLoadingFinish,
      tableLoadingFinishOthers,
      rowClicked,
      rowClickedOth,
      modalDataId,
      adminLevel,
      modalDataIdOthers,
    };
  },
};
</script>
