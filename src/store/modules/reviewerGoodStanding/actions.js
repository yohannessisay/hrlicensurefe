import ApiService from "../../../services/api.service";
import {
  SET_GOOD_STANDING_UNASSIGNED,
  SET_GOOD_STANDING_UNASSIGNED_SEARCHED,
  GOOD_STANDING_REPORT,
} from "./mutation-types";
const baseUrl = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api";

export default {
  async getUnassignedGoodStanding({ commit }) {
    try {
      const url = baseUrl + "/goodStandings/status/5";
      const resp = await ApiService.get(url);
      commit(SET_GOOD_STANDING_UNASSIGNED, resp.data.data);
    } catch (err) {
      return error;
    }
  },
  async getGoodstandingReport({ commit }) {
    try {
      const approved = await ApiService.get(
        baseUrl + "/goodStandings/status/5"
      );
      const declined = await ApiService.get(
        baseUrl + "/goodStandings/status/6"
      );
      const review = await ApiService.get(baseUrl + "/goodStandings/status/7");
    
   return [approved,declined,review];
    } catch (err) {
      return err;
    }
  },

  getUnassignedGoodStandingSearched({ commit, getters }, searchKey) {
    if (getters.getGoodStandingUnassigned === undefined) {
      return;
    }
    const searchedVal = getters.getGoodStandingUnassigned.filter(function(e) {
      return e.goodStandingCode === undefined
        ? ""
        : e.goodStandingCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_GOOD_STANDING_UNASSIGNED_SEARCHED, searchedVal);
  },
};
