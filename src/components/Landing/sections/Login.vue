<template>
  <!-- Login Part -->
  <div
    class="fixed  top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div
      class="relative pointer-events-none modal-dialog modal-dialog-centered"
    >
      <div
        class="relative flex flex-col w-full   text-current border-none rounded-md   outline-none pointer-events-auto modal-content md:w-9/12 mdlg:w-9/12 lg:w-10/12 sm:w-full bg-clip-padding"
      >
        <div class="relative flex justify-center p-2 modal-body">
          <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
              class="absolute inset-0 bg-gradient-to-r from-blue-300 bg-main-400   transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl rounded-3xl"
            ></div>

            <div
              class="relative  bg-white   sm:rounded-3xl sm:p-10 rounded-3xl p-4"
            >
              <div class="flex justify-end">
                <button
                  style="
    margin-right: -26px;
    margin-top: -30px;
"
                  type="button"
                  class="text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded   bg-main-400 hover:text-main-400 hover:border hover:border-main-400  hover: "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="fa fa-close fa-2x"></i>
                </button>
              </div>

              <div class="max-w-md mx-auto">
                <div>
                  <div class="flex justify-center mb-6 form-group">
                    <img
                      src="../../../assets/image.png"
                      loading="lazy"
                      class="w-40"
                      alt="HPEL logo"
                    />
                  </div>
                </div>
                <div class="divide-y divide-gray-200">
                  <div
                    class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                  >
                    <form @submit.prevent="submit">
                      <div class="flex -mx-3">
                        <div class="w-full px-3 mb-1">
                          <label for="" class="px-1 text-base font-thin"
                            >Email</label
                          >
                          <div class="flex mt-1">
                            <div
                              class="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none"
                            >
                              <i
                                class="text-lg text-main-400 fa fa-mail-bulk"
                              ></i>
                            </div>
                            <input
                              v-model="credentials.email"
                              required
                              name="email"
                              type="email"
                              class="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-500"
                              placeholder="abebe@example.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="flex -mx-3">
                        <div class="w-full px-3 mb-1">
                          <label for="" class="px-1 text-base font-semibold"
                            >Password</label
                          >
                          <div class="flex mt-1">
                            <div
                              @click="showVisibility()"
                              class="z-10 flex items-center justify-center w-10 pl-1 text-center cursor-pointer"
                            >
                              <i class="text-lg text-main-400 fa fa-lock"></i>
                            </div>
                            <input
                              v-model="credentials.password"
                              type="password"
                              id="password"
                              name="password"
                              autocomplete="current-password"
                              required
                              placeholder="**********"
                              @type="show ? 'password' : 'text'"
                              class="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-500"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="relative">
                        <div class="vld-parent ">
                          <loading
                            class="rounded-md"
                            :active="isLoading"
                            :is-full-page="false"
                            :color="'#2F639D'"
                            :opacity="1"
                          ></loading>
                          <button
                            class="inline-block w-full mt-4 mb-4 ml-auto font-semibold text-center text-white transition duration-200 rounded-lg shadow-sm bg-main-400 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 hover:text-main-400 hover:bg-white text-md hover: "
                          >
                            Login
                          </button>
                        </div>
                      </div>
                      <a
                        href="#!"
                        class="
                  text-main-400
                  hover:text-blue-700
                  focus:text-blue-700
                  transition
                  duration-200
                  ease-in-out
                  
                "
                        data-bs-toggle="modal"
                        data-bs-target="#forgotPassword"
                        >Forgot password?</a
                      >
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--End Of Login Part -->
  <!-- Forgot password part -->
  <div
    class="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade"
    id="forgotPassword"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="forgotPasswordLabel"
    aria-hidden="true"
  >
    <div class="relative pointer-events-none modal-dialog modal-md">
      <div
        class="relative flex flex-col w-8/12 text-current bg-white border-none rounded-md   outline-none pointer-events-auto modal-content md:w-9/12 mdlg:w-9/12 lg:w-10/12 sm:w-full bg-clip-padding"
      >
        <div
          class="flex items-center justify-center flex-shrink-0 p-4 border-b modal-header border-grey-100 rounded-t-md"
        >
          <button
            type="button"
            class="px-6 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded   bg-main-400 hover:border-main-400 hover:text-main-400 active:bg-purple-800 active: "
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa fa-close fa-2x"></i>
          </button>
        </div>
        <div class="vld-parent">
          <loading
            :active="isLoadingReset"
            :is-full-page="false"
            :color="'#2F639D'"
            :opacity="0.7"
          ></loading>
          <div class="relative p-2 modal-body">
            <div class="flex justify-center">
              <h2 class="text-xl text-main-400">Please provide your email</h2>
            </div>
            <div class="flex justify-center">
              <input
                type="email"
                class="form-control block w-full mt-4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                v-model="forgotEmail"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="flex justify-center">
              <button
                type="button"
                class="px-6 mt-4 text-xs font-medium leading-tight text-white uppercase transition duration-150 ease-in-out rounded   bg-main-400 hover:bg-white hover:text-primary-700"
                @click="resetPassword()"
              >
                <i class="fa fa-refresh"></i>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End of forgot password -->
</template>
<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  components: { Loading },
  emits: ["setShowLogin", "setShowSignup"],
  setup() {
    const store = useStore();
    const router = useRouter();
    const toast = useToast();
    let show = ref(false);
    let isLoading = ref(false);
    let isLoadingReset = ref(false);
    let forgotEmail = ref("");
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
      isLoading.value = true;
      let email = {
        emailAddress: credentials.value.email.toLowerCase(),
        password: credentials.value.password,
      };
      store
        .dispatch("user/login", email)
        .then((res) => {
          isLoading.value = false;
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
                document
                  .querySelector("#staticBackdrop")
                  .classList.remove("show");
                document.querySelector("body").classList.remove("modal-open");
                const mdbackdrop = document.querySelector(".modal-backdrop");
                if (mdbackdrop) {
                  mdbackdrop.classList.remove("modal-backdrop", "show");
                }

                router.push({ path: "/menu" });
              } else {
                toast.success("Logged In Successfully", {
                  timeout: 5000,
                  position: "bottom-center",
                  pauseOnFocusLoss: true,
                  pauseOnHover: true,
                  icon: true,
                });
                document
                  .querySelector("#staticBackdrop")
                  .classList.remove("show");
                document.querySelector("body").classList.remove("modal-open");
                const mdbackdrop = document.querySelector(".modal-backdrop");
                if (mdbackdrop) {
                  mdbackdrop.classList.remove("modal-backdrop", "show");
                }
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
        })
        .catch(() => {
          show.value = false;
          toast.error("Username or password incorrect", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
          credentials.value.password = "";
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

    const resetPassword = () => {
      let emailToBeSent = {
        email: forgotEmail.value,
      };
      isLoadingReset.value = true;
      store
        .dispatch("profile/userForgotPassowrd", emailToBeSent)
        .then((res) => {
          if (res.data.status === "Success") {
            toast.success("Sucess, New password has been sent to the email", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            isLoadingReset.value = false;
          } else {
            toast.error("Email does not exist in system", {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            isLoadingReset.value = false;
          }
        })
        .catch(() => {
          toast.error("System error,please try again later", {
            timeout: 5000,
            position: "bottom-center",
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            icon: true,
          });
          isLoadingReset.value = false;
        });
    };

    onMounted(() => {});

    return {
      credentials,
      credentialsErrors,
      resetPassword,
      submit,
      isEmail,
      showVisibility,
      validateForm,
      forgotEmail,
      isLoading,
      isLoadingReset,
      show,
    };
  },
};
</script>
<style lang="postcss" scoped>
.otp {
  display: inline-block;
  width: 43px;
  height: 43px;
  margin: 5px;
  text-align: center;
}
</style>
