import ApiService from "../../../services/api.service";
import { SET_PROFILE, SET_AUTH } from "./mutation-types";
export default {
  setContact({ commit }, userInfo) {
    commit(SET_PROFILE, userInfo);
  },

  apiCall({ commit }, auth) {
    commit(SET_AUTH, auth);
  },
};
