import ApiService from "../../../services/api.service";
const url = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api/";
export default {
  async getApplicantType() {
    try {
      const resp = await ApiService.get(url + "lookups/applicantTypes");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getRegions() {
    try {
      const resp = await ApiService.get(url + "lookups/regions");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getGovernment({ commit }, id) {
    try {
      const resp = await ApiService.get(url + "lookups/OccupationTypes");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getNativeLanguage({ commit }, id) {
    try {
      const resp = await ApiService.get(url + "lookups/NativeLanguages");
      return resp;
    } catch (error) {
      return error;
    }
  },
};