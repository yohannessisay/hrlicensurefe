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

  SET_GOOD_STANDING_UNDER_SUPERVISION,
  SET_GOOD_STANDING_UNDER_SUPERVISION_SEARCHED,
  SET_GOOD_STANDING_OTHERS_UNDER_SUPERVISION,
  SET_GOOD_STANDING_OTHERS_UNDER_SUPERVISION_SEARCHED
} from "./mutation-types";
export default {
  [SET_GOOD_STANDING_UNASSIGNED](state, data) {
    state.goodStandingUnassigned = data;
    state.goodStandingUnassignedSearched = data;
  },

  [SET_GOOD_STANDING_UNASSIGNED_SEARCHED](state, searchedVal) {
    console.log("searched val is ", searchedVal);
    state.goodStandingUnassignedSearched = searchedVal;
  },
  [SET_GOOD_STANDING_UNFINISHED](state, data) {
    state.goodStandingUnfinished = data;
    state.goodStandingUnfinishedSearched = data;
  },
  [SET_GOOD_STANDING_UNFINISHED_SEARCHED](state, searchedVal) {
    state.goodStandingUnfinishedSearched = searchedVal;
  },
  [SET_GOOD_STANDING_OTHERS_UNFINISHED](state, data) {
    state.goodStandingOthersUnfinished = data;
    state.goodStandingOthersUnfinishedSearched = data;
  },
  [SET_GOOD_STANDING_OTHERS_UNFINISHED_SEARCHED](state, searchedVal) {
    state.goodStandingOthersUnfinishedSearched = searchedVal;
  },

  [SET_GOOD_STANDING_ASSIGNED_TO_YOU](state, data) {
    state.goodStandingAssignedToYou = data;
    state.goodStandingAssignedToYouSearched = data;
  },
  [SET_GOOD_STANDING_ASSIGNED_TO_YOU_SEARCHED](state, searchedVal) {
    state.goodStandingAssignedToYouSearched = searchedVal;
  },
  [SET_GOOD_STANDING_ASSIGNED_TO_OTHERS](state, data) {
    state.goodStandingAssignedToOthers = data;
    state.goodStandingAssignedToOthersSearched = data;
  },
  [SET_GOOD_STANDING_ASSIGNED_TO_OTHERS_SEARCHED](state, searchedVal) {
    state.goodStandingAssignedToOthersSearched = searchedVal;
  },

  [SET_GOOD_STANDING_APPROVED](state, data) {
    state.goodStandingApproved = data;
    state.goodStandingApprovedSearched = data;
  },
  [SET_GOOD_STANDING_APPROVED_SEARCHED](state, searchedVal) {
    state.goodStandingApprovedSearched = searchedVal;
  },
  [SET_GOOD_STANDING_ALL_APPROVED](state, data) {
    state.goodStandingAllApproved = data;
    state.goodStandingAllApprovedSearched = data;
  },
  [SET_GOOD_STANDING_ALL_APPROVED_SEARCHED](state, searchedVal) {
    state.goodStandingAllApprovedSearched = searchedVal;
  },

  [SET_GOOD_STANDING_DECLINED](state, data) {
    state.goodStandingDeclined = data;
    state.goodStandingDeclinedSearched = data;
  },
  [SET_GOOD_STANDING_DECLINED_SEARCHED](state, searchedVal) {
    state.goodStandingDeclinedSearched = searchedVal;
  },
  [SET_GOOD_STANDING_ALL_DECLINED](state, data) {
    state.goodStandingAllDeclined = data;
    state.goodStandingAllDeclinedSearched = data;
  },
  [SET_GOOD_STANDING_ALL_DECLINED_SEARCHED](state, searchedVal) {
    state.goodStandingAllDeclinedSearched = searchedVal;
  },

  [SET_GOOD_STANDING_UNDER_SUPERVISION](state, data) {
    state.goodStandingUnderSuperVision = data;
    state.goodStandingUnderSuperVisionSearched = data;
  },
  [SET_GOOD_STANDING_UNDER_SUPERVISION_SEARCHED](state, searchedVal) {
    state.goodStandingUnderSuperVisionSearched = searchedVal;
  },
  [SET_GOOD_STANDING_OTHERS_UNDER_SUPERVISION](state, data) {
    state.goodStandingOthersUnderSuperVision = data;
    state.goodStandingOthersUnderSuperVisionSearched = data;
  },
  [SET_GOOD_STANDING_OTHERS_UNDER_SUPERVISION_SEARCHED](state, searchedVal) {
    state.goodStandingOthersUnderSuperVisionSearched = searchedVal;
  },
};
