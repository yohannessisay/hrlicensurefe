<template>
  <div class="flex justify-center">
    <div class="w-screen max-w-full">
      <div
        class="flex flex-col pt-large w-full bg-white blue-box-shadow-light rounded "
      >
        <TitleWithIllustration
          illustration="User"
          message="Educational Documents"
          class="mt-8"
        />
        <div class="flex-row justify-center px-8 py-4">
          <div class="ml-4" style="width:250px">
            <span v-if="showCertificate1Upload">
              <label class="text-primary-700 text-lg"
                >Upload 8th Grade Certificate:
                <div class="dropbox">
                  <input
                    type="file"
                    id="certificateFile1"
                    ref="certificateFile1"
                    v-on:change="handleCertificate1Upload()"
                    style="margin-bottom: 15px !important;"
                  />
                  <p>
                    Drag your file(s) here to begin<br />
                    or click to browse
                  </p>
                </div>
              </label>
            </span>

            <picture v-if="!showCertificate1Upload && isCertificate1">
              <p>
                <a href="javascript:void(0)" @click="resetCert1()"
                  >Upload again</a
                >
              </p>
              <img
                v-bind:src="certificate1Preview"
                v-show="showCertificate1Preview"
              />
            </picture>

            <span v-if="!showCertificate1Upload && !isCertificate1">
              <img :src="certificate1Preview" alt="" class="preview" />
            </span>

            <h6 style="margin-top: 15px !important;">
              Your photo should be passport size
            </h6>
          </div>

          <div class="ml-4" style="width:250px">
            <span v-if="showCertificate2Upload">
              <label class="text-primary-700 text-lg"
                >Upload 10th Grade Certificate:
                <div class="dropbox">
                  <input
                    type="file"
                    id="certificateFile2"
                    ref="certificateFile2"
                    v-on:change="handleCertificate2Upload()"
                    style="margin-bottom: 15px !important;"
                  />
                  <p>
                    Drag your file(s) here to begin<br />
                    or click to browse
                  </p>
                </div>
              </label>
            </span>

            <picture v-if="!showCertificate2Upload && isCertificate2">
              <p>
                <a href="javascript:void(0)" @click="resetCert2()"
                  >Upload again</a
                >
              </p>
              <img
                v-bind:src="certificate2Preview"
                v-show="showCertificate2Preview"
              />
            </picture>

            <span v-if="!showCertificate2Upload && !isCertificate2">
              <img :src="certificate2Preview" alt="" class="preview" />
            </span>

            <h6 style="margin-top: 15px !important;">
              Your photo should be passport size
            </h6>
          </div>

          <div class="ml-4" style="width:250px">
            <span v-if="showCertificate3Upload">
              <label class="text-primary-700 text-lg"
                >Upload 12th Grade Certificate:
                <div class="dropbox">
                  <input
                    type="file"
                    id="certificateFile3"
                    ref="certificateFile3"
                    v-on:change="handleCertificate3Upload()"
                    style="margin-bottom: 15px !important;"
                  />
                  <p>
                    Drag your file(s) here to begin<br />
                    or click to browse
                  </p>
                </div>
              </label>
            </span>

            <picture v-if="!showCertificate3Upload && isCertificate3">
              <p>
                <a href="javascript:void(0)" @click="resetCert3()"
                  >Upload again</a
                >
              </p>
              <img
                v-bind:src="certificate3Preview"
                v-show="showCertificate3Preview"
              />
            </picture>

            <span v-if="!showCertificate3Upload && !isCertificate3">
              <img :src="certificate3Preview" alt="" class="preview" />
            </span>

            <h6 style="margin-top: 15px !important;">
              Your photo should be passport size
            </h6>
          </div>

          <div class="ml-4" style="width:250px">
            <span v-if="showCertificate4Upload">
              <label class="text-primary-700 text-lg"
                >Upload Transcript 9-10:
                <div class="dropbox">
                  <input
                    type="file"
                    id="certificateFile4"
                    ref="certificateFile4"
                    v-on:change="handleCertificate4Upload()"
                    style="margin-bottom: 15px !important;"
                  />
                  <p>
                    Drag your file(s) here to begin<br />
                    or click to browse
                  </p>
                </div>
              </label>
            </span>

            <picture v-if="!showCertificate4Upload && isCertificate4">
              <p>
                <a href="javascript:void(0)" @click="resetCert4()"
                  >Upload again</a
                >
              </p>
              <img
                v-bind:src="certificate4Preview"
                v-show="showCertificate4Preview"
              />
            </picture>

            <span v-if="!showCertificate4Upload && !isCertificate4">
              <img :src="certificate4Preview" alt="" class="preview" />
            </span>

            <h6 style="margin-top: 15px !important;">
              Your photo should be passport size
            </h6>
          </div>

          <div class="ml-4" style="width:250px">
            <span v-if="showCertificate5Upload">
              <label class="text-primary-700 text-lg"
                >Upload Transcript 11-12:
                <div class="dropbox">
                  <input
                    type="file"
                    id="certificateFile5"
                    ref="certificateFile5"
                    v-on:change="handleCertificate5Upload()"
                    style="margin-bottom: 15px !important;"
                  />
                  <p>
                    Drag your file(s) here to begin<br />
                    or click to browse
                  </p>
                </div>
              </label>
            </span>

            <picture v-if="!showCertificate5Upload && isCertificate5">
              <p>
                <a href="javascript:void(0)" @click="resetCert5()"
                  >Upload again</a
                >
              </p>
              <img
                v-bind:src="certificate5Preview"
                v-show="showCertificate5Preview"
              />
            </picture>

            <span v-if="!showCertificate5Upload && !isCertificate5">
              <img :src="certificate5Preview" alt="" class="preview" />
            </span>

            <h6 style="margin-top: 15px !important;">
              Your photo should be passport size
            </h6>
          </div>
        </div>

        <div class="flex justify-center mb-8">
          <button @click="submit">
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
  components: { TitleWithIllustration },
  props: ["activeState"],
  data() {
    return {
      certificateFile1: "",
      showCertificate1Preview: false,
      certificate1Preview: "",
      showCertificate1Upload: true,
      isCertificate1: true,

      certificateFile2: "",
      showCertificate2Preview: false,
      certificate2Preview: "",
      showCertificate2Upload: true,
      isCertificate2: true,

      certificateFile3: "",
      showCertificate3Preview: false,
      certificate3Preview: "",
      showCertificate3Upload: true,
      isCertificate3: true,

      certificateFile4: "",
      showCertificate4Preview: false,
      certificate4Preview: "",
      showCertificate4Upload: true,
      isCertificate4: true,

      certificateFile5: "",
      showCertificate5Preview: false,
      certificate5Preview: "",
      showCertificate5Upload: true,
      isCertificate5: true,

      buttons: [],
      documentSpec: [],
      licenseInfo: "",
      userId: 2,

      photo: "",
      passport: "",
      healthExamCert: "",
      workExperience: "",
      englishLanguage: "",
      herqa: "",
      professionalDoc: [],
      coc: "",
      supportLetter: "",
      serviceFee: "",
    };
  },
  computed: {
    ...mapGetters({
      getPersonalDoc: "newlicense/getProfessionalDocuments",
      getButtons: "newlicense/getButtons",
      getLicense: "newlicense/getLicense",
      getDocumentSpec: "newlicense/getDocumentSpec",

      getPhoto: "newlicense/getPhoto",
      getPassport: "newlicense/getPassport",
      getHealthExamCert: "newlicense/getHealthExamCert",
      getEnglishLanguage: "newlicense/getEnglishLanguage",
      getHerqa: "newlicense/getHerqa",
      getSupportLetter: "newlicense/getSupportLetter",
      getCoc: "newlicense/getCoc",
      getProfessionalDoc: "newlicense/getProfessionalDocuments",
      getWorkExperience: "newlicense/getWorkExperience",
      getServiceFee: "newlicense/getServiceFee",
    }),
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
    this.workExperience = this.getWorkExperience;
    this.serviceFee = this.getServiceFee;
  },
  methods: {
    ...mapActions(["setProfessionalDoc"]),
    resetCert1() {
      // reset form to initial state
      this.showCertificate1Upload = true;
      this.showCertificate1Preview = false;
      this.certificateFile1 = "";
      this.certificate1Preview = "";
      this.isCertificate1 = true;
    },
    resetCert2() {
      this.showCertificate2Upload = true;
      this.showCertificate2Preview = false;
      this.certificateFile2 = "";
      this.certificate2Preview = "";
      this.isCertificate2 = true;
    },
    resetCert3() {
      this.showCertificate3Upload = true;
      this.showCertificate3Preview = false;
      this.certificateFile3 = "";
      this.certificate3Preview = "";
      this.isCertificate3 = true;
    },
    resetCert4() {
      this.showCertificate4Upload = true;
      this.showCertificate4Preview = false;
      this.certificateFile4 = "";
      this.certificate4Preview = "";
      this.isCertificate4 = true;
    },
    resetCert5() {
      this.showCertificate5Upload = true;
      this.showCertificate5Preview = false;
      this.certificateFile5 = "";
      this.certificate5Preview = "";
      this.isCertificate5 = true;
    },
    handleCertificate1Upload() {
      this.showCertificate1Upload = false;
      this.certificateFile1 = this.$refs.certificateFile1.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          this.showCertificate1Preview = true;
          this.certificate1Preview = reader.result;
        }.bind(this),
        false
      );

      if (this.certificateFile1) {
        if (/\.(jpe?g|png|gif)$/i.test(this.certificateFile1.name)) {
          this.isCertificate1 = true;
          reader.readAsDataURL(this.certificateFile1);
        } else if (/\.(pdf)$/i.test(this.certificateFile1.name)) {
          this.isCertificate1 = false;
          reader.readAsText(this.certificateFile1);
        }
      }
    },

    handleCertificate2Upload() {
      this.showCertificate2Upload = false;
      this.certificateFile2 = this.$refs.certificateFile2.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          this.showCertificate2Preview = true;
          this.certificate2Preview = reader.result;
        }.bind(this),
        false
      );

      if (this.certificateFile2) {
        if (/\.(jpe?g|png|gif)$/i.test(this.certificateFile2.name)) {
          this.isCertificate2 = true;
          reader.readAsDataURL(this.certificateFile2);
        } else if (/\.(pdf)$/i.test(this.certificateFile2.name)) {
          this.isCertificate2 = false;
          reader.readAsText(this.certificateFile2);
        }
      }
    },

    handleCertificate3Upload() {
      this.showCertificate3Upload = false;
      this.certificateFile3 = this.$refs.certificateFile3.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          this.showCertificate3Preview = true;
          this.certificate3Preview = reader.result;
        }.bind(this),
        false
      );

      if (this.certificateFile3) {
        if (/\.(jpe?g|png|gif)$/i.test(this.certificateFile3.name)) {
          this.isCertificate3 = true;
          reader.readAsDataURL(this.certificateFile3);
        } else if (/\.(pdf)$/i.test(this.certificateFile3.name)) {
          this.isCertificate3 = false;
          reader.readAsText(this.certificateFile3);
        }
      }
    },

    handleCertificate4Upload() {
      this.showCertificate4Upload = false;
      this.certificateFile4 = this.$refs.certificateFile4.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          this.showCertificate4Preview = true;
          this.certificate4Preview = reader.result;
        }.bind(this),
        false
      );
      if (this.certificateFile4) {
        if (/\.(jpe?g|png|gif)$/i.test(this.certificateFile4.name)) {
          this.isCertificate4 = true;
          reader.readAsDataURL(this.certificateFile4);
        } else if (/\.(pdf)$/i.test(this.certificateFile4.name)) {
          this.isCertificate4 = false;
          reader.readAsText(this.certificateFile4);
        }
      }
    },

    handleCertificate5Upload() {
      this.showCertificate5Upload = false;
      this.certificateFile5 = this.$refs.certificateFile5.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          this.showCertificate5Preview = true;
          this.certificate5Preview = reader.result;
        }.bind(this),
        false
      );
      if (this.certificateFile5) {
        if (/\.(jpe?g|png|gif)$/i.test(this.certificateFile5.name)) {
          this.isCertificate5 = true;
          reader.readAsDataURL(this.certificateFile5);
        } else if (/\.(pdf)$/i.test(this.certificateFile5.name)) {
          this.isCertificate5 = false;
          reader.readAsText(this.certificateFile5);
        }
      }
    },
    submit() {
      this.$emit("changeActiveState");
      let file = [
        this.certificateFile1,
        this.certificateFile2,
        this.certificateFile3,
        this.certificateFile4,
        this.certificateFile5,
      ];

      this.$store.dispatch("newlicense/setProfessionalDoc", file);
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
          this.serviceFee
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
        formData.append(
          this.documentSpec[10].documentType.code,
          this.certificateFile1
        );
        formData.append(
          this.documentSpec[11].documentType.code,
          this.certificateFile2
        );
        formData.append(
          this.documentSpec[12].documentType.code,
          this.certificateFile3
        );
        formData.append(
          this.documentSpec[13].documentType.code,
          this.certificateFile4
        );
        formData.append(
          this.documentSpec[14].documentType.code,
          this.certificateFile5
        );

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
  },
};
</script>
<style>
img {
  width: 250px;
  height: 250px;
}

#photoFile #diplomaFile #transcriptFile #experienceFile {
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
