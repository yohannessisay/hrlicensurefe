import axios from "axios";
import ApiService from "../../../services/api.service";
import {
  SET_LICENSE,
  ADD_PROFILE_LOADING,
  ADD_PROFILE_SUCCESS,
  ADD_PROFILE_ERROR,
} from "./mutation-types";

export default {
  setLicense({ commit }, license) {
    commit(SET_LICENSE, license);
  },
  setActiveState({ commit }, state) {
    console.log(state);
    commit(SET_ACTIVE_STATE, state);
  },
  async newLicense({ commit }, license) {
    try {
      const rep = await axios.post(
        "https://ca9dee52bc55.ngrok.io/api/newLicenses/add",
        license
      );
    } catch (error) {
      const resp = error;
    }
    return resp;
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
      const resp = await axios.post(
        "https://ca9dee52bc55.ngrok.io/api/newLicenses/add",
        profile
      );
    } catch (error) {
      const resp = error;
    }
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
