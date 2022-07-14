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
                  <view-modal  v-if="showModal" :modalData="modalData"></view-modal>
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
      birthDate:""
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
                  '<button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="edit-btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-id="' +
                  row.licenseNumber +
                  '" >View</button>'
                );
              },
            },
          ],
          rows: JSON.parse(JSON.stringify(tableData.value)),
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
 
        modalData.value.licenseNumber = row.data.licenseNumber ?? "------";
        modalData.value.fullName = row.data.fullName ?? "------";
        modalData.value.score = row.data.score ?? "------";
        modalData.value.gender = row.data.gender ?? "------";
        modalData.value.cpdProvider = row.data.cpdProvider ?? "------";
        modalData.value.cpdActivity = row.data.cpdActivity ?? "------";
        modalData.value.courseName = row.data.courseName ?? "------";
        modalData.value.courseCompletionDate =
          row.data.courseCompletionDate ?? "------";
        modalData.value.courseCode = row.data.courseCode ?? "-----";
        modalData.value.courseAccreditationDate =
          row.data.courseAccreditationDate ?? "------";
        modalData.value.ceu = row.data.ceu ?? "------";
        modalData.value.birthDate = row.data.birthdate ?? "------";
    
      }
    };

    onMounted(() => {
      getCpdUsers();
    });

    return {
      allInfo,
      loading,
      cpdTable,
      showModal,
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