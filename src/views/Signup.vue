<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-1/4 space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-indigo-800">
          Signup
        </h2>
      </div>
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
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <span class="py-2">Phone Number</span>
            <label for="phone-number" class="sr-only">Phone Number</label>
            <input
              v-model="credentials.phoneNumber"
              id="phone-number"
              name="phoneNumber"
              type="phoneNumber"
              required
              class="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Phone Number"
            />
            <span style="color: red">{{ credentialsErrors.phoneNumber }}</span>
          </div>
        </div>
        <div class="flex justify-center">
          <button
            @click="submit()"
            class="w-44 focus:outline-none text-white justify-center text-sm py-2 px-12 rounded-3xl bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
          >
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
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      credentials: {
        emailAddress: "",
        phoneNumber: ""
      },
      credentialsErrors: {
        emailAddress: undefined,
        phoneNumber: undefined
      },
      success: false
    };
  },
  methods: {
    async signup() {
      const auth = {
        emailAddress: this.credentials.emailAddress,
        phoneNumber: this.credentials.phoneNumber
      };
      const url = "http://localhost:5000/api/users/add";
      this.error = null;
      this.success = false;
      try {
        const res = await axios.post(url, auth).then(res => res.data);
        console.log(res);
        return (this.success = true);
      } catch (err) {
        this.error = err.message;
      }
    },
    submit() {
      // this.$store.dispatch("apiCall", this.credentials);
      this.credentialsErrors = this.validateForm(this.credentials);
      if (Object.keys(this.credentialsErrors).length) return;
      this.success = this.signup();
      this.$router.push({ path: "/login" });
    },
    validateForm(credentials) {
      const errors = {};
      if (!credentials.emailAddress) errors.emailAddress = "Email Required";
      if (!credentials.phoneNumber) errors.phoneNumber = "Phonenumber Required";
      if (credentials.emailAddress && !this.isEmail(credentials.emailAddress)) {
        errors.emailAddress = "Invalid Email";
      }
      return errors;
    },
    isEmail(emailAddress) {
      const re = /\S+@\S+\.\S+/;
      return re.test(emailAddress);
    }
  }
};
</script>
