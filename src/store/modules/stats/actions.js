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
  async getGenderStat() {
    try {
      const url = baseUrl + "/admins/dashboard/getGenderCount";
      const resp = await ApiService.get(url);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getLicensesCount() {
    try {
      const url = baseUrl + "/admins/dashboard/getLicensesCount";
      const resp = await ApiService.get(url);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getApplicationsCount() {
    try {
      const url = baseUrl + "/admins/dashboard/getApplicationsCount";
      const resp = await ApiService.get(url);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getRegionsCount() {
    try {
      const url = baseUrl + "/admins/dashboard/getRegionsCount";
      const resp = await ApiService.get(url);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  },
  
  
};
