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
          <h3 class="ml-tiny font-AtkinsonHyperlegibleBold">HRIS - Lisence</h3>
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
            <router-link to="/admin/review">
              <a v-if="tab != `Home`" class="text-primary-300 mr-small"> Home </a>
              <a
                v-if="tab == `Home`"
                class="text-primary-300 mr-small width-small inline-block pr-12 justify-center item-center"
              >
                <p class="text-primary-600 font-AtkinsonHyperlegibleBold">Home</p>
                <hr class="yellow-gradient border-none" />
              </a>
            </router-link>
            <router-link to="/myWork">
              <a v-if="tab != `MyWork`" class="text-primary-300 mr-small">
                My Work
              </a>
              <a
                v-if="tab == `MyWork`"
                class="text-primary-300 mr-small width-medium inline-block pr-tiny justify-center item-center"
              >
                <p class="text-primary-600 font-AtkinsonHyperlegibleBold">
                  My Work
                </p>
                <hr class="yellow-gradient border-none" />
              </a>
            </router-link>
            <router-link to="/unfinished">
              <a v-if="tab != `Unfinished`" class="text-primary-300 mr-small">
                Unfinished
              </a>
              <a
                v-if="tab == `Unfinished`"
                class="text-primary-300 mr-small width-small inline-block pr-20 justify-center item-center"
              >
                <p class="text-primary-600 font-AtkinsonHyperlegibleBold">
                  Unfinished
                </p>
                <hr class="yellow-gradient border-none" />
              </a>
            </router-link>
            <router-link to="/assignedToYou">
              <a
                v-if="tab != `AssignedToYou`"
                class="text-primary-300 mr-small"
              >
                Assigned to You
              </a>
              <a
                v-if="tab == `AssignedToYou`"
                class="text-primary-300 mr-small width-medium inline-block pr-tiny justify-center item-center"
              >
                <p class="text-primary-600 font-AtkinsonHyperlegibleBold">
                  Assigned to You
                </p>
                <hr class="yellow-gradient border-none" />
              </a>
            </router-link>
            <router-link to="/unassigned">
              <a v-if="tab != `Unassigned`" class="text-primary-300 mr-small">
                Unassigned
              </a>
              <a
                v-if="tab == `Unassigned`"
                class="text-primary-300 mr-small width-medium inline-block pr-tiny justify-center item-center"
              >
                <p class="text-primary-600 font-AtkinsonHyperlegibleBold">
                  Unassigned
                </p>
                <hr class="yellow-gradient border-none" />
              </a>
            </router-link>
            <a v-if="tab != `Reviewers`" class="text-primary-300 mr-small">
              Reviewers
            </a>
            <a
              v-if="tab == `Reviewers`"
              class="text-primary-300 mr-small width-small inline-block pr-12 justify-center item-center"
            >
              <p class="text-primary-600 font-AtkinsonHyperlegibleBold">
                Reviewers
              </p>
              <hr class="yellow-gradient border-none" />
            </a>
          </div>
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
                <router-link to="/admin/create" v-if="showAdminCreate">
                  <a
                    class="block px-4 py-2 text-sm text-blue-100  hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    >Create Admin User
                  </a>
                </router-link>
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
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Title from "@/sharedComponents/Title";
import RenderIllustration from "@/sharedComponents/RenderIllustration";

export default {
  components: { Title, RenderIllustration },
  props: {
    tab: {
      type: String,
      required: true,
      default: "No title"
    }
  },
  setup() {
    const router = useRouter();
    let showDD = ref(false);
    let showAdminCreate = false;
    const loggedInAdminRole = localStorage.getItem("role");
    loggedInAdminRole === "TL"
      ? (showAdminCreate = true)
      : (showAdminCreate = false);

    const showDropDown = () => {
      showDD.value = !showDD.value;
    };
    const logout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("adminId");
      localStorage.removeItem("role");
      router.push({ path: "/admin" });
    };
    return {
      showDD,
      showDropDown,
      logout,
      showAdminCreate
    };
  }
};
</script>
<style lang="postcss" scoped>
#logout {
  cursor: pointer;
}
.width-548 {
  width: 548px;
}
.width-8 {
  width: 22px;
}
.width-small {
  width: 8px;
}
.height-8 {
  height: 22px;
}
h3 {
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  background: linear-gradient(-85deg, #3674b9, #b5b173);
  -webkit-background-clip: text;
}
hr {
  width: 32px;
  height: 3px;
  border-radius: 3px;
}
</style>
