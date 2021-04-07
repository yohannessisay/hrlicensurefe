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
                  v-for="applicant in lookUp.applicantTypes"
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
                  v-for="department in lookUp.departments"
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
                    v-for="institution in lookUp.institutions"
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
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
import axios from "axios";
export default {
  props: ["activeState"],
  components: { TitleWithIllustration },
  setup(props, { emit }) {
    const store = useStore();

    let renewalLicenseInfo = ref({
      applicantId: +localStorage.getItem("userId"),
      applicantTypeId: "",
      education: {
        departmentId: "",
        institutionId: ""
      }
    });

    let lookUp = ref({
      applicantTypes: [],
      institutions: [],
      departments: []
    });

    const fetchInstitutions = async () => {
      store.dispatch("renewal/getInstitutions").then(res => {
        const inResults = res.data;
        lookUp.value.institutions = inResults.data;
      });
    };

    const fetchDepartments = async () => {
      store.dispatch("renewal/getDepartments").then(res => {
        const inResults = res.data;
        lookUp.value.departments = inResults.data;
      });
    };

    const fetchApplicantType = async () => {
      store.dispatch("renewal/getApplicantType").then(res => {
        const inResults = res.data;
        lookUp.value.applicantTypes = inResults.data;
      });
    };

    const submit = () => {
      emit("changeActiveState");
      let renewalLicense = {
        applicantId: renewalLicenseInfo.value.applicantId,
        applicantTypeId: renewalLicenseInfo.value.applicantTypeId,
        education: {
          departmentId: renewalLicenseInfo.value.education.departmentId,
          institutionId: renewalLicenseInfo.value.education.institutionId
        }
      };
      store.dispatch("renewal/setRenewal", renewalLicense);
    };

    onMounted(() => {
      fetchInstitutions();
      fetchDepartments();
      fetchApplicantType();
    });

    return {
      renewalLicenseInfo,
      submit,
      fetchInstitutions,
      fetchDepartments,
      fetchApplicantType,
      lookUp
    };
  }
};
</script>
