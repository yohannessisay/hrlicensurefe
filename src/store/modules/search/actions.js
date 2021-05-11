import { SET_SEARCH } from "./mutation-types";
export default {
  searchApp({ commit }, search) {
    commit(SET_SEARCH, search);
  },
};
