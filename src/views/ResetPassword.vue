<template>
  <header class="px-10 py-3.5 inset-box-shadow bg-lightBlueB-100">
    <nav>
      <main class="navigate flex items-center justify-between">
        <div class="flex items-center">
          <h2 class="text-md DosisBold text-primary-600 ml-2 text-3xl ">
            electronical Health Professional Licensing (eHPL)
          </h2>
        </div>
      </main>
    </nav>
  </header>

  <div class="bg-primary-100 h-full">
    <form class="mx-auto max-w-3xl w-full mt-40 " @submit.prevent="submitForm">
      <div class="flex">
        <div class="flex flex-col  mx-auto w-1/2 ">
          <h2 class="text-2xl text-primary-600 font-weight-bold">
            Reset Password
          </h2>

          <label class="text-primary-700 mt-8">New Password Form</label>
          <input
            class="max-w-3xl"
            type="password"
            required
            v-model="newPassword"
          />
          <br />
          <label class="text-primary-700">Confirm New Password</label>
          <input
            class="max-w-3xl"
            type="password"
            required
            v-model="confirmNewPassword"
          />

          <div class="flex mb-medium w-full mt-medium">
            <button
              class="   
              w-full
              m-4
              text-white
              font-medium
              text-xs
              bg-primary-700
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-white hover:text-primary-700
              transition
              duration-150
              ease-in-out"
              type="submit"
            >
              Confirm
            </button>
          </div>
          <span v-if="showLoading">
            <Spinner />
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import Spinner from "@/sharedComponents/Spinner";
import { useToast } from "vue-toastification";
export default {
  components: {
    Spinner,
  },
  setup() {
    let route = useRoute();
    let showLoading = ref(false);
    const store = useStore();
    const toast = useToast();
    const params = ref("");
    const router = useRouter();

    let newPassword = ref("");
    let confirmNewPassword = ref("");
    let id = ref("");
    id.value = route.params.id;
    let token = route.params.token ? route.params.token : "";
    const submitForm = () => {
      showLoading.value = true;

      params.value = route.params;

      if (newPassword.value != confirmNewPassword.value) {
        toast.error("Passwords don't match", {
          timeout: 5000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true,
        });
      } else if (newPassword.value.length < 8) {
        toast.error("Password length should be more than 8", {
          timeout: 5000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true,
        });
      } else {
        let data = {
          password: newPassword.value,
          id: id.value,
          token: token,
        };
        store
          .dispatch("profile/resetPassword", data)
          .then((res) => {
            if (res.data.status === "Success") {
              showLoading.value = false;
              toast.success("Password has been reseted successfully", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              setTimeout(() => {
                router.push({ path: "/admin" });
              }, 1000);
            } else {
              showLoading.value = false;
              toast.error("Error occured, please try after few minutes", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
            }
          })
          .catch((err) => {
            showLoading.value = false;
            toast.error(err, {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
          });
      }
    };

    return {
      submitForm,
      showLoading,

      newPassword,
      confirmNewPassword,
    };
  },
};
</script>

<style>
body {
  background-color: #f9fafb;
}
</style>
