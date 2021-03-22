import {
  SET_LICENSE,
  ADD_PROFILE_LOADING,
  ADD_PROFILE_SUCCESS,
  ADD_PROFILE_ERROR,
  SET_ACTIVE_STATE,
} from "./mutation-types";

export default {
  [SET_LICENSE](state, license) {
    state.license = license;
    console.log(state);
  },
  [SET_ACTIVE_STATE](state, activeState) {
    state.activeState = activeState;
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
  },
};
