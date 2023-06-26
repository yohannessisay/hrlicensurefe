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
          <a href="#" class="text-lg pointer-events-none text-grey-300">Addis Ababa Legacy Data</a>
        </li>
      </ol></reviewer-nav-bar
    >
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="container px-4 mx-auto sm:px-8">
        <div class="relative py-4">
          <h2 class="absolute left-0 text-2xl font-semibold leading-tight">
            View Addis Ababa legacy licenses
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
                <div class="relative flex flex-wrap items-stretch w-full mb-4 ml-4 input-group">
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
                    placeholder="File Number"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    v-model="searchTermFileNumber"
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
                      <option value="New">New</option>
                      <option value="Renew">Renew</option>
                    </select>
                  </div>

                  <div class="mb-3 ml-2 xl:w-full">
                    <label for="" class="ml-4">Education Level</label>
                    <select
                      class="block w-full px-6 py-2 ml-4 text-base font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded appearance-none form-select bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      @change="applyFilter()"
                      v-model="education_level"
                    >
                      <option value="all" selected>All</option>
                      <option
                        v-for="education_level in education_levels"
                        :key="education_level"
                        :value="education_level"
                      >
                        {{ education_level }}
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
                      <option value="M">Male</option>
                      <option value="F">Female</option>
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
      let searchTermFileNumber = ref("");
      let searchTermPhone = ref("");
      let licenseTypes = ref([]);
      let report = ref([]);

      let licenseTypeFilter = ref("");
      let education_level = ref("");
      let genderFilter = ref("");

      let education_levels = ref([]);

      const fetchLicenseReport = (apiParameters) => {
        console.log(apiParameters);
        store
          .dispatch("reviewer/getAALegacyData", {
            params: apiParameters.params ? apiParameters.params : apiParameters,
          })
          .then((res) => {
            tableData = [];
            let tempData = res && res.rows ? res.rows : [];
            exportData.value = tempData;
            if (apiParameters && apiParameters.isInitial == true && res.filters) {
              res.filters.forEach((element) => {
                education_levels.value.push(element.education_level);
              });
            }

            tempData.forEach((element) => {
              tableData.push({
                FileNumber: element.file_number ? element.file_number : "",
                AmharicName: element.amharic_name ? element.amharic_name : "",
                EnglishName: element.english_name ? element.english_name : "",
                EducationLevel: element.education_level ? element.education_level : "",
                RENumber: element.re_number ? element.re_number : "",
                Code: element.code ? element.code : "",
                Gender: element.gender ? element.gender : "",
                ExpireDate: element.expiration_date ? element.expiration_date : "",
                AmharicProf: element.amharic_profession_name ? element.amharic_profession_name : "",
                EnglishProf: element.english_profession_name ? element.english_profession_name : "",
                LicenseType: element.license_type ? element.license_type : "",
                CertifiedDate: element.certified_date ? element.certified_date : "",
                ExpirationDate: element.expiration_date ? element.expiration_date : "",
                Phone: element.phone_number ? element.phone_number : "",
              });
            });
            reportTable.value = {
              columns: [
                {
                  label: "File Number",
                  field: "FileNumber",
                  width: "5%",
                  sortable: true,
                },
                {
                  label: "Amharic Name",
                  field: "AmharicName",
                  width: "5%",
                  sortable: true,
                  isKey: true,
                },
                {
                  label: "English Name",
                  field: "EnglishName",
                  width: "10%",
                  sortable: true,
                },
                {
                  label: "EducationLevel",
                  field: "EducationLevel",
                  width: "10%",
                  sortable: true,
                },
                {
                  label: "RENumber",
                  field: "RENumber",
                  width: "10%",
                  sortable: true,
                },
                {
                  label: "Code",
                  field: "Code",
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
                  label: "ExpireDate",
                  field: "ExpireDate",
                  width: "5%",
                  sortable: true,
                },
                {
                  label: "AmharicProf",
                  field: "AmharicProf",
                  width: "5%",
                  sortable: true,
                },
                {
                  label: "EnglishProf",
                  field: "EnglishProf",
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
                  label: "CertifiedDate",
                  field: "CertifiedDate",
                  width: "5%",
                  sortable: true,
                },
                {
                  label: "ExpirationDate",
                  field: "ExpirationDate",
                  width: "5%",
                  sortable: true,
                },

                {
                  label: "Phone",
                  field: "Phone",
                  width: "5%",
                  sortable: true,
                },
              ],
              rows: tableData,
              totalRecordCount: res ? res.count : 0,
              sortable: {
                order: "FileNumber",
                sort: "asc",
              },
            };
          });
      };

      const exportTable = () => {
        let tempData = [];

        exportData.value.forEach((element) => {
          tempData.push({
            FileNumber: element.file_number ? element.file_number : "",
            AmharicName: element.amharic_name ? element.amharic_name : "",
            EnglishName: element.english_name ? element.english_name : "",
            EducationLevel: element.education_level ? element.education_level : "",
            RENumber: element.re_number ? element.re_number : "",
            Code: element.code ? element.code : "",
            Gender: element.gender ? element.gender : "",
            ExpireDate: element.expiration_date ? element.expiration_date : "",
            AmharicProf: element.amharic_profession_name ? element.amharic_profession_name : "",
            EnglishProf: element.english_profession_name ? element.english_profession_name : "",
            LicenseType: element.license_type ? element.license_type : "",
            CertifiedDate: element.certified_date ? element.certified_date : "",
            ExpirationDate: element.expiration_date ? element.expiration_date : "",
            Phone: element.phone_number ? element.phone_number : "",
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

        setTimeout(() => {
          reportTable.value.isReSearch = offset == undefined ? true : false;
          offset = offset / 10;
          if (sort == "asc") {
            fetchLicenseReport([
              { key: "page", value: offset },
              { key: "size", value: limit },
              { key: "fileNumber", value: searchTermFileNumber.value },
              { key: "phoneNumber", value: searchTermPhone.value },
              { key: "name", value: searchTerm.value },
              { key: "licenseType", value: licenseTypeFilter.value },
              { key: "education_level", value: education_level.value },
              { key: "gender", value: genderFilter.value },
            ]);
          } else {
            fetchLicenseReport([
              { key: "page", value: offset },
              { key: "size", value: limit },
              { key: "fileNumber", value: searchTermFileNumber.value },
              { key: "phoneNumber", value: searchTermPhone.value },
              { key: "name", value: searchTerm.value },
              { key: "licenseType", value: licenseTypeFilter.value },
              { key: "education_level", value: education_level.value },
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

        fetchLicenseReport([
          { key: "page", value: 0 },
          { key: "size", value: 10 },
          { key: "fileNumber", value: searchTermFileNumber.value },
          { key: "phoneNumber", value: searchTermPhone.value },
          { key: "name", value: searchTerm.value },
          { key: "licenseType", value: licenseTypeFilter.value },
          { key: "education_level", value: education_level.value },
          { key: "gender", value: genderFilter.value },
        ]);
      };

      const clearFilters = () => {
        searchTermFileNumber.value = "";
        searchTermPhone.value = "";
        searchTerm.value = "";
        licenseTypeFilter.value = "";
        education_level.value = "";
        genderFilter.value = "";
        reportTable.value.isLoading = true;
        reportTable.value.rows = [];

        fetchLicenseReport([
          { key: "page", value: 0 },
          { key: "size", value: 10 },
          { key: "fileNumber", value: searchTermFileNumber.value },
          { key: "phoneNumber", value: searchTermPhone.value },
          { key: "name", value: searchTerm.value },
          { key: "licenseType", value: licenseTypeFilter.value },
          { key: "education_level", value: education_level.value },
          { key: "gender", value: genderFilter.value },
        ]);
      };
      const searchApplication = () => {
        reportTable.value.isLoading = true;
        reportTable.value.rows = [];

        fetchLicenseReport([
          { key: "page", value: 0 },
          { key: "size", value: 10 },
          { key: "fileNumber", value: searchTermFileNumber.value },
          { key: "phoneNumber", value: searchTermPhone.value },
          { key: "name", value: searchTerm.value },
          { key: "licenseType", value: licenseTypeFilter.value },
          { key: "education_level", value: education_level.value },
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
        education_level,
        genderFilter,
        licenseTypes,
        doSearch,
        applyFilter,
        searchApplication,
        searchTermFileNumber,
        searchTermPhone,
        reportTable,
        searchTerm,
        education_levels,
      };
    },
  };
</script>
