<template>
  <div class="flex justify-center">
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
          illustration="Certificate"
          message="CPD"
          class="mt-8"
        />
        <form @submit.prevent="submit" class="mx-auto max-w-3xl w-full mt-8">
          <div class="flex justify-center mb-10">
            <div>
              <span>
                <h2>{{ cpdFile.name }}</h2>
                <h2>{{ fileSize }}</h2>
              </span>
              <span v-if="showUpload">
                <label class="text-primary-700"
                  >Upload image:
                  <div class="dropbox">
                    <input
                      type="file"
                      id="cpdFile"
                      class="photoFile"
                      ref="cpdFileP"
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
        <div v-if="buttons && !draftStatus" class="flex justify-center mb-8">
          <button @click="submit">
            Next
          </button>
          <button @click="draft(buttons[1].action)" variant="outline">
            {{ buttons[1]["name"] }}
          </button>
        </div>
        <div
          v-if="buttons && draftStatus == 'DRA'"
          class="flex justify-center mb-8"
        >
          <button @click="submit">
            Next
          </button>
          <button @click="draft(buttons[2].action)" variant="outline">
            {{ buttons[2]["name"] }}
          </button>
          <button
            class="withdraw"
            @click="withdraw(buttons[1].action)"
            variant="outline"
          >
            {{ buttons[1]["name"] }}
          </button>
        </div>
        <div
          v-if="buttons && draftStatus == 'SUB'"
          class="flex justify-center mb-8"
        >
          <button @click="submit">
            Next
          </button>
          <button
            class="withdraw"
            @click="withdraw(buttons[0].action)"
            variant="outline"
          >
            {{ buttons[0]["name"] }}
          </button>
        </div>
        <div
          v-if="buttons && draftStatus == 'USUP'"
          class="flex justify-center mb-8"
        >
          <button @click="submit">
            Next
          </button>
          <button @click="draft(buttons[0].action)" variant="outline">
            {{ buttons[0]["name"] }}
          </button>
          <button @click="update(buttons[1].action)" variant="outline">
            {{ buttons[1]["name"] }}
          </button>
        </div>
        <div
          v-if="buttons && draftStatus == 'DEC'"
          class="flex justify-center mb-8"
        >
          <button @click="submit">
            Next
          </button>
          <button @click="draft(buttons[0].action)" variant="outline">
            {{ buttons[0]["name"] }}
          </button>
          <button @click="update(buttons[1].action)" variant="outline">
            {{ buttons[1]["name"] }}
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

    let fileSize = ref("");

    let dataChanged = ref(false);
    let cpdFile = ref("");
    let cpdFileP = ref("");
    let showPreview = ref(false);
    let filePreview = ref("");
    let showUpload = ref(true);
    let isImage = ref(true);

    let buttons = ref([]);
    let documentSpecs = ref([]);
    let userId = +localStorage.getItem("userId");
    let licenseInfo = ref("");
    let draftData = ref("");
    let draftStatus = ref("");

    let declinedFields = ref([]);
    let acceptedFields = ref([]);
    let remark = ref("");

    let declinedFieldsCheck = ref(false);
    let acceptedFieldsCheck = ref(false);

    let workExperience = ref("");
    let healthExamCert = ref("");
    let renewalLetter = ref("");
    let previousLicense = ref("");

    const reset = () => {
      showUpload.value = true;
      showPreview.value = false;
      cpdFile.value = "";
      filePreview.value = "";
      isImage.value = true;
    };
    const handleFileUpload = () => {
      dataChanged.value = true;
      showUpload.value = false;
      cpdFile.value = cpdFileP.value.files[0];
      let reader = new FileReader();
      let fileS = cpdFile.value.size;
      if (fileS > 0 && fileS < 1000) {
        fileSize.value += "B";
      } else if (fileS > 1000 && fileS < 1000000) {
        fileSize.value = fileS / 1000 + "kB";
      } else {
        fileSize.value = fileS / 1000000 + "MB";
      }
      reader.addEventListener(
        "load",
        function() {
          showPreview.value = true;
          filePreview.value = reader.result;
        },
        false
      );

      if (cpdFile.value) {
        if (/\.(jpe?g|png|gif)$/i.test(cpdFile.value.name)) {
          isImage.value = true;
          reader.readAsDataURL(cpdFile.value);
        } else if (/\.(pdf)$/i.test(cpdFile.value.name)) {
          isImage.value = false;
          reader.readAsText(cpdFile.value);
        }
      }
    };
    buttons = store.getters["renewal/getButtons"];
    documentSpecs = store.getters["renewal/getDocumentSpec"];
    licenseInfo = store.getters["renewal/getLicense"];

    healthExamCert = store.getters["renewal/getRenewalHealthExamCert"];
    workExperience = store.getters["renewal/getRenewalWorkExperience"];
    renewalLetter = store.getters["renewal/getRenewalLicense"];
    renewalLetter = store.getters["renewal/getRenewalLicense"];
    previousLicense = store.getters["renewal/getPreviousLicense"];

    const submit = () => {
      emit("changeActiveState");
      store.dispatch("renewal/setRenewalCpd", cpdFile);
    };

    onMounted(() => {
      declinedFields = store.getters["renewal/getDeclinedFields"];
      acceptedFields = store.getters["renewal/getAcceptedFields"];
      remark = store.getters["renewal/getRemark"];
      if (declinedFields != undefined && declinedFields.includes("CPD")) {
        declinedFieldsCheck.value = true;
      }
      if (acceptedFields != undefined && acceptedFields.includes("CPD")) {
        acceptedFieldsCheck.value = true;
      }
      buttons = store.getters["renewal/getButtons"];
      draftData = store.getters["renewal/getDraft"];
      if (route.params.id) {
        draftStatus.value = route.params.status;
        for (let i = 0; i < draftData.documents.length; i++) {
          if (draftData.documents[i].documentTypeCode == "CPD") {
            showUpload.value = false;
            isImage.value = true;
            cpdFile.value = draftData.documents[i];
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
          store.dispatch("renewal/editRenewalLicense", license).then((res) => {
            if (res.data.status == "Success") {
              let licenseId = route.params.id;
              let formData = new FormData();
              formData.append(
                documentSpecs[4].documentType.code,
                cpdFile.value
              );
              let payload = { document: formData, id: licenseId };
              store
                .dispatch("renewal/uploadDocuments", payload)
                .then((res) => {
                  if (res.status == 200) {
                    message.value.showFlash = !message.value.showFlash;
                    message.value.showLoading = false;
                    setTimeout(() => {
                        router.push({ path: "/menu" });
                      }, 1500);
                  
                  } else {
                    message.value.showErrorFlash = !message.value
                      .showErrorFlash;
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
          store.dispatch("renewal/editRenewalLicense", license).then((res) => {
            if (res.data.status == "Success") {
              message.value.showFlash = !message.value.showFlash;
              message.value.showLoading = false;
              setTimeout(() => {
                        router.push({ path: "/menu" });
                      }, 1500);
                  
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
            residenceWoredaId: licenseInfo.residenceWoredaId,
          },
        };
        store.dispatch("renewal/addRenewalLicense", license).then((res) => {
          if (res.data.status == "Success") {
            let licenseId = res.data.data.id;
            let formData = new FormData();

            formData.append(documentSpecs[1].documentType.code, renewalLetter);
            formData.append(documentSpecs[2].documentType.code, healthExamCert);
            formData.append(documentSpecs[4].documentType.code, cpdFile.value);
            formData.append(documentSpecs[5].documentType.code, workExperience);
            formData.append(
              documentSpecs[6].documentType.code,
              previousLicense
            );
            let payload = { document: formData, id: licenseId };
            store
              .dispatch("renewal/uploadDocuments", payload)
              .then((res) => {
                if (res.status == 200) {
                  message.value.showFlash = !message.value.showFlash;
                  message.value.showLoading = false;
                  setTimeout(() => {
                        router.push({ path: "/menu" });
                      }, 1500);
                  
                } else {
                  message.value.showErrorFlash = !message.value.showErrorFlash;
                }
              })
              .catch((err) => {});
          }
        });
      }
    };
    const update = (action) => {
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
          store.dispatch("renewal/editRenewalLicense", license).then((res) => {
            if (res.data.status == "Success") {
              let licenseId = route.params.id;
              let formData = new FormData();
              formData.append(
                documentSpecs[1].documentType.code,
                letterFile.value
              );
              let payload = { document: formData, id: licenseId };
              store
                .dispatch("renewal/uploadDocuments", payload)
                .then((res) => {
                  if (res.status == 200) {
                    message.value.showFlash = !message.value.showFlash;
                    message.value.showLoading = false;
                    setTimeout(() => {
                        router.push({ path: "/menu" });
                      }, 1500);
                  
                  } else {
                    message.value.showErrorFlash = !message.value
                      .showErrorFlash;
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
          store.dispatch("renewal/editRenewalLicense", license).then((res) => {
            if (res.data.status == "Success") {
              message.value.showFlash = !message.value.showFlash;
              message.value.showLoading = false;
              setTimeout(() => {
                        router.push({ path: "/menu" });
                      }, 1500);
                  
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
            residenceWoredaId: licenseInfo.residenceWoredaId,
          },
        };
        store.dispatch("renewal/addRenewalLicense", license).then((res) => {
          if (res.data.status == "Success") {
            let licenseId = res.data.data.id;
            let formData = new FormData();
            formData.append(
              documentSpecs[1].documentType.code,
              letterFile.value
            );
            formData.append(documentSpecs[2].documentType.code, licenseCopy);
            let payload = { document: formData, id: licenseId };
            store
              .dispatch("renewal/uploadDocuments", payload)
              .then((res) => {
                if (res.status == 200) {
                  message.value.showFlash = !message.value.showFlash;
                  message.value.showLoading = false;
                  setTimeout(() => {
                        router.push({ path: "/menu" });
                      }, 1500);
                  
                } else {
                  message.value.showErrorFlash = !message.value.showErrorFlash;
                }
              })
              .catch((err) => {});
          }
        });
      }
    };
    const withdraw = (action) => {
      message.value.showLoading = !message.value.showLoading;
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
          message.value.showLoading = !message.value.showLoading;
          message.value.showFlash = !message.value.showFlash;
          setTimeout(() => {
            router.push({ path: "/menu" });
          }, 1500);
        } else {
          message.value.showErrorFlash = !message.value.showErrorFlash;
        }
      });
    };

    return {
      cpdFile,
      cpdFileP,
      showPreview,
      filePreview,
      showUpload,
      isImage,
      handleFileUpload,
      reset,
      submit,
      draft,
      fileSize,
      withdraw,
      buttons,
      draftStatus,
      update,
      draftData,
      basePath,
      message,
      dataChanged,
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
@import "../../../styles/document-upload.css";

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
