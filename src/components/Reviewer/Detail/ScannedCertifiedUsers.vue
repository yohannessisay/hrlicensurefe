<template>
  <div class="container" v-if="isUserCertified && isApplicationTypeFound">
    <div class="">
      <img class="moh-logo" src="../../../assets/image.png" />
    </div>
    <div class="title">
      <h2 class="text-primary-600 text-2xl">
        Health Professionals Certificate
      </h2>
    </div>
    <div class="name">
      <span class="underline mt-12"
        >{{ certifiedUser.name ? certifiedUser.name : "" }}
        {{ certifiedUser.fatherName ? certifiedUser.fatherName : "" }}
        {{
          certifiedUser.grandFatherName ? certifiedUser.grandFatherName : ""
        }}</span
      >
      &#160;
      <span class="underline">
        {{ certifiedUser.alternativeName ? certifiedUser.alternativeName : "" }}
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
      </span>
    </div>
    <div class="description">
      <h4 class="flex justify-center mt-8 first-text text-2xl">
        Having fully satisfied the requirement of the ministry hereby
      </h4>
      <h4 class="flex justify-center second-text text-2xl">
        registered and licensed as
        <div class="text-base mt-1 text-primary-600 font-bold">
          &nbsp;{{
            certificateDetail.professionalTypes
              ? certificateDetail.professionalTypes[0].professionalTypes.name
              : ""
          }}
        </div>
      </h4>
    </div>
    <div class="mt-8 summary">
      <h4>
        The license is valid from:
        <b>
          <span class="text-primary-600">{{
            moment(certificateDetail.certifiedDate).format("MMM DD, YYYY")
          }}</span>
          - to -
          <span class="text-primary-600">{{
            moment(licenseExpireDate).format("MMM DD, YYYY")
          }}</span></b
        >
      </h4>
    </div>
    <div class="mt-8 last">
      <p class="text-lg">Ethiopian Ministry of Health</p>
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
            show.value = true;
          }
        })
        .catch((error) => {
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
          .catch((error) => {});
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
  margin-top: 5%;
}

.container img {
  width: 100px;
  height: 100px;
}
.title {
  position: relative;
  margin-top: 1%;
}

.name .underline {
  font-size: 28px;
  color: #707070;
}
.description .first-text {
  font-size: 25px;
  color: #707070;
}
.description h4 {
  color: #707070;
  font-size: 25px;
}
.profession {
  font-style: italic;
  color: #000;
}
.summary h4 {
  color: #707070;
}
.last p {
  color: #707070;
}
</style>
