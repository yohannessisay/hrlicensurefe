import { SET_EDUCATION_LEVEL } from "./mutation-types";
import { SET_REGIONS } from "./mutation-types";
export default {
  [SET_EDUCATION_LEVEL](state, educationalLevel) {
    state.educationalLevel = educationalLevel;
  },
  [SET_REGIONS](state, regions) {
    state.regions = regions;
  },
};
