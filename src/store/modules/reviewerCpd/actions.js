import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import { SET_CPD_USERS } from "./mutation-types";

export default {
  async getCpdCertified({ commit }) {
    try {
      const url =baseUrl+"/event/cpdCertifiedTrainees";
      const resp = await ApiService.get(url);
      commit(SET_CPD_USERS, resp.data.data);
      return resp.data
     
    } catch (error) {
      console.log(error);
    }
  },
};
