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
};
