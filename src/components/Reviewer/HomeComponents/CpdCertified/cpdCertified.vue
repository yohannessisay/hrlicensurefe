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
                  Cpd Certified Users
                </h2>
              </div>
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
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
                    placeholder="Start Searching For Name"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    v-model="searchTerm"
                  />
                  <button
                    class="
                      inline-block
                      px-6
                      py-2
                      bg-primary-700
                      text-white
                      font-medium
                      text-xs
                      leading-tight
                      uppercase
                      rounded
                      shadow-md
                      hover:bg-white hover:text-primary-600 hover:border
                      transition
                      duration-150
                      ease-in-out
                      items-center
                    "
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
                    :is-static-mode="true"
                    :is-loading="cpdTable.isLoading"
                    :columns="cpdTable.columns"
                    :rows="cpdTable.rows"
                    :total="cpdTable.totalRecordCount"
                    :sortable="cpdTable.sortable"
                    @is-finished="tableLoadingFinish"
                    @row-clicked="rowClicked"
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
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import VueTableLite from "vue3-table-lite";
import viewModal from "./viewModal.vue";

export default {
  name: "home",
  components: {
    ReviewerSideNav,
    ReviewerNavBar,
    VueTableLite,
    viewModal,
  },
  setup() {
    const store = useStore();
    const showModal = ref(true);
    let searchTerm = ref("");
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

    let allInfo = ref({
      users: [],
    });

    const cpdTable = ref({});

    cpdTable.value = {
      isLoading: true,
    };
    let tableData = ref([]);
    let tableDataTemp = ref([]);

    const getCpdUsers = () => {
      store.dispatch("reviewerCpd/getCpdCertified").then((res) => {
        allInfo.value.users = res.data;

        allInfo.value.users.forEach((element) => {
          tableData.value.push({
            LicenseNumber: element.licenseNumber,
            CertifiedUser: element.fullName,
            CourseAccrediator: element.courseAccrediator,
            Ceu: element.ceu,
            CourseName: element.courseName,
            CpdProvider: element.cpdProvider,
            data: element,
          });
        });
        tableDataTemp.value = tableData.value;
        cpdTable.value = {
          columns: [
            {
              label: "License Number",
              field: "LicenseNumber",
              width: "3%",
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
              width: "20%",
              sortable: true,
            },
            {
              label: "Course Name",
              field: "CourseName",
              width: "20%",
              sortable: true,
            },
            {
              label: "Cpd Provider",
              field: "CpdProvider",
              width: "20%",
              sortable: true,
            },

            {
              label: "",
              field: "quick",
              width: "10%",
              display: function (row) {
                return (
                  '<button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="edit-btn bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5    font-medium text-xs leading-tight uppercase rounded shadow-md   hover:shadow-lg    transition duration-150 ease-in-out" data-id="' +
                  row.id +
                  '" ><i class="fa fa-eye"></i> View</button>'
                );
              },
            },
          ],
          rows: computed(() => {
            return tableData.value.filter((x) =>
              x.CertifiedUser
                ? x.CertifiedUser.toLowerCase().includes(
                    searchTerm.value.toLowerCase()
                  )
                : ""
            );
          }),
          totalRecordCount: tableData.value.length,
          sortable: {
            order: "id",
            sort: "asc",
          },
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
      cpdTable.value.isLoading = false;
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
      getCpdUsers();
    });

    return {
      allInfo,
      loading,
      cpdTable,
      showModal,
      searchTerm,
      tableLoadingFinish,
      rowClicked,
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