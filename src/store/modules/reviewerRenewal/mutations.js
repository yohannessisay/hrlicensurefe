import {
  SET_RENEWAL_UNASSIGNED,
  SET_RENEWAL_UNASSIGNED_SEARCHED,

  SET_RENEWAL_UNFINISHED,
  SET_RENEWAL_UNFINISHED_SEARCHED,
  SET_RENEWAL_OTHERS_UNFINISHED,
  SET_RENEWAL_OTHERS_UNFINISHED_SEARCHED,

  SET_RENEWAL_ASSIGNED_TO_YOU,
  SET_RENEWAL_ASSIGNED_TO_YOU_SEARCHED,
  SET_RENEWAL_ASSIGNED_TO_OTHERS,
  SET_RENEWAL_ASSIGNED_TO_OTHERS_SEARCHED,

  SET_RENEWAL_APPROVED,
  SET_RENEWAL_APPROVED_SEARCHED,
  SET_RENEWAL_ALL_APPROVED,
  SET_RENEWAL_ALL_APPROVED_SEARCHED,

  SET_RENEWAL_DECLINED,
  SET_RENEWAL_DECLINED_SEARCHED,
  SET_RENEWAL_ALL_DECLINED,
  SET_RENEWAL_ALL_DECLINED_SEARCHED,

  SET_RENEWAL_UNDER_SUPERVISION,
  SET_RENEWAL_UNDER_SUPERVISION_SEARCHED,
  SET_RENEWAL_OTHERS_UNDER_SUPERVISION,
  SET_RENEWAL_OTHERS_UNDER_SUPERVISION_SEARCHED,

  SET_RENEWAL_APPROVED_PAYMENT,
  SET_RENEWAL_APPROVED_PAYMENT_SEARCHED,
  SET_RENEWAL_OTHERS_APPROVED_PAYMENT,
  SET_RENEWAL_OTHERS_APPROVED_PAYMENT_SEARCHED,

  SET_RENEWAL_DECLINED_PAYMENT,
  SET_RENEWAL_DECLINED_PAYMENT_SEARCHED,
  SET_RENEWAL_OTHERS_DECLINED_PAYMENT,
  SET_RENEWAL_OTHERS_DECLINED_PAYMENT_SEARCHED,

  SET_RENEWAL_ON_REVIEW,
  SET_RENEWAL_ON_REVIEW_SEARCHED,
  SET_RENEWAL_OTHERS_ON_REVIEW,
  SET_RENEWAL_OTHERS_ON_REVIEW_SEARCHED,

  SET_RENEWAL_RE_EVALUATE,
  SET_RENEWAL_RE_EVALUATE_SEARCHED,
  SET_RENEWAL_OTHERS_RE_EVALUATE,
  SET_RENEWAL_OTHERS_RE_EVALUATE_SEARCHED,

  SET_RENEWAL_CONFIRMED,
  SET_RENEWAL_CONFIRMED_SEARCHED,
  SET_RENEWAL_OTHERS_CONFIRMED,
  SET_RENEWAL_OTHERS_CONFIRMED_SEARCHED,
} from "./mutation-types";

export default {
  [SET_RENEWAL_UNASSIGNED](state, data) {
    state.renewalUnassigned = data;
    state.renewalUnassignedSearched = data;
  },

  [SET_RENEWAL_UNASSIGNED_SEARCHED](state, searchedVal) {
    state.renewalUnassignedSearched = searchedVal;
  },

  [SET_RENEWAL_UNFINISHED](state, data) {
    state.renewalUnfinished = data;
    state.renewalUnfinishedSearched = data;
  },
  [SET_RENEWAL_UNFINISHED_SEARCHED](state, searchedVal) {
    state.renewalUnfinishedSearched = searchedVal;
  },
  [SET_RENEWAL_OTHERS_UNFINISHED](state, data) {
    state.renewalOthersUnfinished = data;
    state.renewalOthersUnfinishedSearched = data;
  },
  [SET_RENEWAL_OTHERS_UNFINISHED_SEARCHED](state, searchedVal) {
    state.renewalOthersUnfinishedSearched = searchedVal;
  },

  [SET_RENEWAL_ASSIGNED_TO_YOU](state, data) {
    state.renewalAssignedToYou = data;
    state.renewalAssignedToYouSearched = data;
  },
  [SET_RENEWAL_ASSIGNED_TO_YOU_SEARCHED](state, searchedVal) {
    state.renewalAssignedToYouSearched = searchedVal;
  },
  [SET_RENEWAL_ASSIGNED_TO_OTHERS](state, data) {
    state.renewalAssignedToOthers = data;
    state.renewalAssignedToOthersSearched = data;
  },
  [SET_RENEWAL_ASSIGNED_TO_OTHERS_SEARCHED](state, searchedVal) {
    state.renewalAssignedToOthersSearched = searchedVal;
  },

  [SET_RENEWAL_APPROVED](state, data) {
    state.renewalApproved = data;
    state.renewalApprovedSearched = data;
  },
  [SET_RENEWAL_APPROVED_SEARCHED](state, searchedVal) {
    state.renewalApprovedSearched = searchedVal;
  },
  [SET_RENEWAL_ALL_APPROVED](state, data) {
    state.renewalAllApproved = data;
    state.renewalAllApprovedSearched = data;
  },
  [SET_RENEWAL_ALL_APPROVED_SEARCHED](state, searchedVal) {
    state.renewalAllApprovedSearched = searchedVal;
  },

  [SET_RENEWAL_DECLINED](state, data) {
    state.renewalDeclined = data;
    state.renewalDeclinedSearched = data;
  },
  [SET_RENEWAL_DECLINED_SEARCHED](state, searchedVal) {
    state.renewalDeclinedSearched = searchedVal;
  },
  [SET_RENEWAL_ALL_DECLINED](state, data) {
    state.renewalAllDeclined = data;
    state.renewalAllDeclinedSearched = data;
  },
  [SET_RENEWAL_ALL_DECLINED_SEARCHED](state, searchedVal) {
    state.renewalAllDeclinedSearched = searchedVal;
  },

  [SET_RENEWAL_UNDER_SUPERVISION](state, data) {
    state.renewalUnderSuperVision = data;
    state.renewalUnderSuperVisionSearched = data;
  },
  [SET_RENEWAL_UNDER_SUPERVISION_SEARCHED](state, searchedVal) {
    state.renewalUnderSuperVisionSearched = searchedVal;
  },
  [SET_RENEWAL_OTHERS_UNDER_SUPERVISION](state, data) {
    state.renewalOthersUnderSuperVision = data;
    state.renewalOthersUnderSuperVisionSearched = data;
  },
  [SET_RENEWAL_OTHERS_UNDER_SUPERVISION_SEARCHED](state, searchedVal) {
    state.renewalOthersUnderSuperVisionSearched = searchedVal;
  },

  [SET_RENEWAL_APPROVED_PAYMENT](state, data) {
    state.renewalApprovedPayment = data;
    state.renewalApprovedPaymentSearched = data;
  },
  [SET_RENEWAL_APPROVED_PAYMENT_SEARCHED](state, searchedVal) {
    state.renewalApprovedPaymentSearched = searchedVal;
  },
  [SET_RENEWAL_OTHERS_APPROVED_PAYMENT](state, data) {
    state.renewalOthersApprovedPayment = data;
    state.renewalOthersApprovedPaymentSearched = data;
  },
  [SET_RENEWAL_OTHERS_APPROVED_PAYMENT_SEARCHED](state, searchedVal) {
    state.renewalOthersApprovedPaymentSearched = searchedVal;
  },

  [SET_RENEWAL_DECLINED_PAYMENT](state, data) {
    state.renewalDeclinedPayment = data;
    state.renewalDeclinedPaymentSearched = data;
  },
  [SET_RENEWAL_DECLINED_PAYMENT_SEARCHED](state, searchedVal) {
    state.renewalDeclinedPaymentSearched = searchedVal;
  },
  [SET_RENEWAL_OTHERS_DECLINED_PAYMENT](state, data) {
    state.renewalOthersDeclinedPayment = data;
    state.renewalOthersDeclinedPaymentSearched = data;
  },
  [SET_RENEWAL_OTHERS_DECLINED_PAYMENT_SEARCHED](state, searchedVal) {
    state.renewalOthersDeclinedPaymentSearched = searchedVal;
  },

  [SET_RENEWAL_ON_REVIEW](state, data) {
    state.renewalOnReview = data;
    state.renewalOnReviewSearched = data;
  },
  [SET_RENEWAL_ON_REVIEW_SEARCHED](state, searchedVal) {
    state.renewalOnReviewSearched = searchedVal;
  },
  [SET_RENEWAL_OTHERS_ON_REVIEW](state, data) {
    state.renewalOthersOnReview = data;
    state.renewalOthersOnReviewSearched = data;
  },
  [SET_RENEWAL_OTHERS_ON_REVIEW_SEARCHED](state, searchedVal) {
    state.renewalOthersOnReviewSearched = searchedVal;
  },

  [SET_RENEWAL_RE_EVALUATE](state, data) {
    state.renewalReEvaluate = data;
    state.renewalReEvaluateSearched = data;
  },
  [SET_RENEWAL_RE_EVALUATE_SEARCHED](state, searchedVal) {
    state.renewalReEvaluateSearched = searchedVal;
  },
  [SET_RENEWAL_OTHERS_RE_EVALUATE](state, data) {
    state.renewalOthersReEvaluate = data;
    state.renewalOthersReEvaluateSearched = data;
  },
  [SET_RENEWAL_OTHERS_RE_EVALUATE_SEARCHED](state, searchedVal) {
    state.renewalOthersReEvaluateSearched = searchedVal;
  },

  [SET_RENEWAL_CONFIRMED](state, data) {
    state.renewalConfirmed = data;
    state.renewalConfirmedSearched = data;
  },
  [SET_RENEWAL_CONFIRMED_SEARCHED](state, searchedVal) {
    state.renewalConfirmedSearched = searchedVal;
  },
  [SET_RENEWAL_OTHERS_CONFIRMED](state, data) {
    state.renewalOthersConfirmed = data;
    state.renewalOthersConfirmedSearched = data;
  },
  [SET_RENEWAL_OTHERS_CONFIRMED_SEARCHED](state, searchedVal) {
    state.renewalOthersConfirmedSearched = searchedVal;
  },
};
