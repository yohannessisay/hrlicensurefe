<template>
  <div class="container xl:max-w-6xl mx-auto p-4">
    <!-- Heading start -->
    <header class="text-center mx-auto mb-12 lg:px-20">
      <h2 class="text-2xl leading-normal mb-2 font-bold text-main-400">
        Summary For Good Standing Letter
      </h2>

      <p class="text-main-400 leading-relaxed font-light text-xl mx-auto pb-2">
        Here is the detail you have filled in so far
      </p>
    </header>
    <!-- End heading -->
    <!-- row -->
    <div
      class="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 mdlg:grid-cols-2 sm:grid-cols-1"
    >
      <div
        class="py-8 px-12 mb-12 bg-white mt-8 shadow-lg rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2"
      >
        <div class="border-b-2 text-main-400 mb-4">
          <div class="text-gray-900 mb-4 flex justify-center">
            <i class="fa fa-folder-open fa-3x text-main-400"></i>
          </div>
          <div class="flex justify-center text-gray-900 mb-4">
            <h3
              class="text-lg text-main-400 leading-normal mb-2 font-semibold text-grey-800"
            >
              Application Detail
            </h3>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="text-main-400 font-bold sm:text-sm mdlg:text-base lg:text-base md:text-base"
            >
              Applicant Type</span
            >
          </div>
          <div>
            <span class="text-grey-800 sm:text-sm">
              {{
                localData && localData.applicantType ? localData.applicantType.name : ""
              }}</span
            >
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="text-main-400 font-bold sm:text-sm mdlg:text-base lg:text-base md:text-base"
            >
              Department</span
            >
          </div>
          <div>
            <span class="text-grey-800 sm:text-sm">
              {{
                localData && localData.department ? localData.department.name : ""
              }}</span
            >
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="text-main-400 font-bold sm:text-sm mdlg:text-base lg:text-base md:text-base"
              >Profession</span
            >
          </div>
          <div>
            <span class="text-grey-800 sm:text-sm">
              {{
                localData && localData.GSProfessionals
                  ? localData.GSProfessionals.professionalTypes.name
                  : ""
              }}
            </span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="text-main-400 font-bold sm:text-sm mdlg:text-base lg:text-base md:text-base"
              >Education Level</span
            >
          </div>
          <div>
            <span class="text-grey-800 sm:text-sm">
              {{
                localData && localData.GSProfessionals
                  ? localData.GSProfessionals.educationLevel.name
                  : ""
              }}
            </span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="text-main-400 font-bold sm:text-sm mdlg:text-base lg:text-base md:text-base"
            >
              Applicant Title</span
            >
          </div>
          <div>
            <span class="text-grey-800 sm:text-sm">
              {{
                localData && localData.applicantTitle ? localData.applicantTitle.name : ""
              }}</span
            >
          </div>
        </div>
      </div>

      <div
        class="py-8 px-12 mb-12 bg-white rounded-lg mt-8 text-main-400 transform transition duration-300 ease-in-out shadow-lg hover:-translate-y-2"
      >
        <div class="border-b-2 text-main-400 mb-4">
          <div class="text-gray-900 mb-4 flex justify-center">
            <i class="fa fa-envelope fa-3x text-main-400"></i>
          </div>
          <div class="flex justify-center text-gray-900 mb-4">
            <h3
              class="text-lg text-main-400 leading-normal mb-2 font-semibold text-grey-800"
            >
              Letter Detail
            </h3>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="text-main-400 font-bold sm:text-sm mdlg:text-base lg:text-base md:text-base"
            >
              Who issued the letter</span
            >
          </div>
          <div>
            <span class="text-grey-800 sm:text-sm">
              {{ localData && localData.whoIssued ? localData.whoIssued.name : "" }}</span
            >
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="text-main-400 font-bold sm:text-sm mdlg:text-base lg:text-base md:text-base"
              >To whom the letter is written for</span
            >
          </div>
          <div>
            <span class="text-grey-800 sm:text-sm">
              {{
                localData && localData.whomGoodStandingFor
                  ? localData.whomGoodStandingFor
                  : ""
              }}</span
            >
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="text-main-400 font-bold sm:text-sm mdlg:text-base lg:text-base md:text-base"
              >License Registration Number</span
            >
          </div>
          <div>
            <span class="text-grey-800 sm:text-sm">
              {{
                localData && localData.licenseRegistrationNumber
                  ? localData.licenseRegistrationNumber
                  : ""
              }}</span
            >
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="text-main-400 font-bold sm:text-sm mdlg:text-base lg:text-base md:text-base"
            >
              License IssuedDate</span
            >
          </div>
          <div>
            <span class="text-grey-800 sm:text-sm">
              {{
                localData && localData.licenseIssuedDate
                  ? localData.licenseIssuedDate
                  : ""
              }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <div
      class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1 mdlg:grid-cols-1 sm:grid-cols-1"
    >
      <div class="bg-white flex-shrink px-4 w-full rounded-md shadow-xl">
        <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-white">
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
            <span class="text-lg" v-if="changedDocs && changedDocs.length > 0">
              New files</span
            >
          </div>

          <div
            :class="
              changedDocs && changedDocs.length > 0
                ? ' border-b mb-12 grid grid-cols-4 gap-4 ml-4 sm:w-full sm:grid-cols-1 md:w-full mdlg:grid-cols-2 lg:w-full md:grid-cols-4 mdlg:w-full lg:grid-cols-4'
                : ' mb-12 grid grid-cols-4 gap-4 ml-4 sm:w-full sm:grid-cols-1 md:w-full mdlg:grid-cols-2 lg:w-full md:grid-cols-4 mdlg:w-full lg:grid-cols-4'
            "
          >
            <div
              class="mt-4 mb-8 bg-white border-4 text-main-400 shadow-xl rounded-md transform transition duration-300 ease-in-out p-2 hover:-translate-y-2"
              v-for="changed in changedDocs"
              :key="changed.id"
            >
              <h4 class="text-main-400 font-bold m-2">Document Type</h4>
              <h6 class="m-2">{{ changed.docName }}</h6>
              <div class="flex justify-center rounded-lg p-4">
                <div class="bg-white rounded-md border p-2">
                  Previous
                  <a
                    :href="changed.prevFile"
                    :data-title="changed.docName"
                    data-lightbox="example-1"
                  >
                    <img :src="changed.prevFile" class="w-full h-48 object-cover" />
                  </a>
                </div>

                <div class="bg-main-400 rounded-md ml-2 border p-2">
                  <span class="text-white"> New</span>
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
            <div class="accordion-item bg-white">
              <h2 class="accordion-header mb-0" id="headingOne">
                <button
                  class="relative flex items-center w-full py-4 px-5 text-white bg-grey-200 hover:text-main-400 hover:bg-white transition focus:outline-none hover:border-main-400 rounded-md"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Previously uploaded files
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
                    class="grid grid-cols-4 gap-4 ml-4 sm:w-full sm:grid-cols-1 md:w-full mdlg:grid-cols-2 lg:w-full md:grid-cols-4 mdlg:w-full lg:grid-cols-4"
                  >
                    <div
                      class="mt-4 mb-8 bg-white shadow-xl rounded-md transform transition duration-300 ease-in-out p-2 hover:-translate-y-2"
                      v-for="prev in localFileImages"
                      :key="prev.docName"
                    >
                      <h4 class="text-main-400 font-bold m-2">Document Type</h4>
                      <h6 class="m-2">{{ prev.documenttype }}</h6>
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

    <div
      class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1 mdlg:grid-cols-1 sm:grid-cols-1"
    >
      <div
        class="py-8 px-12 mb-12 bg-white text-main-400 transform rounded-lg shadow-lg mt-4 transition duration-300 ease-in-out hover:-translate-y-2"
      >
        <div class="mb-4">
          <div class="flex justify-center text-gray-900 mb-4">
            <div class="form-check">
              <input
                class="form-check-input appearance-none h-5 w-5 border rounded-sm bg-white checked:bg-main-400 checked:border-main-400 focus:outline-none transition duration-200 mt-1 text-main-400 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                :value="agreed"
                @click="changeAgrement()"
                id="agreed"
              />
            </div>
            <h3
              class="text-grey-800 mb-2localFileData sm:text-xs lgmd:text-base lg:text-base md:text-base"
            >
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
          <div class="vld-parent mt-4">
            <loading
              :active="isLoading"
              :is-full-page="false"
              :color="'#2F639D'"
              :opacity="1"
            ></loading>
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
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-end w-1/2 mb-8">
      <span v-for="button in buttons" :key="button.id">
        <button
          v-if="button.action != 'DraftEvent'"
          type="button"
          :class="
            allowSave
              ? 'inline-block px-6 border text-main-400 hover:bg-main-400 hober:border-main-400 hover:text-white  mt-4 bg-white font-medium text-xs leading-tight uppercase rounded shadow-lg transition  duration-150 ease-in-out'
              : 'inline-block px-6 disabled text-main-400  mt-4 bg-white font-medium text-xs leading-tight uppercase rounded shadow-lg transition  duration-150 ease-in-out'
          "
          @click="checkFinalStatus(button.action)"
        >
          <i class="fa fa-save"></i>
          {{ button.name }}
        </button>
      </span>

      <button
        class="inline-block px-6 text-main-400 mt-4 bg-white font-medium text-xs leading-tight uppercase rounded shadow-lg transition duration-150 ease-in-out"
        @click="back()"
      >
        back
      </button>
    </div>

    <!-- end row -->
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
import { useRouter, useRoute } from "vue-router";
import { googleApi } from "@/composables/baseURL";
import Loading from "vue3-loading-overlay";

import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  components: { Loading },
  setup(props, { emit }) {
    const store = useStore();
    const toast = useToast();
    const router = useRouter();
    const route = useRoute();
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
            applicantTypeId: generalInfo.value.applicantTypeId
              ? generalInfo.value.applicantTypeId
              : generalInfo.value.applicantType
              ? generalInfo.value.applicantType.id
              : null,
            applicationStatusId: generalInfo.value.applicationStatusId,
            residenceWoredaId: generalInfo.value.woredaSelected
              ? generalInfo.value.woredaSelected.id
              : null,
            applicantTitleId: generalInfo.value.applicantTitleId
              ? generalInfo.value.applicantTitleId
              : generalInfo.value.applicantTitle
              ? generalInfo.value.applicantTitle.id
              : null,
            whomGoodStandingFor: generalInfo.value.whomGoodStandingFor
              ? generalInfo.value.whomGoodStandingFor
              : "",
            applicantPositionId: generalInfo.value.applicantPositionId
              ? generalInfo.value.applicantPositionId
              : generalInfo.value.applicantPosition
              ? generalInfo.value.applicantPosition.id
              : null,
            licenseIssuedDate: generalInfo.value.licenseIssuedDate
              ? generalInfo.value.licenseIssuedDate
              : null,
            whoIssuedId: generalInfo.value.whoIssuedId
              ? generalInfo.value.whoIssuedId.id
              : "",
            licenseRegistrationNumber: generalInfo.value.licenseRegistrationNumber
              ? generalInfo.value.licenseRegistrationNumber
              : "",
            professionType: {
              professionTypeId:
                generalInfo.value.GSProfessionals &&
                generalInfo.value.GSProfessionals.professionalTypes
                  ? generalInfo.value.GSProfessionals.professionalTypes.id
                  : generalInfo.value.GSProfessionals.professionalTypeId
                  ? generalInfo.value.GSProfessionals.professionalTypeId
                  : null,
              educationLevelId:
                generalInfo.value.GSProfessionals &&
                generalInfo.value.GSProfessionals.educationLevel
                  ? generalInfo.value.GSProfessionals.educationLevel.id
                  : generalInfo.value.GSProfessionals.educationLevelId
                  ? generalInfo.value.GSProfessionals.educationLevelId
                  : null,
            },
            expertLevelId: generalInfo.value.expertLevelId
              ? generalInfo.value.expertLevelId
              : null,
            islegal: true,
            otherProfessionalType: generalInfo.value.otherProfessionType
              ? generalInfo.value.otherProfessionType
              : "",
            otherProfessionalTypeAmharic: generalInfo.value.otherProfessionTypeAmharic
              ? generalInfo.value.otherProfessionTypeAmharic
              : "",
            departmentId: generalInfo.value.department
              ? generalInfo.value.department.id
              : generalInfo.value.departmentId
              ? generalInfo.value.departmentId
              : null,
            feedback: generalInfo.value.feedback ? generalInfo.value.feedback : "",
            id: route.params.id,
          },
        };
        store.dispatch("goodstanding/editGoodstandingLicense", license).then(() => {
          let licenseId = route.params.id;
          let payload = { document: formData, id: licenseId };
          store
            .dispatch("goodstanding/updateDocuments", payload)
            .then((res) => {
              isLoading.value = false;
              if (res.data.status == "Success") {
                localStorage.removeItem("GSApplicationData");
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
    const fetchApplicationStatuses = () => {
      store.dispatch("renewal/getApplicationStatuses").then((res) => {
        let results = res.data.data;

        let status = results.filter(function (e) {
          return e.code == "DRA";
        });
        buttons.value = status[0]["buttons"];
      });
    };
    onMounted(() => {
      fetchApplicationStatuses();
      store
        .dispatch("goodstanding/getGoodStandingLicenseById", route.params.id)
        .then((res) => {
          savedData.value = res.data.data;

          buttons.value = buttons.value.filter((ele) => ele.code != "AT");
          tempDocs.value = store.getters["goodstanding/getTempDocs"];

          localData.value = window.localStorage.getItem("GSApplicationData")
            ? JSON.parse(window.localStorage.getItem("GSApplicationData"))
            : {};

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
          //Get images from indexed Db
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
              localFileImages.value = evt.target.result
                ? JSON.parse(
                    JSON.stringify(evt.target.result[0] ? evt.target.result[0].data : {})
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
    return {
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
