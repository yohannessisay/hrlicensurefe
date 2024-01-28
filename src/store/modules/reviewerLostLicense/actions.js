import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import reviewerUrls from "../../shared/reviewerUrls";
function urlFacilitator(detail) {
  let url = `${reviewerUrls.lostLicense}${detail[0].statusId}?`;
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
  async getLostLicenseReport() {
    try {
      const approved = await ApiService.get(
        baseUrl + "/lostLicense/status/5"
      );
      const declined = await ApiService.get(
        baseUrl + "/lostLicense/status/6"
      );
      const review = await ApiService.get(baseUrl + "/lostLicense/status/7");

      return [approved, declined, review];
    } catch (err) {
      return err;
    }
  },
  async getLostLicenseApplication(context, id) {
    try {
      const url = baseUrl + "/lostLicense/" + id;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async assignReviewer(context, assign) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/lostLicenseReviewers/assign",
        assign
      );

      return resp;
    } catch (error) {
      return error;
    }
  },
  async transferLicenseReview(context, transfer) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/lostLicenseReviewers/transfer",
        transfer
      );

      return resp;
    } catch (error) {
      return error;
    }
  },
  async getLostLicensesByStatus(context, parameters) {
    let url = urlFacilitator(parameters);
    const resp = await ApiService.get(url);

    return resp.data ? resp.data.data : [];
  },
  async getOtherlostLicenseByStatus(context, parameters) {
    let url = urlFacilitator(parameters);
    url = url + "&others=1";
    const resp = await ApiService.get(url);

    return resp.data ? resp.data.data : [];
  },

  
  async editLostLicense(context, license) {
    try {
      const resp = await ApiService.put(
        baseUrl + "/lostLicense/" + license.data.id,
        license
      );

      return resp;
    } catch (error) {
      return error;
    }
  },
  async getLostLicenseAllApproved(context, parameters) {
    let url = baseUrl + "/lostLicense/all/approved?";

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

  async getLostLicenseLicensed(context, parameters) {
    let url = baseUrl + "/lostLicense/all/licensed?";
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
 
};
