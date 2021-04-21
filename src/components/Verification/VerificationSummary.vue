<template>
  <div
    style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
    class="ml-8 mt-8 mr-8 mb-12"
  >
    <div class="flex justify-center"><Title message="Summary" /></div>
    <div class="flex justify-start">
      <Title message="Personal Info" />
    </div>
    <div class="flex flex-row">
      <div :class="[profileInfo.name === null ? errorClass : activeClass]">
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
      <div :class="[profileInfo.gender === null ? errorClass : activeClass]">
        <label class="ml-8"> Gender</label>
        <h5 class="ml-8">
          {{ profileInfo.gender ? profileInfo["gender"] : "-" }}
        </h5>
      </div>
      <div
        :class="[profileInfo.nationality === null ? errorClass : activeClass]"
      >
        <label class="ml-8"> Nationality</label>
        <h5 class="ml-8">
          {{ profileInfo.nationality ? profileInfo.nationality : "-" }}
        </h5>
      </div>
      <div
        :class="[profileInfo.placeOfBirth === null ? errorClass : activeClass]"
      >
        <label class="ml-8"> Place of Birth</label>
        <h5 class="ml-8">
          {{ profileInfo.placeOfBirth ? profileInfo.placeOfBirth : "-" }}
        </h5>
      </div>
      <div
        :class="[profileInfo.dateOfBirth === null ? errorClass : activeClass]"
      >
        <label class="ml-8"> Date of Birth</label>
        <h5 class="ml-8">
          {{ profileInfo.dateOfBirth ? profileInfo.dateOfBirth : "-" }}
        </h5>
      </div>
      <div
        :class="[
          profileInfo.maritalStatus.name === null ? errorClass : activeClass,
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
          profileInfo.woreda.zone.region === null ? errorClass : activeClass,
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
        :class="[profileInfo.woreda.zone === null ? errorClass : activeClass]"
      >
        <label class="ml-8"> Zone</label>
        <h5 class="ml-8">
          {{ profileInfo.woreda.zone ? profileInfo.woreda.zone.name : "-" }}
        </h5>
      </div>
      <div :class="[profileInfo.woreda === null ? errorClass : activeClass]">
        <label class="ml-8"> Wereda</label>
        <h5 class="ml-8">
          {{ profileInfo.woreda ? profileInfo.woreda.name : "-" }}
        </h5>
      </div>
      <div :class="[profileInfo.kebele === null ? errorClass : activeClass]">
        <label class="ml-8"> Kebele</label>
        <h5 class="ml-8">
          {{ profileInfo.kebele ? profileInfo.kebele : "-" }}
        </h5>
      </div>
      <div
        :class="[profileInfo.houseNumber === null ? errorClass : activeClass]"
      >
        <label class="ml-8"> House Number</label>
        <h5 class="ml-8">
          {{ profileInfo.houseNumber ? profileInfo.houseNumber : "-" }}
        </h5>
      </div>
      <div :class="[profileInfo.residence === null ? errorClass : activeClass]">
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
            profileInfo.user.phoneNumber ? profileInfo.user.phoneNumber : "-"
          }}
        </h5>
      </div>

      <div
        :class="[
          profileInfo.user.emailAddress === null ? errorClass : activeClass,
        ]"
      >
        <label class="ml-8"> Email</label>
        <h5 class="ml-8">
          {{
            profileInfo.user.emailAddress ? profileInfo.user.emailAddress : "-"
          }}
        </h5>
      </div>
      <div
        :class="[profileInfo.userType.name === null ? errorClass : activeClass]"
      >
        <label class="ml-8"> User Type</label>
        <h5 class="ml-8">
          {{ profileInfo.userType.name ? profileInfo.userType.name : "-" }}
        </h5>
      </div>
    </div>
    <div class="flex justify-start">
      <Title message="Institution" />
    </div>
    <div class="flex flex-row">
      <div>
        <label class="ml-8"> Institution Name</label>
        <h5 class="ml-8">Hawassa University</h5>
      </div>
      <div>
        <label class="ml-8"> Department</label>
        <h5 class="ml-8">Electrical Engineering</h5>
      </div>
      <div>
        <label class="ml-8"> Institution Type</label>
        <h5 class="ml-8">Private</h5>
      </div>
    </div>
    <div class="flex justify-start">
      <div class="flex flex-row flex-wrap">
        <div v-for="file in docs" v-bind:key="file.id">
          <Title class="" :message="file.fieldName" />
          <picture>
            <img :src="basePath + file.filePath" />
          </picture>
        </div>
      </div>
    </div>
    <div class="mt-12 flex justify-center">
      <div>
        <button @click="submitRequest()">Submit Request</button>
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <h6>
        If you don't have all the required informations you can come back and
        finish later.
      </h6>
    </div>
    <div class="flex justify-center mt-8 mb-8">
      <button variant="outline">I will finish Later</button>
    </div>
  </div>

  <div class="mr-3xl" v-if="message.showFlash">
    <FlashMessage message="Operation Successful!" />
  </div>
  <div v-if="message.showErrorFlash">
    <ErrorFlashMessage message="Operation Failed!" />
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from "vue";
import { useStore } from "vuex";
import Title from "@/sharedComponents/Title";
import axios from "axios";
import FlashMessage from "@/sharedComponents/FlashMessage";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import Spinner from "@/sharedComponents/Spinner";

export default {
  props: ["activeState"],
  components: {
    Title,
    FlashMessage,
    ErrorFlashMessage,
    Spinner,
  },
  setup() {
    const store = useStore();

    let profileInfo = {
      name: "",
      fatherName: "",
      grandFatherName: "",
      gender: "",
      nationality: "",
      placeOfBirth: "",
      dateOfBirth: "",
      maritalStatus: {
        name: "",
      },
      woreda: {
        name: "",
        zone: {
          name: "",
          region: {
            name: "",
          },
        },
      },
      kebele: "",
      houseNumber: "",
      residence: "",
      user: {
        phoneNumber: "",
        emailAddress: "",
      },
      userType: {
        name: "",
      },
    };
    let message = ref({
      showFlash: false,
      showErrorFlash: false,
      showLoading: false,
    });

    let renewalLicense = ref(null);
    let docs = ref(null);
    let userId = ref(null);
    let applicantId = ref("");
    let applicantTypeId = ref("");
    let education = {
      departmentId: "",
      institutionId: "",
    };
    let basePath = ref("http://localhost:5000/");
    let activeClass = ref("active");
    let errorClass = ref("text-danger");
    let dataFetched = ref(false);
    let showFlash = ref(false);
    let showErrorFlash = ref(false);
    let Success = ref(null);

    let submitRequest = async () => {
      showFlash.value = false;
      showErrorFlash.value = false;
      let renewal = {
        applicantId: applicantId.value,
        applicantTypeId: applicantTypeId.value,
        education: {
          institutionId: education.departmentId,
          departmentId: education.institutionId,
        },
      };

      for (let index = 0; index < docs.value.length; index++) {
        const aDoc = docs[index].value;

        if (aDoc.fieldName === "photo") {
          renewal.photoId = aDoc.id;
        } else if (aDoc.fieldName === "passport") {
          renewal.passportId = aDoc.id;
        } else if (aDoc.fieldName === "healthExamCert") {
          renewal.healthExamCertId = aDoc.id;
        } else if (aDoc.fieldName === "serviceFee") {
          renewal.serviceFeeId = aDoc.id;
        } else if (aDoc.fieldName === "cpd") {
          renewal.cpdId = aDoc.id;
        } else if (aDoc.fieldName === "workExperience") {
          renewal.workExperienceId = aDoc.id;
        } else if (aDoc.fieldName === "previousLicense") {
          renewal.previousLicenseId = aDoc.id;
        }
      }
      console.log(renewal);

      try {
        await axios
          .post("http://localhost:5000/api/renewals/add", renewal)
          .then((response) => {
            if (response.statusText == "Created") {
              showFlash.value = true;

              console.log(response);
              // this.$router.push({ path: "/renewalSubmitted" });
            }
            //console.log(this.a);
            // this.$router.push({ path: "/menu" });
            console.log(response);
          })
          .catch((error) => {
            showErrorFlash.value = true;
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };

    let setData = (data) => {
      if (data) {
        profileInfo = data;
      } else {
        profileInfo = null;
      }
    };

    let created = async () => {
      const url = `http://localhost:5000/api/profiles/` + this.userId;
      const getProfile = await axios.get(url, {
        responseType: "json",
      });
      if (getProfile) {
        setData(getProfile.data.data);
      } else {
        console.log("Server Error!");
      }

      applicantId.value = renewalLicense.value.applicantId;
      applicantTypeId.value = renewalLicense.value.applicantTypeId;
      education.epartmentId = renewalLicense.value.education.departmentId;
      education.institutionId = renewalLicense.value.education.institutionId;
      docs.value = docs.value.data;
    };

    onMounted(() => {
      nextTick(function() {
        window.setInterval(() => {
          showFlash.value = false;
        }, 10000);
      });
      renewalLicense = store.getters["renewal/getRenewalLicense"];
      docs = store.getters["renewal/getDocs"];
      userId = +localStorage.getItem("userId");
      created();
    });

    return {
      applicantId,
      applicantTypeId,
      basePath,
      activeClass,
      errorClass,
      dataFetched,
      message,
      renewalLicense,
      docs,
      userId,
      submitRequest,
      Success,
      setData,
      created,
      profileInfo,
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
