import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";

export default {
  async getStats() {
    try {
      const url = baseUrl + "/admins/stats/count";
      const resp = await ApiService.get(url);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  },
};
