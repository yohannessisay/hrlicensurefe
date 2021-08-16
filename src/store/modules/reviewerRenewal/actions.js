import ApiService from "../../../services/api.service";
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
const baseUrl = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api";

export default {
  async getUnassignedRenewal({ commit }, statusId) {
    try {
      const url = baseUrl + "/renewals/status/"+statusId;
      const resp = await ApiService.get(url);
      commit(SET_RENEWAL_UNASSIGNED, resp.data.data);
    } catch (err) {
      return error;
    }
  },
  async getRenewalReport({ commit }) {
    try {
      const approved = await ApiService.get(baseUrl + "/renewals/status/5");
      const declined = await ApiService.get(baseUrl + "/renewals/status/6");
      const review = await ApiService.get(baseUrl + "/renewals/status/7");

      return [approved, declined, review];
    } catch (err) {
      return err;
    }
  },
  getUnassignedRenewalSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalUnassigned === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalUnassigned.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_UNASSIGNED_SEARCHED, searchedVal);
  },

  async getRenewalUnfinished({ commit }, adminId) {
    const url = baseUrl + "/renewals/status/10";
    const resp = await ApiService.get(url);
    const myUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
    });
    commit(SET_RENEWAL_UNFINISHED, myUnfinished);
  },

  getRenewalUnfinishedSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalUnfinished === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalUnfinished.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_UNFINISHED_SEARCHED, searchedVal);
  },

  async getRenewalOthersUnfinished({ commit }, adminId) {
    const url = baseUrl + "/renewals/status/10";
    const resp = await ApiService.get(url);
    const othresUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminId;
    });
    commit(SET_RENEWAL_OTHERS_UNFINISHED, othresUnfinished);
  },
  getRenewalOthersUnfinishedSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalOthersUnfinished === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalOthersUnfinished.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.reviewer.name.toLowerCase().includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_OTHERS_UNFINISHED_SEARCHED, searchedVal);
  },

  async getRenewalAssigned({ commit }, adminStatus) {
    const url = baseUrl + "/renewals/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const assignedToMe = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
    });
    commit(SET_RENEWAL_ASSIGNED_TO_YOU, assignedToMe);
  },

  getRenewalAssignedSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalAssignedToYou === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalAssignedToYou.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_ASSIGNED_TO_YOU_SEARCHED, searchedVal);
  },

  async getRenewalOthersAssigned({ commit }, adminStatus) {
    const url = baseUrl + "/renewals/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const othresUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_RENEWAL_ASSIGNED_TO_OTHERS, othresUnfinished);
  },
  getRenewalOthersAssignedSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalAssignedToOthers === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalAssignedToOthers.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.reviewer.name.toLowerCase().includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_ASSIGNED_TO_OTHERS_SEARCHED, searchedVal);
  },

  async getRenewalApproved({ commit }, adminStatus) {
    const url = baseUrl + "/renewals/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    if (resp.data.data === undefined) {
      const approved = [];
      commit(SET_RENEWAL_APPROVED, approved);
      return;
    }
    const Approved = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
    });
    commit(SET_RENEWAL_APPROVED, Approved);
  },

  getRenewalApprovedSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalApproved === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalApproved.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_APPROVED_SEARCHED, searchedVal);
  },

  async getRenewalAllApproved({ commit }, adminStatus) {
    const url = baseUrl + "/renewals/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    if (resp.data.data === undefined) {
      const othersApproved = [];
      commit(SET_RENEWAL_ALL_APPROVED, othersApproved);
      return
    }
    const othersApproved = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_RENEWAL_ALL_APPROVED, othersApproved);
  },
  getRenewalAllApprovedSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalAllApproved === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalAllApproved.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.reviewer.name.toLowerCase().includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_ALL_APPROVED_SEARCHED, searchedVal);
  },

  async getRenewalDeclined({ commit }, adminStatus) {
    const url = baseUrl + "/renewals/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    if (resp.data.data === undefined) {
      const declined = [];
      commit(SET_RENEWAL_DECLINED, declined);
      return;
    }
    const declined = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
    });
    commit(SET_RENEWAL_DECLINED, declined);
  },

  getRenewalDeclinedSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalDeclined === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalDeclined.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_DECLINED_SEARCHED, searchedVal);
  },

  async getRenewalAllDeclined({ commit }, adminStatus) {
    const url = baseUrl + "/renewals/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    if (resp.data.data === undefined) {
      const othersDeclined = [];
      commit(SET_RENEWAL_ALL_DECLINED, othersDeclined);
      return;
    }
    const othersDeclined = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_RENEWAL_ALL_DECLINED, othersDeclined);
  },
  getRenewalAllDeclinedSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalAllDeclined === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalAllDeclined.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.reviewer.name.toLowerCase().includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_ALL_DECLINED_SEARCHED, searchedVal);
  },

  async getRenewalUnderSuperVision({ commit }, adminStatus) {
    const url = baseUrl + "/renewals/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const underSuperVision = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
    });
    commit(SET_RENEWAL_UNDER_SUPERVISION, underSuperVision);
  },

  getRenewalUnderSuperVisionSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalUnderSuperVision === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalUnderSuperVision.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_UNDER_SUPERVISION_SEARCHED, searchedVal);
  },

  async getRenewalOthersUnderSuperVision({ commit }, adminStatus) {
    const url = baseUrl + "/renewals/status/"+0;
    const resp = await ApiService.get(url);
    const othersUnderSuperVision = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_RENEWAL_OTHERS_UNDER_SUPERVISION, othersUnderSuperVision);
  },
  getRenewalOthersUnderSuperVisionSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalOthersUnderSuperVision === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalOthersUnderSuperVision.filter(
      function(e) {
        return e.renewalCode === undefined
          ? ""
          : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
              (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
                .toLowerCase()
                .includes(searchKey.toLowerCase()) ||
              e.applicant.profile.name
                .toLowerCase()
                .includes(searchKey.toLowerCase()) ||
              e.applicant.profile.fatherName
                .toLowerCase()
                .includes(searchKey.toLowerCase()) ||
              e.reviewer.name.toLowerCase().includes(searchKey.toLowerCase());
      }
    );
    commit(SET_RENEWAL_OTHERS_UNDER_SUPERVISION_SEARCHED, searchedVal);
  },

  /* 
  /* approved payment status is wrong for the time (status/7) is placeholder
  */
  async getRenewalApprovedPayment({ commit }, adminStatus) {
    const url = baseUrl + "/renewals/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const approvedPayment = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
    });
    commit(SET_RENEWAL_APPROVED_PAYMENT, approvedPayment);
  },

  getRenewalApprovedPaymentSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalApprovedPayment === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalApprovedPayment.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_APPROVED_PAYMENT_SEARCHED, searchedVal);
  },

  /* 
  /* others approved payment status is wrong for the time (status/7) is placeholder
  */
  async getRenewalOthersApprovedPayment({ commit }, adminStatus) {
    const url = baseUrl + "/renewals/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const othersApprovedPayments = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_RENEWAL_OTHERS_APPROVED_PAYMENT, othersApprovedPayments);
  },
  getRenewalOthersApprovedPaymentSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalOthersApprovedPayment === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalOthersApprovedPayment.filter(function(
      e
    ) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.reviewer.name.toLowerCase().includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_OTHERS_APPROVED_PAYMENT_SEARCHED, searchedVal);
  },

  /* 
  /* declined payment status is wrong for the time (status/7) is placeholder
  */
  async getRenewalDeclinedPayment({ commit }, adminStatus) {
    const url = baseUrl + "/renewals/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const declinedPayment = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
    });
    commit(SET_RENEWAL_DECLINED_PAYMENT, declinedPayment);
  },

  getRenewalDeclinedPaymentSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalDeclinedPayment === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalDeclinedPayment.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_DECLINED_PAYMENT_SEARCHED, searchedVal);
  },

  /* 
  /* others declined payment status is wrong for the time (status/7) is placeholder
  */
  async getRenewalOthersDeclinedPayment({ commit }, adminStatus) {
    const url = baseUrl + "/renewals/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const othersDeclinedPayments = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_RENEWAL_OTHERS_DECLINED_PAYMENT, othersDeclinedPayments);
  },
  getRenewalOthersDeclinedPaymentSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalOthersDeclinedPayment === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalOthersDeclinedPayment.filter(function(
      e
    ) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.reviewer.name.toLowerCase().includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_OTHERS_DECLINED_PAYMENT_SEARCHED, searchedVal);
  },

  /* 
  /* on review status is wrong for the time (status/7) is placeholder
  */
  async getRenewalOnReview({ commit }, adminStatus) {
    const url = baseUrl + "/renewals/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const onReview = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
    });
    commit(SET_RENEWAL_ON_REVIEW, onReview);
  },

  getRenewalOnReviewSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalOnReview === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalOnReview.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_ON_REVIEW_SEARCHED, searchedVal);
  },

  /* 
  /* on review status is wrong for the time (status/7) is placeholder
  */
  async getRenewalOthersOnReview({ commit }, adminStatus) {
    const url = baseUrl + "/renewals/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const othersOnReview = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_RENEWAL_OTHERS_ON_REVIEW, othersOnReview);
  },
  getRenewalOthersOnReviewSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalOthersOnReview === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalOthersOnReview.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.reviewer.name.toLowerCase().includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_OTHERS_ON_REVIEW_SEARCHED, searchedVal);
  },

  /* 
  /* on re evaluate status is wrong for the time (status/7) is placeholder
  */
  async getRenewalReEvaluate({ commit }, adminStatus) {
    const url = baseUrl + "/renewals/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const reEvaluate = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
    });
    commit(SET_RENEWAL_RE_EVALUATE, reEvaluate);
  },

  getRenewalReEvaluateSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalReEvaluate === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalReEvaluate.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_RE_EVALUATE_SEARCHED, searchedVal);
  },

  /* 
  /* on re evaluate status is wrong for the time (status/7) is placeholder
  */
  async getRenewalOthersReEvaluate({ commit }, adminStatus) {
    const url = baseUrl + "/renewals/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const othersReEvaluate = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_RENEWAL_OTHERS_RE_EVALUATE, othersReEvaluate);
  },
  getRenewalOthersReEvaluateSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalOthersReEvaluate === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalOthersReEvaluate.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.reviewer.name.toLowerCase().includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_OTHERS_RE_EVALUATE_SEARCHED, searchedVal);
  },

  /* 
  /* confirmed status is wrong for the time (status/7) is placeholder
  */
  async getRenewalConfirmed({ commit }, adminStatus) {
    const url = baseUrl + "/renewals/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const confirmed = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
    });
    commit(SET_RENEWAL_CONFIRMED, confirmed);
  },

  getRenewalConfirmedSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalConfirmed === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalConfirmed.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_CONFIRMED_SEARCHED, searchedVal);
  },

  /* 
  /* confirmed status is wrong for the time (status/7) is placeholder
  */
  async getRenewalOthersConfirmed({ commit }, adminStatus) {
    const url = baseUrl + "/renewals/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const confirmed = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_RENEWAL_OTHERS_CONFIRMED, confirmed);
  },
  getRenewalOthersConfirmedSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalOthersConfirmed === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalOthersConfirmed.filter(function(e) {
      return e.renewalCode === undefined
        ? ""
        : e.renewalCode.toLowerCase().includes(searchKey.toLowerCase()) ||
            (e.applicant.profile.name + " " + e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
            e.reviewer.name.toLowerCase().includes(searchKey.toLowerCase());
    });
    commit(SET_RENEWAL_OTHERS_CONFIRMED_SEARCHED, searchedVal);
  },
};
