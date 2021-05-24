import { SET_ITEM_ID, SET_APPLICATION_TYPE } from "./mutation-types";

const url = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api/";
const userId = localStorage.getItem("userId");

export default {
  setItemID({ commit }, id) {
    commit(SET_ITEM_ID, id);
  },
  setApplicationType({ commit }, applicationType) {
    commit(SET_APPLICATION_TYPE, applicationType);
  },
};
