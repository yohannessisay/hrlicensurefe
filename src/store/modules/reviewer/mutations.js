import {
    SET_UNASSIGNED,
    SET_UNASSIGNED_SEARCHED,
    SET_ASSIGNED_TO_YOU,
    SET_ASSIGNED_TO_YOU_SEARCHED,
    SET_UNFINISHED,
    SET_UNFINISHED_SEARCHED,
    SET_RECENTLY_FINISHED,
    SET_RECENTLY_FINISHED_SEARCHED,
    SET_ASSIGNED_FOR_EVERYONE,
    SET_ASSIGNED_FOR_EVERYONE_SEARCHED,
    SET_EVEYONE_UNFINISHED,
    SET_EVEYONE_UNFINISHED_SEARCHED,
    SET_ALL_RECENTLY_FINISHED_SEARCHED,
    SET_ALL_PENDING_PAYMENTS,
    SET_ALL_PENDING_PAYMENTS_SEARCHED,
    SET_PENDING_PAYMENTS,
    SET_ALLRECENTLY_FINISHED,
    SET_PENDING_PAYMENTS_SEARCHED,
    SET_ALL_FINISHED_SEARCHED,
    SET_CERTIFIED_USERS,
    SET_CERTIFIED_USERS_SEARCHED,
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
    [SET_RECENTLY_FINISHED] (state, datas) {
        state.recentlyFinished = datas[0]
        state.recentlyFinishedSearched = datas[0]
        state.approved = datas[2]
        state.approvedSearched = datas[2]
        state.rejected = datas[3]
        state.rejectedSearched = datas[3]
        state.underSuperVision = datas[4]
        state.underSuperVisionSearched = datas[4]
    },
    [SET_ALLRECENTLY_FINISHED] (state, datas) {
        state.allRecentlyFinished = datas[0]
        state.allRecentlyFinishedSearched = datas[0]
        state.allApproved = datas[2]
        state.allApprovedSearched = datas[2]
        state.allRejected = datas[3]
        state.allRejectedSearched = datas[3]
        state.allUnderSuperVision = datas[4]
        state.allUnderSuperVisionSearched = datas[4]
    },
    [SET_CERTIFIED_USERS] (state, data) {
        state.allCertifiedUsers = data
        state.allCertifiedUsersSearched = data
    },
    [SET_CERTIFIED_USERS_SEARCHED] (state, searchedVal) {
        state.allCertifiedUsersSearched = searchedVal
    },
    [SET_ALL_FINISHED_SEARCHED] (state, datas) {
        state.allApprovedSearched = datas[0]
        state.allRejectedSearched = datas[1]
        state.allUnderSuperVisionSearched = datas[2]
    },
    [SET_RECENTLY_FINISHED_SEARCHED] (state, datas) {
        state.approvedSearched = datas[0]
        state.rejectedSearched = datas[0]
        state.underSuperVisionSearched = datas[0]
    },
    [SET_ASSIGNED_FOR_EVERYONE] (state, data) {
        state.assignedForEveryOne = data
        state.assignedForEveryOneSearched = data
    },
    [SET_ASSIGNED_FOR_EVERYONE_SEARCHED] (state, searchedVal) {
        state.assignedForEveryOneSearched = searchedVal
    },
    [SET_EVEYONE_UNFINISHED] (state, data) {
        state.everyOneUnfinished = data
        state.eveyOneUnfinishedSearched = data
    },
    [SET_EVEYONE_UNFINISHED_SEARCHED] (state, searchedVal) {
        state.eveyOneUnfinishedSearched = searchedVal
    },
    [SET_ALL_RECENTLY_FINISHED_SEARCHED] (state, searchedVal) {
        state.allRecentlyFinishedSearched = searchedVal
    },
    [SET_ALL_PENDING_PAYMENTS] (state, data) {
        state.allPendingPayment = data
        state.allPendingPaymentSearched = data
    },
    [SET_ALL_PENDING_PAYMENTS_SEARCHED] (state, searchedVal) {
        state.allPendingPaymentSearched = searchedVal
    },
    [SET_PENDING_PAYMENTS] (state, data) {
        state.pendingPayments = data;
        state.pendingPaymentsSearched = data
    },
    [SET_PENDING_PAYMENTS_SEARCHED] (state, searchedVal) {
        state.pendingPaymentsSearched = searchedVal
    },
}