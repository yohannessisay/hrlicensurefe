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
      <new-license-main-content>
        <template v-slot:unassigned>
          <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
              <div>
                <h2 class="text-2xl font-semibold leading-tight">
                  Unassigned Applications
                </h2>
                <input
                  class="
                    form-check-input
                    appearance-none
                    h-5
                    w-5
                    border border-gray-300
                    rounded-sm
                    bg-white
                    checked:bg-blue-600 checked:border-blue-600
                    focus:outline-none
                    transition
                    duration-200
                    mt-1
                    align-top
                    bg-no-repeat bg-center bg-contain
                    float-left
                    mr-2
                    cursor-pointer
                  "
                  @change="includeFromOthers((include = !include))"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label inline-block text-gray-800 mt-1"
                  for="flexCheckDefault"
                >
                  Include From Other Regions
                </label>
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
                    :is-loading="unassignedTable.isLoading"
                    :columns="unassignedTable.columns"
                    :rows="unassignedTable.rows"
                    :total="unassignedTable.totalRecordCount"
                    :sortable="unassignedTable.sortable"
                    @is-finished="tableLoadingFinish"
                    @row-clicked="rowClicked"
                  ></vue-table-lite>
                  <edit-modal
                    v-if="showModal"
                    :modalData="modalData"
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
              <div>
                <h2 class="text-2xl font-semibold leading-tight">
                  Resubmitted Applications
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
                    :is-loading="reSubmittedTable.isLoading"
                    :columns="reSubmittedTable.columns"
                    :rows="reSubmittedTable.rows"
                    :total="reSubmittedTable.totalRecordCount"
                    :sortable="reSubmittedTable.sortable"
                    @is-finished="tableLoadingFinish"
                    @row-clicked="rowClickedResub"
                  ></vue-table-lite>
                  <edit-modal-resubmitted
                    v-if="showModalResubmitted"
                    :modalData="modalData"
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
import ReviewerSideNav from "../SharedComponents/sideNav.vue";
import ReviewerNavBar from "../SharedComponents/navBar.vue";
import NewLicenseMainContent from "../../../ApplicationTypes/NewLicense/MainComponents/unassigned.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import applicationStatus from "../../../Configurations/getApplicationStatus.js";
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
    editModalResubmitted,
  },
  setup() {
    const store = useStore();
    const showModal = ref(true);
    const showModalResubmitted = ref(true);
    const reviewers = ref([]);
    const include = ref(false);

    let searchedReviewer = ref("");
    const adminId = +localStorage.getItem("adminId");
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
      applicationId: "",
      applicantId: "",
      applicationType: "",
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

    const unassignedTable = ref({});
    const reSubmittedTable = ref([]);
    unassignedTable.value = {
      isLoading: true,
    };
    reSubmittedTable.value = {
      isLoading: true,
    };
    let tableData = ref([]);
    let tableDataTemp = ref([]);
    let reTableData = ref([]);

    const unassigned = () => {
      applicationStatus(store, "SUB").then((res) => {
        let statusId = res;

        store
          .dispatch("reviewerNewLicense/getNewLicenseUnassigned", statusId)
          .then(() => {
            allInfo.value.assignApplication =
              store.getters[
                "reviewerNewLicense/getNewLicenseUnassignedSearched"
              ];

            for (let applicant in allInfo.value.assignApplication) {
              if (
                allInfo.value.assignApplication[applicant].applicationType ===
                undefined
              ) {
                allInfo.value.assignApplication[applicant].applicationType =
                  allInfo.value.assignApplication[applicant].applicantType;
              }
            }

            JSON.parse(JSON.stringify(allInfo.value.assignApplication)).forEach(
              (element) => {
                tableData.value.push({
                  LicenseNumber: element.newLicenseCode,
                  ApplicantName:
                    element.applicant.profile.name +
                    " " +
                    element.applicant.profile.fatherName +
                    " " +
                    element.applicant.profile.grandFatherName,
                  ApplicationType: element.newLicenseCode ? "New License" : "",
                  Date: new Date(element.applicationType.createdAt)
                    .toJSON()
                    .slice(0, 10)
                    .replace(/-/g, "/"),
                  data: element,
                });
              }
            );
            tableDataTemp.value = tableData.value;
            unassignedTable.value = {
              columns: [
                {
                  label: "License Number",
                  field: "LicenseNumber",
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
                  label: "Appliction Type",
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
                      '<button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="edit-btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-id="' +
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
    };

    const includeFromOthers = () => {
      if (include.value === true) {
        unassignedTable.value.isLoading = true;
        applicationStatus(store, "SUB").then((res) => {
          const statusId = res;
          store
            .dispatch(
              "reviewerNewLicense/getNewLicenseFromOtherRegion",
              statusId
            )
            .then((res) => {
              console.log(res, statusId);

              allInfo.value.assignApplication =
                store.getters[
                  "reviewerNewLicense/getNewLicenseFromOtherRegionSearched"
                ];

              for (let applicant in allInfo.value.assignApplication) {
                if (
                  allInfo.value.assignApplication[applicant].applicationType ===
                  undefined
                ) {
                  allInfo.value.assignApplication[applicant].applicationType =
                    allInfo.value.assignApplication[applicant].applicantType;
                }
              }

              tableData.value = [];
              JSON.parse(
                JSON.stringify(allInfo.value.assignApplication)
              ).forEach((element) => {
                tableData.value.push({
                  LicenseNumber: element.newLicenseCode,
                  ApplicantName:
                    element.applicant.profile.name +
                    " " +
                    element.applicant.profile.fatherName +
                    " " +
                    element.applicant.profile.grandFatherName,
                  ApplicationType: element.newLicenseCode ? "New License" : "",
                  Date: new Date(element.applicationType.createdAt)
                    .toJSON()
                    .slice(0, 10)
                    .replace(/-/g, "/"),
                  data: element,
                });
              });

              unassignedTable.value = {
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
      }
      if (include.value === false) {
        tableData.value = [];
        tableData.value = tableDataTemp.value;
        unassignedTable.value = {
          isLoading: false,
          columns: [
            {
              label: "License Number",
              field: "LicenseNumber",
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
      }
    };

    const reSubmitted = () => {
      applicationStatus(store, "UPD").then((res) => {
        let statusId = res;
        const adminStatus = [statusId, adminId];
        store;
        store
          .dispatch("reviewerNewLicense/getNewLicenseReApply", adminStatus)
          .then(() => {
            allInfo.value.assignApplication =
              store.getters["reviewerNewLicense/getNewLicenseReApplySearched"];

            for (let applicant in allInfo.value.assignApplication) {
              if (
                allInfo.value.assignApplication[applicant].applicationType ===
                undefined
              ) {
                allInfo.value.assignApplication[applicant].applicationType =
                  allInfo.value.assignApplication[applicant].applicantType;
              }
            }

            JSON.parse(JSON.stringify(allInfo.value.assignApplication)).forEach(
              (element) => {
                reTableData.value.push({
                  LicenseNumber: element.newLicenseCode,
                  ApplicantName:
                    element.applicant.profile.name +
                    " " +
                    element.applicant.profile.fatherName +
                    " " +
                    element.applicant.profile.grandFatherName,
                  ApplicationType: element.newLicenseCode ? "New License" : "",
                  Date: new Date(element.applicationType.createdAt)
                    .toJSON()
                    .slice(0, 10)
                    .replace(/-/g, "/"),
                  data: element,
                });
              }
            );

            reSubmittedTable.value = {
              columns: [
                {
                  label: "License Number",
                  field: "LicenseNumber",
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
                  label: "Appliction Type",
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
                      '"  data-bs-toggle="modal" data-bs-target="#staticBackdropReSubmitted" class="edit-btn-resubmitted inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-id="' +
                      row.id +
                      '" >View/Edit</button>'
                    );
                  },
                },
              ],
              rows: JSON.parse(JSON.stringify(reTableData.value)),
              totalRecordCount: reTableData.value.length,
              sortable: {
                order: "id",
                sort: "asc",
              },
            };
          });
      });
    };

    const tableLoadingFinish = () => {
      let elements = document.getElementsByClassName("edit-btn");
      let elementsResub = document.getElementsByClassName(
        "edit-btn-resubmitted"
      );
      Array.prototype.forEach.call(elementsResub, function (element) {
        if (element.classList.contains("edit-btn-resubmitted")) {
          element.addEventListener("click", rowClickedResub());
        }
      });
      Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains("edit-btn")) {
          element.addEventListener("click", rowClicked());
        }
      });
      unassignedTable.value.isLoading = false;
      reSubmittedTable.value.isLoading = false;
    };

    const rowClicked = (row) => {
      if (row != undefined) {
        store.dispatch("reviewer/getAdmins").then((res) => {
          reviewers.value = res.data.data.filter((e) => {
            return e.role.code !== "UM";
          });
        });

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
        modalData.value.applicationId = row.data.id ?? "------";
        modalData.value.applicantId = row.data.applicantType.code ?? "------";
        modalData.value.applicationType =
          row.data.applicationType.code ?? "------";
      }
    };
    const rowClickedResub = (row) => {
      if (row != undefined) {
        store.dispatch("reviewer/getAdmins").then((res) => {
          reviewers.value = res.data.data.filter((e) => {
            return e.role.code !== "UM";
          });
        });

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
        modalData.value.applicationId = row.data.id ?? "------";
        modalData.value.applicantId = row.data.applicantType.code ?? "------";
        modalData.value.applicationType =
          row.data.applicationType.code ?? "------";
      }
    };

    onMounted(() => {
      unassigned();
      reSubmitted();
    });
    return {
      allInfo,
      unassignedTable,
      reSubmittedTable,
      showModal,
      include,
      reviewers,
      showModalResubmitted,
      searchedReviewer,
      tableLoadingFinish,
      unassigned,
      rowClicked,
      reSubmitted,
      includeFromOthers,
      rowClickedResub,
      modalData,
    };
  },
};
</script>
