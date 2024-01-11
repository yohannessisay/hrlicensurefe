import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import axios from "axios";
import {
  SET_UPLOAD_PROGRESS,
  SET_GENERAL_INFO,
  SET_TEMP_DOCS,
  SET_BUTTONS
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
  setTempDocs({ commit }, docs) {
    commit(SET_TEMP_DOCS, docs);
  },
  setButtons({ commit }, buttons) {
    commit(SET_BUTTONS, buttons);
  },
  setUploadProgress({ commit }, uploadProgress) {
    commit(SET_UPLOAD_PROGRESS, uploadProgress);
  },

  setGeneralInfo({ commit }, generalInfo) {
    commit(SET_GENERAL_INFO, generalInfo);
  },
  async addGoodstandingLicense(context, license) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/goodStandings/add",
        license
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async editGoodstandingLicense(context, license) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/goodStandings/" + license.data.id,
        license
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
        baseUrl + "/documentUploads/goodStandingDocument/" + documents.id,
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
        baseUrl + "/documentUploads/goodStandingDocument/" + documents.id,
        documents.document,
        config
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async updateDraft(context, payload) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/goodStandings/" + payload.licenseId,
        payload.draftData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async updateDeclined(context, payload) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/goodStandings/" + payload.licenseId,
        payload.declinedData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
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
  async getInstitution() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/institutions");
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
  async getApplicantTitle() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/ApplicantTitles");
      return resp;
    } catch (error) {
      return error;
    }
  },

  async getGoodStandingLicense() {
    try {
      const resp = await ApiService.get(
        baseUrl + "/goodStandings/user/" + userId
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getGoodStandingLicenseById(context, id) {
    try {
      const resp = await ApiService.get(baseUrl + "/goodStandings/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getDraft(context, id) {
    try {
      const resp = await ApiService.get(baseUrl + "/goodStandings/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },

  async withdraw(context, payload) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/goodStandings/" + payload.licenseId,
        payload.withdrawData
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
  async getApplicantPosition() {
    try {
      const resp = await ApiService.get(
        baseUrl + "/lookups/applicantPositions"
      );
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getCommonGSdocuments(context, docsParam) {
    try {
      const resp = await ApiService.get(
        baseUrl + `/documentSpecs/common/${docsParam[0]}/${docsParam[1]}/true`
      );
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getGSdocuments(context, appCategory) {
    try {
      const resp = await ApiService.get(
        baseUrl + `/documentSpecs/${appCategory}`
      );
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  }
};
