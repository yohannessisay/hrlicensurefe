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
                      ref="previousLicenseFileP"
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
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
import axios from "axios";

export default {
  props: ["activeState"],
  components: { TitleWithIllustration },
  setup(props, { emit }) {
    const store = useStore();

    let previousLicenseFile = ref("");
    let previousLicenseFileP = ref("");
    let showPreview = ref(false);
    let filePreview = ref("");
    let showUpload = ref(true);
    let isImage = ref(true);

    let photo = ref(null);
    let passport = ref(null);
    let healthExamCert = ref(null);
    let serviceFee = ref(null);
    let cpd = ref(null);
    let workExperience = ref(null);

    const reset = () => {
      showUpload.value = true;
      showPreview.value = false;
      previousLicenseFile.value = "";
      filePreview.value = "";
      isImage.value = true;
    };

    const handleFileUpload = () => {
      showUpload.value = false;
      previousLicenseFile.value = previousLicenseFileP.value.files[0];
      console.log(previousLicenseFile.value);
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          showPreview.value = true;
          filePreview.value = reader.result;
        },
        false
      );

      if (previousLicenseFile.value) {
        if (/\.(jpe?g|png|gif)$/i.test(previousLicenseFile.value.name)) {
          isImage.value = true;
          reader.readAsDataURL(previousLicenseFile.value);
        } else if (/\.(pdf)$/i.test(previousLicenseFile.value.name)) {
          isImage.value = false;
          reader.readAsText(previousLicenseFile.value);
        }
      }
    };
    const submit = async () => {
      let file7 = {
        previousLicense: previousLicenseFile.value,
      };

      let formData = new FormData();
      formData.append("photo", photo.value.profilePhoto);
      formData.append("passport", passport.value.passport);
      formData.append("healthExamCert", healthExamCert.value).healthExamCert;
      formData.append("serviceFee", serviceFee.value.serviceFee);
      formData.append("cpd", cpd.value.cpd);
      formData.append("workExperience", workExperience.vlaue.workExperience);
      formData.append("previousLicense", file7.previousLicense);

      try {
        const response = await axios.post(
          "http://localhost:5000/api/documentUploads/renewal/RA",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            }
          }
        );

        if (response.status === 200) {
          console.log(response.data);
          store.dispatch("renewal/setDocs", response.data);
          emit("changeActiveState");
        } else {
          console.log("Error occurred");
        }
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      workExperience = store.getters["renewal/getRenewalWorkExperience"];
      passport = store.getters["renewal/getRenewalPassport"];
      photo = store.getters["renewal/getRenewalPhoto"];
      healthExamCert = store.getters["renewal/getRenewalHealthExamCert"];
      cpd = store.getters["renewal/getRenewalCpd"];
      serviceFee = store.getters["renewal/getRenewalServiceFee"];
      console.log(workExperience);
    });

    return {
      previousLicenseFile,
      previousLicenseFileP,
      showPreview,
      filePreview,
      showUpload,
      isImage,
      handleFileUpload,
      reset,
      submit,
      photo,
      passport,
      healthExamCert,
      serviceFee,
      cpd,
      workExperience
    };
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
