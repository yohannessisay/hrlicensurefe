<template>
  <div>
    <Navigation />
    <div
      class="w-screen h-full bg-lightBlueB-200 flex items-center justify-center"
    >
      <div class="w-screen max-w-4xl mt-medium h-screen">
        <div
          class="flex flex-col mt-large w-full bg-white blue-box-shadow-light rounded mb-large"
        >
          <div class="mt-large">
            <TitleWithIllustration
              illustration="GoodStanding"
              message="Good Standing"
            />
          </div>
          <form @submit.prevent="submit" class="mx-auto max-w-3xl w-full mt-10">
            <div class="flex">
              <div class="flex flex-col mb-medium w-1/2 mr-12">
                <label class="text-primary-700">ApplicantType</label>
                <select
                  class="max-w-3xl"
                  v-model="goodStandingInfo.applicantTypeId"
                >
                  <option
                    v-for="applicant in applicantTypes"
                    v-bind:key="applicant.name"
                    v-bind:value="applicant.id"
                  >
                    {{ applicant.name }}
                  </option>
                </select>
              </div>
              <div class="flex flex-col mb-medium w-1/2 mr-12">
                <label class="text-primary-700">Department</label>
                <select
                  class="max-w-3xl"
                  v-model="goodStandingInfo.education.departmentId"
                >
                  <option
                    v-for="department in departments"
                    v-bind:key="department.name"
                    v-bind:value="department.id"
                  >
                    {{ department.name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="flex">
              <div class="flex w-1/2 mb-medium  mr-12">
                <div class="flex flex-col w-full">
                  <label class="text-primary-700">Institution Type</label>
                  <div class="flex w-full">
                    <div
                      class="flex flex-col mb-small w-1/3"
                      v-for="institution in institutions"
                      v-bind:key="institution.name"
                    >
                      <div class="flex py-2">
                        <input
                          v-model="goodStandingInfo.education.institutionId"
                          class="flex flex-col"
                          type="radio"
                          name="institution"
                          :value="institution.id"
                        />
                        <label class="ml-tiny flex flex-col text-primary-700">
                          {{ institution.name }}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-center mb-8">
              <button click="submit()">
                Next
              </button>
              <button variant="outline">
                Finish Later
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showFlash">
    <FlashMessage message="Your good standing is applied successfully!" />
  </div>
  <div v-if="showErrorFlash">
    <ErrorFlashMessage message="Unable to apply your good standing!" />
  </div>
</template>

<script>
import Navigation from "@/views/Navigation";
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
import axios from "axios";
import FlashMessage from "@/sharedComponents/FlashMessage";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";

export default {
  props: ["activeState"],
  components: {
    TitleWithIllustration,
    Navigation,
    FlashMessage,
    ErrorFlashMessage,
  },
  mounted() {
    this.fetchInstitutions();
    this.fetchDepartments();
    this.fetchApplicantType();
  },
  data: () => ({
    goodStandingInfo: {
      applicantId: +localStorage.getItem("userId"),
      applicantTypeId: "",
      education: {
        departmentId: "",
        institutionId: "",
      },
    },
    applicantTypes: [],
    institutions: [],
    departments: [],
    showFlash: false,
    showErrorFlash: false,
  }),

  methods: {
    async submit() {
      this.showFlash = false;
      this.showErrorFlash = false;
      this.$emit("changeActiveState");
      let goodStanding = {
        applicantId: this.goodStandingInfo.applicantId,
        applicantTypeId: this.goodStandingInfo.applicantTypeId,
        education: {
          departmentId: this.goodStandingInfo.education.departmentId,
          institutionId: this.goodStandingInfo.education.institutionId,
        },
      };
      console.log(goodStanding);
      // verification.applicantTypeId = 10000;
      try {
        await axios
          .post("http://localhost:5000/api/goodStandings/add", goodStanding)
          .then((response) => {
            if (response.statusText == "Created") {
              this.Success = true;
              this.showFlash = true;

              console.log(response);
              this.$router.push({ path: "/goodStandingSubmitted" });
            }
          })
          .catch((err) => {
            console.log("am here");
            this.Error = true;
            this.showErrorFlash = true;
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    },
    async fetchInstitutions() {
      try {
        const url = `http://localhost:5000/api/lookups/institutionTypes`;
        const response = await axios.get(url);
        const results = response.data.data;
        this.institutions = results;
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
    async fetchDepartments() {
      try {
        const url = `http://localhost:5000/api/lookups/departments`;
        const response = await axios.get(url);
        const results = response.data.data;
        this.departments = results;
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
    async fetchApplicantType() {
      try {
        const url = `http://localhost:5000/api/lookups/applicantTypes`;
        const response = await axios.get(url);
        const results = response.data.data;
        this.applicantTypes = results;
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
