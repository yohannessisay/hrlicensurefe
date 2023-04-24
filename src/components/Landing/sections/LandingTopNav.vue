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
      <h3 class="ml-4 text-2xl text-main-400">eHPEL - License</h3>
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
        <i class="fa fa-address-card"></i> Sign Up
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
                class="form-label mb-2 text-gray-700"
                >Email address</label
              >
              <input
                type="email"
                v-model="credentials.email"
                class="
                  form-control
                  block
                  w-full
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
            <div class="form-group mb-6 mt-4">
              <label
                for="exampleInputEmail2"
                class="form-label mb-2 text-gray-700"
                >Password</label
              >
              <div class="relative text-gray-600 focus-within:text-gray-400">
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
                <span
                  @click="showVisibility()"
                  class="
                    absolute
                    inset-y-0
                    right-0
                    flex
                    items-center
                    pr-2
                    cursor-pointer
                  "
                >
                  <i class="fa fa-eye" style="font-size: 26px"></i>
                </span>
              </div>
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
                background-color="#ffffff00"
                style="margin-left: 110px; margin-top: -3px"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- Registration Part -->
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
    <div class="modal-dialog relative pointer-events-none w-full">
      <div
        class="
          modal-content
          border-none
          shadow-lg
          relative
          flex flex-col
          w-11/12
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
          class="modal-header flex flex-shrink-0 justify-end p-2 rounded-t-md"
        >
          <button
            type="button"
            class="
              text-white
              bg-main-400
              hover:text-main-400 hover:border
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              hover:border-main-400
              shadow-lg
              hover:bg-purple-700 hover:shadow-lg
              transition
              duration-150
              ease-in-out
            "
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa fa-close fa-2x"></i>
          </button>
        </div>
        <div class="modal-body relative p-2 flex justify-center">
          <div class="form-group mb-4 flex justify-center"></div>
          <form class="flex flex-col justify-center items-center w-full">
            <input type="hidden" name="remember" value="true" />
            <div class="flex flex-col mb-4 w-full">
              <label class="sm:ml-0 lg:ml-4 md:ml-4 text-main-400 font-bold"
                >Email</label
              >
              <input
                v-model="registerCredentials.emailAddress"
                id="email-address"
                name="email"
                class="
                  w-full
                  rounded-md
                  sm:w-10/12 sm:ml-4
                  border
                  text-main-400
                "
                type="email"
                autocomplete="email"
                required
              />
              <span style="color: red">{{
                registerCredentialsErrors.email
              }}</span>
            </div>
            <div class="flex flex-col mb-4 w-full sm:ml-0 lg:ml-8 md:ml-8">
              <label for="phone" class="text-main-400 font-bold"
                >Phone Number(+251)</label
              >
              <input
                name="phone"
                placeholder="912345678"
                id="phone"
                type="tel"
                class="w-full rounded-md sm:w-10/12 border ml-4 text-main-400"
                v-model="registerCredentials.phoneNumber"
                required
                @keyup="checkPhoneValidity()"
              />
              <div
                v-if="showOtp"
                class="
                  bg-main-400
                  cursor-pointer
                  p-1
                  rounded-md
                  w-full
                  mt-1
                  sm:w-10/12
                  border
                  flex
                  justify-center
                "
                @click="sendSmsOtp()"
              >
                <i class="text-white fa fa-paper-plane mt-2"></i
                ><span class="ml-4 text-white font-bold">Send OTP</span>
              </div>
              <span class="text-xs">(Area code for phone is not needed)</span>
              <div
                v-if="showOtp"
                id="phoneError"
                class="text-red-300 mt-1 text-xs"
                style="display: none"
              ></div>
              <div
                v-if="showOtp"
                id="validPhone"
                class="text-green-200 mt-1 text-xs"
                style="display: none"
              ></div>
              <!-- <div v-if="!showOtp" class="text-green-200 mt-1 text-xs">
                Phone is verified
              </div> -->
              <span
                v-if="enableVerification"
                class="text-sm text-main-400 mt-2"
              >
                Verify Phone Number</span
              >
              <form v-if="enableVerification" action="" class="w-full">
                <input
                  class="otp"
                  id="opt1"
                  type="text"
                  maxlength="1"
                  v-model="otpInput.one"
                />
                <input
                  class="otp"
                  id="opt2"
                  type="text"
                  maxlength="1"
                  v-model="otpInput.two"
                />
                <input
                  class="otp"
                  id="opt3"
                  type="text"
                  maxlength="1"
                  v-model="otpInput.three"
                />
                <input
                  class="otp"
                  id="opt4"
                  type="text"
                  maxlength="1"
                  v-model="otpInput.four"
                />
                <input
                  id="opt5"
                  class="otp"
                  type="text"
                  maxlength="1"
                  v-model="otpInput.five"
                />
                <input
                  class="otp"
                  id="opt6"
                  type="text"
                  maxlength="1"
                  :onkeyup="tabChange()"
                  v-model="otpInput.six"
                />

                <span
                  :class="
                    enableVerification
                      ? 'bg-main-400 cursor-pointer p-1 rounded-md'
                      : 'bg-grey-200 pointer-events-none p-1 rounded-md'
                  "
                  @click="enableVerification ? verifySmsOtp() : ''"
                >
                  <i class="text-white fa fa-check mt-2"></i
                ></span>
              </form>

              <span class="ml-4 text-sm" style="color: red">{{
                registerCredentialsErrors.phoneNumber
                  ? registerCredentialsErrors.phoneNumber
                  : ""
              }}</span>
            </div>
            <div class="border-main-400 border rounded-md p-1 mb-4">
              <span v-if="showOtp" class="text-xs text-main-400"
                >Please verify your phone first</span
              >
              <div class="flex flex-col w-full">
                <label class="sm:ml-0 lg:ml-4 md:ml-4 text-main-400 font-bold"
                  >Password</label
                >
                <input
                  v-model="registerCredentials.password"
                  type="password"
                  id="registerpassword"
                  name="password"
                  autocomplete="current-password"
                  :disabled="isVerified == false"
                  :class="
                    !isVerified
                      ? 'w-full rounded-md sm:w-10/12 sm:ml-4 border bg-grey-200 text-main-400'
                      : 'w-full rounded-md sm:w-10/12 sm:ml-4 border text-main-400'
                  "
                  required
                  v-on:keyup="
                    showPasswordStrength(registerCredentials.password)
                  "
                />
                <span class="ml-4 text-sm" style="color: red">{{
                  registerCredentialsErrors.password
                }}</span>
                <div class="ml-4">
                  <password-meter :password="registerCredentials.password" />
                  <div v-if="passwordStrengthDisplay">
                    <ul class="text-sm">
                      Password should be:
                      <div class="ml-12 pl-4">
                        <li>Minimum of eight Characters</li>
                        <li>At least one uppercase Character</li>
                        <li>At least one lowercase Character</li>
                        <li>At least one number</li>
                        <li>At least one special character</li>
                      </div>
                    </ul>
                  </div>
                </div>
                <span class="ml-4" style="color: red">{{
                  registerCredentialsErrors.password
                }}</span>
              </div>

              <div class="flex flex-col mb-4 w-full">
                <label class="sm:ml-0 lg:ml-4 md:ml-4 text-main-400 font-bold"
                  >Re-type Password</label
                >
                <input
                  v-model="registerCredentials.repassword"
                  type="password"
                  id="repassword"
                  name="password"
                  autocomplete="current-password"
                  :disabled="isVerified == false"
                  :class="
                    !isVerified
                      ? 'w-full rounded-md sm:w-10/12 sm:ml-4 border bg-grey-200 text-main-400'
                      : 'w-full rounded-md sm:w-10/12 sm:ml-4 border text-main-400'
                  "
                  required
                />
                <span class="ml-4 text-sm" style="color: red">{{
                  registerCredentialsErrors.repassword
                }}</span>
                <div class="ml-4 mt-2">
                  <password-meter :password="registerCredentials.repassword" />
                </div>
              </div>
            </div>
            <div class="flex justify-center pr-4 pl-4 w-full">
              <button
                type="button"
                :class="
                  isVerified
                    ? 'transition duration-200 bg-main-400 text-white hover:text-main-400 hover:bg-white w-full mb-4 h-12 rounded-md text-md font-semibold text-center shadow-xl'
                    : 'pointer-events-none transition duration-200 bg-grey-200 text-white hover:text-main-400 hover:bg-white w-full mb-4 h-12 rounded-md text-md font-semibold text-center shadow-xl'
                "
                @click="registerSubmit"
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
                  background-color="#ffffff00"
                  style="margin-left: 110px; margin-top: -3px"
                />
              </button>
            </div>

            <a
              class="text-base text-main-400 hover:underline cursor-pointer"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              >Already have an account? Log in
            </a>
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
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import PasswordMeter from "vue-simple-password-meter";
export default {
  components: { RenderIllustration, VueElementLoading, PasswordMeter },
  emits: ["setShowLogin", "setShowSignup"],
  setup() {
    const store = useStore();
    const router = useRouter();
    const toast = useToast();
    let show = ref(false);
    let isVerified = ref(true);
    let enableVerification = ref(false);
    let showLoading = ref(false);
    let showOtp = ref(false);
    let showVerificationButton = ref(true);
    let otpInput = ref({
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
    });
    let phoneInput;
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

    const tabChange = () => {
      if (
        otpInput.value &&
        otpInput.value.six != "" &&
        otpInput.value.five != "" &&
        otpInput.value.four != "" &&
        otpInput.value.three != "" &&
        otpInput.value.two != "" &&
        otpInput.value.one != ""
      ) {
        enableVerification.value = true;
      }
    };

    const verifySmsOtp = () => {
      let otpData = {
        otp:
          otpInput.value.one +
          otpInput.value.two +
          otpInput.value.three +
          otpInput.value.four +
          otpInput.value.five +
          otpInput.value.six,
        phone: registerCredentials.value.phoneNumber,
        hash: localStorage.getItem("secretOtp"),
      };

      if (otpData && otpData.phone.length == 9) {
        store
          .dispatch("sms/verifySmsOtp", otpData)
          .then((res) => {
            if (res && res.status == "Success" && res.data == true) {
              showOtp.value = false;
              isVerified.value = true;
              localStorage.removeItem("secretOtp");
            } else {
              toast.error("Verification failed, please try again", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
            }
          })
          .catch((err) => console.log(err));
      } else {
        toast.error("Phone number digit must be 9", {
          timeout: 5000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true,
        });
      }
    };

    const sendSmsOtp = () => {
      let phone = registerCredentials.value
        ? registerCredentials.value.phoneNumber
        : "";

      if (phone.length == 9) {
        store
          .dispatch("sms/sendSmsOtp", { phone: phone })
          .then((res) => {
            if (res && res.status == "Success") {
              enableVerification.value = true;
              localStorage.setItem(
                "secretOtp",
                JSON.stringify(res.data.fullHash)
              );
            } else {
              toast.error("Service error, please try again", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
            }
          })
          .catch((err) => console.log(err));
      } else {
        toast.error("Phone number digit must be 9", {
          timeout: 5000,
          position: "bottom-center",
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          icon: true,
        });
      }
    };

    const submit = () => {
      show.value = true;
      let email = {
        emailAddress: credentials.value.email.toLowerCase(),
        password: credentials.value.password,
      };
      store
        .dispatch("user/login", email)
        .then((res) => {
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

    let registerMessage = ref({
      showFlash: false,
      showErrorFlash: false,
      showLoading: false,
      errorMessage: "",
    });

    let phoneError = ref(false);
    const registerCredentials = ref({
      emailAddress: "",
      phoneNumber: "",
      password: "",
      repassword: "",
    });
    const password = ref("");
    const passwordStrengthDisplay = ref(false);
    const registerCredentialsErrors = ref({});

    const showPasswordStrength = (password) => {
      if (password != "") {
        passwordStrengthDisplay.value = true;
      } else {
        passwordStrengthDisplay.value = false;
      }
    };
    const registerSubmit = () => {
      show.value = true;
      let signup = {
        emailAddress: registerCredentials.value.emailAddress.toLowerCase(),
        phoneNumber: registerCredentials.value.phoneNumber,
        password: registerCredentials.value.password,
      };

      registerCredentialsErrors.value = {};
      if (!validateRegisterForm(registerCredentials.value)) {
        registerMessage.value.showLoading = true;
        registerMessage.value.showFlash = false;
        registerMessage.value.showErrorFlash = false;
        if (registerCredentials.value.phoneNumber.length != 9) {
          phoneError.value = true;
          registerMessage.value.showLoading = false;
        }
        let smsData = {
          recipients: [
            registerCredentials.value.phoneNumber
              ? "251" + registerCredentials.value.phoneNumber
              : "",
          ],
          message:
            "Dear applicant you have successfully registered on eHPL for your license/s, please complete the process of creating your account by loging in to your account using the credentials you entered previously and fill remaining data, Thank you for using eHPL.",
        };

        store.dispatch("user/signUp", signup).then((res) => {
          if (res.data.status == "Error") {
            show.value = false;
            toast.error(
              "The email is already registered, please change email",
              {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              }
            );
          } else if (res.data.status == "Success") {
            show.value = false;
            store.dispatch("sms/sendSms", smsData).then(() => {
              document.querySelector("#register").classList.remove("show");
              document.querySelector("body").classList.remove("modal-open");
              const mdbackdrop = document.querySelector(".modal-backdrop");
              if (mdbackdrop) {
                mdbackdrop.classList.remove("modal-backdrop", "show");
              }
              toast.success("Registered Successfully", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
            });
          } else {
            show.value = false;
            toast.error(
              "The email is already registered, please change email",
              {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              }
            );
          }
        });
      }
    };

    const validateRegisterForm = (formData) => {
      if (!formData.emailAddress) {
        registerCredentialsErrors.value.emailAddress = "Email is required";
      }

      if (!formData.phoneNumber)
        registerCredentialsErrors.value.phoneNumber =
          "Phone number is required";
      if (!formData.password)
        registerCredentialsErrors.value.phoneNumber = "Password is  required";
      if (!formData.repassword)
        registerCredentialsErrors.value.repassword = "Re-enter password";
      if (formData.emailAddress && !isEmail(formData.emailAddress)) {
        registerCredentialsErrors.value.emailAddress = "Invalid Email";
      }
      if (formData.password !== formData.repassword) {
        registerCredentialsErrors.value.repassword = "Passwords don't match";
      }

      if (Object.keys(registerCredentialsErrors.value).length == 0)
        return false;
      return true;
    };
    const checkPhoneValidity = () => {
      const phoneNumber = phoneInput.getNumber();

      let error = document.getElementById("phoneError");
      let info = document.getElementById("validPhone");
      info.style.display = "none";
      error.style.display = "none";

      if (phoneInput.isValidNumber()) {
        info.style.display = "";
        info.innerHTML = `Phone number : <strong>${phoneNumber} is valid</strong>`;
      } else {
        error.style.display = "";
        error.innerHTML = `Invalid phone number.`;
      }
    };
    onMounted(() => {
      const phoneInputField = document.getElementById("phone");
      phoneInput = window.intlTelInput(phoneInputField, {
        preferredCountries: ["et", "ke", "er", "ug"],
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });
    });

    return {
      credentials,
      credentialsErrors,
      submit,
      isEmail,
      tabChange,
      showVisibility,
      validateForm,
      sendSmsOtp,
      message,
      show,
      otpInput,
      enableVerification,
      showLoading,
      checkPhoneValidity,
      registerCredentials,
      registerCredentialsErrors,
      registerSubmit,
      validateRegisterForm,
      registerMessage,
      password,
      showOtp,
      showVerificationButton,
      phoneError,
      isVerified,
      verifySmsOtp,
      showPasswordStrength,
      passwordStrengthDisplay,
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
