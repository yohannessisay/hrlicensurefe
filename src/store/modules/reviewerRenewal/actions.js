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
} from "./mutation-types";
const baseUrl = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api";

export default {
  async getUnassignedRenewal({ commit }) {
    try {
      const url = baseUrl + "/renewals/status/5";
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
    const searchedVal = getters.getRenewalOthersUnfinished.filter(function(
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
    commit(SET_RENEWAL_OTHERS_UNFINISHED_SEARCHED, searchedVal);
  },

  async getRenewalAssigned({ commit }, adminId) {
    const url = baseUrl + "/renewals/status/4";
    const resp = await ApiService.get(url);
    const assignedToMe = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
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

  async getRenewalOthersAssigned({ commit }, adminId) {
    const url = baseUrl + "/renewals/status/4";
    const resp = await ApiService.get(url);
    const othresUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminId;
    });
    commit(SET_RENEWAL_ASSIGNED_TO_OTHERS, othresUnfinished);
  },
  getRenewalOthersAssignedSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalAssignedToOthers === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalAssignedToOthers.filter(function(
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
    commit(SET_RENEWAL_ASSIGNED_TO_OTHERS_SEARCHED, searchedVal);
  },


  async getRenewalApproved({ commit }, adminId) {
    const url = baseUrl + "/renewals/status/5";
    const resp = await ApiService.get(url);
    if(resp.data.data === undefined) {
      const approved = []
      commit(SET_RENEWAL_APPROVED, approved)
      return;
    }
    const Approved = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
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

  async getRenewalAllApproved({ commit }, adminId) {
    const url = baseUrl + "/renewals/status/5";
    const resp = await ApiService.get(url);
    let allApproved = resp.data.data
    if(allApproved === undefined) {
      allApproved = [];
    }
    commit(SET_RENEWAL_ALL_APPROVED, allApproved);
  },
  getRenewalAllApprovedSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalAllApproved === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalAllApproved.filter(function(
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
    commit(SET_RENEWAL_ALL_APPROVED_SEARCHED, searchedVal);
  },

  async getRenewalDeclined({ commit }, adminId) {
    const url = baseUrl + "/renewals/status/6";
    const resp = await ApiService.get(url);
    if(resp.data.data === undefined) {
      const declined = []
      commit(SET_RENEWAL_DECLINED, declined)
      return;
    }
    const declined = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
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

  async getRenewalAllDeclined({ commit }, adminId) {
    const url = baseUrl + "/renewals/status/6";
    const resp = await ApiService.get(url);
    let allDeclined = resp.data.data
    if(allDeclined === undefined) {
      allDeclined = [];
    }
    commit(SET_RENEWAL_ALL_DECLINED, allDeclined);
  },
  getRenewalAllDeclinedSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalAllDeclined === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalAllDeclined.filter(function(
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
    commit(SET_RENEWAL_ALL_DECLINED_SEARCHED, searchedVal);
  },

  async getRenewalUnderSuperVision({ commit }, adminId) {
    const url = baseUrl + "/renewals/status/7";
    const resp = await ApiService.get(url);
    const underSuperVision = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
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

  async getRenewalOthersUnderSuperVision({ commit }, adminId) {
    const url = baseUrl + "/renewals/status/7";
    const resp = await ApiService.get(url);
    const othersUnderSuperVision = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminId
    })
    commit(SET_RENEWAL_OTHERS_UNDER_SUPERVISION, othersUnderSuperVision);
  },
  getRenewalOthersUnderSuperVisionSearched({ commit, getters }, searchKey) {
    if (getters.getRenewalOthersUnderSuperVision === undefined) {
      return;
    }
    const searchedVal = getters.getRenewalOthersUnderSuperVision.filter(function(
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
    commit(SET_RENEWAL_OTHERS_UNDER_SUPERVISION_SEARCHED, searchedVal);
  },

  /* 
  /* approved payment status is wrong for the time (status/7) is placeholder
  */
  async getRenewalApprovedPayment({ commit }, adminId) {
    const url = baseUrl + "/renewals/status/7";
    const resp = await ApiService.get(url);
    const approvedPayment = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
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
  async getRenewalOthersApprovedPayment({ commit }, adminId) {
    const url = baseUrl + "/renewals/status/7";
    const resp = await ApiService.get(url);
    const othersApprovedPayments = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminId
    })
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
  async getRenewalDeclinedPayment({ commit }, adminId) {
    const url = baseUrl + "/renewals/status/7";
    const resp = await ApiService.get(url);
    const declinedPayment = resp.data.data.filter(function(e) {
      return e.reviewerId === adminId;
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
  async getRenewalOthersDeclinedPayment({ commit }, adminId) {
    const url = baseUrl + "/renewals/status/7";
    const resp = await ApiService.get(url);
    const othersDeclinedPayments = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminId
    })
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
};
