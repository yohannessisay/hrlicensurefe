import { SET_EDUCATION_LEVEL,SET_ALL_DOCUMENT_SPECS, } from "./mutation-types";
import { SET_REGIONS } from "./mutation-types";
export default {
  [SET_EDUCATION_LEVEL](state, educationalLevel) {
    state.educationalLevel = educationalLevel;
  },
  [SET_REGIONS](state, regions) {
    state.regions = regions;
  },

  [SET_ALL_DOCUMENT_SPECS](state, allDocumentSpecs) {
    state.allDocumentSpecs = allDocumentSpecs;
  },
};
