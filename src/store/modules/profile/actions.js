import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";

import {
  SET_PROFILE,
  SET_PERSONAL_INFO,
  SET_ADDRESS,
  SET_PHOTO,
  SET_NATIONALITY,
  SET_MARITAL_STATUS,
} from "./mutation-types";

export default {
  async setProfile({ commit }, profile) {
    try {
      const resp = await ApiService.get("/profiles/1", {
        profile,
      });
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
  setNationality({ commit }, nationality) {
    commit(SET_NATIONALITY, nationality);
  },
  setMaritalStatus({ commit }, maritalStatus) {
    commit(SET_MARITAL_STATUS, maritalStatus);
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
  async checkHrlRegistration({ commit }, param) {
    try {
      const url = new URL(baseUrl + "/person/search");
      url.searchParams.append("empValue", param.employeeId);
      url.searchParams.append("fileValue", param.fileNumber);
      const resp = await ApiService.get(url);
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
  async getNationalities() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/nationalities");
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
  async uploadProfilePicture({ commit }, documents) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/profiles/profilePicture/" + documents.id,
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

  async updateProfilePicture({ commit }, documents) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/profiles/update/profilePicture/" + documents.id,
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
  async getProfiles() {
    try {
      const resp = await ApiService.get(baseUrl + "/profiles/");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async converProfilePicture({ commit }, path) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/profiles/convert/profilePicture",
        path
      );

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
      window.localStorage.setItem(
        "personalInfo",
        resp.data.data
          ? JSON.stringify({
              name: resp.data.data.name + " " + resp.data.data.fatherName,
              gender: resp.data.data.gender,
              profilePicturePath: resp.data.data.profilePicture
                ? resp.data.data.profilePicture.filePath
                : "",
            })
          : ""
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async changeUserProfile({ commit }, profileInfo) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/profiles/" + profileInfo[0],
        profileInfo[1]
      );
      return resp;
    } catch (err) {
      return err;
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
  async updateProfile({ commit }, profileInfo) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/profiles/" + profileInfo.id,
        profileInfo
      );
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
      const resp = await ApiService.post(baseUrl + "/forgotpassword", email);
      return resp;
    } catch (err) {
      return err;
    }
  },
  async adminForgotPassowrd({ commit }, email) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/resetAdminPassword",
        email
      );
      return resp;
    } catch (err) {
      return err;
    }
  },
};
