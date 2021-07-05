import {
    SET_GOOD_STANDING_UNASSIGNED,
    SET_GOOD_STANDING_UNASSIGNED_SEARCHED,
} from "./mutation-types";
export default {
    [SET_GOOD_STANDING_UNASSIGNED](state, data) {
        state.goodStandingUnassigned = data;
        state.goodStandingUnassignedSearched = data;
    },

    [SET_GOOD_STANDING_UNASSIGNED_SEARCHED](state, searchedVal) {
        console.log("searched val is ", searchedVal)
        state.goodStandingUnassignedSearched = searchedVal;
    },
}