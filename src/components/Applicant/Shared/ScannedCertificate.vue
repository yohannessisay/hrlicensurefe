<template>
  <div class="vld-parent sm:mt-4">
    <loading
      :active="isLoading"
      :is-full-page="false"
      :color="'#07677e'"
      :opacity="1"
    ></loading>
    <div class="flex justify-center" v-if="isUserCertified && isApplicationTypeFound">
      <div class="container bg-grey-100 p-4 rounded-md sm:w-1/2">
        <div class="rounded-full p-4 m-1 bg-white">
          <img class="moh-logo" src="../../../assets/image.png" />
        </div>

        <div class="container">
          <h2
            class="text-primary-600 text-2xl sm:text-3xl border-white border-b-2 mb-4 mt-4"
          >
            MINISTRY OF HEALTH - Ethiopia
          </h2>
          <h2 class="text-primary-600 text-xl sm:text-2xl mb-2">
            Health Professional Certificate
          </h2>
          <h2 class="text-grey-800 text-lg mb-5 border rounded-md p-2">
            You are here requesting the validity of the professional's license
          </h2>
          <img
            :src="certifiedUser.pic"
            alt="applicant image"
            class="rounded-md mb-4"
            style="height: 200px; width: 200px"
          />
          <div class="grid grid-cols-2">
            <h2 class="text-2xl border p-2 rounded-md m-2 shadow-md">License Status</h2>
            <h2
              :class="
                certificateDetail.applicationStatus &&
                certificateDetail.applicationStatus.code == 'APP'
                  ? 'bg-green-200 p-2 m-2 text-xl rounded-md text-white text-center'
                  : certificateDetail.applicationStatus &&
                    certificateDetail.applicationStatus.code == 'SUSP'
                  ? 'bg-yellow-300 p-2 m-2 rounded-md text-white text-center'
                  : certificateDetail.applicationStatus &&
                    certificateDetail.applicationStatus.code == 'RVK'
                  ? 'bg-red-300 p-2 m-2 rounded-md text-white text-center'
                  : ''
              "
            >
              <i
                :class="
                  certificateDetail.applicationStatus &&
                  certificateDetail.applicationStatus.code == 'APP'
                    ? 'fa fa-check-circle text-white text-2xl'
                    : certificateDetail.applicationStatus &&
                      certificateDetail.applicationStatus.code == 'SUSP'
                    ? 'fa fa-exclamation-triangle text-white text-2xl'
                    : certificateDetail.applicationStatus &&
                      certificateDetail.applicationStatus.code == 'RVK'
                    ? 'fa fa-cancel text-white text-2xl'
                    : ''
                "
              ></i>
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
            </h2>
          </div>

          <h2
            v-if="
              certificateDetail.applicationStatus &&
              (certificateDetail.applicationStatus.code == 'RVK' ||
                certificateDetail.applicationStatus.code == 'SUSP')
            "
            class="text-primary-600 font-bold text-xl m-2"
          >
            Reason--
            <span class="text-grey-800 border rounded-md p-2">
              {{ certificateDetail.remark }}</span
            >
          </h2>
        </div>
        <div class="container border rounded-md p-2 shadow-md mt-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
            <h2 class="text-primary-600 text-xl font-bold mt-2">
              Professional's Full Name
            </h2>
            <h2 class="text-grey-800 text-xl font-bold border p-2 rounded-md">
              {{ certifiedUser.name ? certifiedUser.name : "" }}
              {{ certifiedUser.fatherName ? certifiedUser.fatherName : "" }}
              {{ certifiedUser.grandFatherName ? certifiedUser.grandFatherName : "" }}
            </h2>
            <h2 class="text-primary-600 text-xl font-bold mt-2">
              Professional's Full Name In Amharic
            </h2>
            <h2 class="text-grey-800 text-xl font-bold border p-2 rounded-md">
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

            <h2 class="text-primary-600 text-xl font-bold mt-2">
              Licensed Profession/s List
            </h2>
            <div
              v-if="certificateDetail.educations"
              class="text-primary-600 text-xl font-bold border p-2 rounded-md"
            >
              <h2
                v-for="education in certificateDetail.educations"
                :key="education.id"
                class="text-grey-800 text-xl"
              >
                {{
                  education && education.educationLevel
                    ? `( ${education.educationLevel.name} )`
                    : ""
                }}
                {{ education && education.prefix ? ` ${education.prefix.name} ` : "" }}
                {{
                  education &&
                  education.professionType &&
                  education.professionType.name &&
                  education.professionType.name.toLowerCase() != "other"
                    ? `${education.professionType.name},`
                    : education.otherProfessionType
                    ? `${education.otherProfessionType},`
                    : ""
                }}
              </h2>
            </div>
            <h2 class="text-primary-600 text-xl font-bold mt-2">
              Licensed Profession/s List (Amharic)
            </h2>
            <div
              v-if="certificateDetail.educations"
              class="text-primary-600 text-xl font-bold border p-2 rounded-md"
            >
              <h2
                v-for="education in certificateDetail.educations"
                :key="education.id"
                class="text-grey-800 text-xl"
              >
                {{
                  education && education.educationLevel
                    ? `( ${education.educationLevel.name} )`
                    : ""
                }}
                {{ education && education.prefix ? ` ${education.prefix.name} ` : "" }}
                {{
                  education &&
                  education.professionType &&
                  education.professionType.name &&
                  education.professionType.name.toLowerCase() != "other"
                    ? education.professionType.amharicProfessionalType
                    : education.otherProfessionAmharic
                    ? education.otherProfessionAmharic
                    : ""
                }}
              </h2>
            </div>

            <h2 class="text-grey-800 text-xl font-bold border p-2 rounded-md" v-else>
              {{
                certificateDetail.GSProfessionals &&
                certificateDetail.GSProfessionals.professionalTypes
                  ? certificateDetail.GSProfessionals.professionalTypes.name
                  : ""
              }}
            </h2>
            <h2
              class="text-primary-600 text-xl mt-2 font-bold"
              v-if="certificateDetail.educations"
            >
              License is valid from
            </h2>
            <h2
              class="text-grey-800 text-xl font-bold border p-2 rounded-md"
              v-if="
                certificateDetail.educations &&
                certificateDetail.applicationStatus &&
                certificateDetail.applicationStatus.code == 'APP'
              "
            >
              {{ moment(certificateDetail.certifiedDate).format("MM/ DD / YYYY") }}
              <span class="text-grey-800 ml-2 mr-2">To</span>
              {{
                moment(certificateDetail.licenseExpirationDate).format("MM /DD / YYYY")
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
              {{ moment(certificateDetail.certifiedDate).format("MM /DD / YYYY") }}
            </h2>
          </div>
        </div>

        <div class="mt-8">
          <h2 class="text-xl text-primary-600">Ethiopian Ministry of Health</h2>
          <h6>
            Visit<a href="https://hrl.moh.gov.et/" class="text-sm text-primary-500">
              https://hrl.moh.gov.et</a
            >
            for more
          </h6>
        </div>
      </div>
    </div>
    <div v-else-if="!isUserFound">
      <div class="grid grid-cols-1">
        <div class="flex justify-center content-center">
          <img class="moh-logo" src="../../../assets/image.png" />
        </div>
        <div class="flex justify-center content-center">
          <h1 class="text-2xl sm:text-xl text-center mt-4 ml-4">
            User is not found,please register and apply to be certified
          </h1>
        </div>
        <div class="flex justify-center content-center">
          <span
            >Visit<a href="https://hrl.moh.gov.et/" class="text-sm text-primary-500">
              https://hrl.moh.gov.et</a
            >
            for more</span
          >
        </div>
      </div>
    </div>
    <div v-else-if="!isUserCertified && isUserFound">
      <div class="flex justify-center mt-4 mb-4">
        <div class="grid grid-rows-3">
          <div class="flex justify-center content-center">
            <img class="moh-logo" src="../../../assets/image.png" />
          </div>
          <div class="flex justify-center content-center">
            <h1 class="mt-8 text-xl ml-8">
              Seems like license is not certified in the system
            </h1>
          </div>
          <div class="flex justify-center content-center">
            <span
              >Visit<a href="https://hrl.moh.gov.et/" class="text-sm text-primary-500">
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
        <h1>{{ applicationType }} Application type is not found for this request</h1>
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
            licenseExpireDate.value = moment(certificateDetail.value.certifiedDate)._d;
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
