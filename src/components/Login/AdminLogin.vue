<template>
  <div
    class="min-h-screen w-full bg-gray-100 flex flex-col justify-center sm:py-4"
  >
    <div class="p-4 xs:p-0 mx-auto md:w-full md:max-w-md">
      <h1 class="font-bold text-center text-2xl mb-5">
        <button
          @click="$emit('closeModal', false)"
          variant="rounded"
          style="display: inline-grid !important"
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
      </h1>
      <div
        class="bg-white shadow w-full rounded-lg text-center"
        style="height: 39vw"
      >
        <div class="flex flex-col justify-center items-center p-2">
          <img
            src="../../assets/image.png"
            loading="lazy"
            class="w-100"
            alt="HPEL logo"
          />
          <h2>HPEL Login</h2>
          <h5>Enter your email and password below</h5>
        </div>
        <form @submit.prevent="submit">
          <div class="px-10 py-7">
            <div class="form-group mb-6 text-left">
              <label class="font-semibold text-md text-gray-600 block"
                >Email address</label
              >

              <input
                v-model="credentials.email"
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="border rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full"
                aria-describedby="emailHelp"
                placeholder="email@example.com"
              />
              <span style="color: red">{{
                credentialsErrors.emailAddress
              }}</span>
            </div>

            <div class="form-group mb-6 text-left">
              <span class="inline-grid grid-cols-2 gap-8">
                <span
                  ><label class="font-semibold text-md text-gray-600 block"
                    >Password</label
                  ></span
                >
              </span>
            </div>
            <div class="inline-flex w-full">
              <input
                v-model="credentials.password"
                type="password"
                id="password"
                name="password"
                autocomplete="current-password"
                required
                class="border rounded-lg px-3 py-2 mt-1 mb-2 text-sm w-full"
                placeholder="**********"
                @type="show ? 'password' : 'text'"
              />
              <div class="w-1/12 ml-2 mt-2">
                <a class="text-primary-500">
                  <i
                    class="fa fa-eye"
                    style="font-size: 26px"
                    @click="showVisibility()"
                  ></i
                ></a>
              </div>
            </div>
            <div>
              <a
                href="#"
                class="
                  text-primary-500
                  w-full
                  text-right
                  mr-small
                  hover:underline
                "
                @click="$emit('forgotPassword')"
                >Forgot Password</a
              >
            </div>
            <div class="form-group mb-6 text-center">
              <button
                class="
                  transition
                  duration-200
                  bg-blue-500
                  hover:bg-blue-600
                  focus:bg-blue-700
                  focus:shadow-sm
                  focus:ring-4
                  focus:ring-blue-500
                  focus:ring-opacity-50
                  text-white
                  w-full
                  ml-auto
                  mt-4
                  rounded-lg
                  text-md
                  shadow-sm
                  hover:shadow-md
                  font-semibold
                  text-center
                  inline-block
                "
              >
                Login
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-4 inline-block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                <vue-element-loading
                  :active="show"
                  spinner="ring"
                  color="white"
                  background-color="#ffffff00;"
                  style="margin-left: 110px; margin-top: -3px"
                />
              </button>
            </div>

            <div class="mr-3xl" v-if="message.showFlash">
              <FlashMessage message="Login Successful!" />
            </div>
            <div v-if="message.showErrorFlash">
              <ErrorFlashMessage message="Incorrect username or password" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "@/sharedComponents/Title";
import { useStore } from "vuex";
import { ref } from "vue";
import { useRouter } from "vue-router";
import FlashMessage from "@/sharedComponents/FlashMessage";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import Spinner from "@/sharedComponents/Spinner";
import VueElementLoading from "vue-element-loading";
export default {
  components: {
    Title,
    FlashMessage,
    ErrorFlashMessage,
    Spinner,
    VueElementLoading,
  },
  setup({ emit }) {
    const store = useStore();
    const router = useRouter();
    let show = ref(false);
    let showLoading = ref(false);
    let message = ref({
      showFlash: false,
      showErrorFlash: false,
    });

    const credentials = ref({
      email: "",
      password: "",
    });

    const credentialsErrors = ref({
      email: undefined,
      password: undefined,
    });
    const showVisibility = () => {
      let x = document.getElementById("password");

      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    };
    const loggedInData = ref({});

    const submit = () => {
      showLoading.value = true;

      show.value = true;
      let credentialData = {
        email: credentials.value.email.toLowerCase(),
        password: credentials.value.password,
      };
      store.dispatch("admin/login", credentialData).then((res) => {
        loggedInData.value = res.data.data;

        showLoading.value = false;
        if (loggedInData.value !== undefined) {
          if (!loggedInData.value.isActive) {
            message.value.showErrorFlash = true;
            setTimeout(() => {
              // context.emit("closeModal", true);
              credentials.value.email = "";
              credentials.value.password = "";
              message.value.showErrorFlash = false;
            }, 3000);
          } else {
            if (loggedInData.value.isFirstTime) {
              message.value.showFlash = !message.value.showFlash;
              setTimeout(() => {
                router.push({ path: "/admin/changePassword" });
              }, 1000);
            } else if (loggedInData.value.role.code == "UM") {
              message.value.showErrorFlash = !message.value.showFlash;
              setTimeout(() => {
                router.push({ path: "/admin/list" });
              }, 1000);
            } else {
              message.value.showFlash = !message.value.showFlash;
              setTimeout(() => {
                router.push({ path: "/admin/review" });
              }, 3000);
            }
          }
        } else {
          message.value.showErrorFlash = !message.value.showErrorFlash;
          show.value = false;
          setTimeout(() => {
            // context.emit("closeModal", true);
            credentials.value.email = "";
            credentials.value.password = "";

            message.value.showErrorFlash = !message.value.showErrorFlash;
          }, 3000);
        }
      });
    };

    const isEmail = (email) => {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };

    const validateForm = (formData) => {
      const errors = {};
      if (!formData.email) errors.email = "Email Required";
      if (formData.email && !this.isEmail(formData.email)) {
        errors.email = "Invalid Email";
      }
      return errors;
    };
    return {
      credentials,
      credentialsErrors,
      submit,
      isEmail,
      showVisibility,
      validateForm,
      message,
      show,
      showLoading,
    };
  },
};
</script>
<style lang="postcss" scoped>
.close-svg {
  width: 16px;
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
