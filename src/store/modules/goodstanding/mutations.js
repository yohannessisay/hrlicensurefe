import {
  SET_LICENSE,
  SET_LICENSE_COPY,
  SET_SERVICE_FEE,
  SET_GOODSTANDING_LETTER,
  SET_BUTTONS,
  SET_APPLICATION_ID,
  SET_DOCUMENT_SPEC,
  SET_DRAFT,
  SET_REMARK,
  SET_DECLINED_FIELDS,
  SET_ACCEPTED_FIELDS,
} from "./mutation-types";

export default {
  [SET_LICENSE](state, license) {
    state.license = license;
  },
  [SET_LICENSE_COPY](state, licenseCopy) {
    state.licenseCopy = licenseCopy;
  },
  [SET_SERVICE_FEE](state, serviceFee) {
    state.serviceFee = serviceFee;
  },
  [SET_GOODSTANDING_LETTER](state, goodStandingLetter) {
    state.goodStandingLetter = goodStandingLetter;
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
