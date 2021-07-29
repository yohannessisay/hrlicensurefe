import ApiService from "../../../services/api.service";
import {
  SET_NEW_LICENSE_UNASSIGNED,
  SET_NEW_LICENSE_UNASSIGNED_SEARCHED,
  SET_NEW_LICENSE_UNFINISHED,
  SET_NEW_LICENSE_UNFINISHED_SEARCHED,
  SET_NEW_LICENSE_OTHERS_UNFINISHED,
  SET_NEW_LICENSE_OTHERS_UNFINISHED_SEARCHED,
  SET_NEW_LICENSE_ASSIGNED_TO_YOU,
  SET_NEW_LICENSE_ASSIGNED_TO_YOU_SEARCHED,
  SET_NEW_LICENSE_ASSIGNED_TO_OTHERS,
  SET_NEW_LICENSE_ASSIGNED_TO_OTHERS_SEARCHED,

  SET_NEW_LICENSE_APPROVED,
  SET_NEW_LICENSE_APPROVED_SEARCHED,
  SET_NEW_LICENSE_ALL_APPROVED,
  SET_NEW_LICENSE_ALL_APPROVED_SEARCHED,

  SET_NEW_LICENSE_DECLINED,
  SET_NEW_LICENSE_DECLINED_SEARCHED,
  SET_NEW_LICENSE_ALL_DECLINED,
  SET_NEW_LICENSE_ALL_DECLINED_SEARCHED,

  SET_NEW_LICENSE_UNDER_SUPERVISION,
  SET_NEW_LICENSE_UNDER_SUPERVISION_SEARCHED,
  SET_NEW_LICENSE_OTHERS_UNDER_SUPERVISION,
  SET_NEW_LICENSE_OTHERS_UNDER_SUPERVISION_SEARCHED,

  SET_NEW_LICENSE_APPROVED_PAYMENT,
  SET_NEW_LICENSE_APPROVED_PAYMENT_SEARCHED,
  SET_NEW_LICENSE_OTHERS_APPROVED_PAYMENT,
  SET_NEW_LICENSE_OTHERS_APPROVED_PAYMENT_SEARCHED,

  SET_NEW_LICENSE_DECLINED_PAYMENT,
  SET_NEW_LICENSE_DECLINED_PAYMENT_SEARCHED,
  SET_NEW_LICENSE_OTHERS_DECLINED_PAYMENT,
  SET_NEW_LICENSE_OTHERS_DECLINED_PAYMENT_SEARCHED,

  SET_NEW_LICENSE_ON_REVIEW,
  SET_NEW_LICENSE_ON_REVIEW_SEARCHED,
  SET_NEW_LICENSE_OTHERS_ON_REVIEW,
  SET_NEW_LICENSE_OTHERS_ON_REVIEW_SEARCHED,

  SET_NEW_LICENSE_RE_EVALUATE,
  SET_NEW_LICENSE_RE_EVALUATE_SEARCHED,
  SET_NEW_LICENSE_OTHERS_RE_EVALUATE,
  SET_NEW_LICENSE_OTHERS_RE_EVALUATE_SEARCHED,

  SET_NEW_LICENSE_CONFIRMED,
  SET_NEW_LICENSE_CONFIRMED_SEARCHED,
  SET_NEW_LICENSE_OTHERS_CONFIRMED,
  SET_NEW_LICENSE_OTHERS_CONFIRMED_SEARCHED,

  NEW_LICENSE_REPORT,
} from "./mutation-types";

const baseUrl = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api";

export default {
  async getNewLicenseUnassigned({ commit }) {
    const url = baseUrl + "/newLicenses/status/3";
    const resp = await ApiService.get(url);
    commit(SET_NEW_LICENSE_UNASSIGNED, resp.data.data);
  },
  async getNewLicenseReport({ commit }) {
    try {
      const approved = await ApiService.get(baseUrl + "/newLicenses/status/5");
      const declined = await ApiService.get(baseUrl + "/newLicenses/status/6");
      const review = await ApiService.get(baseUrl + "/newLicenses/status/7");
 return [approved, declined, review];
    
    } catch (err) {
      return err;
    }
  },
  getNewLicenseUnassignedSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseUnassigned === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseUnassigned.filter(function(e) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_UNASSIGNED_SEARCHED, searchedVal);
  },

  async getNewLicenseUnfinished({ commit }, adminId) {
    const url = baseUrl + "/newLicenses/status/10";
    const resp = await ApiService.get(url);
    const myUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
    });
    commit(SET_NEW_LICENSE_UNFINISHED, myUnfinished);
  },

  getNewLicenseUnfinishedSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseUnfinished === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseUnfinished.filter(function(e) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_UNFINISHED_SEARCHED, searchedVal);
  },

  async getNewLicenseOthersUnfinished({ commit }, adminId) {
    const url = baseUrl + "/newLicenses/status/10";
    const resp = await ApiService.get(url);
    const othresUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminId;
    });
    commit(SET_NEW_LICENSE_OTHERS_UNFINISHED, othresUnfinished);
  },
  getNewLicenseOthersUnfinishedSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseOthersUnfinished === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseOthersUnfinished.filter(function(
      e
    ) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_OTHERS_UNFINISHED_SEARCHED, searchedVal);
  },

  async getNewLicenseAssigned({ commit }, adminId) {
    const url = baseUrl + "/newLicenses/status/4";
    const resp = await ApiService.get(url);
    const assignedToMe = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
    });
    commit(SET_NEW_LICENSE_ASSIGNED_TO_YOU, assignedToMe);
  },

  getNewLicenseAssignedSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseAssignedToYou === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseAssignedToYou.filter(function(e) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_ASSIGNED_TO_YOU_SEARCHED, searchedVal);
  },

  async getNewLicenseOthersAssigned({ commit }, adminId) {
    const url = baseUrl + "/newLicenses/status/4";
    const resp = await ApiService.get(url);
    const othresUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminId;
    });
    commit(SET_NEW_LICENSE_ASSIGNED_TO_OTHERS, othresUnfinished);
  },
  getNewLicenseOthersAssignedSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseAssignedToOthers === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseAssignedToOthers.filter(function(
      e
    ) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_ASSIGNED_TO_OTHERS_SEARCHED, searchedVal);
  },

  async getNewLicenseApproved({ commit }, adminId) {
    const url = baseUrl + "/newLicenses/status/5";
    const resp = await ApiService.get(url);
    const Approved = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
    });
    commit(SET_NEW_LICENSE_APPROVED, Approved);
  },

  getNewLicenseApprovedSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseApproved === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseApproved.filter(function(e) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_APPROVED_SEARCHED, searchedVal);
  },

  async getNewLicenseAllApproved({ commit }, adminId) {
    const url = baseUrl + "/newLicenses/status/5";
    const resp = await ApiService.get(url);
    let allApproved = resp.data.data
    if(allApproved === undefined) {
      allApproved = [];
    }
    commit(SET_NEW_LICENSE_ALL_APPROVED, allApproved);
  },
  getNewLicenseAllApprovedSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseAllApproved === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseAllApproved.filter(function(
      e
    ) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_ALL_APPROVED_SEARCHED, searchedVal);
  },

  async getNewLicenseDeclined({ commit }, adminId) {
    const url = baseUrl + "/newLicenses/status/6";
    const resp = await ApiService.get(url);
    console.log("new license declined response", resp.data)
    if(resp.data.data === undefined) {
      const declined = []
      commit(SET_NEW_LICENSE_DECLINED, declined)
      return;
    }
    const declined = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
    });
    commit(SET_NEW_LICENSE_DECLINED, declined);
  },

  getNewLicenseDeclinedSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseDeclined === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseDeclined.filter(function(e) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_DECLINED_SEARCHED, searchedVal);
  },

  async getNewLicenseAllDeclined({ commit }, adminId) {
    const url = baseUrl + "/newLicenses/status/6";
    const resp = await ApiService.get(url);
    let allDeclined = resp.data.data
    if(allDeclined === undefined) {
      allDeclined = [];
    }
    commit(SET_NEW_LICENSE_ALL_DECLINED, allDeclined);
  },
  getNewLicenseAllDeclinedSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseAllDeclined === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseAllDeclined.filter(function(
      e
    ) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_ALL_DECLINED_SEARCHED, searchedVal);
  },

  async getNewLicenseUnderSuperVision({ commit }, adminId) {
    const url = baseUrl + "/newlicenses/status/7";
    const resp = await ApiService.get(url);
    const underSuperVision = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
    });
    commit(SET_NEW_LICENSE_UNDER_SUPERVISION, underSuperVision);
  },

  getNewLicenseUnderSuperVisionSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseUnderSuperVision === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseUnderSuperVision.filter(function(e) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_UNDER_SUPERVISION_SEARCHED, searchedVal);
  },

  async getNewLicenseOthersUnderSuperVision({ commit }, adminId) {
    const url = baseUrl + "/newlicenses/status/7";
    const resp = await ApiService.get(url);
    const othersUnderSuperVision = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminId
    })
    commit(SET_NEW_LICENSE_OTHERS_UNDER_SUPERVISION, othersUnderSuperVision);
  },
  getNewLicenseOthersUnderSuperVisionSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseOthersUnderSuperVision === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseOthersUnderSuperVision.filter(function(
      e
    ) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_OTHERS_UNDER_SUPERVISION_SEARCHED, searchedVal);
  },

  /* 
  /* approved payment status is wrong for the time (status/7) is placeholder
  */
  async getNewLicenseApprovedPayment({ commit }, adminId) {
    const url = baseUrl + "/newlicenses/status/7";
    const resp = await ApiService.get(url);
    const approvedPayment = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
    });
    commit(SET_NEW_LICENSE_APPROVED_PAYMENT, approvedPayment);
  },

  getNewLicenseApprovedPaymentSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseApprovedPayment === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseApprovedPayment.filter(function(e) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_APPROVED_PAYMENT_SEARCHED, searchedVal);
  },

  /* 
  /* others approved payment status is wrong for the time (status/7) is placeholder
  */
  async getNewLicenseOthersApprovedPayment({ commit }, adminId) {
    const url = baseUrl + "/newlicenses/status/7";
    const resp = await ApiService.get(url);
    const othersApprovedPayments = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminId
    })
    commit(SET_NEW_LICENSE_OTHERS_APPROVED_PAYMENT, othersApprovedPayments);
  },
  getNewLicenseOthersApprovedPaymentSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseOthersApprovedPayment === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseOthersApprovedPayment.filter(function(
      e
    ) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_OTHERS_APPROVED_PAYMENT_SEARCHED, searchedVal);
  },

  async getNewLicenseDeclinedPayment({ commit }, adminId) {
    const url = baseUrl + "/newlicenses/status/7";
    const resp = await ApiService.get(url);
    const declinedPayment = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
    });
    commit(SET_NEW_LICENSE_DECLINED_PAYMENT, declinedPayment);
  },

  getNewLicenseDeclinedPaymentSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseDeclinedPayment === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseDeclinedPayment.filter(function(e) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_DECLINED_PAYMENT_SEARCHED, searchedVal);
  },

  /* 
  /* others declined payment status is wrong for the time (status/7) is placeholder
  */
  async getNewLicenseOthersDeclinedPayment({ commit }, adminId) {
    const url = baseUrl + "/newlicenses/status/7";
    const resp = await ApiService.get(url);
    const othersDeclinedPayments = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminId
    })
    commit(SET_NEW_LICENSE_OTHERS_DECLINED_PAYMENT, othersDeclinedPayments);
  },
  getNewLicenseOthersDeclinedPaymentSearched({ commit, getters }, searchKey) {
    console.log("comming")
    if (getters.getNewLicenseOthersDeclinedPayment === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseOthersDeclinedPayment.filter(function(
      e
    ) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_OTHERS_DECLINED_PAYMENT_SEARCHED, searchedVal);
  },

  /* 
  /* on review status is wrong for the time (status/7) is placeholder
  */
  async getNewLicenseOnReview({ commit }, adminId) {
    const url = baseUrl + "/newlicenses/status/7";
    const resp = await ApiService.get(url);
    const onReview = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
    });
    commit(SET_NEW_LICENSE_ON_REVIEW, onReview);
  },

  getNewLicenseOnReviewSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseOnReview === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseOnReview.filter(function(e) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_ON_REVIEW_SEARCHED, searchedVal);
  },

  /* 
  /* on review payment status is wrong for the time (status/7) is placeholder
  */
  async getNewLicenseOthersOnReview({ commit }, adminId) {
    const url = baseUrl + "/newlicenses/status/7";
    const resp = await ApiService.get(url);
    const othersOnReview = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminId
    })
    commit(SET_NEW_LICENSE_OTHERS_ON_REVIEW, othersOnReview);
  },
  getNewLicenseOthersOnReviewSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseOthersOnReview === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseOthersOnReview.filter(function(
      e
    ) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_OTHERS_ON_REVIEW_SEARCHED, searchedVal);
  },

  /* 
  /* re evaluate status is wrong for the time (status/7) is placeholder
  */
  async getNewLicenseReEvaluate({ commit }, adminId) {
    const url = baseUrl + "/newlicenses/status/7";
    const resp = await ApiService.get(url);
    const reEvaluate = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
    });
    commit(SET_NEW_LICENSE_RE_EVALUATE, reEvaluate);
  },

  getNewLicenseReEvaluateSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseReEvaluate === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseReEvaluate.filter(function(e) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_RE_EVALUATE_SEARCHED, searchedVal);
  },

  /* 
  /* re evaluate status is wrong for the time (status/7) is placeholder
  */
  async getNewLicenseOthersReEvaluate({ commit }, adminId) {
    const url = baseUrl + "/newlicenses/status/7";
    const resp = await ApiService.get(url);
    const othersReEvaluate = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminId
    })
    commit(SET_NEW_LICENSE_OTHERS_RE_EVALUATE, othersReEvaluate);
  },
  getNewLicenseOthersReEvaluateSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseOthersReEvaluate === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseOthersReEvaluate.filter(function(
      e
    ) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_OTHERS_RE_EVALUATE_SEARCHED, searchedVal);
  },

  /* 
  /* confirmed status is wrong for the time (status/7) is placeholder
  */
  async getNewLicenseConfirmed({ commit }, adminId) {
    const url = baseUrl + "/newlicenses/status/7";
    const resp = await ApiService.get(url);
    const confirmed = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
    });
    commit(SET_NEW_LICENSE_CONFIRMED, confirmed);
  },

  getNewLicenseConfirmedSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseConfirmed === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseConfirmed.filter(function(e) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_CONFIRMED_SEARCHED, searchedVal);
  },

  /* 
  /* confirmed status is wrong for the time (status/7) is placeholder
  */
  async getNewLicenseOthersConfirmed({ commit }, adminId) {
    const url = baseUrl + "/newlicenses/status/7";
    const resp = await ApiService.get(url);
    const confirmed = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminId
    })
    commit(SET_NEW_LICENSE_OTHERS_CONFIRMED, confirmed);
  },
  getNewLicenseOthersConfirmedSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseOthersConfirmed === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseOthersConfirmed.filter(function(
      e
    ) {
      return e.newLicenseCode === undefined
        ? ""
        : e.newLicenseCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_NEW_LICENSE_OTHERS_CONFIRMED_SEARCHED, searchedVal);
  },
};
