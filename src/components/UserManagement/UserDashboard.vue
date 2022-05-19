<template>
  <h1 class="text-center mt-12 text-3xl">User Management</h1>

  <div class="mt-20 ml-20 bg-primary-100">
    <Spinner v-if="showLoading" class="text-center" />
    <div class="float-right">
      <button class="btn " @click="createAdmin()">Create Admin</button>
    </div>
    <div class="flex flex-col mb-small w-80 mr-4">
      <label class="text-primary-700">Expert Level</label>
      <select
        class="max-w-3xl"
        clearable="{true}"
        v-model="expertLevelFilter"
        @change="filterExpertLevel($event.target.value)"
      >
        <option
          v-for="status in expertLevels"
          v-bind:key="status.code"
          v-bind:value="status.name"
        >
          {{ status.name }}
        </option>
      </select>
    </div>
    <div class="grid grid-cols-2">
      <div>
        <input
          type="text"
          class="mb-5"
          placeholder="Search for users"
          v-model="searchData"
          v-on:input="searchUserData()"
        />
      </div>
      <div class="mb-8 float-right mr-10 ">
        <label class="text-primary-700 ">Rows per page: </label>
        <select
          class="max-w-3xl "
          v-model="paginationSize"
          @change="handlePagSize($)"
          style="padding: 0px 35px 0px 5px; border: none; border-radius: unset; border-bottom: 2px solid lightblue;margin-left: 8px"
        >
          <option
            v-for="size in paginationSizeList"
            v-bind:key="size"
            v-bind:value="size"
          >
            {{ size }}
          </option>
        </select>
      </div>
    </div>
    <div
      id="printable"
      class="shadow-md rounded-lg  min-w-full"
      v-if="!showLoading"
    >
      <table v-if="!showLoading" class="w-full">
        <thead>
          <tr>
            <th
              class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
            ></th>
            <th
              class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
            >
              Full Name
            </th>

            <th
              class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
            >
              Role
            </th>
            <th
              class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
            >
              Phone Number
            </th>
            <th
              class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
            >
              Organizational Unit
            </th>
            <th
              class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
            >
              Action
            </th>
            <!-- <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        
                    </th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in reportData" :key="item">
            <td>
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ index }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-5 py-5 border-gray-200 bg-white text-sm">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.name }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-5 py-5 border-gray-200 bg-white text-sm">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.email }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-5 py-5 border-gray-200 bg-white text-sm">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.role?.name }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-5 py-5 border-gray-200 bg-white text-sm">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.phoneNumber }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-5 py-5 border-gray-200 bg-white text-sm">
              <div class="flex">
                <div class="ml-3">
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.expertLevel?.name }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-5 py-5 border-gray-200 bg-white text-sm">
              <div class="ml-3">
                <button
                  type="button"
                  class="btn  text-red-500 hover:bg-error hover:border-error "
                  title="Edit User"
                >
                  <i class="fa fa-edit " @click="openEditUserModal(item)"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <VueTailwindPagination
      :current="currentPage"
      :total="totalCount"
      :per-page="paginationSize"
      @page-changed="pageChanged($event)"
      text-before-input="Go to page"
      text-after-input="Go"
    />
  </div>
  <Modal v-if="showEditUserModal">
    <EditUser :data="editUserData" @closeModal="closeModal" />
  </Modal>
</template>
<script>
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import {ref} from "@vue/reactivity";
import {onMounted} from "@vue/runtime-core";
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";
import Spinner from "@/sharedComponents/Spinner";
import EditUser from "@/components/UserManagement/EditUser";
import Modal from "@/sharedComponents/Modal";

export default {
  components: {
    Spinner,
    VueTailwindPagination,
    EditUser,
    Modal,
  },
  computed: {},

  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    let reportData = ref([]);
    let allData = ref([]);
    let indexValue = ref(0);
    let currentPage = ref(1);
    let totalCount = ref();
    let searchData = ref();
    let editUserData = ref({});
    let showEditUserModal = ref(false);
    let paginationSize = ref(10);
    let expertLevelFilter = ref();

    let expertLevels = ref([
      {name: "All", code: "all"},
      {name: "Federal", code: "FED"},
      {name: "Regional", code: "REG"},
    ]);
    const paginationSizeList = [10, 25, 50, 100];
    let showLoading = ref(false);
    const getAdmins = () => {
      showLoading.value = true;
      store.dispatch("admin/getAdmins").then((res) => {
        console.log(res, " users");
        reportData.value = res.data.data;
        allData.value = res.data.data;
        showLoading.value = false;
        paginateReport(reportData.value, 0);
      });
    };
    const createAdmin = () => {
      router.push({path: "/admin/create"});
    };
    const filterExpertLevel = (eventParam) => {
      console.log('event param', eventParam);
      if (eventParam == "All") {
        console.log('if');
        reportData.value = allData.value;
        paginateReport(allData.value, 0);
      } else {
        console.log('else');
        reportData.value = allData.value.filter((data) => {

          return data.expertLevel.name.toLowerCase() == eventParam.toLowerCase();
        });
        paginateReport(reportData.value, 0);
          console.log(reportData.value);
      }
    };
    const pageChanged = (event) => {
      currentPage.value = event;
      indexValue.value = event - 1;
      paginateReport(allData.value, indexValue.value);
    };
    const searchUserData = () => {
      reportData.value = allData.value.filter((data) => {
        return (
          data.name.toLowerCase().includes(searchData.value.toLowerCase()) ||
          data.email.toLowerCase().includes(searchData.value.toLowerCase())
        );
      });
      paginateReport(reportData.value, indexValue.value);
    };
    const paginateReport = (reportValue, index) => {
      reportData.value = reportValue.slice(
        index * paginationSize.value,
        index * paginationSize.value + paginationSize.value
      );
      totalCount.value = reportValue.length;
    };
    const handlePagSize = () => {
      currentPage.value = 1;
      indexValue.value = 0;
      paginateReport(allData.value, indexValue.value);
    };
    const closeModal = () => {
      showEditUserModal.value = false;
    };
    const openEditUserModal = (data) => {
      showEditUserModal.value = true;
      editUserData.value = data;
    };

    onMounted(getAdmins);

    return {
      reportData,
      getAdmins,
      showLoading,
      pageChanged,
      currentPage,
      totalCount,
      paginationSize,
      paginationSizeList,
      handlePagSize,
      searchData,
      searchUserData,
      showEditUserModal,
      closeModal,
      openEditUserModal,
      editUserData,
      createAdmin,
      expertLevels,
      expertLevelFilter,
      filterExpertLevel,
    };
  },
};
</script>
