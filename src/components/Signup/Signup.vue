<template>
  <div
    class="card-wrapper bg-white sm:rounded-lg w-full p-large flex flex-col justify-center items-center relative"
  >
    <button
      class="close-button flex items-center justify-center rounded-full absolute"
      :onClick="closeOption"
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
    <Title message="Sign up" />
    <form
      class="flex flex-col justify-center items-center w-full mt-4"
      @submit.prevent="submit"
    >
      <input type="hidden" name="remember" value="true" />
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
        <span style="color: red">{{ credentialsErrors.email }}</span>
      </div>
      <div class="flex flex-col mb-medium w-full">
        <label for="password">Phone Number</label>
        <input
          v-model="credentials.phoneNumber"
          id="phone"
          name="phone"
          type="text"
          autocomplete="current-number"
          required
        />
        <span style="color: red">{{ credentialsErrors.phoneNumber }}</span>
      </div>
      <!-- <div>
          <span class="py-2">Confirm Password</span>
          <label for="password" class="sr-only">Confirm Password</label>
          <input
            v-model="credentials.confirmPassword"
            id="confirm-password"
            name="confirm-password"
            type="password"
            autocomplete="current-confirm-password"
            required
            class="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Confirm Password"
          />
          <span style="color: red">{{
            credentialsErrors.confirmPassword
          }}</span>
          <span style="color: red">{{ credentialsErrors.diffPassword }}</span>
        </div> -->
      <button click="submit()">
        Sign up
      </button>
      <a
        class="text-base text-primary-500 hover:underline cursor-pointer"
        :onClick="redirectToLogin"
        >Already have an account? Log in
      </a>
    </form>
  </div>
</template>
<script>
import Title from "@/sharedComponents/Title";

export default {
  components: { Title },
  data() {
    return {
      credentials: {
        emailAddress: "",
        phoneNumber: ""
      },
      // credentialsErrors: {
      //   email: undefined,
      //   password: undefined,
      //   confirmPassword: undefined,
      //   diffPassword: undefined,
      // },
      credentialsErrors: {
        emailAddress: undefined,
        phoneNumber: undefined
      }
    };
  },
  methods: {
    closeOption() {
      this.$emit("closeModal", false);
    },
    redirectToLogin(){
      this.$emit("redirectToLogin");
    },
    submit() {
      // this.credentialsErrors = this.validateForm(this.credentials);
      // if (Object.keys(this.credentialsErrors).length) return;
      let signup = {
        emailAddress: this.credentials.emailAddress,
        phoneNumber: this.credentials.phoneNumber
      };
      this.$store.dispatch("user/signUp", signup);
      console.log(signup);
      this.$router.push({ path: "/addProfile" });
    },
    validateForm(credentials) {
      const errors = {};
      if (!credentials.emailAddress) errors.emailAddress = "Email Required";
      if (!credentials.phoneNumber)
        errors.phoneNumber = "Phone Number Required";
      // if (!credentials.confirmPassword)
      //   errors.confirmPassword = "Confirmation Password Required";
      if (credentials.emailAddress && !this.isEmail(credentials.emailAddress)) {
        errors.emailAddress = "Invalid Email";
      }
      // if (credentials.password != credentials.confirmPassword)
      //   errors.diffPassword = "Password does not match";
      return errors;
    },
    isEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  }
};
</script>

<style lang="postcss" scoped>
.close-svg {
  width: 16px;
}

.close-button {
  min-width: 48px;
  width: 48px;
  min-height: 48px;
  height: 48px;
  padding: 0;
  margin: 0;
  border-radius: 9999px !important;
  top: 10px;
  right: 10px;
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
