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
          <a href="#" class="pointer-events-none text-lg text-grey-300">Dashboard</a>
        </li>
      </ol></reviewer-nav-bar
    >
    <!-- Header -->

    <!-- Main Content -->
    <div class="home-content">
      <div class="grid grid-cols-2">
        <div class="bg-white shadow-md m-2 rounded-md p-2">
          <h2 class="text-primary-600 font-bold text-2xl">Applicants gender chart</h2>
          <apexchart
            type="bar"
            height="350"
            :options="genderChartOption"
            :series="genderSeries"
          ></apexchart>
        </div>
        <div class="bg-white shadow-md m-2 rounded-md p-2">
          <h2 class="text-primary-600 font-bold text-2xl">Total Applications</h2>
          <apexchart
            type="bar"
            height="350"
            :options="applicationChartOption"
            :series="applicationSeries"
          ></apexchart>
        </div>
      </div>

      <div class="grid grid-cols-1">
        <div class="bg-white shadow-md m-2 rounded-md p-2 mb-20">
          <h2 class="text-primary-600 font-bold text-2xl">
            Applications based on regions
          </h2>

          <apexchart
            type="bar"
            height="830"
            :options="regionChartOptions"
            :series="regionSeries"
          ></apexchart>
        </div>
      </div>
      <div class="grid grid-cols-3 lg:grid-cols-4">
        <div class="bg-white shadow-md m-2 rounded-md p-2 mb-20">
          <apexchart
            type="pie"
            :options="pieChartOption"
            :series="approvedSeries"
          ></apexchart>
          <h2 class="text-primary-600 font-bold text-2xl">Approved Applications</h2>
        </div>
        <div class="bg-white shadow-md m-2 rounded-md p-2 mb-20">
          <apexchart
            type="pie"
            :options="pieChartOption"
            :series="declinedSeries"
          ></apexchart>

          <h2 class="font-bold text-2xl text-yellow-300">Declined Licenses/Letters</h2>
        </div>

        <div class="bg-white shadow-md m-2 rounded-md p-2 mb-20">
          <apexchart
            type="pie"
            :options="pieChartOption"
            :series="revokedSeries"
          ></apexchart>

          <h2 class="text-2xl font-bold text-red-300 mt-2">Revoked Licenses/Letters</h2>
        </div>
        <div class="bg-white shadow-md m-2 rounded-md p-2 mb-20">
          <apexchart
            type="pie"
            :options="pieChartOption"
            :series="susupendedSeries"
          ></apexchart>

          <h2 class="text-2xl font-bold text-main-400 mt-2">
            Suspended Licenses/Letters
          </h2>
        </div>
        <div class="bg-white shadow-md m-2 rounded-md p-2 mb-20">
          <apexchart
            type="pie"
            :options="pieChartOption"
            :series="underSupervisionSeries"
          ></apexchart>

          <h2 class="text-2xl font-bold text-yellow-400 mt-2">
            Licenses Under-Supervision
          </h2>
        </div>
        <div class="bg-white shadow-md m-2 rounded-md p-2 mb-20">
          <apexchart
            type="pie"
            :options="pieChartOption"
            :series="unassignedSeries"
          ></apexchart>

          <h2 class="text-2xl font-bold text-grey-800 mt-2">
            Unassigned Licenses/Letters
          </h2>
        </div>
      </div>
    </div>

    <!-- Main Content -->
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import ReviewerNavBar from "./SharedComponents/navBar.vue";
import ReviewerSideBar from "./SharedComponents/sideNav.vue";
import { useStore } from "vuex";
import apexchart from "vue3-apexcharts";
export default {
  components: {
    ReviewerNavBar,
    ReviewerSideBar,
    apexchart,
  },
  setup() {
    const store = useStore();

    let chartOption = {
      chart: {
        type: "bar",
        height: 350,
      },

      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },

      xaxis: {},
    };
    let pieChartOption = {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["New License", "Renewal", "Goodstanding"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };
    let genderSeries = ref([
      {
        name: "Male",
        data: [],
      },
      {
        name: "Female",
        data: [],
      },
    ]);
    let applicationSeries = ref([
      {
        name: "Total",
        data: [],
      },
    ]);

    let regionSeries = ref([
      {
        name: "New License",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Renewal",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Goodstanding",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ]);
    let regionChartOptions = {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
        },
      },
      xaxis: {
        categories: [
          "Addis Ababa",
          "Afar",
          "Amhara",
          "Benishangul-Gumuz",
          "Dire Dawa",
          "Gambella",
          "Harari",
          "Oromia",
          "Sidama",
          "SNNP",
          "Somali",
          "Tigray",
        ],
      },
      legend: {
        position: "right",
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
    };

    let approvedSeries = ref([]);
    let declinedSeries = ref([]);
    let revokedSeries = ref([]);
    let susupendedSeries = ref([]);
    let unassignedSeries = ref([]);
    let underSupervisionSeries = ref([]);

    let genderChartOption = {};
    let applicationChartOption = {};
    Object.assign(genderChartOption, chartOption);
    Object.assign(applicationChartOption, chartOption);

    genderChartOption.xaxis = {
      categories: ["Male", "Female"],
    };
    genderChartOption.colors = ["#10A04C", "#A702A7"];
    applicationChartOption.xaxis = {
      categories: ["New License", "Renewal", "Goodstanding"],
    };
    const getGenderStat = () => {
      store.dispatch("stats/getGenderStat").then((res) => {
        let tempData = [];

        if (res && res.data) {
          tempData.push(Number(res.data[0].GenderCount));
          genderSeries.value[0].data = tempData;
          genderSeries.value[1].data.push(Number(res.data[1].GenderCount));
        }
      });
    };
    const getLicensesCount = () => {
      store.dispatch("stats/getLicensesCount").then((res) => {
        let tempData = [];

        if (res && res.data) {
          tempData.push(
            Number(res.data.newLicense),
            Number(res.data.renewal),
            Number(res.data.goodStanding)
          );
          applicationSeries.value[0].data = tempData;
        }
      });
    };
    const getApplicationsCount = () => {
      store.dispatch("stats/getApplicationsCount").then((res) => {
        if (res && res.data) {
          res.data.newLicense.forEach((element) => {
            switch (element.name) {
              case "Approve":
                approvedSeries.value.push(element.count);
                break;
              case "Decline":
                declinedSeries.value.push(element.count);
                break;

              case "Revoked":
                revokedSeries.value.push(element.count);
                break;
              case "Suspended":
                susupendedSeries.value.push(element.count);
                break;
              case "Submit":
                unassignedSeries.value.push(element.count);
                break;
              case "Under Supervision":
                underSupervisionSeries.value.push(element.count);
                break;

              default:
                break;
            }
          });
          res.data.renewal.forEach((element) => {
            switch (element.name) {
              case "Approve":
                approvedSeries.value.push(element.count);
                break;
              case "Decline":
                declinedSeries.value.push(element.count);
                break;

              case "Revoked":
                revokedSeries.value.push(element.count);
                break;
              case "Suspended":
                susupendedSeries.value.push(element.count);
                break;
              case "Submit":
                unassignedSeries.value.push(element.count);
                break;
              case "Under Supervision":
                underSupervisionSeries.value.push(element.count);
                break;

              default:
                break;
            }
          });
          res.data.goodStanding.forEach((element) => {
            switch (element.name) {
              case "Approve":
                approvedSeries.value.push(element.count);
                break;
              case "Decline":
                declinedSeries.value.push(element.count);
                break;

              case "Revoked":
                revokedSeries.value.push(element.count);
                break;
              case "Suspended":
                susupendedSeries.value.push(element.count);
                break;
              case "Submit":
                unassignedSeries.value.push(element.count);
                break;
              default:
                break;
            }
          });
        }
      });
      
    };
    let tempRegions = [];

    const getRegionsCount = async () => {
      await store.dispatch("stats/getRegionsCount").then((res) => {
        if (res && res.data) {
          res.data.regions.forEach((element) => {
            tempRegions.push(String(element.name));
          });

          res.data.newLicense.forEach((element) => {
            switch (element.name) {
              case "Addis Ababa":
                regionSeries.value[0].data[0] = Number(element.RegionCount);
                break;
              case "Afar":
                regionSeries.value[0].data[1] = Number(element.RegionCount);
                break;
              case "Amhara":
                regionSeries.value[0].data[2] = Number(element.RegionCount);
                break;
              case "Benishangul-Gumuz":
                regionSeries.value[0].data[3] = Number(element.RegionCount);
                break;
              case "Dire Dawa":
                regionSeries.value[0].data[4] = Number(element.RegionCount);
                break;
              case "Gambella":
                regionSeries.value[0].data[5] = Number(element.RegionCount);
                break;
              case "Harari":
                regionSeries.value[0].data[6] = Number(element.RegionCount);
                break;
              case "Oromia":
                regionSeries.value[0].data[7] = Number(element.RegionCount);
                break;
              case "Sidama":
                regionSeries.value[0].data[8] = Number(element.RegionCount);
                break;
              case "SNNP":
                regionSeries.value[0].data[9] = Number(element.RegionCount);
                break;
              case "Somali":
                regionSeries.value[0].data[10] = Number(element.RegionCount);
                break;
              case "Tigray":
                regionSeries.value[0].data[11] = Number(element.RegionCount);
                break;

              default:
                break;
            }
          });
          res.data.renewal.forEach((element) => {
            switch (element.name) {
              case "Addis Ababa":
                regionSeries.value[1].data[0] = Number(element.RegionCount);
                break;
              case "Afar":
                regionSeries.value[1].data[1] = Number(element.RegionCount);
                break;
              case "Amhara":
                regionSeries.value[1].data[2] = Number(element.RegionCount);
                break;
              case "Benishangul-Gumuz":
                regionSeries.value[1].data[3] = Number(element.RegionCount);
                break;
              case "Dire Dawa":
                regionSeries.value[1].data[4] = Number(element.RegionCount);
                break;
              case "Gambella":
                regionSeries.value[1].data[5] = Number(element.RegionCount);
                break;
              case "Harari":
                regionSeries.value[1].data[6] = Number(element.RegionCount);
                break;
              case "Oromia":
                regionSeries.value[1].data[7] = Number(element.RegionCount);
                break;
              case "Sidama":
                regionSeries.value[1].data[8] = Number(element.RegionCount);
                break;
              case "SNNP":
                regionSeries.value[1].data[9] = Number(element.RegionCount);
                break;
              case "Somali":
                regionSeries.value[1].data[10] = Number(element.RegionCount);
                break;
              case "Tigray":
                regionSeries.value[1].data[11] = Number(element.RegionCount);
                break;

              default:
                break;
            }
          });
          res.data.goodStanding.forEach((element) => {
            switch (element.name) {
              case "Addis Ababa":
                regionSeries.value[2].data[0] = Number(element.RegionCount);
                break;
              case "Afar":
                regionSeries.value[2].data[1] = Number(element.RegionCount);
                break;
              case "Amhara":
                regionSeries.value[2].data[2] = Number(element.RegionCount);
                break;
              case "Benishangul-Gumuz":
                regionSeries.value[2].data[3] = Number(element.RegionCount);
                break;
              case "Dire Dawa":
                regionSeries.value[2].data[4] = Number(element.RegionCount);
                break;
              case "Gambella":
                regionSeries.value[2].data[5] = Number(element.RegionCount);
                break;
              case "Harari":
                regionSeries.value[2].data[6] = Number(element.RegionCount);
                break;
              case "Oromia":
                regionSeries.value[2].data[7] = Number(element.RegionCount);
                break;
              case "Sidama":
                regionSeries.value[2].data[8] = Number(element.RegionCount);
                break;
              case "SNNP":
                regionSeries.value[2].data[9] = Number(element.RegionCount);
                break;
              case "Somali":
                regionSeries.value[2].data[10] = Number(element.RegionCount);
                break;
              case "Tigray":
                regionSeries.value[2].data[11] = Number(element.RegionCount);
                break;

              default:
                break;
            }
          });
        }
      });
    };

    onMounted(() => {
      getGenderStat();
      getLicensesCount();
      getApplicationsCount();
      getRegionsCount();
    });
    return {
      genderSeries,
      pieChartOption,
      genderChartOption,
      applicationSeries,
      applicationChartOption,
      approvedSeries,
      declinedSeries,
      revokedSeries,
      underSupervisionSeries,
      susupendedSeries,
      unassignedSeries,
      regionSeries,
      chartOption,
      regionChartOptions,
    };
  },
};
</script>

<style>
.parent {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.parent iframe {
  border: none;
  flex-grow: 1;
}
</style>
