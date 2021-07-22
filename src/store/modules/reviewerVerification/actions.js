import ApiService from "../../../services/api.service";
import {
  SET_VERIFICATION_UNASSIGNED,
  SET_VERIFICATION_UNASSIGNED_SEARCHED,

  SET_VERIFICATION_UNFINISHED,
  SET_VERIFICATION_UNFINISHED_SEARCHED,
  SET_VERIFICATION_OTHERS_UNFINISHED,
  SET_VERIFICATION_OTHERS_UNFINISHED_SEARCHED,

  SET_VERIFICATION_ASSIGNED_TO_YOU,
  SET_VERIFICATION_ASSIGNED_TO_YOU_SEARCHED,
  SET_VERIFICATION_ASSIGNED_TO_OTHERS,
  SET_VERIFICATION_ASSIGNED_TO_OTHERS_SEARCHED,

  SET_VERIFICATION_APPROVED,
  SET_VERIFICATION_APPROVED_SEARCHED,
  SET_VERIFICATION_ALL_APPROVED,
  SET_VERIFICATION_ALL_APPROVED_SEARCHED,

  SET_VERIFICATION_DECLINED,
  SET_VERIFICATION_DECLINED_SEARCHED,
  SET_VERIFICATION_ALL_DECLINED,
  SET_VERIFICATION_ALL_DECLINED_SEARCHED,
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
    const searchedVal = getters.getVerificationUnassigned.filter(function(e) {
      return e.verificationCode === undefined
        ? ""
        : e.verificationCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_VERIFICATION_UNASSIGNED_SEARCHED, searchedVal);
  },

  async getVerificationUnfinished({ commit }, adminId) {
    const url = baseUrl + "/verifications/status/10";
    const resp = await ApiService.get(url);
    const myUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
    });
    commit(SET_VERIFICATION_UNFINISHED, myUnfinished);
  },

  getVerificationUnfinishedSearched({ commit, getters }, searchKey) {
    if (getters.getVerificationUnfinished === undefined) {
      return;
    }
    const searchedVal = getters.getVerificationUnfinished.filter(function(e) {
      return e.verificationCode === undefined
        ? ""
        : e.verificationCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_VERIFICATION_UNFINISHED_SEARCHED, searchedVal);
  },

  async getVerificationOthersUnfinished({ commit }, adminId) {
    const url = baseUrl + "/verifications/status/10";
    const resp = await ApiService.get(url);
    console.log("verification unfinished", resp.data.data);
    const othresUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminId;
    });
    commit(SET_VERIFICATION_OTHERS_UNFINISHED, othresUnfinished);
  },
  getVerificationOthersUnfinishedSearched({ commit, getters }, searchKey) {
    if (getters.getVerificationOthersUnfinished === undefined) {
      return;
    }
    const searchedVal = getters.getVerificationOthersUnfinished.filter(function(
      e
    ) {
      return e.verificationCode === undefined
        ? ""
        : e.verificationCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_VERIFICATION_OTHERS_UNFINISHED_SEARCHED, searchedVal);
  },

  async getVerificationAssigned({ commit }, adminId) {
    const url = baseUrl + "/verifications/status/4";
    const resp = await ApiService.get(url);
    const assignedToMe = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
    });
    commit(SET_VERIFICATION_ASSIGNED_TO_YOU, assignedToMe);
  },

  getVerificationAssignedSearched({ commit, getters }, searchKey) {
    if (getters.getVerificationAssignedToYou === undefined) {
      return;
    }
    const searchedVal = getters.getVerificationAssignedToYou.filter(function(e) {
      return e.verificationCode === undefined
        ? ""
        : e.verificationCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_VERIFICATION_ASSIGNED_TO_YOU_SEARCHED, searchedVal);
  },

  async getVerificationOthersAssigned({ commit }, adminId) {
    const url = baseUrl + "/verifications/status/4";
    const resp = await ApiService.get(url);
    const othresUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminId;
    });
    commit(SET_VERIFICATION_ASSIGNED_TO_OTHERS, othresUnfinished);
  },
  getVerificationOthersAssignedSearched({ commit, getters }, searchKey) {
    if (getters.getVerificationAssignedToOthers === undefined) {
      return;
    }
    const searchedVal = getters.getVerificationAssignedToOthers.filter(function(
      e
    ) {
      return e.verificationCode === undefined
        ? ""
        : e.verificationCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_VERIFICATION_ASSIGNED_TO_OTHERS_SEARCHED, searchedVal);
  },

  async getVerificationApproved({ commit }, adminId) {
    const url = baseUrl + "/verifications/status/5";
    const resp = await ApiService.get(url);
    if(resp.data.data === undefined) {
      const approved = []
      commit(SET_VERIFICATION_APPROVED, approved)
      return;
    }
    const Approved = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
    });
    commit(SET_VERIFICATION_APPROVED, Approved);
  },

  getVerificationApprovedSearched({ commit, getters }, searchKey) {
    if (getters.getVerificationApproved === undefined) {
      return;
    }
    const searchedVal = getters.getVerificationApproved.filter(function(e) {
      return e.verificationCode === undefined
        ? ""
        : e.verificationCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_VERIFICATION_APPROVED_SEARCHED, searchedVal);
  },

  async getVerificationAllApproved({ commit }, adminId) {
    const url = baseUrl + "/verifications/status/5";
    const resp = await ApiService.get(url);
    let allApproved = resp.data.data
    if(allApproved === undefined) {
      allApproved = [];
    }
    commit(SET_VERIFICATION_ALL_APPROVED, allApproved);
  },
  getVerificationAllApprovedSearched({ commit, getters }, searchKey) {
    if (getters.getVerificationAllApproved === undefined) {
      return;
    }
    const searchedVal = getters.getVerificationAllApproved.filter(function(
      e
    ) {
      return e.verificationCode === undefined
        ? ""
        : e.verificationCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_VERIFICATION_ALL_APPROVED_SEARCHED, searchedVal);
  },

  async getVerificationDeclined({ commit }, adminId) {
    const url = baseUrl + "/verifications/status/6";
    const resp = await ApiService.get(url);
    if(resp.data.data === undefined) {
      const declined = []
      commit(SET_VERIFICATION_DECLINED, declined)
      return;
    }
    const declined = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
    });
    commit(SET_VERIFICATION_DECLINED, declined);
  },

  getVerificationDeclinedSearched({ commit, getters }, searchKey) {
    if (getters.getVerificationDeclined === undefined) {
      return;
    }
    const searchedVal = getters.getVerificationDeclined.filter(function(e) {
      return e.verificationCode === undefined
        ? ""
        : e.verificationCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_VERIFICATION_DECLINED_SEARCHED, searchedVal);
  },

  async getVerificationAllDeclined({ commit }, adminId) {
    const url = baseUrl + "/verifications/status/6";
    const resp = await ApiService.get(url);
    let allDeclined = resp.data.data
    if(allDeclined === undefined) {
      allDeclined = [];
    }
    commit(SET_VERIFICATION_ALL_DECLINED, allDeclined);
  },
  getVerificationAllDeclinedSearched({ commit, getters }, searchKey) {
    if (getters.getVerificationAllDeclined === undefined) {
      return;
    }
    const searchedVal = getters.getVerificationAllDeclined.filter(function(
      e
    ) {
      return e.verificationCode === undefined
        ? ""
        : e.verificationCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_VERIFICATION_ALL_DECLINED_SEARCHED, searchedVal);
  },
};