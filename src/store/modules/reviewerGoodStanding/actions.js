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

  SET_GOOD_STANDING_APPROVED,
  SET_GOOD_STANDING_APPROVED_SEARCHED,
  SET_GOOD_STANDING_ALL_APPROVED,
  SET_GOOD_STANDING_ALL_APPROVED_SEARCHED,

  SET_GOOD_STANDING_DECLINED,
  SET_GOOD_STANDING_DECLINED_SEARCHED,
  SET_GOOD_STANDING_ALL_DECLINED,
  SET_GOOD_STANDING_ALL_DECLINED_SEARCHED,
} from "./mutation-types";
const baseUrl = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api";

export default {
  async getUnassignedGoodStanding({ commit }, statusId) {
    try {
      const url = baseUrl + "/goodStandings/status/"+statusId;
      const resp = await ApiService.get(url);
      commit(SET_GOOD_STANDING_UNASSIGNED, resp.data.data);
      console.log("good standing unassigned is ", resp.data.data)
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
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_GOOD_STANDING_UNASSIGNED_SEARCHED, searchedVal);
  },

  async getGoodStandingUnfinished({ commit }, adminStatus) {
    const url = baseUrl + "/goodstandings/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const myUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
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

  async getGoodStandingOthersUnfinished({ commit }, adminStatus) {
    const url = baseUrl + "/goodstandings/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    console.log("good standing unfinished", resp.data.data);
    const othresUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
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

  async getGoodStandingAssigned({ commit }, adminStatus) {
    const url = baseUrl + "/goodstandings/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const assignedToMe = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
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

  async getGoodStandingOthersAssigned({ commit }, adminStatus) {
    const url = baseUrl + "/goodstandings/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const othresUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
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

  async getGoodStandingApproved({ commit }, adminStatus) {
    const url = baseUrl + "/goodstandings/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    console.log("response is ", resp)
    if(resp.data.data === undefined) {
      const myApproved = [];
      commit(SET_GOOD_STANDING_APPROVED, myApproved);
      return;
    }
    const myApproved = resp.data.data.filter(function(e) {
        return e.reviewerId === adminStatus[1];
      });
    commit(SET_GOOD_STANDING_APPROVED, myApproved);
  },

  getGoodStandingApprovedSearched({ commit, getters }, searchKey) {
    if (getters.getGoodStandingApproved === undefined) {
      return;
    }
    const searchedVal = getters.getGoodStandingApproved.filter(function(e) {
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
    commit(SET_GOOD_STANDING_APPROVED_SEARCHED, searchedVal);
  },

  async getGoodStandingAllApproved({ commit }, adminStatus) {
    const url = baseUrl + "/goodstandings/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    if(resp.data.data === undefined) {
      const othersApproved = [];
      commit(SET_GOOD_STANDING_ALL_APPROVED, othersApproved);
      return
    }
    const othersApproved = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_GOOD_STANDING_ALL_APPROVED, othersApproved);
  },
  getGoodStandingAllApprovedSearched({ commit, getters }, searchKey) {
    if (getters.getGoodStandingAllApproved === undefined) {
      return;
    }
    const searchedVal = getters.getGoodStandingAllApproved.filter(function(
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
    commit(SET_GOOD_STANDING_ALL_APPROVED_SEARCHED, searchedVal);
  },

  async getGoodStandingDeclined({ commit }, adminStatus) {
    const url = baseUrl + "/goodstandings/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    if(resp.data.data === undefined) {
      const declined = []
      commit(SET_GOOD_STANDING_DECLINED, declined)
      return;
    }
    const declined = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
    });
    commit(SET_GOOD_STANDING_DECLINED, declined);
  },

  getGoodStandingDeclinedSearched({ commit, getters }, searchKey) {
    if (getters.getGoodStandingDeclined === undefined) {
      return;
    }
    const searchedVal = getters.getGoodStandingDeclined.filter(function(e) {
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
    commit(SET_GOOD_STANDING_DECLINED_SEARCHED, searchedVal);
  },

  async getGoodStandingAllDeclined({ commit }, adminStatus) {
    const url = baseUrl + "/goodstandings/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    if(resp.data.data === undefined) {
      const othersDeclined = [];
      commit(SET_GOOD_STANDING_ALL_DECLINED, othersDeclined);
      return;
    }
    const othersDeclined = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_GOOD_STANDING_ALL_DECLINED, othersDeclined);
  },
  getGoodStandingAllDeclinedSearched({ commit, getters }, searchKey) {
    if (getters.getGoodStandingAllDeclined === undefined) {
      return;
    }
    const searchedVal = getters.getGoodStandingAllDeclined.filter(function(
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
    commit(SET_GOOD_STANDING_ALL_DECLINED_SEARCHED, searchedVal);
  },
};
