<template>
  <div
    v-if="this.show"
    style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
    class="ml-8 mt-8 mr-8 mb-12"
  >
    <div class="flex justify-center"><Title message="Summary" /></div>
    <div class="flex justify-start">
      <Title message="Personal Info" />
    </div>
    <div class="flex flex-row">
      <div :class="[this.profileInfo.name === null ? errorClass : activeClass]">
        <label class="ml-8"> Full Name</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.name +
              " " +
              this.profileInfo.fatherName +
              " " +
              this.profileInfo.grandFatherName
          }}
        </h5>
      </div>
      <div
        :class="[this.profileInfo.gender === null ? errorClass : activeClass]"
      >
        <label class="ml-8"> Gender</label>
        <h5 class="ml-8">
          {{ this.profileInfo.gender ? this.profileInfo["gender"] : "-" }}
        </h5>
      </div>
      <div
        :class="[
          this.profileInfo.nationality === null ? errorClass : activeClass,
        ]"
      >
        <label class="ml-8"> Nationality</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.nationality ? this.profileInfo.nationality : "-"
          }}
        </h5>
      </div>
      <div
        :class="[
          this.profileInfo.placeOfBirth === null ? errorClass : activeClass,
        ]"
      >
        <label class="ml-8"> Place of Birth</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.placeOfBirth ? this.profileInfo.placeOfBirth : "-"
          }}
        </h5>
      </div>
      <div
        :class="[
          this.profileInfo.dateOfBirth === null ? errorClass : activeClass,
        ]"
      >
        <label class="ml-8"> Date of Birth</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.dateOfBirth ? this.profileInfo.dateOfBirth : "-"
          }}
        </h5>
      </div>
      <div
        :class="[
          this.profileInfo.maritalStatus.name === null
            ? errorClass
            : activeClass,
        ]"
      >
        <label class="ml-8"> Marital Status</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.maritalStatus.name
              ? this.profileInfo.maritalStatus.name
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
          this.profileInfo.woreda.zone.region === null
            ? errorClass
            : activeClass,
        ]"
      >
        <label class="ml-8"> Region</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.woreda.zone.region
              ? this.profileInfo.woreda.zone.region.name
              : "-"
          }}
        </h5>
      </div>
      <div
        :class="[
          this.profileInfo.woreda.zone === null ? errorClass : activeClass,
        ]"
      >
        <label class="ml-8"> Zone</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.woreda.zone
              ? this.profileInfo.woreda.zone.name
              : "-"
          }}
        </h5>
      </div>
      <div
        :class="[this.profileInfo.woreda === null ? errorClass : activeClass]"
      >
        <label class="ml-8"> Wereda</label>
        <h5 class="ml-8">
          {{ this.profileInfo.woreda ? this.profileInfo.woreda.name : "-" }}
        </h5>
      </div>
      <div
        :class="[this.profileInfo.kebele === null ? errorClass : activeClass]"
      >
        <label class="ml-8"> Kebele</label>
        <h5 class="ml-8">
          {{ this.profileInfo.kebele ? this.profileInfo.kebele : "-" }}
        </h5>
      </div>
      <div
        :class="[
          this.profileInfo.houseNumber === null ? errorClass : activeClass,
        ]"
      >
        <label class="ml-8"> House Number</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.houseNumber ? this.profileInfo.houseNumber : "-"
          }}
        </h5>
      </div>
      <div
        :class="[
          this.profileInfo.residence === null ? errorClass : activeClass,
        ]"
      >
        <label class="ml-8"> Residence</label>
        <h5 class="ml-8">
          {{ this.profileInfo.residence ? this.profileInfo.residence : "-" }}
        </h5>
      </div>
    </div>
    <div class="flex justify-start">
      <Title message="Contact" />
    </div>
    <div class="flex flex-row">
      <div :class="[this.profileInfo.name === null ? errorClass : activeClass]">
        <label class="ml-8"> Mobile Number</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.user.phoneNumber
              ? this.profileInfo.user.phoneNumber
              : "-"
          }}
        </h5>
      </div>

      <div :class="[this.profileInfo.name === null ? errorClass : activeClass]">
        <label class="ml-8"> Email</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.user.emailAddress
              ? this.profileInfo.user.emailAddress
              : "-"
          }}
        </h5>
      </div>
      <div :class="[this.profileInfo.name === null ? errorClass : activeClass]">
        <label class="ml-8"> Applicant Type</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.userType.name
              ? this.profileInfo.userType.name
              : "-"
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
      <div v-for="file in docs" v-bind:key="file.id">
        <Title class="" :message="file.fieldName" />
        <picture>
          <img :src="basePath + file.filePath" />
        </picture>
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
</template>

<script>
import Title from "@/sharedComponents/Title";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  props: ["activeState"],
  components: {
    Title,
  },
  beforeCreate() {
    this.userId = localStorage.getItem("userId");
  },

  async created() {
    const url = `http://afeb4bdfee26.ngrok.io/api/profiles/2`;
    const getProfile = await axios.get(url, {
      responseType: "json",
    });
    if (getProfile) {
      this.show = true;
      this.setData(getProfile.data.data);
      console.log(this.setData);
    } else {
      console.log("Server Error!");
    }

    this.license = this.getLicense;
    this.applicantId = this.license.applicantId;
    this.applicantTypeId = this.license.applicantTypeId;
    this.education.departmentId = this.license.education.departmentId;
    this.education.institutionId = this.license.education.institutionId;
    this.docs = this.getDocs.data;
  },
  data: () => ({
    show: false,
    profileInfo: {},
    applicantId: "",
    applicantTypeId: "",
    education: {
      departmentId: "",
      institutionId: "",
    },
    basePath: "http://localhost:5000/",
    activeClass: "active",
    errorClass: "text-danger",
    dataFetched: false,
  }),
  computed: {
    ...mapGetters({
      getLicense: "newlicense/getLicense",
      getDocs: "newlicense/getDocs",
    }),
  },
  methods: {
    async submitRequest() {
      let license = {
        applicantId: this.applicantId,
        applicantTypeId: this.applicantTypeId,
        education: {
          institutionId: this.education.departmentId,
          departmentId: this.education.institutionId,
        },
      };

      for (let index = 0; index < this.docs.length; index++) {
        const aDoc = this.docs[index];

        if (aDoc.fieldName === "photo") {
          license.photoId = aDoc.id;
        } else if (aDoc.fieldName === "passport") {
          license.passportId = aDoc.id;
        } else if (aDoc.fieldName === "healthExamCert") {
          license.healthExamCertId = aDoc.id;
        } else if (aDoc.fieldName === "serviceFee") {
          license.serviceFeeId = aDoc.id;
        }
      }

      try {
        await axios
          .post("http://localhost:5000/api/newLicenses", license)
          .then((response) => {
            if (response.statusText == "Created") {
              this.Success = true;
            }
            //console.log(this.a);
            console.log(response);
            this.$router.push({ path: "/menu" });
          });
      } catch (error) {
        console.log(error);
      }
    },
    // async fetchProfile() {
    //   console.log('methodd');
    //   try {
    //     const url = `http://localhost:5000/api/profiles/` + this.userId;
    //     const response = await axios.get(url);
    //     const fetchedData = response.data;
    //     const result = fetchedData.data;
    //     return result;
    //     // this.profileInfo = result;
    //   } catch (err) {
    //     if (err.response) {
    //       console.log("Server Error:", err);
    //     } else if (err.request) {
    //       console.log("Network Error:", err);
    //     } else {
    //       console.log("Client Error:", err);
    //     }
    //     return null;
    //   }
    // },
    setData(data) {
      if (data) {
        this.profileInfo = data;
      } else {
        this.profileInfo = null;
      }
    },
  },
};
</script>
<style>
.text-danger > label,
.text-danger > h5 {
  color: red;
}
</style>
