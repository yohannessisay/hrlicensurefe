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
                      ref="workExperienceFileP"
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

export default {
  props: ["activeState"],
  components: { TitleWithIllustration },
  setup(props, { emit }) {
    const store = useStore();

    let workExperienceFile = ref("");
    let workExperienceFileP = ref("");
    let showPreview = ref(false);
    let filePreview = ref("");
    let showUpload = ref(true);
    let isImage = ref(true);

    const reset = () => {
      showUpload.value = true;
      showPreview.value = false;
      workExperienceFile.value = "";
      filePreview.value = "";
      isImage.value = true;
    };
    const handleFileUpload = () => {
      showUpload.value = false;
      workExperienceFile.value = workExperienceFileP.value.files[0];
      console.log(workExperienceFile.value);
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          showPreview.value = true;
          filePreview.value = reader.result;
        },
        false
      );

      if (workExperienceFile.value) {
        if (/\.(jpe?g|png|gif)$/i.test(workExperienceFile.value.name)) {
          isImage.value = true;
          reader.readAsDataURL(workExperienceFile.value);
        } else if (/\.(pdf)$/i.test(workExperienceFile.value.name)) {
          isImage.value = false;
          reader.readAsText(workExperienceFile.value);
        }
      }
    };
    const submit = () => {
      emit("changeActiveState");
      let file6 = {
        workExperience: workExperienceFile.value
      };
      store.dispatch("renewal/setRenewalWorkExperience", file6);
      console.log(workExperienceFile.value);
    };

    onMounted(() => {
      const renewalCpd = store.getters["renewal/getRenewalCpd"];
      console.log(renewalCpd);
    });

    return {
      workExperienceFile,
      workExperienceFileP,
      showPreview,
      filePreview,
      showUpload,
      isImage,
      handleFileUpload,
      reset,
      submit
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
