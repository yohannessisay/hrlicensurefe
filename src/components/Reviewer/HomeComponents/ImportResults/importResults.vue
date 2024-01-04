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
            >Import and Manage National Exam Results</a
          >
        </li>
      </ol></reviewer-nav-bar
    >
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content" id="mainContent">
      <div class="bg-grey-200 p-4 rounded-lg">
        <div class="text-center">
          <h1 class="text-main-400 font-bold text-3xl">Upload</h1>
        </div>
        <div class="m-2 grid grid-row-2 grid-flow-col">
          <div class="rounded-lg">
            <h1 class="mt-4 ml-2 text-white text-lg">
              Import the required document and view the reults before finalizing it and
              saving.(Allowed file types are files name ending wit .XLSX and .CSV
              Eg-template.xlsx or template.csv)
            </h1>
            <label
              class="flex flex-col items-center mt-3 py-4 rounded-lg uppercase ease-linear cursor-pointer bg-main-400 transition-all duration-150"
            >
              <i class="fas fa-cloud-upload-alt fa-2x text-white">Select a file</i>

              <input
                type="file"
                onclick="this.value=null;"
                @change="importExcel"
                id="upload"
                class="hidden"
                accept=".xlsx, .csv"
              />
            </label>
          </div>
        </div>
      </div>

      <hr />
      <div style="text-align: center; font-weight: bold; font-size: 24px">OR</div>

      <hr />
      <div class="bg-grey-200 p-4 rounded-lg mb-8">
        <div class="text-center">
          <h1 class="text-primary-600 font-bold text-3xl">Download Template</h1>
        </div>
        <div class="m-2 grid grid-row-2 grid-flow-col">
          <div class="bg-grey-200 rounded-lg">
            <h1 class="mt-4 ml-2 text-white text-lg">
              Download a template file and fill it with your data by following the
              structure of the template file and come back here to upload your final
              result.
            </h1>
            <a href="/template/importTemplate.xlsx" download>
              <label
                class="flex flex-col items-center mt-3 py-4 bg-primary-600 rounded-lg cursor-pointer uppercase hover:bg-purple-600 hover:text-lightBlue-1000 ease-linear transition-all duration-150"
              >
                <i class="fas fa-cloud-download-alt fa-2x text-white"
                  >Click to download a template</i
                >
              </label>
            </a>
          </div>
        </div>
      </div>
      <div class="p-4 mb-8 max-w-full bg-white rounded-lg">
        <div class="relative overflow-x-auto sm:rounded-lg">
          <hr />
          <h1 class="ml-4 mt-4 text-xl">These are the previously added records</h1>

          <div>
            <div class="p-4 bg-grey-200 mb-4 rounded-lg">
              <h1 class="text-2xl mb-1">Filters</h1>
              <div class="grid lg:grid-cols-4 xl:gap-6 mt-4">
                <div class="mb-3 xl:w-full">
                  <label for="" class="">Name of institution</label>
                  <input
                    type="search"
                    class="form-control relative flex-auto min-w-0 block w-full px-6 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    @keyup.enter="applyFilter()"
                    placeholder="Start Searching For Name"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    v-model="searchTerm"
                  />
                </div>

                <div class="mb-3 xl:w-full mr-2">
                  <label for="" class="ml-4">Gender</label>
                  <select
                    class="form-select appearance-none block w-full px-6 ml-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    v-model="genderFilterValue"
                    @change="applyFilter()"
                    aria-label="Default select"
                  >
                    <option selected value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div class="mb-3 xl:w-full">
                  <label for="" class="ml-4">Result</label>
                  <select
                    class="form-select appearance-none block w-full px-6 ml-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    v-model="resultFilterValue"
                    @change="applyFilter()"
                    aria-label="Default select"
                  >
                    <option selected value="all">All</option>
                    <option value="pass">Pass</option>
                    <option value="fail">Fail</option>
                  </select>
                </div>
              </div>
              <h2 class="text-primary-800 text-lg">Applied Date</h2>
              <div class="grid grid-cols-4">
                <div class="mb-3">
                  <label for="" class="ml-2">From</label>
                  <input
                    v-model="searchTermFromDate"
                    type="date"
                    class="appearance-none block w-full px-6 ml-2 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                  />
                </div>
                <div class="mb-3 ml-2">
                  <label for="" class="ml-4"> To</label>
                  <input
                    type="date"
                    class="appearance-none block w-full px-6 ml-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    v-model="searchTermToDate"
                    @change="applyFilter()"
                    aria-label="Default select example"
                  />
                </div>
                <div class="ml-8 mt-4">
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
          </div>

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
    <!-- Main Content -->
  </section>
  <view-result :result="resultData"></view-result>

  <div class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden" id="errorModal">
    <div
      class="flex items-center justify-center min-height-100vh min-w-full pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-900 opacity-75" />
      </div>
      <span class="hidden md:inline-block md:align-middle md:h-screen">&#8203;</span>
      <div
        class="inline-block align-center bg-white rounded-lg text-left overflow-hidden transform max-w-3xl transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <h1 class="text-primary-600 font-bold m-4">
            This are the errors in the file you imported, please correct them accordingly
          </h1>
          <hr />

          <table class="w-full" style="display: block; height: 500px; overflow-y: scroll">
            <thead>
              <tr>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Row Number
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Column Number
                </th>

                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Error Column Data
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Error Message
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in Finalerrors" :key="row.id">
                <td
                  class="px-5 py-5 border-gray-200 text-sm"
                  v-for="item in row"
                  :key="item.id"
                >
                  <div class="flex">
                    <div class="ml-3">
                      <p style="color: red">
                        {{ item }}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-gray-200 px-4 mb-4 text-right">
          <button
            class="px-4 bg-red-300 text-white rounded hover:bg-white hover:text-primary-600 mr-2"
            @click="toggleErrorModal()"
          >
            <i class="fas fa-times"></i> Close
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden" id="modal">
    <div
      class="flex items-center justify-center min-height-100vh min-w-full pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-900 opacity-75" />
      </div>
      <span class="hidden md:inline-block md:align-middle md:h-screen">&#8203;</span>
      <div
        class="inline-block align-center bg-white rounded-lg text-left overflow-hidden transform max-w-3xl transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="vld-parent mt-4">
          <loading
            :active="isLoading"
            :is-full-page="false"
            :color="'#2F639D'"
            :opacity="1"
          ></loading>
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h1 class="text-primary-600 font-bold m-4">IMPORTED RESULTS</h1>
            <hr />
            <table
              class="w-full"
              style="display: block; height: 500px; overflow-y: scroll"
            >
              <thead>
                <tr>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Number
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Registration Number
                  </th>

                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    First Name
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Middle Name
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Last Name
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Sex
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Institution
                  </th>

                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Department
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Result
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    Date of Examination
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in finalData" :key="row.id">
                  <td v-for="item in row" :key="item.id">
                    <div class="flex">
                      <div class="ml-3">
                        <p
                          :class="
                            item === 'Fail' || item === 'fail'
                              ? 'px-5 py-5 border-gray-200 text-sm cell-red'
                              : ' px-5 py-5 border-gray-200text-sm'
                          "
                        >
                          {{ item }}
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="bg-gray-200 px-4 mb-4 text-right">
          <button
            class="px-4 bg-red-300 text-white rounded hover:bg-white hover:text-primary-600 mr-2"
            @click="toggleModal()"
          >
            <i class="fas fa-times"></i> Cancel
          </button>
          <button
            class="px-4 bg-primary-600 text-white rounded hover:bg-white hover:text-primary-600 mr-2"
            @click="addImported()"
          >
            <i class="fas fa-save"></i> Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import ReviewerNavBar from "./SharedComponents/navBar.vue";
import ReviewerSideBar from "./SharedComponents/sideNav.vue";
import viewResult from "./viewResult.vue";
import VueTableLite from "vue3-table-lite";
import { read } from "xlsx";
import { useToast } from "vue-toastification";
import transformSheets from "@/services/excelConverter";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  components: {
    ReviewerNavBar,
    ReviewerSideBar,
    VueTableLite,
    viewResult,
    Loading,
  },
  computed: {},

  setup() {
    const store = useStore();

    const toast = useToast();
    let searchData = ref();
    let expertLevelFilter = ref();
    const isUserManager = localStorage.getItem("role") == "UM";
    let expertLevels = ref([
      { name: "All", code: "all" },
      { name: "Federal", code: "FED" },
      { name: "Regional", code: "REG" },
    ]);

    let userTable = ref({});
    let Finalerrors = ref([]);
    let content = ref("");
    let errorModal = ref(false);
    let editModal = ref(false);
    let finalData = ref([]);
    let searchTermFromDate = ref("");
    let searchTermToDate = ref("");
    let importModal = ref(false);

    let tableData = [];
    let searchTerm = ref("");
    // let professions = ref([]);
    let institutions = ref([]);
    let firstName = ref("");
    let lastName = ref("");
    let department = ref("");
    let middleName = ref("");
    let isLoading = ref(false);
    let institution = ref("");
    let profession = ref("");
    let sex = ref("");
    let result = ref("");
    let registrationNumber = ref("");
    let dateOfExamination = ref("");
    let genderFilterValue = ref("all");
    let resultFilterValue = ref("all");
    let departmentFilterValue = ref("all");
    let allData = [];
    userTable.value = {
      isLoading: true,
    };
    const getResults = (apiParameters) => {
      // store.dispatch("reviewer/getProfessionalType").then((res) => {
      //   professions.value = res.data.data;
      // });

      store.dispatch("goodstanding/getInstitution").then((res) => {
        institutions.value = res.data.data;
      });

      store
        .dispatch("reviewer/getImported", [
          {
            params: apiParameters,
          },
        ])
        .then((res) => {
          allData = res && res.rows ? res.rows : [];
          allData.forEach((element) => {
            tableData.push({
              RegistrationNumber: element.registrationNo ? element.registrationNo : "",
              Institution: element.institution ? element.institution : "",
              FirstName: element.firstName ? element.firstName : "",
              LastName: element.lastName ? element.lastName : "",
              MiddleName: element.middleName ? element.middleName : "",
              Sex: element.sex ? element.sex : "",
              Department: element.department ? element.department : "",
              Result: element.result ? element.result : "",
              DateOfExamination: element.dateOfExamination
                ? element.dateOfExamination.slice(0, 10)
                : "",
            });
          });
          userTable.value = {
            columns: [
              {
                label: "Registration Number",
                field: "RegistrationNumber",
                width: "10%",
              },
              {
                label: "Institution",
                field: "Institution",
                width: "10%",
              },
              {
                label: "First Name",
                field: "FirstName",
                width: "10%",
              },
              {
                label: "Middle Name",
                field: "MiddleName",
                width: "10%",
              },
              {
                label: "Last Name",
                field: "LastName",
                width: "10%",
              },

              {
                label: "Gender",
                field: "Sex",
                width: "10%",
              },
              {
                label: "Department",
                field: "Department",
                width: "10%",
              },
              {
                label: "Date Of Examination",
                field: "DateOfExamination",
                width: "20%",
              },
              {
                label: "Result",
                field: "Result",
                width: "10%",
              },

              {
                label: "Action",
                field: "quick",
                width: "10%",
                display: function (row) {
                  return (
                    '<button data-bs-toggle="modal" data-bs-target="#viewResult" class="edit-btn hover:text-primary-600  inline-block px-6 py-2.5 bg-primary-700 text-white font-medium text-xs leading-tight uppercase rounded   hover:bg-blue-700 hover:  focus:bg-blue-700 focus:  focus:outline-none focus:ring-0 active:bg-blue-800 active:  transition duration-150 ease-in-out" data="' +
                    row +
                    '" ><i class="fa fa-eye"></i> View</button>'
                  );
                },
              },
            ],
            rows: tableData,
            totalRecordCount: res.count,
            sortable: {
              order: "id",
              sort: "asc",
            },
          };
        });
    };

    let resultData = ref({});

    const tableLoadingFinish = () => {
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
        resultData.value = row ? row : {};
        firstName.value = row.FirstName ? row.FirstName : "";
        lastName.value = row.LastName ? row.LastName : "";
        middleName.value = row.MiddleName ? row.MiddleName : "";
        institution.value = row.Institution ? row.Institution : "";
        sex.value = row.Sex ? row.Sex.replace(/\s/g, "") : "";
        registrationNumber.value = row.RegistrationNumber ? row.RegistrationNumber : "";
        department.value = row.Department ? row.Department : "";
        dateOfExamination.value = row.DateOfExamination
          ? row.DateOfExamination.slice(0, 10)
          : "";
        result.value = row.Result ? row.Result : "";
      }
    };

    const toggleModal = () => {
      document.getElementById("modal").classList.toggle("hidden");
      document.getElementById("mainContent").classList.toggle("blurBackground");
      document.getElementById("mainSidebar").classList.toggle("blurBackground");
      document.getElementById("mainNav").classList.toggle("blurBackground");
    };

    const toggleErrorModal = () => {
      document.getElementById("errorModal").classList.toggle("hidden");
      document.getElementById("mainContent").classList.toggle("blurBackground");
      document.getElementById("mainSidebar").classList.toggle("blurBackground");
      document.getElementById("mainNav").classList.toggle("blurBackground");
    };

    const importExcel = async () => {
      let file = [];
      let errors = [];
      let hasNumber = /\d/;
      file = document.getElementById("upload").files[0];

      let reader = new FileReader();
      let extension = file.name.split(".").pop().toLowerCase();

      if (extension === "xlsx" || extension === "xls" || extension === "csv") {
        reader.readAsBinaryString(file);
        reader.onload = async (event) => {
          let data = event.target.result;

          let workbook = read(data, { type: "binary" });

          let sheets = workbook.Sheets;
          let tempDate = new Date(sheets.Sheet1.A1.w);
          tempDate = tempDate.toISOString().slice(0, 10);
          let transformed = await transformSheets(sheets, workbook);

          let department = transformed[1][0];

          if (transformed.length < 2) {
            transformed.shift();
            transformed.pop();
          } else {
            transformed.shift();
            transformed.shift();
            transformed.shift();
          }

          for (let i = 0; i < transformed.length; i++) {
            transformed[i][7] = department;
            transformed[i][9] = tempDate;

            if (hasNumber.test(transformed[i][2])) {
              errors.push({
                row: i,
                column: 3,
                columnData: transformed[i][2],
                errorMessage: "Number is not allowed in name",
              });
            }
            if (hasNumber.test(transformed[i][3])) {
              errors.push({
                row: i,
                column: 4,
                columnData: transformed[i][3],
                errorMessage: "Number is not allowed in name",
              });
            }

            if (hasNumber.test(transformed[i][4])) {
              errors.push({
                row: i,
                column: 5,
                columnData: transformed[i][4],
                errorMessage: "Number is not allowed in name",
              });
            }
            if (hasNumber.test(transformed[i][5])) {
              errors.push({
                row: i,
                column: 6,
                columnData: transformed[i][5],
                errorMessage:
                  "Number is not allowed in gender(only female or male is allowed)",
              });
            }

            if (hasNumber.test(transformed[i][8])) {
              errors.push({
                row: i,
                column: 8,
                columnData: transformed[i][8],
                errorMessage:
                  "Number is not allowed in result(only pass or fail is allowed)",
              });
            }

            if (transformed[i][10] === "Pass" || transformed[i][9] === "pass") {
              transformed[i].result = "pass";
            } else transformed[i].result = "fail";
          }
          console.log(transformed);
          content.value = transformed;

          if (errors.length > 0) {
            errorModal.value = true;
            Finalerrors.value = errors;
            toggleErrorModal();
            return;
          } else {
            finalData.value = transformed;
            importModal.value = true;
            toggleModal();
          }
        };
      } else {
        toast.error("The file type chosen is incorrect", {
          timeout: 5000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true,
        });
      }

      return;
    };
    const addImported = () => {
      isLoading.value = true;
      let add = JSON.parse(JSON.stringify(finalData.value));
      let finalArray = [];
      let today = new Date();
      let createdAt = today.toISOString();
      let updatedAt = today.toISOString();
      add.forEach((element) => {
        let tempObj = {
          registrationNo: element[1],
          firstName: element[2],
          middleName: element[3],
          institution: element[6],
          lastName: element[4],
          sex: element[5],
          profession: "",
          dateOfExamination: element[9],
          result: element[8],
          department: element[7],
          createdAt: createdAt,
          updatedAt: updatedAt,
        };
        finalArray.push(tempObj);
      });
      let idArray = [];
      finalArray.forEach((element) => {
        idArray.push(element.registrationNo);
      });

      store.dispatch("reviewer/getMultiple", idArray).then((res) => {
        let checkforExisting = res.data.data;
        let errorForExisting = [];
        let timeOut = 1000;
        if (res.data.status === "Success") {
          for (let i = 0; i < finalArray.length; i++) {
            for (let j = 0; j < checkforExisting.length; j++) {
              if (finalArray[i].registrationNo === checkforExisting[j].registrationNo) {
                timeOut += 2000;
                errorForExisting.push({
                  row: i,
                  column: 1,
                  columnData: finalArray[i].registrationNo,
                  errorMessage: "There is an already existing record with that id",
                });
                toast.error(
                  "There is an already existing record with id" +
                    finalArray[i].registrationNo +
                    "",
                  {
                    timeout: 10000 + timeOut,
                    position: "bottom-center",
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    icon: true,
                  }
                );
                isLoading.value = false;
              }
            }
          }
        }

        if (errorForExisting.length > 0) {
          Finalerrors.value = errorForExisting;
          errorModal.value = true;
          return;
        } else {
          store.dispatch("reviewer/addImported", finalArray).then(() => {
            toast.success("Result/s added successfully", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            isLoading.value = false;
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          });
        }
      });
    };

    const applyFilter = () => {
      userTable.value.isLoading = true;
      tableData = [];
      getResults([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "institution", value: searchTerm.value },
        { key: "gender", value: genderFilterValue.value },
        { key: "result", value: resultFilterValue.value },
        { key: "department", value: departmentFilterValue.value },
        { key: "fromDate", value: searchTermFromDate.value },
        {
          key: "toDate",
          value:
            searchTermFromDate.value && searchTermFromDate.value != ""
              ? searchTermToDate.value
              : new Date().toISOString().slice(0, 10),
        },
      ]);
    };

    const clearFilters = () => {
      searchTerm.value = "";
      searchTermFromDate.value = "";
      searchTermToDate.value = "";
      userTable.value.isLoading = true;
      userTable.value.rows = [];
      tableData = [];
      getResults([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "institution", value: searchTerm.value },
        { key: "gender", value: genderFilterValue.value },
        { key: "result", value: resultFilterValue.value },
        { key: "fromDate", value: searchTermFromDate.value },
        { key: "department", value: departmentFilterValue.value },
        { key: "toDate", value: searchTermToDate.value },
      ]);
    };

    const searchApplication = () => {
      userTable.value.isLoading = true;
      userTable.value.rows = [];
      tableData = [];
      getResults([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "institution", value: searchTerm.value },
        { key: "gender", value: genderFilterValue.value },
        { key: "result", value: resultFilterValue.value },
        { key: "department", value: departmentFilterValue.value },
        { key: "fromDate", value: searchTermFromDate.value },
        {
          key: "toDate",
          value:
            searchTermFromDate.value && searchTermFromDate.value != ""
              ? searchTermToDate.value
              : new Date().toISOString().slice(0, 10),
        },
      ]);
    };

    const doSearch = (offset, limit, order, sort) => {
      setTimeout(() => {
        userTable.value.isReSearch = offset == undefined ? true : false;
        offset = offset / 10;
        if (sort == "asc") {
          getResults([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "institution", value: searchTerm.value },
            { key: "gender", value: genderFilterValue.value },
            { key: "result", value: resultFilterValue.value },
            { key: "department", value: departmentFilterValue.value },
            { key: "fromDate", value: searchTermFromDate.value },
            {
              key: "toDate",
              value:
                searchTermFromDate.value && searchTermFromDate.value != ""
                  ? searchTermToDate.value
                  : new Date().toISOString().slice(0, 10),
            },
          ]);
        } else {
          getResults([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "institution", value: searchTerm.value },
            { key: "gender", value: genderFilterValue.value },
            { key: "result", value: resultFilterValue.value },
            { key: "department", value: departmentFilterValue.value },
            { key: "fromDate", value: searchTermFromDate.value },
            {
              key: "toDate",
              value:
                searchTermFromDate.value && searchTermFromDate.value != ""
                  ? searchTermToDate.value
                  : new Date().toISOString().slice(0, 10),
            },
          ]);
        }
        userTable.value.sortable.order = order;
        userTable.value.sortable.sort = sort;
      }, 200);
    };

    onMounted(() => {
      getResults([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
      ]);
    });

    return {
      getResults,
      doSearch,
      searchData,
      isUserManager,
      userTable,
      genderFilterValue,
      resultFilterValue,
      tableLoadingFinish,
      searchTerm,
      expertLevels,
      importExcel,
      rowClicked,
      clearFilters,
      searchApplication,
      content,
      errorModal,
      editModal,
      resultData,
      finalData,
      importModal,
      firstName,
      lastName,
      middleName,
      institution,
      profession,
      result,
      isLoading,
      sex,
      applyFilter,
      searchTermFromDate,
      searchTermToDate,
      addImported,
      registrationNumber,
      dateOfExamination,
      toggleModal,
      toggleErrorModal,
      Finalerrors,
      expertLevelFilter,
    };
  },
};
</script>

<style>
.blurBackground {
  filter: blur(3px);
}
</style>
