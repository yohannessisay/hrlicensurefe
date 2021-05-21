import ApiService from "../../../services/api.service";
import {
  SET_ADMIN,
  ADD_ADMIN_LOADING,
  ADD_ADMIN_SUCCESS,
  ADD_ADMIN_ERROR,
} from "./mutation-types";
const url = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api/";
export default {
  async login({ commit }, admin) {
    commit(ADD_ADMIN_LOADING);
    try {
      const resp = await ApiService.post(url + "admins/login", admin, {});
      window.localStorage.setItem("token", resp.data["token"]);
      window.localStorage.setItem("adminId", resp.data.data["id"]);
      window.localStorage.setItem("role", resp.data.data["role"]["code"]);
      console.log("super weird", localStorage.getItem("role"), "local saved",resp.data.data["role"]["code"])
      commit(SET_ADMIN, resp.data);
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
};
