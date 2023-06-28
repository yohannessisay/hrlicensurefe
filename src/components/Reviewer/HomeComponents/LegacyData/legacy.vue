<template>
  <!-- Sidebar -->
  <reviewer-side-bar> </reviewer-side-bar>

  <!-- Sidebar -->
  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar
      ><ol class="flex list-reset">
        <li>
          <router-link to="/admin/review"
            ><span class="text-base text-primary-600">Home</span></router-link
          >
        </li>
        <li><span class="mx-2 text-gray-500">/</span></li>

        <li>
          <a href="#" class="text-lg pointer-events-none text-grey-300"
            >FMOH Legacy Data</a
          >
        </li>
      </ol></reviewer-nav-bar
    >
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="container px-4 mx-auto sm:px-8">
        <div class="relative py-4">
          <h2 class="absolute left-0 text-2xl font-semibold leading-tight">
            View FMOH legacy licenses
          </h2>
          <p class="absolute right-0">
            <button
              class="inline-block px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out border rounded shadow-md bg-primary-700 hover:bg-white hover:text-primary-600"
              @click="exportTable()"
            >
              <i class="text-xl fa fa-file-excel"></i>
              Generate Report
            </button>
          </p>
        </div>
        <div class="py-8">
          <div class="px-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div class="flex justify-left">
              <div class="mb-3 xl:w-full">
                <div
                  class="relative flex flex-wrap items-stretch w-full mb-4 ml-4 input-group"
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
                      mr-2
                      focus:text-gray-700
                      focus:bg-white
                      focus:border-blue-600
                      focus:outline-none
                    "
                    placeholder="Start Searching For Name"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    v-model="searchTerm"
                    @keyup.enter="applyFilter()"
                  />
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
                      mr-2
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
                    placeholder="License Number"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    v-model="searchTermLicenseNumber"
                    @keyup.enter="applyFilter()"
                  />
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
                    placeholder="Phone Number"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    v-model="searchTermPhone"
                    @keyup.enter="applyFilter()"
                  />
                </div>
                <div class="grid w-full grid-cols-6">
                  <div class="mb-3 xl:w-full">
                    <label for="" class="ml-4">License Type</label>
                    <select
                      class="block w-full px-6 py-2 ml-4 text-base font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded appearance-none form-select bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      v-model="licenseTypeFilter"
                      @change="applyFilter()"
                    >
                      <option selected disabled>License Type</option>
                      <option
                        v-for="licenseType in licenseTypes"
                        :value="licenseType"
                        :key="licenseType"
                      >
                        {{ licenseType }}
                      </option>
                    </select>
                  </div>

                  <div class="mb-3 ml-2 xl:w-full">
                    <label for="" class="ml-4">License Prefix</label>
                    <select
                      class="block w-full px-6 py-2 ml-4 text-base font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded appearance-none form-select bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      @change="applyFilter()"
                      v-model="licensePrefixesFilter"
                    >
                      <option value="all" selected>All</option>
                      <option
                        v-for="prefix in licensePrefixes"
                        :key="prefix"
                        :value="prefix"
                      >
                        {{ prefix }}
                      </option>
                    </select>
                  </div>

                  <div class="mb-3 ml-2 xl:w-full">
                    <label for="" class="ml-4">Gender</label>
                    <select
                      class="block w-full px-6 py-2 ml-4 text-base font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded appearance-none form-select bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      v-model="genderFilter"
                      @change="applyFilter()"
                    >
                      <option selected disabled>Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div class="mt-4 ml-8">
                    <button
                      type="button"
                      class="inline-block px-6 py-2 mt-2 text-xs font-medium leading-tight uppercase transition duration-150 ease-in-out border-2 rounded border-primary-600 text-primary-600 hover:bg-primary-600 hover:bg-opacity-5 hover:text-white focus:outline-none focus:ring-0"
                      @click="clearFilters()"
                    >
                      <i class="fa fa-close"></i>
                      Clear Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-6 bg-white rounded-lg shadow-md">
              <div
                class="inline-block min-w-full overflow-hidden rounded-lg shadow-md bg-primary-800"
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
      class="min-w-full rounded-lg shadow-md"
      style="display: none"
    >
      <table class="w-full" id="myTable">
        <thead>
          <tr class="">
            <th
              class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200 "
            >
              First Name
            </th>
            <th
              class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200 "
            >
              Middle Name
            </th>
            <th
              class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200 "
            >
              Last Name
            </th>
            <th
              class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200 "
            >
              License Number
            </th>
            <th
              class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200 "
            >
              License Status
            </th>

            <th
              class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200 "
            >
              Professional Type
            </th>

            <th
              class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200 "
            >
              Issued Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in reportTable.rows" :key="item">
            <td class="px-5 py-5 text-sm bg-white border-gray-200">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.FirstName }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-5 py-5 text-sm bg-white border-gray-200">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.MiddleName }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-5 py-5 text-sm bg-white border-gray-200">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.LastName }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-5 py-5 text-sm text-right bg-white border-gray-200">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.LicenseNumber }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-5 py-5 text-sm text-right bg-white border-gray-200">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.LicenseStatus }}
                  </p>
                </div>
              </div>
            </td>

            <td class="px-5 py-5 text-sm text-right bg-white border-gray-200">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.ProfessionalType }}
                  </p>
                </div>
              </div>
            </td>

            <td class="px-5 py-5 text-sm text-right bg-white border-gray-200">
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
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import ReviewerNavBar from "./SharedComponents/navBar.vue";
import ReviewerSideBar from "./SharedComponents/sideNav.vue";
import VueTableLite from "vue3-table-lite";
import * as XLSX from "xlsx";

import "@ocrv/vue-tailwind-pagination/dist/style.css";

export default {
  components: {
    ReviewerNavBar,
    ReviewerSideBar,
    VueTableLite,
  },

  setup() {
    const store = useStore();
    let tableData = [];
    let reportTable = ref({ isLoading: false });
    let exportData = ref([]);
    let searchTerm = ref("");
    let searchTermLicenseNumber = ref("");
    let searchTermPhone = ref("");

    let report = ref([]);

    let licenseTypeFilter = ref("");
    let licensePrefixesFilter = ref("");
    let genderFilter = ref("");

    let licenseTypes = ref([]);

    let licensePrefixes = ref([]);

    const fetchLicenseReport = (apiParameters) => {
      store
        .dispatch("reviewer/getLegacyData", {
          params: apiParameters.params ? apiParameters.params : apiParameters,
        })
        .then((res) => {
          let tempData = res && res.rows ? res.rows : [];
          exportData.value=tempData;
          apiParameters && apiParameters.isInitial == true
            ? res.filters && res.filters.licenseType
              ? res.filters.licenseType.forEach((element) => {
                  licenseTypes.value.push(element.license_type_id);
                })
              : []
            : "";

          apiParameters && apiParameters.isInitial == true
            ? res.filters && res.filters.licensePrefix
              ? res.filters.licensePrefix.forEach((element) => {
                  licensePrefixes.value.push(element.license_prefix_id);
                })
              : []
            : "";
          tempData.forEach((element) => {
            tableData.push({
              EmployeeId: element.emp_number ? element.emp_number : "",
              FirstName: element.emp_first_name ? element.emp_first_name : "",
              MiddleName: element.emp_middle_name
                ? element.emp_middle_name
                : "",
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
              LicenseType: element.license_type_id
                ? element.license_type_id
                : "",
              LicenseStatus: element.license_status_id
                ? element.license_status_id
                : "",
              LicensePrefix: element.license_prefix_id
                ? element.license_prefix_id
                : "",
              IssuedDate: element.issued_date ? element.issued_date : "",
              EmployeeMobile: element.emp_mobile ? element.emp_mobile : "",
              EmployeeEmail: element.emp_work_email
                ? element.emp_work_email
                : "",
              Gender: element.emp_gender ? element.emp_gender : "",
              BirthDate: element.emp_birthday ? element.emp_birthday : "",
            });
          });
          reportTable.value = {
            columns: [
              {
                label: "License Number",
                field: "LicenseNumber",
                width: "5%",
                sortable: true,
              },
              {
                label: "Employee Id",
                field: "EmployeeId",
                width: "5%",
                sortable: true,
                isKey: true,
              },
              {
                label: "First Name",
                field: "FirstName",
                width: "10%",
                sortable: true,
              },
              {
                label: "Father Name",
                field: "MiddleName",
                width: "10%",
                sortable: true,
              },
              {
                label: "Grandfather Name",
                field: "LastName",
                width: "10%",
                sortable: true,
              },
              {
                label: "License Status",
                field: "LicenseStatus",
                width: "5%",
                sortable: true,
              },
              {
                label: "Alternative Full Name",
                field: "AlternativeFullName",
                width: "35%",
                sortable: true,
              },

              {
                label: "Issued Date",
                field: "IssuedDate",
                width: "5%",
                sortable: true,
              },
              {
                label: "Gender",
                field: "Gender",
                width: "5%",
                sortable: true,
              },
              {
                label: "Expire Date",
                field: "ExpireDate",
                width: "5%",
                sortable: true,
              },
              {
                label: "License Type",
                field: "LicenseType",
                width: "5%",
                sortable: true,
              },

              {
                label: "License Prefix",
                field: "LicensePrefix",
                width: "5%",
                sortable: true,
              },
              {
                label: "Employee Mobile",
                field: "EmployeeMobile",
                width: "5%",
                sortable: true,
              },

              {
                label: "Employee Email",
                field: "EmployeeEmail",
                width: "5%",
                sortable: true,
              },
              {
                label: "Birth Date",
                field: "BirthDate",
                width: "5%",
                sortable: true,
              },
            ],
            rows: tableData,
            totalRecordCount: res ? res.count : 0,
            sortable: {
              order: "EmployeeId",
              sort: "asc",
            },
          };
        });
    };

    const exportTable = () => {
      let tempData = [];

      exportData.value.forEach((element) => {
        tempData.push({
          "Employee Id": element.employee_id,
          "License Number": element.license_no ? element.license_no : "",
          "Application Type": element.license_type_id,
          "First Name": element.emp_first_name,
          "Father Name": element.emp_middle_name,
          "Grand Father Name": element.emp_last_name,
          Gender: element.emp_gender ? element.emp_gender : "",
          "Birth Date": element.emp_birthday
            ? element.emp_birthday.slice(0, 10)
            : "",
          "Employee Phone": element.emp_mobile ? element.emp_mobile : "",
          "License Status ": element.license_status_id,
          Prefix: element.prefix_id ? element.prefix_id : "",
        });
      });
       
      var exportWS = XLSX.utils.json_to_sheet(tempData);

      var wb = XLSX.utils.book_new();

      XLSX.utils.book_append_sheet(wb, exportWS, "animals");

      XLSX.writeFile(wb, "book.xlsx");
    };

    const doSearch = (offset, limit, order, sort) => {
      reportTable.value.isLoading = true;
      reportTable.value.rows = [];
      tableData = [];
      setTimeout(() => {
        reportTable.value.isReSearch = offset == undefined ? true : false;
        offset = offset / 10;
        if (sort == "asc") {
          fetchLicenseReport([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "licenseNumber", value: searchTermLicenseNumber.value },
            { key: "phoneNumber", value: searchTermPhone.value },
            { key: "name", value: searchTerm.value },
            { key: "licenseType", value: licenseTypeFilter.value },
            { key: "licensePrefix", value: licensePrefixesFilter.value },
            { key: "gender", value: genderFilter.value },
          ]);
        } else {
          fetchLicenseReport([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "licenseNumber", value: searchTermLicenseNumber.value },
            { key: "phoneNumber", value: searchTermPhone.value },
            { key: "name", value: searchTerm.value },
            { key: "licenseType", value: licenseTypeFilter.value },
            { key: "licensePrefix", value: licensePrefixesFilter.value },
            { key: "gender", value: genderFilter.value },
          ]);
        }
        reportTable.value.sortable.order = order;
        reportTable.value.sortable.sort = sort;
      }, 200);
    };
    const applyFilter = () => {
      reportTable.value.isLoading = true;
      reportTable.value.rows = [];
      tableData = [];
      fetchLicenseReport([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "licenseNumber", value: searchTermLicenseNumber.value },
        { key: "phoneNumber", value: searchTermPhone.value },
        { key: "name", value: searchTerm.value },
        { key: "licenseType", value: licenseTypeFilter.value },
        { key: "licensePrefix", value: licensePrefixesFilter.value },
        { key: "gender", value: genderFilter.value },
      ]);
    };

    const clearFilters = () => {
      searchTermLicenseNumber.value = "";
      searchTermPhone.value = "";
      searchTerm.value = "";
      licenseTypeFilter.value = "";
      licensePrefixesFilter.value = "";
      genderFilter.value = "";
      reportTable.value.isLoading = true;
      reportTable.value.rows = [];
      tableData = [];
      fetchLicenseReport([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "licenseNumber", value: searchTermLicenseNumber.value },
        { key: "phoneNumber", value: searchTermPhone.value },
        { key: "name", value: searchTerm.value },
        { key: "licenseType", value: licenseTypeFilter.value },
        { key: "licensePrefix", value: licensePrefixesFilter.value },
        { key: "gender", value: genderFilter.value },
      ]);
    };
    const searchApplication = () => {
      reportTable.value.isLoading = true;
      reportTable.value.rows = [];
      tableData = [];
      fetchLicenseReport([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "licenseNumber", value: searchTermLicenseNumber.value },
        { key: "phoneNumber", value: searchTermPhone.value },
        { key: "name", value: searchTerm.value },
        { key: "licenseType", value: licenseTypeFilter.value },
        { key: "licensePrefix", value: licensePrefixesFilter.value },
        { key: "gender", value: genderFilter.value },
      ]);
    };
    onMounted(() => {
      reportTable.value.isLoading = true;
      fetchLicenseReport({
        isInitial: true,
        params: [
          { key: "page", value: 0 },
          { key: "size", value: 10 },
          { key: "initialPage", value: 1 },
        ],
      });
    });
    return {
      report,
      exportTable,
      clearFilters,
      licenseTypeFilter,
      licensePrefixesFilter,
      genderFilter,
      licenseTypes,
      doSearch,
      applyFilter,
      searchApplication,
      searchTermLicenseNumber,
      searchTermPhone,
      reportTable,
      searchTerm,
      licensePrefixes,
    };
  },
};
</script>
