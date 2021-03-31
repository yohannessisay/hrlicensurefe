<template>
  <div class="flex justify-center">
    <div class="w-screen max-w-4xl">
      <div
        class="flex flex-col pt-large w-full bg-white blue-box-shadow-light rounded "
      >
        <TitleWithIllustration
          illustration="Id"
          message="ID/Passport"
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
                      id="passportFile"
                      class="photoFile"
                      ref="passportFileP"
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
  components: { TitleWithIllustration },
  props: ["activeState"],
  setup(props, { emit }) {
    const store = useStore();

    let passportFile = ref("");
    let passportFileP = ref("");
    let showPreview = ref(false);
    let filePreview = ref("");
    let showUpload = ref(true);
    let isImage = ref(true);

    const reset = () => {
      showUpload.value = true;
      showPreview.value = false;
      passportFile.value = "";
      filePreview.value = "";
      isImage.value = true;
    };
    const handleFileUpload = () => {
      showUpload.value = false;
      passportFile.value = passportFileP.value.files[0];
      console.log(passportFile.value);
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          showPreview.value = true;
          filePreview.value = reader.result;
        },
        false
      );

      if (passportFile.value) {
        if (/\.(jpe?g|png|gif)$/i.test(passportFile.value.name)) {
          isImage.value = true;
          reader.readAsDataURL(passportFile.value);
        } else if (/\.(pdf)$/i.test(passportFile.value.name)) {
          isImage.value = false;
          reader.readAsText(passportFile.value);
        }
      }
    };
    const submit = () => {
      emit("changeActiveState");
      let file2 = {
        passport: passportFile.value
      };
      store.dispatch("renewal/setRenewalPassport", file2);
      console.log(passportFile.value);
    };

    onMounted(() => {
      const renewalPhoto = store.getters["renewal/getRenewalPhoto"];
      console.log(renewalPhoto);
    });

    return {
      passportFile,
      passportFileP,
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
  // computed: {
  //   ...mapGetters({
  //     getRenewalPhoto: "renewal/getRenewalPhoto"
  //   })
  // },
  // created() {
  //   this.photo = this.getRenewalPhoto;
  //   console.log(this.photo);
  // },
  // methods: {
  //   ...mapActions(["setRenewalPassport"]),
    // reset() {
    //   // reset form to initial state
    //   this.showUpload = true;
    //   this.showPreview = false;
    //   this.passportFile = "";
    //   this.filePreview = "";
    //   this.isImage = true;
    // },
//     handleFileUpload() {
//       this.showUpload = false;
//       this.passportFile = this.$refs.passportFile.files[0];
//       let reader = new FileReader();

//       reader.addEventListener(
//         "load",
//         function() {
//           this.showPreview = true;
//           this.filePreview = reader.result;
//         }.bind(this),
//         false
//       );

//       if (this.passportFile) {
//         if (/\.(jpe?g|png|gif)$/i.test(this.passportFile.name)) {
//           this.isImage = true;
//           reader.readAsDataURL(this.passportFile);
//         } else if (/\.(pdf)$/i.test(this.passportFile.name)) {
//           this.isImage = false;
//           reader.readAsText(this.passportFile);
//         }
//       }
//     },
//     submit() {
//       this.$emit("changeActiveState");
//       let file2 = {
//         passport: this.passportFile
//       };
//       this.$store.dispatch("renewal/setRenewalPassport", file2);
//     },
//   },
// };
</script>
<style>
@import "../../styles/document-upload.css";
img {
  width: 250px;
  height: 250px;
}
</style>
