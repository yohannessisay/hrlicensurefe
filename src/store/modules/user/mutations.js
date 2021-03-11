import { SET_PROFILE, SET_AUTH } from "./mutation-types";

export default {
  [SET_PROFILE](state, userInfo) {
    state.userInfo = userInfo;
  },
  [SET_AUTH](state, auth) {
    state.auth = auth;
  },
};
