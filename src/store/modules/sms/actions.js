import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";

export default {
  async sendSms({ commit }, data) {
    try {
      const url = baseUrl + "/sendSms";
      const resp = await ApiService.post(url, data);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  },
  async sendSmsOtp(context, data) {
    try {
      const url = baseUrl + "/sendSms/sendSmsOtp";
      const resp = await ApiService.post(url, data);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  },
  async verifySmsOtp(context, data) {
    try {
      const url = baseUrl + "/sendSms/verifySmsOtp";
      const resp = await ApiService.post(url, data);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  },
};
