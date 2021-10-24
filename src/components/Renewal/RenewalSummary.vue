<template>
  <div
    v-if="this.showLoading2"
    class="bg-lightBlueB-200 w-screen h-screen max-w-4xl"
  >
    <Spinner class="bg-lightBlueB-200" />
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
          <label class="ml-4 text-primary-300"> Full Name</label>
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
        <div>
          <label class="ml-8 text-primary-300"> Full Alternative Name</label>
          <h5 class="ml-8">
            {{
              this.profileInfo.alternativeName +
                " " +
                this.profileInfo.alternativeFatherName +
                " " +
                this.profileInfo.alternativeGrandFatherName
            }}
          </h5>
        </div>
        <div
          :class="[this.profileInfo.gender === null ? errorClass : activeClass]"
        >
          <label class="ml-4 text-primary-300"> Gender</label>
          <h5 class="ml-4">
            {{ this.profileInfo.gender ? this.profileInfo["gender"] : "-" }}
          </h5>
        </div>
        <div
          :class="[
            this.profileInfo.nationality === null ? errorClass : activeClass,
          ]"
        >
          <label class="ml-4 text-primary-300"> Nationality</label>
          <h5 class="ml-4">
            {{
              this.profileInfo.nationality ? this.profileInfo.nationality : "-"
            }}
          </h5>
        </div>
        <div
          :class="[
            this.profileInfo.dateOfBirth === null ? errorClass : activeClass,
          ]"
        >
          <label class="ml-4 text-primary-300"> Date of Birth</label>
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
          <label class="ml-4 text-primary-300"> Marital Status</label>
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
      <div>
        <label class="ml-8 text-primary-300"> PO Box</label>
        <h5 class="ml-8">{{ this.profileInfo.poBox }}</h5>
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
          <label class="ml-4 text-primary-300"> Mobile Number</label>
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
          <label class="ml-4 text-primary-300"> Email</label>
          <h5 class="ml-4">
            {{
              this.profileInfo.user.emailAddress
                ? this.profileInfo.user.emailAddress
                : "-"
            }}
          </h5>
        </div>
      </div>
      <label
        style="font-size: 20px"
        v-if="docList.length != 0"
        class="flex justify-center text-primary-300"
      >
        Newly Attached Documents</label
      >
      <div class="flex justify-start flex-wrap">
        <div v-for="i in docList.length" v-bind:key="i">
          <div
            class="mr-4"
            v-for="item in docList.slice((i - 1) * 1, i * 1)"
            v-bind="item"
            v-bind:value="item"
          >
            <Title class="" :message="item.title" />
            <picture>
              <img :src="item.docFile" />
            </picture>
          </div>
        </div>
      </div>
      <label
        style="font-size: 20px"
        v-if="documentsArray.length != 0"
        class="flex justify-center text-primary-300"
      >
        Draft Documents</label
      >
      <div v-if="draftId != undefined" class="flex justify-start flex-wrap">
        <div v-for="i in documentsArray.length" v-bind:key="i">
          <div
            class="mr-4"
            v-for="item in documentsArray.slice((i - 1) * 1, i * 1)"
            v-bind="item"
            v-bind:value="item"
          >
            <Title class="" :message="item.documentTypeCode" />
            <picture>
              <img
                :src="
                  'https://storage.googleapis.com/hris-lisence-dev/' +
                    item.filePath
                "
              />
            </picture>
          </div>
        </div>
      </div>
      <div v-if="this.draftStatus == 'DRA' || !this.draftStatus">
        <div class="mt-12 flex justify-center">
          <div>
            <button @click="submitBack">
              Back
            </button>
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
        <button @click="submitBack">
          Back
        </button>
        <button
          class="withdraw"
          @click="withdraw(this.buttons[1].action)"
          variant="outline"
        >
          {{ this.buttons[1]["name"] }}
        </button>
      </div>
      <div
        v-if="this.draftStatus == 'USUP'"
        class="flex justify-center mt-8 pb-12"
      >
        <button @click="submitBack">
          Back
        </button>
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
        <button @click="submitBack">
          Back
        </button>
        <button @click="draft(this.buttons[0].action)" variant="outline">
          Re-apply
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

  <div v-if="showFlash">
    <FlashMessage message="Operation Successful!" />
  </div>
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
      // setTimeout(() => {
      this.draftData = this.getDraftData;
      this.documentsArray = this.draftData.documents;
      // }, 3500);
    }

    this.userId = +localStorage.getItem("userId");

    this.passport = this.getPassport;
    this.healthExamCert = this.getHealthExamCert;
    this.workExperience = this.getWorkExperience;
    this.cpd = this.getcpd;
    this.herqa = this.getHerqa;
    this.previousLicense = this.getPreviousLicense;
    this.supportLetter = this.getSupportLetter;
    this.coc = this.getCoc;
    this.degree = this.getDegree;
    this.diploma = this.getDiploma;
    this.educationalDocs = this.getEducationalDocuments;
    this.payroll = this.getPayroll;
    this.transcript = this.getTranscript;
    this.englishLanguage = this.getEnglishLanguage;
    this.letterFromOrg = this.getLetterFromHiringInstitution;
    this.professionalLicense = this.getProfessionalLicense;
    this.renewedLicense = this.getRenewedLicense;
    this.letterOrg = this.getLetterFromOrg;
    this.professionalDoc = this.getProfessionalDocuments;

    this.proCertificate = this.getProCertificate;
    this.proTranscript = this.getProTranscript;
    this.proDiploma = this.getProDiploma;

    this.eduEighth = this.getEduEighth;
    this.eduTenth = this.getEduTenth;
    this.eduTwelveth = this.getEduTwelveth;
    this.eduTranscript1 = this.getEduTranscript1;
    this.eduTranscript2 = this.getEduTranscript2;

    if (this.passport != "" && this.passport != undefined) {
      if ("name" in this.passport) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex((e) => e.documentTypeCode === "PSP"),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.passport);
        this.passport.docFile = filePreview;
        this.passport.title = "Passport";
        this.docList.push(this.passport);
      }
    }

    if (this.healthExamCert != "" && this.healthExamCert != undefined) {
      if ("name" in this.healthExamCert) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex((e) => e.documentTypeCode === "HEC"),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.healthExamCert);
        this.healthExamCert.docFile = filePreview;
        this.healthExamCert.title = "Medical Certificate";
        this.docList.push(this.healthExamCert);
      }
    }

    if (this.workExperience != "" && this.workExperience != undefined) {
      if ("name" in this.workExperience) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex((e) => e.documentTypeCode === "WE"),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.workExperience);
        this.workExperience.docFile = filePreview;
        this.workExperience.title = "Work Experience";
        this.docList.push(this.workExperience);
      }
    }
    if (this.cpd != "" && this.cpd != undefined) {
      if ("name" in this.cpd) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex((e) => e.documentTypeCode === "CPD"),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.cpd);
        this.cpd.docFile = filePreview;
        this.cpd.title = "CPD";
        this.docList.push(this.cpd);
      }
    }
    if (this.herqa != "" && this.herqa != undefined) {
      if ("name" in this.herqa) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex(
              (e) => e.documentTypeCode === "HERQA"
            ),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.herqa);
        this.herqa.docFile = filePreview;
        this.herqa.title = "HERQA";
        this.docList.push(this.herqa);
      }
    }
    if (this.previousLicense != "" && this.previousLicense != undefined) {
      if ("name" in this.previousLicense) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex((e) => e.documentTypeCode === "PL"),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.previousLicense);
        this.previousLicense.docFile = filePreview;
        this.previousLicense.title = "Previous License";
        this.docList.push(this.previousLicense);
      }
    }
    if (this.supportLetter != "" && this.supportLetter != undefined) {
      if ("name" in this.supportLetter) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex((e) => e.documentTypeCode === "SL"),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.supportLetter);
        this.supportLetter.docFile = filePreview;
        this.supportLetter.title = "Support Letter";
        this.docList.push(this.supportLetter);
      }
    }
    if (this.coc != "" && this.coc != undefined) {
      if ("name" in this.coc) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex((e) => e.documentTypeCode === "COC"),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.coc);
        this.coc.docFile = filePreview;
        this.coc.title = "COC";
        this.docList.push(this.coc);
      }
    }
    if (this.degree != "" && this.degree != undefined) {
      if ("name" in this.degree) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex((e) => e.documentTypeCode === "DEG"),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.degree);
        this.degree.docFile = filePreview;
        this.degree.title = "Degree";
        this.docList.push(this.degree);
      }
    }
    if (this.diploma != "" && this.diploma != undefined) {
      if ("name" in this.diploma) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex((e) => e.documentTypeCode === "PDD"),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.diploma);
        this.diploma.docFile = filePreview;
        this.diploma.title = "Diploma";
        this.docList.push(this.diploma);
      }
    }
    if (this.payroll != "" && this.payroll != undefined) {
      if ("name" in this.payroll) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex((e) => e.documentTypeCode === "PAYR"),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.payroll);
        this.payroll.docFile = filePreview;
        this.payroll.title = "Payroll";
        this.docList.push(this.payroll);
      }
    }
    if (this.transcript != "" && this.transcript != undefined) {
      if ("name" in this.transcript) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex((e) => e.documentTypeCode === "PDT"),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.transcript);
        this.transcript.docFile = filePreview;
        this.transcript.title = "Transcript";
        this.docList.push(this.transcript);
      }
    }
    if (this.englishLanguage != "" && this.englishLanguage != undefined) {
      if ("name" in this.englishLanguage) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex((e) => e.documentTypeCode === "ELPC"),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.englishLanguage);
        this.englishLanguage.docFile = filePreview;
        this.englishLanguage.title = "English Language Proficiency";
        this.docList.push(this.englishLanguage);
      }
    }
    if (this.letterFromOrg != "" && this.letterFromOrg != undefined) {
      if ("name" in this.letterFromOrg) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex((e) => e.documentTypeCode === "LHI"),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.letterFromOrg);
        this.letterFromOrg.docFile = filePreview;
        this.letterFromOrg.title = "Letter from Hiring Institution";
        this.docList.push(this.letterFromOrg);
      }
    }
    if (
      this.professionalLicense != "" &&
      this.professionalLicense != undefined
    ) {
      if ("name" in this.professionalLicense) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex(
              (e) => e.documentTypeCode === "APLFCO"
            ),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.professionalLicense);
        this.professionalLicense.docFile = filePreview;
        this.professionalLicense.title = "Authenticated Professional License";
        this.docList.push(this.professionalLicense);
      }
    }
    if (this.renewedLicense != "" && this.renewedLicense != undefined) {
      if ("name" in this.renewedLicense) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex(
              (e) => e.documentTypeCode === "RLOTO"
            ),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.renewedLicense);
        this.renewedLicense.docFile = filePreview;
        this.renewedLicense.title = "Renewed License";
        this.docList.push(this.renewedLicense);
      }
    }
    if (this.letterOrg != "" && this.letterOrg != undefined) {
      if ("name" in this.letterOrg) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex((e) => e.documentTypeCode === "LFO"),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.letterOrg);
        this.letterOrg.docFile = filePreview;
        this.letterOrg.title = "Letter from Organization";
        this.docList.push(this.letterOrg);
      }
    }
    if (this.proCertificate != "" && this.proCertificate != undefined) {
      if ("name" in this.proCertificate) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex((e) => e.documentTypeCode === "PDC"),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.proCertificate);
        this.proCertificate.docFile = filePreview;
        this.proCertificate.title = "Professional Certificate";
        this.docList.push(this.proCertificate);
      }
    }
    if (this.proTranscript != "" && this.proTranscript != undefined) {
      if ("name" in this.proTranscript) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex((e) => e.documentTypeCode === "PDT"),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.proTranscript);
        this.proTranscript.docFile = filePreview;
        this.proTranscript.title = "Professional Transcript";
        this.docList.push(this.proTranscript);
      }
    }
    if (this.proDiploma != "" && this.proDiploma != undefined) {
      if ("name" in this.proDiploma) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex((e) => e.documentTypeCode === "PDD"),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.proDiploma);
        this.proDiploma.docFile = filePreview;
        this.proDiploma.title = "Professional Diploma";
        this.docList.push(this.proDiploma);
      }
    }
    if (this.eduEighth != "" && this.eduEighth != undefined) {
      if ("name" in this.eduEighth) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex(
              (e) => e.documentTypeCode === "EDEGC"
            ),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.eduEighth);
        this.eduEighth.docFile = filePreview;
        this.eduEighth = "Eighth Grade Certificate";
        this.docList.push(this.eduEighth);
      }
    }
    if (this.eduTenth != "" && this.eduTenth != undefined) {
      if ("name" in this.eduTenth) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex(
              (e) => e.documentTypeCode === "EDTGC"
            ),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.eduTenth);
        this.eduTenth.docFile = filePreview;
        this.eduTenth.title = "Tenth Grade Certificate";
        this.docList.push(this.eduTenth);
      }
    }
    if (this.eduTwelveth != "" && this.eduTwelveth != undefined) {
      if ("name" in this.eduTwelveth) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex(
              (e) => e.documentTypeCode === "EDTWGC"
            ),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.eduTwelveth);
        this.eduTwelveth.docFile = filePreview;
        this.eduTwelveth.title = "Twelveth Grade Certificate";
        this.docList.push(this.eduTwelveth);
      }
    }
    if (this.eduTranscript1 != "" && this.eduTranscript1 != undefined) {
      if ("name" in this.eduTranscript1) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex((e) => e.documentTypeCode === "EDHT"),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.eduTranscript1);
        this.eduTranscript1.docFile = filePreview;
        this.eduTranscript1.title = "Education Transcript 1";
        this.docList.push(this.eduTranscript1);
      }
    }
    if (this.eduTranscript2 != "" && this.eduTranscript2 != undefined) {
      if ("name" in this.eduTranscript2) {
        if (this.draftId != undefined) {
          this.documentsArray.splice(
            this.documentsArray.findIndex((e) => e.documentTypeCode === "EDPT"),
            1
          );
        }
        var filePreview = await this.blobToBase64(this.eduTranscript2);
        this.eduTranscript2.docFile = filePreview;
        this.eduTranscript2.title = "Education Transcript 2";
        this.docList.push(this.eduTranscript2);
      }
    }

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
    this.professionalTypeID = this.license.professionalTypeId;
    this.occupationTypeId = this.license.occupationTypeId;
    this.expertLevelId = this.license.expertLevelId;
  },
  data: () => ({
    basePath: "https://storage.googleapis.com/hris-lisence-dev/",
    docList: [],
    documentsArray: [],
    show: false,
    profileInfo: {},
    applicantId: null,
    applicantTypeId: null,
    education: {
      departmentId: null,
      institutionId: null,
    },
    residenceWoredaId: null,
    professionalTypeID: null,
    occupationTypeId: null,
    expertLevelId: null,
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

    passport: "",
    healthExamCert: "",
    professionalDoc: "",
    workExperience: "",
    cpd: "",
    herqa: "",
    previousLicense: "",
    supportLetter: "",
    coc: "",
    degree: "",
    diploma: "",
    educationalDocs: "",
    payroll: "",
    transcript: "",
    englishLanguage: "",
    letterFromOrg: "",
    professionalLicense: "",
    renewedLicense: "",
    letterOrg: "",

    proCertificate: "",
    proTranscript: "",
    proDiploma: "",

    eduEighth: "",
    eduTenth: "",
    eduTwelveth: "",
    eduTranscript1: "",
    eduTranscript2: "",

    applicationId: "",
    buttons: [],
    documentTypes: [],
    docs: [],
  }),
  computed: {
    ...mapGetters({
      getLicense: "renewal/getLicense",
      getButtons: "renewal/getButtons",
      getApplicationId: "renewal/getApplicationId",
      getDraftData: "renewal/getDraft",

      getPassport: "renewal/getPassport",
      getHealthExamCert: "renewal/getRenewalHealthExamCert",
      getWorkExperience: "renewal/getRenewalWorkExperience",
      getcpd: "renewal/getRenewalCpd",
      getHerqa: "renewal/getHerqa",
      getPreviousLicense: "renewal/getPreviousLicense",
      getSupportLetter: "renewal/getSupportLetter",
      getCoc: "renewal/getCoc",
      getDegree: "renewal/getDegree",
      getDiploma: "renewal/getDiploma",
      getEducationalDocuments: "renewal/getEducationalDocuments",
      getPayroll: "renewal/getPayroll",
      getTranscript: "renewal/getTranscript",
      getEnglishLanguage: "renewal/getEnglishLanguage",
      getLetterFromHiringInstitution: "renewal/getRenewalLicense",
      getProfessionalLicense: "renewal/getProfessionalLicense",
      getRenewedLicense: "renewal/getPreviousLicense",
      getLetterFromOrg: "renewal/getLetterfromOrg",
      getProfessionalDocuments: "renewal/getProfessionalDocuments",

      getProCertificate: "renewal/getProCertificate",
      getProTranscript: "renewal/getProTranscript",
      getProDiploma: "renewal/getProDiploma",

      getEduEighth: "renewal/getEduEighth",
      getEduTenth: "renewal/getEduTenth",
      getEduTwelveth: "renewal/getEduTwelveth",
      getEduTranscript1: "renewal/getEduTranscript1",
      getEduTranscript2: "renewal/getEduTranscript2",
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
    blobToBase64(blob) {
      return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
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
    submitBack() {
      this.$emit("changeActiveStateMinus");
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
                this.documentTypes[0].documentType.code,
                this.passport
              );
              formData.append(
                this.documentTypes[2].documentType.code,
                this.healthExamCert
              );
              if (this.professionalDoc != undefined) {
                formData.append(
                  this.documentTypes[8].documentType.code,
                  this.professionalDoc[0]
                );

                formData.append(
                  this.documentTypes[9].documentType.code,
                  this.professionalDoc[1]
                );
                formData.append(
                  this.documentTypes[10].documentType.code,
                  this.professionalDoc[2]
                );
              }
              formData.append(
                this.documentTypes[5].documentType.code,
                this.workExperience
              );
              formData.append(
                this.documentTypes[4].documentType.code,
                this.cpd
              );
              formData.append(
                this.documentTypes[18].documentTypeCode,
                this.herqa
              );
              formData.append(
                this.documentTypes[6].documentTypeCode,
                this.previousLicense
              );
              formData.append(
                this.documentTypes[17].documentTypeCode,
                this.supportLetter
              );
              formData.append(
                this.documentTypes[11].documentType.code,
                this.coc
              );
              formData.append(
                this.documentTypes[24].documentType.code,
                this.degree
              );
              formData.append(
                this.documentTypes[9].documentType.code,
                this.diploma
              );
              if (this.educationalDocs != undefined) {
                formData.append(
                  this.documentTypes[12].documentType.code,
                  this.educationalDocs[0]
                );
                formData.append(
                  this.documentTypes[13].documentType.code,
                  this.educationalDocs[1]
                );
                formData.append(
                  this.documentTypes[14].documentType.code,
                  this.educationalDocs[2]
                );
                formData.append(
                  this.documentTypes[15].documentType.code,
                  this.educationalDocs[3]
                );
                formData.append(
                  this.documentTypes[16].documentType.code,
                  this.educationalDocs[4]
                );
              }
              formData.append(
                this.documentTypes[23].documentType.code,
                this.payroll
              );
              formData.append(
                this.documentTypes[10].documentType.code,
                this.transcript
              );
              formData.append(
                this.documentTypes[7].documentType.code,
                this.englishLanguage
              );
              formData.append(
                this.documentTypes[19].documentType.code,
                this.letterFromOrg
              );
              formData.append(
                this.documentTypes[22].documentType.code,
                this.professionalLicense
              );
              formData.append(
                this.documentTypes[21].documentType.code,
                this.renewedLicense
              );
              formData.append(
                this.documentTypes[20].documentType.code,
                this.letterOrg
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
        formData.append(this.documentTypes[0].documentType.code, this.passport);
        formData.append(
          this.documentTypes[2].documentType.code,
          this.healthExamCert
        );
        if (this.professionalDoc != undefined) {
          formData.append(
            this.documentTypes[8].documentType.code,
            this.professionalDoc[0]
          );

          formData.append(
            this.documentTypes[9].documentType.code,
            this.professionalDoc[1]
          );
          formData.append(
            this.documentTypes[10].documentType.code,
            this.professionalDoc[2]
          );
        }
        formData.append(
          this.documentTypes[5].documentType.code,
          this.workExperience
        );
        formData.append(this.documentTypes[4].documentType.code, this.cpd);
        formData.append(this.documentTypes[18].documentTypeCode, this.herqa);
        formData.append(
          this.documentTypes[6].documentTypeCode,
          this.previousLicense
        );
        formData.append(
          this.documentTypes[17].documentTypeCode,
          this.supportLetter
        );
        formData.append(this.documentTypes[11].documentType.code, this.coc);
        formData.append(this.documentTypes[24].documentType.code, this.degree);
        formData.append(this.documentTypes[9].documentType.code, this.diploma);
        if (this.educationalDocs != undefined) {
          formData.append(
            this.documentTypes[12].documentType.code,
            this.educationalDocs[0]
          );
          formData.append(
            this.documentTypes[13].documentType.code,
            this.educationalDocs[1]
          );
          formData.append(
            this.documentTypes[14].documentType.code,
            this.educationalDocs[2]
          );
          formData.append(
            this.documentTypes[15].documentType.code,
            this.educationalDocs[3]
          );
          formData.append(
            this.documentTypes[16].documentType.code,
            this.educationalDocs[4]
          );
        }
        formData.append(this.documentTypes[23].documentType.code, this.payroll);
        formData.append(
          this.documentTypes[10].documentType.code,
          this.transcript
        );
        formData.append(
          this.documentTypes[7].documentType.code,
          this.englishLanguage
        );
        formData.append(
          this.documentTypes[19].documentType.code,
          this.letterFromOrg
        );
        formData.append(
          this.documentTypes[22].documentType.code,
          this.professionalLicense
        );
        formData.append(
          this.documentTypes[21].documentType.code,
          this.renewedLicense
        );
        formData.append(
          this.documentTypes[20].documentType.code,
          this.letterOrg
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
            professionalTypeId: this.professionalTypeID,
            paymentSlip: null,
            occupationTypeId: this.occupationTypeId,
            expertLevelId: this.expertLevelId,
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
            applicantId: this.license.applicantId,
            applicantTypeId: this.license.applicantTypeId,
            education: {
              departmentId: this.license.education.departmentId,
              institutionId: this.license.education.institutionId,
            },
            residenceWoredaId: this.residenceWoredaId,
            professionalTypeId: this.professionalTypeID,
            paymentSlip: null,
            occupationTypeId: this.occupationTypeId,
            expertLevelId: this.expertLevelId,
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
    async draft(act) {
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
                this.documentTypes[0].documentType.code,
                this.passport
              );
              formData.append(
                this.documentTypes[2].documentType.code,
                this.healthExamCert
              );
              if (this.professionalDoc != undefined) {
                formData.append(
                  this.documentTypes[8].documentType.code,
                  this.professionalDoc[0]
                );

                formData.append(
                  this.documentTypes[9].documentType.code,
                  this.professionalDoc[1]
                );
                formData.append(
                  this.documentTypes[10].documentType.code,
                  this.professionalDoc[2]
                );
              }
              formData.append(
                this.documentTypes[5].documentType.code,
                this.workExperience
              );
              formData.append(
                this.documentTypes[4].documentType.code,
                this.cpd
              );
              formData.append(
                this.documentTypes[18].documentTypeCode,
                this.herqa
              );
              formData.append(
                this.documentTypes[6].documentTypeCode,
                this.previousLicense
              );
              formData.append(
                this.documentTypes[17].documentTypeCode,
                this.supportLetter
              );
              formData.append(
                this.documentTypes[11].documentType.code,
                this.coc
              );
              formData.append(
                this.documentTypes[24].documentType.code,
                this.degree
              );
              formData.append(
                this.documentTypes[9].documentType.code,
                this.diploma
              );
              if (this.educationalDocs != undefined) {
                formData.append(
                  this.documentTypes[12].documentType.code,
                  this.educationalDocs[0]
                );
                formData.append(
                  this.documentTypes[13].documentType.code,
                  this.educationalDocs[1]
                );
                formData.append(
                  this.documentTypes[14].documentType.code,
                  this.educationalDocs[2]
                );
                formData.append(
                  this.documentTypes[15].documentType.code,
                  this.educationalDocs[3]
                );
                formData.append(
                  this.documentTypes[16].documentType.code,
                  this.educationalDocs[4]
                );
              }
              formData.append(
                this.documentTypes[23].documentType.code,
                this.payroll
              );
              formData.append(
                this.documentTypes[10].documentType.code,
                this.transcript
              );
              formData.append(
                this.documentTypes[7].documentType.code,
                this.englishLanguage
              );
              formData.append(
                this.documentTypes[19].documentType.code,
                this.letterFromOrg
              );
              formData.append(
                this.documentTypes[22].documentType.code,
                this.professionalLicense
              );
              formData.append(
                this.documentTypes[21].documentType.code,
                this.renewedLicense
              );
              formData.append(
                this.documentTypes[20].documentType.code,
                this.letterOrg
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
        formData.append(this.documentTypes[0].documentType.code, this.passport);
        formData.append(
          this.documentTypes[2].documentType.code,
          this.healthExamCert
        );
        if (this.professionalDoc != undefined) {
          formData.append(
            this.documentTypes[8].documentType.code,
            this.professionalDoc[0]
          );

          formData.append(
            this.documentTypes[9].documentType.code,
            this.professionalDoc[1]
          );
          formData.append(
            this.documentTypes[10].documentType.code,
            this.professionalDoc[2]
          );
        }
        formData.append(
          this.documentTypes[5].documentType.code,
          this.workExperience
        );
        formData.append(this.documentTypes[4].documentType.code, this.cpd);
        formData.append(this.documentTypes[18].documentTypeCode, this.herqa);
        formData.append(
          this.documentTypes[6].documentTypeCode,
          this.previousLicense
        );
        formData.append(
          this.documentTypes[17].documentTypeCode,
          this.supportLetter
        );
        formData.append(this.documentTypes[11].documentType.code, this.coc);
        formData.append(this.documentTypes[24].documentType.code, this.degree);
        formData.append(this.documentTypes[9].documentType.code, this.diploma);
        if (this.educationalDocs != undefined) {
          formData.append(
            this.documentTypes[12].documentType.code,
            this.educationalDocs[0]
          );
          formData.append(
            this.documentTypes[13].documentType.code,
            this.educationalDocs[1]
          );
          formData.append(
            this.documentTypes[14].documentType.code,
            this.educationalDocs[2]
          );
          formData.append(
            this.documentTypes[15].documentType.code,
            this.educationalDocs[3]
          );
          formData.append(
            this.documentTypes[16].documentType.code,
            this.educationalDocs[4]
          );
        }
        formData.append(this.documentTypes[23].documentType.code, this.payroll);
        formData.append(
          this.documentTypes[10].documentType.code,
          this.transcript
        );
        formData.append(
          this.documentTypes[7].documentType.code,
          this.englishLanguage
        );
        formData.append(
          this.documentTypes[19].documentType.code,
          this.letterFromOrg
        );
        formData.append(
          this.documentTypes[22].documentType.code,
          this.professionalLicense
        );
        formData.append(
          this.documentTypes[21].documentType.code,
          this.renewedLicense
        );
        formData.append(
          this.documentTypes[20].documentType.code,
          this.letterOrg
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
            professionalTypeId: this.professionalTypeID,
            paymentSlip: null,
            occupationTypeId: this.occupationTypeId,
            expertLevelId: this.expertLevelId,
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
