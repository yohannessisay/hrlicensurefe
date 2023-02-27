import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import {
  SET_ADMIN,
  ADD_ADMIN_LOADING,
  ADD_ADMIN_SUCCESS,
  ADD_ADMIN_ERROR,
  SET_APPLICATION_STATUSES,
} from "./mutation-types";

export default {
  async login({ commit }, admin) {
    commit(ADD_ADMIN_LOADING);
    try {
      const resp = await ApiService.post(baseUrl + "/admins/login", admin, {});
      window.localStorage.setItem("token", resp.data["token"]);
      window.localStorage.setItem("adminId", resp.data.data["id"]);
      window.localStorage.setItem("role", resp.data.data["role"]["code"]);
      window.localStorage.setItem("adminEmail", resp.data.data["email"]);
      window.localStorage.setItem(
        "allAdminData",
        JSON.stringify(resp.data.data)
      );

      commit(SET_ADMIN, resp.data.data);
      commit(ADD_ADMIN_SUCCESS);
      return resp;
    } catch (error) {
      commit(ADD_ADMIN_ERROR);
    }
  },

  logout({ commit }) {
    commit(SET_ADMIN, undefined);
  },
  async getApplicationStatus({ commit }) {
    try {
      const AppStatuses = await ApiService.get(
        baseUrl + "/applicationStatuses"
      );
      commit(SET_APPLICATION_STATUSES, AppStatuses.data.data);
    } catch (error) {
      console.log(error);
    }
  },
  async getRole({ commit }) {
    // commit(ADD_ADMIN_LOADING);
    try {
      const resp = await ApiService.get(baseUrl + "/roles");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async registerAdmin({ commit }, admin) {
    commit(ADD_ADMIN_LOADING);
    try {
      const resp = await ApiService.post(
        baseUrl + "/admins/register",
        admin,
        {}
      );
      commit(ADD_ADMIN_SUCCESS);
      return resp;
    } catch (error) {
      commit(ADD_ADMIN_ERROR);
      return error;
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
  async getRegions() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/regions");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async changePassword({ commit }, newPassword) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/admins/changePassword",
        newPassword
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getAdmins() {
    try {
      const resp = await ApiService.get(baseUrl + "/admins/all");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getAllAdmins(id, parameters) {
    try {
      let url =
        baseUrl +
        `/admins/allAdmins?page=${parameters[0]}&size=${parameters[1]}&value=${
          parameters[2] ? parameters[2] : ""
        }&expertLevel=${
          parameters[3] && parameters[3] != "all" ? parameters[3] : ""
        }`;
      const resp = await ApiService.get(url);
      return resp.data.data;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getAdminById(context, adminId) {
    try {
      const resp = await ApiService.get(baseUrl + "/admins/" + adminId);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async updateAdmin({ commit }, data) {
    try {
      const resp = await ApiService.put(baseUrl + `/admins/${data.id}`, data);
      return resp;
    } catch (error) {
      return error;
    }
  },
};
