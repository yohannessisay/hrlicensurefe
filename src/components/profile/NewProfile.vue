<template>
  <div>
    <Navigation />
    <div
      class="w-screen h-full bg-lightBlueB-200 flex items-center justify-center"
    >
      <div id="navg" class="flex flex-row justify-center mb-medium">
        <!-- <nav
          class="relative z-10 inline-flex rounded-md shadow-sm -space-x-px top-0"
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
        </nav> -->
      </div>
      <transition name="fade" mode="out-in">
        <div v-if="this.activeState == 1">
          <PersonalInfo :activeState="1" @changeActiveState="activeState++" />
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div v-if="this.activeState == 2">
          <AddressInfo :activeState="2" @changeActiveState="activeState++" />
        </div>
      </transition>

      <transition name="fade" mode="out-in">
        <div v-if="this.activeState == 3">
          <ContactInfo :activeState="3" @changeActiveState="activeState++" />
        </div>
      </transition>

      <transition name="fade" mode="out-in">
        <div v-if="this.activeState == 4">
          <Preview :activeState="4" @changeActiveState="activeState++" />
        </div>
      </transition>
    </div>
  </div>
</template>
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
<script>
// @ is an alias to /src
import Navigation from "@/views/Navigation";
import PersonalInfo from "@/components/profile/PersonalInfo.vue";
import AddressInfo from "@/components/profile/AddressInfo.vue";
import ContactInfo from "@/components/profile/ContactInfo.vue";
import Preview from "@/components/profile/Preview.vue";

export default {
  name: "NewProfile",
  data: () => ({
    activeState: 1
  }),
  components: {
    PersonalInfo,
    AddressInfo,
    ContactInfo,
    Preview,
    Navigation
  },
  methods: {
    submit(n) {
      this.activeState = n;
    }
  }
};
</script>
