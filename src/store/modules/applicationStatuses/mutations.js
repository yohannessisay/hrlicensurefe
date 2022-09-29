import { APP_STATUSES } from "./mutation-types";
export default {
  [APP_STATUSES](state, appStatuses) {
    state.appStatuses = appStatuses;
  },
};
