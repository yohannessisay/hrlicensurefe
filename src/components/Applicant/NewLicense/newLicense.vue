<template>
  <main-content >
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 1">
        <Institution
        class="overflow-y-scroll"
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
import { ref, onMounted } from "vue";

import { useStore } from "vuex"; 
export default {
  components: {
    Institution,
    Upload,
    LicenseSummary,
    MainContent,
  },

  setup() {

let store = useStore(); 
  let applicantType = ref(1);
  let activeState = ref(1);
  let applicationStatuses = ref("");
  let applicationCategories = ref("");
  let documentSpecs = ref("");
  let buttons = ref([]);
  let draftStatus = ref("");
  let declinedFields = ref([]);
  let acceptedFields = ref([]);
  let remark = ref([]);
  let applicationId = ref("");
  let draftId = ref("");
  let displayLanguageOption = ref(false);
  let displayPayrollOption = ref(false);
  let eduLevel = ref("");
  let darkMode=ref(false)

const submit=(n)=> {
    activeState.value = n;
  };

  const fetchApplicationCategory = () => {
      store.dispatch("renewal/getApplicationCategories").then((res) => { 
        const results = res.data.data;
        applicationCategories.value = results;
        const renewalData = applicationCategories.value.filter((item) => {
          return item.name == "Renewal Application";
        });
        applicationId.value = renewalData[0]["id"];
        store.dispatch("renewal/setApplicationId", applicationId.value); 
      });
    };
  const fetchApplicationStatuses = () => {
    store.dispatch("renewal/getApplicationStatuses").then((res) => {
      const results = res.data.data;
      applicationStatuses.value = results;
      if (draftId.value != undefined) {
        if (draftStatus.value == "DRA") {
          let status = applicationStatuses.value.filter(function(e) {
            return e.code == "DRA";
          });
          buttons.value = status[0]["buttons"];

          let temp2 = "";
          temp2 = buttons.value[1];
          buttons.value[1] = buttons.value[2];
          buttons.value[2] = temp2;
        }
        if (draftStatus.value == "SUB") {
          let status = applicationStatuses.value.filter(function(e) {
            return e.code == "SUB";
          });
          buttons.value = status[0]["buttons"];
        }
        if (draftStatus.value == "USUP") {
          let status = this.applicationStatuses.filter(function(e) {
            return e.code == "USUP";
          });
          buttons.value = status[0]["buttons"];
        }
        if (draftStatus.value == "DEC") {
          let status = applicationStatuses.value.filter(function(e) {
            return e.code == "DEC";
          });
          buttons.value = status[0]["buttons"];
          let temp3 = "";
          temp3 = buttons.value[1];
          buttons.value[1] = buttons.value[2];
          buttons.value[2] = temp3;
        }
      } else {
        let status = applicationStatuses.value.filter(function(e) {
          return e.code == "INIT";
        });
        buttons.value = status[0]["buttons"];
      }
      store.dispatch("newlicense/setButtons", buttons.value);
    });
  };
  onMounted( async () => {
    {
      initiateDarkMode();
        fetchApplicationStatuses();
        fetchApplicationCategory();
      fetchApplicationCategory
    }
  });

  const   dark=()=> {
    document.getElementById("mainContent").classList.add("dark-mode");
    document.getElementById("activeMenu")?.classList.add("dark-mode");
    document.getElementById("mainSideBar")?.classList.add("dark-mode");
    document.getElementById("options-menu")?.classList.add("dark-mode");
    document.getElementById("topNav")?.classList.add("dark-mode");
    document.getElementById("menu-icon")?.classList.add("dark-mode");
    document.getElementById("generalInfoMain")?.classList.add("dark-mode");
    
    darkMode.value = true;
    localStorage.setItem("darkMode", JSON.stringify( darkMode.value));
  };

  const light=()=> {
    document.getElementById("mainContent").classList.remove("dark-mode");
    document.getElementById("activeMenu")?.classList.remove("dark-mode");
    document.getElementById("topNav")?.classList.remove("dark-mode");
    document.getElementById("mainSideBar")?.classList.remove("dark-mode");
    document.getElementById("options-menu")?.classList.remove("dark-mode");
    document.getElementById("menu-icon")?.classList.remove("dark-mode");
    document.getElementById("generalInfoMain")?.classList.remove("dark-mode");
  
    darkMode.value = false;
    localStorage.setItem("darkMode", JSON.stringify( darkMode.value));
  };
  const  initiateDarkMode=()=> {
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
  };
const  modeToggle=()=> {
    if (
      localStorage.getItem("darkMode") == true ||
      darkMode.value ||
      document.getElementById("main")?.classList.contains("dark-mode")
    ) {
      light();
    } else {
      dark();
    }
  };


  return {
      activeState,
      applicantType,
      applicationStatuses,
      applicationCategories,
      documentSpecs,
      buttons,
      submit,
      modeToggle,
      draftStatus,
      declinedFields,
      acceptedFields,
      remark,
      applicationId,
      darkMode,
      draftId,
      displayLanguageOption,
      displayPayrollOption,
      eduLevel,
    };

  }
  
  


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
