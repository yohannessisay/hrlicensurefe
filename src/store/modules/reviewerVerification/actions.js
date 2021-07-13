import ApiService from "../../../services/api.service";
import {
  SET_VERIFICATION_UNASSIGNED,
  SET_VERIFICATION_UNASSIGNED_SEARCHED,
  VERIFICATION_REPORT
} from "./mutation-types";
const baseUrl = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api";

export default {
  async getUnassignedVerification({ commit }) {
    try {
      const url = baseUrl + "/verifications/status/5";
      const resp = await ApiService.get(url);
      commit(SET_VERIFICATION_UNASSIGNED, resp.data.data);
    } catch (err) {
      return error;
    }
  },
  async getVerificationReport({ commit }) {
    try {
      const approved = await ApiService.get(
        baseUrl + "/verifications/status/5"
      );
      const declined = await ApiService.get(
        baseUrl + "/verifications/status/6"
      );
      const review = await ApiService.get(baseUrl + "/verifications/status/7");
 return [approved, declined, review];     
    } catch (err) {
      return err;
    }
  },
  getUnassignedVerificationSearched({ commit, getters }, searchKey) {
    if (getters.getVerificationUnassigned === undefined) {
      return;
    }
    const searchedVal = getters.getVerificationUnassigned.filter(function(e) {
      return e.verificationCode === undefined
        ? ""
        : e.verificationCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_VERIFICATION_UNASSIGNED_SEARCHED, searchedVal);
  },
};
