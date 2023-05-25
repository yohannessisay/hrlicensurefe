import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import reviewerUrls from "../../shared/reviewerUrls";
function urlFacilitator(detail) {
  let url = `${reviewerUrls.goodstanding}${detail[0].statusId}?`;
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
  async getGoodstandingReport() {
    try {
      const approved = await ApiService.get(
        baseUrl + "/goodStandings/status/5"
      );
      const declined = await ApiService.get(
        baseUrl + "/goodStandings/status/6"
      );
      const review = await ApiService.get(baseUrl + "/goodStandings/status/7");

      return [approved, declined, review];
    } catch (err) {
      return err;
    }
  },

  async getGoodstandingsByStatus(context, parameters) {
    let url = urlFacilitator(parameters);
    const resp = await ApiService.get(url);

    return resp.data ? resp.data.data : [];
  },
  async getOtherGoodstandingsByStatus(context, parameters) {
    let url = urlFacilitator(parameters);
    url = url + "&others=1";
    const resp = await ApiService.get(url);

    return resp.data ? resp.data.data : [];
  },

  async getGoodStandingAllApproved(context, parameters) {
    let url = baseUrl + "/goodstandings/all/approved?";

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

  async getGoodstandingLicensed(context, parameters) {
    let url = baseUrl + "/goodStandings/all/licensed?";
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
  async getCertificateIssuedGoodStanding() {
    // const url = baseUrl + "/goodStandings/certificat/issued";
    // const resp = await ApiService.get(url);
    // const goodStandingAllLicensed = resp.data.data;
  },
};
