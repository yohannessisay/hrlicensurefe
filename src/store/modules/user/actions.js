import axios from "axios";

export const setUserInfo = ({ commit }, userInfo) => {
  console.log(userInfo);
  // return axios
  // .post("http://localhost:5000/api/profiles/add", { userInfo })
  // .then((response) => {
  //   const user = response.data;
  //   commit("SET_USER_INFO", user);
  //   return user;
  // })
  // .catch((err) => {
  //   return err;
  // });
};

export const setAuth = ({ commit }, auth) => {
  commit("SET_AUTH", auth);
};
