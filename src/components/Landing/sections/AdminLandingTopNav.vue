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
      <h3 class="ml-tiny font-AtkinsonHyperlegibleBold">
        eHPEL - Lisence, Admin
      </h3>
    </div>

    <button
      type="button"
      class="
        inline-block
        px-6
        py-2.5
        bg-primary-700
        text-white
        hover:text-primary-600 hover:bg-white
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
    <i class="fa fa-sign-in"></i>
      Log In
    </button>
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
                bg-primary-600
                focus:bg-blue-700
                focus:shadow-sm
                focus:ring-4
                focus:ring-blue-500
                focus:ring-opacity-50
                text-white
                hover:text-primary-600 hover:bg-white
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
            <i class="fa fa-sign-in"></i>
              Login
          
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
  emits: ["setShowLogin"],
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
    const loggedInData = ref({});

    const submit = () => {
      showLoading.value = true;

      show.value = true;
      let credentialData = {
        email: credentials.value.email.toLowerCase(),
        password: credentials.value.password,
      };
      store.dispatch("admin/login", credentialData).then((res) => {
        loggedInData.value = store.getters["admin/getAdmin"];
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
            show.value = false;
          } else {
            show.value = false;
            if (loggedInData.value.isFirstTime) {
              show.value = false;
              router.push({ path: "/admin/changePassword" });
              setTimeout(() => {
                window.location.reload();
              }, 500);
            } else if (loggedInData.value.role.code == "UM") {
              show.value = false;
       
              router.push({ path: "/admin/list" });
              setTimeout(() => {
                window.location.reload();
              }, 500);
            } else {
              show.value = false;
    
              router.push({ path: "/admin/review" });
              setTimeout(() => {
                window.location.reload();
              }, 500);
            }
          }
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
h3 {
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  background: linear-gradient(-70deg, #3674b9, #b5b173);
  -webkit-background-clip: text;
}
</style>
