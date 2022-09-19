<template>
  <main-content>
  <transition name="fade" mode="out-in">
    <div v-if="this.activeState == 1" class="h-screen overflow-y-scroll">
      <Institution
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
    <div v-if="this.activeState == 2" class="h-screen overflow-y-scroll">
      <Upload
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
    draftId: "",
    displayLanguageOption: false,
    displayPayrollOption: false,
    eduLevel: ""
  }),
  components: {
    Institution,
    Upload,
    LicenseSummary,
    MainContent
  },

  methods: {
    applicantTypeSet: function(params) {
      if (params == null || params == undefined || params == "") {
        this.applicantType = 3;
      } else {
        this.applicantType = params;
      }
    },
    nativeLanguage: function(params) {
      if (
        params == null ||
        params == undefined ||
        params == "" ||
        params == 1
      ) {
        this.displayEnglishLanguageOption = false;
      } else {
        this.displayEnglishLanguageOption = true;
      }
    },
    payrollDocumentSet: function(params) {
      if (params == 2) {
        this.displayPayrollOption = true;
      } else {
        this.displayPayrollOption = false;
      }
    },
    diplomaSet: function(params) {
      if (params == 1) {
        this.eduLevel = "diploma";
      }
      if (params == 2) {
        this.eduLevel = "degree";
      }
      if (params == 3) {
        this.eduLevel = "masters";
      }
      if (params == 4) {
        this.eduLevel = "phd";
      }
    },
    submit(n) {
      this.activeState = n;
    },
    fetchApplicationStatuses() {
      this.$store.dispatch("newlicense/getApplicationStatuses").then(res => {
        const results = res.data.data;
        this.applicationStatuses = results;
        if (this.draftId != undefined) {
          if (this.draftStatus == "DRA") {
            let status = this.applicationStatuses.filter(function(e) {
              return e.code == "DRA";
            });
            this.buttons = status[0]["buttons"];

            let temp2 = "";
            temp2 = this.buttons[1];
            this.buttons[1] = this.buttons[2];
            this.buttons[2] = temp2;
          }
          if (this.draftStatus == "SUB") {
            let status = this.applicationStatuses.filter(function(e) {
              return e.code == "SUB";
            });
            this.buttons = status[0]["buttons"];
            // let temp = "";
            // temp = this.buttons[1];
            // this.buttons[1] = this.buttons[2];
            // this.buttons[2] = temp;
            // let temp2 = "";
            // temp2 = this.buttons[0];
            // this.buttons[0] = this.buttons[2];
            // this.buttons[2] = temp2;
          }
          if (this.draftStatus == "USUP") {
            let status = this.applicationStatuses.filter(function(e) {
              return e.code == "USUP";
            });
            this.buttons = status[0]["buttons"];
          }
          if (this.draftStatus == "DEC") {
            let status = this.applicationStatuses.filter(function(e) {
              return e.code == "DEC";
            });
            this.buttons = status[0]["buttons"];
            let temp3 = "";
            temp3 = this.buttons[1];
            this.buttons[1] = this.buttons[2];
            this.buttons[2] = temp3;
          }
        } else {
          let status = this.applicationStatuses.filter(function(e) {
            return e.code == "INIT";
          });
          this.buttons = status[0]["buttons"];
        }
        this.$store.dispatch("newlicense/setButtons", this.buttons);
      });
    },
    fetchApplicationCategory() {
      this.$store.dispatch("newlicense/getApplicationCategories").then(res => {
        const results = res.data.data;
        this.applicationCategories = results;
        const newApplicationData = this.applicationCategories.filter(item => {
          return item.name == "New Application";
        });
        this.applicationId = newApplicationData[0]["id"];
        this.$store.dispatch("newlicense/setApplicationId", this.applicationId);
        this.fetchDocumentSpec();
      });
    },
    fetchDocumentSpec() {
      this.$store
        .dispatch("newlicense/getDocumentSpecs", this.applicationId)
        .then(res => {
          const results = res.data.data;
          this.documentSpecs = results;
          this.$store
            .dispatch("newlicense/setDocumentSpecs", this.documentSpecs)
            .then(res => {});
        });
    },
    fetchDraft(id) {
      this.$store.dispatch("newlicense/getDraft", id).then(res => {
        const results = res.data.data;
        if (results.occupationTypeId == 2) {
          this.displayPayrollOption = false;
        } else {
          this.displayPayrollOption = true;
        }
        if (results.englishLanguageId == 1) {
          this.displayEnglishLanguageOption = false;
        } else {
          this.displayEnglishLanguageOption = true;
        }
        this.declinedFields = results.declinedFields;
        this.acceptedFields = results.acceptedFields;
        this.remark = results.remark;
        this.$store.dispatch("newlicense/setDraft", results);
        this.$store.dispatch(
          "newlicense/storeDeclinedFields",
          this.declinedFields
        );
        this.$store.dispatch(
          "newlicense/storeAcceptedFields",
          this.acceptedFields
        );
        this.$store.dispatch("newlicense/storeRemark", this.remark);
      });
    }
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
