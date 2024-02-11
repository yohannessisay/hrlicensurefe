<template>
  <main-content :url="'renewal'">
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 1">
        <Index
          @dark-mode="toggleDarkMode()"
          :activeState="1"
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
        />
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 2">
        <Institution
          @dark-mode="toggleDarkMode()"
          :activeState="1"
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
        />
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 3">
        <Upload
          @dark-mode="toggleDarkMode()"
          :activeState="2"
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
        />
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 4">
        <LicenseSummary
          @dark-mode="toggleDarkMode()"
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
import darkModeService from "../Shared/services/darkModeService";
import { useStore } from "vuex";
import { ref, onMounted } from "vue";

export default {
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

    let darkMode = ref(false);
    const applicantTypeSet = (params) => {
      if (params == null || params == undefined || params == "") {
        applicantType.value = 3;
      } else {
        applicantType.value = params;
      }
    };
    const nativeLanguage = (params) => {
      if (
        params == null ||
        params == undefined ||
        params == "" ||
        params == 1
      ) {
        displayLanguageOption.value = false;
      } else {
        displayLanguageOption.value = true;
      }
    };
    const payrollDocumentSet = (params) => {
      if (params == 2) {
        displayPayrollOption.value = true;
      } else {
        displayPayrollOption.value = false;
      }
    };
    const diplomaSet = (params) => {
      if (params == 1) {
        eduLevel.value = "diploma";
      }
      if (params == 2) {
        eduLevel.value = "degree";
      }
      if (params == 3) {
        eduLevel.value = "masters";
      }
      if (params == 4) {
        eduLevel.value = "phd";
      }
    };
    const submit = (n) => {
      activeState.value = n;
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
        store.dispatch("renewal/setButtons", buttons.value);
      });
    };
    const fetchApplicationCategory = () => {
      store.dispatch("renewal/getApplicationCategories").then((res) => {
        const results = res.data.data;
        applicationCategories.value = results;
        const renewalData = applicationCategories.value.filter((item) => {
          return item.name == "Renewal Application";
        });
        applicationId.value = renewalData[0]["id"];
        fetchDocumentSpec();
      });
    };
    const fetchDocumentSpec = () => {
      store
        .dispatch("renewal/getDocumentSpecs", applicationId.value)
        .then((res) => {
          const results = res.data.data;
          documentSpecs.value = results;
        
        });
    };
    const fetchDraft = (id) => {
      store.dispatch("renewal/getDraft", id).then((res) => {
        const results = res.data.data;
        if (results.occupationTypeId == 2) {
          displayPayrollOption.value = false;
        } else {
          displayPayrollOption.value = true;
        }
        if (results.englishLanguageId == 1) {
          displayLanguageOption.value = false;
        } else {
          displayLanguageOption.value = true;
        }
        declinedFields.value = results.declinedFields;
        acceptedFields.value = results.acceptedFields;
        remark.value = results.remark;
        store.dispatch("renewal/setDraft", results);
        store.dispatch("renewal/storeDeclinedFields", declinedFields.value);
        store.dispatch("renewal/storeAcceptedFields", acceptedFields.value);
        store.dispatch("renewal/storeRemark", remark.value);
      });
    };
    
    const initiateDarkMode = () => {
      if (JSON.parse(localStorage.getItem("darkMode")) == true) {
        darkModeService.dark();
      } else {
        darkModeService.light();
      }
    };
    const toggleDarkMode = () => {
      darkMode.value= darkModeService.modeToggle(darkMode.value);
    };
    onMounted(async () => {
      fetchApplicationStatuses();
      fetchApplicationCategory();
      initiateDarkMode();
    });
    return {
      applicantType,
      activeState,
      applicationStatuses,
      applicationCategories,
      documentSpecs,
      buttons,
      draftStatus,
      declinedFields,
      acceptedFields,
      remark,
      applicationId,
      draftId,
      displayLanguageOption,
      displayPayrollOption,
      eduLevel,
      applicantTypeSet,
      nativeLanguage,
      payrollDocumentSet,
      diplomaSet,
      toggleDarkMode,
      submit,
      fetchApplicationStatuses,
      fetchApplicationCategory,
      fetchDraft,
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
