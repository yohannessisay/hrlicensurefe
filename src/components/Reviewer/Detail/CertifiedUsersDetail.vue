<template>
  <div class="bg-lightBlueB-200">
    <ReviewerNavBar tab="certifiedUsers" />
    <span
      v-if="showLoading || showApplicationLoading"
      class="flex justify-center justify-items-center mt-24"
    >
      <Spinner />
    </span>
    <span v-else>
      <span v-if="isUserCertified && myRegion">
        <button @click="downloadPdf">Download PDF</button>
        <div class="bg-lightBlueB-200 h-full">
          <div
            v-if="show"
            style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
            class="ml-8 mr-8 mb-12"
          >
            <!-- <div class="flex justify-center">
            <div
              style="
                width: 800px;
                height: 600px;
                padding: 20px;
                text-align: center;
                border: 10px solid #787878;
              "
              id="main"
            >
              <div
                style="
                  width: 750px;
                  height: 550px;
                  padding: 20px;
                  text-align: center;
                  border: 5px solid #787878;
                "
              >
                <span style="font-size: 50px; font-weight: bold"
                  >Certificate of Completion</span
                >
                <br /><br />
                <span style="font-size: 25px"
                  ><i>This is to certify that</i></span
                >
                <br /><br />
                <span style="font-size: 30px"
                  ><b
                    >{{ certifiedUser.name }} {{ certifiedUser.fatherName }}
                    {{
                      certifiedUser.grandFatherName != null
                        ? certifiedUser.grandFatherName
                        : ""
                    }}</b
                  ></span
                ><br /><br />
                <span style="font-size: 25px"
                  ><i>has completed the course</i></span
                >
                <br /><br />
                <span style="font-size: 30px">Health and Social Care</span>
                <br /><br />
                <span style="font-size: 20px"
                  ><b>with great distinction</b></span
                >
                <br /><br /><br /><br />
                <span style="font-size: 25px"
                  ><i
                    >on
                    {{
                        moment(certificateDetail.certifiedDate).format(
                        "MMM D, YYYY"
                      ) }}</i
                  ></span
                ><br>
              </div>
            </div>
          </div> -->

            <div class="container">
              <img
                src="../../../assets/certeficate_Background_image.jpg"
                alt="Notebook"
                style="width: 100%"
              />
              <div class="content"></div>
              <span id="main">
                <div class="flex-container">
                  <div></div>
                  <!-- <div><h4><b>No Photo<br/> Available</b></h4></div> -->
                  <div class="inner-flex">
                    <h2><b>በኢትዮፕያ ፌደራላዊ ዴሞክራሲያዊ ሪፐብሊክ</b></h2>
                    <h2><b>Federal Democratic Republic Ethiopia</b></h2>
                    <br />
                    <div class="flex-center">
                      <h2>የጤና ጥበቃ ሚኒስቴር</h2>
                      <h2>Ministry of Health</h2>
                    </div>
                  </div>
                  <div>
                    <h6>የምዝገባ ቁጥር: {{ certifiedUser.newLicenseCode }}</h6>
                  </div>
                </div>
                <div class="flex-second-container">
                  <div>
                    <h3 class="underline">
                      <b>የጤና ባለሙያዎች የሙያ ምዝገባና ፈቃድ የምስከር ወረቀት</b>
                    </h3>
                    <br />
                    <h4>በኢትዮጵያ ፌዴራላዊ ዴሞክራሲያዊ ረፐብሊክ የጤና ጥበቃ ሚንስቴር</h4>
                    <h4>በአዋጅ ቁጥር 916/2008 አንቀጽ 33(13)በተሰጠው ስልጣን መሰረት</h4>
                    <br /><br /><br /><br />
                    <h3 class="underline">
                      <b
                        >{{
                          certifiedUser.alternativeName != null
                            ? certifiedUser.alternativeName
                            : ""
                        }}
                        {{
                          certifiedUser.alternativeFatherName != null
                            ? certifiedUser.alternativeFatherName
                            : ""
                        }}
                        {{
                          certifiedUser.alternativeGrandFatherName != null
                            ? certifiedUser.alternativeGrandFatherName
                            : ""
                        }}</b
                      >
                    </h3>
                    <h4>ተገቢውን መስፈርት አሟልተው ስለተገኙ ሚኒስቴር መስሪያ ቤቱ</h4>
                    <h4
                      v-if="
                        certificateDetail.professionalTypes &&
                          certificateDetail.professionalTypes[0]
                            .professionalTypes.amharicProfessionalType
                      "
                    >
                      <div
                        v-for="professions in certificateDetail.professionalTypes"
                        class="flex flex-row"
                      >
                        <b>{{
                          professions.professionalTypes.amharicProfessionalType
                        }}</b>
                      </div>
                    </h4>
                    <br />
                    <h3>ሙያ መዝግቦ ይህን የሙያ ስራ ፈቃድ ሰጥቷል።</h3>
                    <h3>
                      ይህ የሙያ የስራ ፈቃድ የሚያገለግለው
                      <b>
                        {{
                          certificateDetail.certifiedDate
                            ? toEthiopian(
                                moment(
                                  certificateDetail.certifiedDate
                                )._d.toISOString(),
                                false
                              )
                            : ""
                        }}
                        -{{
                          certificateDetail.licenseExpirationDate !== null
                            ? toEthiopian(
                                moment(
                                  certificateDetail.licenseExpirationDate
                                )._d.toISOString(),
                                false
                              )
                            : " አልተገለጸም"
                        }}
                      </b>
                    </h3>
                  </div>
                  <div>
                    <h3 class="underline">
                      <b>HEALTH PROFFESSIONALS REGISTRATION AND</b>
                    </h3>
                    <h3 class="underline"><b>LICENSING CERTEFICATE</b></h3>
                    <br />
                    <h4>
                      Under the Federal Democratic Republic of Ethiopiathe
                      Minstry
                    </h4>
                    <h4>
                      of Health by Virtue of proclamation No. 916/2015 Article
                      33(13)
                    </h4>
                    <h4>is given the authority to issue</h4>
                    <br />
                    <h3 class="underline">
                      <b
                        >{{ certifiedUser.name }}
                        {{ certifiedUser.fatherName }}
                        {{
                          certifiedUser.grandFatherName != null
                            ? certifiedUser.grandFatherName
                            : ""
                        }}</b
                      >
                    </h3>
                    <h4>
                      Having duly satisfied the requirements of the Ministry
                    </h4>
                    <h4>hereby registered and licensed as</h4>
                    <h4
                      v-if="
                        certificateDetail.professionalTypes &&
                          certificateDetail.professionalTypes[0]
                            .professionalTypes.name
                      "
                    >
                      <div
                        v-for="professions in certificateDetail.professionalTypes"
                        class="flex flex-row"
                      >
                        <b>{{ professions.professionalTypes.name }}</b>
                      </div>
                    </h4>
                    <br />
                    <h3>
                      The license is valid:<b
                        >{{
                          certificateDetail.certifiedDate
                            ? moment(certificateDetail.certifiedDate).format(
                                "MMM DD, YYYY"
                              )
                            : ""
                        }}
                        -
                        {{
                          certificateDetail.licenseExpirationDate
                            ? moment(
                                certificateDetail.licenseExpirationDate
                              ).format("MMM DD, YYYY")
                            : " Not specified"
                        }}</b
                      >
                    </h3>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div></div>
      </span>
      <span v-else-if="!isUserCertified && isUserFound">
        <div class="flex justify-center content-center userNotFound">
          <h1>User is not Certified</h1>
        </div>
      </span>
      <span v-else-if="!isUserFound">
        <div class="flex justify-center content-center userNotFound">
          <h1>User is not Found</h1>
        </div>
      </span>
      <span v-else-if="!myRegion">
        <div class="flex justify-center content-center userNotFound">
          <h1>You can't generate Certificate for other region</h1>
        </div>
      </span>
    </span>
  </div>
</template>
<script>
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import Title from "@/sharedComponents/Title";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import store from "../../../store";
import Spinner from "@/sharedComponents/Spinner";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import backgroundImage from "../../../assets/Federal_Certificate.jpg";
import oromiaCertificateBackground from "../../../assets/OROMMIA_Certificate.jpg";
import addisAbabaCertificateBackground from "../../../assets/AA_certificate.jpg";
import qrcode_image from "../../../assets/qrcode_image.jpg";
import certifiedUserImage from "../../../assets/certified_user.jpg";
import AmharicFont from "../Configurations/amharicFont.js";
import { toEthiopian } from "../Configurations/dateConvertor";
import STATIC_CERTIFICATE_URL from "../../../sharedComponents/constants/message.js";

import moment from "moment";
export default {
  computed: {
    moment: () => moment,
    AmharicFont: () => AmharicFont,
    toEthiopian: () => toEthiopian,
    STATIC_CERTIFICATE_URL: () => STATIC_CERTIFICATE_URL,
    // getCertifiedUser() {
    //   return store.getters['reviewer/getUnassigned'][0]
    // }
  },
  components: {
    Title,
    ReviewerNavBar,
    Spinner,
  },
  setup() {
    const store = useStore();
    let route = useRoute();
    let show = ref(false);
    let certifiedUser = ref({});
    let certificateDetail = ref({});
    let showLoading = ref(false);
    let showApplicationLoading = ref(false);
    let isUserCertified = ref(true);
    let isUserFound = ref(true);
    let myRegion = ref(true);
    let imageSrc = ref("");
    const adminRegionId = JSON.parse(localStorage.getItem("allAdminData"))
      .regionId;
    const expertLevelId = JSON.parse(localStorage.getItem("allAdminData"))
      .expertLevelId;

    const fetchCertifiedUser = () => {
      showLoading.value = true;
      store
        .dispatch("profile/getProfileByUserId", route.params.applicantId)
        .then((res) => {
          showLoading.value = false;
          certifiedUser.value = res.data.data;
          show.value = true;
        })
        .catch((error) => {
          isUserFound.value = false;
        });
    };

    const fetchQrCode = () => {
      const staticUrl = STATIC_CERTIFICATE_URL;
      const userId = route.params.applicantId;
      const applicationId = route.params.applicationId;
      const applicationType = route.params.applicationType;

      const qrParam = { url: null };

      qrParam.url =
        staticUrl + "/" + applicationType + "/" + userId + "/" + applicationId;
      store
        .dispatch("reviewer/getQrCode", qrParam)
        .then((res) => {
          imageSrc.value = res.data.data;
        })
        .catch((err) => {});
    };
    const fetchApplication = () => {
      showApplicationLoading.value = true;
      if (route.params.applicationType === "Verification") {
        store
          .dispatch(
            "reviewer/getVerificationApplication",
            route.params.applicationId
          )
          .then((res) => {
            showApplicationLoading.value = false;
            certificateDetail.value = res.data.data;
            if (
              route.params.applicantId != certificateDetail.value.applicantId
            ) {
              isUserCertified.value = false;
            }
            if (
              certificateDetail.value.woreda !== null &&
              certificateDetail.value.woreda.zone !== null &&
              certificateDetail.value.woreda.zone.region !== null
            ) {
              if (
                adminRegionId != certificateDetail.value.woreda.zone.region.id
              ) {
                myRegion.value = false;
              }
            } else {
              if (expertLevelId != goodStandingUser.value.expertLevelId) {
                myRegion.value = false;
              }
            }
          })
          .catch((error) => {});
      } else if (route.params.applicationType === "Good Standing") {
        store
          .dispatch(
            "reviewer/getGoodStandingApplication",
            route.params.applicationId
          )
          .then((res) => {
            showApplicationLoading.value = false;
            certificateDetail.value = res.data.data;
            if (
              route.params.applicantId != certificateDetail.value.applicantId
            ) {
              isUserCertified.value = false;
            }
            if (
              adminRegionId != certificateDetail.value.woreda.zone.region.id
            ) {
              myRegion.value = false;
            }
          });
      } else if (route.params.applicationType === "New License") {
        store
          .dispatch(
            "reviewer/getNewLicenseApplication",
            route.params.applicationId
          )
          .then((res) => {
            showApplicationLoading.value = false;
            certificateDetail.value = res.data.data;
            console.log("certificate detail is ", certificateDetail.value)
            if (
              route.params.applicantId != certificateDetail.value.applicantId
            ) {
              isUserCertified.value = false;
            }
            if (
              adminRegionId != certificateDetail.value.woreda.zone.region.id
            ) {
              myRegion.value = false;
            }
          });
      } else if (route.params.applicationType === "Renewal") {
        store
          .dispatch(
            "reviewer/getRenewalApplication",
            route.params.applicationId
          )
          .then((res) => {
            showApplicationLoading.value = false;
            certificateDetail.value = res.data.data;
            if (
              route.params.applicantId != certificateDetail.value.applicantId
            ) {
              isUserCertified.value = false;
            }
            if (
              adminRegionId != certificateDetail.value.woreda.zone.region.id
            ) {
              myRegion.value = false;
            }
          });
      }
    };

    const handleRegionsLayout = (code, namePosition, professionPossition) => {
      doc.setFontSize(17);
      doc.text(
        190,
        100,
        `${certifiedUser.value.name} ${certifiedUser.value.fatherName} ${
          certifiedUser.value.grandFatherName
            ? certifiedUser.value.grandFatherName
            : ""
        }`
      );

      let changeWidth = ref(false);
      let xPosition = ref(185);
      for (
        let i = 0;
        i < certificateDetail.value.professionalTypes.length;
        i++
      ) {
        console.log(
          "length is ",
          doc.getTextWidth(
            certificateDetail.value.professionalTypes[i].professionalTypes.name
          )
        );
        let getLength = doc.getTextWidth(
          certificateDetail.value.professionalTypes[i].professionalTypes.name
        );
        if (getLength > 125) {
          changeWidth.value = true;
        }
      }
      if (changeWidth.value) {
        doc.setFontSize(10);
        xPosition.value = 153;
      } else {
        doc.setFontSize(14);
      }
      for (
        let i = 0;
        i < certificateDetail.value.professionalTypes.length;
        i++
      ) {
        doc.text(
          xPosition.value,
          125 + i * 7,
          `${
            certificateDetail.value.professionalTypes[i].professionalTypes.name
              ? certificateDetail.value.professionalTypes[i].professionalTypes
                  .name
              : ""
          }`
        );
      }
    }

    const downloadPdf = () => {
      const doc = new jsPDF({
        orientation: "landscape",
        filters: ["ASCIIHexEncode"],
      });

      const userImage = certifiedUser.value.photo;
      if (certificateDetail.value.reviewer.expertLevel.code === "FED") {
        doc.addImage(
          backgroundImage,
          "JPEG",
          0,
          0,
          298,
          213,
          undefined,
          "FAST"
        );
      } else if (certificateDetail.value.reviewer.region.code === "ORO") {
        doc.addImage(
          oromiaCertificateBackground,
          "JPEG",
          0,
          0,
          298,
          213,
          undefined,
          "FAST"
        );
      } else if (certificateDetail.value.reviewer.region.code === "AA") {
        doc.addImage(
          addisAbabaCertificateBackground,
          "JPEG",
          0,
          0,
          298,
          213,
          undefined,
          "FAST"
        );
      }

      // doc.addImage(backgroundImage, "JPEG", 0, 0, 298, 213, undefined, "FAST");
      doc.addImage(imageSrc.value, "JPG", 246, 14, 40, 40);
      if (userImage !== null) {
        doc.addImage(userImage, "JPEG", 33, 20, 30, 30);
      }
      doc.setFontSize(25);
      // doc.addFileToVFS("Amiri-Regular.ttf", AmiriRegular);
      doc.addFileToVFS("Tera-Regular-normal.ttf", AmharicFont);

      doc.addFont("Tera-Regular-normal.ttf", "Tera-Regular", "normal");

      
      // if (certificateDetail.value.professionalTypes.length === 1) {
      //   doc.text(
      //     185,
      //     122,
      //     `${
      //       certificateDetail.value.professionalTypes[0].professionalTypes.name
      //         ? certificateDetail.value.professionalTypes[0].professionalTypes
      //             .name
      //         : ""
      //     }`
      //   );
      // } else if (certificateDetail.value.professionalTypes.length === 2) {
      //   let firstTextWidth = doc.getTextWidth(
      //     certificateDetail.value.professionalTypes[0].professionalTypes.name
      //   );
      //   doc.setFontSize(12);
      //   doc.text(
      //     175,
      //     122,
      //     `${certificateDetail.value.professionalTypes[0].professionalTypes.name}`
      //   );
      //   doc.text(
      //     168 + firstTextWidth,
      //     122,
      //     `, ${certificateDetail.value.professionalTypes[1].professionalTypes.name}`
      //   );
      // } else if (certificateDetail.value.professionalTypes.length === 3) {
      //   let firstTextWidth = doc.getTextWidth(
      //     certificateDetail.value.professionalTypes[0].professionalTypes.name
      //   );
      //   let secondTextWidth = doc.getTextWidth(
      //     certificateDetail.value.professionalTypes[1].professionalTypes.name
      //   );

      //   doc.setFontSize(10);
      //   doc.text(
      //     175,
      //     122,
      //     `${certificateDetail.value.professionalTypes[0].professionalTypes.name}`
      //   );
      //   doc.text(
      //     168 + firstTextWidth,
      //     122,
      //     `, ${certificateDetail.value.professionalTypes[1].professionalTypes.name}`
      //   );
      //   doc.text(
      //     160 + firstTextWidth + secondTextWidth,
      //     122,
      //     `, ${certificateDetail.value.professionalTypes[1].professionalTypes.name}`
      //   );
      // }
      // doc.text(190, 170, 'DENTAL SURGON')
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
      doc.setFont("Tera-Regular"); // set font

      doc.setFontSize(17);
      doc.text(
        60,
        100,
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

      if (changeWidth.value) {
        doc.setFontSize(11);
        xPosition.value = 28;
      } else {
        doc.setFontSize(14);
        xPosition.value = 65;
      }

      for (
        let i = 0;
        i < certificateDetail.value.professionalTypes.length;
        i++
      ) {
        doc.text(
          xPosition.value,
          125 + i * 7,
          `${
            certificateDetail.value.professionalTypes[i].professionalTypes.name
              ? certificateDetail.value.professionalTypes[i].professionalTypes
                  .amharicProfessionalType
              : ""
          }`
        );
      }
      // if (certificateDetail.value.professionalTypes.length === 1) {
      //   doc.text(
      //     65,
      //     117,
      //     `${
      //       certificateDetail.value.professionalTypes[0].professionalTypes
      //         .amharicProfessionalType
      //         ? certificateDetail.value.professionalTypes[0].professionalTypes
      //             .amharicProfessionalType
      //         : ""
      //     }`
      //   );
      // } else if (certificateDetail.value.professionalTypes.length === 2) {
      //   let firstTextWidth = doc.getTextWidth(
      //     certificateDetail.value.professionalTypes[0].professionalTypes
      //       .amharicProfessionalType
      //   );
      //   doc.setFontSize(12);
      //   doc.text(
      //     44,
      //     117,
      //     `${certificateDetail.value.professionalTypes[0].professionalTypes.amharicProfessionalType}`
      //   );
      //   doc.text(
      //     38 + firstTextWidth,
      //     117,
      //     `, ${certificateDetail.value.professionalTypes[1].professionalTypes.amharicProfessionalType}`
      //   );
      // } else if (certificateDetail.value.professionalTypes.length === 3) {
      //   let firstTextWidth = doc.getTextWidth(
      //     certificateDetail.value.professionalTypes[0].professionalTypes
      //       .amharicProfessionalType
      //   );
      //   let secondTextWidth = doc.getTextWidth(
      //     certificateDetail.value.professionalTypes[1].professionalTypes
      //       .amharicProfessionalType
      //   );
      //   doc.setFontSize(10);
      //   doc.text(
      //     44,
      //     117,
      //     `${certificateDetail.value.professionalTypes[0].professionalTypes.amharicProfessionalType}`
      //   );
      //   doc.text(
      //     38 + firstTextWidth,
      //     117,
      //     `, ${certificateDetail.value.professionalTypes[1].professionalTypes.amharicProfessionalType}`
      //   );
      //   doc.text(
      //     35 + firstTextWidth + secondTextWidth,
      //     117,
      //     `, ${certificateDetail.value.professionalTypes[1].professionalTypes.amharicProfessionalType}`
      //   );
      // }
      // doc.text(40, 163, "ሙያ መዝግቦ ይህን የሙያ ስራ ፈቃድ ሰጥቷል።");
      doc.setFontSize(12);
      // doc.text(80)
      doc.text(
        77,
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
        105,
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
      // doc.text(10, 203, `ቀን: ${toEthiopian(new Date().toISOString(), false)}`)
      doc.setFontSize(10);

      window.open(doc.output("bloburl"));
    };
    onMounted(() => {
      fetchQrCode();
      fetchCertifiedUser();
      fetchApplication();
    });
    return {
      show,
      downloadPdf,
      certifiedUser,
      showLoading,
      certificateDetail,
      isUserCertified,
      isUserFound,
      myRegion,
    };
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial;
  font-size: 17px;
}

.container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.container img {
  vertical-align: middle;
  opacity: 0.35;
}

.container .content {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0); /* Fallback color */
  background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}
.flex-container {
  /* margin-top: -500px; */
  display: flex;
  justify-content: center;
}
.flex-container > div {
  margin: 40px;
  margin-top: -690px;
  color: black;
}
.flex-center {
  padding-left: 25%;
  justify-content: center;
}
.flex-second-container {
  display: flex;
  justify-content: center;
}
.flex-second-container > div {
  margin: 40px;
  margin-top: -550px;
}
.userNotFound {
  margin-top: 10%;
}
</style>
