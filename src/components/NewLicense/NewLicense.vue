7<template>
  <div>
    <Navigation />
    <div
      class="w-screen h-full pb-xl bg-lightBlueB-200 flex items-center justify-center"
    >
      <div class="w-screen max-w-4xl mt-medium">
        <div class="flex flex-col w-full rounded mb-large">
          <h2 class="flex justify-center pb-medium">New License</h2>
          <transition name="fade" mode="out-in">
            <div v-if="this.activeState == 1">
              <Institution
                :activeState="1"
                @changeActiveState="activeState++"
                @applicantTypeValue="applicantTypeSet"
                @nativeLanguageSet="nativeLanguage"
                @payrollDocumentSet="payrollDocumentSet"
              />
            </div>
          </transition>

          <div v-if="this.applicantType == 1 && this.displayPayrollOption">
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 2">
                <Passport :activeState="2" @changeActiveState="activeState++" />
              </div>
            </transition>

            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 3">
                <HealthExamCert
                  :activeState="3"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>

            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <COC :activeState="4" @changeActiveState="activeState++" />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <EducationalDoc
                  :activeState="5"
                  @changeActiveState="activeState++"
                />
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
                <SupportLetterEthiopian
                  :activeState="7"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 8">
                <PayrollDoc
                  :activeState="8"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 9">
                <Degree :activeState="9" @changeActiveState="activeState++" />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 10">
                <Transcript
                  :activeState="10"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 11">
                <Diploma :activeState="11" @changeActiveState="activeState++" />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 12">
                <LicenseSummary
                  :activeState="12"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
          </div>

          <div v-if="this.applicantType == 1 && !this.displayPayrollOption">
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 2">
                <Passport :activeState="2" @changeActiveState="activeState++" />
              </div>
            </transition>

            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 3">
                <HealthExamCert
                  :activeState="3"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>

            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <COC :activeState="4" @changeActiveState="activeState++" />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <EducationalDoc
                  :activeState="5"
                  @changeActiveState="activeState++"
                />
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
                <SupportLetterEthiopian
                  :activeState="7"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 8">
                <Degree :activeState="8" @changeActiveState="activeState++" />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 9">
                <Transcript
                  :activeState="9"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 10">
                <Diploma :activeState="10" @changeActiveState="activeState++" />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 11">
                <LicenseSummary
                  :activeState="11"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
          </div>
          <div
            v-if="this.applicantType == 2 && this.displayEnglishLanguageOption"
          >
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 2">
                <Passport :activeState="2" @changeActiveState="activeState++" />
              </div>
            </transition>

            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 3">
                <HealthExamCert
                  :activeState="3"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>

            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <EnglishLanguageForeigner
                  :activeState="4"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <HERQAF
                  :activeState="5"
                  @changeActiveState="activeState++"
                  @applicantTypeValue="applicantTypeSet"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 6">
                <ProfessionalDocumentForeigner
                  :activeState="6"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 7">
                <LetterfromOrg
                  :activeState="7"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 8">
                <ProfessionalLicense
                  :activeState="8"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 9">
                <RenewedLicense
                  :activeState="9"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 10">
                <WorkExperienceF
                  :activeState="10"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 11">
                <LicenseSummary
                  :activeState="11"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
          </div>

          <div
            v-if="this.applicantType == 2 && !this.displayEnglishLanguageOption"
          >
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 2">
                <Passport :activeState="2" @changeActiveState="activeState++" />
              </div>
            </transition>

            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 3">
                <HealthExamCert
                  :activeState="3"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <HERQAF
                  :activeState="4"
                  @changeActiveState="activeState++"
                  @applicantTypeValue="applicantTypeSet"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <ProfessionalDocumentForeigner
                  :activeState="5"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 6">
                <LetterfromOrg
                  :activeState="6"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 7">
                <ProfessionalLicense
                  :activeState="7"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 8">
                <RenewedLicense
                  :activeState="8"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 9">
                <WorkExperienceF
                  :activeState="9"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 10">
                <LicenseSummary
                  :activeState="10"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
          </div>

          <div v-if="this.applicantType == 3">
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 2">
                <Passport :activeState="2" @changeActiveState="activeState++" />
              </div>
            </transition>

            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 3">
                <HealthExamCert
                  :activeState="3"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>

            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <HERQA :activeState="4" @changeActiveState="activeState++" />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <ProfessionalDocumentEthiopian
                  :activeState="5"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 6">
                <SupportLetterForeign
                  :activeState="6"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 7">
                <WorkExperienceFF
                  :activeState="7"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 8">
                <LicenseSummary
                  :activeState="8"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/views/Navigation";
import Institution from "./Institution.vue";
import Passport from "./Passport.vue";
import HealthExamCert from "./HealthExamCert.vue";
import LicenseSummary from "./LicenseSummary.vue";

import HERQA from "./Ethiopians F/HERQA";
import HERQAF from "./Foreigner/HERQAF.vue";
import ProfessionalDocumentEthiopian from "./Ethiopians F/ProfessionalDocuments";
import SupportLetterForeign from "./Ethiopians F/SupportLetter";
import WorkExperienceF from "./Ethiopians F/WorkExperience.vue";

import COC from "./Ethiopians L/COC";
import EducationalDoc from "./Ethiopians L/EducationalDoc";
import WorkExperience from "./Ethiopians L/WorkExperience";
import SupportLetterEthiopian from "./Ethiopians L/SupportLetter";

import EnglishLanguageForeigner from "./Foreigner/EnglishLanguage";
import ProfessionalDocumentForeigner from "./Foreigner/ProfessionalDocument";
import LetterfromOrg from "./Foreigner/LetterfromOrg";
import ProfessionalLicense from "./Foreigner/ProfessionalLicense";
import RenewedLicense from "./Foreigner/RenewedLicense";
import WorkExperienceFF from "./Foreigner/WorkExperience.vue";
import PayrollDoc from "./Ethiopians L/Payroll.vue";

import Degree from "./Ethiopians L/Degree.vue";
import Diploma from "./Ethiopians L/Diploma.vue";
import Transcript from "./Ethiopians L/Transcript.vue";

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
  }),
  components: {
    Institution,
    Passport,
    HealthExamCert,
    LicenseSummary,
    HERQA,
    HERQAF,
    ProfessionalDocumentEthiopian,
    SupportLetterEthiopian,
    COC,
    EducationalDoc,
    WorkExperience,
    SupportLetterForeign,
    EnglishLanguageForeigner,
    ProfessionalDocumentForeigner,
    LetterfromOrg,
    ProfessionalLicense,
    RenewedLicense,
    Navigation,
    WorkExperienceF,
    WorkExperienceFF,
    PayrollDoc,
    Degree,
    Transcript,
    Diploma,
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
        params == 0 ||
        params == 1
      ) {
        this.displayEnglishLanguageOption = false;
      }
      if (params == 2) {
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
    submit(n) {
      this.activeState = n;
    },
    fetchApplicationStatuses() {
      this.$store.dispatch("newlicense/getApplicationStatuses").then((res) => {
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
        this.$store.dispatch("newlicense/setButtons", this.buttons);
      });
    },
    fetchApplicationCategory() {
      this.$store
        .dispatch("newlicense/getApplicationCategories")
        .then((res) => {
          const results = res.data.data;
          this.applicationCategories = results;
          const newApplicationData = this.applicationCategories.filter(
            (item) => {
              return item.name == "New Application";
            }
          );
          this.applicationId = newApplicationData[0]["id"];
          this.$store.dispatch(
            "newlicense/setApplicationId",
            this.applicationId
          );
          this.fetchDocumentSpec();
        });
    },
    fetchDocumentSpec() {
      this.$store
        .dispatch("newlicense/getDocumentSpecs", this.applicationId)
        .then((res) => {
          const results = res.data.data;
          this.documentSpecs = results;
          this.$store
            .dispatch("newlicense/setDocumentSpecs", this.documentSpecs)
            .then((res) => {});
        });
    },
    fetchDraft(id) {
      this.$store.dispatch("newlicense/getDraft", id).then((res) => {
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
