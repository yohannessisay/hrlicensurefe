import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import axios from "axios";
import {
  SET_UPLOAD_PROGRESS,
  SET_GENERAL_INFO,
  SET_TEMP_DOCS,
  SET_BUTTONS
} from "./mutation-types";
 
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
  async addLostLicense(context, license) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/lostLicense/add",
        license
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async editLostLicense(context, license) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/lostLicenses/" + license.data.id,
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
        baseUrl + "/documentUploads/lostLicenseDocument/" + documents.id,
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
        baseUrl + "/documentUploads/lostLicenseDocument/" + documents.id,
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
        baseUrl + "/lostLicenses/" + payload.licenseId,
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
        baseUrl + "/lostLicenses/" + payload.licenseId,
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
  
 
  async getLostLicenseById(context, id) {
    try {
      const resp = await ApiService.get(baseUrl + "/lostLicenses/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },
 

  async withdraw(context, payload) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/lostLicenses/" + payload.licenseId,
        payload.withdrawData
      );
      return resp;
    } catch (error) {
      return error;
    }
  }, 
  async getLLdocuments(context, appCategory) {
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
