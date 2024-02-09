<template>
  <main-content :url="'lostLicense'">
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 1" class="">
        <GeneralInfo
          @dark-mode="toggleDarkMode()"
          :activeState="1"
          :applicationCategories="applicationCategories"
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
        />
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 2" class="">
        <upload
          @dark-mode="toggleDarkMode()"
          :activeState="2"
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
        />
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 3" class="">
        <LostLicenseSummary
          @dark-mode="toggleDarkMode()"
          :activeState="4"
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
        />
      </div>
    </transition>
  </main-content>
</template>

//
<script>
import GeneralInfo from "./AddLostLicense/generalInformation.vue";
import Upload from "./AddLostLicense/Upload.vue";
import MainContent from "../Shared/Menu.vue";
import LostLicenseSummary from "./AddLostLicense/LicenseSummary.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import darkModeService from "../Shared/services/darkModeService";
export default {
  components: {
    MainContent,
    GeneralInfo,
    Upload,
    LostLicenseSummary,
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
    let draftId = ref("");
    let displayLanguageOption = ref(false);
    let displayPayrollOption = ref(false);
    let eduLevel = ref("");
    let darkMode = ref(false);

    const initiateDarkMode = () => {
      if (JSON.parse(localStorage.getItem("darkMode")) == true) {
        darkModeService.dark();
      } else {
        darkModeService.light();
      }
    };
    const toggleDarkMode = () => {
      darkModeService.modeToggle(darkMode.value);
    };
    const submit = (n) => {
      activeState.value = n;
    };
    const fetchApplicationCategory = () => {
      store.dispatch("goodstanding/getApplicationCategories").then((res) => {
        const results = res.data.data;

        applicationCategories.value = results.filter(
          (el) => el.code === "NA" || el.code === "RA"
        );
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
        store.dispatch("lostLicenses/setButtons", buttons.value);
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
      toggleDarkMode,
      draftStatus,
      declinedFields,
      acceptedFields,
      remark,
      darkMode,
      draftId,
      displayLanguageOption,
      displayPayrollOption,
      eduLevel,
    };
  },
};
</script>
