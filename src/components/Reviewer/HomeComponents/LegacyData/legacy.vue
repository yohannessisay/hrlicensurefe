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
            ><span class="text-primary-600 text-base">Home</span></router-link
          >
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>

        <li>
          <a href="#" class="pointer-events-none text-lg text-grey-300"
            >Legacy Data</a
          >
        </li>
      </ol></reviewer-nav-bar
    >
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="container mx-auto px-4 sm:px-8">
        <div class="relative py-4">
          <p class="absolute left-0 text-2xl font-semibold leading-tight">
            View legacy licenses
          </p>
          <p class="absolute right-0">
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
                rounded
                shadow-lg
                hover:bg-white hover:text-primary-600
                transition
                duration-150
                ease-in-out
              "
              @click="exportTable()"
            >
              <i class="fa fa-file-excel text-xl"></i>
              Generate Report
            </button>
          </p>
        </div>
        <div class="py-8">
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
            <div class="flex justify-left">
              <div class="mb-3 xl:w-full">
                <div
                  class="
                    input-group
                    relative
                    flex flex-wrap
                    items-stretch
                    w-full
                    mb-4
                    ml-4
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
                      text-white
                      bg-primary-700
                      font-medium
                      text-xs
                      leading-tight
                      uppercase
                      border
                      rounded
                      shadow-lg
                      hover:bg-white hover:text-primary-600
                      transition
                      duration-150
                      ease-in-out
                    "
                  >
                    <i class="fa fa-user fa-2x"></i>
                  </button>
                </div>
                <div class="grid grid-cols-6 w-full">
                  <div class="mb-3 xl:w-full">
                    <label for="" class="ml-4">License Type</label>
                    <select
                      class="
                        form-select
                        appearance-none
                        block
                        w-full
                        px-6
                        ml-4
                        py-2
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        focus:text-gray-700
                        focus:bg-white
                        focus:border-blue-600
                        focus:outline-none
                      "
                      v-model="licenseTypeFilter"
                    >
                      <option selected disabled>License Type</option>
                      <option :value="'all'">All</option>
                      <option
                        v-for="licenseType in [...new Set(licenseTypes)]"
                        :value="licenseType"
                        :key="licenseType"
                      >
                        {{ licenseType }}
                      </option>
                    </select>
                  </div>

                  <div class="mb-3 xl:w-full ml-2">
                    <label for="" class="ml-4">License Prefix</label>
                    <select
                      class="
                        form-select
                        appearance-none
                        block
                        w-full
                        px-6
                        ml-4
                        py-2
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        focus:text-gray-700
                        focus:bg-white
                        focus:border-blue-600
                        focus:outline-none
                      "
                      v-model="licensePrefixesFilter"
                    >
                      <option value="all" selected>All</option>
                      <option
                        v-for="prefix in [...new Set(licensePrefixes)]"
                        :key="prefix"
                        :value="prefix"
                      >
                        {{ prefix && prefix != "" ? prefix : "NONE" }}
                      </option>
                    </select>
                  </div>

                  <div class="mb-3 xl:w-full ml-2">
                    <label for="" class="ml-4">Gender</label>
                    <select
                      class="
                        form-select
                        appearance-none
                        block
                        w-full
                        px-6
                        ml-4
                        py-2
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        focus:text-gray-700
                        focus:bg-white
                        focus:border-blue-600
                        focus:outline-none
                      "
                      v-model="genderFilter"
                    >
                      <option selected disabled>Gender</option>
                      <option value="all">All</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div class="ml-8 mb-3 ml-2">
                    <label for="" class="ml-4">From</label>
                    <input
                      v-model="fromDate"
                      type="date"
                      class="
                        appearance-none
                        block
                        w-full
                        px-6
                        py-2
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        focus:text-gray-700
                        focus:bg-white
                        focus:border-blue-600
                        focus:outline-none
                      "
                    />
                  </div>
                  <div class="mb-3 ml-2">
                    <label for="" class="ml-4"> To</label>
                    <input
                      type="date"
                      class="
                        appearance-none
                        block
                        w-full
                        px-6
                        ml-4
                        py-2
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        focus:text-gray-700
                        focus:bg-white
                        focus:border-blue-600
                        focus:outline-none
                      "
                      v-model="toDate"
                    />
                  </div>
                  <div class="ml-8 mt-4">
                    <button
                      type="button"
                      class="
                        inline-block
                        px-6
                        py-2
                        mt-2
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

            <div class="bg-white p-6 rounded-lg shadow-md">
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
                  :is-loading="reportTable.isLoading"
                  :columns="reportTable.columns"
                  :rows="reportTable.rows"
                  :total="reportTable.totalRecordCount"
                  :sortable="reportTable.sortable"
                  @do-search="doSearch"
                ></vue-table-lite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="printable"
      class="shadow-md rounded-lg min-w-full"
      style="display: none"
    >
      <table class="w-full" id="myTable">
        <thead>
          <tr class="">
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-700
                uppercase
                tracking-wider
              "
            >
              First Name
            </th>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-700
                uppercase
                tracking-wider
              "
            >
              Middle Name
            </th>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-700
                uppercase
                tracking-wider
              "
            >
              Last Name
            </th>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-700
                uppercase
                tracking-wider
              "
            >
              License Number
            </th>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-700
                uppercase
                tracking-wider
              "
            >
              License Status
            </th>

            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-700
                uppercase
                tracking-wider
              "
            >
              Professional Type
            </th>

            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-700
                uppercase
                tracking-wider
              "
            >
              Issued Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in reportTable.rows" :key="item">
            <td class="px-5 py-5 border-gray-200 bg-white text-sm">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.FirstName }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-5 py-5 border-gray-200 bg-white text-sm">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.MiddleName }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-5 py-5 border-gray-200 bg-white text-sm">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.LastName }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-5 py-5 border-gray-200 bg-white text-sm text-right">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.LicenseNumber }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-5 py-5 border-gray-200 bg-white text-sm text-right">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.LicenseStatus }}
                  </p>
                </div>
              </div>
            </td>

            <td class="px-5 py-5 border-gray-200 bg-white text-sm text-right">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.ProfessionalType }}
                  </p>
                </div>
              </div>
            </td>

            <td class="px-5 py-5 border-gray-200 bg-white text-sm text-right">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.IssuedDate }}
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Main Content -->
  </section>
</template>

<script>
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import { ref, computed } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import ReviewerNavBar from "./SharedComponents/navBar.vue";
import ReviewerSideBar from "./SharedComponents/sideNav.vue";
import VueTableLite from "vue3-table-lite";

import { saveAs } from "file-saver";
import "@ocrv/vue-tailwind-pagination/dist/style.css";

export default {
  components: {
    ReviewerNavBar,
    ReviewerSideBar,
    VueTableLite
  },

  setup() {
    const store = useStore();
    let allData = ref([]);
    let searchData = ref();

    let reportTable = ref({ isLoading: false });
    let tableData = ref([]);
    const searchTerm = ref("");
    let fromDate = ref("");
    let toDate = ref("");

    let currentPage = ref(1);
    let totalCount = ref();
    let report = ref([]);

    let licenseTypeFilter = ref("");
    let licensePrefixesFilter = ref("");
    let genderFilter = ref("");

    let licenseTypes = ref([]);

    let licensePrefixes = ref([]);

    const fetchLicenseReport = apiParameters => {
      store.dispatch("reviewer/getLegacyData", apiParameters).then(res => {
        tableData = [];

        res.rows.forEach(element => {
          licenseTypes.value.push(
            element.license_type_id ? element.license_type_id : ""
          );
          licensePrefixes.value.push(
            element.license_prefix_id ? element.license_prefix_id : ""
          );
          tableData.push({
            EmployeeId: element.employee_id ? element.employee_id : "",
            FirstName: element.emp_first_name ? element.emp_first_name : "",
            MiddleName: element.emp_middle_name ? element.emp_middle_name : "",
            LastName: element.emp_last_name ? element.emp_last_name : "",
            LicenseNumber: element.license_no ? element.license_no : "",
            AlternativeFullName:
              (element.alternative_first_name
                ? element.alternative_first_name
                : "") +
              " " +
              (element.alternative_middle_name
                ? element.alternative_last_name
                : "") +
              " " +
              (element.alternative_middle_name
                ? element.alternative_middle_name
                : ""),
            EmployeePrefix: element.prefix_id ? element.prefix_id : "",
            ExpireDate: element.expiry_date ? element.expiry_date : "",
            LicenseType: element.license_type_id ? element.license_type_id : "",
            LicenseStatus: element.license_status_id
              ? element.license_status_id
              : "",
            LicensePrefix: element.license_prefix_id
              ? element.license_prefix_id
              : "",
            IssuedDate: element.issued_date ? element.issued_date : "",
            EmployeeMobile: element.emp_mobile ? element.emp_mobile : "",
            EmployeeEmail: element.emp_work_email ? element.emp_work_email : "",
            Gender: element.emp_gender ? element.emp_gender : "",
            BirthDate: element.emp_birthday ? element.emp_birthday : ""
          });
        });
        allData.value = tableData;
        reportTable.value = {
          columns: [
            {
              label: "Employee Id",
              field: "EmployeeId",
              width: "5%",
              sortable: true,
              isKey: true
            },
            {
              label: "First Name",
              field: "FirstName",
              width: "10%",
              sortable: true
            },
            {
              label: "Father Name",
              field: "MiddleName",
              width: "10%",
              sortable: true
            },
            {
              label: "Grandfather Name",
              field: "LastName",
              width: "10%",
              sortable: true
            },
            {
              label: "License Status",
              field: "LicenseStatus",
              width: "5%",
              sortable: true
            },
            {
              label: "Alternative Full Name",
              field: "AlternativeFullName",
              width: "35%",
              sortable: true
            },
            {
              label: "License Number",
              field: "LicenseNumber",
              width: "5%",
              sortable: true
            },
            {
              label: "Issued Date",
              field: "IssuedDate",
              width: "5%",
              sortable: true
            },
            {
              label: "Gender",
              field: "Gender",
              width: "5%",
              sortable: true
            },
            {
              label: "Expire Date",
              field: "ExpireDate",
              width: "5%",
              sortable: true
            },
            {
              label: "License Type",
              field: "LicenseType",
              width: "5%",
              sortable: true
            },

            {
              label: "License Prefix",
              field: "LicensePrefix",
              width: "5%",
              sortable: true
            },
            {
              label: "Employee Mobile",
              field: "EmployeeMobile",
              width: "5%",
              sortable: true
            },

            {
              label: "Employee Email",
              field: "EmployeeEmail",
              width: "5%",
              sortable: true
            },
            {
              label: "Birth Date",
              field: "BirthDate",
              width: "5%",
              sortable: true
            }
          ],
          rows: computed(() => {
            return tableData.filter(
              curRow =>
                (curRow.FirstName
                  ? curRow.FirstName.toLowerCase().includes(
                      searchTerm.value.toLowerCase()
                    )
                  : "" || curRow.MiddleName
                  ? curRow.MiddleName.toLowerCase().includes(
                      searchTerm.value.toLowerCase()
                    )
                  : "" || curRow.LastName
                  ? curRow.LastName.toLowerCase().includes(
                      searchTerm.value.toLowerCase()
                    )
                  : "") &&
                (licenseTypeFilter.value &&
                licenseTypeFilter.value != "all" &&
                licenseTypeFilter.value != ""
                  ? curRow.LicenseType.toLowerCase() ==
                    licenseTypeFilter.value.toLowerCase()
                  : curRow.LicenseType ||
                    curRow.LicenseType == null ||
                    curRow.LicenseType == "") &&
                (genderFilter.value &&
                genderFilter.value != "all" &&
                genderFilter.value != ""
                  ? curRow.Gender.toLowerCase() ==
                    genderFilter.value.toLowerCase()
                  : curRow.Gender ||
                    curRow.Gender == null ||
                    curRow.Gender == "") &&
                (licensePrefixesFilter.value &&
                licensePrefixesFilter.value != "all" &&
                licensePrefixesFilter.value != ""
                  ? curRow.LicensePrefix.toLowerCase() ==
                    licensePrefixesFilter.value.toLowerCase()
                  : curRow.LicensePrefix ||
                    curRow.LicensePrefix == null ||
                    curRow.LicensePrefix == "")
            );
          }),
          totalRecordCount: res ? res.count : 0,
          sortable: {
            order: "EmployeeId",
            sort: "asc"
          }
        };
      });
    };

    const exportTable = () => {
      var blob = new Blob([document.getElementById("myTable").innerHTML], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
      });
      let date = new Date().toISOString();
      saveAs(blob, date.slice(0, 10) + " Report.xls");
    };

    const clearFilters = () => {
      genderFilter.value = "";
      licensePrefixesFilter.value = "";
      licenseTypeFilter.value = "";
      searchTerm.value = "";
    };
    const doSearch = (offset, limit, order, sort) => {
      reportTable.value.isLoading = true;

      setTimeout(() => {
        reportTable.value.isReSearch = offset == undefined ? true : false;
        offset = offset / 10 - 1;
        if (sort == "asc") {
          fetchLicenseReport([offset, limit]);
        } else {
          fetchLicenseReport([offset, limit]);
        }
        reportTable.value.sortable.order = order;
        reportTable.value.sortable.sort = sort;
      }, 600);
    };
    onMounted(() => {
      reportTable.value.isLoading = true;
      fetchLicenseReport([1, 10]);
    });
    return {
      report,
      exportTable,
      clearFilters,
      licenseTypeFilter,
      licensePrefixesFilter,
      genderFilter,
      fromDate,
      toDate,
      currentPage,
      totalCount,
      licenseTypes,
      doSearch,
      searchData,
      reportTable,
      searchTerm,
      licensePrefixes
    };
  }
};
</script>
