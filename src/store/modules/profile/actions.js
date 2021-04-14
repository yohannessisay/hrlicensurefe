import ApiService from "../../../services/api.service";
import {
  SET_PROFILE,
  SET_PERSONAL_INFO,
  SET_ADDRESS,
  SET_CONTACT,
  SET_API_CALL,
  ADD_PROFILE_LOADING,
  ADD_PROFILE_SUCCESS,
  ADD_PROFILE_ERROR
} from "./mutation-types";

const baseUrl = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api";

export default {
  async setProfile({ commit }, profile) {
    commit(ADD_PROFILE_LOADING);
    try {
      const resp = await ApiService.get("/profiles/1", { profile });
      commit(SET_PROFILE, resp.data);
      commit(ADD_PROFILE_SUCCESS);
    } catch (error) {
      commit(ADD_PROFILE_ERROR);
    }
  },
  setProfileInfo({ commit }, profileInfo) {
    commit(SET_PERSONAL_INFO, profileInfo);
  },

  setAddress({ commit }, address) {
    commit(SET_ADDRESS, address);
  },

  setContact({ commit }, contact) {
    commit(SET_CONTACT, contact);
  },

  apiCall({ commit }, api) {
    commit(SET_API_CALL, api);
  },
  async getUserTypes() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/userTypes");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getExpertLevels() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/expertLevels");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getHealthOffice() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/healthOffices");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getMaritalStatus() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/maritalStatuses");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
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
      console.log(zoneId);
      const url = baseUrl + "/lookups/woredas/" + zoneId;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getZones(context, regionId) {
    try {
      console.log(regionId);
      const url = baseUrl + "/lookups/zones/" + regionId;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async addProfile({ commit }, profile) {
    commit(ADD_PROFILE_LOADING);
    try {
      const resp = await ApiService.post(
        baseUrl + "/profiles/add",
        profile
      );
      commit(ADD_PROFILE_SUCCESS);
      return resp;
    } catch (error) {
      commit(ADD_PROFILE_ERROR);
      return error;
    }
  },
  async getProfiles() {
    try {
      const resp = await ApiService.get(baseUrl + "/profiles/");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getProfileById({ commit }, id) {
    commit(ADD_PROFILE_LOADING);
    try {
      const resp = await ApiService.get(baseUrl + "/profiles/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  }
};
