export default {
    getGoodStandingUnassigned: state => state.goodStandingUnassigned,
    getGoodStandingUnassignedSearched: state => state.goodStandingUnassignedSearched,

    getGoodStandingUnfinished: state => state.goodStandingUnfinished,
    getGoodStandingUnfinishedSearched: state => state.goodStandingUnfinishedSearched,
    getGoodStandingOthersUnfinished: state => state.goodStandingOthersUnfinished,
    getGoodStandingOthersUnfinishedSearched: state => state.goodStandingOthersUnfinishedSearched,

    getGoodStandingAssignedToYou: state => state.goodStandingAssignedToYou,
    getGoodStandingAssignedToYouSearched: state => state.goodStandingAssignedToYouSearched,
    getGoodStandingAssignedToOthers: state => state.goodStandingAssignedToOthers,
    getGoodStandingAssignedToOthersSearched: state => state.goodStandingAssignedToOthersSearched,

    getGoodStandingApproved: (state) => state.goodStandingApproved,
    getGoodStandingApprovedSearched: (state) => state.goodStandingApprovedSearched,
    getGoodStandingAllApproved: (state) => state.goodStandingAllApproved,
    getGoodStandingAllApprovedSearched: (state) => state.goodStandingAllApprovedSearched,

    getGoodStandingDeclined: (state) => state.goodStandingDeclined,
    getGoodStandingDeclinedSearched: (state) => state.goodStandingDeclinedSearched,
    getGoodStandingAllDeclined: (state) => state.goodStandingAllDeclined,
    getGoodStandingAllDeclinedSearched: (state) => state.goodStandingAllDeclinedSearched,

    getGoodStandingUnderSuperVision: (state) => state.goodStandingUnderSuperVision,
    getGoodStandingUnderSuperVisionSearched: (state) => state.goodStandingUnderSuperVisionSearched,
    getGoodStandingOthersUnderSuperVision: (state) => state.goodStandingOthersUnderSuperVision,
    getGoodStandingOthersUnderSuperVisionSearched: (state) => state.goodStandingOthersUnderSuperVisionSearched,
}