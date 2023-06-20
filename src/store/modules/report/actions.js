import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import { SET_REPORT } from "./mutation-types";
function urlFacilitator(detail,address) {
  let url = baseUrl+'/'+address;
  let parameters = detail[0].params ? detail[0].params : [];

  if (parameters) {
    parameters.forEach((param) => {
      url += param ? `${param.key}=${param.value}&` : "";
    });
  }
  url = url.substring(0, url.length - 1);
  return url;
}
export default {
  setReport({ commit }, report) {
    commit(SET_REPORT, report);
  },
  async getReport({ commit }, AppId, RId, date) {
    try {
      const approved = await ApiService.get(baseUrl + "/renewals/add");
      const declined = await ApiService.get(baseUrl + "/renewals/add");
      const underReview = await ApiService.get(baseUrl + "/renewals/add");

      return [approved, declined, underReview];
    } catch (error) {
      return error;
    }
  },
  async getNewLicenseReport(context, parameters) {
    try {
      let url = urlFacilitator(parameters,'newLicenseReport?');
 
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getAdminReport({ commit }) {
    try {
    

      const resp = await ApiService.get(baseUrl + "/admin/Report");
     
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getRenewalReport(context,parameters) {
    try {
      let url = urlFacilitator(parameters,'renewalReport?');
 
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getVerificationReport({ commit }) {
    try {
      const resp = await ApiService.get(baseUrl + "/verificationReport");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getGoodstandingReport(context,parameters) {
    try {
      let url = urlFacilitator(parameters,'goodStandingReport?');
 
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getRegions({ commit }) {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/regions");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getZones({ commit }, regionID) {
    try {
      const baseUrl = baseUrl + "/lookups/zones/" + regionID;
      const resp = await ApiService.get(baseUrl);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getWoredas({ commit }, zoneID) {
    try {
      const baseUrl = baseUrl + "/lookups/woredas/" + zoneID;
      const resp = await ApiService.get(baseUrl);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getapplicationStatuses({ commit }) {
    try {
      const resp = await ApiService.get(baseUrl + "/applicationStatuses");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getProfessionalTypes({ commit }) {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/professionalTypes");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getIndividualDetail(context, adminId) {
    try {
      const resp = await ApiService.get(baseUrl + "/admin/report/getIndividualDetail/" + adminId);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
};
