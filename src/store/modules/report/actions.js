import ApiService from "../../../services/api.service";
const url = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api/";
export default {
  async getReport({ commit }, AppId, RId, date) {
    try {
      const approved = await ApiService.get(url + "renewals/add");
      const declined = await ApiService.get(url + "renewals/add");
      const underReview = await ApiService.get(url + "renewals/add");

      return [approved, declined, underReview];
    } catch (error) {
      return error;
    }
  },
  async getNewLicenseReport({ commit }) {
    try {
      const resp = await ApiService.get(url + "newLicenseReport");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getRenewalReport({ commit }) {
    try {
      const resp = await ApiService.get(url + "renewalReport");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getVerificationReport({ commit }) {
    try {
      const resp = await ApiService.get(url + "verificationReport");
      return resp;
    } catch (error) {
      return error;
    }
  },
  // async getGoodstandingReport({ commit }) {
  //   try {
  //     const resp = await ApiService.get(url + "goodstandingReport");
  //     return resp;
  //   } catch (error) {
  //     return error;
  //   }
  // },
};
