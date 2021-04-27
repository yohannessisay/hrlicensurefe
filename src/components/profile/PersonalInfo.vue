<template>
  <div class="w-screen max-w-4xl mt-xl h-screen">
    <div
      class="flex flex-col mt-large w-full bg-white blue-box-shadow-light rounded mb-large"
    >
      <div class="mt-large">
        <TitleWithIllustration
          illustration="PersonalInfo"
          message="Personal Info"
        />
      </div>
      <form class="mx-auto max-w-3xl w-full mt-10" @submit.prevent="nextStep">
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-6">
            <label class="text-primary-700">First Name</label>
            <input class="max-w-3xl" type="text" v-model="personalInfo.name" />
            <span style="color: red">{{ personalInfoErrors.name }}</span>
          </div>
          <div class="flex flex-col mb-medium w-1/2 ml-12">
            <label class="text-primary-700">Father Name</label>
            <input
              class="max-w-3xl"
              type="text"
              v-model="personalInfo.fatherName"
            />
            <span style="color: red">{{ personalInfoErrors.fatherName }}</span>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Grand Father Name</label>
            <input
              class="max-w-3xl"
              type="text"
              v-model="personalInfo.grandFatherName"
            />
            <span style="color: red">{{
              personalInfoErrors.grandFatherName
            }}</span>
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">Nationality</label>
            <input
              class="max-w-3xl"
              type="text"
              v-model="personalInfo.nationality"
            />
            <span style="color: red">{{ personalInfoErrors.nationality }}</span>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Place of birth(Optional)</label>
            <input
              class="max-w-3xl"
              type="text"
              v-model="personalInfo.placeOfBirth"
            />
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">Date of birth(Optional)</label>
            <input
              class="max-w-3xl"
              type="date"
              v-model="personalInfo.dateOfBirth"
            />
          </div>
        </div>
        <div class="flex">
          <div class="flex w-1/2 mb-small  mr-12">
            <div class="flex flex-col w-full">
              <label class="text-primary-700">Gender</label>
              <div class="flex w-full">
                <div class="flex flex-col mb-small w-1/3">
                  <div class="flex py-2">
                    <input
                      class="flex flex-col"
                      type="radio"
                      id="male"
                      value="male"
                      v-model="personalInfo.gender"
                    />
                    <label
                      class="ml-tiny flex flex-col text-primary-700"
                      for="male"
                    >
                      Male
                    </label>
                  </div>
                </div>
                <div class="flex w-1/3">
                  <div class="flex flex-col w-1/3">
                    <div class="flex py-2">
                      <input
                        type="radio"
                        id="female"
                        value="female"
                        v-model="personalInfo.gender"
                      />
                      <label class="ml-tiny text-primary-700" for="female">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <span style="color: red" class="mt-0">
                {{ personalInfoErrors.gender }}</span
              >
            </div>
          </div>
          <div class="flex w-1/2 mb-small m1-12">
            <div class="flex flex-col w-full">
              <label class="text-primary-700">Martial Status</label>
              <div class="flex w-full">
                <div class="flex flex-col w-1/3">
                  <div class="flex py-2">
                    <input
                      class="flex flex-col"
                      type="radio"
                      id="single"
                      value="1"
                      v-model="personalInfo.maritalStatusId"
                      @change="genderChanged()"
                    />
                    <label
                      class="ml-tiny flex flex-col text-primary-700"
                      for="single"
                    >
                      Single
                    </label>
                  </div>
                </div>
                <div class="flex w-1/3">
                  <div class="flex flex-col w-1/3">
                    <div class="flex py-2">
                      <input
                        type="radio"
                        id="married"
                        value="2"
                        v-model="personalInfo.maritalStatusId"
                        @change="genderChanged()"
                      />
                      <label class="ml-tiny text-primary-700" for="married">
                        Married
                      </label>
                    </div>
                  </div>
                </div>
                <div class="flex  flex-col w-1/3">
                  <div class="flex py-2">
                    <input
                      type="radio"
                      id="divorced"
                      value="3"
                      v-model="personalInfo.maritalStatusId"
                      @change="genderChanged()"
                    />
                    <label class="ml-tiny text-primary-700" for="divorced">
                      Divorced
                    </label>
                  </div>
                </div>
              </div>
              <span style="color: red">{{
                personalInfoErrors.maritalStatusId
              }}</span>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">User Type</label>
            <select class="max-w-3xl" v-model="personalInfo.userTypeId">
              <option
                v-for="types in state.userTypes"
                v-bind:key="types.name"
                v-bind:value="types.id"
              >
                {{ types.name }}
              </option>
            </select>
            <span style="color: red">{{ personalInfoErrors.userTypeId }}</span>
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">Expert Level</label>
            <select
              class="max-w-3xl"
              v-model="personalInfo.expertLevelId"
              @change="fetchHealthOffices()"
            >
              <option
                v-for="types in state.expertLevel"
                v-bind:key="types.name"
                v-bind:value="types.id"
              >
                {{ types.name }}
              </option>
            </select>
            <span style="color: red">{{
              personalInfoErrors.expertLevelId
            }}</span>
          </div>
        </div>
        <div class="flex" v-if="personalInfo.expertLevelId == 4">
          <div class="flex flex-col mb-medium w-1/2 mr-14">
            <label class="text-primary-700">Health Office</label>
            <select class="max-w-3xl" v-model="personalInfo.healthOfficeId">
              <option
                v-for="types in state.healthOffices"
                v-bind:key="types.name"
                v-bind:value="types.id"
              >
                {{ types.name }}
              </option>
            </select>
          </div>
          <div class="flex flex-col mb-medium w-1/2 ml-12"></div>
        </div>
        <div class="flex mb-medium w-full mt-medium">
          <button
            class="block mx-auto w-1/2  bg-lightBlue-500 hover:bg-lightBlue-600 hover:shadow-lg"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
export default {
  components: { TitleWithIllustration },
  props: ["activeState"],
  setup(props, { emit }) {
    const store = useStore();
    let personalInfo = ref({
      name: "",
      grandFatherName: "",
      fatherName: "",
      nationality: "",
      placeOfBirth: "",
      dateOfBirth: "",
      gender: "",
      maritalStatusId: "",
      maritalStatus: "",
      userTypeId: "",
      expertLevelId: "",
      healthOfficeId: "",
    });
    let personalInfoErrors = ref({
      name: "",
      grandFatherName: "",
      fatherName: "",
      nationality: "",
      gender: "",
      maritalStatusId: "",
      maritalStatus: "",
      userTypeId: "",
      expertLevelId: "",
    });

    let state = ref({
      userTypes: {},
      expertLevel: {},
      healthOffices: {},
      maritalStatuses: {},
    });

    const fetchUserTypes = () => {
      store.dispatch("profile/getUserTypes").then((res) => {
        const utResults = res.data;
        state.value.userTypes = utResults.data;
      });
    };

    const fetchExpertLevel = () => {
      store.dispatch("profile/getExpertLevels").then((res) => {
        const elResults = res.data;
        state.value.expertLevel = elResults.data;
      });
    };

    const fetchHealthOffices = () => {
      if (personalInfo.value.expertLevelId == 4) {
        store.dispatch("profile/getHealthOffice").then((res) => {
          const hoResults = res.data;
          console.log(hoResults.data);
          state.value.healthOffices = hoResults.data;
        });
      }
    };

    const nextStep = () => {
      personalInfoErrors.value = validateForm(personalInfo.value);
      let empty = isEmpty(personalInfoErrors.value);
      if (empty == false) {
        return;
      }
      if (empty == true) {
        store.dispatch("profile/setProfileInfo", personalInfo);
        emit("changeActiveState");
      }
    };

    const genderChanged = () => {
      if (personalInfo.value.maritalStatusId == 3) {
        personalInfo.value.maritalStatus = "Divorced";
      }
      if (personalInfo.value.maritalStatusId == 2) {
        personalInfo.value.maritalStatus = "Married";
      }
      if (personalInfo.value.maritalStatusId == 1) {
        personalInfo.value.maritalStatus = "Single";
      }
    };

    const validateForm = (formData) => {
      const errors = {};

      if (!formData.name) errors.name = "First Name Required";
      if (!formData.fatherName) errors.fatherName = "Father Name Required";
      if (!formData.grandFatherName)
        errors.grandFatherName = "Grand Father Name Required";
      if (!formData.nationality) errors.nationality = "Nationality Required";
      if (!formData.gender) errors.gender = "Gender Required";
      if (!formData.maritalStatusId)
        errors.maritalStatusId = "Marital Status Required";
      if (!formData.userTypeId) errors.userTypeId = "User Type Required";
      if (!formData.expertLevelId)
        errors.expertLevelId = "Expert Level Required";

      return errors;
    };
    const isEmpty = (obj) => {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          return false;
        }
      }

      return true;
    };

    onMounted(() => {
      fetchUserTypes();
      fetchExpertLevel();
    });
    return {
      personalInfo,
      personalInfoErrors,
      validateForm,
      isEmpty,
      state,
      fetchUserTypes,
      fetchExpertLevel,
      fetchHealthOffices,
      nextStep,
      genderChanged,
    };
  },
};
</script>
