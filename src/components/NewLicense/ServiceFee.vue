<template>
  <div class="flex justify-center">
    <div class="w-screen max-w-4xl">
      <div
        class="flex flex-col mt-large w-full bg-white blue-box-shadow-light rounded "
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

          <div class="flex justify-center mb-8">
            <div>
              <button @click="submit()">Next</button>
            </div>
            <div>
              <button variant="outline">
                Finish Later
              </button>
            </div>
          </div>
        </form>
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
      photo: "",
      passport: "",
      healthExamCert: "",
      englishLanguage: "",
      professionalDoc: [],
      herqa: "",
      supportLetter: "",
      coc: "",
      educationalDoc: [],
      workExperience: "",
      serviceFeeFile: "",
      showPreview: false,
      filePreview: "",
      showUpload: true,
      isImage: true,
    };
  },
  computed: {
    ...mapGetters({
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
  created() {
    this.photo = this.getPhoto;
    this.passport = this.getPassport;
    this.healthExamCert = this.getHealthExamCert;
    this.englishLanguage = this.getEnglishLanguage;
    this.professionalDoc = this.getProfessionalDocuments;
    this.herqa = this.getHerqa;
    this.supportLetter = this.getSupportLetter;
    this.coc = this.getCoc;
    this.educationalDoc = this.getEducationalDocuments;
    this.workExperience = this.getWorkExperience;
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
    async submit() {
      let file4 = {
        serviceFee: this.serviceFeeFile,
      };
      let formData = new FormData();
      formData.append("photo", this.photo);
      formData.append("passport", this.passport);
      formData.append("healthExamCert", this.healthExamCert);
      formData.append("englishLanguage", this.englishLanguage);
      formData.append("professionalDoc", this.professionalDoc);
      formData.append("herqa", this.herqa);
      formData.append("supportLetter", this.supportLetter);
      formData.append("coc", this.getCoc);
      formData.append("educationalDocuments", this.educationalDoc);
      formData.append("workExperience", this.getWorkExperience);
      formData.append("serviceFee", file4.serviceFee);
      this.$store.dispatch("newlicense/uploadDocuments", formData).then((res) => {
        if (res.status === 200) {
          this.$emit("changeActiveState");
          this.$store.dispatch("newlicense/setDocs", res.data);
        } else {
          console.log("Error Occurred");
        }
      });
    },
    nextStep() {
      this.$emit("changeActiveState");
    },
  },
  setup() {},
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
