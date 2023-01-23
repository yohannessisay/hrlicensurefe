<template>
  <!-- Sidebar -->
  <reviewer-side-nav />
  <!-- Sidebar -->

  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar
      ><ol class="list-reset flex">
        <li>
          <router-link to="/admin/review"
            ><span class="text-primary-600 text-base">Home</span></router-link
          >
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li>
          <a href="#" class="hover:text-primary-600 text-grey-300"
            >Good Standing</a
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
      <main-body>
        <template v-slot:yourHeader> Unassigned Applications </template>
        <template v-slot:toyou>
          <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
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
                    :modalDataId="modalDataId"
                    :reviewers="reviewers"
                  >
                  </edit-modal>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:othersHeader> Resubmitted Applications </template>
        <template v-slot:to_others>
          <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
              <div>
                <h2 class="text-2xl font-semibold leading-tight"></h2>
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
                    :modalDataIdResub="modalDataIdResub"
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
import applicationStatus from "../../../Configurations/getApplicationStatus.js";
import VueTableLite from "vue3-table-lite";
import editModal from "./unassignedModal.vue";
import editModalResubmitted from "./unassignedResubmittedModal.vue";

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
    const showModalResubmitted = ref(true);
    const reviewers = ref([]);
    const include = ref(false);
    const adminRegion = JSON.parse(
      localStorage.getItem("allAdminData")
    ).regionId;
    const adminLevel = JSON.parse(
      localStorage.getItem("allAdminData")
    ).expertLevel;
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

    let allInfo = ref({});
    let includeOthers = ref(false);
    const unassignedTable = ref({});
    const reSubmittedTable = ref([]);
    unassignedTable.value = {
      isLoading: true,
    };
    reSubmittedTable.value = {
      isLoading: true,
    };
    let tableData = ref([]);
    let tableDataOthers = ref([]);
    let tableDataTemp = ref([]);
    let reTableData = ref([]);

    const unassigned = () => {
      applicationStatus(store, "SUB").then((res) => {
        modalDataId.value.apStatusUnassigned = res;
        let statusId = res;

        store
          .dispatch("reviewerGoodStanding/getUnassignedGoodStanding", statusId)
          .then((res) => {
            allInfo.value = res;
            JSON.parse(JSON.stringify(allInfo.value)).forEach((element) => {
              tableData.value.push({
                LicenseNumber: element.goodStandingCode
                  ? element.goodStandingCode
                  : "",
                ApplicantName:
                  (element.profile ? element.profile.name : "") +
                  " " +
                  (element.profile ? element.profile.fatherName : "") +
                  " " +
                  (element.profile ? element.profile.grandFatherName : ""),
                ApplicantType: element ? element.applicantType.name : "",
                Date: new Date(element.createdAt)
                  .toJSON()
                  .slice(0, 10)
                  .replace(/-/g, "/"),
                data: element,
              });
            });

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
                  label: "Applicant Type",
                  field: "ApplicantType",
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

    const reSubmitted = () => {
      applicationStatus(store, "UPD").then((res) => {
        let statusId = res;
        const adminStatus = [statusId, adminId];
        modalDataId.value.apStatusResub = statusId;
        store
          .dispatch("reviewerGoodStanding/getGoodStandingReApply", adminStatus)
          .then((res) => {
            allInfo.value = res;

            JSON.parse(JSON.stringify(allInfo.value)).forEach((element) => {
              reTableData.value.push({
                LicenseNumber: element.goodStandingCode,
                ApplicantName:
                  element.profile.name +
                  " " +
                  element.profile.fatherName +
                  " " +
                  element.profile.grandFatherName,
                ApplicantType: element ? element.applicantType.name : "",
                Date: new Date(element.createdAt)
                  .toJSON()
                  .slice(0, 10)
                  .replace(/-/g, "/"),
                data: element,
              });
            });

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
                  label: "Applicant Type",
                  field: "ApplicantType",
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
    const includeFromOthers = () => {
      if (includeOthers.value == true) {
        unassignedTable.value.rows = tableDataOthers.value;
      } else {
        unassignedTable.value.rows = tableData.value;
      }
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
      store.dispatch("reviewer/getAdminsByRegion", adminRegion).then((res) => {
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
      adminLevel,
      include,
      reviewers,
      showModalResubmitted,
      searchedReviewer,
      tableLoadingFinish,
      tableLoadingFinishResub,
      rowClicked,
      includeFromOthers,
      rowClickedResub,
      modalDataId,
      modalDataIdResub,
      includeOthers,
    };
  },
};
</script>
