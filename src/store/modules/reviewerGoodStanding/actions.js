import ApiService from "../../../services/api.service";
import { baseUrl } from "../../../composables/baseURL";
import {
  SET_GOOD_STANDING_UNFINISHED,
  SET_GOOD_STANDING_UNFINISHED_SEARCHED,
  SET_GOOD_STANDING_OTHERS_UNFINISHED,
  SET_GOOD_STANDING_OTHERS_UNFINISHED_SEARCHED,
  SET_GOOD_STANDING_APPROVED,
  SET_GOOD_STANDING_APPROVED_SEARCHED,
  SET_GOOD_STANDING_ALL_APPROVED,
  SET_GOOD_STANDING_ALL_APPROVED_SEARCHED,
  SET_GOOD_STANDING_PENDING_PAYMENT,
  SET_GOOD_STANDING_PENDING_PAYMENT_SEARCHED,
  SET_GOOD_STANDING_OTHERS_PENDING_PAYMENT,
  SET_GOOD_STANDING_OTHERS_PENDING_PAYMENT_SEARCHED,
  SET_GOOD_STANDING_LICENSED,
  SET_GOOD_STANDING_LICENSED_SEARCHED,
  SET_GOOD_STANDING_OTHERS_LICENSED,
  SET_GOOD_STANDING_OTHERS_LICENSED_SEARCHED,
  SET_GOOD_STANDING_ALL_LICENSED,
  SET_GOOD_STANDING_ALL_LICENSED_SEARCHED,
  SET_GOOD_STANDING_OTHERS_RE_APPLY,
  SET_GOOD_STANDING_OTHERS_RE_APPLY_SEARCHED,
} from "./mutation-types";

export default {
  async getUnassignedGoodStanding(context, statusId) {
    try {
      const url = baseUrl + "/goodStandings/status/" + statusId;
      const resp = await ApiService.get(url);

      return resp.data.data;
    } catch (err) {
      return err;
    }
  },
  async getGoodstandingReport() {
    try {
      const approved = await ApiService.get(
        baseUrl + "/goodStandings/status/5"
      );
      const declined = await ApiService.get(
        baseUrl + "/goodStandings/status/6"
      );
      const review = await ApiService.get(baseUrl + "/goodStandings/status/7");

      return [approved, declined, review];
    } catch (err) {
      return err;
    }
  },

  async getGoodStandingUnfinished({ commit }, adminStatus) {
    const url = baseUrl + "/goodstandings/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    const myUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
    });
    commit(SET_GOOD_STANDING_UNFINISHED, myUnfinished);
  },

  getGoodStandingUnfinishedSearched({ commit, getters }, searchKey) {
    if (getters.getGoodStandingUnfinished === undefined) {
      return;
    }
    const searchedVal = getters.getGoodStandingUnfinished.filter(function(e) {
      return e.goodStandingCode === undefined
        ? ""
        : e.goodStandingCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_GOOD_STANDING_UNFINISHED_SEARCHED, searchedVal);
  },

  async getGoodStandingOthersUnfinished({ commit }, adminStatus) {
    const url = baseUrl + "/goodstandings/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    const othresUnfinished = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_GOOD_STANDING_OTHERS_UNFINISHED, othresUnfinished);
  },
  getGoodStandingOthersUnfinishedSearched({ commit, getters }, searchKey) {
    if (getters.getGoodStandingOthersUnfinished === undefined) {
      return;
    }
    const searchedVal = getters.getGoodStandingOthersUnfinished.filter(function(
      e
    ) {
      return e.goodStandingCode === undefined
        ? ""
        : e.goodStandingCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_GOOD_STANDING_OTHERS_UNFINISHED_SEARCHED, searchedVal);
  },

  async getGoodStandingAssigned(context, adminStatus) {
    let assignedToMe = [];
    let assignedToOthers = [];
    const url = baseUrl + "/goodstandings/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    resp && resp.data
      ? resp.data.data.forEach((element) => {
          if (element.reviewerId == adminStatus[1]) {
            assignedToMe.push(element);
          } else {
            assignedToOthers.push(element);
          }
        })
      : [];

    return { assignedToMe: assignedToMe, assignedToOthers: assignedToOthers };
  },

  async getGoodStandingApproved({ commit }, adminStatus) {
    const url = baseUrl + "/goodstandings/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    if (resp.data.data === undefined) {
      const myApproved = [];
      commit(SET_GOOD_STANDING_APPROVED, myApproved);
      return;
    }
    const myApproved = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
    });
    commit(SET_GOOD_STANDING_APPROVED, myApproved);
  },

  getGoodStandingApprovedSearched({ commit, getters }, searchKey) {
    if (getters.getGoodStandingApproved === undefined) {
      return;
    }
    const searchedVal = getters.getGoodStandingApproved.filter(function(e) {
      return e.goodStandingCode === undefined
        ? ""
        : e.goodStandingCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_GOOD_STANDING_APPROVED_SEARCHED, searchedVal);
  },

  async getGoodStandingAllApproved({ commit }, adminStatus) {
    const url = baseUrl + "/goodstandings/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    if (resp.data.data === undefined) {
      const othersApproved = [];
      commit(SET_GOOD_STANDING_ALL_APPROVED, othersApproved);
      return;
    }
    const othersApproved = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_GOOD_STANDING_ALL_APPROVED, othersApproved);
  },
  getGoodStandingAllApprovedSearched({ commit, getters }, searchKey) {
    if (getters.getGoodStandingAllApproved === undefined) {
      return;
    }
    const searchedVal = getters.getGoodStandingAllApproved.filter(function(e) {
      return e.goodStandingCode === undefined
        ? ""
        : e.goodStandingCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_GOOD_STANDING_ALL_APPROVED_SEARCHED, searchedVal);
  },

  async getGoodStandingDeclined(context, adminStatus) {
    const url = baseUrl + "/goodstandings/status/" + adminStatus[0];
    const resp = await ApiService.get(url);

    const declined = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
    });
    return declined;
  },

  async getGoodStandingAllDeclined(context, adminStatus) {
    const url = baseUrl + "/goodstandings/status/" + adminStatus[0];
    const resp = await ApiService.get(url);

    const othersDeclined = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    return othersDeclined;
  },

  async getGoodStandingPendingPayment({ commit }, adminStatus) {
    const url = baseUrl + "/goodstandings/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    const pendingPayment = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[1];
    });
    commit(SET_GOOD_STANDING_PENDING_PAYMENT, pendingPayment);
  },

  getGoodStandingPendingPaymentSearched({ commit, getters }, searchKey) {
    if (getters.getGoodStandingPendingPayment === undefined) {
      return;
    }
    const searchedVal = getters.getGoodStandingPendingPayment.filter(function(
      e
    ) {
      return e.goodStandingCode === undefined
        ? ""
        : e.goodStandingCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_GOOD_STANDING_PENDING_PAYMENT_SEARCHED, searchedVal);
  },

  async getGoodStandingOthersPendingPayment({ commit }, adminStatus) {
    const url = baseUrl + "/goodstandings/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    const AllPendingPayments = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_GOOD_STANDING_OTHERS_PENDING_PAYMENT, AllPendingPayments);
  },

  getGoodStandingOthersPendingPaymentSearched({ commit, getters }, searchKey) {
    if (getters.getGoodStandingOthersPendingPayment === undefined) {
      return;
    }
    const searchedVal = getters.getGoodStandingOthersPendingPayment.filter(
      function(e) {
        return e.goodStandingCode === undefined
          ? ""
          : e.goodStandingCode
              .toLowerCase()
              .includes(searchKey.toLowerCase()) ||
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
    commit(SET_GOOD_STANDING_OTHERS_PENDING_PAYMENT_SEARCHED, searchedVal);
  },

  async getGoodStandingLicensed({ commit }, adminStatus) {
    const url = baseUrl + "/goodstandings/status/" + adminStatus[1];
    const approvedURL = baseUrl + "/goodstandings/status/" + adminStatus[2];
    const resp = await ApiService.get(url);
    const approvedResp = await ApiService.get(approvedURL);
    const licensed = resp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[0];
    });
    const approvedLicensed = approvedResp.data.data.filter(function(e) {
      return e.reviewerId === adminStatus[0];
    });
    const concateLicensedUsers = licensed.concat(approvedLicensed);
    commit(SET_GOOD_STANDING_LICENSED, concateLicensedUsers);
  },

  getGoodStandingLicensedSearched({ commit, getters }, searchKey) {
    if (getters.getGoodStandingLicensed === undefined) {
      return;
    }
    const searchedVal = getters.getGoodStandingLicensed.filter(function(e) {
      return e.goodStandingCode === undefined
        ? ""
        : e.goodStandingCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_GOOD_STANDING_LICENSED_SEARCHED, searchedVal);
  },

  async getGoodStandingOtherLicensed({ commit }, adminStatus) {
    const url = baseUrl + "/goodstandings/status/" + adminStatus[1];
    const approvedURL = baseUrl + "/goodstandings/status/" + adminStatus[2];
    const resp = await ApiService.get(url);
    const approvedResp = await ApiService.get(approvedURL);
    const othersLicensed = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[0];
    });
    const othersApprovedLicensed = approvedResp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[0];
    });
    const othersConcateLicensedUsers = othersLicensed.concat(
      othersApprovedLicensed
    );
    commit(SET_GOOD_STANDING_OTHERS_LICENSED, othersConcateLicensedUsers);
  },

  getGoodStandingOthersLicensedSearched({ commit, getters }, searchKey) {
    if (getters.getGoodStandingOthersLicensed === undefined) {
      return;
    }
    const searchedVal = getters.getGoodStandingOthersLicensed.filter(function(
      e
    ) {
      return e.goodStandingCode === undefined
        ? ""
        : e.goodStandingCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_GOOD_STANDING_OTHERS_LICENSED_SEARCHED, searchedVal);
  },

  async getGoodStandingAllLicensed({ commit }) {
    const url = baseUrl + "/goodStandings/all/licensed";
    const resp = await ApiService.get(url);
    const goodStandingAllLicensed = resp.data.data;
    commit(SET_GOOD_STANDING_ALL_LICENSED, goodStandingAllLicensed);
  },
  async getCertificateIssuedGoodStanding({ commit }) {
    const url = baseUrl + "/goodStandings/certificat/issued";
    const resp = await ApiService.get(url);
    const goodStandingAllLicensed = resp.data.data;
    commit(SET_GOOD_STANDING_ALL_LICENSED, goodStandingAllLicensed);
  },

  getGoodStandingAllLicensedSearched({ commit, getters }, searchKey) {
    if (getters.getGoodStandingAllLicensed === undefined) {
      return;
    }
    const searchedVal = getters.getGoodStandingAllLicensed.filter(function(e) {
      return e.goodStandingCode === undefined
        ? ""
        : e.goodStandingCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_GOOD_STANDING_ALL_LICENSED_SEARCHED, searchedVal);
  },

  async getGoodStandingReApply(context, adminStatus) {
    const url = baseUrl + "/goodstandings/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    const reApply = resp.data.data;
    return reApply;
  },

  async getGoodStandingOtherReApply({ commit }, adminStatus) {
    const url = baseUrl + "/goodstandings/status/" + adminStatus[0];
    const resp = await ApiService.get(url);
    const othersReApply = resp.data.data.filter(function(e) {
      return e.reviewerId !== adminStatus[1];
    });
    commit(SET_GOOD_STANDING_OTHERS_RE_APPLY, othersReApply);
  },

  getGoodStandingOthersReApplySearched({ commit, getters }, searchKey) {
    if (getters.getGoodStandingOthersReApply === undefined) {
      return;
    }
    const searchedVal = getters.getGoodStandingOthersReApply.filter(function(
      e
    ) {
      return e.goodStandingCode === undefined
        ? ""
        : e.goodStandingCode.toLowerCase().includes(searchKey.toLowerCase()) ||
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
    commit(SET_GOOD_STANDING_OTHERS_RE_APPLY_SEARCHED, searchedVal);
  },
};
