<template>
  <!-- Sidebar -->
  <reviewer-side-nav />
  <!-- Sidebar -->

  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar><h2>Unassigned</h2></reviewer-nav-bar>
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
                   <div class="mb-3 xl:w-full">
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
                        hover:bg-white
                        hover:text-primary-600
                        hover:border
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
              <div>
                <h2 class="text-2xl font-semibold leading-tight">
                  Resubmitted Applications
                </h2>
              </div>
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                   <div class="mb-3 xl:w-full">
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
                        hover:bg-white
                        hover:text-primary-600
                        hover:border
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
import ReviewerSideNav from "../SharedComponents/sideNav.vue";
import ReviewerNavBar from "../SharedComponents/navBar.vue";
import NewLicenseMainContent from "../../../ApplicationTypes/NewLicense/MainComponents/unassigned.vue";
import { ref, onMounted, computed } from "vue";
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
    const searchTerm = ref("");
    const searchTermOthers = ref("");
    let searchedReviewer = ref("");
    const adminId = +localStorage.getItem("adminId");
    let modalDataId = ref({
      id: "",
      change: 0,
    });
    let modalDataIdResub = ref({
      id: "",
      change: 0,
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
        modalDataId.value.apStatusUnassigned = res;
        let statusId = res;

        store
          .dispatch("reviewerRenewal/getRenewalUnassigned", statusId)
          .then((res) => {
            allInfo.value.assignApplication =
              store.getters["reviewerRenewal/getRenewalUnassignedSearched"];

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
                  LicenseNumber: element.renewalCode,
                  ApplicantName:
                    element.profile.name +
                    " " +
                    element.profile.fatherName +
                    " " +
                    element.profile.grandFatherName,
                  ApplicationType: element.renewalCode ? "Renewal" : "",
                  Date: new Date(element.createdAt)
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
                  label: "Application Type",
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
                      '<button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="edit-btn bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5    font-medium text-xs leading-tight uppercase rounded shadow-md   hover:shadow-lg    transition duration-150 ease-in-out" data-id="' +
                      row.id +
                      '" ><i class="fa fa-eye"></i>View/Edit</button>'
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
            .dispatch("reviewerRenewal/getRenewalFromOtherRegion", statusId)
            .then((res) => {
              allInfo.value.assignApplication =
                store.getters[
                  "reviewerRenewal/getRenewalFromOtherRegionSearched"
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
                  LicenseNumber: element.renewalCode,
                  ApplicantName:
                    element.profile.name +
                    " " +
                    element.profile.fatherName +
                    " " +
                    element.profile.grandFatherName,
                  ApplicationType: element.renewalCode ? "Renewal" : "",
                  Date: new Date(element.createdAt)
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
                        '"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="edit-btn bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5    font-medium text-xs leading-tight uppercase rounded shadow-md   hover:shadow-lg    transition duration-150 ease-in-out" data-id="' +
                        row.id +
                        '" ><i class="fa fa-eye"></i> View/Edit</button>'
                      );
                    },
                  },
                ],
 rows: computed(() => {
                return tableData.value.filter(
                  (x) =>
                    x.ApplicationType.toLowerCase().includes(
                      searchTerm.value.toLowerCase()
                    ) ||
                    x.ApplicantName.toLowerCase().includes(
                      searchTerm.value.toLowerCase()
                    )
                );
              }),                totalRecordCount: tableData.value.length,
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
                  '"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="edit-btn bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5    font-medium text-xs leading-tight uppercase rounded shadow-md   hover:shadow-lg    transition duration-150 ease-in-out" data-id="' +
                  row.id +
                  '" ><i class="fa fa-eye"></i>View/Edit</button>'
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
        modalDataId.value.apStatusResub = statusId;
        store
          .dispatch("reviewerRenewal/getRenewalReApply", adminStatus)
          .then((res) => {
            allInfo.value.assignApplication = res;
              // store.getters["reviewerRenewal/getRenewalReApplySearched"];

            for (let applicant in allInfo.value.assignApplication) {
              if (
                allInfo.value.assignApplication[applicant].applicationType ===
                undefined
              ) {
                allInfo.value.assignApplication[applicant].applicationType =
                  allInfo.value.assignApplication[applicant].applicantType;
              }
            }

           allInfo.value.assignApplication.forEach(
              (element) => {
                reTableData.value.push({
                  LicenseNumber: element.renewalCode,
                  ApplicantName:
                    element.profile.name +
                    " " +
                    element.profile.fatherName +
                    " " +
                    element.profile.grandFatherName,
                  ApplicationType: element.renewalCode ? "Renewal" : "",
                  Date: new Date(element.createdAt)
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
                  label: "Application Type",
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
                      '" ><i class="fa fa-eye"></i>View/Edit</button>'
                    );
                  },
                },
              ],
                rows: computed(() => {
                return reTableData.value.filter(
                  (x) =>
                    x.ApplicationType.toLowerCase().includes(
                      searchTerm.value.toLowerCase()
                    ) ||
                    x.ApplicantName.toLowerCase().includes(
                      searchTerm.value.toLowerCase()
                    )
                );
              }),
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
      Array.prototype.forEach.call(elements, function (element) {
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
      Array.prototype.forEach.call(elementsResub, function (element) {
        if (element.classList.contains("edit-btn-resubmitted")) {
          element.addEventListener("click", rowClickedResub());
        }
      });
      reSubmittedTable.value.isLoading = false;
    };

    const rowClicked = (row) => {
      if (row != undefined) {
        row = JSON.parse(JSON.stringify(row));
        modalDataId.value.change++;
        modalDataId.value.id = row.data.id ? row.data.id : "";
      }
    };
    const rowClickedResub = (row) => {
      if (row != undefined) {
        row = JSON.parse(JSON.stringify(row));
        modalDataIdResub.value.change++;
        modalDataIdResub.value.id = row.data.id ? row.data.id : "";
      }
    };

    onMounted(() => {
      unassigned();
      reSubmitted();
      store.dispatch("reviewer/getAdmins").then((res) => {
        reviewers.value = res.data.data.filter((e) => {
          return e.role.code !== "UM";
        });
      });
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
      tableLoadingFinishResub,
      unassigned,
      rowClicked,
      searchTerm,
      searchTermOthers,
      reSubmitted,
      includeFromOthers,
      rowClickedResub,
      modalDataId,
      modalDataIdResub,
    };
  },
};
</script>
