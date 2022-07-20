<template>
  <div
    class="
      modal
      fade
      fixed
      top-0
      left-0
      hidden
      w-full
      h-full
      outline-none
      overflow-x-hidden overflow-y-auto
    "
    id="generatePdf"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="generatePdfLabel"
    aria-hidden="true"
  >
    <div
      class="
        modal-dialog modal-dialog-centered modal-xl
        relative
        w-auto
        pointer-events-none
      "
    >
      <div
        class="
          modal-content
          border-none
          shadow-lg
          relative
          flex flex-col
          w-full
          pointer-events-auto
          bg-white bg-clip-padding
          rounded-md
          outline-none
          text-current
        "
      >
        <div
          class="
            modal-header
            flex flex-shrink-0
            items-center
            justify-between
            p-2
            rounded-t-md
          "
        ></div>

        <div class="modal-body relative p-4">
          <div class="container px-6 mx-auto">
            <section class="text-gray-800">
              <div class="flex justify-center">
                <div class="text-center lg:max-w-3xl md:max-w-xl">
                  <h2 class="text-2xl font-bold mb-8 px-6">
                    Generate
                    <span class="text-2xl font-bold">{{
                      modalData.name ? modalData.name : ""
                    }}</span>
                    's License Data
                  </h2>
                </div>
              </div>
              <div class="vld-parent">
                <loading
                  :active="isLoading"
                  :can-cancel="true"
                  :on-cancel="onCancel"
                  :is-full-page="fullPage"
                  :color="'#2F639D'"
                  :opacity="0.7"
                ></loading>
                <div class="flex flex-wrap">
                  <div class="grow-0 shrink-0 basis-auto w-full">
                    <div>
                      <span>
                        <span v-if="isUserCertified && myRegion">
                          <div
                            v-if="
                              applicationStatus !== 'CANC' &&
                              applicationStatus !== 'SUSP' &&
                              !showActionLoading
                            "
                          ></div>

                          <div
                            v-if="modalData"
                            class="
                              bg-lightBlueB-200
                              flex
                              items-center
                              justify-center
                            "
                          >
                            <div class="w-screen">
                              <div
                                class="
                                  flex flex-col
                                  w-full
                                  bg-white
                                  blue-box-shadow-light
                                  rounded
                                "
                              >
                                <div>
                                  <Title message="በኢትዮፕያ ፌደራላዊ ዴሞክራሲያዊ ሪፐብሊክ" />
                                  <Title
                                    message="Federal Democratic Republic Ethiopia"
                                  />
                                </div>
                                <span class="mt-1">
                                  <Title message="የጤና ሚኒስቴር" />
                                  <Title message="Ministry of Health" />
                                </span>

                                <div class="flex">
                                  <div
                                    class="
                                      flex flex-col
                                      mb-medium
                                      ml-2
                                      w-1/2
                                      mr-12
                                    "
                                  >
                                    <Title
                                      message="የጤና ባለሙያዎች የሙያ ምዝገባና ፈቃድ የምስከር ወረቀት"
                                    />
                                  </div>
                                  <div
                                    class="flex flex-col mb-medium w-1/2 mr-12"
                                  >
                                    <Title
                                      message="HEALTH PROFFESSIONALS REGISTRATION AND"
                                    />
                                  </div>
                                </div>
                                <div class="flex">
                                  <div class="flex flex-col ml-4 w-1/2 mr-12">
                                    <!-- <h4>
                                      በኢትዮጵያ ፌዴራላዊ ዴሞክራሲያዊ ረፐብሊክ የጤና ሚንስቴር በአዋጅ
                                      ቁጥር
                                  
                                    
                                           {{modalData.data.reviewer&&modalData.data.reviewer.expertLevelId === 3
                                          ? "1112/2011"
                                          :modalData.data.reviewer.regionId&&modalData.data.reviewer.region.code === "AA"
                                          ? "64/2011"
                                          :modalData.data.reviewer.regionId&& modalData.data.reviewer.region.code === "ORO"
                                          ? "661/2009"
                                          : "-"
                                      }}
                                           
                                      አንቀጽ
                                      {{
                                        modalData.data.reviewer &&
                                        modalData.data.reviewer.expertLevelId === 3
                                          ? "73"
                                          : modalData.data.reviewer &&
                                            modalData.data.reviewer.region &&
                                            modalData.data.reviewer.region
                                              .code === "AA"
                                          ? "44/8"
                                          : modalData.data.reviewer &&
                                            modalData.data.reviewer.region &&
                                            modalData.data.reviewer.region
                                              .code === "ORO"
                                          ? "3/3"
                                          : "-"
                                      }}
                                      ስልጣን መሰረት
                                    </h4> -->
                                  </div>

                                  <div class="flex flex-col w-1/2 mr-12">
                                    <!-- <h4>
                                      Under the Federal Democratic Republic of
                                      Ethiopia the Minstry of Health by Virtue
                                      of proclamation No.
                                      {{
                                        modalData.data.reviewer &&
                                        modalData.data.reviewer.expertLevel &&
                                        modalData.data.reviewer.expertLevel
                                          .code === "FED"
                                          ? "1112/2019"
                                          : modalData.data.reviewer &&
                                            modalData.data.reviewer.region &&
                                            modalData.data.reviewer.region
                                              .code === "AA"
                                          ? "64/2019"
                                          : modalData.data.reviewer &&
                                            modalData.data.reviewer.region &&
                                            modalData.data.reviewer.region
                                              .code === "ORO"
                                          ? "661/2002"
                                          : "-"
                                      }}
                                      Article
                                      {{
                                        modalData.data.reviewer &&
                                        modalData.data.reviewer.expertLevel &&
                                        modalData.data.reviewer.expertLevel
                                          .code === "FED"
                                          ? "73"
                                          : modalData.data.reviewer &&
                                            modalData.data.reviewer.region &&
                                            modalData.data.reviewer.region
                                              .code === "AA"
                                          ? "44/8"
                                          : modalData.data.reviewer &&
                                            modalData.data.reviewer.region &&
                                            modalData.data.reviewer.region
                                              .code === "ORO"
                                          ? "3/3"
                                          : "-"
                                      }}
                                      is given the authority to issue
                                    </h4> -->
                                  </div>
                                </div>

                                <div class="flex">
                                  <div class="flex flex-col w-1/2 mr-12">
                                    <h3 class="underline ml-4">

                                      <b
                                      v-if="modalData.profile"
                                        >{{
                                          modalData.profile.alternativeName
                                            ? modalData.profile
                                                .alternativeName
                                            : ""
                                        }}
                                        {{
                                          modalData.profile
                                            .alternativeFatherName
                                            ? modalData.profile
                                                .alternativeFatherName
                                            : ""
                                        }}
                                        {{
                                          modalData.profile
                                            .alternativeGrandFatherName
                                            ? modalData.profile
                                                .alternativeGrandFatherName
                                            : ""
                                        }}</b
                                      >
                                    </h3>
                                  </div>
                                  <div class="flex flex-col w-1/2 mr-12">
                                    <br />
                                    <h3 class="underline ml-4 mb-4">
                                      <b
                                        >{{
                                          modalData?.profile?.name
                                            ? modalData?.profile?.name
                                            : ""
                                        }}
                                        {{
                                          modalData.profile?.fatherName
                                            ? modalData.profile?.fatherName
                                            : ""
                                        }}
                                        {{
                                          modalData.profile?.grandFatherName
                                            ? modalData.profile?.grandFatherName
                                            : ""
                                        }}</b
                                      >
                                    </h3>
                                  </div>
                                </div>

                                <div class="flex">
                                  <div class="flex flex-col ml-4 w-1/2 mr-12">
                                    <h4>
                                      ተገቢውን መስፈርት አሟልተው ስለተገኙ ሚኒስቴር መስሪያ ቤቱ
                                    </h4>
                                 
                                    <h4 v-if="modalData.professionalTypes">
                                      <div
                                        v-for="professions in modalData.professionalTypes"
                                        :key="professions"
                                        class="flex flex-row ml-4"
                                      >
                                        <b
                                          >{{
                                            professions.professionalTypes
                                              .amharicProfessionalType === "ሌላ"
                                              ? ""
                                              : professions.professionalTypes
                                                  .amharicProfessionalType
                                          }}
                                        </b>
                                      </div>
                                      <br />ሙያ መዝግቦ ይህን የሙያ ስራ ፈቃድ ሰጥቷል።
                                    </h4>
                                  </div>
                                  <div
                                    class="flex flex-col mb-medium w-1/2 mr-12"
                                  >
                                    <h4>
                                      Having duly satisfied the requirements of
                                      the Ministry
                                    </h4>
                                    <h4>hereby registered and licensed as</h4>
                                    <h4
                                      v-if="
                                        modalData.professionalTypes &&
                                        modalData.professionalTypes[0]
                                          .professionalTypes.name
                                      "
                                    >
                                      <div
                                        v-for="professions in modalData.professionalTypes"
                                        :key="professions"
                                        class="flex flex-row ml-4"
                                      >
                                        <b
                                          >{{
                                            professions.prefix
                                              ? "(" + professions.prefix + ")"
                                              : ""
                                          }}
                                          {{
                                            professions.professionalTypes
                                              .code === "OTH"
                                              ? certificateDetail.otherProfessionalType
                                                ? certificateDetail.otherProfessionalType
                                                : ""
                                              : professions.professionalTypes
                                                  .name
                                          }}</b
                                        >
                                      </div>
                                    </h4>
                                  </div>
                                </div>
                                <div class="flex">
                                  <div
                                    class="
                                      flex flex-col
                                      mb-medium
                                      ml-4
                                      w-1/2
                                      mr-12
                                    "
                                  >
                                    <h3>
                                      ይህ የሙያ የስራ ፈቃድ የሚያገለግለው
                                      <b>
                                        {{
                                          modalData.certifiedDate
                                            ? toEthiopian(
                                                moment(
                                                  modalData.certifiedDate
                                                )._d.toISOString(),
                                                false
                                              )
                                            : ""
                                        }}
                                        -{{
                                          modalData
                                            .licenseExpirationDate !== null
                                            ? toEthiopian(
                                                moment(
                                                  modalData
                                                    .licenseExpirationDate
                                                )._d.toISOString(),
                                                false
                                              )
                                            : " አልተገለጸም"
                                        }}
                                      </b>
                                    </h3>
                                  </div>
                                  <div
                                    class="flex flex-col mb-medium w-1/2 mr-12"
                                  >
                                    <h3>
                                      The license is valid:<b
                                        >{{
                                          modalData.certifiedDate
                                            ? moment(
                                                modalData.certifiedDate
                                              ).format("MMM DD, YYYY")
                                            : ""
                                        }}
                                        -
                                        {{
                                          modalData.licenseExpirationDate
                                            ? moment(
                                                modalData
                                                  .licenseExpirationDate
                                              ).format("MMM DD, YYYY")
                                            : " Not specified"
                                        }}</b
                                      >
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                        <span v-else-if="!isUserCertified && isUserFound">
                          <div
                            class="
                              flex
                              justify-center
                              content-center
                              userNotFound
                            "
                          >
                            <h1>User is not Certified</h1>
                          </div>
                        </span>

                        <span v-else-if="!myRegion">
                          <div
                            class="
                              flex
                              justify-center
                              content-center
                              userNotFound
                            "
                          >
                            <h1>
                              You can't generate Certificate for other region
                            </h1>
                          </div>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div
          class="
            modal-footer
            flex flex-shrink-0 flex-wrap
            items-center
            justify-end
            border-t border-grey-200
            rounded-b-md
          "
        >
          <button
            type="button"
            class="
              inline-block
              px-6
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-lg
              hover:bg-purple-700 hover:shadow-lg
              focus:bg-purple-700
              focus:shadow-lg
              focus:outline-none
              focus:ring-0
              active:bg-purple-800 active:shadow-lg
              transition
              duration-150
              ease-in-out
            "
            @click="generate()"
          >
            <i class="fa fa-check"></i>
            Generate
          </button>
          <button
            type="button"
            class="
              inline-block
              px-6
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-lg
              hover:bg-purple-700 hover:shadow-lg
              focus:bg-purple-700
              focus:shadow-lg
              focus:outline-none
              focus:ring-0
              active:bg-purple-800 active:shadow-lg
              transition
              duration-150
              ease-in-out
            "
            data-bs-dismiss="modal"
          >
            <i class="fa fa-times-circle"></i>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "@/sharedComponents/Title";
import { ref } from "vue";
import { useStore } from "vuex";

import jsPDF from "jspdf";
import backgroundImage from "../../../../../assets/Federal_Certificate.jpg";
import oromiaCertificateBackground from "../../../../../assets/Oromia_Certificate.jpg";
import addisAbabaCertificateBackground from "../../../../../assets/A_A_Certificate.jpg";
import AmharicFont from "../../../Configurations/amharicFont.js";
import { toEthiopian } from "../../../Configurations/dateConvertor";
import STATIC_CERTIFICATE_URL from "../../../../../sharedComponents/constants/message.js";
import toast from "toast-me";
import moment from "moment";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

export default {
  computed: {
    moment: () => moment,
    AmharicFont: () => AmharicFont,
    toEthiopian: () => toEthiopian,
    STATIC_CERTIFICATE_URL: () => STATIC_CERTIFICATE_URL,
  },
  props: ["modalData"],
  components: { Title, Loading },
  setup(props) {
    const store = useStore();
    const showGenerateModal = ref(true);
    let show = ref(false);
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
    const adminRegionId = JSON.parse(
      localStorage.getItem("allAdminData")
    ).regionId;

    const expertLevelCode = JSON.parse(localStorage.getItem("allAdminData"))
      .expertLevel.code;

    let isLicenseGenerated = ref(false);

    let applicationStatus = ref("");

    let showFlash = ref(false);
    let showErrorFlash = ref(false);

    const updateLicenseGenerated = () => {
      let req = {
        data: { ...props.modalData, isLicenseGenerated: true },
      };
      editApplication(req);
    };

    const editApplication = (req) => {
      store
        .dispatch("reviewer/RenewalGenerate", req)
        .then((res) => {
          isLoading.value = false;
          if (res.statusText == "Created") {
            showGenerateModal.value = false;
          } else {
            showGenerateModal.value = false;
            toast("Certificate Generated Successfully.", {
              duration: 3000,
              position: "bottom",
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
      const applicationType = "Renewal"

      const qrParam = { url: null };

      qrParam.url =
        staticUrl + "/" + applicationType + "/" + userId + "/" + applicationId;
      store
        .dispatch("reviewer/getQrCode", qrParam)
        .then((res) => {
          imageSrc.value = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const generate = () => {
      isLoading.value = true;
      fetchQrCode();
      certifiedUser.value = props.modalData.profile;
      certificateDetail.value = props.modalData.data;

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
      downloadPdf();
    };

    const handleRegionsLayout = (
      doc,
      code,
      namePosition,
      professionPossition,
      professionListGap
    ) => {
      doc.setFontSize(17);
      doc.text(
        190,
        namePosition,
        `${certifiedUser.value.name} ${certifiedUser.value.fatherName} ${
          certifiedUser.value.grandFatherName
            ? certifiedUser.value.grandFatherName
            : ""
        }`
      );

      let changeWidth = ref(false);
      let changeWidthTooSmall = ref(false);
      let xPosition = ref(185);
      for (
        let i = 0;
        i < certificateDetail.value.renewalProfessions.length;
        i++
      ) {
        let professionPrefix = `${
          certificateDetail.value.renewalProfessions[i].prefix
            ? certificateDetail.value.renewalProfessions[i].prefix
            : ""
        }  ${
          certificateDetail.value.renewalProfessions[i].professionalTypes.name
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
      if (changeWidth.value) {
        doc.setFontSize(10);
        xPosition.value = 167;
      } else if (changeWidthTooSmall.value) {
        doc.setFontSize(10);
        xPosition.value = 153;
      } else {
        doc.setFontSize(14);
      }
      for (
        let i = 0;
        i < certificateDetail.value.renewalProfessions.length;
        i++
      ) {
        doc.text(
          xPosition.value,
          professionPossition + i * professionListGap,
          `${
            certificateDetail.value.renewalProfessions.length > 1
              ? i + 1 + ". "
              : ""
          }${
            certificateDetail.value.renewalProfessions[i]
              .professionalTypes.name
              ? `${
                  certificateDetail.value.renewalProfessions[i].prefix
                    ? "(" +
                      certificateDetail.value.renewalProfessions[i]
                        .prefix +
                      ")"
                    : ""
                }   ${
                  certificateDetail.value.renewalProfessions[i]
                    .professionalTypes.code === "OTH"
                    ? certificateDetail.value.otherProfessionalType
                      ? certificateDetail.value.otherProfessionalType
                      : ""
                    : certificateDetail.value.renewalProfessions[i]
                        .professionalTypes.name
                }`
              : ""
          }`
        );
      }

      doc.setFontSize(12);
      doc.text(
        197,
        164,
        `${
          certificateDetail.value.certifiedDate
            ? moment(certificateDetail.value.certifiedDate).format(
                "MMM DD, YYYY"
              ) + " - "
            : "Not Specified"
        }`
      );
      doc.text(
        226,
        164,
        `${
          certificateDetail.value.licenseExpirationDate
            ? moment(certificateDetail.value.licenseExpirationDate).format(
                "MMM DD, YYYY"
              )
            : "Not Specified"
        }`
      );
      // License Number
      // doc.text(245, 58, `${certificateDetail.value.licenseNumber}`);
      // License Number for amharic
      doc.text(38, 58, `${certificateDetail.value.licenseNumber}`);

      // doc.addFileToVFS("Amiri-Regular.ttf", AmiriRegular);
      doc.addFileToVFS("Tera-Regular-normal.ttf", AmharicFont);

      doc.addFont("Tera-Regular-normal.ttf", "Tera-Regular", "normal");

      doc.setFont("Tera-Regular"); // set font

      doc.setFontSize(17);
      if (code === "AA" || code == "FED") {
        doc.text(
          60,
          namePosition - 5,
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
      } else {
        doc.text(
          60,
          namePosition,
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
      }

      if (changeWidth.value) {
        doc.setFontSize(11);
        xPosition.value = 40;
      } else if (changeWidthTooSmall.value) {
        doc.setFontSize(11);
        xPosition.value = 28;
      } else {
        doc.setFontSize(14);
        xPosition.value = 65;
      }

      for (
        let i = 0;
        i < certificateDetail.value.renewalProfessions.length;
        i++
      ) {
        doc.text(
          xPosition.value,
          professionPossition + i * professionListGap,
          `${
            certificateDetail.value.renewalProfessions.length > 1
              ? i + 1 + ". "
              : ""
          }${
            certificateDetail.value.renewalProfessions[i].professionalTypes
              .amharicProfessionalType
              ? certificateDetail.value.renewalProfessions[i].professionalTypes
                  .amharicProfessionalType === "ሌላ"
                ? ""
                : certificateDetail.value.renewalProfessions[i].professionalTypes
                    .amharicProfessionalType
              : ""
          }`
        );
      }

      doc.setFontSize(12);
      // doc.text(80)
      let getAmharicLicensedDate = doc.getTextWidth(
        toEthiopian(
          moment(certificateDetail.value.certifiedDate)._d.toISOString(),
          false
        ) + " - "
      );
      doc.text(
        75,
        164,
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
        75 + getAmharicLicensedDate,
        164,
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
      const doc = new jsPDF({
        orientation: "landscape",
        filters: ["ASCIIHexEncode"],
      });
      updateLicenseGenerated();
      const userImage = certifiedUser.value.profilePicture
        ? certifiedUser.value.profilePicture
        : null;
      if (certificateDetail.value.reviewer.expertLevel.code === "FED") {
        doc.addImage(backgroundImage, "JPG", 0, 0, 298, 213, undefined, "FAST");
        handleRegionsLayout(doc, "FED", 100, 125, 7);
      } else if (certificateDetail.value.reviewer.region.code === "ORO") {
        doc.addImage(
          oromiaCertificateBackground,
          "JPG",
          0,
          0,
          298,
          213,
          undefined,
          "FAST"
        );
        handleRegionsLayout(doc, "ORO", 110, 133, 4);
      } else if (certificateDetail.value.reviewer.region.code === "AA") {
        doc.addImage(
          addisAbabaCertificateBackground,
          "JPG",
          0,
          0,
          298,
          213,
          undefined,
          "FAST"
        );
        handleRegionsLayout(doc, "AA", 110, 133, 4);
      }

      // doc.addImage(backgroundImage, "JPEG", 0, 0, 298, 213, undefined, "FAST");
      doc.addImage(imageSrc.value, "JPG", 246, 14, 35, 35);
      if (userImage !== null) {
        doc.addImage(userImage, "JPEG", 33, 20, 30, 30);
      }
      // doc.text(10, 203, `ቀን: ${toEthiopian(new Date().toISOString(), false)}`)
      doc.setFontSize(10);

      window.open(doc.output("bloburl"));
    };

    const onCancel = () => {
      isLoading.value = false;
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
      onCancel,
      fullPage,
      showGenerateModal,
      isLicenseGenerated,
      isLoading,
      showActionLoading,
      applicationStatus,
      showFlash,
      showErrorFlash,
    };
  },
};
</script>
