<template>
  <div v-if="message.showLoading2" class="h-screen max-h-4xl mt-large">
    <Spinner class="bg-lightBlueB-200  " />
  </div>
  <div class="bg-white mb-large rounded pr-20 pl-20 pb-12">
    <div v-if="!message.showLoading2">
      <div class="flex justify-center"><Title message="Summary" /></div>
      <div class="flex justify-start">
        <Title message="Personal Info" />
      </div>
      <div class="flex flex-row">
        <div>
          <label class="ml-8 text-primary-300"> Full Name</label>
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
          <label class="ml-8 text-primary-300"> Full Alternative Name</label>
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
          <label class="ml-8 text-primary-300"> Gender</label>
          <h5 class="ml-8">{{ personalInfo.gender }}</h5>
        </div>
        <div>
          <label class="ml-8 text-primary-300"> Nationality</label>
          <h5 class="ml-8">{{ personalInfo.nationality }}</h5>
        </div>
        <div>
          <label class="ml-8 text-primary-300"> Place of Birth</label>
          <h5 v-if="personalInfo.placeOfBirth != 'undefined'" class="ml-8">
            {{ personalInfo.placeOfBirth }}
          </h5>
        </div>
        <!-- <div>
          <label class="ml-8 text-primary-300"> Date of Birth</label>
          <h5 v-if="personalInfo.dateOfBirth != 'undefined'" class="ml-8">
            {{
              profileInfo.dateOfBirth
                ? moment(profileInfo.dateOfBirth).format("MMM D, YYYY")
                : "-"
            }}
          </h5>
        </div> -->

        <div>
          <label class="ml-8 text-primary-300"> Marital Status</label>
          <h5 class="ml-8">{{ personalInfo.maritalStatus }}</h5>
        </div>
      </div>

      <div class="flex justify-start">
        <Title message="Address" />
      </div>
      <div class="flex flex-row">
        <div>
          <label class="ml-8 text-primary-300"> Kebele</label>
          <h5 class="ml-8">{{ address.kebele }}</h5>
        </div>
        <div>
          <label class="ml-8 text-primary-300"> House Number</label>
          <h5 class="ml-8">{{ address.houseNumber }}</h5>
        </div>
        <div>
          <label class="ml-8 text-primary-300"> Residence</label>
          <h5 class="ml-8">{{ address.residence }}</h5>
        </div>
      </div>
      <div class="flex justify-start">
        <Title message="Contact" />
      </div>
      <div class="flex flex-row">
        <div>
          <label class="ml-8 text-primary-300"> PO Box</label>
          <h5 class="ml-8">{{ address.poBox }}</h5>
        </div>
        <div>
          <label class="ml-8 text-primary-300"> Email Address</label>
          <h5 class="ml-8">{{ user.emailAddress }}</h5>
        </div>
      </div>
      <div class="mt-12 flex justify-center mb-medium">
        <div>
          <button @click="prevStep" class="mx-auto w-1/2" variant="outline">
            Back
          </button>
        </div>
        <div>
          <button v-on:click="submit()">Save Profile</button>
        </div>
      </div>
      <div
        class="flex justify-center justify-items-center mt-8 mb-12"
        v-if="message.showLoading"
      >
        <Spinner />
      </div>
    </div>

    <div v-if="message.showFlash">
      <FlashMessage message="Your profile is successfully created!!" />
    </div>
    <div v-if="message.showErrorFlash">
      <ErrorFlashMessage message="Your profile creation failed!!" />
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

export default {
  components: { Title, FlashMessage, ErrorFlashMessage, Spinner },
  computed: {
    moment: () => moment,
  },
  props: ["activeState"],
  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();
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
      placeOfBirth: null,
      dateOfBirth: null,
      gender: null,
      maritalStatusId: null,
      maritalStatus: null,
      userTypeId: null,
    };

    let address = {
      kebele: null,
      houseNumber: null,
      residence: null,
      poBox: null,
    };

    let contact = {
      email: null,
      poBox: null,
    };

    let success = ref(false);
    let a = true;
    let response = {};
    let showFlash = ref(false);

    const addProfile = () => {
      message.value.showLoading = true;
      message.value.showFlash = false;
      message.value.showErrorFlash = false;

      store
        .dispatch("profile/addProfile", {
          name: personalInfo.name,
          fatherName: personalInfo.fatherName,
          grandFatherName: personalInfo.grandFatherName,
          alternativeName: personalInfo.alternativeName,
          alternativeFatherName: personalInfo.alternativeFatherName,
          alternativeGrandFatherName: personalInfo.alternativeGrandFatherName,
          gender: personalInfo.gender,
          dateOfBirth: personalInfo.dateOfBirth,
          placeOfBirth: personalInfo.placeOfBirth,
          nationality: personalInfo.nationality,
          userTypeId: personalInfo.userTypeId,
          maritalStatusId: personalInfo.maritalStatusId,
          kebele: address.kebele,
          houseNumber: address.houseNumber,
          residence: address.residence,
          poBox: address.poBox,
          photo: personalInfo.photo,
          userId: +localStorage.getItem("userId"),
        })

        .then((response) => {
          if (response.statusText == "Created") {
            message.value.showLoading = false;
            message.value.showFlash = true;
            message.value.showErrorFlash = false;
            setTimeout(() => {
              location.reload(true);
            }, 1500);
            setTimeout(() => {
              router.push({ path: "/menu" });
            }, 100);
          } else {
            message.value.showLoading = false;
            message.value.showFlash = false;
            message.value.showErrorFlash = true;
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
    address = store.getters["profile/getAddress"];
    contact = store.getters["profile/getContact"];

    onMounted(() => {
      fetchUser();
      nextTick(function() {
        window.setInterval(() => {
          showFlash.value = false;
        }, 10000);
      });
    });

    return {
      personalInfo,
      address,
      contact,
      success,
      a,
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
