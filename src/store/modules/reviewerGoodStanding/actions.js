import ApiService from "../../../services/api.service";
import {
  SET_GOOD_STANDING_UNASSIGNED,
  SET_GOOD_STANDING_UNASSIGNED_SEARCHED,

  SET_GOOD_STANDING_UNFINISHED,
  SET_GOOD_STANDING_UNFINISHED_SEARCHED,
  SET_GOOD_STANDING_OTHERS_UNFINISHED,
  SET_GOOD_STANDING_OTHERS_UNFINISHED_SEARCHED,

  SET_GOOD_STANDING_ASSIGNED_TO_YOU,
  SET_GOOD_STANDING_ASSIGNED_TO_YOU_SEARCHED,
  SET_GOOD_STANDING_ASSIGNED_TO_OTHERS,
  SET_GOOD_STANDING_ASSIGNED_TO_OTHERS_SEARCHED,
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
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_GOOD_STANDING_UNASSIGNED_SEARCHED, searchedVal);
  },

  async getGoodStandingUnfinished({ commit }, adminId) {
    const url = baseUrl + "/goodstandings/status/10";
    const resp = await ApiService.get(url);
    const myUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
    });
    commit(SET_GOOD_STANDING_UNFINISHED, myUnfinished);
  },

  getGoodStandingUnfinishedSearched({ commit, getters }, searchKey) {
    if (getters.getGoodStandingUnfinished === undefined) {
      return;
    }
    const searchedVal = getters.getGoodStandingUnfinished.filter(function(e) {
      return e.goodStandingCode === undefined
        ? ""
        : e.goodStandingCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_GOOD_STANDING_UNFINISHED_SEARCHED, searchedVal);
  },

  async getGoodStandingOthersUnfinished({ commit }, adminId) {
    const url = baseUrl + "/goodstandings/status/10";
    const resp = await ApiService.get(url);
    console.log("good standing unfinished", resp.data.data);
    const othresUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminId;
    });
    commit(SET_GOOD_STANDING_OTHERS_UNFINISHED, othresUnfinished);
  },
  getGoodStandingOthersUnfinishedSearched({ commit, getters }, searchKey) {
    if (getters.getGoodStandingOthersUnfinished === undefined) {
      return;
    }
    const searchedVal = getters.getGoodStandingOthersUnfinished.filter(function(e) {
      return e.goodStandingCode === undefined
        ? ""
        : e.goodStandingCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.reviewer.name.toLowerCase().includes(searchKey.toLowerCase());
    });
    commit(SET_GOOD_STANDING_OTHERS_UNFINISHED_SEARCHED, searchedVal);
  },

  async getGoodStandingAssigned({ commit }, adminId) {
    const url = baseUrl + "/goodstandings/status/4";
    const resp = await ApiService.get(url);
    const assignedToMe = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
    });
    commit(SET_GOOD_STANDING_ASSIGNED_TO_YOU, assignedToMe);
  },

  getGoodStandingAssignedSearched({ commit, getters }, searchKey) {
    if (getters.getGoodStandingAssignedToYou === undefined) {
      return;
    }
    const searchedVal = getters.getGoodStandingAssignedToYou.filter(function(e) {
      return e.goodStandingCode === undefined
        ? ""
        : e.goodStandingCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_GOOD_STANDING_ASSIGNED_TO_YOU_SEARCHED, searchedVal);
  },

  async getGoodStandingOthersAssigned({ commit }, adminId) {
    const url = baseUrl + "/goodstandings/status/10";
    const resp = await ApiService.get(url);
    const othresUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminId;
    });
    commit(SET_GOOD_STANDING_ASSIGNED_TO_OTHERS, othresUnfinished);
  },
  getGoodStandingOthersAssignedSearched({ commit, getters }, searchKey) {
    if (getters.getGoodStandingAssignedToOthers === undefined) {
      return;
    }
    const searchedVal = getters.getGoodStandingAssignedToOthers.filter(function(
      e
    ) {
      return e.goodStandingCode === undefined
        ? ""
        : e.goodStandingCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.reviewer.name.toLowerCase().includes(searchKey.toLowerCase());
    });
    commit(SET_GOOD_STANDING_ASSIGNED_TO_OTHERS_SEARCHED, searchedVal);
  },
};
