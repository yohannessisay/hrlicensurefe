<template>
  <!-- Sidebar -->
  <reviewer-side-nav></reviewer-side-nav>
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
          <a href="#" class="pointer-events-none text-lg text-grey-300"
            >Verification</a
          >
        </li>
      </ol></reviewer-nav-bar
    >
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
              <div class="grid grid-cols-2">
                <h2
                  class="text-2xl text-left mt-1 font-semibold leading-tight"
                ></h2>
                <div class="flex justify-end ...">
                  <button
                    type="button"
                    class="
                      px-6
                      text-white
                      bg-primary-600
                      hover:text-primary-600
                      font-medium
                      text-xs
                      leading-tight
                      uppercase
                      rounded
                      shadow-md
                      focus:shadow-lg focus:outline-none focus:ring-0
                      transition
                      duration-150
                      mt-0
                      ease-in-out
                      text-right
                    "
                    data-bs-toggle="modal"
                    data-bs-target="#addRequest"
                  >
                    Add Request
                  </button>
                </div>
              </div>

              <div class="tabs-wrapper mt-40">
                <input
                  type="radio"
                  name="tab"
                  id="tab1"
                  checked="checked"
                  class="tab-head"
                />
                <label for="tab1" class="tabs_wrapper_label"
                  >Verifications Initiated By You</label
                >
                <input type="radio" name="tab" id="tab2" class="tab-head" />
                <label for="tab2" class="tabs_wrapper_label"
                  >Initiated By Others</label
                >

                <div class="tab-body-wrapper">
                  <div id="tab-body-1" class="tab-body">
                    <slot name="toyou">
                      <div
                        class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"
                      >
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
                            :is-loading="verificationTable.isLoading"
                            :columns="verificationTable.columns"
                            :rows="verificationTable.rows"
                            :total="verificationTable.totalRecordCount"
                            :sortable="verificationTable.sortable"
                            @is-finished="tableLoadingFinish"
                            @row-clicked="rowClicked"
                          ></vue-table-lite>
                        </div>
                      </div>
                    </slot>
                  </div>
                  <div id="tab-body-2" class="tab-body">
                    <slot name="to_others">
                      <div
                        class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"
                      >
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
                            :is-loading="verificationTableOthers.isLoading"
                            :columns="verificationTableOthers.columns"
                            :rows="verificationTableOthers.rows"
                            :total="verificationTableOthers.totalRecordCount"
                            :sortable="verificationTableOthers.sortable"
                            @is-finished="tableLoadingFinishOthers"
                            @row-clicked="rowClickedOthers"
                          ></vue-table-lite>
                        </div>
                      </div>
                    </slot>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main Content -->
  </section>
  <add-request></add-request>
  <view-modal :modalData="modalData"></view-modal>
  <view-modal-others :modalDataOthers="modalDataOthers"></view-modal-others>
</template>

<script>
import ReviewerSideNav from "./SharedComponents/sideNav.vue";
import ReviewerNavBar from "./SharedComponents/navBar.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import VueTableLite from "vue3-table-lite";
import viewModal from "./viewModal.vue";
import viewModalOthers from "./viewModalOthers.vue";
import addRequest from "./addRequestModal.vue";

export default {
  name: "home",
  components: {
    ReviewerSideNav,
    ReviewerNavBar,
    VueTableLite,
    viewModal,
    addRequest,
    viewModalOthers,
  },
  setup() {
    const store = useStore();
    const showModal = ref(true);

    let loading = ref(false);

    let modalData = ref({});
    let modalDataOthers = ref({});

    let allInfo = ref({
      users: [],
    });
    let isRegional = ref(false);

    const verificationTable = ref({});
    const verificationTableOthers = ref({});
    let loggedInAdmin = JSON.parse(localStorage.getItem("allAdminData"));

    verificationTable.value = {
      isLoading: true,
    };
    verificationTableOthers.value = {
      isLoading: true,
    };
    let tableData = ref([]);
    let tableDataOthers = ref([]);
    let tableDataTemp = ref([]);
    let tableDataTempOthers = ref([]);
    let params = { url: "", id: "" };

    const getVerification = () => {
      store.dispatch(params.url, params.id ? params.id : "").then((res) => {
        allInfo.value = res;
        allInfo.value.byReviewer.forEach((element) => {
          tableData.value.push({
            Number: element.id,
            ApplicantName:
              (element.profile.name ? element.profile.name : "") +
              " " +
              (element.profile.fatherName ? element.profile.fatherName : "") +
              " " +
              (element.profile.grandFatherName
                ? element.profile.grandFatherName
                : ""),
            RequestedRegion: element.region.name,
            LicenseCode: element.newLicense
              ? element.newLicense.newLicenseCode
              : element.renewal
              ? element.renewal.renewalCode
              : "-------",
            IsVerified: element.isVerified ? "Verified" : "Not Verified",
            data: element,
          });
        });
        tableDataTemp.value = tableData.value;
        allInfo.value.byRegion.forEach((element) => {
          tableDataOthers.value.push({
            Number: element.id,
            ApplicantName:
              (element.profile.name ? element.profile.name : "") +
              " " +
              (element.profile.fatherName ? element.profile.fatherName : "") +
              " " +
              (element.profile.grandFatherName
                ? element.profile.grandFatherName
                : ""),
            RequestedRegion: element.region.name,
            LicenseCode: element.newLicense
              ? element.newLicense.newLicenseCode
              : element.renewal
              ? element.renewal.renewalCode
              : "-------",
            IsVerified: element.isVerified ? "Verified" : "Not Verified",
            data: element,
          });
        });
        tableDataTempOthers.value = tableData.value;

        verificationTable.value = {
          columns: [
            {
              label: "Number",
              field: "Number",
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
              label: "Requested Region",
              field: "RequestedRegion",
              width: "20%",
              sortable: true,
            },
            {
              label: "License Code",
              field: "LicenseCode",
              width: "20%",
              sortable: true,
            },
            {
              label: "Verified",
              field: "IsVerified",
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
        verificationTableOthers.value = {
          columns: [
            {
              label: "Number",
              field: "Number",
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
              label: "Requested Region",
              field: "RequestedRegion",
              width: "20%",
              sortable: true,
            },
            {
              label: "License Code",
              field: "LicenseCode",
              width: "20%",
              sortable: true,
            },
            {
              label: "Verified",
              field: "IsVerified",
              width: "20%",
              sortable: true,
            },

            {
              label: "",
              field: "quick",
              width: "10%",
              display: function (row) {
                return (
                  '<button data-bs-toggle="modal" data-bs-target="#staticBackdropOthers" class="edit-btn-others bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5    font-medium text-xs leading-tight uppercase rounded shadow-md   hover:shadow-lg    transition duration-150 ease-in-out" data-id="' +
                  row.licenseNumber +
                  '" >View</button>'
                );
              },
            },
          ],
          rows: JSON.parse(JSON.stringify(tableDataOthers.value)),
          totalRecordCount: tableDataOthers.value.length,
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
      verificationTable.value.isLoading = false;
    };
    const tableLoadingFinishOthers = () => {
      let elements = document.getElementsByClassName("edit-btn-others");

      Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains("edit-btn-others")) {
          element.addEventListener("click", rowClicked());
        }
      });
      verificationTableOthers.value.isLoading = false;
    };

    const rowClicked = (row) => {
      if (row != undefined) {
        row = JSON.parse(JSON.stringify(row));
        modalData.value = row ? row : {};
      }
    };
    const rowClickedOthers = (row) => {
      if (row != undefined) {
        row = JSON.parse(JSON.stringify(row));
        modalDataOthers.value = row ? row : {};
      }
    };

    onMounted(() => {
      if (loggedInAdmin.regionId) {
        params = {
          url: "applicationVerification/getRequestsByRegion",
          id: { adminId: loggedInAdmin.id, regionId: loggedInAdmin.regionId },
        };
        isRegional.value = true;
      } else {
        params = {
          url: "applicationVerification/getRequestsForFederal",
          id: loggedInAdmin.id,
        };
      }
      getVerification();
    });

    return {
      allInfo,
      loading,
      verificationTable,
      verificationTableOthers,
      showModal,
      tableLoadingFinish,
      rowClickedOthers,
      tableLoadingFinishOthers,
      rowClicked,
      getVerification,
      modalData,
      modalDataOthers,
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