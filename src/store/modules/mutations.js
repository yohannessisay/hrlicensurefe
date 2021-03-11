import {
  SET_PROFILE,
  SET_PERSONAL_INFO,
  SET_ADDRESS,
  SET_CONTACT,
  SET_API_CALL,
  ADD_PROFILE_LOADING,
  ADD_PROFILE_SUCCESS,
  ADD_PROFILE_ERROR
} from "./mutation-types";

export default {
  [SET_PROFILE](state, profile) {
    state.profile = profile;
  },

  [SET_PERSONAL_INFO](state, personalInfo) {
    state.profile = personalInfo;
  },

  [SET_ADDRESS](state, address) {
    state.address = address;
  },

  [SET_CONTACT](state, contact) {
    state.contact = contact;
  },

  [SET_API_CALL](state, apiCall) {
    state.apiCall = apiCall;
  },

  [ADD_PROFILE_LOADING](state) {
    state.addProfileLoading = true;
    state.addProfileSuccess = false;
    state.addProfileError = false;
  },

  [ADD_PROFILE_SUCCESS](state) {
    state.addProfileLoading = false;
    state.addProfileSuccess = true;
    state.addProfileError = false;
  },

  [ADD_PROFILE_ERROR](state) {
    state.addProfileLoading = false;
    state.addProfileSuccess = false;
    state.addProfileError = true;
  }
};
