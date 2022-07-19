<template>
  <!-- Sidebar -->
  <reviewer-side-nav />
  <!-- Sidebar -->

  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar>
      <h2 class="dashboard">Licensed</h2>
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
                  Licenesed By You
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
                    :is-loading="toYouTable.isLoading"
                    :columns="toYouTable.columns"
                    :rows="toYouTable.rows"
                    :total="toYouTable.totalRecordCount"
                    :sortable="toYouTable.sortable"
                    @is-finished="tableLoadingFinish"
                    @row-clicked="rowClicked"
                  ></vue-table-lite>
                    <edit-modal v-if="showModal" :modalData="modalData">
                  </edit-modal>
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
                  Licensed By Others
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
                    :is-loading="toOthersTable.isLoading"
                    :columns="toOthersTable.columns"
                    :rows="toOthersTable.rows"
                    :total="toOthersTable.totalRecordCount"
                    :sortable="toOthersTable.sortable"
                    @is-finished="tableLoadingFinish"
                    @row-clicked="rowClicked"
                  ></vue-table-lite>

                
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
import ReviewerSideNav from "./Components/sideNav.vue";
import ReviewerNavBar from "../../ReviewerNavBar.vue";
import NewLicenseMainContent from "../../ApplicationTypes/Renewal/MainComponents/licensed.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

import applicationStatus from "../../Configurations/getApplicationStatus.js";
import VueTableLite from "vue3-table-lite";
import editModal from "./Modals/licensedModal.vue";

export default {
  name: "home",
  components: {
    ReviewerSideNav,
    ReviewerNavBar,
    NewLicenseMainContent,
    VueTableLite,
    editModal,
  },
  setup() {
    const store = useStore();
    const showModal = ref(true);
    const adminId = +localStorage.getItem("adminId");

    let nothingToShow = ref(false);
    let loading = ref(false);

    let modalData = ref({
      id: "",
      name: "",
      email: "",
      gender: "",
      nationality: "",
      dateOfBirth: "",
      martialStatus: "",
      mobileNumber: "",
      instName: "",
      department: "",
      instType: "",
    });

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

    const toOthersTable = ref({});
    const toYouTable = ref({});
    let tableData = ref([]);
    let toYouTableData = ref([]);
    toOthersTable.value = {
      isLoading: true,
    };
    toYouTable.value = {
      isLoading: true,
    };
    const licensedByYou = () => {
      loading.value = true;
      applicationStatus(store, "AP").then((ap) => {
        applicationStatus(store, "CONF").then((conf) => {
          applicationStatus(store, "APP").then((app) => {
            let adminStatus = [adminId, ap, conf, app];

            store
              .dispatch("reviewerNewLicense/getNewLicenseLicensed", adminStatus)
              .then(() => {
                loading.value = false;

                allInfo.value.assignApplication =
                  store.getters[
                    "reviewerNewLicense/getNewLicenseLicensedSearched"
                  ];

                for (let applicant in allInfo.value.assignApplication) {
                  if (
                    allInfo.value.assignApplication[applicant]
                      .applicationType === undefined
                  ) {
                    allInfo.value.assignApplication[applicant].applicationType =
                      allInfo.value.assignApplication[applicant].applicantType;
                  }
                }

                JSON.parse(
                  JSON.stringify(allInfo.value.assignApplication)
                ).forEach((element) => {
                  toYouTableData.value.push({
                    id: element.id,
                    ApplicantName:
                      element.applicant.profile.name +
                      " " +
                      element.applicant.profile.fatherName +
                      " " +
                      element.applicant.profile.grandFatherName,
                    ApplicationType: element.applicationType.name,
                    Date: new Date(element.applicationType.createdAt)
                      .toJSON()
                      .slice(0, 10)
                      .replace(/-/g, "/"),
                    data: element,
                  });
                });

                toYouTable.value = {
                  isLoading: false,
                  columns: [
                    {
                      label: "ID",
                      field: "id",
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
                      label: "Applicant Type",
                      field: "ApplicationType",
                      width: "15%",
                      sortable: true,
                    },
                    {
                      label: "Date",
                      field: "Date",
                      width: "15%",
                      sortable: true,
                    },
                    {
                      label: "",
                      field: "quick",
                      width: "10%",
                      display: function (row) {
                        return (
                          '<button  data-set="' +
                          row +
                          '"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="edit-btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-id="' +
                          row.id +
                          '" >View/Edit</button>'
                        );
                      },
                    },
                  ],
                  rows: JSON.parse(JSON.stringify(toYouTableData.value)),
                  totalRecordCount: toYouTableData.value.length,
                  sortable: {
                    order: "id",
                    sort: "asc",
                  },
                };
              });
          });
        });
      });
    };

    const  licensedByOthers = () => {
      loading.value = true;
      applicationStatus(store, "AP").then((ap) => {
        applicationStatus(store, "CONF").then((conf) => {
          applicationStatus(store, "APP").then((app) => {
            let adminStatus = [adminId, ap, conf, app];

            store
              .dispatch("reviewerNewLicense/getNewLicenseOtherLicensed", adminStatus)
              .then(() => {
                loading.value = false;

                allInfo.value.assignApplication =
                  store.getters[
                    "reviewerNewLicense/getNewLicenseOthersLicensedSearched"
                  ];

                for (let applicant in allInfo.value.assignApplication) {
                  if (
                    allInfo.value.assignApplication[applicant]
                      .applicationType === undefined
                  ) {
                    allInfo.value.assignApplication[applicant].applicationType =
                      allInfo.value.assignApplication[applicant].applicantType;
                  }
                }

                JSON.parse(
                  JSON.stringify(allInfo.value.assignApplication)
                ).forEach((element) => {
                  tableData.value.push({
                    id: element.id,
                    ApplicantName:
                      element.applicant.profile.name +
                      " " +
                      element.applicant.profile.fatherName +
                      " " +
                      element.applicant.profile.grandFatherName,
                    ApplicationType: element.applicationType.name,
                    Date: new Date(element.applicationType.createdAt)
                      .toJSON()
                      .slice(0, 10)
                      .replace(/-/g, "/"),
                    data: element,
                  });
                });

                toOthersTable.value = {
                  isLoading: false,
                  columns: [
                    {
                      label: "ID",
                      field: "id",
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
                      label: "Applicant Type",
                      field: "ApplicationType",
                      width: "15%",
                      sortable: true,
                    },
                    {
                      label: "Date",
                      field: "Date",
                      width: "15%",
                      sortable: true,
                    },
                    {
                      label: "",
                      field: "quick",
                      width: "10%",
                      display: function (row) {
                        return (
                          '<button  data-set="' +
                          row +
                          '"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="edit-btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-id="' +
                          row.id +
                          '" >View/Edit</button>'
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
          });
        });
      });
    };

    const tableLoadingFinish = () => {
      toOthersTable.value.isLoading = false;
      toYouTable.value.isLoading = false;
      let elements = document.getElementsByClassName("edit-btn");

      Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains("edit-btn")) {
          element.addEventListener("click", rowClicked());
        }
      });
    };
    const rowClicked = (row) => {
      if (row != undefined) {
        row = JSON.parse(JSON.stringify(row));

        modalData.value.id = row.data.applicant.id ?? "------";
        modalData.value.name = row.ApplicantName ?? "------";
        modalData.value.email = row.data.applicant.emailAddress ?? "------";
        modalData.value.mobileNumber =
          row.data.applicant.phoneNumber ?? "------";
        modalData.value.dateOfBirth =
          row.data.applicant.profile.dateOfBirth ?? "------";
        modalData.value.gender = row.data.applicant.profile.gender ?? "------";
        modalData.value.instName =
          row.data.education.institution?.name ?? "------";
        modalData.value.department =
          row.data.education.department?.name ?? "------";
        modalData.value.instType =
          row.data.education.institution.institutionType?.name ?? "-----";
        modalData.value.nationality =
          row.data.applicant.profile.nationality?.name ?? "------";
        modalData.value.martialStatus =
          row.data.applicant.profile.maritalStatus?.name ?? "------";
      }
    };
    onMounted(() => {
      licensedByYou();
      licensedByOthers();
    });

    return {
      nothingToShow,
      allInfo,
      loading,
      toOthersTable,
      toYouTable,
      showModal,
      tableLoadingFinish,
      licensedByOthers,
      rowClicked,
      modalData,
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
