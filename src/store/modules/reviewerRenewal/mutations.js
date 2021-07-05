import {
    SET_RENEWAL_UNASSIGNED,
    SET_RENEWAL_UNASSIGNED_SEARCHED,
} from "./mutation-types";
export default {
    [SET_RENEWAL_UNASSIGNED](state, data) {
        state.renewalUnassigned = data;
        state.renewalUnassignedSearched = data;
    },

    [SET_RENEWAL_UNASSIGNED_SEARCHED](state, searchedVal) {
        state.renewalUnassignedSearched = searchedVal;
    },
}