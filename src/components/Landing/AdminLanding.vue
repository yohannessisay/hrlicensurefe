<template>
  <div class="overflow-x-hidden">
    <AdminLandingTopNav @setShowLogin="showLogin = true" />
    <section class="h-screen">
      <div class="px-6 h-full text-gray-800">
        <div
          class="
            flex
            xl:justify-center
            lg:justify-between
            justify-center
            items-center
            flex-wrap
            h-full
            g-6
          "
        >
          <div
            class="
              flex
              justify-center
              grow-0
              shrink-1
              md:shrink-0
              basis-auto
              xl:w-6/12
              lg:w-6/12
              md:w-9/12
              mb-12
              md:mb-0
            "
          >
            <img
              src="../../assets/image.png"
              class="w-2/4 h-2/4"
              alt="Sample image"
            />
          </div>
          <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form @submit.prevent="submit">
              <div
                class="
                  flex
                  items-center
                  my-4
                  before:flex-1
                  before:border-t
                  before:border-gray-300
                  before:mt-0.5
                  after:flex-1 after:border-t after:border-gray-300 after:mt-0.5
                "
              >
                <h1>Welcome Admin</h1>
              </div>

              <!-- Email input -->
              <div class="mb-6">
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

              <!-- Password input -->

              <div class="relative mb-6 mt-4">
                <label for="">Password</label>
                <input
                  v-model="credentials.password"
                  id="password"
                  name="password"
                  autocomplete="current-password"
                  required
                  placeholder="**********"
                  :type="!showPasswordElement ? 'password' : 'text'"
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
                <span @click="showPassword">
                  <i
                    class="
                      fa fa-eye-slash
                      eye_1
                      absolute
                      top-10
                      right-3
                      cursor-pointer
                    "
                  ></i>
                </span>
              </div>
              <div class="flex justify-left mt-8">
                <button
                  type="submit"
                  class="
                    inline-block
                    px-6
                    text-white
                    font-medium
                    text-xs
                    bg-primary-700
                    leading-tight
                    uppercase
                    rounded
                     
                    hover:bg-white hover:text-primary-700
                    transition
                    duration-150
                    ease-in-out
                    w-2/5
                    sm:w-full
                    lg:w-2/5
                    mdlg:w-2/5
                    md:w-2/5
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
              </div>
              <a
                href="#!"
                class="
                  text-blue-600
                  hover:text-blue-700
                  focus:text-blue-700
                  transition
                  duration-200
                  ease-in-out
                  mt-4
                "
                data-bs-toggle="modal"
                data-bs-target="#forgotPasswordModal"
                >Forgot password?</a
              >
            </form>
          </div>
        </div>
      </div>
    </section>
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
    id="forgotPasswordModal"
    tabindex="-1"
    aria-labelledby="exampleModalCenterTitle"
    aria-modal="true"
    role="dialog"
  >
    <div
      class="
        modal-dialog modal-dialog-centered
        relative
        w-auto
        pointer-events-none
      "
    >
      <div
        class="
          modal-content
          border-none
           
          relative
          flex flex-col
          w-full
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
            items-center
            justify-between
            p-4
            border-b border-grey-200
            rounded-t-md
          "
        >
          <h5 class="text-xl font-medium leading-normal text-primary-600">
            Forgotten password reset form
          </h5>
        </div>
        <div class="modal-body relative p-4 flex justify-center">
          <div class="">
            <label for="">Email</label>
            <input
              type="email"
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
              v-model="forgotEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
        </div>
        <div
          class="
            modal-footer
            flex flex-shrink-0 flex-wrap
            items-center
            justify-end
            p-2
            border-t border-grey-200
            rounded-b-md
          "
        >
          <button
            type="button"
            class="
              inline-block
              px-6
              text-white
              font-medium
              text-xs
              bg-primary-700
              leading-tight
              uppercase
              rounded
               
              hover:bg-white hover:text-primary-700
              transition
              duration-150
              ease-in-out
            "
            data-bs-dismiss="modal"
          >
            <i class="fa fa-close"></i>
            Close
          </button>
          <button
            type="button"
            class="
              inline-block
              px-6
              text-white
              font-medium
              text-xs
              bg-primary-700
              leading-tight
              uppercase
              rounded
               
              hover:bg-white hover:text-primary-700
              transition
              duration-150
              ease-in-out
            "
            @click="sendEmails()"
          >
            <vue-element-loading
              :active="showForgot"
              spinner="ring"
              color="white"
              background-color="#ffffff00;"
              style="margin-left: 110px; margin-top: -3px"
            />
            <i class="fa fa-refresh"></i>
            Reset
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import AdminLandingTopNav from "./sections/AdminLandingTopNav";
import VueElementLoading from "vue-element-loading";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
export default {
  components: { VueElementLoading, AdminLandingTopNav },
  emits: ["setShowLogin"],
  setup() {
    const store = useStore();
    const router = useRouter();
    const toast = useToast();
    let show = ref(false);
    let showForgot = ref(false);
    let showLoading = ref(false);
    let showPasswordElement = ref(false);
    let forgotEmail = ref("");
    const credentials = ref({
      email: "",
      password: "",
    });

    const credentialsErrors = ref({
      email: undefined,
      password: undefined,
    });

    const loggedInData = ref({});
    const showPassword = () => {
      showPasswordElement.value = !showPasswordElement.value;
    };
    const submit = () => {
      showLoading.value = true;

      show.value = true;
      let credentialData = {
        email: credentials.value.email.toLowerCase(),
        password: credentials.value.password,
      };

      store
        .dispatch("admin/login", credentialData)
        .then(() => {
          loggedInData.value = store.getters["admin/getAdmin"];
          showLoading.value = false;
          if (loggedInData.value !== undefined) {
            if (!loggedInData.value.isActive) {
              toast.error("User is not active", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              credentials.value.email = "";
              credentials.value.password = "";

              show.value = false;
            } else {
              show.value = false;
              if (loggedInData.value.isFirstTime) {
                show.value = false;
                toast.success("Logged In Successfully", {
                  timeout: 5000,
                  position: "bottom-center",
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  icon: true,
                });
                router.push({ path: "/admin/changePassword" });
              } else if (loggedInData.value.role.code == "UM") {
                show.value = false;
                toast.success("Logged In Successfully", {
                  timeout: 5000,
                  position: "bottom-center",
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  icon: true,
                });
                router.push({ path: "/admin/list" });
              } else {
                toast.success("Logged In Successfully", {
                  timeout: 5000,
                  position: "bottom-center",
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  icon: true,
                });
                show.value = false;
                store.dispatch("lookups/getApplicationStatuses").then((res) => {
                  if (res) {
                    window.localStorage.setItem(
                      "applicationStatuses",
                      JSON.stringify(res.data.data)
                    );
                  }
                });
                router.push({ path: "/admin/review" });
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
        })
        .catch((err) => {
          if (err) {
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

    const sendEmails = () => {
      showForgot.value = true;
      let emailToBeSent = {
        email: forgotEmail.value,
      };
      store
        .dispatch("profile/adminForgotPassowrd", emailToBeSent)
        .then((res) => {
          if (res.data.status === "Success") {
            showForgot.value = false;
            toast.success("Sucess, New password has been sent to the email", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
          } else {
            showForgot.value = false;
            toast.error("Email does not exist in system", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
          }
        })
        .catch(() => {
          showForgot.value = false;
          toast.error("Email does not exist in system", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
        });
    };

    return {
      credentials,
      credentialsErrors,
      submit,
      isEmail,
      validateForm,
      show,
      forgotEmail,
      showForgot,
      showLoading,
      showPasswordElement,
      showPassword,
      sendEmails,
    };
  },
};
</script>
<style scoped>
.fa-eye {
  position: absolute;
  top: 40px;
  right: 12px;
  cursor: pointer;
}
</style>
