export default {
  getUser: (state) => state.userInfo,
  getLoading: (state) => state.addProfileLoading,
  getSuccess: (state) => state.addProfileSuccess,
  getError: (state) => state.addProfileError,
};
