<template>
  <!-- Modal -->
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="viewDetail"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="viewDetailLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
      <div
        class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div
          class="modal-header flex flex-shrink-0 justify-end p-2 rounded-t-md"
        >
          <button
            type="button"
            class="px-6 text-white bg-primary-600 hover:text-primary-600 hover:border font-medium text-xs leading-tight uppercase rounded hover:border-primary-600 shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa fa-close fa-2x"></i>
          </button>
        </div>
        <div class="vld-parent">
          <loading
            :active="isLoading"
            :is-full-page="false"
            :color="'#2F639D'"
            :opacity="0.7"
          ></loading>
          <div class="modal-body relative p-4">
            <h2 class="text-primary-600 text-3xl font-bold">
              Selected reviewer details
            </h2>
            <div class="container px-6 mx-auto">
              <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4"
              >
              <div class="bg-white rounded-md shadow-md p-2 m-2">
               <h2 class="text-primary-600 font-bold text-2xl">Reviewer Name</h2>
               <h2 class="text-xl">{{ modalData.data?modalData.data.name:'' }}</h2>
              </div>
              <div class="bg-white rounded-md shadow-md p-2 m-2">
                <h2 class="text-primary-600 font-bold text-2xl">Reviewer Phone</h2>
                <h2 class="text-xl">{{ modalData.data?modalData.data.phoneNumber:'' }}</h2>
              </div>
              <div class="bg-white rounded-md shadow-md p-2 m-2">
                <h2 class="text-primary-600 font-bold text-2xl">Reviewer Email</h2>
                <h2 class="text-xl">{{ modalData.data?modalData.data.email:'' }}</h2>
              </div>
              <div class="bg-white rounded-md shadow-md p-2 m-2">
                <h2 class="text-primary-600 font-bold text-2xl">Reviewer Role</h2>
                <h2 class="text-xl">{{ modalData.data?modalData.data.role.name:'' }}</h2>
              </div>
              </div>
              <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
              >
                <div
                  class="card m-2 bg-primary-700 border border-grey-400 rounded-2xl hover:shadow-2xl transform shadow-md hover:-translate-y-4 transition-all duration-200"
                >
                  <div class="m-3 text-center">
                    <h2 class="text-xl mb-2 text-white dashboard_card_title">
                      Total New Licenses
                    </h2>
                    <i class="fa fa-check fa-2x text-white"></i>
                    <h2
                      class="font-light font-mono transition-all duration-200 text-white text-3xl"
                      id="totalNew"
                    >
                      <span style="font-size: 38px !important">
                        {{
                          adminData.newLicense ? adminData.newLicense.length : 0
                        }}
                      </span>
                    </h2>
                  </div>
                </div>

                <div
                  class="card m-2 bg-primary-700 border border-grey-400 rounded-2xl hover:shadow-2xl transform shadow-md hover:-translate-y-4 transition-all duration-200"
                >
                  <div class="m-3 text-center">
                    <h2 class="text-xl mb-2 text-white dashboard_card_title">
                      Total Renewals
                    </h2>
                    <i class="fa fa-refresh fa-2x text-white"></i>
                    <h2
                      class="font-light font-mono transition-all duration-200 text-white text-3xl"
                      id="totalRen"
                    >
                      <span style="font-size: 38px !important">
                        {{
                          adminData.renewal ? adminData.renewal.length : 0
                        }}</span
                      >
                    </h2>
                  </div>
                </div>

                <div
                  class="card m-2 bg-primary-700 border border-grey-400 rounded-2xl hover:shadow-2xl transform shadow-md hover:-translate-y-4 transition-all duration-200"
                >
                  <div class="m-3 text-center">
                    <h2 class="text-xl mb-2 text-white dashboard_card_title">
                      Total Good-Standings
                    </h2>
                    <i class="fa fa-thumbs-up fa-2x text-white"></i>
                    <h2
                      class="font-light font-mono transition-all duration-200 text-white text-3xl"
                      id="totalGoo"
                    >
                      <span style="font-size: 38px !important">
                        {{
                          adminData.goodStanding
                            ? adminData.goodStanding.length
                            : 0
                        }}
                      </span>
                    </h2>
                  </div>
                </div>
              </div>

              <div class="container p-2x shadow-md bg-white m-4">
                <apexchart
                  type="bar"
                  height="530"
                  :options="statusChartOptions"
                  :series="statusSeries"
                ></apexchart>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end border-t border-grey-100 rounded-b-md"
        >
          <button
            type="button"
            class="inline-block px-6 text-white bg-primary-700 font-medium text-xs leading-tight uppercase border rounded shadow-lg hover:bg-white hover:text-primary-600 transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { ref, onMounted, watch } from "vue";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

export default {
  props: ["modalData"],
  components: {
    Loading
  },

  setup(props) {
    const store = useStore();
    let isLoading = ref(false);
    let adminData = ref({});
    let statusChartOptions = {
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Approved",
          "Declined",
          "Revoked",
          "Suspended",
          "Supervised",
          "Draft",
          "In Review",
          "Returned"
        ]
      },
      yaxis: {
        title: {
          text: " (Applications)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val + " Applications";
          }
        }
      }
    };
    let statusSeries = ref([
      {
        name: "New Licenses",
        data: [0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Renewals",
        data: [0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Goodstandings",
        data: [0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]);
    const getIndividualDetail = () => {
      store
        .dispatch("report/getIndividualDetail", props.modalData.data.id)
        .then(res => {
          isLoading.value = false;
          adminData.value = res.data && res.data.data ? res.data.data : {};

          adminData.value.newLicense.forEach(element => {
            switch (element.applicationStatus.name) {
              case "Approve":
                statusSeries.value[0].data[0] =
                  statusSeries.value[0].data[0] + 1;
                break;
              case "Decline":
                statusSeries.value[0].data[1] =
                  statusSeries.value[0].data[1] + 1;
                break;

              case "Revoked":
                statusSeries.value[0].data[2] =
                  statusSeries.value[0].data[2] + 1;
                break;
              case "Suspended":
                statusSeries.value[0].data[3] =
                  statusSeries.value[0].data[3] + 1;
                break;
              case "Under Supervision":
                statusSeries.value[0].data[4] =
                  statusSeries.value[0].data[4] + 1;
                break;

              case "Draft":
                statusSeries.value[0].data[5] =
                  statusSeries.value[0].data[5] + 1;
                break;
              case "In Review":
                statusSeries.value[0].data[6] =
                  statusSeries.value[0].data[6] + 1;
                break;
              case "Returned":
                statusSeries.value[0].data[7] =
                  statusSeries.value[0].data[7] + 1;
                break;
              default:
                break;
            }
          });

          adminData.value.renewal.forEach(element => {
            switch (element.applicationStatus.name) {
              case "Approve":
                statusSeries.value[1].data[0] =
                  statusSeries.value[1].data[0] + 1;
                break;
              case "Decline":
                statusSeries.value[1].data[1] =
                  statusSeries.value[1].data[1] + 1;
                break;

              case "Revoked":
                statusSeries.value[1].data[2] =
                  statusSeries.value[1].data[2] + 1;
                break;
              case "Suspended":
                statusSeries.value[1].data[3] =
                  statusSeries.value[1].data[3] + 1;
                break;
              case "Under Supervision":
                statusSeries.value[1].data[4] =
                  statusSeries.value[1].data[4] + 1;
                break;

              case "Draft":
                statusSeries.value[1].data[5] =
                  statusSeries.value[1].data[5] + 1;
                break;
              case "In Review":
                statusSeries.value[1].data[6] =
                  statusSeries.value[1].data[6] + 1;
                break;
              case "Returned":
                statusSeries.value[1].data[7] =
                  statusSeries.value[1].data[7] + 1;
                break;

              default:
                break;
            }
          });

          adminData.value.goodStanding.forEach(element => {
            switch (element.applicationStatus.name) {
              case "Approve":
                statusSeries.value[2].data[0] =
                  statusSeries.value[2].data[0] + 1;
                break;
              case "Decline":
                statusSeries.value[2].data[1] =
                  statusSeries.value[2].data[1] + 1;
                break;
              case "Draft":
                statusSeries.value[3].data[5] =
                  statusSeries.value[3].data[5] + 1;
                break;
              case "In Review":
                statusSeries.value[4].data[6] =
                  statusSeries.value[4].data[6] + 1;
                break;

              default:
                break;
            }
          });
        })
        .catch(err => console.log(err));
    };
    onMounted(() => {});
    watch(props.modalData, () => {
      isLoading.value = true;
      getIndividualDetail();
    });
    return { isLoading, adminData, statusChartOptions, statusSeries };
  }
};
</script>
<style scoped>
.shadow-md {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 34%), 0 2px 4px -1px rgb(0 0 0 / 6%);
}
</style>
