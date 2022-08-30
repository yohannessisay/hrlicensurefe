import { SET_STATS } from "./mutation-types";

export default {
  [SET_STATS](state, data) {
    state.stats = data;
  },
};
