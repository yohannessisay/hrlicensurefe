<template>
  <div v-if="this.show">
    <div class="flex justify-center"><Title message="Summary" /></div>
    <div class="flex justify-start">
      <Title message="Personal Info" />
    </div>
    <div class="flex flex-row">
      <div :class="[this.profileInfo.name === null ? errorClass : activeClass]">
        <label class="ml-8"> Full Name</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.name +
              " " +
              this.profileInfo.fatherName +
              " " +
              this.profileInfo.grandFatherName
          }}
        </h5>
      </div>
      <div
        :class="[this.profileInfo.gender === null ? errorClass : activeClass]"
      >
        <label class="ml-8"> Gender</label>
        <h5 class="ml-8">
          {{ this.profileInfo.gender ? this.profileInfo["gender"] : "-" }}
        </h5>
      </div>
      <div
        :class="[
          this.profileInfo.nationality === null ? errorClass : activeClass,
        ]"
      >
        <label class="ml-8"> Nationality</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.nationality ? this.profileInfo.nationality : "-"
          }}
        </h5>
      </div>
      <div
        :class="[
          this.profileInfo.placeOfBirth === null ? errorClass : activeClass,
        ]"
      >
        <label class="ml-8"> Place of Birth</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.placeOfBirth ? this.profileInfo.placeOfBirth : "-"
          }}
        </h5>
      </div>
      <div
        :class="[
          this.profileInfo.dateOfBirth === null ? errorClass : activeClass,
        ]"
      >
        <label class="ml-8"> Date of Birth</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.dateOfBirth ? this.profileInfo.dateOfBirth : "-"
          }}
        </h5>
      </div>
      <div
        :class="[
          this.profileInfo.maritalStatus.name === null
            ? errorClass
            : activeClass,
        ]"
      >
        <label class="ml-8"> Marital Status</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.maritalStatus.name
              ? this.profileInfo.maritalStatus.name
              : "-"
          }}
        </h5>
      </div>
    </div>

    <div class="flex justify-start">
      <Title message="Address" />
    </div>
    <div class="flex flex-row">
      <div
        :class="[
          this.profileInfo.woreda.zone.region === null
            ? errorClass
            : activeClass,
        ]"
      >
        <label class="ml-8"> Region</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.woreda.zone.region
              ? this.profileInfo.woreda.zone.region.name
              : "-"
          }}
        </h5>
      </div>
      <div
        :class="[
          this.profileInfo.woreda.zone === null ? errorClass : activeClass,
        ]"
      >
        <label class="ml-8"> Zone</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.woreda.zone
              ? this.profileInfo.woreda.zone.name
              : "-"
          }}
        </h5>
      </div>
      <div
        :class="[this.profileInfo.woreda === null ? errorClass : activeClass]"
      >
        <label class="ml-8"> Wereda</label>
        <h5 class="ml-8">
          {{ this.profileInfo.woreda ? this.profileInfo.woreda.name : "-" }}
        </h5>
      </div>
      <div
        :class="[this.profileInfo.kebele === null ? errorClass : activeClass]"
      >
        <label class="ml-8"> Kebele</label>
        <h5 class="ml-8">
          {{ this.profileInfo.kebele ? this.profileInfo.kebele : "-" }}
        </h5>
      </div>
      <div
        :class="[
          this.profileInfo.houseNumber === null ? errorClass : activeClass,
        ]"
      >
        <label class="ml-8"> House Number</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.houseNumber ? this.profileInfo.houseNumber : "-"
          }}
        </h5>
      </div>
      <div
        :class="[
          this.profileInfo.residence === null ? errorClass : activeClass,
        ]"
      >
        <label class="ml-8"> Residence</label>
        <h5 class="ml-8">
          {{ this.profileInfo.residence ? this.profileInfo.residence : "-" }}
        </h5>
      </div>
    </div>
    <div class="flex justify-start">
      <Title message="Contact" />
    </div>
    <div class="flex flex-row">
      <div
        :class="[
          this.profileInfo.user.phoneNumber === null ? errorClass : activeClass,
        ]"
      >
        <label class="ml-8"> Mobile Number</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.user.phoneNumber
              ? this.profileInfo.user.phoneNumber
              : "-"
          }}
        </h5>
      </div>

      <div
        :class="[
          this.profileInfo.user.emailAddress === null
            ? errorClass
            : activeClass,
        ]"
      >
        <label class="ml-8"> Email</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.user.emailAddress
              ? this.profileInfo.user.emailAddress
              : "-"
          }}
        </h5>
      </div>
      <div
        :class="[
          this.profileInfo.userType.name === null ? errorClass : activeClass,
        ]"
      >
        <label class="ml-8"> User Type</label>
        <h5 class="ml-8">
          {{
            this.profileInfo.userType.name
              ? this.profileInfo.userType.name
              : "-"
          }}
        </h5>
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
    <!-- <div class="flex justify-start flex-wrap">
      <div v-for="file in docs" v-bind:key="file.name">
        <Title class="" :message="file.name" />
        <picture>
          <img :src="basePath + file.filePath" />
        </picture>
      </div>
    </div> -->
    <div class="mt-12 flex justify-center">
      <div>
        <button @click="submitRequest(this.buttons[1].action)">
          {{ this.buttons[1].name }}
        </button>
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <h6>
        If you don't have all the required informations you can come back and
        finish later.
      </h6>
    </div>
    <div class="flex justify-center mt-8 ">
      <button variant="outline" @click="saveDraft(this.buttons[0].action)">
        {{ this.buttons[0].name }}
      </button>
    </div>
  </div>
  <div v-if="showFlash">
    <FlashMessage message="Your new license is applied successfully!" />
  </div>
  <div v-if="showErrorFlash">
    <ErrorFlashMessage message="Unable to apply your new license!" />
  </div>
</template>

<script>
import Title from "@/sharedComponents/Title";
import { mapGetters } from "vuex";
import FlashMessage from "@/sharedComponents/FlashMessage";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";

export default {
  props: ["activeState"],
  components: {
    Title,
    FlashMessage,
    ErrorFlashMessage,
  },
  async created() {
    // this.userId = +localStorage.getItem("userId");
    this.userId = 2;
    this.photo = this.getPhoto;
    this.passport = this.getPassport;
    this.healthExamCert = this.getHealthExamCert;
    this.englishLanguage = this.getEnglishLanguage;
    this.professionalDoc = this.getProfessionalDocuments;
    this.herqa = this.getHerqa;
    this.supportLetter = this.getSupportLetter;
    this.coc = this.getCoc;
    this.educationalDoc = this.getEducationalDocuments;
    this.workExperience = this.getWorkExperience;
    this.serviceFeeFile = this.getServiceFee;
    this.buttons = this.getButtons;
    this.fetchProfileInfo();
    this.setDocs();
    this.getDocumentSpecs();
    this.license = this.getLicense;
    this.applicantId = this.license.applicantId;
    this.applicantTypeId = this.license.applicantTypeId;
    this.education.departmentId = this.license.education.departmentId;
    this.education.institutionId = this.license.education.institutionId;
    this.buttons = this.getButtons;
  },
  data: () => ({
    show: false,
    profileInfo: {},
    applicantId: "",
    applicantTypeId: "",
    education: {
      departmentId: "",
      institutionId: "",
    },
    activeClass: "active",
    errorClass: "text-danger",
    showFlash: false,
    showErrorFlash: false,
    photo: "",
    passport: "",
    healthExamCert: "",
    englishLanguage: "",
    professionalDoc: [],
    herqa: "",
    supportLetter: "",
    coc: "",
    educationalDoc: [],
    workExperience: "",
    serviceFeeFile: "",
    applicationId: "",
    buttons: [],
    documentTypes: [],
    docs: [],
  }),
  computed: {
    ...mapGetters({
      getLicense: "newlicense/getLicense",
      getPhoto: "newlicense/getPhoto",
      getPassport: "newlicense/getPassport",
      getHealthExamCert: "newlicense/getHealthExamCert",
      getEnglishLanguage: "newlicense/getEnglishLanguage",
      getProfessionalDocuments: "newlicense/getProfessionalDocuments",
      getHerqa: "newlicense/getHerqa",
      getSupportLetter: "newlicense/getSupportLetter",
      getCoc: "newlicense/getCoc",
      getEducationalDocuments: "newlicense/getEducationalDocuments",
      getWorkExperience: "newlicense/getWorkExperience",
      getServiceFee: "newlicense/getServiceFee",
      getButtons: "newlicense/getButtons",
      getApplicationId: "newlicense/getApplicationId",
    }),
  },
  methods: {
    fetchProfileInfo() {
      this.$store.dispatch("newlicense/getProfile", this.userId).then((res) => {
        this.profileInfo = res.data.data;
        this.show = true;
      });
    },
    setDocs() {
      this.docs.push(this.photo);
      this.docs.push(this.passport);
      this.docs.push(this.healthExamCert);
      this.docs.push(this.englishLanguage);
      this.docs.push(this.professionalDoc);
      this.docs.push(this.herqa);
      this.docs.push(this.supportLetter);
      this.docs.push(this.coc);
      this.docs.push(this.educationalDoc);
      this.docs.push(this.workExperience);
      this.docs.push(this.serviceFeeFile);
    },

    getDocumentSpecs() {
      const applicationId = this.getApplicationId;
      this.$store
        .dispatch("newlicense/getDocumentSpecs", applicationId)
        .then((res) => {
          this.documentTypes = res.data.data;
        });
    },

    async submitRequest(act) {
      let action = act;
      this.showFlash = false;
      this.showErrorFlash = false;
      let formData = new FormData();
      formData.append(this.documentSpec[0].documentType.code, this.photo);
      formData.append(this.documentSpec[1].documentType.code, this.passport);
      formData.append(
        this.documentSpec[2].documentType.code,
        this.healthExamCert
      );
      formData.append(this.documentSpec[3].documentType.code, this.serviceFee);
      formData.append(
        this.documentSpec[4].documentType.code,
        this.workExperience
      );
      formData.append(
        this.documentSpec[5].documentType.code,
        this.englishLanguage
      );
      if (this.professionalDoc != undefined) {
        formData.append(
          this.documentSpec[6].documentType.code,
          this.professionalDoc[0]
        );
        formData.append(
          this.documentSpec[7].documentType.code,
          this.professionalDoc[1]
        );
        formData.append(
          this.documentSpec[8].documentType.code,
          this.professionalDoc[2]
        );
      }

      formData.append(this.documentSpec[9].documentType.code, this.coc);
      if (this.educationalDocs != undefined) {
        formData.append(
          this.documentSpec[10].documentType.code,
          this.educationalDocs[0]
        );
        formData.append(
          this.documentSpec[11].documentType.code,
          this.educationalDocs[1]
        );
        formData.append(
          this.documentSpec[12].documentType.code,
          this.educationalDocs[2]
        );
        formData.append(
          this.documentSpec[13].documentType.code,
          this.educationalDocs[3]
        );
        formData.append(
          this.documentSpec[14].documentType.code,
          this.educationalDocs[4]
        );
      }

      formData.append(
        this.documentSpec[15].documentType.code,
        this.supportLetter
      );

      let license = {
        action: action,
        data: {
          applicantId: this.userId,
          applicantTypeId: this.applicantTypeId,
          education: {
            institutionId: this.education.departmentId,
            departmentId: this.education.institutionId,
          },
        },
      };
      this.$store.dispatch("newlicense/addNewLicense", license).then((res) => {
        let licenseId = res.data.data.id;
        let payload = { document: formData, id: licenseId };
        this.$store
          .dispatch("newlicense/uploadDocuments", payload)
          .then((res) => {
            if (res.data.status == "Success") {
              this.showFlash = true;
              this.$router.push({ path: "/menu" });
            }
          })
          .catch((err) => {
            this.showErrorFlash = true;
          });
      });

      // for (let index = 0; index < this.docs.length; index++) {
      //   const aDoc = this.docs[index];

      //   if (aDoc.fieldName === "photo") {
      //     license.photoId = aDoc.id;
      //   } else if (aDoc.fieldName === "passport") {
      //     license.passportId = aDoc.id;
      //   } else if (aDoc.fieldName === "healthExamCert") {
      //     license.healthExamCertId = aDoc.id;
      //   } else if (aDoc.fieldName === "serviceFee") {
      //     license.serviceFeeId = aDoc.id;
      //   }
      // }
    },
  },
  mounted() {
    this.$nextTick(function() {
      window.setInterval(() => {
        this.showFlash = false;
        this.showErrorFlash = false;
      }, 10000);
    });
  },
};
</script>
<style>
.text-danger > label,
.text-danger > h5 {
  color: red;
}
</style>
