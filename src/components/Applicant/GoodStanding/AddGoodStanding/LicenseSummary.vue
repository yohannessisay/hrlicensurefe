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
      class="
        grid grid-cols-2
        gap-4
        md:grid-cols-2
        lg:grid-cols-2
        mdlg:grid-cols-2
        sm:grid-cols-1
      "
    >
      <div
        class="
          py-8
          px-12
          mb-12
          bg-white
          mt-8
          shadow-lg
          rounded-lg
          transform
          transition
          duration-300
          ease-in-out
          hover:-translate-y-2
        "
      >
        <div class="border-b-2 text-main-400 mb-4">
          <div class="text-gray-900 mb-4 flex justify-center">
            <i class="fa fa-folder-open fa-3x text-main-400"></i>
          </div>
          <div class="flex justify-center text-gray-900 mb-4">
            <h3
              class="
                text-lg text-main-400
                leading-normal
                mb-2
                font-semibold
                text-black
              "
            >
              Application Detail
            </h3>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="
                text-main-400
                font-bold
                sm:text-sm
                mdlg:text-base
                lg:text-base
                md:text-base
              "
            >
              Applicant Type</span
            >
          </div>
          <div>
            <span class="text-black sm:text-sm">
              {{
                localData && localData.applicantTypeId
                  ? localData.applicantTypeId.name
                  : ""
              }}</span
            >
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="
                text-main-400
                font-bold
                sm:text-sm
                mdlg:text-base
                lg:text-base
                md:text-base
              "
            >
              Department</span
            >
          </div>
          <div>
            <span class="text-black sm:text-sm">
              {{
                localData && localData.departmentId
                  ? localData.departmentId.name
                  : ""
              }}</span
            >
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="
                text-main-400
                font-bold
                sm:text-sm
                mdlg:text-base
                lg:text-base
                md:text-base
              "
              >Profession</span
            >
          </div>
          <div>
            <span class="text-black sm:text-sm">
              {{
                localData && localData.professionTypeId
                  ? localData.professionTypeId.name
                  : ""
              }}
            </span>
          </div>
        </div>
        <!-- <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="
                text-main-400
                font-bold
                sm:text-sm
                mdlg:text-base
                lg:text-base
                md:text-base
              "
              >Education Level</span
            >
          </div>
          <div>
            <span class="text-black sm:text-sm">
              {{
                localData && localData.professionType.educationLevelId
                  ? localData.professionType.educationLevelId.name
                  : ""
              }}
              
              </span
            >
          </div>
        </div> -->
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="
                text-main-400
                font-bold
                sm:text-sm
                mdlg:text-base
                lg:text-base
                md:text-base
              "
            >
              Applicant Title</span
            >
          </div>
          <div>
            <span class="text-black sm:text-sm">
              {{
                localData && localData.applicantTitleId
                  ? localData.applicantTitleId.name
                  : ""
              }}</span
            >
          </div>
        </div>
      </div>

      <div
        class="
          py-8
          px-12
          mb-12
          bg-white
          rounded-lg
          mt-8
          text-main-400
          transform
          transition
          duration-300
          ease-in-out
          shadow-lg
          hover:-translate-y-2
        "
      >
        <div class="border-b-2 text-main-400 mb-4">
          <div class="text-gray-900 mb-4 flex justify-center">
            <i class="fa fa-envelope fa-3x text-main-400"></i>
          </div>
          <div class="flex justify-center text-gray-900 mb-4">
            <h3
              class="
                text-lg text-main-400
                leading-normal
                mb-2
                font-semibold
                text-black
              "
            >
              Letter Detail
            </h3>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="
                text-main-400
                font-bold
                sm:text-sm
                mdlg:text-base
                lg:text-base
                md:text-base
              "
            >
              Who issued the letter</span
            >
          </div>
          <div>
            <span class="text-black sm:text-sm">
              {{
                localData && localData.whoIssuedId ? localData.whoIssuedId.name : ""
              }}</span
            >
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 border-b text-grey-200">
          <div>
            <span
              class="
                text-main-400
                font-bold
                sm:text-sm
                mdlg:text-base
                lg:text-base
                md:text-base
              "
              >To whom the letter is written for</span
            >
          </div>
          <div>
            <span class="text-black sm:text-sm">
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
              class="
                text-main-400
                font-bold
                sm:text-sm
                mdlg:text-base
                lg:text-base
                md:text-base
              "
              >License Registration Number</span
            >
          </div>
          <div>
            <span class="text-black sm:text-sm">
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
              class="
                text-main-400
                font-bold
                sm:text-sm
                mdlg:text-base
                lg:text-base
                md:text-base
              "
            >
              License IssuedDate</span
            >
          </div>
          <div>
            <span class="text-black sm:text-sm">
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
      class="
        mt-8
        grid grid-cols-1
        gap-4
        md:grid-cols-1
        lg:grid-cols-1
        mdlg:grid-cols-1
        sm:grid-cols-1
      "
    >
      <div
        class="
          py-8
          px-12
          mb-12
          bg-gray-50
          border-b border-white
          transform
          transition
          duration-300
          ease-in-out
          hover:-translate-y-2
        "
      >
        <div class="bg-white shadow-lg rounded-lg p-2 mb-8">
          <div class="text-gray-900 mb-4 flex justify-center">
            <i class="fa fa-folder fa-3x text-main-400"></i>
          </div>
          <div
            class="
              flex
              justify-center
              text-gray-900
              mb-4
              border-b-2
              text-main-400
            "
          >
            <h3
              class="
                text-lg text-main-400
                leading-normal
                mb-2
                border-b-2
                font-semibold
                text-black
              "
            >
              Files Uploaded
            </h3>
          </div>
          <div
            class="
              grid grid-cols-4
              gap-4
              mt-4
              ml-4
              sm:w-full sm:grid-cols-1
              md:w-full
              mdlg:grid-cols-2
              lg:w-full
              md:grid-cols-4
              mdlg:w-full
              lg:grid-cols-4
            "
          >
            <div
              class="mt-4 mb-8 bg-white shadow-lg rounded-md p-4"
              v-for="localFile in localFileData"
              :key="localFile.documenttype"
            >
              <div class="flex justify-center">
                <div class="mt-large bg-white rounded-md">
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

                  <h4 class="text-main-400 font-bold border-b m-2">
                    Document Type
                  </h4>
                  <h6 class="m-2">{{ localFile.documenttype }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="
        mt-8
        grid grid-cols-1
        gap-4
        md:grid-cols-1
        lg:grid-cols-1
        mdlg:grid-cols-1
        sm:grid-cols-1
      "
    >
      <div
        class="
          py-8
          px-12
          mb-12
          bg-white
          text-main-400
          transform
          rounded-lg
          shadow-lg
          mt-4
          transition
          duration-300
          ease-in-out
          hover:-translate-y-2
        "
      >
        <div class="mb-4">
          <div class="flex justify-center text-gray-900 mb-4">
            <div class="form-check">
              <input
                class="
                  form-check-input
                  appearance-none
                  h-5
                  w-5
                  border
                  rounded-sm
                  bg-white
                  checked:bg-main-400 checked:border-main-400
                  focus:outline-none
                  transition
                  duration-200
                  mt-1
                  text-main-400
                  align-top
                  bg-no-repeat bg-center bg-contain
                  float-left
                  mr-2
                  cursor-pointer
                "
                type="checkbox"
                :value="agreed"
                @click="changeAgrement()"
                id="agreed"
              />
            </div>
            <h3
              class="
                text-black
                mb-2localFileData
                sm:text-xs
                lgmd:text-base
                lg:text-base
                md:text-base
              "
            >
              By checking here I hereby verify the documents and details filled
              in are legal.
            </h3>
          </div>
          <div class="flex justify-center">
            <label
              for="feedback"
              class="form-label inline-block mb-2 text-main-400"
              >Feedback on the process and system
              <span class="text-red-200">(required*)</span>
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
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  border border-solid border-main-400
                  rounded
                  focus:border-main-400
                  transition
                  ease-in-out
                  m-0
                  focus:outline-none
                "
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

    <div class="flex justify-center w-full mb-8">
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
        <button
          v-if="button.action == 'DraftEvent'"
          type="button"
          class="
            inline-block
            px-6
            border
            text-main-400
            hover:bg-main-400
            hober:border-main-400
            hover:text-white
            mt-4
            bg-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-lg
            transition
            duration-150
            ease-in-out
          "
          @click="checkFinalStatus(button.action)"
        >
          <i class="fa fa-save"></i>
          {{ button.name }}
        </button>
      </span>

      <button
        class="
          inline-block
          px-6
          text-main-400
          mt-4
          bg-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-lg
          transition
          duration-150
          ease-in-out
        "
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
import { useRouter } from "vue-router";

import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  components: { Loading },
  setup(props, { emit }) {
    const store = useStore();
    const toast = useToast();
    const router = useRouter();
    let localData = ref({});
    let localFileData = ref({});
    let isLoading = ref(false);
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
            whoIssued: generalInfo.value.whoIssued
              ? generalInfo.value.whoIssued
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
            islegal: true,

            departmentId: generalInfo.value.departmentId.id
              ? generalInfo.value.departmentId.id
              : null,
            feedback: generalInfo.value.feedback
              ? generalInfo.value.feedback
              : "",
          },
        };
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
                  toast.success("Applied successfuly", {
                    timeout: 5000,
                    position: "bottom-center",
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    icon: true,
                  });
                  if (action == "DraftEvent") {
                    router.push({ path: "/Applicant/GoodStanding/draft" });
                    location.reload();
                  } else {
                    router.push({ path: "/Applicant/GoodStanding/submitted" });
                    location.reload();
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
          localFileData.value = evt.target.result
            ? evt.target.result[0].data
            : {};
        };
      };
      generalInfo.value = localData.value;
      generalInfo.value.feedback = "";
      if (generalInfo.value.applicantTypeId.id == 1) {
        store.dispatch("goodstanding/getExpertLevel").then((res) => {
          let expertLevel = res.data.data.filter(function (e) {
            return e.code.includes("REG");
          });
          generalInfo.value.expertLevelId = expertLevel[0].id;
        });
      } else {
        store.dispatch("goodstanding/getExpertLevel").then((res) => {
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
      isLoading,
      buttons,
      checkFinalStatus,
      changeAgrement,
      checkAgreement,
      back,
      allowSave,
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
