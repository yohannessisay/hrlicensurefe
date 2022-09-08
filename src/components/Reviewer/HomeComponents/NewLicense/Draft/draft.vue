<template>
  <!-- Sidebar -->
  <reviewer-side-nav />
  <!-- Sidebar -->

  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar>
      <h2 class="dashboard">Draft</h2>
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
                  Applications in Draft Assigned To You
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
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700
                        focus:shadow-lg
                        focus:outline-none
                        focus:ring-0
                        active:bg-blue-800 active:shadow-lg
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
                    :is-loading="toYouTable.isLoading"
                    :columns="toYouTable.columns"
                    :rows="toYouTable.rows"
                    :total="toYouTable.totalRecordCount"
                    :sortable="toYouTable.sortable"
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
        <template v-slot:to_others>
          <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
              <div>
                <h2 class="text-2xl font-semibold leading-tight">
                  Applications in Draft Assigned To Others
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
                      v-model="searchTermOthers"
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
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700
                        focus:shadow-lg
                        focus:outline-none
                        focus:ring-0
                        active:bg-blue-800 active:shadow-lg
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
                    :is-loading="toOthersTable.isLoading"
                    :columns="toOthersTable.columns"
                    :rows="toOthersTable.rows"
                    :total="toOthersTable.totalRecordCount"
                    :sortable="toOthersTable.sortable"
                    @is-finished="tableLoadingFinish"
                    @row-clicked="rowClickedOthers"
                  ></vue-table-lite>

                  <edit-modal-others
                    v-if="showModal"
                    :modalDataIdOthers="modalDataIdOthers"
                    :reviewers="reviewers"
                  >
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
import ReviewerSideNav from "../SharedComponents/sideNav.vue";
import ReviewerNavBar from "../SharedComponents/navBar.vue";
import NewLicenseMainContent from "../../../ApplicationTypes/NewLicense/MainComponents/draft.vue";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

import applicationStatus from "../../../Configurations/getApplicationStatus.js";
import VueTableLite from "vue3-table-lite";
import editModal from "./draftModal.vue";
import editModalOthers from "./draftOthersModal.vue";

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
    const showModal = ref(true);
    const adminId = +localStorage.getItem("adminId");
    const reviewers = ref([]);
    let nothingToShow = ref(false);
    let loading = ref(false);
    const searchTerm = ref("");
    const searchTermOthers = ref("");

    let modalDataId = ref({
      id: "",
      change: 0,
    });
    let modalDataIdOthers = ref({
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
    const draftAssignedToOthers = () => {
      loading.value = true;
      applicationStatus(store, "REVDRA").then((res) => {
        let statusId = res;
        let adminStatus = [statusId, adminId];

        store
          .dispatch(
            "reviewerNewLicense/getNewLicenseOthersUnfinished",
            adminStatus
          )
          .then((res) => {
            loading.value = false;

            allInfo.value.assignApplication =
              store.getters[
                "reviewerNewLicense/getNewLicenseOthersUnfinishedSearched"
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
            if (
              store.getters[
                "reviewerNewLicense/getNewLicenseOthersUnfinishedSearched"
              ].length === 0
            ) {
              nothingToShow.value = true;
            }

            JSON.parse(JSON.stringify(allInfo.value.assignApplication)).forEach(
              (element) => {
                tableData.value.push({
                  id: element.id,
                  ApplicantName:
                    (element.profile.name ? element.profile.name : "-----") +
                    " " +
                    (element.profile.fatherName
                      ? element.profile.fatherName
                      : "-----") +
                    " " +
                    (element.profile.grandFatherName
                      ? element.profile.grandFatherName
                      : "-----"),
                  ApplicationType: element.applicationType.name,
                  Date: new Date(element.createdAt)
                    .toJSON()
                    .slice(0, 10)
                    .replace(/-/g, "/"),
                  data: element,
                });
              }
            );

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
                  '<button data-bs-toggle="modal" data-bs-target="#editUser" class="edit-btn bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5    font-medium text-xs leading-tight uppercase rounded shadow-md   hover:shadow-lg    transition duration-150 ease-in-out" data-id="' +
                  row.id +
                  '" ><i class="fa fa-eye"></i> View</button>'
                    );
                  },
                },
              ],
              rows: computed(() => {
                return tableData.value.filter(
                  (x) =>
                    x.ApplicationType.toLowerCase().includes(
                      searchTermOthers.value.toLowerCase()
                    ) ||
                    x.ApplicantName.toLowerCase().includes(
                      searchTermOthers.value.toLowerCase()
                    )
                );
              }),
              totalRecordCount: tableData.value.length,
              sortable: {
                order: "id",
                sort: "asc",
              },
            };
          });
      });
    };

    const draftAssignedToYou = () => {
      loading.value = true;
      applicationStatus(store, "REVDRA").then((res) => {
        let statusId = res;
        let adminStatus = [statusId, adminId];
        store
          .dispatch("reviewerNewLicense/getNewLicenseUnfinished", adminStatus)
          .then((res) => {
            loading.value = false;

            allInfo.value.assignApplication =
              store.getters[
                "reviewerNewLicense/getNewLicenseUnfinishedSearched"
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
            if (
              store.getters[
                "reviewerNewLicense/getNewLicenseUnfinishedSearched"
              ].length === 0
            ) {
              nothingToShow.value = true;
            }

            JSON.parse(JSON.stringify(allInfo.value.assignApplication)).forEach(
              (element) => {
                toYouTableData.value.push({
                  id: element.id,
                  ApplicantName:
                    (element.profile.name ? element.profile.name : "-----") +
                    " " +
                    (element.profile.fatherName
                      ? element.profile.fatherName
                      : "-----") +
                    " " +
                    (element.profile.grandFatherName
                      ? element.profile.grandFatherName
                      : "-----"),
                  ApplicationType: element.applicationType.name,
                  Date: new Date(element.createdAt)
                    .toJSON()
                    .slice(0, 10)
                    .replace(/-/g, "/"),
                  data: element,
                });
              }
            );

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
                      '"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="edit-btn bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5    font-medium text-xs leading-tight uppercase rounded shadow-md   hover:shadow-lg    transition duration-150 ease-in-out" data-id="' +
                      row.id +
                      '" ><i class="fa fa-eye"></i>View/Edit</button>'
                    );
                  },
                },
              ],
              rows: computed(() => {
                return toYouTableData.value.filter(
                  (x) =>
                    x.ApplicationType.toLowerCase().includes(
                      searchTerm.value.toLowerCase()
                    ) ||
                    x.ApplicantName.toLowerCase().includes(
                      searchTerm.value.toLowerCase()
                    )
                );
              }),
              totalRecordCount: toYouTableData.value.length,
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
      toYouTable.value.isLoading = false;
    };

    const tableLoadingFinishOthers = () => {
      let elements = document.getElementsByClassName("edit-btn-others");

      Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains("edit-btn")) {
          element.addEventListener("click", rowClicked());
        }
      });
      toOthersTable.value.isLoading = false;
    };

    const rowClicked = (row) => {
      if (row != undefined) {
        store.dispatch("reviewer/getAdmins").then((res) => {
          reviewers.value = res.data.data.filter((e) => {
            return e.role.code !== "UM";
          });
        });
        row = JSON.parse(JSON.stringify(row));
        modalDataId.value.id = row.id ? row.id : "------";
        modalDataId.value.change++;
      }
    };
    const rowClickedOthers = (row) => {
      if (row != undefined) {
        store.dispatch("reviewer/getAdmins").then((res) => {
          reviewers.value = res.data.data.filter((e) => {
            return e.role.code !== "UM";
          });
        });
        row = JSON.parse(JSON.stringify(row));
        modalDataIdOthers.value.id = row.id ? row.id : "------";
        modalDataIdOthers.value.change++;
      }
    };
    onMounted(() => {
      draftAssignedToYou();
      draftAssignedToOthers();
    });

    return {
      nothingToShow,
      allInfo,
      loading,
      searchTermOthers,
      searchTerm,
      toOthersTable,
      toYouTable,
      showModal,
      tableLoadingFinish,
      draftAssignedToOthers,
      draftAssignedToYou,
      rowClicked,
      rowClickedOthers,
      modalDataId,
      modalDataIdOthers,
      reviewers,
      tableLoadingFinishOthers,
    };
  },
};
</script>
