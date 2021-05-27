<template>
  <div class="flex justify-center bg-white rounded mb-large">
    <div class="w-screen max-w-4xl">
      <div
        class="flex flex-col pt-large w-full bg-white blue-box-shadow-light rounded "
      >
        <h2
          class="flex justify-center"
          v-if="declinedFieldsCheck"
          style="color: #e63636"
        >
          REJECTED
        </h2>
        <h2
          class="flex justify-center"
          v-if="acceptedFieldsCheck"
          style="color: Green"
        >
          ACCEPTED
        </h2>
        <TitleWithIllustration
          illustration="User"
          message="License Copy"
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
                      id="licenseFile"
                      class="photoFile"
                      ref="licenseFileP"
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
            v-if="buttons.length < 3"
            @click="draft(buttons[1].action)"
            variant="outline"
          >
            {{ buttons[1].name }}
          </button>
          <button
            v-if="buttons.length > 2"
            @click="draft(buttons[0].action)"
            variant="outline"
          >
            {{ buttons[0].name }}
          </button>
          <button
            v-if="buttons.length > 2"
            class="withdraw"
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

    const basePath = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/";

    let message = ref({
      showFlash: false,
      showErrorFlash: false,
      showLoading: false,
    });

    let licenseFile = ref("");
    let licenseFileP = ref("");
    let showPreview = ref(false);
    let filePreview = ref("");
    let showUpload = ref(true);
    let isImage = ref(true);

    let declinedFields = ref([]);
    let acceptedFields = ref([]);
    let remark = ref("");

    let declinedFieldsCheck = ref(false);
    let acceptedFieldsCheck = ref(false);

    let dataChanged = ref(false);
    let buttons = ref([]);
    let documentSpecs = ref([]);
    let userId = localStorage.getItem("userId");
    let licenseInfo = ref("");
    let draftData = ref("");

    let verificationLetter = ref("");

    const reset = () => {
      showUpload.value = true;
      showPreview.value = false;
      licenseFile.value = "";
      filePreview.value = "";
      isImage.value = true;
    };
    const handleFileUpload = () => {
      dataChanged.value = true;
      showUpload.value = false;
      licenseFile.value = licenseFileP.value.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          showPreview.value = true;
          filePreview.value = reader.result;
        },
        false
      );

      if (licenseFile.value) {
        if (/\.(jpe?g|png|gif)$/i.test(licenseFile.value.name)) {
          isImage.value = true;
          reader.readAsDataURL(licenseFile.value);
        } else if (/\.(pdf)$/i.test(licenseFile.value.name)) {
          isImage.value = false;
          reader.readAsText(licenseFile.value);
        }
      }
    };
    buttons = store.getters["verification/getButtons"];
    documentSpecs = store.getters["verification/getDocumentSpec"];
    licenseInfo = store.getters["verification/getLicense"];

    verificationLetter = store.getters["verification/getVerificationLetter"];

    const submit = () => {
      emit("changeActiveState");
      store.dispatch("verification/set_License_Copy", licenseFile);
    };

    onMounted(() => {
      declinedFields = store.getters["verification/getDeclinedFields"];
      acceptedFields = store.getters["verification/getAcceptedFields"];
      remark = store.getters["verification/getRemark"];
      if (declinedFields != undefined && declinedFields.includes("LC")) {
        declinedFieldsCheck.value = true;
      }
      if (acceptedFields != undefined && acceptedFields.includes("LC")) {
        acceptedFieldsCheck.value = true;
      }

      buttons = store.getters["verification/getButtons"];
      draftData = store.getters["verification/getDraft"];
      if (route.params.id) {
        for (let i = 0; i < draftData.documents.length; i++) {
          if (draftData.documents[i].documentTypeCode == "LC") {
            console.log("true");
            showUpload.value = false;
            isImage.value = true;
            licenseFile.value = draftData.documents[i];
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
          let license = {
            data: {
              action: action,
              data: draftData,
            },
            id: route.params.id,
          };
          store
            .dispatch("verification/editVerificationLicense", license)
            .then((res) => {
              if (res.data.status == "Success") {
                let licenseId = route.params.id;
                let formData = new FormData();
                formData.append(
                  documentSpecs[2].documentType.code,
                  licenseFile.value
                );
                let payload = { document: formData, id: licenseId };
                store
                  .dispatch("verification/uploadDocuments", payload)
                  .then((res) => {
                    if (res.status == 200) {
                      message.value.showFlash = !message.value.showFlash;
                      message.value.showLoading = false;
                      setTimeout(() => {}, 2200);
                      router.push({ path: "/menu" });
                    } else {
                      showErrorFlash.value = !showErrorFlash.value;
                    }
                  })
                  .catch((err) => {});
              }
            });
        } else {
          let license = {
            data: {
              action: action,
              data: draftData,
            },
            id: route.params.id,
          };
          store
            .dispatch("verification/editVerificationLicense", license)
            .then((res) => {
              if (res.data.status == "Success") {
                message.value.showFlash = !message.value.showFlash;
                message.value.showLoading = false;
                setTimeout(() => {}, 2200);
                router.push({ path: "/menu" });
              } else {
                showErrorFlash.value = !showErrorFlash.value;
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
        store
          .dispatch("verification/addVerificationLicense", license)
          .then((res) => {
            if (res.data.status == "Success") {
              let licenseId = res.data.data.id;
              let formData = new FormData();
              formData.append(
                documentSpecs[1].documentType.code,
                verificationLetter
              );

              formData.append(
                documentSpecs[2].documentType.code,
                licenseFile.value
              );
              let payload = { document: formData, id: licenseId };
              store
                .dispatch("verification/uploadDocuments", payload)
                .then((res) => {
                  if (res.status == 200) {
                    message.value.showFlash = !message.value.showFlash;
                    message.value.showLoading = false;
                    setTimeout(() => {}, 2200);
                    router.push({ path: "/menu" });
                  } else {
                    showErrorFlash.value = !showErrorFlash.value;
                  }
                })
                .catch((err) => {});
            }
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
      message.value.showLoading = !message.value.showLoading;
      store.dispatch("verification/withdraw", payload).then((res) => {
        console.log(res.data);
        // if (res.data.status == "Success") {
          message.value.showLoading = !message.value.showLoading;
          message.value.showFlash = !message.value.showFlash;

          setTimeout(() => {
            router.push({ path: "/menu" });
          }, 3000);
        // } else {
        //   message.value.showErrorFlash = !message.value.showErrorFlash;
        // }
      });
    };

    return {
      licenseFile,
      licenseFileP,
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
      verificationLetter,
      acceptedFields,
      declinedFields,
      remark,
      declinedFieldsCheck,
      acceptedFieldsCheck,
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
.withdraw {
  background-image: linear-gradient(to right, #d63232, #e63636) !important;
  color: white;
  border-color: tomato;
}
</style>
