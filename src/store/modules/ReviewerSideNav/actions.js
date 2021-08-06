import { SET_SELECTED_SIDE_BAR, GET_SELECTED_SIDE_BAR } from "./mutation-types";
export default {
    assignSelectedSideBar({ commit }, menu) {
        console.log("the value of menu is ", menu)
        commit(SET_SELECTED_SIDE_BAR, menu)
        // return menu;
    },
    getSelectedSideBar({commit, getters}) {
        console.log("getters is ", getters.getSelectedSideBar)
        commit(GET_SELECTED_SIDE_BAR, "newLicenseUnassigned");
    }
}