<template>
  <form class="mx-auto max-w-3xl w-full mt-10" @submit.prevent="submitForm">
    <div class="flex">
      <div class="flex flex-col  mx-auto w-1/2">
        <!-- <span v-show="!isFirstTimeLogin"> -->
        <label class="text-primary-700" v-show="!isFirstTimeLogin"
          >Old Password</label
        >
        <br />
        <input
          class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700
            focus:bg-white
            focus:border-blue-600
            focus:outline-none
          "
          type="password"
          v-show="!isFirstTimeLogin"
          v-model="passwordInfo.oldPassword"
        />
        <br />
        <!-- </span> -->
        <!-- <span style="color: red">{{ personalInfoErrors.name }}</span> -->
        <label class="text-primary-700">New Password</label>
        <input
          class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700
            focus:bg-white
            focus:border-blue-600
            focus:outline-none
          "
          type="password"
          v-model="passwordInfo.newPassword"
          v-on:keyup="showPasswordStrength(passwordInfo.newPassword)"
        />
        <password-meter :password="passwordInfo.newPassword" />
        <div v-if="passwordStrengthDisplay">
          <ul>
            Password should be:
            <div class="ml-16 pl-8">
              <li>Minimum of Eight Characters</li>
              <li>At least one Uppercase Character</li>
              <li>At least one Lowercase Character</li>
              <li>At least one Number</li>
              <li>At least one special Character</li>
            </div>
          </ul>
        </div>
        <br />
        <label class="text-primary-700">Confirm New Password</label>
        <input
          class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700
            focus:bg-white
            focus:border-blue-600
            focus:outline-none
          "
          type="password"
          v-model="passwordInfo.confirmPassword"
        />
        <div v-if="showErrorMessage">
          <label class="text-red-200">*please fill all fields</label>
        </div>
        <div v-if="showErrorPassword && !showErrorMessage">
          <label class="text-red-200">*password is not the same</label>
        </div>
        <div v-if="oldPasswordError && !showErrorMessage">
          <label class="text-red-200">*passwords don't match</label>
        </div>
        <div class="flex mb-medium w-full mt-medium justify-center">
          <button
            class="
              px-2
              bg-primary-700
              text-white
              hover:border
              font-medium
              text-xs
              uppercase
              rounded
               
              hover:bg-white hover:text-primary-600
              transition
              duration-150
              ease-in-out
            "
          >
            Confirm
          </button>
        </div>
        <span v-if="showLoading">
          <Spinner />
        </span>
        <div v-if="showFlash">
          <FlashMessage message="Password Successfully Changed!" />
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Spinner from "@/sharedComponents/Spinner";
import { useToast } from "vue-toastification";
import FlashMessage from "@/sharedComponents/FlashMessage";
import PasswordMeter from "vue-simple-password-meter";

export default {
  components: {
    Spinner,
    FlashMessage,
    PasswordMeter,
  },

  name: "NewPasswordForm",
  setup() {
    let showLoading = ref(false);
    const isFirstTimeLogin = JSON.parse(localStorage.getItem("allAdminData"))
      .isFirstTime;
    const toast = useToast();
    let passwordInfo = ref({
      email: localStorage.getItem("adminEmail"),
      oldPassword: isFirstTimeLogin ? "password1" : "",
      newPassword: "",
      confirmPassword: "",
    });

    let showErrorPassword = ref(false);
    let showErrorMessage = ref(false);
    let oldPasswordError = ref(false);
    let showFlash = ref(false);

    const passwordStrengthDisplay = ref(false);

    const store = useStore();
    const router = useRouter();

    const showPasswordStrength = (password) => {
      if (password != "") {
        passwordStrengthDisplay.value = true;
      } else {
        passwordStrengthDisplay.value = false;
      }
    };

    const submitForm = () => {
      oldPasswordError.value = false;
      showLoading.value = true;
      validateMessage(passwordInfo);
      if (
        passwordInfo.value.newPassword != passwordInfo.value.confirmPassword
      ) {
        showErrorPassword.value = true;
        showLoading.value = false;
        return;
      }

      store
        .dispatch("admin/changePassword", passwordInfo.value)
        .then((res) => {
          showLoading.value = false;
          if (res.data.status === "Success") {
            showFlash.value = true;
            setTimeout(() => {
              if (isFirstTimeLogin) {
                toast.success("Successfully changed password", {
                  timeout: 5000,
                  position: "bottom-center",
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  icon: true,
                });
                localStorage.clear();
                router.push({ path: "/admin" });
              } else {
                toast.success("Successfully changed password", {
                  timeout: 5000,
                  position: "bottom-center",
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  icon: true,
                });
                router.push({ path: "/admin/review" });
              }
            }, 1000);
          }
        })
        .catch((err) => {
          toast.error(err, {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
        });
    };

    const validateMessage = (adminData) => {
      if (
        adminData.value.oldPassword == "" ||
        adminData.value.newPassword == "" ||
        adminData.value.confirmPassword == ""
      ) {
        showLoading.value = false;
        showErrorMessage.value = true;
        return;
      } else {
        showErrorMessage.value = false;
      }
    };
    return {
      showPasswordStrength,
      passwordStrengthDisplay,
      submitForm,
      passwordInfo,
      showLoading,
      showErrorPassword,
      showErrorMessage,
      isFirstTimeLogin,
      oldPasswordError,
      showFlash,
    };
  },
};
</script>
