import {
  SET_NEW_LICENSE_UNASSIGNED,
  SET_NEW_LICENSE_UNASSIGNED_SEARCHED,
  SET_NEW_LICENSE_UNFINISHED,
  SET_NEW_LICENSE_UNFINISHED_SEARCHED,
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
};
