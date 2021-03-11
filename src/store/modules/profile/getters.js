export default {
  getProfile: state => state.profile,
  getPersonalInfo: state => state.personalInfo,
  getAddress: state => state.address,
  getContact: state => state.contact,
  addProfileLoading: state => state.addProfileLoading,
  addProfileSuccess: state => state.addProfileSuccess,
  addProfileError: state => state.addProfileError
};
