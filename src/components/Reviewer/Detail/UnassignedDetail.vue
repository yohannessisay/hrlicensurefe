<template>
  <div class="bg-lightBlueB-200">
    <ReviewerNavBar tab="Unassigned" />
    <div class="bg-lightBlueB-200 h-full">
      <div
        v-if="show"
        style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
        class="ml-8  mr-8 mb-12"
      >
        <div class="mt-large bg-white">
          <div v-if="role.code === `TL` || role.code === `SA`" class="flex">
            <div class="flex flex-col mb-medium w-2/3 ml-small mt-small"></div>
            <div class="flex flex-col mb-medium w-1/3 mr-small mt-small">
              <label class="text-primary-700">Assign To</label>
              <select class="max-w-3xl" v-model="assign.reviewerId" @change="gen()">
                <option
                  v-for="types in admins"
                  v-bind:key="types.name"
                  v-bind:value="types.id"
                >
                  {{ types.name }}
                </option>
              </select>
              <button
                class="block mx-auto  bg-lightBlue-300 hover:bg-lightBlue-600 hover:shadow-lg mt-small"
                @click="assignReviewer()"
              >
                Assign
              </button>
            </div>
          </div>
          <div v-else class="flex ">
            <div class="flex flex-col mb-medium w-2/3 ml-small mt-small"></div>
            <div class="flex flex-col  mb-medium w-1/3 mr-small mt-small">
              <button
                class="block mx-auto  bg-lightBlue-300 hover:bg-lightBlue-600 hover:shadow-lg"
                @click="assignReviewer()"
              >
                Assign to me
              </button>
            </div>
          </div>
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
                profileInfo.nationality === null ? errorClass : activeClass
              ]"
            >
              <label class="ml-8"> Nationality</label>
              <h5 class="ml-8">
                {{ profileInfo.nationality ? profileInfo.nationality : "-" }}
              </h5>
            </div>
            <div
              :class="[
                profileInfo.placeOfBirth === null ? errorClass : activeClass]"
            >
              <label class="ml-8"> Place of Birth</label>
              <h5 class="ml-8">
                {{ profileInfo.placeOfBirth ? profileInfo.placeOfBirth : "-" }}
              </h5>
            </div>
            <div
              :class="[
                profileInfo.dateOfBirth === null ? errorClass : activeClass
              ]"
            >
              <label class="ml-8"> Date of Birth</label>
              <h5 class="ml-8">
                {{ profileInfo.dateOfBirth ? profileInfo.dateOfBirth : "-" }}
              </h5>
            </div>
            <div
              :class="[
                profileInfo.maritalStatus.name === null
                  ? errorClass
                  : activeClass
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
                  : activeClass
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
                profileInfo.woreda.zone === null ? errorClass : activeClass
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
                profileInfo.houseNumber === null ? errorClass : activeClass
              ]"
            >
              <label class="ml-8"> House Number</label>
              <h5 class="ml-8">
                {{ profileInfo.houseNumber ? profileInfo.houseNumber : "-" }}
              </h5>
            </div>
            <div
              :class="[
                profileInfo.residence === null ? errorClass : activeClass
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
                profileInfo.user.phoneNumber === null ? errorClass : activeClass,
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
                  : activeClass
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
                profileInfo.userType.name === null ? errorClass : activeClass
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
          <!-- <div class="mt-12 flex justify-center">
            <div>
              <button @click="evaluate()">Continue Evaluating</button>
            </div>
          </div>
          <div class="flex justify-center mt-8">
            <h6>
              If you don't have all the required informations you can come back
              and finish later.
            </h6>
          </div>
          <div class="flex justify-center mt-8 mb-8">
            <button variant="outline">I will finish Later</button>
          </div> -->
          <div v-if="showFlash">
            <FlashMessage message="Your profile is successfully created" />
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showLoading"
      class="flex justify-center justify-items-center mt-24"
    >
      <Spinner />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import Title from "@/sharedComponents/Title";
import ReviewerNavBar from "@/components/Reviewer/ReviewerNavBar";
import { ref, onMounted } from "vue";
import Spinner from "@/sharedComponents/Spinner";

export default {
  props: ["activeState"],
  components: {
    Title,
    ReviewerNavBar,
    Spinner
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    let adminId = +localStorage.getItem("adminId");
    let show = ref(false);
    let license = ref({
      applicant: {},
      applicantType: {},
      education: {
        institution: {
          institutionType: {
            name: ""
          }
        },
        department: {}
      }
    });
    let profileInfo = ref({
      maritalStatus: {},
      woreda: {
        zone: {}
      },
      user: {},
      userType: {}
    });
    let applicantId = ref("");
    let applicationType = ref("");
    let applicantTypeId = ref("");
    let education = ref({
      departmentId: "",
      institutionId: ""
    });
    let activeClass = ref("active");
    let errorClass = ref("text-danger");
    let dataFetched = ref(false);
    let showFlash = ref(false);
    let showErrorFlash = ref(false);
    let profile = ref({});
    let admins = ref({});
    let assign = ref({
      reviewerId: "",
      licenseId: "",
      createdByAdminId: ""
    });
    let role = ref({});

    let showLoading = ref(false)

    let reviewerAdminId = ref(0);

    const gen = () => {
      console.log(assign.value.reviewerId);
    };

    const created = async (
      applicationTypeParam,
      applicationId,
      applicantId
    ) => {
      showLoading.value = true
      applicationType.value = applicationTypeParam;
      // store.dispatch("reviewer/getProfile", 1).then(res => {
      //   // profileInfo.value = res.data.data;
      //   show.value = true;
      //   console.log(profileInfo.value);
      // });
      if (applicationType.value == "New License") {
        store
          .dispatch("reviewer/getNewLicenseApplication", applicationId)
          .then(res => {
            showLoading.value = false
            showLoading.value = false
            license.value = res.data.data;
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
          .then(res => {
            showLoading.value = false
            license.value = res.data.data;
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
          .then(res => {
            showLoading.value = false
            license.value = res.data.data;
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
          .then(res => {
            showLoading.value = false
            license.value = res.data.data;
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

    const fetchAdmins = () => {
      store.dispatch("reviewer/getAdmins").then(res => {
        admins.value = res.data.data;
      });
    };

    const fetchRole = id => {
      store.dispatch("reviewer/getRoles", id).then(res => {
        role.value = res.data.data.role;
      });
    };

    const assignReviewer = () => {
      if (role.value.code === "TL" || role.value.code === "SA") {
        if (applicationType.value == "Good Standing") {
          assign.value = {
            goodStandingId: route.params.applicationId,
            reviewerId: assign.value.reviewerId,
            createdByAdminId: +localStorage.getItem("adminId")
          };
        }
        if (applicationType.value == "Verification") {
          assign.value = {
            verificationId: route.params.applicationId,
            reviewerId: assign.value.reviewerId,
            createdByAdminId: +localStorage.getItem("adminId")
          };
        }
        if (applicationType.value == "Renewal") {
          assign.value = {
            renewalId: route.params.applicationId,
            reviewerId: assign.value.reviewerId,
            createdByAdminId: +localStorage.getItem("adminId")
          };
        }
        if (applicationType.value == "New License") {
          assign.value = {
            licenseId: route.params.applicationId,
            reviewerId: assign.value.reviewerId,
            createdByAdminId: +localStorage.getItem("adminId")
          };
        }
      }

      if (role.value.code == "REV") {
        if (applicationType.value == "Good Standing") {
          assign.value = {
            goodStandingId: route.params.applicationId,
            reviewerId: +localStorage.getItem("adminId"),
            createdByAdminId: +localStorage.getItem("adminId")
          };
        }
        if (applicationType.value == "Verification") {
          assign.value = {
            verificationId: route.params.applicationId,
            reviewerId: +localStorage.getItem("adminId"),
            createdByAdminId: +localStorage.getItem("adminId")
          };
        }
        if (applicationType.value == "Renewal") {
          assign.value = {
            renewalId: route.params.applicationId,
            reviewerId: +localStorage.getItem("adminId"),
            createdByAdminId: +localStorage.getItem("adminId")
          };
        }
        if (applicationType.value == "New License") {
          assign.value = {
            licenseId: route.params.applicationId,
            reviewerId: +localStorage.getItem("adminId"),
            createdByAdminId: +localStorage.getItem("adminId")
          };
        }
      }
      if (applicationType.value == "New License") {
        store
          .dispatch("reviewer/assignReviewer", assign.value)

          .then(response => {
            if (response.statusText == "Created") {
              showFlash.value = true;
              router.push("/admin/review");
            }
            console.log(response);
          });
      }
      if (applicationType.value == "Verification") {
        store
          .dispatch("reviewer/assignVerificationReviewer", assign.value)

          .then(response => {
            if (response.statusText == "Created") {
              showFlash.value = true;
              router.push("/admin/review");
            }
            console.log(response);
          });
      }
      if (applicationType.value == "Renewal") {
        store
          .dispatch("reviewer/assignRenewalReviewer", assign.value)

          .then(response => {
            if (response.statusText == "Created") {
              showFlash.value = true;
              router.push("/admin/review");
            }
            console.log(response);
          });
      }
      if (applicationType.value == "Good Standing") {
        store
          .dispatch("reviewer/assignGoodStandingReviewer", assign.value)

          .then(response => {
            if (response.statusText == "Created") {
              showFlash.value = true;
              router.push("/admin/review");
            }
            console.log(response);
          });
      } 
    };

    const evaluate = () => {
      router.push("/admin/evaluate");
    };

    onMounted(() => {
      adminId = +localStorage.getItem("adminId");
      created(
        route.params.applicationType,
        route.params.applicationId,
        route.params.applicantId
      );
      fetchAdmins();
      fetchRole(adminId);
      //fetchRole(2);
    });

    return {
      adminId,
      reviewerAdminId,
      license,
      role,
      profileInfo,
      activeClass,
      errorClass,
      dataFetched,
      showFlash,
      showErrorFlash,
      profile,
      assign,
      admins,
      applicantId,
      applicantTypeId,
      education,
      show,
      created,
      evaluate,
      fetchAdmins,
      assignReviewer,
      gen,
      applicationType,
      showLoading
    };
  }

  //   this.license = this.getLicense;
  //   this.applicantId = this.license.applicantId;
  //   this.applicantTypeId = this.license.applicantTypeId;
  //   this.education.departmentId = this.license.education.departmentId;
  //   this.education.institutionId = this.license.education.institutionId;
  //   this.docs = this.getDocs.data;
  // },
};
</script>
<style>
.text-danger > label,
.text-danger > h5 {
  color: red;
}
</style>
