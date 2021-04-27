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
            <select class="max-w-3xl" v-model="state.cityObj" @change="fetchZones()">
              <option
                v-for="types in state.regions"
                v-bind:key="types.name"
                v-bind:value="types"
              >
                {{ types.name }}
              </option>
            </select>
            <span style="color: red">{{ addressErrors.city }}</span>
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">Kebele</label>
            <input class="max-w-3xl" type="number" v-model="address.kebele" />
            <span style="color: red">{{ addressErrors.kebele }}</span>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Zone</label>
            <select class="max-w-3xl" @change="fetchWoredas()" v-model="state.zoneId">
              <option
                v-for="types in state.zones"
                v-bind:key="types.name"
                v-bind:value="types.id"
              >
                {{ types.name }}
              </option>
            </select>
            <span style="color: red">{{ addressErrors.zone }}</span>
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
                v-for="types in state.woredas"
                v-bind:key="types.name"
                v-bind:value="types.id"
              >
                {{ types.name }}
              </option>
            </select>
            <span style="color: red">{{ addressErrors.woreda }}</span>
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">Residence</label>
            <input class="max-w-3xl" type="text" v-model="address.residence" />
            <span style="color: red">{{ addressErrors.residence }}</span>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">PO Box(Optional)</label>
            <input class="max-w-3xl" type="text" v-model="address.poBox" />
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12"></div>
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
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
export default {
  components: { TitleWithIllustration },
  props: ["activeState"],
  setup(props, { emit }) {
    const store = useStore();

    let address = ref({
      houseNumber: "",
      woreda: "",
      kebele: "",
      city: "",
      residence: "",
      zone: "",
      poBox: ""
    });

    let addressErrors = ref({
      woreda: "",
      kebele: "",
      city: "",
      residence: "",
      zone: ""
    });

    let state = ref({
      regionId: "",
      regions: [],
      zones: [],
      woredas: [],
      cityObj: {},
      zoneId: ""
    });

    const fetchRegions = () => {
      store.dispatch("profile/getRegions").then(res => {
        const regionsResult = res.data;
        state.value.regions = regionsResult.data;
      });
    };

    const fetchZones = () => {
      address.value.city = state.value.cityObj.name;
      state.value.regionId = state.value.cityObj.id;
      console.log(state.value.regionId);
      store.dispatch("profile/getZones", state.value.regionId).then(res => {
        const zonesResult = res.data;
        state.value.zones = zonesResult.data;
      });
    };

    const fetchWoredas = () => {
      store.dispatch("profile/getWoredas", state.value.zoneId).then(res => {
        const woredasResult = res.data;
        state.value.woredas = woredasResult.data;
        for (const item of Object.entries(state.value.zones)) {
          if (item[1].id == state.value.zoneId) {
            address.value.zone = item[1].name;
          }
        }
      });
    };

    const woredaChanged = () => {
      for (const item of Object.entries(state.value.woredas)) {
        if (item[1].id == address.value.woredaId) {
          address.value.woreda = item[1].name;
        }
      }
    };

    const nextStep = () => {
      addressErrors.value = validateForm(address.value);
      let empty = isEmpty(addressErrors.value);
      if (empty == false) {
        console.log(addressErrors.value);
        return;
      }
      if (empty == true) {
        store.dispatch("profile/setAddress", address);
        emit("changeActiveState");
      }
    };

    const validateForm = formData => {
      const errors = {};

      if (!state.value.cityObj.name) errors.city = "Region Required";
      if (!formData.kebele) errors.kebele = "Kebele Required";
      if (!state.value.zoneId) errors.zone = "Zone Required";
      if (!formData.woredaId) errors.woreda = "Woreda Required";
      if (!formData.residence) errors.residence = "Residence Required";

      return errors;
    };

    const isEmpty = obj => {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          return false;
        }
      }

      return true;
    };
    onMounted(() => {
      fetchRegions();
    });

    return {
      address,
      addressErrors,
      validateForm,
      isEmpty,
      state,
      fetchRegions,
      fetchZones,
      fetchWoredas,
      woredaChanged,
      nextStep
    };
  }
};
</script>
