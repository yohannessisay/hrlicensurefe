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
    <div><FlashMessage /></div>
  </div>
</template>

<script>
import Title from "@/sharedComponents/TitleWithIllustration";
import FlashMessage from "@/sharedComponents/FlashMessage";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  components: { Title, FlashMessage },
  data: () => ({
    success: false,
    a: true,
    profile: {
      name: null,
      fatherName: null,
      grandFatherName: null,
      gender: null,
      dateOfBirth: null,
      placeOfBirth: null,
      nationality: null,
      userTypeId: null,
      expertLevelId: null,
      healthOfficeId: null,
      maritalStatusId: null,
      woredaId: null,
      kebele: null,
      houseNumber: null,
      poBox: null,
      residence: null,
      city: null,
      userId: 1
    },
    contact: {
      mobileNumber: null,
      email: null,
      telephoneNumber: null,
      poBox: null
    },
    personalInfo: {
      name: null,
      fatherName: null,
      grandFatherName: null,
      nationality: null,
      placeOfBirth: null,
      dateOfBirth: null,
      gender: null,
      maritalStatus: null
    },
    address: {
      city: null,
      kebele: null,
      zone: null,
      houseNumber: null,
      woreda: null,
      residence: null
    },
    response: {}
  }),
  computed: {
    ...mapGetters({
      getPersonalInfo: "profile/getPersonalInfo",
      getAddress: "profile/getAddress",
      getContact: "profile/getContact"
    })
  },

  methods: {
    prepareObject() {
      this.profile.name = this.personalInfo.name;
      this.profile.fatherName = this.personalInfo.fatherName;
      this.profile.grandFatherName = this.personalInfo.grandFatherName;
      this.profile.gender = this.personalInfo.gender;
      this.profile.dateOfBirth = this.personalInfo.dateOfBirth;
      this.profile.placeOfBirth = this.personalInfo.placeOfBirth;
      this.profile.nationality = this.personalInfo.nationality;
      this.profile.userTypeId = this.personalInfo.userTypeId;
      this.profile.expertLevelId = this.personalInfo.expertLevelId;
      this.profile.healthOfficeId = "ee";
      this.profile.maritalStatusId = this.personalInfo.maritalStatusId;
      this.profile.woredaId = this.address.woredaId;
      this.profile.kebele = this.address.kebele;
      this.profile.houseNumber = this.address.houseNumber;
      this.profile.residence = this.address.residence;
      this.profile.city = this.address.city;
      this.profile.poBox = this.contact.poBox;
      this.profile.userId = 1;
    },
    async addProfile() {
      console.log(this.profile);
      await axios.post(
        "http://localhost:5000/api/profiles/add", {
          name: this.personalInfo.name,
          fatherName: this.personalInfo.fatherName,
          grandFatherName: this.personalInfo.grandFatherName,
          gender: this.personalInfo.gender,
          dateOfBirth: this.personalInfo.dateOfBirth,
          placeOfBirth: this.personalInfo.placeOfBirth,
          nationality: this.personalInfo.nationality,
          userTypeId: this.personalInfo.userTypeId,
          expertLevelId: this.personalInfo.expertLevelId,
          healthOfficeId: this.personalInfo.healthOfficeId,
          maritalStatusId: this.personalInfo.maritalStatusId,
          woredaId: this.address.woredaId,
          kebele: this.address.kebele,
          houseNumber: this.address.houseNumber,
          residence: this.address.residence,
          city: this.address.city,
          poBox: this.contact.poBox,
          userId: "1"
        })
        .then(response => {
          if (response.statusText == "Created") {
            this.Success = true;
          }
          //console.log(this.a);
          console.log(response);
        });
    },
    submit: function() {
      this.prepareObject();
      this.addProfile();
    }
  },
  mounted() {},
  created() {
    this.personalInfo = this.getPersonalInfo;
    this.address = this.getAddress;
    this.contact = this.getContact;
  }
};
</script>
