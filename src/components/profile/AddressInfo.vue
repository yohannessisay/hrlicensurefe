<template>
  <div class="w-screen max-w-4xl">
    <div 
      class="flex flex-col mt-large w-full bg-white blue-box-shadow-light rounded"
    >
      <div class="mt-large">
        <TitleWithIllustration illustration="Address" message="Address Info" />
      </div>
      <form class="mx-auto max-w-3xl w-full mt-10">
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Region</label>
            <select
              class="max-w-3xl"
              v-model="address.regionId"
              @change="fetchZones()"
            >
              <option
                v-for="types in regions"
                v-bind:key="types.name"
                v-bind:value="types.id"
              >
                {{ types.name }}
              </option>
            </select>
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">Kebele</label>
            <input class="max-w-3xl" type="text" />
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Zone</label>
            <select
              class="max-w-3xl"
              v-model="address.zoneId"
              @change="fetchWoredas()"
            >
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
            <input class="max-w-3xl" type="text" />
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Wereda</label>
            <select class="max-w-3xl" v-model="address.woredaId">
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
            <input class="max-w-3xl" type="text" />
          </div>
        </div>
        <div class="flex mb-medium w-full mt-medium">
          <button class="mx-auto w-1/2 blue-with-light-blue-gradient" variant="block">
            Next
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
import axios from "axios";
export default {
  components: { TitleWithIllustration },
  data: () => ({
    address: {
      regionId: null,
      kebele: null,
      zoneId: null,
      houseNo: null,
      woredaId: null,
      residence: null
    },
    regions: [],
    zones: [],
    woredas: []
  }),
  methods: {
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
        const url =
          `http://localhost:5000/api/lookups/zones/` + this.address.regionId;
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
        const url = 
          `http://localhost:5000/api/lookups/woredas` + this.address.zoneId;
        const response = await axios.get(url);
        const results = response.data;
        this.woredas = results.data;
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
    nextStep: function() {
      console.log(this.address);
    }
  },
  mounted() {
    this.fetchRegions();
  }
};
</script>
