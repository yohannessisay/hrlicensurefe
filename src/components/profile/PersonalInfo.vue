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
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">First Name</label>
            <input class="max-w-3xl" type="text" v-model="personalInfo.name" />
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">Nationality</label>
            <input
              class="max-w-3xl"
              type="text"
              v-model="personalInfo.nationality"
            />
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Father Name</label>
            <input
              class="max-w-3xl"
              type="text"
              v-model="personalInfo.fatherName"
            />
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">Place of birth(Optional)</label>
            <input
              class="max-w-3xl"
              type="text"
              v-model="personalInfo.placeOfBirth"
            />
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
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">User Type</label>
            <select class="max-w-3xl" v-model="personalInfo.userTypeId">
              <option
                v-for="types in userTypes"
                v-bind:key="types.name"
                v-bind:value="types.id"
              >
                {{ types.name }}
              </option>
            </select>
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">Expert Level</label>
            <select
              class="max-w-3xl"
              v-model="personalInfo.expertLevelId"
              @change="fetchHealthOffices()"
            >
              <option
                v-for="types in expertLevel"
                v-bind:key="types.name"
                v-bind:value="types.id"
              >
                {{ types.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="flex" v-if="personalInfo.expertLevelId == 4">
          <div class="flex flex-col mb-medium w-1/2 mr-14">
            <label class="text-primary-700">Health Office</label>
            <select class="max-w-3xl" v-model="personalInfo.healthOfficeId">
              <option
                v-for="types in healthOffices"
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
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  components: { TitleWithIllustration },
  props: ["activeState"],
  computed: mapGetters(["profile/getPersonalInfo"]),
  data: () => ({
    personalInfo: {
      name: null,
      grandFatherName: null,
      fatherName: null,
      nationality: null,
      placeOfBirth: null,
      dateOfBirth: null,
      gender: null,
      maritalStatusId: null,
      maritalStatus: null,
      userTypeId: null,
      expertLevelId: null,
      healthOfficeId: null
    },
    userTypes: [],
    expertLevel: [],
    healthOffices: [],
    maritalStatuses: []
  }),
  methods: {
    ...mapActions(["profile/setProfileInfo"]),
    async fetchUserTypes() {
      try {
        const url = `http://localhost:5000/api/lookups/userTypes`;
        const response = await axios.get(url);
        const results = response.data;
        this.userTypes = results.data;
      } catch (err) {
        if (err.response) {
          // client received an error response
          console.log("Server Error:", err);
        } else if (err.request) {
          // client never received a response, or request never left
          console.log("Network Error:", err);
        } else {
          console.log("Client Error:", err);
        }
      }
    },
    async fetchExpertLevel() {
      try {
        const url = `http://localhost:5000/api/lookups/expertLevels`;
        const response = await axios.get(url);
        const results = response.data;
        this.expertLevel = results.data;
      } catch (err) {
        if (err.response) {
          // client received an error response
          console.log("Server Error:", err);
        } else if (err.request) {
          // client never received a response, or request never left
          console.log("Network Error:", err);
        } else {
          console.log("Client Error:", err);
        }
      }
    },
    async fetchHealthOffices() {
      if (this.personalInfo.expertLevelId == 4) {
        try {
          const url = `http://localhost:5000/api/lookups/healthOffices`;
          const response = await axios.get(url);
          const results = response.data;
          this.healthOffices = results.data;
          console.log(this.healthOffices);
        } catch (err) {
          if (err.response) {
            // client received an error response
            console.log("Server Error:", err);
          } else if (err.request) {
            // client never received a response, or request never left
            console.log("Network Error:", err);
          } else {
            console.log("Client Error:", err);
          }
        }
      }
    },
    nextStep: function() {
      // this.setProfileInfo(this.personalInfo);
      //this.$store.dispatch("profile/setProfileInfo", this.personalInfo);
      this.$store.dispatch("profile/setProfileInfo", this.personalInfo);
      this.$emit("changeActiveState");
      console.log(this.personalInfo);
    },
    genderChanged: function() {
      if (this.personalInfo.maritalStatusId == 3) {
        this.personalInfo.maritalStatus = "Divorced";
      }
      if (this.personalInfo.maritalStatusId == 2) {
        this.personalInfo.maritalStatus = "Married";
      }
      if (this.personalInfo.maritalStatusId == 1) {
        this.personalInfo.maritalStatus = "Single";
      }
    }
  },
  mounted() {
    this.fetchUserTypes();
    this.fetchExpertLevel();
  }
};
</script>
