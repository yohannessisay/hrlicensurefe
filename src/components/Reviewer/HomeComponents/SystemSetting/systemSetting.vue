<template>
  <!-- Sidebar -->
  <reviewer-side-bar> </reviewer-side-bar>

  <!-- Sidebar -->
  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar><h2>System Setting</h2></reviewer-nav-bar>
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="container mx-auto px-4 sm:px-8">
        <div class="relative py-4">
          <p class="absolute left-0 text-2xl font-semibold leading-tight">
            View and manage regions,zones and woredas found throughout the
            system
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
              <div class="mb-3 xl:w-full">
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

                
                  <div class="flex items-start">
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
                        class="nav-item flex-grow text-center"
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
                    <div class="tab-content" id="tabs-tabContentVertical">
                      <div
                        class="tab-pane fade show active"
                        id="tabs-homeVertical"
                        role="tabpanel"
                        aria-labelledby="tabs-home-tabVertical"
                      >
                      
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
                  :is-loading="userTable.isLoading"
                  :columns="userTable.columns"
                  :rows="userTable.rows"
                  :total="userTable.totalRecordCount"
                  :sortable="userTable.sortable"
                  @is-finished="tableLoadingFinish"
                  @row-clicked="rowClicked"
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
                        Tab 2 content vertical
                      </div>
                      <div
                        class="tab-pane fade"
                        id="tabs-messagesVertical"
                        role="tabpanel"
                        aria-labelledby="tabs-profile-tabVertical"
                      >
                        Tab 3 content vertical
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
    <add-modal></add-modal>

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
import VueTableLite from "vue3-table-lite";

import moment from "moment";
import { saveAs } from "file-saver";
import AddModal from "./Modals/addLocationModal.vue";
import "@ocrv/vue-tailwind-pagination/dist/style.css";

export default {
  components: {
    ReviewerNavBar,
    ReviewerSideBar,
    VueTableLite,
    AddModal,
  },
  computed: {
    moment: () => moment,
    getAllassignedToOthers() {
      return store.getters["reviewer/getAssignedForEveryOneSearched"];
    },
  },
  setup() {
    const store = useStore();
    let allData = ref([]);
    let searchData = ref();
    let expertLevelFilter = ref();

    let userTable = ref({ isLoading: true });
    let modalData = ref({ change: 0 });
    let tableData = reactive([]);
    const searchTerm = ref("");
    let expertlevelCode = ref("");
    let departmentValue = ref("");
    let professionTypeValue = ref("");
    let regionValue = ref("");
    let genderValue = ref("");
    let applicationStatusValue = ref("");
    let startDateValue = ref("1900-01-01");
    let endDateValue = ref("2100-01-01");
    let selectedApplicationType = ref("");

    let checked = ref({
      newLicense: true,
      renewal: true,
      goodStanding: true,
    });

    let selectedApplication = ref({
      newLicense: true,
      renewal: false,
      goodStanding: false,
      verification: false,
    });

    let currentPage = ref(1);
    let totalCount = ref();
    let report = ref([]);
    let selectBackgroundColor = ref("newLicense");

    let searchingState = ref(false);

    let searchedValue = ref("");

    let indexValue = ref(0);
    let paginationSize = ref(10);
    const paginationSizeList = [10, 25, 50, 100];
    let reportData = ref([]);
    let reportForRegions = ref([]);

    let renewalData = ref([]);
    let newLicenseData = ref([]);
    let goodStandingData = ref([]);

    const pageChanged = (event) => {
      currentPage.value = event;
      indexValue.value = event - 1;
      paginateReport(reportData.value, indexValue.value);
    };
    const handlePagSize = () => {
      currentPage.value = 1;
      indexValue.value = 0;
      paginateReport(reportData.value, indexValue.value);
    };

    const handleCheckBoxClick = (type, event) => {
      if (!event.target.checked && type == "renewal") {
        let filterValue = reportData.value.filter((report) => {
          return !report.renewalCode;
        });
        paginateReport(filterValue, 0);
        reportData.value = filterValue;
        allData.value = filterValue;
      } else if (!event.target.checked && type == "newLicense") {
        let filterValue = reportData.value.filter((report) => {
          return !report.newLicenseCode;
        });
        paginateReport(filterValue, 0);
        reportData.value = filterValue;
        allData.value = filterValue;
      } else if (!event.target.checked && type == "goodStanding") {
        let filterValue = reportData.value.filter((report) => {
          return !report.goodStandingCode;
        });
        paginateReport(filterValue, 0);
        reportData.value = filterValue;
        allData.value = filterValue;
      } else if (event.target.checked && type == "renewal") {
        let mockRenewalData = reportData.value;
        mockRenewalData.push(...renewalData.value);
        reportData.value = mockRenewalData;
        allData.value = mockRenewalData;
        paginateReport(allData.value, 0);
      } else if (event.target.checked && type == "newLicense") {
        let mockNewLicenseData = reportData.value;
        mockNewLicenseData.push(...newLicenseData.value);
        reportData.value = mockNewLicenseData;
        allData.value = mockNewLicenseData;
        paginateReport(reportData.value, 0);
      } else if (event.target.checked && type == "goodStanding") {
        let mockGoodStandingData = reportData.value;
        mockGoodStandingData.push(...goodStandingData.value);
        reportData.value = mockGoodStandingData;
        allData.value = mockGoodStandingData;
        paginateReport(reportData.value, 0);
      }
    };

    let departments = ref([]);
    let professions = ref([]);
    let expertLevels = ref([
      { name: "Federal", id: 3, code: "FED" },
      { name: "Regional", id: 4, code: "REG" },
    ]);
    let regions = ref([]);
    let zones = ref([]);
    let woredas = ref([]);
    let applicationStatuses = ref([]);

    let filter = ref({
      deptType: "",
      profType: "",
      gender: "",
      region: "",
      zone: "",
      woreda: "",
      expertLevel: "",
      status: "",
      startDate: "",
      endDate: "",
      all: "",
    });

    let loader = ref(false);

    const tableLoadingFinish = () => {
      userTable.value.isLoading = false;
      userTable.value.isLoading = false;
      let elements = document.getElementsByClassName("edit-btn");

      Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains("edit-btn")) {
          element.addEventListener("click", rowClicked());
        }
      });
    };

    const rowClicked = (row) => {
      if (row != undefined) {
        row = JSON.parse(JSON.stringify(row));
        modalData.value.change++;
        modalData.value.data = row ? row : {};
      }
    };

    const changeBackgroundColor = (title) => {
      selectBackgroundColor.value = title;
    };

    const fetchNewLicenseReport = () => {
      store.dispatch("report/getNewLicenseReport").then((res) => {
        newLicenseData.value = res.data.data;
        reportData.value.push(...res.data.data);

        res.data.data.forEach((element) => {
          tableData.push({
            id: element.id ? element.id : "",
            ParentLocation: element.name ? element.name : "",
            MiddleName: element.fatherName ? element.fatherName : "",
          
            data: element ? element : {},
          });
        });
        allData.value = tableData;
        userTable.value = {
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
              label: "Parent Location",
              field: "ParentLocation",
              width: "10%",
              sortable: true,
            },
            {
              label: "Status",
              field: "Status",
              width: "10%",
              sortable: true,
            },
            
          ],
          rows: tableData,
          totalRecordCount: allData.value.length,
          sortable: {
            order: "id",
            sort: "asc",
          },
        };
      });
    };
    const handleFilterByApplication = (applicationType) => {
      switch (applicationType) {
        case "newLicense": {
          userTable.value.isLoading = true;
          userTable.value.rows = computed(() => {});
          tableData = [];
          fetchNewLicenseReport();
          break;
        }
        case "verification": {
          userTable.value.isLoading = true;
          userTable.value.rows = computed(() => {});
          tableData = [];
          fetchVerificationReport();
          break;
        }
        case "renewal": {
          userTable.value.isLoading = true;
          userTable.value.rows = computed(() => {});
          tableData = [];
          fetchRenewalReport();
          break;
        }
        case "goodStanding": {
          userTable.value.isLoading = true;
          userTable.value.rows = computed(() => {});
          tableData = [];
          fetchGoodstandingReport();
          break;
        }
      }
    };
    const fetchRenewalReport = () => {
      store.dispatch("report/getRenewalReport").then((res) => {
        newLicenseData.value = res.data.data;
        reportData.value.push(...res.data.data);

        res.data.data.forEach((element) => {
          tableData.push({
            id: element.id ? element.id : "",
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

            ProfessionalType:
              element.licenseProfessionalTypes &&
              element.licenseProfessionalTypes[0] &&
              element.licenseProfessionalTypes[0].professionalTypes
                ? element.licenseProfessionalTypes[0].professionalTypes.name
                : "",
            Gender: element.gender ? element.gender : "",
            OrganizationalUnit: element.region ? element.region.name : "",
            data: element ? element : {},
          });
        });
        allData.value = tableData;
        userTable.value = {
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
          totalRecordCount: allData.value.length,
          sortable: {
            order: "id",
            sort: "asc",
          },
        };
      });
    };

    const fetchVerificationReport = () => {
      store.dispatch("report/getVerificationReport").then((res) => {
        if (res.data.message == "No verifications found!") {
          userTable.value = {
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
            rows: [],
            totalRecordCount: 0,
            sortable: {
              order: "id",
              sort: "asc",
            },
          };
        } else {
          newLicenseData.value = res.data.data;
          reportData.value.push(...res.data.data);
          res.data.data.forEach((element) => {
            tableData.push({
              id: element.id ? element.id : "",
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

              ProfessionalType:
                element.licenseProfessionalTypes &&
                element.licenseProfessionalTypes[0] &&
                element.licenseProfessionalTypes[0].professionalTypes
                  ? element.licenseProfessionalTypes[0].professionalTypes.name
                  : "",
              Gender: element.gender ? element.gender : "",
              OrganizationalUnit: element.region ? element.region.name : "",
              data: element ? element : {},
            });
          });
          allData.value = tableData;
          userTable.value = {
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
            totalRecordCount: allData.value.length,
            sortable: {
              order: "id",
              sort: "asc",
            },
          };
        }
      });
    };
    const fetchGoodstandingReport = () => {
      store.dispatch("report/getGoodstandingReport").then((res) => {
        newLicenseData.value = res.data.data;
        reportData.value.push(...res.data.data);

        res.data.data.forEach((element) => {
          tableData.push({
            id: element.id ? element.id : "",
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

            ProfessionalType:
              element.licenseProfessionalTypes &&
              element.licenseProfessionalTypes[0] &&
              element.licenseProfessionalTypes[0].professionalTypes
                ? element.licenseProfessionalTypes[0].professionalTypes.name
                : "",
            Gender: element.gender ? element.gender : "",
            OrganizationalUnit: element.region ? element.region.name : "",
            data: element ? element : {},
          });
        });
        allData.value = tableData;
        userTable.value = {
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
          totalRecordCount: allData.value.length,
          sortable: {
            order: "id",
            sort: "asc",
          },
        };
      });
    };

    const paginateReport = (reportValue, index) => {
      report.value = reportValue.slice(
        index * paginationSize.value,
        index * paginationSize.value + paginationSize.value
      );
      totalCount.value = reportValue.length;
    };

    const fetchDepartmentType = () => {
      store.dispatch("goodstanding/getDepartmentType").then((res) => {
        departments.value = res.data.data;
      });
    };

    const fetchProfessionType = (deptId) => {
      store
        .dispatch("goodstanding/getProfessionalTypes", deptId)
        .then((res) => {
          professions.value = res.data.data;
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
            application.code == "CONF"
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
      paginateReport(filterByName, 0);
      reportData.value = filterByName;
    };

    const clearSearch = () => {
      searchingState.value = false;
      searchedValue.value = "";
      reportData.value = allData.value;
      paginateReport(reportData.value, 0);
    };

    const filterProfessionType = (profType) => {
      professionTypeValue.value = profType;
      filterApplication();
    };
    const filterDpartmentType = (department) => {
      if (department) {
        departmentValue.value = department.name;
        professionTypeValue.value = "";
        filterApplication();
        fetchProfessionType(department.id);
      } else {
        departmentValue.value = "";
        professionTypeValue.value = "";
        filterApplication();
      }
    };

    const filterExpertLevel = (code) => {
      expertlevelCode.value = code;
      filterApplication();
    };

    const filterRegions = (name) => {
      if (name == "all") {
        tableData = allData.value;
        userTable.value.rows = computed(() => tableData);
      } else {
        tableData = allData.value.filter((stat) => {
          return stat.OrganizationalUnit.toLowerCase() == name.toLowerCase();
        });
        userTable.value.rows = computed(() => tableData);
      }
    };

    const filterRegionalApplication = () => {
      let filterRegion = reportForRegions.value.filter((report) => {
        return report.region.name.includes(regionValue.value);
      });
      paginateReport(filterRegion, 0);
      reportData.value = filterRegion;
    };
    const filterApplication = () => {
      let filterValue = allData.value.filter((report) => {
        return genderValue.value
          ? report.gender === genderValue.value &&
              report.applicationStatus.name.includes(
                applicationStatusValue.value
              ) &&
              report.licenseProfessionalTypes[0].professionalTypes.department.name.includes(
                departmentValue.value
              ) &&
              report.licenseProfessionalTypes[0].professionalTypes.name.includes(
                professionTypeValue.value
              ) &&
              report.expertLevels.code.includes(expertlevelCode.value) &&
              !moment(startDateValue.value).isAfter(
                report.applicationStatus.updatedAt
              ) &&
              moment(endDateValue.value).isSameOrAfter(
                report.applicationStatus.updatedAt
              )
          : report.gender.includes(genderValue.value) &&
              report.applicationStatus.name.includes(
                applicationStatusValue.value
              ) &&
              report.licenseProfessionalTypes[0].professionalTypes.department.name.includes(
                departmentValue.value
              ) &&
              report.licenseProfessionalTypes[0].professionalTypes.name.includes(
                professionTypeValue.value
              ) &&
              report.expertLevels.code.includes(expertlevelCode.value) &&
              !moment(startDateValue.value).isAfter(
                report.applicationStatus.updatedAt
              ) &&
              moment(endDateValue.value).isSameOrAfter(
                report.applicationStatus.updatedAt
              );
      });
      paginateReport(filterValue, 0);
      reportData.value = filterValue;
      reportForRegions.value = reportData.value;
    };
    const filterProfession = (profType) => {
      var tableFilter = [];
      tableFilter = report.value;
      var tableFilter2 = [];
      for (var i = 0; i < tableFilter.length; i++) {
        if (tableFilter[i].professionalTypes != null) {
          tableFilter2.push(tableFilter[i]);
        }
      }
      if (profType == null) {
        return;
      } else {
        report.value = tableFilter2.filter(function (e) {
          return e.professionalTypes.name == profType;
        });
      }
    };

    const filterZone = (zone) => {
      fetchWoredas(zone.id);
      var tableFilter = [];
      tableFilter = report.value;
      var tableFilter2 = [];
      for (var i = 0; i < tableFilter.length; i++) {
        if (tableFilter[i].zone.name != null) {
          tableFilter2.push(tableFilter[i]);
        }
      }
      if (zone.name == null) {
        report.value = store.getter["report/getReport"];
      } else {
        report.value = tableFilter2.filter(function (e) {
          return e.zone.name == zone.name;
        });
      }
    };
    const filterWoreda = (woreda) => {
      var tableFilter = [];
      tableFilter = report.value;
      var tableFilter2 = [];
      for (var i = 0; i < tableFilter.length; i++) {
        if (tableFilter[i].woreda.name != null) {
          tableFilter2.push(tableFilter[i]);
        }
      }
      if (woreda.name == null) {
        report.value = store.getter["report/getReport"];
      } else {
        report.value = tableFilter2.filter(function (e) {
          return e.woreda.name == woreda.name;
        });
      }
    };

    const filterAppStatus = (status) => {
      tableData = allData.value.filter((stat) => {
        return stat.LicenseStatus.toLowerCase() == status.toLowerCase();
      });
      userTable.value.rows = computed(() => tableData);
    };

    const filterGender = (status) => {
      tableData = allData.value.filter((stat) => {
        return stat.Gender.toLowerCase() == status.toLowerCase();
      });
      userTable.value.rows = computed(() => tableData);
    };
    onMounted(() => {
      fetchNewLicenseReport();
      fetchRegion();
      fetchApplicationStatuses();
      fetchDepartmentType();
    });
    return {
      loader,
      report,
      exportTable,
      fetchNewLicenseReport,
      fetchRenewalReport,
      fetchVerificationReport,
      fetchGoodstandingReport,
      fetchRegion,
      fetchZones,
      fetchWoredas,
      fetchApplicationStatuses,
      professions,
      regions,
      zones,
      woredas,
      applicationStatuses,
      filter,
      filterProfession,
      filterGender,
      filterAppStatus,
      filterZone,
      selectedApplication,
      changeBackgroundColor,
      currentPage,
      totalCount,
      paginationSize,
      paginationSizeList,
      pageChanged,
      handlePagSize,
      selectBackgroundColor,
      filterProfessionType,
      checked,
      handleCheckBoxClick,
      selectedApplicationType,
      handleFilterByApplication,
      departments,
      filterDpartmentType,
      expertLevels,
      filterExpertLevel,
      filterRegions,
      searchByName,
      searchedValue,
      clearSearch,
      tableLoadingFinish,
      rowClicked,
      searchingState,

      searchData,
      userTable,
      searchTerm,
      modalData,
      expertLevelFilter,
    };
  },
};
</script>
