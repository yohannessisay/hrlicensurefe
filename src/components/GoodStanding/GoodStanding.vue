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
  <div v-if="showFlash == true">
    <FlashMessage message="Your good standing is applied successfully!" />
  </div>
  <div v-if="showErrorFlash == false">
    <ErrorFlashMessage message="Unable to apply your good standing!" />
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from 'vue-router'
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
    ErrorFlashMessage,},
  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();

    let goodStandingInfo = ref({
      applicantId: +localStorage.getItem("userId"),
      applicantTypeId: "",
      education: {
        departmentId: "",
        institutionId: ""
      }
    });

    let applicantTypes = ref([]);
    let institutions = ref([]);
    let departments = ref([]);

    let showFlash = ref(false);
    let showErrorFlash = ref(false);

    const fetchInstitutions = async () => {
      store.dispatch("renewal/getInstitutions").then(res => {
        const inResults = res.data;
        institutions.value = inResults.data;
      });
    };

    const fetchDepartments = async () => {
      store.dispatch("renewal/getDepartments").then(res => {
        const inResults = res.data;
        departments.value = inResults.data;
      });
    };

    const fetchApplicantType = async () => {
      store.dispatch("renewal/getApplicantType").then(res => {
        const inResults = res.data;
        applicantTypes.value = inResults.data;
      });
    };

    const submit = async () => {
      emit("changeActiveState");
      let goodStandingInfoP = {
        applicantId: goodStandingInfo.value.applicantId,
        applicantTypeId: goodStandingInfo.value.applicantTypeId,
        education: {
          departmentId: goodStandingInfo.value.education.departmentId,
          institutionId: goodStandingInfo.value.education.institutionId
        }
      };
      console.log(goodStandingInfoP);
      try {
        await axios
          .post("http://localhost:5000/api/goodStandings/add", goodStandingInfoP)
          .then(response => {
            console.log(response.data.status);
            if (response.statusText == "Created") {
              showFlash.value = true;

              console.log(response);
              router.push({ path: "/goodStandingSubmitted" });
            }
          })
          .catch(err => {
            console.log("am here");
            showErrorFlash.value = true;
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      fetchInstitutions();
      fetchDepartments();
      fetchApplicantType();
      nextTick(function() {
        window.setInterval(() => {
          showFlash.value = false;
          showErrorFlash.value = false;
        }, 10000);
      });
    });

    return {
      goodStandingInfo,
      submit,
      fetchInstitutions,
      fetchDepartments,
      fetchApplicantType,
      applicantTypes,
      institutions,
      departments
    };
  }
};
</script>
