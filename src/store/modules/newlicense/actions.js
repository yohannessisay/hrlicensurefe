import axios from "axios";
import { getParsedCommandLineOfConfigFile } from "typescript";
import ApiService from "../../../services/api.service";
import {
  SET_LICENSE,
  SET_PHOTO,
  SET_PASSPORT,
  SET_HEALTH_EXAM_CERT,
  SET_DOCS,
  SET_LANGUAGE,
  SET_PROFESSIONAL_DOCUMENT,
  SET_HERQA,
  SET_SUPPORT_LETTER,
  SET_COC,
  SET_EDUCATIONAL_DOCUMENT,
  SET_WORK_EXPERIENCE,
  ADD_PROFILE_LOADING,
  ADD_PROFILE_SUCCESS,
  ADD_PROFILE_ERROR,
} from "./mutation-types";

const url = "http://49f72b2f2bdd.ngrok.io/api/";

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
  setDocs({ commit }, docs) {
    commit(SET_DOCS, docs);
  },
  async addNewLicense({ commit }, license) {
    try {
      const resp = await ApiService.post(url + "newLicenses/add", license);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async uploadDocuments(documents) {
    try {
      const resp = await ApiService.post(
        url + "newLicense/documentUploads",
        documents,
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
  async getInstitutionType() {
    try {
      const resp = await ApiService.get(url + "lookups/institutionTypes");
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
      const resp = await ApiService.get(url + "/profiles/2");
      // const resp = await ApiService.get(url + "/profiles/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },
};
