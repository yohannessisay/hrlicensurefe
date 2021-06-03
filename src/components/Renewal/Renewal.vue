<template>
  <div>
    <Navigation />
    <div class="w-screen bg-lightBlueB-200 flex items-center justify-center">
      <div class="w-screen max-w-4xl mt-large">
        <div class="flex flex-col w-full rounded mb-large">
          <transition name="fade" mode="out-in">
            <div v-if="this.activeState == 1">
              <Institution
                :activeState="1"
                @changeActiveState="activeState++"
                @applicantTypeValue="applicantTypeSet"
              />
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <div v-if="this.activeState == 2">
              <HealthExamCert
                :activeState="2"
                @changeActiveState="activeState++"
              />
            </div>
          </transition>
          <div v-if="this.applicantType == 1">
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 3">
                <PreviousLicenseL
                  :activeState="3"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <CPDF
                  :activeState="4"
                  @changeActiveState="activeState++"
                /></div
            ></transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <WorkExperience
                  :activeState="5"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 6">
                <LicenseSummary
                  :activeState="6"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
          </div>
          <div v-if="this.applicantType == 2">
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 3">
                <LetterFromInstitution
                  :activeState="3"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <PreviousLicenseF
                  :activeState="4"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <CPDE :activeState="5" @changeActiveState="activeState++" />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 6">
                <WorkExperience
                  :activeState="6"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 7">
                <LicenseSummary
                  :activeState="7"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
          </div>
          <div v-if="this.applicantType == 3">
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 3">
                <CPDL :activeState="3" @changeActiveState="activeState++" />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <PreviousLicenseE
                  :activeState="4"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <WorkExperience
                  :activeState="5"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 6">
                <LicenseSummary
                  :activeState="6"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mr-3xl" v-if="showFlash">
    <FlashMessage message="Operation Successful!" />
  </div>
  <div v-if="showErrorFlash">
    <ErrorFlashMessage message="Operation Failed!" />
  </div>
</template>
<script>
import Navigation from "@/views/Navigation";
import Institution from "./Institution.vue";
import HealthExamCert from "./HealthExamCert";
import WorkExperience from "./WorkExperience";
import LicenseSummary from "./RenewalSummary";
import LetterFromInstitution from "./Foreigner/LetterFromHiringManager";
import CPDE from "./Ethiopians F/CPD";
import CPDL from "./Ethiopians L/CPD";
import CPDF from "./Foreigner/CPD";
import PreviousLicenseE from "./Ethiopians F/PreviousLicenseE";
import PreviousLicenseL from "./Ethiopians L/PreviousLicenseL";
import PreviousLicenseF from "./Foreigner/PreviousLicenseF";
import FlashMessage from "@/sharedComponents/FlashMessage";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import Spinner from "@/sharedComponents/Spinner";

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
    applicationId: "",
    draftId: "",
    declinedFields: [],
    acceptedFields: [],
    remark: "",
  }),
  components: {
    Institution,
    HealthExamCert,
    LicenseSummary,
    Navigation,
    LetterFromInstitution,
    CPDE,
    CPDL,
    CPDF,
    WorkExperience,
    PreviousLicenseE,
    PreviousLicenseL,
    PreviousLicenseF,
    FlashMessage,
    ErrorFlashMessage,
    Spinner,
  },
  methods: {
    applicantTypeSet: function(params) {
      if (params == null || params == undefined || params == "") {
        this.applicantType = 3;
      } else {
        this.applicantType = params;
      }
    },
    submit(n) {
      this.activeState = n;
    },
    fetchApplicationStatuses() {
      this.$store.dispatch("renewal/getApplicationStatuses").then((res) => {
        const results = res.data.data;
        this.applicationStatuses = results;
        if (this.draftId != undefined) {
          if (this.draftStatus == "DRA") {
            let status = this.applicationStatuses.filter(function(e) {
              return e.code == "DRA";
            });
            this.buttons = status[0]["buttons"];
          }
          if (this.draftStatus == "SUB") {
            let status = this.applicationStatuses.filter(function(e) {
              return e.code == "SUB";
            });
            this.buttons = status[0]["buttons"];
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
          }
        } else {
          let status = this.applicationStatuses.filter(function(e) {
            return e.code == "INIT";
          });
          this.buttons = status[0]["buttons"];
        }
        this.$store.dispatch("renewal/setButtons", this.buttons);
      });
    },
    fetchApplicationCategory() {
      this.$store.dispatch("renewal/getApplicationCategories").then((res) => {
        const results = res.data.data;
        this.applicationCategories = results;
        const newApplicationData = this.applicationCategories.filter((item) => {
          return item.name == "Renewal Application";
        });
        this.applicationId = newApplicationData[0]["id"];
        this.$store.dispatch("renewal/setApplicationId", this.applicationId);
        this.fetchDocumentSpec();
      });
    },
    fetchDocumentSpec() {
      this.$store
        .dispatch("renewal/getDocumentSpecs", this.applicationId)
        .then((res) => {
          const results = res.data.data;
          this.documentSpecs = results;
          this.$store
            .dispatch("renewal/setDocumentSpecs", this.documentSpecs)
            .then((res) => {});
        });
    },
    fetchDraft(id) {
      this.$store.dispatch("renewal/getDraft", id).then((res) => {
        const results = res.data.data;
        this.declinedFields = results.declinedFields;
        this.acceptedFields = results.acceptedFields;
        this.remark = results.remark;
        this.$store.dispatch("renewal/setDraft", results);
        this.$store.dispatch(
          "renewal/storeDeclinedFields",
          this.declinedFields
        );
        this.$store.dispatch(
          "renewal/storeAcceptedFields",
          this.acceptedFields
        );
        this.$store.dispatch("renewal/storeRemark", this.remark);
      });
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
