<template>
  <nav class="relative select-none bg-grey lg:flex lg:items-stretch w-full">
    <div class="flex flex-no-shrink items-stretch h-12">
      <h5
        class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-Black no-underline flex items-center hover:bg-grey-dark"
      >
        <RenderIllustration
          style="height:40px"
          class="mt-2"
          illustration="Logo"
          message="Address"
        />
      </h5>

      <h3 class="mt-5">HRIS License</h3>
    </div>
    <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
      <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
        <router-link
          to="/"
          class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-grey-dark"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-grey-dark"
          >About</router-link
        >
        <router-link
          to="/signup"
          class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-grey-dark"
          >Signup</router-link
        >
        <button variant="outline">
          <router-link
            to="/login"
            class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-grey-dark"
          >
            <h5>Login</h5></router-link
          >
        </button>
      </div>
    </div>
  </nav>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script>
import Title from "@/sharedComponents/Title";
import RenderIllustration from "@/sharedComponents/RenderIllustration";

export default {
  components: { Title, RenderIllustration },
};
</script>
<style>
@import "styles/tailwind.postcss";
@import "styles/fonts.css";
@import "styles/design-system.css";
</style>
