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
}