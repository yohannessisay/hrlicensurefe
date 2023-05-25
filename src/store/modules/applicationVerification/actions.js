import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import {} from "./mutation-types";
 
function urlFacilitator(detail,address) {
  let url = baseUrl+'/'+address;
  let parameters = detail.params ? detail.params : [];

  if (parameters) {
    parameters.forEach((param) => {
      url += param ? `${param.key}=${param.value}&` : "";
    });
  }
  url = url.substring(0, url.length - 1);
  return url;
}
export default {
  async getAllUsers({ commit }) {
    try {
      const resp = await ApiService.get(baseUrl + "/profiles/userInfo");
      return resp;
    } catch (error) {
      return error;
    }
  },

  async getRegions() {
    try {
      const resp = await ApiService.get(baseUrl + "/lookups/regions");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async saveVerificationRequest({ commit }, data) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/applicationVerification/add",
        data
      );
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getRequestsByRequester({ commit }, id) {
    try {
      const resp = await ApiService.get(
        baseUrl + "/applicationVerification/all/byRequester/" + id
      );
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getRequestsForFederal(context, id) {
    try {
      let respAll = await ApiService.get(baseUrl + "/applicationVerification/");
      respAll =
        respAll && respAll.data && respAll.data.data
          ? respAll.data.data.filter((ele) => ele.regionId == null)
          : [];
      const resp = await ApiService.get(
        baseUrl + "/applicationVerification/all/byRequester/" + id
      );
      return { byReviewer: resp.data.data, byRegion: respAll };
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getRequests(context, params) {
    try {
      
      let url = urlFacilitator(params,'applicationVerification?');

      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getVerificationByLicenseCode(context, code) {
    try {
      let resp = await ApiService.get(
        baseUrl + "/applicationVerification/byLicenseCode/" + code
      );

      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async saveResponse(id, data) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/applicationVerification/update",
        data
      );

      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
};
