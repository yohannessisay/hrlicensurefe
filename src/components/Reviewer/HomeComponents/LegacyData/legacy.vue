<template>
  <!-- Sidebar -->
  <reviewer-side-bar> </reviewer-side-bar>

  <!-- Sidebar -->
  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar><h2>Legacy Data</h2></reviewer-nav-bar>
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
                px-2
                bg-primary-700
                text-white
                font-medium
                text-xs
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
                      mr-4
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
                    <i class="fa fa-user fa-2x"></i>
                  </button>
                </div>
                <div class="flex justify-center">
                  <div class="mb-3 xl:w-full">
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
                      aria-label="Default select example"
                      @change="filterLicenseType($event.target.value)"
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
                      @change="filterPrefix($event.target.value)"
                      aria-label="Default select example"
                    >
                      <option selected disabled>License Prefix</option>
                      <option value="all">All</option>
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
                      @change="filterGender($event.target.value)"
                      aria-label="Default select example"
                    >
                      <option selected disabled>Gender</option>
                      <option value="all">All</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div class="flex justify-left mt-2">
                  <label for="" class="ml-4 mt-8">Certified Date</label>
                  <div class="mb-3 ml-2">
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
                      @change="filterDateFrom($event.target.value)"
                      aria-label="Default select example"
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
                      @change="filterDateTo($event.target.value)"
                      aria-label="Default select example"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg overflow-x-scroll">
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
                  :columns="userTable.columns"
                  :rows="userTable.rows"
                  :total="userTable.totalRecordCount"
                  :sortable="userTable.sortable"
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
          <tr v-for="item in userTable.rows" :key="item">
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
import { ref, reactive, computed } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import ReviewerNavBar from "./SharedComponents/navBar.vue";
import ReviewerSideBar from "./SharedComponents/sideNav.vue";
import VueTableLite from "./SharedComponents/TableLiteCustom.vue";

import moment from "moment";
import { saveAs } from "file-saver";
import "@ocrv/vue-tailwind-pagination/dist/style.css";

export default {
  components: {
    ReviewerNavBar,
    ReviewerSideBar,
    VueTableLite,
  },

  setup() {
    const store = useStore();
    let allData = ref([]);
    let searchData = ref();

    let userTable = ref({ isLoading: true });
    let tableData = reactive([]);
    const searchTerm = ref("");
    let fromDate = ref("");
    let toDate = ref("");

    let currentPage = ref(1);
    let totalCount = ref();
    let report = ref([]);

    let searchedValue = ref("");

    let reportData = ref([]);

    let newLicenseData = ref([]);
    let licenseTypes = ref([]);

    let licensePrefixes = ref([]);

    const fetchLicenseReport = () => {
      let apiParameters = [1, 10];
      store.dispatch("reviewer/getLegacyData", apiParameters).then((res) => {
        newLicenseData.value = res.rows;
        reportData.value.push(...res.rows);

        res.rows.forEach((element) => {
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
            BirthDate: element.emp_birthday ? element.emp_birthday : "",
          });
        });
        allData.value = tableData;
        userTable.value = {
          columns: [
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
              label: "License Number",
              field: "LicenseNumber",
              width: "5%",
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
          rows: computed(() => {
            return tableData.filter((x) =>
              x.FirstName
                ? x.FirstName.toLowerCase().includes(
                    searchTerm.value.toLowerCase()
                  )
                : "" || x.MiddleName
                ? x.MiddleName.toLowerCase().includes(
                    searchTerm.value.toLowerCase()
                  )
                : "" || x.LastName
                ? x.LastName.toLowerCase().includes(
                    searchTerm.value.toLowerCase()
                  )
                : ""
            );
          }),
          totalRecordCount: res.count ? res.count : 0,
          sortable: {
            order: "EmployeeId",
            sort: "asc",
          },
        };
      });
    };

    const filterLicenseType = (licenseType) => {
      if (licenseType == "all") {
        tableData = allData.value;
        userTable.value.rows = computed(() => tableData);
      } else {
        tableData = allData.value.filter((stat) => {
          return stat.LicenseType.toLowerCase() == licenseType.toLowerCase();
        });
        userTable.value.rows = computed(() => tableData);
      }
    };

    const exportTable = () => {
      var blob = new Blob([document.getElementById("printable").innerHTML], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8",
      });
      let date = new Date().toISOString();
      saveAs(blob, date.slice(0, 10) + " Report.xls");
    };

    const searchByName = () => {
      searchingState.value = true;
      let filterByName = allData.value.filter((report) => {
        return report.name.toLowerCase().includes(searchedValue.value) ||
          report.fatherName.toLowerCase().includes(searchedValue.value) ||
          report.grandFatherName.toLowerCase().includes(searchedValue.value) ||
          report.goodStandingCode
          ? report.goodStandingCode
              .toLowerCase()
              .includes(searchedValue.value.toLowerCase())
          : report.renewalCode
          ? report.renewalCode
              .toLowerCase()
              .includes(searchedValue.value.toLowerCase())
          : report.newLicenseCode
              .toLowerCase()
              .includes(searchedValue.value.toLowerCase());
      });
      reportData.value = filterByName;
    };

    const filterDateFrom = (date) => {
      fromDate.value = date;
      if (toDate.value.length > 0) {
        tableData = allData.value.filter((stat) => {
          return (
            moment(stat.IssuedDate).isSameOrAfter(fromDate.value) &&
            moment(stat.IssuedDate).isSameOrBefore(toDate.value)
          );
        });
        userTable.value.rows = computed(() => tableData);
      } else
        tableData = allData.value.filter((stat) => {
          return moment(stat.IssuedDate).isSameOrAfter(fromDate.value);
        });
      userTable.value.rows = computed(() => tableData);
    };

    const filterDateTo = (date) => {
      toDate.value = date;
      if (fromDate.value.length > 0) {
        tableData = allData.value.filter((stat) => {
          return (
            moment(stat.IssuedDate).isSameOrBefore(toDate.value) &&
            moment(stat.IssuedDate).isSameOrAfter(fromDate.value)
          );
        });
        userTable.value.rows = computed(() => tableData);
      }
    };

    const filterPrefix = (prefix) => {
      if (prefix == "all") {
        tableData = allData.value;
        userTable.value.rows = computed(() => tableData);
      } else {
        tableData = allData.value.filter((stat) => {
          return stat.LicensePrefix.toLowerCase() == prefix.toLowerCase();
        });
        userTable.value.rows = computed(() => tableData);
      }
    };

    const filterGender = (status) => {
      if (status == "all") {
        tableData = allData.value;
        userTable.value.rows = computed(() => tableData);
      } else {
        tableData = allData.value.filter((stat) => {
          return stat.Gender.toLowerCase() == status.toLowerCase();
        });
        userTable.value.rows = computed(() => tableData);
      }
    };

    onMounted(() => {
      fetchLicenseReport();
    });
    return {
      report,
      exportTable,
      filterDateFrom,
      filterDateTo,
      filterLicenseType,
      fromDate,
      toDate,
      filterGender,
      filterPrefix,
      currentPage,
      totalCount,
      licenseTypes,
      searchByName,
      searchData,
      userTable,
      searchTerm,
      licensePrefixes,
    };
  },
};
</script>
