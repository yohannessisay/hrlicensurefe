import { SET_SEARCH } from "./mutation-types";
export default {
  [SET_SEARCH](state, search) {
    state.search = search;
  },
};
