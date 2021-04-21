<template>
  <div class="flex justify-center">
    <div class="w-screen max-w-4xl">
      <div
        class="flex flex-col pt-large w-full bg-white blue-box-shadow-light rounded "
      >
        <TitleWithIllustration
          illustration="Certificate"
          message="Service Fee(Optional)"
          class="mt-8"
        />
        <form @submit.prevent="nextStep" class="mx-auto max-w-3xl w-full mt-8">
          <div class="flex justify-center mb-10">
            <div>
              <span v-if="showUpload">
                <label class="text-primary-700"
                  >Upload image:
                  <div class="dropbox">
                    <input
                      type="file"
                      id="serviceFeeFile"
                      ref="serviceFeeFile"
                      v-on:change="handleFileUpload()"
                      style="margin-bottom: 15px !important;"
                    />
                    <p>
                      Drag your file(s) here to begin<br />
                      or click to browse
                    </p>
                  </div>
                </label>
              </span>

              <picture v-if="!showUpload && isImage">
                <p>
                  <a href="javascript:void(0)" @click="reset()">Upload again</a>
                </p>
                <img v-bind:src="filePreview" v-show="showPreview" />
              </picture>

              <span v-if="!showUpload && !isImage">
                <img :src="filePreview" alt="" class="preview" />
              </span>
            </div>
          </div>
        </form>
        <div class="flex justify-center mb-8">
          <button @click="nextStep">
            Next
          </button>
          <button @click="draft(this.buttons[0].action)" variant="outline">
            {{ this.buttons[0]["name"] }}
          </button>
          <button
            v-if="this.buttons.length > 2"
            @click="withdraw(this.buttons[2].action)"
            variant="outline"
          >
            {{ this.buttons[2]["name"] }}
          </button>
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
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
import { mapGetters, mapActions } from "vuex";
import FlashMessage from "@/sharedComponents/FlashMessage";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import Spinner from "@/sharedComponents/Spinner";

export default {
  props: ["activeState"],
  components: {
    TitleWithIllustration,
    FlashMessage,
    ErrorFlashMessage,
    Spinner,
  },
  data() {
    return {
      basePath: "https://hrlicensurebe.dev.k8s.sandboxaddis.com/",
      showFlash: false,
      showErrorFlash: false,
      showLoading: false,
      serviceFeeFile: "",
      showPreview: false,
      filePreview: "",
      showUpload: true,
      isImage: true,
      buttons: [],
      documentSpec: [],
      userId: localStorage.getItem("userId"),
      license: "",
      draftId: "",
      draftData: "",

      photo: "",
      passport: "",
      healthExamCert: "",
      workExperience: "",
      englishLanguage: "",
      professionalDoc: [],
      herqa: "",
      educationalDocs: [],
      coc: "",
      supportLetter: "",
    };
  },
  created() {
    this.draftId = this.$route.params.id;
    if (this.draftId != undefined) {
      this.draftData = this.getDraftData;
      for (let i = 0; i < this.draftData.documents.length; i++) {
        if (this.draftData.documents[i].documentTypeCode == "SF") {
          this.showUpload = false;
          this.isImage = true;
          this.serviceFeeFile = this.draftData.documents[i];
          this.showPreview = true;
          this.filePreview =
            this.basePath + this.draftData.documents[i].filePath;
        }
      }
    }
    this.license = this.getLicense;
    this.buttons = this.getButtons;
    this.documentSpec = this.getDocumentSpec;
    this.photo = this.getPhoto;
    this.passport = this.getPassport;
    this.healthExamCert = this.getHealthExamCert;
    this.englishLanguage = this.getEnglishLanguage;
    this.professionalDoc = this.getProfessionalDocuments;
    this.herqa = this.getHerqa;
    this.supportLetter = this.getSupportLetter;
    this.coc = this.getCoc;
    this.educationalDocs = this.getEducationalDocuments;
    this.workExperience = this.getWorkExperience;
  },
  computed: {
    ...mapGetters({
      getButtons: "newlicense/getButtons",
      getLicense: "newlicense/getLicense",
      getDocumentSpec: "newlicense/getDocumentSpec",

      getPhoto: "newlicense/getPhoto",
      getPassport: "newlicense/getPassport",
      getHealthExamCert: "newlicense/getHealthExamCert",
      getEnglishLanguage: "newlicense/getEnglishLanguage",
      getProfessionalDocuments: "newlicense/getProfessionalDocuments",
      getHerqa: "newlicense/getHerqa",
      getSupportLetter: "newlicense/getSupportLetter",
      getCoc: "newlicense/getCoc",
      getEducationalDocuments: "newlicense/getEducationalDocuments",
      getWorkExperience: "newlicense/getWorkExperience",
      getDraftData: "newlicense/getDraft",
    }),
  },

  methods: {
    ...mapActions(["setServiceFee"]),
    reset() {
      // reset form to initial state
      this.showUpload = true;
      this.showPreview = false;
      this.serviceFeeFile = "";
      this.filePreview = "";
      // this.isImage = true;
    },
    handleFileUpload() {
      this.showUpload = false;
      this.serviceFeeFile = this.$refs.serviceFeeFile.files[0];
      let reader = new FileReader();
      this.isImage = true;
      reader.addEventListener(
        "load",
        function() {
          this.showPreview = true;
          this.filePreview = reader.result;
        }.bind(this),
        false
      );

      if (this.serviceFeeFile) {
        if (/\.(jpe?g|png|gif)$/i.test(this.serviceFeeFile.name)) {
          this.isImage = true;
          reader.readAsDataURL(this.serviceFeeFile);
        } else if (/\.(pdf)$/i.test(this.serviceFeeFile.name)) {
          this.isImage = false;
          reader.readAsText(this.serviceFeeFile);
        }
      }
    },
    draft(action) {
      if (this.draftId) {
        if (this.serviceFeeFile) {
          // modify the drafData before dispatching
        } else {
          // just send the draftData
        }
      } else {
        let license = {
          action: action,
          data: {
            applicantId: this.userId,
            applicantTypeId: this.license.applicantTypeId,
            education: {
              institutionId: this.license.education.departmentId,
              departmentId: this.license.education.institutionId,
            },
          },
        };
        this.$store
          .dispatch("newlicense/addNewLicense", license)
          .then((res) => {
            let licenseId = res.data.data.id;
            let formData = new FormData();
            formData.append(this.documentSpec[0].documentType.code, this.photo);
            formData.append(
              this.documentSpec[1].documentType.code,
              this.passport
            );
            formData.append(
              this.documentSpec[2].documentType.code,
              this.healthExamCert
            );
            formData.append(
              this.documentSpec[3].documentType.code,
              this.serviceFeeFile
            );
            formData.append(
              this.documentSpec[4].documentType.code,
              this.workExperience
            );
            formData.append(
              this.documentSpec[5].documentType.code,
              this.englishLanguage
            );

            if (this.professionalDoc != undefined) {
              formData.append(
                this.documentSpec[6].documentType.code,
                this.professionalDoc[0]
              );
              formData.append(
                this.documentSpec[7].documentType.code,
                this.professionalDoc[1]
              );
              formData.append(
                this.documentSpec[8].documentType.code,
                this.professionalDoc[2]
              );
            }

            formData.append(this.documentSpec[9].documentType.code, this.coc);
            if (this.educationalDocs != undefined) {
              formData.append(
                this.documentSpec[10].documentType.code,
                this.educationalDocs[0]
              );
              formData.append(
                this.documentSpec[11].documentType.code,
                this.educationalDocs[1]
              );
              formData.append(
                this.documentSpec[12].documentType.code,
                this.educationalDocs[2]
              );
              formData.append(
                this.documentSpec[13].documentType.code,
                this.educationalDocs[3]
              );
              formData.append(
                this.documentSpec[14].documentType.code,
                this.educationalDocs[4]
              );
            }

            formData.append(
              this.documentSpec[15].documentType.code,
              this.supportLetter
            );
            formData.append(
              this.documentSpec[16].documentType.code,
              this.herqa
            );
            for (var pair of formData.entries()) {
              console.log(pair[0] + ", " + pair[1]);
            }
            let payload = { document: formData, id: licenseId };
            this.$store
              .dispatch("newlicense/uploadDocuments", payload)
              .then((res) => {
                console.log(res.data);
                if (res.data.status == "Success") {
                  this.showFlash = true;
                  setTimeout(() => {
                    this.$router.push({ path: "/menu" });
                  }, 3000);
                } else {
                  this.showErrorFlash = true;
                }
              })
              .catch((err) => {});
          });
      }
    },
    withdraw(action) {
      let withdrawObj = {
        action: action,
        data: this.getDraftData,
      };
      let payload = {
        licenseId: this.getDraftData.id,
        withdrawData: withdrawObj,
      };
      this.$store.dispatch("newlicense/withdraw", payload).then((res) => {
        if (res.data.status == "Success") {
          this.showFlash = true;
          setTimeout(() => {
            this.$router.push({ path: "/menu" });
          }, 3000);
        } else {
          this.showErrorFlash = true;
        }
      });
    },
    nextStep() {
      this.$emit("changeActiveState");
      this.$store.dispatch("newlicense/setServiceFee", this.serviceFeeFile);
    },
  },
};
</script>
<style>
img {
  width: 250px;
  height: 250px;
}

#serviceFeeFile {
  opacity: 0;
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}
</style>
