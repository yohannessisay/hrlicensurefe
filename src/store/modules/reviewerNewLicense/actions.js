import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import reviewerUrls from "../../../shared/reviewerUrls";
function urlFacilitator(detail) {
 
  let url = `${reviewerUrls.newLicense}${detail[0].statusId}?`;
  let parameters = detail[1].params ? detail[1].params : [];

  if (parameters) {
    parameters.forEach(param => {
      url +=
        (param.value && param.value != "") || param.value == 0
          ? `${param.key}=${param.value}&`
          : "";
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
  async getNewLicenseUnassigned(context, parameters) {
    let url = urlFacilitator(parameters);
    const resp = await ApiService.get(url);
 
    return resp.data ? resp.data.data : [];
  },
  async getNewLicenseFromOtherRegion(context, statusId) {
    const url = baseUrl + "/newLicenses/status/" + statusId;
    const resp = await ApiService.get(url);

    const transferdApplications = resp.data.data.filter(unassigned => {
      return unassigned.transferFromId != null;
    });
    return transferdApplications;
  },

  async getNewLicenseUnfinished(context, adminStatus) {
    const url = baseUrl + "/newLicenses/status/" + adminStatus[0];

    const resp = await ApiService.get(url);

    const myUnfinished = resp.data.data.filter(function(e) {
      return (
        e.licenseReviewer && e.licenseReviewer.reviewerId == adminStatus[1]
      );
    });

    return myUnfinished;
  },

  async getNewLicenseOthersUnfinished(context, adminStatus) {
    const url = baseUrl + "/newLicenses/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    const othresUnfinished = resp.data.data.filter(function(e) {
      return (
        e.licenseReviewer && e.licenseReviewer.reviewerId !== adminStatus[1]
      );
    });

    return othresUnfinished;
  },

  async getNewLicenseAssigned(context, adminStatus) {
    const url = baseUrl + "/newLicenses/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    const assignedToMe = resp.data.data.filter(function(e) {
      return (
        e.licenseReviewer && e.licenseReviewer.reviewerId === adminStatus[1]
      );
    });

    return assignedToMe;
  },

  async getNewLicenseOthersAssigned(context, adminStatus) {
    const url = baseUrl + "/newLicenses/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    const othresUnfinished = resp.data.data.filter(function(e) {
      return (
        e.licenseReviewer && e.licenseReviewer.reviewerId !== adminStatus[1]
      );
    });
    return othresUnfinished;
  },

  async getNewLicenseApproved() {
    const url = baseUrl + "/newLicenses/all/approved";
    const resp = await ApiService.get(url);
    return resp.data.data;
  },

  async getNewLicenseDeclined(context, adminStatus) {
    const url = baseUrl + "/newLicenses/status/" + adminStatus[0];
    const resp = await ApiService.get(url);

    const declined = resp.data.data.filter(function(e) {
      return (
        e.licenseReviewer && e.licenseReviewer.reviewerId == adminStatus[1]
      );
    });
    const othersDeclined = resp.data.data.filter(function(e) {
      return (
        e.licenseReviewer && e.licenseReviewer.reviewerId != adminStatus[1]
      );
    });
    return { byYou: declined, byOthers: othersDeclined };
  },

  async getNewLicenseUnderSuperVision(context, adminStatus) {
    const url = baseUrl + "/newlicenses/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    const underSuperVision = resp.data.data.filter(function(e) {
      return (
        e.licenseReviewer && e.licenseReviewer.reviewerId === adminStatus[1]
      );
    });
    return underSuperVision;
  },

  async getNewLicenseOthersUnderSuperVision(context, adminStatus) {
    const url = baseUrl + "/newlicenses/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    const othersUnderSuperVision = resp.data.data.filter(function(e) {
      return (
        e.licenseReviewer && e.licenseReviewer.reviewerId !== adminStatus[1]
      );
    });
    return othersUnderSuperVision;
  },

  async getNewLicenseOnReview(context, parameters) {
    let url = urlFacilitator(parameters);
    const resp = await ApiService.get(url);

    return resp.data ? resp.data.data : [];
  },

  async getNewLicenseRevoked(context, revokeStatus) {
    const url = baseUrl + "/newlicenses/status/" + revokeStatus;
    const resp = await ApiService.get(url);

    let revoked = resp.data.data;

    return revoked;
  },
  async getNewLicenseReturned(context, returnStatus) {
    const url = baseUrl + "/newlicenses/status/" + returnStatus;
    const resp = await ApiService.get(url);

    let returned = resp.data.data;

    return returned;
  },
  async getNewLicenseSuspended(context, suspendStatus) {
    const url = baseUrl + "/newlicenses/status/" + suspendStatus;
    const resp = await ApiService.get(url);

    let suspended = resp.data.data;

    return suspended;
  },

  async getNewLicenseOthersOnReview(context, apiParameters) {
    let url = urlFacilitator(apiParameters);
    url = url + "&others=1";
    const resp = await ApiService.get(url);

    return resp.data ? resp.data.data : [];
  },

  async getNewLicenseLicensed(context, adminId) {
    const url = baseUrl + "/newlicenses/all/licensed";
    const resp = await ApiService.get(url);
    const byYou = resp.data.data.filter(function(e) {
      return e.licenseReviewer && e.licenseReviewer.reviewerId == adminId;
    });
    const licensed = resp.data.data.filter(function(e) {
      return e.licenseReviewer && e.licenseReviewer.reviewerId != adminId;
    });
    return { byYou: byYou, byOthers: licensed };
  },

  async getNewLicenseReApply(context, parameters) {
    let url = urlFacilitator(parameters);
    const resp = await ApiService.get(url);

    return resp.data ? resp.data.data : [];
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
  }
};
