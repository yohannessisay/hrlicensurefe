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
    <div v-if="this.activeState == 3" class="h-screen overflow-y-scroll">
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
    <!-- <div v-if="this.activeState == 3">
      <MultipleUpload
        :activeState="3"
        @changeActiveState="activeState++"
        @changeActiveStateMinus="activeState--"
        @applicantTypeValue="applicantTypeSet"
        @nativeLanguageSet="nativeLanguage"
        @payrollDocumentSet="payrollDocumentSet"
        @diplomaSet="diplomaSet"
      />
    </div> -->
  </transition>
</main-content>
</template>

<script>
import Institution from "./CreateRenewal/generalInformation.vue";
import Upload from "./CreateRenewal/Upload.vue";

import LicenseSummary from "./CreateRenewal/LicenseSummary.vue"; 
import MainContent from "./sharedComponents/Menu.vue";

import { useStore } from "vuex";
import {  useRouter } from "vue-router";
import { ref, onMounted } from "vue";

export default {

  setup() {
    let store = useStore();
    let route = useRouter();
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
            // let temp = "";
            // temp = this.buttons[1];
            // this.buttons[1] = this.buttons[2];
            // this.buttons[2] = temp;
            // let temp2 = "";
            // temp2 = this.buttons[0];
            // this.buttons[0] = this.buttons[2];
            // this.buttons[2] = temp2;
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
        store.dispatch("renewal/setApplicationId", applicationId.value);
        fetchDocumentSpec();
      });
    };
    const fetchDocumentSpec = () => {
      store
        .dispatch("renewal/getDocumentSpecs", applicationId.value)
        .then((res) => { 
          const results = res.data.data;
          documentSpecs.value = results;
          store
            .dispatch("renewal/setDocumentSpecs", documentSpecs.value)
            .then((res) => {});
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
    onMounted( async () => {
      {
        draftId.value = route.params?.id;
        draftStatus.value = route.params?.status;
        if (draftId.value != undefined) {
          fetchDraft(draftId.value);
        }
        await fetchApplicationStatuses();
        await fetchApplicationCategory();
      }
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
    // MultipleUpload,
    MainContent
  },

  // methods: {
  //   applicantTypeSet: function(params) {
  //     if (params == null || params == undefined || params == "") {
  //       this.applicantType = 3;
  //     } else {
  //       this.applicantType = params;
  //     }
  //   },
  //   nativeLanguage: function(params) {
  //     if (
  //       params == null ||
  //       params == undefined ||
  //       params == "" ||
  //       params == 1
  //     ) {
  //       this.displayEnglishLanguageOption = false;
  //     } else {
  //       this.displayEnglishLanguageOption = true;
  //     }
  //   },
  //   payrollDocumentSet: function(params) {
  //     if (params == 2) {
  //       this.displayPayrollOption = true;
  //     } else {
  //       this.displayPayrollOption = false;
  //     }
  //   },
  //   diplomaSet: function(params) {
  //     if (params == 1) {
  //       this.eduLevel = "diploma";
  //     }
  //     if (params == 2) {
  //       this.eduLevel = "degree";
  //     }
  //     if (params == 3) {
  //       this.eduLevel = "masters";
  //     }
  //     if (params == 4) {
  //       this.eduLevel = "phd";
  //     }
  //   },
  //   submit(n) {
  //     this.activeState = n;
  //   },
  //   fetchApplicationStatuses() {
  //     this.$store.dispatch("newlicense/getApplicationStatuses").then((res) => {
  //       const results = res.data.data;
  //       this.applicationStatuses = results;
  //       if (this.draftId != undefined) {
  //         if (this.draftStatus == "DRA") {
  //           let status = this.applicationStatuses.filter(function(e) {
  //             return e.code == "DRA";
  //           });
  //           this.buttons = status[0]["buttons"];

  //           let temp2 = "";
  //           temp2 = this.buttons[1];
  //           this.buttons[1] = this.buttons[2];
  //           this.buttons[2] = temp2;
  //         }
  //         if (this.draftStatus == "SUB") {
  //           let status = this.applicationStatuses.filter(function(e) {
  //             return e.code == "SUB";
  //           });
  //           this.buttons = status[0]["buttons"];
  //           // let temp = "";
  //           // temp = this.buttons[1];
  //           // this.buttons[1] = this.buttons[2];
  //           // this.buttons[2] = temp;
  //           // let temp2 = "";
  //           // temp2 = this.buttons[0];
  //           // this.buttons[0] = this.buttons[2];
  //           // this.buttons[2] = temp2;
  //         }
  //         if (this.draftStatus == "USUP") {
  //           let status = this.applicationStatuses.filter(function(e) {
  //             return e.code == "USUP";
  //           });
  //           this.buttons = status[0]["buttons"];
  //         }
  //         if (this.draftStatus == "DEC") {
  //           let status = this.applicationStatuses.filter(function(e) {
  //             return e.code == "DEC";
  //           });
  //           this.buttons = status[0]["buttons"];
  //           let temp3 = "";
  //           temp3 = this.buttons[1];
  //           this.buttons[1] = this.buttons[2];
  //           this.buttons[2] = temp3;
  //         }
  //       } else {
  //         let status = this.applicationStatuses.filter(function(e) {
  //           return e.code == "INIT";
  //         });
  //         this.buttons = status[0]["buttons"];
  //       }
  //       this.$store.dispatch("newlicense/setButtons", this.buttons);
  //     });
  //   },
  //   fetchApplicationCategory() {
  //     this.$store.dispatch("renewal/getApplicationCategories").then((res) => {
  //       const results = res.data.data;
  //       this.applicationCategories = results;
  //       const renewalData = this.applicationCategories.filter((item) => {
  //         return item.name == "Renewal";
  //       });
  //       this.applicationId = renewalData[0]["id"];
  //       this.$store.dispatch("renewal/setApplicationId", this.applicationId);
  //       this.fetchDocumentSpec();
  //     });
  //   },
  //   fetchDocumentSpec() {
  //     this.$store
  //       .dispatch("renwal/getDocumentSpecs", this.applicationId)
  //       .then((res) => {
  //         const results = res.data.data;
  //         this.documentSpecs = results;
  //         this.$store
  //           .dispatch("newlicense/setDocumentSpecs", this.documentSpecs)
  //           .then((res) => {});
  //       });
  //   },
  //   fetchDraft(id) {
  //     this.$store.dispatch("renewal/getDraft", id).then((res) => {
  //       const results = res.data.data;
  //       if (results.occupationTypeId == 2) {
  //         this.displayPayrollOption = false;
  //       } else {
  //         this.displayPayrollOption = true;
  //       }
  //       if (results.englishLanguageId == 1) {
  //         this.displayEnglishLanguageOption = false;
  //       } else {
  //         this.displayEnglishLanguageOption = true;
  //       }
  //       this.declinedFields = results.declinedFields;
  //       this.acceptedFields = results.acceptedFields;
  //       this.remark = results.remark;
  //       this.$store.dispatch("renewal/setDraft", results);
  //       this.$store.dispatch(
  //         "renewal/storeDeclinedFields",
  //         this.declinedFields
  //       );
  //       this.$store.dispatch(
  //         "renewal/storeAcceptedFields",
  //         this.acceptedFields
  //       );
  //       this.$store.dispatch("renewal/storeRemark", this.remark);
  //     });
  //   },
  // },
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
