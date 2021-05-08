<template>
  <div
    class="card-wrapper bg-white sm:rounded-lg w-full p-large flex flex-col justify-center items-center relative"
  >
    <button
      class="absolute top-0 right-0 mr-2 mt-2"
      @click="$emit('closeModal', false)"
      variant="rounded"
    >
      <svg
        viewBox="0 0 329.269 329"
        xmlns="http://www.w3.org/2000/svg"
        class="close-svg fill-current text-primary-100 relative"
      >
        <path
          d="M194.8 164.77L323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
        />
      </svg>
    </button>

    <Title message="Log In" />

    <form
      @submit.prevent="submit"
      class="flex flex-col justify-center items-center w-full mt-4"
    >
      <div class="flex flex-col mb-medium w-full">
        <label>Email</label>
        <input
          v-model="credentials.emailAddress"
          id="email-address"
          name="email"
          type="email"
          autocomplete="email"
          required
        />
        <span style="color: red">{{ credentialsErrors.emailAddress }}</span>
      </div>
      <div class="flex flex-col mb-tiny w-full">
        <label>Password</label>
        <input
          v-model="credentials.password"
          type="password"
          id="password"
          name="password"
          autocomplete="current-password"
          required
        />
        <span style="color: red">{{ credentialsErrors.password }}</span>
      </div>
      <a
        href="#"
        class="text-primary-500 w-full text-right mr-small hover:underline"
      >
        Forgot password?
      </a>
      <button click="submit()" class="mt-medium">
        Login
      </button>
      <Spinner
        v-if="message.showLoading"
        class="mt-4 mb-4"
        style="width:20px; height:20px"
      />
      <a
        class="text-base text-primary-500 hover:underline cursor-pointer"
        @click="redirectToSignup"
        >Don't have an account? Sign Up
      </a>
    </form>
  </div>
  <div class="mr-3xl" v-if="message.showFlash">
    <FlashMessage message="Login Successful!" />
  </div>
  <div v-if="message.showErrorFlash">
    <ErrorFlashMessage message="Login Failed!" />
  </div>
</template>
<script>
import Title from "@/sharedComponents/Title";
import { useStore } from "vuex";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import FlashMessage from "@/sharedComponents/FlashMessage";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import Spinner from "@/sharedComponents/Spinner";
export default {
  components: { Title, FlashMessage, ErrorFlashMessage, Spinner },
  setup() {
    const store = useStore();
    const router = useRouter();

    let message = ref({
      showFlash: false,
      showErrorFlash: false,
      showLoading: false,
    });

    const credentials = ref({
      emailAddress: "",
      password: "",
    });

    const credentialsErrors = ref({
      emailAddress: undefined,
      password: undefined,
    });

    const submit = () => {
      let email = {
        emailAddress: credentials.value.emailAddress,
      };
      message.value.showLoading = true;
      message.value.showFlash = false;
      message.value.showErrorFlash = false;
      store.dispatch("user/login", email).then((res) => {
        if (res.data.status == "Success") {
          const userId = res.data.data.id;
          store.dispatch("profile/getProfileByUserId", userId).then((res) => {
            const getProfiles = res.data ? res.data.data : null;
            console.log(getProfiles);
            if (getProfiles) {
              message.value.showLoading = false;
              message.value.showFlash = true;
              message.value.showErrorFlash = false;
              setTimeout(() => {
                router.push({ path: "/menu" });
              }, 3000);
            } else {
              message.value.showLoading = false;
              message.value.showFlash = true;
              message.value.showErrorFlash = false;
              setTimeout(() => {
                router.push({ path: "/addProfile" });
              }, 3000);
            }
          });
        } else {
          message.value.showLoading = false;
          message.value.showFlash = false;
          message.value.showErrorFlash = true;

          setTimeout(() => {}, 1800);
        }
      });
    };

    const isEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };

    const validateForm = (formData) => {
      const errors = {};
      if (!formData.emailAddress) errors.emailAddress = "Email Required";
      if (!formData.phoneNumber) errors.phoneNumber = "Phone Number Required";
      if (formData.emailAddress && !this.isEmail(formData.emailAddress)) {
        errors.emailAddress = "Invalid Email";
      }
      return errors;
    };
    return {
      credentials,
      credentialsErrors,
      submit,
      isEmail,
      validateForm,
      message,
    };
  },
};
</script>
<style lang="postcss" scoped>
.close-svg {
  width: 16px;
}

.card-wrapper {
  max-width: 450px;
  box-shadow: 0px -8px 6px rgb(30 64 175 / 51%);
}

@screen md {
  .card-wrapper {
    box-shadow: 0px 3px 6px #1e40af82;
  }
}
</style>
