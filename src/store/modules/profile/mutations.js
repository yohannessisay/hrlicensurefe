import axios from "axios";
export const SET_PROFILE = (state, profile) => {
  state.profile = profile;
};

export const SET_PERSONAL_INFO = (state, personalInfo) => {
  state.personalInfo = personalInfo;
};

export const SET_ADDRESS = (state, address) => {
  state.address = address;
};

export const SET_CONTACT = (state, contact) => {
  state.contact = contact;
};

export const SET_API_CALL = (state, apiCall) => {
  state.apiCall = apiCall;
};
