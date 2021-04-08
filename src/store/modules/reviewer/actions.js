import ApiService from "../../../services/api.service";

const baseUrl = "http://localhost:5000/api";

export default {
  async getUnfinished() {
    try {
      const resp = await ApiService.get("https://randomuser.me/api/?results=10");
      return resp;
    } catch (error) {
      const resp = error;
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
      const resp = await ApiService.get("https://randomuser.me/api/?results=10");
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
};
