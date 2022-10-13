<template>
  <div class="container my-12 mx-auto px-4 md:px-12 w-full">
    <h2 class="text-main-400 font-bold text-display">Summary</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- Column -->
      <div class="my-1 px-1 lg:px-4 w-full">
        <!-- Article -->
        <article class="overflow-hidden rounded-lg shadow-lg p-4 ">
          <div class="flex justify-start flex-col mb-large  ">
            <div class="flex justify-start  ">
              <h2 class="text-main-400 font-bold text-lg">Profile Picture</h2>
            </div>
          </div>

          <picture>
            <img :src="profilePic" />
          </picture>
        </article>
        <!-- END Article -->
      </div>
      <!-- END Column -->
    </div>
  </div>

  <div class="container mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- Column -->
      <div class="my-1 px-1 lg:px-4 w-full">
        <!-- Article -->
        <article class="overflow-hidden rounded-lg shadow-lg p-4">
          <div class="flex justify-start flex-col">
            <div class="flex justify-start">
              <h2 class="text-main-400 font-bold text-lg">
                General Personal Info
              </h2>
            </div>
          </div>

          <div class="grid grid-rows-1 flex-row">
            <div>
              <label class="ml-8 text-main-400 font-semibold"> Full Name</label>
              <h5 class="ml-8">
                {{
                  personalInfo.name +
                  " " +
                  personalInfo.fatherName +
                  " " +
                  personalInfo.grandFatherName
                }}
              </h5>
            </div>
            <div>
              <label class="ml-8 text-main-400 font-semibold"
                >Full Alternative Name</label
              >
              <h5 class="ml-8">
                {{
                  personalInfo.alternativeName +
                  " " +
                  personalInfo.alternativeFatherName +
                  " " +
                  personalInfo.alternativeGrandFatherName
                }}
              </h5>
            </div>
            <div>
              <label class="ml-8 text-main-400 font-semibold"> Gender</label>
              <h5 class="ml-8">{{ personalInfo.gender }}</h5>
            </div>
            <div>
              <label class="ml-8 text-main-400 font-semibold"
                >Nationality</label
              >
              <h5 class="ml-8">{{ nationality }}</h5>
            </div>
            <div>
              <label class="ml-8 text-main-400 font-semibold">
                Marital Status</label
              >
              <h5 class="ml-8">{{ maritalStatus }}</h5>
            </div>
          </div>
          <div class="flex justify-start border-b-4 text-main-400 mt-4 mb-4">
            <h2 class="text-main-400 font-bold text-lg">Address</h2>
          </div>
          <div class="flex flex-row">
            <div>
              <label class="ml-8 text-main-400 font-semibold">PO Box</label>
              <h5 class="ml-8">{{ personalInfo.poBox }}</h5>
            </div>
          </div>
          <div class="flex justify-start border-b-4 text-main-400 mt-4 mb-4">
            <h2 class="text-main-400 font-bold text-lg">Contact Info</h2>
          </div>
          <div class="flex flex-row">
            <div>
              <label class="ml-8 text-main-400 font-semibold">
                Email Address</label
              >
              <h5 class="ml-8">{{ user.emailAddress }}</h5>
            </div>
            <div
              v-if="
                personalInfo.employeeId != null || personalInfo.employeeId != ''
              "
            >
              <label class="ml-8 text-main-400 font-semibold"
                >HRA Employee Id</label
              >
              <h5 class="ml-8">{{ personalInfo.employeeId }}</h5>
            </div>
            <div
              v-if="
                personalInfo.fileNumber != null || personalInfo.fileNumber != ''
              "
            >
              <label class="ml-8 text-main-400 font-semibold"
                >HRA File Number</label
              >
              <h5 class="ml-8">{{ personalInfo.fileNumber }}</h5>
            </div>
          </div>
        </article>
        <!-- END Article -->
      </div>
      <!-- END Column -->
    </div>
  </div>
  <div class="container my-12 mx-auto px-4 md:px-12">
  
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- Column -->
      <div class="my-1 px-1 lg:px-4 w-full">
        <!-- Article -->
        <article class="overflow-hidden rounded-lg shadow-lg p-4">
      
          <div class="mt-12 flex justify-center mb-medium">
        <div>
          <button
            class="
              inline-block
              px-6
              py-2.5
              bg-main-400
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-lg
              hover:bg-white hover:shadow-lg hover:text-main-400
              transition
              duration-150
              ease-in-out
            "
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
      >
        <Spinner />
      </div>
          <button
            v-on:click="submit()"
            variant="outline"
            type="button"
            class="
              inline-block
              px-6
              py-2.5
              bg-main-400
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-lg
              hover:bg-white hover:shadow-lg hover:text-main-400
              transition
              duration-150
              ease-in-out
            "
          >
            Save Profile
          </button>
        </div>
      </div>
        </article>
        <!-- END Article -->
      </div>
      <!-- END Column -->
    </div>
  </div>
  
</template>

<script>
import { ref, onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Title from "@/sharedComponents/TitleWithIllustration";
import FlashMessage from "@/sharedComponents/FlashMessage";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import Spinner from "@/sharedComponents/Spinner";
import moment from "moment";
import { useToast } from "vue-toastification";

export default {
  components: { Title, FlashMessage, ErrorFlashMessage, Spinner },
  computed: {
    moment: () => moment,
  },
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
    let response = {};
    let showFlash = ref(false);
    let nationality = ref("");
    let maritalStatus = ref("");
    let photoFormData = ref("");
    const addProfile = () => {
      message.value.showLoading = true;
      message.value.showFlash = false;
      message.value.showErrorFlash = false;

      store
        .dispatch("profile/addProfile", {
          name: personalInfo.name,
          fatherName: personalInfo.fatherName,
          grandFatherName: personalInfo.grandFatherName,
          alternativeName: personalInfo.alternativeName
            ? personalInfo.alternativeName
            : "",
          alternativeFatherName: personalInfo.alternativeFatherName
            ? personalInfo.alternativeFatherName
            : "",
          alternativeGrandFatherName: personalInfo.alternativeGrandFatherName
            ? personalInfo.alternativeGrandFatherName
            : "",
          gender: personalInfo.gender,
          dateOfBirth:
            personalInfo.dateOfBirth != "" ? personalInfo.dateOfBirth : null,
          nationalityId: personalInfo.nationalityId,
          maritalStatusId: parseInt(personalInfo.maritalStatusId),
          poBox: personalInfo.poBox,
          photo: personalInfo.photo,
          userId: +localStorage.getItem("userId"),
          employeeId: personalInfo.employeeId ? personalInfo.employeeId : null,
          fileNumber: personalInfo.fileNumber ? personalInfo.fileNumber : null,
        })
        .then((response) => {
          if (response.statusText == "Created") {
            let userId = +localStorage.getItem("userId");
            let formData = new FormData();

            formData.append("document", photoFormData);
            let payload = { document: formData, id: userId };
            store
              .dispatch("profile/uploadProfilePicture", payload)
              .then((res) => {
                if (res.status == 200) {
                  message.value.showFlash = !message.value.showFlash;
                  message.value.showLoading = false;

                  toast.success(response.data.message, {
                    timeout: 5000,
                    position: "bottom-center",
                    pauseOnFocusLoss: true,
                    pauseOnHover: true,
                    icon: true,
                  });
                } else {
                  message.value.showErrorFlash = !message.value.showErrorFlash;
                }
              })
              .catch((err) => {});

            router.push({ path: "/menu" });
            window.location.reload();
          } else {
            message.value.showLoading = false;
            message.value.showFlash = false;
            message.value.showErrorFlash = true;
            toast.error(response.data.message, {
              timeout: 5000,
              position: "bottom-center",
              pauseOnFocusLoss: true,
              pauseOnHover: true,
              icon: true,
            });
            setTimeout(() => {
              message.value.showErrorFlash = false;
            }, 3000);
          }
        });
    };
    const fetchUser = async () => {
      message.value.showLoading2 = true;
      store
        .dispatch("profile/getUserById", localStorage.getItem("userId"))
        .then((res) => {
          user.value = res.data.data;
          console.log(user.value);
          message.value.showLoading2 = false;
        });
    };
    const submit = () => {
      addProfile();
    };
    const prevStep = () => {
      emit("changeActiveStatePrevious");
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
    return {
      profilePic,
      personalInfo,
      address,
      contact,
      success,
      nationality,
      maritalStatus,
      response,
      message,
      submit,
      user,
      fetchUser,
      prevStep,
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
