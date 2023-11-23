<template>
  <div class="vld-parent mt-4">
    <loading
      :active="isLoading"
      :is-full-page="false"
      :color="'#07677e'"
      :opacity="1"
    ></loading>
    <div
      class="container bg-grey-100 p-4 lg:ml-24 lg:mr-24 mt-4 rounded-md  "
      v-if="isUserCertified && isApplicationTypeFound"
    >
      <img class="moh-logo" src="../../../assets/image.png" />

      <div class="container">
        <h2 class="text-primary-600 text-3xl">
          Health Professionals Certificate
        </h2>
        <h2 class="text-grey-800 text-xl mb-5">
          You are here requesting the validity of the professional's license
        </h2>
        <img
          :src="certifiedUser.pic"
          alt="image here"
          style="height:200px;width:200px"
        />

        <h2 class="text-2xl">License Status</h2>
        <span
          :class="
            certificateDetail.applicationStatus &&
            certificateDetail.applicationStatus.code == 'APP'
              ? 'bg-green-200 p-2 rounded-md text-white'
              : certificateDetail.applicationStatus &&
                certificateDetail.applicationStatus.code == 'SUSP'
              ? 'bg-yellow-300 p-2 rounded-md text-white'
              : certificateDetail.applicationStatus &&
                certificateDetail.applicationStatus.code == 'RVK'
              ? 'bg-red-300 p-2 rounded-md text-white'
              : ''
          "
        >
          {{
            certificateDetail.applicationStatus &&
            certificateDetail.applicationStatus.code == "APP"
              ? "License Is Valid"
              : certificateDetail.applicationStatus &&
                certificateDetail.applicationStatus.code == "SUSP"
              ? "License Is Suspended"
              : certificateDetail.applicationStatus &&
                certificateDetail.applicationStatus.code == "RVK"
              ? "License Is Revoked"
              : ""
          }}
        </span>
        <h2
          v-if="
            certificateDetail.applicationStatus &&
              (certificateDetail.applicationStatus.code == 'RVK' ||
                certificateDetail.applicationStatus.code == 'SUSP')
          "
          class="text-primary-600 font-bold text-xl m-2"
        >
          Reason--
          <span class="text-grey-800 border rounded-md p-2"> {{ certificateDetail.remark }}</span>
        </h2>
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
            v-if="certificateDetail.educations"
            class="text-primary-600 text-xl font-bold"
          >
            <span
              v-for="education in certificateDetail.educations"
              :key="education.id"
              >{{
                education && education.professionType
                  ? education.professionType.name + " ,"
                  : ""
              }}
            </span>
          </h2>

          <h2 class="text-primary-600 text-xl font-bold" v-else>
            {{
              certificateDetail.GSProfessionals &&
              certificateDetail.GSProfessionals.professionalTypes
                ? certificateDetail.GSProfessionals.professionalTypes.name
                : ""
            }}
          </h2>
          <h2
            class="text-grey-800 text-xl font-bold"
            v-if="certificateDetail.educations"
          >
            License is valid from
          </h2>
          <h2
            class="text-primary-600 text-xl font-bold"
            v-if="
              certificateDetail.educations &&
                certificateDetail.applicationStatus &&
                certificateDetail.applicationStatus.code == 'APP'
            "
          >
            {{
              moment(certificateDetail.certifiedDate).format("MM/ DD / YYYY")
            }}
            <span class="text-grey-800 ml-2 mr-2">To</span>
            {{
              moment(certificateDetail.licenseExpirationDate).format(
                "MM /DD / YYYY"
              )
            }}
          </h2>
          <h2
            class="text-grey-800 text-xl font-bold"
            v-if="!certificateDetail.educations"
          >
            Letter given on
          </h2>
          <h2
            class="text-primary-600 text-xl font-bold"
            v-if="!certificateDetail.educations"
          >
            {{
              moment(certificateDetail.certifiedDate).format("MM /DD / YYYY")
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
            <h1 class="mt-8">Sorry License is not Certified</h1>
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
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { googleApi } from "@/composables/baseURL";
import moment from "moment";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  computed: {
    moment: () => moment,
  },
  components: { Loading },
  setup() {
    const store = useStore();
    let route = useRoute();
    let show = ref(false);
    let certifiedUser = ref({});
    let certificateDetail = ref({});
    let licenseExpireDate = ref({});
    let showLoading = ref(false);
    let isUserCertified = ref(true);
    let isUserFound = ref(true);
    let isApplicationTypeFound = ref(true);
    let isLoading = ref(true);
    const applicationType = route.params.applicationType;

    const fetchApplication = () => {
      store
        .dispatch("reviewer/getScannedCertificate", {
          applicationId: route.params.applicationId,
          userId: route.params.userId,
          applicationType: route.params.applicationType,
        })
        .then((res) => {
          if (res.data && res.data.data) {
            certificateDetail.value = res.data.data;
            if (certificateDetail.value.certified == false) {
              isUserCertified.value = false;
            }
            licenseExpireDate.value = moment(
              certificateDetail.value.certifiedDate
            )._d;
            licenseExpireDate.value.setFullYear(
              licenseExpireDate.value.getFullYear() + 5
            );
            certifiedUser.value = res.data.data.profile;
            certifiedUser.value.pic =
              googleApi + res.data.data.profile.profilePicture.filePath;

            if (!certifiedUser.value) {
              isUserFound.value = false;
            }
            show.value = true;
          } else {
            isApplicationTypeFound.value = false;
          }
          isLoading.value = false;
        });
    };

    onMounted(() => {
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
      isLoading,
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
