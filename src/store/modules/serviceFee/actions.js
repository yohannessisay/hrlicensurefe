import ApiService from "../../../services/api.service";
import { SET_ITEM_ID, SET_APPLICATION_TYPE } from "./mutation-types";

const url = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api/";

const userId = localStorage.getItem("userId");

export default {
  setItemID({ commit }, id) {
    commit(SET_ITEM_ID, id);
  },
  setApplicationType({ commit }, applicationType) {
    commit(SET_APPLICATION_TYPE, applicationType);
  },
  async getApplicationStatuses() {
    try {
      const resp = await ApiService.get(url + "applicationStatuses");
      return resp;
    } catch (error) {
      return error;
    }
  },
  async addLicense({ commit }, license) {
    if (license.appType == "newLicense") {
      try {
        const resp = await ApiService.put(
          url + "newLicenses/" + license.id,
          license.save
        );
        return resp;
      } catch (error) {
        return error;
      }
    } else if (license.appType == "renewal") {
      try {
        const resp = await ApiService.put(
          url + "renewals/" + license.id,
          license.save
        );
        return resp;
      } catch (error) {
        return error;
      }
    } else if (license.appType == "verification") {
      try {
        const resp = await ApiService.put(
          url + "verifications/" + license.id,
          license.save
        );
        return resp;
      } catch (error) {
        return error;
      }
    } else {
      try {
        const resp = await ApiService.put(
          url + "goodStandings/" + license.id,
          license.save
        );
        return resp;
      } catch (error) {
        return error;
      }
    }
  },
  async uploadDocuments({ commit }, license) {
    if (license.appT == "newLicense") {
      try {
        const resp = await ApiService.post(
          url + "documentUploads/licenseDocument/" + license.id,
          license.document,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        return resp;
      } catch (error) {
        return error;
      }
    } else if (license.appT == "renewal") {
      try {
        const resp = await ApiService.post(
          url + "documentUploads/renewalDocument/" + license.id,
          license.document,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        return resp;
      } catch (error) {
        return error;
      }
    } else if (license.appT == "verification") {
      try {
        const resp = await ApiService.post(
          url + "documentUploads/verificationDocument/" + license.id,
          license.document,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        return resp;
      } catch (error) {
        return error;
      }
    } else {
      try {
        const resp = await ApiService.post(
          url + "documentUploads/goodStandingDocument/" + license.id,
          license.document,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        return resp;
      } catch (error) {
        return error;
      }
    }
  },
};
