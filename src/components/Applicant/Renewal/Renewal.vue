<template>
  <main-content :url="'renewal'">
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 1">
        <Index
          :activeState="1" 
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
        />
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 2">
        <Institution
          :activeState="1"
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
        />
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 3">
        <Upload
          :activeState="2"
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
        />
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 4">
        <LicenseSummary
          :activeState="3"
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
        />
      </div>
    </transition>
  </main-content>
</template>

<script>
import Institution from "./CreateRenewal/generalInformation.vue";
import Upload from "./CreateRenewal/Upload.vue";
import Index from "./CreateRenewal/index.vue";
import LicenseSummary from "./CreateRenewal/LicenseSummary.vue";
import MainContent from "../Shared/Menu.vue";
import { ref, onMounted } from "vue";

export default {
  setup() {
    let activeState = ref(1);
    let applicationStatuses = ref("");
    let buttons = ref([]); 

    const submit = (n) => {
      activeState.value = n;
    };

    onMounted(async () => { 
    });
    return {
      activeState,
      applicationStatuses,
      buttons,
      submit, 
    };
  },

  components: {
    Institution,
    Upload,
    LicenseSummary,
    MainContent,
    Index,
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
