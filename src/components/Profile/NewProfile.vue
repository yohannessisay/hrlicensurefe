<template>

  <div class="overflow-x-hidden overflow-y-hidden">
    <Navigation />
    <div v-if="this.approvalModal == 0" class="w-screen h-screen bg-lightBlueB-200 flex items-center justify-center">
      <transition name="slide-fade-to-left">
        <Modal>
          <ApprovedMessageModal @approvalModal="(n) => approverespone(n)" />
        </Modal>
      </transition>
    </div>
    <div class="w-screen h-full bg-lightBlueB-200 flex items-center justify-center  overflow-y-scroll" v-if="this.approvalModal != 0">
     
      <transition name="fade" mode="out-in">
        <div v-if="this.activeState == 1">
          <PersonalInfo :activeState="1" @changeActiveState="activeState++" :approvalModal="this.approvalModal" />
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div v-if="this.activeState == 2" class="sm:w-full md:w-3/5 lg:w-3/5 xl:w-3/5 mdlg:w-3/5">
          <Preview :activeState="2" @changeActiveStatePrevious="activeState--" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/views/Navigation";
import PersonalInfo from "@/components/Profile/PersonalInfo.vue";
import Preview from "@/components/Profile/Preview.vue";
import ApprovedMessageModal from "@/components/Profile/HraConfirmationModal.vue";

export default {
  name: "NewProfile",
  data: function () {
    return {
      activeState: 1,
      approvalModal: 0
    };
  },
  methods: {
    approverespone: function (value) {
      this.approvalModal = value;
    }
  },
  components: {
    PersonalInfo,
    Preview,
    ApprovedMessageModal,
    Navigation
  }
};
</script>
<style>
#holder {
  height: max-content;
}

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
