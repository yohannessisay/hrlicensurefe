<template>
  <div
    class="
      p-4
      max-w-full
      bg-white
      rounded-lg
      border border-gray-200
      shadow-md
      dark:bg-gray-200 dark:border-gray-700
    "
  >
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="m-2 grid grid-row-2 grid-flow-col">
        <div class="bg-green-200 rounded-lg">
          <h1 class="mt-4 ml-2">
            Import the required documnet and view the reults before finalizing
            it and saving.(Allowed file types are .XLSX and .CSV)
          </h1>
          <label
            class="
              flex flex-col
              items-center
              mt-3
              py-4
              bg-grey-100
              rounded-lg
              shadow-md
              uppercase
              hover:bg-purple-600 hover:text-lightBlue-1000
              ease-linear
              transition-all
              duration-150
            "
          >
            <i class="fas fa-cloud-upload-alt fa-1x">Select a file</i>

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
      <hr />
      <div style="text-align: center; font-weight: bold; font-size: 24px">
        OR
      </div>

      <hr />

      <div class="m-2 grid grid-row-2 grid-flow-col">
        <div class="bg-green-200 rounded-lg">
          <h1 class="mt-4 ml-2">
            Download a template and fill it with the required data and come back
            here to upload it.
          </h1>
          <a href="/template/importTemplate.xlsx" download>
            <label
              class="
                flex flex-col
                items-center
                mt-3
                py-4
                bg-primary-400
                rounded-lg
                shadow-md
                uppercase
                hover:bg-purple-600 hover:text-lightBlue-1000
                ease-linear
                transition-all
                duration-150
              "
            >
              <i class="fas fa-cloud-upload-alt fa-1x"
                >Click to download a template</i
              >
            </label>
          </a>
        </div>
      </div>

      <hr />
      <h1 class="ml-4 mt-4">These are the previously added records</h1>

      <div>
        <div class="blue ml-4 mt-4">
          <input
            type="text"
            id="fname"
            name="fname"
            v-model="searchNameVal"
            class="mr-6"
            placeholder="search by name"
          />
        </div>
        <div class="grid lg:grid-cols-4 xl:gap-6 ml-4 mt-4">
          <div class="relative z-0 w-full mb-6 group">
            <div class="flex flex-col mb-medium w-22 mr-4">
              <label class="text-primary-700">Institution</label>
              <select
                class="max-w-1xl"
                v-model="vFilterInstitution"
                @change="filterInstitution()"
                clearable
              >
                <option value="instfilterAll">All</option>
                <option
                  v-for="inst in institutions"
                  v-bind:key="inst.id"
                  v-bind:value="inst.name"
                >
                  {{ inst.name }}
                </option>
              </select>
            </div>
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <div class="flex flex-col mb-medium w-22 mr-4">
              <label class="text-primary-700">Profession</label>
              <select
                class="max-w-1xl"
                v-model="vFilterProfession"
                @change="filterProfession()"
              >
                <option value="proffilterAll">All</option>
                <option
                  v-for="profession in professions"
                  :value="profession.name"
                  :key="profession.id"
                >
                  {{ profession.name }}
                </option>
              </select>
            </div>
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <div class="flex flex-col mb-medium w-44 mr-4">
              <label class="text-primary-700">Sex</label>
              <select
                class="max-w-1xl"
                v-model="vFilterGender"
                @change="filterGender()"
              >
                <option value="genderfilterAll">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <div class="flex flex-col mb-medium w-44 mr-4">
              <label class="text-primary-700">Result</label>
              <select
                class="max-w-1xl"
                v-model="vFilterResult"
                @change="filterResult()"
              >
                <option value="resultfilterAll">All</option>
                <option value="pass">Pass</option>
                <option value="fail">Fail</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <label class="text-primary-700 ml-4">Rows per page: </label>
      <select
        class="max-w-3xl mb-4"
        v-model="paginationSize"
        @change="handlePagSize()"
        style="
          padding: 0px 35px 0px 5px;
          border: none;
          border-radius: unset;
          border-bottom: 2px solid lightblue;
          margin-left: 8px;
        "
      >
        <option
          v-for="size in paginationSizeList"
          v-bind:key="size"
          v-bind:value="size"
        >
          {{ size }}
        </option>
      </select>

      <Spinner v-if="previousTableLoading" />

      <table
        class="w-full ml-4 show-on-print"
        style="display: inline-table; height: 500px; overflow-y: scroll"
        id="prevTable"
      >
        <thead>
          <tr>
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
                show-on-print
              "
            >
              Number
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
              Registration Number
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
              Sex
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
              Institution
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
              Profession
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
              Test Date
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
              Result
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
              Added Time
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
              Updated Time
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
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in filteredData" :key="row.id">
            <td
              :class="
                item === 'Fail' || item === 'fail'
                  ? 'cell-red mb-1 show-on-print px-5 py-5 border-gray-200 bg-white text-sm'
                  : 'cell-green mb-1 show-on-print px-5 py-5 border-gray-200 bg-white text-sm'
              "
              v-for="item in row"
              :key="item.id"
            >
              <div class="flex">
                <div class="ml-3">
                  <p
                    :class="
                      item === 'Fail' || item === 'fail'
                        ? 'px-2  border-gray-200 bg-green-100 text-sm cell-red'
                        : ' px-2  border-gray-200 bg-green-100 text-sm'
                    "
                  >
                    {{ item }}
                  </p>
                </div>
              </div>
            </td>
            <td>
              <button
                @click="editSelected(row)"
                class="mb-2 mt-1 hide-on-print"
              >
                <i class="fa fa-eye" aria-hidden="true"> View</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <VueTailwindPagination
        :current="currentPage"
        :total="totalCount"
        :per-page="paginationSize"
        @page-changed="pageChanged($event)"
        text-before-input="Go to page"
        text-after-input="Go"
      />
    </div>
  </div>

  <transition name="slide-fade-up">
    <Modal v-if="this.importModal">
      <ImportModal
        @importModal="this.importModal = false"
        :finalData="finalData"
      >
        <h1>IMPORTED RESULTS</h1>

        <table
          class="w-full"
          style="display: block; height: 500px; overflow-y: scroll"
        >
          <thead>
            <tr>
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
                Number
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
                Registration Number
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
                Institution
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
                Sex
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
                Profession
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
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in content.slice(1)" :key="row.id">
              <td
                :class="
                  item === 'Fail' || item === 'fail' ? 'cell-red' : 'cell-green'
                "
                v-for="item in row"
                :key="item.id"
              >
                <div class="flex">
                  <div class="ml-3">
                    <p
                      :class="
                        item === 'Fail' || item === 'fail'
                          ? 'px-5 py-5 border-gray-200 bg-green-100 text-sm cell-red'
                          : ' px-5 py-5 border-gray-200 bg-green-100 text-sm'
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
      </ImportModal>
    </Modal>
  </transition>

  <transition name="slide-fade-up">
    <Modal v-if="this.errorModal">
      <ErrorModal @errorModal="this.errorModal = false">
        <h1>
          This are the errors in the file you imported, please correct them
          accordingly
        </h1>
        <table
          class="w-full"
          style="display: block; height: 500px; overflow-y: scroll"
        >
          <thead>
            <tr>
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
                Row Number
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
                Column Number
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
                Error Column Data
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
                Error Message
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in errors" :key="row.id">
              <td
                class="px-5 py-5 border-gray-200 bg-green-100 text-sm"
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
      </ErrorModal>
    </Modal>
  </transition>

  <transition name="slide-fade-up">
    <Modal v-if="this.editModal">
      <EditModal @close="editModal = false">
        <div id="printIndiv">
          <div class="grid grid-cols-6 gap-4">
            <div class="col-start-2 col-span-4 ...">
              <h2 class="mt-4 text-center">Primary Information</h2>
              <div
                class="
                  p-12
                  max-w-full
                  rounded-lg
                  border border-gray-200
                  shadow-md
                  dark:bg-gray-200 dark:border-gray-700
                "
                style="background-color: #487db9"
              >
                <div class="grid grid-cols-2 gap-2">
                  <div class="col-auto h-4">
                    <i
                      class="fa fa-user"
                      style="color: white"
                      aria-hidden="true"
                    ></i
                    >&nbsp;
                    <label for="" style="font-weight: bold">First Name:</label
                    >&nbsp;<strong style="color: #ff8d00; font-size: 16px">{{
                      firstName
                    }}</strong>
                  </div>
                  <div class="col-auto h-4 bg-teal-400">
                    <i
                      class="fa fa-user"
                      style="color: white"
                      aria-hidden="true"
                    ></i
                    >&nbsp;
                    <label style="font-weight: bold">Middle Name:</label
                    >&nbsp;<strong style="color: #ff8d00; font-size: 16px">{{
                      middleName
                    }}</strong>
                  </div>

                  <div class="col-auto h-4 bg-teal-400 mt-4">
                    <i
                      class="fa fa-user"
                      style="color: white"
                      aria-hidden="true"
                    ></i
                    >&nbsp;
                    <label for="" style="font-weight: bold">Last Name:</label
                    >&nbsp;<strong style="color: #ff8d00; font-size: 16px">{{
                      lastName
                    }}</strong>
                  </div>

                  <div class="col-auto h-4 bg-teal-400 mt-4 show-on-print">
                    <i
                      class="fa fa-male"
                      style="color: white"
                      aria-hidden="true"
                    ></i>
                    <i
                      class="fa fa-female"
                      style="color: white"
                      aria-hidden="true"
                    ></i>
                    &nbsp;
                    <label for="" style="font-weight: bold">Sex:</label
                    >&nbsp;<strong style="color: #ff8d00; font-size: 16px">{{
                      sex
                    }}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-6 gap-4 mb-4">
            <div class="col-start-2 col-span-4 ...">
              <h2 class="mt-4 text-center">Record Detail</h2>
              <div
                class="
                  p-12
                  max-w-full
                  rounded-lg
                  border border-gray-200
                  shadow-md
                  dark:bg-gray-200 dark:border-gray-700
                  bg-primary-400
                "
              >
                <div class="grid grid-cols-1 gap-2">
                  <div class="col-auto h-4 bg-teal-400">
                    <i
                      class="fa fa-file-invoice"
                      style="color: white"
                      aria-hidden="true"
                    ></i>
                    &nbsp;
                    <label for="" style="font-weight: bold"
                      >Registration Number:</label
                    >&nbsp;<strong style="color: #ff8d00; font-size: 16px">{{
                      registrationNumber
                    }}</strong>
                  </div>

                  <div class="col-6 h-4 bg-teal-100 mt-4">
                    <i
                      class="fa fa-check"
                      style="color: white"
                      aria-hidden="true"
                    ></i
                    >&nbsp;
                    <label style="font-weight: bold">Result:</label
                    >&nbsp;<strong style="color: #ff8d00; font-size: 16px">{{
                      result
                    }}</strong>
                  </div>

                  <div class="col-auto h-4 bg-teal-400 mt-4">
                    <i
                      class="fa fa-building"
                      style="color: white"
                      aria-hidden="true"
                    ></i
                    >&nbsp;
                    <label for="" style="font-weight: bold">Institution:</label
                    >&nbsp;<strong style="color: #ff8d00; font-size: 16px">{{
                      institution
                    }}</strong>
                  </div>

                  <div class="col-auto h-4 mt-4">
                    <i
                      class="fa fa-briefcase"
                      style="color: white"
                      aria-hidden="true"
                    ></i
                    >&nbsp;
                    <label for="" style="font-weight: bold">Profession:</label
                    >&nbsp;<strong style="color: #ff8d00; font-size: 16px">
                      {{ profession }}</strong
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-6 gap-4 mb-4">
            <div class="col-start-2 col-span-4 ...">
              <button
                class="
                  hide-on-print
                  tetx-center
                  px-4
                  py-2
                  rounded-lg
                  bg-primary-400
                  text-white
                  hover:bg-primary-500
                  focus:outline-none focus:shadow-outline-blue
                  font-semibold
                  shadow
                  hover:shadow-lg
                  transition
                  duration-300
                  ease-in-out
                  transform
                  hover:(translate-y-1)
                "
                @click="printIndividualResult()"
              >
                Print
              </button>

              <button
                class="
                  hide-on-print
                  ml-4
                  tetx-center
                  px-4
                  py-2
                  rounded-lg
                  bg-primary-400
                  text-white
                  hover:bg-primary-500
                  focus:outline-none focus:shadow-outline-blue
                  font-semibold
                  shadow
                  hover:shadow-lg
                  transition
                  duration-300
                  ease-in-out
                  transform
                  hover:(translate-y-1)
                "
                @click="editModal = false"
              >
                Cancel
              </button>

              <div class="grid grid-cols-1 gap-2"></div>
            </div>
          </div>
        </div>
        <!-- If edit functinality is needed, then go to a push that is older than may 24,2022 -->
      </EditModal>
    </Modal>
  </transition>
</template>

<script>
import Modal from "@/sharedComponents/Modal";
import ImportModal from "@/views/ImportModal.vue";
import ErrorModal from "./ErrorModal.vue";
import EditModal from "./EditModal.vue";
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import { xl, read } from "xlsx";
import transformSheets from "@/services/excelConverter";
import { useStore } from "vuex";
import moment from "moment";
import Spinner from "@/sharedComponents/Spinner";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import toast from 'toast-me';

export default {
  components: {
    Modal,
    ImportModal,
    ErrorModal,
    EditModal,
    Spinner,
    VueTailwindPagination,
  },
  name: "TaskList",
  data: function () {
    return {
      content: "",
      finalData: [],
      editData: [],
      firstName: "",
      lastName: "",
      createdAt: "",
      editedDataId: "",
      middleName: "",
      registrationNumber: "",
      profession: "",
      vFilterInstitution: "",
      vFilterProfession: "",
      vFilterResult: "",
      vFilterGender: "",
      professions: [],
      result: "",

      currentPage: 0,
      totalCount: 0,
      paginationSizeList: [10, 25, 50, 100],
      paginationSize: 10,
      institution: "",
      indexValue: 0,
      institutions: [],
      sex: "",
      err: "",
      searchNameVal: "",
      regError: true,
      editStatus: false,
      previousTableLoading: true,
      importModal: false,
      errorModal: false,
      editModal: false,
      previousData: [],
      filteredData: [],
      color: "grey",
      errors: [],
    };
  },
  watch: {
    searchNameVal: function () {
      // let userSearchedName = this.searchNameVal;
      // let filterByName = this.previousData.filter((report) => {
      //   return (
      //     report.firstName.toLowerCase().includes(userSearchedName) ||
      //     report.middleName.toLowerCase().includes(userSearchedName) ||
      //     report.lastName.toLowerCase().includes(userSearchedName)
      //   );
      // });

      // this.filteredData = filterByName;

      let input, filter, table, tr, td, i, txtValue;

      input = this.searchNameVal;

      filter = input.toUpperCase();

      table = document.getElementById("prevTable");
      tr = table.getElementsByTagName("tr");

      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];

        if (td) {
          txtValue = td.textContent || td.innerText;

          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    },
  },
  computed: {
    moment: () => moment,
  },
  created() {
    this.getData();
  },
  methods: {
    printIndividualResult() {
      var divElements = document.getElementById("printIndiv").innerHTML;
      document.body.innerHTML =
        "<html><head><title></title></head><body>" + divElements + "</body>";

      window.print();
      window.location.reload();
    },
    pageChanged(event) {
      this.currentPage = event;
      this.indexValue = event - 1;
      this.paginateReport(
        JSON.parse(JSON.stringify(this.previousData)),
        this.indexValue
      );
    },
    handlePagSize() {
      this.currentPage = 0;
      this.indexValue = 0;

      this.paginateReport(JSON.parse(JSON.stringify(this.previousData)), 0);
    },
    paginateReport(reportValue, index) {
      this.filteredData = reportValue.slice(
        index * this.paginationSize,
        index * this.paginationSize + this.paginationSize
      );

      this.totalCount = reportValue.length;
    },
    filterInstitution() {
      let previous = JSON.parse(JSON.stringify(this.previousData));
      var searchTerm = this.vFilterInstitution;

      if (searchTerm === "instfilterAll") {
        this.previousTableLoading = true;
        this.getData();
      }
      this.filteredData = previous.filter((item) => {
        return item.institution.toLowerCase().includes(searchTerm);
      });
    },

    filterProfession() {
      let previous = JSON.parse(JSON.stringify(this.previousData));
      var searchTerm = this.vFilterProfession;

      if (searchTerm === "proffilterAll") {
        this.previousTableLoading = true;
        this.getData();
      }
      this.filteredData = previous.filter((item) => {
        return item.profession.toLowerCase().includes(searchTerm);
      });
    },

    filterResult() {
      let previous = JSON.parse(JSON.stringify(this.previousData));

      var searchTerm = this.vFilterResult;
      if (searchTerm === "resultfilterAll") {
        this.previousTableLoading = true;
        this.getData();
      }
      this.filteredData = previous.filter((item) => {
        return item.result.toLowerCase().includes(searchTerm);
      });
    },

    filterGender() {
      let previous = JSON.parse(JSON.stringify(this.previousData));
      let otherWay = "";
      var searchTerm = this.vFilterGender.toLowerCase();
      if (searchTerm === "male") {
        otherWay = "M";
      }
      if (searchTerm === "female") {
        otherWay = "F";
      }

      if (searchTerm === "genderfilterAll") {
        this.previousTableLoading = true;
        this.getData();
      }
      this.filteredData = previous.filter((item) => {
        return (
          item.sex.toLowerCase().includes(searchTerm) ||
          item.sex.includes(otherWay)
        );
      });
    },

    getData() {
      this.previousData = [];
      this.filteredData = [];
      this.$store.dispatch("reviewer/getProfessionalType").then((res) => {
        this.professions = res.data.data;
      });

      this.$store.dispatch("goodstanding/getInstitution").then((res) => {
        this.institutions = res.data.data;
      });
      this.$store.dispatch("reviewer/getImported").then((res) => {
        this.totalCount = res.data.data.length;
        res.data.data.forEach((element) => {
          element.createdAt = moment(element.createdAt).format("MMMM D, YYYY");
          element.updatedAt = moment(element.updatedAt).format("MMMM D, YYYY");
          element.sex = element.sex.replace(/\s/g, "");
          this.previousData.push(element);
          this.filteredData.push(element);
        });
        this.paginateReport(
          JSON.parse(JSON.stringify(this.filteredData)),
          this.indexValue
        );
        this.previousTableLoading = false;
      });
    },
    importExcel() {
      var file = [];
      var errors = [];
      var hasNumber = /\d/;
      file = document.getElementById("upload").files[0];

      var reader = new FileReader();
      let extension = file.name.split(".").pop().toLowerCase();
      console.log(extension, file);
      if (extension === "xlsx" || extension === "xls" || extension === "csv") {
        reader.readAsBinaryString(file);
        reader.onload = (event) => {
          var data = event.target.result;
          var workbook = read(data, { type: "binary" });
          var sheets = workbook.Sheets;
          var transformed = transformSheets(sheets, workbook);
          for (let i = 1; i < transformed.length; i++) {
            transformed[i][6] = transformed[i][6].replace(/\s/g, "");
            if (hasNumber.test(transformed[i][3])) {
              errors.push({
                row: i,
                column: 3,
                columnData: transformed[i][3],
                errorMessage: "Number is not allowed in name",
              });
            }
            if (hasNumber.test(transformed[i][4])) {
              errors.push({
                row: i,
                column: 4,
                columnData: transformed[i][4],
                errorMessage: "Number is not allowed in name",
              });
            }

            if (hasNumber.test(transformed[i][5])) {
              errors.push({
                row: i,
                column: 5,
                columnData: transformed[i][5],
                errorMessage: "Number is not allowed in name",
              });
            }

            if (transformed[i][9] === "Pass" || transformed[i][9] === "pass") {
              transformed[i].result = "pass";
            } else transformed[i].result = "fail";
          }

          this.content = transformed;
          if (errors.length > 0) {
            this.errorModal = true;
            this.errors = errors;
          } else this.finalData = transformed;
          this.importModal = true;
        };
      } else

toast('The file type you chose is invalid', { duration: 3000, position:'bottom'});

      return;
    },
    editSelected(item) {
      let data = JSON.parse(JSON.stringify(item));
      this.createdAt = data.createdAt;
      this.editedDataId = data.id;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.middleName = data.middleName;
      this.result = data.result;
      this.institution = data.institution;
      this.profession = data.profession;
      this.sex = data.sex.replace(/\s/g, "");
      this.registrationNumber = data.registrationNo;
      this.editModal = true;
    },
    saveEdited() {
      var updatedAt = new Date().toISOString();

      var crd = new Date(this.createdAt).toISOString();

      let editedData = {
        id: this.editedDataId,
        firstName: this.firstName,
        lastName: this.lastName,
        middleName: this.middleName,
        institution: this.institution,
        profession: this.profession,
        sex: this.sex,
        result: this.result,
        createdAt: crd,
        registrationNo: this.registrationNumber,
        updatedAt: updatedAt,
      };
      this.editStatus = true;
      this.$store
        .dispatch("reviewer/editImported", editedData, this.editedDataId)
        .then((res) => {
          if (res.data.status === "Error") {
            this.regError = false;
            this.editStatus = false;
            return;
          }
          if (res.status === 200) {
            this.getData();
            this.editStatus = false;
            this.editModal = false;
          }
        });
    },
  },
};
</script>
<style scoped>
th,
td {
  border-bottom: 0.5px solid black;
}
.py-5 {
  padding-top: 0;
  padding-bottom: 0;
}
.text-green {
  color: grey;
}
.text-red {
  color: white;
  background-color: red;
  font-weight: bold;
}
.error-text-red {
  color: white;
  background-color: red;
  font-weight: bold;
}
.cell-red {
  background-color: red;
}
[type="button"],
[type="submit"],
button {
  min-width: 107px !important;
  min-height: 35px !important;
}
@media print {
  .show-on-print {
    display: block;
  }
  .hide-on-print {
    display: none !important;
  }
}
</style>
