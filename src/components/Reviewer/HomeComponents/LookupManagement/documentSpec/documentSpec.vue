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
            >Document Specifications</a
          >
        </li>
      </ol></reviewer-nav-bar
    >
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content mb-8">
      <div class="container px-4 sm:px-8 ">
        <div class="relative py-4 ">
          <p class="absolute left-0 text-2xl font-semibold leading-tight mb-8">
            View and manage document specifications found throughout the system
          </p>
          <p class="absolute right-0" v-if="showAddButton">
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
                shadow-md
                hover:bg-white hover:text-primary-600 hover:border-primary-600
                transition
                duration-150
                ease-in-out
              "
              data-bs-toggle="modal"
              data-bs-target="#addModal"
            >
              <i class="fa fa-plus text-xl"></i>
              Add Document Specification
            </button>
          </p>
        </div>

        <div class="grid grid-rows-1 mt-8">
          <div class="grid grid-cols-3">
            <div class="col-span-1">
              <div class="mb-3 xl:w-full">
                <label class="">Applicant Type</label>
                <select
                  class="form-select appearance-none block w-full px-6  py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  @change="searchSpec()"
                  aria-label="Default select example"
                  v-model="applicantTypeSearchTerm"
                >
                  <option
                    v-for="types in applicantTypes"
                    :key="types.code"
                    :value="types.id"
                  >
                    {{ types.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-span-1">
              <div class="mb-3 xl:w-full">
                <label class="">Education Level</label>
                <select
                  class="form-select appearance-none block w-full px-6 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  @change="searchSpec()"
                  aria-label="Default select example"
                  v-model="educationLevelSearchTerm"
                >
                  <option
                    v-for="level in educationLevels"
                    :key="level.code"
                    :value="level.id"
                  >
                    {{ level.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-span-1">
              <div class="mb-3 xl:w-full">
                <label class="ml-4">Application Category</label>
                <select
                  class="form-select appearance-none block w-full px-6 ml-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  @change="searchSpec()"
                  aria-label="Default select example"
                  v-model="applicationCategorySearchTerm"
                >
                  <option
                    v-for="category in applicationCategories"
                    :key="category.code"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-4 gap-4">
            <div class="col-span-1">
              <div class="mb-3 xl:w-full">
                <label class="">Document Type</label>
                <select
                  class="form-select appearance-none block w-full px-6  py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  @change="searchSpec()"
                  aria-label="Default select example"
                  v-model="documentTypeSearchTern"
                >
                  <option
                    v-for="types in documentTypes"
                    :key="types.code"
                    :value="types.id"
                  >
                    {{ types.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-span-1">
              <div class="mb-3 xl:w-full">
                <label class="">Department</label>
                <select
                  class="form-select appearance-none block w-full px-6  py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  @change="searchSpec()"
                  aria-label="Default select example"
                  v-model="departmentSearchTerm"
                >
                  <option
                    v-for="dep in departments"
                    :key="dep.code"
                    :value="dep.id"
                  >
                    {{ dep.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="col-span-1">
              <div class="mb-3 xl:w-full">
                <label class="">Is Document Common</label>
                <select
                  class="form-select appearance-none block w-full px-6  py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  @change="searchSpec()"
                  aria-label="Default select example"
                  v-model="isCommonDocument"
                >
                  <option :value="true">
                    Yes
                  </option>
                  <option :value="false">
                    No
                  </option>
                </select>
              </div>
            </div>
            <div class="col-span-1">
              <div class="mb-3 xl:w-full">
                <label class="">Is Document Required?</label>
                <select
                  class="form-select appearance-none block w-full px-6  py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  @change="searchSpec()"
                  aria-label="Default select example"
                  v-model="isRequired"
                >
                  <option :value="true">
                    Yes
                  </option>
                  <option :value="false">
                    No
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1">
            <div class="col-span-1  mt-5">
              <button
                type="button"
                class="
                        inline-block
                        px-6
                        py-2
                     
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

        <div class="w-full mt-8 rounded-xl">
          <vue-table-lite
            :is-loading="documentSpecificationTable.isLoading"
            :columns="documentSpecificationTable.columns"
            :rows="documentSpecificationTable.rows"
            :total="documentSpecificationTable.totalRecordCount"
            :sortable="documentSpecificationTable.sortable"
            @is-finished="tableLoadingFinish"
            @row-clicked="rowClicked"
            @do-search="doSearch"
          ></vue-table-lite>
        </div>
      </div>
    </div>
    <add-modal :modalLookups="modalLookups"></add-modal>
    <edit-modal
      :editModalData="editModalData"
      :modalLookups="modalLookups"
    ></edit-modal>
    <!-- Main Content -->
  </section>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { ref } from "vue";
import ReviewerNavBar from "./../SharedComponents/navBar.vue";
import ReviewerSideBar from "./../SharedComponents/sideNav.vue";
import VueTableLite from "vue3-table-lite";
import AddModal from "./addModal.vue";
import EditModal from "./editModal.vue";

export default {
  components: {
    ReviewerNavBar,
    ReviewerSideBar,
    VueTableLite,
    AddModal,
    EditModal,
  },

  setup() {
    const store = useStore();

    let documentSpecificationTable = ref({ isLoading: true });
    let documentSpecificationTableData = [];
    let showAddButton = ref(false);
    let editModalData = ref();
    let modalLookups = ref({});
    let departments = ref([]);
    let applicantTypes = ref([
      { name: "Ethiopian", id: 1, code: "ETH" },
      { name: "Ethiopian From Abroad", id: 3, code: "FOR" },
      { name: "Foreigner", id: 2, code: "ETHABRO" },
    ]);
    let applicationCategories = ref([
      { name: "New License", id: 1, code: "NA" },
      { name: "Renewal", id: 2, code: "RA" },
      { name: "Goodstanding", id: 3, code: "GSL" },
    ]);
    let educationLevels = ref([]);
    let documentTypes = ref([]);

    let educationLevelSearchTerm = ref("");
    let documentTypeSearchTern = ref("");
    let departmentSearchTerm = ref("");
    let applicantTypeSearchTerm = ref("");
    let applicationCategorySearchTerm = ref("");
    let isCommonDocument = ref(false);
    let isRequired = ref(false);
    const fetchdocumentSpecification = (apiParameters) => {
      documentSpecificationTableData = [];
      store
        .dispatch("lookups/getDocSpecWithFilter", apiParameters)
        .then((res) => {
          console.log(res);
          let data = res.data && res.data.data ? res.data.data.rows : [];

          data.forEach((element) => {
            documentSpecificationTableData.push({
              id: element.id ? element.id : "",
              ApplicationCategory: element.applicationCategory
                ? element.applicationCategory.name
                : "",
              ApplicantType: element.applicantType
                ? element.applicantType.name
                : "",
              DocumentType: element.documentType
                ? element.documentType.name
                : "",
              EducationalLevel:
                element && element.educationalLevel
                  ? element.educationalLevel.name
                  : "",
              Department:
                element && element.department ? element.department.name : "",
              EducationLevel: element.educationalLevel
                ? element.educationalLevel.name
                : "---",
              IsCommonDocument:
                element.isCommonDocument && element.isCommonDocument == true
                  ? "Yes"
                  : element.isCommonDocument &&
                    element.isCommonDocument == false
                  ? "No"
                  : "----",
              IsRequired:
                element.isRequired && element.isRequired == true
                  ? "Yes"
                  : element.isRequired && element.isRequired == false
                  ? "No"
                  : "",
              data: element ? element : {},
            });
          });

          documentSpecificationTable.value = { 
            columns: [
              {
                label: "ID",
                field: "id",
                width: "5%",
                sortable: true,
                isKey: true,
              },
              {
                label: "Application Category",
                field: "ApplicationCategory",
                width: "10%",
                sortable: true,
              },
              {
                label: "Applicant Type",
                field: "ApplicantType",
                width: "10%",
                sortable: true,
              },
              {
                label: "Document Type",
                field: "DocumentType",
                width: "25%",
                sortable: true,
              },
              {
                label: "Educational Level",
                field: "EducationLevel",
                width: "10%",
                sortable: true,
              },
              {
                label: "Department",
                field: "Department",
                width: "15%",
                sortable: true,
              },
              {
                label: "Is Common Document ?",
                field: "IsCommonDocument",
                width: "10%",
                sortable: true,
              },
              {
                label: "Is Required ?",
                field: "IsRequired",
                width: "10%",
                sortable: true,
              },

              {
                label: "",
                field: "quick",
                width: "10%",
                display: function(row) {
                  return (
                    '<button data-bs-toggle="modal" data-bs-target="#editModal" class="edit-btn bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg  transition duration-150 ease-in-out" data-id="' +
                    row.id +
                    '" ><i class="fa fa-eye"></i> View/Edit</button>'
                  );
                },
              },
            ],
            rows: documentSpecificationTableData,
            totalRecordCount: res.data.data ? res.data.data.count : 0,
            sortable: {
              order: "id",
              sort: "asc",
            },
          };
          showAddButton.value = true;
        });
    };
    const searchSpec = () => {
      documentSpecificationTable.value.isLoading = true;
      fetchdocumentSpecification([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "educationLevel", value: educationLevelSearchTerm.value },
        { key: "documentType", value: documentTypeSearchTern.value },
        { key: "applicantType", value: applicantTypeSearchTerm.value },
        {
          key: "applicationCategory",
          value: applicationCategorySearchTerm.value,
        },
        { key: "isCommon", value: isCommonDocument.value },
        { key: "isRequired", value: isRequired.value },
        { key: "department", value: departmentSearchTerm.value },
      ]);
    };
    const clearFilters = () => {
      educationLevelSearchTerm.value = "";
      documentTypeSearchTern.value = "";
      applicantTypeSearchTerm.value = "";
      applicationCategorySearchTerm.value = "";
      isCommonDocument.value = "";
      isRequired.value = "";
      departmentSearchTerm.value = "";
      documentSpecificationTable.value.isLoading = true;
      fetchdocumentSpecification([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
      ]);
    };
    const tableLoadingFinish = () => {
      let elements = document.getElementsByClassName("edit-btn");
      Array.prototype.forEach.call(elements, function(element) {
        if (element.classList.contains("edit-btn")) {
          element.addEventListener("click", rowClicked());
        }
      });
    };
    const rowClicked = (row) => {
      editModalData.value = row;
    };
    const fetchDocumentType = () => {
      store
        .dispatch("lookups/getDocumentType")
        .then((res) => {
          if (res.data.data) {
            modalLookups.value.documentType = res.data.data;
            documentTypes.value = res.data.data;
          }
        })
        .catch((err) => console.log(err));
    };
    const fetchDepartments = () => {
      store
        .dispatch("lookups/getDepartments")
        .then((res) => {
          if (res.data.data) {
            res.data.data.push({ name: "None", id: "" });
            modalLookups.value.departments = res.data.data;
            departments.value = res.data.data;
          }
        })
        .catch((err) => console.log(err));
    };
    const fetchEducationLevels = () => {
      store
        .dispatch("lookups/getEducationLevel")
        .then((res) => {
          if (res.data.data) {
            res.data.data.push({ name: "None", id: "" });
            modalLookups.value.educationLevels = res.data.data;
            educationLevels.value = res.data.data;
          }
        })
        .catch((err) => console.log(err));
    };
    onMounted(() => {
      fetchdocumentSpecification([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
      ]);
      fetchDocumentType();
      fetchDepartments();
      fetchEducationLevels();
    });
    const doSearch = (offset, limit, order, sort) => {
      documentSpecificationTable.value.isLoading=true;
      setTimeout(() => {
        documentSpecificationTable.value.isReSearch =
          offset == undefined ? true : false;
        offset = offset / 10;
        if (sort == "asc") {
          fetchdocumentSpecification([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "educationLevel", value: educationLevelSearchTerm.value },
            { key: "documentType", value: documentTypeSearchTern.value },
            { key: "applicantType", value: applicantTypeSearchTerm.value },
            {
              key: "applicationCategory",
              value: applicationCategorySearchTerm.value,
            },
            { key: "isCommon", value: isCommonDocument.value },
            { key: "isRequired", value: isRequired.value },
            { key: "department", value: departmentSearchTerm.value },
          ]);
        } else {
          fetchdocumentSpecification([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "educationLevel", value: educationLevelSearchTerm.value },
            { key: "documentType", value: documentTypeSearchTern.value },
            { key: "applicantType", value: applicantTypeSearchTerm.value },
            {
              key: "applicationCategory",
              value: applicationCategorySearchTerm.value,
            },
            { key: "isCommon", value: isCommonDocument.value },
            { key: "isRequired", value: isRequired.value },
            { key: "department", value: departmentSearchTerm.value },
          ]);
        }
      }, 600);
    };
    return {
      documentSpecificationTable,
      showAddButton,
      editModalData,
      rowClicked,
      modalLookups,
      searchSpec,
      tableLoadingFinish,
      educationLevelSearchTerm,
      documentTypeSearchTern,
      applicantTypeSearchTerm,
      departmentSearchTerm,
      applicationCategorySearchTerm,
      departments,
      applicantTypes,
      applicationCategories,
      educationLevels,
      documentTypes,
      isCommonDocument,
      isRequired,
      clearFilters,
      doSearch,
    };
  },
};
</script>
<style scoped>
.tab-content > .active {
  padding-right: 5px;
  padding-bottom: 5px;
  display: block;
  border-left: 6px solid #0d3552;
  border-top: 1px solid #0d3552;
  border-right: 1px solid #0d3552;
  border-bottom: 1px solid #0d3552;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 10px;
}

.nav-tabs .nav-link.active {
  color: white;
  border-color: #0d3552;
  background-color: #0d3552;
  font-size: 16px;
  box-shadow: none !important;
  font-weight: bold;
  margin-top: 5px;
  margin-right: -16px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
</style>
<style>
.activeElement {
  background: green;
  border-radius: 5px;
  padding: 4px;
  color: white;
  font-weight: 800;
}
</style>
