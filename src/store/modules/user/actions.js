import ApiService from "../../../services/api.service";
import axios from "axios";
import {
  SET_PROFILE,
  SET_AUTH,
  ADD_PROFILE_LOADING,
  ADD_PROFILE_SUCCESS,
  ADD_PROFILE_ERROR
} from "./mutation-types";
export default {
  async setContact({ commit }, profile) {
    commit(ADD_PROFILE_LOADING);
    try {
      const resp = await axios.post(
        "http://localhost:5000/api/login",
        profile,
        {}
      );
      console.log(resp.data);
      window.localStorage.setItem("token", resp.data["userToken"]);
      window.localStorage.setItem("userId", resp.data.data["id"]);
      commit(SET_PROFILE, resp.data);
      commit(ADD_PROFILE_SUCCESS);
    } catch (error) {
      commit(ADD_PROFILE_ERROR);
    }
  },

  async signUp({ commit }, profile) {
    commit(ADD_PROFILE_LOADING);
    try {
      const resp = await axios.post(
        "http://localhost:5000/api/users/add",
        profile,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
          }
        }
      );
      commit(ADD_PROFILE_SUCCESS);
    } catch (error) {
      commit(ADD_PROFILE_ERROR);
    }
  },
  apiCall({ commit }, auth) {
    commit(SET_AUTH, auth);
  }
};
