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

    <div class="mt-8 ">
      <div class="flex-shrink w-full rounded-md">
        <div
          :class="
            isDarkMode
              ? 'bg-secondaryDark rounded-lg p-2 mb-4 w-full'
              : 'bg-white rounded-lg  p-2 mb-4 w-full'
          "
        >
          <div class="border-b-2 mb-4">
            <div class="text-gray-900 mb-4 flex justify-center">
              <i class="fa fa-folder fa-3x"></i>
            </div>
            <div class="flex justify-center text-gray-900 mb-4">
              <h3
                class="text-2xl sm:text-3xl leading-normal mb-2 font-semibold"
              >
                {{ $t("Files Uploaded") }}
              </h3>
            </div>
            <span class="text-lg" v-if="changedDocs && changedDocs.length > 0">
              {{ $t("New Files") }}
            </span>
          </div>

          <div
            :class="
              changedDocs && changedDocs.length > 0
                ? ' border-b mb-12 grid grid-cols-1 gap-4   sm:grid-cols-4   md:w-full '
                : ' mb-12 grid sm:grid-cols-4 gap-4  sm:w-full   md:w-full grid-cols-1'
            "
          >
            <div
              class="mt-4 mb-8 border-4 rounded-md transform transition duration-300 ease-in-out  hover:-translate-y-2"
              v-for="changed in changedDocs"
              :key="changed.id"
            >
              <div class="flex justify-center rounded-lg p-4">
                <div class="bg-white rounded-md border p-2">
                  <h3 class="text-grey-800 text-lg">{{ $t("Previous") }}</h3>
                  <a
                    :href="changed.prevFile"
                    :data-title="changed.docName"
                    data-lightbox="example-1"
                  >
                    <img
                      :src="changed.prevFile"
                      class="w-full h-48 object-cover"
                    />
                  </a>
                </div>

                <div class="bg-main-400 rounded-md ml-2 border p-2">
                  <span class="text-white"> {{ $t("New") }} </span>
                  <a
                    :href="changed.newFile"
                    :data-title="changed.docName"
                    data-lightbox="example-2"
                  >
                    <img
                      :src="changed.newFile"
                      class="w-full h-48 object-cover rounded-lg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header mb-0" id="headingOne">
                <button
                  class="relative flex items-center w-full py-4 px-5 text-white bg-grey-200 hover:text-main-400 hover:bg-white transition focus:outline-none hover:border-main-400 rounded-md"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {{ $t("Previously uploaded files") }}
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body py-4 px-5">
                  <div
                    class="grid grid-cols-1 gap-4 ml-4 sm:w-full sm:grid-cols-4"
                  >
                    <div
                      class="mt-4 mb-8 bg-white rounded-md transform transition duration-300 ease-in-out p-2 hover:-translate-y-2"
                      v-for="prev in localFileImages"
                      :key="prev.docName"
                    >
                      <h4 class="text-main-400 font-bold m-2">
                        {{ $t("Document Type") }}
                      </h4>
                      <h5 class="m-2 text-lg text-main-400">
                        {{ prev.documenttype }}
                      </h5>
                      <div class="flex justify-center rounded-lg p-4">
                        <div class="bg-white rounded-md p-2">
                          <a
                            :href="
                              prev && prev.image
                                ? prev.image
                                : prev && prev.filePath
                                ? googleApi + prev.filePath
                                : ''
                            "
                            :data-title="prev.documenttype"
                            data-lightbox="example-4"
                          >
                            <img
                              :src="
                                prev && prev.image
                                  ? prev.image
                                  : prev && prev.filePath
                                  ? googleApi + prev.filePath
                                  : ''
                              "
                              class="w-full h-48 object-cover"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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
            <label for="feedback" class="form-label inline-block mb-2 text-xl"
              >{{ $t("Feedback on the process and system") }}
              <span class="text-yellow-300">({{ $t("Optional") }})</span>
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
      <div class="flex justify-center mb-8">
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
  </div>
  <modal v-if="showModal" :isDarkMode="isDarkMode">
    <template v-slot:modalHeader>{{ $t("Uploading") }} </template>
    <template v-slot:modalBody>
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
        <div class="flex border justify-center text-yellow-300 p-2 rounded-md">
          <h2 class="text-xl">
            {{
              $t(
                " Please wait patiently as your files are being uploaded, if for any reason the files you uploaded are not successful you will be redirected to the submitted page automatically so you can re-attach your documents again"
              )
            }}
          </h2>
        </div>
      </div>
    </template>
  </modal>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
import { useRouter, useRoute } from "vue-router";
import { googleApi } from "@/composables/baseURL";
import Loading from "vue3-loading-overlay";
import modal from "../../../../sharedComponents/modal.vue";
import RadialProgress from "vue3-radial-progress";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  components: { Loading, RadialProgress, modal },
  emits: ["changeActiveState", "changeActiveStateMinus", "activeState"],
  setup(props, { emit }) {
    const store = useStore();
    const toast = useToast();
    const router = useRouter();
    const route = useRoute();
    const totalSteps = ref(100);
    let progress = computed(
      () => store.getters["lostLicenses/getUploadProgress"]
    );
    let isDarkMode = ref(JSON.parse(localStorage.getItem("darkMode")));
    let showModal = ref(false);
    let localData = ref({});
    let localFileData = ref({});
    let localFileImages = ref({});
    let isLoading = ref(false);
    let generalInfo = ref({});
    let agreed = ref(false);
    let documents = ref([]);
    let buttons = ref([]);
    let tempDocs = ref({});
    let allowSave = ref(false);
    let savedData = ref({});
    let changedDocs = ref([]);
    let prevDocs = ref([]);
    let professionChanged = ref(false);
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

      if (agreed.value == true) {
        let formData = new FormData();
        tempDocs.value.forEach((element, index) => {
          formData.append(index, element);
        });
        isLoading.value = true;
        showModal.value = true;
        generalInfo.value.applicant_type_id =
          generalInfo.value.applicantType.id;
        generalInfo.value.residence_woreda =
          generalInfo.value.woredaSelected.id;
        let license = {
          action: action,
          data: generalInfo.value,
        };
        store.dispatch("lostLicenses/editLostLicense", license).then(() => {
          let licenseId = route.params.id;
          let payload = { document: formData, id: licenseId };
          store
            .dispatch("lostLicenses/updateDocuments", payload)
            .then((res) => {
              isLoading.value = false;
              if (res.data.status == "Success") {
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
    const fetchApplicationStatuses = () => {
      store.dispatch("renewal/getApplicationStatuses").then((res) => {
        let results = res.data.data;

        let status = results.filter(function (e) {
          return e.code == "DRA";
        });
        buttons.value = status[0]["buttons"];
        buttons.value = buttons.value.filter((el) => el.code === "SUB");
      });
    };
    onMounted(() => {
      window.addEventListener("darkModeChanged", (data) => {
        isDarkMode.value = data.detail ? data.detail.content : "";
      });
      fetchApplicationStatuses();
      store
        .dispatch("lostLicenses/getLostLicenseById", route.params.id)
        .then((res) => {
          savedData.value = res.data.data;

          buttons.value = buttons.value.filter((ele) => ele.code != "AT");
          tempDocs.value = store.getters["lostLicenses/getTempDocs"];

          localData.value = window.localStorage.getItem("LLApplicationData")
            ? JSON.parse(window.localStorage.getItem("LLApplicationData"))
            : {};

          generalInfo.value = localData.value;
          generalInfo.value.feedback = "";
          if (
            generalInfo.value &&
            generalInfo.value.regionSelected &&
            generalInfo.value.regionSelected.code == "FED"
          ) {
            generalInfo.value.expertLevelId = 3;
          } else if (
            generalInfo.value.applicantType &&
            generalInfo.value.applicantType.id == 1
          ) {
            generalInfo.value.expertLevelId = 4;
          } else {
            generalInfo.value.expertLevelId = 3;
          }
          //Get images from indexed Db
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
              localFileImages.value = evt.target.result
                ? JSON.parse(
                    JSON.stringify(
                      evt.target.result[0] ? evt.target.result[0].data : {}
                    )
                  )
                : {};

              if (
                localFileImages.value &&
                localFileImages.value.length > 0 &&
                savedData.value.documents &&
                savedData.value.documents.length > 0
              ) {
                savedData.value.documents.forEach((ele) => {
                  localFileImages.value.forEach((newFile) => {
                    if (
                      newFile.documentCode &&
                      newFile.documentCode == ele.documentTypeCode
                    ) {
                      changedDocs.value.push({
                        docName: newFile.documentName,
                        prevFile: googleApi + ele.filePath,
                        newFile: newFile.image,
                        id: newFile.documentCode,
                      });
                    }
                  });
                });
              }

              if (localData.value.professionChanged == true) {
                professionChanged.value = true;
                // prevDocs.value = localFileImages.value;
                localFileImages.value.forEach((element) => {
                  if (!element.documentTypeCode) {
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
        });
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
      localFileImages,
      professionChanged,
      prevDocs,
      changedDocs,
      googleApi,
      totalSteps,
      progress,
      showModal,
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
</style>
