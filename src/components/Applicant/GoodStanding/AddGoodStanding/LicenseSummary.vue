<template>
  <div
    :class="
      isDarkMode
        ? 'container w-full mx-auto p-4 text-white'
        : 'container w-full mx-auto p-4 text-main-400'
    "
  >
    <!-- Heading start -->
    <header class="text-center mx-auto mb-2 sm:mb-4 mt-8">
      <h2 class="text-3xl leading-normal mb-2 font-bold">
        {{ $t("Summary For Good Standing Letter") }}
      </h2>

      <h3 class="leading-relaxed font-light text-lg mx-auto pb-2">
        {{ $t("Here is the detail you have filled in so far") }}
      </h3>
    </header>
    <!-- End heading -->
    <!-- row -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div
        :class="
          isDarkMode
            ? 'py-2 px-2 mb-2 sm:mb-12 bg-secondaryDark mt-2 rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2'
            : 'py-2 px-2 mb-2 sm:mb-12 bg-white mt-2 rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2'
        "
      >
        <div class="border-b-2 mb-2">
          <div class="text-gray-900 mb-2 flex justify-center">
            <i class="fa fa-folder-open fa-3x"></i>
          </div>
          <div class="flex justify-center text-gray-900">
            <h2 class="text-2xl font-semibold">
              {{ $t("Application Detail") }}
            </h2>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b">
          <div>
            <h2 class="font-bold text-xl">{{ $t("Applicant Type") }}</h2>
          </div>
          <div>
            <h3 class="text-lg">
              {{
                localData && localData.applicantTypeId
                  ? localData.applicantTypeId.name
                  : ""
              }}
            </h3>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b">
          <div>
            <h2 class="text-xl">{{ $t("Department") }}</h2>
          </div>
          <div>
            <h3 class="text-lg">
              {{
                localData && localData.departmentId
                  ? localData.departmentId.name
                  : ""
              }}
            </h3>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b">
          <div>
            <h2 class="text-xl">{{ $t("Professional Type") }}</h2>
          </div>
          <div>
            <h3 class="text-lg">
              {{
                localData && localData.professionTypeId
                  ? localData.professionTypeId.name
                  : ""
              }}
            </h3>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 border-b">
          <div>
            <h2 class="text-xl">{{ $t("Applicant Title") }}</h2>
          </div>
          <div>
            <h3 class="text-lg">
              {{
                localData && localData.applicantTitleId
                  ? localData.applicantTitleId.name
                  : ""
              }}
            </h3>
          </div>
        </div>
      </div>

      <div
        :class="
          isDarkMode
            ? 'py-2 px-2 mb-2 sm:mb-12 bg-secondaryDark mt-2 rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2'
            : 'py-2 px-2 mb-2 sm:mb-12 bg-white mt-2 rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2'
        "
      >
        <div class="border-b-2 mb-4">
          <div class="text-gray-900 mb-4 flex justify-center">
            <i class="fa fa-envelope fa-3x"></i>
          </div>
          <div class="flex justify-center text-gray-900 mb-4">
            <h2 class="text-2xl font-semibold">{{ $t("Letter Detail") }}</h2>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b">
          <div>
            <h2 class="text-xl">{{ $t("Who issued the letter") }}</h2>
          </div>
          <div>
            <h3 class="text-lg">
              {{
                localData && localData.whoIssuedId
                  ? localData.whoIssuedId.name
                  : ""
              }}
            </h3>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b">
          <div>
            <h2 class="text-xl">
              {{ $t("To whom the letter is written for") }}
            </h2>
          </div>
          <div>
            <h3 class="text-lg">
              {{
                localData && localData.whomGoodStandingFor
                  ? localData.whomGoodStandingFor
                  : ""
              }}
            </h3>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b">
          <div>
            <h2 class="text-xl">{{ $t("License Registration Number") }}</h2>
          </div>
          <div>
            <h3 class="text-lg">
              {{
                localData && localData.licenseRegistrationNumber
                  ? localData.licenseRegistrationNumber
                  : ""
              }}
            </h3>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b">
          <div>
            <h2 class="text-xl">{{ $t("License Issued Date") }}</h2>
          </div>
          <div>
            <h3 class="text-lg">
              {{
                localData && localData.licenseIssuedDate
                  ? localData.licenseIssuedDate
                  : ""
              }}
            </h3>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-2 sm:mt-4 grid grid-cols-1 gap-4">
      <div
        class="py-2 mb-2 sm:mb-4 bg-gray-50 border-b border-white transform transition duration-300 ease-in-out hover:-translate-y-2"
      >
        <div
          :class="
            isDarkMode
              ? 'bg-secondaryDark rounded-lg p-2 mb-4 w-full'
              : 'bg-white rounded-lg p-2 mb-4 w-full'
          "
        >
          <div class="mb-4 flex justify-center">
            <i class="fa fa-folder fa-3x"></i>
          </div>
          <div class="flex justify-center mb-4 border-b-2">
            <h3 class="text-2xl leading-normal mb-2 font-semibold">
              {{ $t("Files Uploaded") }}
            </h3>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:w-full">
            <div
              class="mb-2 rounded-md border"
              v-for="localFile in localFileData"
              :key="localFile.documenttype"
            >
              <div class="flex justify-center">
                <div class="rounded-md">
                  <a
                    v-if="!isPDF(localFile.fileName)"
                    :href="localFile.image"
                    :data-title="localFile.documenttype"
                    data-lightbox="example-2"
                  >
                    <img
                      :src="localFile.image"
                      class="w-full h-48 object-cover"
                    />
                  </a>
                  <div v-else class="m-4 p-2 bg-primary-300 rounded-md">
                    {{
                      $t(
                        "The file is uploaded but since it is not an image type this is a placeholder"
                      )
                    }}
                  </div>

                  <h4 class="font-bold border-b m-2">
                    {{ $t("Document Type") }}
                  </h4>
                  <h6 class="m-2">{{ localFile.documenttype }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-2 grid grid-cols-1 gap-4">
      <div
        :class="
          isDarkMode
            ? 'py-8 px-4 mb-12 bg-secondaryDark   transform rounded-lg mt-4 transition duration-300 ease-in-out hover:-translate-y-2'
            : 'py-8 px-4 mb-12 bg-white  transform rounded-lg mt-4 transition duration-300 ease-in-out hover:-translate-y-2'
        "
      >
        <div class="mb-4">
          <div class="flex justify-center">
            <label for="feedback" class="form-label inline-block mb-2 text-xl">
              {{ $t("Feedback on the process and system") }}
              <span class="text-yellow-300"> ({{ $t("Optional") }})</span>
            </label>
          </div>

          <div class="mb-3 w-full flex justify-center">
            <input
              v-model="generalInfo.feedback"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 border border-solid border-main-400 rounded focus:border-main-400 transition ease-in-out m-0 focus:outline-none"
              @keyup="checkAgreement()"
              id="feedback"
              rows="6"
              placeholder="Your feedback"
              type="textarea"
            />
          </div>
          <div class="flex justify-center text-gray-900 mb-4">
            <div class="form-check">
              <input
                class="mt-3 sm:mt-0 form-check-input appearance-none h-8 w-8 border rounded-sm bg-white checked:bg-main-400 checked:border-main-400 focus:outline-none transition duration-200 text-main-400 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                :value="agreed"
                @click="changeAgrement()"
                id="agreed"
              />
            </div>
            <h3 class="mb-2lo calFileData text-base">
              {{
                $t(
                  "By checking here I hereby verify the documents and details filled in are legal."
                )
              }}
            </h3>
            <span class="text-red-300">*</span>
          </div>
        </div>
      </div>
    </div>

    <div class="vld-parent mt-4">
      <loading
        :active="isLoading"
        :is-full-page="false"
        :color="'#2F639D'"
        :opacity="1"
      ></loading>
      <div class="flex justify-center w-full mb-8">
        <span v-for="button in buttons" :key="button.id">
          <button
            v-if="button.action != 'DraftEvent'"
            type="button"
            :class="
              allowSave
                ? 'inline-block px-6 border text-main-400 hover:bg-main-400 hober:border-main-400 hover:text-white  mt-4 bg-white font-medium text-xs leading-tight uppercase rounded   transition  duration-150 ease-in-out'
                : 'inline-block px-6 disabled text-main-400  mt-4 bg-white font-medium text-xs leading-tight uppercase rounded   transition  duration-150 ease-in-out'
            "
            @click="checkFinalStatus(button.action)"
          >
            <i class="fa fa-save"></i>
            {{ $t(button.name) }}
          </button>
          <button
            v-if="button.action == 'DraftEvent'"
            type="button"
            class="inline-block px-6 border text-main-400 hover:bg-main-400 hober:border-main-400 hover:text-white mt-4 bg-white font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
            @click="checkFinalStatus(button.action)"
          >
            <i class="fa fa-save"></i>
            {{ $t(button.name) }}
          </button>
        </span>

        <button
          class="inline-block px-6 text-main-400 mt-4 bg-white font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
          @click="back()"
        >
          {{ $t("Back") }}
        </button>
      </div>
    </div>

    <!-- end row -->
    <div class="modal-mask" v-if="showModal">
      <div class="modal-wrapper">
        <div
          :class="
            isDarkMode
              ? 'modal-container sm:w-1/2 w-11/12 bg-primaryDark text-primary-200'
              : 'modal-container sm:w-1/2 w-11/12 bg-white text-main-400'
          "
        >
          <div class="modal-header">
            <h2 class="text-xl border-b-4">{{ $t("Uploading") }}</h2>
          </div>

          <div class="modal-body">
            <div class="flex justify-center text-yellow-300 p-2 rounded-md">
              <h2 class="text-yellow-300 border rounded p-2 text-xl">
                {{ $t("Total file size you have uploaded so far is") }}
                <h2 class="text-2xl">{{ totalSize }} MB</h2>
              </h2>
            </div>
            <div class="flex justify-center">
              <RadialProgress
                :diameter="200"
                :completed-steps="progress"
                :total-steps="totalSteps"
              >
                <h1 class="text-3xl font-bold">{{ progress }} %</h1>
              </RadialProgress>
            </div>
            <div>
              <div
                class="flex border justify-center text-yellow-300 p-2 rounded-md"
              >
                <h2 class="text-xl">
                  {{
                    $t(
                      " Please wait patiently as your files are being uploaded, if for any reason the files you uploaded are not successful you will be redirected to the submitted page automatically so you can re-attach your documents again"
                    )
                  }}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import RadialProgress from "vue3-radial-progress";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  components: { Loading, RadialProgress },
  emits: ["changeActiveState", "changeActiveStateMinus"],
  setup(props, { emit }) {
    const store = useStore();
    const toast = useToast();
    const router = useRouter();
    const totalSteps = ref(100);
    let progress = computed(
      () => store.getters["goodstanding/getUploadProgress"]
    );
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    let totalSize = ref(0);
    let localData = ref({});
    let localFileData = ref({});
    let isLoading = ref(false);
    let showModal = ref(false);
    let generalInfo = ref({});
    let agreed = ref(false);
    let documents = ref([]);
    let buttons = ref([]);
    let tempDocs = ref({});
    let allowSave = ref(false);
    const changeAgrement = () => {
      agreed.value = !agreed.value;
      if (generalInfo.value && agreed.value != false) {
        allowSave.value = true;
      } else {
        allowSave.value = false;
      }
    };
    const checkAgreement = () => {
      if (generalInfo.value && agreed.value != false) {
        allowSave.value = true;
      } else {
        allowSave.value = false;
      }
    };
    const checkFinalStatus = (action) => {
      generalInfo.value.licenseFile = [];
      documents.value = localFileData.value;

      if (agreed.value == true || action == "DraftEvent") {
        let formData = new FormData();
        tempDocs.value.forEach((element, index) => {
          formData.append(index, element);
        });
        isLoading.value = true;
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
            applicantId: generalInfo.value.applicantId,
            applicantTypeId: generalInfo.value.applicantTypeId.id,
            residenceWoredaId: generalInfo.value.woredaSelected
              ? generalInfo.value.woredaSelected.id
              : null,
            applicantTitleId: generalInfo.value.applicantTitleId
              ? generalInfo.value.applicantTitleId.id
              : "",
            whomGoodStandingFor: generalInfo.value.whomGoodStandingFor
              ? generalInfo.value.whomGoodStandingFor
              : "",
            applicantPositionId: generalInfo.value.applicantPosition
              ? generalInfo.value.applicantPosition.id
              : null,
            licenseIssuedDate: generalInfo.value.licenseIssuedDate
              ? generalInfo.value.licenseIssuedDate
              : null,
            whoIssuedId: generalInfo.value.whoIssuedId
              ? generalInfo.value.whoIssuedId.id
              : "",
            licenseRegistrationNumber: generalInfo.value
              .licenseRegistrationNumber
              ? generalInfo.value.licenseRegistrationNumber
              : "",
            professionType: {
              professionTypeId: generalInfo.value
                ? generalInfo.value.professionTypeId.id
                : null,
              educationLevelId: generalInfo.value
                ? generalInfo.value.educationLevelId.id
                : null,
              otherProfessionType: generalInfo.value.otherProfessionType
                ? generalInfo.value.otherProfessionType
                : "",
              otherProfessionTypeAmharic: generalInfo.value
                .otherProfessionTypeAmharic
                ? generalInfo.value.otherProfessionTypeAmharic
                : "",
            },
            expertLevelId: generalInfo.value.expertLevelId
              ? generalInfo.value.expertLevelId
              : null,
            other_applicant_position: generalInfo.value.otherApplicantPosition
              ? generalInfo.value.otherApplicantPosition
              : "",
            islegal: true,
            regionId: generalInfo.value.regionSelected
              ? generalInfo.value.regionSelected.id
              : "",
            regionCode: generalInfo.value.regionSelected
              ? generalInfo.value.regionSelected.code
              : "FED",
            departmentId: generalInfo.value.departmentId.id
              ? generalInfo.value.departmentId.id
              : null,
            feedback: generalInfo.value.feedback
              ? generalInfo.value.feedback
              : "",
          },
        };
        showModal.value = true;
        store
          .dispatch("goodstanding/addGoodstandingLicense", license)
          .then((res) => {
            let licenseId = res.data.data.id;
            let payload = { document: formData, id: licenseId };
            store
              .dispatch("goodstanding/uploadDocuments", payload)
              .then((res) => {
                isLoading.value = false;
                if (res.data.status == "Success") {
                  localStorage.removeItem("GSApplicationData");
                  localStorage.removeItem("applicantTypeSelected");
                  indexedDB.deleteDatabase("GSdocumentUploads");
                  toast.success("Applied successfuly", {
                    timeout: 5000,
                    position: "bottom-center",
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    icon: true,
                  });
                  if (action == "DraftEvent") {
                    router.push({ path: "/Applicant/GoodStanding/draft" });
                  } else {
                    router.push({ path: "/Applicant/GoodStanding/submitted" });
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
    };
    const back = () => {
      emit("changeActiveStateMinus");
    };
    onMounted(() => {
      window.addEventListener("darkModeChanged", (data) => {
        isDarkMode.value = data.detail ? data.detail.content : "";
      });
      buttons.value = store.getters["goodstanding/getButtons"];
      tempDocs.value = store.getters["goodstanding/getTempDocs"];
      localData.value = window.localStorage.getItem("GSApplicationData")
        ? JSON.parse(window.localStorage.getItem("GSApplicationData"))
        : {};
      let request = indexedDB.open("GSdocumentUploads", 1);

      request.onerror = function () {
        console.error("Unable to open database.");
      };

      request.onsuccess = function () {
        let db = request.result;
        const tx = db.transaction("GSdocumentUploads", "readonly");
        const store = tx.objectStore("GSdocumentUploads");
        let getAllIDB = store.getAll();

        getAllIDB.onsuccess = function (evt) {
          localFileData.value =
            evt.target.result && evt.target.result[0]
              ? evt.target.result[0].data
              : {};
          localFileData.value[0].data.forEach((element) => {
            totalSize.value += Number(
              Math.ceil((element.image.length * 6) / 8 / 1000)
            );
          });
          totalSize.value = totalSize.value / 1000;
        };
      };
      generalInfo.value = localData.value;
      generalInfo.value.feedback = "";
      if (
        generalInfo.value &&
        generalInfo.value.regionSelected &&
        generalInfo.value.regionSelected.code == "FED"
      ) {
        generalInfo.value.expertLevelId = 3;
      } else if (generalInfo.value.applicantTypeId.id == 1) {
        generalInfo.value.expertLevelId = 4;
      } else {
        generalInfo.value.expertLevelId = 3;
      }
    });
    const isPDF = (filename) => {
      const parts = filename.split(".");
      const isPdf =
        parts.length > 1 ? parts[parts.length - 1].toLowerCase() : "";
      return isPdf === "pdf";
    };
    return {
      isPDF,
      localData,
      localFileData,
      generalInfo,
      agreed,
      isLoading,
      buttons,
      checkFinalStatus,
      changeAgrement,
      checkAgreement,
      back,
      allowSave,
      totalSteps,
      totalSize,
      showModal,
      progress,
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
  background-color: rgba(0, 0, 0, 0.5);
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
