<template>
  <div class="container xl:max-w-6xl mx-auto p-4">
    <!-- Heading start -->
    <header class="text-center mx-auto mb-12 lg:px-20">
      <h2 class="text-3xl leading-normal mb-2 font-bold text-main-400">
        Summary For New License Application
      </h2>

      <p class="text-black leading-relaxed font-light text-xl mx-auto pb-2">
        Here is the detail you have filled in so far
      </p>
    </header>
    <!-- End heading -->
    <!-- row -->
    <div class="grid grid-cols-1 gap-4 mr-1 sm:grid-cols-3">
      <div
        class="py-8 mt-4 px-12 mb-12 bg-gray-50 rounded-md transform transition duration-300 ease-in-out bg-white hover:-translate-y-2"
        v-for="dep in localData.multipleDepartment"
        :key="dep"
      >
        <div class="border-b-2 text-main-400 mb-4">
          <div class="text-gray-900 mb-4 flex justify-center">
            <i class="fa fa-university fa-3x text-main-400"></i>
          </div>
          <div class="flex justify-center text-gray-900 mb-4">
            <h3
              class="text-lg text-main-400 leading-normal mb-2 font-semibold text-grey-800"
            >
              Department Detail
            </h3>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="text-main-400 font-bold sm:text-sm mdlg:text-base lg:text-base md:text-base"
            >
              Department Name</span
            >
          </div>
          <div>
            <span class="text-grey-800 sm:text-sm"> {{ dep.department.name }}</span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="text-main-400 font-bold sm:text-sm mdlg:text-base lg:text-base md:text-base"
              >Educational level</span
            >
          </div>
          <div>
            <span class="text-grey-800 sm:text-sm"> {{ dep.educationalLevel.name }}</span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="text-main-400 font-bold sm:text-sm mdlg:text-base lg:text-base md:text-base"
              >Institution</span
            >
          </div>
          <div>
            <span class="text-grey-800 sm:text-sm"> {{ dep.institution.name }}</span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="text-main-400 font-bold sm:text-sm mdlg:text-base lg:text-base md:text-base"
            >
              Professional Type</span
            >
          </div>
          <div>
            <span class="text-grey-800 sm:text-sm"> {{ dep.professionalType.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-4">
      <div class="bg-white flex-shrink px-4 w-full rounded-md">
        <div class="py-8 px-2 sm:px-12 mb-12 bg-gray-50 border-b border-white">
          <div class="border-b-2 text-main-400 mb-4">
            <div class="text-gray-900 mb-4 flex justify-center">
              <i class="fa fa-folder fa-3x -text-main-400"></i>
            </div>
            <div class="flex justify-center text-gray-900 mb-4">
              <h3
                class="text-3xl text-main-400 leading-normal mb-2 font-semibold text-grey-800"
              >
                Files Uploaded
              </h3>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full">
            <div
              class="mt-4 mb-2 sm:mb-8 bg-white border p-2 rounded-md transform transition duration-300 ease-in-out hover:-translate-y-2"
              v-for="localFileData in localFileData[0] ? localFileData[0].data : {}"
              :key="localFileData.documenttype"
            >
              <div class="flex justify-center">
                <div class="mt-4 bg-white rounded-md">
                  <a
                    :href="localFileData.image"
                    :data-title="localFileData.documenttype"
                    data-lightbox="example-2"
                  >
                    <img :src="localFileData.image" class="w-full h-48 object-cover" />
                  </a>

                  <h4 class="text-main-400 font-bold border-b m-2">Document Type</h4>
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
      <div class="bg-white flex-shrink px-4 w-full rounded-md">
        <div
          class="py-8 px-2 sm:px-12 mb-12 bg-gray-50 border-b border-white transform transition duration-300 ease-in-out hover:-translate-y-2"
        >
          <div class="mb-4 border-t text-main-400">
            <div class="flex justify-center text-gray-900 mb-4 mt-4">
              <div class="form-check mt-4 sm:mt-0">
                <input
                  class="form-check-input appearance-none h-8 w-8 border rounded-md checked:bg-main-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  :value="agreed"
                  @click="changeAgrement()"
                  id="agreed"
                />
              </div>
              <h3 class="text-grey-800 mb-2 text-lg sm:text-2xl">
                By checking here I hereby verify the documents and details filled in are
                legal.
              </h3>
            </div>
            <div class="flex justify-center">
              <label for="feedback" class="form-label inline-block mb-2 text-main-400"
                >Feedback on the process and system
                <span class="text-yellow-300">(optional*)</span>
              </label>
            </div>

            <div class="mb-3 w-full flex justify-center">
              <input
                v-model="generalInfo.feedback"
                @keyup="checkAgreement()"
                class="form-control block w-full text-main-400 px-3 py-1.5 text-base font-normal text-gray-700 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:outline-none"
                id="feedback"
                rows="6"
                placeholder="Your feedback"
                type="textarea"
              />
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

    <div class="modal-mask" v-if="showModal">
      <div class="modal-wrapper">
        <div class="modal-container sm:w-1/2 w-5/6">
          <div class="modal-header">
            <h2 class="text-main-400 text-xl border-b-4">Uploading</h2>
          </div>

          <div class="modal-body">
            <div class="flex justify-center text-yellow-300 p-2 rounded-md">
              <h2 class="text-yellow-300 border rounded p-2 text-xl">
                Total file size you have uploaded so far is
                <h2 class="text-grey-800 text-2xl">{{ totalSize }} MB</h2>
              </h2>
            </div>
            <div class="flex justify-center">
              <RadialProgress
                :diameter="200"
                :completed-steps="progress"
                :total-steps="totalSteps"
              >
                <h1 class="text-3xl text-main-400 font-bold">{{ progress }} %</h1>
              </RadialProgress>
            </div>
            <div>
              <div class="flex border justify-center text-yellow-300 p-2 rounded-md">
                <h2 class="text-xl">
                  Please wait patiently as your files are being uploaded, if for any
                  reason the files you uploaded are not successful you will be redirected
                  to the submitted page automatically so you can re-attach your documents
                  again
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
    let progress = computed(() => store.getters["newlicense/getUploadProgress"]);

    const totalSteps = ref(100);
    const store = useStore();
    const toast = useToast();
    const router = useRouter();
    let isLoading = ref(false);
    let localData = ref({});
    let localFileData = ref({});
    let generalInfo = ref({});
    let agreed = ref(false);
    let documents = ref([]);
    let buttons = ref([]);
    let totalSize = ref(0);
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
            regionId: generalInfo.value.regionSelected
              ? generalInfo.value.regionSelected.id
              : "",
            regionCode: generalInfo.value.regionSelected
              ? generalInfo.value.regionSelected.code
              : "FED",
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
            feedback: generalInfo.value.feedback ? generalInfo.value.feedback : "",
          },
        };
        showModal.value = true;
        let tryAgain = localStorage.getItem("tempNL")
          ? JSON.parse(localStorage.getItem("tempNL"))
          : false;
        if (tryAgain && tryAgain.id != null && tryAgain.step == 3) {
          let licenseId = tryAgain.id;
          let payload = { document: formData, id: licenseId };
          store
            .dispatch("newlicense/updateDocuments", payload)
            .then((res) => {
              isLoading.value = false;
              if (res) {
                localStorage.removeItem("applicantTypeSelected");
                localStorage.removeItem("NLApplicationData");
                localStorage.removeItem("tempNL");
                indexedDB.deleteDatabase("NLdocumentUploads");
                toast.success("Applied successfuly", {
                  timeout: 5000,
                  position: "bottom-center",
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  icon: true,
                });

                if (license.action == "DraftEvent") {
                  router.push({ path: "/Applicant/NewLicense/draft" });
                } else {
                  router.push({ path: "/Applicant/NewLicense/submitted" });
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
          store.dispatch("newlicense/addNewLicense", license).then((res) => {
            let licenseId = res.data.data.id;
            let payload = { document: formData, id: licenseId };
            let tempNL = { id: licenseId, step: 3, backButtonClicked: false };
            localStorage.setItem("tempNL", JSON.stringify(tempNL));
            store
              .dispatch("newlicense/uploadDocuments", payload)
              .then((res) => {
                isLoading.value = false;
                if (res) {
                  localStorage.removeItem("applicantTypeSelected");
                  localStorage.removeItem("NLApplicationData");
                  localStorage.removeItem("tempNL");
                  indexedDB.deleteDatabase("NLdocumentUploads");
                  toast.success("Applied successfuly", {
                    timeout: 5000,
                    position: "bottom-center",
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    icon: true,
                  });

                  if (license.action == "DraftEvent") {
                    router.push({ path: "/Applicant/NewLicense/draft" });
                  } else {
                    router.push({ path: "/Applicant/NewLicense/submitted" });
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
      let tempNL = localStorage.getItem("tempNL")
        ? JSON.parse(localStorage.getItem("tempNL"))
        : false;
      if (tempNL && tempNL.step != null) {
        tempNL.step = 2;
        tempNL.backButtonClicked = true;
        localStorage.setItem("tempNL", JSON.stringify(tempNL));
      }
      emit("changeActiveStateMinus");
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

    onMounted(() => {
      fetchApplicationStatuses();
      tempDocs.value = store.getters["newlicense/getTempDocs"];
      localData.value = window.localStorage.getItem("NLApplicationData")
        ? JSON.parse(window.localStorage.getItem("NLApplicationData"))
        : {};

      let request = indexedDB.open("NLdocumentUploads", 1);

      request.onerror = function () {
        console.error("Unable to open database.");
      };

      request.onsuccess = function () {
        let db = request.result;
        const tx = db.transaction("NLdocumentUploads", "readonly");
        const store = tx.objectStore("NLdocumentUploads");
        let getAllIDB = store.getAll();

        getAllIDB.onsuccess = function (evt) {
          localFileData.value = evt.target.result ? evt.target.result : {};

          localFileData.value[0].data.forEach((element) => {
            totalSize.value += Number(Math.ceil((element.image.length * 6) / 8 / 1000));
          });
          totalSize.value = totalSize.value / 1000;
        };
      };

      generalInfo.value = localData.value;

      generalInfo.value.feedback = "";
      if (generalInfo.value.applicantTypeSelected.id == 1) {
        store.dispatch("newlicense/getExpertLevel").then((res) => {
          let expertLevel = res.data.data.filter(function (e) {
            return e.code.includes("REG");
          });
          generalInfo.value.expertLevelId = expertLevel[0].id;
        });
      } else {
        store.dispatch("newlicense/getExpertLevel").then((res) => {
          let expertLevel = res.data.data.filter(function (e) {
            return e.code.includes("FED");
          });
          generalInfo.value.expertLevelId = expertLevel[0].id;
        });
      }
    });

    return {
      localData,
      localFileData,
      generalInfo,
      agreed,
      buttons,
      progress,
      showModal,
      totalSteps,
      totalSize,
      checkAgreement,
      back,
      isLoading,
      allowSave,
      checkFinalStatus,
      changeAgrement,
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
  background-color: #fff;
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
