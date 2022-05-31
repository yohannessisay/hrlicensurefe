<template>
  <div class=" p-5">
    <h2 class="align-middle ">Verification Requests</h2>
    <div class="float-right">
      <button @click="showNewVerificationModal()">Request Verifications</button>
    </div>
    <div>
      <div class="grid grid-cols-2">
        <div>
          <input
            type="text"
            class="mb-5"
            placeholder="Search for users"
            v-model="searchData"
            v-on:input="searchVerificationData()"
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
                Applicant Name
              </th>
              
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Requested Region
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
               License Code
              </th>
            
              <!-- <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        
                    </th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in verificationData" :key="item">
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
                      {{ item.Region?.name }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-gray-200 bg-white text-sm">
                <div class="flex">
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ item.NewLicense? item.NewLicense.newLicenseCode: item.Renewal?item.Renewal.renewalCode: "----" }}
                    </p>
                  </div>
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
    <Modal v-if="showRequestVerificationModal">
      <RequestVerification @closeModal="closeModal" />
    </Modal>
  </div>
</template>

<script>
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import {ref} from "@vue/reactivity";
import {onMounted} from "@vue/runtime-core";
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";
import Spinner from "@/sharedComponents/Spinner";
import Modal from "@/sharedComponents/Modal";
import RequestVerification from "@/components/Reviewer/Verification/RequestVerification.vue";

import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";

export default {
  components: {
    Spinner,
    VueTailwindPagination,
    RequestVerification,
    Modal,
  },
  setup() {
      const store = useStore();
    const route = useRoute();
    const router = useRouter();
    let allData = ref([]);
    let indexValue = ref(0);
    let verificationData = ref([]);
    let currentPage = ref(1);
    let totalCount = ref();
    let searchData = ref();
    let paginationSize = ref(10);
    let expertLevelFilter = ref();
        let loggedInAdmin = JSON.parse(localStorage.getItem("allAdminData"));

    const paginationSizeList = [10, 25, 50, 100];
    let showLoading = ref(false);
    let showRequestVerificationModal = ref(false);
    const showNewVerificationModal = () => {
      showRequestVerificationModal.value = true;
    };
    const closeModal = () => {
      showRequestVerificationModal.value = false;
    };
    const getVerifications = () => {
      showLoading.value = true;
      store.dispatch("applicationVerification/getRequestsByRequester", loggedInAdmin.id).then((res) => {
        console.log(res, " users");
        verificationData.value = res.data.data;
        allData.value = res.data.data;
        showLoading.value = false;
        paginateReport(verificationData.value, 0);
      });
    };
    const pageChanged = (event) => {
      currentPage.value = event;
      indexValue.value = event - 1;
      paginateReport(allData.value, indexValue.value);
    };
    const searchVerificationData = () => {
      verificationData.value = allData.value.filter((data) => {
        return (
          data.name.toLowerCase().includes(searchData.value.toLowerCase()) ||
          data.email.toLowerCase().includes(searchData.value.toLowerCase())
        );
      });
      paginateReport(verificationData.value, indexValue.value);
    };
    const paginateReport = (reportValue, index) => {
      verificationData.value = reportValue.slice(
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
    onMounted(getVerifications);
    return {
      showRequestVerificationModal,
      showNewVerificationModal,
      closeModal,
      allData,
      indexValue,
      currentPage,
      totalCount,
      searchData,
      paginationSize,
      expertLevelFilter,
      paginationSizeList,
      showLoading,
      verificationData,
      pageChanged,
      paginateReport,
      handlePagSize,
      searchVerificationData,
      getVerifications,
    };
  },
};
</script>

<style></style>
