<template>
  <div>
    <Navigation />
    <div class="w-screen bg-lightBlueB-200 flex items-center justify-center">
      <div class="w-screen max-w-4xl mt-large">
        <div class="flex flex-col w-full bg-white rounded mb-large">
          <transition name="fade" mode="out-in">
            <div v-if="this.activeState == 1">
              <Institution
                :activeState="1"
                @changeActiveState="activeState++"
              />
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <div v-if="this.activeState == 2">
              <LicenseCopy
                :activeState="2"
                @changeActiveState="activeState++"
              />
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <div v-if="this.activeState == 3">
              <VerificationLetter
                :activeState="3"
                @changeActiveState="activeState++"
              />
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <div v-if="this.activeState == 4">
              <ServiceFee :activeState="4" @changeActiveState="activeState++" />
            </div>
          </transition>
          <transition name="fade" mode="out-in">
            <div v-if="this.activeState == 5">
              <VerificationSummary
                :activeState="5"
                @changeActiveState="activeState++"
              />
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from "@/views/Navigation";
import Institution from "./Institution.vue";
import VerificationSummary from "./VerificationSummary";
import VerificationLetter from "./LetterFromOrg";
import LicenseCopy from "./LicenseCopy";
import ServiceFee from "./ServiceFee";

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
    applicationStatuses: "",
    applicationCategories: "",
    documentSpecs: "",
    buttons: [],
    applicationId: "",
    draftId: "",
  }),
  components: {
    Navigation,
    Institution,
    VerificationSummary,
    VerificationLetter,
    LicenseCopy,
    ServiceFee,
  },
  methods: {
    submit(n) {
      this.activeState = n;
    },
    fetchApplicationStatuses() {
      this.$store
        .dispatch("verification/getApplicationStatuses")
        .then((res) => {
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
          this.$store.dispatch("verification/setButtons", this.buttons);
        });
    },
    fetchApplicationCategory() {
      this.$store
        .dispatch("verification/getApplicationCategories")
        .then((res) => {
          const results = res.data.data;
          this.applicationCategories = results;
          const newApplicationData = this.applicationCategories.filter(
            (item) => {
              return item.name == "Verification";
            }
          );
          this.applicationId = newApplicationData[0]["id"];
          this.$store.dispatch(
            "verification/setApplicationId",
            this.applicationId
          );
          this.fetchDocumentSpec();
        });
    },
    fetchDocumentSpec() {
      this.$store
        .dispatch("verification/getDocumentSpecs", this.applicationId)
        .then((res) => {
          const results = res.data.data;
          this.documentSpecs = results;
          console.log(this.documentSpecs);
          this.$store
            .dispatch("verification/setDocumentSpecs", this.documentSpecs)
            .then((res) => {});
        });
    },
    fetchDraft(id) {
      this.$store.dispatch("verification/getDraft", id).then((res) => {
        const results = res.data.data;
        this.$store.dispatch("verification/setDraft", results);
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
