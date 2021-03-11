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
              v-model="credentials.email"
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
          <span class="py-2">Password</span>
          <label for="password" class="sr-only">Password</label>
          <input
            v-model="credentials.password"
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
            class="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
          <span style="color: red">{{ credentialsErrors.password }}</span>
        </div>
        <div>
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
           <span style="color: red">{{
            credentialsErrors.diffPassword
          }}</span>
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
export default {
  name: "Register",
  data() {
    return {
      credentials: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      credentialsErrors: {
        email: undefined,
        password: undefined,
        confirmPassword: undefined,
        diffPassword: undefined,
      },
    };
  },
  methods: {
    submit() {
      // this.$store.dispatch("apiCall", this.credentials);
      this.credentialsErrors = this.validateForm(this.credentials);
      if (Object.keys(this.credentialsErrors).length) return;
      this.$router.push({ path: '/login' });
    },
    validateForm(credentials) {
      const errors = {};
      if (!credentials.email) errors.email = "Email Required";
      if (!credentials.password) errors.password = "Password Required";
      if (!credentials.confirmPassword)
        errors.confirmPassword = "Confirmation Password Required";
      if (credentials.email && !this.isEmail(credentials.email)) {
        errors.email = "Invalid Email";
      }
      if(credentials.password != credentials.confirmPassword)
        errors.diffPassword = "Password does not match";
      return errors;
    },
    isEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
  },
};
</script>
