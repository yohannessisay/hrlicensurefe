<template>
  <!-- <nav class="relative select-none lg:flex lg:items-stretch w-full mt-4 mb-4">
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
  </nav> -->
  <header class="px-10 py-3.5 ">
    <nav class="animate__animated animate__fadeInLeft">
      <main class="flex items-center justify-between">
        <div class="flex items-center">
          <router-link to="/">
            <RenderIllustration
              class=""
              illustration="Logo"
              message="Address"
            />
          </router-link>
          <h2 class="text-md AtkinsonHyperlegibleBold text-primary-600 ml-2">HRIS - license</h2>
        </div>

        <div class="flex items-center space-x-5">
          <a
            class="focus:outline-none bg-gray-100 text-primary-200 hover:text-gray-800 w-7 h-7 rounded-full flex items-center justify-center"
          >
          </a>
          <a
            class="focus:outline-none bg-gray-100 text-primary-200 hover:text-gray-800 w-7 h-7 rounded-full flex items-center justify-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="#212b36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M3,21 h18 C 21,12 3,12 3,21" />
            </svg>
          </a>
        </div>
      </main>
    </nav>
  </header>
</template>

<script>
import Title from "@/sharedComponents/Title";
import RenderIllustration from "@/sharedComponents/RenderIllustration";

export default {
  components: { Title, RenderIllustration},
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
