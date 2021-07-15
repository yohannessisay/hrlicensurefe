<template>
  <header class="px-10 py-3.5 inset-box-shadow bg-lightBlueB-100">
    <nav>
      <main class="navigate flex items-center justify-between">
        <div @click="selectMenu(0)" class="flex items-center">
          <RenderIllustration class="" illustration="Logo" message="Address" />
          <h2 class="text-md AtkinsonHyperlegibleBold text-primary-600 ml-2 ">
            HRIS - License
          </h2>
        </div>

        <div class="flex items-center space-x-5">
          <p class="text-primary-600" v-text="name.fullName"></p>
          <div class="relative inline-block text-left">
            <a
              class="focus:outline-none bg-lightBlueB-300 text-lightBlueB-400 hover:text-gray-800 w-7 h-7 rounded-full flex items-center justify-center"
              id="options-menu"
              aria-expanded="true"
              aria-haspopup="true"
              href="#"
              v-on:click="showDropDown()"
            >
              <!-- <svg
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                class="w-8 h-8 px-1 py-1"
                aria-hidden="true"
              >
             
                <circle cx="12" cy="8" r="5" />
                
                <path d="M3,21 h18 C 21,12 3,12 3,21" />
          
              </svg> -->
              <div class="w-12 h-12 ">
                <img  v-bind:src="pic" alt="image here"  class="w-20 h-12" />
                 </div>
              <!-- <div style="height:100px; width:100px;">
                <img v-bind:src="'data:image/jpg;base64,' + pic" />
              </div> -->
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
                <router-link to="/about">
                  <li
                    class="block px-4 py-2 text-sm text-blue-100 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    About
                  </li>
                </router-link>
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
        </div>
      </main>
    </nav>
  </header>
</template>

<script>
import Title from "@/sharedComponents/Title";
import RenderIllustration from "@/sharedComponents/RenderIllustration";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { base64StringToBlob } from 'blob-util';

import { ref, onMounted } from "vue";

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
      this.$router.push({ path: "/" });
    },
    showDropDown() {
      this.showDD = !this.showDD;
    },
    selectMenu(menu) {
      if (this.$route.name != "Menu") {
        this.$router.push({ path: "/menu" });
      } else {
        this.$emit("changeDisplay", menu);
      }
    }
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
      fullName: ""
    });
    let pic = ref();
    let blob = ref();
    const getProfile = () => {
      store.dispatch("profile/getProfileByUserId", id).then(res => {
        // var profile= store.getters["profile/getPersonalInfo"];

        getImage(res.data.data);
        getName(res.data.data);
      });
    };

    const getImage = profile => {
      //let x= profile.photo.data.join('');
      console.log("this is the profie", profile);
//  console.log(x);
      pic.value = profile.photo;
      console.log("this is the profie", pic);
      // blob = base64StringToBlob(pic, "image/jpg");
      
    };
    const getName = profile => {
      name.value.fullName = profile.name + " " + profile.fatherName;
    };
    onMounted(() => {
     
      getProfile();
    });

    return {
      name,
      getImage,
      pic,
      blob
    };
  }
};
</script>
<style>
.navigate {
  cursor: pointer;
}
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
</style>
