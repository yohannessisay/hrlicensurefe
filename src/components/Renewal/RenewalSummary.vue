<template>
  <div v-if="this.showLoading2" class="h-screen max-h-4xl">
    <Spinner class="bg-lightBlueB-200  " />
  </div>
  <div class="bg-white mb-large rounded pl-4 pt-4 pr-4 pb-4">
    <div v-if="this.show && !this.showLoading2">
      <div class="flex justify-center"><Title message="Summary" /></div>
      <div class="flex justify-start">
        <Title message="Personal Info" />
      </div>
      <div class="flex flex-row">
        <div
          :class="[this.profileInfo.name === null ? errorClass : activeClass]"
        >
          <label class="ml-4"> Full Name</label>
          <h5 class="ml-4">
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
          <label class="ml-4"> Gender</label>
          <h5 class="ml-4">
            {{ this.profileInfo.gender ? this.profileInfo["gender"] : "-" }}
          </h5>
        </div>
        <div
          :class="[
            this.profileInfo.nationality === null ? errorClass : activeClass,
          ]"
        >
          <label class="ml-4"> Nationality</label>
          <h5 class="ml-4">
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
          <label class="ml-4"> Place of Birth</label>
          <h5 class="ml-4">
            {{
              this.profileInfo.placeOfBirth
                ? this.profileInfo.placeOfBirth
                : "-"
            }}
          </h5>
        </div>
        <div
          :class="[
            this.profileInfo.dateOfBirth === null ? errorClass : activeClass,
          ]"
        >
          <label class="ml-4"> Date of Birth</label>
          <h5 class="ml-4">
            {{
              this.profileInfo.dateOfBirth
                ? moment(this.profileInfo.dateOfBirth).format("MMM D, YYYY")
                : "-"
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
          <label class="ml-4"> Marital Status</label>
          <h5 class="ml-4">
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
          :class="[this.profileInfo.kebele === null ? errorClass : activeClass]"
        >
          <label class="ml-4"> Kebele</label>
          <h5 class="ml-4">
            {{ this.profileInfo.kebele ? this.profileInfo.kebele : "-" }}
          </h5>
        </div>
        <div
          :class="[
            this.profileInfo.houseNumber === null ? errorClass : activeClass,
          ]"
        >
          <label class="ml-4"> House Number</label>
          <h5 class="ml-4">
            {{
              this.profileInfo.houseNumber ? this.profileInfo.houseNumber : "-"
            }}
          </h5>
        </div>
      </div>
      <div class="flex justify-start">
        <Title message="Contact" />
      </div>
      <div class="flex flex-row">
        <div
          :class="[
            this.profileInfo.user.phoneNumber === null
              ? errorClass
              : activeClass,
          ]"
        >
          <label class="ml-4"> Mobile Number</label>
          <h5 class="ml-4">
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
          <label class="ml-4"> Email</label>
          <h5 class="ml-4">
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
          <label class="ml-4"> User Type</label>
          <h5 class="ml-4">
            {{
              this.profileInfo.userType.name
                ? this.profileInfo.userType.name
                : "-"
            }}
          </h5>
        </div>
      </div>
      <!-- <div class="flex justify-start">
        <Title message="Institution" />
      </div>
      <div class="flex flex-row">
        <div>
          <label class="ml-4"> Institution Name</label>
          <h5 class="ml-4">Hawassa University</h5>
        </div>
        <div>
          <label class="ml-4"> Department</label>
          <h5 class="ml-4">Electrical Engineering</h5>
        </div>
        <div>
          <label class="ml-4"> Institution Type</label>
          <h5 class="ml-4">Private</h5>
        </div>
      </div> -->
      <!-- <div class="flex justify-start flex-wrap">
      <div v-for="file in docs" v-bind:key="file.name">
        <Title class="" :message="file.name" />
        <picture>
          <img :src="basePath + file.filePath" />
        </picture>
      </div>
    </div> -->
      <div v-if="this.draftStatus == 'DRA' || !this.draftStatus">
        <div class="mt-12 flex justify-center">
          <div>
            <button
              v-if="this.buttons.length < 3"
              @click="submitRequest(this.buttons[0].action)"
            >
              {{ this.buttons[0].name }}
            </button>
            <button
              v-if="this.buttons.length > 2"
              @click="submitRequest(this.buttons[0].action)"
            >
              {{ this.buttons[0].name }}
            </button>
          </div>
        </div>
        <div class="flex justify-center mt-4">
          <h6>
            If you don't have all the required informations you can come back
            and finish later.
          </h6>
        </div>
        <div class="flex justify-center mt-4 mb-8">
          <button
            v-if="this.buttons.length < 3"
            @click="draft(this.buttons[1].action)"
            variant="outline"
          >
            {{ this.buttons[1].name }}
          </button>
          <button
            v-if="this.buttons.length > 2"
            @click="draft(this.buttons[2].action)"
            variant="outline"
          >
            {{ this.buttons[2].name }}
          </button>

          <button
            v-if="this.buttons.length > 2"
            class="withdraw"
            @click="withdraw(this.buttons[1].action)"
            variant="outline"
          >
            {{ this.buttons[1].name }}
          </button>
        </div>
      </div>
      <div
        v-if="this.draftStatus == 'SUB'"
        class="flex justify-center mt-8 pb-12"
      >
        <button
          class="withdraw"
          @click="withdraw(this.buttons[0].action)"
          variant="outline"
        >
          {{ this.buttons[0]["name"] }}
        </button>
      </div>
      <div
        v-if="this.draftStatus == 'USUP'"
        class="flex justify-center mt-8 pb-12"
      >
        <button @click="draft(this.buttons[0].action)" variant="outline">
          {{ this.buttons[0]["name"] }}
        </button>
        <button @click="update(this.buttons[1].action)" variant="outline">
          {{ this.buttons[1]["name"] }}
        </button>
      </div>
      <div
        v-if="this.draftStatus == 'DEC'"
        class="flex justify-center mt-8 pb-12"
      >
        <button @click="draft(this.buttons[0].action)" variant="outline">
          {{ this.buttons[0]["name"] }}
        </button>
        <button @click="update(this.buttons[1].action)" variant="outline">
          {{ this.buttons[1]["name"] }}
        </button>
      </div>
      <div
        class="flex justify-center justify-items-center mt-8 pb-8"
        v-if="this.showLoading"
      >
        <Spinner />
      </div>
    </div>
  </div>

  <div v-if="this.showFlash">
    <FlashMessage message="Operation Successful!" />
  </div>
  <!-- <div v-if="this.showSuccess">
    <FlashMessage message="Operation Successful!" />
  </div> -->
  <div v-if="showErrorFlash">
    <ErrorFlashMessage message="Operation Failed!" />
  </div>
</template>

<script>
import Title from "@/sharedComponents/Title";
import { mapGetters } from "vuex";
import FlashMessage from "@/sharedComponents/FlashMessage";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import Spinner from "@/sharedComponents/Spinner";
import moment from "moment";

export default {
  props: ["activeState"],
  components: {
    Title,
    FlashMessage,
    ErrorFlashMessage,
    Spinner,
  },
  async created() {
    this.draftId = this.$route.params.id;
    this.draftStatus = this.$route.params.status;
    if (this.draftId != undefined) {
      this.draftData = this.getDraftData;
    }

    this.userId = +localStorage.getItem("userId");

    this.letter = this.getLetter;
    this.healthExamCert = this.getHealthExamCert;
    this.previousLicense = this.getPreviousLicense;
    this.workExperience = this.getWorkExperience;
    this.cpd = this.getCpd;

    this.buttons = this.getButtons;
    this.fetchProfileInfo();
    this.setDocs();
    this.getDocumentSpecs();
    this.license = this.getLicense;
    this.applicantId = this.license.applicantId;
    this.applicantTypeId = this.license.applicantTypeId;
    this.education.departmentId = this.license.education.departmentId;
    this.education.institutionId = this.license.education.institutionId;
    this.residenceWoredaId = this.license.residenceWoredaId;
    this.buttons = this.getButtons;
  },
  data: () => ({
    basePath: "https://hrlicensurebe.dev.k8s.sandboxaddis.com/",

    show: false,
    profileInfo: {},
    applicantId: "",
    applicantTypeId: "",
    education: {
      departmentId: "",
      institutionId: "",
    },
    residenceWoredaId: "",
    draftId: "",
    draftData: "",
    draftStatus: "",
    activeClass: "active",
    errorClass: "text-danger",
    showFlash: false,
    showErrorFlash: false,
    showLoading: false,
    showLoading2: false,
    showSuccess: false,

    letter: "",
    healthExamCert: "",
    serviceFee: "",
    workExperience: "",
    cpd: "",
    previousLicense: "",

    applicationId: "",
    buttons: [],
    documentTypes: [],
    docs: [],
  }),
  computed: {
    ...mapGetters({
      getLicense: "renewal/getLicense",

      getPhoto: "renewal/getRenewalPhoto",
      getLetter: "renewal/getRenewalLicense",
      getHealthExamCert: "renewal/getRenewalHealthExamCert",
      getCpd: "renewal/getRenewalCpd",
      getWorkExperience: "renewal/getRenewalWorkExperience",
      getServiceFee: "renewal/getRenewalServiceFee",
      getPreviousLicense: "renewal/getPreviousLicense",

      getButtons: "renewal/getButtons",
      getApplicationId: "renewal/getApplicationId",
      getDraftData: "renewal/getDraft",
    }),
  },
  methods: {
    moment: function(date) {
      return moment(date);
    },
    fetchProfileInfo() {
      this.showLoading2 = true;
      this.$store.dispatch("renewal/getProfile", this.userId).then((res) => {
        setTimeout(() => {
          this.profileInfo = res.data.data;
          this.show = true;
          this.showLoading2 = false;
        }, 3000);
      });
    },
    setDocs() {
      this.docs.push(this.passport);
      this.docs.push(this.healthExamCert);
      this.docs.push(this.englishLanguage);
      this.docs.push(this.professionalDoc);
      this.docs.push(this.herqa);
      this.docs.push(this.supportLetter);
      this.docs.push(this.coc);
      this.docs.push(this.educationalDoc);
      this.docs.push(this.workExperience);
    },

    getDocumentSpecs() {
      const applicationId = this.getApplicationId;
      this.$store
        .dispatch("renewal/getDocumentSpecs", applicationId)
        .then((res) => {
          this.documentTypes = res.data.data;
        });
    },

    async submitRequest(act) {
      let action = act;
      this.showLoading = true;
      if (this.draftId != null) {
        let license = {
          data: {
            action: action,
            data: this.draftData,
          },
          id: this.draftId,
        };
        this.$store
          .dispatch("renewal/editRenewalLicense", license)
          .then((res) => {
            if (res.data.status == "Success") {
              let licenseId = this.draftId;
              let formData = new FormData();

              formData.append(
                this.documentTypes[1].documentType.code,
                this.letter
              );
              formData.append(
                this.documentTypes[2].documentType.code,
                this.healthExamCert
              );

              formData.append(
                this.documentTypes[4].documentType.code,
                this.cpd
              );
              formData.append(
                this.documentTypes[5].documentType.code,
                this.workExperience
              );
              formData.append(
                this.documentTypes[6].documentType.code,
                this.previousLicense
              );
              let payload = { document: formData, id: licenseId };
              this.$store
                .dispatch("renewal/uploadDocuments", payload)
                .then((res) => {
                  if (res.status == 200) {
                    this.showFlash = true;
                    this.showLoading = false;
                    setTimeout(() => {
                      this.$router.push({ path: "/menu" });
                    }, 1500);
                  } else {
                    this.showErrorFlash = true;
                  }
                })
                .catch((err) => {});
            }
          });
      } else {
        let formData = new FormData();
        formData.append(this.documentTypes[1].documentType.code, this.letter);
        formData.append(
          this.documentTypes[2].documentType.code,
          this.healthExamCert
        );

        formData.append(this.documentTypes[4].documentType.code, this.cpd);
        formData.append(
          this.documentTypes[5].documentType.code,
          this.workExperience
        );
        formData.append(
          this.documentTypes[6].documentType.code,
          this.previousLicense
        );
        let license = {
          action: action,
          data: {
            applicantId: this.userId,
            applicantTypeId: this.applicantTypeId,
            education: {
              institutionId: this.education.institutionId,
              departmentId: this.education.departmentId,
            },
            residenceWoredaId: this.residenceWoredaId,
          },
        };
        this.$store
          .dispatch("renewal/addRenewalLicense", license)
          .then((res) => {
            let licenseId = res.data.data.id;
            let payload = { document: formData, id: licenseId };
            this.$store
              .dispatch("renewal/uploadDocuments", payload)
              .then((res) => {
                this.showLoading = false;
                if (res.data.status == "Success") {
                  this.showFlash = true;
                  setTimeout(() => {
                    this.$router.push({ path: "/menu" });
                  }, 1500);
                } else {
                  this.showErrorFlash = true;
                }
              })
              .catch((err) => {
                this.showErrorFlash = true;
              });
          });
      }
    },
    update(action) {
      this.showLoading = true;
      let license = {
        data: {
          action: action,
          data: {
            applicantId: this.licenseInfo.applicantId,
            applicantTypeId: this.licenseInfo.applicantTypeId,
            education: {
              departmentId: this.licenseInfo.education.departmentId,
              institutionId: this.licenseInfo.education.institutionId,
            },
            residenceWoredaId: this.residenceWoredaId,
          },
        },
        id: this.draftId,
      };

      if (this.draftId != undefined) {
        this.$store
          .dispatch("renewal/editRenewalLicense", license)
          .then((res) => {
            if (res.data.status == "Success") {
              this.showFlash = true;
              this.showLoading = false;
              setTimeout(() => {
                this.$router.push({ path: "/menu" });
              }, 1500);
            } else {
              this.showErrorFlash = true;
            }
          });
      } else {
        this.$store
          .dispatch("renewal/addRenewalLicense", license.data)
          .then((res) => {
            if (res.data.status == "Success") {
              this.showFlash = true;
              this.showLoading = false;
              setTimeout(() => {
                this.$router.push({ path: "/menu" });
              }, 1500);
            }
          });
      }
    },
    async saveDraft(act) {
      let action = act;
      this.showLoading = true;
      if (this.draftId != null) {
        let license = {
          data: {
            action: action,
            data: this.draftData,
          },
          id: this.draftId,
        };
        this.$store
          .dispatch("renewal/editRenewalLicense", license)
          .then((res) => {
            if (res.data.status == "Success") {
              let licenseId = this.draftId;
              let formData = new FormData();

              formData.append(
                this.documentTypes[1].documentType.code,
                this.letter
              );
              formData.append(
                this.documentTypes[2].documentType.code,
                this.healthExamCert
              );

              formData.append(
                this.documentTypes[4].documentType.code,
                this.cpd
              );
              formData.append(
                this.documentTypes[5].documentType.code,
                this.workExperience
              );
              formData.append(
                this.documentTypes[6].documentType.code,
                this.previousLicense
              );
              let payload = { document: formData, id: licenseId };
              this.$store
                .dispatch("renewal/uploadDocuments", payload)
                .then((res) => {
                  if (res.status == 200) {
                    this.showFlash = true;
                    this.showLoading = false;
                    setTimeout(() => {
                      this.$router.push({ path: "/menu" });
                    }, 1500);
                  } else {
                    this.showErrorFlash = true;
                  }
                })
                .catch((err) => {});
            }
          });
      } else {
        let formData = new FormData();
        formData.append(this.documentTypes[1].documentType.code, this.letter);
        formData.append(
          this.documentTypes[2].documentType.code,
          this.healthExamCert
        );

        formData.append(this.documentTypes[4].documentType.code, this.cpd);
        formData.append(
          this.documentTypes[5].documentType.code,
          this.workExperience
        );
        formData.append(
          this.documentTypes[6].documentType.code,
          this.previousLicense
        );

        let license = {
          action: action,
          data: {
            applicantId: this.userId,
            applicantTypeId: this.applicantTypeId,
            education: {
              institutionId: this.education.institutionId,
              departmentId: this.education.departmentId,
            },
            residenceWoredaId: this.residenceWoredaId,
          },
        };
        this.$store
          .dispatch("renewal/addRenewalLicense", license)
          .then((res) => {
            let licenseId = res.data.data.id;
            let payload = { document: formData, id: licenseId };
            this.$store
              .dispatch("renewal/uploadDocuments", payload)
              .then((res) => {
                this.showLoading = false;
                if (res.data.status == "Success") {
                  this.showFlash = true;
                  setTimeout(() => {
                    this.$router.push({ path: "/menu" });
                  }, 1500);
                } else {
                  this.showErrorFlash = true;
                }
              })
              .catch((err) => {
                this.showErrorFlash = true;
              });
          });
      }
    },
    withdraw(action) {
      this.showLoading = true;
      let withdrawObj = {
        action: action,
        data: this.getDraftData,
      };
      let payload = {
        licenseId: this.getDraftData.id,
        withdrawData: withdrawObj,
      };
      this.$store.dispatch("renewal/withdraw", payload).then((res) => {
        if (res) {
          this.showFlash = true;
          this.showLoading = false;
          setTimeout(() => {
            this.$router.push({ path: "/menu" });
          }, 1500);
        } else {
          this.showErrorFlash = true;
        }
      });
    },
  },
  mounted() {
    this.$nextTick(function() {
      window.setInterval(() => {
        this.showFlash = false;
        this.showErrorFlash = false;
      });
    });
  },
};
</script>
<style>
.text-danger > label,
.text-danger > h5 {
  color: red;
}
.withdraw {
  background-image: linear-gradient(to right, #d63232, #e63636) !important;
  color: white;
  border-color: tomato;
}
</style>
