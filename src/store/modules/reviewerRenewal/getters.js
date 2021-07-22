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
}