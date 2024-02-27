<template>
  <div class="container xl:max-w-6xl mx-auto p-4">
    <SummaryPage
      @checkAgreement="changeAgreement"
      :generalInfo="generalInfo"
      @changeAgreement="changeAgreement"
      :multipleDepartment="generalInfo ? generalInfo.multipleDepartment : []"
      :fileIsLoading="isLoading"
      :localFileImages="[]"
      :localFileData="localFileData"
      :professionChanged="false"
      :changedDocs="[]"
      :isDarkMode="isDarkMode"
      :prevDocs="[]"
      :googleApi="''"
      :isSubmitOrDraft="false"
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
import { useRouter } from "vue-router";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import SummaryPage from "../../Shared/GeneralInformation/SummaryPage.vue";
import UploadProgress from "../../Shared/GeneralInformation/UploadProgress.vue";
export default {
  components: { Loading, SummaryPage, UploadProgress },
  setup(props, { emit }) {
    const store = useStore();
    const toast = useToast();
    const router = useRouter();
    const totalSteps = ref(100);
    let progress = computed(() => store.getters["renewal/getUploadProgress"]);
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    let isLoading = ref(false);
    let localData = ref({});
    let localFileData = ref([]);
    let generalInfo = ref({});
    let agreed = ref(false);
    let totalSize = ref(0);
    let documents = ref([]);
    let buttons = ref([]);
    let tempDocs = ref({});
    let allowSave = ref(false);
    const showModal = ref(false);
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

    const fetchApplicationStatuses = () => {
      store.dispatch("renewal/getApplicationStatuses").then((res) => {
        let results = res.data.data;

        let status = results.filter(function (e) {
          return e.code == "INIT";
        });
        buttons.value = status[0]["buttons"];
      });
    };

    const checkFinalStatus = (action) => {
      generalInfo.value.licenseFile = [];
      documents.value = localFileData.value;
      isLoading.value = true;
      if (agreed.value || action == "DraftEvent") {
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
          action: action,
          data: {
            applicantTypeId:
              generalInfo.value && generalInfo.value.applicantTypeSelected
                ? generalInfo.value.applicantTypeSelected.id
                : null,
            residenceWoredaId:
              generalInfo.value && generalInfo.value.woredaSelected
                ? generalInfo.value.woredaSelected.id
                : null,
            educations: generalInfo.value ? generalInfo.value.education : {},
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
            newLicenseId: generalInfo.value.newLicenseId,
            newLicenseCode: generalInfo.value.newLicenseCode,
            feedback: generalInfo.value.feedback
              ? generalInfo.value.feedback
              : "",
            regionId: generalInfo.value.regionSelected
              ? generalInfo.value.regionSelected.id
              : "",
            regionCode: generalInfo.value.regionSelected
              ? generalInfo.value.regionSelected.code
              : "FED",
          },
        };
        showModal.value = true;
        let tryAgain = localStorage.getItem("tempRN")
          ? JSON.parse(localStorage.getItem("tempRN"))
          : false;
        if (tryAgain && tryAgain.id != null && tryAgain.step == 3) {
          let licenseId = tryAgain.id;
          let payload = { document: formData, id: licenseId };
          store
            .dispatch("renewal/updateDocuments", payload)
            .then((res) => {
              isLoading.value = false;
              if (res.data.status == "Success") {
                localStorage.removeItem("applicantTypeSelected");
                localStorage.removeItem("RNApplicationData");
                indexedDB.deleteDatabase("RNdocumentUploads");
                localStorage.removeItem("tempRN");
                toast.success("Applied successfuly", {
                  timeout: 5000,
                  position: "bottom-center",
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  icon: true,
                });

                if (license.action == "DraftEvent") {
                  router.push({ path: "/Applicant/Renewal/draft" });
                } else {
                  router.push({ path: "/Applicant/Renewal/submitted" });
                }
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
              toast.error("Error occured, please try again", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
            });
        } else {
          store.dispatch("renewal/addRenewalLicense", license).then((res) => {
            let licenseId = res.data.data.id;
            let payload = { document: formData, id: licenseId };
            let tempRN = { id: licenseId, step: 3 };
            localStorage.setItem("tempRN", JSON.stringify(tempRN));
            store
              .dispatch("renewal/uploadDocuments", payload)
              .then((res) => {
                isLoading.value = false;
                if (res.data.status == "Success") {
                  localStorage.removeItem("applicantTypeSelected");
                  localStorage.removeItem("RNApplicationData");
                  indexedDB.deleteDatabase("RNdocumentUploads");
                  localStorage.removeItem("tempRN");
                  toast.success("Applied successfuly", {
                    timeout: 5000,
                    position: "bottom-center",
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    icon: true,
                  });

                  if (license.action == "DraftEvent") {
                    router.push({ path: "/Applicant/Renewal/draft" });
                  } else {
                    router.push({ path: "/Applicant/Renewal/submitted" });
                  }
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
      }
    };
    const back = () => {
      let tempRN = localStorage.getItem("tempRN")
        ? JSON.parse(localStorage.getItem("tempRN"))
        : false;
      if (tempRN && tempRN.step != null) {
        tempRN.step = 2;
        localStorage.setItem("tempRN", JSON.stringify(tempRN));
      }
      emit("changeActiveStateMinus");
    };
    onMounted(() => { 
      fetchApplicationStatuses();
      tempDocs.value = store.getters["renewal/getTempDocs"];
      localData.value = window.localStorage.getItem("RNApplicationData")
        ? JSON.parse(window.localStorage.getItem("RNApplicationData"))
        : {};

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
          localFileData.value =  evt?.target?.result;
         
          localFileData?.value[0]?.data.forEach((element) => {
            totalSize.value += Number(
              Math.ceil((element.image.length * 6) / 8 / 1000)
            );
          });
          totalSize.value = totalSize.value / 1000;
        };
      };

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
    });
    return {
      localData,
      totalSize,
      localFileData,
      generalInfo,
      agreed,
      buttons,
      changeAgreement,
      back,
      isLoading,
      showModal,
      allowSave,
      totalSteps,
      progress,
      checkFinalStatus,
      isDarkMode,
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

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.329);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
  padding: 20px 30px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
