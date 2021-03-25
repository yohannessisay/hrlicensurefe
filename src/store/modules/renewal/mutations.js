import {
  SET_RENEWAL,
  SET_RENEWAL_PHOTO,
  SET_RENEWAL_PASSPORT,
  SET_RENEWAL_HEALTH_EXAM_CERT,
  SET_RENEWAL_SERVICE_FEE,
  SET_RENEWAL_CPD,
  SET_RENEWAL_WORK_EXPERIENCE,
  SET_DOCS
} from "./mutation-types";

export default {
  [SET_RENEWAL](state, renewalLicense) {
    state.renewal = renewalLicense;
  },
  [SET_RENEWAL_PHOTO](state, renewalPhoto) {
    state.renewalPhoto = renewalPhoto;
  },
  [SET_RENEWAL_PASSPORT](state, renewalPassport) {
    state.renewalPassport = renewalPassport;
  },
  [SET_RENEWAL_HEALTH_EXAM_CERT](state, renewalHealthExamCert) {
    state.renewalHealthExamCert = renewalHealthExamCert;
  },
  [SET_RENEWAL_SERVICE_FEE](state, renewalServiceFee) {
    state.renewalServiceFee = renewalServiceFee;
  },
  [SET_RENEWAL_CPD](state, renewalCpd) {
    state.renewalCpd = renewalCpd;
  },
  [SET_RENEWAL_WORK_EXPERIENCE](state, renewalWorkExperience) {
    state.renewalWorkExperience = renewalWorkExperience;
  },
  [SET_DOCS](state, docs) {
    state.docs = docs;
  },
  // [SET_ACTIVE_STATE](state, activeState) {
  //   state.activeState = activeState;
  // },
  // [ADD_PROFILE_LOADING](state) {
  //   state.addProfileLoading = true;
  //   state.addProfileSuccess = false;
  //   state.addProfileError = false;
  // },

  // [ADD_PROFILE_SUCCESS](state) {
  //   state.addProfileLoading = false;
  //   state.addProfileSuccess = true;
  //   state.addProfileError = false;
  // },

  // [ADD_PROFILE_ERROR](state) {
  //   state.addProfileLoading = false;
  //   state.addProfileSuccess = false;
  //   state.addProfileError = true;
  // },
};
