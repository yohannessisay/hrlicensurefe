import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import { SET_PROFILE } from "./mutation-types";

export default {
  async login({ commit }, profile) {
    try {
      const resp = await ApiService.post(baseUrl + "/login", profile, {});
      window.localStorage.setItem("token", resp.data["token"]);
      window.localStorage.setItem("userId", resp.data.data["id"]);
      window.localStorage.setItem("isApplicant", true);
      const profResp = await ApiService.get(
        baseUrl + "/profiles/user/" + resp.data.data["id"]
      );
      console.log(profResp)
      window.localStorage.setItem(
        "personalInfo",
        profResp.data.data
          ? JSON.stringify({
              name:
                profResp.data.data.name + " " + profResp.data.data.fatherName,
              gender: profResp.data.data.gender,
              profilePicturePath: profResp.data.data.profilePicture?profResp.data.data.profilePicture.filePath:'',
            })
          : ""
      );
      commit(SET_PROFILE, resp.data);
      return resp;
    } catch (error) {
      return error;
    }
  },

  async signUp({ commit }, profile) {
    try {
      const resp = await ApiService.post(baseUrl + "/users/add", profile, {});
      return resp;
    } catch (error) {
      return error;
    }
  },
};
