import ApiService from "../../../services/api.service";
import { SET_REPORT } from "./mutation-types";
const url = "https://ihris.moh.gov.et/hrl/api/";
export default {
  setReport({ commit }, report) {
    commit(SET_REPORT, report);
  },
  async getReport({ commit }, AppId, RId, date) {
    try {
      const approved = await ApiService.get(url + "renewals/add");
      const declined = await ApiService.get(url + "renewals/add");
      const underReview = await ApiService.get(url + "renewals/add");

      return [approved, declined, underReview];
    } catch (error) {
      return error;
    }
  },
  async getNewLicenseReport({ commit }) {
    try {
      const resp = await ApiService.get(url + "newLicenseReport");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getRenewalReport({ commit }) {
    try {
      const resp = await ApiService.get(url + "renewalReport");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getVerificationReport({ commit }) {
    try {
      const resp = await ApiService.get(url + "verificationReport");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getGoodstandingReport({ commit }) {
    try {
      const resp = await ApiService.get(url + "goodstandingReport");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getRegions({ commit }) {
    try {
      const resp = await ApiService.get(url + "lookups/regions");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getapplicationStatuses({ commit }) {
    try {
      const resp = await ApiService.get(url + "applicationStatuses");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getProfessionalTypes({ commit }) {
    try {
      const resp = await ApiService.get(url + "lookups/professionalTypes");
      return resp;
    } catch (error) {
      return error;
    }
  },
};
