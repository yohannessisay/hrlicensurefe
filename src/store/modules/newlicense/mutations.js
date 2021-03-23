import {
  SET_LICENSE,
  ADD_PROFILE_LOADING,
  ADD_PROFILE_SUCCESS,
  ADD_PROFILE_ERROR,
  SET_ACTIVE_STATE,
  SET_PHOTO,
  SET_PASSPORT,
  SET_HEALTH_EXAM_CERT,
  SET_DOCS
} from "./mutation-types";

export default {
  [SET_LICENSE](state, license) {
    state.license = license;
  },
  [SET_PHOTO](state, photo) {
    state.photo = photo;
  },
  [SET_PASSPORT](state, passport) {
    state.passport = passport;
  },
  [SET_HEALTH_EXAM_CERT](state, healthExamCert) {
    state.healthExamCert = healthExamCert;
  },
  [SET_DOCS](state, docs) {
    state.docs = docs;
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
