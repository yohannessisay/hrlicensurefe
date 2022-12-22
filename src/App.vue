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
    const router = useRouter();
    onMounted(() => {
      console.log(window.navigator.onLine, window.location.hostname);
      if (
        (window.navigator.onLine == false &&
          window.location.hostname != "localhost") ||
        window.location.hostname != "127.0.0.1"
      ) {
        router.push({ path: "/404" });
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
