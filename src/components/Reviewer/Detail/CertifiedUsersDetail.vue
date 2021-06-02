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
      
      <span v-if="isUserCertified">
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
            <div class="content">
            </div>
            <span id="main">
            <div class="flex-container">
              <div><h4><b>No Photo<br/> Available</b></h4></div>
              <div class="inner-flex">
                <h2><b>በኢትዮፕያ ፌደራላዊ ዴሞክራሲያዊ ሪፐብሊክ</b></h2>
                <h2><b>Federal Democratic Republic Ethiopia</b></h2>
                 <br/> 
                <div class="flex-center">
                  <h2>የጤና ጥበቃ ሚኒስቴር</h2>
                  <h2>Ministry of Health</h2>
                </div>
              </div>
              <div>
                <h6>የምዝገባ ቁጥር: {{certifiedUser.newLicenseCode}}</h6>
              </div>
            </div>
            <div class="flex-second-container">
              <div>
                <h3 class="underline"><b>የጤና ባለሙያዎች የሙያ ምዝገባና ፈቃድ የምስከር ወረቀት</b></h3>
                <br>
                <h4>በኢትዮጵያ ፌዴራላዊ ዴሞክራሲያዊ ረፐብሊክ የጤና ጥበቃ ሚንስቴር </h4>
                <h4>በአዋጅ ቁጥር 916/2008 አንቀጽ 33(13)በተሰጠው ስልጣን መሰረት</h4>
                <br><br><br><br>
                <h3 class="underline">
                  <b>{{ certifiedUser.name }} {{ certifiedUser.fatherName }}
                    {{
                      certifiedUser.grandFatherName != null
                        ? certifiedUser.grandFatherName
                        : ""}}</b>
                    </h3>
                    <h4>ተገቢውን መስፈርት አሟልተው ስለተገኙ ሚኒስቴር መስሪያ ቤቱ</h4>
                    <h4><b>ጁኒየር ጀነራልሜዲካል ፕራክቲሽነር</b></h4>
                    <br>
                    <h3>ሙያ መዝግቦ ይህን የሙያ ስራ ፈቃድ ሰጥቷል።</h3>
                    <h3>ይህ የሙያ የስራ ፈቃድ የሚያገለግለው <b>
                      {{toEthiopian(moment(certificateDetail.certifiedDate)._d.toISOString(), false)}}
                      -{{toEthiopian(moment(licenseExpireDate)._d.toISOString(), false)}}
                      </b></h3>
              </div>
              <div>
                <h3 class="underline"><b>HEALTH PROFFESSIONALS REGISTRATION AND</b></h3>
                <h3 class="underline"><b>LICENSING CERTEFICATE</b></h3>
                <br>
                <h4>Under the Federal Democratic Republic of Ethiopiathe Minstry</h4>
                <h4>of Health by Virtue of proclamation No. 916/2015 Article 33(13)</h4>
                <h4>is given the authority to issue</h4>
                <br>
                <h3 class="underline">
                  <b>{{ certifiedUser.name }} {{ certifiedUser.fatherName }}
                    {{
                      certifiedUser.grandFatherName != null
                        ? certifiedUser.grandFatherName
                        : ""}}</b>
                    </h3>
                    <h4>Having duly satisfied the requirements of the Ministry</h4>
                    <h4>hereby registered and licensed as</h4>
                    <h4><b>Junior General Medical Practitioner</b></h4>
                    <br>
                    <h3>The license is valid:<b>{{moment(certificateDetail.certifiedDate).format("MMM DD, YYYY")}} - {{moment(licenseExpireDate).format("MMM DD, YYYY")}}</b></h3>
              </div>

            </div>
            </span> 
          </div>
        </div>
      </div>
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
import backgroundImage from "../../../assets/certificate_background.jpg";
import certifiedUserImage from "../../../assets/certified_user.jpg";
import AmharicFont from "../Configurations/amharicFont.js";
import { toEthiopian } from "../Configurations/dateConvertor";

import moment from "moment";
export default {
  computed: {
    moment: () => moment,
    AmharicFont: () => AmharicFont,
    toEthiopian: () => toEthiopian,
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
    let licenseExpireDate = ref({});
    let showLoading = ref(false);
    let showApplicationLoading = ref(false);
    let isUserCertified = ref(true);
    let isUserFound = ref(true);

    const fetchCertifiedUser = () => {
      showLoading.value = true;
      store
        .dispatch("profile/getProfileByUserId", route.params.applicantId)
        .then((res) => {
          showLoading.value = false;
          certifiedUser.value = res.data.data;
          show.value = true;
        }).catch(error => {
          isUserFound.value = false;
        });
    };

    
    const fetchApplication = () => {
      showApplicationLoading.value = true;
      if(route.params.applicationType === "Verification") {
        store
        .dispatch(
          "reviewer/getVerificationApplication",
          route.params.applicationId
        )
        .then((res) => {
          showApplicationLoading.value = false;
          certificateDetail.value = res.data.data;
          if(route.params.applicantId != certificateDetail.value.applicantId) {
            isUserCertified.value = false;
          }
        }).catch(error => {
          console.log("oops error found",error)
        });
      }
      else if(route.params.applicationType === "Good Standing") {
        store
        .dispatch(
          "reviewer/getGoodStandingApplication",
          route.params.applicationId
        )
        .then((res) => {
          showApplicationLoading.value = false;
          certificateDetail.value = res.data.data;
          if(route.params.applicantId != certificateDetail.value.applicantId) {
            isUserCertified.value = false;
          }
        });
      }
      else if(route.params.applicationType === "New License") {
        store
        .dispatch(
          "reviewer/getNewLicenseApplication",
          route.params.applicationId
        )
        .then((res) => {
          showApplicationLoading.value = false
          certificateDetail.value = res.data.data;
          if(route.params.applicantId != certificateDetail.value.applicantId) {
            isUserCertified.value = false;
          }
          licenseExpireDate.value = moment(certificateDetail.value.certifiedDate)._d;
          licenseExpireDate.value.setFullYear(licenseExpireDate.value.getFullYear() + 5);
        });

      } else if(route.params.applicationType === "Renewal") {
        store
        .dispatch(
          "reviewer/getRenewalApplication",
          route.params.applicationId
        )
        .then((res) => {
          showApplicationLoading.value = false;
          certificateDetail.value = res.data.data;
          if(route.params.applicantId != certificateDetail.value.applicantId) {
            isUserCertified.value = false;
          }
        });
      }
      
    };

    const downloadPdf = () => {
      const doc = new jsPDF({
        orientation: 'landscape',
        filters: ["ASCIIHexEncode"]
      });
      

      
      
      doc.addImage(backgroundImage, 'JPG', 0, 0, 430, 220, undefined, 'FAST')
      doc.addImage(certifiedUserImage, 'JPG', 5, 5, 20, 30)
      doc.setFontSize(25)
      // doc.addFileToVFS("Amiri-Regular.ttf", AmiriRegular);
      doc.addFileToVFS("Tera-Regular-normal.ttf", AmharicFont);
      
      doc.addFont('Tera-Regular-normal.ttf', 'Tera-Regular', 'normal');

      
      // doc.text(100, 60, ["إذا لم تستح فاصنع ما شئت", "إذا لم تستح فاصنع ما شئت"], {lang: 'ar', align: 'right'});
      // doc.text(100, 20, 'በኢትዮፕያ ፌደራላዊ ዴሞክራሲያዊ ሪፐብሊክ', {lang: 'amh', align: 'right'})
      // doc.setFontStyle('bold')
      doc.text(80, 22, 'Federal Democratic Republic Ethiopia')
      doc.setFontSize(17)
      // doc.setFontStyle('normal')
      doc.text(110, 50, 'MINSTRY OF HEALTH')

      doc.text(150, 60, 'HEALTH PROFFESSIONALS REGISTRATION AND')
      doc.text(190, 70, 'LICENSING CERTIFICATE')

      doc.setFontSize(15)
      doc.text(150, 90, 'Under the Federal Democratic Republic of Ethiopia the Ministry')
      doc.text(150, 100, 'of Health by virtue of Proclamation No.916/2015 Article 33(13)')
      doc.text(190, 110, 'is given the authority to issue')

      doc.setFontSize(17)
      doc.text(190, 130, `${certifiedUser.value.name} ${certifiedUser.value.fatherName} ${certifiedUser.value.grandFatherName ? certifiedUser.value.grandFatherName : ''}`)
      doc.text(60, 130, `${certifiedUser.value.name} ${certifiedUser.value.fatherName} ${certifiedUser.value.grandFatherName ? certifiedUser.value.grandFatherName : ''}`)
      doc.setFontSize(15)
      doc.text(155, 140, 'Having duly satisfied the requirements of the Ministry')
      doc.text(180, 147, 'hereby registered and licensed as')
      doc.setFontSize(17)
      doc.text(200, 160, 'Junior')
      doc.text(190, 170, 'DENTAL SURGON')
      doc.text(160, 180, `This license is valid: ${moment(certificateDetail.value.certifiedDate).format("MMM DD, YYYY")} - ${moment(licenseExpireDate.value).format("MMM DD, YYYY")}`)
      doc.setFontSize(7)
      doc.text(150, 200, 'Signature of the Authorized Personel')
      doc.text(150, 203, 'Date: ' + moment(new Date()).format("MMM DD, YYYY"))
      doc.text(200, 200, 'NB:- This Certificate')
      doc.text(200, 203, '1. Shall be renewed every five years.')
      doc.text(200, 206, '2. Unlawful if it is found being used by another person.')
      doc.text(200, 209, '3. The holder is required to notify as soon as the certificate is lost or missed.')

      // doc.text(100, 30, 'የጤና ጥበቃ ሚኒስቴር')
      // doc.setFontSize(15)
      // doc.text(100, 35, 'Ministry of Health')
      doc.setFont("Tera-Regular"); // set font
      doc.setFontSize(25);
      doc.text(90, 10, "በኢትዮፕያ ፌደራላዊ ዴሞክራሲያዊ ሪፐብሊክ")
      doc.setFontSize(20)
      doc.text(115, 40, "የጤና ጥበቃ ሚኒስቴር")
      doc.setFontSize(17)
      doc.text(20, 60, "የጤና ባለሙያዎች የሙያ ምዝገባና ፈቃድ የምስከር ወረቀት")

      doc.setFontSize(15)
      doc.text(20, 90, "በኢትዮጵያ ፌዴራላዊ ዴሞክራሲያዊ ረፐብሊክ የጤና ጥበቃ ሚንስቴር")
      doc.text(20, 100, "በአዋጅ ቁጥር 916/2008 አንቀጽ 33(13)በተሰጠው ስልጣን መሰረት")

      doc.setFontSize(17)
      
      doc.setFontSize(15)
      doc.text(20, 140, "ተገቢውን መስፈርት አሟልተው ስለተገኙ ሚኒስቴር መስሪያ ቤቱ")
      doc.setFontSize(17)
      doc.text(65, 150, "ጁኒየር")
      doc.text(55, 160, "ጀነራልሜዲካል ፕራክቲሽነር")
      doc.text(40, 170, "ሙያ መዝግቦ ይህን የሙያ ስራ ፈቃድ ሰጥቷል።")
      doc.text(15, 180, `ይህ የሙያ የስራ ፈቃድ የሚያገለግለው ${toEthiopian(moment(certificateDetail.value.certifiedDate)._d.toISOString(), false)}-${toEthiopian(moment(licenseExpireDate.value)._d.toISOString(), false)}`)
      // doc.text(10, 203, `ቀን: ${toEthiopian(new Date().toISOString(), false)}`)
      doc.setFontSize(10)
      doc.text(10, 200, "የኃላፊ ፊርማ")
      // doc.text(10, 203, `ቀን: ${toEthiopian(new Date().toISOString(), false)}`)
      doc.text(10, 203, `ቀን ${toEthiopian(new Date().toISOString(), false)}`)
      doc.text(35, 200, "ማሳሰቢያ ይህ የምስክር ወረቀት")
      doc.text(35, 203, "1. በየአምስት አመቱ መታደስ አለበት።")
      doc.text(35, 206, "2. ሰምና ፎቶግራፍ ከተገለጸው ሰው በስተቀር ሌላ አካል ሊገለገልበት አይገባም።")
      doc.text(35, 209, "3. በማንኛውም ምክንኛት ቢጠፋ የማሳወቅ ግዴታ አላብዎ።")


      // add underline here
      doc.setLineWidth(0.3)
      doc.line(20, 63, 140, 63)
      doc.line(150, 63, 290, 63)
      doc.line(190, 73, 265, 73)
      doc.line(50, 133, 120, 133)
      doc.line(180, 133, 260, 133)

      doc.line(5, 195, 100, 195)
      doc.line(170, 195, 265, 195)
      doc.line(35, 200, 45, 200)


      
      window.open(doc.output('bloburl'))

    };
    onMounted(() => {
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
      licenseExpireDate,
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
  color: black
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