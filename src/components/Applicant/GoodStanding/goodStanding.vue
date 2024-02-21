<template>
  <main-content :url="'goodstanding'">
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 1" class="">
        <GeneralInfo 
          :activeState="1"
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
        />
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 2" class="">
        <upload 
          :activeState="2"
          @changeActiveState="activeState++"
          @changeActiveStateMinus="activeState--"
        />
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div v-if="this.activeState == 3" class="">
        <GoodStandingSummary 
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
import MainContent from "../Shared/Menu.vue";
import GoodStandingSummary from "./AddGoodStanding/LicenseSummary.vue";
import { ref, onMounted, computed } from "vue";
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
    let draftId = ref("");
    let displayLanguageOption = ref(false);
    let displayPayrollOption = ref(false);
    let eduLevel = ref("");
    let isDarkMode = computed(()=>JSON.parse(localStorage.getItem("darkMode")));

 
    const submit = (n) => {
      activeState.value = n;
    };
    const fetchApplicationCategory = () => {
      store.dispatch("goodstanding/getApplicationCategories").then((res) => {
        const results = res.data.data;
        applicationCategories.value = results;
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
      draftStatus,
      declinedFields,
      acceptedFields,
      remark,
      isDarkMode,
      draftId,
      displayLanguageOption,
      displayPayrollOption,
      eduLevel,
    };
  },
};
</script>
