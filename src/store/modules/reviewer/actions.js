import ApiService from "../../../services/api.service";

const baseUrl = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api";

export default {
  async getUnfinished(context, id) {
    try {
      // const resp = await ApiService.get("https://randomuser.me/api/?results=10");
      const url = baseUrl + "/newLicenses/user/" + id;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      const resp = { status: "Error" };
      return resp;
    }
  },
  async getAssignedToYou() {
    try {
      const resp = await ApiService.get("https://randomuser.me/api/?results=10");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getUnassigned() {
    try {
      // const resp = await ApiService.get("https://randomuser.me/api/?results=10");
      const resp = await ApiService.get(baseUrl + "/newLicenses/status/3");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getRecentlyFinished() {
    try {
      const resp = await ApiService.get("https://randomuser.me/api/?results=10");
      return resp;
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  async getProfile(context, id) {
    try {
      console.log(id);
      const url = baseUrl + "/profiles/" + id;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getLicense(context, id) {
    try {
      console.log(id);
      const url = baseUrl + "/newLicenses/" + id;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getAdmins() {
    try {
      const url = baseUrl + "/admins";
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getRoles(context, userID) {
    try {
      const url = baseUrl + "/admins/" + userID;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async assignReviewer({ commit }, assign) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/licenseReviewers/assign",
        assign
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getApplication(context, applicationId) {
    try {
      const url = baseUrl + "/newLicenses/" + applicationId;
      // const urll = baseUrl + "/newLicenses/125";
      const urll = baseUrl + "/newLicenses/190";
      const resp = await ApiService.get(urll);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getDocumentTypes() {
    try {
      const url = baseUrl + "/documentTypes";
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  }
};
