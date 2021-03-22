<template>
  <Navigation />
  <router-view v-slot="{ Component }">
    <!-- <transition name="fade" mode="out-in"> -->
    <component :is="Component" />
    <!-- </transition> -->
  </router-view>
</template>
<script>
import Navigation from "./views/Navigation";

export default {
  components: {Navigation },
};
</script>
<style>
@import "styles/tailwind.postcss";
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
