import ApiService from "../../../services/api.service";
import {
  SET_PROFILE,
  ADD_PROFILE_LOADING,
  ADD_PROFILE_SUCCESS,
  ADD_PROFILE_ERROR,
} from "./mutation-types";
const url = "https://ihris.moh.gov.et/hrl/api/";
export default {
  async login({ commit }, profile) {
    commit(ADD_PROFILE_LOADING);
    try {
      const resp = await ApiService.post(url + "login", profile, {});
      window.localStorage.setItem("token", resp.data["token"]);
      window.localStorage.setItem("userId", resp.data.data["id"]);
      commit(SET_PROFILE, resp.data);
      commit(ADD_PROFILE_SUCCESS);
      return resp;
    } catch (error) {
      commit(ADD_PROFILE_ERROR);
    }
  },

  async signUp({ commit }, profile) {
    commit(ADD_PROFILE_LOADING);
    try {
      const resp = await ApiService.post(url + "users/add", profile, {});
      commit(ADD_PROFILE_SUCCESS);
      return resp;
    } catch (error) {
      commit(ADD_PROFILE_ERROR);
      return error;
    }
  },
};
