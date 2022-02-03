import ApiService from "../../../services/api.service";
import { SET_EDUCATION_LEVEL } from "./mutation-types";
const url = "https://ihris.moh.gov.et/hrl/api/";
export default {
  setEducationalLevel({ commit }, educationalLevel) {
    commit(SET_EDUCATION_LEVEL, educationalLevel);
  },
  async getApplicantType() {
    try {
      const resp = await ApiService.get(url + "lookups/applicantTypes");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getRegions() {
    try {
      const resp = await ApiService.get(url + "lookups/regions");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getGovernment({ commit }, id) {
    try {
      const resp = await ApiService.get(url + "lookups/OccupationTypes");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getNativeLanguage({ commit }, id) {
    try {
      const resp = await ApiService.get(url + "lookups/NativeLanguages");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getEducationalLevel({ commit }) {
    try {
      const resp = await ApiService.get(url + "lookups/educationalLevels");
      return resp;
    } catch (error) {
      return error;
    }
  },
};
