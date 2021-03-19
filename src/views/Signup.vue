<template>
  <div class="w-screen flex flex-col justify-center items-center">
    <div class="flex flex-col mt-large w-3/12">
      <Title message="Signup" />

      <form class="mt-6 space-y-6" @submit.prevent="submit">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <span class="py-2">Email</span>
            <label for="email-address" class="sr-only">Email</label>
            <input
              v-model="credentials.emailAddress"
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
            <span style="color: red">{{ credentialsErrors.email }}</span>
          </div>
        </div>
        <div>
          <span class="py-2">Phone Number</span>
          <label for="password" class="sr-only">Phone Number</label>
          <input
            v-model="credentials.phoneNumber"
            id="phone"
            name="phone"
            type="text"
            autocomplete="current-number"
            required
            class="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
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
        <div class="flex justify-center">
          <button click="submit()">
            Signup
          </button>
        </div>
        <div class="text-indigo-700 flex justify-center">
          <span>Already have an account?</span>
          <router-link to="/login" class="px-4">Login</router-link>
        </div>
      </form>
    </div>
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
        phoneNumber: "",
      },
      // credentialsErrors: {
      //   email: undefined,
      //   password: undefined,
      //   confirmPassword: undefined,
      //   diffPassword: undefined,
      // },
      credentialsErrors: {
        emailAddress: undefined,
        phoneNumber: undefined,
      },
    };
  },
  methods: {
    submit() {
      this.credentialsErrors = this.validateForm(this.credentials);
      if (Object.keys(this.credentialsErrors).length) return;
      // this.$store.dispatch("apiCall", this.credentials);

      // this.$router.push({ path: "/login" });
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
    },
  },
};
</script>
