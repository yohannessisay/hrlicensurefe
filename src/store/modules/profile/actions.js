import ApiService from "../../../services/api.service";
import {
  SET_PROFILE,
  SET_PERSONAL_INFO,
  SET_ADDRESS,
  SET_CONTACT,
  SET_API_CALL,
  ADD_PROFILE_LOADING,
  ADD_PROFILE_SUCCESS,
  ADD_PROFILE_ERROR
} from "./mutation-types";

export default {
  async setProfile({ commit }, profile) {
    commit(ADD_PROFILE_LOADING);
    try {
      const resp = await ApiService.get("/profiles/1", { profile });
      commit(SET_PROFILE, resp.data);
      commit(ADD_PROFILE_SUCCESS);
    } catch (error) {
      commit(ADD_PROFILE_ERROR);
    }
  },

  setPersonalInfo({ commit }, personalInfo) {
    commit(SET_PERSONAL_INFO, personalInfo);
  },

  setAddress({ commit }, address) {
    commit(SET_ADDRESS, address);
  },

  setContact({ commit }, contact) {
    commit(SET_CONTACT, contact);
  },

  apiCall({ commit }, api) {
    commit(SET_API_CALL, api);
  }
};
