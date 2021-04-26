import {
  SET_LICENSE,
  SET_RENEWAL_PHOTO,
  SET_RENEWAL_HEALTH_EXAM_CERT,
  SET_RENEWAL_LETTER,
  SET_RENEWAL_WORK_EXPERIENCE,
  SET_RENEWAL_SERVICE_FEE,
  SET_RENEWAL_CPD,
  SET_PREVIOUS_LICEENSE,
  SET_BUTTONS,
  SET_APPLICATION_ID,
  SET_DOCUMENT_SPEC,
  SET_DRAFT,
} from "./mutation-types";

export default {
  [SET_LICENSE](state, license) {
    state.license = license;
  },
  [SET_RENEWAL_PHOTO](state, renewalPhoto) {
    state.photo = renewalPhoto;
  },
  [SET_RENEWAL_LETTER](state, renewalLetter) {
    state.letterFromHiringInstitution = renewalLetter;
  },
  [SET_RENEWAL_HEALTH_EXAM_CERT](state, renewalHealthExamCert) {
    state.healthExamCert = renewalHealthExamCert;
  },
  [SET_PREVIOUS_LICEENSE](state, previousLicense) {
    state.letterFromHiringInstitution = previousLicense;
  },
  [SET_RENEWAL_SERVICE_FEE](state, renewalServiceFee) {
    state.serviceFee = renewalServiceFee;
  },
  [SET_RENEWAL_CPD](state, renewalCpd) {
    state.cpd = renewalCpd;
  },
  [SET_RENEWAL_WORK_EXPERIENCE](state, renewalWorkExperience) {
    state.workExperience = renewalWorkExperience;
  },
  [SET_BUTTONS](state, buttons) {
    state.buttons = buttons;
  },
  [SET_APPLICATION_ID](state, id) {
    state.applicationId = id;
  },
  [SET_DOCUMENT_SPEC](state, documentSpec) {
    state.documentSpec = documentSpec;
  },
  [SET_DRAFT](state, draft) {
    state.draft = draft;
  },
};
