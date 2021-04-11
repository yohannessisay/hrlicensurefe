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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["activeState"],
  components: { TitleWithIllustration },
  data() {
    return {
      serviceFeeFile: "",
      showPreview: false,
      filePreview: "",
      showUpload: true,
      isImage: true,
      buttons: [],
      documentSpec: [],
      userId: 2,
      license: "",

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
      this.isImage = true;
    },
    handleFileUpload() {
      this.showUpload = false;
      this.serviceFeeFile = this.$refs.serviceFeeFile.files[0];
      let reader = new FileReader();

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
      this.$store.dispatch("newlicense/addNewLicense", license).then((res) => {
        let licenseId = res.data.data.id;
        let formData = new FormData();
        formData.append(this.documentSpec[0].documentType.code, this.photo);
        formData.append(this.documentSpec[1].documentType.code, this.passport);
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

        let payload = { document: formData, id: licenseId };
        this.$store
          .dispatch("newlicense/uploadDocuments", payload)
          .then((res) => {
            if (res.data.status == "Success") {
              this.$router.push({ path: "/menu" });
            }
          })
          .catch((err) => {});
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
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
</style>
