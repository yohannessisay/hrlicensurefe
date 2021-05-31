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
                profileInfo.woreda.zone.region === null
                  ? errorClass
                  : activeClass,
              ]"
            >
              <label class="ml-8"> Region</label>
              <h5 class="ml-8">
                {{
                  profileInfo.woreda.zone.region
                    ? profileInfo.woreda.zone.region.name
                    : "-"
                }}
              </h5>
            </div>
            <div
              :class="[
                profileInfo.woreda.zone === null ? errorClass : activeClass,
              ]"
            >
              <label class="ml-8"> Zone</label>
              <h5 class="ml-8">
                {{
                  profileInfo.woreda.zone ? profileInfo.woreda.zone.name : "-"
                }}
              </h5>
            </div>
            <div
              :class="[profileInfo.woreda === null ? errorClass : activeClass]"
            >
              <label class="ml-8"> Wereda</label>
              <h5 class="ml-8">
                {{ profileInfo.woreda ? profileInfo.woreda.name : "-" }}
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

    const created = async (applicationTypeName, applicationId) => {
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
        store
          .dispatch("reviewer/getGoodStandingApplication", applicationId)
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

    // const created = async id => {
    //   store.dispatch("reviewer/getProfile", id).then(res => {
    //     profileInfo.value = res.data.data;
    //     show.value = true;
    //   });
    //   store.dispatch("reviewer/getLicense", id).then(res => {
    //     license.value = res.data.data;
    //     applicantId.value = license.value.applicantId;
    //     applicantTypeId.value = license.value.applicantTypeId;
    //     education.value.departmentName =
    //       license.value.education.department.name;
    //     education.value.institutionName =
    //       license.value.education.institution.name;
    //     education.value.institutionTypeName =
    //       license.value.education.institution.institutionType.name;
    //     // docs.value = this.getDocs.data;
    //   });
    // };

    onMounted(() => {
      created(route.params.applicationType, route.params.applicationId);
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
