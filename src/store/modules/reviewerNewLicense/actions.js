import ApiService from "../../../services/api.service";
import {
  SET_NEW_LICENSE_UNASSIGNED,
  SET_NEW_LICENSE_UNASSIGNED_SEARCHED,
  SET_NEW_LICENSE_UNFINISHED,
  SET_NEW_LICENSE_UNFINISHED_SEARCHED,
  SET_NEW_LICENSE_ASSIGNED_TO_YOU,
  SET_NEW_LICENSE_ASSIGNED_TO_YOU_SEARCHED,
  SET_NEW_LICENSE_ASSIGNED_TO_OTHERS,
  SET_NEW_LICENSE_ASSIGNED_TO_OTHERS_SEARCHED,
} from "./mutation-types";

const baseUrl = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api";

export default {
  async getNewLicenseUnassigned({ commit }) {
    const url = baseUrl + "/newLicenses/status/3";
    const resp = await ApiService.get(url);
    console.log("new license un assigned response", resp.data.data);
    commit(SET_NEW_LICENSE_UNASSIGNED, resp.data.data);
  },

  getNewLicenseUnassignedSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseUnassigned === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseUnassigned.filter(function(e) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_NEW_LICENSE_UNASSIGNED_SEARCHED, searchedVal);
  },
};
