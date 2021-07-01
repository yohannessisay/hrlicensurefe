import ApiService from "../../../services/api.service";
import {
    SET_VERIFICATION_UNASSIGNED,
    SET_VERIFICATION_UNASSIGNED_SEARCHED,
} from "./mutation-types";
const baseUrl = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api";

export default {
    async getUnassignedVerification({ commit }) {
        try {
          const url = baseUrl + "/verifications/status/5"
          const resp = await ApiService.get(url);
          commit(SET_VERIFICATION_UNASSIGNED, resp.data.data)
        } catch(err) {
          return error;
        }
      },

      getUnassignedVerificationSearched({ commit, getters }, searchKey) {
          if(getters.getVerificationUnassigned === undefined) {
              return;
          }
          const searchedVal = getters.getVerificationUnassigned.filter(function(e) {
            return e.verificationCode === undefined ? '' : e.verificationCode
              .toLowerCase()
              .includes(searchKey.toLowerCase())
              || (e.applicant.profile.name + " " + 
                  e.applicant.profile.fatherName)
                  .toLowerCase()
                  .includes(searchKey.toLowerCase())
              || e.applicant.profile.name
                .toLowerCase()
                .includes(searchKey.toLowerCase())
          });
          commit(SET_VERIFICATION_UNASSIGNED_SEARCHED, searchedVal)
      }
}