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
            ><span class="text-grey-300">Home</span></router-link
          >
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>

        <li>
          <a href="#" class="pointer-events-none text-primary-600"
            >Document Specifications</a
          >
        </li>
      </ol></reviewer-nav-bar
    >
    <!-- Header -->

    <!-- Main Content -->

    <div
      class="tabs-wrapper"
      style="
        position: relative;
        margin-left: 10px;
        margin-right: 10px;
        padding-top: 80px;
      "
    >
      <input
        type="radio"
        name="tab"
        id="tab1"
        checked="checked"
        class="tab-head"
      />
      <label for="tab1" class="tabs_wrapper_label">
        Single Document Uploads</label
      >
      <input type="radio" name="tab" id="tab2" class="tab-head" />
      <label for="tab2" class="tabs_wrapper_label">Multiple File Uploads</label>

      <div class="tab-body-wrapper">
        <div id="tab-body-1" class="tab-body">
          <div class="container">
            <div class="relative py-4">
              <h2 class="absolute left-0 text-xl font-semibold leading-tight">
                View and manage single file upload document specifications found
                throughout the system
              </h2>
              <p class="absolute right-0" v-if="showAddButton">
                <button
                  class="inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase border rounded hover:bg-white hover:text-primary-600 hover:border-primary-600 transition duration-150 ease-in-out"
                  data-bs-toggle="modal"
                  data-bs-target="#addModal"
                >
                  <i class="fa fa-plus text-xl"></i>
                  Add Document Specification
                </button>
              </p>
            </div>

            <div class="grid grid-rows-1 mt-12 bg-primary-300 p-2 rounded-md">
              <div class="grid grid-cols-4 gap-4">
                <div class="col-span-1">
                  <div class="mb-3 xl:w-full">
                    <label class="">Document Type</label>
                    <select
                      class="form-select appearance-none block w-full px-6 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                      class="form-select appearance-none block w-full px-6 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                      class="form-select appearance-none block w-full px-6 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      @change="searchSpec()"
                      aria-label="Default select example"
                      v-model="isCommonDocument"
                    >
                      <option :value="true">Yes</option>
                      <option :value="false">No</option>
                    </select>
                  </div>
                </div>
                <div class="col-span-1">
                  <div class="mb-3 xl:w-full">
                    <label class="">Is Document Required?</label>
                    <select
                      class="form-select appearance-none block w-full px-6 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      @change="searchSpec()"
                      aria-label="Default select example"
                      v-model="isRequired"
                    >
                      <option :value="true">Yes</option>
                      <option :value="false">No</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-3">
                <div class="col-span-1">
                  <div class="mb-3 xl:w-full">
                    <label class="">Applicant Type</label>
                    <select
                      class="form-select appearance-none block w-full px-6 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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

              <div class="grid grid-cols-1">
                <div class="col-span-1 mt-5">
                  <button
                    type="button"
                    class="inline-block px-6 py-2 bg-white border-2 border-primary-600 text-primary-600 font-medium text-xs leading-tight uppercase rounded hover:bg-primary-600 hover:bg-opacity-5 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
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
        <div id="tab-body-2" class="tab-body">
          <div class="container">
            <div class="relative py-4">
              <h2 class="absolute left-0 text-xl font-semibold leading-tight">
                View and manage multiple file upload document specifications
                found throughout the system
              </h2>
              <p class="absolute right-0" v-if="showAddButton">
                <button
                  class="inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase border rounded hover:bg-white hover:text-primary-600 hover:border-primary-600 transition duration-150 ease-in-out"
                  data-bs-toggle="modal"
                  data-bs-target="#addModal"
                  @click="modalType='parent'"
                >
                  <i class="fa fa-plus text-xl"></i>
                  Add Document Specification
                </button>
              </p>
            </div>

            <div class="grid grid-rows-1 mt-12 bg-primary-300 p-2 rounded-md">
              <div class="grid grid-cols-4 gap-4">
                <div class="col-span-1">
                  <div class="mb-3 xl:w-full">
                    <label class="">Document Type</label>
                    <select
                      class="form-select appearance-none block w-full px-6 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      @change="searchSpecParent()"
                      aria-label="Default select example"
                      v-model="parentDocumentTypeSearchTerm"
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
                      class="form-select appearance-none block w-full px-6 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      @change="searchSpecParent()"
                      aria-label="Default select example"
                      v-model="parentDepartmentSearchTerm"
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
                      class="form-select appearance-none block w-full px-6 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      @change="searchSpecParent()"
                      aria-label="Default select example"
                      v-model="isCommonDocumentParent"
                    >
                      <option :value="true">Yes</option>
                      <option :value="false">No</option>
                    </select>
                  </div>
                </div>
                <div class="col-span-1">
                  <div class="mb-3 xl:w-full">
                    <label class="">Is Document Required?</label>
                    <select
                      class="form-select appearance-none block w-full px-6 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      @change="searchSpecParent()"
                      aria-label="Default select example"
                      v-model="isRequiredParent"
                    >
                      <option :value="true">Yes</option>
                      <option :value="false">No</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-4 gap-2">
                <div class="col-span-1">
                  <div class="mb-3 xl:w-full">
                    <label class="">Applicant Type</label>
                    <select
                      class="form-select appearance-none block w-full px-6 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      @change="searchSpecParent()"
                      aria-label="Default select example"
                      v-model="parentApplicantTypeSearchTerm"
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
                      @change="searchSpecParent()"
                      aria-label="Default select example"
                      v-model="parentEducationLevelSearchTerm"
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
                    <label class="">Application Category</label>
                    <select
                      class="form-select appearance-none block w-full px-6 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      @change="searchSpecParent()"
                      aria-label="Default select example"
                      v-model="parentApplicationCategorySearchTerm"
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
                <div class="col-span-1">
                  <div class="mb-3 xl:w-full">
                    <label class="">Parent Document</label>
                    <select
                      class="form-select appearance-none block w-full px-6 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      @change="searchSpecParent()"
                      aria-label="Default select example"
                      v-model="parentDocSearchTerm"
                    >
                      <option
                        v-for="parentDoc in parentDocuments"
                        :key="parentDoc.parent_document"
                        :value="parentDoc.parent_document"
                      >
                        {{ parentDoc.parent_document }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1">
                <div class="col-span-1 mt-5">
                  <button
                    type="button"
                    class="inline-block px-6 py-2 bg-white border-2 border-primary-600 text-primary-600 font-medium text-xs leading-tight uppercase rounded hover:bg-primary-600 hover:bg-opacity-5 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    @click="clearFiltersParent()"
                  >
                    <i class="fa fa-close"></i>
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>

            <div class="w-full mt-8 rounded-xl">
              <vue-table-lite
                :is-loading="parentDocumentSpecificationTable.isLoading"
                :columns="parentDocumentSpecificationTable.columns"
                :rows="parentDocumentSpecificationTable.rows"
                :total="parentDocumentSpecificationTable.totalRecordCount"
                :sortable="parentDocumentSpecificationTable.sortable"
                @is-finished="tableLoadingFinishParent"
                @row-clicked="rowClickedParent"
                @do-search="doSearchParent"
              ></vue-table-lite>
            </div>
          </div>
        </div>
      </div>
    </div>

    <add-modal :modalLookups="modalLookups" :modalType="modalType"></add-modal>
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
    let parentDocumentSpecificationTable = ref({ isLoading: true });
    let documentSpecificationTableData = [];
    let parentDocumentSpecificationTableData = [];
    let showAddButton = ref(false);
    let editModalData = ref();
    let modalLookups = ref({});
    let modalType= ref("");
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
      { name: "Lost License", id: 5, code: "LL" },
    ]);
    let educationLevels = ref([]);
    let documentTypes = ref([]);
    let parentDocuments = ref([]);
    let educationLevelSearchTerm = ref("");
    let documentTypeSearchTern = ref("");
    let departmentSearchTerm = ref("");
    let applicantTypeSearchTerm = ref("");
    let applicationCategorySearchTerm = ref("");
    let isCommonDocument = ref("");
    let isRequired = ref("");

    let parentEducationLevelSearchTerm = ref("");
    let parentDocumentTypeSearchTerm = ref("");
    let parentDepartmentSearchTerm = ref("");
    let parentDocSearchTerm = ref("");
    let parentApplicantTypeSearchTerm = ref("");
    let parentApplicationCategorySearchTerm = ref("");
    let isCommonDocumentParent = ref("");
    let isRequiredParent = ref("");

    const fetchdocumentSpecification = (apiParameters) => {
      documentSpecificationTableData = [];
      store
        .dispatch("lookups/getDocSpecWithFilter", apiParameters)
        .then((res) => {
          let data =
            res.data && res.data.data.documentSpecs
              ? res.data.data.documentSpecs.rows
              : [];

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
                display: function (row) {
                  return (
                    '<button data-bs-toggle="modal" data-bs-target="#editModal" class="edit-btn bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded   hover:   transition duration-150 ease-in-out" data-id="' +
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
    const fetchDocumentSpecificationWithParent = (apiParameters) => {
      documentSpecificationTableData = [];
      store
        .dispatch("lookups/getDocSpecWithFilter", apiParameters)
        .then((res) => {
          parentDocumentSpecificationTableData = [];
          let data = res.data && res.data.data ? res.data.data : [];
          if (parentDocuments.value.length === 0) {
            parentDocuments.value = data?.parentDocs;
            modalLookups.value.parentDocuments = parentDocuments.value;
          }

          data?.documentSpecs?.rows.forEach((element) => {
            parentDocumentSpecificationTableData.push({
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
              ParentDocument:
                element && element.parentDocument ? element.parentDocument : "",
              IsRequired:
                element.isRequired && element.isRequired == true
                  ? "Yes"
                  : element.isRequired && element.isRequired == false
                  ? "No"
                  : "",
              data: element ? element : {},
            });
          });
          parentDocumentSpecificationTable.value = {
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
                display: function (row) {
                  return (
                    '<button data-bs-toggle="modal" data-bs-target="#editModal" class="edit-btn-parent bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded   hover:   transition duration-150 ease-in-out" data-id="' +
                    row.id +
                    '" ><i class="fa fa-eye"></i> View/Edit</button>'
                  );
                },
              },
            ],
            rows: parentDocumentSpecificationTableData,
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
        { key: "parent", value: "false" },
      ]);
    };
    const searchSpecParent = () => {
      parentDocumentSpecificationTable.value.isLoading = true;
      fetchDocumentSpecificationWithParent([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
        { key: "educationLevel", value: parentEducationLevelSearchTerm.value },
        { key: "documentType", value: parentDocumentTypeSearchTerm.value },
        { key: "applicantType", value: parentApplicantTypeSearchTerm.value },
        {
          key: "applicationCategory",
          value: parentApplicationCategorySearchTerm.value,
        },
        { key: "isCommon", value: isCommonDocumentParent.value },
        { key: "isRequired", value: isRequiredParent.value },
        { key: "parent", value: parentDocSearchTerm.value },

        { key: "department", value: parentDepartmentSearchTerm.value },
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
        { key: "parent", value: "false" },
      ]);
    };
    const clearFiltersParent = () => {
      parentEducationLevelSearchTerm.value = "";
      parentDocumentTypeSearchTerm.value = "";
      parentApplicantTypeSearchTerm.value = "";
      parentApplicationCategorySearchTerm.value = "";
      isCommonDocumentParent.value = "";
      isRequiredParent.value = "";
      parentDocSearchTerm.value = "";
      parentDepartmentSearchTerm.value = "";
      parentDocumentSpecificationTable.value.isLoading = true;
      fetchDocumentSpecificationWithParent([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
      ]);
    };
    const tableLoadingFinish = () => {
      let elements = document.getElementsByClassName("edit-btn");
      Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains("edit-btn")) {
          element.addEventListener("click", rowClicked());
        }
      });
    };
    const rowClicked = (row) => {
      editModalData.value = row;
    };
    const tableLoadingFinishParent = () => {
      let elements = document.getElementsByClassName("edit-btn-parent");
      Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains("edit-btn-parent")) {
          element.addEventListener("click", rowClickedParent());
        }
      });
    };
    const rowClickedParent = (row) => {
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
        { key: "parent", value: "false" },
      ]);
      fetchDocumentSpecificationWithParent([
        { key: "page", value: 0 },
        { key: "size", value: 10 },
      ]);
      fetchDocumentType();
      fetchDepartments();
      fetchEducationLevels();
    });
    const doSearch = (offset, limit, order, sort) => {
      documentSpecificationTable.value.isLoading = true;
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
            { key: "parent", value: "false" },
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
            { key: "parent", value: "false" },
          ]);
        }
      }, 600);
    };
    const doSearchParent = (offset, limit, order, sort) => {
      documentSpecificationTable.value.isLoading = true;
      setTimeout(() => {
        parentDocumentSpecificationTable.value.isReSearch =
          offset == undefined ? true : false;
        offset = offset / 10;
        if (sort == "asc") {
          fetchDocumentSpecificationWithParent([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "educationLevel", value: educationLevelSearchTerm.value },
            { key: "documentType", value: documentTypeSearchTern.value },
            { key: "applicantType", value: applicantTypeSearchTerm.value },
            {
              key: "applicationCategory",
              value: applicationCategorySearchTerm.value,
            },
            { key: "isCommon", value: isCommonDocumentParent.value },
            { key: "isRequired", value: isRequiredParent.value },
            { key: "department", value: departmentSearchTerm.value },

            { key: "parent", value: parentDocSearchTerm.value },
          ]);
        } else {
          fetchDocumentSpecificationWithParent([
            { key: "page", value: offset },
            { key: "size", value: limit },
            { key: "educationLevel", value: educationLevelSearchTerm.value },
            { key: "documentType", value: documentTypeSearchTern.value },
            { key: "applicantType", value: applicantTypeSearchTerm.value },
            {
              key: "applicationCategory",
              value: applicationCategorySearchTerm.value,
            },
            { key: "isCommon", value: isCommonDocumentParent.value },
            { key: "isRequired", value: isRequiredParent.value },
            { key: "department", value: departmentSearchTerm.value },

            { key: "parent", value: parentDocSearchTerm.value },
          ]);
        }
      }, 600);
    };
    return {
      doSearchParent,
      searchSpecParent,
      clearFiltersParent,
      tableLoadingFinishParent,
      rowClickedParent,
      parentEducationLevelSearchTerm,
      parentDocumentTypeSearchTerm,
      parentDepartmentSearchTerm,
      parentDocSearchTerm,
      parentApplicantTypeSearchTerm,
      isRequiredParent,
      parentApplicationCategorySearchTerm,
      isCommonDocumentParent,
      documentSpecificationTable,
      parentDocumentSpecificationTable,
      parentDocuments,
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
      modalType
    };
  },
};
</script>
<style scoped>
/* Apply these for table */
::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  color: #fff;
  background-color: #0d3552;
  border-color: #0d3552;
}
::v-deep(.vtl-table td),
::v-deep(.vtl-table tr) {
  border: none;
}
::v-deep(.vtl-paging-info) {
  color: rgb(25, 155, 230);
}
::v-deep(.vtl-paging-count-label),
::v-deep(.vtl-paging-page-label) {
  margin-right: 10px;
  margin-left: 10px;
  color: rgb(25, 155, 230);
}
::v-deep(.vtl-paging-pagination-page-link) {
  border: none;
}
::v-deep(.vtl-paging-count-dropdown) {
  margin-right: 10px;
  margin-left: 10px;
  color: rgb(0, 0, 0);
}

::v-deep(.vtl-tbody-tr) {
  border-bottom: 1px solid rgb(128, 128, 128) !important;
  padding: 5px !important;
}
</style>
