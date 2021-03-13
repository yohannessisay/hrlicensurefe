<template>
  <div class="w-screen flex item-center justify-center">
    <router-link to="/" class="px-4">Home</router-link> |
    <router-link to="/about" class="px-4">About</router-link>
  </div>
  <router-view />
</template>

<style>
@import "styles/tailwind.postcss";
@import "styles/fonts.css";
@import "styles/design-system.css";
</style>
