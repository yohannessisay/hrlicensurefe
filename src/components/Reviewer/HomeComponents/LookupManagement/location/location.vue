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
            >Location Management</a
          >
        </li>
      </ol></reviewer-nav-bar
    >
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="container mx-auto px-4 sm:px-8">
        <div class="relative py-4 w-8/12">
          <p class="absolute left-0 text-2xl font-semibold leading-tight">
            View and manage regions,zones and woredas found throughout the
            system
          </p>
          <p class="absolute right-0" v-if="showAddButton">
            <button
              class="
                inline-block
                px-6
                text-white
                bg-primary-700
                font-medium
                text-xs
                leading-tight
                uppercase
                border
                rounded-md
                 
                hover:bg-white hover:text-primary-600 hover:border-primary-600
                transition
                duration-150
                ease-in-out
              "
              data-bs-toggle="modal"
              data-bs-target="#addModal"
            >
              <i class="fa fa-plus text-xl"></i>
              Add Location
            </button>
          </p>
        </div>
        <div class="py-8">
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
            <div class="flex justify-left">
              <div class="mb-3 w-full">
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
                  <div class="flex items-start w-4/5">
                    <ul
                      class="
                        nav nav-tabs
                        flex flex-col flex-wrap
                        list-none
                        border-b-0
                        pl-0
                        mr-4
                      "
                      id="tabs-tabVertical"
                      role="tablist"
                    >
                      <li
                        class="nav-item flex-grow text-center mt-4"
                        role="presentation"
                      >
                        <a
                          href="#tabs-homeVertical"
                          class="
                            nav-link
                            block
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            border-x-0 border-t-0 border-b-2 border-transparent
                            px-6
                            py-3
                            my-2
                            hover:border-transparent hover:bg-gray-100
                            focus:border-transparent
                            active
                          "
                          id="tabs-home-tabVertical"
                          data-bs-toggle="pill"
                          data-bs-target="#tabs-homeVertical"
                          role="tab"
                          aria-controls="tabs-homeVertical"
                          aria-selected="true"
                          >Region</a
                        >
                      </li>
                      <li
                        class="nav-item flex-grow text-center"
                        role="presentation"
                      >
                        <a
                          href="#tabs-profileVertical"
                          class="
                            nav-link
                            block
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            border-x-0 border-t-0 border-b-2 border-transparent
                            px-6
                            py-3
                            my-2
                            hover:border-transparent hover:bg-gray-100
                            focus:border-transparent
                          "
                          id="tabs-profile-tabVertical"
                          data-bs-toggle="pill"
                          data-bs-target="#tabs-profileVertical"
                          role="tab"
                          aria-controls="tabs-profileVertical"
                          aria-selected="false"
                          >Zone</a
                        >
                      </li>
                      <li
                        class="nav-item flex-grow text-center"
                        role="presentation"
                      >
                        <a
                          href="#tabs-messagesVertical"
                          class="
                            nav-link
                            block
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            border-x-0 border-t-0 border-b-2 border-transparent
                            px-6
                            py-3
                            my-2
                            hover:border-transparent hover:bg-gray-100
                            focus:border-transparent
                          "
                          id="tabs-messages-tabVertical"
                          data-bs-toggle="pill"
                          data-bs-target="#tabs-messagesVertical"
                          role="tab"
                          aria-controls="tabs-messagesVertical"
                          aria-selected="false"
                          >Woreda</a
                        >
                      </li>
                    </ul>

                    <div
                      class="tab-content   w-4/5"
                      id="tabs-tabContentVertical"
                    >
                      <div
                        class="tab-pane fade show active w-full"
                        id="tabs-homeVertical"
                        role="tabpanel"
                        aria-labelledby="tabs-home-tabVertical"
                      >
                        <div
                          class="
                            bg-white
                            p-6
                            rounded-lg
                             
                            overflow-x-scroll
                          "
                        >
                          <div
                            class="
                              inline-block
                              min-w-full
                               
                              rounded-lg
                              overflow-hidden
                              bg-primary-800
                            "
                          >
                            <vue-table-lite
                            :is-static-mode="true"
                              :is-loading="regionsTable.isLoading"
                              :columns="regionsTable.columns"
                              :rows="regionsTable.rows"
                              :total="regionsTable.totalRecordCount"
                              :sortable="regionsTable.sortable"
                              @is-finished="regionTableLoadingFinish"
                              @row-clicked="regionRowClicked"
                            ></vue-table-lite>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="tabs-profileVertical"
                        role="tabpanel"
                        aria-labelledby="tabs-profile-tabVertical"
                      >
                        <div
                          class="
                            bg-white
                            p-6
                            rounded-lg
                             
                            overflow-x-scroll
                          "
                        >
                          <div
                            class="
                              inline-block
                              min-w-full
                               
                              rounded-lg
                              overflow-hidden
                              bg-primary-800
                            "
                          >
                            <vue-table-lite
                            :is-static-mode="true"
                              :is-loading="zonesTable.isLoading"
                              :columns="zonesTable.columns"
                              :rows="zonesTable.rows"
                              :total="zonesTable.totalRecordCount"
                              :sortable="zonesTable.sortable"
                              @is-finished="zoneTableLoadingFinish"
                              @row-clicked="zoneRowClicked"
                            ></vue-table-lite>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="tabs-messagesVertical"
                        role="tabpanel"
                        aria-labelledby="tabs-profile-tabVertical"
                      >
                        <div
                          class="
                            bg-white
                            p-6
                            rounded-lg
                             
                            overflow-x-scroll
                          "
                        >
                          <div
                            class="
                              inline-block
                              min-w-full
                               
                              rounded-lg
                              overflow-hidden
                              bg-primary-800
                            "
                          >
                            <vue-table-lite
                            :is-static-mode="true"
                              :is-loading="woredasTable.isLoading"
                              :columns="woredasTable.columns"
                              :rows="woredasTable.rows"
                              :total="woredasTable.totalRecordCount"
                              :sortable="woredasTable.sortable"
                              @is-finished="woredaTableLoadingFinish"
                              @row-clicked="woredaRowClicked"
                            ></vue-table-lite>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <add-modal :modalData="modalData"></add-modal>
    <edit-modal :editModalData="editModalData"></edit-modal>
    <!-- Main Content -->
  </section>
</template>

<script>
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { ref } from "vue";
import ReviewerNavBar from "./../SharedComponents/navBar.vue";
import ReviewerSideBar from "./../SharedComponents/sideNav.vue";
import VueTableLite from "vue3-table-lite";
import AddModal from "./addModal.vue";
import EditModal from "./editModal.vue";

export default {
  components: {
    ReviewerNavBar,
    ReviewerSideBar,
    VueTableLite,
    AddModal,
    EditModal,
  },

  setup() {
    const store = useStore();

    let regionsTable = ref({ isLoading: true });
    let zonesTable = ref({ isLoading: true });
    let woredasTable = ref({ isLoading: true });
    let modalData = ref({ region: [], zone: [] });
    let regionTableData = [];
    let woredaTableData = [];
    let zoneTableData = [];
    let showAddButton = ref(false);
    let editModalData = ref({
      Name: "",
      isWoreda: false,
      isRegion: false,
      isZone: false,
      regions: [],
      zones: [],
      selectedRegion: {},
      selectedZone: {},
      selectedWoreda: {},
      selectedLocation: { status: true, name: "" },
    });
    const fetchRegions = () => {
      store.dispatch("lookups/getRegions").then((res) => {
        editModalData.value.regions = res.data.data;

        res.data.data.forEach((element) => {
          regionTableData.push({
            id: element.id ? element.id : "",
            Name: element.name ? element.name : "",
            Code: element.code ? element.code : "",
            Status: element && element.status == true ? "Active" : "Inactive",
            type: "region",
            data: element ? element : {},
          });
        });
        modalData.value.region = regionTableData;
        regionsTable.value = {
          isLoading: false,
          columns: [
            {
              label: "ID",
              field: "id",
              width: "5%",
              sortable: true,
              isKey: true,
            },
            {
              label: "Name",
              field: "Name",
              width: "50%",
              sortable: true,
            },
            {
              label: "Code",
              field: "Code",
              width: "20%",
              sortable: true,
            },
            {
              label: "Status",
              field: "Status",
              width: "30%",
              display: function (row) {
                return row.Status && row.Status == "Active"
                  ? '<span  class="activeElement" >  ' + row.Status + " </span>"
                  : '<span  class="bg-red-300 rounded-md p-1 text-white font-bold" >' +
                      row.Status +
                      " </span>";
              },
              sortable: true,
            },

            {
              label: "",
              field: "quick",
              width: "10%",
              display: function (row) {
                return (
                  '<button data-bs-toggle="modal" data-bs-target="#editModal" class="edit-btn-region bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded   hover:   transition duration-150 ease-in-out" data-id="' +
                  row.id +
                  '" ><i class="fa fa-eye"></i> View/Edit</button>'
                );
              },
            },
          ],
          rows: regionTableData,
          totalRecordCount: regionTableData.length,
          sortable: {
            order: "id",
            sort: "asc",
          },
        };
        showAddButton.value = true;
      });
    };

    const fetchWoredas = () => {
      store.dispatch("lookups/getWoredas").then((res) => {
        res.data.data.forEach((element) => {
          woredaTableData.push({
            id: element.id ? element.id : "",
            Name: element.name ? element.name : "",
            Zone: element.zone ? element.zone.name : "",
            Region:
              element.zone && element.zone.region
                ? element.zone.region.name
                : "",
            type: "woreda",
            Status: element && element.status == true ? "Active" : "Inactive",
            data: element ? element : {},
          });
        });

        woredasTable.value = {
          isLoading: false,
          columns: [
            {
              label: "ID",
              field: "id",
              width: "5%",
              sortable: true,
              isKey: true,
            },
            {
              label: "Name",
              field: "Name",
              width: "10%",
              sortable: true,
            },

            {
              label: "Parent Zone",
              field: "Zone",
              width: "30%",
              sortable: true,
            },
            {
              label: "Parent Region",
              field: "Region",
              width: "30%",
              sortable: true,
            },
            {
              label: "Status",
              field: "Status",
              width: "30%",
              display: function (row) {
                return row.Status && row.Status == "Active"
                  ? '<span  class="activeElement" >  ' + row.Status + " </span>"
                  : '<span  class="bg-red-300 rounded-md p-1 text-white font-bold" >' +
                      row.Status +
                      " </span>";
              },
              sortable: true,
            },
            {
              label: "",
              field: "quick",
              width: "10%",
              display: function (row) {
                return (
                  '<button data-bs-toggle="modal" data-bs-target="#editModal" class="edit-btn-woreda bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded   hover:   transition duration-150 ease-in-out" data-id="' +
                  row.id +
                  '" ><i class="fa fa-eye"></i> View/Edit</button>'
                );
              },
            },
          ],
          rows: woredaTableData,
          totalRecordCount: woredaTableData.length,
          sortable: {
            order: "id",
            sort: "asc",
          },
        };
      });
    };

    const fetchZones = () => {
      store.dispatch("lookups/getZones").then((res) => {
        editModalData.value.zones = res.data.data;
        res.data.data.forEach((element) => {
          zoneTableData.push({
            id: element.id ? element.id : "",
            Name: element.name ? element.name : "",
            Region: element.region ? element.region.name : "",
            Status: element && element.status == true ? "Active" : "Inactive",
            type: "zone",
            data: element ? element : {},
          });
        });

        modalData.value.zone = zoneTableData;

        zonesTable.value = {
          isLoading: false,
          columns: [
            {
              label: "ID",
              field: "id",
              width: "5%",
              sortable: true,
              isKey: true,
            },
            {
              label: "Name",
              field: "Name",
              width: "40%",
              sortable: true,
            },
            {
              label: "Parent Region",
              field: "Region",
              width: "30%",
              sortable: true,
            },
            {
              label: "Status",
              field: "Status",
              width: "30%",
              display: function (row) {
                return row.Status && row.Status == "Active"
                  ? '<span  class="activeElement" >  ' + row.Status + " </span>"
                  : '<span  class="bg-red-300 rounded-md p-1 text-white font-bold" >' +
                      row.Status +
                      " </span>";
              },
              sortable: true,
            },
            {
              label: "",
              field: "quick",
              width: "10%",
              display: function (row) {
                return (
                  '<button data-bs-toggle="modal" data-bs-target="#editModal" class="edit-btn-zone bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded   hover:   transition duration-150 ease-in-out" data-id="' +
                  row.id +
                  '" ><i class="fa fa-eye"></i> View/Edit</button>'
                );
              },
            },
          ],
          rows: zoneTableData,
          totalRecordCount: zoneTableData.length,
          sortable: {
            order: "id",
            sort: "asc",
          },
        };
      });
    };

    const regionTableLoadingFinish = () => { 
      let elements = document.getElementsByClassName("edit-btn-region");
      Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains("edit-btn-region")) {
          element.addEventListener("click", regionRowClicked());
        }
      });
    };
    const regionRowClicked = (row) => {
      editModalData.value ? (editModalData.value.isWoreda = false) : "";
      editModalData.value ? (editModalData.value.isRegion = true) : "";
      editModalData.value ? (editModalData.value.isZone = false) : "";
      editModalData.value.selectedLocation = row
        ? {
            code: row.data.code,
            createdAt: row.data.createdAt,
            id: row.data.id,
            name: row.data.name,
            rowguid: row.data.rowguid,
            status: row.data.status,
            updatedAt: row.data.updatedAt,
          }
        : {};
      editModalData.value.selectedRegion = row
        ? {
            code: row.data.code,
            createdAt: row.data.createdAt,
            id: row.data.id,
            name: row.data.name,
            rowguid: row.data.rowguid,
            status: row.data.status,
            updatedAt: row.data.updatedAt,
          }
        : {};
    };

    const zoneTableLoadingFinish = () => { 
      let elements = document.getElementsByClassName("edit-btn-zone");
      Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains("edit-btn-zone")) {
          element.addEventListener("click", zoneRowClicked());
        }
      });
    };
    const zoneRowClicked = (row) => {
      editModalData.value ? (editModalData.value.isWoreda = false) : "";
      editModalData.value ? (editModalData.value.isRegion = false) : "";
      editModalData.value ? (editModalData.value.isZone = true) : "";
      editModalData.value.selectedLocation = row
        ? {
            code: row.data.code,
            createdAt: row.data.createdAt,
            id: row.data.id,
            name: row.data.name,
            rowguid: row.data.rowguid,
            status: row.data.status,
            updatedAt: row.data.updatedAt,
            regionId: row.data.regionId,
          }
        : {};
      editModalData.value.selectedZone = row
        ? {
            code: row.data.code,
            createdAt: row.data.createdAt,
            id: row.data.id,
            name: row.data.name,
            rowguid: row.data.rowguid,
            status: row.data.status,
            updatedAt: row.data.updatedAt,
            regionId: row.data.regionId,
          }
        : {};
      editModalData.value.selectedRegion = row
        ? {
            code: row.data.region.code,
            createdAt: row.data.region.createdAt,
            id: row.data.region.id,
            name: row.data.region.name,
            rowguid: row.data.region.rowguid,
            status: row.data.region.status,
            updatedAt: row.data.region.updatedAt,
          }
        : {};
    };

    const woredaTableLoadingFinish = () => { 
      let elements = document.getElementsByClassName("edit-btn-woreda");
      Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains("edit-btn-woreda")) {
          element.addEventListener("click", woredaRowClicked());
        }
      });
    };
    const woredaRowClicked = (row) => {
      editModalData.value ? (editModalData.value.isWoreda = true) : "";
      editModalData.value ? (editModalData.value.isRegion = false) : "";
      editModalData.value ? (editModalData.value.isZone = false) : "";
      editModalData.value.selectedLocation = row
        ? {
            code: row.data.code,
            createdAt: row.data.createdAt,
            id: row.data.id,
            name: row.data.name,
            rowguid: row.data.rowguid,
            status: row.data.status,
            updatedAt: row.data.updatedAt,
            zoneId: row.data.zoneId,
          }
        : {};
      editModalData.value.selectedWoreda = row
        ? {
            code: row.data.code,
            createdAt: row.data.createdAt,
            id: row.data.id,
            name: row.data.name,
            rowguid: row.data.rowguid,
            status: row.data.status,
            updatedAt: row.data.updatedAt,
            zoneId: row.data.zoneId,
          }
        : {};
      editModalData.value.selectedZone =
        row && row.data.zone
          ? {
              code: row.data.zone.code,
              createdAt: row.data.zone.createdAt,
              id: row.data.zone.id,
              name: row.data.zone.name,
              regionId: row.data.zone.regionId,
              rowguid: row.data.zone.rowguid,
              status: row.data.zone.status,
              updatedAt: row.data.zone.updatedAt,
            }
          : {};
      editModalData.value.selectedRegion =
        row && row.data.zone
          ? {
              code: row.data.zone.region.code,
              createdAt: row.data.zone.region.createdAt,
              id: row.data.zone.region.id,
              name: row.data.zone.region.name,
              rowguid: row.data.zone.region.rowguid,
              status: row.data.zone.region.status,
              updatedAt: row.data.zone.region.updatedAt,
            }
          : {};
    };

    onMounted(() => {
      fetchRegions();
      fetchWoredas();
      fetchZones();
    });
    return {
      regionsTable,
      woredaRowClicked,
      zoneRowClicked,
      regionRowClicked,
      woredaTableLoadingFinish,
      zoneTableLoadingFinish,
      regionTableLoadingFinish,
      zonesTable,
      editModalData,
      woredasTable,
      modalData,
      showAddButton,
    };
  },
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
.activeElement {
  background: green;
  border-radius: 5px;
  padding: 4px;
  color: white;
  font-weight: 800;
}
 
</style>