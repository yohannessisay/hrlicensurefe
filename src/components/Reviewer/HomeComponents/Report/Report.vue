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
          <a href="#" class="pointer-events-none text-lg text-grey-300">Report</a>
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
              class="px-6 text-white bg-primary-600 hover:text-primary-600 font-medium text-xs leading-tight uppercase rounded focus: focus:outline-none focus:ring-0 transition duration-150 mt-0 ease-in-out text-right"
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
                class="form-select appearance-none block w-full px-6 ml-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                v-model="licenseTypeFilter"
                @change="handleFilterByApplication()"
              >
                <option disabled>Application Type</option>
                <option selected value="newLicense">New License Applications</option>
                <option value="goodstanding">Goodstanding Applications</option>
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
                  class="input-group relative flex flex-wrap items-stretch w-full mb-4"
                >
                  <input
                    type="search"
                    class="ml-4 form-control relative flex-auto min-w-0 block w-full px-6 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Start Searching For Name"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    v-model="searchTermName"
                    @keyup.enter="searchApplication()"
                  />
                  <button
                    class="inline-block px-6 mr-4 py-2 bg-primary-700 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-blue-700 hover: focus:bg-blue-700 focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out items-center"
                  >
                    <i class="fa fa-user fa-2x"></i>
                  </button>

                  <input
                    type="search"
                    class="form-control relative flex-auto min-w-0 block w-full px-6 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Search for profession"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    v-model="searchTermProf"
                    @keyup.enter="searchApplication()"
                  />

                  <button
                    class="inline-block px-6 py-2 bg-primary-700 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-blue-700 hover: focus:bg-blue-700 focus: focus:outline-none focus:ring-0 active:bg-blue-800 active: transition duration-150 ease-in-out items-center"
                  >
                    <i class="fa fa-briefcase fa-2x"></i>
                  </button>
                </div>
                <div class="flex justify-left mt-8">
                  <div class="mb-3 xl:w-full ml-2">
                    <label for="" class="ml-4">License Status</label>
                    <select
                      class="form-select appearance-none block w-full px-6 ml-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      v-model="searchTermStatus"
                      aria-label="Default select example"
                      @change="searchApplication()"
                    >
                      <option value="" disabled>Application Status</option>
                      <option value="">All</option>
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
                      class="form-select appearance-none block w-full px-6 ml-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      v-model="searchTermGender"
                      @change="searchApplication()"
                      aria-label="Default select example"
                    >
                      <option value="">All</option>

                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div class="mb-3 xl:w-full ml-4">
                    <label for="" class="ml-4">Region</label>
                    <select
                      class="form-select appearance-none block w-full px-6 ml-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      @change="searchApplication()"
                      v-model="searchTermRegion"
                      aria-label="Default select example"
                    >
                      <option value="">All</option>
                      <option value="0">Federal</option>
                      <option
                        v-for="region in regions"
                        :value="region.id"
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
                      class="appearance-none block w-full px-6 ml-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label="Default select example"
                    />
                  </div>
                  <div class="mb-3 ml-2">
                    <label for="" class="ml-4"> To</label>
                    <input
                      type="date"
                      class="appearance-none block w-full px-6 ml-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      v-model="searchTermToDate"
                      @change="searchApplication()"
                      aria-label="Default select example"
                    />
                  </div>
                  <div class="ml-8 mt-4">
                    <button
                      type="button"
                      class="inline-block px-6 py-2 mt-2 border-2 border-primary-600 text-primary-600 font-medium text-xs leading-tight uppercase rounded hover:bg-primary-600 hover:bg-opacity-5 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      @click="clearFilters()"
                    >
                      <i class="fa fa-close"></i>
                      Clear Filters
                    </button>
                  </div>
                </div>

                <div class="flex justify-left mt-2"></div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm">
              <div
                class="inline-block min-w-full rounded-lg overflow-hidden bg-primary-800"
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
  </section>
</template>

<script>
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import { ref, reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
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
    let allData = reactive([]);
    let reportTable = ref({ isLoading: true, rows: [] });
    let tableData = reactive([]);
    let searchTermName = ref("");
    let licenseTypeFilter = ref("newLicense");
    let searchTermProf = ref("");
    let searchTermStatus = ref("");
    let searchTermGender = ref("");
    let searchTermRegion = ref("");
    let searchTermFromDate = ref("");
    let searchTermToDate = ref("");
    let exportData = ref({ type: "", data: [] });
    let departments = ref([]);
    let professions = ref([]);
    let regions = ref([]);
    let zones = ref([]);
    let woredas = ref([]);
    let applicationStatuses = ref([]);
    let tempProf = "";
    const fetchNewLicenseReport = async (apiParameters) => {
      reportTable.value.isLoading = true;
      await store
        .dispatch("report/getNewLicenseReport", [{ params: apiParameters }])
        .then((res) => {
          let tempData =
            res.data && res.data.data && res.data.data.rows ? res.data.data.rows : [];
          tableData = [];
          allData.value = [];
          exportData.value.data = [];
          exportData.value.type = "newLicense";
          exportData.value.data = tempData;

          tempData.forEach((element) => {
            tempProf = "";
            element.educations.map((prof) => {
              prof.professionType ? (tempProf += prof.professionType.name + ", ") : "";
            });
            tableData.push({
              LicenseNumber: element.newLicenseCode ? element.newLicenseCode : "",
              FirstName: element.name ? element.name : "",
              MiddleName: element.fatherName ? element.fatherName : "",
              LastName: element.grandFatherName ? element.grandFatherName : "",
              Email: element.applicant ? element.applicant.emailAddress : "",
              Phone: element.applicant ? element.applicant.phoneNumber : "",
              LicenseStatus: element.applicationStatus
                ? element.applicationStatus.name
                : "",

              CertifiedDate: element.certifiedDate
                ? element.certifiedDate.slice(0, 10)
                : "",

              ProfessionalType: tempProf,
              Gender: element.gender ? element.gender : "",
              OrganizationalUnit: element.region ? element.region.name : "",
              data: element ? element : {},
            });
          });

          reportTable.value = reactive({
            columns: [
              {
                label: "License Number",
                field: "LicenseNumber",
                width: "5%",
                sortable: true,
              },
              {
                label: "First Name",
                field: "FirstName",
                width: "5%",
                sortable: true,
              },
              {
                label: "Father Name",
                field: "MiddleName",
                width: "5%",
                sortable: true,
              },
              {
                label: "Grandfather Name",
                field: "LastName",
                width: "5%",
                sortable: true,
              },
              {
                label: "Email",
                field: "Email",
                width: "5%",
                sortable: true,
              },
              {
                label: "Phone",
                field: "Phone",
                width: "5%",
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
                width: "50%",
              },

              {
                label: "Certified Date",
                field: "CertifiedDate",
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
            rows: tableData,
            totalRecordCount: res.data.data ? res.data.data.count : 0,
            sortable: {
              order: "id",
              sort: "asc",
            },
          });
        });
    };

    const handleFilterByApplication = () => {
      searchTermName.value = "";
      searchTermProf.value = "";
      searchTermStatus.value = "";
      searchTermGender.value = "";
      searchTermRegion.value = "";
      searchTermFromDate.value = "";
      searchTermToDate.value = "";

      licenseTypeFilter.value == "newLicense"
        ? fetchNewLicenseReport([
            { key: "page", value: 0 },
            { key: "size", value: 10 },
            { key: "profession", value: searchTermProf.value },
            { key: "status", value: searchTermStatus.value },
            { key: "gender", value: searchTermGender.value },
            { key: "region", value: searchTermRegion.value },
            { key: "value", value: searchTermName.value },
            { key: "fromDate", value: searchTermFromDate.value },
            {
              key: "toDate",
              value:
                searchTermToDate.value && searchTermToDate.value != ""
                  ? searchTermToDate.value
                  : new Date().toISOString().slice(0, 10),
            },
          ])
        : licenseTypeFilter.value == "renewal"
        ? fetchRenewalReport([
            { key: "page", value: 0 },
            { key: "size", value: 10 },
            { key: "profession", value: searchTermProf.value },
            { key: "status", value: searchTermStatus.value },
            { key: "gender", value: searchTermGender.value },
            { key: "region", value: searchTermRegion.value },
            { key: "value", value: searchTermName.value },
            { key: "fromDate", value: searchTermFromDate.value },
            {
              key: "toDate",
              value:
                searchTermToDate.value && searchTermToDate.value != ""
                  ? searchTermToDate.value
                  : new Date().toISOString().slice(0, 10),
            },
          ])
        : licenseTypeFilter.value == "goodstanding"
        ? fetchGoodstandingReport([
            { key: "page", value: 0 },
            { key: "size", value: 10 },
            { key: "profession", value: searchTermProf.value },
            { key: "status", value: searchTermStatus.value },
            { key: "gender", value: searchTermGender.value },
            { key: "region", value: searchTermRegion.value },
            { key: "value", value: searchTermName.value },
            { key: "fromDate", value: searchTermFromDate.value },
            {
              key: "toDate",
              value:
                searchTermToDate.value && searchTermToDate.value != ""
                  ? searchTermToDate.value
                  : new Date().toISOString().slice(0, 10),
            },
          ])
        : "";
    };

    const fetchRenewalReport = async (apiParameters) => {
      reportTable.value.isLoading = true;
      await store
        .dispatch("report/getRenewalReport", [{ params: apiParameters }])
        .then((res) => {
          let tempData =
            res.data && res.data.data && res.data.data.rows ? res.data.data.rows : [];
          tableData = [];
          allData.value = [];
          exportData.value.data = [];
          exportData.value.type = "renewal";
          exportData.value.data = tempData;
          let tempProf = "";
          tempData.forEach((element) => {
            tempProf = "";
            element.educations.map((prof) => {
              prof.professionType ? (tempProf += prof.professionType.name + ", ") : "";
            });
            tableData.push({
              LicenseNumber: element.renewalCode ? element.renewalCode : "",
              FirstName: element.name ? element.name : "",
              MiddleName: element.fatherName ? element.fatherName : "",
              LastName: element.grandFatherName ? element.grandFatherName : "",
              Email: element.applicant ? element.applicant.emailAddress : "",
              Phone: element.applicant ? element.applicant.phoneNumber : "",
              LicenseStatus: element.applicationStatus
                ? element.applicationStatus.name
                : "",

              IssuedDate: element.certifiedDate ? element.certifiedDate.slice(0, 10) : "",

              ProfessionalType: tempProf,
              Gender: element.gender ? element.gender : "",
              OrganizationalUnit: element.region ? element.region.name : "",
              data: element ? element : {},
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
                label: "Email",
                field: "Email",
                width: "5%",
                sortable: true,
              },
              {
                label: "Phone",
                field: "Phone",
                width: "5%",
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
            rows: tableData,
            totalRecordCount: res.data.data ? res.data.data.count : 0,
            sortable: {
              order: "id",
              sort: "asc",
            },
          };
        });
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

    const fetchGoodstandingReport = async (apiParameters) => {
      reportTable.value.isLoading = true;
      await store
        .dispatch("report/getGoodstandingReport", [{ params: apiParameters }])
        .then((res) => {
          let tempData =
            res.data && res.data.data && res.data.data.rows ? res.data.data.rows : [];
          tableData = [];
          allData.value = [];
          exportData.value.data = [];
          exportData.value.type = "goodStanding";

          exportData.value.data = tempData;
          tempData.forEach((element) => {
            let prof = element.GSProfessionals.professionalTypes
              ? element.GSProfessionals.professionalTypes.name
              : "";
            tableData.push({
              LicenseNumber: element.goodStandingCode ? element.goodStandingCode : "",
              FirstName: element.name ? element.name : "",
              MiddleName: element.fatherName ? element.fatherName : "",
              LastName: element.grandFatherName ? element.grandFatherName : "",
              Email: element.applicant ? element.applicant.emailAddress : "",
              Phone: element.applicant ? element.applicant.phoneNumber : "",
              LicenseStatus: element.applicationStatus
                ? element.applicationStatus.name
                : "",

              PrintedDate: element.certifiedDate
                ? element.certifiedDate.slice(0, 10)
                : "",
              ProfessionalType: prof ? prof : "",
              Gender: element.gender ? element.gender : "",
              OrganizationalUnit: element.region ? element.region.name : "",
              data: element ? element : {},
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
                label: "Email",
                field: "Email",
                width: "5%",
                sortable: true,
              },
              {
                label: "Phone",
                field: "Phone",
                width: "5%",
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
                label: "Printed Date",
                field: "PrintedDate",
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
            rows: tableData,
            totalRecordCount: res.data.data ? res.data.data.count : 0,
            sortable: {
              order: "id",
              sort: "asc",
            },
          };
        });
    };

    const fetchDepartmentType = () => {
      store.dispatch("goodstanding/getDepartmentType").then((res) => {
        departments.value = res.data.data;
      });
    };

    const fetchRegion = () => {
      store.dispatch("report/getRegions").then((res) => {
        regions.value = res.data.data;
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

    const exportTable = async () => {
      let tempData = [];
      licenseTypeFilter.value == "newLicense"
        ? await fetchNewLicenseReport([
            { key: "page", value: 0 },
            { key: "size", value: 0 },
            { key: "profession", value: searchTermProf.value },
            { key: "status", value: searchTermStatus.value },
            { key: "gender", value: searchTermGender.value },
            { key: "region", value: searchTermRegion.value },
            { key: "value", value: searchTermName.value },
            { key: "fromDate", value: searchTermFromDate.value },
            {
              key: "toDate",
              value:
                searchTermFromDate.value && searchTermFromDate.value != ""
                  ? searchTermToDate.value
                  : new Date().toISOString().slice(0, 10),
            },
          ])
        : licenseTypeFilter.value == "renewal"
        ? await fetchRenewalReport([
            { key: "page", value: 0 },
            { key: "size", value: 0 },
            { key: "profession", value: searchTermProf.value },
            { key: "status", value: searchTermStatus.value },
            { key: "gender", value: searchTermGender.value },
            { key: "region", value: searchTermRegion.value },
            { key: "value", value: searchTermName.value },
            { key: "fromDate", value: searchTermFromDate.value },
            {
              key: "toDate",
              value:
                searchTermFromDate.value && searchTermFromDate.value != ""
                  ? searchTermToDate.value
                  : new Date().toISOString().slice(0, 10),
            },
          ])
        : licenseTypeFilter.value == "goodstanding"
        ? await fetchGoodstandingReport([
            { key: "page", value: 0 },
            { key: "size", value: 0 },
            { key: "profession", value: searchTermProf.value },
            { key: "status", value: searchTermStatus.value },
            { key: "gender", value: searchTermGender.value },
            { key: "region", value: searchTermRegion.value },
            { key: "value", value: searchTermName.value },
            { key: "fromDate", value: searchTermFromDate.value },
            {
              key: "toDate",
              value:
                searchTermFromDate.value && searchTermFromDate.value != ""
                  ? searchTermToDate.value
                  : new Date().toISOString().slice(0, 10),
            },
          ])
        : "";
      exportData.value.data.forEach((element) => {
        let tempdEdu = "";
        element.educations
          ? element.educations.forEach((element) => {
              tempdEdu += element.professionType
                ? element.professionType.name + " ,"
                : "";
            })
          : element.GSProfessionals
          ? (tempdEdu = element.GSProfessionals.professionalTypes.name)
          : "";
        tempdEdu = tempdEdu.substring(0, tempdEdu.length - 1);
        let licenseCode = "";
        exportData.value.type == "newLicense"
          ? (licenseCode = element.newLicenseCode)
          : exportData.value.type == "renewal"
          ? (licenseCode = element.renewalCode)
          : exportData.value.type == "goodStanding"
          ? (licenseCode = element.goodStandingCode)
          : "",
          tempData.push({
            "License Code": licenseCode,
            "First Name": element.name,
            "Father Name": element.fatherName,
            "Grand Father Name": element.grandFatherName,
            Gender: element.gender ? element.gender : "",
            "Birth Date": element.dateOfBirth ? element.dateOfBirth.slice(0, 10) : "",
            Nationality: element.nationality ? element.nationality.name : "",
            Region: element.region ? element.region.name : "",
            Professions: tempdEdu,
            "Certified Date": element.certifiedDate,
            "Application Status": element.applicationStatus
              ? element.applicationStatus.name
              : "",
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
        if (sort == "asc" && licenseTypeFilter.value == "newLicense") {
          fetchNewLicenseReport([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "profession", value: searchTermProf.value },
            { key: "status", value: searchTermStatus.value },
            { key: "gender", value: searchTermGender.value },
            { key: "region", value: searchTermRegion.value },
            { key: "value", value: searchTermName.value },
            { key: "fromDate", value: searchTermFromDate.value },
            {
              key: "toDate",
              value:
                searchTermToDate.value && searchTermToDate.value != ""
                  ? searchTermToDate.value
                  : new Date().toISOString().slice(0, 10),
            },
          ]);
        } else if (sort == "asc" && licenseTypeFilter.value == "renewal") {
          fetchRenewalReport([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "profession", value: searchTermProf.value },
            { key: "status", value: searchTermStatus.value },
            { key: "gender", value: searchTermGender.value },
            { key: "region", value: searchTermRegion.value },
            { key: "value", value: searchTermName.value },
            { key: "fromDate", value: searchTermFromDate.value },
            {
              key: "toDate",
              value:
                searchTermToDate.value && searchTermToDate.value != ""
                  ? searchTermToDate.value
                  : new Date().toISOString().slice(0, 10),
            },
          ]);
        } else if (sort == "asc" && licenseTypeFilter.value == "goodstanding") {
          fetchGoodstandingReport([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "profession", value: searchTermProf.value },
            { key: "status", value: searchTermStatus.value },
            { key: "gender", value: searchTermGender.value },
            { key: "region", value: searchTermRegion.value },
            { key: "value", value: searchTermName.value },
            { key: "fromDate", value: searchTermFromDate.value },
            {
              key: "toDate",
              value:
                searchTermToDate.value && searchTermToDate.value != ""
                  ? searchTermToDate.value
                  : new Date().toISOString().slice(0, 10),
            },
          ]);
        }
        reportTable.value.sortable.order = order;
        reportTable.value.sortable.sort = sort;
      }, 600);
    };

    const clearFilters = () => {
      searchTermName.value = "";
      searchTermProf.value = "";
      searchTermStatus.value = "";
      searchTermGender.value = "";
      searchTermRegion.value = "";
      searchTermFromDate.value = "";
      searchTermToDate.value = "";

      reportTable.value.isLoading = true;
      reportTable.value.rows = [];
      tableData.value = [];
      licenseTypeFilter.value == "newLicense"
        ? fetchNewLicenseReport([
            { key: "page", value: 0 },
            { key: "size", value: 10 },
          ])
        : licenseTypeFilter.value == "renewal"
        ? fetchGoodstandingReport([
            { key: "page", value: 0 },
            { key: "size", value: 10 },
          ])
        : licenseTypeFilter.value == "goodstanding"
        ? fetchGoodstandingReport([
            { key: "page", value: 0 },
            { key: "size", value: 10 },
          ])
        : "";
    };

    const searchApplication = () => {
      reportTable.value.isLoading = true;
      reportTable.value.rows = [];
      tableData = [];
      licenseTypeFilter.value == "newLicense"
        ? fetchNewLicenseReport([
            { key: "page", value: 0 },
            { key: "size", value: 10 },
            { key: "profession", value: searchTermProf.value },
            { key: "status", value: searchTermStatus.value },
            { key: "gender", value: searchTermGender.value },
            { key: "region", value: searchTermRegion.value },
            { key: "value", value: searchTermName.value },
            { key: "fromDate", value: searchTermFromDate.value },
            {
              key: "toDate",
              value:
                searchTermFromDate.value && searchTermFromDate.value != ""
                  ? searchTermToDate.value
                  : new Date().toISOString().slice(0, 10),
            },
          ])
        : licenseTypeFilter.value == "renewal"
        ? fetchRenewalReport([
            { key: "page", value: 0 },
            { key: "size", value: 10 },
            { key: "profession", value: searchTermProf.value },
            { key: "status", value: searchTermStatus.value },
            { key: "gender", value: searchTermGender.value },
            { key: "region", value: searchTermRegion.value },
            { key: "value", value: searchTermName.value },
            { key: "fromDate", value: searchTermFromDate.value },
            {
              key: "toDate",
              value:
                searchTermFromDate.value && searchTermFromDate.value != ""
                  ? searchTermToDate.value
                  : new Date().toISOString().slice(0, 10),
            },
          ])
        : licenseTypeFilter.value == "goodstanding"
        ? fetchGoodstandingReport([
            { key: "page", value: 0 },
            { key: "size", value: 10 },
            { key: "profession", value: searchTermProf.value },
            { key: "status", value: searchTermStatus.value },
            { key: "gender", value: searchTermGender.value },
            { key: "region", value: searchTermRegion.value },
            { key: "value", value: searchTermName.value },
            { key: "fromDate", value: searchTermFromDate.value },
            {
              key: "toDate",
              value:
                searchTermFromDate.value && searchTermFromDate.value != ""
                  ? searchTermToDate.value
                  : new Date().toISOString().slice(0, 10),
            },
          ])
        : "";
    };
    onMounted(() => {
      fetchNewLicenseReport([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
      ]);
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
      searchApplication,
      handleFilterByApplication,
      clearFilters,
      departments,
      reportTable,
      searchTermName,
      searchTermProf,
      searchTermStatus,
      licenseTypeFilter,
      searchTermGender,
      searchTermRegion,
      searchTermFromDate,
      searchTermToDate,
    };
  },
};
</script>
