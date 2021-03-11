import { createStore } from "vuex";
import profile from "./modules/profile/index.js";
import user from "./modules/user/index.js";

export default createStore({
  modules: {
    profile,
    user
  }
})

