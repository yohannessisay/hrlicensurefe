import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import axios from "axios";
import {
  SET_UPLOAD_PROGRESS,
  SET_GENERAL_INFO,
  SET_TEMP_DOCS,
  SET_BUTTONS
} from "./mutation-types";

const userId = JSON.parse(localStorage.getItem("userId"));
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

  async addNewLicense(context, license) {
    try {
      const resp = await ApiService.post(baseUrl + "/newLicenses/add", license);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async editNewLicense(context, license) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/newLicenses/" + license.id,
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
        baseUrl + "/documentUploads/licenseDocument/" + documents.id,
        documents.document,
        config
      );
      return resp;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  async updateDocuments({ commit }, documents) {
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
        baseUrl + "/documentUploads/licenseDocument/" + documents.id,
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

  async getNewLicense() {
    try {
      const resp = await ApiService.get(
        baseUrl + "/newLicenses/user/" + userId
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getNewLicenseByUser(context, id) {
    try {
      const resp = await ApiService.get(baseUrl + "/newLicenses/user/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getNewLicenseApplication(context, id) {
    try {
      const url = baseUrl + "/newLicenses/" + id;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getDraft(context, id) {
    try {
      const resp = await ApiService.get(baseUrl + "/newLicenses/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async withdraw(context, payload) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/newLicenses/" + payload.licenseId,
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
        baseUrl + "/newLicenses/" + payload.licenseId,
        payload.draftData
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async updateDeclined(context, payload) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/newLicenses/" + payload.licenseId,
        payload.declinedData
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
      const resp = await ApiService.get(
        baseUrl + "/lookups/zones/" + Number(regionId)
      );
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getProfessionalTypes(context, professionDetail) {
    try {
      const resp = await ApiService.get(
        baseUrl +
          "/lookups/professionalTypes/" +
          professionDetail.departmentId +
          "/" +
          professionDetail.educationalLevelId
      );
      return resp;
    } catch (error) {
      return error;
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
  async searchProfessionalType(context, profTypes) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/newLicenses/search/professionalType",
        profTypes
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getCommonNLdocuments(context, params) {
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
  async getNLdocuments(context, params) {
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
  async getNewLicenseByUserId(context, userId) {
    try {
      const resp = await ApiService.get(
        baseUrl + "/newLicenses/user/getExpired/" + userId
      );
      return resp;
    } catch (error) {
      return error;
    }
  }
};
