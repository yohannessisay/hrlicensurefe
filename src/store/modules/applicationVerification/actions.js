import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import {
    
} from "./mutation-types";

const userId = +localStorage.getItem("userId");

export default {
    
    async getAllUsers({ commit }) {
        try {
            const resp = await ApiService.get(baseUrl + "/profiles" );
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
  
  
    
   
};