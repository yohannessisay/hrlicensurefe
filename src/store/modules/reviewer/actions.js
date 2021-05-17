import ApiService from "../../../services/api.service";
import {
  SET_UNASSIGNED,
  SET_UNASSIGNED_SEARCHED,
  SET_ASSIGNED_TO_YOU,
  SET_ASSIGNED_TO_YOU_SEARCHED,
  SET_UNFINISHED,
  SET_UNFINISHED_SEARCHED,
  SET_RECENTLY_FINISHED,
  SET_RECENTLY_FINISHED_SEARCHED,
} from "./mutation-types";
const baseUrl = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api";
const adminId = localStorage.getItem("adminId");

export default {
  async getUnfinished({commit}, id) {
    try {
      // const resp = await ApiService.get("https://randomuser.me/api/?results=10");
      // const url = baseUrl + "/newLicenses/user/" + id;
      const url = baseUrl + "/applications/unfinished/" + id;
      const resp = await ApiService.get(url);
      commit(SET_UNFINISHED, resp.data.data)
      // return resp;
    } catch (error) {
      const resp = { status: "Error" };
      return resp;
    }
  },
  getUnfinishedSearched({commit, getters}, searchedKey) {
    if(getters.getUnfinished === undefined) {
      return;
    }
    const searchedVal = getters.getUnfinished.filter(function(e) {
      return e.newLicenseCode
              .toLowerCase()
              .includes(searchedKey.toLowerCase())
              || e.applicant.profile.name
              .toLowerCase()
              .includes(searchedKey.toLowerCase())
              || e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchedKey.toLowerCase())
    })
    commit(SET_UNFINISHED_SEARCHED, searchedVal)
  },
  async getAssignedToYou({commit}) {
    try {
      const resp = await ApiService.get(baseUrl + "/applications/assignedToYou/" + adminId);
      commit(SET_ASSIGNED_TO_YOU, resp.data.data)
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  getAssignedToYouSearched({commit, getters}, searchKey) {
    if(getters.getAssignedToYou === undefined) {
      return;
    }
    const searchedVal = getters.getAssignedToYou.filter(function(e) {
      return e.newLicenseCode
              .toLowerCase()
              .includes(searchKey.toLowerCase())
              || e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase())
              || e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase())

    })
    commit(SET_ASSIGNED_TO_YOU_SEARCHED, searchedVal)
  },
  async getUnassigned({commit}) {
    try {
      // const resp = await ApiService.get("https://randomuser.me/api/?results=10");
      // const resp = await ApiService.get(baseUrl + "/newLicenses/status/3");
      const resp = await ApiService.get(baseUrl + "/applications/unassigned");
      commit(SET_UNASSIGNED, resp.data.data)
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  getUnassignedSearched({commit, getters}, searchKey) {
    if(getters.getUnassigned === undefined) {
      return;
    }
    const searchedVal = getters.getUnassigned.filter(function(e) {
      return e.newLicenseCode
        .toLowerCase()
        .includes(searchKey.toLowerCase())
        || e.applicant.profile.name
        .toLowerCase()
        .includes(searchKey.toLowerCase())
        || e.applicant.profile.fatherName
        .toLowerCase()
        .includes(searchKey.toLowerCase())
    })
    commit(SET_UNASSIGNED_SEARCHED, searchedVal)
  },
  async getRecentlyFinished({commit}) {
    try {
      const resp = await ApiService.get("https://randomuser.me/api/?results=10");
      commit(SET_RECENTLY_FINISHED, resp.data.results)
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  getRecentlyFinishedSearched({commit, getters}, searchKey) {
    if(getters.getRecentlyFinished === undefined) {
      return;
    }
    const searchedVal = getters.getRecentlyFinished.filter(function(e) {
      return  e.id.value === null ? '' : 
              e.id.value.
              toLowerCase().
              includes(searchKey.toLowerCase()) 
            || e.name.first
             .toLowerCase()
            .includes(searchKey.toLowerCase())
            ||
            e.name.last
            .toLowerCase()
            .includes(searchKey.toLowerCase())
    })
    commit(SET_RECENTLY_FINISHED_SEARCHED, searchedVal)
  },
  async getProfile(context, id) {
    try {
      console.log(id);
      const url = baseUrl + "/profiles/" + id;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getNewLicenseApplication(context, id) {
    try {
      console.log(id);
      const url = baseUrl + "/newLicenses/" + id;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getGoodStandingApplication(context, id) {
    try {
      console.log(id);
      const url = baseUrl + "/goodStandings/" + id;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getRenewalApplication(context, id) {
    try {
      console.log(id);
      const url = baseUrl + "/renewals/" + id;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getVerificationApplication(context, id) {
    try {
      console.log(id);
      const url = baseUrl + "/verifications/" + id;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getAdmins() {
    try {
      const url = baseUrl + "/admins";
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getRoles(context, userID) {
    try {
      const url = baseUrl + "/admins/" + userID;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async assignReviewer({ commit }, assign) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/licenseReviewers/assign",
        assign
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async assignRenewalReviewer({ commit }, assign) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/renewalReviewers/assign",
        assign
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async assignVerificationReviewer({ commit }, assign) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/verificationReviewers/assign",
        assign
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async assignGoodStandingReviewer({ commit }, assign) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/goodStandingReviewers/assign",
        assign
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getApplication(context, applicationId) {
    try {
      const url = baseUrl + "/newLicenses/" + applicationId;
      // const urll = baseUrl + "/newLicenses/125";
      const urll = baseUrl + "/newLicenses/49";
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getDocumentTypes() {
    try {
      const url = baseUrl + "/documentTypes";
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async editVerification({ commit }, license) {
    try {
      console.log(license);
      const resp = await ApiService.put(
        baseUrl + "verifications/" + license.data.id,
        license
      );
      // const resp = await ApiService.put(url + "newLicenses/" + license);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async editGoodStanding({ commit }, license) {
    try {
      console.log(license);
      const resp = await ApiService.put(
        baseUrl + "goodStandings/" + license.data.id,
        license
      );
      // const resp = await ApiService.put(url + "newLicenses/" + license);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async editRenewal({ commit }, license) {
    try {
      console.log(license);
      const resp = await ApiService.put(
        baseUrl + "renewals/" + license.data.id,
        license
      );
      // const resp = await ApiService.put(url + "newLicenses/" + license);
      return resp;
    } catch (error) {
      return error;
    }
  },
};
