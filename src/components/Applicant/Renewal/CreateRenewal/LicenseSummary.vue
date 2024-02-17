<template>
  <div class="container xl:max-w-6xl mx-auto p-4">
    <!-- Heading start -->
    <header
      :class="
        isDarkMode
          ? 'text-center mx-auto mb-12 lg:px-20 mt-8 sm:mt-0 text-primary-200'
          : 'text-center mx-auto mb-12 lg:px-20 mt-8 sm:mt-0 text-main-400'
      "
    >
      <h2 class="text-3xl leading-normal mb-2 font-bold">
        Summary For Renewal Application
      </h2>

      <h2 class="text-black leading-relaxed font-light text-lg mx-auto pb-2">
        Here is the detail you have filled in so far
      </h2>
    </header>
    <!-- End heading -->
    <!-- row -->
    <div class="grid grid-cols-1 gap-4 mr-1 sm:grid-cols-3">
      <div
        :class="
          isDarkMode
            ? 'sm:py-8 mt-4 p-2 sm:px-12 mb-12 bg-gray-50 rounded-md transform transition duration-300 ease-in-out bg-secondaryDark hover:-translate-y-2'
            : 'sm:py-8 mt-4 p-2 sm:px-12 mb-12 bg-gray-50 rounded-md transform transition duration-300 ease-in-out bg-white hover:-translate-y-2'
        "
        v-for="dep in localData.multipleDepartment"
        :key="dep"
      >
        <div class="border-b-2 text-main-400 mb-4">
          <div class="text-gray-900 mb-4 flex justify-center">
            <i
              :class="
                isDarkMode
                  ? 'fa fa-university fa-3x text-primary-200'
                  : 'fa fa-university fa-3x text-main-400'
              "
            ></i>
          </div>
          <div class="flex justify-center text-gray-900 mb-4">
            <h3
              :class="
                isDarkMode
                  ? 'text-lg text-primary-200 leading-normal mb-2 font-semibol'
                  : 'text-lg text-main-400 leading-normal mb-2 font-semibold t'
              "
            >
              Department Detail
            </h3>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <h2
              :class="
                isDarkMode
                  ? 'text-primary-200 font-bold text-xl'
                  : 'text-main-400 font-bold text-xl'
              "
            >
              Department Name
            </h2>
          </div>
          <div>
            <h2
              :class="
                isDarkMode
                  ? 'text-primary-200 text-lg'
                  : 'text-grey-800 text-lg'
              "
            >
              {{ dep.department.name }}
            </h2>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <h2
              :class="
                isDarkMode
                  ? 'text-primary-200 font-bold text-xl'
                  : 'text-main-400 font-bold text-xl'
              "
            >
              Educational level
            </h2>
          </div>
          <div>
            <h2
              :class="
                isDarkMode
                  ? 'text-primary-200 text-lg'
                  : 'text-grey-800 text-lg'
              "
            >
              {{ dep.educationalLevel.name }}
            </h2>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <h2
              :class="
                isDarkMode
                  ? 'text-primary-200 font-bold text-xl'
                  : 'text-main-400 font-bold text-xl'
              "
            >
              Institution
            </h2>
          </div>
          <div>
            <h2
              :class="
                isDarkMode
                  ? 'text-primary-200 text-lg'
                  : 'text-grey-800 text-lg'
              "
            >
              {{ dep.institution.name }}
            </h2>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <h2
              :class="
                isDarkMode
                  ? 'text-primary-200 font-bold text-xl'
                  : 'text-main-400 font-bold text-xl'
              "
            >
              Professional Type
            </h2>
          </div>
          <div>
            <h2
              :class="
                isDarkMode
                  ? 'text-primary-200 text-lg'
                  : 'text-grey-800 text-lg'
              "
            >
              {{ dep.professionalType.name }}
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-4">
      <div
        :class="
          isDarkMode
            ? 'bg-secondaryDark flex-shrink px-4 w-full rounded-md text-primary-200'
            : 'bg-white flex-shrink px-4 w-full rounded-md text-main-400'
        "
      >
        <div class="py-8 px-2 sm:px-12 mb-12 bg-gray-50 border-b border-white">
          <div class="border-b-2 mb-4">
            <div class="text-gray-900 mb-4 flex justify-center">
              <i class="fa fa-folder fa-3x -text-main-400"></i>
            </div>
            <div class="flex justify-center text-gray-900 mb-4">
              <h3 class="text-3xl leading-normal mb-2 font-semibold">
                Files Uploaded
              </h3>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full">
            <div
              class="mt-4 mb-2 sm:mb-8 border p-2 rounded-md transform transition duration-300 ease-in-out hover:-translate-y-2"
              v-for="localFileData in localFileData[0]
                ? localFileData[0].data
                : {}"
              :key="localFileData.documenttype"
            >
              <div class="flex justify-center">
                <div class="mt-4 rounded-md">
                  <a
                    v-if="!isPDF(localFileData.fileName)"
                    :href="localFileData.image"
                    :data-title="localFileData.documenttype"
                    data-lightbox="example-2"
                  >
                    <img
                      :src="localFileData.image"
                      class="w-full h-48 object-cover"
                    />
                  </a>
                  <div v-else class="m-4 p-2 bg-primary-300 rounded-md">
                    The file is uploaded but since it is not an image type this
                    is a placeholder
                  </div>

                  <h4 class="font-bold border-b m-2">Document Type</h4>
                  <h6 class="m-2">{{ localFileData.documenttype }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1 mdlg:grid-cols-1 sm:grid-cols-1"
    >
      <div
        :class="
          isDarkMode
            ? 'bg-secondaryDark flex-shrink px-4 w-full rounded-md text-primary-200'
            : 'bg-white flex-shrink px-4 w-full rounded-md text-main-400'
        "
      >
        <div
          class="py-2 px-4 mb-12 bg-gray-50 border-b border-white transform transition duration-300 ease-in-out hover:-translate-y-2"
        >
          <div class="mb-4">
            <div class="flex justify-center m-2">
              <h2 class="form-label text-lg inline-block mb-2">
                Feedback on the process and system
                <span class="text-yellow-300">(optional*)</span>
              </h2>
            </div>

            <div class="mb-3 w-full flex justify-center">
              <input
                v-model="generalInfo.feedback"
                @keyup="checkAgreement()"
                :class="
                  isDarkMode
                    ? 'form-control block w-full bg-primary-200 text-lg text-main-400 px-3 py-1.5   rounded transition ease-in-out m-0'
                    : 'form-control block w-full border text-main-400 px-3 py-1.5 text-xl   rounded transition ease-in-out m-0  '
                "
                id="feedback"
                rows="6"
                placeholder="Your feedback"
                type="textarea"
              />
            </div>

            <div class="flex justify-center text-gray-900 mb-4 mt-4">
              <div class="form-check">
                <input
                  class="form-check-input appearance-none h-8 w-8 border border-gray-300 rounded-sm checked:bg-blue-600 checked:border-blue-600 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  :value="agreed"
                  @click="changeAgrement()"
                  id="agreed"
                />
              </div>
              <h3 class="mb-2 sm:text-lg text-lg">
                By checking here I hereby verify the documents and details
                filled in are legal.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="vld-parent mt-4">
      <div class="vld-parent mt-4">
        <loading
          :active="isLoading"
          :is-full-page="false"
          :color="'#2F639D'"
          :opacity="1"
          class="rounded-md"
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
              {{ button.name }}
            </button>
            <button
              v-if="button.action == 'DraftEvent'"
              type="button"
              class="inline-block px-6 border text-main-400 hover:bg-main-400 hober:border-main-400 hover:text-white mt-4 bg-white font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
              @click="checkFinalStatus(button.action)"
            >
              <i class="fa fa-save"></i>
              {{ button.name }}
            </button>
          </span>

          <button
            class="inline-block px-6 text-main-400 mt-4 bg-white font-medium text-xs leading-tight uppercase rounded transition duration-150 ease-in-out"
            @click="back()"
          >
            back
          </button>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="modal-mask h-screen p-1" v-if="showModal">
      <div class="modal-wrapper">
        <div
          :class="
            isDarkMode
              ? 'modal-container sm:w-1/2 w-11/12 bg-primaryDark text-primary-200'
              : 'modal-container sm:w-1/2 w-11/12 bg-white text-main-400'
          "
        >
          <div class="modal-header">
            <h2 class="text-xl border-b-4">Uploading</h2>
          </div>

          <div class="modal-body">
            <div class="flex justify-center text-yellow-300 p-2 rounded-md">
              <h2 class="text-yellow-300 border rounded p-2 text-xl">
                Total file size you have uploaded so far is
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
                  Please wait patiently as your files are being uploaded, if for
                  any reason the files you uploaded are not successful you will
                  be redirected to the submitted page automatically so you can
                  re-attach your documents again
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
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import RadialProgress from "vue3-radial-progress";
export default {
  components: { Loading, RadialProgress },
  setup(props, { emit }) {
    const store = useStore();
    const toast = useToast();
    const router = useRouter();
    const totalSteps = ref(100);
    let progress = computed(() => store.getters["renewal/getUploadProgress"]);
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    let isLoading = ref(false);
    let localData = ref({});
    let localFileData = ref({});
    let generalInfo = ref({});
    let agreed = ref(false);
    let totalSize = ref(0);
    let documents = ref([]);
    let buttons = ref([]);
    let tempDocs = ref({});
    let allowSave = ref(false);
    const showModal = ref(false);
    const changeAgrement = () => {
      agreed.value = !agreed.value;
      if (agreed.value != false) {
        allowSave.value = true;
      } else {
        allowSave.value = false;
      }
    };
    const checkAgreement = () => {
      if (agreed.value != false) {
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
    const isPDF = (filename) => {
      const parts = filename.split(".");
      const isPdf =
        parts.length > 1 ? parts[parts.length - 1].toLowerCase() : "";
      return isPdf === "pdf";
    };
    const checkFinalStatus = (action) => {
      generalInfo.value.licenseFile = [];
      documents.value = localFileData.value;
      isLoading.value = true;
      if (agreed.value == true || action == "DraftEvent") {
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
          localFileData.value = evt.target.result ? evt.target.result : {};
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
      checkAgreement,
      back,
      isLoading,
      showModal,
      allowSave,
      totalSteps,
      progress,
      checkFinalStatus,
      changeAgrement,
      isPDF,
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
