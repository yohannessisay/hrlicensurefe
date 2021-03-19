import ApiService from "../../../services/api.service";
import { SET_PROFILE, SET_AUTH } from "./mutation-types";
export default {
  async setContact({ commit }, profile) {
    commit(ADD_PROFILE_LOADING);
    try {
      const resp = await ApiService.post("/api/login", { profile });
      commit(SET_PROFILE, resp.data);
      commit(ADD_PROFILE_SUCCESS);
    } catch (error) {
      commit(ADD_PROFILE_ERROR);
    }
  },
  async signUp({commit} ,profile){
    commit(ADD_PROFILE_LOADING);
    try{
      const resp = await ApiService.post("/api/users/add", {profile});
      commit(ADD_PROFILE_SUCCESS);
    }catch(error){
      commit(ADD_PROFILE_ERROR);
    }
  },
  apiCall({ commit }, auth) {
    commit(SET_AUTH, auth);
  },
};
