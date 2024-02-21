<template>
  <div
    :class="
      isDarkMode
        ? 'h-screen bg-primaryDark overflow-y-scroll'
        : 'h-screen overflow-y-scroll'
    "
  >
    <div class="float-container" @click="toggleDarkMode()">
      <a href="#" :class="isDarkMode ? 'icon two' : 'icon one'">
        <span>{{ isDarkMode ? "Light Mode" : " Dark Mode" }}</span></a
      >
    </div>
    <Navigation :isDarkMode="isDarkMode" />
    <div class="flex justify-center m-4">
      <div class="progress-container">
        <div class="progress" id="progress"></div>
        <div class="circle active">1</div>
        <div class="circle">2</div>
        <div class="circle">3</div>
      </div>
    </div>
    <div v-if="this.approvalModal == 0" class="flex justify-center">
      <transition name="slide-fade-to-left">
        <ApprovedMessageModal
          :isDarkMode="isDarkMode"
          @approvalModal="(n) => approverespone(n)"
          @back="approverespone"
        />
      </transition>
    </div>
    <div class="flex justify-center" v-if="this.approvalModal != 0">
      <transition name="fade" mode="out-in">
        <div>
          <PersonalInfo
            :isDarkMode="isDarkMode"
            v-if="this.activeState == 1"
            :activeState="1"
            @nextStep="(type) => nextStep(type)"
            @changeActiveState="activeState++"
            :approvalModal="this.approvalModal"
            @back="approverespone"
          />
        </div>
      </transition>
      <div>
        <transition name="fade" mode="out-in">
          <Preview
            :isDarkMode="isDarkMode"
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
import darkModeService from "../Applicant/Shared/services/darkModeService";
import { onMounted, ref } from "vue";
export default {
  setup() {
    const currentActive = ref(1);
    const activeState = ref(1);
    const approvalModal = ref(0);
    const isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));

    const initiateDarkMode = () => {
      darkModeService.initiateDarkMode();
      localStorage.setItem("newProfileStep", 1);
    };

    onMounted(() => {
      initiateDarkMode();
    });

    const approverespone = (value) => {
      console.log(value);
      approvalModal.value = value;
      nextStep("add");
    };

    const nextStep = (type) => {
      currentActive.value = +JSON.parse(localStorage.getItem("newProfileStep"));
      type && type == "add"
        ? localStorage.setItem("newProfileStep", currentActive.value++)
        : localStorage.setItem("newProfileStep", currentActive.value--);

      const progress = document.getElementById("progress");
      const circles = document.querySelectorAll(".circle");
      circles.forEach((circle, index) => {
        if (index < currentActive.value) circle.classList.add("active");
        else circle.classList.remove("active");
      });
      const actives = document.querySelectorAll(".active");
      progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

      localStorage.setItem("newProfileStep", currentActive.value);
    };

    const toggleDarkMode = () => {
      isDarkMode.value = darkModeService.modeToggle(isDarkMode.value);
    };

    return {
      currentActive,
      activeState,
      approvalModal,
      isDarkMode,
      approverespone,
      nextStep,
      toggleDarkMode,
    };
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

.float-container {
  position: fixed;
  top: 33%;
  z-index: 9999;
  right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  width: auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
}

.float-container a {
  z-index: 99;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 110px;
  height: 50px;
  margin-right: -70px;
  margin-bottom: 10px;
  padding: 10px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  color: white;
  border-color: #46b8da;
  border-radius: 100px;
  background-color: #07677e;
  -webkit-box-shadow: 0 2px 4px #7d7d7d;
  box-shadow: 0 2px 4px #7d7d7d;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  font-family: sans-serif;
}
.float-container a span {
  margin-left: -16px;
}
.float-container a:hover {
  margin-right: -20px;
  background-color: #07677e;
  -webkit-box-shadow: 0 2px 4px #c7c7c7;
  box-shadow: 0 2px 4px #c9c6c6;
}

.float-container .icon:before {
  font-family: "Font Awesome 5 Free";
  margin-right: 25px;
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}

.icon.one:before {
  content: "\f186";
}
.icon.two:before {
  content: "\1F323";
}

@media screen and (max-width: 760px) {
  .float-container {
    position: fixed;
    z-index: 9999px;
    top: 50%;
    right: 0;
    margin-left: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    width: auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
  }
  .float-container a span {
    margin-left: 0px;
  }
  .float-container a {
    z-index: 99;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 70px;
    height: 50px;
    margin-right: -30px;
    margin-bottom: 10px;
    padding: 10px 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: white;
    border-color: #46b8da;
    border-radius: 100px;
    background-color: #07677e;
    -webkit-box-shadow: 0 2px 4px #313131;
    box-shadow: 0 2px 4px #3f3f3f;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    font-family: sans-serif;
  }
}
</style>
