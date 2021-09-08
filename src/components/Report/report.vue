<template>
  <div>
    <div>
      <ReviewerNavBar />
    </div>
    <div class="">
      <span class="text-base ml-5"> Applicant type</span>
      <select class="w-56 ml-5 mt-20" v-model="applicantTypeId">
        <option
          v-for="types in applicantType"
          v-bind:key="types.name"
          v-bind:value="types.id"
        >
          {{ types.name }}
        </option>
      </select>
      <span class="text-base ml-5"> Regions</span>
      <select class="w-56 ml-5" v-model="regionId">
        <option
          v-for="types in regions"
          v-bind:key="types.name"
          v-bind:value="types.id"
        >
          {{ types.name }}
        </option>
      </select>
      <input
        placeholder="Select date"
       type="date"
              class="ml-5"
       
        
      />
    
      <month-picker
        @change="datePicker"
        v-if="showDate"
        @click="displayDate()"
      />
      <button @click="searchButton">Search</button>
      <!-- Write v-model fro the filters -->
    </div>
    <div class="container mt-5 ml-40 w-1/2 h-full ">
      <apexchart
        id="chart"
        type="bar"
        :options="chartOptions"
        :series="series"
        :updateSeries="series"
      ></apexchart>
    </div>
    <div v-if="isLoading">
      <Spinner />
    </div>
  </div>
</template>

<script scoped>
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import Spinner from "@/sharedComponents/Spinner";
import VueApexCharts from "vue3-apexcharts";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { MonthPicker } from "vue-month-picker";
import { MonthPickerInput } from "vue-month-picker";
import Vue from "vue";

import Barchart from "@/components/Report/barchart";
export default {
  name: "App",
  components: {
    ReviewerNavBar,
    apexchart: VueApexCharts,
    Spinner,
    Barchart,
    MonthPicker,
    MonthPickerInput
  },

  computed: {},
  setup() {},
  data: function() {
    let chartOptions = ref();
    let series = ref();
    let isLoading = ref(false);
    let goodStanding = ref({
      approved: "",
      declined: "",
      underReview: ""
    });

    let newLicense = ref({
      approved: "",
      declined: "",
      underReview: ""
    });

    let renewal = ref({
      approved: "",
      declined: "",
      underReview: ""
    });

    let verification = ref({
      approved: "",
      declined: "",
      underReview: ""
    });
    let checkData = false;
    const store = useStore();
    let applicantType = ref();
    let regions = ref();
    let applicantTypeId = ref(null);
    let regionId = ref(null);
    let showDate = ref(false);
    let date = ref(null);
    const displayDate = () => {
      showDate.value = !showDate.value;
    };
    const getApplicantTypeAndRegion = () => {
      store.dispatch("lookups/getApplicantType").then(res => {
        console.log(res.data.data);
        applicantType.value = res.data.data;
      });
      store.dispatch("lookups/getRegions").then(res => {
        console.log(res.data.data);
        regions.value = res.data.data;
      });
    };
    function datePicker(dateIncoming) {
      date.value = "" + dateIncoming.monthIndex + "/" + dateIncoming.year;
    }
    const searchButton = () => {
      console.log(
        "applicant id and region id is",
        applicantTypeId.value,
        "    ",
        regionId.value,
        "  ",
        date.value
      );
    };
    const getGoodStanding = async () => {
      isLoading.value = true;
      await store
        .dispatch("reviewerGoodStanding/getGoodstandingReport")
        .then(res => {
          // var profile= store.getters["profile/getPersonalInfo"];
          goodStanding.value.approved = !res[0].data.data
            ? 0
            : res[0].data.data.length;
          goodStanding.value.declined = !res[1].data.data
            ? 0
            : res[1].data.data.length;
          goodStanding.value.underReview = !res[2].data.data
            ? 0
            : res[2].data.data.length;
          console.log("all good standing ", res);
          // series.value.$forceUpdate();
          //return [res[0].length,res[1].length,res[2].length];
        });
    };
    const getNewLicense = async () => {
      await store
        .dispatch("reviewerNewLicense/getNewLicenseReport")
        .then(res => {
          // var profile= store.getters["profile/getPersonalInfo"];
          newLicense.value.approved = !res[0].data.data
            ? 0
            : res[0].data.data.length;
          newLicense.value.declined = !res[1].data.data
            ? 0
            : res[1].data.data.length;
          newLicense.value.underReview = !res[2].data.data
            ? 0
            : res[2].data.data.length;
          console.log("all newLicense ", res);
          // series.value.$forceUpdate();
          //return [res[0].length,res[1].length,res[2].length];
        });
    };
    const getRenewal = async () => {
      await store.dispatch("reviewerRenewal/getRenewalReport").then(res => {
        // var profile= store.getters["profile/getPersonalInfo"];
        renewal.value.approved = !res[0].data.data
          ? 0
          : res[0].data.data.length;
        renewal.value.declined = !res[1].data.data
          ? 0
          : res[1].data.data.length;
        renewal.value.underReview = !res[2].data.data
          ? 0
          : res[2].data.data.length;
        console.log("all renewal ", res);
        // series.value.$forceUpdate();
        //return [res[0].length,res[1].length,res[2].length];
      });
    };
    const getVerification = async () => {
      await store
        .dispatch("reviewerVerification/getVerificationReport")
        .then(res => {
          // var profile= store.getters["profile/getPersonalInfo"];
          verification.value.approved = !res[0].data.data
            ? 0
            : res[0].data.data.length;
          verification.value.declined = !res[1].data.data
            ? 0
            : res[1].data.data.length;
          verification.value.underReview = !res[2].data.data
            ? 0
            : res[2].data.data.length;
          console.log("all verification ", res);

          // series.value.$forceUpdate();
          // return [res[0].length,res[1].length,res[2].length];
        });
    };
    let cat;

    cat = ["new license", "Good standing", "Renewal", "Verification"];

    (chartOptions = {
      chart: {
        id: "Status-report"
      },
      colors:["#002D62","#FF1818","#72A0C1"],
      xaxis: {
        categories: cat
      }
    }),
      (series = [
        {
          name: "approved",
          data: [1, 1, 1, 1]
        },
        {
          name: "declined",
          data: [1, 1, 1, 1]
        },
        {
          name: "Under supervision",
          data: [1, 1, 1, 1]
        }
      ]);
    const display = () => {
      try {
        console.log("incoming data");

        console.log(
          goodStanding.value.approved,
          goodStanding.value.declined,
          goodStanding.value.underReview
        );
        console.log(
          newLicense.value.approved,
          newLicense.value.declined,
          newLicense.value.underReview
        );
        console.log(
          renewal.value.approved,
          renewal.value.declined,
          renewal.value.underReview
        );
        console.log(
          verification.value.approved,
          verification.value.declined,
          verification.value.underReview
        );
        this.series = [
          {
            name: "approved",
            data: [
              newLicense.value.approved,
              goodStanding.value.approved,
              renewal.value.approved,
              verification.value.approved
            ]
          },
          {
            name: "declined",
            data: [
              newLicense.value.declined,
              goodStanding.value.declined,
              renewal.value.declined,
              verification.value.declined
            ]
          },
          {
            name: "Under supervision",
            data: [
              newLicense.value.underReview,
              goodStanding.value.underReview,
              renewal.value.underReview,
              verification.value.underReview
            ]
          }
        ];

        isLoading.value = false;
        console.log(series);
        return series;
      } catch (x) {
        console.log("error occured ", x);
      }
    };
    onMounted(async () => {
      await getGoodStanding();
      await getNewLicense();
      await getRenewal();
      await getVerification();
      display();
      getApplicantTypeAndRegion();
    });
    return {
      chartOptions,
      series,

      applicantType,
      regions,
      checkData,
      display,
      isLoading,
      applicantTypeId,
      regionId,
      showDate,
      displayDate,
      searchButton,
      date,
      datePicker
    };
  }
};
</script>

<style></style>
