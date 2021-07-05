import ApiService from "../../../services/api.service";
import {
    SET_RENEWAL_UNASSIGNED,
    SET_RENEWAL_UNASSIGNED_SEARCHED,
} from "./mutation-types";
const baseUrl = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api";

export default {
    async getUnassignedRenewal({ commit }) {
        try {
          const url = baseUrl + "/renewals/status/5"
          const resp = await ApiService.get(url);
          commit(SET_RENEWAL_UNASSIGNED, resp.data.data)
        } catch(err) {
          return error;
        }
      },

      getUnassignedRenewalSearched({ commit, getters }, searchKey) {
          if(getters.getRenewalUnassigned === undefined) {
              return;
          }
          const searchedVal = getters.getRenewalUnassigned.filter(function(e) {
            return e.renewalCode === undefined ? '' : e.renewalCode
              .toLowerCase()
              .includes(searchKey.toLowerCase())
              || (e.applicant.profile.name + " " + 
                  e.applicant.profile.fatherName)
                  .toLowerCase()
                  .includes(searchKey.toLowerCase())
              || e.applicant.profile.name
                .toLowerCase()
                .includes(searchKey.toLowerCase())
              || e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase())
          });
          commit(SET_RENEWAL_UNASSIGNED_SEARCHED, searchedVal)
      }
}