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
            ><span class="text-grey-300 ">Home</span></router-link
          >
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li>
          <a href="#" class="pointer-events-none  text-primary-600"
            >Individual Report</a
          >
        </li>
      </ol>
    </reviewer-nav-bar>
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="container mx-auto px-4 sm:px-8" v-if="isReviewer == false">
        <div class="py-8">
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
            <div class="grid grid-rows-1">
              <div class="grid grid-cols-3">
                <div class="col-span-1 mt-5">
                  <div
                    class="input-group relative flex flex-wrap items-stretch w-full mb-4 mt-1"
                  >
                    <input
                      type="text"
                      class="relative m-0 block w-[1%] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                      placeholder="Search"
                      aria-label="Search"
                      v-model="searchTerm"
                      aria-describedby="button-addon2"
                      @keyup.enter="searchUser()"
                    />

                    <button
                      data-te-toggle="tooltip"
                      title="Search user"
                      class="inline-block mr-8 hover:bg-white hover:text-primary-600 px-6 py-2 bg-primary-700 text-white font-medium text-xs leading-tight uppercase rounded    focus:bg-blue-700 focus:  focus:outline-none focus:ring-0 active:bg-blue-800 active:  transition duration-150 ease-in-out items-center"
                      @click="searchUser()"
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
                    <button
                      type="button"
                      class="
                        inline-block
                        px-6
                        py-2
                        ml-8
                        border-2 border-primary-600
                        text-primary-600
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        hover:bg-primary-600 hover:bg-opacity-5 hover:text-white
                        focus:outline-none focus:ring-0
                        transition
                        duration-150
                        mt-2
                        ease-in-out
                      "
                      @click="clearFilters()"
                    >
                      <i class="fa fa-close"></i>
                      Clear Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="inline-block min-w-full   rounded-lg overflow-hidden bg-primary-800"
            >
              <vue-table-lite
                :is-loading="userTable.isLoading"
                :columns="userTable.columns"
                :rows="userTable.rows"
                :total="userTable.totalRecordCount"
                :sortable="userTable.sortable"
                @is-finished="tableLoadingFinish"
                @row-clicked="rowClicked"
                @do-search="doSearch"
              ></vue-table-lite>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center" v-else>
        <h2 class="text-primary-600 font-bold text-2xl">Your role does not allow to visit this page</h2>
      </div>
    </div>
    <!-- Main Content -->
  </section>
  <view-detail :modalData="modalData"></view-detail>
</template>

<script>
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import { ref, reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import ReviewerNavBar from "./SharedComponents/navBar.vue";
import ReviewerSideBar from "./SharedComponents/sideNav.vue";
import viewDetail from "./viewDetail.vue";
import VueTableLite from "vue3-table-lite";

export default {
  components: {
    ReviewerNavBar,
    ReviewerSideBar,
    VueTableLite,
    viewDetail
  },
  computed: {},

  setup() {
    const store = useStore();
    let allData = ref([]);
    let searchData = ref();
    let expertLevelFilter = ref("");
    const isReviewer = localStorage.getItem("role")
      ? localStorage.getItem("role") == "REV"
      : false;
    let expertLevels = ref([
      { name: "All", code: "all" },
      { name: "Federal", code: "FED" },
      { name: "Regional", code: "REG" }
    ]);

    let userTable = ref({ isLoading: true });
    let modalData = ref({ change: 0 });
    let tableData = reactive([]);
    const searchTerm = ref("");

    const searchUser = () => {
      userTable.value.isLoading = true;
      getAdmins([0, 10, searchTerm.value]);
    };
    const clearFilters = () => {
      searchTerm.value = "";
      expertLevelFilter.value = "";
      userTable.value.isLoading = true;
      getAdmins([0, 10]);
    };
    const getAdmins = apiParameters => {
      store.dispatch("admin/getAllAdminsForReport", apiParameters).then(res => {
        tableData = [];
        res.rows.forEach(element => {
          tableData.push({
            id: element.id ? element.id : "",
            FullName: element.name ? element.name : "",
            Email: element.email ? element.email : "",
            OrganizationalUnit: element.expertLevel
              ? element.expertLevel.name
              : "",
            Role: element.role ? element.role.name : "",
            PhoneNumber: element.phoneNumber ? element.phoneNumber : "",
            ExpertLevel: element.expertLevel ? element.expertLevel.name : "",
            data: element ? element : {}
          });
        });
        allData.value = tableData;
        userTable.value = {
          isLoading: false,
          columns: [
            {
              label: "ID",
              field: "id",
              width: "10%",
              sortable: true,
              isKey: true
            },
            {
              label: "Full Name",
              field: "FullName",
              width: "25%",
              sortable: true
            },
            {
              label: "Email",
              field: "Email",
              width: "15%",
              sortable: true
            },
            {
              label: "Role",
              field: "Role",
              width: "10%",
              sortable: true
            },
            {
              label: "Phone Number",
              field: "PhoneNumber",
              width: "10%",
              sortable: true
            },
            {
              label: "Organizational Unit",
              field: "OrganizationalUnit",
              width: "25%",
              sortable: true
            },
            {
              label: "Action",
              field: "quick",
              width: "10%",
              display: function(row) {
                return (
                  '<button data-bs-toggle="modal" data-bs-target="#viewDetail" class="edit-btn bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5    font-medium text-xs leading-tight uppercase rounded     hover:     transition duration-150 ease-in-out" data-id="' +
                  row.id +
                  '" ><i class="fa fa-eye"></i> View</button>'
                );
              }
            }
          ],
          rows: tableData,
          totalRecordCount: res.count,
          sortable: {
            order: "id",
            sort: "asc"
          }
        };
      });
    };

    const filterExpertLevel = () => {
      userTable.value.isLoading = true;
      getAdmins([0, 10, searchTerm.value]);
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
      if (row != undefined) {
        row = JSON.parse(JSON.stringify(row));
        modalData.value.change++;
        modalData.value.data = row ? row.data : {};
      }
    };
    const doSearch = (offset, limit, order, sort) => {
      userTable.value.isLoading = true;

      setTimeout(() => {
        userTable.value.isReSearch = offset == undefined ? true : false;
        offset = offset / 10;
        if (sort == "asc") {
          getAdmins([offset, limit, searchTerm.value]);
        } else {
          getAdmins([offset, limit, searchTerm.value]);
        }
        userTable.value.sortable.order = order;
        userTable.value.sortable.sort = sort;
      }, 600);
    };
    onMounted(() => {
      isReviewer != true ? getAdmins([0, 10]) : "";
    });

    return {
      doSearch,
      clearFilters,
      searchData,
      isReviewer,
      userTable,
      searchUser,
      rowClicked,
      searchTerm,
      modalData,
      tableLoadingFinish,
      expertLevels,
      expertLevelFilter,
      filterExpertLevel
    };
  }
};
</script>
