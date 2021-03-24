<template>
  <div class="flex justify-center">
    <div class="w-screen max-w-4xl">
      <div
        class="flex flex-col pt-large w-full bg-white blue-box-shadow-light rounded "
      >
        <TitleWithIllustration
          illustration="Certificate"
          message="Health Examination Certificate"
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
                      id="healthExamCertFile"
                      ref="healthExamCertFile"
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
      healthExamCertFile: "",
      showPreview: false,
      filePreview: "",
      showUpload: true,
      isImage: true,
    };
  },
  computed: {
    ...mapGetters({
      getPassport: "newlicense/getPassport",
    }),
  },
  created() {
    this.passport = this.getPassport;
  },
  methods: {
    ...mapActions(["setHealthExamCert"]),
    reset() {
      // reset form to initial state
      this.showUpload = true;
      this.showPreview = false;
      this.healthExamCertFile = "";
      this.filePreview = "";
      this.isImage = true;
    },
    handleFileUpload() {
      this.showUpload = false;
      this.healthExamCertFile = this.$refs.healthExamCertFile.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          this.showPreview = true;
          this.filePreview = reader.result;
        }.bind(this),
        false
      );

      if (this.healthExamCertFile) {
        if (/\.(jpe?g|png|gif)$/i.test(this.healthExamCertFile.name)) {
          this.isImage = true;
          reader.readAsDataURL(this.healthExamCertFile);
        } else if (/\.(pdf)$/i.test(this.healthExamCertFile.name)) {
          this.isImage = false;
          reader.readAsText(this.healthExamCertFile);
        }
      }
    },
    submit() {
      this.$emit("changeActiveState");
      let file3 = {
        healthExamCert: this.healthExamCertFile,
      };
      this.$store.dispatch("newlicense/setHealthExamCert", file3);
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

#healthExamCertFile {
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
