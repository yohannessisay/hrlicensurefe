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
          <button>Submit Request</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/sharedComponents/TitleWithIllustration";
export default {
  components: { Title },
  data: () => ({
    contact: {
      mobileNumber: "+251900000000",
      email: "a@a.com",
      telephoneNumber: "940390303",
      poBox: "5445"
    },
    personalInfo: {
      name: "Sim",
      fatherName: "Aka",
      grandFatherName: "Tuotu",
      nationality: "Ethiopian",
      placeOfBirth: "Addis Ababa",
      dateOfBirth: "12/12/1995",
      gender: "male",
      maritalStatus: "single"
    },
    address: {
      city: "Addis Ababa",
      kebele: "11",
      zone: "04",
      houseNumber: "5670",
      woreda: "4232",
      residence: "A.A res"
    }
  }),
  methods: {
    submit: function() {
      console.log(this.address);
    }
  },
  mounted() {}
};
</script>
