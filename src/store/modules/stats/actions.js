import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import { SET_STATS } from "./mutation-types";

export default {
  async getStats({ commit }) {
    try {
      const url =baseUrl+"/admins/stats/count";
      const resp = await ApiService.get(url);
      commit(SET_STATS, resp.data.data);
      return resp.data
     
    } catch (error) {
      console.log(error);
    }
  },
};
