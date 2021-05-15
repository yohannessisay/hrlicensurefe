import {
    SET_UNASSIGNED,
    SET_UNASSIGNED_SEARCHED
} from "./mutation-types";

export default {
    [SET_UNASSIGNED] (state, data) {
        state.unassigned = data
        state.unassignedSearched = data
    },
    [SET_UNASSIGNED_SEARCHED] (state, searchedVal) {
        state.isSearching = state.isSearching + 1
        state.unassignedSearched = searchedVal
    }
}