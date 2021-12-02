import ApiService from "../../../services/api.service";
import {
  SET_LICENSE,
  SET_PASSPORT,
  SET_HEALTH_EXAM_CERT,
  SET_SERVICE_FEE,
  SET_LANGUAGE,
  SET_PROFESSIONAL_DOCUMENT,
  SET_HERQA,
  SET_SUPPORT_LETTER,
  SET_COC,
  SET_EDUCATIONAL_DOCUMENT,
  SET_WORK_EXPERIENCE,
  SET_LETTER_FROM_ORG,
  SET_RENEWED_LICENSE,
  SET_PROFESSIONAL_LICENSE,
  SET_PAYROLL,
  SET_DEGREE,
  SET_TRANSCRIPT,
  SET_DIPLOMA,
  SET_PRO_CERTIFICATE,
  SET_PRO_DIPLOMA,
  SET_PRO_TRANSCRIPT,
  SET_EDU_EIGHTH,
  SET_EDU_TENTH,
  SET_EDU_TWELVETH,
  SET_EDU_TRANSCRIPT1,
  SET_EDU_TRANSCRIPT2,
  SET_MASTERS,
  SET_MASTERS_TRANSCRIPT,
  SET_PHD,
  SET_PHD_TRANSCRIPT,
  SET_BUTTONS,
  SET_APPLICATION_ID,
  SET_DOCUMENT_SPEC,
  SET_DRAFT,
  SET_DECLINED_FIELDS,
  SET_REMARK,
  SET_ACCEPTED_FIELDS,
} from "./mutation-types";

const url = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api/";
const userId = +localStorage.getItem("userId");

export default {
  setLicense({ commit }, license) {
    commit(SET_LICENSE, license);
  },
  setPassport({ commit }, passport) {
    commit(SET_PASSPORT, passport);
  },
  setHealthExamCert({ commit }, healthExamCert) {
    commit(SET_HEALTH_EXAM_CERT, healthExamCert);
  },
  setLanguage({ commit }, language) {
    commit(SET_LANGUAGE, language);
  },
  setProfessionalDoc({ commit }, professionalDoc) {
    commit(SET_PROFESSIONAL_DOCUMENT, professionalDoc);
  },
  setHerqa({ commit }, herqa) {
    commit(SET_HERQA, herqa);
  },
  setSupportLetter({ commit }, letter) {
    commit(SET_SUPPORT_LETTER, letter);
  },
  setCOC({ commit }, coc) {
    commit(SET_COC, coc);
  },
  setEducationalDocument({ commit }, educationalDoc) {
    commit(SET_EDUCATIONAL_DOCUMENT, educationalDoc);
  },
  setWorkExperience({ commit }, workExperience) {
    commit(SET_WORK_EXPERIENCE, workExperience);
  },
  setServiceFee({ commit }, serviceFee) {
    commit(SET_SERVICE_FEE, serviceFee);
  },
  setLetterfromOrg({ commit }, letter) {
    commit(SET_LETTER_FROM_ORG, letter);
  },
  setRenewedLicense({ commit }, license) {
    commit(SET_RENEWED_LICENSE, license);
  },
  setProfessionalLicense({ commit }, license) {
    commit(SET_PROFESSIONAL_LICENSE, license);
  },
  setPayroll({ commit }, payroll) {
    commit(SET_PAYROLL, payroll);
  },
  setDegree({ commit }, degree) {
    commit(SET_DEGREE, degree);
  },
  setTranscript({ commit }, transcript) {
    commit(SET_TRANSCRIPT, transcript);
  },
  setDiploma({ commit }, diploma) {
    commit(SET_DIPLOMA, diploma);
  },
  setProCertificate({ commit }, proCertificate) {
    commit(SET_PRO_CERTIFICATE, proCertificate);
  },
  setProDiploma({ commit }, proDiploma) {
    commit(SET_PRO_DIPLOMA, proDiploma);
  },
  setProTranscript({ commit }, proTranscript) {
    commit(SET_PRO_TRANSCRIPT, proTranscript);
  },
  setEduEighth({ commit }, eduEighth) {
    commit(SET_EDU_EIGHTH, eduEighth);
  },
  setEduTenth({ commit }, eduTenth) {
    commit(SET_EDU_TENTH, eduTenth);
  },
  setEduTwelveth({ commit }, eduTwelveth) {
    commit(SET_EDU_TWELVETH, eduTwelveth);
  },
  setEduTranscript1({ commit }, eduTranscript1) {
    commit(SET_EDU_TRANSCRIPT1, eduTranscript1);
  },
  setEduTranscript2({ commit }, eduTranscript2) {
    commit(SET_EDU_TRANSCRIPT2, eduTranscript2);
  },
  setMasters({ commit }, masters) {
    commit(SET_MASTERS, masters);
  },
  setMastersTranscript({ commit }, mastersTranscript) {
    commit(SET_MASTERS_TRANSCRIPT, mastersTranscript);
  },
  setPhd({ commit }, phd) {
    commit(SET_PHD, phd);
  },
  setPhdTranscript({ commit }, phdTranscript) {
    commit(SET_PHD_TRANSCRIPT, phdTranscript);
  },
  setButtons({ commit }, buttons) {
    commit(SET_BUTTONS, buttons);
  },
  setApplicationId({ commit }, id) {
    commit(SET_APPLICATION_ID, id);
  },
  setDocumentSpecs({ commit }, documentSpecs) {
    commit(SET_DOCUMENT_SPEC, documentSpecs);
  },
  setDraft({ commit }, draft) {
    commit(SET_DRAFT, draft);
  },
  async storeDeclinedFields({ commit }, fields) {
    commit(SET_DECLINED_FIELDS, fields);
  },
  async storeAcceptedFields({ commit }, fields) {
    commit(SET_ACCEPTED_FIELDS, fields);
  },
  async storeRemark({ commit }, remark) {
    commit(SET_REMARK, remark);
  },
  async addNewLicense({ commit }, license) {
    try {
      const resp = await ApiService.post(url + "newLicenses/add", license);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async editNewLicense({ commit }, license) {
    try {
      const resp = await ApiService.put(
        url + "newLicenses/" + license.data.data.id,
        license.data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async uploadDocuments({ commit }, documents) {
    try {
      const resp = await ApiService.post(
        url + "documentUploads/licenseDocument/" + documents.id,
        documents.document,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getApplicantType() {
    try {
      const resp = await ApiService.get(url + "lookups/applicantTypes");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getInstitution({ commit }, value) {
    try {
      const resp = await ApiService.get(
        url + "lookups/appTypeInstitutions/" + value
      );
      console.log(resp);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getDepartmentType() {
    try {
      const resp = await ApiService.get(url + "lookups/departments");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getProfile({ commit }, id) {
    try {
      const resp = await ApiService.get(url + "profiles/user/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getApplicationStatuses() {
    try {
      const resp = await ApiService.get(url + "applicationStatuses");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getApplicationCategories() {
    try {
      const resp = await ApiService.get(url + "applicationCategories");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getDocumentSpecs({ commit }, id) {
    try {
      const resp = await ApiService.get(url + "documentSpecs/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getNewLicense({ commit }) {
    try {
      const resp = await ApiService.get(url + "newLicenses/user/" + userId);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getDraft({ commit }, id) {
    try {
      const resp = await ApiService.get(url + "newLicenses/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async withdraw({ commit }, payload) {
    try {
      const resp = await ApiService.put(
        url + "newLicenses/" + payload.licenseId,
        payload.withdrawData
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async updateDraft({ commit }, payload) {
    try {
      const resp = await ApiService.put(
        url + "newLicenses/" + payload.licenseId,
        payload.draftData
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getRegions() {
    try {
      const resp = await ApiService.get(url + "lookups/regions");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getWoredas(context, zoneId) {
    try {
      const baseUrl = url + "lookups/woredas/" + zoneId;
      const resp = await ApiService.get(baseUrl);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getZones(context, regionId) {
    try {
      const baseUrl = url + "lookups/zones/" + regionId;
      const resp = await ApiService.get(baseUrl);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getProfessionalTypes(context, deptId) {
    try {
      const resp = await ApiService.get(
        url + "lookups/professionalTypes/" + deptId
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getExpertLevel() {
    try {
      const resp = await ApiService.get(url + "lookups/expertLevels");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async searchProfessionalType({ commit }, profTypes) {
    try {
      const resp = await ApiService.post(
        url + "newLicenses/search/professionalType",
        profTypes
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
};
