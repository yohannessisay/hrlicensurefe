<template>
  <!-- Sidebar -->
  <reviewer-side-bar> </reviewer-side-bar>

  <!-- Sidebar -->
  <section class="home-section">
    <!-- Header -->
    <reviewer-nav-bar
      ><ol class="list-reset flex">
        <li>
          <router-link to="/admin/review"
            ><span class="text-primary-600 text-base">Home</span></router-link
          >
        </li>
        <li><span class="text-gray-500 mx-2">/</span></li>

        <li>
          <a href="#" class="pointer-events-none text-lg text-grey-300"
            >License Expiration Management</a
          >
        </li>
      </ol></reviewer-nav-bar
    >
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="container px-4 sm:px-8">
        <div class="relative py-4">
          <p class="absolute left-0 text-2xl font-semibold leading-tight">
            View and manage license expiration dates found throughout the system
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
              Add Professional Prefix
            </button>
          </p>
        </div>

        <div class="w-full mt-8 rounded-xl">
          <vue-table-lite
            :is-static-mode="true"
            :is-loading="proPrefixTable.isLoading"
            :columns="proPrefixTable.columns"
            :rows="proPrefixTable.rows"
            :total="proPrefixTable.totalRecordCount"
            :sortable="proPrefixTable.sortable"
            @is-finished="tableLoadingFinish"
            @row-clicked="rowClicked"
          ></vue-table-lite>
        </div>
      </div>
    </div>
    <add-modal></add-modal>
    <edit-modal :editModalData="editModalData"></edit-modal>
    <!-- Main Content -->
  </section>
</template>

<script>
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { ref } from "vue";
import ReviewerNavBar from "./../SharedComponents/navBar.vue";
import ReviewerSideBar from "./../SharedComponents/sideNav.vue";
import VueTableLite from "vue3-table-lite";
import AddModal from "./addModal.vue";
import EditModal from "./editModal.vue";
import "@ocrv/vue-tailwind-pagination/dist/style.css";

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

    let proPrefixTable = ref({ isLoading: true });
    let proPrefixTableData = [];
    let showAddButton = ref(false);
    let editModalData = ref({ finalStatus: false, Name: "" });
    const fetchPrefixes = () => {
      store.dispatch("lookups/getProfessionalPrefix").then((res) => {
        res.data.data.forEach((element) => {
          proPrefixTableData.push({
            id: element.id ? element.id : "",
            Name: element.name ? element.name : "",
            Code: element.code ? element.code : "",
            Status: element && element.status == true ? "Active" : "Inactive",
            finalStatus: element.status,
          });
        });
        proPrefixTable.value = {
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
              label: "Name",
              field: "Name",
              width: "50%",
              sortable: true,
            },
            {
              label: "Code",
              field: "Code",
              width: "20%",
              sortable: true,
            },
            {
              label: "Status",
              field: "Status",
              width: "30%",
              display: function (row) {
                return row.Status && row.Status == "Active"
                  ? '<span  class="activeElement" >  ' + row.Status + " </span>"
                  : '<span  class="bg-red-300 rounded-md p-1 text-white font-bold" >' +
                      row.Status +
                      " </span>";
              },
              sortable: true,
            },
            {
              label: "",
              field: "quick",
              width: "10%",
              display: function (row) {
                return (
                  '<button data-bs-toggle="modal" data-bs-target="#editModal" class="edit-btn bg-primary-700 text-white hover:bg-white hover:text-primary-600 inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg  transition duration-150 ease-in-out" data-id="' +
                  row.id +
                  '" ><i class="fa fa-eye"></i> View/Edit</button>'
                );
              },
            },
          ],
          rows: proPrefixTableData,
          totalRecordCount: proPrefixTableData.length,
          sortable: {
            order: "id",
            sort: "asc",
          },
        };
        showAddButton.value = true;
      });
    };

    const tableLoadingFinish = () => {
      proPrefixTable.value.isLoading = false;
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
    onMounted(() => {
      fetchPrefixes();
    });
    return {
      proPrefixTable,
      showAddButton,
      editModalData,
      rowClicked,
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
