import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import reviewerUrls from "../../shared/reviewerUrls";
function urlFacilitator(detail) {
  let url = `${reviewerUrls.newLicense}${detail[0].statusId}?`;
  let parameters = detail[1].params ? detail[1].params : [];

  if (parameters) {
    parameters.forEach((param) => {
      url += param ? `${param.key}=${param.value}&` : "";
    });
  }
  url = url.substring(0, url.length - 1);
  return url;
}
export default {
  async getNewLicenseReport() {
    try {
      const approved = await ApiService.get(baseUrl + "/newLicenses/status/5");
      const declined = await ApiService.get(baseUrl + "/newLicenses/status/6");
      const review = await ApiService.get(baseUrl + "/newLicenses/status/7");
      return [approved, declined, review];
    } catch (err) {
      return err;
    }
  },
  async getNewLicenseByStatus(context, parameters) {
    let url = urlFacilitator(parameters);
    const resp = await ApiService.get(url);

    return resp.data ? resp.data.data : [];
  },
  async getOthersNewLicenseByStatus(context, parameters) {
    let url = urlFacilitator(parameters);
    url = url + "&others=1";
    const resp = await ApiService.get(url);

    return resp.data ? resp.data.data : [];
  },

  async getNewLicenseApproved(context, parameters) {
    let url = baseUrl + "/newLicenses/all/approved?";

    if (parameters[0] && parameters[0].params) {
      parameters[0].params.forEach((param) => {
        url += param ? `${param.key}=${param.value}&` : "";
      });
    }
    url = url.substring(0, url.length - 1);

    parameters && parameters[1] && parameters[1].other == true
      ? (url = url + "&others=1")
      : "";

    const resp = await ApiService.get(url);

    return resp.data ? resp.data.data : [];
  },

  async getNewLicenseLicensed(context, parameters) {
    let url = baseUrl + "/newlicenses/all/licensed?";
    if (parameters) {
      parameters.forEach((param) => {
        url += param ? `${param.key}=${param.value}&` : "";
      });
    }
    url = url.substring(0, url.length - 1);
    const resp = await ApiService.get(url);
    let license = resp.data.data;
    return license;
  },

  async getNewLicenseByUserId(context, userId) {
    try {
      const resp = await ApiService.get(
        baseUrl + "/newLicenses/user/" + userId
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getNewLicenseApplicationById(context, id) {
    try {
      const url = baseUrl + "/newLicenses/" + id;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getNewLicenseApplicationByCode(context, code) {
    try { 
      const url = baseUrl + "/newLicenses/code/" + code;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
};
