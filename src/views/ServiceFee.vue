<template>
  <div
    class="card-wrapper max-w-7xl bg-white sm:rounded-lg p-large flex flex-col justify-center items-center relative"
  >
    <button
      class="absolute top-0 right-0 mr-2 mt-2"
      @click="$emit('serviceFeeModal', false)"
      variant="rounded"
    >
      <svg
        viewBox="0 0 329.269 329"
        xmlns="http://www.w3.org/2000/svg"
        class="close-svg fill-current text-primary-100 relative"
      >
        <path
          d="M194.8 164.77L323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
        />
      </svg>
    </button>
    <div id="holder" class="flex justify-center rounded mb-medium pb-12">
      <div class="w-screen max-w-4xl">
        <div class="flex flex-col pt-large w-full rounded mb-medium">
          <TitleWithIllustration
            illustration="Certificate"
            message="Service Fee"
            class="mt-8"
          />
          <form
            @submit.prevent="submit"
            class="mx-auto max-w-3xl w-full mt-4 mb-large"
          >
            <div class="flex justify-center">
              <div>
                <span v-if="showUpload">
                  <label class="text-primary-700"
                    >Upload Service Fee:
                    <div class="dropbox">
                      <input
                        type="file"
                        id="serviceFile"
                        class="photoFile"
                        ref="serviceFileP"
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
                    <a href="javascript:void(0)" @click="reset()"
                      >Upload again</a
                    >
                  </p>
                  <img v-bind:src="filePreview" v-show="showPreview" />
                </picture>

                <span v-if="!showUpload && !isImage">
                  <img :src="filePreview" alt="" class="preview" />
                </span>
              </div>
            </div>
             <div v-if="buttons" class="flex justify-center mb-16">
            <button>
              Save
            </button>
          </div>
          </form>
         
          <div v-if="message.showLoading">
            <Spinner />
          </div>
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

    let serviceFile = ref("");
    let serviceFileP = ref("");
    let showPreview = ref(false);
    let filePreview = ref("");
    let showUpload = ref(true);
    let isImage = ref(true);

    let dataChanged = ref(false);
    let buttons = ref([]);
    let documentSpecs = ref([]);
    let userId = localStorage.getItem("userId");
    let licenseInfo = ref("");
    let draftData = ref("");

    let verificationLetter = ref("");
    let licenseCopy = ref("");

    const reset = () => {
      showUpload.value = true;
      showPreview.value = false;
      serviceFile.value = "";
      filePreview.value = "";
      isImage.value = true;
    };
    const handleFileUpload = () => {
      dataChanged.value = true;
      showUpload.value = false;
      serviceFile.value = serviceFileP.value.files[0];
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          showPreview.value = true;
          filePreview.value = reader.result;
        },
        false
      );

      if (serviceFile.value) {
        if (/\.(jpe?g|png|gif)$/i.test(serviceFile.value.name)) {
          isImage.value = true;
          reader.readAsDataURL(serviceFile.value);
        } else if (/\.(pdf)$/i.test(serviceFile.value.name)) {
          isImage.value = false;
          reader.readAsText(serviceFile.value);
        }
      }
    };
    buttons = store.getters["verification/getButtons"];
    documentSpecs = store.getters["verification/getDocumentSpec"];
    licenseInfo = store.getters["verification/getLicense"];

    verificationLetter = store.getters["verification/getVerificationLetter"];
    licenseCopy = store.getters["verification/getLicenseCopy"];

    const submit = () => {
      emit("changeActiveState");
      store.dispatch("verification/set_Service_Fee", serviceFile);
    };

    onMounted(() => {
      buttons = store.getters["verification/getButtons"];
      draftData = store.getters["verification/getDraft"];
      if (route.params.id) {
        for (let i = 0; i < draftData.documents.length; i++) {
          if (draftData.documents[i].documentTypeCode == "SF") {
            showUpload.value = false;
            isImage.value = true;
            serviceFile.value = draftData.documents[i];
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
          formData.append(documentSpecs[0].documentType.code, serviceFile);
          formData.append(
            documentSpecs[1].documentType.code,
            verificationLetter
          );
          formData.append(documentSpecs[2].documentType.code, licenseCopy);

          let payload = { document: formData, id: draftData.id };
          store
            .dispatch("verification/uploadDocuments", payload)
            .then((res) => {
              if (res.status == 200) {
                message.value.showFlash = !message.value.showFlash;
                message.value.showLoading = false;
                setTimeout(() => {}, 2200);
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
          store.dispatch("verification/updateDraft", payload).then((res) => {
            if (res.status == 200) {
              message.value.showFlash = !message.value.showFlash;
              message.value.showLoading = false;
              setTimeout(() => {}, 2200);
              router.push({ path: "/menu" });
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
        store
          .dispatch("verification/addVerificationLicense", license)
          .then((res) => {
            let licenseId = res.data.data.id;
            let formData = new FormData();
            formData.append(documentSpecs[0].documentType.code, serviceFile);
            formData.append(
              documentSpecs[1].documentType.code,
              verificationLetter
            );
            formData.append(documentSpecs[2].documentType.code, licenseCopy);
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
                  message.value.showErrorFlash = !message.value.showErrorFlash;
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
      message.value.showLoading = !message.value.showLoading;
      store.dispatch("verification/withdraw", payload).then((res) => {
        if (res.data.status == "Success") {
          message.value.showLoading = !message.value.showLoading;
          message.value.showFlash = !message.value.showFlash;

          setTimeout(() => {
            router.push({ path: "/menu" });
          }, 3000);
        } else {
          message.value.showErrorFlash = !message.value.showErrorFlash;
        }
      });
    };

    return {
      serviceFile,
      serviceFileP,
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
      verificationLetter,
      licenseCopy,
    };
  },
};
</script>
<style>
.card-wrapper {
  width: 600px;
  height: 520px;
}
#holder {
  width: 600px;
  height: 520px;
}
.photoFile {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 300px;
  position: absolute;
  cursor: pointer;
}

.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
img {
  width: 250px;
  height: 250px;
}
.withdraw {
  background-image: linear-gradient(to right, #d63232, #e63636) !important;
  color: white;
  border-color: tomato;
}
.close-svg {
  width: 16px;
}
</style>
