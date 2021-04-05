import ApiService from "../../../services/api.service";

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
  async getPendingOrders() {
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
  }
};
