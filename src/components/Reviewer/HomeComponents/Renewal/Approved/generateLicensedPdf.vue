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
      :class="
        modalData &&
        modalData.data &&
        modalData.data.applicantType &&
        (modalData.data.applicantType.code == 'ETH' ||
          modalData.data.applicantType.code == 'ETHABRO')
          ? 'modal-dialog modal-dialog-centered modal-xl ml-8 mr-8 relative w-auto pointer-events-none'
          : 'modal-dialog modal-dialog-centered modal-lg  relative w-auto pointer-events-none'
      "
    >
      <div
        class="modal-content border-none relative flex flex-col w-full pointer-events-auto bg-white rounded-md outline-none text-current"
      >
        <div
          class="modal-header flex flex-shrink-0 items-center justify-between p-2 rounded-t-md"
        ></div>
        <div class="vld-parent">
          <loading
            :active="isLoading"
            :is-full-page="true"
            :color="'#2F639D'"
            :opacity="0.7"
          ></loading>
          <!-- Ethiopian -->
          <ethiopian-license
            v-if="
              modalData &&
              modalData.data &&
              modalData.data.applicantType &&
              (finalData.data.applicantType.code == 'ETH' ||
                finalData.data.applicantType.code == 'ETHABRO')
            "
            :modalData="modalData"
          ></ethiopian-license>
          <!-- Foreginers -->
          <foreigner-license
            v-if="
              modalData &&
              modalData.data &&
              modalData.data.applicantType &&
              modalData.printType != 'externship' &&
              modalData.printType != 'temporary' &&
              modalData.data.applicantType.code == 'FOR'
            "
            :modalData="modalData"
            :qrSrc="qrSrc"
          ></foreigner-license>
        </div>
        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end border-t border-grey-100 rounded-b-md"
        >
          <button
            type="button"
            class="inline-block px-6 text-white font-medium text-xs bg-primary-700 leading-tight uppercase rounded hover:bg-white hover:text-primary-700 transition duration-150 ease-in-out"
            data-bs-toggle="modal"
            data-bs-target="#retrivalModal"
          >
            <i class="fa fa-check"></i>
            Set Retrival Date
          </button>

          <button
            type="button"
            class="inline-block px-6 text-white font-medium text-xs bg-primary-700 leading-tight uppercase rounded hover:bg-white hover:text-primary-700 transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
          >
            <i class="fa fa-times-circle"></i>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="retrivalModal"
    tabindex="-1"
    aria-labelledby="retrivalModalTitle"
    aria-modal="true"
    role="dialog"
  >
    <div
      class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none"
    >
      <div
        class="modal-content border-none relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div
          class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-grey-200 rounded-t-md"
        ></div>
        <div class="modal-body relative p-4">
          <div class="vld-parent">
            <loading
              :active="isLoading"
              :is-full-page="true"
              :color="'#2F639D'"
              :opacity="0.7"
            ></loading>
            <div class="overflow-hidden shadow-sm">
              <label for="" class="text-primary-600 font-bold"
                >Retrival date for applicant</label
              >

              <input
                type="date"
                v-model="retrivalDate"
                :min="today"
                class="appearance-none block xl:w-64 md:w-64 sm:w-64 px-3 py-1.5 text-base font-normal text-gray-700 hover:text-main-500 hover:border-main-500 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-400 focus:outline-none"
                autocomplete="off"
                placeholder=""
                required
              />
            </div>
          </div>
        </div>
        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-2 border-t border-grey-200 rounded-b-md"
        >
          <button
            type="button"
            class="inline-block px-6 text-white font-medium text-xs bg-primary-700 leading-tight uppercase rounded hover:bg-white hover:text-primary-700 transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="inline-block px-6 text-white font-medium text-xs bg-primary-700 leading-tight uppercase rounded hover:bg-white hover:text-primary-700 transition duration-150 ease-in-out"
            @click="generateRetrival()"
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import ethiopianLicense from "./sharedComponents/ethiopianLicense.vue";
import foreignerLicense from "./sharedComponents/foreignerLicense.vue";
import jsPDF from "jspdf";
import backgroundImage from "../../../../../assets/Federal_Certificate.jpg";
import oromiaCertificateBackground from "../../../../../assets/Oromia_Certificate.jpg";
import direDawaCertificateBackground from "../../../../../assets/DireDawa_Certificate.jpg";
import afarCertificateBackground from "../../../../../assets/Afar_Certificate.jpg";
import addisAbabaCertificateBackground from "../../../../../assets/A_A_Certificate.jpg";
import AmharicFont from "../../../Configurations/amharicFont.js";
import { toEthiopian } from "../../../Configurations/dateConvertor";
import STATIC_CERTIFICATE_URL from "../../../../../sharedComponents/constants/message.js";
import { useToast } from "vue-toastification";
import moment from "moment";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import html2pdf from "html2pdf.js";
export default {
  computed: {
    moment: () => moment,
    AmharicFont: () => AmharicFont,
    toEthiopian: () => toEthiopian,
    STATIC_CERTIFICATE_URL: () => STATIC_CERTIFICATE_URL,
  },
  props: ["modalData"],
  components: { Loading, ethiopianLicense, foreignerLicense },
  setup(props) {
    const store = useStore();
    const toast = useToast();
    const showGenerateModal = ref(true);
    let show = ref(false);
    let qrSrc = ref("");
    let certifiedUser = ref({});
    let certificateDetail = ref({});
    let isLoading = ref(false);
    let showLoading = ref(false);
    let showActionLoading = ref(false);
    const fullPage = ref(false);
    let isUserCertified = ref(true);
    let isUserFound = ref(true);
    let myRegion = ref(true);
    let imageSrc = ref("");
    let today = new Date().toISOString().split("T")[0];
    let retrivalDate = ref("");

    const adminRegionId = JSON.parse(
      localStorage.getItem("allAdminData")
    ).regionId;

    const expertLevelCode = JSON.parse(localStorage.getItem("allAdminData"))
      .expertLevel.code;

    let isLicenseGenerated = ref(false);

    let applicationStatus = ref("");

    let finalData = computed(() => props.modalData);
    let isReprint =
      finalData.value && finalData.value.data
        ? finalData.value.data.isReprint
        : ref(false);
    let educations = computed(() =>
      props.modalData && props.modalData.newEducations
        ? props.modalData.newEducations.concat(
            props.modalData && props.modalData.previousEducations
              ? props.modalData.previousEducations
              : []
          )
        : props.modalData.newEducations
    );

    const updateLicenseGenerated = () => {
      finalData.value.data
        ? (finalData.value.data.isLicenseGenerated = true)
        : null;
      finalData.value.data ? (finalData.value.data.isReprint = true) : null;
      let req = {
        action: null,
        data: { ...finalData.value.data },
      };

      editApplication(req);
    };

    const editApplication = (req) => {
      delete req.data.educations;
      store
        .dispatch("reviewer/editRenewal", req)
        .then((res) => {
          isLoading.value = false;
          if (res.statusText == "Created") {
            showGenerateModal.value = false;

            let smsMessage = req.data
              ? // eslint-disable-next-line prettier/prettier
                `Dear applicant your applied renewal of license with number ${
                  req.data.renewalCode
                } is printed and ready. Visit our office on ${retrivalDate.value.slice(
                  0,
                  10
                )} and please do not forget to bring all required legal documents.Thank you for using eHPL. visit https://hrl.moh.gov.et for more.`
              : "";
            let smsData = {
              recipients: [
                req.data && req.data.applicant
                  ? "251" + req.data.applicant.phoneNumber
                  : "",
              ],
              message: smsMessage ? smsMessage : "",
            };

            store
              .dispatch("sms/sendSms", smsData)
              .then(() => {
                toast.success("Done", {
                  timeout: 5000,
                  position: "bottom-center",
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  icon: true,
                });
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              })
              .catch(() => {
                toast.error("Sms is not sent", {
                  timeout: 5000,
                  position: "bottom-center",
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  icon: true,
                });
                setTimeout(() => {
                  window.location.reload();
                }, 3000);
              });
          } else {
            showGenerateModal.value = false;
            toast.error(res.data.message, {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const fetchQrCode = () => {
      const staticUrl = STATIC_CERTIFICATE_URL;
      const userId = props.modalData.profile.id;
      const applicationId = props.modalData.data.id;
      const applicationType = "Renewal";

      const qrParam = { url: null };

      qrParam.url =
        staticUrl + "/" + applicationType + "/" + userId + "/" + applicationId;
      store
        .dispatch("reviewer/getQrCode", qrParam)
        .then((res) => {
          imageSrc.value = res.data.data;
        })
        .finally(() => {
          downloadPdf();
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const generateRetrival = () => {
      if (retrivalDate.value != "") {
        finalData.value.data.retrivalDate = retrivalDate.value;

        generate();
      } else {
        toast.error("Please select retrival date", {
          timeout: 5000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true,
        });
      }
    };
    const generateForeigner = async () => {
      var element = document.getElementById("foreignersPrintedDiv");
      var opt = {
        margin: 1,
        filename: "myfile.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: "p", unit: "mm", format: "a4" },
      };
      const staticUrl = STATIC_CERTIFICATE_URL;
      const userId = props.modalData.profile.id;
      const applicationId = props.modalData.data.id;
      const applicationType = "NewLicense";

      const qrParam = { url: null };

      qrParam.url =
        staticUrl + "/" + applicationType + "/" + userId + "/" + applicationId;
      store
        .dispatch("reviewer/getQrCode", qrParam)
        .then((res) => {
          qrSrc.value = res.data.data;
        })
        .finally(() => {
          html2pdf()
            .set(opt)
            .from(element)
            .save(
              finalData.value &&
                finalData.value.profile &&
                finalData.value.profile.name
                ? finalData.value.profile.name +
                    " " +
                    new Date().toISOString().slice(0, 10)
                : ""
            );

          updateLicenseGenerated();
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const generate = () => {
      if (
        finalData.value.data &&
        finalData.value.data.applicantType &&
        finalData.value.data.applicantType.code == "FOR"
      ) {
        generateForeigner();
        return;
      }
      isLoading.value = true;
      certifiedUser.value = props.modalData.profile;
      certificateDetail.value = props.modalData.data;
      certificateDetail.value.educations = props.modalData.newEducations.concat(
        props.modalData && props.modalData.previousEducations
          ? props.modalData.previousEducations
          : []
      );
      certificateDetail.value.educations = certificateDetail.value.educations
        ? certificateDetail.value.educations.filter(
            (edu) => edu.isDropped != true
          )
        : {};
      applicationStatus.value = props.modalData.data.applicationStatus.code;
      isLicenseGenerated.value = props.modalData.data.isLicenseGenerated;
      certificateDetail.value.licenseNumber =
        certificateDetail.value.renewalCode;
      if (props.modalData.data.certified != true) {
        isUserCertified.value = false;
      }
      if (expertLevelCode != certificateDetail.value.expertLevels.code) {
        myRegion.value = false;
      } else {
        if (
          expertLevelCode === "REG" &&
          adminRegionId != certificateDetail.value.woreda?.zone?.region?.id
        ) {
          myRegion.value = false;
        }
      }
      fetchQrCode();
    };

    const handleRegionsLayout = (
      doc,
      doc2,
      code,
      namePosition,
      professionPossition,
      professionListGap
    ) => {
      doc.setFontSize(15);
      doc2.setFontSize(15);
      doc.text(32, 57.5, `${certificateDetail.value.licenseNumber}`);
      doc2.text(32, 57.5, `${certificateDetail.value.licenseNumber}`);

      let paddingAmharic = 5;
      let paddingEnglish = 0;
      if (code == "DD") {
        paddingAmharic = 10;
        paddingEnglish = 10;
      }

      //English name part
      doc.text(
        175,
        namePosition - paddingEnglish,
        `${certifiedUser.value.name} ${certifiedUser.value.fatherName} ${
          certifiedUser.value.grandFatherName
            ? certifiedUser.value.grandFatherName
            : ""
        }`
      );
      doc2.text(
        175,
        namePosition - paddingEnglish,
        `${certifiedUser.value.name} ${certifiedUser.value.fatherName} ${
          certifiedUser.value.grandFatherName
            ? certifiedUser.value.grandFatherName
            : ""
        }`
      );

      let changeWidth = ref(false);
      let changeWidthTooSmall = ref(false);
      let xPosition = ref(147);
      if (certificateDetail.value.educations.length <= 3) {
        for (let i = 0; i < certificateDetail.value.educations.length; i++) {
          let professionPrefix = `${
            certificateDetail.value.educations[i].prefix
              ? certificateDetail.value.educations[i].prefix.name
              : ""
          }  ${
            certificateDetail.value.educations[i].professionType &&
            certificateDetail.value.educations[i].professionType.name == "other"
              ? certificateDetail.value.educations[i].otherProfessionType
              : certificateDetail.value.educations[i].professionType.name
              ? certificateDetail.value.educations[i].professionType.name
              : ""
          }`;
          let getLength = doc.getTextWidth(professionPrefix);
          if (getLength > 125 && getLength <= 132) {
            if (!changeWidthTooSmall.value) {
              changeWidth.value = true;
            }
          }
          if (getLength > 132) {
            changeWidthTooSmall.value = true;
            changeWidth.value = false;
          }
        }
      } else {
        for (let i = 0; i < 3; i++) {
          let professionPrefix = `${
            certificateDetail.value.educations[i].prefix
              ? certificateDetail.value.educations[i].prefix.name
              : ""
          }  ${
            certificateDetail.value.educations[i].professionType &&
            certificateDetail.value.educations[i].professionType.name == "other"
              ? certificateDetail.value.educations[i].otherProfessionType
              : certificateDetail.value.educations[i].professionType.name
              ? certificateDetail.value.educations[i].professionType.name
              : ""
          }`;
          let getLength = doc.getTextWidth(professionPrefix);
          if (getLength > 125 && getLength <= 132) {
            if (!changeWidthTooSmall.value) {
              changeWidth.value = true;
            }
          }
          if (getLength > 132) {
            changeWidthTooSmall.value = true;
            changeWidth.value = false;
          }
        }
      }

      if (changeWidth.value) {
        doc.setFontSize(10);
        doc2.setFontSize(10);
        xPosition.value = 170;
      } else if (changeWidthTooSmall.value) {
        doc.setFontSize(10);
        doc2.setFontSize(10);
        xPosition.value = 158;
      } else {
        doc.setFontSize(13);
        doc2.setFontSize(13);
        xPosition.value = 150;
      }

      if (certificateDetail.value.educations.length <= 3) {
        for (let i = 0; i < certificateDetail.value.educations.length; i++) {
          doc.text(
            xPosition.value,
            professionPossition + i * professionListGap,
            `${
              certificateDetail.value.educations.length > 1
                ? i + 1 + ". "
                : "1. "
            }${
              certificateDetail.value.educations[i].prefix
                ? certificateDetail.value.educations[i].prefix.name
                : ""
            } ${
              certificateDetail.value.educations[i].professionType &&
              certificateDetail.value.educations[i].professionType.name ==
                "other"
                ? certificateDetail.value.educations[i].otherProfessionType
                : certificateDetail.value.educations[i].professionType.name
            }`,
            { maxWidth: 130 }
          );
        }
      }
      if (certificateDetail.value.educations.length > 3) {
        for (let i = 0; i < 3; i++) {
          doc.text(
            xPosition.value,
            professionPossition + i * professionListGap,
            `${
              certificateDetail.value.educations.length > 1
                ? i + 1 + ". "
                : "1. "
            }${
              certificateDetail.value.educations[i].prefix
                ? certificateDetail.value.educations[i].prefix.name
                : ""
            } ${
              certificateDetail.value.educations[i].professionType &&
              certificateDetail.value.educations[i].professionType.name ==
                "other"
                ? certificateDetail.value.educations[i].otherProfessionType
                : certificateDetail.value.educations[i].professionType.name
            }`,
            { maxWidth: 130 }
          );
        }
        let newI = 0;
        for (let i = 3; i < 6; i++) {
          if (certificateDetail.value.educations[i]) {
            doc2.text(
              xPosition.value,
              professionPossition + newI * professionListGap,
              `${
                certificateDetail.value.educations.length > 1
                  ? newI + 1 + ". "
                  : ""
              }${
                certificateDetail.value.educations[i].prefix
                  ? certificateDetail.value.educations[i].prefix.name
                  : ""
              } ${
                certificateDetail.value.educations[i].professionType &&
                certificateDetail.value.educations[i].professionType.name ==
                  "other"
                  ? certificateDetail.value.educations[i].otherProfessionType
                  : certificateDetail.value.educations[i].professionType.name
              }`,
              { maxWidth: 130 }
            );
          }
          newI += 1;
        }
      }

      doc.setFontSize(12);
      doc2.setFontSize(12);
      doc.text(
        code == "AA" ? 207 : 197,
        code == "AA" ? 159 : 164,
        `${
          certificateDetail.value.certifiedDate
            ? moment(certificateDetail.value.certifiedDate).format(
                "MMM DD, YYYY"
              ) + " - "
            : "Not Specified"
        }`
      );
      doc2.text(
        code == "AA" ? 207 : 197,
        code == "AA" ? 159 : 164,
        `${
          certificateDetail.value.certifiedDate
            ? moment(certificateDetail.value.certifiedDate).format(
                "MMM DD, YYYY"
              ) + " - "
            : "Not Specified"
        }`
      );
      doc.text(
        code == "AA" ? 238 : 226,
        code == "AA" ? 159 : 164,
        `${
          certificateDetail.value.licenseExpirationDate
            ? moment(certificateDetail.value.licenseExpirationDate).format(
                "MMM DD, YYYY"
              )
            : "Not Specified"
        }`
      );
      doc2.text(
        code == "AA" ? 238 : 226,
        code == "AA" ? 159 : 164,
        `${
          certificateDetail.value.licenseExpirationDate
            ? moment(certificateDetail.value.licenseExpirationDate).format(
                "MMM DD, YYYY"
              )
            : "Not Specified"
        }`
      );
      //Reviewer name incase of addis ababa
      code == "AA"
        ? doc.text(
            123,
            200,
            `${
              certificateDetail.value.renewalReviewer &&
              certificateDetail.value.renewalReviewer.reviewer
                ? certificateDetail.value.renewalReviewer.reviewer.name
                : ""
            }`
          )
        : "";
      // License Number for amharic
      // doc.addFileToVFS("Amiri-Regular.ttf", AmiriRegular);
      doc.addFileToVFS("Tera-Regular-normal.ttf", AmharicFont);
      doc2.addFileToVFS("Tera-Regular-normal.ttf", AmharicFont);
      doc.addFont("Tera-Regular-normal.ttf", "Tera-Regular", "normal");
      doc2.addFont("Tera-Regular-normal.ttf", "Tera-Regular", "normal");
      doc.setFont("Tera-Regular"); // set font
      doc2.setFont("Tera-Regular");
      let aaNamePosVer = 0;
      let aaNamePosHor = 0;
      code == "AA" ? (aaNamePosVer = 4) : (aaNamePosVer = 0);
      code == "AA" ? (aaNamePosHor = -15) : (aaNamePosVer = 0);
      //Amharic name part
      doc.text(
        60 + aaNamePosHor,
        namePosition - paddingAmharic + aaNamePosVer,
        `${
          certifiedUser.value.alternativeName
            ? certifiedUser.value.alternativeName
            : ""
        } ${
          certifiedUser.value.alternativeFatherName
            ? certifiedUser.value.alternativeFatherName
            : ""
        } ${
          certifiedUser.value.alternativeGrandFatherName
            ? certifiedUser.value.alternativeGrandFatherName
            : ""
        }`
      );
      doc2.text(
        60 + aaNamePosHor,
        namePosition - paddingAmharic + aaNamePosVer,
        `${
          certifiedUser.value.alternativeName
            ? certifiedUser.value.alternativeName
            : ""
        } ${
          certifiedUser.value.alternativeFatherName
            ? certifiedUser.value.alternativeFatherName
            : ""
        } ${
          certifiedUser.value.alternativeGrandFatherName
            ? certifiedUser.value.alternativeGrandFatherName
            : ""
        }`
      );
      // doc.addFileToVFS("Amiri-Regular.ttf", AmiriRegular);

      doc.setFontSize(17);
      doc2.setFontSize(17);

      if (changeWidth.value) {
        doc.setFontSize(11);
        doc2.setFontSize(11);
        xPosition.value = 38;
      } else if (changeWidthTooSmall.value) {
        doc.setFontSize(11);
        doc2.setFontSize(11);
        xPosition.value = 35;
      } else {
        doc.setFontSize(13);
        doc2.setFontSize(13);
        xPosition.value = 40;
      }
      if (certificateDetail.value.educations.length <= 3) {
        for (let i = 0; i < certificateDetail.value.educations.length; i++) {
          doc.text(
            xPosition.value + aaNamePosHor,
            professionPossition + i * professionListGap,
            `${
              certificateDetail.value.educations.length > 1
                ? i + 1 + ". "
                : "1. "
            }${
              certificateDetail.value.educations[i].prefix
                ? certificateDetail.value.educations[i].prefix.amharic_name
                : ""
            } ${
              certificateDetail.value.educations[i].professionType &&
              certificateDetail.value.educations[i].professionType.name ==
                "other"
                ? certificateDetail.value.educations[i].otherProfessionAmharic
                : certificateDetail.value.educations[i].professionType
                ? certificateDetail.value.educations[i].professionType
                    .amharicProfessionalType
                : ""
            }`,
            { maxWidth: 130 }
          );
        }
      } else {
        for (let i = 0; i < 3; i++) {
          doc.text(
            xPosition.value + aaNamePosHor,
            professionPossition + i * professionListGap,
            `${
              certificateDetail.value.educations.length > 1
                ? i + 1 + ". "
                : "1. "
            }${
              certificateDetail.value.educations[i].prefix
                ? certificateDetail.value.educations[i].prefix.amharic_name
                : ""
            } ${
              certificateDetail.value.educations[i].professionType &&
              certificateDetail.value.educations[i].professionType.name ==
                "other"
                ? certificateDetail.value.educations[i].otherProfessionAmharic
                : certificateDetail.value.educations[i].professionType
                ? certificateDetail.value.educations[i].professionType
                    .amharicProfessionalType
                : ""
            }`,
            { maxWidth: 130 }
          );
        }
        let newI = 0;
        for (let i = 3; i < 6; i++) {
          if (certificateDetail.value.educations[i]) {
            doc2.text(
              xPosition.value + aaNamePosHor,
              professionPossition + newI * professionListGap,
              `${
                certificateDetail.value.educations.length > 1
                  ? i + 1 + ". "
                  : "1. "
              }${
                certificateDetail.value.educations[i].prefix
                  ? certificateDetail.value.educations[i].prefix.amharic_name
                  : ""
              } ${
                certificateDetail.value.educations[i].professionType &&
                certificateDetail.value.educations[i].professionType.name ==
                  "other"
                  ? certificateDetail.value.educations[i].otherProfessionAmharic
                  : certificateDetail.value.educations[i].professionType
                  ? certificateDetail.value.educations[i].professionType
                      .amharicProfessionalType
                  : ""
              }`,
              { maxWidth: 130 }
            );
            newI++;
          }
        }
      }

      //End of Amharic part for certificate
      doc.setFontSize(12);
      doc2.setFontSize(12);
      // doc.text(80)
      let getAmharicLicensedDate = doc.getTextWidth(
        toEthiopian(
          moment(certificateDetail.value.certifiedDate)._d.toISOString(),
          false
        ) + " - "
      );
      let getAmharicLicensedDate2 = doc2.getTextWidth(
        toEthiopian(
          moment(certificateDetail.value.certifiedDate)._d.toISOString(),
          false
        ) + " - "
      );
      doc.text(
        76,
        code == "AA" ? 159 : 164,
        `${
          certificateDetail.value.certifiedDate
            ? toEthiopian(
                moment(certificateDetail.value.certifiedDate)._d.toISOString(),
                false
              ) + " - "
            : ""
        }`
      );
      doc2.text(
        76,
        code == "AA" ? 159 : 164,
        `${
          certificateDetail.value.certifiedDate
            ? toEthiopian(
                moment(certificateDetail.value.certifiedDate)._d.toISOString(),
                false
              ) + " - "
            : ""
        }`
      );
      doc.text(
        76 + getAmharicLicensedDate,
        code == "AA" ? 159 : 164,
        `${
          certificateDetail.value.licenseExpirationDate
            ? toEthiopian(
                moment(
                  certificateDetail.value.licenseExpirationDate
                )._d.toISOString(),
                false
              )
            : " አልተገለጸም"
        }`
      );
      doc2.text(
        76 + getAmharicLicensedDate2,
        code == "AA" ? 159 : 164,
        `${
          certificateDetail.value.licenseExpirationDate
            ? toEthiopian(
                moment(
                  certificateDetail.value.licenseExpirationDate
                )._d.toISOString(),
                false
              )
            : " አልተገለጸም"
        }`
      );
    };

    const downloadPdf = () => {
      const userImage = certifiedUser.value.profilePicture
        ? certifiedUser.value.profilePicture.filePath
        : null;
      const doc = new jsPDF({
        orientation: "landscape",
        filters: ["ASCIIHexEncode"],
      });
      const doc2 = new jsPDF({
        orientation: "landscape",
        filters: ["ASCIIHexEncode"],
      });
      let defaultCode = "";
      let defaultBackground = "";
      let defaultNamePos = 0;
      let defaultProfPos = 0;
      let defaultProfGap = 0;
      if (
        certificateDetail.value.educations &&
        certificateDetail.value.educations.length <= 3
      ) {
        if (
          certificateDetail.value.educations &&
          certificateDetail.value.educations.length <= 3
        ) {
          if (
            certificateDetail.value.renewalReviewer.reviewer.expertLevel
              .code === "FED"
          ) {
            defaultBackground = backgroundImage;
            defaultCode = "FED";
            defaultNamePos = 100;
            defaultProfPos = 125;
            defaultProfGap = 7;
          } else if (
            certificateDetail.value.renewalReviewer.reviewer.region.code ===
            "ORO"
          ) {
            defaultBackground = oromiaCertificateBackground;
            defaultCode = "ORO";
            defaultNamePos = 110;
            defaultProfPos = 133;
            defaultProfGap = 4;
          } else if (
            certificateDetail.value.renewalReviewer.reviewer.region.code ===
            "AA"
          ) {
            defaultBackground = addisAbabaCertificateBackground;
            defaultCode = "AA";
            defaultNamePos = 108;
            defaultProfPos = 133;
            defaultProfGap = 4;
          } else if (
            certificateDetail.value.renewalReviewer.reviewer.region.code ===
            "DD"
          ) {
            defaultBackground = direDawaCertificateBackground;
            defaultCode = "DD";
            defaultNamePos = 110;
            defaultProfPos = 120;
            defaultProfGap = 4;
          } else if (
            certificateDetail.value.renewalReviewer.reviewer.region.code ===
            "AFA"
          ) {
            defaultBackground = afarCertificateBackground;
            defaultCode = "AFA";
            defaultNamePos = 105;
            defaultProfPos = 130;
            defaultProfGap = 4;
          }

          doc.addImage(
            defaultBackground,
            "JPG",
            0,
            0,
            298,
            213,
            undefined,
            "FAST"
          );

          handleRegionsLayout(
            doc,
            doc2,
            defaultCode,
            defaultNamePos,
            defaultProfPos,
            defaultProfGap
          );

          doc.addImage(imageSrc.value, "JPG", 246, 14, 35, 35);
          if (userImage != null) {
            let path = {
              path: userImage,
            };
            store.dispatch("profile/converProfilePicture", path).then((res) => {
              doc.addImage(res.data.data, "JPG", 33, 20, 30, 30);
              doc.setFontSize(10);
              window.open(doc.output("bloburl"));
              updateLicenseGenerated();
            });
          } else {
            doc.setFontSize(10);
            window.open(doc.output("bloburl"));
            updateLicenseGenerated();
          }
        }
      }

      if (
        certificateDetail.value.educations &&
        certificateDetail.value.educations.length > 3
      ) {
        let multipleBackground = "";
        let multipleCode = "";
        let multipleNamePos = 0;
        let multipleProfPos = 0;
        let multipleProfGap = 0;

        if (
          certificateDetail.value.renewalReviewer.reviewer.expertLevel.code ===
          "FED"
        ) {
          multipleBackground = backgroundImage;
          multipleCode = "FED";
          multipleNamePos = 100;
          multipleProfPos = 125;
          multipleProfGap = 7;
        } else if (
          certificateDetail.value.renewalReviewer.reviewer.region.code === "ORO"
        ) {
          multipleBackground = oromiaCertificateBackground;
          multipleCode = "ORO";
          defaultNamePos = 110;
          defaultProfPos = 133;
          defaultProfGap = 4;
        } else if (
          certificateDetail.value.renewalReviewer.reviewer.region.code === "AA"
        ) {
          multipleBackground = addisAbabaCertificateBackground;
          multipleCode = "AA";
          defaultNamePos = 108;
          defaultProfPos = 133;
          defaultProfGap = 4;
        } else if (
          certificateDetail.value.renewalReviewer.reviewer.region.code === "DD"
        ) {
          multipleBackground = direDawaCertificateBackground;
          multipleCode = "DD";
          defaultNamePos = 110;
          defaultProfPos = 120;
          defaultProfGap = 4;
        } else if (
          certificateDetail.value.renewalReviewer.reviewer.region.code === "AFA"
        ) {
          multipleBackground = afarCertificateBackground;
          multipleCode = "AFA";
          defaultNamePos = 105;
          defaultProfPos = 130;
          defaultProfGap = 4;
        }

        doc.addImage(
          multipleBackground,
          "JPG",
          0,
          0,
          298,
          213,
          undefined,
          "FAST"
        );
        doc2.addImage(
          multipleBackground,
          "JPG",
          0,
          0,
          298,
          213,
          undefined,
          "FAST"
        );

        handleRegionsLayout(
          doc,
          doc2,
          multipleCode,
          multipleNamePos,
          multipleProfPos,
          multipleProfGap
        );

        doc.addImage(imageSrc.value, "JPG", 246, 14, 35, 35);
        doc2.addImage(imageSrc.value, "JPG", 246, 14, 35, 35);
        if (userImage !== null) {
          let path = {
            path: userImage,
          };
          store.dispatch("profile/converProfilePicture", path).then((res) => {
            doc.addImage(res.data.data, "JPG", 33, 20, 30, 30);
            doc2.addImage(res.data.data, "JPG", 33, 20, 30, 30);
            doc.setFontSize(10);
            doc2.setFontSize(10);

            window.open(doc.output("bloburl"), "w1");
            setTimeout(() => {
              window.open(doc2.output("bloburl"), "w2");
            }, 100);
            updateLicenseGenerated();
          });
        } else {
          doc.setFontSize(10);
          doc2.setFontSize(10);

          window.open(doc.output("bloburl"), "w1");
          setTimeout(() => {
            window.open(doc2.output("bloburl"), "w2");
          }, 100);
          updateLicenseGenerated();
        }
      }
    };

    return {
      show,
      downloadPdf,
      certifiedUser,
      showLoading,
      certificateDetail,
      isUserCertified,
      isUserFound,
      myRegion,
      generate,
      fullPage,
      educations,
      showGenerateModal,
      isLicenseGenerated,
      isLoading,
      showActionLoading,
      applicationStatus,
      isReprint,
      retrivalDate,
      generateRetrival,
      today,
      finalData,
      qrSrc,
    };
  },
};
</script>
<style scoped>
@media (min-width: 1200px) {
  .modal-xl {
    max-width: 1525px;
  }
}
</style>
