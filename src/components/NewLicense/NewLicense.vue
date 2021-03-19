<template>
  <div class="flex flex-row justify-center">
    <nav
      class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
      aria-label="Pagination"
    >
      <a
        @click="submit(1)"
        class="relative inline-flex items-center px-4 py-2 border border-gray-30 text-sm font-medium text-gray-700 hover:bg-gray-50"
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
        class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        5
      </a>
    </nav>
  </div>
  <div v-if="this.activeState == 1">
    <Institution :activeState="1" @changeActiveState="activeState++" />
  </div>
  <div v-if="this.activeState == 2">
    <Photo :activeState="2" @changeActiveState="activeState++" />
  </div>
  <div v-if="this.activeState == 3">
    <Passport :activeState="3" @changeActiveState="activeState++" />
  </div>
  <div v-if="this.activeState == 4">
    <HealthExamCert :activeState="4" @changeActiveState="activeState++" />
  </div>
  <div v-if="this.activeState == 5">
    <LicenseSummary :activeState="5" @changeActiveState="activeState++" />
  </div>
</template>
<script>
import Institution from "./Institution.vue";
import Photo from "./Photo.vue";
import Passport from "./Passport.vue";
import HealthExamCert from "./HealthExamCert.vue";
import LicenseSummary from "./LicenseSummary.vue";

export default {
  created() {},
  data: () => ({
    activeState: 1,
  }),
  components: {
    Institution,
    Photo,
    Passport,
    HealthExamCert,
    LicenseSummary,
  },
  methods: {
    submit(n) {
      this.activeState = n;
    },
  },
};
</script>
