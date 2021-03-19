<template>
<<<<<<< HEAD
  <div class="w-screen flex item-center justify-center">
    <router-link to="/" class="px-4">Home</router-link> |
    <router-link to="/about" class="px-4">About</router-link> |
    <router-link to="/signup" class="px-4">Signup</router-link> |
    <router-link to="/login" class="px-4">Login</router-link>
  </div>
  <router-view v-slot="{ Component }" :key="$route.fullPath">
=======
  <nav class="relative select-none lg:flex lg:items-stretch w-full">
    <div class="flex flex-no-shrink items-stretch h-12">
      <h5
        class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-Black no-underline flex items-center hover:bg-grey-dark"
      >
        <router-link to="/">
          <RenderIllustration
            style="height:40px"
            class="mt-2"
            illustration="Logo"
            message="Address"
          />
        </router-link>
      </h5>

      <h3 class="mt-5">HRIS License</h3>
    </div>
    <div
      v-if="!this.auth"
      class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow"
    >
      <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
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

    <div
      v-if="this.auth"
      class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow"
    >
      <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
        <button
          class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal no-underline flex items-center hover:bg-grey-dark"
          variant="outline"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>

  <router-view v-slot="{ Component }">
>>>>>>> 754714da72b1e97b2e1a9dd67f272482a656f8fd
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script>
<<<<<<< HEAD
export default {};
=======
import Title from "@/sharedComponents/Title";
import RenderIllustration from "@/sharedComponents/RenderIllustration";

export default {
  components: { Title, RenderIllustration },
  created() {
    let token = localStorage.getItem("token");
    if (token) this.auth = true;
  },
  watch: {
    token: function(newVal, oldVal) {
      console.log("changed");
      this.auth = !this.auth;
    },
  },
};
>>>>>>> 754714da72b1e97b2e1a9dd67f272482a656f8fd
</script>
<style>
@import "styles/tailwind.postcss";
@import "styles/fonts.css";
@import "styles/design-system.css";
<<<<<<< HEAD
=======
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
>>>>>>> 754714da72b1e97b2e1a9dd67f272482a656f8fd
</style>
