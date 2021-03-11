import axios from "axios";
export const setProfile = ({ commit }, profile) => {
  return axios
    .post("http://localhost:5000/api/profiles/add:2", { profile })
    .then((response) => {
      const newProfile = response.data;
      commit("SET_PROFILE", newProfile);
      return newProfile;
    })
    .catch((err) => {
      return err;
    });
};

export const setProfileInfo = ({ commit }, profileInfo) => {
  commit("SET_PERSONAL_INFO", profileInfo);
};

export const setAddress = ({ commit }, address) => {
  commit("SET_ADDRESS", address);
};

export const setContact = ({ commit }, contact) => {
  commit("SET_CONTACT", contact);
};

export const apiCall = ({ commit }, api) => {
  commit("SET_API_CALL", api);
};
