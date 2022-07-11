import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import { SET_CPD_USERS } from "./mutation-types";

export default {
  async getCpdCertified({ commit }) {
    try {
      const url ="http://192.168.0.101:5000/api/event/cpdCertifiedTrainees";
      const resp = await ApiService.get(url);
      commit(SET_CPD_USERS, resp.data.data);
      return resp.data
     
    } catch (error) {
      console.log(error);
    }
  },
};
