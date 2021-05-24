import { SET_ITEM_ID, SET_APPLICATION_TYPE } from "./mutation-types";

export default {
  [SET_ITEM_ID](state, id) {
    state.itemId = id;
  },
  [SET_APPLICATION_TYPE](state, applicationType) {
    state.applicationType = applicationType;
  },
};
