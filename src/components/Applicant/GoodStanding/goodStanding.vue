<template>
  <main-content>
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 1" class="">
        <GeneralInfo
        @dark-mode="modeToggle()"
          :activeState="1"
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
        />
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 2" class="">
        <upload
        @dark-mode="modeToggle()"
          :activeState="2"
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
        />
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 3" class="">
        <GoodStandingSummary
        @dark-mode="modeToggle()"
          :activeState="4"
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
        />
      </div>
    </transition>
  </main-content>
</template>

<script>
import GeneralInfo from "./AddGoodStanding/generalInformation.vue";
import Upload from "./AddGoodStanding/Upload.vue";
import MainContent from "./sharedComponents/Menu.vue";
import GoodStandingSummary from "./AddGoodStanding/LicenseSummary.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    GeneralInfo,
    Upload,
    GoodStandingSummary,
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
    let darkMode = ref(false);

    const dark = () => {
      document.getElementById("mainContent")?.classList.add("dark-mode");
      document.getElementById("activeMenu")?.classList.add("dark-mode");
      document.getElementById("mainSideBar")?.classList.add("dark-mode");
      document.getElementById("options-menu")?.classList.add("dark-mode");
      document.getElementById("topNav")?.classList.add("dark-mode");
      document.getElementById("menu-icon")?.classList.add("dark-mode");
      document.getElementById("generalInfoMain")?.classList.add("dark-mode");

      darkMode.value = true;
      localStorage.setItem("darkMode", JSON.stringify(darkMode.value));
    };

    const light = () => {
      document.getElementById("mainContent")?.classList.remove("dark-mode");
      document.getElementById("activeMenu")?.classList.remove("dark-mode");
      document.getElementById("topNav")?.classList.remove("dark-mode");
      document.getElementById("mainSideBar")?.classList.remove("dark-mode");
      document.getElementById("options-menu")?.classList.remove("dark-mode");
      document.getElementById("menu-icon")?.classList.remove("dark-mode");
      document.getElementById("generalInfoMain")?.classList.remove("dark-mode");

      darkMode.value = false;
      localStorage.setItem("darkMode", JSON.stringify(darkMode.value));
    };
    const initiateDarkMode = () => {
      if (JSON.parse(localStorage.getItem("darkMode")) == true) {
        dark();
      } else {
        light();
      }
    };
    const modeToggle = () => {
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
    const submit = (n) => {
      activeState.value = n;
    };
    const fetchApplicationCategory = () => {
      store.dispatch("goodstanding/getApplicationCategories").then((res) => {
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
      store.dispatch("goodstanding/getApplicationStatuses").then((res) => {
        const results = res.data.data;
        applicationStatuses.value = results;

        let status = applicationStatuses.value.filter(function (e) {
          return e.code == "INIT";
        });
        buttons.value = status[0]["buttons"]; 
        store.dispatch("goodstanding/setButtons", buttons.value);
      });
    };
    onMounted(async () => {
      initiateDarkMode();
      fetchApplicationStatuses();
      fetchApplicationCategory();
    });

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
  },
};
</script>
