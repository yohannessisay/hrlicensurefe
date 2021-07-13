import ApiService from "../../../services/api.service";
import {
  SET_RENEWAL_UNASSIGNED,
  SET_RENEWAL_UNASSIGNED_SEARCHED,
  RENEWAL_REPORT,
} from "./mutation-types";
const baseUrl = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api";

export default {
  async getUnassignedRenewal({ commit }) {
    try {
      const url = baseUrl + "/renewals/status/5";
      const resp = await ApiService.get(url);
      commit(SET_RENEWAL_UNASSIGNED, resp.data.data);
    } catch (err) {
      return error;
    }
  },
  async getRenewalReport({ commit }) {
    try {
      const approved = await ApiService.get(baseUrl + "/renewals/status/5");
      const declined = await ApiService.get(baseUrl + "/renewals/status/6");
      const review = await ApiService.get(baseUrl + "/renewals/status/7");

                return [approved, declined, review];

    } catch (err) {
      return err;
    }
  },
  getUnassignedRenewalSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalUnassigned === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalUnassigned.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_UNASSIGNED_SEARCHED, searchedVal);
  },
};