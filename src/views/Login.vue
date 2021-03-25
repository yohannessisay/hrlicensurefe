<template>
  <div
    class="card-wrapper bg-white sm:rounded-lg w-full p-large flex flex-col justify-center items-center"
  >
    <Title message="Login" />

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
      <button click="submit()" class="mt-medium">Login</button>
      <router-link
        to="/signup"
        class="text-base text-primary-500 hover:underline"
        >Don't have an account? Sign Up</router-link
      >
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
        password: ""
      },
      credentialsErrors: {
        emailAddress: undefined,
        password: undefined
      }
    };
  },

  methods: {
    submit() {
      this.credentialsErrors = this.validateForm(this.credentials);
      if (Object.keys(this.credentialsErrors).length) return;
      let email = {
        emailAddress: this.credentials.emailAddress
      };
      this.$store.dispatch("user/setContact", email);
      this.$router.push({ path: "/menu" });
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
    }
  }
};
</script>
<style lang="postcss" scoped>
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
