<template>
  <ModalIdle v-if="isIdle" />
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script>
import ModalIdle from "./sharedComponents/ModalIdle";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
export default {
  components: {
    ModalIdle,
  },
  computed: {
    isIdle() {
      return this.$store.state.idleVue.isIdle;
    },
  },
  setup() {
    const i18n = useI18n();
    const locale = localStorage.getItem("locale")
      ? JSON.parse(localStorage.getItem("locale"))
      : "en";
    const router = useRouter();
    onMounted(() => {
      if (window.navigator.onLine == false) {
        router.push({ path: "/404" });
      }
      if (locale) {
        i18n.locale.value = locale;
      }
    });
  },
};
</script>

<style>
@import "styles/fonts.css";
@import "styles/design-system.css";

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
