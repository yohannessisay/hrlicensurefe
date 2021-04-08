<template>
  <div class="flex justify-center">
    <div class="w-screen max-w-6xl">
      <div
        class="flex flex-col pt-large w-full bg-white blue-box-shadow-light rounded "
      >
        <TitleWithIllustration
          illustration="User"
          message="Educational Documents"
          class="mt-8"
        />
        <form @submit.prevent="submit" class="mx-auto mt-6">
          <div class="flex justify-center">
            <div class="ml-4" style="width:220px">
              <span v-if="showCertificate1Upload">
                <label class="text-primary-700"
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

            <div class="ml-4" style="width:220px">
              <span v-if="showCertificate2Upload">
                <label class="text-primary-700"
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

            <div class="ml-4" style="width:220px">
              <span v-if="showCertificate3Upload">
                <label class="text-primary-700"
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

            <div class="ml-4" style="width:220px">
              <span v-if="showCertificate4Upload">
                <label class="text-primary-700"
                  >Upload Transcript:
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
          </div>
        </form>
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

      buttons: [],
    };
  },
  computed: {
    ...mapGetters({
      getPersonalDoc: "newlicense/getProfessionalDocuments",
      getButtons: "newlicense/getButtons",
    }),
  },
  created() {
    this.license = this.getLicense;
    this.buttons = this.getButtons;
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
      this.showExperienceUpload = false;
      this.experienceFile = this.$refs.experienceFile.files[0];
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
    submit() {
      this.$emit("changeActiveState");
      let file = [
        this.certificateFile1,
        this.certificateFile2,
        this.certificateFile3,
        this.certificateFile4,
      ];
      this.$store.dispatch("newlicense/setProfessionalDoc", file);
    },
    draft(action) {
      console.log(action);
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
