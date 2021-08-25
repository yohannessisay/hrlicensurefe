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

  SET_NEW_LICENSE_RETURNED_TO_ME,
  SET_NEW_LICENSE_RETURNED_TO_ME_SEARCHED,
  SET_NEW_LICENSE_RETURNED_TO_OTHERS,
  SET_NEW_LICENSE_RETURNED_TO_OTHERS_SEARCHED,

  NEW_LICENSE_REPORT,
} from "./mutation-types";

const baseUrl = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api";

export default {
  async getNewLicenseUnassigned({ commit }, statusId) {
    const url = baseUrl + "/newLicenses/status/"+statusId;
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

  async getNewLicenseUnfinished({ commit }, adminStatus) {
    const url = baseUrl + "/newLicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const myUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
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

  async getNewLicenseOthersUnfinished({ commit }, adminStatus) {
    const url = baseUrl + "/newLicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const othresUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    console.log("others unfinished is ", othresUnfinished)
    console.log("all unfinished is ", resp.data.data)
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

  async getNewLicenseAssigned({ commit }, adminStatus) {
    const url = baseUrl + "/newLicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const assignedToMe = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
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

  async getNewLicenseApproved({ commit }, adminStatus) {
    const url = baseUrl + "/newLicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const Approved = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
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

  async getNewLicenseAllApproved({ commit }, adminStatus) {
    const url = baseUrl + "/newLicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    // let allApproved = resp.data.data
    const othersApproved = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    // if(allApproved === undefined) {
    //   allApproved = [];
    // }
    commit(SET_NEW_LICENSE_ALL_APPROVED, othersApproved);
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

  async getNewLicenseDeclined({ commit }, adminStatus) {
    const url = baseUrl + "/newLicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    if(resp.data.data === undefined) {
      const declined = []
      commit(SET_NEW_LICENSE_DECLINED, declined)
      return;
    }
    const declined = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
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

  async getNewLicenseAllDeclined({ commit }, adminStatus) {
    const url = baseUrl + "/newLicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    if(resp.data.data === undefined) {
      const othersDeclined = []
      commit(SET_NEW_LICENSE_ALL_DECLINED, othersDeclined)
      return;
    }
    const othersDeclined = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_NEW_LICENSE_ALL_DECLINED, othersDeclined);
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

  async getNewLicenseUnderSuperVision({ commit }, adminStatus) {
    const url = baseUrl + "/newlicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const underSuperVision = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
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

  async getNewLicenseOthersUnderSuperVision({ commit }, adminStatus) {
    const url = baseUrl + "/newlicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const othersUnderSuperVision = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1]
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
  async getNewLicenseApprovedPayment({ commit }, adminStatus) {
    const url = baseUrl + "/newlicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    console.log("response is ", resp)
    const approvedPayment = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
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
  async getNewLicenseOthersApprovedPayment({ commit }, adminStatus) {
    const url = baseUrl + "/newlicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const othersApprovedPayments = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1]
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

  async getNewLicenseDeclinedPayment({ commit }, adminStatus) {
    const url = baseUrl + "/newlicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const declinedPayment = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
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
  async getNewLicenseOthersDeclinedPayment({ commit }, adminStatus) {
    const url = baseUrl + "/newlicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const othersDeclinedPayments = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1]
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
  async getNewLicenseOnReview({ commit }, adminStatus) {
    const url = baseUrl + "/newlicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const onReview = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
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
  async getNewLicenseOthersOnReview({ commit }, adminStatus) {
    const url = baseUrl + "/newlicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const othersOnReview = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1]
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
  async getNewLicenseReEvaluate({ commit }, adminStatus) {
    const url = baseUrl + "/newlicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    let evaluator = [];
    console.log("evaluators", resp.data.data)
    const allApplications = resp.data.data.forEach(function (e) {
      const myApplications = e.evaluators.forEach(function (ee) {
        if(ee.evaluatorId === adminStatus[1]) {
          evaluator.push(e);
        }
      })
      
    })
    commit(SET_NEW_LICENSE_RE_EVALUATE, evaluator);
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
  async getNewLicenseOthersReEvaluate({ commit }, adminStatus) {
    const url = baseUrl + "/newlicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    // const othersReEvaluate = resp.data.data.filter(function(e) {
    //   return e.reviewerId !== adminId
    // })
    let otherEvaluators = resp.data.data;
    console.log("response iss", resp.data.data)
    // const allApplications = resp.data.data.forEach(function (e) {
    //   const othersApplications = e.evaluators.forEach(function (ee) {
    //     if(ee.evaluatorId !== adminStatus[1]) {
    //       otherEvaluators.push(e);
    //     }
    //   })
      
    // })
    commit(SET_NEW_LICENSE_OTHERS_RE_EVALUATE, otherEvaluators);
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

  async getNewLicenseConfirmed({ commit }, adminStatus) {
    const url = baseUrl + "/newlicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const confirmed = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
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

  async getNewLicenseOthersConfirmed({ commit }, adminStatus) {
    const url = baseUrl + "/newlicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const confirmed = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1]
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

  async getNewLicenseReturnedToMe({ commit }, adminStatus) {
    const url = baseUrl + "/newlicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const confirmed = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
    });
    commit(SET_NEW_LICENSE_RETURNED_TO_ME, confirmed);
  },

  getNewLicenseReturnedToMeSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseReturnedToMe === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseReturnedToMe.filter(function(e) {
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
    commit(SET_NEW_LICENSE_RETURNED_TO_ME_SEARCHED, searchedVal);
  },

  async getNewLicenseReturnedToOthers({ commit }, adminStatus) {
    const url = baseUrl + "/newlicenses/status/"+adminStatus[0];
    const resp = await ApiService.get(url);
    const confirmed = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1]
    })
    commit(SET_NEW_LICENSE_RETURNED_TO_OTHERS, confirmed);
  },

  getNewLicenseReturnedToOthersSearched({ commit, getters }, searchKey) {
    if (getters.getNewLicenseReturnedToOthers === undefined) {
      return;
    }
    const searchedVal = getters.getNewLicenseReturnedToOthers.filter(function(
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
