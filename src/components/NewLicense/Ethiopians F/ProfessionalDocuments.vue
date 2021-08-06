<template>
  <div class="flex justify-center">
    <div class="bg-lightBlueB-200 w-screen h-screen max-w-full">
      <div
        class="
          flex flex-col
          pt-large
          w-full
          bg-white
          blue-box-shadow-light
          rounded
        "
      >
        <TitleWithIllustration
          illustration="User"
          message="Professional Documents"
          class="mt-8"
        />
        <div class="flex flex-row justify-center px-8 py-4">
          <div>
            <h2
              class="flex"
              v-if="this.declinedFieldsCheck1"
              style="color: #e63636"
            >
              REJECTED
            </h2>
            <h2
              class="flex"
              v-if="this.acceptedFieldsCheck1"
              style="color: Green"
            >
              ACCEPTED
            </h2>
            <div class="ml-4" style="width: 250px">
              <span>
                <h2>{{ this.photoFile.name }}</h2>
                <h2>{{ this.photoFileSize }}</h2>
              </span>
              <span v-if="showUpload">
                <label class="text-primary-700 text-lg"
                  >Professional Document:
                  <div class="dropbox">
                    <input
                      type="file"
                      id="photoFile"
                      ref="photoFile"
                      v-on:change="handleCertificateUpload()"
                      style="margin-bottom: 15px !important"
                      accept=".jpeg, .png, .gif, .jpg, .pdf, .webp, .tiff , .svg"
                    />
                    <p>
                      Drag your file(s) here to begin<br />
                      or click to browse
                    </p>
                  </div>
                </label>
              </span>

              <picture v-if="!showUpload && isImage">
                <p>
                  <a href="javascript:void(0)" @click="reset()">Upload again</a>
                </p>
                <img v-bind:src="filePreview" v-show="showPreview" />
              </picture>
              <!--  -->
              <div v-if="!showUpload && isPdf  ">
                <p>
                  <a href="javascript:void(0)" @click="reset()">Upload again</a>
                </p>
                <embed v-bind:src="filePreview" v-show="showPreview"  />
              </div>
              <span v-if="!showUpload && !isImage && !isPdf">
                <img :src="filePreview" alt="" class="preview" />
              </span>
            </div>
          </div>
          <div>
            <h2
              class="flex"
              v-if="this.declinedFieldsCheck2"
              style="color: #e63636"
            >
              REJECTED
            </h2>
            <h2
              class="flex"
              v-if="this.acceptedFieldsCheck2"
              style="color: Green"
            >
              ACCEPTED
            </h2>

            <div class="ml-4" style="width: 250px">
              <span>
                <h2>{{ this.diplomaFile.name }}</h2>
                <h2>{{ this.diplomaFileSize }}</h2>
              </span>
              <span v-if="showDiplomaUpload">
                <label class="text-primary-700 text-lg"
                  >Upload Diploma:
                  <div class="dropbox">
                    <input
                      type="file"
                      id="diplomaFile"
                      ref="diplomaFile"
                      v-on:change="handleDiplomaUpload()"
                      style="margin-bottom: 15px !important"
                      accept=".jpeg, .png, .gif, .jpg, .pdf, .webp, .tiff , .svg"
                    />
                    <p>
                      Drag your file(s) here to begin<br />
                      or click to browse
                    </p>
                  </div>
                </label>
              </span>

              <picture v-if="!showDiplomaUpload && isDiplomaImage">
                <p>
                  <a href="javascript:void(0)" @click="resetDiploma()"
                    >Upload again</a
                  >
                </p>
                <img v-bind:src="diplomaPreview" v-show="showDiplomaPreview" />
              </picture>
              <div v-if="!showDiplomaUpload && isUDPdf  ">
                <p>
                  <a href="javascript:void(0)" @click="resetDiploma()">Upload again</a>
                </p>
                <embed v-bind:src="diplomaPreview" v-show="showDiplomaPreview"  />
              </div>
              <span v-if="!showDiplomaUpload && !isDiplomaImage && !isUDPdf">
                <img :src="diplomaPreview" alt="" class="preview" />
              </span>
            </div>
          </div>
          <div>
            <h2
              class="flex"
              v-if="this.declinedFieldsCheck3"
              style="color: #e63636"
            >
              REJECTED
            </h2>
            <h2
              class="flex"
              v-if="this.acceptedFieldsCheck3"
              style="color: Green"
            >
              ACCEPTED
            </h2>
            <div class="ml-4" style="width: 250px">
              <span>
                <h2>{{ this.transcriptFile.name }}</h2>
                <h2>{{ this.transcriptFileSize }}</h2>
              </span>
              <span v-if="showTranscriptUpload">
                <label class="text-primary-700 text-lg"
                  >Upload Transcript:
                  <div class="dropbox">
                    <input
                      type="file"
                      id="transcriptFile"
                      ref="transcriptFile"
                      v-on:change="handleTranscriptUpload()"
                      style="margin-bottom: 15px !important"
                      accept=".jpeg, .png, .gif, .jpg, .pdf, .webp, .tiff , .svg"
                    />
                    <p>
                      Drag your file(s) here to begin<br />
                      or click to browse
                    </p>
                  </div>
                </label>
              </span>

              <picture v-if="!showTranscriptUpload && isTranscriptImage">
                <p>
                  <a href="javascript:void(0)" @click="resetTranscript()"
                    >Upload again</a
                  >
                </p>
                <img
                  v-bind:src="transcriptPreview"
                  v-show="showTranscriptPreview"
                />
              </picture>
                   <div v-if="!showTranscriptUpload && isUTPdf  ">
                <p>
                  <a href="javascript:void(0)" @click="resetTranscript()">Upload again</a>
                </p>
                <embed v-bind:src="diplomaPreview" v-show="showDiplomaPreview"  />
              </div>

              <span v-if="!showTranscriptUpload && !isTranscriptImage" && !isUTPdf>
                <img :src="transcriptPreview" alt="" class="preview" />
              </span>
            </div>
          </div>

          <!-- 
            <div class="ml-4" style="width:220px">
              <span v-if="showExperienceUpload">
                <label class="text-primary-700"
                  >Upload Work Experience:
                  <div class="dropbox">
                    <input
                      type="file"
                      id="experienceFile"
                      ref="experienceFile"
                      v-on:change="handleExperienceUpload()"
                      style="margin-bottom: 15px !important;"
                    />
                    <p>
                      Drag your file(s) here to begin<br />
                      or click to browse
                    </p>
                  </div>
                </label>
              </span>

              <picture v-if="!showExperienceUpload && isExperienceImage">
                <p>
                  <a href="javascript:void(0)" @click="resetExperience()"
                    >Upload again</a
                  >
                </p>
                <img
                  v-bind:src="experiencePreview"
                  v-show="showExperiencePreview"
                />
              </picture>

              <span v-if="!showExperienceUpload && !isExperienceImage">
                <img :src="experiencePreview" alt="" class="preview" />
              </span>

              <h6 style="margin-top: 15px !important;">
                Your photo should be passport size
              </h6>
            </div> -->
        </div>
        <div v-if="this.draftStatus == 'DRA' || !this.draftStatus">
          <div class="flex justify-center mt-4 mb-8">
            <button @click="submit">Next</button>
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
          <button @click="submit">Next</button>
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
          <button @click="submit">Next</button>
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
          <button @click="submit">Next</button>
          <button @click="draft(this.buttons[0].action)" variant="outline">
            {{ this.buttons[0]["name"] }}
          </button>
          <button @click="update(this.buttons[1].action)" variant="outline">
            {{ this.buttons[1]["name"] }}
          </button>
        </div>
        <div v-if="showLoading">
          <Spinner />
        </div>
      </div>
    </div>
  </div>
  <div class="mr-3xl" v-if="showFlash">
    <FlashMessage message="Operation Successful!" />
  </div>
  <div v-if="showErrorFlash">
    <ErrorFlashMessage message="Operation Failed!" />
  </div>
</template>

<script>
import TitleWithIllustration from "@/sharedComponents/TitleWithIllustration";
import { mapGetters, mapActions } from "vuex";
import FlashMessage from "@/sharedComponents/FlashMessage";
import ErrorFlashMessage from "@/sharedComponents/ErrorFlashMessage";
import Spinner from "@/sharedComponents/Spinner";

export default {
  components: {
    TitleWithIllustration,
    FlashMessage,
    ErrorFlashMessage,
    Spinner,
  },
  props: ["activeState"],
  data() {
    return {
      basePath: "https://hrlicensurebe.dev.k8s.sandboxaddis.com/",
      dataChanged: false,
      showFlash: false,
      showErrorFlash: false,
      photoFile: "",
      showPreview: false,
      filePreview: "",
      showUpload: true,
      isImage: true,
     isUTPdf:false,
      isUDPdf:false,
      diplomaFile: "",
      showDiplomaPreview: false,
      diplomaPreview: "",
      showDiplomaUpload: true,
      isDiplomaImage: true,

      transcriptFile: "",
      showTranscriptPreview: false,
      transcriptPreview: "",
      showTranscriptUpload: true,
      isTranscriptImage: true,

      photoFileSize: "",
      transcriptFileSize: "",
      diplomaFileSize: "",

      // experienceFile: "",
      // showExperiencePreview: false,
      // experiencePreview: "",
      // showExperienceUpload: true,
      // isExperienceImage: true,

      buttons: [],
      showButtons: false,
      documentSpec: [],
      licenseInfo: "",
      userId: +localStorage.getItem("userId"),
      passport: "",
      healthExamCert: "",
      workExperience: "",
      englishLanguage: "",
      professionalDoc: [],
      herqa: "",
      educationalDocs: [],
      coc: "",
      supportLetter: "",
      letterfromOrg: "",
      renewedLicense: "",
      professionalLicense: "",
      payroll: "",
      diploma: "",
      transcript: "",
      degree: "",

      declinedFields: [],
      acceptedFields: [],
      remark: "",

      declinedFieldsCheck1: false,
      acceptedFieldsCheck1: false,

      declinedFieldsCheck2: false,
      acceptedFieldsCheck2: false,

      declinedFieldsCheck3: false,
      acceptedFieldsCheck3: false,

      draftId: "",
      draftStatus: "",
      draftData: "",

      showFlash: false,
      showErrorFlash: false,
      showLoading: false,
    };
  },
  computed: {
    ...mapGetters({
      getPersonalDoc: "newlicense/getProfessionalDocuments",
      getButtons: "newlicense/getButtons",
      getLicense: "newlicense/getLicense",
      getDocumentSpec: "newlicense/getDocumentSpec",

      getPhoto: "newlicense/getPhoto",
      getPassport: "newlicense/getPassport",
      getHealthExamCert: "newlicense/getHealthExamCert",
      getEnglishLanguage: "newlicense/getEnglishLanguage",
      getHerqa: "newlicense/getHerqa",
      getSupportLetter: "newlicense/getSupportLetter",
      getCoc: "newlicense/getCoc",
      getEducationalDocuments: "newlicense/getEducationalDocuments",
      getWorkExperience: "newlicense/getWorkExperience",
      getLetterfromOrg: "newlicense/getLetterfromOrg",
      getRenewedLicense: "newlicense/getRenewedLicense",
      getPayroll: "renewal/getPayroll",
      getProfessionalLicense: "newlicense/getProfessionalLicense",
      getDiploma: "newlicense/getDiploma",
      getTranscript: "newlicense/getTranscript",
      getDegree: "newlicense/getDegree",

      getDraftData: "newlicense/getDraft",
      getDeclinedFields: "newlicense/getDeclinedFields",
      getAcceptedFields: "newlicense/getAcceptedFields",
      getRemarK: "newlicense/getRemark",
    }),
  },
  created() {
    this.draftId = this.$route.params.id;
    this.draftStatus = this.$route.params.status;
    this.declinedFields = this.getDeclinedFields;
    this.remark = this.getRemarK;
    this.acceptedFields = this.acceptedFields;

    if (this.declinedFields != null && this.declinedFields.includes("PDC")) {
      this.declinedFieldsCheck1 = true;
    }
    if (this.acceptedFields != null && this.acceptedFields.includes("PDC")) {
      this.acceptedFieldsCheck1 = true;
    }
    if (this.declinedFields != null && this.declinedFields.includes("PDD")) {
      this.declinedFieldsCheck2 = true;
    }
    if (this.acceptedFields != null && this.acceptedFields.includes("PDD")) {
      this.acceptedFieldsCheck2 = true;
    }
    if (this.declinedFields != null && this.declinedFields.includes("PDT")) {
      this.declinedFieldsCheck3 = true;
    }
    if (this.acceptedFields != null && this.acceptedFields.includes("PDT")) {
      this.acceptedFieldsCheck3 = true;
    }
    if (this.draftId != undefined) {
      this.draftData = this.getDraftData;
      for (let i = 0; i < this.draftData.documents.length; i++) {
        if (this.draftData.documents[i].documentTypeCode == "PDC") {
          this.showUpload = false;
         if(this.draftData.documents[i].fileName.split(".")[1]=="pdf")
            {
               this.isPdf=true;
            }
            else
            {
              this.isImage = true;
            }
          this.photoFile = this.draftData.documents[i];
          this.showPreview = true;
          this.filePreview =
            this.basePath + this.draftData.documents[i].filePath;
        }
        if (this.draftData.documents[i].documentTypeCode == "PDD") {
          this.showDiplomaUpload = false;
           if(this.draftData.documents[i].fileName.split(".")[1]=="pdf")
            {
               this.isUDPdf=true;
            }
            else
            {
              this.isDiplomaImage = true;
            }
          this.diplomaFile = this.draftData.documents[i];
          this.showDiplomaPreview = true;
          this.diplomaPreview =
            this.basePath + this.draftData.documents[i].filePath;
        }
        if (this.draftData.documents[i].documentTypeCode == "PDT") {
          this.showTranscriptUpload = false;
            if(this.draftData.documents[i].fileName.split(".")[1]=="pdf")
            {
               this.isUTPdf=true;
            }
            else
            {
                this.isTranscriptImage = true;
            }
          this.transcriptFile = this.draftData.documents[i];
          this.showTranscriptPreview = true;
          this.transcriptPreview =
            this.basePath + this.draftData.documents[i].filePath;
        }
      }
    }
    this.license = this.getLicense;
    this.buttons = this.getButtons;
    this.documentSpec = this.getDocumentSpec;

    this.passport = this.getPassport;
    this.healthExamCert = this.getHealthExamCert;
    this.englishLanguage = this.getEnglishLanguage;
    this.professionalDoc = this.getProfessionalDocuments;
    this.herqa = this.getHerqa;
    this.supportLetter = this.getSupportLetter;
    this.coc = this.getCoc;
    this.educationalDocs = this.getEducationalDocuments;
    this.workExperience = this.getWorkExperience;
    this.letterfromOrg = this.getLetterfromOrg;
    this.renewedLicense = this.getRenewedLicense;
    this.professionalLicense = this.getProfessionalLicense;
    this.payroll = this.getPayroll;
    this.diploma = this.getDiploma;
    this.transcript = this.getTranscript;
    this.degree = this.getDegree;
  },
  methods: {
    ...mapActions(["setProfessionalDoc"]),
    reset() {
      // reset form to initial state
      this.showUpload = true;
      this.showPreview = false;
      this.photoFile = "";
      this.filePreview = "";
      this.isImage = true;
      this.isPdf=false;
      this.photoFileSize="";
    },
    resetDiploma() {
      this.showDiplomaUpload = true;
      this.showDiplomaPreview = false;
      this.diplomaFile = "";
      this.diplomaPreview = "";
      this.isDiplomaImage = true;
       this.isUDPdf=false;
      this.diplomaFileSize="";
    },
    resetTranscript() {
      this.showTranscriptUpload = true;
      this.showTranscriptPreview = false;
      this.transcriptFile = "";
      this.transcriptPreview = "";
      this.isTranscriptImage = true;
           this.isUTPdf=false;
      this.transcriptFileSize=""
    },
    // resetExperience() {
    //   this.showExperienceUpload = true;
    //   this.showExperiencePreview = false;
    //   this.experienceFile = "";
    //   this.experiencePreview = "";
    //   this.isExperienceImage = true;
    // },
    handleCertificateUpload() {
      this.showUpload = false;
      this.photoFile = this.$refs.photoFile.files[0];
      let reader = new FileReader();

      let fileS = this.photoFile.size;
      if (fileS > 0 && fileS < 1000) {
        this.photoFileSize = fileS + " " + "B";
      } else if (fileS > 1000 && fileS < 1000000) {
        this.photoFileSize = fileS / 1000 + "kB";
      } else {
        this.photoFileSize = fileS / 1000000 + "MB";
      }
      reader.addEventListener(
        "load",
        function () {
          this.showPreview = true;
          this.filePreview = reader.result;
        }.bind(this),
        false
      );

      if (this.photoFile) {
        if (/\.(jpe?g|png|gif)$/i.test(this.photoFile.name)) {
          this.isImage = true;
          reader.readAsDataURL(this.photoFile);
        } else if (/\.(pdf)$/i.test(this.photoFile.name)) {
          this.isImage = false;
           this.isPdf=true;
          reader.readAsDataURL(this.photoFile);
        }
      }
    },
    handleDiplomaUpload() {
      this.showDiplomaUpload = false;
      this.diplomaFile = this.$refs.diplomaFile.files[0];
      let reader = new FileReader();

      let fileS = this.diplomaFile.size;
      if (fileS > 0 && fileS < 1000) {
        this.diplomaFileSize += "B";
      } else if (fileS > 1000 && fileS < 1000000) {
        this.diplomaFileSize = fileS / 1000 + "kB";
      } else {
        this.diplomaFileSize = fileS / 1000000 + "MB";
      }

      reader.addEventListener(
        "load",
        function () {
          this.showDiplomaPreview = true;
          this.diplomaPreview = reader.result;
        }.bind(this),
        false
      );

      if (this.diplomaFile) {
        if (/\.(jpe?g|png|gif)$/i.test(this.diplomaFile.name)) {
          this.isDiplomaImage = true;
          reader.readAsDataURL(this.diplomaFile);
        } else if (/\.(pdf)$/i.test(this.diplomaFile.name)) {
          this.isDiplomaImage = false;
           this.isUDPdf=true;
          reader.readAsDataURL(this.diplomaFile);
        }
      }
    },
    handleTranscriptUpload() {
      this.showTranscriptUpload = false;
      this.transcriptFile = this.$refs.transcriptFile.files[0];
      let reader = new FileReader();

      let fileS = this.transcriptFile.size;
      if (fileS > 0 && fileS < 1000) {
        this.transcriptFileSize += "B";
      } else if (fileS > 1000 && fileS < 1000000) {
        this.transcriptFileSize = fileS / 1000 + "kB";
      } else {
        this.transcriptFileSize = fileS / 1000000 + "MB";
      }

      reader.addEventListener(
        "load",
        function () {
          this.showTranscriptPreview = true;
          this.transcriptPreview = reader.result;
        }.bind(this),
        false
      );

      if (this.transcriptFile) {
        if (/\.(jpe?g|png|gif)$/i.test(this.transcriptFile.name)) {
          this.isTranscriptImage = true;
          reader.readAsDataURL(this.transcriptFile);
        } else if (/\.(pdf)$/i.test(this.transcriptFile.name)) {
          this.isTranscriptImage = false;
          this.isUTPdf=true;
          reader.readAsDataURL(this.transcriptFile);
        }
      }
    },
    // handleExperienceUpload() {
    //   this.showExperienceUpload = false;
    //   this.experienceFile = this.$refs.experienceFile.files[0];
    //   let reader = new FileReader();

    //   reader.addEventListener(
    //     "load",
    //     function() {
    //       this.showExperiencePreview = true;
    //       this.experiencePreview = reader.result;
    //     }.bind(this),
    //     false
    //   );
    //   if (this.experienceFile) {
    //     if (/\.(jpe?g|png|gif)$/i.test(this.experienceFile.name)) {
    //       this.isExperienceImage = true;
    //       reader.readAsDataURL(this.experienceFile);
    //     } else if (/\.(pdf)$/i.test(this.experienceFile.name)) {
    //       this.isExperienceImage = false;
    //       reader.readAsText(this.experienceFile);
    //     }
    //   }
    // },
    submit() {
      this.$emit("changeActiveState");
      let file = [this.photoFile, this.diplomaFile, this.transcriptFile];
      this.$store.dispatch("newlicense/setProfessionalDoc", file);
    },
    draft(action) {
      this.showLoading = true;
      if (this.draftId) {
        if (this.photoFile || this.diplomaFile || this.transcriptFile) {
          // modify the drafData before dispatching
        } else {
          let draftObj = {
            action: action,
            data: this.getDraftData,
          };
          let payload = {
            licenseId: this.getDraftData.id,
            draftData: draftObj,
          };
          this.$store
            .dispatch("newlicense/updateDraft", payload)
            .then((res) => {
              if (res.data.status == "Success") {
                this.showFlash = true;
                setTimeout(() => {
                  this.$router.push({ path: "/menu" });
                }, 1500);
                this.showLoading = false;
              } else {
                this.showErrorFlash = true;
              }
            });
        }
      } else {
        let license = {
          action: action,
          data: {
            applicantId: this.userId,
            applicantTypeId: this.license.applicantTypeId,
            education: {
              institutionId: this.license.education.departmentId,
              departmentId: this.license.education.institutionId,
            },
            residenceWoredaId: this.license.residenceWoredaId,
            professionalTypeId: this.licenseInfo.professionalTypeId,
          },
        };
        this.$store
          .dispatch("newlicense/addNewLicense", license)
          .then((res) => {
            let licenseId = res.data.data.id;
            let formData = new FormData();
            formData.append(
              this.documentSpec[1].documentType.code,
              this.passport
            );
            formData.append(
              this.documentSpec[2].documentType.code,
              this.healthExamCert
            );

            formData.append(
              this.documentSpec[4].documentType.code,
              this.workExperience
            );
            formData.append(
              this.documentSpec[5].documentType.code,
              this.englishLanguage
            );

            formData.append(
              this.documentSpec[6].documentType.code,
              this.photoFile
            );
            formData.append(
              this.documentSpec[7].documentType.code,
              this.diplomaFile
            );
            formData.append(
              this.documentSpec[8].documentType.code,
              this.transcriptFile
            );

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
            formData.append(
              this.documentSpec[16].documentType.code,
              this.herqa
            );
            formData.append(
              this.documentSpec[17].documentType.code,
              this.letterfromOrg
            );
            formData.append(
              this.documentSpec[18].documentType.code,
              this.renewedLicense
            );
            formData.append(
              this.documentSpec[19].documentType.code,
              this.professionalLicense
            );
            formData.append(
              this.documentSpec[20].documentType.code,
              this.payroll
            );
            let payload = { document: formData, id: licenseId };
            this.$store
              .dispatch("newlicense/uploadDocuments", payload)
              .then((res) => {
                if (res) {
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
      this.$store.dispatch("newlicense/withdraw", payload).then((res) => {
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
};
</script>
<style>
img {
  width: 250px;
  height: 250px;
  border-radius: 0%;
}
#photoFile #diplomaFile #transcriptFile #experienceFile {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
.withdraw {
  background-image: linear-gradient(to right, #d63232, #e63636) !important;
  color: white;
  border-color: tomato;
}
</style>
