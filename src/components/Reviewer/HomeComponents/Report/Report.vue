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
            ><span class="text-primary-600 text-base">Home</span></router-link
          >
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>
        <li>
          <a href="#" class="pointer-events-none text-lg text-grey-300"
            >Report</a
          >
        </li>
      </ol>
    </reviewer-nav-bar>
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="container mx-auto px-4 sm:px-8">
        <div class="relative py-4">
          <p class="absolute left-0 text-2xl font-semibold leading-tight">
            View reports for all applications
          </p>
          <p class="absolute right-0">
            <button
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
              @click="exportTable()"
            >
              <i class="fa fa-file-excel text-xl"></i>
              Generate Report
            </button>
          </p>
        </div>
        <div class="py-8">
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
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
                @change="handleFilterByApplication($event.target.value)"
              >
                <option disabled>Application Type</option>
                <option selected value="newLicense">
                  New License Applications
                </option>
                <option value="goodStanding">Goodstanding Applications</option>
                <option value="renewal">Renewed Applications</option>
                <!-- <option value="verification">
                        Verification Applications
                      </option> -->
              </select>
            </div>
            <div class="flex justify-left">
              <div class="mb-3 xl:w-full">
                <label for="" class="ml-4">Search By Name</label>
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
                      ml-4
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
                    v-model="searchTermName"
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
                    placeholder="Search for profession"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    v-model="searchTermProf"
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
                    <i class="fa fa-briefcase fa-2x"></i>
                  </button>
                </div>
                <div class="flex justify-left mt-8">
                  <div class="mb-3 xl:w-full ml-2">
                    <label for="" class="ml-4">License Status</label>
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
                      v-model="searchTermStatus"
                      aria-label="Default select example"
                    >
                      <option value="" disabled>Application Status</option>
                      <option>All</option>
                      <option
                        v-for="appStatus in applicationStatuses"
                        :key="appStatus.id"
                        :value="appStatus.name"
                      >
                        {{ appStatus.name }}
                      </option>
                    </select>
                  </div>

                  <div class="mb-3 xl:w-full ml-4">
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
                      v-model="searchTermGender"
                      aria-label="Default select example"
                    >
                      <option value="" disabled>All</option>

                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div class="mb-3 xl:w-full ml-4">
                    <label for="" class="ml-4">Region</label>
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
                      v-model="searchTermRegion"
                      aria-label="Default select example"
                    >
                      <option value="" disabled>Region</option>
                      <option
                        v-for="region in regions"
                        :value="region.name"
                        :key="region.id"
                      >
                        {{ region.name }}
                      </option>
                    </select>
                  </div>

                  <label for="" class="ml-8 mt-8">Certified Date</label>
                  <div class="mb-3">
                    <label for="" class="ml-4">From</label>
                    <input
                      v-model="searchTermFromDate"
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
                      v-model="searchTermToDate"
                      aria-label="Default select example"
                    />
                  </div>
                </div>

                <div class="flex justify-left mt-2"></div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm ">
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
                  @do-search="doSearch"
                  :is-loading="reportTable.isLoading"
                  :columns="reportTable.columns"
                  :rows="reportTable.rows"
                  :total="reportTable.totalRecordCount"
                  :sortable="reportTable.sortable"
                >
                </vue-table-lite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main Content -->

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
              Gender
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
              Organizational Unit
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

            <td class="px-5 py-5 border-gray-200 bg-white text-sm text-right">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.Gender }}
                  </p>
                </div>
              </div>
            </td>

            <td class="px-5 py-5 border-gray-200 bg-white text-sm text-right">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.OrganizationalUnit }}
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import { ref, reactive, computed } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import ReviewerNavBar from "./SharedComponents/navBar.vue";
import ReviewerSideBar from "./SharedComponents/sideNav.vue";
import VueTableLite from "vue3-table-lite";

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
    let allData = reactive([]);
    let reportTable = ref({ isLoading: true, rows: [] });
    let tableData = reactive([]);
    const searchTermName = ref("");
    const searchTermProf = ref("");
    const searchTermStatus = ref("");
    const searchTermGender = ref("");
    const searchTermRegion = ref("");
    const searchTermFromDate = ref("");
    const searchTermToDate = ref("");
    let applicationTypeSearch = ref("NewLicense");
    let departments = ref([]);
    let professions = ref([]);
    let regions = ref([]);
    let zones = ref([]);
    let woredas = ref([]);
    let applicationStatuses = ref([]);

    const fetchNewLicenseReport = (apiParameters) => {
      store
        .dispatch("report/getNewLicenseReport", apiParameters)
        .then((res) => {
          tableData = [];
          allData.value = [];
          res.data.data.rows.forEach((element) => {
            let prof = element.educations.map((prof) => {
              return prof.professionType ? prof.professionType.name : "";
            });

            tableData.push({
              id: element.id ? +element.id : "",
              FirstName: element.name ? element.name : "",
              MiddleName: element.fatherName ? element.fatherName : "",
              LastName: element.grandFatherName ? element.grandFatherName : "",
              LicenseStatus: element.applicationStatus
                ? element.applicationStatus.name
                : "",
              LicenseNumber: element.newLicenseCode
                ? element.newLicenseCode
                : "",
              IssuedDate: element.certifiedDate
                ? element.certifiedDate.slice(0, 10)
                : "",

              ProfessionalType: prof ? prof.join(",") : "",
              Gender: element.gender ? element.gender : "",
              OrganizationalUnit: element.region ? element.region.name : "",
              data: element ? element : {},
            });
          });
          allData.value = tableData;
          reportTable.value = reactive({
            columns: [
              {
                label: "ID",
                field: "id",
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
                label: "Professional Type",
                field: "ProfessionalType",
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
                label: "Organizational Unit",
                field: "OrganizationalUnit",
                width: "5%",
                sortable: true,
              },
            ],
            rows: computed(() => {
              return allData.value.filter(
                (x) =>
                  ((x.FirstName
                    ? x.FirstName.toLowerCase().includes(
                        searchTermName.value.toLowerCase()
                      )
                    : "") ||
                    (x.MiddleName
                      ? x.MiddleName.toLowerCase().includes(
                          searchTermName.value.toLowerCase()
                        )
                      : "") ||
                    (x.LastName
                      ? x.LastName.toLowerCase().includes(
                          searchTermName.value.toLowerCase()
                        )
                      : "")) &&
                  (x.ProfessionalType
                    ? x.ProfessionalType.toLowerCase().includes(
                        searchTermProf.value.toLowerCase()
                      )
                    : "") &&
                  (searchTermStatus.value != "" &&
                  searchTermStatus.value != "All"
                    ? x.LicenseStatus
                      ? x.LicenseStatus.toLowerCase() ==
                        searchTermStatus.value.toLowerCase()
                      : ""
                    : x.LicenseStatus ||
                      x.LicenseStatus == "" ||
                      x.LicenseStatus == null) &&
                  (searchTermGender.value != "" &&
                  searchTermGender.value != "All"
                    ? x.Gender
                      ? x.Gender.toLowerCase() ==
                        searchTermGender.value.toLowerCase()
                      : ""
                    : x.Gender || x.Gender == "" || x.Gender == null) &&
                  (searchTermRegion.value != "" &&
                  searchTermRegion.value != "All"
                    ? x.OrganizationalUnit
                      ? x.OrganizationalUnit.toLowerCase() ==
                        searchTermRegion.value.toLowerCase()
                      : ""
                    : x.OrganizationalUnit ||
                      x.OrganizationalUnit == "" ||
                      x.OrganizationalUnit == null) &&
                  (searchTermFromDate.value != ""
                    ? x.IssuedDate
                      ? searchTermToDate.value.length > 0
                        ? moment(x.IssuedDate).isSameOrAfter(
                            searchTermFromDate.value
                          ) &&
                          moment(x.IssuedDate).isSameOrBefore(
                            searchTermToDate.value
                          )
                        : moment(x.IssuedDate).isSameOrAfter(
                            searchTermFromDate.value
                          )
                      : ""
                    : x.IssuedDate ||
                      x.IssuedDate == "" ||
                      x.IssuedDate == null) &&
                  (searchTermToDate.value != ""
                    ? x.IssuedDate
                      ? searchTermFromDate.value.length > 0
                        ? moment(x.IssuedDate).isSameOrBefore(
                            searchTermToDate.value
                          ) &&
                          moment(x.IssuedDate).isSameOrAfter(
                            searchTermFromDate.value
                          )
                        : moment(x.IssuedDate).isSameOrBefore(
                            searchTermToDate.value
                          )
                      : ""
                    : x.IssuedDate ||
                      x.IssuedDate == "" ||
                      x.IssuedDate == null)
              );
            }),
            totalRecordCount: res.data.data.count,
            sortable: {
              order: "id",
              sort: "asc",
            },
          });
        });
    };

    const handleFilterByApplication = (applicationType) => {
      switch (applicationType) {
        case "newLicense": {
          applicationTypeSearch.value = "NewLicense";
          tableData = [];
          allData.value = [];
          nullifySearchTerms();
          fetchNewLicenseReport([0, 10]);
          break;
        }
        // case "verification": {
        //   tableData = [];
        // nullifySearchTerms();
        //   fetchVerificationReport();
        //   break;
        // }
        case "renewal": {
          applicationTypeSearch.value = "Renewal";
          tableData = [];
          nullifySearchTerms();
          fetchRenewalReport([0, 10]);
          break;
        }
        case "goodStanding": {
          applicationTypeSearch.value = "Goodstanding";
          nullifySearchTerms();
          tableData = [];
          fetchGoodstandingReport([0, 10]);
          break;
        }
      }
    };
    const nullifySearchTerms = () => {
      searchTermName.value = "";
      searchTermProf.value = "";
      searchTermStatus.value = "";
      searchTermGender.value = "";
      searchTermRegion.value = "";
      searchTermFromDate.value = "";
      searchTermToDate.value = "";
    };
    const fetchRenewalReport = (apiParameters) => {
      store.dispatch("report/getRenewalReport", apiParameters).then((res) => {
        tableData = [];
        allData.value = [];
        res.data.data.rows.forEach((element) => {
          let prof = element.educations.map((prof) => {
            return prof.professionType ? prof.professionType.name : "";
          });
          tableData.push({
            id: element.id ? +element.id : "",
            FirstName: element.name ? element.name : "",
            MiddleName: element.fatherName ? element.fatherName : "",
            LastName: element.grandFatherName ? element.grandFatherName : "",
            LicenseStatus: element.applicationStatus
              ? element.applicationStatus.name
              : "",
            LicenseNumber: element.renewalCode ? element.renewalCode : "",
            IssuedDate: element.certifiedDate
              ? element.certifiedDate.slice(0, 10)
              : "",

            ProfessionalType: prof ? prof.join(" , ") : "",
            Gender: element.gender ? element.gender : "",
            OrganizationalUnit: element.region ? element.region.name : "",
            data: element ? element : {},
          });
        });
        allData.value = tableData;
        reportTable.value = {
          columns: [
            {
              label: "ID",
              field: "id",
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
              label: "Professional Type",
              field: "ProfessionalType",
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
              label: "Organizational Unit",
              field: "OrganizationalUnit",
              width: "5%",
              sortable: true,
            },
          ],
          rows: computed(() => {
            return allData.value.filter(
              (x) =>
                ((x.FirstName
                  ? x.FirstName.toLowerCase().includes(
                      searchTermName.value.toLowerCase()
                    )
                  : "") ||
                  (x.MiddleName
                    ? x.MiddleName.toLowerCase().includes(
                        searchTermName.value.toLowerCase()
                      )
                    : "") ||
                  (x.LastName
                    ? x.LastName.toLowerCase().includes(
                        searchTermName.value.toLowerCase()
                      )
                    : "")) &&
                (x.ProfessionalType
                  ? x.ProfessionalType.toLowerCase().includes(
                      searchTermProf.value.toLowerCase()
                    )
                  : "") &&
                (searchTermStatus.value != "" && searchTermStatus.value != "All"
                  ? x.LicenseStatus
                    ? x.LicenseStatus.toLowerCase() ==
                      searchTermStatus.value.toLowerCase()
                    : ""
                  : x.LicenseStatus ||
                    x.LicenseStatus == "" ||
                    x.LicenseStatus == null) &&
                (searchTermGender.value != "" && searchTermGender.value != "All"
                  ? x.Gender
                    ? x.Gender.toLowerCase() ==
                      searchTermGender.value.toLowerCase()
                    : ""
                  : x.Gender || x.Gender == "" || x.Gender == null) &&
                (searchTermRegion.value != "" && searchTermRegion.value != "All"
                  ? x.OrganizationalUnit
                    ? x.OrganizationalUnit.toLowerCase() ==
                      searchTermRegion.value.toLowerCase()
                    : ""
                  : x.OrganizationalUnit ||
                    x.OrganizationalUnit == "" ||
                    x.OrganizationalUnit == null) &&
                (searchTermFromDate.value != ""
                  ? x.IssuedDate
                    ? searchTermToDate.value.length > 0
                      ? moment(x.IssuedDate).isSameOrAfter(
                          searchTermFromDate.value
                        ) &&
                        moment(x.IssuedDate).isSameOrBefore(
                          searchTermToDate.value
                        )
                      : moment(x.IssuedDate).isSameOrAfter(
                          searchTermFromDate.value
                        )
                    : ""
                  : x.IssuedDate ||
                    x.IssuedDate == "" ||
                    x.IssuedDate == null) &&
                (searchTermToDate.value != ""
                  ? x.IssuedDate
                    ? searchTermFromDate.value.length > 0
                      ? moment(x.IssuedDate).isSameOrBefore(
                          searchTermToDate.value
                        ) &&
                        moment(x.IssuedDate).isSameOrAfter(
                          searchTermFromDate.value
                        )
                      : moment(x.IssuedDate).isSameOrBefore(
                          searchTermToDate.value
                        )
                    : ""
                  : x.IssuedDate || x.IssuedDate == "" || x.IssuedDate == null)
            );
          }),
          totalRecordCount: res.data.data.count,
          sortable: {
            order: "id",
            sort: "asc",
          },
        };
      });
      reportTable.value.isLoading = false;
    };

    //uncomment when verification is done
    // const fetchVerificationReport = () => {
    //   store.dispatch("report/getVerificationReport").then(res => {
    //     if (res.data.message == "No verifications found!") {
    //       reportTable.value = {
    //         columns: [
    //           {
    //             label: "ID",
    //             field: "id",
    //             width: "5%",
    //             sortable: true,
    //             isKey: true
    //           },
    //           {
    //             label: "First Name",
    //             field: "FirstName",
    //             width: "10%",
    //             sortable: true
    //           },
    //           {
    //             label: "Father Name",
    //             field: "MiddleName",
    //             width: "10%",
    //             sortable: true
    //           },
    //           {
    //             label: "Grandfather Name",
    //             field: "LastName",
    //             width: "10%",
    //             sortable: true
    //           },
    //           {
    //             label: "License Status",
    //             field: "LicenseStatus",
    //             width: "5%",
    //             sortable: true
    //           },
    //           {
    //             label: "Professional Type",
    //             field: "ProfessionalType",
    //             width: "35%",
    //             sortable: true
    //           },
    //           {
    //             label: "License Number",
    //             field: "LicenseNumber",
    //             width: "5%",
    //             sortable: true
    //           },
    //           {
    //             label: "Issued Date",
    //             field: "IssuedDate",
    //             width: "5%",
    //             sortable: true
    //           },
    //           {
    //             label: "Gender",
    //             field: "Gender",
    //             width: "5%",
    //             sortable: true
    //           },
    //           {
    //             label: "Organizational Unit",
    //             field: "OrganizationalUnit",
    //             width: "5%",
    //             sortable: true
    //           }
    //         ],
    //         rows: [],
    //         totalRecordCount: 0,
    //         sortable: {
    //           order: "id",
    //           sort: "asc"
    //         }
    //       };
    //     } else {
    //       res.data.data.forEach(element => {
    //         tableData.push({
    //           id: element.id ? element.id : "",
    //           FirstName: element.name ? element.name : "",
    //           MiddleName: element.fatherName ? element.fatherName : "",
    //           LastName: element.grandFatherName ? element.grandFatherName : "",
    //           LicenseStatus: element.applicationStatus
    //             ? element.applicationStatus.name
    //             : "",
    //           LicenseNumber: element.newLicenseCode
    //             ? element.newLicenseCode
    //             : "",
    //           IssuedDate: element.certifiedDate
    //             ? element.certifiedDate.slice(0, 10)
    //             : "",

    //           ProfessionalType:
    //             element.licenseProfessionalTypes &&
    //               element.licenseProfessionalTypes[0] &&
    //               element.licenseProfessionalTypes[0].professionalTypes
    //               ? element.licenseProfessionalTypes[0].professionalTypes.name
    //               : "",
    //           Gender: element.gender ? element.gender : "",
    //           OrganizationalUnit: element.region ? element.region.name : "",
    //           data: element ? element : {}
    //         });
    //       });
    //       allData.value = tableData;
    //       reportTable.value = {
    //         columns: [
    //           {
    //             label: "ID",
    //             field: "id",
    //             width: "5%",
    //             sortable: true,
    //             isKey: true
    //           },
    //           {
    //             label: "First Name",
    //             field: "FirstName",
    //             width: "10%",
    //             sortable: true
    //           },
    //           {
    //             label: "Father Name",
    //             field: "MiddleName",
    //             width: "10%",
    //             sortable: true
    //           },
    //           {
    //             label: "Grandfather Name",
    //             field: "LastName",
    //             width: "10%",
    //             sortable: true
    //           },
    //           {
    //             label: "License Status",
    //             field: "LicenseStatus",
    //             width: "5%",
    //             sortable: true
    //           },
    //           {
    //             label: "Professional Type",
    //             field: "ProfessionalType",
    //             width: "35%",
    //             sortable: true
    //           },
    //           {
    //             label: "License Number",
    //             field: "LicenseNumber",
    //             width: "5%",
    //             sortable: true
    //           },
    //           {
    //             label: "Issued Date",
    //             field: "IssuedDate",
    //             width: "5%",
    //             sortable: true
    //           },
    //           {
    //             label: "Gender",
    //             field: "Gender",
    //             width: "5%",
    //             sortable: true
    //           },
    //           {
    //             label: "Organizational Unit",
    //             field: "OrganizationalUnit",
    //             width: "5%",
    //             sortable: true
    //           }
    //         ],
    //         rows: computed(() => {
    //           return tableData.filter(x =>
    //             x.FirstName
    //               ? x.FirstName.toLowerCase().includes(
    //                 ""
    //               )
    //               : "" || x.MiddleName
    //                 ? x.MiddleName.toLowerCase().includes(
    //                   ""
    //                 )
    //                 : "" || x.LastName
    //                   ? x.LastName.toLowerCase().includes(
    //                     ""
    //                   )
    //                   : ""
    //           );
    //         }),
    //         totalRecordCount: allData.value.length,
    //         sortable: {
    //           order: "id",
    //           sort: "asc"
    //         }
    //       };
    //     }
    //   });
    // };

    const fetchGoodstandingReport = (apiParameters) => {
      store
        .dispatch("report/getGoodstandingReport", apiParameters)
        .then((res) => {
          tableData = [];
          allData.value = [];
          res.data.data.rows.forEach((element) => {
            let prof = element.GSProfessionals.professionalTypes
              ? element.GSProfessionals.professionalTypes.name
              : "";
            tableData.push({
              id: element.id ? +element.id : "",
              FirstName: element.name ? element.name : "",
              MiddleName: element.fatherName ? element.fatherName : "",
              LastName: element.grandFatherName ? element.grandFatherName : "",
              LicenseStatus: element.applicationStatus
                ? element.applicationStatus.name
                : "",
              LicenseNumber: element.goodStandingCode
                ? element.goodStandingCode
                : "",
              IssuedDate: element.certifiedDate
                ? element.certifiedDate.slice(0, 10)
                : "",
              ProfessionalType: prof ? prof : "",
              Gender: element.gender ? element.gender : "",
              OrganizationalUnit: element.region ? element.region.name : "",
              data: element ? element : {},
            });
          });
          allData.value = tableData;
          reportTable.value = {
            columns: [
              {
                label: "ID",
                field: "id",
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
                label: "Professional Type",
                field: "ProfessionalType",
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
                label: "Organizational Unit",
                field: "OrganizationalUnit",
                width: "5%",
                sortable: true,
              },
            ],
            rows: computed(() => {
              return allData.value.filter(
                (x) =>
                  ((x.FirstName
                    ? x.FirstName.toLowerCase().includes(
                        searchTermName.value.toLowerCase()
                      )
                    : "") ||
                    (x.MiddleName
                      ? x.MiddleName.toLowerCase().includes(
                          searchTermName.value.toLowerCase()
                        )
                      : "") ||
                    (x.LastName
                      ? x.LastName.toLowerCase().includes(
                          searchTermName.value.toLowerCase()
                        )
                      : "")) &&
                  (x.ProfessionalType
                    ? x.ProfessionalType.toLowerCase().includes(
                        searchTermProf.value.toLowerCase()
                      )
                    : "") &&
                  (searchTermStatus.value != "" &&
                  searchTermStatus.value != "All"
                    ? x.LicenseStatus
                      ? x.LicenseStatus.toLowerCase() ==
                        searchTermStatus.value.toLowerCase()
                      : ""
                    : x.LicenseStatus ||
                      x.LicenseStatus == "" ||
                      x.LicenseStatus == null) &&
                  (searchTermGender.value != "" &&
                  searchTermGender.value != "All"
                    ? x.Gender
                      ? x.Gender.toLowerCase() ==
                        searchTermGender.value.toLowerCase()
                      : ""
                    : x.Gender || x.Gender == "" || x.Gender == null) &&
                  (searchTermRegion.value != "" &&
                  searchTermRegion.value != "All"
                    ? x.OrganizationalUnit
                      ? x.OrganizationalUnit.toLowerCase() ==
                        searchTermRegion.value.toLowerCase()
                      : ""
                    : x.OrganizationalUnit ||
                      x.OrganizationalUnit == "" ||
                      x.OrganizationalUnit == null) &&
                  (searchTermFromDate.value != ""
                    ? x.IssuedDate
                      ? searchTermToDate.value.length > 0
                        ? moment(x.IssuedDate).isSameOrAfter(
                            searchTermFromDate.value
                          ) &&
                          moment(x.IssuedDate).isSameOrBefore(
                            searchTermToDate.value
                          )
                        : moment(x.IssuedDate).isSameOrAfter(
                            searchTermFromDate.value
                          )
                      : ""
                    : x.IssuedDate ||
                      x.IssuedDate == "" ||
                      x.IssuedDate == null) &&
                  (searchTermToDate.value != ""
                    ? x.IssuedDate
                      ? searchTermFromDate.value.length > 0
                        ? moment(x.IssuedDate).isSameOrBefore(
                            searchTermToDate.value
                          ) &&
                          moment(x.IssuedDate).isSameOrAfter(
                            searchTermFromDate.value
                          )
                        : moment(x.IssuedDate).isSameOrBefore(
                            searchTermToDate.value
                          )
                      : ""
                    : x.IssuedDate ||
                      x.IssuedDate == "" ||
                      x.IssuedDate == null)
              );
            }),
            totalRecordCount: res.data.data.count,
            sortable: {
              order: "id",
              sort: "asc",
            },
          };
        });
      reportTable.value.isLoading = false;
    };

    const fetchDepartmentType = () => {
      store.dispatch("goodstanding/getDepartmentType").then((res) => {
        departments.value = res.data.data;
      });
    };

    const fetchRegion = () => {
      store.dispatch("report/getRegions").then((res) => {
        regions.value = res.data.data;
        regions.value.unshift({name:'All'});
      });
  
    };

    const fetchZones = (regionID) => {
      store.dispatch("report/getZones", regionID).then((res) => {
        zones.value = res.data.data;
      });
    };

    const fetchWoredas = (zoneID) => {
      store.dispatch("report/getWoredas", zoneID).then((res) => {
        woredas.value = res.data.data;
      });
    };

    const fetchApplicationStatuses = () => {
      store.dispatch("report/getapplicationStatuses").then((res) => {
        applicationStatuses.value = res.data.data.filter((application) => {
          return (
            application.code == "APP" ||
            application.code == "DEC" ||
            application.code == "SUSP" ||
            application.code == "RTN" ||
            application.code == "USUP" ||
            application.code == "RVK"
          );
        });
      });
    };

    const exportTable = () => {
      var blob = new Blob([document.getElementById("printable").innerHTML], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8",
      });
      let date = new Date().toISOString();
      saveAs(blob, date.slice(0, 10) + " Report.xls");
    };
    const doSearch = (offset, limit, order, sort) => {
      reportTable.value.isLoading = true; 
      setTimeout(() => {
        reportTable.value.isReSearch = offset == undefined ? true : false;
        offset = offset / 10 + 1;
        if (sort == "asc" && applicationTypeSearch.value == "NewLicense") {
          fetchNewLicenseReport([offset, limit]);
        } else if (sort == "asc" && applicationTypeSearch.value == "Renewal") {
          fetchRenewalReport([offset, limit]);
        } else if (
          sort == "asc" &&
          applicationTypeSearch.value == "Goodstanding"
        ) {
          fetchGoodstandingReport([offset, limit]);
        }
        reportTable.value.sortable.order = order;
        reportTable.value.sortable.sort = sort;
      }, 600);
    };
    onMounted(() => {
      fetchNewLicenseReport([0, 10]);
      fetchRegion();
      fetchApplicationStatuses();
      fetchDepartmentType();
    });
    return {
      exportTable,
      fetchNewLicenseReport,
      fetchRenewalReport,
      // fetchVerificationReport,
      fetchGoodstandingReport,
      fetchRegion,
      fetchZones,
      doSearch,
      fetchWoredas,
      fetchApplicationStatuses,
      professions,
      regions,
      zones,
      woredas,
      applicationStatuses,
      handleFilterByApplication,
      departments,
      reportTable,
      searchTermName,
      searchTermProf,
      searchTermStatus,
      searchTermGender,
      searchTermRegion,
      searchTermFromDate,
      searchTermToDate,
    };
  },
};
</script>
