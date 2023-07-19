<template>
  <div class="h-screen overflow-y-scroll">
    <Navigation />
    <div class="flex justify-center m-4">
      <div class="progress-container">
        <div class="progress" id="progress"></div>
        <div class="circle active">1</div>
        <div class="circle">2</div>
        <div class="circle">3</div>
      </div>
    </div>
    <div
      v-if="this.approvalModal == 0"
      class=" 
        flex 
        justify-center
         
      "
    >
      <transition name="slide-fade-to-left">
        <ApprovedMessageModal @approvalModal="(n) => approverespone(n)" />
      </transition>
    </div>
    <div
      class=" 
      flex 
        justify-center
     
      "
      v-if="this.approvalModal != 0"
    >
      <transition name="fade" mode="out-in">
        <div>
          <PersonalInfo
            v-if="this.activeState == 1"
            :activeState="1"
            @nextStep="(type) => nextStep(type)"
            @changeActiveState="activeState++"
            :approvalModal="this.approvalModal"
          />
        </div>
      </transition>
      <div>
        <transition name="fade" mode="out-in">
          <Preview
            v-if="this.activeState == 2"
            :activeState="2"
            @nextStep="(type) => nextStep(type)"
            @changeActiveStatePrevious="activeState--"
          />
        </transition>
      </div>
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
      currentActive: 1,
      activeState: 1,
      approvalModal: 0,
    };
  },
  mounted: function() {
    localStorage.setItem("newProfileStep", 1);
  },
  methods: {
    approverespone: function(value) {
      this.approvalModal = value;
      this.nextStep("add");
    },
    nextStep: function(type) {
      this.currentActive = +JSON.parse(localStorage.getItem("newProfileStep"));
      type && type == "add"
        ? localStorage.setItem("newProfileStep", this.currentActive++)
        : localStorage.setItem("newProfileStep", this.currentActive--);

      const progress = document.getElementById("progress");
      const circles = document.querySelectorAll(".circle");
      circles.forEach((circle, index) => {
        if (index < this.currentActive) circle.classList.add("active");
        else circle.classList.remove("active");
      });
      const actives = document.querySelectorAll(".active");
      progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

      localStorage.setItem("newProfileStep", this.currentActive);
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
<style>
:root {
  --line-border-fill: #3498db;
  --line-border-empty: #e0e0e0;
}

.progress-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
}

.progress-container::before {
  content: "";
  background-color: var(--line-border-empty);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
  z-index: -1;
}

.progress {
  background-color: var(--line-border-fill);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 0%;
  z-index: -1;
  transition: 0.4s ease;
}

.circle {
  background-color: #fff;
  color: #999;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--line-border-empty);
  transition: 0.4s ease;
}

.circle.active {
  border-color: var(--line-border-fill);
  background-color: #3498db;
  color: white;
  font-weight: bold;
  border: 4px solid var(--line-border-empty);
}

.btn {
  background-color: var(--line-border-fill);
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;
}

.btn:active {
  transform: scale(0.98);
}

.btn:focus {
  outline: 0;
}

.btn:disabled {
  background-color: var(--line-border-empty);
  cursor: not-allowed;
}
</style>
