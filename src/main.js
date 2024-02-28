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
import Vue3VideoPlayer from "@cloudgeek/vue3-video-player";
import "@cloudgeek/vue3-video-player/dist/vue3-video-player.css";
import "froala-editor/js/plugins.pkgd.min.js";
//Import third party plugins
import "froala-editor/js/third_party/embedly.min";
import "froala-editor/js/third_party/font_awesome.min";
import "froala-editor/js/third_party/spell_checker.min";
import "froala-editor/js/third_party/image_tui.min";
// Import Froala Editor css files.
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import VueFroala from "vue-froala-wysiwyg";

import { createI18n } from "vue-i18n";
const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  missingWarn: false, 
  messages: {
    en: require("./locales/en.json"),
    am: require("./locales/am.json"),
  },
});
const app = createApp(App);
app.use(i18n);
app.use(store);
app.use(IdleVue, {
  store,
  idleTime: 1800000,
  startAtIdle: false,
});

app.use(router);
app.use(Vue3VideoPlayer);
app.use(Toast, { transition: "Vue-Toastification__slideBlurred" });
app.use(VueFroala);
app.mount("#app");
