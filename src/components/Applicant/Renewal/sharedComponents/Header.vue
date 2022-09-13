<template>
  <div class="top-navbar">
    <div class="bx bx-menu text-main-400" id="menu-icon"></div>
    <div class="profile">
      <div class="flex items-center space-x-5">
        <div class="relative inline-block text-left">
          <a
            id="options-menu"
            aria-expanded="true"
            aria-haspopup="true"
            v-on:click="showNotification()"
          >
          </a>
          <div
            v-if="showNotificationDropDown == true"
            class="
              origin-top-right
              absolute
              right-0
              w-64
              rounded-md
              shadow-lg
              bg-white
              focus:outline-none
            "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div role="none">
              <li
                class="
                  block
                  px-4
                  py-2
                  text-sm text-main-400
                  hover:bg-gray-100 hover:text-gray-900
                "
                role="menuitem"
              >
                Your license is about to expire.
              </li>
            </div>
          </div>
        </div>

        <p class="text-main-400 font-bold" v-text="name.fullName"></p>
        <div class="relative inline-block text-left">
          <a
            class="
              focus:outline-none
              bg-lightBlueB-300
              text-lightBlueB-400
              hover:text-gray-800
              w-7
              h-7
              rounded-full
              flex
              items-center
              justify-center
            "
            id="options-menu"
            aria-expanded="true"
            aria-haspopup="true"
            v-on:click="showDropDown()"
          >
            <div v-if="!isFirstTime" class="w-12 h-12">
              <img v-bind:src="pic" alt="image here" class="w-20 h-12" />
            </div>
            <div v-if="isFirstTime">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-12 h-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </a>
          <div
            v-if="showDD == true"
            class="
              origin-top-right
              absolute
              right-0
              mt-1
              w-56
              rounded-md
              shadow-lg
              bg-white
              focus:outline-none
            "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div role="none">
              <router-link to="/about">
                <li
                  class="
                    block
                    px-4
                    py-2
                    text-sm text-main-400
                    border-b
                    hover:bg-gray-100 hover:text-gray-900
                  "
                  role="menuitem"
                >
                <i class="fa fa-info-circle"></i>
                  About
                </li>
              </router-link>
            </div>
            <div role="none">
              <router-link to="/google-form">
                <li
                  class="
                    block
                    px-4
                    py-2
                    text-sm text-main-400
                    border-b
                    hover:bg-gray-100 hover:text-gray-900
                  "
                  role="menuitem"
                >
                <i class="fa fa-message"></i>
                  Leave a Feedback
                </li>
              </router-link>
              <a @click="updateProfile()">
                <li
                  class="
                    block
                    px-4
                    py-2
                    text-sm text-main-400
                    border-b
                    hover:bg-gray-100 hover:text-gray-900
                  "
                  role="menuitem"
                >
                <i class="fa fa-user"></i>
                  Profile
                </li>
              </a>
              <a
                @click="logout()"
                class="
                  block
                  px-4
                  py-2
                  text-sm text-main-400
                  border-b
                  hover:bg-gray-100 hover:text-gray-900
                "
                role="menuitem"
                id="logout"
              >
              <i class="fa fa-sign-out"></i>
                Sign Out
              </a>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import { googleApi } from "@/composables/baseURL";

export default {
  data() {
    return {
      auth: false,
      token: "",
      showDD: false,
      showNotificationDropDown: false,
    };
  },
  created() {
    this.token = localStorage.getItem("token");
    if (this.token != undefined) this.auth = true;
  },
  methods: {
    updateProfile() {
      const id = +localStorage.getItem("userId");
      const url = "/update-profile/:" + id;
      this.$router.push(url);
    },
    logout() {
      location.reload();
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("educationalLevel");
      localStorage.removeItem("language");
      localStorage.removeItem("payroll");
      localStorage.removeItem("applicantTypeId");
      this.$router.push({ path: "/" });
    },
    showDropDown() {
      this.showNotificationDropDown = false;
      this.showDD = !this.showDD;
    },
    showNotification() {
      this.showNotificationDropDown = !this.showNotificationDropDown;
      this.showDD = false;
    },
    selectMenu(menu) {
      if (this.$route.name != "Menu") {
        this.$router.push({ path: "/menu" });
      } else {
        this.$emit("changeDisplay", menu);
      }
    },
  },
  computed() {
    if (this.token != undefined) {
      this.auth = true;
    } else {
      this.auth = false;
    }
  },
  setup() {
    const store = useStore();
    const id = +localStorage.getItem("userId");
    let name = ref({
      fullName: "",
    });
    let isFirstTime = ref(false);
    let pic = ref();
    let blob = ref();
    const getProfile = () => {
      store.dispatch("profile/getProfileByUserId", id).then((res) => {
        getImage(res.data.data);
        getName(res.data.data);
      });
    };

    const getImage = (profile) => {
      if (!profile) {
        isFirstTime.value = true;
      } else { 
        pic.value = googleApi + profile.profilePicture.filePath;
      }
    };
    const getName = (profile) => {
      if (profile) {
        name.value.fullName = profile.name + " " + profile.fatherName;
      }
    };
    onMounted(() => {
      let menu = document.querySelector("#menu-icon");
      let sidenavbar = document.querySelector(".side-navbar");
      let content = document.querySelector(".content");
      let sidenavbarHeader = document.querySelector("#header-text");
      menu.onclick = () => {
        sidenavbar.classList.toggle("active");
        content.classList.toggle("active");
        sidenavbarHeader.classList.toggle("disable-header-text");
      };
      getProfile();
    });
    return {
      name,
      getImage,
      pic,
      blob,
      isFirstTime,
    };
  },
};
</script>
  