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
                @keypress="isNumber($event)"
              />
              <span style="color: red">{{ contactErrors.mobileNumber }}</span>
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
              @keypress="isNumber($event)"
            />
            <span style="color: red">{{ contactErrors.telephoneNumber }}</span>
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
      mobileNumber: "",
      email: "",
      telephoneNumber: "",
      poBox: ""
    });

    let contactErrors = ref({
      mobileNumber: "",
      email: "",
      telephoneNumber: ""
    });

    const validateForm = formData => {
      const errors = {};

      if (!formData.mobileNumber)
        errors.mobileNumber = "Mobile Number Required";
      // if (!formData.telephoneNumber)
      //   errors.telephoneNumber = "Telephone Number Required";
      if (formData.email && !isEmail(formData.email)) {
        errors.email = "Invalid Email";
      }

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

    const isNumber = evt => {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46 ) {
        evt.preventDefault();
      } else {
        return true;
      }
    };

    const isEmail = email => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };

    const nextStep = () => {
      contactErrors.value = validateForm(contact.value);
      let empty = isEmpty(contactErrors.value);
      if (empty == false) {
        return;
      }
      if (empty == true) {
        store.dispatch("profile/setContact", contact);
        emit("changeActiveState");
      }
    };

    return {
      contact,
      contactErrors,
      validateForm,
      isNumber,
      isEmpty,
      isEmail,
      nextStep
    };
  }
};
</script>
