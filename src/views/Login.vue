<template>
  <div class="w-screen flex flex-col justify-center items-center">
    <div class="flex flex-col mt-large w-3/12">
      <Title message="Login" />
      <form @submit.prevent="submit" class="flex flex-col w-full mt-4">
        <div class="flex flex-col mb-medium">
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
            <button click="submit()">Login</button>
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
        emailAddress: "",
        password: "",
      },
      credentialsErrors: {
        emailAddress: undefined,
        password: undefined,
      },
    };
  },

  methods: {
    submit() {
      this.credentialsErrors = this.validateForm(this.credentials);
      if (Object.keys(this.credentialsErrors).length) return;
      let email = {
        emailAddress: this.credentials.emailAddress,
      };
      let auth = "auth";
      localStorage.setItem("token", auth);
      this.$store.dispatch('user/setContact', email);
      console.log(this.$store.getters['user/auth']);
      // this.$store.getters['user/auth']
      // this.$router.push({ path: "/menu" });
    },
    validateForm(credentials) {
      const errors = {};
      if (!credentials.emailAddress) errors.emailAddress = "Email Required";
      if (!credentials.password) errors.password = "Password Required";

      if (
        credentials.ememailAddress &&
        !this.isEmail(credentials.emailAddress)
      ) {
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
