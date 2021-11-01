<template>
  <div>
    <Navigation />
    <div
      class="w-screen h-full pb-xl bg-lightBlueB-200 flex items-center justify-center"
    >
      <div class="w-screen max-w-4xl mt-medium">
        <div class="flex flex-col w-full rounded mb-large">
          <h2 class="flex justify-center pb-medium">Renewal</h2>
          <transition name="fade" mode="out-in">
            <div v-if="this.activeState == 1">
              <Institution
                :activeState="1"
                @changeActiveState="activeState++"
                @changeActiveStateMinus="activeState--"
                @applicantTypeValue="applicantTypeSet"
                @payrollDocumentSet="payrollDocumentSet"
                @firstTimeUserSet="firstTimeUserSet"
              />
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <div v-if="this.activeState == 2">
              <HealthExamCert
                :activeState="2"
                @changeActiveState="activeState++"
                @changeActiveStateMinus="activeState--"
              />
            </div>
          </transition>
          <div
            v-if="
              this.applicantType == 1 &&
                this.displayPayrollOption &&
                !this.firstTimeUser
            "
          >
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 3">
                <LetterFromHiringManagerEthiopianLocal
                  :activeState="3"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <PreviousLicenseL
                  :activeState="4"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <CPDF
                  :activeState="5"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                /></div
            ></transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 6">
                <WorkExperience
                  :activeState="6"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                /></div
            ></transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 7">
                <LicenseSummary
                  :activeState="7"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
          </div>
          <div
            v-if="
              this.applicantType == 1 &&
                this.displayPayrollOption &&
                this.firstTimeUser
            "
          >
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 3">
                <Passport
                  :activeState="3"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <COC
                  :activeState="4"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <Degree
                  :activeState="5"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 6">
                <Diploma
                  :activeState="6"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 7">
                <EducationalDoc
                  :activeState="7"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 8">
                <PayrollDoc
                  :activeState="8"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 9">
                <SupportLetterEthiopian
                  :activeState="9"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 10">
                <Transcript
                  :activeState="10"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 11">
                <WorkExperience
                  :activeState="11"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 12">
                <PreviousLicenseL
                  :activeState="12"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 13">
                <CPDF
                  :activeState="13"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                /></div
            ></transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 14">
                <LicenseSummary
                  :activeState="14"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
          </div>
          <div
            v-if="
              this.applicantType == 1 &&
                !this.displayPayrollOption &&
                !this.firstTimeUser
            "
          >
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 3">
                <LetterFromHiringManagerEthiopianLocal
                  :activeState="3"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <PreviousLicenseL
                  :activeState="4"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <CPDF
                  :activeState="5"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                /></div
            ></transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 6">
                <WorkExperience
                  :activeState="6"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                /></div
            ></transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 7">
                <LicenseSummary
                  :activeState="7"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
          </div>
          <div
            v-if="
              this.applicantType == 1 &&
                !this.displayPayrollOption &&
                this.firstTimeUser
            "
          >
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 3">
                <Passport
                  :activeState="3"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <COC
                  :activeState="4"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <Degree
                  :activeState="5"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 6">
                <Diploma
                  :activeState="6"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 7">
                <EducationalDoc
                  :activeState="7"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 8">
                <SupportLetterEthiopian
                  :activeState="8"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 9">
                <Transcript
                  :activeState="9"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 10">
                <WorkExperience
                  :activeState="10"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 11">
                <PreviousLicenseL
                  :activeState="11"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 12">
                <CPDF
                  :activeState="12"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                /></div
            ></transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 13">
                <LicenseSummary
                  :activeState="13"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
          </div>
          <div v-if="this.applicantType == 2 && !this.firstTimeUser">
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 3">
                <LetterFromInstitution
                  :activeState="3"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <PreviousLicenseF
                  :activeState="4"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <CPDE
                  :activeState="5"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 6">
                <WorkExperience
                  :activeState="6"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 7">
                <ProfessionalDocuments
                  :activeState="7"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 8">
                <LicenseSummary
                  :activeState="8"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
          </div>
          <div v-if="this.applicantType == 2 && this.firstTimeUser">
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 3">
                <Passport
                  :activeState="3"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <EnglishLanguageForeigner
                  :activeState="4"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <HERQAF
                  :activeState="5"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 6">
                <ProfessionalLicense
                  :activeState="6"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 7">
                <RenewedLicense
                  :activeState="7"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 8">
                <LetterFromInstitution
                  :activeState="8"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 9">
                <PreviousLicenseF
                  :activeState="9"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 10">
                <CPDE
                  :activeState="10"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 11">
                <WorkExperience
                  :activeState="11"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 12">
                <ProfessionalDocuments
                  :activeState="12"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 13">
                <LicenseSummary
                  :activeState="13"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
          </div>
          <div v-if="this.applicantType == 3 && !this.firstTimeUser">
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 3">
                <LetterFromHiringManagerForeignerEthiopian
                  :activeState="3"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <PreviousLicenseE
                  :activeState="4"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <CPDL
                  :activeState="5"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 6">
                <WorkExperience
                  :activeState="6"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 7">
                <LicenseSummary
                  :activeState="7"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
          </div>
          <div v-if="this.applicantType == 3 && this.firstTimeUser">
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 3">
                <Passport
                  :activeState="3"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <HERQA
                  :activeState="4"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <DegreeForeignerEthiopian
                  :activeState="5"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 6">
                <DiplomaForeignerEthiopian
                  :activeState="6"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 7">
                <TranscriptForeignerEthiopian
                  :activeState="7"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 8">
                <SupportLetterForeign
                  :activeState="8"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 9">
                <WorkExperience
                  :activeState="9"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 10">
                <PreviousLicenseE
                  :activeState="10"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 11">
                <CPDL
                  :activeState="11"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 12">
                <LicenseSummary
                  :activeState="12"
                  @changeActiveState="activeState++"
                  @changeActiveStateMinus="activeState--"
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
import ProfessionalDocuments from "./ProfessionalDocument";
import FlashMessage from "@/sharedComponents/FlashMessage";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import Spinner from "@/sharedComponents/Spinner";
import PayrollDoc from "./Ethiopians L/Payroll.vue";

import Passport from "./Passport.vue";

import EnglishLanguageForeigner from "./Foreigner/EnglishLanguage";
import HERQAF from "./Foreigner/HERQAF.vue";
import LetterfromOrg from "./Foreigner/LetterfromOrg";
import ProfessionalLicense from "./Foreigner/ProfessionalLicense";
import RenewedLicense from "./Foreigner/RenewedLicense";

import DegreeForeignerEthiopian from "./Ethiopians F/Degree.vue";
import DiplomaForeignerEthiopian from "./Ethiopians F/Diploma.vue";
import TranscriptForeignerEthiopian from "./Ethiopians F/Transcript.vue";
import LetterFromHiringManagerForeignerEthiopian from "./Ethiopians F/LetterFromHiringManager.vue";

import LetterFromHiringManagerEthiopianLocal from "./Ethiopians L/LetterFromHiringManager.vue";

import COC from "./Ethiopians L/COC";
import Degree from "./Ethiopians L/Degree.vue";
import Diploma from "./Ethiopians L/Diploma.vue";
import Transcript from "./Ethiopians L/Transcript.vue";
import EducationalDoc from "./Ethiopians L/EducationalDoc";
import SupportLetterEthiopian from "./Ethiopians L/SupportLetter";

import HERQA from "./Ethiopians F/HERQA";
import SupportLetterForeign from "./Ethiopians F/SupportLetter";

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
    firstTimeUser: false,
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
    displayPayrollOption: true,
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
    ProfessionalDocuments,
    FlashMessage,
    ErrorFlashMessage,
    Spinner,
    PayrollDoc,
    Passport,
    EnglishLanguageForeigner,
    HERQA,
    LetterfromOrg,
    ProfessionalLicense,
    RenewedLicense,
    COC,
    Degree,
    Diploma,
    Transcript,
    EducationalDoc,
    SupportLetterEthiopian,
    HERQAF,
    SupportLetterForeign,
    DegreeForeignerEthiopian,
    TranscriptForeignerEthiopian,
    DiplomaForeignerEthiopian,
    LetterFromHiringManagerForeignerEthiopian,
    LetterFromHiringManagerEthiopianLocal,
  },
  methods: {
    applicantTypeSet: function(params) {
      if (params == null || params == undefined || params == "") {
        this.applicantType = 3;
      } else {
        this.applicantType = params;
      }
    },
    payrollDocumentSet: function(params) {
      if (params == 2) {
        this.displayPayrollOption = true;
      } else {
        this.displayPayrollOption = false;
      }
    },
    firstTimeUserSet: function(params) {
      if (params) {
        this.firstTimeUser = false;
      } else {
        this.firstTimeUser = true;
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
          if (this.draftStatus == "DRA" || this.draftStatus == "CONF") {
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
            let temp = "";
            temp = this.buttons[1];
            this.buttons[1] = this.buttons[2];
            this.buttons[2] = temp;
            let temp2 = "";
            temp2 = this.buttons[0];
            this.buttons[0] = this.buttons[2];
            this.buttons[2] = temp2;
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
        this.$store
          .dispatch("renewal/searchNewLicense", results.professionalTypes.id)
          .then((res) => {
            if (res.data.data) {
              this.firstTimeUser = false;
            } else {
              this.firstTimeUser = true;
            }
          });
        if (results.occupationTypeId == 2) {
          this.displayPayrollOption = false;
        } else {
          this.displayPayrollOption = true;
        }
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
