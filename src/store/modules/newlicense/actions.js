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
      // const resp = await ApiService.post("/api/newLicenses/add", { license });
      commit(SET_LICENSE, license);
      commit(ADD_PROFILE_SUCCESS);
    } catch (error) {
      commit(ADD_PROFILE_ERROR);
    }
  },

  setActiveState({ commit }, state) {
    console.log(state);
    commit(SET_ACTIVE_STATE, state);
  },
  async getUserType() {
    try {
      const resp = await ApiService.get("/api/lookups/userTypes");
    } catch (error) {
      const resp = error;
    }
    return resp;
  },
  async getInstitutionType() {
    try {
      const resp = await ApiService.get("/api/lookups/institutionTypes");
    } catch (error) {
      const resp = error;
    }
    return resp;
  },
  async getInstitutions() {
    try {
      const resp = await ApiService.get("/api/lookups/institutions");
    } catch (error) {
      const resp = error;
    }
    return resp;
  },
  async getApplicantType() {
    try {
      const resp = await ApiService.get("/api/lookups/applicantTypes");
    } catch (error) {
      const resp = error;
    }
    return resp;
  },
};
