import ApiService from "../../../services/api.service";
import {
  SET_LICENSE,
  SET_RENEWAL_PHOTO,
  SET_RENEWAL_HEALTH_EXAM_CERT,
  SET_RENEWAL_LETTER,
  SET_RENEWAL_WORK_EXPERIENCE,
  SET_RENEWAL_SERVICE_FEE,
  SET_RENEWAL_CPD,
  SET_PREVIOUS_LICEENSE,
  SET_BUTTONS,
  SET_APPLICATION_ID,
  SET_DOCUMENT_SPEC,
  SET_DRAFT,
} from "./mutation-types";

const url = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api/";
const userId = localStorage.getItem("userId");

export default {
  setLicense({ commit }, license) {
    commit(SET_LICENSE, license);
  },
  setRenewalPhoto({ commit }, renewalPhoto) {
    commit(SET_RENEWAL_PHOTO, renewalPhoto);
  },

  setRenewalHealthExamCert({ commit }, renewalHealthExamCert) {
    commit(SET_RENEWAL_HEALTH_EXAM_CERT, renewalHealthExamCert);
  },
  setRenewalLetter({ commit }, renewalLetter) {
    commit(SET_RENEWAL_LETTER, renewalLetter);
  },
  setRenewalServiceFee({ commit }, renewalServiceFee) {
    commit(SET_RENEWAL_SERVICE_FEE, renewalServiceFee);
  },
  setRenewalCpd({ commit }, renewalCpd) {
    commit(SET_RENEWAL_CPD, renewalCpd);
  },
  setRenewalWorkExperience({ commit }, renewalWorkExperience) {
    commit(SET_RENEWAL_WORK_EXPERIENCE, renewalWorkExperience);
  },
  setPreviousLicense({ commit }, license) {
    commit(SET_PREVIOUS_LICEENSE, license);
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
  async addRenewalLicense({ commit }, license) {
    try {
      const resp = await ApiService.post(url + "renewals/add", license);
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
      const resp = await ApiService.get(url + "profiles/1");
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

  async getRenewalLicense({ commit }) {
    try {
      // const resp = await ApiService.get(url + "newLicenses/user/" + userId);
      const resp = await ApiService.get(
        "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api/renewals/user/2"
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getDraft({ commit }, id) {
    try {
      const resp = await ApiService.get(url + "renewals/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },

  async withdraw({ commit }, payload) {
    try {
      const resp = await ApiService.put(
        url + "renewals/" + payload.licenseId,
        payload.withdrawData
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
};
