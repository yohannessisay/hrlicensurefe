<template
  ><div>
    <!-- <ReviewerNavBar tab="Report" /> -->
    <div class="flex ">
      <!-- <div>
        <ReviewerSideBar style="width: 30vh" />
      </div> -->
      <div>
        <div class="px-4">
          <div class="py-8">
       
          


     
            <div v-if="loader" style="margin-left: 45%; margin-top: 5%">
              <Spinner />
            </div>
            <div class="">
              <label class="text-primary-700">Rows per page: </label>
              <select
                class="max-w-3xl mb-4"
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
                 <span id="export" @click="exportTable()" class="ml-12 float-right">
                <a class="text-2xl font-semibold leading-tight">
                  <i class="fa fa-file-text" aria-hidden="true"></i>
                  Export
                </a>
              </span>
              <div
                id="printable"
                class="shadow-md rounded-lg  min-w-full"
                v-if="!showLoading"
              >
                <table class="w-full" id="myTable">
                  <thead>
                    <tr class="">
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                     Name
                      </th>
                   
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                      New Licence 
                      </th>
                   
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                      Renewal
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                      >
                      Good Standing
                      </th>                     
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in report" :key="item">
                      <td class="px-5 py-5 border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.name }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5  border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.newlicense }}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5  border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.renewal }}
                            </p>
                          </div>
                        </div>
                      </td>
                         <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                                {{item.goodstanding}}
                                </p>
                          </div>
                        </div>
                      </td>
                    
                      <!-- <td
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                        v-if="item.remark"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {{ item.remark }}
                            </p>
                          </div>
                        </div>
                      </td> -->
                      <!-- <td
                        v-else
                        class="px-5 py-5  border-gray-200 bg-white text-sm text-right"
                      >
                        <div class="flex">
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              ---
                            </p>
                          </div>
                        </div>
                      </td> -->
                    
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import ReviewerSideBar from "../Reviewer/ReviewerSideNav.vue";
import Spinner from "@/sharedComponents/Spinner";
import {ref, onMounted} from "vue";
import {useStore} from "vuex";
import {useRouter, useRoute} from "vue-router";
import moment from "moment";
import {saveAs} from "file-saver";
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";

export default {
  components: {
    ReviewerNavBar,
    Spinner,
    ReviewerSideBar,
    VueTailwindPagination,
  },

  computed: {
    moment: () => moment,
    getAllassignedToOthers() {
      return store.getters["reviewer/getAssignedForEveryOneSearched"];
    },
  },
  setup(props, {emit}) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

 
    let selectedApplicationType = ref("");

    let checked = ref({
      newLicense: true,
      renewal: true,
      goodStanding: true,
    });

    let selectedApplication = ref({
      newLicense: true,
      renewal: false,
      goodStanding: false,
      verification: false,
    });

    let currentPage = ref(1);
    let totalCount = ref();
    let lastIndex = ref(2);
    let report = ref([]);
    let showLoading = ref(false);
    let selectBackgroundColor = ref("newLicense");

    let searchingState = ref(false);

    let searchedValue = ref("");

    let indexValue = ref(0);
    let paginationSize = ref(10);
    const paginationSizeList = [10, 25, 50, 100];
    let reportData = ref([]);
    let reportForRegions = ref([]);
    let allData = ref([]);

    let renewalData = ref([]);
    let newLicenseData = ref([]);
    let goodStandingData = ref([]);

    const pageChanged = (event) => {
      currentPage.value = event;
      indexValue.value = event - 1;
      paginateReport(reportData.value, indexValue.value);
    };
    const handlePagSize = () => {
      currentPage.value = 1;
      indexValue.value = 0;
      paginateReport(reportData.value, indexValue.value);
    };
    const handleFilterByApplication = () => {
      console.log(selectedApplicationType.value, "selected application");

      switch (selectedApplicationType.value) {
        case "All": {
          console.log(selectedApplicationType.value, "all application");

          let fullData = [];

          ///// good standing
          fullData.push(...goodStandingData.value);
          //// new license
          fullData.push(...newLicenseData.value);
          /////  renewal
          fullData.push(...renewalData.value);

          reportData.value = fullData;
          allData.value = fullData;
          paginateReport(allData.value, 0);
          break;
        }
        case "New License": {
          console.log(selectedApplicationType.value, "new application");
          let newLData = [];
          allData.value = [];
          reportData.value = [];
          newLData.push(...newLicenseData.value);
          reportData.value = newLData;
          allData.value = newLData;
          paginateReport(allData.value, 0);
          break;
        }
        case "Renewal Report": {
          let newRRData = [];
          allData.value = [];
          reportData.value = [];
          newRRData.push(...renewalData.value);
          reportData.value = newRRData;
          allData.value = newRRData;
          paginateReport(allData.value, 0);
          break;
        }
        case "Goodstanding Report": {
          let newGSRData = [];
          allData.value = [];
          reportData.value = [];
          newGSRData.push(...goodStandingData.value);
          reportData.value = newGSRData;
          allData.value = newGSRData;
          paginateReport(allData.value, 0);
          break;
        }
      }
    };

    const handleCheckBoxClick = (type, event) => {
      if (!event.target.checked && type == "renewal") {
        let filterValue = reportData.value.filter((report) => {
          return !report.renewalCode;
        });
        paginateReport(filterValue, 0);
        reportData.value = filterValue;
        allData.value = filterValue;
      } else if (!event.target.checked && type == "newLicense") {
        let filterValue = reportData.value.filter((report) => {
          return !report.newLicenseCode;
        });
        paginateReport(filterValue, 0);
        reportData.value = filterValue;
        allData.value = filterValue;
      } else if (!event.target.checked && type == "goodStanding") {
        let filterValue = reportData.value.filter((report) => {
          return !report.goodStandingCode;
        });
        paginateReport(filterValue, 0);
        reportData.value = filterValue;
        allData.value = filterValue;
      } else if (event.target.checked && type == "renewal") {
        let mockRenewalData = reportData.value;
        mockRenewalData.push(...renewalData.value);
        reportData.value = mockRenewalData;
        allData.value = mockRenewalData;
        paginateReport(allData.value, 0);
      } else if (event.target.checked && type == "newLicense") {
        let mockNewLicenseData = reportData.value;
        mockNewLicenseData.push(...newLicenseData.value);
        reportData.value = mockNewLicenseData;
        allData.value = mockNewLicenseData;
        paginateReport(reportData.value, 0);
      } else if (event.target.checked && type == "goodStanding") {
        let mockGoodStandingData = reportData.value;
        mockGoodStandingData.push(...goodStandingData.value);
        reportData.value = mockGoodStandingData;
        allData.value = mockGoodStandingData;
        paginateReport(reportData.value, 0);
      }
    };

    let departments = ref([]);
    let professions = ref([]);
    let expertLevels = ref([
      {name: "Federal", id: 3, code: "FED"},
      {name: "Regional", id: 4, code: "REG"},
    ]);
    let regions = ref([]);
    let zones = ref([]);
    let woredas = ref([]);
    let applicationStatuses = ref([]);

    let filter = ref({
      deptType: "",
      profType: "",
      gender: "",
      region: "",
      zone: "",
      woreda: "",
      expertLevel: "",
      status: "",
      startDate: "",
      endDate: "",
      all: "",
    });

    let loader = ref(false);

    const changeBackgroundColor = (title) => {
      selectBackgroundColor.value = title;
    };

    const fetchNewLicenseReport = () => {
      loader.value = true;
      changeBackgroundColor("newLicense");
      store.dispatch("report/getAdminReport").then((res) => {
        console.log(res);
        newLicenseData.value = res.data.data;
        reportData.value.push(...res.data.data);
        allData.value.push(...res.data.data);
        paginateReport(reportData.value, 0);
        store.dispatch("report/setReport", reportData.value);
        loader.value = false;
      });
    };

 

    const paginateReport = (reportValue, index) => {
      report.value = reportValue.slice(
        index * paginationSize.value,
        index * paginationSize.value + paginationSize.value
      );
      totalCount.value = reportValue.length;
    };



    const exportTable = () => {
      var blob = new Blob([document.getElementById("printable").innerHTML], {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8",
      });
      saveAs(blob, "Report.xls");
    };

    const searchByName = () => {
      searchingState.value = true;
      let filterByName = allData.value.filter((report) => {
        return (
          report.name.toLowerCase().includes(searchedValue.value) ||
          report.fatherName.toLowerCase().includes(searchedValue.value) ||
          report.grandFatherName.toLowerCase().includes(searchedValue.value) ||
          report.goodStandingCode? report.goodStandingCode.toLowerCase().includes(searchedValue.value.toLowerCase()): 
          report.renewalCode? report.renewalCode.toLowerCase().includes(searchedValue.value.toLowerCase()): 
          report.newLicenseCode.toLowerCase().includes(searchedValue.value.toLowerCase()) 
        );
      });
      paginateReport(filterByName, 0);
      reportData.value = filterByName;
    };

    const clearSearch = () => {
      searchingState.value = false;
      searchedValue.value = "";
      reportData.value = allData.value;
      paginateReport(reportData.value, 0);
    };


    onMounted(() => {
      fetchNewLicenseReport();

    });
    return {
      loader,
      report,
      exportTable,
      fetchNewLicenseReport,

      professions,
      regions,
      zones,
      woredas,
      applicationStatuses,
      filter,
      selectedApplication,
      changeBackgroundColor,
      currentPage,
      totalCount,
      paginationSize,
      paginationSizeList,
      pageChanged,
      handlePagSize,
      selectBackgroundColor,
      checked,
      handleCheckBoxClick,
      selectedApplicationType,
      handleFilterByApplication,
      departments,
      expertLevels,
      searchByName,
      searchedValue,
      clearSearch,
      searchingState,
    };
  },
};
</script>

<style>
.titile-container {
  flex-wrap: wrap;
}
.filter-container {
  flex-wrap: wrap;
}
.applicationType {
  background-color: #285180;
  color: #ffffff;
}
th {
  color: #648ea3;
  background-color: #eff6ff;
}
.sidenav {
  width: 500px;
}
#export {
  cursor: pointer;
}
a:link {
  color: yellow;
}
a {
  cursor: pointer;
  color: #648ea3;
}
a:visited {
  color: red;
  cursor: pointer;
}
a:active {
  color: red;
}
a:hover {
  color: #0b5980;
}
#printable {
  /* display: block; */
  /* width: 90%; */
  overflow-x: scroll;
  overflow-y: hidden;
}
.clear-lable {
  cursor: pointer;
}
</style>
