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
                      ref="photoFileP"
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
        </form>
        <div v-if="buttons" class="flex justify-center mb-8">
          <button @click="submit">
            Next
          </button>
          <button
            class="buttons[0].class"
            @click="draft(buttons[0].action)"
            variant="outline"
          >
            {{ buttons[0].name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
import { useStore } from "vuex";

export default {
  components: { TitleWithIllustration },
  props: ["activeState"],
  setup(props, { emit }) {
    const store = useStore();

    let photoFile = ref("");
    let photoFileP = ref("");
    let showPreview = ref(false);
    let filePreview = ref("");
    let showUpload = ref(true);
    let isImage = ref(false);
    let buttons = ref([]);
    let documentSpecs = ref([]);
    let userId = ref(2);
    let licenseInfo = ref("");

    const reset = () => {
      showUpload.value = true;
      showPreview.value = false;
      photoFile.value = "";
      filePreview.value = "";
      isImage.value = true;
    };

    const handleFileUpload = () => {
      showUpload.value = false;
      photoFile.value = photoFileP.value.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          showPreview.value = true;
          filePreview.value = reader.result;
        },
        false
      );

      if (photoFile.value) {
        if (/\.(jpe?g|png|gif)$/i.test(photoFile.value.name)) {
          isImage.value = true;
          reader.readAsDataURL(photoFile.value);
        } else if (/\.(pdf)$/i.test(photoFile.value.name)) {
          isImage.value = false;
          reader.readAsText(photoFile.value);
        }
      }
    };
    buttons = store.getters["newlicense/getButtons"];
    documentSpecs = store.getters["newlicense/getDocumentSpec"];
    licenseInfo = store.getters["newlicense/getLicense"];

    const submit = () => {
      emit("changeActiveState");
      store.dispatch("newlicense/setPhoto", photoFile);
    };
    const draft = (action) => {
      let license = {
        action: action,
        data: {
          applicantId: userId.value,
          applicantTypeId: licenseInfo.applicantTypeId,
          education: {
            departmentId: licenseInfo.education.departmentId,
            institutionId: licenseInfo.education.institutionId,
          },
        },
      };
      store.dispatch("newlicense/addNewLicense", license).then((res) => {
        let licenseId = res.data.data.id;
        console.log(licenseId);
        // let payload = { document: formData, id: licenseId };
        // this.$store
        //   .dispatch("newlicense/uploadDocuments", payload)
        //   .then((res) => {
        //     console.log(res.data.status);
        //     if (res.data.status == "Success") {
        //       this.showFlash = true;
        //       // this.$router.push({ path: "/menu" });
        //     }
        //   })
        //   .catch((err) => {
        //     this.showErrorFlash = true;
        //   });
      });
    };

    onMounted(() => {
      buttons = store.getters["newlicense/getButtons"];
    });
    return {
      photoFile,
      photoFileP,
      showPreview,
      filePreview,
      showUpload,
      isImage,
      handleFileUpload,
      reset,
      submit,
      draft,
      buttons,
    };
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
