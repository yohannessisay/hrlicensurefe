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
                      class="photoFile"
                      ref="healthExamCertFileP"
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
          <button @click="draft(buttons[0].action)" variant="outline">
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
  props: ["activeState"],
  components: {
    TitleWithIllustration,
    FlashMessage,
    ErrorFlashMessage,
    Spinner,
  },
  setup(props, { emit }) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const basePath = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/";
    let message = ref({
      showFlash: false,
      showErrorFlash: false,
      showLoading: false,
    });
    let dataChanged = ref(false);
    let healthExamCertFile = ref("");
    let healthExamCertFileP = ref("");
    let showPreview = ref(false);
    let filePreview = ref("");
    let showUpload = ref(true);
    let isImage = ref(true);

    let buttons = [];
    let documentSpecs = ref([]);
    let userId = localStorage.getItem("userId");
    let licenseInfo = ref("");
    let draftData = ref("");

    let workExperience = ref("");
    let renewalPhoto = ref("");
    let renewalLetter = ref("");
    let serviceFee = ref("");
    let cpd = ref("");
    let previousLicense = ref("");

    const reset = () => {
      showUpload.value = true;
      showPreview.value = false;
      healthExamCertFile.value = "";
      filePreview.value = "";
      isImage.value = true;
    };
    const handleFileUpload = () => {
      dataChanged.value = true;
      showUpload.value = false;
      healthExamCertFile.value = healthExamCertFileP.value.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          showPreview.value = true;
          filePreview.value = reader.result;
        },
        false
      );

      if (healthExamCertFile.value) {
        if (/\.(jpe?g|png|gif)$/i.test(healthExamCertFile.value.name)) {
          isImage.value = true;
          reader.readAsDataURL(healthExamCertFile.value);
        } else if (/\.(pdf)$/i.test(healthExamCertFile.value.name)) {
          isImage.value = false;
          reader.readAsText(healthExamCertFile.value);
        }
      }
    };
    buttons = store.getters["renewal/getButtons"];
    documentSpecs = store.getters["renewal/getDocumentSpec"];
    licenseInfo = store.getters["renewal/getLicense"];

    renewalPhoto = store.getters["renewal/getRenewalPhoto"];
    workExperience = store.getters["renewal/getRenewalWorkExperience"];
    serviceFee = store.getters["renewal/getRenewalServiceFee"];
    renewalLetter = store.getters["renewal/getRenewalLicense"];
    cpd = store.getters["renewal/getRenewalCpd"];
    previousLicense = store.getters["renewal/getPreviousLicense"];

    const submit = () => {
      emit("changeActiveState");
      store.dispatch("renewal/setRenewalHealthExamCert", healthExamCertFile);
    };

    onMounted(() => {
      buttons = store.getters["renewal/getButtons"];
      draftData = store.getters["renewal/getDraft"];
      if (route.params.id) {
        for (let i = 0; i < draftData.documents.length; i++) {
          if (draftData.documents[i].documentTypeCode == "HEC") {
            showUpload.value = false;
            isImage.value = true;
            healthExamCertFile.value = draftData.documents[i];
            showPreview.value = true;
            filePreview.value = basePath + draftData.documents[i].filePath;
          }
        }
      }
    });
    const draft = (action) => {
      message.value.showLoading = true;
      if (route.params.id) {
        if (dataChanged.value) {
          let formData = new FormData();
          formData.append(documentSpecs[0].documentType.code, renewalPhoto);
          formData.append(documentSpecs[1].documentType.code, renewalLetter);
          formData.append(
            documentSpecs[2].documentType.code,
            healthExamCertFile
          );
          formData.append(documentSpecs[3].documentType.code, serviceFee);
          formData.append(documentSpecs[4].documentType.code, cpd);
          formData.append(documentSpecs[5].documentType.code, workExperience);
          formData.append(documentSpecs[6].documentType.code, previousLicense);

          let payload = { document: formData, id: draftData.id };
          store
            .dispatch("renewal/uploadDocuments", payload)
            .then((res) => {
              if (res.status == 200) {
                message.value.showFlash = !message.value.showFlash;
                message.value.showLoading = !message.value.showLoading;
                setTimeout(() => {}, 3000);
                router.push({ path: "/menu" });
              } else {
                message.value.showErrorFlash = !message.value.showErrorFlash;
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
          store.dispatch("renewal/updateDraft", payload).then((res) => {
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
        store.dispatch("renewal/addRenewalLicense", license).then((res) => {
          let licenseId = res.data.data.id;
          let formData = new FormData();
          formData.append(documentSpecs[0].documentType.code, renewalPhoto);
          formData.append(documentSpecs[1].documentType.code, renewalLetter);
          formData.append(
            documentSpecs[2].documentType.code,
            healthExamCertFile
          );
          formData.append(documentSpecs[3].documentType.code, serviceFee);
          formData.append(documentSpecs[4].documentType.code, cpd);
          formData.append(documentSpecs[5].documentType.code, workExperience);
          formData.append(documentSpecs[6].documentType.code, previousLicense);

          let payload = { document: formData, id: licenseId };
          store
            .dispatch("renewal/uploadDocuments", payload)
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
      store.dispatch("renewal/withdraw", payload).then((res) => {
        if (res.data.status == "Success") {
          showFlash.value = !showFlash.value;
          setTimeout(() => {
            router.push({ path: "/menu" });
          }, 3000);
        } else {
          showErrorFlash.value = !showErrorFlash.value;
        }
      });
    };
    return {
      healthExamCertFile,
      healthExamCertFileP,
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
@import "../../styles/document-upload.css";
img {
  width: 250px;
  height: 250px;
}
</style>
