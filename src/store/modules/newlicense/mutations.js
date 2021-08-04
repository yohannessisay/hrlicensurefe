import {
  SET_LICENSE,
  SET_PASSPORT,
  SET_HEALTH_EXAM_CERT,
  SET_LANGUAGE,
  SET_PROFESSIONAL_DOCUMENT,
  SET_HERQA,
  SET_SUPPORT_LETTER,
  SET_COC,
  SET_EDUCATIONAL_DOCUMENT,
  SET_WORK_EXPERIENCE,
  SET_SERVICE_FEE,
  SET_LETTER_FROM_ORG,
  SET_RENEWED_LICENSE,
  SET_PROFESSIONAL_LICENSE,
  SET_BUTTONS,
  SET_APPLICATION_ID,
  SET_DOCUMENT_SPEC,
  SET_DRAFT,
  SET_REMARK,
  SET_DECLINED_FIELDS,
  SET_ACCEPTED_FIELDS,
  SET_PAYROLL,
} from "./mutation-types";

export default {
  [SET_LICENSE](state, license) {
    state.license = license;
  },
  [SET_PASSPORT](state, passport) {
    state.passport = passport;
  },
  [SET_HEALTH_EXAM_CERT](state, healthExamCert) {
    state.healthExamCert = healthExamCert;
  },
  [SET_SERVICE_FEE](state, serviceFee) {
    state.serviceFee = serviceFee;
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
  [SET_PAYROLL](state, payroll) {
    state.payroll = payroll;
  },
  [SET_LETTER_FROM_ORG](state, letter) {
    state.letterfromOrg = letter;
  },
  [SET_RENEWED_LICENSE](state, license) {
    state.renewedLicense = license;
  },
  [SET_PROFESSIONAL_LICENSE](state, license) {
    state.professionalLicense = license;
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
  [SET_REMARK](state, remark) {
    state.remark = remark;
  },
  [SET_DECLINED_FIELDS](state, field) {
    state.declinedFields = field;
  },
  [SET_ACCEPTED_FIELDS](state, field) {
    state.acceptedFields = field;
  },
};
