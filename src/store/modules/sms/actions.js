import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";

export default {
  async sendSms({ commit },data) {
    try {
      const url =baseUrl+"/sendSms";
      const resp = await ApiService.post(url,data);
      return resp.data
     
    } catch (error) {
      console.log(error);
    }
  },
};
