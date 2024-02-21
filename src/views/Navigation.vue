<template>
  <header
    :class="
      isDarkMode
        ? 'px-10 py-3.5 inset-box-shadow bg-secondaryDark-100'
        : 'px-10 py-3.5 inset-box-shadow bg-grey-100'
    "
  >
    <nav>
    
      <main class="navigate flex items-center justify-between">
        <div
          @click="selectMenu(0)"
          v-if="!isFirstTime"
          class="flex items-center"
        >
          <RenderIllustration class="" illustration="Logo" message="Address" />
          <h2 class="text-main-400 ml-2">eHPEL  {{isDarkMode}}</h2>
        </div>
        <div v-if="isFirstTime" class="flex items-center">
          <RenderIllustration class="" illustration="Logo" message="Address" />
          <h2 class="text-main-400 text-xl ml-2">eHPEL</h2>
        </div>

        <div class="flex items-center space-x-5">
          <div class="ml-8  ">
            <div
              class="dropdown inline-block relative transition duration-300 ease-in-out"
            >
              <i
                class="fa fa-globe fa-lg text-white cursor-pointer shadow-md p-2 rounded-md bg-primary-400"
              ></i>

              <ul
                class="dropdown-menu absolute hidden p-2 sm:w-40  text-gray-700 bg-white rounded-md shadow-md"
              >
                <li
                  @click="changeLocale('am')"
                  class="border-lightBlueB-500 border-b p-1 hover:bg-primary-300 rounded-t-md cursor-pointer"
                >
                  <div class="flex">
                    <svg
                      class="mt-2 mr-2"
                      width="20"
                      height="20"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 473.68 473.68"
                      style="enable-background: new 0 0 473.68 473.68"
                      xml:space="preserve"
                    >
                      <circle
                        style="fill: #ffffff"
                        cx="236.85"
                        cy="236.85"
                        r="236.83"
                      />
                      <path
                        style="fill: #d32027"
                        d="M326.532,314.868H13.219c0.079,0.221,0.15,0.445,0.228,0.673
		c32.452,92.102,120.19,158.135,223.387,158.135c7.173,0,14.263-0.352,21.274-0.98C294.514,452.743,317.336,389.338,326.532,314.868z"
                      />
                      <path
                        style="fill: #258f44"
                        d="M13.608,157.668c-0.026,0.067-0.049,0.131-0.075,0.206h312.879
		c-9.27-74.07-32.052-137.029-68.303-156.901C251.097,0.352,244.007,0,236.835,0C133.806,0,46.187,65.802,13.608,157.668z"
                      />
                      <path
                        style="fill: #f8d12e"
                        d="M0,236.842c0,27.348,4.693,53.588,13.219,78.026h313.313c6.256-50.66,6.215-106.402-0.12-156.995
		H13.534C4.798,182.573,0,209.139,0,236.842z"
                      />
                      <path
                        style="fill: #d32027"
                        d="M258.113,472.697c93.848-8.362,171.927-71.46,202.12-157.156c0.079-0.228,0.146-0.453,0.228-0.673
		h-146.12C305.145,389.338,294.514,452.743,258.113,472.697z"
                      />
                      <path
                        style="fill: #258f44"
                        d="M314.218,157.874H460.14c-0.026-0.075-0.049-0.138-0.075-0.206
		C429.752,72.2,351.785,9.319,258.105,0.972C294.361,20.844,304.947,83.804,314.218,157.874z"
                      />
                      <path
                        style="fill: #f8d12e"
                        d="M460.143,157.874H314.218c6.335,50.593,6.376,106.339,0.12,156.995h146.116
		c8.526-24.438,13.219-50.682,13.219-78.026C473.677,209.139,468.879,182.573,460.143,157.874z"
                      />
                    </svg>

                    <a
                      class="bg-gray-200 hover:bg-gray-400 py-2 block whitespace-no-wrap"
                      href="#"
                      >Amharic</a
                    >
                  </div>
                </li>
                <li
                  class="hover:bg-primary-300 rounded-b-md cursor-pointer p-1"
                  @click="changeLocale('en')"
                >
                  <div class="flex">
                    <svg
                      class="mr-2 mt-2"
                      width="20"
                      height="20"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      style="enable-background: new 0 0 512 512"
                      xml:space="preserve"
                    >
                      <circle style="fill: #f0f0f0" cx="256" cy="256" r="256" />
                      <g>
                        <path
                          style="fill: #d80027"
                          d="M244.87,256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256z"
                        />
                        <path
                          style="fill: #d80027"
                          d="M244.87,122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783H244.87V122.435z"
                        />
                        <path
                          style="fill: #d80027"
                          d="M256,512c60.249,0,115.626-20.824,159.356-55.652H96.644C140.374,491.176,195.751,512,256,512z"
                        />
                        <path
                          style="fill: #d80027"
                          d="M37.574,389.565h436.852c12.581-20.529,22.338-42.969,28.755-66.783H8.819
		C15.236,346.596,24.993,369.036,37.574,389.565z"
                        />
                      </g>
                      <path
                        style="fill: #0052b4"
                        d="M118.584,39.978h23.329l-21.7,15.765l8.289,25.509l-21.699-15.765L85.104,81.252l7.16-22.037
	C73.158,75.13,56.412,93.776,42.612,114.552h7.475l-13.813,10.035c-2.152,3.59-4.216,7.237-6.194,10.938l6.596,20.301l-12.306-8.941
	c-3.059,6.481-5.857,13.108-8.372,19.873l7.267,22.368h26.822l-21.7,15.765l8.289,25.509l-21.699-15.765l-12.998,9.444
	C0.678,234.537,0,245.189,0,256h256c0-141.384,0-158.052,0-256C205.428,0,158.285,14.67,118.584,39.978z M128.502,230.4
	l-21.699-15.765L85.104,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822l-21.7,15.765L128.502,230.4z
	 M120.213,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822
	L120.213,130.317z M220.328,230.4l-21.699-15.765L176.93,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822
	l-21.7,15.765L220.328,230.4z M212.039,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822
	l8.288-25.509l8.288,25.509h26.822L212.039,130.317z M212.039,55.743l8.289,25.509l-21.699-15.765L176.93,81.252l8.289-25.509
	l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822L212.039,55.743z"
                      />
                    </svg>

                    <a
                      class="bg-gray-200 hover:bg-gray-400 py-2 block whitespace-no-wrap"
                      href="#"
                      >English</a
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="relative inline-block ">
          
            <div
              v-if="showNotificationDropDown == true"
              class="origin-top-right  absolute right-0 w-64 rounded-md bg-white focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div role="none">
                <li
                  class="block px-4 py-2 text-sm text-blue-100 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Your license is about to expire.
                </li>
              </div>
            </div>
          </div>

          <p class="text-primary-600" v-text="name.fullName"></p>
          <div class="relative inline-block text-left">
            <a
              class="focus:outline-none bg-lightBlueB-300 text-main-400 hover:text-gray-800 w-7 h-7 rounded-full flex items-center justify-center"
              id="options-menu"
              aria-expanded="true"
              aria-haspopup="true"
              @click="showDD = !showDD"
            >
              <div v-if="!isFirstTime" class="w-12 h-12">
                <img :src="pic" alt="image here" class="w-20 h-12" />
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
              class="origin-top-right z-50 shadow-md absolute right-0 mt-1 w-56 rounded-md bg-white focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div role="none">
                <router-link to="/about">
                  <li
                    class="block border-b px-4 py-2 p-2 text-sm text-main-400 font-bold hover:bg-grey-100 hover:text-gray-900 cursor-pointer"
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
                    class="block border-b px-4 py-2 p-2 text-sm text-main-400 font-bold hover:bg-grey-100 hover:text-gray-900 cursor-pointer"
                    role="menuitem"
                  >
                    <i class="fa fa-message"></i>
                    Leave a Feedback
                  </li>
                </router-link>
                <a href="/applicant/profile">
                  <li
                    class="block border-b px-4 py-2 p-2 text-sm text-main-400 font-bold hover:bg-grey-100 hover:text-gray-900 cursor-pointer"
                    role="menuitem"
                  >
                    <i class="fa fa-user"></i>
                    Profile
                  </li>
                </a>
                <a
                  @click="logout()"
                  class="block border-b px-4 py-2 p-2 text-sm text-main-400 font-bold hover:bg-grey-100 hover:text-gray-900 cursor-pointer"
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
      </main>
    </nav>
  </header>
</template>

<script>
import RenderIllustration from "@/sharedComponents/RenderIllustration";
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import { googleApi } from "@/composables/baseURL";
import { useI18n } from "vue-i18n";
export default {
  components: { RenderIllustration },
  props: ["isDarkMode"],
  setup() {
    const showDD = ref(false);
    const showNotificationDropDown = ref(false);
    const store = useStore();
    const i18n = useI18n();
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
    const changeLocale = (language) => {
      i18n.locale.value = language;
      localStorage.setItem("locale", JSON.stringify(language));
    };
    onMounted(() => {
      getProfile();
    });
    return {
      changeLocale,
      name,
      getImage,
      pic,
      blob,
      isFirstTime,
      showDD,
      showNotificationDropDown,
    };
  },
};
</script>
<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
