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

  SET_RENEWAL_APPROVED,
  SET_RENEWAL_APPROVED_SEARCHED,
  SET_RENEWAL_ALL_APPROVED,
  SET_RENEWAL_ALL_APPROVED_SEARCHED,

  SET_RENEWAL_DECLINED,
  SET_RENEWAL_DECLINED_SEARCHED,
  SET_RENEWAL_ALL_DECLINED,
  SET_RENEWAL_ALL_DECLINED_SEARCHED,

  SET_RENEWAL_UNDER_SUPERVISION,
  SET_RENEWAL_UNDER_SUPERVISION_SEARCHED,
  SET_RENEWAL_OTHERS_UNDER_SUPERVISION,
  SET_RENEWAL_OTHERS_UNDER_SUPERVISION_SEARCHED
} from "./mutation-types";

export default {
  [SET_RENEWAL_UNASSIGNED](state, data) {
    state.renewalUnassigned = data;
    state.renewalUnassignedSearched = data;
  },

  [SET_RENEWAL_UNASSIGNED_SEARCHED](state, searchedVal) {
    state.renewalUnassignedSearched = searchedVal;
  },

  [SET_RENEWAL_UNFINISHED](state, data) {
    state.renewalUnfinished = data;
    state.renewalUnfinishedSearched = data;
  },
  [SET_RENEWAL_UNFINISHED_SEARCHED](state, searchedVal) {
    state.renewalUnfinishedSearched = searchedVal;
  },
  [SET_RENEWAL_OTHERS_UNFINISHED](state, data) {
    state.renewalOthersUnfinished = data;
    state.renewalOthersUnfinishedSearched = data;
  },
  [SET_RENEWAL_OTHERS_UNFINISHED_SEARCHED](state, searchedVal) {
    state.renewalOthersUnfinishedSearched = searchedVal;
  },

  [SET_RENEWAL_ASSIGNED_TO_YOU](state, data) {
    state.renewalAssignedToYou = data;
    state.renewalAssignedToYouSearched = data;
  },
  [SET_RENEWAL_ASSIGNED_TO_YOU_SEARCHED](state, searchedVal) {
    state.renewalAssignedToYouSearched = searchedVal;
  },
  [SET_RENEWAL_ASSIGNED_TO_OTHERS](state, data) {
    state.renewalAssignedToOthers = data;
    state.renewalAssignedToOthersSearched = data;
  },
  [SET_RENEWAL_ASSIGNED_TO_OTHERS_SEARCHED](state, searchedVal) {
    state.renewalAssignedToOthersSearched = searchedVal;
  },

  [SET_RENEWAL_APPROVED](state, data) {
    state.renewalApproved = data;
    state.renewalApprovedSearched = data;
  },
  [SET_RENEWAL_APPROVED_SEARCHED](state, searchedVal) {
    state.renewalApprovedSearched = searchedVal;
  },
  [SET_RENEWAL_ALL_APPROVED](state, data) {
    state.renewalAllApproved = data;
    state.renewalAllApprovedSearched = data;
  },
  [SET_RENEWAL_ALL_APPROVED_SEARCHED](state, searchedVal) {
    state.renewalAllApprovedSearched = searchedVal;
  },

  [SET_RENEWAL_DECLINED](state, data) {
    state.renewalDeclined = data;
    state.renewalDeclinedSearched = data;
  },
  [SET_RENEWAL_DECLINED_SEARCHED](state, searchedVal) {
    state.renewalDeclinedSearched = searchedVal;
  },
  [SET_RENEWAL_ALL_DECLINED](state, data) {
    state.renewalAllDeclined = data;
    state.renewalAllDeclinedSearched = data;
  },
  [SET_RENEWAL_ALL_DECLINED_SEARCHED](state, searchedVal) {
    state.renewalAllDeclinedSearched = searchedVal;
  },

  [SET_RENEWAL_UNDER_SUPERVISION](state, data) {
    state.renewalUnderSuperVision = data;
    state.renewalUnderSuperVisionSearched = data;
  },
  [SET_RENEWAL_UNDER_SUPERVISION_SEARCHED](state, searchedVal) {
    state.renewalUnderSuperVisionSearched = searchedVal;
  },
  [SET_RENEWAL_OTHERS_UNDER_SUPERVISION](state, data) {
    state.renewalOthersUnderSuperVision = data;
    state.renewalOthersUnderSuperVisionSearched = data;
  },
  [SET_RENEWAL_OTHERS_UNDER_SUPERVISION_SEARCHED](state, searchedVal) {
    state.renewalOthersUnderSuperVisionSearched = searchedVal;
  },
};