<template>
  <div>
    <Navigation />
    <div
      class="w-screen h-full bg-lightBlueB-200 flex items-center justify-center"
    >
      <div id="navg" class="flex flex-row justify-center mb-medium"></div>
      <transition name="fade" mode="out-in">
        <div v-if="this.activeState == 1">
          <PersonalInfo :activeState="1" @changeActiveState="activeState++" />
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div v-if="this.activeState == 2">
          <AddressInfo
            :activeState="2"
            @changeActiveState="activeState++"
            @changeActiveStatePrevious="activeState--"
          />
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div v-if="this.activeState == 3">
          <Preview
            :activeState="3"
            @changeActiveStatePrevious="activeState--"
          />
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
  opacity: 0.5s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out ease-in;
}
</style>
<script>
// @ is an alias to /src
import Navigation from "@/views/Navigation";
import PersonalInfo from "@/components/Profile/PersonalInfo.vue";
import AddressInfo from "@/components/Profile/AddressInfo.vue";
import ContactInfo from "@/components/Profile/ContactInfo.vue";
import Preview from "@/components/Profile/Preview.vue";

export default {
  name: "NewProfile",
  data: () => ({
    activeState: 1,
  }),
  components: {
    PersonalInfo,
    AddressInfo,
    ContactInfo,
    Preview,
    Navigation,
  },
};
</script>
