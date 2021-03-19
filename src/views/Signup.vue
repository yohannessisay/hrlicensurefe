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
<<<<<<< HEAD
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
=======
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
>>>>>>> 754714da72b1e97b2e1a9dd67f272482a656f8fd
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
<<<<<<< HEAD
import axios from "axios";
=======
import Title from "@/sharedComponents/Title";

>>>>>>> 754714da72b1e97b2e1a9dd67f272482a656f8fd
export default {
  components: { Title },
  data() {
    return {
      credentials: {
        emailAddress: "",
<<<<<<< HEAD
        phoneNumber: ""
=======
        phoneNumber: "",
>>>>>>> 754714da72b1e97b2e1a9dd67f272482a656f8fd
      },
      // credentialsErrors: {
      //   email: undefined,
      //   password: undefined,
      //   confirmPassword: undefined,
      //   diffPassword: undefined,
      // },
      credentialsErrors: {
        emailAddress: undefined,
<<<<<<< HEAD
        phoneNumber: undefined
=======
        phoneNumber: undefined,
>>>>>>> 754714da72b1e97b2e1a9dd67f272482a656f8fd
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
      this.credentialsErrors = this.validateForm(this.credentials);
      if (Object.keys(this.credentialsErrors).length) return;
<<<<<<< HEAD
      this.success = this.signup();
      this.$router.push({ path: "/login" });
=======
      // this.$store.dispatch("apiCall", this.credentials);

      // this.$router.push({ path: "/login" });
>>>>>>> 754714da72b1e97b2e1a9dd67f272482a656f8fd
    },
    validateForm(credentials) {
      const errors = {};
      if (!credentials.emailAddress) errors.emailAddress = "Email Required";
<<<<<<< HEAD
      if (!credentials.phoneNumber) errors.phoneNumber = "Phonenumber Required";
      if (credentials.emailAddress && !this.isEmail(credentials.emailAddress)) {
        errors.emailAddress = "Invalid Email";
      }
=======
      if (!credentials.phoneNumber)
        errors.phoneNumber = "Phone Number Required";
      // if (!credentials.confirmPassword)
      //   errors.confirmPassword = "Confirmation Password Required";
      if (credentials.emailAddress && !this.isEmail(credentials.emailAddress)) {
        errors.emailAddress = "Invalid Email";
      }
      // if (credentials.password != credentials.confirmPassword)
      //   errors.diffPassword = "Password does not match";
>>>>>>> 754714da72b1e97b2e1a9dd67f272482a656f8fd
      return errors;
    },
    isEmail(emailAddress) {
      const re = /\S+@\S+\.\S+/;
      return re.test(emailAddress);
    }
  }
};
</script>
