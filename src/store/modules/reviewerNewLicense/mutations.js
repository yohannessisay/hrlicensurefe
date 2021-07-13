import {
  SET_NEW_LICENSE_UNASSIGNED,
  SET_NEW_LICENSE_UNASSIGNED_SEARCHED,

  SET_NEW_LICENSE_UNFINISHED,
  SET_NEW_LICENSE_UNFINISHED_SEARCHED,
  SET_NEW_LICENSE_OTHERS_UNFINISHED,
  SET_NEW_LICENSE_OTHERS_UNFINISHED_SEARCHED,

  SET_NEW_LICENSE_ASSIGNED_TO_YOU,
  SET_NEW_LICENSE_ASSIGNED_TO_YOU_SEARCHED,
  SET_NEW_LICENSE_ASSIGNED_TO_OTHERS,
  SET_NEW_LICENSE_ASSIGNED_TO_OTHERS_SEARCHED,
} from "./mutation-types";

export default {
  [SET_NEW_LICENSE_UNASSIGNED](state, data) {
    state.newLicenseUnassigned = data;
    state.newLicenseUnassignedSearched = data;
  },
  [SET_NEW_LICENSE_UNASSIGNED_SEARCHED](state, searchedVal) {
    state.newLicenseUnassignedSearched = searchedVal;
  },
  [SET_NEW_LICENSE_UNFINISHED](state, data) {
    state.newLicenseUnfinished = data;
    state.newLicenseUnfinishedSearched = data;
  },
  [SET_NEW_LICENSE_UNFINISHED_SEARCHED](state, searchedVal) {
    state.newLicenseUnfinishedSearched = searchedVal;
  },
  [SET_NEW_LICENSE_OTHERS_UNFINISHED](state, data) {
    state.newLicenseOthersUnfinished = data;
    state.newLicenseOthersUnfinishedSearched = data;
  },
  [SET_NEW_LICENSE_OTHERS_UNFINISHED_SEARCHED](state, searchedVal) {
    state.newLicenseOthersUnfinishedSearched = searchedVal;
  },
};
