<template>
  <div
    :class="
      isDarkMode
        ? 'container w-full mx-auto  text-white'
        : 'container w-full mx-auto  text-main-400'
    "
  >
    <!-- Heading start -->
    <header class="text-center mx-auto mb-2 sm:mb-4 mt-8">
      <h1 class="text-3xl mb-2 font-bold">
        {{ $t("Summary For Lost License") }}
      </h1>

      <h3 class="leading-relaxed font-light text-lg mx-auto pb-2">
        {{ $t("Here is the detail you have filled in so far") }}
      </h3>
    </header>
    <!-- End heading -->
    <!-- row -->
    <div class="grid grid-cols-1 gap-4">
      <div
        :class="
          isDarkMode
            ? 'py-2 bg-secondaryDark shadow-md sm:px-12 px-3 mb-2 sm:mb-12 mt-2 rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2'
            : 'py-2 bg-white sm:px-12 shadow-md px-3 mb-2 sm:mb-12 mt-2 rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2'
        "
      >
        <div class="border-b-2 mb-4">
          <div class="text-gray-900 mb-4 flex justify-center">
            <i class="fa fa-folder-open fa-3x"></i>
          </div>
          <div class="flex justify-center text-gray-900 mb-4">
            <h3 class="text-lg leading-normal mb-2 font-semibold">
              {{ $t("Application Detail") }}
            </h3>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b mb-2">
          <div>
            <h2 class="font-bold sm:text-xl text-lg">
              {{ $t("Applicant Type") }}
            </h2>
          </div>
          <div>
            <h3 class="text-base sm:text-lg">
              {{
                localData && localData.applicantType
                  ? localData.applicantType.name
                  : ""
              }}
            </h3>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b mb-2">
          <div>
            <h2 class="font-bold sm:text-xl text-lg">
              {{ $t("License Loss Date") }}
            </h2>
          </div>
          <div>
            <h3 class="text-base sm:text-lg">
              {{ localData && localData.loss_date ? localData.loss_date : "" }}
            </h3>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b">
          <div>
            <h2 class="font-bold sm:text-xl text-lg">
              {{ $t("The region in which the license is lost") }}
            </h2>
          </div>
          <div>
            <h3 class="text-base sm:text-lg">
              {{
                localData && localData.regionSelected
                  ? localData.regionSelected.name
                  : ""
              }}
            </h3>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-2 sm:mt-4 grid grid-cols-1 gap-4">
      <div
        :class="
          isDarkMode
            ? 'py-2 mb-2 sm:mb-4 bg-gray-50 border-b bg-secondaryDark shadow-md transform transition duration-300 ease-in-out hover:-translate-y-2'
            : 'py-2 mb-2 sm:mb-4 bg-gray-50 border-b bg-white transform shadow-md transition duration-300 ease-in-out hover:-translate-y-2'
        "
      >
        <div class="rounded-lg mb-4 w-full">
          <div class="text-gray-900 mb-4 flex justify-center">
            <i class="fa fa-folder fa-3x"></i>
          </div>
          <div class="flex justify-center text-gray-900 mb-4 border-b-2">
            <h3 class="text-lg leading-normal mb-2 border-b-2 font-semibold">
              {{ $t("Files Uploaded") }}
            </h3>
          </div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 sm:ml-4 sm:w-full"
          >
            <div
              class="mt-4 mb-2 rounded-md border sm:p-4"
              v-for="localFile in localFileData"
              :key="localFile.documenttype"
            >
              <div class="flex justify-center">
                <div class="mt-large rounded-md">
                  <a
                    :href="localFile.image"
                    :data-title="localFile.documenttype"
                    data-lightbox="example-2"
                  >
                    <img
                      :src="localFile.image"
                      class="w-full h-48 object-cover"
                    />
                  </a>

                  <h4 class="font-bold border-b m-2">
                    {{ $t("Document Type") }}
                  </h4>
                  <h5 class="m-2 text-lg">{{ localFile.documenttype }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mt-2 grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1 mdlg:grid-cols-1 sm:grid-cols-1"
    >
      <div
        :class="
          isDarkMode
            ? 'py-8 px-4 mb-12 shadow-md bg-secondaryDark transform rounded-lg mt-4 transition duration-300 ease-in-out hover:-translate-y-2'
            : 'py-8 px-4 mb-12 bg-white shadow-md transform rounded-lg mt-4 transition duration-300 ease-in-out hover:-translate-y-2'
        "
      >
        <div class="mb-4">
          <div class="flex justify-center">
            <label for="feedback" class="form-label inline-block mb-2 text-xl"
              >{{ $t("Feedback on the process and system") }}
              <span class="text-yellow-300">({{ $t("Optional") }} )</span>
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
            <h3 class="mb-2 localFileData text-xl    mt-2 sm:mt-0">
              {{
                $t(
                  "By checking here I hereby verify the documents and details filled in are legal."
                )
              }}.
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
                ? 'inline-block px-6 border text-main-400 hover:bg-main-400 hover:border-main-400 hover:text-white  mt-4 bg-white font-medium text-xs leading-tight uppercase rounded   transition  duration-150 ease-in-out'
                : 'inline-block px-6 disabled text-main-400  mt-4 bg-white font-medium text-xs leading-tight uppercase rounded   transition  duration-150 ease-in-out'
            "
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
            <h2 class="text-xl border-b-4">{{$t('Uploading')}}</h2>
          </div>

          <div class="modal-body">
            <div class="flex justify-center text-yellow-300 p-2 rounded-md">
              <h2 class="text-yellow-300 border rounded p-2 text-xl">
                {{$t('Total file size you have uploaded so far is')}}
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
                      "Please wait patiently as your files are being uploaded, if for any reason the files you uploaded are not successful you will be redirected to the submitted page automatically so you can re-attach your documents again"
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
  emits: ["darkMode", "changeActiveState", "changeActiveStateMinus"],
  setup(props, { emit }) {
    const store = useStore();
    const toast = useToast();
    const router = useRouter();
    const totalSteps = ref(100);
    let progress = computed(
      () => store.getters["lostLicenses/getUploadProgress"]
    );
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
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
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
        generalInfo.value.applicant_type_id =
          generalInfo.value.applicantType.id;
        generalInfo.value.residence_woreda =
          generalInfo.value.woredaSelected.id;

        if (
          generalInfo.value.woredaSelected &&
          generalInfo.value.woredaSelected.code
        ) {
          generalInfo.value.expertLevelId = 4;
        } else {
          generalInfo.value.expertLevelId = 3;
        }
        let license = {
          action: action,
          data: generalInfo.value,
        };
        showModal.value = true;
        store.dispatch("lostLicenses/addLostLicense", license).then((res) => {
          let licenseId = res.data.data.id;
          let payload = { document: formData, id: licenseId };
          store
            .dispatch("lostLicenses/uploadDocuments", payload)
            .then((res) => {
              isLoading.value = false;
              if (res.data) {
                localStorage.removeItem("LLApplicationData");
                localStorage.removeItem("applicantTypeSelected");
                indexedDB.deleteDatabase("LLdocumentUploads");
                toast.success("Applied successfuly", {
                  timeout: 5000,
                  position: "bottom-center",
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  icon: true,
                });

                router.push({ path: "/Applicant/LostLicense/submitted" });
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
      buttons.value = store.getters["lostLicenses/getButtons"];
      tempDocs.value = store.getters["lostLicenses/getTempDocs"];
      localData.value = window.localStorage.getItem("LLApplicationData")
        ? JSON.parse(window.localStorage.getItem("LLApplicationData"))
        : {};
      let request = indexedDB.open("LLdocumentUploads", 1);

      request.onerror = function () {
        console.error("Unable to open database.");
      };

      request.onsuccess = function () {
        let db = request.result;
        const tx = db.transaction("LLdocumentUploads", "readonly");
        const store = tx.objectStore("LLdocumentUploads");
        let getAllIDB = store.getAll();

        getAllIDB.onsuccess = function (evt) {
          localFileData.value =
            evt.target.result && evt.target.result[0]
              ? evt.target.result[0].data
              : {};

          localFileData.value.forEach((element) => {
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
        generalInfo.value.expert_level = 3;
      } else if (
        generalInfo.value.applicationType &&
        generalInfo.value.applicationType.id == 1
      ) {
        generalInfo.value.expert_level = 4;
      } else {
        generalInfo.value.expert_level = 3;
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
