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
      <div>
        <label class="ml-8"> Full Name</label>
        <h5 class="ml-8">
          {{ this.profileInfo["fatherName"] }}

          {{ this.profileInfo["grandFatherName"] }}
        </h5>
      </div>
      <div>
        <label class="ml-8"> Gender</label>
        <h5 class="ml-8">{{ this.profileInfo["gender"] }}</h5>
      </div>
      <div>
        <label class="ml-8"> Nationality</label>
        <h5 class="ml-8">{{ this.profileInfo["nationality"] }}</h5>
      </div>
      <div>
        <label class="ml-8"> Place of Birth</label>
        <h5 class="ml-8">{{ this.profileInfo["placeOfBirth"] }}</h5>
      </div>
      <div>
        <label class="ml-8"> Date of Birth</label>
        <h5 class="ml-8">{{ this.profileInfo["dateOfBirth"] }}</h5>
      </div>
      <div>
        <label class="ml-8"> Marital Status</label>
        <h5 class="ml-8">{{ this.profileInfo["maritalStatus"]["name"] }}</h5>
      </div>
    </div>

    <div class="flex justify-start">
      <Title message="Address" />
    </div>
    <div class="flex flex-row">
      <div>
        <label class="ml-8"> Region</label>
        <h5 class="ml-8">
          {{ this.profileInfo["woreda"]["zone"]["region"]["name"] }}
        </h5>
      </div>
      <div>
        <label class="ml-8"> Zone</label>
        <h5 class="ml-8">{{ this.profileInfo["woreda"]["zone"]["name"] }}</h5>
      </div>
      <div>
        <label class="ml-8"> Wereda</label>
        <h5 class="ml-8">
          {{ this.profileInfo["woreda"]["name"] }}
        </h5>
      </div>
      <div>
        <label class="ml-8"> Kebele</label>
        <h5 class="ml-8">{{ this.profileInfo["kebele"] }}</h5>
      </div>
      <div>
        <label class="ml-8"> House Number</label>
        <h5 class="ml-8">{{ this.profileInfo["houseNumber"] }}</h5>
      </div>
      <div>
        <label class="ml-8"> Residence</label>
        <h5 class="ml-8">{{ this.profileInfo["residence"] }}</h5>
      </div>
    </div>
    <div class="flex justify-start">
      <Title message="Contact" />
    </div>
    <div class="flex flex-row">
      <div>
        <label class="ml-8"> Mobile Number</label>
        <h5 class="ml-8">{{ this.profileInfo["user"]["phoneNumber"] }}</h5>
      </div>

      <div>
        <label class="ml-8"> Email</label>
        <h5 class="ml-8">{{ this.profileInfo["user"]["emailAddress"] }}</h5>
      </div>
      <div>
        <label class="ml-8"> Applicant Type</label>
        <h5 class="ml-8">{{ this.profileInfo["userType"]["name"] }}</h5>
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
      <Title class="" message="Photo" />
      <Title class="ml-12" message="ID/Passport" />
      <Title class="ml-12" message="Health Examination Certificate" />
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
  created() {
    this.fetchProfile();
    this.userId = localStorage.getItem("userId");
    this.license = this.getLicense;
    this.applicantId = this.getLicense.state.applicantId;
    this.applicantTypeId = this.getLicense.state.applicantTypeId;
    this.education.departmentId = this.getLicense.state.education.departmentId;
    this.education.institutionId = this.getLicense.state.education.institutionId;
  },
  data: () => ({
    profileInfo: {},
    userId: "",
    applicantId: "",
    applicantTypeId: "",
    education: {
      departmentId: "",
      institutionId: "",
    },
    //createProfile object includes personal info, address and contact
    //license object includes institution, photo, id and healthexamcert
  }),
  computed: {
    ...mapGetters({
      getLicense: "newlicense/getLicense",
    }),
  },
  methods: {
    submitRequest() {
      let license = {
        applicantId: this.applicantId,
        applicantTypeId: this.applicantTypeId,
        education: {
          institutionId: this.education.departmentId,
          departmentId: this.education.institutionId,
        },
      };
      const resp = this.$store.dispatch("newlicense/newLicense", license);
    },
    async fetchProfile() {
      try {
        const url = `http://ca9dee52bc55.ngrok.io/api/profiles/` + this.userId;
        const response = await axios.get(url);
        const results = response.data;
        this.profileInfo = results.data[0];
      } catch (err) {
        if (err.response) {
          console.log("Server Error:", err);
        } else if (err.request) {
          console.log("Network Error:", err);
        } else {
          console.log("Client Error:", err);
        }
      }
    },
  },
};
</script>
<style></style>
