
import {
    SET_VERIFICATION_UNASSIGNED,
    SET_VERIFICATION_UNASSIGNED_SEARCHED,

    SET_VERIFICATION_UNFINISHED,
    SET_VERIFICATION_UNFINISHED_SEARCHED,
    SET_VERIFICATION_OTHERS_UNFINISHED,
    SET_VERIFICATION_OTHERS_UNFINISHED_SEARCHED,
} from "./mutation-types";
export default {
    [SET_VERIFICATION_UNASSIGNED](state, data) {
        state.verificationUnassigned = data;
        state.verificationUnassignedSearched = data;
    },

    [SET_VERIFICATION_UNASSIGNED_SEARCHED](state, searchedVal) {
        state.verificationUnassignedSearched = searchedVal;
    },

    [SET_VERIFICATION_UNFINISHED](state, data) {
        state.verificationUnfinished = data;
        state.verificationUnfinishedSearched = data;
    },
    [SET_VERIFICATION_UNFINISHED_SEARCHED](state, searchedVal) {
        state.verificationUnfinishedSearched = searchedVal;
    },
    [SET_VERIFICATION_OTHERS_UNFINISHED](state, data) {
        state.verificationOthersUnfinished = data;
        state.verificationOthersUnfinishedSearched = data;
    },
    [SET_VERIFICATION_OTHERS_UNFINISHED_SEARCHED](state, searchedVal) {
        state.verificationOthersUnfinishedSearched = searchedVal;
    },
}