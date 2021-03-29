<template>
  <div class="w-screen max-w-4xl">
    <div
      class="flex flex-col mt-large w-full bg-white blue-box-shadow-light rounded"
    >
      <div class="mt-large">
        <TitleWithIllustration illustration="Contact" message="Contact Info" />
      </div>
      <form class="mx-auto max-w-3xl w-full mt-10" @submit.prevent="nextStep">
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Mobile Number</label>
            <div class="relative w-full">
              <p class="absolute inset-y-0 left-0 flex items-center pl-2">
                +251
              </p>
              <input
                class="px-12 max-w-3xl w-full"
                type="tel"
                v-model="contact.mobileNumber"
              />
            </div>
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12">
            <label class="text-primary-700">Email(Optional)</label>
            <input class="max-w-3xl" type="email" v-model="contact.email" />
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">Telephone Number</label>
            <input
              class="max-w-3xl" 
              type="tel" 
              v-model="contact.telephoneNumber"
            />
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12"></div>
        </div>
        <div class="flex">
          <div class="flex flex-col mb-medium w-1/2 mr-12">
            <label class="text-primary-700">PO Box(Optional)</label>
            <input class="max-w-3xl" type="text" v-model="contact.poBox" />
          </div>
          <div class="flex flex-col mb-medium w-1/2 m1-12"></div>
        </div>
        <div class="flex mb-medium w-full mt-medium">
          <button
            class="mx-auto w-1/2  bg-lightBlue-500 hover:bg-lightBlue-600 hover:shadow-lg"
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
import { ref } from "vue";
import { useStore } from "vuex";
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";

export default {
  components: { TitleWithIllustration },
  props: ["activeState"],
  setup(props, { emit }) {
    const store = useStore();

    let contact = ref({
      mobileNumber: null,
      email: null,
      telephoneNumber: null,
      poBox: null
    });

    const nextStep = () => {
      store.dispatch("profile/setContact", contact);
      emit("changeActiveState");
    };

    return {
      contact,
      nextStep
    };
  },
  created() {
    console.log(this.getPersonalInfo);
    console.log(this.getAddress);
  }
};
</script>
