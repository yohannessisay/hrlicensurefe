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
        <div class="vld-parent mt-2">
          <loading
            :active="isLoading"
            :is-full-page="false"
            :color="'#2F639D'"
            :opacity="1"
          ></loading>
          <div class="mt-12">
            <div class="bg-white p-6 rounded-lg border overflow-x-scroll">
              <div class="inline-block min-w-full rounded-lg overflow-hidden">
                <div class="flex flex-col items-center justify-center py-10">
                  <table class="min-w-full text-sm text-gray-400">
                    <thead
                      class="bg-primary-700 text-white uppercase font-medium"
                      v-if="expertLevel == 'REG'"
                    >
                      <tr>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider rounded-l-md"
                        >
                          NO
                        </th>
                        <th scope="col" class="px-6 py-3 text-left tracking-wider">
                          Profession Name
                        </th>
                        <th scope="col" class="px-6 py-3 text-left tracking-wider">
                          New License Total
                        </th>
                        <th scope="col" class="px-6 py-3 text-left tracking-wider">
                          Renewal Total
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider rounded-tr-md"
                        >
                          Goodstanding Total
                        </th>
                      </tr>
                    </thead>
                    <thead class="bg-primary-700 text-white uppercase" v-else>
                      <tr>
                        <th
                          colspan="12"
                          class="px-6 py-3 text-left border rounded-tl-md"
                        ></th>
                      </tr>
                      <tr>
                        <th colspan="2" class="border">Region Name</th>
                        <th></th>

                        <th class="px-6 py-3 text-left border">Profession Name</th>
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

    let licenseTypeFilter = ref("newLicense");
    let expertLevel = JSON.parse(localStorage.getItem("allAdminData"))
      ? JSON.parse(localStorage.getItem("allAdminData")).expertLevel.code
      : {};
    const fetchProfessionReport = () => {
      isLoading.value = true;

      store.dispatch("stats/getLicensesCountByProfession").then((res) => {
        let tempList = [];
        let tempData = res && res.data ? res.data : [];
        if (expertLevel == "REG") {
          tempData.newLicense.forEach((newL) => {
            tempData.renewal.forEach((renw) => {
              if (newL.professionName == renw.professionName) {
                tempList.push({
                  name: newL.professionName,
                  newLicense: newL.professionCount,
                  renewal: renw.professionCount,
                });
              }
            });
          });

          tempList.forEach((tmpp) => {
            tempData.goodStanding.forEach((goos) => {
              if (tmpp.name == goos.professionName) {
                tmpp.goodStanding = goos.professionCount;
              }
            });
          });
        } else {
          tempList = res && res.data ? res.data : [];
        }

        allData.value = tempList;
        isLoading.value = false;
      });
    };

    const exportTable = () => {
      let tempData = [];

      allData.value.forEach((element) => {
        tempData.push({
          "Profession Name": element.name,
          "New License": element.newLicense,
          Renewal: element.renewal,
          "Good Standing": element.goodStanding,
        });
      });
      var exportWS = XLSX.utils.json_to_sheet(tempData);

      var wb = XLSX.utils.book_new();

      XLSX.utils.book_append_sheet(wb, exportWS, "professions");

      XLSX.writeFile(wb, new Date().toISOString().slice(0, 10) + "_professions.xlsx");
    };

    onMounted(() => {
      fetchProfessionReport([{ key: "type", value: licenseTypeFilter.value }]);
    });
    return {
      exportTable,
      isLoading,
      allData,
      expertLevel,
    };
  },
};
</script>
