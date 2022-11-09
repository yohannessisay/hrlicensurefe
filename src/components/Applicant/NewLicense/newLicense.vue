<template>
  <main-content>
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 1">
        <Institution
          @dark-mode="modeToggle()"
          :activeState="1"
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
          @applicantTypeValue="applicantTypeSet"
          @nativeLanguageSet="nativeLanguage"
          @payrollDocumentSet="payrollDocumentSet"
          @diplomaSet="diplomaSet"
        />
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 2">
        <Upload
          @dark-mode="modeToggle()"
          :activeState="2"
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
          @applicantTypeValue="applicantTypeSet"
          @nativeLanguageSet="nativeLanguage"
          @payrollDocumentSet="payrollDocumentSet"
          @diplomaSet="diplomaSet"
        />
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 3" class="h-screenoverflow-y-scroll">
        <LicenseSummary
          @dark-mode="modeToggle()"
          :activeState="3"
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
          @applicantTypeValue="applicantTypeSet"
          @nativeLanguageSet="nativeLanguage"
          @payrollDocumentSet="payrollDocumentSet"
          @diplomaSet="diplomaSet"
        />
      </div>
    </transition>
  </main-content>
</template>

<script>
import Institution from "./AddNewLicense/generalInformation.vue";
import Upload from "./AddNewLicense/Upload.vue";
import MainContent from "./sharedComponents/Menu.vue";
import LicenseSummary from "./AddNewLicense/LicenseSummary.vue";

export default {
  mounted() {
    this.initiateDarkMode();
  },
  data: () => ({
    activeState: 1,
    applicantType: 1,
    applicationStatuses: "",
    applicationCategories: "",
    documentSpecs: "",
    buttons: [],
    draftStatus: "",
    declinedFields: [],
    acceptedFields: [],
    remark: "",
    applicationId: "",
    darkMode: false,
    draftId: "",
    displayLanguageOption: false,
    displayPayrollOption: false,
    eduLevel: "",
  }),
  components: {
    Institution,
    Upload,
    LicenseSummary,
    MainContent,
  },

  methods: {
    submit(n) {
      this.activeState = n;
    },

    dark() {
      document.getElementById("mainContent").classList.add("dark-mode");
      document.getElementById("activeMenu")?.classList.add("dark-mode");
      document.getElementById("mainSideBar")?.classList.add("dark-mode");
      document.getElementById("options-menu")?.classList.add("dark-mode");
      document.getElementById("topNav")?.classList.add("dark-mode");
      document.getElementById("menu-icon")?.classList.add("dark-mode");
      document.getElementById("generalInfoMain")?.classList.add("dark-mode");
      
      this.darkMode = true;
      localStorage.setItem("darkMode", JSON.stringify(this.darkMode));
    },

    light() {
      document.getElementById("mainContent").classList.remove("dark-mode");
      document.getElementById("activeMenu")?.classList.remove("dark-mode");
      document.getElementById("topNav")?.classList.remove("dark-mode");
      document.getElementById("mainSideBar")?.classList.remove("dark-mode");
      document.getElementById("options-menu")?.classList.remove("dark-mode");
      document.getElementById("menu-icon")?.classList.remove("dark-mode");
      document.getElementById("generalInfoMain")?.classList.remove("dark-mode");
     
      this.darkMode = false;
      localStorage.setItem("darkMode", JSON.stringify(this.darkMode));
    },
    initiateDarkMode() {
      if (JSON.parse(localStorage.getItem("darkMode")) == true) {
        document.getElementById("mainContent").classList.add("dark-mode");
        document.getElementById("activeMenu")?.classList.add("dark-mode");
        document.getElementById("mainSideBar")?.classList.add("dark-mode");
        document.getElementById("options-menu")?.classList.add("dark-mode");
        document.getElementById("topNav")?.classList.add("dark-mode");
        document.getElementById("menu-icon")?.classList.add("dark-mode");
        document.getElementById("generalInfoMain")?.classList.add("dark-mode");
        
      } else {
        document.getElementById("mainContent").classList.remove("dark-mode");
        document.getElementById("activeMenu")?.classList.remove("dark-mode");
        document.getElementById("topNav")?.classList.remove("dark-mode");
        document.getElementById("mainSideBar")?.classList.remove("dark-mode");
        document.getElementById("options-menu")?.classList.remove("dark-mode");
        document.getElementById("menu-icon")?.classList.remove("dark-mode");
       
      }
    },
    modeToggle() {
      if (
        localStorage.getItem("darkMode") == true ||
        this.darkMode ||
        document.getElementById("main")?.classList.contains("dark-mode")
      ) {
        this.light();
      } else {
        this.dark();
      }
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
