import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import IdleVue from "idle-vue";
import "tw-elements";
import Toast from "vue-toastification";
import "./styles/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js"; 
import Vue3VideoPlayer from '@cloudgeek/vue3-video-player'
import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css'
 
const app = createApp(App);

app.use(store);
app.use(IdleVue, {
  store,
  idleTime: 1800000,
  startAtIdle: false,
});

app.use(router);
app.use(Vue3VideoPlayer);
app.use(Toast, { transition: "Vue-Toastification__slideBlurred" });
  
app.mount("#app");
