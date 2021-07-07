<template>
  <div>
    <div>
      <ReviewerNavBar />
    </div>
     <apexchart
      width="500"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script scoped>
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import Barchart from "@/components/Report/barchart.vue";
import VueApexCharts from "vue3-apexcharts";
import { ref, onMounted } from "vue";
export default {
  name: "App",
  components: {
    ReviewerNavBar,
  apexchart: VueApexCharts,
  },
  setup (){
      let cat= ref();
      cat=["yani", "yaya", "yoni"];
     let chartOptions =ref(); 
     let series =ref();
      chartOptions= {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: cat,
        },
      },
      series= [
        {
          name: "series-1",
          data: [30, 40, 35],
        },
      ]  
     return {
         chartOptions,
         series,
     }
  },
   data: function() {
    return {
    //   chartOptions: {
    //     chart: {
    //       id: "vuechart-example",
    //     },
    //     xaxis: {
    //       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    //     },
    //   },
    //   series: [
    //     {
    //       name: "series-1",
    //       data: [30, 40, 35, 50, 49, 60, 70, 91],
    //     },
    //   ],
    };
  },
};
</script>

<style></style>
