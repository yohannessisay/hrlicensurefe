export default {
    getRenewalUnassigned: state => state.renewalUnassigned,
    getRenewalUnassignedSearched: state => state.renewalUnassignedSearched,

    getRenewalUnfinished: state => state.renewalUnfinished,
    getRenewalUnfinishedSearched: state => state.renewalUnfinishedSearched,
    getRenewalOthersUnfinished: state => state.renewalOthersUnfinished,
    getRenewalOthersUnfinishedSearched: state => state.renewalOthersUnfinishedSearched,

    getRenewalAssignedToYou: state => state.renewalAssignedToYou,
    getRenewalAssignedToYouSearched: state => state.renewalAssignedToYouSearched,
    getRenewalAssignedToOthers: state => state.renewalAssignedToOthers,
    getRenewalAssignedToOthersSearched: state => state.renewalAssignedToOthersSearched,

    getRenewalApproved: (state) => state.renewalApproved,
    getRenewalApprovedSearched: (state) => state.renewalApprovedSearched,
    getRenewalAllApproved: (state) => state.renewalAllApproved,
    getRenewalAllApprovedSearched: (state) => state.renewalAllApprovedSearched,

    getRenewalDeclined: (state) => state.renewalDeclined,
    getRenewalDeclinedSearched: (state) => state.renewalDeclinedSearched,
    getRenewalAllDeclined: (state) => state.renewalAllDeclined,
    getRenewalAllDeclinedSearched: (state) => state.renewalAllDeclinedSearched,

    getRenewalUnderSuperVision: (state) => state.renewalUnderSuperVision,
    getRenewalUnderSuperVisionSearched: (state) => state.renewalUnderSuperVisionSearched,
    getRenewalOthersUnderSuperVision: (state) => state.renewalOthersUnderSuperVision,
    getRenewalOthersUnderSuperVisionSearched: (state) => state.renewalOthersUnderSuperVisionSearched,

    getRenewalApprovedPayment: (state) => state.renewalApprovedPayment,
    getRenewalApprovedPaymentSearched: (state) => state.renewalApprovedPaymentSearched,
    getRenewalOthersApprovedPayment: (state) => state.renewalOthersApprovedPayment,
    getRenewalOthersApprovedPaymentSearched: (state) => state.renewalOthersApprovedPaymentSearched,

    getRenewalDeclinedPayment: (state) => state.renewalDeclinedPayment,
    getRenewalDeclinedPaymentSearched: (state) => state.renewalDeclinedPaymentSearched,
    getRenewalOthersDeclinedPayment: (state) => state.renewalOthersDeclinedPayment,
    getRenewalOthersDeclinedPaymentSearched: (state) => state.renewalOthersDeclinedPaymentSearched,

    getRenewalOnReview: (state) => state.renewalOnReview,
    getRenewalOnReviewSearched: (state) => state.renewalOnReviewSearched,
    getRenewalOthersOnReview: (state) => state.renewalOthersOnReview,
    getRenewalOthersOnReviewSearched: (state) => state.renewalOthersOnReviewSearched,
    
    getRenewalReEvaluate: (state) => state.renewalReEvaluate,
    getRenewalReEvaluateSearched: (state) => state.renewalReEvaluateSearched,
    getRenewalOthersReEvaluate: (state) => state.renewalOthersReEvaluate,
    getRenewalOthersReEvaluateSearched: (state) => state.renewalOthersReEvaluateSearched,

    getRenewalConfirmed: (state) => state.renewalConfirmed,
    getRenewalConfirmedSearched: (state) => state.renewalConfirmedSearched,
    getRenewalOthersConfirmed: (state) => state.renewalOthersConfirmed,
    getRenewalOthersConfirmedSearched: (state) => state.renewalOthersConfirmedSearched,

    getRenewalReturnedToMe: (state) => state.renewalReturnedToMe,
    getRenewalReturnedToMeSearched: (state) => state.renewalReturnedToMeSearched,
    getRenewalReturnedToOthers: (state) => state.renewalReturnedToOthers,
    getRenewalReturnedToOthersSearched: (state) => state.renewalReturnedToOthersSearched,
}