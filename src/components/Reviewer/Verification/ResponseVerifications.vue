<template>
  <div class="p-5">
    <h1 class="text-center mb-3">Respond To Verifications</h1>
    <div class="mt-5">
      <Spinner v-if="showLoading" class="text-center" />
    </div>
    <div>
      <div class="grid grid-cols-2">
        <div>
          <input
            type="text"
            class="mb-5"
            placeholder="Search for Applications by user"
            v-model="searchData"
            v-on:input="searchVerificationData()"
          />
        </div>
        <div class="mb-8 float-right mr-10">
          <label class="text-primary-700">Rows per page: </label>
          <select
            class="max-w-3xl"
            v-model="paginationSize"
            @change="handlePagSize($)"
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
        </div>
      </div>
      <div
        id="printable"
        class="shadow-md rounded-lg min-w-full"
        v-if="!showLoading"
      >
        <table v-if="!showLoading" class="w-full">
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
              ></th>
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
                Applicant Name
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
                Requested Region
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
                License Code
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
                Verified By
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
                Is Verified ?
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
                      {{
                        item.Profiles?.name +
                        " " +
                        item.Profiles?.fatherName +
                        " " +
                        item.Profiles?.grandFatherName
                      }}
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
                      {{
                        item.NewLicense
                          ? item.NewLicense.newLicenseCode
                          : item.Renewal
                          ? item.Renewal.renewalCode
                          : "----"
                      }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-gray-200 bg-white text-sm">
                <div class="flex">
                  <div class="ml-3">
                    {{ item.verifier?.name }}
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-gray-200 bg-white text-sm">
                <div
                  class="flex"
                  :style="
                    item.isVerified === true
                      ? 'background-color: green;border-radius: 25px;'
                      : 'background-color: red;border-radius: 25px;'
                  "
                >
                  <div class="ml-3">
                    {{ item.isVerified }}
                  </div>
                </div>
              </td>

              <td class="px-5 py-5 border-gray-200 bg-white text-sm">
                <div class="flex">
                  <div class="ml-3">
                
                    <button @click="showResponse(item)">
                        <i class="fas fa-eye"></i>&nbsp;
                      View</button>
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
    <Modal v-if="showResponseVerificationModal">
      <ResponseVerificationModal @closeModal="closeModal" :item="item">
        <form class="ml-2 mt-2" @submit.prevent="saveVerification()">
          <div class="grid grid-cols-3 gap-4">
            <div class="form-group mb-4">
              <label for="firstName">Applicant Name</label>
              <input
                disabled
                readonly
                v-model="applicantName"
                type="text"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-lightBlueB-500 bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                style="color: white; font-weight: bold"
                id="applicantName"
                placeholder="Applicant Name"
              />
            </div>
            <div class="form-group mb-4">
              <label for="requestedRegion">Requested Region</label>
              <input
                disabled
                v-model="requestedRegion"
                type="text"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-lightBlueB-500 bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                style="color: white; font-weight: bold"
                id="requestedRegion"
                placeholder="Requested Region"
              />
            </div>
            <div class="form-group mb-4">
              <label for="requestedRegion">License Code</label>
              <input
                disabled
                v-model="licenseCode"
                type="text"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-lightBlueB-500 bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                style="color: white; font-weight: bold"
                id="licenseCode"
                placeholder="License Code"
              />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="form-group mb-4">
              <label for="requestedRegion">Verified By</label>
              <input
                disabled
                v-model="verifiedBy"
                type="text"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-lightBlueB-500 bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                style="color: white; font-weight: bold"
                id="verifiedBy"
              />
            </div>

            <div class="form-group mb-4">
              <label for="requestedRegion">Is Verified</label>
              <div class="flex justify-left">
                <div class="form-check form-switch">
                  <input
                    @change="verifiedCheck"
                    class="
                      form-check-input
                      appearance-none
                      w-12
                      ml-4
                      mt-2
                      rounded-full
                      float-right
                      h-5
                      align-bottom
                      bg-white bg-no-repeat bg-contain bg-gray-300
                      focus:outline-none
                      cursor-pointer
                      shadow-bg
                    "
                    type="checkbox"
                    role="switch"
                    id="isVerified"
                    :style="
                      isVerified === null
                        ? 'background-color: #FFFFFF;!important'
                        : isVerified === false
                        ? 'background-color: #ff0000;!important'
                        : 'background-color: #59D308;!important'
                    "
                  />
                </div>
                <label
                  class="form-check-label inline-block text-gray-800 mt-2"
                  for="flexSwitchCheckDefault"
                  >({{
                    isVerified === null
                      ? "Click the Checkbox"
                      : isVerified === true
                      ? "True"
                      : "False"
                  }})</label
                >
              </div>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="form-group mb-4">
              <label for="requestedRegion">Verification Requester Name</label>
              <input
                disabled
                v-model="requester"
                type="text"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-lightBlueB-500 bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                "
                style="color: white; font-weight: bold"
                id="requesterName"
                placeholder="Requester Name"
              />
            </div>

            <div class="form-group mb-4">
              <label for="firstName">Remark</label>
              <textarea
                v-model="remark"
                type="textarea"
                rows="4"
                class="
                  block
                  p-2.5
                  w-full
                  text-sm text-gray-900
                  bg-gray-50
                  rounded-lg
                  border border-gray-300
                  focus:ring-blue-500 focus:border-blue-500
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500
                "
                id="remark"
                placeholder="Remark details"
              />
            </div>

            <div class="form-group mb-4">
              <label for="firstName">Malpractice Information</label>
              <textarea
                rows="4"
                class="
                  pa-2
                  block
                  p-2.5
                  w-full
                  text-sm text-gray-900
                  bg-gray-50
                  rounded-lg
                  border border-gray-300
                  focus:ring-blue-500 focus:border-blue-500
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500
                "
                placeholder="Information regarding malpractice"
                v-model="malpracticeInfo"
                type="textarea"
                id="malpracticeInfo"
              />
            </div>
          </div>

          <button
            type="submit"
            class="
              text-gray-500
              bg-white
              hover:bg-gray-100
              focus:ring-4 focus:outline-none focus:ring-gray-200
              rounded-lg
              border border-gray-200
              text-sm
              font-medium
              px-5
              py-2.5
              hover:text-gray-900
              focus:z-10
              dark:bg-gray-700
              dark:text-gray-300
              dark:border-gray-500
              dark:hover:text-white
              dark:hover:bg-gray-600
              dark:focus:ring-gray-600
            "
            style="color: white !important;"
          >
            Save
          </button>
          <button
          type="button"
            @click="closeModal()"
            class="
              text-gray-500
              bg-white
              hover:bg-gray-100
              focus:ring-4 focus:outline-none focus:ring-gray-200
              rounded-lg
              border border-gray-200
              text-sm
              font-medium
              px-5
              py-2.5
              hover:text-gray-900
              focus:z-10
              dark:bg-gray-700
              dark:text-gray-300
              dark:border-gray-500
              dark:hover:text-white
              dark:hover:bg-gray-600
              dark:focus:ring-gray-600
            "
             style="color: white !important;"
          >
            Cancel
          </button>
        </form>
      </ResponseVerificationModal>
    </Modal>
    <ErrorFlashMessage :message="message.errorMessage" v-if="response.error" />
    <FlashMessage
      message="Successfully edited verification Data"
      v-if="response.success"
    />
  </div>
</template>

<script>
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import Spinner from "@/sharedComponents/Spinner";
import Modal from "@/sharedComponents/Modal";
import ResponseVerificationModal from "@/components/Reviewer/Verification/ResponseVerificationModal.vue";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";

import FlashMessage from "@/sharedComponents/FlashMessage";
export default {
  components: {
    Spinner,
    VueTailwindPagination,
    ResponseVerificationModal,
    Modal,
    FlashMessage,
    ErrorFlashMessage,
  },
  setup() {
    const store = useStore();
    let allData = ref([]);
    let indexValue = ref(0);
    let verificationData = ref([]);
    let currentPage = ref(1);
    let totalCount = ref();
    let searchData = ref();
    let applicantId = ref("");
    let paginationSize = ref(10);
    let expertLevelFilter = ref();
    let applicantName = ref("");
    let requestedRegion = ref("");
    let licenseCode = ref("");
    let verifiedBy = ref("");
    let remark = ref("");
    let regionId = ref("");
    let licenseId = ref("");
    let renewalId = ref("");
    let verificationId = ref("");
    let issuedInGoodStanding = ref("");
    let malpracticeInfo = ref("");
    let isVerified = ref(null);
    let requester = ref("");
    let loggedInAdmin = JSON.parse(localStorage.getItem("allAdminData"));

    let response = ref({
      success: false,
      error: false,
    });
    let message = ref({
      successMessage: "",
      errorMessage: "",
    });
    let editedData = {};

    const paginationSizeList = [10, 25, 50, 100];
    let showLoading = ref(false);
    let showResponseVerificationModal = ref(false);
    const showResponse = (data) => {
      applicantName.value = "";
      requestedRegion.value = "";
      licenseCode.value = "";
      verifiedBy.value = "";
      remark.value = "";
      malpracticeInfo.value = "";
      isVerified.value = null;
      requester.value = "";
      applicantId.value = "";
      issuedInGoodStanding.value = "";
      regionId.value = "";
      licenseId.value = "";
      renewalId.value = "";
      verificationId.value = "";

      applicantName.value =
        data.Profiles.name +
        " " +
        data.Profiles.fatherName +
        " " +
        data.Profiles.grandFatherName;
      requestedRegion.value = data.Region.name;
      licenseCode.value = data.NewLicense
        ? data.NewLicense.newLicenseCode
        : data.Renewal
        ? data.Renewal.renewalCode
        : "----";
      verifiedBy.value = data.verifier?.name;
      if (data.isVerified != null) {
        isVerified.value = data.isVerified;
      }
      requester.value = data.requester.name;
      malpracticeInfo.value = data.malpracticeInfo;
      remark.value = data.remark;
      issuedInGoodStanding.value = data.issuedInGoodStanding;
      applicantId.value = data.applicantId;
      regionId.value = data.regionId;
      renewalId.value = data.renewalId;
      licenseId.value = data.licenseId;
      verificationId.value = data.id;
      showResponseVerificationModal.value = true;
    };
    const closeModal = () => {
      showResponseVerificationModal.value = false;
    };

    const verifiedCheck = () => {
      isVerified.value = !isVerified.value;
    };
    const getVerifications = () => {
      showLoading.value = true;
      store
        .dispatch(
          "applicationVerification/getRequestsByRegion",
          loggedInAdmin.roleId
        )
        .then((res) => {
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
          data.Profiles.name
            .toLowerCase()
            .includes(searchData.value.toLowerCase()) ||
          data.Profiles.fatherName
            .toLowerCase()
            .includes(searchData.value.toLowerCase()) ||
          data.Profiles.grandFatherName
            .toLowerCase()
            .includes(searchData.value.toLowerCase())
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

    const saveVerification = () => {
      editedData.isVerified = isVerified.value;
      editedData.remark = remark.value;
      editedData.malpracticeInfo = malpracticeInfo.value;
      editedData.verifier = loggedInAdmin.name;
      editedData.applicantId = applicantId.value;
      editedData.issuedInGoodStanding = issuedInGoodStanding.value;
      editedData.regionId = regionId.value;
      editedData.verifiedById = loggedInAdmin.id;
      editedData.renewalId = renewalId.value;
      editedData.licenseId = licenseId.value;
      editedData.verificationId = verificationId.value;

      store
        .dispatch("applicationVerification/saveResponse", editedData)
        .then((res) => {
          if (res.data.status == "Success") {
            response.value.success = true;
            showResponseVerificationModal.value = false;
            getVerifications();
            setTimeout(() => {
              response.value.success = false;
            }, 3000);
          } else {
            response.value.error = true;
            message.value.errorMessage = res.data.message;
          }
        });
    };

    onMounted(getVerifications);
    return {
      showResponseVerificationModal,
      showResponse,
      closeModal,
      saveVerification,
      applicantName,
      requestedRegion,
      remark,
      malpracticeInfo,
      licenseCode,
      verifiedBy,
      isVerified,
      requester,
      allData,
      message,
      response,
      indexValue,
      currentPage,
      totalCount,
      verifiedCheck,
      searchData,
      FlashMessage,
      ErrorFlashMessage,
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
