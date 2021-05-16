import {
    SET_UNASSIGNED,
    SET_UNASSIGNED_SEARCHED,
    SET_ASSIGNED_TO_YOU,
    SET_ASSIGNED_TO_YOU_SEARCHED,
    SET_UNFINISHED,
    SET_UNFINISHED_SEARCHED,
    SET_RECENTLY_FINISHED,
    SET_RECENTLY_FINISHED_SEARCHED,
} from "./mutation-types";

export default {
    [SET_UNASSIGNED] (state, data) {
        state.unassigned = data
        state.unassignedSearched = data
    },
    [SET_UNASSIGNED_SEARCHED] (state, searchedVal) {
        state.unassignedSearched = searchedVal
    },
    [SET_ASSIGNED_TO_YOU] (state, data) {
        state.assgnedToYou = data
        state.assignedToYouSearched = data
    },
    [SET_ASSIGNED_TO_YOU_SEARCHED] (state, searchedVal) {
        state.assignedToYouSearched = searchedVal
    },
    [SET_UNFINISHED] (state, data) {
      state.unfinished = data
      state.unfinishedSearched = data  
    },
    [SET_UNFINISHED_SEARCHED] (state, searchedVal) {
        state.unfinishedSearched = searchedVal
    },
    [SET_RECENTLY_FINISHED] (state, data) {
        state.recentlyFinished = data
        state.recentlyFinishedSearched = data
    },
    [SET_RECENTLY_FINISHED_SEARCHED] (state, searchedVal) {
        state.recentlyFinishedSearched = searchedVal
    }
}