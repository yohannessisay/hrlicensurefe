<template>
  <div class="w-screen flex item-center justify-center">
    <router-link to="/" class="px-4">Home</router-link> |
    <router-link to="/about" class="px-4">About</router-link> |
    <router-link to="/signup" class="px-4">Signup</router-link> |
    <router-link to="/login" class="px-4">Login</router-link>
  </div>
    <router-view v-slot="{ Component }" :key="$route.fullPath">
      <transition name="fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
</template>
<script>
export default {
  
}
</script>
<style>
@import "assets/styles/tailwind.postcss";
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
