<template>
  <div class="flex justify-center">
    <div class="w-screen max-w-4xl">
      <div
        class="flex flex-col pt-large w-full bg-white blue-box-shadow-light rounded "
      >
        <TitleWithIllustration
          illustration="User"
          message="Photo"
          class="mt-8"
        />
        <form @submit.prevent="submit" class="mx-auto max-w-3xl w-full mt-8">
          <div class="flex justify-center">
            <div>
              <span v-if="showUpload">
                <label class="text-primary-700"
                  >Upload image:
                  <div class="dropbox">
                    <input
                      type="file"
                      id="photoFile"
                      class="photoFile"
                      ref="photoFile"
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
      isImage: true
    };
  },
  computed: {
    ...mapGetters({
      getRenewalLicense: "renewal/getRenewalLicense"
    })
  },
  created() {
    this.renewalLicense = this.getRenewalLicense;
    console.log(this.renewalLicense);
  },
  methods: {
    ...mapActions(["setRenewalPhoto"]),
    reset() {
      // reset form to initial state
      this.showUpload = true;
      this.showPreview = false;
      this.photoFile = "";
      this.filePreview = "";
      this.isImage = true;
    },
    handleFileUpload() {
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
    submit() {
      this.$emit("changeActiveState");
      let file = {
        profilePhoto: this.photoFile
      };
      this.$store.dispatch("renewal/setRenewalPhoto", file);
    }
  }
};
</script>
<style>
@import "../../styles/document-upload.css";
img {
  width: 250px;
  height: 250px;
}
</style>
