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
          message="Authenticated Work Experience(3 to 4 years)"
          class="mt-8"
        />
        <form @submit.prevent="submit" class="mx-auto max-w-3xl w-full mt-8">
          <div class="flex justify-center mb-10">
            <div>
              <span>
                <h2>{{ workExperienceFile.name }}</h2>
                <h2>{{ fileSize }}</h2>
              </span>
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
  <div v-if="message.showFlash">
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

export default {
  props: ["activeState"],
  components: { TitleWithIllustration, FlashMessage, ErrorFlashMessage },
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

    let fileSize = ref("");

    let workExperienceFile = ref("");
    let workExperienceFileP = ref("");
    let showPreview = ref(false);
    let filePreview = ref("");
    let showUpload = ref(true);
    let isImage = ref(true);
    let dataChanged = ref(false);
    let draftData = ref("");

    let buttons = [];
    let documentSpecs = ref([]);
    let userId = +localStorage.getItem("userId");
    let licenseInfo = ref("");
    let draftStatus = ref("");

    let declinedFields = ref([]);
    let acceptedFields = ref([]);
    let remark = ref("");

    let declinedFieldsCheck = ref(false);
    let acceptedFieldsCheck = ref(false);

    let healthExamCert = ref("");
    let renewalLetter = ref("");
    let cpd = ref("");
    let previousLicense = ref("");

    const reset = () => {
      showUpload.value = true;
      showPreview.value = false;
      workExperienceFile.value = "";
      filePreview.value = "";
      isImage.value = true;
    };
    const handleFileUpload = () => {
      dataChanged.value = true;
      showUpload.value = false;
      workExperienceFile.value = workExperienceFileP.value.files[0];
      let reader = new FileReader();

      let fileS = workExperienceFile.value.size;
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
    buttons = store.getters["renewal/getButtons"];
    documentSpecs = store.getters["renewal/getDocumentSpec"];
    licenseInfo = store.getters["renewal/getLicense"];

    healthExamCert = store.getters["renewal/getRenewalHealthExamCert"];
    renewalLetter = store.getters["renewal/getRenewalLicense"];
    cpd = store.getters["renewal/getRenewalCpd"];
    previousLicense = store.getters["renewal/getPreviousLicense"];

    const submit = () => {
      emit("changeActiveState");
      store.dispatch("renewal/setRenewalWorkExperience", workExperienceFile);
    };

    onMounted(() => {
      declinedFields = store.getters["renewal/getDeclinedFields"];
      acceptedFields = store.getters["renewal/getAcceptedFields"];
      remark = store.getters["renewal/getRemark"];
      if (declinedFields != undefined && declinedFields.includes("WE")) {
        declinedFieldsCheck.value = true;
      }
      if (acceptedFields != undefined && acceptedFields.includes("WE")) {
        acceptedFieldsCheck.value = true;
      }
      buttons = store.getters["renewal/getButtons"];
      draftData = store.getters["renewal/getDraft"];
      if (route.params.id) {
        draftStatus.value = route.params.status;
        for (let i = 0; i < draftData.documents.length; i++) {
          if (draftData.documents[i].documentTypeCode == "WE") {
            showUpload.value = false;
            isImage.value = true;
            workExperienceFile.value = draftData.documents[i];
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
                documentSpecs[5].documentType.code,
                workExperienceFile.value
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
            formData.append(documentSpecs[4].documentType.code, cpd);
            formData.append(
              documentSpecs[5].documentType.code,
              workExperienceFile.value
            );
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
          message.value.showFlash = !message.value.showFlash;
          message.value.showLoading = !message.value.showLoading;
          setTimeout(() => {
            router.push({ path: "/menu" });
          }, 1500);
        } else {
          message.value.showErrorFlash = !message.value.showErrorFlash;
        }
      });
    };

    return {
      workExperienceFile,
      workExperienceFileP,
      showPreview,
      filePreview,
      showUpload,
      isImage,
      handleFileUpload,
      fileSize,
      reset,
      submit,
      draftStatus,
      update,
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
.preview {
  width: 250px;
  height: 250px;
  border-radius: 0%;
}
.withdraw {
  background-image: linear-gradient(to right, #d63232, #e63636) !important;
  color: white;
  border-color: tomato;
}
</style>
