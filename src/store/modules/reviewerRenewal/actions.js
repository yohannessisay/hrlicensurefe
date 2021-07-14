import ApiService from "../../../services/api.service";
import {
  SET_RENEWAL_UNASSIGNED,
  SET_RENEWAL_UNASSIGNED_SEARCHED,

  SET_RENEWAL_UNFINISHED,
  SET_RENEWAL_UNFINISHED_SEARCHED,
  SET_RENEWAL_OTHERS_UNFINISHED,
  SET_RENEWAL_OTHERS_UNFINISHED_SEARCHED,

  SET_RENEWAL_ASSIGNED_TO_YOU,
  SET_RENEWAL_ASSIGNED_TO_YOU_SEARCHED,
  SET_RENEWAL_ASSIGNED_TO_OTHERS,
  SET_RENEWAL_ASSIGNED_TO_OTHERS_SEARCHED,
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
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_UNASSIGNED_SEARCHED, searchedVal);
  },

  async getRenewalUnfinished({ commit }, adminId) {
    const url = baseUrl + "/renewals/status/10";
    const resp = await ApiService.get(url);
    const myUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
    });
    commit(SET_RENEWAL_UNFINISHED, myUnfinished);
  },

  getRenewalUnfinishedSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalUnfinished === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalUnfinished.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_RENEWAL_UNFINISHED_SEARCHED, searchedVal);
  },

  async getRenewalOthersUnfinished({ commit }, adminId) {
    const url = baseUrl + "/renewals/status/10";
    const resp = await ApiService.get(url);
    const othresUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminId;
    });
    commit(SET_RENEWAL_OTHERS_UNFINISHED, othresUnfinished);
  },
  getRenewalOthersUnfinishedSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalOthersUnfinished === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalOthersUnfinished.filter(function(
      e
    ) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_RENEWAL_OTHERS_UNFINISHED_SEARCHED, searchedVal);
  },

  async getRenewalAssigned({ commit }, adminId) {
    const url = baseUrl + "/renewals/status/4";
    const resp = await ApiService.get(url);
    const assignedToMe = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
    });
    commit(SET_RENEWAL_ASSIGNED_TO_YOU, assignedToMe);
  },

  getRenewalAssignedSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalAssignedToYou === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalAssignedToYou.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_RENEWAL_ASSIGNED_TO_YOU_SEARCHED, searchedVal);
  },

  async getRenewalOthersAssigned({ commit }, adminId) {
    const url = baseUrl + "/renewals/status/4";
    const resp = await ApiService.get(url);
    const othresUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminId;
    });
    commit(SET_RENEWAL_ASSIGNED_TO_OTHERS, othresUnfinished);
  },
  getRenewalOthersAssignedSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalAssignedToOthers === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalAssignedToOthers.filter(function(
      e
    ) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_RENEWAL_ASSIGNED_TO_OTHERS_SEARCHED, searchedVal);
  },
};
