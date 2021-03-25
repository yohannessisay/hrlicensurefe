<template>
  <div class="flex justify-center">
    <div class="w-screen max-w-4xl">
      <div
        class="flex flex-col pt-large w-full bg-white blue-box-shadow-light rounded "
      >
        <TitleWithIllustration
          illustration="Certificate"
          message="Previous License"
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
                      id="previousLicenseFile"
                      class="photoFile"
                      ref="previousLicenseFile"
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
import axios from "axios";

export default {
  props: ["activeState"],
  components: { TitleWithIllustration },
  data() {
    return {
      previousLicenseFile: "",
      showPreview: false,
      filePreview: "",
      showUpload: true,
      isImage: true,
    };
  },
  computed: {
    ...mapGetters({
      getRenewalWorkExperience: "renewal/getRenewalWorkExperience",
      getRenewalPassport: "renewal/getRenewalPassport",
      getRenewalPhoto: "renewal/getRenewalPhoto",
      getRenewalHealthExamCert: "renewal/getRenewalHealthExamCert",
      getRenewalCpd: "renewal/getRenewalCpd",
      getRenewalServiceFee: "renewal/getRenewalServiceFee",
    }),
  },
  created() {
    this.photo = this.getRenewalPhoto;
    this.passport = this.getRenewalPassport;
    this.healthExamCert = this.getRenewalHealthExamCert;
    this.serviceFee = this.getRenewalServiceFee;
    this.cpd = this.getRenewalCpd;
    this.workExperience = this.getRenewalWorkExperience;
    console.log(this.getRenewalWorkExperience);
  },
  methods: {
    ...mapActions(["setRenewalWorkExperience"]),
    reset() {
      // reset form to initial state
      this.showUpload = true;
      this.showPreview = false;
      this.previousLicenseFile = "";
      this.filePreview = "";
      this.isImage = true;
    },
    handleFileUpload() {
      this.showUpload = false;
      this.previousLicenseFile = this.$refs.previousLicenseFile.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          this.showPreview = true;
          this.filePreview = reader.result;
        }.bind(this),
        false
      );

      if (this.previousLicenseFile) {
        if (/\.(jpe?g|png|gif)$/i.test(this.previousLicenseFile.name)) {
          this.isImage = true;
          reader.readAsDataURL(this.previousLicenseFile);
        } else if (/\.(pdf)$/i.test(this.previousLicenseFile.name)) {
          this.isImage = false;
          reader.readAsText(this.previousLicenseFile);
        }
      }
    },
    async submit() {
      let file7 = {
        previousLicense: this.previousLicenseFile,
      };

      let formData = new FormData();
      formData.append("photo", this.photo.profilePhoto);
      formData.append("passport", this.passport.passport);
      formData.append("healthExamCert", this.healthExamCert.healthExamCert);
      formData.append("serviceFee", this.serviceFee.serviceFee);
      formData.append("cpd", this.cpd.cpd);
      formData.append("workExperience", this.workExperience.workExperience);
      formData.append("previousLicense", file7.previousLicense);

      try {
        const response = await axios.post(
          "http://localhost:5000/api/documentUploads/renewal/RA",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
            console.log(response.data);
          this.$store.dispatch("renewal/setDocs", response.data);
          this.$emit("changeActiveState");
        } else {
          console.log("Error occurred");
        }
      } catch (error) {
        console.log(error);
      }
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
