<template>
  <div class="flex justify-center">
    <div class="w-screen max-w-4xl">
      <div
        class="flex flex-col pt-large w-full bg-white blue-box-shadow-light rounded "
      >
        <TitleWithIllustration
          illustration="Certificate"
          message="Service Fee(optional)"
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
                      id="serviceFeeFile"
                      class="photoFile"
                      ref="serviceFeeFileP"
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

    let serviceFeeFile = ref("");
    let serviceFeeFileP = ref("");
    let showPreview = ref(false);
    let filePreview = ref("");
    let showUpload = ref(true);
    let isImage = ref(true);

    const reset = () => {
      showUpload.value = true;
      showPreview.value = false;
      serviceFeeFile.value = "";
      filePreview.value = "";
      isImage.value = true;
    };
    const handleFileUpload = () => {
      showUpload.value = false;
      serviceFeeFile.value = serviceFeeFileP.value.files[0];
      console.log(serviceFeeFile.value);
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          showPreview.value = true;
          filePreview.value = reader.result;
        },
        false
      );

      if (serviceFeeFile.value) {
        if (/\.(jpe?g|png|gif)$/i.test(serviceFeeFile.value.name)) {
          isImage.value = true;
          reader.readAsDataURL(serviceFeeFile.value);
        } else if (/\.(pdf)$/i.test(serviceFeeFile.value.name)) {
          isImage.value = false;
          reader.readAsText(serviceFeeFile.value);
        }
      }
    };
    const submit = () => {
      emit("changeActiveState");
      let file4 = {
        serviceFee: serviceFeeFile.value,
      };
      store.dispatch("renewal/setRenewalServiceFee", file4);
      console.log(serviceFeeFile.value);
    };

    onMounted(() => {
      const renewalHealthExamCert = store.getters["renewal/getRenewalHealthExamCert"];
      console.log(renewalHealthExamCert);
    });

    return {
      serviceFeeFile,
      serviceFeeFileP,
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
