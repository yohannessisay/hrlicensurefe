<template>
  <div class="container" style="margin-top: 10px">
    <h2 class="text-main-400 font-bold text-display border-b-4 mb-4">Summary</h2>
    <div
      class="grid md:grid-cols-6 mdlg:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 sm:grid-rows-1"
    >
      <div class="rounded-md mr-8 sm:mb-4">
        <article class="overflow-hidden border rounded-md p-4">
          <h2 class="text-main-400 font-bold text-base mb-4">Profile Picture</h2>

          <picture>
            <img :src="profilePic" />
          </picture>
        </article>
      </div>
      <div class="bg-white border rounded-md p-4 mb-8 col-span-5">
        <article class="overflow-hidden p-4">
          <div class="flex justify-start flex-col">
            <div class="flex justify-start border-b-4 text-main-400 mt-4 mb-4">
              <h2 class="text-main-400 font-bold text-lg">General Personal Info</h2>
            </div>
          </div>

          <div class="grid grid-rows-1">
            <div class="grid grid-cols-2">
              <label class="text-main-400 font-semibold"> Full Name</label>
              <h5 class="text-grey-800">
                {{
                  capitalized(personalInfo.name) +
                  " " +
                  capitalized(personalInfo.fatherName) +
                  " " +
                  capitalized(personalInfo.grandFatherName)
                }}
              </h5>
            </div>
            <div class="grid grid-cols-2">
              <label class="text-main-400 font-semibold">Full Alternative Name</label>
              <h5 class="text-grey-800">
                {{
                  personalInfo.alternativeName
                    ? personalInfo.alternativeName
                    : "----" + " " + personalInfo.alternativeFatherName
                    ? personalInfo.alternativeFatherName
                    : "----" + " " + personalInfo.alternativeGrandFatherName
                    ? personalInfo.alternativeGrandFatherName
                    : "----"
                }}
              </h5>
            </div>
            <div class="grid grid-cols-2">
              <label class="text-main-400 font-semibold">Gender</label>
              <h5 class="text-grey-800">{{ personalInfo.gender }}</h5>
            </div>
            <div class="grid grid-cols-2">
              <label class="text-main-400 font-semibold">Nationality</label>
              <h5 class="text-grey-800">{{ nationality }}</h5>
            </div>
            <div class="grid grid-cols-2">
              <label class="text-main-400 font-semibold"> Marital Status</label>
              <h5 class="text-grey-800">{{ maritalStatus }}</h5>
            </div>
          </div>
          <div class="flex justify-start border-b-4 text-main-400 mt-4 mb-4">
            <h2 class="text-main-400 font-bold text-lg">Address</h2>
          </div>

          <div class="grid grid-cols-2">
            <label class="text-main-400 font-semibold">PO Box</label>
            <h5 class="text-grey-800">
              {{ personalInfo.poBox ? personalInfo.poBox : "-----" }}
            </h5>
          </div>

          <div class="flex justify-start border-b-4 text-main-400 mt-4 mb-4">
            <h2 class="text-main-400 font-bold text-lg">Contact Info</h2>
          </div>
          <div class="grid grid-rows-1">
            <div class="grid grid-cols-2">
              <label class="text-main-400 font-semibold"> Email Address</label>
              <h5 class="text-grey-800">{{ user.emailAddress }}</h5>
            </div>
            <div
              class="grid grid-cols-2"
              v-if="personalInfo.employeeId != null || personalInfo.employeeId != ''"
            >
              <label class="text-main-400 font-semibold">HRA Employee Id</label>
              <h5 class="text-grey-800">
                {{ personalInfo.employeeId ? personalInfo.employeeId : "----" }}
              </h5>
            </div>
            <div
              class="grid grid-cols-2"
              v-if="personalInfo.fileNumber != null || personalInfo.fileNumber != ''"
            >
              <label class="text-main-400 font-semibold">HRA File Number</label>
              <h5 class="text-grey-800">
                {{ personalInfo.fileNumber ? personalInfo.fileNumber : "----" }}
              </h5>
            </div>
          </div>
        </article>
        <div class="vld-parent">
          <loading
            :active="isLoading"
            :is-full-page="false"
            :color="'#2F639D'"
            :opacity="1"
          ></loading>
          <article class="overflow-hidden p-4">
            <div class="flex justify-center mb-medium">
              <div>
                <button
                  class="inline-block px-6 py-2.5 bg-main-400 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover: hover:text-main-400 transition duration-150 ease-in-out"
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
      <!-- <div class="bg-white rounded-md   p-4 m-2">
      
      </div> -->
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from "vue";
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
  props: ["activeState"],
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
        dateOfBirth: personalInfo.dateOfBirth != "" ? personalInfo.dateOfBirth : null,
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
      personalInfo.photo != undefined ||
      personalInfo.photo != null ||
      personalInfo.photo != ""
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
      word = word.replace(/\s/g, "");
      const capitalizedFirst = word[0].toUpperCase();
      const rest = word.slice(1).toLowerCase();

      return capitalizedFirst + rest;
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
