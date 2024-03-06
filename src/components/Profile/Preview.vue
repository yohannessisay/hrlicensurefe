<template>
  <div
    :class="
      darkMode
        ? 'container text-white  bg-secondaryDark m-2 rounded-md p-2'
        : ' text-main-400  container m-2 rounded-md p-2'
    "
  >
    <h2 class="font-bold text-display border-b-4 mb-4">Summary</h2>
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-2">
      <div class="rounded-md ml-4 sm:ml-0 mb-4">
        <article
          :class="
            darkMode
              ? 'overflow-hidden border rounded-md p-4 bg-secondaryDark shadow-md'
              : 'overflow-hidden border rounded-md p-4  shadow-md'
          "
        >
          <h2 class="font-bold text-xl mb-4">Profile Picture</h2>

          <picture>
            <img :src="profilePic" />
          </picture>
        </article>
      </div>
      <div class="border rounded-md p-4 mb-8 col-span-3">
        <article class="overflow-hidden sm:p-4">
          <div class="flex justify-start flex-col">
            <div class="flex justify-start border-b-4 mt-4 mb-4">
              <h2 class="font-bold text-xl">General Personal Info</h2>
            </div>
          </div>

          <div class="grid grid-rows-1">
            <div class="grid grid-cols-2">
              <label class="text-xl font-semibold"> Full Name</label>
              <h5 class="text-lg">
                {{
                  capitalized(personalInfo ? personalInfo.name : "") +
                  " " +
                  capitalized(personalInfo ? personalInfo.fatherName : "") +
                  " " +
                  capitalized(personalInfo ? personalInfo.grandFatherName : "")
                }}
              </h5>
            </div>
            <div class="grid grid-cols-2">
              <label class="text-xl font-semibold">Full Alternative Name</label>
              <h5 class="text-lg">
                {{
                  personalInfo
                    ? `${personalInfo.alternativeName} ${personalInfo.alternativeFatherName} ${personalInfo.alternativeGrandFatherName}`
                    : ""
                }}
              </h5>
            </div>
            <div class="grid grid-cols-2">
              <label class="text-xl font-semibold">Gender</label>
              <h5 class="text-lg">
                {{ personalInfo ? personalInfo.gender : "" }}
              </h5>
            </div>
            <div class="grid grid-cols-2">
              <label class="text-xl font-semibold">Nationality</label>
              <h5 class="text-lg">
                {{ nationality ? nationality : "" }}
              </h5>
            </div>
            <div class="grid grid-cols-2">
              <label class="text-xl font-semibold"> Marital Status</label>
              <h5 class="text-lg">
                {{ maritalStatus ? maritalStatus : "" }}
              </h5>
            </div>
          </div>
          <div class="flex justify-start border-b-4 mt-4 mb-4">
            <h2 class="text-xl font-bold text-lg">Address</h2>
          </div>

          <div class="grid grid-cols-2">
            <label class="text-xl font-semibold">PO Box</label>
            <h5 class="text-lg">
              {{ personalInfo ? personalInfo.poBox : "-----" }}
            </h5>
          </div>

          <div class="flex justify-start border-b-4 mt-4 mb-4">
            <h2 class="font-bold text-xl">Contact Info</h2>
          </div>
          <div class="grid grid-rows-1">
            <div class="grid grid-cols-2 break-all">
              <label class="text-xl font-semibold"> Email Address</label>
              <h5 class="text-lg">{{ user ? user.emailAddress : "" }}</h5>
            </div>
            <div
              class="grid grid-cols-2"
              v-if="
                personalInfo &&
                (personalInfo.employeeId != null ||
                  personalInfo.employeeId != '')
              "
            >
              <label class="text-xl mb-2 font-semibold">HRA Employee Id</label>
              <h5 class="text-lg">
                {{ personalInfo ? personalInfo.employeeId : "----" }}
              </h5>
            </div>
            <div
              class="grid grid-cols-2"
              v-if="
                personalInfo &&
                (personalInfo.fileNumber != null ||
                  personalInfo.fileNumber != '')
              "
            >
              <label class="text-xl font-semibold">HRA File Number</label>
              <h5 class="text-lg">
                {{ personalInfo ? personalInfo.fileNumber : "----" }}
              </h5>
            </div>
          </div>
        </article>
        <div class="vld-parent">
          <loading
            :active="isLoading"
            :is-full-page="false"
            :color="'#2F639D'"
            :opacity="0.6"
            class="rounded-md"
          ></loading>
          <article class="overflow-hidden p-4">
            <div class="flex justify-center mb-medium">
              <div>
                <button
                  class="inline-block px-6 mr-4 py-2.5 text-main-400 font-medium text-xs leading-tight uppercase hover:text-white hover:bg-main-400 transition duration-150 ease-in-out"
                  variant="outline"
                  type="button"
                  @click="prevStep"
                >
                  Back
                </button>
              </div>
              <div v-if="!message.showLoading">
                <div
                  class="flex justify-center justify-items-center mt-8 mb-12"
                  v-if="message.showLoading"
                ></div>
                <button
                  v-on:click="submit()"
                  variant="outline"
                  type="button"
                  class="inline-block px-6 py-2.5 bg-main-400 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover: hover:text-main-400 transition duration-150 ease-in-out"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import moment from "moment";
import { useToast } from "vue-toastification";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
export default {
  components: { Loading },
  computed: {
    moment: () => moment,
  },
  emits: ["nextStep", "changeActiveState"],
  props: ["activeState", "isDarkMode"],
  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();
    let profilePic = null;
    const toast = useToast();
    let message = ref({
      showFlash: false,
      showErrorFlash: false,
      showLoading: false,
      showLoading2: false,
    });
    let user = ref({
      id: "",
      emailAddress: "",
      phoneNumber: "",
    });
    const darkMode = computed(() => props.isDarkMode);
    let personalInfo = {
      name: null,
      grandFatherName: null,
      fatherName: null,
      alternativeName: null,
      alternativeFatherName: null,
      alternativeGrandFatherName: null,
      nationality: null,
      dateOfBirth: null,
      gender: null,
      maritalStatusId: null,
      maritalStatus: null,
      poBox: null,
      employeeId: null,
      fileNumber: null,
    };
    let address = {
      poBox: null,
    };
    let contact = {
      email: null,
      poBox: null,
    };
    let success = ref(false);
    let isLoading = ref(false);
    let response = {};
    let showFlash = ref(false);
    let nationality = ref("");
    let maritalStatus = ref("");
    let photoFormData = ref("");
    const addProfile = () => {
      message.value.showLoading = true;
      message.value.showFlash = false;
      message.value.showErrorFlash = false;
      let formData = new FormData();
      let userId = +localStorage.getItem("userId");
      formData.append("document", photoFormData);

      let data = {
        name: capitalized(personalInfo.name),
        fatherName: capitalized(personalInfo.fatherName),
        grandFatherName: capitalized(personalInfo.grandFatherName),
        alternativeName: personalInfo.alternativeName
          ? personalInfo.alternativeName.replace(/\s/g, "")
          : "",
        alternativeFatherName: personalInfo.alternativeFatherName
          ? personalInfo.alternativeFatherName.replace(/\s/g, "")
          : "",
        alternativeGrandFatherName: personalInfo.alternativeGrandFatherName
          ? personalInfo.alternativeGrandFatherName.replace(/\s/g, "")
          : "",
        gender: personalInfo.gender,
        photo: "photo",
        dateOfBirth:
          personalInfo.dateOfBirth != "" ? personalInfo.dateOfBirth : null,
        nationalityId: personalInfo.nationalityId,
        maritalStatusId: parseInt(personalInfo.maritalStatusId),
        poBox: personalInfo.poBox,
        userId: +localStorage.getItem("userId"),
        employeeId: personalInfo.employeeId ? personalInfo.employeeId : null,
        fileNumber: personalInfo.fileNumber ? personalInfo.fileNumber : null,
      };
      isLoading.value = true;
      store.dispatch("profile/addProfile", data).then(() => {
        formData.append("document", photoFormData);
        let payload = { document: formData, id: userId };
        store

          .dispatch("profile/uploadProfilePicture", payload)
          .then((res) => {
            if (res.status == 200) {
              toast.success("Successfully updated profile information", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
              isLoading.value = false;
              router.push("/menu");
            } else {
              toast.error("Please try again", {
                timeout: 5000,
                position: "bottom-center",
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                icon: true,
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
    };
    const fetchUser = async () => {
      message.value.showLoading2 = true;
      store
        .dispatch("profile/getUserById", localStorage.getItem("userId"))
        .then((res) => {
          user.value = res.data.data;
          message.value.showLoading2 = false;
        });
    };
    const submit = () => {
      addProfile();
    };
    const prevStep = () => {
      emit("changeActiveStatePrevious");
      emit("nextStep", "remove");
    };
    personalInfo = store.getters["profile/getPersonalInfo"];
    if (
      personalInfo &&
      personalInfo.photo &&
      (personalInfo.photo != undefined ||
        personalInfo.photo != null ||
        personalInfo.photo != "")
    ) {
      profilePic = personalInfo.photo;
    }
    address = store.getters["profile/getAddress"];
    contact = store.getters["profile/getContact"];
    nationality = store.getters["profile/getNationality"];
    maritalStatus = store.getters["profile/getMaritalStatus"];
    photoFormData = store.getters["profile/getPhoto"];
    onMounted(() => {
      fetchUser();
      nextTick(function () {
        window.setInterval(() => {
          showFlash.value = false;
        }, 10000);
      });
    });
    const capitalized = (word) => {
      if (word !== "") {
        word = word.replace(/\s/g, "");
        const capitalizedFirst = word[0].toUpperCase();
        const rest = word.slice(1).toLowerCase();

        return capitalizedFirst + rest;
      } else {
        return "";
      }
    };
    return {
      profilePic,
      personalInfo,
      address,
      contact,
      isLoading,
      success,
      nationality,
      maritalStatus,
      response,
      message,
      submit,
      user,
      fetchUser,
      prevStep,
      capitalized,
      darkMode,
    };
  },
};
</script>
<style>
.text-danger > label,
.text-danger > h5 {
  color: red;
}
</style>
