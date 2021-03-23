<template>
  <div class="w-screen max-w-4xl mt-xl h-screen">
    <div
      class="flex flex-col mt-large w-full bg-white blue-box-shadow-light rounded"
    >
      <div class="mt-large">
        <TitleWithIllustration illustration="Address" message="Address Info" />
      </div>
      <form class="mx-auto max-w-3xl w-full mt-10" @submit.prevent="nextStep">
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Region</label>
            <select class="max-w-3xl" v-model="cityObj" @change="fetchZones()">
              <option
                v-for="types in regions"
                v-bind:key="types.name"
                v-bind:value="types"
              >
                {{ types.name }}
              </option>
            </select>
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">Kebele</label>
            <input class="max-w-3xl" type="number" v-model="address.kebele" />
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Zone</label>
            <select class="max-w-3xl" @change="fetchWoredas()" v-model="zoneId">
              <option
                v-for="types in zones"
                v-bind:key="types.name"
                v-bind:value="types.id"
              >
                {{ types.name }}
              </option>
            </select>
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">House No(Optional)</label>
            <input
              class="max-w-3xl"
              type="text"
              v-model="address.houseNumber"
            />
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Woreda</label>
            <select
              class="max-w-3xl"
              v-model="address.woredaId"
              @change="woredaChanged()"
            >
              <option
                v-for="types in woredas"
                v-bind:key="types.name"
                v-bind:value="types.id"
              >
                {{ types.name }}
              </option>
            </select>
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">Residence</label>
            <input class="max-w-3xl" type="text" v-model="address.residence" />
          </div>
        </div>
        <div class="flex mb-medium w-full mt-medium">
          <button
            class="mx-auto w-1/2 blue-with-light-blue-gradient"
            variant="block"
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
  data: () => ({
    address: {
      houseNumber: null,
      woredaId: null,
      woreda: null,
      kebele: null,
      city: null,
      residence: null,
      zone: null
    },
    regionId: null,
    regions: [],
    zones: [],
    woredas: [],
    cityObj: {},
    zoneId: null
  }),
  computed: {
    ...mapGetters({ getPersonalInfo: "profile/getPersonalInfo" })
  },
  methods: {
    ...mapActions(["setAddress"]),
    async fetchRegions() {
      try {
        const url = `http://localhost:5000/api/lookups/regions/`;
        const response = await axios.get(url);
        const results = response.data;
        this.regions = results.data;
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
    async fetchZones() {
      try {
        this.address.city = this.cityObj.name;
        this.regionId = this.cityObj.id;
        const url = `http://localhost:5000/api/lookups/zones/` + this.regionId;
        const response = await axios.get(url);
        const results = response.data;
        this.zones = results.data;
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
    async fetchWoredas() {
      try {
        const url = `http://localhost:5000/api/lookups/woredas/` + this.zoneId;
        const response = await axios.get(url);
        const results = response.data;
        this.woredas = results.data;
        for (const item of Object.entries(this.zones)) {
          if (item[1].id == this.zoneId) {
            this.address.zone = item[1].name;
          }
        }
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
    woredaChanged() {
      for (const item of Object.entries(this.woredas)) {
        console.log(item[1].name);
        console.log(item[1].id);
        console.log(this.address.woredaId);
        if (item[1].id == this.address.woredaId) {
          this.address.woreda = item[1].name;
        }
      }
    },
    nextStep: function() {
      this.$store.dispatch("profile/setAddress", this.address);
      this.$emit("changeActiveState");
      // console.log(this.address);
    }
  },
  mounted() {
    this.fetchRegions();
    // console.log(this.getPersonalInfo);
  },
  created() {
    console.log(this.getPersonalInfo);
    //console.log(this.$store.getters.getPersonalInfo);
  }
};
</script>
