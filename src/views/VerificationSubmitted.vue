<template>
  <div>
    <Navigation />

    <div class="w-screen bg-lightBlueB-200 flex items-center justify-center">
      <div class="w-screen max-w-5xl mt-large">
        <div
          style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
          class="ml-8 mt-5 mr-8 mb-12"
        >
          <div class="flex justify-center">
            <Title message="Verification Detail" />
          </div>
          <div class="flex justify-start">
            <Title message="Personal Info" />
          </div>
          <div class="flex flex-row">
            <div
              :class="[
                this.profileInfo.name === null ? errorClass : activeClass,
              ]"
            >
              <label class="ml-8"> Full Name</label>
              <h5 class="ml-8">
                {{
                  this.profileInfo["name"] +
                    " " +
                    this.profileInfo["fatherName"] +
                    " " +
                    this.profileInfo["grandFatherName"]
                }}
              </h5>
            </div>
            <div
              :class="[
                this.profileInfo.gender === null ? errorClass : activeClass,
              ]"
            >
              <label class="ml-8"> Gender</label>
              <h5 class="ml-8">
                {{ this.profileInfo.gender ? this.profileInfo["gender"] : "-" }}
              </h5>
            </div>
            <div
              :class="[
                this.profileInfo.nationality === null
                  ? errorClass
                  : activeClass,
              ]"
            >
              <label class="ml-8"> Nationality</label>
              <h5 class="ml-8">
                {{
                  this.profileInfo.nationality
                    ? this.profileInfo.nationality
                    : "-"
                }}
              </h5>
            </div>
            <div
              :class="[
                this.profileInfo.placeOfBirth === null
                  ? errorClass
                  : activeClass,
              ]"
            >
              <label class="ml-8"> Place of Birth</label>
              <h5 class="ml-8">
                {{
                  this.profileInfo.placeOfBirth
                    ? this.profileInfo.placeOfBirth
                    : "-"
                }}
              </h5>
            </div>
            <div
              :class="[
                this.profileInfo.dateOfBirth === null
                  ? errorClass
                  : activeClass,
              ]"
            >
              <label class="ml-8"> Date of Birth</label>
              <h5 class="ml-8">
                {{
                  this.profileInfo.dateOfBirth
                    ? this.profileInfo.dateOfBirth
                    : "-"
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
                this.profileInfo.woreda.zone === null
                  ? errorClass
                  : activeClass,
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
              :class="[
                this.profileInfo.woreda === null ? errorClass : activeClass,
              ]"
            >
              <label class="ml-8"> Wereda</label>
              <h5 class="ml-8">
                {{
                  this.profileInfo.woreda ? this.profileInfo.woreda.name : "-"
                }}
              </h5>
            </div>
            <div
              :class="[
                this.profileInfo.kebele === null ? errorClass : activeClass,
              ]"
            >
              <label class="ml-8"> Kebele</label>
              <h5 class="ml-8">
                {{ this.profileInfo.kebele ? this.profileInfo.kebele : "-" }}
              </h5>
            </div>
            <div
              :class="[
                this.profileInfo.houseNumber === null
                  ? errorClass
                  : activeClass,
              ]"
            >
              <label class="ml-8"> House Number</label>
              <h5 class="ml-8">
                {{
                  this.profileInfo.houseNumber
                    ? this.profileInfo.houseNumber
                    : "-"
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
                {{
                  this.profileInfo.residence ? this.profileInfo.residence : "-"
                }}
              </h5>
            </div>
          </div>
          <div class="flex justify-start">
            <Title message="Contact" />
          </div>
          <div class="flex flex-row">
            <div
              :class="[
                this.profileInfo.user.phoneNumber === null
                  ? errorClass
                  : activeClass,
              ]"
            >
              <label class="ml-8"> Phone Number</label>
              <h5 class="ml-8">
                {{ this.profileInfo["user"]["phoneNumber"] }}
              </h5>
            </div>

            <div
              :class="[
                this.profileInfo.user.emailAddress === null
                  ? errorClass
                  : activeClass,
              ]"
            >
              <label class="ml-8"> Email</label>
              <h5 class="ml-8">
                {{
                  this.profileInfo.user.emailAddress
                    ? this.profileInfo.user.emailAddress
                    : "-"
                }}
              </h5>
            </div>
            <div
              :class="[
                this.profileInfo.name === null ? errorClass : activeClass,
              ]"
            >
              <label class="ml-8"> User Type</label>
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
            <div
              :class="[
                this.verificationInfo.education.institution.name === null
                  ? errorClass
                  : activeClass,
              ]"
            >
              <label class="ml-8"> Institution Name</label>
              <h5 class="ml-8">
                {{
                  this.verificationInfo["education"]["institution"]["name"]
                    ? this.verificationInfo["education"]["institution"]["name"]
                    : "-"
                }}
              </h5>
            </div>
            <div
              :class="[
                this.verificationInfo.education.institution.institutionType
                  .name === null
                  ? errorClass
                  : activeClass,
              ]"
            >
              <label class="ml-8"> Institution Type</label>
              <h5 class="ml-8">
                {{
                  this.verificationInfo["education"]["institution"][
                    "institutionType"
                  ]["name"]
                    ? this.verificationInfo["education"]["institution"][
                        "institutionType"
                      ]["name"]
                    : "-"
                }}
              </h5>
            </div>
            <div
              :class="[
                this.verificationInfo.education.department.name === null
                  ? errorClass
                  : activeClass,
              ]"
            >
              <label class="ml-8"> Department</label>
              <h5 class="ml-8">
                {{
                  this.verificationInfo["education"]["department"]["name"]
                    ? this.verificationInfo["education"]["department"]["name"]
                    : "-"
                }}
              </h5>
            </div>
            <div
              :class="[
                this.verificationInfo.applicantType.name === null
                  ? errorClass
                  : activeClass,
              ]"
            >
              <label class="ml-8"> Applicant Type</label>
              <h5 class="ml-8">
                {{
                  this.verificationInfo["applicantType"]["name"]
                    ? this.verificationInfo["applicantType"]["name"]
                    : "-"
                }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/sharedComponents/Title";
import axios from "axios";
import Navigation from "@/views/Navigation";

export default {
  props: ["activeState"],
  components: {
    Title,
    Navigation,
  },
  created() {
    this.userId = localStorage.getItem("userId");
    this.fetchProfile();
    this.fetchSubmitted();
  },
  data: () => ({
    profileInfo: {
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
    },
    verificationInfo: {
      applicantType: {
        name: "Local",
      },
      education: {
        institution: {
          name: "",
          institutionType: {
            name: "",
          },
        },
        department: {
          name: "",
        },
      },
    },
    basePath: "http://localhost:5000/",
    activeClass: "active",
    errorClass: "text-danger",
  }),
  methods: {
    async fetchSubmitted() {
      try {
        const url =
          `http://localhost:5000/api/verifications/user/` + this.userId;
        const response = await axios.get(url);
        console.log(response);
        const results = response.data.data;
        const lastSubmitted = results.length - 1;
        this.verificationInfo = results[lastSubmitted];
        console.log(this.verificationInfo);
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
        const url = `http://localhost:5000/api/profiles/` + this.userId;
        const response = await axios.get(url);
        const results = response.data;
        this.profileInfo = results.data;
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
<style>
.text-danger > label,
.text-danger > h5 {
  color: red;
}
img {
  width: 250px;
  height: 250px;
}
</style>
