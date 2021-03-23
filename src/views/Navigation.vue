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
  <header class="px-10 py-3.5 inset-box-shadow bg-lightBlueB-100">
    <nav class="">
      <main class="flex items-center justify-between">
        <div class="flex items-center">
          <router-link to="/">
            <RenderIllustration
              class=""
              illustration="Logo"
              message="Address"
            />
          </router-link>
          <h2 class="text-md AtkinsonHyperlegibleBold text-primary-600 ml-2 ">HRIS - license</h2>
        </div>

        <div class="flex items-center space-x-5">
          <a
            class="focus:outline-none bg-lightBlueB-300 text-lightBlueB-400 hover:text-gray-800 w-7 h-7 rounded-full flex items-center justify-center"
            href="#"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="inline-block w-8 h-8 px-1 py-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </a>
          <div class="relative inline-block text-left">
            <a
              class="focus:outline-none bg-lightBlueB-300 text-lightBlueB-400 hover:text-gray-800 w-7 h-7 rounded-full flex items-center justify-center"
              id="options-menu"
              aria-expanded="true"
              aria-haspopup="true"
              href="#"
              v-on:click="showDropDown()"
            >
              <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-8 h-8 px-1 py-1"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M3,21 h18 C 21,12 3,12 3,21" />
              </svg>
            </a>
            <div
              v-if="showDD == true"
              class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <div class="py-1" role="none">
                <a
                  href="#" 
                  class="block px-4 py-2 text-sm text-blue-100  hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  >Profile
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-blue-100 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  >About
                </a>
              </div>
              <div class="py-1" role="none">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-blue-100 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  >Display Settings
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-blue-100 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Sign Out
                </a>
              </div>
            </div>
          </div>
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
      showDD: false
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
    showDropDown() {
      this.showDD = !this.showDD;
    }
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
