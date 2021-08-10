import ApiService from "../../../services/api.service";
import {
  SET_PROFILE,
  SET_PERSONAL_INFO,
  SET_ADDRESS,
  SET_PHOTO,
} from "./mutation-types";

const url = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api/";

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
      const resp = await ApiService.get(url + "lookups/userTypes");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getRegions() {
    try {
      const resp = await ApiService.get(url + "lookups/regions");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getWoredas(context, zoneId) {
    try {
      const baseUrl = url + "lookups/woredas/" + zoneId;
      const resp = await ApiService.get(baseUrl);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getZones(context, regionId) {
    try {
      const baseUrl = url + "lookups/zones/" + regionId;
      const resp = await ApiService.get(baseUrl);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getNationalities() {
    try {
      const baseUrl = url + "lookups/nationalities";
      const resp = await ApiService.get(baseUrl);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async addProfile({ commit }, profile) {
    try {
      const resp = await ApiService.post(url + "profiles/add", profile);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getProfiles() {
    try {
      const resp = await ApiService.get(url + "profiles/");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getProfileById({ commit }, id) {
    try {
      const resp = await ApiService.get(url + "profiles/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getProfileByUserId({ commit }, id) {
    try {
      const resp = await ApiService.get(url + "profiles/user/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getUserById({ commit }, id) {
    try {
      const resp = await ApiService.get(url + "users/" + id);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async resetPassword({ commit }, data) {
    data;
    try {
      const resp = await ApiService.post(
        baseUrl + "/resetpassword/" + data.id,
        data.pass
      );

      return resp;
    } catch (err) {
      return err;
    }
  },
  async sendEmail({ commit }, email) {
    try {
      const resp = await ApiService.post(url + "/forgotpassword", email);
      return resp;
    } catch (err) {
      return err;
    }
  },
};
