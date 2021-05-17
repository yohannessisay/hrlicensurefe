<template>
  <div>
    <header class="px-10 py-3.5 inset-box-shadow bg-lightBlueB-100">
      <nav class="">
        <main class="flex items-center justify-between">
          <div class="flex items-center">
            <router-link to="/menu">
              <RenderIllustration
                class=""
                illustration="Logo"
                message="Address"
              />
            </router-link>
            <h2 class="text-md AtkinsonHyperlegibleBold text-primary-600 ml-2 ">
              HRIS - License
            </h2>
            <div class="relative text-gray-600 focus-within:text-gray-400 ml-8">
              <span class="absolute inset-y-0 right-0 flex items-center mr-8">
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
                name="search"
                v-on:input="searchApplication()"
                class="py-2 text-sm text-black bg-gray-900 width-548 rounded-md pl-4 focus:outline-none focus:bg-white focus:text-gray-900"
                placeholder="Search requests by Name or Order ID"
                autocomplete="off"
                v-model="search"
              />
            </div>
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
    <div v-if="this.searched">
      <div class="bg-lightBlueB-200 h-full">
        <div class="flex pl-12 pt-medium">
          <Title message="Search Result" />
        </div>
        <div v-if="this.searchResult.length == 0" class="flex pl-12 ml-6">
          <h4 class="h-64">Nothing to Show.</h4>
        </div>
        <div
          v-if="this.searchResult.length != 0"
          class=" mt-medium rounded ml-large"
        >
          <div
            class="flex "
            v-for="i in this.searchResult.length"
            v-bind:key="i"
          >
            <div
              class="container mb-medium"
              v-for="item in this.searchResult.slice((i - 1) * 5, i * 5)"
              v-bind:key="item"
              v-bind:value="item"
            >
              <div
                class="flex justify-center items-center  ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
              >
                <div class="p-4 w-48 h-64">
                  <h4
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    Applicant Type: {{ item.applicantType.name }}
                  </h4>
                  <h4
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    Application Status: {{ item.applicationStatus.name }}
                  </h4>
                  <h4
                    v-if="item.newLicenseCode"
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    Code: {{ item.newLicenseCode }}
                  </h4>
                  <h4
                    v-if="item.renewalCode"
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    Code: {{ item.renewalCode }}
                  </h4>
                  <h4
                    v-if="item.verificationCode"
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    Code: {{ item.verificationCode }}
                  </h4>
                  <h4
                    v-if="item.goodStandingCode"
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    Code: {{ item.goodStandingCode }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!this.searched">
      <div v-if="!this.showLoading" class="bg-lightBlueB-200 h-full">
        <div class="flex pl-12 pt-medium">
          <Title message="New License Withdrawn Applications" />
        </div>
        <div v-if="this.newlicense.length == 0" class="flex pl-12 ml-6">
          <h4>Nothing to Show.</h4>
        </div>
        <div
          v-if="this.newlicense.length != 0"
          class=" mt-medium rounded ml-large"
        >
          <div class="flex " v-for="i in this.newlicense.length" v-bind:key="i">
            <div
              class="container mb-medium"
              v-for="item in this.newlicense.slice((i - 1) * 5, i * 5)"
              v-bind:key="item"
              v-bind:value="item"
            >
              <div
                class="flex justify-center items-center  ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
              >
                <div class="p-4 w-48 h-64">
                  <h4
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    Applicant Type: {{ item.applicantType.name }}
                  </h4>
                  <h4
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    Application Status: {{ item.applicationStatus.name }}
                  </h4>
                  <h4
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    Code: {{ item.newLicenseCode }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!this.showLoading" class="bg-lightBlueB-200 h-full">
        <div class="flex pl-12 pt-medium">
          <Title message="Renewal Withdrawn Applications" />
        </div>
        <div v-if="this.renewal.length == 0" class="flex pl-12 ml-6">
          <h4>Nothing to Show.</h4>
        </div>
        <div
          v-if="this.renewal.length != 0"
          class=" mt-medium rounded ml-large"
        >
          <div class="flex " v-for="i in this.renewal.length" v-bind:key="i">
            <div
              class="container mb-medium"
              v-for="item in this.renewal.slice((i - 1) * 5, i * 5)"
              v-bind:key="item"
              v-bind:value="item"
            >
              <div
                class="flex justify-center items-center  ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
              >
                <div class="p-4 w-48 h-64">
                  <h4
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    Applicant Type: {{ item.applicantType.name }}
                  </h4>
                  <h4
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    Application Status: {{ item.applicationStatus.name }}
                  </h4>
                  <h4
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    Code: {{ item.renewalCode }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!this.showLoading" class="bg-lightBlueB-200 h-full">
        <div class="flex pl-12 pt-medium">
          <Title message="Verification Withdrawn Applications" />
        </div>
        <div v-if="this.verification.length == 0" class="flex pl-12 ml-6">
          <h4>Nothing to Show.</h4>
        </div>
        <div
          v-if="this.verification.length != 0"
          class=" mt-medium rounded ml-large"
        >
          <div
            class="flex "
            v-for="i in this.verification.length"
            v-bind:key="i"
          >
            <div
              class="container mb-medium"
              v-for="item in this.verification.slice((i - 1) * 5, i * 5)"
              v-bind:key="item"
              v-bind:value="item"
            >
              <div
                class="flex justify-center items-center  ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
              >
                <div class="p-4 w-48 h-64">
                  <h4
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    Applicant Type: {{ item.applicantType.name }}
                  </h4>
                  <h4
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    Application Status: {{ item.applicationStatus.name }}
                  </h4>
                  <h4
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    Code: {{ item.verificationCode }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!this.showLoading" class="bg-lightBlueB-200 h-full">
        <div class="flex pl-12 pt-medium">
          <Title message="Good Standing Withdrawn Applications" />
        </div>
        <div v-if="this.goodstanding.length == 0" class="flex pl-12 ml-6">
          <h4>Nothing to Show.</h4>
        </div>
        <div
          v-if="this.goodstanding.length != 0"
          class=" mt-medium rounded ml-large"
        >
          <div
            class="flex "
            v-for="i in this.goodstanding.length"
            v-bind:key="i"
          >
            <div
              class="container mb-medium"
              v-for="item in this.goodstanding.slice((i - 1) * 5, i * 5)"
              v-bind:key="item"
              v-bind:value="item"
            >
              <div
                class="flex justify-center items-center  ml-8 mr-8 box-shadow-pop rounded-lg bg-lightGrey-100"
              >
                <div class="p-4 w-48 h-64">
                  <h4
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    Applicant Type: {{ item.applicantType.name }}
                  </h4>
                  <h4
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    Application Status: {{ item.applicationStatus.name }}
                  </h4>
                  <h4
                    class="text-lightBlueB-500 mt-tiny flex justify-center content-center"
                  >
                    Code: {{ item.goodStandingCode }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showLoading"
      class="flex justify-center justify-items-center mt-24"
    >
      <Spinner />
    </div>
  </div>
</template>

<script>
import Title from "@/sharedComponents/TitleWithIllustration";
import RenderIllustration from "@/sharedComponents/RenderIllustration";
import Navigation from "@/views/Navigation";
import Spinner from "@/sharedComponents/Spinner";
import goodStandingVue from "../sharedComponents/illustrations/goodStanding.vue";

export default {
  components: { Navigation, Title, Spinner, RenderIllustration, Title },
  data: function() {
    return {
      license: [],
      newlicense: [],
      renewal: [],
      verification: [],
      goodstanding: [],
      showLoading: false,
      search: "",
      searchResult: [],
      searched: false,
      showDD: false,
      auth: false,
      token: "",
    };
  },
  async created() {
    this.fetchLicensebyId();
  },
  computed() {
    if (this.token != undefined) {
      this.auth = true;
    } else {
      this.auth = false;
    }
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
    searchApplication() {
      let searchKey = this.search;
      if (this.search === "" || this.search == undefined) {
        this.searched = false;
      } else {
        this.searched = true;
        this.searchResult = this.newlicense.filter(function(e) {
          return e.newLicenseCode
            .toLowerCase()
            .includes(searchKey.toLowerCase());
        });
        if (this.searchResult.length == 0) {
          this.searchResult = this.renewal.filter(function(e) {
            return e.renewalCode
              .toLowerCase()
              .includes(searchKey.toLowerCase());
          });
        }
        if (this.searchResult.length == 0) {
          this.searchResult = this.verification.filter(function(e) {
            return e.verificationCode
              .toLowerCase()
              .includes(searchKey.toLowerCase());
          });
        }
        if (this.searchResult.length == 0) {
          this.searchResult = this.goodstanding.filter(function(e) {
            return e.goodStandingCode
              .toLowerCase()
              .includes(searchKey.toLowerCase());
          });
        }
      }
    },
    fetchLicensebyId() {
      this.showLoading = !this.showLoading;
      this.$store.dispatch("newlicense/getNewLicense").then((res) => {
        this.license = res.data.data;
        this.newlicense = this.license.filter(function(e) {
          return e.applicationStatus.code.includes("APP");
        });
      });
      this.$store.dispatch("renewal/getRenewalLicense").then((res) => {
        this.license = res.data.data;
        this.renewal = this.license.filter(function(e) {
          return e.applicationStatus.code.includes("APP");
        });
      });
      this.$store
        .dispatch("verification/getVerificationLicense")
        .then((res) => {
          this.license = res.data.data;
          this.verification = this.license.filter(function(e) {
            return e.applicationStatus.code.includes("APP");
          });
        });
      this.$store
        .dispatch("goodstanding/getGoodStandingLicense")
        .then((res) => {
          this.license = res.data.data;
          this.showLoading = !this.showLoading;
          this.goodstanding = this.license.filter(function(e) {
            return e.applicationStatus.code.includes("APP");
          });
        });
    },
  },
};
</script>
<style>
img {
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 80px;
  border-color: steelblue;
  background-color: steelblue;
}
.container {
  cursor: pointer;
}
.hoveredCard {
  background-color: white;
}
/* .b{
  cursor: pointer;
  position: absolute;
  transform: translate(-50%, -50%);
} */
.flip-box {
  transform-style: preserve-3d;
  perspective: 1000px;
  cursor: pointer;
}
.flip-box-front,
.flip-box-back {
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  backface-visibility: hidden;
}

.flip-box-front {
  transform: rotateY(0deg);
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-front {
  transform: rotateY(-180deg);
  transform-style: preserve-3d;
}

.flip-box-back {
  /* position: absolute; */
  transform: rotateY(180deg);
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-back {
  transform: rotateY(0deg);
  transform-style: preserve-3d;
}

.flip-box .inner {
  /* position:absolute;
  perspective: inherit;
  z-index: 2;
  transform: translateY(-50%)translateZ(60px) scale(.94); */
}
/* .box {
  position: relative;
} */

.b {
  /* position: absolute; */
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
