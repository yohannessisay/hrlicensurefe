<template>
  <nav class="relative select-none lg:flex lg:items-stretch w-full mt-4 mb-4">
    <div class="flex flex-no-shrink items-stretch h-12">
      <h5
        class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-Black no-underline flex items-center hover:bg-grey-dark"
      >
        <router-link to="/">
          <RenderIllustration
            class=""
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
      <div class="lg:flex lg:items-stretch lg:justify-end ml-auto mr-12">
        <button @click="logout()" variant="outline">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
import Title from "@/sharedComponents/Title";
import RenderIllustration from "@/sharedComponents/RenderIllustration";

export default {
  components: { Title, RenderIllustration },
  data() {
    return {
      auth: false,
      token: '',
    };
  },
  created() {
    this.token = localStorage.getItem("token");
    if (this.token != undefined) this.auth = true;
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
    },
  },
  computed() {
    if (this.token != undefined) {
      this.auth = true;
    } else {
      this.auth = false;
    }
  },
  // watch: {
  //   token: function(newVal, oldVal) {
  //     console.log("changed");
  //     this.auth = !this.auth;
  //   },
  // },
};
</script>
