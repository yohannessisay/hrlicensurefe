import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";

export default {
  async notifyApplicant(context, data) {
    try {
      const url = baseUrl + "/notification/notify-applicant";
      const resp = await ApiService.post(url, data);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  },
  async notifyReviewer(context, data) {
    try {
      const url = baseUrl + "/notification/notify-reviewer";
      const resp = await ApiService.post(url, data);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getApplicantNotification(context, id) {
    try {
      const url = baseUrl + "/notification/applicant/" + id;
      const resp = await ApiService.get(url);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getReviewerNotification(context, id) {
    try {
      const url = baseUrl + "/notification/reviewer/" + id;
      const resp = await ApiService.get(url);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  },
  async updateApplicantNotification(context, data) {
    try {
      const url = baseUrl + "/notification/applicant/" + data.id;
      const resp = await ApiService.put(url, data);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  },
  async updateReviewerNotification(context, data) {
    try {
      const url = baseUrl + "/notification/reviewer/" + data.id;
      const resp = await ApiService.put(url, data);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  },
  async readAllAdminReviewerNotification() {
    try {
      const url = baseUrl + "/notification/reviewer/readAllAdminNotifications";
      const resp = await ApiService.put(url);
      return resp.data;
    } catch (error) {
      console.log(error);
    }
  },
  
};
