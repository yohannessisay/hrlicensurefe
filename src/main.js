import {
  createApp,
  Vue
} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueApexCharts from "vue3-apexcharts";

// const eventsHub = new Vue();

const app = createApp(App);

app.use(store);
app.use(VueApexCharts);
app.use(router);
app.mount("#app");
