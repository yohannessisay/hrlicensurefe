<template>
  <div class="flex justify-center">
    <div class="w-screen max-w-4xl">
      <div
        class="flex flex-col pt-large w-full bg-white blue-box-shadow-light rounded "
      >
        <TitleWithIllustration
          illustration="Certificate"
          message="CPD(optional)"
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
                      id="cpdFile"
                      class="photoFile"
                      ref="cpdFile"
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
      cpdFile: "",
      showPreview: false,
      filePreview: "",
      showUpload: true,
      isImage: true,
    };
  },
  computed: {
    ...mapGetters({
      getRenewalServiceFee: "renewal/getRenewalServiceFee",
    }),
  },
  created() {
    this.serviceFee = this.getRenewalServiceFee;
    console.log(this.serviceFee)
  },
  methods: {
    ...mapActions(["setRenewalCpd"]),
    reset() {
      // reset form to initial state
      this.showUpload = true;
      this.showPreview = false;
      this.cpdFile = "";
      this.filePreview = "";
      this.isImage = true;
    },
    handleFileUpload() {
      this.showUpload = false;
      this.cpdFile = this.$refs.cpdFile.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          this.showPreview = true;
          this.filePreview = reader.result;
        }.bind(this),
        false
      );

      if (this.cpdFile) {
        if (/\.(jpe?g|png|gif)$/i.test(this.cpdFile.name)) {
          this.isImage = true;
          reader.readAsDataURL(this.cpdFile);
        } else if (/\.(pdf)$/i.test(this.cpdFile.name)) {
          this.isImage = false;
          reader.readAsText(this.cpdFile);
        }
      }
    },
    submit() {
      this.$emit("changeActiveState");
      let file5 = {
        cpd: this.cpdFile,
      };
      this.$store.dispatch("renewal/setRenewalCpd", file5);
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
