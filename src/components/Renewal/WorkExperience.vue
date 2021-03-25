<template>
  <div class="flex justify-center">
    <div class="w-screen max-w-4xl">
      <div
        class="flex flex-col pt-large w-full bg-white blue-box-shadow-light rounded "
      >
        <TitleWithIllustration
          illustration="Certificate"
          message="Work Experience(3 to 4 years)"
          class="mt-8"
        />
        <form @submit.prevent="submit" class="mx-auto max-w-3xl w-full mt-8">
          <div class="flex justify-center mb-10">
            <div>
              <span v-if="showUpload">
                <label class="text-primary-700"
                  >Upload image:
                  <div class="dropbox">
                    <input
                      type="file"
                      id="workExperienceFile"
                      class="photoFile"
                      ref="workExperienceFile"
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
  props: ["activeState"],
  components: { TitleWithIllustration },
  data() {
    return {
      workExperienceFile: "",
      showPreview: false,
      filePreview: "",
      showUpload: true,
      isImage: true,
    };
  },
  computed: {
    ...mapGetters({
      getRenewalCpd: "renewal/getRenewalCpd",
    }),
  },
  created() {
    this.cpd = this.getRenewalCpd;
    console.log(this.cpd)
  },
  methods: {
    ...mapActions(["setRenewalWorkExperience"]),
    reset() {
      // reset form to initial state
      this.showUpload = true;
      this.showPreview = false;
      this.workExperienceFile = "";
      this.filePreview = "";
      this.isImage = true;
    },
    handleFileUpload() {
      this.showUpload = false;
      this.workExperienceFile = this.$refs.workExperienceFile.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          this.showPreview = true;
          this.filePreview = reader.result;
        }.bind(this),
        false
      );

      if (this.workExperienceFile) {
        if (/\.(jpe?g|png|gif)$/i.test(this.workExperienceFile.name)) {
          this.isImage = true;
          reader.readAsDataURL(this.workExperienceFile);
        } else if (/\.(pdf)$/i.test(this.workExperienceFile.name)) {
          this.isImage = false;
          reader.readAsText(this.workExperienceFile);
        }
      }
    },
    submit() {
      this.$emit("changeActiveState");
      let file6 = {
        workExperience: this.workExperienceFile,
      };
      this.$store.dispatch("renewal/setRenewalWorkExperience", file6);
    },
  },
};
</script>
<style>
@import "../../styles/document-upload.css";
img {
  width: 250px;
  height: 250px;
}
</style>
