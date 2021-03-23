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
        <h5 class="ml-8">
          {{ this.licenseInfo["education"]["institution"]["name"] }}
        </h5>
      </div>
      <div>
        <label class="ml-8"> Department</label>
        <h5 class="ml-8">
          {{ this.licenseInfo["education"]["department"]["name"] }}
        </h5>
      </div>
      <div>
        <label class="ml-8"> Institution Type</label>
        <h5 class="ml-8">
          {{
            this.licenseInfo["education"]["institution"]["institutionType"][
              "name"
            ]
          }}
        </h5>
      </div>
    </div>
    <div class="flex justify-start">
      <Title class="" message="Photo" />
      <Title class="ml-12" message="ID/Passport" />
      <Title class="ml-12" message="Health Examination Certificate" />
    </div>
  </div>
</template>

<script>
import Title from "@/sharedComponents/Title";
import axios from "axios";
export default {
  props: ["activeState"],
  components: {
    Title,
  },
  created() {
    this.userId = localStorage.getItem("userId");
    this.fetchProfile();
    this.fetchSubmitted();
  },
  data: () => ({
    profileInfo: {},
    licenseInfo: {},
  }),
  methods: {
    async fetchSubmitted() {
      try {
        const url =
          `http://ca9dee52bc55.ngrok.io/api/newLicenses/` + this.userId;
        const response = await axios.get(url);
        const results = response.data;
        console.log(results.data.education.institution.institutionType.name);
        this.licenseInfo = results.data;
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
    async fetchProfile() {
      try {
        const url = `http://ca9dee52bc55.ngrok.io/api/profiles/` + this.userId;
        const response = await axios.get(url);
        const results = response.data;
        console.log(results);
        this.licenseInfo = results.data[0];
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
