<template>
  <div class="bg-lightBlueB-200">
    <ReviewerNavBar tab="recentlyFinished" />
    <div class="bg-lightBlueB-200 h-full">
      <div
        v-if="show"
        style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)"
        class="ml-8 mr-8 mb-12"
      >
        <div class="mt-large bg-white">
          <span v-if="isGoodStanding">
          <button @click="GenerateLetter">Generate Letter</button>
          </span>
          <div class="flex justify-center"><Title message="Summary" /></div>
          <div class="flex justify-start">
            <Title message="Personal Info" />
          </div>
          <div class="flex flex-row">
            <div
              :class="[profileInfo.name === null ? errorClass : activeClass]"
            >
              <label class="ml-8"> Full Name</label>
              <h5 class="ml-8">
                {{
                  profileInfo.name +
                  " " +
                  profileInfo.fatherName +
                  " " +
                  profileInfo.grandFatherName
                }}
              </h5>
            </div>
            <div
              :class="[profileInfo.gender === null ? errorClass : activeClass]"
            >
              <label class="ml-8"> Gender</label>
              <h5 class="ml-8">
                {{ profileInfo.gender ? profileInfo["gender"] : "-" }}
              </h5>
            </div>
            <div
              :class="[
                profileInfo.nationality === null ? errorClass : activeClass,
              ]"
            >
              <label class="ml-8"> Nationality</label>
              <h5 class="ml-8">
                {{ profileInfo.nationality ? profileInfo.nationality : "-" }}
              </h5>
            </div>
            <div
              :class="[
                profileInfo.placeOfBirth === null ? errorClass : activeClass,
              ]"
            >
              <label class="ml-8"> Place of Birth</label>
              <h5 class="ml-8">
                {{ profileInfo.placeOfBirth ? profileInfo.placeOfBirth : "-" }}
              </h5>
            </div>
            <div
              :class="[
                profileInfo.dateOfBirth === null ? errorClass : activeClass,
              ]"
            >
              <label class="ml-8"> Date of Birth</label>
              <h5 class="ml-8">
                {{ profileInfo.dateOfBirth ? moment(profileInfo.dateOfBirth).format("MMM D, YYYY") : "-" }}
              </h5>
            </div>
            <div
              :class="[
                profileInfo.maritalStatus.name === null
                  ? errorClass
                  : activeClass,
              ]"
            >
              <label class="ml-8"> Marital Status</label>
              <h5 class="ml-8">
                {{
                  profileInfo.maritalStatus.name
                    ? profileInfo.maritalStatus.name
                    : "-"
                }}
              </h5>
            </div>
          </div>

          <div class="flex justify-start">
            <Title message="Address" />
          </div>
          <div class="flex flex-row">
            <div
              :class="[
                license.woreda.zone.region === null
                  ? errorClass
                  : activeClass,
              ]"
            >
              <label class="ml-8"> Region</label>
              <h5 class="ml-8">
                {{
                  license.woreda.zone.region
                    ? license.woreda.zone.region.name
                    : "-"
                }}
              </h5>
            </div>
            <div
              :class="[
                license.woreda.zone === null ? errorClass : activeClass,
              ]"
            >
              <label class="ml-8"> Zone</label>
              <h5 class="ml-8">
                {{
                  license.woreda.zone ? license.woreda.zone.name : "-"
                }}
              </h5>
            </div>
            <div
              :class="[license.woreda === null ? errorClass : activeClass]"
            >
              <label class="ml-8"> Wereda</label>
              <h5 class="ml-8">
                {{ license.woreda ? license.woreda.name : "-" }}
              </h5>
            </div>
            <div
              :class="[profileInfo.kebele === null ? errorClass : activeClass]"
            >
              <label class="ml-8"> Kebele</label>
              <h5 class="ml-8">
                {{ profileInfo.kebele ? profileInfo.kebele : "-" }}
              </h5>
            </div>
            <div
              :class="[
                profileInfo.houseNumber === null ? errorClass : activeClass,
              ]"
            >
              <label class="ml-8"> House Number</label>
              <h5 class="ml-8">
                {{ profileInfo.houseNumber ? profileInfo.houseNumber : "-" }}
              </h5>
            </div>
            <div
              :class="[
                profileInfo.residence === null ? errorClass : activeClass,
              ]"
            >
              <label class="ml-8"> Residence</label>
              <h5 class="ml-8">
                {{ profileInfo.residence ? profileInfo.residence : "-" }}
              </h5>
            </div>
          </div>
          <div class="flex justify-start">
            <Title message="Contact" />
          </div>
          <div class="flex flex-row">
            <div
              :class="[
                profileInfo.user.phoneNumber === null
                  ? errorClass
                  : activeClass,
              ]"
            >
              <label class="ml-8"> Mobile Number</label>
              <h5 class="ml-8">
                {{
                  profileInfo.user.phoneNumber
                    ? profileInfo.user.phoneNumber
                    : "-"
                }}
              </h5>
            </div>

            <div
              :class="[
                profileInfo.user.emailAddress === null
                  ? errorClass
                  : activeClass,
              ]"
            >
              <label class="ml-8"> Email</label>
              <h5 class="ml-8">
                {{
                  profileInfo.user.emailAddress
                    ? profileInfo.user.emailAddress
                    : "-"
                }}
              </h5>
            </div>
            <div
              :class="[
                profileInfo.userType.name === null ? errorClass : activeClass,
              ]"
            >
              <label class="ml-8"> User Type</label>
              <h5 class="ml-8">
                {{
                  profileInfo.userType.name ? profileInfo.userType.name : "-"
                }}
              </h5>
            </div>
          </div>
          <div class="flex justify-start">
            <Title message="Institution" />
          </div>
          <div class="flex flex-row">
            <div>
              <label class="ml-8"> Institution Name</label>
              <h5 class="ml-8">{{ education.institutionName }}</h5>
            </div>
            <div>
              <label class="ml-8"> Department</label>
              <h5 class="ml-8">{{ education.departmentName }}</h5>
            </div>
            <div>
              <label class="ml-8"> Institution Type</label>
              <h5 class="ml-8">{{ education.institutionTypeName }}</h5>
            </div>
          </div>
          <div class="flex justify-start flex-wrap">
            <!-- <div v-for="file in docs" v-bind:key="file.id">
              <Title class="" :message="file.fieldName" />
              <picture>
                <img :src="basePath + file.filePath" />
              </picture>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <span
      v-if="showLoading"
      class="flex justify-center justify-items-center mt-24"
    >
      <Spinner />
    </span>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import Title from "@/sharedComponents/Title";
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import { mapGetters } from "vuex";
import { ref, onMounted } from "vue";
import Spinner from "@/sharedComponents/Spinner";
import moment from 'moment';
import jsPDF from 'jspdf';

export default {
  props: ["activeState"],
  components: {
    Title,
    ReviewerNavBar,
    Spinner,
  },
  computed: {
    moment: () => moment,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    

    let show = ref(false);

    let showLoading = ref(false);
    let isUserApproved = ref(false);

    let isGoodStanding = ref(false);

    let goodStandingUser = ref({});
    let gender = ref("");
    let grandFatherName = ref("");

    let license = ref({
      applicant: {},
      applicantType: {},
      education: {
        institution: {
          institutionType: {},
        },
        department: {},
      },
    });
    let profileInfo = ref({
      maritalStatus: {},
      woreda: {
        zone: {},
      },
      user: {},
      userType: {},
    });
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

    const GenerateLetter = () => {
      
      const doc = new jsPDF({orientation: 'landscape'})
      const pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth;
      doc.setFontSize(20);
      doc.setFont('times', 'bold');
      doc.text(40, 58, "To: Education Commission for foreign medical graduates.")
      doc.setFontSize(14);
      
      const letter = "LETTER OF GOOD STANDING";
      doc.text(letter, pageWidth / 2, 75, {align: 'center'});
      const letterPosition = pageWidth /2 - doc.getTextWidth(letter) / 2;
      doc.line(letterPosition, 77, letterPosition + doc.getTextWidth(letter), 77);
      doc.setFontSize(15);
      
      doc.setFont('times', 'normal');
      doc.text(40, 90, "This letter of good standing and" + 
                        "confirmation of registration is written" +
                        " upon request of " + goodStandingUser.value.applicant.profile.name
                         + " " + goodStandingUser.value.applicant.profile.fatherName+ " " +
                          grandFatherName.value+".");
      doc.text(40, 100, goodStandingUser.value.applicant.profile.name + " " + 
                        goodStandingUser.value.applicant.profile.fatherName + 
                        " " +  grandFatherName. value + " " + 
                         "was registered as Junior General Medical Practitioner on " 
                         + moment(new Date).format("MMMM D, YYYY") + " by");
      doc.text(40, 110, "The Food, Medicine & Health Care Administration and Control Authority of Ethiopia, which is the responsible");
      doc.text(40, 120, `organ for registration and licensing of health professinals and ${gender.value == "male"? "his": "her"} registration number is JGMP=3817/2009.`);
      doc.text(40, 130, `${gender.value == "male" ? "he" : "she"} has no any reported medico legal records and malpractices while ${gender.value == "male"? "he" : "she"} has practiced ${gender.value == "male" ? 'his': 'her'} medical profession`);
      doc.text(40, 140, `in Ethiopia till ${moment(new Date()).format("MMMM DD, YYYY")}.`);
      doc.text(40, 165, `Hence we appreciate any assistance, which will be rendered to ${gender.value == "male" ? "him" : "her"}.`)
      doc.text(40, 185, "With best regards")
      window.open(doc.output('bloburl'));

    }

    const created = async (applicationTypeName, applicationId, status) => {
      if(status === 'approved' && applicationTypeName === "Good Standing") {
        isUserApproved.value = true;
      }
      licenseId.value = applicationId;
      applicationType.value = applicationTypeName;
      showLoading.value = true;
      if (applicationType.value == "New License") {
        store
          .dispatch("reviewer/getNewLicenseApplication", applicationId)
          .then((res) => {
            showLoading.value = false;
            license.value = res.data.data;
            getReviewId.value = license.value.reviewerId;
            goodStandingUser.value = res.data.data;
            console.log("good stangind urser", goodStandingUser.value)
            show.value = true;
            profileInfo.value = license.value.applicant.profile;
            // applicantId.value = license.value.applicantId;
            education.value.departmentName =
              license.value.education.department.name;
            education.value.institutionName =
              license.value.education.institution.name;
            education.value.institutionTypeName =
              license.value.education.institution.institutionType.name;
          });
      }
      if (applicationType.value == "Good Standing") {
        isGoodStanding.value = true;
        store
          .dispatch("reviewer/getGoodStandingApplication", applicationId)
          .then((res) => {
            showLoading.value = false;
            license.value = res.data.data;
            goodStandingUser.value = res.data.data;
            gender.value = res.data.data.applicant.profile.gender;
            if(res.data.data.applicant.profile.grandFatherName) {
              grandFatherName.value = res.data.data.applicant.profile.grandFatherName;
            }
            getReviewId.value = license.value.reviewerId;
            show.value = true;
            profileInfo.value = license.value.applicant.profile;
            // applicantId.value = license.value.applicantId;
            education.value.departmentName =
              license.value.education.department.name;
            education.value.institutionName =
              license.value.education.institution.name;
            education.value.institutionTypeName =
              license.value.education.institution.institutionType.name;
          });
      }
      if (applicationType.value == "Verification") {
        store
          .dispatch("reviewer/getVerificationApplication", applicationId)
          .then((res) => {
            showLoading.value = false;
            license.value = res.data.data;
            getReviewId.value = license.value.reviewerId;
            show.value = true;
            profileInfo.value = license.value.applicant.profile;
            // applicantId.value = license.value.applicantId;
            education.value.departmentName =
              license.value.education.department.name;
            education.value.institutionName =
              license.value.education.institution.name;
            education.value.institutionTypeName =
              license.value.education.institution.institutionType.name;
          });
      }
      if (applicationType.value == "Renewal") {
        store
          .dispatch("reviewer/getRenewalApplication", applicationId)
          .then((res) => {
            showLoading.value = false;
            license.value = res.data.data;
            getReviewId.value = license.value.reviewerId;
            show.value = true;
            profileInfo.value = license.value.applicant.profile;
            // applicantId.value = license.value.applicantId;
            education.value.departmentName =
              license.value.education.department.name;
            education.value.institutionName =
              license.value.education.institution.name;
            education.value.institutionTypeName =
              license.value.education.institution.institutionType.name;
          });
      }
    };
    onMounted(() => {
      console.log("*************************************************************8")
      created(route.params.applicationType, route.params.applicationId, route.params.status);
    });

    return {
      license,
      profileInfo,
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
      created,
      showLoading,
      applicationType,
      licenseId,
      isUserApproved,
      isGoodStanding,
      GenerateLetter,
    };
  },
};
</script>
<style>
.text-danger > label,
.text-danger > h5 {
  color: red;
}
</style>
