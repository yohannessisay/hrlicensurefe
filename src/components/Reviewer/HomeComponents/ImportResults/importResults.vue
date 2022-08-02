<template>
  <!-- Sidebar -->
  <reviewer-side-bar> </reviewer-side-bar>

  <!-- Sidebar -->
  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar><h2>User Management</h2></reviewer-nav-bar>
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
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
                Import the required documnet and view the reults before
                finalizing it and saving.(Allowed file types are .XLSX and .CSV)
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
                Download a template and fill it with the required data and come
                back here to upload it.
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

              <div class="flex flex-row mb-small w-80 mr-4">
                <label class="text-primary-700 mr-2">From</label>
                <input
                  v-model="startDate"
                  class="max-w-3xl mr-5"
                  type="date"
                  @change="filterDate()"
                />
                <label class="text-primary-700 mr-2">To</label>
                <input
                  v-model="endDate"
                  @change="filterDate()"
                  class="max-w-3xl mr-5"
                  type="date"
                />
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
            <vue-table-lite
                :is-static-mode="true"
                :is-loading="userTable.isLoading"
                :columns="userTable.columns"
                :rows="userTable.rows"
                :total="userTable.totalRecordCount"
                :sortable="userTable.sortable"
                @is-finished="tableLoadingFinishOthers"
                @row-clicked="rowClickedOthers"
              ></vue-table-lite>
        </div>
      </div>
    </div>
    <!-- Main Content -->
  </section>
</template>

<script>
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import { ref, computed, reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import ReviewerNavBar from "./SharedComponents/navBar.vue";
import ReviewerSideBar from "./SharedComponents/sideNav.vue";
import addUser from "./addUserModal.vue";
import VueTableLite from "vue3-table-lite";

export default {
  components: {
    ReviewerNavBar,
    ReviewerSideBar,
    VueTableLite,
    addUser,
  },
  computed: {},

  setup() {
    const store = useStore();
    const router = useRouter();
    
    let allData = ref([]);
    let searchData = ref();
    let expertLevelFilter = ref();
    const isUserManager = localStorage.getItem("role") == "UM";
    let expertLevels = ref([
      { name: "All", code: "all" },
      { name: "Federal", code: "FED" },
      { name: "Regional", code: "REG" },
    ]);

    let userTable = ref({ isLoading: true });

    let tableData = reactive([]);
    const searchTerm = ref("");
    let professions = ref([]);
    let institutions = ref([]);
    const getResults = () => {
      store.dispatch("reviewer/getProfessionalType").then((res) => {
        professions.value = res.data.data;
      });

      store.dispatch("goodstanding/getInstitution").then((res) => {
        institutions.value = res.data.data;
      });

      store.dispatch("reviewer/getImported").then((res) => {
        res.data.data.forEach((element) => {
          tableData.push({
            RegistrationNumber: element.registrationNo
              ? element.registrationNo
              : "",
            Institution: element.institution ? element.institution : "",
            FirstName: element.firstName ? element.firstName : "",
            LastName: element.lastName ? element.lastName : "",
            MiddleName: element.middleName ? element.middleName : "",
            Sex: element.sex ? element.sex : "",
            Profession: element.profession ? element.profession : "",
            Result: element.result ? element.result : "",
            DateOfExamination: element.dateOfExamination
              ? element.dateOfExamination
              : "",
          });
        });
        allData.value = tableData;
        userTable.value = {
          isLoading: false,
          columns: [
            {
              label: "ID",
              field: "RegistrationNumber",
              width: "5%",
              sortable: true,
              isKey: true,
            },
            {
              label: "Institution",
              field: "Institution",
              width: "10%",
              sortable: true,
            },
            {
              label: "First Name",
              field: "FirstName",
              width: "10%",
              sortable: true,
            },
            {
              label: "Middle Name",
              field: "MiddleName",
              width: "10%",
              sortable: true,
            },
            {
              label: "Last Name",
              field: "LastName",
              width: "10%",
              sortable: true,
            },

            {
              label: "Gender",
              field: "Sex",
              width: "5%",
              sortable: true,
            },
            {
              label: "Profession",
              field: "Profession",
              width: "15%",
              sortable: true,
            },
                   {
              label: "Result",
              field: "Result",
              width: "10%",
              sortable: true,
            },
                   {
              label: "Date Of Examination",
              field: "DateOfExamination",
              width: "15%",
              sortable: true,
            },
            {
              label: "Action",
              field: "quick",
              width: "10%",
              display: function (row) {
                return (
                  '<button data-bs-toggle="modal" data-bs-target="#viewUser" class="edit-btn inline-block px-6 py-2.5 bg-primary-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-id="' +
                  row.id +
                  '" ><i class="fa fa-eye"></i> View</button>'
                );
              },
            },
          ],
          rows: computed(() => {
            return tableData.filter(
              (x) =>
                x.FirstName.toLowerCase().includes(
                  searchTerm.value.toLowerCase()
                ) ||
                  x.MiddleName.toLowerCase().includes(
                  searchTerm.value.toLowerCase()
                ) ||
                x.LastName.toLowerCase().includes(
                  searchTerm.value.toLowerCase()
                )
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

    const createAdmin = () => {
      router.push({ path: "/admin/create" });
    };
    const filterExpertLevel = (eventParam) => {
      if (eventParam == "All") {
        tableData = allData.value;
        userTable.value.rows = computed(() => {
          return tableData.filter(
            (x) =>
              x.FirstName.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
              x.MiddleName.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
              x.LastName.toLowerCase().includes(searchTerm.value.toLowerCase())
          );
        });
      } else {
        tableData = allData.value.filter((data) => {
          return data.ExpertLevel
            ? data.ExpertLevel.toLowerCase() == eventParam.toLowerCase()
            : "";
        });
        userTable.value.rows = computed(() => {
          return tableData.filter(
            (x) =>
       x.FirstName.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
              x.MiddleName.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
              x.LastName.toLowerCase().includes(searchTerm.value.toLowerCase())
          );
        });
      }
    };

    onMounted(getResults);

    return {
      getResults,
      searchData,
      isUserManager,
      userTable,
      createAdmin,
      searchTerm,
      expertLevels,
      expertLevelFilter,
      filterExpertLevel,
    };
  },
};
</script>
