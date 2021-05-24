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
              <Photo :activeState="2" @changeActiveState="activeState++" />
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
          <div v-if="this.applicantType == 1">
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <PreviousLicenseL
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
          <div v-if="this.applicantType == 2">
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <LetterFromInstitution
                  :activeState="4"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <ForeignerServiceFee
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
                <LicenseSummary
                  :activeState="7"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
          </div>
          <div v-if="this.applicantType == 3">
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 4">
                <CPD :activeState="4" @changeActiveState="activeState++" />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 5">
                <AbroadServiceFee
                  :activeState="5"
                  @changeActiveState="activeState++"
                />
              </div>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="this.activeState == 6">
                <PreviousLicenseE
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
import Photo from "./Photo.vue";
import HealthExamCert from "./HealthExamCert.vue";
import WorkExperience from "./WorkExperience.vue";
import LicenseSummary from "./RenewalSummary.vue";
import AbroadServiceFee from "./Ethiopians F/AbroadServiceFee.vue";
import ForeignerServiceFee from "./Foreigner/ForeignerServiceFee";
import LetterFromInstitution from "./Foreigner/LetterFromHiringManager";
import CPD from "./Ethiopians F/CPD.vue";
import PreviousLicenseE from "./Ethiopians F/PreviousLicenseE";
import PreviousLicenseL from "./Ethiopians L/PreviousLicenseL";

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
    declinedFields: [],
    acceptedFields: [],
    remark: "",
  }),
  components: {
    Institution,
    Photo,
    HealthExamCert,
    LicenseSummary,
    Navigation,
    AbroadServiceFee,
    ForeignerServiceFee,
    LetterFromInstitution,
    CPD,
    WorkExperience,
    PreviousLicenseE,
    PreviousLicenseL,
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
