<template>
  <!-- Sidebar -->
  <reviewer-side-bar> </reviewer-side-bar>

  <!-- Sidebar -->
  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar>
      <ol class="list-reset flex">
        <li>
          <router-link to="/admin/review"
            ><span class="text-grey-300">Home</span></router-link
          >
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>

        <li>
          <a href="#" class="pointer-events-none text-primary-600"
            >Institution</a
          >
        </li>
      </ol></reviewer-nav-bar
    >
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="container px-4 sm:px-8">
        <div class="relative py-4">
          <h2 class="absolute left-0 text-2xl font-semibold leading-tight">
            View and manage institutions found throughout the system
          </h2>
          <p class="absolute right-0" v-if="showAddButton">
            <button
              class="inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase border rounded hover:bg-white hover:text-primary-600 hover:border-primary-600 transition duration-150 ease-in-out"
              data-bs-toggle="modal"
              data-bs-target="#addModal"
            >
              <i class="fa fa-plus text-xl"></i>
              Add Institution
            </button>
          </p>
        </div>
        <div class="mt-8 px-4 overflow-x-auto">
          <div class="p-4 bg-grey-200 mb-4 rounded-lg">
            <h1 class="text-2xl mb-1">Filters</h1>
            <div class="mb-3 xl:w-full">
              <h2 class="text-primary-800 text-lg">Institution Name</h2>
              <div
                class="input-group relative flex flex-wrap items-stretch w-full mb-4"
              >
                <input
                  type="search"
                  class="form-control relative flex-auto min-w-0 block w-full px-6 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search Using Institution Name"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                  v-model="searchTerm"
                />
                <button
                  class="inline-block px-6 py-2 bg-primary-600 border-primary-300 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:text-primary-600 transition duration-150 ease-in-out items-center"
                  @click="searchApplication()"
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
              <button
                type="button"
                class="inline-block px-6 py-2 mt-2 border-2 border-primary-300 text-white font-medium text-xs leading-tight uppercase rounded bg-primary-600 hover:bg-white hover:bg-opacity-5 hover:text-primary-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                @click="clearFilters()"
              >
                <i class="fa fa-close"></i>
                Clear Filters
              </button>
            </div>
          </div>
        </div>
        <div class="w-full rounded-xl mb-12">
          <vue-table-lite
            :is-loading="institutionTable.isLoading"
            :columns="institutionTable.columns"
            :rows="institutionTable.rows"
            :total="institutionTable.totalRecordCount"
            :sortable="institutionTable.sortable"
            @is-finished="tableLoadingFinish"
            @row-clicked="rowClicked"
            @do-search="doSearch"
          ></vue-table-lite>
        </div>
      </div>
    </div>
    <add-modal :modalLookups="modalLookups"></add-modal>
    <edit-modal
      :editModalData="editModalData"
      :modalLookups="modalLookups"
    ></edit-modal>
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
import "@ocrv/vue-tailwind-pagination/dist/style.css";

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
    let searchTerm = ref("");
    let institutionTable = ref({ isLoading: true });
    let institutionTableData = [];
    let showAddButton = ref(false);
    let editModalData = ref({});
    let modalLookups = ref({}); 
    const fetchInstitution = (apiParameters) => {
      store
        .dispatch("lookups/getInstitutions", [
          {
            params: apiParameters,
          },
        ])
        .then((res) => {
          institutionTableData = [];
          let result = res.data.data ? res.data.data : {};
          if (apiParameters[2]?.key === "withType") {
            modalLookups.value.types = result.types;
          }
          result.rows.forEach((element) => {
            institutionTableData.push({ 
              Name: element.name ? element.name : "",
              Code: element.code ? element.code : "",
              Type: element?.institutionType?.name,
              TypeId:element?.institutionType?.id,
              finalStat:element.status,
              Status: element && element.status == true ? "Active" : "Inactive",
              isLocal: element.isLocal,
              data: element ? element : {},
            });
          });
          institutionTable.value = {
            isLoading: false,
            columns: [ 
              {
                label: "Name",
                field: "Name",
                width: "40%",
                sortable: true,
              },
              {
                label: "Code",
                field: "Code",
                width: "20%",
                sortable: true,
              },
              {
                label: "Type",
                field: "Type",
                width: "25%",
                sortable: true,
              },
              {
                label: "Status",
                field: "Status",
                width: "10%",
                display: function (row) {
                  return row.Status && row.Status == "Active"
                    ? '<span  class="activeElement" >  ' +
                        row.Status +
                        " </span>"
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
                    '<button data-bs-toggle="modal" data-bs-target="#editModal" class="edit-btn bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded   hover:   transition duration-150 ease-in-out" data-id="' +
                    row.id +
                    '" ><i class="fa fa-eye"></i> View/Edit</button>'
                  );
                },
              },
            ],
            rows: institutionTableData,
            totalRecordCount: result.count,
            sortable: {
              order: "id",
              sort: "asc",
            },
          };
          showAddButton.value = true;
        });
    };

    const tableLoadingFinish = () => {
      let elements = document.getElementsByClassName("edit-btn");
      Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains("edit-btn")) {
          element.addEventListener("click", rowClicked());
        }
      });
    };
    const rowClicked = (row) => {
      editModalData.value = row;
    };

    onMounted(() => {
      fetchInstitution([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "withType", value: "yes" },
      ]);
    });
    const clearFilters = () => {
      searchTerm.value = "";
      institutionTable.value.isLoading = true;
      institutionTable.value.rows = [];
      fetchInstitution([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTerm.value },
      ]);
    };
    const searchApplication = () => {
      institutionTable.value.isLoading = true;
      institutionTable.value.rows = [];
      fetchInstitution([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "value", value: searchTerm.value },
      ]);
    };
    const doSearch = (offset, limit, order, sort) => {
      institutionTable.value.isLoading = true;

      setTimeout(() => {
        institutionTable.value.isReSearch = offset == undefined ? true : false;
        offset = offset / 10;
        if (sort == "asc") {
          fetchInstitution([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "value", value: searchTerm.value },
          ]);
        } else {
          fetchInstitution([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "value", value: searchTerm.value },
          ]);
        }
      }, 600);
    };
    return {
      doSearch,
      institutionTable,
      searchTerm,
      searchApplication,
      showAddButton,
      editModalData,
      rowClicked,
      modalLookups,
      tableLoadingFinish,
      clearFilters, 
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
