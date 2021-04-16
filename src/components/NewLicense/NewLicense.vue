<template>
  <div>
    <Navigation />
    <div class="w-screen bg-lightBlueB-200 flex items-center justify-center">
      <div class="w-screen max-w-4xl mt-medium">
        <div class="flex flex-col w-full bg-white rounded mb-large">
          <transition name="fade" mode="out-in">
            <div v-if="this.activeState == 1">
              <Institution
                :activeState="1"
                @changeActiveState="activeState++"
                @applicantTypeValue="applicantTypeSet"
              />
            </div>
          </transition>

          <div v-if="this.applicantType == 1">
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 2">
                <Photo :activeState="2" @changeActiveState="activeState++" />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 3">
                <Passport :activeState="3" @changeActiveState="activeState++" />
              </div>
            </transition>

            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <HealthExamCert
                  :activeState="4"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>

            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <COC :activeState="5" @changeActiveState="activeState++" />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 6">
                <EducationalDoc
                  :activeState="6"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 7">
                <WorkExperience
                  :activeState="7"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 8">
                <SupportLetterEthiopian
                  :activeState="8"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 9">
                <ServiceFee
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

          <div v-if="this.applicantType == 2">
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 2">
                <Photo :activeState="2" @changeActiveState="activeState++" />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 3">
                <Passport :activeState="3" @changeActiveState="activeState++" />
              </div>
            </transition>

            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <HealthExamCert
                  :activeState="4"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>

            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <EnglishLanguageForeigner
                  :activeState="5"
                  @changeActiveState="activeState++"
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
                <ServiceFee
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

          <div v-if="this.applicantType == 3">
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 2">
                <Photo :activeState="2" @changeActiveState="activeState++" />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 3">
                <Passport :activeState="3" @changeActiveState="activeState++" />
              </div>
            </transition>

            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <HealthExamCert
                  :activeState="4"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>

            <!-- <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <EnglishLanguageEthiopian
                  :activeState="5"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition> -->
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <HERQA :activeState="6" @changeActiveState="activeState++" />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 6">
                <ProfessionalDocumentEthiopian
                  :activeState="7"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 7">
                <SupportLetterForeign
                  :activeState="8"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 8">
                <ServiceFee
                  :activeState="9"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 9">
                <LicenseSummary
                  :activeState="10"
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
import Photo from "./Photo.vue";
import Passport from "./Passport.vue";
import HealthExamCert from "./HealthExamCert.vue";
import LicenseSummary from "./LicenseSummary.vue";
import ServiceFee from "./ServiceFee.vue";

import EnglishLanguageEthiopian from "./Ethiopians F/EnglishLanguage";
import HERQA from "./Ethiopians F/HERQA";
import ProfessionalDocumentEthiopian from "./Ethiopians F/ProfessionalDocuments";
import SupportLetterForeign from "./Ethiopians F/SupportLetter";

import COC from "./Ethiopians L/COC";
import EducationalDoc from "./Ethiopians L/EducationalDoc";
import WorkExperience from "./Ethiopians L/WorkExperience";
import SupportLetterEthiopian from "./Ethiopians L/SupportLetter";

import EnglishLanguageForeigner from "./Foreigner/EnglishLanguage";
import ProfessionalDocumentForeigner from "./Foreigner/ProfessionalDocument";

export default {
  created() {
    this.draftId = this.$route.params.id;
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
  }),
  components: {
    Institution,
    Photo,
    Passport,
    HealthExamCert,
    LicenseSummary,
    ServiceFee,
    EnglishLanguageEthiopian,
    HERQA,
    ProfessionalDocumentEthiopian,
    SupportLetterEthiopian,
    COC,
    EducationalDoc,
    WorkExperience,
    SupportLetterForeign,
    EnglishLanguageForeigner,
    ProfessionalDocumentForeigner,
    Navigation,
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
      this.$store.dispatch("newlicense/getApplicationStatuses").then((res) => {
        const results = res.data.data;
        this.applicationStatuses = results;
        if (this.draftId != undefined) {
          let status = this.applicationStatuses.filter(function(e) {
            return e.code == "DRA";
          });
          this.buttons = status[0]["buttons"];
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
        console.log(res.data);
        const results = res.data.data;
        this.$store.dispatch("newlicense/setDraft", results);
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
