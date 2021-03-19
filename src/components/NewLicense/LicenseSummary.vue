<template>
  <div
    style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);"
    class="ml-8 mt-8 mr-8 mb-12"
  >
    <div class="flex justify-center"><Title message="Summary" /></div>
    <div class="flex justify-start">
      <Title message="Personal Info" />
    </div>
    <div class="flex flex-row">
      <div>
        <label class="ml-8"> Full Name</label>
        <h5 class="ml-8">Eyasu</h5>
      </div>
      <div>
        <label class="ml-8"> Gender</label>
        <h5 class="ml-8">M</h5>
      </div>
      <div>
        <label class="ml-8"> Nationality</label>
        <h5 class="ml-8">Ethiopian</h5>
      </div>
      <div>
        <label class="ml-8"> Place of Birth</label>
        <h5 class="ml-8">Addis Ababa</h5>
      </div>
      <div>
        <label class="ml-8"> Date of Birth</label>
        <h5 class="ml-8">10-04-12</h5>
      </div>
      <div>
        <label class="ml-8"> Marital Status</label>
        <h5 class="ml-8">Married</h5>
      </div>
    </div>

    <div class="flex justify-start">
      <Title message="Address" />
    </div>
    <div class="flex flex-row">
      <div>
        <label class="ml-8"> Region</label>
        <h5 class="ml-8">Amhara</h5>
      </div>
      <div>
        <label class="ml-8"> Zone</label>
        <h5 class="ml-8">Semen Gonder</h5>
      </div>
      <div>
        <label class="ml-8"> Wereda</label>
        <h5 class="ml-8">3</h5>
      </div>
      <div>
        <label class="ml-8"> Kebele</label>
        <h5 class="ml-8">16</h5>
      </div>
      <div>
        <label class="ml-8"> House Number</label>
        <h5 class="ml-8">1234</h5>
      </div>
      <div>
        <label class="ml-8"> Residence</label>
        <h5 class="ml-8">Some Value</h5>
      </div>
    </div>
    <div class="flex justify-start">
      <Title message="Contact" />
    </div>
    <div class="flex flex-row">
      <div>
        <label class="ml-8"> Mobile Number</label>
        <h5 class="ml-8">+251987546690</h5>
      </div>
      <div>
        <label class="ml-8"> Telephone Number</label>
        <h5 class="ml-8">0112890999</h5>
      </div>
      <div>
        <label class="ml-8"> Email</label>
        <h5 class="ml-8">jsi@jsi.com</h5>
      </div>
      <div>
        <label class="ml-8"> Applicant Type</label>
        <h5 class="ml-8">Local</h5>
      </div>
    </div>
    <div class="flex justify-start">
      <Title message="Institution" />
    </div>
    <div class="flex flex-row">
      <div>
        <label class="ml-8"> Institution Name</label>
        <h5 class="ml-8">Hawassa University</h5>
      </div>
      <div>
        <label class="ml-8"> Department</label>
        <h5 class="ml-8">Electrical Engineering</h5>
      </div>
      <div>
        <label class="ml-8"> Institution Type</label>
        <h5 class="ml-8">Private</h5>
      </div>
    </div>
    <div class="flex justify-start">
      <Title class="" message="Photo" />
      <Title class="ml-12" message="ID/Passport" />
      <Title class="ml-12" message="Health Examination Certificate" />
    </div>
    <div class="mt-12 flex justify-center">
      <div>
        <button>Submit Request</button>
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <h6>
        If you don't have all the required informations you can come back and
        finish later.
      </h6>
    </div>
    <div class="flex justify-center mt-8 mb-8">
      <button variant="outline">I will finish Later</button>
    </div>
  </div>
</template>

<script>
import Title from "@/sharedComponents/Title";

export default {
  components: {
    Title,
  },
};
</script>
<style></style>
