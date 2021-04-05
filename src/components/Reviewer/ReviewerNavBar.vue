<template>
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
          <h2 class="text-md AtkinsonHyperlegibleBold text-primary-600 ml-2 ">
            HRIS - license
          </h2>
          <div
            class="flex flex-col items-center justify-between ml-medium width-64 bg-gray-800"
          >
            <div class="relative text-gray-600 focus-within:text-gray-400">
              <span class="absolute inset-y-0 right-0 flex items-center pl-2">
                <div class="p-1 focus:outline-none focus:shadow-outline">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    viewBox="0 0 24 24"
                    class="width-8 height-8 text-primary-500"
                  >
                    <path
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </span>
              <input
                type="search"
                name="q"
                class="py-2 text-sm text-white bg-gray-900 width-548 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="Search requests by Name or Order ID"
                autocomplete="off"
              />
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-5">
          <div>
            <a class="text-primary-300 mr-small"> Home </a>
            <a class="text-primary-300 mr-small"> My Work </a>
            <a class="text-primary-300 mr-small"> Orders </a>
            <a class="text-primary-300 mr-small"> Reviewers </a>
          </div>
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
              class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
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
                  @click="logout()"
                  class="block px-4 py-2 text-sm text-blue-100 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  id="logout"
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

<script scoped>
import Title from "@/sharedComponents/Title";
import RenderIllustration from "@/sharedComponents/RenderIllustration";

export default {
  components: { Title, RenderIllustration },
  data() {
    return {
      auth: false,
      token: "",
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
      localStorage.removeItem("userId");
      this.$router.push({ path: "/login" });
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
  }
};
</script>
<style>
#logout {
  cursor: pointer;
}
.width-548{
  width: 548px;
}
.width-8{
  width: 22px;
}
.height-8{
 height: 22px;
}
</style>
