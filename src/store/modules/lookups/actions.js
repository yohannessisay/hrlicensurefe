import ApiService from "../../../services/api.service";
import { SET_EDUCATION_LEVEL, SET_ALL_DOCUMENT_SPECS } from "./mutation-types";
import { baseUrl } from "../../../composables/baseURL";

export default {
  setEducationalLevel({ commit }, educationalLevel) {
    commit(SET_EDUCATION_LEVEL, educationalLevel);
  },
  async getApplicantType() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/applicantTypes");
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

  async addRegion(id, data) {
    try {
      const resp = await ApiService.post(baseUrl + "/lookups/addRegion", data);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async addWoreda(id, data) {
    try {
      const resp = await ApiService.post(baseUrl + "/lookups/addWoreda", data);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async addZone(id, data) {
    try {
      const resp = await ApiService.post(baseUrl + "/lookups/addZone", data);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getWoredas() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/woredas");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getZones() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/zones");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getGovernment({ commit }, id) {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/OccupationTypes");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getNativeLanguage({ commit }, id) {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/NativeLanguages");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getEducationalLevel({ commit }) {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/educationalLevels");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getAllDocumentSpecs({ commit }) {
    try {
      const resp = await ApiService.get(baseUrl + "/documentSpecs/");
      commit(SET_ALL_DOCUMENT_SPECS, resp.data.data);
      return resp;
    } catch (error) {
      return error;
    }
  },
};
