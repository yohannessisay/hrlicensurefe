import ApiService from "../../../services/api.service";
import {
  SET_ADMIN,
  ADD_ADMIN_LOADING,
  ADD_ADMIN_SUCCESS,
  ADD_ADMIN_ERROR,
} from "./mutation-types";
const url = "https://ihris.moh.gov.et/hrl/api/";
export default {
  async login({ commit }, admin) {
    commit(ADD_ADMIN_LOADING);
    try {
      const resp = await ApiService.post(url + "admins/login", admin, {});
      console.log("response is ", resp.data.data)
      window.localStorage.setItem("token", resp.data["token"]);
      window.localStorage.setItem("adminId", resp.data.data["id"]);
      window.localStorage.setItem("role", resp.data.data["role"]["code"]);
      window.localStorage.setItem("adminEmail", resp.data.data["email"]);
      window.localStorage.setItem("allAdminData", JSON.stringify(resp.data.data))

      console.log("is first time", JSON.parse(localStorage.getItem("allAdminData")).isFirstTime)
      // window.localStorage.setItem("role", "SA");
      commit(SET_ADMIN, resp.data.data);
      commit(ADD_ADMIN_SUCCESS);
      return resp;
    } catch (error) {
      commit(ADD_ADMIN_ERROR);
    }
  },
  async getRole({ commit }) {
    commit(ADD_ADMIN_LOADING);
    try {
      const resp = await ApiService.get(url + "roles");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async registerAdmin({ commit }, admin) {
    commit(ADD_ADMIN_LOADING);
    try {
      const resp = await ApiService.post(url + "admins/register", admin, {});
      commit(ADD_ADMIN_SUCCESS);
      return resp;
    } catch (error) {
      commit(ADD_ADMIN_ERROR);
      return error;
    }
  },
  async changePassword({ commit }, newPassword) {
    try {
      const resp = await ApiService.post(url+"admins/changePassword", newPassword)
      // console.log(adminId);
      return resp;
    } catch(error) {
      return error;
    }
  }
};
