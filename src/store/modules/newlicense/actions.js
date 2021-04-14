import ApiService from "../../../services/api.service";
import {
  SET_LICENSE,
  SET_PHOTO,
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
  SET_BUTTONS,
  SET_APPLICATION_ID,
  SET_DOCUMENT_SPEC,
  SET_DRAFT,
  ADD_PROFILE_LOADING,
  ADD_PROFILE_SUCCESS,
  ADD_PROFILE_ERROR,
} from "./mutation-types";

const url = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api/";
const userId = localStorage.getItem('userId');

export default {
  setLicense({ commit }, license) {
    commit(SET_LICENSE, license);
  },
  setPhoto({ commit }, photo) {
    commit(SET_PHOTO, photo);
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
  setButtons({ commit }, buttons) {
    commit(SET_BUTTONS, buttons);
  },
  setApplicationId({ commit }, id) {
    commit(SET_APPLICATION_ID, id);
  },
  setDocumentSpecs({ commit }, documentSpecs) {
    commit(SET_DOCUMENT_SPEC, documentSpecs);
  },
  setDraft({commit}, draft){
    commit(SET_DRAFT, draft);
  },
  async addNewLicense({ commit }, license) {
    try {
      const resp = await ApiService.post(url + "newLicenses/add", license);
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
  async getInstitution() {
    try {
      const resp = await ApiService.get(url + "lookups/institutions");
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
  async getProfile(id) {
    try {
      const resp = await ApiService.get(url + "profiles/" + userId);
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
      const resp = await ApiService.get(url + "newLicenses/user/2");
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

};
