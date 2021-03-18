<template>
  <div class="w-screen flex item-center justify-center">
    <router-link to="/" class="px-4">Home</router-link> |
    <router-link to="/about" class="px-4">About</router-link> |
    <router-link to="/signup" class="px-4">Signup</router-link> |
    <router-link to="/login" class="px-4">Login</router-link>
  </div>
  <router-view v-slot="{ Component }" :key="$route.fullPath">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script>
export default {};
</script>
<style>
@import "styles/tailwind.postcss";
@import "styles/fonts.css";
@import "styles/design-system.css";
</style>
