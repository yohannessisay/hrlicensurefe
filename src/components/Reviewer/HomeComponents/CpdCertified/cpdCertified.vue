<template>
  <!-- Sidebar -->
  <reviewer-side-nav />
  <!-- Sidebar -->

  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar></reviewer-nav-bar>
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
              <div>
                <h2 class="text-2xl font-semibold leading-tight">
                  CPD Certified Users
                </h2>
              </div>
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div
                  class="   bg-grey-300
                  p-4
                  mb-4
                  rounded-lg"
                >
                  <h2 class="text-white font-bold text-2xl">Filters</h2>
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
                      mr-2
                      ease-in-out
                      focus:text-gray-700
                      focus:bg-white
                      focus:border-blue-600
                      focus:outline-none
                    "
                      placeholder="Certified User Name"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                      v-model="searchTermUser"
                      @keyup.enter="applyFilter()"
                    />
                    <input
                      type="search"
                      class="
                      form-control
                      relative
                      flex-auto
                      min-w-0
                      block
                      w-full
                      mr-2
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      transition
                      ease-in-out
                      rounded-lg
                    "
                      placeholder="Course Accrediator"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                      v-model="searchTermAccrediator"
                      @keyup.enter="applyFilter()"
                    />
                    <input
                      type="search"
                      class="
                      form-control
                      relative
                      flex-auto
                      min-w-0
                      block
                      w-full
                      mr-2
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      transition
                      ease-in-out
                      rounded-lg
                    "
                      placeholder="Course Name"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                      v-model="searchTermCourse"
                      @keyup.enter="applyFilter()"
                    />
                    <input
                      type="search"
                      class="
                      form-control
                      relative
                      flex-auto
                      min-w-0
                      block
                      w-full
                      mr-2
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      transition
                      ease-in-out
                      rounded-lg
                    "
                      placeholder="CPD Provider"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                      v-model="searchTermCpd"
                      @keyup.enter="applyFilter()"
                    />
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
                    :is-loading="cpdTable.isLoading"
                    :is-re-search="cpdTable.isReSearch"
                    :columns="cpdTable.columns"
                    :rows="cpdTable.rows"
                    :total="cpdTable.totalRecordCount"
                    :sortable="cpdTable.sortable"
                    @is-finished="tableLoadingFinish"
                    @row-clicked="rowClicked"
                    @do-search="doSearch"
                  ></vue-table-lite>
                  <view-modal
                    v-if="showModal"
                    :modalData="modalData"
                  ></view-modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main Content -->
  </section>
</template>

<script>
import ReviewerSideNav from "./SharedComponents/sideNav.vue";
import ReviewerNavBar from "./SharedComponents/navBar.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import VueTableLite from "vue3-table-lite";
import viewModal from "./viewModal.vue";

export default {
  components: {
    ReviewerSideNav,
    ReviewerNavBar,
    VueTableLite,
    viewModal,
  },
  setup() {
    const store = useStore();
    const showModal = ref(true);
    let searchTermUser = ref("");

    let searchTermAccrediator = ref("");
    let searchTermCourse = ref("");
    let searchTermCpd = ref("");
    let searchTermFromDate = ref("");
    let searchTermToDate = ref("");
    let loading = ref(false);

    let modalData = ref({
      licenseNumber: "",
      fullName: "",
      score: "",
      gender: "",
      cpdProvider: "",
      cpdActivity: "",
      courseName: "",
      courseCompletionDate: "",
      courseCode: "",
      courseAccreditationDate: "",
      courseAccrediator: "",
      ceu: "",
      birthDate: "",
    });

    let allInfo = [];

    let cpdTable = ref({});

    cpdTable.value = {
      isLoading: true,
    };
    let tableData = [];

    const getCpdUsers = (apiParameters) => {
      store
        .dispatch("reviewerCpd/getCpdCertified", [
          {
            params: apiParameters,
          },
        ])
        .then((res) => {
          allInfo = res.rows ? res.rows : [];

          allInfo.forEach((element) => {
            tableData.push({
              LicenseNumber: element.licenseNumber,
              CertifiedUser: element.fullName,
              CourseAccrediator: element.courseAccrediator,
              Ceu: element.ceu,
              CourseName: element.courseName,
              CpdProvider: element.cpdProvider,
              data: element,
            });
          });
          cpdTable.value = {
            columns: [
              {
                label: "License Number",
                field: "LicenseNumber",
                width: "10%",
                sortable: true,
                isKey: true,
              },
              {
                label: "Certified User",
                field: "CertifiedUser",
                width: "20%",
                sortable: true,
              },
              {
                label: "Course Accrediator",
                field: "CourseAccrediator",
                width: "20%",
                sortable: true,
              },
              {
                label: "Course Educational Unit",
                field: "Ceu",
                width: "10%",
                sortable: true,
              },
              {
                label: "Course Name",
                field: "CourseName",
                width: "10%",
                sortable: true,
              },
              {
                label: "CPD Provider",
                field: "CpdProvider",
                width: "20%",
                sortable: true,
              },

              {
                label: "",
                field: "quick",
                width: "10%",
                display: function(row) {
                  return (
                    '<button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="edit-btn bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5    font-medium text-xs leading-tight uppercase rounded shadow-md   hover:shadow-lg    transition duration-150 ease-in-out" data-id="' +
                    row.id +
                    '" ><i class="fa fa-eye"></i> View</button>'
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

    const tableLoadingFinish = () => {
      let elements = document.getElementsByClassName("edit-btn");

      Array.prototype.forEach.call(elements, function(element) {
        if (element.classList.contains("edit-btn")) {
          element.addEventListener("click", rowClicked());
        }
      });
   
    };

    const rowClicked = (row) => {
      if (row != undefined) {
        row = JSON.parse(JSON.stringify(row));

        modalData.value.licenseNumber = row.data.licenseNumber
          ? row.data.licenseNumber
          : "------";
        modalData.value.fullName = row.data.fullName
          ? row.data.fullName
          : "------";
        modalData.value.score = row.data.score ? row.data.score : "------";
        modalData.value.gender = row.data.gender ? row.data.gender : "------";
        modalData.value.cpdProvider = row.data.cpdProvider
          ? row.data.cpdProvider
          : "------";
        modalData.value.cpdActivity = row.data.cpdActivity
          ? row.data.cpdActivity
          : "------";
        modalData.value.courseName = row.data.courseName
          ? row.data.courseName
          : "------";
        modalData.value.courseCompletionDate = row.data.courseCompletionDate
          ? row.data.courseCompletionDate
          : "------";
        modalData.value.courseCode = row.data.courseCode
          ? row.data.courseCode
          : "-----";
        modalData.value.courseAccreditationDate = row.data
          .courseAccreditationDate
          ? row.data.courseAccreditationDate
          : "------";
        modalData.value.ceu = row.data.ceu ? row.data.ceu : "------";
        modalData.value.birthDate = row.data.birthdate
          ? row.data.birthdate
          : "------";
      }
    };

    onMounted(() => {
      cpdTable.value.isLoading = true;
      getCpdUsers([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
      ]);
    });
    const doSearch = (offset, limit, order, sort) => {
      cpdTable.value.isLoading = true;
      cpdTable.value.rows = [];
      tableData = [];
      setTimeout(() => {
        cpdTable.value.isReSearch = offset == undefined ? true : false;
        offset = offset && offset > 0 ? offset / 10 - 1 : 1;
        if (sort == "asc") {
          getCpdUsers([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "user", value: searchTermUser.value },
            { key: "accrediator", value: searchTermAccrediator.value },
            { key: "course", value: searchTermCourse.value },
            { key: "cpd", value: searchTermCpd.value },
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
          getCpdUsers([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "user", value: searchTermUser.value },
            { key: "accrediator", value: searchTermAccrediator.value },
            { key: "course", value: searchTermCourse.value },
            { key: "cpd", value: searchTermCpd.value },
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
        cpdTable.value.sortable.order = order;
        cpdTable.value.sortable.sort = sort;
      }, 200);
    };
    const applyFilter = () => {
      cpdTable.value.isLoading = true;
      cpdTable.value.rows = [];
      tableData = [];
      getCpdUsers([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "user", value: searchTermUser.value },
        { key: "accrediator", value: searchTermAccrediator.value },
        { key: "course", value: searchTermCourse.value },
        { key: "cpd", value: searchTermCpd.value },
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
  
      searchTermFromDate.value = "";
      searchTermToDate.value = "";
      searchTermUser.value = "";
      searchTermAccrediator.value = "";
      searchTermCourse.value = "";
      searchTermCpd.value = "";
      cpdTable.value.isLoading = true;
      cpdTable.value.rows = [];
      tableData = [];
      getCpdUsers([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "user", value: searchTermUser.value },
        { key: "accrediator", value: searchTermAccrediator.value },
        { key: "course", value: searchTermCourse.value },
        { key: "cpd", value: searchTermCpd.value },
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
    const searchApplication = () => {
      cpdTable.value.isLoading = true;
      cpdTable.value.rows = [];
      tableData = [];
      getCpdUsers([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "user", value: searchTermUser.value },
        { key: "accrediator", value: searchTermAccrediator.value },
        { key: "course", value: searchTermCourse.value },
        { key: "cpd", value: searchTermCpd.value },
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
    return {
      allInfo,
      loading,
      cpdTable,
      showModal,
      searchTermUser,
      searchTermAccrediator,
      searchTermCourse,
      searchTermCpd,
      tableLoadingFinish,
      rowClicked,
      doSearch,
      searchApplication,
      applyFilter,
      clearFilters,
      modalData,
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
