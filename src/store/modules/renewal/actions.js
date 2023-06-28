import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import axios from "axios";
import {
  SET_UPLOAD_PROGRESS,
  SET_BUTTONS,
  SET_TEMP_DOCS,
  SET_GENERAL_INFO
} from "./mutation-types";

const userId = +localStorage.getItem("userId");
function authHeaders(needsAuth) {
  const token = localStorage.getItem("token");
  return needsAuth
    ? {
        Authorization: token ? `Bearer ${token}` : ""
      }
    : {};
}
export default {
  setButtons({ commit }, buttons) {
    commit(SET_BUTTONS, buttons);
  },
  setTempDocs({ commit }, docs) {
    commit(SET_TEMP_DOCS, docs);
  },
  setUploadProgress({ commit }, uploadProgress) {
    commit(SET_UPLOAD_PROGRESS, uploadProgress);
  },

  setGeneralInfo({ commit }, generalInfo) {
    commit(SET_GENERAL_INFO, generalInfo);
  },
  async addRenewalLicense(context, license) {
    try {
      const resp = await ApiService.post(baseUrl + "/renewals/add", license);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async editRenewalLicense(context, license) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/renewals/" + license.id,
        license.data
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async uploadDocuments({ commit }, documents) {
    try {
      var config = {
        headers: {
          "Content-Type": "multipart/form-data",
          ...authHeaders(true)
        },
        onUploadProgress: function(progressEvent) {
          var progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          commit(SET_UPLOAD_PROGRESS, progress);
        }
      };

      const resp = await axios.post(
        baseUrl + "/documentUploads/renewalDocument/" + documents.id,
        documents.document,
        config
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async updateDocuments({commit}, documents) {
    try {
      var config = {
        headers: {
          "Content-Type": "multipart/form-data",
          ...authHeaders(true)
        },
        onUploadProgress: function(progressEvent) {
          var progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          commit(SET_UPLOAD_PROGRESS, progress);
        }
      };

      const resp = await axios.put(
        baseUrl + "/documentUploads/renewalDocument/" + documents.id,
        documents.document,
        config
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getApplicantType() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/applicantTypes");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getInstitution(context, value) {
    try {
      const resp = await ApiService.get(
        baseUrl + "/lookups/appTypeInstitutions/" + value
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getDepartmentType() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/departments");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getProfile(context, id) {
    try {
      const resp = await ApiService.get(baseUrl + "/profiles/user/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getApplicationStatuses() {
    try {
      const resp = await ApiService.get(baseUrl + "/applicationStatuses");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getApplicationCategories() {
    try {
      const resp = await ApiService.get(baseUrl + "/applicationCategories");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getDocumentSpecs(context, id) {
    try {
      const resp = await ApiService.get(baseUrl + "/documentSpecs/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getRenewalLicense() {
    try {
      const resp = await ApiService.get(baseUrl + "/renewals/user/" + userId);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getRenewalsByUser(context, id) {
    try {
      const resp = await ApiService.get(baseUrl + "/renewals/user/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getDraft(context, id) {
    try {
      const resp = await ApiService.get(baseUrl + "/renewals/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async withdraw(context, payload) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/renewals/" + payload.licenseId,
        payload.withdrawData
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async updateDraft(context, payload) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/renewals/" + payload.licenseId,
        payload.draftData
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getRegions() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/regions");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getWoredas(context, zoneId) {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/woredas/" + zoneId);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getZones(context, regionId) {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/zones/" + regionId);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getExpertLevel() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/expertLevels");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getProfessionalTypes(context, deptId, eduId) {
    try {
      const resp = await ApiService.get(
        baseUrl + "/lookups/professionalTypes/" + deptId + "/" + eduId
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async searchNewLicense(context, id) {
    try {
      const resp = await ApiService.get(
        baseUrl + "/newLicenses/search/applicant/" + id
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async searchProfessionalType(context, profTypes) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/renewals/search/professionalType",
        profTypes
      );
      return resp;
    } catch (error) {
      return error;
    }
  },

  async getCommonRNdocuments(context, params) {
    try {
      const resp = await ApiService.get(
        baseUrl + `/documentSpecs/common/${params[0]}/${params[1]}/true`
      );
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getRNdocuments(context, params) {
    try {
      const resp = await ApiService.get(
        baseUrl +
          `/documentSpecs/${params[0]}/${params[1]}/${params[2]}/${params[3]}`
      );
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getRenewalApplication(context, id) {
    try {
      const url = baseUrl + "/renewals/" + id;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  }
};
