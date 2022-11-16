import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import {} from "./mutation-types";

const userId = +localStorage.getItem("userId");

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
  async getRequestsByRegion({ commit }, id) {
    try {
      const respReg = await ApiService.get(
        baseUrl + "/applicationVerification/all/byRegion/" + id.regionId
      );
      const resp = await ApiService.get(
        baseUrl + "/applicationVerification/all/byRequester/" + id.adminId
      );
      return { byReviewer: resp.data.data, byRegion: respReg.data.data };
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
