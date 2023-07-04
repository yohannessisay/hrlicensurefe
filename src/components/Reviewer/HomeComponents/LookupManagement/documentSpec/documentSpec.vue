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
          <p class="absolute left-0 text-2xl font-semibold leading-tight">
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
                shadow-lg
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

        <div class="w-full mt-8 rounded-xl">
          <vue-table-lite
            :is-static-mode="true"
            :is-loading="documentSpecificationTable.isLoading"
            :columns="documentSpecificationTable.columns"
            :rows="documentSpecificationTable.rows"
            :total="documentSpecificationTable.totalRecordCount"
            :sortable="documentSpecificationTable.sortable"
            @is-finished="tableLoadingFinish"
            @row-clicked="rowClicked"
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
    const fetchdocumentSpecification = () => {
      store.dispatch("lookups/getAllDocumentSpecs").then((res) => {
        res.data.data.forEach((element) => {
          documentSpecificationTableData.push({
            id: element.id ? element.id : "",
            ApplicationCategory: element.applicationCategory
              ? element.applicationCategory.name
              : "",
            ApplicantType: element.applicantType
              ? element.applicantType.name
              : "",
            DocumentType: element.documentType ? element.documentType.name : "",
            EducationalLevel:
              element && element.educationalLevel
                ? element.educationalLevel.name
                : "",
            EducationLevel: element.educationalLevel
              ? element.educationalLevel.name
              : "---",
            IsCommonDocument:
              element.isCommonDocument && element.isCommonDocument == true
                ? "Yes"
                : element.isCommonDocument && element.isCommonDocument == false
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
          isLoading: false,
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
          totalRecordCount: documentSpecificationTableData.length,
          sortable: {
            order: "id",
            sort: "asc",
          },
        };
        showAddButton.value = true;
      });
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
          }
        })
        .catch((err) => console.log(err));
    };
    const fetchDepartments = () => {
      store
        .dispatch("lookups/getDepartments")
        .then((res) => {
          if (res.data.data) {
            res.data.data.push({name:'None',id:null})
            modalLookups.value.departments = res.data.data;
          }
        })
        .catch((err) => console.log(err));
    };
    const fetchEducationLevels = () => {
      store
        .dispatch("lookups/getEducationLevel")
        .then((res) => {
          if (res.data.data) {
             res.data.data.push({name:'None',id:null})
            modalLookups.value.educationLevels = res.data.data;
          }
        })
        .catch((err) => console.log(err));
    };
    onMounted(() => {
      fetchdocumentSpecification();
      fetchDocumentType();
      fetchDepartments();
      fetchEducationLevels();
    });
    return {
      documentSpecificationTable,
      showAddButton,
      editModalData,
      rowClicked,
      modalLookups,
      tableLoadingFinish,
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
