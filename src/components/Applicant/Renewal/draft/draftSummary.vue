<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<template>
  <div class="container xl:max-w-6xl mx-auto p-4">
    <SummaryPage
      @checkAgreement="changeAgreement"
      :generalInfo="generalInfo"
      @changeAgreement="changeAgreement"
      :multipleDepartment="generalInfo ? generalInfo.multipleDepartment : []"
      :fileIsLoading="fileIsLoading"
      :localFileImages="localFileImages"
      :professionChanged="professionChanged"
      :changedDocs="changedDocs"
      :isDarkMode="isDarkMode"
      :prevDocs="prevDocs"
      :googleApi="googleApi"
      :isSubmitOrDraft="true"
      :localFileData="[]"
    ></SummaryPage>

    <div class="vld-parent mt-4">
      <loading
        :active="isLoading"
        :is-full-page="false"
        :color="'#2F639D'"
        :opacity="1"
      ></loading>
      <div class="flex justify-center">
        <button
          v-for="button in buttons"
          :key="button.id"
          type="button"
          :class="
            allowSave
              ? 'inline-block px-6 border text-main-400 hover:bg-main-400 hover:border-main-400 hover:text-white  mt-4 bg-white font-medium text-xs leading-tight uppercase rounded   transition  duration-150 ease-in-out'
              : 'inline-block px-6 disabled text-main-400  mt-4 bg-white font-medium text-xs leading-tight uppercase rounded   transition  duration-150 ease-in-out'
          "
          @click="checkFinalStatus(button.action)"
        >
          <i class="fa fa-save"></i>
          {{ $t(button.name) }}
        </button>
        <button
          class="inline-block px-6 text-main-400 mt-4 bg-white font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
          @click="back()"
        >
          {{ $t("Back") }}
        </button>
      </div>
    </div>
    <!-- File Upload progress modal -->
    <UploadProgress
      v-if="showModal"
      :totalSize="totalSize"
      :progress="progress"
      :totalSteps="totalSteps"
      :isDarkMode="isDarkMode"
    ></UploadProgress>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
import { useRoute, useRouter } from "vue-router";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { googleApi } from "@/composables/baseURL";
import UploadProgress from "../../Shared/GeneralInformation/UploadProgress.vue";
import SummaryPage from "../../Shared/GeneralInformation/SummaryPage.vue";

export default {
  components: { Loading, UploadProgress, SummaryPage },
  setup(props, { emit }) {
    const store = useStore();
    const toast = useToast();
    const router = useRouter();
    const showModal = ref(false);
    const totalSteps = ref(100);
    let progress = computed(() => store.getters["renewal/getUploadProgress"]);
    let localData = ref({});
    let localFileImages = ref({});
    let generalInfo = ref({});
    let agreed = ref(false);
    let isLoading = ref(false);
    let buttons = ref([]);
    let tempDocs = ref({});
    let savedData = ref({});
    let changedDocs = ref([]);
    let prevDocs = ref([]);
    let professionChanged = ref(false);
    let fileIsLoading = ref(false);
    const route = useRoute();
    let totalSize = ref(0);
    let allowSave = ref(false);
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    const changeAgreement = (value) => {
      if (value && value != "") {
        agreed.value = value;
      }
      if (agreed.value) {
        allowSave.value = true;
      } else {
        allowSave.value = false;
      }
    };
    const checkFinalStatus = (action) => {
      generalInfo.value.licenseFile = [];

      if (agreed.value) {
        isLoading.value = true;
        let formData = new FormData();
        tempDocs.value.forEach((element, index) => {
          formData.append(index, element);
        });

        // let smsData = {
        //   recipients: [
        //     this.profileInfo.user.phoneNumber
        //       ? "251" + this.profileInfo.user.phoneNumber
        //       : "",
        //   ],
        //   message:
        //     "Dear applicant you have successfully applied for a new license, after careful examination of your uploaded documents by our reviewers we will get back and notify you on each steps, Thank you for using eHPL.",
        // };

        let license = {
          licenseId: route.params.id,
          draftData: {
            action: action,
            data: {
              applicationStatusId: generalInfo.value
                ? generalInfo.value.applicationStatusId
                : null,
              applicantTypeId:
                generalInfo.value && generalInfo.value.applicantTypeSelected
                  ? generalInfo.value.applicantTypeSelected.id
                  : null,
              residenceWoredaId:
                generalInfo.value && generalInfo.value.woredaSelected
                  ? generalInfo.value.woredaSelected.id
                  : null,
              educations: generalInfo.value ? generalInfo.value.educations : {},
              occupationTypeId: generalInfo.value.occupationSelected
                ? generalInfo.value.occupationSelected.id
                : null,
              nativeLanguageId: generalInfo.value.nativeLanguageSelected
                ? generalInfo.value.nativeLanguageSelected.id
                : null,
              expertLevelId: generalInfo.value.expertLevelId
                ? generalInfo.value.expertLevelId
                : null,
              isLegal: true,
              feedback: generalInfo.value.feedback
                ? generalInfo.value.feedback
                : "",
            },
          },
        };
        showModal.value = true;
        store.dispatch("renewal/updateDraft", license).then(() => {
          let licenseId = route.params.id;
          let payload = { document: formData, id: licenseId };
          store
            .dispatch("renewal/updateDocuments", payload)
            .then((res) => {
              isLoading.value = false;
              if (res.data.status == "Success") {
                localStorage.removeItem("applicantTypeSelected");
                localStorage.removeItem("RNApplicationData");
                localStorage.removeItem("tempRN");
                indexedDB.deleteDatabase("RNdocumentUploads");
                toast.success("Applied successfuly", {
                  timeout: 5000,
                  position: "bottom-center",
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  icon: true,
                });

                router.push({ path: "/Applicant/Renewal/submitted" });
              } else {
                toast.error("Error occured, please try again", {
                  timeout: 5000,
                  position: "bottom-center",
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  icon: true,
                });
              }
            })
            .catch(() => {
              isLoading.value = false;
              toast.error("Error occured, please try again", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
            });
        });
      }
    };
    const back = () => {
      emit("changeActiveStateMinus");
    };
    onMounted(() => {
      window.addEventListener("darkModeChanged", (data) => {
        isDarkMode.value = data.detail ? data.detail.content : "";
      });
      fileIsLoading.value = true;
      store
        .dispatch("renewal/getRenewalApplication", route.params.id)
        .then((res) => {
          savedData.value = res.data.data;

          buttons.value = store.getters["renewal/getButtons"];

          buttons.value = buttons.value.filter(
            (ele) => ele.code != "AT" && ele.code != "DRA"
          );
          tempDocs.value = store.getters["renewal/getTempDocs"];

          localData.value = window.localStorage.getItem("RNApplicationData")
            ? JSON.parse(window.localStorage.getItem("RNApplicationData"))
            : {};

          generalInfo.value = localData.value;
          generalInfo.value.feedback = "";
          if (generalInfo.value.applicantTypeSelected.id == 1) {
            store.dispatch("renewal/getExpertLevel").then((res) => {
              let expertLevel = res.data.data.filter(function (e) {
                return e.code.includes("REG");
              });
              generalInfo.value.expertLevelId = expertLevel[0].id;
            });
          } else {
            store.dispatch("renewal/getExpertLevel").then((res) => {
              let expertLevel = res.data.data.filter(function (e) {
                return e.code.includes("FED");
              });
              generalInfo.value.expertLevelId = expertLevel[0].id;
            });
          }
          //Get images from indexed Db
          let request = indexedDB.open("RNdocumentUploads", 1);

          request.onerror = function () {
            console.error("Unable to open database.");
          };

          request.onsuccess = function () {
            let db = request.result;
            const tx = db.transaction("RNdocumentUploads", "readonly");
            const store = tx.objectStore("RNdocumentUploads");
            let getAllIDB = store.getAll();

            getAllIDB.onsuccess = function (evt) {
              localFileImages.value = evt.target.result
                ? JSON.parse(
                    JSON.stringify(
                      evt.target.result[0] ? evt.target.result[0].data : {}
                    )
                  )
                : {};
              localFileImages.value.forEach((element) => {
                totalSize.value += Number(
                  Math.ceil((element.image.length * 6) / 8 / 1000)
                );
              });
              totalSize.value = totalSize.value / 1000;
              if (localFileImages.value && savedData.value.documents) {
                savedData.value.documents.forEach((ele) => {
                  localFileImages.value.forEach((newFile) => {
                    if (
                      (newFile.commonDocCode &&
                        newFile.commonDocCode == ele.fileName) ||
                      newFile.documentCode == ele.fileName
                    ) {
                      changedDocs.value.push({
                        docName: newFile.documentName,
                        prevFile: googleApi + ele.filePath,
                        newFile: newFile.image,
                        id: newFile.documenttype,
                      });
                    }
                  });
                });
              }

              if (localData.value.professionChanged == true) {
                professionChanged.value = true;
                // prevDocs.value = localFileImages.value;
                localFileImages.value.forEach((element) => {
                  if (!element.commonDocCode) {
                    prevDocs.value.push({
                      documentType: { name: element.documentName },
                      docName: element.documenttype,
                      path: element.image,
                    });
                  }
                });
              } else {
                prevDocs.value = savedData.value.documents;
              }
            };
          };
          fileIsLoading.value = false;
        });
    });

    return {
      isDarkMode,
      localData,
      localFileImages,
      professionChanged,
      generalInfo,
      agreed,
      prevDocs,
      buttons,
      changedDocs,
      isLoading,
      changeAgreement,
      back,
      googleApi,
      allowSave,
      showModal,
      checkFinalStatus,
      totalSteps,
      progress,
      fileIsLoading,
      totalSize,
    };
  },
};
</script>
<style>
.text-danger > label,
.text-danger > h5 {
  color: red;
}

.withdraw {
  background-image: linear-gradient(to right, #d63232, #e63636) !important;
  color: white;
  border-color: tomato;
}

.disabled {
  pointer-events: none;
  opacity: 0.3;
}

</style>
