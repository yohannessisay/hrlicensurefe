<template>
  <!-- Sidebar -->
  <reviewer-side-bar> </reviewer-side-bar>

  <!-- Sidebar -->
  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar
      ><ol class="list-reset flex">
        <li>
          <router-link to="/admin/review"
            ><span class="text-grey-300 ">Home</span></router-link
          >
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>

        <li>
          <a href="#" class="pointer-events-none  text-primary-600"
            >Requests</a
          >
        </li>
      </ol></reviewer-nav-bar
    >
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="container px-4 sm:px-8">
        <div class="relative py-4">
          <h2 class="absolute left-0 text-xl font-semibold leading-tight">
            View and manage license or letter requests under your management
          </h2>
        </div>
        <div class="p-4 bg-grey-200 mb-4 rounded-lg mt-4">
          <h1 class="text-2xl mb-1">Filters</h1>
          <div class="grid grid-cols-4 gap-4">
            <div class="mb-3">
              <label class="">Request Type</label>
              <select
                class="form-select appearance-none block w-full px-6 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                @change="applyFilter()"
                aria-label="Default select example"
                v-model="requestTypeFilter"
              >
                <option value="newLicense">New License</option>
                <option value="renewal">Renewal</option>
                <option value="goodStanding">Goodstanding</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="">Request Status</label>
              <select
                class="form-select appearance-none block w-full px-6 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                @change="applyFilter()"
                aria-label="Default select example"
                v-model="requestStatusFilter"
              >
                <option value="all">All</option>
                <option value="new">New</option>
                <option value="finalized">Finalized</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="">Current Status</label>
              <select
                class="form-select appearance-none block w-full px-6 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                @change="applyFilter()"
                aria-label="Default select example"
                v-model="currentStatusFilter"
              >
                <option value="all">All</option>
                <option
                  v-for="stat in applicationStatuses"
                  :key="stat.id"
                  :value="stat.id"
                >
                  {{ stat.name }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label class="">Requested Status</label>
              <select
                class="form-select appearance-none block w-full px-6 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                @change="applyFilter()"
                aria-label="Default select example"
                v-model="requestedStatusFilter"
              >
                <option value="all">All</option>
                <option
                  v-for="stat in applicationStatuses"
                  :key="stat.id"
                  :value="stat.id"
                >
                  {{ stat.name }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="w-full mt-8 rounded-xl">
          <vue-table-lite
            :is-loading="requestsTable.isLoading"
            :columns="requestsTable.columns"
            :rows="requestsTable.rows"
            :total="requestsTable.totalRecordCount"
            :sortable="requestsTable.sortable"
            @is-finished="tableLoadingFinish"
            @row-clicked="rowClicked"
            @do-search="doSearch"
          ></vue-table-lite>
        </div>
      </div>
    </div>
    <edit-modal :editModalData="editModalData"></edit-modal>
    <!-- Main Content -->
  </section>
</template>

<script>
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { ref } from "vue";
import ReviewerNavBar from "./SharedComponents/navBar.vue";
import ReviewerSideBar from "./SharedComponents/sideNav.vue";
import VueTableLite from "vue3-table-lite";
import EditModal from "./editModal.vue";
import "@ocrv/vue-tailwind-pagination/dist/style.css";

export default {
  components: {
    ReviewerNavBar,
    ReviewerSideBar,
    VueTableLite,
    EditModal
  },

  setup() {
    const store = useStore();

    let requestsTable = ref({ isLoading: true });
    let requestsTableData = [];
    let showAddButton = ref(false);
    let editModalData = ref({});
    let requestTypeFilter = ref("newLicense");
    let currentStatusFilter = ref("");
    let requestStatusFilter = ref("");
    let requestedStatusFilter = ref("");
    let applicationStatuses = ref([]);

    const fetchRequests = async apiParameters => {
      store
        .dispatch("reviewer/getRequestsByAdminRegion", {
          params: [
            { key: "type", value: requestTypeFilter.value },
            ...apiParameters,
            {
              key: "currentStatus",
              value:
                currentStatusFilter.value && currentStatusFilter.value != "all"
                  ? currentStatusFilter.value
                  : ""
            },
            {
              key: "requestedStatus",
              value:
                requestedStatusFilter.value &&
                requestedStatusFilter.value != "all"
                  ? requestedStatusFilter.value
                  : ""
            },
            {
              key: "requestStatus",
              value:
                requestStatusFilter.value && requestStatusFilter.value != "all"
                  ? requestStatusFilter.value
                  : ""
            }
          ]
        })
        .then(async res => {
          let result = (await res.data) && res.data.data ? res.data.data : [];
          requestsTableData = [];
          result.rows
            ? result.rows.forEach(element => {
                requestsTableData.push({
                  id: element.id ? element.id : "",
                  Status: element.status ? element.status : "",
                  RequestedBy: element.requestedBy
                    ? element.requestedBy.name
                    : "",
                  ApprovedBy: element.approvedBy ? element.approvedBy.name : "",
                  ApplicantName: element.currentStatus
                    ? element.currentStatus.name
                    : "",
                  RequestedStatus: element.requestedStatus
                    ? element.requestedStatus.name
                    : "",
                  Code:
                    element && element.newLicense
                      ? element.newLicense.newLicenseCode
                      : element && element.renewal
                      ? element.renewal.renewalCode
                      : element && element.goodStanding
                      ? element.goodStanding.goodStandingCode
                      : "",
                  RequestType:
                    element && element.newLicense
                      ? "NewLicense"
                      : element && element.renewal
                      ? "Renewal"
                      : element && element.goodStanding
                      ? "Goodstanding"
                      : "",
                  data: element
                });
              })
            : "";
          requestsTable.value = {
            isLoading: false,
            columns: [
              {
                label: "ID",
                field: "id",
                width: "5%",
                sortable: true,
                isKey: true
              },
              {
                label: "Code",
                field: "Code",
                width: "5%"
              },
              {
                label: "Status",
                field: "Status",
                width: "10%",
                display: function(row) {
                  return row.Status && row.Status == "new"
                    ? '<span  class="pending" >  ' + row.Status + " </span>"
                    : '<span  class="finalElement" >' + row.Status + " </span>";
                },
                sortable: true
              },
              {
                label: "Applicant Name",
                field: "ApplicantName",
                width: "15%",
                sortable: true
              },
              {
                label: "Requested By",
                field: "RequestedBy",
                width: "15%",
                sortable: true
              },
              {
                label: "Approved By",
                field: "ApprovedBy",
                width: "20%",
                sortable: true
              },
              {
                label: "Current Status",
                field: "CurrentStatus",
                width: "10%",
                sortable: true
              },
              {
                label: "",
                field: "quick",
                width: "10%",
                display: function(row) {
                  return (
                    '<button data-bs-toggle="modal" data-bs-target="#editModal" class="edit-btn bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded   hover:   transition duration-150 ease-in-out" data-id="' +
                    row.id +
                    '" ><i class="fa fa-eye"></i> View/Edit</button>'
                  );
                }
              }
            ],
            rows: requestsTableData,
            totalRecordCount: result.count,
            sortable: {
              order: "id",
              sort: "asc"
            }
          };
          showAddButton.value = true;
        });
    };
    const applyFilter = async () => {
      requestsTable.value.isLoading = true;
      await fetchRequests([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        {
          key: "currentStatus",
          value:
            currentStatusFilter.value && currentStatusFilter.value != "all"
              ? currentStatusFilter.value
              : ""
        },
        {
          key: "requestedStatus",
          value:
            requestedStatusFilter.value && requestedStatusFilter.value != "all"
              ? requestedStatusFilter.value
              : ""
        },
        {
          key: "requestStatus",
          value:
            requestStatusFilter.value && requestStatusFilter.value != "all"
              ? requestStatusFilter.value
              : ""
        }
      ]);
    };
    const tableLoadingFinish = () => {
      let elements = document.getElementsByClassName("edit-btn");
      Array.prototype.forEach.call(elements, function(element) {
        if (element.classList.contains("edit-btn")) {
          element.addEventListener("click", rowClicked());
        }
      });
    };
    const rowClicked = row => {
      editModalData.value = row;
    };
    const doSearch = (offset, limit, order, sort) => {
      requestsTable.value.isLoading = true;
      setTimeout(() => {
        requestsTable.value.isReSearch = offset == undefined ? true : false;
        offset = offset / 10;
        if (sort == "asc") {
          fetchRequests([
            { key: "page", value: offset },
            { key: "size", value: limit }
          ]);
        } else {
          fetchRequests([
            { key: "page", value: offset },
            { key: "size", value: limit }
          ]);
        }
      }, 600);
    };
    onMounted(() => {
      fetchRequests([
        { key: "page", value: 0 },
        { key: "size", value: 10 }
      ]);
      let tempAp = JSON.parse(localStorage.getItem("applicationStatuses"))
        ? JSON.parse(localStorage.getItem("applicationStatuses"))
        : [];
      tempAp.forEach(el => {
        switch (el.code) {
          case "DEC":
            el.action = "DeclineEvent";
            applicationStatuses.value.push(el);
            break;
          case "IRV":
            el.action = "InReviewEvent";
            applicationStatuses.value.push(el);
            break;
          case "SUB":
            el.action = "SubmitEvent";
            applicationStatuses.value.push(el);
            break;
          default:
            break;
        }
      });
    });
    return {
      requestsTable,
      applicationStatuses,
      applyFilter,
      showAddButton,
      currentStatusFilter,
      requestedStatusFilter,
      editModalData,
      requestStatusFilter,
      requestTypeFilter,
      rowClicked,
      tableLoadingFinish,
      doSearch
    };
  }
};
</script>
<style scoped>
.tab-content > .active {
  padding-right: 5px;
  padding-bottom: 5px;
  display: block;
  border-left: 6px solid #0d3552;
  border-top: 1px solid #0d3552;
  border-right: 1px solid #0d3552;
  border-bottom: 1px solid #0d3552;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 10px;
}

.nav-tabs .nav-link.active {
  color: white;
  border-color: #0d3552;
  background-color: #0d3552;
  font-size: 16px;
  box-shadow: none !important;
  font-weight: bold;
  margin-top: 5px;
  margin-right: -16px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
</style>
<style>
.finalElement {
  background: green;
  border-radius: 5px;
  padding: 4px;
  color: white;
  font-weight: 800;
}
.pending {
  background: orange;
  border-radius: 5px;
  padding: 4px;
  color: white;
  font-weight: 800;
}
</style>
