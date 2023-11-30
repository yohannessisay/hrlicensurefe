<template>
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="generatePdf"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="generatePdfLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-xl relative w-auto pointer-events-none"
    >
      <div
        class="modal-content border-none relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div
          class="modal-header flex flex-shrink-0 items-center justify-between p-2 rounded-t-md"
        ></div>

        <div class="modal-body relative p-4">
          <div class="vld-parent">
            <loading
              :active="isLoading"
              :can-cancel="true"
              :is-full-page="false"
              :color="'#2F639D'"
              :opacity="0.7"
            ></loading>
            <froala
              id="edit"
              :tag="'textarea'"
              :config="config"
              v-model:value="model"
            ></froala>
            <div id="printedDiv" class="grow-0 shrink-0 basis-auto w-full px-8">
              <div :v-html="model"></div>
            </div>
          </div>
        </div>

        <div
          class="modal-footer p-2 flex flex-shrink-0 flex-wrap items-center justify-end border-t border-grey-100 rounded-b-md"
        >
          <a
            class="py-3 mr-2 cursor-pointer inline-block px-6 text-white font-medium text-xs bg-primary-700 leading-tight uppercase rounded hover:bg-white hover:text-primary-700 transition duration-150 ease-in-out"
            @click="printPdf"
          >
            <i class="fa fa-check"></i>
            Generate
          </a>
          <a
            class="py-3 w-auto cursor-pointer inline-block px-6 text-white font-medium text-xs bg-primary-700 leading-tight uppercase rounded hover:border-primary-600 hover:bg-white hover:text-primary-700 transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
          >
            <i class="fa fa-times-circle"></i>
            Close
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import moment from "moment";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import STATIC_CERTIFICATE_URL from "../../../../../sharedComponents/constants/message.js";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";

export default {
  props: ["modalDataGenerate"],
  components: { Loading },
  computed: {
    moment: () => moment,
  },

  setup(props) {
    const store = useStore();
    const toast = useToast();
    let isLoading = ref(false);
    let myRegion = ref(true);
    const expertLevelId = JSON.parse(localStorage.getItem("allAdminData")).expertLevelId;

    const adminRegionId = JSON.parse(localStorage.getItem("allAdminData")).regionId;

    let show = ref(false);
    let qrSrc = ref("");
    let showLoading = ref(false);
    let isUserApproved = ref(false);

    let isGoodStanding = ref(false);

    let goodStandingUser = ref({});
    let userProfile = ref({
      name: "",
      fatherName: "",
      grandFatherName: "",
      gender: "",
      phoneNumber: "",
      email: "",
      maritalStatus: "",
      nationality: "",
      dateOfBirth: "",
    });
    let applicantPosition = ref("-");

    let license = computed(() => props.modalDataGenerate);

    let applicantId = ref("");
    let applicantTypeId = ref("");
    let education = ref({
      departmentId: "",
      institutionId: "",
    });
    let licenseId = ref("");
    let activeClass = ref("active");
    let errorClass = ref("text-danger");
    let dataFetched = ref(false);
    let showFlash = ref(false);
    let showErrorFlash = ref(false);
    let profile = ref({});
    let applicationType = ref("");
    let getReviewId = ref(0);
    let modalData = computed(() => props.modalDataGenerate);
    let tempModel = computed(
      () => `<br> 
      <div class="grid grid-cols-2 mt-32"><div class="flex justify-start mt-1" contenteditable="false"> <img src="${
        qrSrc.value
      }" alt="" style="height: 120px; width: 120px" /></div></div>
   <h5   style='box-sizing: border-box; border-width: 0px; border-style: solid; border-color: currentcolor; margin: 2rem 0px 0px; padding: 0px; font-family: "Times New Roman", sans-serif !important; font-weight: 700; font-size: 20px; letter-spacing: 0.3px; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;' id="isPasted">To:${
     modalData.value ? modalData.value.whomGoodStandingFor : ""
   }</h5><div   style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: currentcolor; margin: 0px; padding: 0px; font-family: Dosis-Bold, sans-serif; font-weight: 800; font-size: 16px; letter-spacing: 0.3px; display: flex; justify-content: center; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><h5   style='box-sizing: border-box; border-width: 0px; border-style: solid; border-color: currentcolor; margin: 1rem 0px 2rem; padding: 0px; font-family: "Times New Roman", sans-serif !important; font-weight: 700; font-size: 20px; letter-spacing: 0.3px;'>LETTER OF GOOD STANDING</h5></div><div   style="box-sizing: border-box; border-width: 0px; border-style: solid; border-color: currentcolor; margin: 0px; padding: 0px; font-family: Dosis-Bold, sans-serif; font-weight: 800; font-size: 16px; letter-spacing: 0.3px; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><h5   style='box-sizing: border-box; border-width: 0px; border-style: solid; border-color: currentcolor; margin: 0px; padding: 0px; font-family: "Times New Roman", sans-serif !important; font-weight: 700; font-size: 20px; letter-spacing: 0.3px;'>This letter of good standing and confirmation of registration is written upon the request of  ${
        modalData.value && modalData.value.applicantTitle
          ? modalData.value.applicantTitle.name
          : ""
      }. ${
        modalData.value && modalData.value.profile && modalData.value.profile.name
          ? modalData.value.profile.name
          : ""
      } ${
        modalData.value && modalData.value.profile && modalData.value.profile.fatherName
          ? modalData.value.profile.fatherName
          : ""
      } ${
        modalData.value &&
        modalData.value.profile &&
        modalData.value.profile.grandFatherName
          ? modalData.value.profile.grandFatherName
          : ""
      } </h5><h5   style='box-sizing: border-box; border-width: 0px; border-style: solid; border-color: currentcolor; margin: 0.75rem 0px 0px; padding: 0px; font-family: "Times New Roman", sans-serif !important; font-weight: 700; font-size: 20px; letter-spacing: 0.3px;'>ATO. daro cala daraje has been registered as a ${
        modalData.value &&
        modalData.value.GSProfessionals &&
        modalData.value.GSProfessionals.professionalTypes &&
        modalData.value.GSProfessionals.professionalTypes.name == "other"
          ? modalData.value.GSProfessionals.otherProfessionType
          : modalData.value.GSProfessionals &&
            modalData.value.GSProfessionals.professionalTypes
          ? modalData.value.GSProfessionals.professionalTypes.name
          : ""
      }, on ${
        modalData.value
          ? moment(modalData.value ? modalData.value.licenseIssuedDate : "").format(
              "MMMM D, YYYY"
            )
          : ""
      } by ${
        modalData.value && modalData.value.whoIssued
          ? modalData.value.whoIssued.name + ", "
          : ""
      } which is the responsible organ for the registration and licensing of health professionals, and the registration number is ${
        modalData.value ? modalData.value.licenseRegistrationNumber : ""
      }. From __/__/__ to __/__/__ has been working here in Ethiopia.</h5><h5   style='box-sizing: border-box; border-width: 0px; border-style: solid; border-color: currentcolor; margin: 1rem 0px 0px; padding: 0px; font-family: "Times New Roman", sans-serif !important; font-weight: 700; font-size: 20px; letter-spacing: 0.3px;'>Since his registration, till ${new Date()
        .toISOString()
        .slice(
          0,
          10
        )}, he has no reported medico-legal records and malpractices while he has practiced his medical profession in Ethiopia.</h5><h5  style='box-sizing: border-box; border-width: 0px; border-style: solid; border-color: currentcolor; margin: 1rem 0px 0px; padding: 0px; font-family: "Times New Roman", sans-serif !important; font-weight: 700; font-size: 20px; letter-spacing: 0.3px;'>Hence we appreciate any assistance, that will be rendered to  ${
        modalData.value && modalData.value.profile && modalData.value.profile.name
          ? modalData.value.profile.name
          : ""
      } ${
        modalData.value && modalData.value.profile && modalData.value.profile.fatherName
          ? modalData.value.profile.fatherName
          : ""
      } ${
        modalData.value &&
        modalData.value.profile &&
        modalData.value.profile.grandFatherName
          ? modalData.value.profile.grandFatherName
          : ""
      } </h5></div><h5   style='box-sizing: border-box; border-width: 0px; border-style: solid; border-color: currentcolor; margin: 3rem 0px 12rem; padding: 0px; font-family: "Times New Roman", sans-serif !important; font-weight: 700; font-size: 20px; letter-spacing: 0.3px; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; white-space: normal; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;'>With best regards</h5>`
    );
    let model = ref(tempModel);
    const printPdf = async () => {
      if (license.value.isReprint == false) {
        license.value.isReprint = true;
        license.value.isLicenseGenerated = true;
        let req = {
          data: { ...license.value, isLicenseGenerated: true },
        };

        store
          .dispatch("reviewer/editGoodStanding", req)
          .then((res) => {
            if (res.statusText == "Created") {
              toast.success("Letter updated successfully", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              isLoading.value = false;
            } else {
              toast.error(res, {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              isLoading.value = false;
            }
          })
          .catch((err) => {
            console.log(err);
            isLoading.value = false;
          });
      }
    };

    if (
      modalData.value &&
      modalData.value.applicationStatus &&
      modalData.value.applicationStatus.code == "APP"
    ) {
      isUserApproved.value = true;
    }
    licenseId.value = modalData.value ? modalData.value.id : "";
    applicationType.value =
      modalData.value && modalData.value.applicationType
        ? modalData.value.applicationType.name
        : "";
    showLoading.value = true;
    isGoodStanding.value = true;

    license.value = modalData.value ? modalData.value : {};
    goodStandingUser.value = modalData.value;
    if (
      goodStandingUser.value &&
      goodStandingUser.value.woreda != null &&
      goodStandingUser.value.woreda.zone != null &&
      goodStandingUser.value.woreda.zone.region != null
    ) {
      if (adminRegionId != goodStandingUser.value.woreda.zone.region.id) {
        myRegion.value = false;
      }
    } else {
      if (expertLevelId != goodStandingUser?.value?.expertLevelId) {
        myRegion.value = false;
      }
    }

    userProfile.value.name =
      modalData.value && modalData.value.profile ? modalData.value.profile.name : "";
    userProfile.value.fatherName =
      modalData.value && modalData.value.profile
        ? modalData.value.profile.fatherName
        : "";
    userProfile.value.grandFatherName =
      modalData.value && modalData.value.profile
        ? modalData.value.profilegrandFatherName
        : "";
    userProfile.value.gender =
      modalData.value && modalData.value.profile ? modalData.value.profile.gender : "";

    const apPosition = ref(modalData.value ? modalData.value.applicantPosition : {});
    if (apPosition.value) {
      applicantPosition.value = apPosition.value.name ? apPosition.value.name : "-";
    }
    getReviewId.value = modalData.value ? modalData.value.reviewerId : "";
    show.value = true;
    let config = ref({
      toolbarButtons: [
        "fullscreen",
        "bold",
        "italic",
        "underline",
        "strikeThrough",
        "subscript",
        "superscript",
        "|",
        "fontFamily",
        "fontSize",
        "color",
        "inlineStyle",
        "paragraphStyle",
        "|",
        "paragraphFormat",
        "align",
        "formatOL",
        "formatUL",
        "outdent",
        "indent",
        "quote",
        "-",
        "insertTable",
        "|",
        "emoticons",
        "specialCharacters",
        "insertHR",
        "selectAll",
        "clearFormatting",
        "|",
        "print",
        "help",
        "html",
        "|",
        "undo",
        "redo",
        "trackChanges",
        "markdown",
      ],
      events: {
        initialized: async function () {
          const printButton = document.getElementById("print-1");
          if (printButton) {
            printButton.addEventListener("click", function (event) {
              event.preventDefault();
            });
          }

          let staticUrl = STATIC_CERTIFICATE_URL;
          let userId =
            modalData.value && modalData.value.profile
              ? modalData.value.profile.id
              : null;
          let applicationId = modalData.value ? modalData.value.id : null;
          let applicationType = "GoodStanding";
          const qrParam = { url: null };
          qrParam.url =
            staticUrl + "/" + applicationType + "/" + userId + "/" + applicationId;
          console.log(qrParam.url);
          await store.dispatch("reviewer/getQrCode", qrParam).then((res) => {
            qrSrc.value = res.data.data;
          });
        },
      },
    });

    return {
      license,
      qrSrc,
      userProfile,
      activeClass,
      errorClass,
      dataFetched,
      getReviewId,
      showFlash,
      showErrorFlash,
      profile,
      applicantId,
      applicantTypeId,
      education,
      show,
      showLoading,
      applicationType,
      config,
      model,
      licenseId,
      isUserApproved,
      isGoodStanding,
      isLoading,
      printPdf,
      myRegion,
      modalData,
      expertLevelId,
    };
  },
};
</script>
<style scoped>
@import url("https://fonts.cdnfonts.com/css/times-new-roman");
.mainText {
  font-family: "Times New Roman", sans-serif !important;
}
.text-danger > label,
.text-danger > h5 {
  color: red;
}
.normalFont {
  font-family: serif !important;
  letter-spacing: 2px;
}
[type="button"],
[type="submit"],
button {
  min-width: 20px;
  max-width: 20px;
}
a {
  border: 1px solid black;
}
.fr-second-toolbar,
#Layer_1 {
  display: none;
}
</style>
