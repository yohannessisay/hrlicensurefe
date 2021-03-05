<template>
  <div class="w-screen flex item-center justify-center">
    <router-link to="/" class="px-4">Home</router-link> |
    <router-link to="/about" class="px-4">About</router-link> |
    <router-link to="/signup" class="px-4">Signup</router-link> |
    <router-link to="/login" class="px-4">Login</router-link>

  </div>
  <router-view />
</template>

<style>
@import "assets/styles/tailwind.postcss";
</style>
