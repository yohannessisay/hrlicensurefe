import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import {
    
} from "./mutation-types";

const userId = +localStorage.getItem("userId");

export default {
    
    async getAllUsers({ commit }) {
        try {
            const resp = await ApiService.get(baseUrl + "/profiles/userInfo" );
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
    async saveVerificationRequest({commit},data) {
        try {
            const resp = await ApiService.post(baseUrl + "/applicationVerification/add", data);
            return resp;
        } catch (error) {
            const resp = error;
            return resp;
        }
    },
    async getRequestsByRequester({commit},id) {
        try {
            const resp = await ApiService.get(baseUrl + "/applicationVerification/all/byRequester/" + id);
            return resp;
        } catch (error) {
            const resp = error;
            return resp;
        }
    },
  
  
    
   
};