<template>
  <main-content>
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
import MainContent from "./sharedComponents/Menu.vue";
import GoodStandingSummary from "./AddGoodStanding/LicenseSummary.vue";

export default {
  created() {
    this.draftId = this.$route.params.id;
    this.draftStatus = this.$route.params.status;
    if (this.draftId != undefined) {
      this.fetchDraft(this.draftId);
    }
    this.fetchApplicationStatuses();
    this.fetchApplicationCategory();
  },
  data: () => ({
    activeState: 1,
    applicationStatuses: "",
    applicationCategories: "",
    documentSpecs: "",
    buttons: [],
    applicationId: "",
    draftId: "",
    draftStatus: "",
    showFlash: false,
    showErrorFlash: false,
    showLoading: false,
    declinedFields: [],
    acceptedFields: [],
    remark: "",
  }),
  components: {
    GeneralInfo,
    Upload,
    MainContent,
    GoodStandingSummary,
  },
  methods: {
    submit(n) {
      this.activeState = n;
    },
    fetchApplicationStatuses() {
      this.$store
        .dispatch("goodstanding/getApplicationStatuses")
        .then((res) => {
          const results = res.data.data;

          this.applicationStatuses = results;

          let status = this.applicationStatuses.filter(function (e) {
            return e.code == "INIT";
          });

          this.buttons = status[0]["buttons"]; 
          this.$store.dispatch("goodstanding/setButtons", this.buttons);
        });
    },
    fetchApplicationCategory() {
      this.$store
        .dispatch("goodstanding/getApplicationCategories")
        .then((res) => {
          const results = res.data.data;
          this.applicationCategories = results;
          const newApplicationData = this.applicationCategories.filter(
            (item) => {
              return item.name == "Good Standing Later";
            }
          );
          this.applicationId = newApplicationData[0]["id"];
          this.$store.dispatch(
            "goodstanding/setApplicationId",
            this.applicationId
          );
          this.fetchDocumentSpec();
        });
    },
    fetchDocumentSpec() {
      this.$store
        .dispatch("goodstanding/getDocumentSpecs", this.applicationId)
        .then((res) => {
          const results = res.data.data;
          this.documentSpecs = results;
          this.$store
            .dispatch("goodstanding/setDocumentSpecs", this.documentSpecs)
            .then((res) => {});
        });
    },
    fetchDraft(id) {
      this.$store.dispatch("goodstanding/getDraft", id).then((res) => {
        const results = res.data.data;
        this.declinedFields = results.declinedFields;
        this.acceptedFields = results.acceptedFields;
        this.remark = results.remark;
        this.$store.dispatch("goodstanding/setDraft", results);
        this.$store.dispatch(
          "goodstanding/storeDeclinedFields",
          this.declinedFields
        );
        this.$store.dispatch(
          "goodstanding/storeAcceptedFields",
          this.acceptedFields
        );
        this.$store.dispatch("goodstanding/storeRemark", this.remark);
      });
    },
  },
};
</script>
