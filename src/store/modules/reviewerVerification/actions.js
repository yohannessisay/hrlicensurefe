import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import {
  SET_VERIFICATION_UNASSIGNED,
  SET_VERIFICATION_UNFINISHED,
  SET_VERIFICATION_OTHERS_UNFINISHED,
  SET_VERIFICATION_ASSIGNED_TO_YOU,
  SET_VERIFICATION_ASSIGNED_TO_OTHERS,
  SET_VERIFICATION_APPROVED,
  SET_VERIFICATION_ALL_APPROVED,
  SET_VERIFICATION_DECLINED,
  SET_VERIFICATION_ALL_DECLINED,
  SET_VERIFICATION_RE_APPLY,
  SET_VERIFICATION_OTHERS_RE_APPLY,
} from "./mutation-types";

export default {
  async getUnassignedVerification({ commit }, statusId) {
    try {
      const url = baseUrl + "/verifications/status/" + statusId;
      const resp = await ApiService.get(url);
      commit(SET_VERIFICATION_UNASSIGNED, resp.data.data);
    } catch (err) {
      return err;
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

  async getVerificationUnfinished({ commit }, adminStatus) {
    const url = baseUrl + "/verifications/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    const myUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
    });
    commit(SET_VERIFICATION_UNFINISHED, myUnfinished);
  },

  async getVerificationOthersUnfinished({ commit }, adminStatus) {
    const url = baseUrl + "/verifications/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    if (resp.data.data === undefined) {
      const othresUnfinished = [];
      commit(SET_VERIFICATION_OTHERS_UNFINISHED, othresUnfinished);
      return;
    }
    const othresUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_VERIFICATION_OTHERS_UNFINISHED, othresUnfinished);
  },

  async getVerificationAssigned({ commit }, adminStatus) {
    const url = baseUrl + "/verifications/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    const assignedToMe = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
    });
    commit(SET_VERIFICATION_ASSIGNED_TO_YOU, assignedToMe);
  },

  async getVerificationOthersAssigned({ commit }, adminStatus) {
    const url = baseUrl + "/verifications/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    if (resp.data.data === undefined) {
      const othersAssigned = [];
      commit(SET_VERIFICATION_ASSIGNED_TO_OTHERS, othersAssigned);
      return;
    }
    const othersAssigned = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_VERIFICATION_ASSIGNED_TO_OTHERS, othersAssigned);
  },

  async getVerificationApproved({ commit }, adminStatus) {
    const url = baseUrl + "/verifications/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    if (resp.data.data === undefined) {
      const approved = [];
      commit(SET_VERIFICATION_APPROVED, approved);
      return;
    }
    const Approved = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
    });
    commit(SET_VERIFICATION_APPROVED, Approved);
  },

  async getVerificationAllApproved({ commit }, adminStatus) {
    const url = baseUrl + "/verifications/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    if (resp.data.data === undefined) {
      const othersApproved = [];
      commit(SET_VERIFICATION_ALL_APPROVED, othersApproved);
    }
    const othersApproved = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_VERIFICATION_ALL_APPROVED, othersApproved);
  },

  async getVerificationDeclined({ commit }, adminStatus) {
    const url = baseUrl + "/verifications/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    if (resp.data.data === undefined) {
      const declined = [];
      commit(SET_VERIFICATION_DECLINED, declined);
      return;
    }
    const declined = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
    });
    commit(SET_VERIFICATION_DECLINED, declined);
  },

  async getVerificationAllDeclined({ commit }, adminStatus) {
    const url = baseUrl + "/verifications/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    if (resp.data.data === undefined) {
      const othersDeclined = [];
      commit(SET_VERIFICATION_ALL_DECLINED, othersDeclined);
      return;
    }
    const othersDeclined = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_VERIFICATION_ALL_DECLINED, othersDeclined);
  },

  async getVerificationReApply({ commit }, adminStatus) {
    const url = baseUrl + "/verifications/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    const reApply = resp.data.data;
    commit(SET_VERIFICATION_RE_APPLY, reApply);
  },

  async getVerificationOtherReApply({ commit }, adminStatus) {
    const url = baseUrl + "/verifications/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    const othersReApply = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_VERIFICATION_OTHERS_RE_APPLY, othersReApply);
  },
};
