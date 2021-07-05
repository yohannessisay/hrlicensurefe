
import {
    SET_VERIFICATION_UNASSIGNED,
    SET_VERIFICATION_UNASSIGNED_SEARCHED,
} from "./mutation-types";
export default {
    [SET_VERIFICATION_UNASSIGNED](state, data) {
        state.verificationUnassigned = data;
        state.verificationUnassignedSearched = data;
    },

    [SET_VERIFICATION_UNASSIGNED_SEARCHED](state, searchedVal) {
        state.verificationUnassignedSearched = searchedVal;
    },
}