<template>
  <div class="flex justify-center">
    <div>
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
          message="Educational Documents"
          class="mt-8"
        />

        <div class="flex flex-row justify-center px-8 py-4">
          <div>
            <h2
              class="flex justify-center"
              v-if="this.declinedFieldsCheck1"
              style="color: #e63636"
            >
              REJECTED
            </h2>
            <h2
              class="flex justify-center"
              v-if="this.acceptedFieldsCheck1"
              style="color: Green"
            >
              ACCEPTED
            </h2>
            <div class="ml-4" style="width: 250px">
              <span>
                <h2>{{ this.certificateFile1.name }}</h2>
                <h2>{{ this.certificate1Size }}</h2>
              </span>
              <span v-if="showCertificate1Upload">
                <label class="text-primary-700 text-lg"
                  >Upload 8th Grade Certificate:
                  <div class="dropbox">
                    <input
                      type="file"
                      id="certificateFile1"
                      ref="certificateFile1"
                      v-on:change="handleCertificate1Upload()"
                      style="margin-bottom: 15px !important"
                    />
                    <p>
                      Drag your file(s) here to begin<br />
                      or click to browse
                    </p>
                  </div>
                </label>
              </span>

              <picture v-if="!showCertificate1Upload && isCertificate1">
                <p>
                  <a href="javascript:void(0)" @click="resetCert1()"
                    >Upload again</a
                  >
                </p>
                <img
                  v-bind:src="certificate1Preview"
                  v-show="showCertificate1Preview"
                />
              </picture>

              <span v-if="!showCertificate1Upload && !isCertificate1">
                <img :src="certificate1Preview" alt="" class="preview" />
              </span>
            </div>
          </div>
          <div>
            <h2
              class="flex justify-center"
              v-if="this.declinedFieldsCheck2"
              style="color: #e63636"
            >
              REJECTED
            </h2>
            <h2
              class="flex justify-center"
              v-if="this.acceptedFieldsCheck2"
              style="color: Green"
            >
              ACCEPTED
            </h2>
            <div class="ml-4" style="width: 250px">
              <span>
                <h2>{{ this.certificateFile2.name }}</h2>
                <h2>{{ this.certificate2Size }}</h2>
              </span>
              <span v-if="showCertificate2Upload">
                <label class="text-primary-700 text-lg"
                  >Upload 10th Grade Certificate:
                  <div class="dropbox">
                    <input
                      type="file"
                      id="certificateFile2"
                      ref="certificateFile2"
                      v-on:change="handleCertificate2Upload()"
                      style="margin-bottom: 15px !important"
                    />
                    <p>
                      Drag your file(s) here to begin<br />
                      or click to browse
                    </p>
                  </div>
                </label>
              </span>

              <picture v-if="!showCertificate2Upload && isCertificate2">
                <p>
                  <a href="javascript:void(0)" @click="resetCert2()"
                    >Upload again</a
                  >
                </p>
                <img
                  v-bind:src="certificate2Preview"
                  v-show="showCertificate2Preview"
                />
              </picture>

              <span v-if="!showCertificate2Upload && !isCertificate2">
                <img :src="certificate2Preview" alt="" class="preview" />
              </span>
            </div>
          </div>
          <div>
            <h2
              class="flex justify-center"
              v-if="this.declinedFieldsCheck3"
              style="color: #e63636"
            >
              REJECTED
            </h2>
            <h2
              class="flex justify-center"
              v-if="this.acceptedFieldsCheck3"
              style="color: Green"
            >
              ACCEPTED
            </h2>

            <div class="ml-4" style="width: 250px">
              <span>
                <h2>{{ this.certificateFile3.name }}</h2>
                <h2>{{ this.certificate3Size }}</h2>
              </span>
              <span v-if="showCertificate3Upload">
                <label class="text-primary-700 text-lg"
                  >Upload 12th Grade Certificate:
                  <div class="dropbox">
                    <input
                      type="file"
                      id="certificateFile3"
                      ref="certificateFile3"
                      v-on:change="handleCertificate3Upload()"
                      style="margin-bottom: 15px !important"
                    />
                    <p>
                      Drag your file(s) here to begin<br />
                      or click to browse
                    </p>
                  </div>
                </label>
              </span>

              <picture v-if="!showCertificate3Upload && isCertificate3">
                <p>
                  <a href="javascript:void(0)" @click="resetCert3()"
                    >Upload again</a
                  >
                </p>
                <img
                  v-bind:src="certificate3Preview"
                  v-show="showCertificate3Preview"
                />
              </picture>

              <span v-if="!showCertificate3Upload && !isCertificate3">
                <img :src="certificate3Preview" alt="" class="preview" />
              </span>
            </div>
          </div>

          <div>
            <h2
              class="flex justify-center"
              v-if="this.declinedFieldsCheck4"
              style="color: #e63636"
            >
              REJECTED
            </h2>
            <h2
              class="flex justify-center"
              v-if="this.acceptedFieldsCheck4"
              style="color: Green"
            >
              ACCEPTED
            </h2>
            <div class="ml-4" style="width: 250px">
              <span>
                <h2>{{ this.certificateFile4.name }}</h2>
                <h2>{{ this.certificate4Size }}</h2>
              </span>
              <span v-if="showCertificate4Upload">
                <label class="text-primary-700 text-lg"
                  >Upload Transcript 9-10:
                  <div class="dropbox">
                    <input
                      type="file"
                      id="certificateFile4"
                      ref="certificateFile4"
                      v-on:change="handleCertificate4Upload()"
                      style="margin-bottom: 15px !important"
                    />
                    <p>
                      Drag your file(s) here to begin<br />
                      or click to browse
                    </p>
                  </div>
                </label>
              </span>

              <picture v-if="!showCertificate4Upload && isCertificate4">
                <p>
                  <a href="javascript:void(0)" @click="resetCert4()"
                    >Upload again</a
                  >
                </p>
                <img
                  v-bind:src="certificate4Preview"
                  v-show="showCertificate4Preview"
                />
              </picture>

              <span v-if="!showCertificate4Upload && !isCertificate4">
                <img :src="certificate4Preview" alt="" class="preview" />
              </span>
            </div>
          </div>
          <div>
            <h2
              class="flex justify-center"
              v-if="this.declinedFieldsCheck5"
              style="color: #e63636"
            >
              REJECTED
            </h2>
            <h2
              class="flex justify-center"
              v-if="this.acceptedFieldsCheck5"
              style="color: Green"
            >
              ACCEPTED
            </h2>
            <div class="ml-4" style="width: 250px">
              <span>
                <h2>{{ this.certificateFile5.name }}</h2>
                <h2>{{ this.certificate5Size }}</h2>
              </span>
              <span v-if="showCertificate5Upload">
                <label class="text-primary-700 text-lg"
                  >Upload Transcript 11-12:
                  <div class="dropbox">
                    <input
                      type="file"
                      id="certificateFile5"
                      ref="certificateFile5"
                      v-on:change="handleCertificate5Upload()"
                      style="margin-bottom: 15px !important"
                    />
                    <p>
                      Drag your file(s) here to begin<br />
                      or click to browse
                    </p>
                  </div>
                </label>
              </span>

              <picture v-if="!showCertificate5Upload && isCertificate5">
                <p>
                  <a href="javascript:void(0)" @click="resetCert5()"
                    >Upload again</a
                  >
                </p>
                <img
                  v-bind:src="certificate5Preview"
                  v-show="showCertificate5Preview"
                />
              </picture>

              <span v-if="!showCertificate5Upload && !isCertificate5">
                <img :src="certificate5Preview" alt="" class="preview" />
              </span>
            </div>
          </div>
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
      certificateFile1: "",
      showCertificate1Preview: false,
      certificate1Preview: "",
      showCertificate1Upload: true,
      isCertificate1: true,

      certificateFile2: "",
      showCertificate2Preview: false,
      certificate2Preview: "",
      showCertificate2Upload: true,
      isCertificate2: true,

      certificateFile3: "",
      showCertificate3Preview: false,
      certificate3Preview: "",
      showCertificate3Upload: true,
      isCertificate3: true,

      certificateFile4: "",
      showCertificate4Preview: false,
      certificate4Preview: "",
      showCertificate4Upload: true,
      isCertificate4: true,

      certificateFile5: "",
      showCertificate5Preview: false,
      certificate5Preview: "",
      showCertificate5Upload: true,
      isCertificate5: true,

      declinedFields: [],
      acceptedFields: [],
      remark: "",

      declinedFieldsCheck1: false,
      acceptedFieldsCheck1: false,

      declinedFieldsCheck2: false,
      acceptedFieldsCheck2: false,

      declinedFieldsCheck3: false,
      acceptedFieldsCheck3: false,

      declinedFieldsCheck4: false,
      acceptedFieldsCheck4: false,

      declinedFieldsCheck5: false,
      acceptedFieldsCheck5: false,

      buttons: [],
      documentSpec: [],
      licenseInfo: "",
      userId: +localStorage.getItem("userId"),

      passport: "",
      healthExamCert: "",
      workExperience: "",
      englishLanguage: "",
      herqa: "",
      professionalDoc: [],
      coc: "",
      supportLetter: "",
      letterfromOrg: "",
      renewedLicense: "",
      professionalLicense: "",
      payroll: "",
      diploma: "",
      transcript: "",
      degree: "",

      draftId: "",
      draftData: "",
      draftStatus: "",

      showFlash: false,
      showErrorFlash: false,
      showLoading: false,

      certificate1Size: "",
      certificate2Size: "",
      certificate3Size: "",
      certificate4Size: "",
      certificate5Size: "",
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
      getPayroll: "renewal/getPayroll",
      getDiploma: "newlicense/getDiploma",
      getTranscript: "newlicense/getTranscript",
      getDegree: "newlicense/getDegree",

      getProfessionalDoc: "newlicense/getProfessionalDocuments",
      getWorkExperience: "newlicense/getWorkExperience",
      getLetterfromOrg: "newlicense/getLetterfromOrg",
      getRenewedLicense: "newlicense/getRenewedLicense",
      getProfessionalLicense: "newlicense/getProfessionalLicense",
      getDraftData: "newlicense/getDraft",
    }),
  },
  created() {
    this.draftId = this.$route.params.id;
    this.draftStatus = this.$route.params.status;
    this.declinedFields = this.getDeclinedFields;
    this.remark = this.getRemarK;
    this.acceptedFields = this.acceptedFields;
    if (this.declinedFields != null && this.declinedFields.includes("EDEGC")) {
      this.declinedFieldsCheck1 = true;
    }
    if (this.acceptedFields != null && this.acceptedFields.includes("EDEGC")) {
      this.acceptedFieldsCheck1 = true;
    }
    if (this.declinedFields != null && this.declinedFields.includes("EDTGC")) {
      this.declinedFieldsCheck2 = true;
    }
    if (this.acceptedFields != null && this.acceptedFields.includes("EDTGC")) {
      this.acceptedFieldsCheck2 = true;
    }
    if (this.declinedFields != null && this.declinedFields.includes("EDTWGC")) {
      this.declinedFieldsCheck3 = true;
    }
    if (this.acceptedFields != null && this.acceptedFields.includes("EDTWGC")) {
      this.acceptedFieldsCheck3 = true;
    }
    if (this.declinedFields != null && this.declinedFields.includes("EDHT")) {
      this.declinedFieldsCheck4 = true;
    }
    if (this.acceptedFields != null && this.acceptedFields.includes("EDHT")) {
      this.acceptedFieldsCheck4 = true;
    }
    if (this.declinedFields != null && this.declinedFields.includes("EDPT")) {
      this.declinedFieldsCheck5 = true;
    }
    if (this.acceptedFields != null && this.acceptedFields.includes("EDPT")) {
      this.acceptedFieldsCheck5 = true;
    }
    if (this.draftId != undefined) {
      this.draftData = this.getDraftData;
      for (let i = 0; i < this.draftData.documents.length; i++) {
        if (this.draftData.documents[i].documentTypeCode == "EDEGC") {
          this.showCertificate1Upload = false;
          this.isCertificate1 = true;
          this.certificateFile1 = this.draftData.documents[i];
          this.showCertificate1Preview = true;
          this.certificate1Preview =
            this.basePath + this.draftData.documents[i].filePath;
        }
        if (this.draftData.documents[i].documentTypeCode == "EDTGC") {
          this.showCertificate2Upload = false;
          this.isCertificate2 = true;
          this.certificateFile2 = this.draftData.documents[i];
          this.showCertificate2Preview = true;
          this.certificate2Preview =
            this.basePath + this.draftData.documents[i].filePath;
        }
        if (this.draftData.documents[i].documentTypeCode == "EDTWGC") {
          this.showCertificate3Upload = false;
          this.isCertificate3 = true;
          this.certificateFile3 = this.draftData.documents[i];
          this.showCertificate3Preview = true;
          this.certificate3Preview =
            this.basePath + this.draftData.documents[i].filePath;
        }
        if (this.draftData.documents[i].documentTypeCode == "EDHT") {
          this.showCertificate4Upload = false;
          this.isCertificate4 = true;
          this.certificateFile4 = this.draftData.documents[i];
          this.showCertificate4Preview = true;
          this.certificate4Preview =
            this.basePath + this.draftData.documents[i].filePath;
        }
        if (this.draftData.documents[i].documentTypeCode == "EDPT") {
          this.showCertificate5Upload = false;
          this.isCertificate5 = true;
          this.certificateFile5 = this.draftData.documents[i];
          this.showCertificate5Preview = true;
          this.certificate5Preview =
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
    resetCert1() {
      // reset form to initial state
      this.showCertificate1Upload = true;
      this.showCertificate1Preview = false;
      this.certificateFile1 = "";
      this.certificate1Preview = "";
      this.isCertificate1 = true;
    },
    resetCert2() {
      this.showCertificate2Upload = true;
      this.showCertificate2Preview = false;
      this.certificateFile2 = "";
      this.certificate2Preview = "";
      this.isCertificate2 = true;
    },
    resetCert3() {
      this.showCertificate3Upload = true;
      this.showCertificate3Preview = false;
      this.certificateFile3 = "";
      this.certificate3Preview = "";
      this.isCertificate3 = true;
    },
    resetCert4() {
      this.showCertificate4Upload = true;
      this.showCertificate4Preview = false;
      this.certificateFile4 = "";
      this.certificate4Preview = "";
      this.isCertificate4 = true;
    },
    resetCert5() {
      this.showCertificate5Upload = true;
      this.showCertificate5Preview = false;
      this.certificateFile5 = "";
      this.certificate5Preview = "";
      this.isCertificate5 = true;
    },
    handleCertificate1Upload() {
      this.showCertificate1Upload = false;
      this.certificateFile1 = this.$refs.certificateFile1.files[0];
      let reader = new FileReader();
      let fileS = this.certificateFile1.size;
      if (fileS > 0 && fileS < 1000) {
        this.certificate1Size = fileS + " " + "B";
      } else if (fileS > 1000 && fileS < 1000000) {
        this.certificate1Size = fileS / 1000 + "kB";
      } else {
        this.certificate1Size = fileS / 1000000 + "MB";
      }

      reader.addEventListener(
        "load",
        function () {
          this.showCertificate1Preview = true;
          this.certificate1Preview = reader.result;
        }.bind(this),
        false
      );

      if (this.certificateFile1) {
        if (/\.(jpe?g|png|gif)$/i.test(this.certificateFile1.name)) {
          this.isCertificate1 = true;
          reader.readAsDataURL(this.certificateFile1);
        } else if (/\.(pdf)$/i.test(this.certificateFile1.name)) {
          this.isCertificate1 = false;
          reader.readAsText(this.certificateFile1);
        }
      }
    },

    handleCertificate2Upload() {
      this.showCertificate2Upload = false;
      this.certificateFile2 = this.$refs.certificateFile2.files[0];
      let reader = new FileReader();
      let fileS = this.certificateFile2.size;
      if (fileS > 0 && fileS < 1000) {
        this.certificate2Size = fileS + " " + "B";
      } else if (fileS > 1000 && fileS < 1000000) {
        this.certificate2Size = fileS / 1000 + "kB";
      } else {
        this.certificate2Size = fileS / 1000000 + "MB";
      }

      reader.addEventListener(
        "load",
        function () {
          this.showCertificate2Preview = true;
          this.certificate2Preview = reader.result;
        }.bind(this),
        false
      );

      if (this.certificateFile2) {
        if (/\.(jpe?g|png|gif)$/i.test(this.certificateFile2.name)) {
          this.isCertificate2 = true;
          reader.readAsDataURL(this.certificateFile2);
        } else if (/\.(pdf)$/i.test(this.certificateFile2.name)) {
          this.isCertificate2 = false;
          reader.readAsText(this.certificateFile2);
        }
      }
    },

    handleCertificate3Upload() {
      this.showCertificate3Upload = false;
      this.certificateFile3 = this.$refs.certificateFile3.files[0];
      let reader = new FileReader();
      let fileS = this.certificateFile3.size;
      if (fileS > 0 && fileS < 1000) {
        this.certificate3Size = fileS + " " + "B";
      } else if (fileS > 1000 && fileS < 1000000) {
        this.certificate3Size = fileS / 1000 + "kB";
      } else {
        this.certificate3Size = fileS / 1000000 + "MB";
      }
      reader.addEventListener(
        "load",
        function () {
          this.showCertificate3Preview = true;
          this.certificate3Preview = reader.result;
        }.bind(this),
        false
      );

      if (this.certificateFile3) {
        if (/\.(jpe?g|png|gif)$/i.test(this.certificateFile3.name)) {
          this.isCertificate3 = true;
          reader.readAsDataURL(this.certificateFile3);
        } else if (/\.(pdf)$/i.test(this.certificateFile3.name)) {
          this.isCertificate3 = false;
          reader.readAsText(this.certificateFile3);
        }
      }
    },

    handleCertificate4Upload() {
      this.showCertificate4Upload = false;
      this.certificateFile4 = this.$refs.certificateFile4.files[0];
      let reader = new FileReader();
      let fileS = this.certificateFile4.size;
      if (fileS > 0 && fileS < 1000) {
        this.certificate4Size = fileS + " " + "B";
      } else if (fileS > 1000 && fileS < 1000000) {
        this.certificate4Size = fileS / 1000 + "kB";
      } else {
        this.certificate4Size = fileS / 1000000 + "MB";
      }
      reader.addEventListener(
        "load",
        function () {
          this.showCertificate4Preview = true;
          this.certificate4Preview = reader.result;
        }.bind(this),
        false
      );
      if (this.certificateFile4) {
        if (/\.(jpe?g|png|gif)$/i.test(this.certificateFile4.name)) {
          this.isCertificate4 = true;
          reader.readAsDataURL(this.certificateFile4);
        } else if (/\.(pdf)$/i.test(this.certificateFile4.name)) {
          this.isCertificate4 = false;
          reader.readAsText(this.certificateFile4);
        }
      }
    },

    handleCertificate5Upload() {
      this.showCertificate5Upload = false;
      this.certificateFile5 = this.$refs.certificateFile5.files[0];
      let reader = new FileReader();
      let fileS = this.certificateFile5.size;
      if (fileS > 0 && fileS < 1000) {
        this.certificate5Size = fileS + " " + "B";
      } else if (fileS > 1000 && fileS < 1000000) {
        this.certificate5Size = fileS / 1000 + "kB";
      } else {
        this.certificate5Size = fileS / 1000000 + "MB";
      }
      reader.addEventListener(
        "load",
        function () {
          this.showCertificate5Preview = true;
          this.certificate5Preview = reader.result;
        }.bind(this),
        false
      );
      if (this.certificateFile5) {
        if (/\.(jpe?g|png|gif)$/i.test(this.certificateFile5.name)) {
          this.isCertificate5 = true;
          reader.readAsDataURL(this.certificateFile5);
        } else if (/\.(pdf)$/i.test(this.certificateFile5.name)) {
          this.isCertificate5 = false;
          reader.readAsText(this.certificateFile5);
        }
      }
    },
    submit() {
      this.$emit("changeActiveState");
      let file = [
        this.certificateFile1,
        this.certificateFile2,
        this.certificateFile3,
        this.certificateFile4,
        this.certificateFile5,
      ];

      this.$store.dispatch("newlicense/setEducationalDocument", file);
    },
    draft(action) {
      this.showLoading = true;
      if (this.draftId) {
        if (
          this.certificateFile1 ||
          this.certificateFile2 ||
          this.certificateFile3 ||
          this.certificateFile4 ||
          this.certificateFile5
        ) {
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
              this.documentSpec[7].documentType.code,
              this.diploma
            );

            formData.append(
              this.documentSpec[8].documentType.code,
              this.transcript
            );
            formData.append(
              this.documentSpec[21].documentType.code,
              this.degree
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
            formData.append(
              this.documentSpec[10].documentType.code,
              this.certificateFile1
            );
            formData.append(
              this.documentSpec[11].documentType.code,
              this.certificateFile2
            );
            formData.append(
              this.documentSpec[12].documentType.code,
              this.certificateFile3
            );
            formData.append(
              this.documentSpec[13].documentType.code,
              this.certificateFile4
            );
            formData.append(
              this.documentSpec[14].documentType.code,
              this.certificateFile5
            );

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
#main {
  width: auto;
}
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
