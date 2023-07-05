<template>
  <div class="   ">
    <Navigation />
    <div
      v-if="this.approvalModal == 0"
      class="
        w-screen
        h-screen
        bg-lightBlueB-200
        flex
        items-center
        justify-center
      "
    >
      <transition name="slide-fade-to-left">
        <Modal>
          <ApprovedMessageModal @approvalModal="(n) => approverespone(n)" />
        </Modal>
      </transition>
    </div>
    <div
      class=" 
        bg-lightBlueB-200
        flex 
        justify-center
         overflow-y-scroll
          h-screen
      "
      v-if="this.approvalModal != 0"
    >
      <transition name="fade" mode="out-in">
        <div v-if="this.activeState == 1" class=" ">
          <PersonalInfo
            :activeState="1"
            @changeActiveState="activeState++"
            :approvalModal="this.approvalModal"
          />
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div v-if="this.activeState == 2" class="w-full m-4">
          <Preview
            :activeState="2"
            @changeActiveStatePrevious="activeState--"
          />
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
  data: function() {
    return {
      activeState: 1,
      approvalModal: 0,
    };
  },
  methods: {
    approverespone: function(value) {
      this.approvalModal = value;
    },
  },
  components: {
    PersonalInfo,
    Preview,
    ApprovedMessageModal,
    Navigation,
  },
};
</script>
<style></style>
