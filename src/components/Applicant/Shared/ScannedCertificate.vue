<template>
  <div
    class="container bg-grey-100 p-4 ml-24 mr-24 mt-4 rounded-md"
    v-if="isUserCertified && isApplicationTypeFound"
  >
    <div class="">
      <img class="moh-logo" src="../../../assets/image.png" />
    </div>
    <div class="container">
      <h2 class="text-primary-600 text-3xl">
        Health Professionals Certificate
      </h2>
      <h2 class="text-grey-800 text-xl mb-5">
        You are here requesting the validity of the professional's license
      </h2>
      <img
        v-bind:src="certifiedUser.pic"
        alt="image here"
        style="height:200px;width:200px"
      />
    </div>
    <div class="container">
      <div class="grid grid-cols-2 gap-4 mt-5">
        <h2 class="text-grey-800 text-xl font-bold">
          Professional's Full Name
        </h2>
        <h2 class="text-primary-600 text-xl font-bold">
          {{ certifiedUser.name ? certifiedUser.name : "" }}
          {{ certifiedUser.fatherName ? certifiedUser.fatherName : "" }}
          {{
            certifiedUser.grandFatherName ? certifiedUser.grandFatherName : ""
          }}
        </h2>
        <h2 class="text-grey-800 text-xl font-bold">
          Professional's Full Name In Amharic
        </h2>
        <h2 class="text-primary-600 text-xl font-bold">
          {{
            certifiedUser.alternativeFatherName
              ? certifiedUser.alternativeFatherName
              : ""
          }}
          {{
            certifiedUser.alternativeGrandFatherName
              ? certifiedUser.alternativeGrandFatherName
              : ""
          }}
        </h2>
        <h2 class="text-grey-800 text-xl font-bold">
          Licensed Profession/s List
        </h2>
        <h2
          class="text-primary-600 text-xl font-bold"
          v-for="education in certificateDetail.educations"
          :key="education.id"
        >
          {{
            education && education.professionType
              ? education.professionType.name + " ,"
              : ""
          }}
        </h2>
        <h2 class="text-grey-800 text-xl font-bold">
          License is valid from
        </h2>
        <h2 class="text-primary-600 text-xl font-bold">
          {{ moment(certificateDetail.certifiedDate).format("MM/ DD / YYYY") }}
          <span class="text-grey-800 ml-2 mr-2">To</span>
          {{
            moment(certificateDetail.licenseExpirationDate).format(
              "MM /DD / YYYY"
            )
          }}
        </h2>
      </div>
    </div>

    <div class="mt-8">
      <p class="text-lg text-primary-600">Ethiopian Ministry of Health</p>
      <span
        >Visit<a
          href="https://hrl.moh.gov.et/"
          class="text-sm text-primary-500"
        >
          https://hrl.moh.gov.et</a
        >
        for more</span
      >
    </div>
  </div>
  <div v-else-if="!isUserFound">
    <div class="flex justify-center content-center">
      <img class="moh-logo" src="../../../assets/image.png" />
      <h1>User is not Found</h1>
    </div>
  </div>
  <div v-else-if="!isUserCertified && isUserFound">
    <div class="flex justify-center content-center mt-4 mb-4">
      <div class="grid grid-rows-3">
        <div class="flex justify-center content-center">
          <img class="moh-logo" src="../../../assets/image.png" />
        </div>
        <div class="flex justify-center content-center">
          <h1 class="mt-8">Sorry User is not Certified</h1>
        </div>
        <div class="flex justify-center content-center">
          <span
            >Visit<a
              href="https://hrl.moh.gov.et/"
              class="text-sm text-primary-500"
            >
              https://hrl.moh.gov.et</a
            >
            for more</span
          >
        </div>
      </div>
    </div>
  </div>

  <div v-else-if="!isApplicationTypeFound">
    <div class="flex justify-center content-center">
      <h1>
        {{ applicationType }} Application type is not found for this request
      </h1>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { googleApi } from "@/composables/baseURL";
import moment from "moment";
export default {
  computed: {
    moment: () => moment,
    // getCertifiedUser() {
    //   return store.getters['reviewer/getUnassigned'][0]
    // }
  },
  components: {},
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
    let isApplicationTypeFound = ref(true);

    const applicationType = route.params.applicationType;

    const fetchCertifiedUser = () => {
      showLoading.value = true;
      store
        .dispatch("profile/getProfileById", route.params.userId)
        .then((res) => {
          if (res.data.message != "Found user profile successfully!") {
            isUserFound.value = false;
            return;
          } else {
            certifiedUser.value = res.data.data;
            certifiedUser.value.pic =
              googleApi + res.data.data.profilePicture.filePath;

            show.value = true;
          }
        })
        .catch(() => {
          isUserFound.value = false;
        });
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
            if (res.data.data === undefined) {
              isApplicationTypeFound.value = false;
              return;
            }
            certificateDetail.value = res.data.data;
            if (
              route.params.userId != certificateDetail.value.applicantId ||
              certificateDetail.value.certified === false
            ) {
              isUserCertified.value = false;
            }
            licenseExpireDate.value = moment(
              certificateDetail.value.certifiedDate
            )._d;
            licenseExpireDate.value.setFullYear(
              licenseExpireDate.value.getFullYear() + 5
            );
          })
          .catch(() => {});
      } else if (route.params.applicationType === "GoodStanding") {
        store
          .dispatch(
            "reviewer/getGoodStandingApplication",
            route.params.applicationId
          )
          .then((res) => {
            showApplicationLoading.value = false;
            if (res.data.data === undefined) {
              isApplicationTypeFound.value = false;
              return;
            }
            certificateDetail.value = res.data.data;
            if (
              route.params.userId != certificateDetail.value.applicantId ||
              certificateDetail.value.certified === false
            ) {
              isUserCertified.value = false;
            }
            licenseExpireDate.value = moment(
              certificateDetail.value.certifiedDate
            )._d;
            licenseExpireDate.value.setFullYear(
              licenseExpireDate.value.getFullYear() + 5
            );
            certificateDetail.value.professionalTypes =
              certificateDetail.value.GSProfessions;
          });
      } else if (route.params.applicationType === "NewLicense") {
        store
          .dispatch(
            "reviewer/getNewLicenseApplication",
            route.params.applicationId
          )
          .then((res) => {
            showApplicationLoading.value = false;
            if (res.data.data === undefined) {
              isApplicationTypeFound.value = false;
              return;
            }
            certificateDetail.value = res.data.data;
            if (
              route.params.userId != certificateDetail.value.profile.id ||
              certificateDetail.value.certified === false
            ) {
              isUserCertified.value = false;
            }
            licenseExpireDate.value = moment(
              certificateDetail.value.certifiedDate
            )._d;
            licenseExpireDate.value.setFullYear(
              licenseExpireDate.value.getFullYear() + 5
            );
            certificateDetail.value.professionalTypes =
              certificateDetail.value.licenseProfessions;
          });
      } else if (route.params.applicationType === "Renewal") {
        store
          .dispatch(
            "reviewer/getRenewalApplication",
            route.params.applicationId
          )
          .then((res) => {
            showApplicationLoading.value = false;
            if (res.data.data === undefined) {
              isApplicationTypeFound.value = false;
              return;
            }
            certificateDetail.value = res.data.data;
            if (
              route.params.userId != certificateDetail.value.applicantId ||
              certificateDetail.value.certified === false
            ) {
              isUserCertified.value = false;
            }
            licenseExpireDate.value = moment(
              certificateDetail.value.certifiedDate
            )._d;
            licenseExpireDate.value.setFullYear(
              licenseExpireDate.value.getFullYear() + 5
            );
            certificateDetail.value.professionalTypes =
              certificateDetail.value.renewalProfessions;
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
      licenseExpireDate,
      isApplicationTypeFound,
      applicationType,
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
 
}
 
</style>
