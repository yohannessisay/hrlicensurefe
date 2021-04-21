<template>
  <div class="flex justify-center">
    <div class="w-screen max-w-4xl">
      <div
        class="flex flex-col pt-large w-full bg-white blue-box-shadow-light rounded "
      >
        <TitleWithIllustration illustration="User" message="COC" class="mt-8" />
        <form @submit.prevent="submit" class="mx-auto max-w-3xl w-full mt-8">
          <div class="flex justify-center">
            <div>
              <span v-if="showUpload">
                <label class="text-primary-700"
                  >Upload image:
                  <div class="dropbox">
                    <input
                      type="file"
                      id="COCFile"
                      class="photoFile"
                      ref="COCFileP"
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
          <button
            v-if="buttons.length > 2"
            @click="withdraw(buttons[2].action)"
            variant="outline"
          >
            {{ buttons[2]["name"] }}
          </button>
        </div>
        <div v-if="message.showLoading">
          <Spinner />
        </div>
      </div>
    </div>
  </div>
  <div class="mr-3xl" v-if="message.showFlash">
    <FlashMessage message="Operation Successful!" />
  </div>
  <div v-if="message.showErrorFlash">
    <ErrorFlashMessage message="Operation Failed!" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import FlashMessage from "@/sharedComponents/FlashMessage";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import Spinner from "@/sharedComponents/Spinner";

export default {
  components: {
    TitleWithIllustration,
    FlashMessage,
    ErrorFlashMessage,
    Spinner,
  },
  props: ["activeState"],
  setup(props, { emit }) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    let message = ref({
      showFlash: false,
      showErrorFlash: false,
      showLoading: false,
    });

    const basePath = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/";

    let dataChanged = ref(false);

    let COCFile = ref("");
    let COCFileP = ref("");
    let showPreview = ref(false);
    let filePreview = ref("");
    let showUpload = ref(true);
    let isImage = ref(false);
    let buttons = [];
    let documentSpecs = ref([]);
    let userId = localStorage.getItem("userId");
    let licenseInfo = ref("");
    let draftData = ref("");

    let photo = ref("");
    let passport = ref("");
    let healthExamCert = ref("");
    let professionalDoc = ref([]);
    let herqa = ref("");
    let englishLanguage = ref("");
    let supportLetter = ref("");
    let educationDoc = ref([]);
    let workExperience = ref("");
    let serviceFee = ref("");

    const reset = () => {
      showUpload.value = true;
      showPreview.value = false;
      COCFile.value = "";
      filePreview.value = "";
      isImage.value = true;
    };

    const handleFileUpload = () => {
      dataChanged.value = true;
      showUpload.value = false;
      COCFile.value = COCFileP.value.files[0];
      let reader = new FileReader();
      isImage.value = true;
      reader.addEventListener(
        "load",
        function() {
          showPreview.value = true;
          filePreview.value = reader.result;
        },
        false
      );

      if (COCFile.value) {
        if (/\.(jpe?g|png|gif)$/i.test(COCFile.value.name)) {
          isImage.value = true;
          reader.readAsDataURL(COCFile.value);
        } else if (/\.(pdf)$/i.test(COCFile.value.name)) {
          isImage.value = false;
          reader.readAsText(COCFile.value);
        }
      }
    };
    const submit = () => {
      emit("changeActiveState");
      store.dispatch("newlicense/setCOC", COCFile);
    };
    buttons = store.getters["newlicense/getButtons"];
    documentSpecs = store.getters["newlicense/getDocumentSpec"];
    licenseInfo = store.getters["newlicense/getLicense"];

    photo = store.getters["newlicense/getPhoto"];
    passport = store.getters["newlicense/getPassport"];
    englishLanguage = store.getters["newlicense/getEnglishLanguage"];
    professionalDoc = store.getters["newlicense/getProfessionalDocuments"];
    herqa = store.getters["newlicense/getHerqa"];
    healthExamCert = store.getters["newlicense/getHealthExamCert"];
    supportLetter = store.getters["newlicense/getSupportLetter"];
    educationDoc = store.getters["newlicense/getEducationalDocuments"];
    workExperience = store.getters["newlicense/getWorkExperience"];
    serviceFee = store.getters["newlicense/getServiceFee"];

    const draft = (action) => {
      message.value.showLoading = true;
      if (route.params.id) {
        if (dataChanged.value) {
          let formData = new FormData();
          formData.append(documentSpecs[0].documentType.code, photo);
          formData.append(documentSpecs[1].documentType.code, passport);
          formData.append(documentSpecs[2].documentType.code, healthExamCert);
          formData.append(documentSpecs[3].documentType.code, serviceFee);
          formData.append(documentSpecs[4].documentType.code, workExperience);
          formData.append(documentSpecs[5].documentType.code, englishLanguage);
          if (professionalDoc != undefined) {
            formData.append(
              documentSpecs[6].documentType.code,
              professionalDoc[0]
            );
            formData.append(
              documentSpecs[7].documentType.code,
              professionalDoc[1]
            );
            formData.append(
              documentSpecs[8].documentType.code,
              professionalDoc[2]
            );
          }
          formData.append(documentSpecs[9].documentType.code, COCFile);
          if (educationDoc != undefined) {
            formData.append(
              documentSpecs[10].documentType.code,
              educationDoc[0]
            );
            formData.append(
              documentSpecs[11].documentType.code,
              educationDoc[1]
            );
            formData.append(
              documentSpecs[12].documentType.code,
              educationDoc[2]
            );
            formData.append(
              documentSpecs[13].documentType.code,
              educationDoc[3]
            );
            formData.append(
              documentSpecs[14].documentType.code,
              educationDoc[4]
            );
          }
          formData.append(documentSpecs[15].documentType.code, supportLetter);
          formData.append(documentSpecs[16].documentType.code, herqa);

          let payload = { document: formData, id: draftData.id };
          store
            .dispatch("newlicense/uploadDocuments", payload)
            .then((res) => {
              if (res) {
                message.value.showFlash = !message.value.showFlash;
                setTimeout(() => {}, 2200);
                router.push({ path: "/menu" });
                message.value.showLoading = false;
              } else {
                messsage.value.showErrorFlash = !message.value.showErrorFlash;
              }
            })
            .catch((err) => {});
        } else {
          let draftObj = {
            action: action,
            data: draftData,
          };
          let payload = {
            licenseId: draftData.id,
            draftData: draftObj,
          };
          message.value.showLoading = true;
          store.dispatch("newlicense/updateDraft", payload).then((res) => {
            if (res.data.status == "Success") {
              message.value.showFlash = !message.value.showFlash;
              setTimeout(() => {}, 2200);
              router.push({ path: "/menu" });
              message.value.showLoading = false;
            } else {
              message.value.showErrorFlash = !message.value.showErrorFlash;
            }
          });
        }
      } else {
        let license = {
          action: action,
          data: {
            applicantId: userId,
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
          formData.append(documentSpecs[2].documentType.code, healthExamCert);
          formData.append(documentSpecs[3].documentType.code, serviceFee);
          formData.append(documentSpecs[4].documentType.code, workExperience);
          formData.append(documentSpecs[5].documentType.code, englishLanguage);
          if (professionalDoc != undefined) {
            formData.append(
              documentSpecs[6].documentType.code,
              professionalDoc[0]
            );
            formData.append(
              documentSpecs[7].documentType.code,
              professionalDoc[1]
            );
            formData.append(
              documentSpecs[8].documentType.code,
              professionalDoc[2]
            );
          }
          formData.append(documentSpecs[9].documentType.code, COCFile);
          if (educationDoc != undefined) {
            formData.append(
              documentSpecs[10].documentType.code,
              educationDoc[0]
            );
            formData.append(
              documentSpecs[11].documentType.code,
              educationDoc[1]
            );
            formData.append(
              documentSpecs[12].documentType.code,
              educationDoc[2]
            );
            formData.append(
              documentSpecs[13].documentType.code,
              educationDoc[3]
            );
            formData.append(
              documentSpecs[14].documentType.code,
              educationDoc[4]
            );
          }
          formData.append(documentSpecs[15].documentType.code, supportLetter);
          formData.append(documentSpecs[16].documentType.code, herqa);

          let payload = { document: formData, id: licenseId };
          store
            .dispatch("newlicense/uploadDocuments", payload)
            .then((res) => {
              if (res) {
                message.value.showFlash = !message.value.showFlash;
                setTimeout(() => {}, 2200);
                router.push({ path: "/menu" });
                message.value.showLoading = false;
              } else {
                messsage.value.showErrorFlash = !message.value.showErrorFlash;
              }
            })
            .catch((err) => {});
        });
      }
    };
    const withdraw = (action) => {
      let withdrawObj = {
        action: action,
        data: draftData,
      };
      let payload = {
        licenseId: draftData.id,
        withdrawData: withdrawObj,
      };
      message.value.showLoading = true;
      store.dispatch("newlicense/withdraw", payload).then((res) => {
        if (res) {
          message.value.showFlash = !message.value.showFlash;
          message.value.showLoading = false;
          setTimeout(() => {}, 1800);
          router.push({ path: "/menu" });
        } else {
          showErrorFlash.value = !showErrorFlash.value;
        }
      });
    };

    onMounted(() => {
      buttons = store.getters["newlicense/getButtons"];
      draftData = store.getters["newlicense/getDraft"];
      if (route.params.id) {
        for (let i = 0; i < draftData.documents.length; i++) {
          if (draftData.documents[i].documentTypeCode == "COC") {
            showUpload.value = false;
            isImage.value = true;
            COCFile.value = draftData.documents[i];
            showPreview.value = true;
            filePreview.value = basePath + draftData.documents[i].filePath;
          }
        }
      }
    });
    return {
      COCFile,
      COCFileP,
      showPreview,
      filePreview,
      showUpload,
      isImage,
      handleFileUpload,
      reset,
      submit,
      draft,
      withdraw,
      buttons,
      draftData,
      basePath,
      message,
      dataChanged,
    };
  },
};
</script>
<style>
@import "../../../styles/document-upload.css";
img {
  width: 250px;
  height: 250px;
}
</style>
