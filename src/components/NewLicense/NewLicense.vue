<template>
  <div>
    <Navigation />
    <div class="w-screen bg-lightBlueB-200 flex items-center justify-center">
      <div class="w-screen max-w-4xl mt-large">
        <div class="flex flex-col w-full bg-white rounded mb-large">
          <div id="navg" class="flex justify-center bg-lightBlueB-200">
            <nav
              class="relative z-0 inline-flex rounded-md shadow-sm mb-medium"
              aria-label="Pagination"
            >
              <a
                @click="submit(1)"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                1
              </a>
              <a
                @click="submit(2)"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                2
              </a>
              <a
                @click="submit(3)"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <a
                @click="submit(4)"
                class="relative inline-flex items-center px-4 py-2 border border-gray-30 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                4
              </a>
              <a
                @click="submit(5)"
                class="relative inline-flex items-center px-4 py-2 border border-gray-30 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                5
              </a>
              <a
                @click="submit(6)"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                6
              </a>
            </nav>
          </div>
          <transition name="fade" mode="out-in">
            <div v-if="this.activeState == 1">
              <Institution
                :activeState="1"
                @changeActiveState="activeState++"
              />
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <div v-if="this.activeState == 2">
              <Photo :activeState="2" @changeActiveState="activeState++" />
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <div v-if="this.activeState == 3">
              <Passport :activeState="3" @changeActiveState="activeState++" />
            </div>
          </transition>

          <transition name="fade" mode="out-in">
            <div v-if="this.activeState == 4">
              <HealthExamCert
                :activeState="4"
                @changeActiveState="activeState++"
              />
            </div>
          </transition>

          <transition name="fade" mode="out-in">
            <div v-if="this.activeState == 5">
              <ServiceFee :activeState="5" @changeActiveState="activeState++" />
            </div>
          </transition>

          <transition name="fade" mode="out-in">
            <div v-if="this.activeState == 6">
              <LicenseSummary :activeState="6" @changeActiveState="activeState++" />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/views/Navigation";
import Institution from "./Institution.vue";
import Photo from "./Photo.vue";
import Passport from "./Passport.vue";
import HealthExamCert from "./HealthExamCert.vue";
import LicenseSummary from "./LicenseSummary.vue";
import ServiceFee from "./ServiceFee.vue";

export default {
  created() {},
  data: () => ({
    activeState: 1
  }),
  components: {
    Institution,
    Photo,
    Passport,
    HealthExamCert,
    LicenseSummary,
    ServiceFee,
    Navigation,
  },
  methods: {
    submit(n) {
      this.activeState = n;
    },
  },
};
</script>
<style>
#navg a {
  margin-left: 20px;
  height: 45px;
  width: 45px;
  background-color: #d1d5db;
  color: white;
  border-radius: 100%;
  display: inline-block;
}
#navg a:hover {
  background-color: #2f639d;
  cursor: pointer;
}
#navg a:visited {
  background-color: #2f639d;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-out ease-in;
}
</style>
