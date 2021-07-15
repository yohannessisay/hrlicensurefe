export default {
    getVerificationUnassigned: state => state.verificationUnassigned,
    getVerificationUnassignedSearched: state => state.verificationUnassignedSearched,

    getVerificationUnfinished: state => state.verificationUnfinished,
    getVerificationUnfinishedSearched: state => state.verificationUnfinishedSearched,
    getVerificationOthersUnfinished: state => state.verificationOthersUnfinished,
    getVerificationOthersUnfinishedSearched: state => state.verificationOthersUnfinishedSearched,

    getVerificationAssignedToYou: state => state.verificationAssignedToYou,
    getVerificationAssignedToYouSearched: state => state.verificationAssignedToYouSearched,
    getVerificationAssignedToOthers: state => state.verificationAssignedToOthers,
    getVerificationAssignedToOthersSearched: state => state.verificationAssignedToOthersSearched,
}