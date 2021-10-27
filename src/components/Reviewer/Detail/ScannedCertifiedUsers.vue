<template>
  <!-- <div class="bg-lightBlueB-200">
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
              <div></div>
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
                  <b>{{ certifiedUser.alternativeName != null
                    ? certifiedUser.alternativeName: ""}} {{ certifiedUser.alternativeFatherName
                    != null ? certifiedUser.alternativeFatherName: "" }}
                    {{
                      certifiedUser.alternativeGrandFatherName != null
                        ? certifiedUser.alternativeGrandFatherName
                        : ""}}</b>
                    </h3>
                    <h4>ተገቢውን መስፈርት አሟልተው ስለተገኙ ሚኒስቴር መስሪያ ቤቱ</h4>
                    <h4><b>{{certificateDetail.professionalTypes ? (certificateDetail.professionalTypes.name != null ? certificateDetail.professionalTypes.name : " ") : " "}}</b></h4>
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
                    <h4><b>{{certificateDetail.professionalTypes ? (certificateDetail.professionalTypes.name != null ? certificateDetail.professionalTypes.name : " ") : " "}}</b></h4>
                    <br>
                    <h3>The license is valid:<b>{{moment(certificateDetail.certifiedDate).format("MMM DD, YYYY")}} - {{moment(licenseExpireDate).format("MMM DD, YYYY")}}</b></h3>
              </div>

            </div>
            </span> 
          </div>
        </div>
      </div>
      <div>
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
    
  </div> -->

  <div class="container">
      <div class="">
        <img class="moh-logo" src="../../../assets/image.png" />
      </div>
      <div class="title">
        <h2>Health Professionals Certificate</h2>
      </div>
      <div class="name">
        <h3>Mahlet Samuel Akalu  ማህሌት ሳሙኤል አካሉ</h3> 
      </div>
      <div>
        <h4>Having duly satisfied the requirement of the ministry hereby</h4>
        <h4>registered and licensed as Dental Medicine</h4>
      </div>
      <div>
        <h4>This license is valid: Oct 09, 2021 - Oct 10, 2026</h4>
      </div>
      <div>
        <h5>Ethiopian Ministry of Health</h5>
      </div>
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
import image from "../../../assets/image.png";

import { toEthiopian } from "../Configurations/dateConvertor";

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
    let licenseExpireDate = ref({});
    let showLoading = ref(false);
    let showApplicationLoading = ref(false);
    let isUserCertified = ref(true);
    let isUserFound = ref(true);
    let myRegion = ref(true);

    const adminRegionId = JSON.parse(localStorage.getItem("allAdminData")).regionId
    const expertLevelId = JSON.parse(localStorage.getItem("allAdminData")).expertLevelId

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
          if (certificateDetail.value.woreda !== null && certificateDetail.value.woreda.zone !== null && certificateDetail.value.woreda.zone.region !== null) {
          if(adminRegionId != certificateDetail.value.woreda.zone.region.id) {
            myRegion.value = false
          } 
          } else {
            if (
                expertLevelId != goodStandingUser.value.expertLevelId
              ) {
                myRegion.value = false;
              }
          }
          licenseExpireDate.value = moment(certificateDetail.value.certifiedDate)._d;
          licenseExpireDate.value.setFullYear(licenseExpireDate.value.getFullYear() + 5);
        }).catch(error => {
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
          if(adminRegionId != certificateDetail.value.woreda.zone.region.id) {
            myRegion.value = false
          }
          licenseExpireDate.value = moment(certificateDetail.value.certifiedDate)._d;
          licenseExpireDate.value.setFullYear(licenseExpireDate.value.getFullYear() + 5);
        });
      }
      else if(route.params.applicationType === "New License") {
        store
        .dispatch(
          "reviewer/getNewLicenseApplication",
          route.params.applicationId
        )
        .then((res) => {
          console.log("renewalal detail", res.data.data)
          showApplicationLoading.value = false
          certificateDetail.value = res.data.data;
          if(route.params.applicantId != certificateDetail.value.applicantId) {
            isUserCertified.value = false;
          }
          if(adminRegionId != certificateDetail.value.woreda.zone.region.id) {
            myRegion.value = false
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
          console.log("renewalal detail", res.data.data)
          showApplicationLoading.value = false;
          certificateDetail.value = res.data.data;
          if(route.params.applicantId != certificateDetail.value.applicantId) {
            isUserCertified.value = false;
          }
          if(adminRegionId != certificateDetail.value.woreda.zone.region.id) {
            myRegion.value = false
          }
          licenseExpireDate.value = moment(certificateDetail.value.certifiedDate)._d;
          licenseExpireDate.value.setFullYear(licenseExpireDate.value.getFullYear() + 5);
        });
      }
      
    };


    onMounted(() => {
      fetchCertifiedUser();
      fetchApplication();
    });
    return {
      show,
      certifiedUser,
      showLoading,
      certificateDetail,
      isUserCertified,
      isUserFound,
      myRegion,
      licenseExpireDate,
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 5%;
}
/* .container div {
  display: flex;
  align-self: center;
} */
.container img {
  width: 100px;
  height: 100px;
}
.title {
  position: relative;
  margin-top: 1%;
}
.title h2 {
  color: #000;
  font-size: 40px;
}
/* * {
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
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); 
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}
 .flex-container {
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
} */
</style>