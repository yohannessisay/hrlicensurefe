<template>
  <div class="flex justify-center">
    <div class="w-screen max-w-4xl">
      <div
        class="flex flex-col pt-large w-full bg-white blue-box-shadow-light rounded "
      >
        <TitleWithIllustration
          illustration="User"
          message="Health Exam Certificate"
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
                      id="healthExamFile"
                      class="photoFile"
                      ref="healthExamFileP"
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
          <button @click="draft(buttons[0].action)" variant="outline">
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
import { useRouter } from "vue-router";

export default {
  components: { TitleWithIllustration },
  props: ["activeState"],
  setup(props, { emit }) {
    const store = useStore();
    const route = useRouter();

    let healthExamFile = ref("");
    let healthExamFileP = ref("");
    let showPreview = ref(false);
    let filePreview = ref("");
    let showUpload = ref(true);
    let isImage = ref(false);
    let buttons = [];
    let documentSpecs = ref([]);
    let userId = ref(2);
    let licenseInfo = ref("");

    let photo = ref("");
    let passport = ref("");
    let englishLanguage = ref("");
    let professionalDoc = ref([]);
    let herqa = ref("");
    let supportLetter = ref("");
    let coc = ref("");
    let educationDoc = ref([]);
    let workExperience = ref("");
    let serviceFee = ref("");

    const reset = () => {
      showUpload.value = true;
      showPreview.value = false;
      healthExamFile.value = "";
      filePreview.value = "";
      isImage.value = true;
    };

    const handleFileUpload = () => {
      showUpload.value = false;
      healthExamFile.value = healthExamFileP.value.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          showPreview.value = true;
          filePreview.value = reader.result;
        },
        false
      );

      if (healthExamFile.value) {
        if (/\.(jpe?g|png|gif)$/i.test(healthExamFile.value.name)) {
          isImage.value = true;
          reader.readAsDataURL(healthExamFile.value);
        } else if (/\.(pdf)$/i.test(healthExamFile.value.name)) {
          isImage.value = false;
          reader.readAsText(healthExamFile.value);
        }
      }
    };
    const submit = () => {
      emit("changeActiveState");
      store.dispatch("newlicense/setHealthExamCert", healthExamFile);
    };

    buttons = store.getters["newlicense/getButtons"];
    documentSpecs = store.getters["newlicense/getDocumentSpec"];
    licenseInfo = store.getters["newlicense/getLicense"];

    photo = store.getters["newlicense/getPhoto"];
    passport = store.getters["newlicense/getPassport"];
    englishLanguage = store.getters["newlicense/getEnglishLanguage"];
    professionalDoc = store.getters["newlicense/getProfessionalDocuments"];
    herqa = store.getters["newlicense/getHerqa"];
    supportLetter = store.getters["newlicense/getSupportLetter"];
    coc = store.getters["newlicense/getCoc"];
    educationDoc = store.getters["newlicense/getEducationalDocuments"];
    workExperience = store.getters["newlicense/getWorkExperience"];
    serviceFee = store.getters["newlicense/getServiceFee"];

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
        let formData = new FormData();
        formData.append(documentSpecs[0].documentType.code, photo);
        formData.append(documentSpecs[1].documentType.code, passport);
        formData.append(documentSpecs[2].documentType.code, healthExamFile);
        formData.append(documentSpecs[3].documentType.code, serviceFee);
        formData.append(documentSpecs[4].documentType.code, workExperience);
        formData.append(documentSpecs[5].documentType.code, englishLanguage);
        formData.append(documentSpecs[6].documentType.code, professionalDoc[0]);
        formData.append(documentSpecs[7].documentType.code, professionalDoc[1]);
        formData.append(documentSpecs[8].documentType.code, professionalDoc[2]);
        formData.append(documentSpecs[9].documentType.code, coc);
        formData.append(documentSpecs[10].documentType.code, educationDoc[0]);
        formData.append(documentSpecs[11].documentType.code, educationDoc[1]);
        formData.append(documentSpecs[12].documentType.code, educationDoc[2]);
        formData.append(documentSpecs[13].documentType.code, educationDoc[3]);
        formData.append(documentSpecs[14].documentType.code, educationDoc[4]);
        formData.append(documentSpecs[15].documentType.code, supportLetter);
        let payload = { document: formData, id: licenseId };
        store
          .dispatch("newlicense/uploadDocuments", payload)
          .then((res) => {
            if (res.data.status == "Success") {
              route.push({ path: "/menu" });
            }
          })
          .catch((err) => {});
      });
    };
    onMounted(() => {
      buttons = store.getters["newlicense/getButtons"];
    });
    return {
      healthExamFile,
      healthExamFileP,
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
