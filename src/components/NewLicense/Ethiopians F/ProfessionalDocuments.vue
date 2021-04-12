<template>
  <div class="flex justify-center">
    <div class="w-screen max-w-6xl">
      <div
        class="flex flex-col pt-large w-full bg-white blue-box-shadow-light rounded "
      >
        <TitleWithIllustration
          illustration="User"
          message="Professional Documents"
          class="mt-8"
        />
        <form @submit.prevent="submit" class="mx-auto mt-6">
          <div class="flex justify-center">
            <div class="ml-4" style="width:220px">
              <span v-if="showUpload">
                <label class="text-primary-700"
                  >Upload Certificate:
                  <div class="dropbox">
                    <input
                      type="file"
                      id="photoFile"
                      ref="photoFile"
                      v-on:change="handleCertificateUpload()"
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

              <h6 style="margin-top: 15px !important;">
                Your photo should be passport size
              </h6>
            </div>

            <div class="ml-4" style="width:220px">
              <span v-if="showDiplomaUpload">
                <label class="text-primary-700"
                  >Upload Diploma:
                  <div class="dropbox">
                    <input
                      type="file"
                      id="diplomaFile"
                      ref="diplomaFile"
                      v-on:change="handleDiplomaUpload()"
                      style="margin-bottom: 15px !important;"
                    />
                    <p>
                      Drag your file(s) here to begin<br />
                      or click to browse
                    </p>
                  </div>
                </label>
              </span>

              <picture v-if="!showDiplomaUpload && isDiplomaImage">
                <p>
                  <a href="javascript:void(0)" @click="resetDiploma()"
                    >Upload again</a
                  >
                </p>
                <img v-bind:src="diplomaPreview" v-show="showDiplomaPreview" />
              </picture>

              <span v-if="!showDiplomaUpload && !isDiplomaImage">
                <img :src="diplomaPreview" alt="" class="preview" />
              </span>

              <h6 style="margin-top: 15px !important;">
                Your photo should be passport size
              </h6>
            </div>

            <div class="ml-4" style="width:220px">
              <span v-if="showTranscriptUpload">
                <label class="text-primary-700"
                  >Upload Transcript:
                  <div class="dropbox">
                    <input
                      type="file"
                      id="transcriptFile"
                      ref="transcriptFile"
                      v-on:change="handleTranscriptUpload()"
                      style="margin-bottom: 15px !important;"
                    />
                    <p>
                      Drag your file(s) here to begin<br />
                      or click to browse
                    </p>
                  </div>
                </label>
              </span>

              <picture v-if="!showTranscriptUpload && isTranscriptImage">
                <p>
                  <a href="javascript:void(0)" @click="resetTranscript()"
                    >Upload again</a
                  >
                </p>
                <img
                  v-bind:src="transcriptPreview"
                  v-show="showTranscriptPreview"
                />
              </picture>

              <span v-if="!showTranscriptUpload && !isTranscriptImage">
                <img :src="transcriptPreview" alt="" class="preview" />
              </span>

              <h6 style="margin-top: 15px !important;">
                Your photo should be passport size
              </h6>
            </div>

            <div class="ml-4" style="width:220px">
              <span v-if="showExperienceUpload">
                <label class="text-primary-700"
                  >Upload Work Experience:
                  <div class="dropbox">
                    <input
                      type="file"
                      id="experienceFile"
                      ref="experienceFile"
                      v-on:change="handleExperienceUpload()"
                      style="margin-bottom: 15px !important;"
                    />
                    <p>
                      Drag your file(s) here to begin<br />
                      or click to browse
                    </p>
                  </div>
                </label>
              </span>

              <picture v-if="!showExperienceUpload && isExperienceImage">
                <p>
                  <a href="javascript:void(0)" @click="resetExperience()"
                    >Upload again</a
                  >
                </p>
                <img
                  v-bind:src="experiencePreview"
                  v-show="showExperiencePreview"
                />
              </picture>

              <span v-if="!showExperienceUpload && !isExperienceImage">
                <img :src="experiencePreview" alt="" class="preview" />
              </span>

              <h6 style="margin-top: 15px !important;">
                Your photo should be passport size
              </h6>
            </div>
          </div>

          <div class="flex justify-center mb-8 mt-medium">
            <div>
              <button>Next</button>
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
  components: { TitleWithIllustration },
  props: ["activeState"],
  data() {
    return {
      photoFile: "",
      showPreview: false,
      filePreview: "",
      showUpload: true,
      isImage: true,

      diplomaFile: "",
      showDiplomaPreview: false,
      diplomaPreview: "",
      showDiplomaUpload: true,
      isDiplomaImage: true,

      transcriptFile: "",
      showTranscriptPreview: false,
      transcriptPreview: "",
      showTranscriptUpload: true,
      isTranscriptImage: true,

      experienceFile: "",
      showExperiencePreview: false,
      experiencePreview: "",
      showExperienceUpload: true,
      isExperienceImage: true,
    };
  },
  computed: {
    ...mapGetters({
      getPersonalDoc: "newlicense/getProfessionalDocuments",
    }),
  },
  created() {
    this.license = this.getLicense;
  },
  methods: {
    ...mapActions(["setProfessionalDoc"]),
    reset() {
      // reset form to initial state
      this.showUpload = true;
      this.showPreview = false;
      this.photoFile = "";
      this.filePreview = "";
      this.isImage = true;
    },
    resetDiploma() {
      this.showDiplomaUpload = true;
      this.showDiplomaPreview = false;
      this.diplomaFile = "";
      this.diplomaPreview = "";
      this.isDiplomaImage = true;
    },
    resetTranscript() {
      this.showTranscriptUpload = true;
      this.showTranscriptPreview = false;
      this.transcriptFile = "";
      this.transcriptPreview = "";
      this.isTranscriptImage = true;
    },
    resetExperience() {
      this.showExperienceUpload = true;
      this.showExperiencePreview = false;
      this.experienceFile = "";
      this.experiencePreview = "";
      this.isExperienceImage = true;
    },
    handleCertificateUpload() {
      this.showUpload = false;
      this.photoFile = this.$refs.photoFile.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          this.showPreview = true;
          this.filePreview = reader.result;
        }.bind(this),
        false
      );

      if (this.photoFile) {
        if (/\.(jpe?g|png|gif)$/i.test(this.photoFile.name)) {
          this.isImage = true;
          reader.readAsDataURL(this.photoFile);
        } else if (/\.(pdf)$/i.test(this.photoFile.name)) {
          this.isImage = false;
          reader.readAsText(this.photoFile);
        }
      }
    },
    handleDiplomaUpload() {
      this.showDiplomaUpload = false;
      this.diplomaFile = this.$refs.diplomaFile.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          this.showDiplomaPreview = true;
          this.diplomaPreview = reader.result;
        }.bind(this),
        false
      );

      if (this.diplomaFile) {
        if (/\.(jpe?g|png|gif)$/i.test(this.diplomaFile.name)) {
          this.isDiplomaImage = true;
          reader.readAsDataURL(this.diplomaFile);
        } else if (/\.(pdf)$/i.test(this.diplomaFile.name)) {
          this.isDiplomaImage = false;
          reader.readAsText(this.diplomaFile);
        }
      }
    },
    handleTranscriptUpload() {
      this.showTranscriptUpload = false;
      this.transcriptFile = this.$refs.transcriptFile.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          this.showTranscriptPreview = true;
          this.transcriptPreview = reader.result;
        }.bind(this),
        false
      );

      if (this.transcriptFile) {
        if (/\.(jpe?g|png|gif)$/i.test(this.transcriptFile.name)) {
          this.isTranscriptImage = true;
          reader.readAsDataURL(this.transcriptFile);
        } else if (/\.(pdf)$/i.test(this.transcriptFile.name)) {
          this.isTranscriptImage = false;
          reader.readAsText(this.transcriptFile);
        }
      }
    },
    handleExperienceUpload() {
      this.showExperienceUpload = false;
      this.experienceFile = this.$refs.experienceFile.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          this.showExperiencePreview = true;
          this.experiencePreview = reader.result;
        }.bind(this),
        false
      );
      if (this.experienceFile) {
        if (/\.(jpe?g|png|gif)$/i.test(this.experienceFile.name)) {
          this.isExperienceImage = true;
          reader.readAsDataURL(this.experienceFile);
        } else if (/\.(pdf)$/i.test(this.experienceFile.name)) {
          this.isExperienceImage = false;
          reader.readAsText(this.experienceFile);
        }
      }
    },
    submit() {
      this.$emit("changeActiveState");
      let file = [
        this.photoFile,
        this.diplomaFile,
        this.transcriptFile,
        this.experienceFile,
      ];
      this.$store.dispatch("newlicense/setProfessionalDoc", file);
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
