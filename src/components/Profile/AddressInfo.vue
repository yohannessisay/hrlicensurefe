<template>
  <div class="w-screen max-w-4xl mt-small h-full">
    <div
      class="flex flex-col mt-small mb-large w-full bg-white blue-box-shadow-light rounded"
    >
      <div class="mt-large">
        <TitleWithIllustration illustration="Address" message="Address Info" />
      </div>
      <form class="mx-auto max-w-3xl w-full mt-10" @submit.prevent="nextStep">
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Kebele</label>
            <input class="max-w-3xl" type="number" v-model="address.kebele" />
            <span style="color: red">{{ addressErrors.kebele }}</span>
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
          <div class="flex flex-col mb-medium w-1/2">
            <label class="text-primary-700">Residence</label>
            <input class="max-w-3xl" type="text" v-model="address.residence" />
            <span style="color: red">{{ addressErrors.residence }}</span>
          </div>
          <div class="flex flex-col mb-medium w-1/2 ml-12">
            <label class="text-primary-700">PO Box(Optional)</label>
            <input class="max-w-3xl" type="text" v-model="address.poBox" />
          </div>
        </div>
      </form>
      <div class="flex justify-center mb-medium mt-medium">
        <button
          @click="prevStep"
          class="mx-auto w-1/4 mr-2"
          variant="outline-block"
        >
          Back
        </button>
        <button
          @click="nextStep"
          class="mx-auto w-1/4 blue-with-light-blue-gradient ml-2"
          variant="block"
        >
          Next
        </button>
      </div>
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
      kebele: "",
      houseNumber: "",
      residence: "",
      poBox: "",
    });

    let addressErrors = ref({
      kebele: "",
      residence: "",
    });

    const prevStep = () => {
      addressErrors.value = validateForm(address.value);
      let empty = isEmpty(addressErrors.value);
      if (empty == false) {
        return;
      }
      if (empty == true) {
        store.dispatch("profile/setAddress", address);
        emit("changeActiveStatePrevious");
      }
    };

    const nextStep = () => {
      addressErrors.value = validateForm(address.value);
      let empty = isEmpty(addressErrors.value);
      if (empty == false) {
        return;
      }
      if (empty == true) {
        store.dispatch("profile/setAddress", address);
        emit("changeActiveState");
      }
    };

    const validateForm = (formData) => {
      const errors = {};

      if (!formData.kebele) errors.kebele = "Kebele Required";
      if (!formData.residence) errors.residence = "Residence Required";

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
      if (store.getters["profile/getAddress"]) {
        address.value = store.getters["profile/getAddress"];
      }
    });

    return {
      address,
      addressErrors,
      validateForm,
      isEmpty,
      nextStep,
      prevStep,
    };
  },
};
</script>
