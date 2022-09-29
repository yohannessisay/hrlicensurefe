import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import { APP_STATUSES } from "./mutation-types";

export default {
  async getAppStatuses({ commit }) {
    try {
      const resp = await ApiService.get(baseUrl + "/applicationStatuses"); 
      commit(APP_STATUSES, resp.data.data);
      return resp.data.data;
    } catch (error) {
      return error;
    }
  },
 
};
