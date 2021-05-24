<template>
  <div class="bg-lightBlueB-200">
    <ReviewerNavBar tab="certifiedUsers" />
    <span v-if="!showLoading">
      <button @click="downloadPdf">Download PDF</button>
      <div class="bg-lightBlueB-200 h-full">
        <div
          v-if="show"
          style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
          class="ml-8 mr-8 mb-12"
        >
          <div class="flex justify-center">
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
          </div>

          <!-- <div class="container">
            <img
              src="../../../assets/certeficate_Background_image.jpg"
              alt="Notebook"
              style="width: 100%"
            /> -->
            <!-- <div class="content"> -->
            <!-- </div> -->
            <!-- <span id="main">
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
                    <h3>ይህ የሙያ የስራ ፈቃድ የሚያገለግለው <b>17/08/2013-19/08/2018</b></h3>
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
                    <h3>The license is valid:<b>25/08/2021-27/08/2026</b></h3>
              </div>

            </div>
            </span> 
          </div> -->
        </div>
      </div>
    </span>
    <span
      v-if="showLoading"
      class="flex justify-center justify-items-center mt-24"
    >
      <Spinner />
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

import moment from "moment";
export default {
  computed: {
    moment: () => moment,
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

    const fetchCertifiedUser = () => {
      showLoading.value = true;
      store
        .dispatch("profile/getProfileByUserId", route.params.applicantId)
        .then((res) => {
          showLoading.value = false;
          certifiedUser.value = res.data.data;
          show.value = true;
        });
    };

    
    const fetchApplication = () => {
      if(route.params.applicationType === "Verification") {
        store
        .dispatch(
          "reviewer/getVerificationApplication",
          route.params.applicationId
        )
        .then((res) => {
          certificateDetail.value = res.data.data;
          console.log("data is ", certificateDetail.value)
        });
      }
      else if(route.params.applicationType === "Good Standing") {
        store
        .dispatch(
          "reviewer/getGoodStandingApplication",
          route.params.applicationId
        )
        .then((res) => {
          certificateDetail.value = res.data.data;
          console.log("data is ", certificateDetail.value)
        });
      }
      else if(route.params.applicationType === "New License") {
        store
        .dispatch(
          "reviewer/getNewLicenseApplication",
          route.params.applicationId
        )
        .then((res) => {
          certificateDetail.value = res.data.data;
          console.log("data is ", certificateDetail.value)
        });

      } else if(route.params.applicationType === "Renewal") {
        store
        .dispatch(
          "reviewer/getRenewalApplication",
          route.params.applicationId
        )
        .then((res) => {
          certificateDetail.value = res.data.data;
          console.log("data is ", certificateDetail.value)
        });
      }
      
    };

    const downloadPdf = () => {
      // var canvas  = document.getElementById("main");
      // html2canvas(document.body).then(function(canvas) {
      //   var imageData = canvas.toDataURL('image/png')
      //   var doc = new jspdf();
      //   doc.addImage(imageData, 'PNG', 10, 10)
      //   doc.save('certi-1.pdf')
      // })
      window.html2canvas = html2canvas;
      var doc = new jsPDF("p", "pt", "a3");
      doc.html(document.querySelector("#main"), {
        callback: function (pdf) {
          console.log("start downloading", pdf);
          pdf.save("certeficate.pdf");
        },
      });
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
</style>