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
            >Professions Report</a
          >
        </li>
      </ol>
    </reviewer-nav-bar>
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="container mx-auto px-4 sm:px-8">
        <div class="relative py-4 mb-4">
          <h2 class="absolute mb-4 text-2xl font-semibold">
            View profession reports for all applications
          </h2>

          <p class="absolute right-0">
            <button
              class="px-6 text-white bg-primary-600 hover:text-primary-600 font-medium text-xs leading-tight uppercase rounded focus: focus:outline-none focus:ring-0 transition duration-150 mt-0 ease-in-out text-right"
              @click="exportTable()"
            >
              <i class="fa fa-file-excel text-xl"></i>
              Generate Report
            </button>
          </p>
        </div>
        <div class="mt-8">
          <div class="flex">
            Legend -
            <span class="bg-primary-600 p-2 block w-6 h-6 rounded-full mr-1 ml-1"></span>
            <h2 class="text-primary-600 mr-4">New License</h2>
            <span class="bg-green-200 p-2 block w-6 h-6 rounded-full mr-1"></span>
            <h2 class="text-green-200 mr-4">Renewal</h2>
            <span class="bg-yellow-300 p-2 block w-6 h-6 rounded-full mr-1"></span>
            <h2 class="text-yellow-300">Goodstanding</h2>
          </div>
        </div>
        <div class="mt-4 border p-2 shadow-md">
          <label for="" class="">License Status</label>
          <select
            class="form-select appearance-none block w-full px-6 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            v-model="searchTermStatus"
            aria-label="Default select example"
            @change="applyFilter()"
          >
            <option value="">All</option>
            <option
              v-for="appStatus in applicationStatuses"
              :key="appStatus.id"
              :value="appStatus"
            >
              {{ appStatus.name }}
            </option>
          </select>
        </div>
        <div class="vld-parent mt-2">
          <loading
            :active="isLoading"
            :is-full-page="false"
            :color="'#2F639D'"
            :opacity="1"
          ></loading>
          <div class="mt-8">
            <div class="bg-white p-6 rounded-lg border overflow-x-scroll">
              <div class="inline-block min-w-full rounded-lg overflow-hidden">
                <div class="flex flex-col items-center justify-center py-10">
                  <table class="min-w-full text-sm text-gray-400" id="chebude">
                    <thead
                      class="bg-primary-700 text-white uppercase font-medium"
                      v-if="expertLevel == 'REG'"
                    >
                      <tr>
                        <th class="px-6 py-3 text-left tracking-wider rounded-l-md">
                          NO
                        </th>
                        <th class="px-6 py-3 text-left tracking-wider">
                          Profession Name
                        </th>
                        <th class="px-6 py-3 text-left tracking-wider">
                          New License Total
                        </th>
                        <th class="px-6 py-3 text-left tracking-wider">Renewal Total</th>
                        <th class="px-6 py-3 text-left tracking-wider rounded-tr-md">
                          Goodstanding Total
                        </th>
                      </tr>
                    </thead>
                    <thead class="bg-primary-700 text-white uppercase" v-else>
                      <tr>
                        <th>
                          <h2 class="text-white text-2xl m-2">
                            {{
                              searchTermStatus && searchTermStatus != ""
                                ? searchTermStatus.name + " licenses and letters"
                                : "All"
                            }}
                          </h2>
                        </th>
                      </tr>
                      <tr>
                        <th class="border">Region Name</th>
                        <th></th>

                    <td>   </td>
                        <td>    <th class="px-6 py-3 text-left border">Appliction Type</th>
                        <th class="px-6 py-3 text-left ">Profession Name</th> </td>
                      </tr>
                    </thead>
                    <tbody class="bg-gray-800" v-if="expertLevel == 'REG'">
                      <tr v-for="(prof, index) in allData" :key="index" class="border-b">
                        <td class="text-grey-800 p-2 border">{{ index }}</td>
                        <td class="text-grey-800 p-2 border">
                          {{ prof.name }}
                        </td>
                        <td class="text-primary-600 p-2 border">
                          {{ prof.newLicense }}
                        </td>
                        <td class="text-green-200 p-2 border">
                          {{ prof.renewal }}
                        </td>
                        <td class="text-yellow-300 p-2 border">
                          {{
                            prof.goodStanding && Number(prof.goodStanding)
                              ? prof.goodStanding
                              : "----"
                          }}
                        </td>
                      </tr>
                      <tr class="border-b">
                        <td></td>
                        <td class="text-yellow-300 p-2 border">Total</td>
                        <td class="text-yellow-300 p-2 border">
                          {{ totalValues.newLicense }}
                        </td>
                        <td class="text-yellow-300 p-2 border">
                          {{ totalValues.renewal }}
                        </td>
                        <td class="text-yellow-300 p-2 border">
                          {{ totalValues.goodStanding }}
                        </td>
                      </tr>
                    </tbody>
                    <tbody class="bg-gray-800" v-else>
                      <tr v-for="(prof, index) in allData" :key="index" class="border-b">
                        <td colspan="2" class="text-main-400 p-2 border text-xl">
                          {{ prof.name }}
                        </td>
                        <td></td>
                        <td>
                          <tr class="border">
                            <td class="text-primary-600 px-4 text-lg">New License</td>
                            <td class="border">
                              <tr>
                                <td
                                  v-for="(newL, index) in prof.newLicense"
                                  :key="index"
                                  class="text-grey-800 p-2 border"
                                >
                                  {{ newL.professionName }}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  v-for="(newL, index) in prof.newLicense"
                                  :key="index"
                                  class="p-2 border"
                                >
                                  <h2 class="text-primary-600 text-xl">
                                    {{ newL.professionCount }}
                                  </h2>
                                </td>
                              </tr>
                            </td>
                          </tr>
                          <tr class="border">
                            <td class="text-green-200 px-4 text-lg">Renewal</td>
                            <td class="border">
                              <tr class="border">
                                <td
                                  v-for="(newL, index) in prof.renewal"
                                  :key="index"
                                  class="text-grey-800 p-2 border"
                                >
                                  {{ newL.professionName }}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  v-for="(newL, index) in prof.renewal"
                                  :key="index"
                                  class="p-2 border"
                                >
                                  <h2 class="text-green-200 text-xl">
                                    {{ newL.professionCount }}
                                  </h2>
                                </td>
                              </tr>
                            </td>
                          </tr>
                          <tr class="border">
                            <td class="text-yellow-300 px-4 text-lg">Good Standing</td>
                            <td class="border">
                              <tr>
                                <td
                                  v-for="(newL, index) in prof.goodStanding"
                                  :key="index"
                                  class="text-grey-800 p-2 border"
                                >
                                  {{ newL.professionName }}
                                </td>
                              </tr>
                              <tr>
                                <td
                                  v-for="(newL, index) in prof.goodStanding"
                                  :key="index"
                                  class="text-yellow-300 p-2 border"
                                >
                                  <h2 class="text-yellow-300 text-xl">
                                    {{ newL.professionCount }}
                                  </h2>
                                </td>
                              </tr>
                            </td>
                          </tr>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Main Content -->
  </section>
</template>

<script>
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import ReviewerNavBar from "./SharedComponents/navBar.vue";
import ReviewerSideBar from "./SharedComponents/sideNav.vue";
import * as XLSX from "xlsx";
import "@ocrv/vue-tailwind-pagination/dist/style.css";
import Loading from "vue3-loading-overlay";
export default {
  components: {
    ReviewerNavBar,
    ReviewerSideBar,
    Loading,
  },

  setup() {
    const store = useStore();
    let allData = ref([]);
    let isLoading = ref(true);
    let searchTermStatus = ref("");
    let totalValues = ref({ newLicense: 0, renewal: 0, goodStanding: 0 });
    let applicationStatuses = ref([]);
    let expertLevel = JSON.parse(localStorage.getItem("allAdminData"))
      ? JSON.parse(localStorage.getItem("allAdminData")).expertLevel.code
      : {};
    const fetchProfessionReport = (param) => {
      isLoading.value = true;

      store.dispatch("stats/getLicensesCountByProfession", param).then((res) => {
        let tempList = [];
        allData.value = [];
        totalValues.value.newLicense = 0;
        totalValues.value.renewal = 0;
        totalValues.value.goodStanding = 0;
        let tempData = res && res.data ? res.data : [];
        if (expertLevel == "REG") {
          // if filter is applied, otherwise the count and distniction is already done on the backend
          if (param[0].value.length == 0) {
            tempData = mergeSameValues(
              tempData.newLicense,
              tempData.renewal,
              tempData.goodStanding
            );
          }

          tempList = returnFilteredValues(
            tempData.newLicense,
            tempData.renewal,
            tempData.goodStanding
          );
        } else {
          tempList = res && res.data ? res.data : [];
        }

        allData.value = tempList;

        allData.value.forEach((element) => {
          totalValues.value.newLicense += Number(element.newLicense)
            ? Number(element.newLicense)
            : 0;
          totalValues.value.renewal += Number(element.renewal)
            ? Number(element.renewal)
            : 0;
          totalValues.value.goodStanding += Number(element.goodStanding)
            ? Number(element.goodStanding)
            : 0;
        });

        isLoading.value = false;
      });
    };
    const mergeSameValues = (arrayA, arrayB, arrayC) => {
      let tempData = { newLicense: [], renewal: [], goodStanding: [] };
      tempData.newLicense = Object.values(
        arrayA.reduce((value, object) => {
          if (value[object.professionName]) {
            value[object.professionName].professionCount = Number(
              value[object.professionName].professionCount
            );
            value[object.professionName].professionCount += Number(
              object.professionCount
            );
          } else {
            value[object.professionName] = { ...object };
          }
          return value;
        }, {})
      );

      tempData.renewal = Object.values(
        arrayB.reduce((value, object) => {
          if (value[object.professionName]) {
            value[object.professionName].professionCount = Number(
              value[object.professionName].professionCount
            );
            value[object.professionName].professionCount += Number(
              object.professionCount
            );
          } else {
            value[object.professionName] = { ...object };
          }
          return value;
        }, {})
      );
      tempData.goodStanding = Object.values(
        arrayC.reduce((value, object) => {
          if (value[object.professionName]) {
            value[object.professionName].professionCount = Number(
              value[object.professionName].professionCount
            );
            value[object.professionName].professionCount += Number(
              object.professionCount
            );
          } else {
            value[object.professionName] = { ...object };
          }
          return value;
        }, {})
      );
      return tempData;
    };
    const returnFilteredValues = (arrayA, arrayB, arrayC) => {
      const mergedArray = [];
      for (const object of arrayA) {
        const matchingObject = arrayB.find(
          (element) => element.professionName == object.professionName
        );
        if (matchingObject) {
          mergedArray.push({
            name: object.professionName,
            newLicense: Number(object.professionCount),
            renewal: Number(matchingObject.professionCount),
            goodStanding: "----",
          });
        } else {
          mergedArray.push({
            name: object.professionName,
            newLicense: Number(object.professionCount),
            renewal: "----",
            goodStanding: "----",
          });
        }
      }
      for (const object of arrayB) {
        if (!arrayA.find((element) => element.professionName == object.professionName)) {
          mergedArray.push({
            name: object.professionName,
            renewal: Number(object.professionCount),
            newLicense: "----",
            goodStanding: "----",
          });
        }
      }
      for (const object of arrayC) {
        const matchingObject = mergedArray.find(
          (element) => element.name == object.professionName
        );
        if (matchingObject) {
          mergedArray.goodStanding = Number(object.professionCount);
        } else {
          mergedArray.push({
            name: object.professionName,
            goodStanding: Number(object.professionCount),
            renewal: "----",
            newLicense: "----",
          });
        }
      }
      return mergedArray;
    };

    const exportTable = () => {
      if (expertLevel == "REG") {
        let tempData = [];
        allData.value.forEach((element) => {
          tempData.push({
            "Profession Name": element.name,
            "New License": element.newLicense,
            Renewal: element.renewal,
            "Good Standing": element.goodStanding,
          });
        });
        tempData.push({
          "Profession Name": "Total",
          "New License": allData.value.totalNewLicense,
          Renewal: allData.value.totalGoodStanding,
          "Good Standing": allData.value.totalGoodStanding,
        });

        const exportWS = XLSX.utils.json_to_sheet(tempData);

        const wb = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(wb, exportWS, "professions");

        XLSX.writeFile(wb, new Date().toISOString().slice(0, 10) + "_professions.xlsx");
      } else {
        var wb = XLSX.utils.book_new();
        wb.Props = {
          Title: "Professions report",
          Subject: "Professions Report",
          Author: "MOH",
          CreatedDate: new Date(2017, 12, 19),
        };
        wb.SheetNames.push("Professions Report");
        var ws_data = [["ALL"], ["Region Name", "Application Type", "Profession Name"]];

        let j = 2;
        let tempVar = 0;
        allData.value.forEach((element) => {
          if (tempVar > 0) {
            j += 1;
          }
          ws_data.push([element.name, "New License"]);
          ws_data.push([
            { t: "z", v: "" },
            { t: "z", v: "" },
          ]);
          element.newLicense.forEach((element) => {
            ws_data[j].push(element.professionName);
            ws_data[j + 1].push(element.professionCount);
          });

          ws_data.push([{ t: "z", v: "" }, "Renewal"]);
          ws_data.push([
            { t: "z", v: "" },
            { t: "z", v: "" },
          ]);
          element.renewal.forEach((element) => {
            ws_data[j + 2].push(element.professionName);
            ws_data[j + 3].push(element.professionCount);
          });

          ws_data.push([{ t: "z", v: "" }, "Goodstanding"]);
          ws_data.push([
            { t: "z", v: "" },
            { t: "z", v: "" },
          ]);
          element.goodStanding.forEach((element) => {
            ws_data[j + 4].push(element.professionName);
            ws_data[j + 5].push(element.professionCount);
          });
          j += 5;
          tempVar++;
        });
 
        var ws = XLSX.utils.aoa_to_sheet(ws_data);
        wb.Sheets["Professions Report"] = ws;
        XLSX.writeFile(wb, new Date().toISOString().slice(0, 10) + "_professions.xlsx");
        
      }
    };
    const applyFilter = () => {
      fetchProfessionReport([
        {
          key: "applicationStatus",
          value: searchTermStatus.value ? searchTermStatus.value.id : "",
        },
      ]);
    };

    onMounted(() => {
      fetchProfessionReport([
        {
          key: "applicationStatus",
          value: searchTermStatus.value ? searchTermStatus.value.id : "",
        },
      ]);
      let tempAp = JSON.parse(localStorage.getItem("applicationStatuses"))
        ? JSON.parse(localStorage.getItem("applicationStatuses"))
        : [];

      applicationStatuses.value = tempAp.filter((application) => {
        return (
          application.code == "APP" ||
          application.code == "DEC" ||
          application.code == "SUSP" ||
          application.code == "RTN" ||
          application.code == "USUP" ||
          application.code == "RVK"
        );
      });
    });
    return {
      exportTable,
      isLoading,
      allData,
      expertLevel,
      searchTermStatus,
      applyFilter,
      applicationStatuses,
      totalValues,
    };
  },
};
</script>
