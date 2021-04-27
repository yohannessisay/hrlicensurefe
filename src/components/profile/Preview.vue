<template>
  <div class="w-screen max-w-4xl mt-xl h-screen">
    <div
      class="flex flex-col mt-large w-full bg-white blue-box-shadow-light rounded px-2"
    >
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
                personalInfo.lastName +
                " " +
                personalInfo.grandFatherName
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
          <h5 class="ml-8">{{ personalInfo.placeOfBirth }}</h5>
        </div>
        <div>
          <label class="ml-8 text-primary-300"> Date of Birth</label>
          <h5 class="ml-8">{{ personalInfo.dateOfBirth }}</h5>
        </div>
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
          <label class="ml-8 text-primary-300"> Region</label>
          <h5 class="ml-8">{{ address.city }}</h5>
        </div>
        <div>
          <label class="ml-8 text-primary-300"> Zone</label>
          <h5 class="ml-8">{{ address.zone }}</h5>
        </div>
        <div>
          <label class="ml-8 text-primary-300"> Woreda</label>
          <h5 class="ml-8">{{ address.woreda }}</h5>
        </div>
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
          <label class="ml-8 text-primary-300"> Mobile Number</label>
          <h5 class="ml-8">{{ contact.mobileNumber }}</h5>
        </div>
        <div>
          <label class="ml-8 text-primary-300"> Telephone Number</label>
          <h5 class="ml-8">{{ contact.telephoneNumber }}</h5>
        </div>
        <div>
          <label class="ml-8 text-primary-300"> PO Box</label>
          <h5 class="ml-8">{{ contact.poBox }}</h5>
        </div>
        <div>
          <label class="ml-8 text-primary-300"> Email</label>
          <h5 class="ml-8">{{ contact.email }}</h5>
        </div>
      </div>
      <div class="mt-12 flex justify-center mb-medium">
        <div>
          <button v-on:click="submit()">Submit Request</button>
        </div>
      </div>
    </div>
    <div v-if="showFlash">
      <FlashMessage message="Your profile is successfully created" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Title from "@/sharedComponents/TitleWithIllustration";
import FlashMessage from "@/sharedComponents/FlashMessage";
export default {
  components: { Title, FlashMessage },
  setup() {
    const store = useStore();
    const router = useRouter();

    let personalInfo = {
      name: null,
      grandFatherName: null,
      fatherName: null,
      nationality: null,
      placeOfBirth: null,
      dateOfBirth: null,
      gender: null,
      maritalStatusId: null,
      maritalStatus: null,
      userTypeId: null,
      expertLevelId: null,
      healthOfficeId: null,
    };

    let address = {
      city: null,
      kebele: null,
      zone: null,
      houseNumber: null,
      woreda: null,
      residence: null,
    };

    let contact = {
      mobileNumber: null,
      email: null,
      telephoneNumber: null,
      poBox: null,
    };

    let success = ref(false);
    let a = true;
    let response = {};
    let showFlash = ref(false);
    let getPersonalInfo = "profile/getPersonalInfo";

    const addProfile = () => {
      if (
        personalInfo.healthOfficeId != 1 ||
        personalInfo.healthOfficeId != 2
      ) {
        personalInfo.healthOfficeId = null;
      }
      store
        .dispatch("profile/addProfile", {
          name: personalInfo.name,
          fatherName: personalInfo.fatherName,
          grandFatherName: personalInfo.grandFatherName,
          gender: personalInfo.gender,
          dateOfBirth: personalInfo.dateOfBirth,
          placeOfBirth: personalInfo.placeOfBirth,
          nationality: personalInfo.nationality,
          userTypeId: personalInfo.userTypeId,
          expertLevelId: personalInfo.expertLevelId,
          healthOfficeId: personalInfo.healthOfficeId,
          maritalStatusId: personalInfo.maritalStatusId,
          woredaId: address.woredaId,
          kebele: address.kebele,
          houseNumber: address.houseNumber,
          residence: address.residence,
          city: address.city,
          poBox: contact.poBox,
          userId: +localStorage.getItem("userId"),
        })

        .then((response) => {
          if (response.statusText == "Created") {
            showFlash.value = true;
            router.push("/menu");
          }
          console.log(response);
        });
    };

    const submit = () => {
      addProfile();
    };

    personalInfo = store.getters["profile/getPersonalInfo"];
    address = store.getters["profile/getAddress"];
    contact = store.getters["profile/getContact"];
    console.log(personalInfo.name);

    onMounted(() => {
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
      showFlash,
      submit,
      getPersonalInfo,
    };
  },
};
</script>
