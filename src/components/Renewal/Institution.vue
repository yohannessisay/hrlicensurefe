<template>
  <div class="flex justify-center">
    <div class="w-screen max-w-4xl">
      <div
        class="flex flex-col pt-large w-full bg-white blue-box-shadow-light rounded"
      >
        <div class="mt-large">
          <TitleWithIllustration
            illustration="Institution"
            message="Institution"
          />
        </div>
        <form @submit.prevent="submit" class="mx-auto max-w-3xl w-full mt-10">
          <div class="flex">
            <div class="flex flex-col mb-medium w-1/2 mr-12">
              <label class="text-primary-700">Applicant Type</label>
              <select
                class="max-w-3xl"
                v-model="renewalLicenseInfo.applicantTypeId"
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
                v-model="renewalLicenseInfo.education.departmentId"
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
                        v-model="renewalLicenseInfo.education.institutionId"
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
</template>

<script>
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
import axios from "axios";
export default {
  props: ["activeState"],
  components: { TitleWithIllustration },
  mounted() {
    this.fetchInstitutions();
    this.fetchDepartments();
    this.fetchApplicantType();
  },
  data: () => ({
    renewalLicenseInfo: {
      applicantId: +localStorage.getItem("userId"),
      applicantTypeId: "",
      education: {
        departmentId: "",
        institutionId: ""
      }
    },
    applicantTypes: [],
    institutions: [],
    departments: []
  }),

  methods: {
    submit() {
      this.$emit("changeActiveState");
      let renewalLicense = {
        applicantId: this.renewalLicenseInfo.applicantId,
        applicantTypeId: this.renewalLicenseInfo.applicantTypeId,
        education: {
          departmentId: this.renewalLicenseInfo.education.departmentId,
          institutionId: this.renewalLicenseInfo.education.institutionId
        }
      };
      this.$store.dispatch("renewal/setRenewal", renewalLicense);
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
    }
  }
};
</script>
