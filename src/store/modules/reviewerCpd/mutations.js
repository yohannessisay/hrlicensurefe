import { SET_CPD_USERS } from "./mutation-types";

export default {
  [SET_CPD_USERS](state, data) {
    state.users = data;
  },
};
