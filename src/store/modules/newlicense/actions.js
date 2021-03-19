import ApiService from "../../../services/api.service";
import {
  SET_LICENSE,
  ADD_PROFILE_LOADING,
  ADD_PROFILE_SUCCESS,
  ADD_PROFILE_ERROR,
} from "./mutation-types";

export default {
  async setLicense({ commit }, license) {
    commit(ADD_PROFILE_LOADING);
    try {
      const resp = await ApiService.post("/api/newLicenses/add", { license });
      commit(SET_LICENSE, resp.data);
      commit(ADD_PROFILE_SUCCESS);
    } catch (error) {
      commit(ADD_PROFILE_ERROR);
    }
  },

  setActiveState({ commit }, state) {
    console.log(state);
    commit(SET_ACTIVE_STATE, state);
  },
};
