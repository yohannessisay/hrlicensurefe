<template>
  <section
    class="
      w-full
      bg-white
      shadow-md
      h-large
      px-tiny
      sm:px-small
      flex
      justify-between
      items-center
      fixed
      top-0
      z-50
      glass
    "
  >
    <div class="flex justify-center items-center">
      <RenderIllustration illustration="Logo" class="hidden sm:block" />
      <h3 class="ml-tiny font-AtkinsonHyperlegibleBold">eHPEL - Lisence</h3>
    </div>
    <div>
      <button
        class="
          px-6
          py-2.5
          bg-main-400
          text-white
          hover:text-main-400 hover:bg-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out
        "
        data-bs-toggle="modal"
        data-bs-target="#register" 
      >
      <i class="fa fa-address-card"></i>   Sign Up
      </button>
      <button
        type="button"
        class="
          px-6
          py-2.5
          bg-main-400
          text-white
          hover:text-main-400 hover:bg-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out
        "
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <i class="fa fa-sign-in"></i> Log In
      </button>
    </div>
  </section>
  <div
    class="
      modal
      fade
      fixed
      top-0
      left-0
      hidden
      w-full
      h-full
      outline-none
      overflow-x-hidden overflow-y-auto
    "
    id="staticBackdrop"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog relative pointer-events-none">
      <div
        class="
          modal-content
          border-none
          shadow-lg
          relative
          flex flex-col
          w-8/12
          md:w-9/12
          mdlg:w-9/12
          lg:w-10/12
          sm:w-full
          pointer-events-auto
          bg-white bg-clip-padding
          rounded-md
          outline-none
          text-current
        "
      >
        <div
          class="
            modal-header
            flex flex-shrink-0
            justify-center
            items-center
            p-4
            border-b border-grey-100
            rounded-t-md
          "
        >
          <button
            type="button"
            class="
              btn-close
              box-content
              h-small
              text-black
              border-none
              rounded-sm
              opacity-50
              focus:shadow-none focus:outline-none focus:opacity-100
              hover:text-black hover:opacity-100 hover:no-underline
            "
            data-bs-dismiss="modal"
            aria-label="Close"
            style="min-height: 28px; min-width: 28px"
          ></button>
        </div>
        <div class="modal-body relative p-2 flex justify-center">
          <form @submit.prevent="submit">
            <div class="form-group mb-6 flex justify-center">
              <img
                src="../../../assets/image.png"
                loading="lazy"
                class="w-40"
                alt="HPEL logo"
              />
            </div>
            <div class="form-group mb-6">
              <label
                for="exampleInputEmail2"
                class="form-label inline-block mb-2 text-gray-700"
                >Email address</label
              >
              <input
                type="email"
                v-model="credentials.email"
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
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group mb-6">
              <label
                for="exampleInputPassword2"
                class="form-label inline-block mb-2 text-gray-700"
                >Password</label
              >
              <input
                v-model="credentials.password"
                type="password"
                id="password"
                name="password"
                autocomplete="current-password"
                required
                placeholder="**********"
                @type="show ? 'password' : 'text'"
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
              />
              <a class="text-primary-500">
                <i
                  class="fa fa-eye cursor-pointer"
                  style="font-size: 26px"
                  @click="showVisibility()"
                ></i
              ></a>
            </div>
            <div class="flex justify-between items-center mb-6">
              <a
                href="#!"
                class="
                  text-blue-600
                  hover:text-blue-700
                  focus:text-blue-700
                  transition
                  duration-200
                  ease-in-out
                "
                @click="$emit('forgotPassword')"
                >Forgot password?</a
              >
            </div>
            <button
              class="
                transition
                duration-200
                bg-main-400
                focus:bg-blue-700
                focus:shadow-sm
                focus:ring-4
                focus:ring-blue-500
                focus:ring-opacity-50
                text-white
                hover:text-main-400 hover:bg-white
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
          </form>
        </div>
      </div>
    </div>
  </div>





  <div
    class="
      modal
      fade
      fixed
      top-0
      left-0
      hidden
      w-full
      h-full
      outline-none
      overflow-x-hidden overflow-y-auto
    "
    id="register"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="register"
    aria-hidden="true"
  >
    <div class="modal-dialog relative pointer-events-none">
      <div
        class="
          modal-content
          border-none
          shadow-lg
          relative
          flex flex-col
          w-8/12
          md:w-9/12
          mdlg:w-9/12
          lg:w-10/12
          sm:w-full
          pointer-events-auto
          bg-white bg-clip-padding
          rounded-md
          outline-none
          text-current
        "
      >
        <div
          class="
            modal-header
            flex flex-shrink-0
            justify-center
            items-center
            p-4
            border-b border-grey-100
            rounded-t-md
          "
        >
          <button
            type="button"
            class="
              btn-close
              box-content
              h-small
              text-black
              border-none
              rounded-sm
              opacity-50
              focus:shadow-none focus:outline-none focus:opacity-100
              hover:text-black hover:opacity-100 hover:no-underline
            "
            data-bs-dismiss="modal"
            aria-label="Close"
            style="min-height: 28px; min-width: 28px"
          ></button>
        </div>
        <div class="modal-body relative p-2 flex justify-center">
          <form @submit.prevent="submit">
            <div class="form-group mb-6 flex justify-center">
              <img
                src="../../../assets/image.png"
                loading="lazy"
                class="w-40"
                alt="HPEL logo"
              />
            </div>
            <div class="form-group mb-6">
              <label
                for="exampleInputEmail2"
                class="form-label inline-block mb-2 text-gray-700"
                >Email address</label
              >
              <input
                type="email"
                v-model="credentials.email"
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
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group mb-6">
              <label
                for="exampleInputPassword2"
                class="form-label inline-block mb-2 text-gray-700"
                >Password</label
              >
              <input
                v-model="credentials.password"
                type="password"
                id="password"
                name="password"
                autocomplete="current-password"
                required
                placeholder="**********"
                @type="show ? 'password' : 'text'"
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
              />
              <a class="text-primary-500">
                <i
                  class="fa fa-eye cursor-pointer"
                  style="font-size: 26px"
                  @click="showVisibility()"
                ></i
              ></a>
            </div>
            <div class="flex justify-between items-center mb-6">
              <a
                href="#!"
                class="
                  text-blue-600
                  hover:text-blue-700
                  focus:text-blue-700
                  transition
                  duration-200
                  ease-in-out
                "
                @click="$emit('forgotPassword')"
                >Forgot password?</a
              >
            </div>
            <button
              class="
                transition
                duration-200
                bg-main-400
                focus:bg-blue-700
                focus:shadow-sm
                focus:ring-4
                focus:ring-blue-500
                focus:ring-opacity-50
                text-white
                hover:text-main-400 hover:bg-white
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
              @click="register()"
            >
              Register
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
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RenderIllustration from "@/sharedComponents/RenderIllustration";
import VueElementLoading from "vue-element-loading";
import { useStore } from "vuex";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
export default {
  components: { RenderIllustration, VueElementLoading },
  emits: ["setShowLogin","setShowSignup"],
  setup({ emit }) {
    const store = useStore();
    const router = useRouter();
    const toast = useToast();
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

    const submit = () => {
      show.value = true;
      let email = {
        emailAddress: credentials.value.email.toLowerCase(),
        password: credentials.value.password,
      };

      store.dispatch("user/login", email).then((res) => {
        if (res) {
          const userId = res.data.data.id;
          store.dispatch("profile/getProfileByUserId", userId).then((res) => {
            const getProfiles = res.data ? res.data.data : null;
            if (getProfiles) {
              toast.success("Logged In Successfully", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              setTimeout(() => {
                window.location.reload();
              }, 500);
              router.push({ path: "/menu" });
            } else {
              toast.success("Logged In Successfully", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              setTimeout(() => {
                window.location.reload();
              }, 100);
              router.push({ path: "/addProfile" });
            }
          });
        } else {
          show.value = false;
          toast.error("Username or password incorrect", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
          credentials.value.password = "";
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
      if (formData.email && !isEmail(formData.email)) {
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
h3 {
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  background: linear-gradient(-70deg, #3674b9, #b5b173);
  -webkit-background-clip: text;
}
</style>
