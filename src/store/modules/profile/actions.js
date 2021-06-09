import ApiService from "../../../services/api.service";
import {
  SET_PROFILE,
  SET_PERSONAL_INFO,
  SET_ADDRESS,
  SET_PHOTO,
} from "./mutation-types";

const baseUrl = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api";
export default {
  async setProfile({ commit }, profile) {
    try {
      const resp = await ApiService.get("/profiles/1", { profile });
      commit(SET_PROFILE, resp.data);
    } catch (error) {
      return error;
    }
  },
  setProfileInfo({ commit }, profileInfo) {
    commit(SET_PERSONAL_INFO, profileInfo);
  },

  setAddress({ commit }, address) {
    commit(SET_ADDRESS, address);
  },
  setPhoto({ commit }, photo) {
    commit(SET_PHOTO, photo);
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
      const url = baseUrl + "/lookups/zones/" + regionId;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async addProfile({ commit }, profile) {
    try {
      const resp = await ApiService.post(baseUrl + "/profiles/add", profile);
      return resp;
    } catch (error) {
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
    try {
      const resp = await ApiService.get(baseUrl + "/profiles/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getProfileByUserId({ commit }, id) {
    try {
      const resp = await ApiService.get(baseUrl + "/profiles/user/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getUserById({ commit }, id) {
    try {
      const resp = await ApiService.get(baseUrl + "/users/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },
};
