import ApiService from "../../../services/api.service";
const url = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api/";
export default {
  async getReport({ commit }, AppId, RId,date) {
    try {
      const approved = await ApiService.get(url + "renewals/add");
      const declined = await ApiService.get(url + "renewals/add");
      const underReview = await ApiService.get(url + "renewals/add");

      return [approved, declined, underReview];
    } catch (error) {
      return error;
    }
  },
};


