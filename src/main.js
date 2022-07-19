import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueApexCharts from "vue3-apexcharts";
import IdleVue from "idle-vue";
import "tw-elements";
// import Toast from "vue-toastification";
// import "vue-toastification/dist/index.css";
import "./styles/main.css"
const app = createApp(App);

app.use(store);
app.use(IdleVue, {
  store,
  idleTime: 1800000,
  startAtIdle: false,
});
app.use(VueApexCharts);
app.use(router);
// app.use(Toast, { transition: "Vue-Toastification__slideBlurred" });
app.mount("#app");
