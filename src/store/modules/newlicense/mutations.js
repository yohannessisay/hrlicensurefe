import {
  SET_LICENSE,
  SET_PHOTO,
  SET_PASSPORT,
  SET_HEALTH_EXAM_CERT,
  SET_LANGUAGE,
  SET_PROFESSIONAL_DOCUMENT,
  SET_HERQA,
  SET_SUPPORT_LETTER,
  SET_COC,
  SET_EDUCATIONAL_DOCUMENT,
  SET_WORK_EXPERIENCE,
  SET_DOCS,
  SET_BUTTONS,
  ADD_PROFILE_LOADING,
  ADD_PROFILE_SUCCESS,
  ADD_PROFILE_ERROR,
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
  [SET_LANGUAGE](state, englishLanguage) {
    state.englishLanguage = englishLanguage;
  },
  [SET_PROFESSIONAL_DOCUMENT](state, professionalDocuments) {
    state.professionalDocuments = professionalDocuments;
  },
  [SET_HERQA](state, herqa) {
    state.herqa = herqa;
  },
  [SET_SUPPORT_LETTER](state, supportLetter) {
    state.supportLetter = supportLetter;
  },
  [SET_COC](state, coc) {
    state.coc = coc;
  },
  [SET_EDUCATIONAL_DOCUMENT](state, educationalDocuments) {
    state.educationalDocuments = educationalDocuments;
  },
  [SET_WORK_EXPERIENCE](state, workExperience) {
    state.workExperience = workExperience;
  },
  [SET_BUTTONS](state, buttons) {
    state.buttons = buttons;
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
