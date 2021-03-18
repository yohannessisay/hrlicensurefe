<template>
  <div class="w-screen flex flex-col justify-center items-center">
    <div class="flex flex-col mt-large w-3/12">
      <Title message="Login" />
      <form @submit.prevent="submit" class="flex flex-col w-full mt-4">
        <div class="flex flex-col mb-medium">
          <label>Email</label>
          <input
            v-model="credentials.email"
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required
          />
          <span style="color: red">{{ credentialsErrors.email }}</span>
        </div>
        <div class="flex flex-col mb-medium">
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
        <div>
          <div class="flex items-center justify-end">
            <div class="text-sm">
              <a
                href="#"
                class="font-medium primary text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div class="flex justify-center">
            <button @click="submit()">Login</button>
          </div>
        </div>
        <div class="text-indigo-700 flex justify-center">
          <span>Don't have an account? </span>
          <router-link to="/signup" class="px-4">Sign Up</router-link>
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
        email: "",
        password: "",
      },
      credentialsErrors: {
        email: undefined,
        password: undefined,
      },
    };
  },
  methods: {
    submit() {
      this.credentialsErrors = this.validateForm(this.credentials);
      if (Object.keys(this.credentialsErrors).length) return;
      console.log(this.credentials);
      // this.$store.dispatch("setUserInfo", this.credentials);
      // this.$store.dispatch("setAuth", true);
      this.$router.push("/license");
    },
    validateForm(credentials) {
      const errors = {};
      if (!credentials.email) errors.email = "Email Required";
      if (!credentials.password) errors.password = "Password Required";

      if (credentials.email && !this.isEmail(credentials.email)) {
        errors.email = "Invalid Email";
      }
      return errors;
    },
    isEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
  },
};
</script>
