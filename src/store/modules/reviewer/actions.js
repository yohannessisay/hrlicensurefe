import ApiService from "../../../services/api.service";
import {
  SET_UNASSIGNED,
  SET_UNASSIGNED_SEARCHED,
  SET_ASSIGNED_TO_YOU,
  SET_ASSIGNED_TO_YOU_SEARCHED,
  SET_UNFINISHED,
  SET_UNFINISHED_SEARCHED,
  SET_RECENTLY_FINISHED,
  SET_RECENTLY_FINISHED_SEARCHED,
  SET_ASSIGNED_FOR_EVERYONE,
  SET_ASSIGNED_FOR_EVERYONE_SEARCHED,
  SET_EVEYONE_UNFINISHED,
  SET_EVEYONE_UNFINISHED_SEARCHED,
  SET_ALL_RECENTLY_FINISHED,
  SET_ALL_RECENTLY_FINISHED_SEARCHED,
  SET_ALL_PENDING_PAYMENTS,
  SET_ALL_PENDING_PAYMENTS_SEARCHED,
  SET_PENDING_PAYMENTS,
  SET_PENDING_PAYMENTS_SEARCHED,

} from "./mutation-types";
const baseUrl = "https://hrlicensurebe.dev.k8s.sandboxaddis.com/api";
const adminId = +localStorage.getItem("adminId");
const adminRole = localStorage.getItem("role");

export default {
  async getUnfinished({commit}, id) {
    try {
      // const resp = await ApiService.get("https://randomuser.me/api/?results=10");
      // const url = baseUrl + "/newLicenses/user/" + id;
      const url = baseUrl + "/applications/unfinished/" + id;
      const resp = await ApiService.get(url);
      commit(SET_UNFINISHED, resp.data.data)
      // return resp;
    } catch (error) {
      const resp = { status: "Error" };
      return resp;
    }
  },
  getUnfinishedSearched({commit, getters}, searchedKey) {
    if(getters.getUnfinished === undefined) {
      return;
    }
    const searchedVal = getters.getUnfinished.filter(function(e) {
      return e.newLicenseCode
              .toLowerCase()
              .includes(searchedKey.toLowerCase())
              || (e.applicant.profile.name + 
                " " +
                 e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchedKey.toLowerCase())
              || e.applicant.profile.name
              .toLowerCase()
              .includes(searchedKey.toLowerCase())
              || e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchedKey.toLowerCase())
    })
    commit(SET_UNFINISHED_SEARCHED, searchedVal)
  },
  async getEveryOneUnfinished({commit}, adminRole) {
    if(adminRole === "SA") {
      try {  
        const respAll = await ApiService.get(baseUrl + "/applications/allUnfinished");
        const resp = respAll.data.data.filter(function(e) {
          return e.reviewerId === null ? '' : e.reviewerId !== adminId
        })
        console.log("here here")
        console.log("resp resp", resp)
        commit(SET_EVEYONE_UNFINISHED, resp)
      } catch(error) {
        const resp = error
      }
    } else {
      return;
    }
  },
  getEveryOneUnfinishedSearched({commit, getters}, searchKey) {
    if(getters.getEveryOneUnfinished === undefined) {
      return;
    }
    const searchedVal = getters.getEveryOneUnfinished.filter(function(e) {
      return e.newLicenseCode === undefined ? '': e.newLicenseCode
        .toLowerCase()
        .includes(searchKey.toLowerCase())
        || (e.applicant.profile.name + 
          " " +
           e.applicant.profile.fatherName)
        .toLowerCase()
        .includes(searchKey.toLowerCase())
        || e.applicant.profile.name
        .toLowerCase()
        .includes(searchKey.toLowerCase())
        || e.applicant.profile.fatherName
        .toLowerCase()
        .includes(searchKey.toLowerCase())
        || e.reviewer.name
        .toLowerCase()
        .includes(searchKey.toLowerCase())

    })
    commit(SET_EVEYONE_UNFINISHED_SEARCHED, searchedVal)
  },
  async getAssignedToYou({commit}, userId) { 
    console.log("admin_id", userId)
    try {
      const resp = await ApiService.get(baseUrl + "/applications/assignedToYou/" + userId);
      commit(SET_ASSIGNED_TO_YOU, resp.data.data)
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  getAssignedToYouSearched({commit, getters}, searchKey) {
    if(getters.getAssignedToYou === undefined) {
      return;
    }
    const searchedVal = getters.getAssignedToYou.filter(function(e) {
      return e.newLicenseCode
              .toLowerCase()
              .includes(searchKey.toLowerCase())
              || (e.applicant.profile.name + 
                " " +
                 e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase())
              || e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase())
              || e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase())

    })
    commit(SET_ASSIGNED_TO_YOU_SEARCHED, searchedVal)
  },
  async getAssignedToEveryOne({commit}, adminRole) {
    if(adminRole === "SA") {
      try {
        const respAll = await ApiService.get(baseUrl + "/applications/assignedToAll")
        // if(respAll.data.status === "error")
        const resp = respAll.data.data.filter(function(e) {
          return e.reviewerId === null ? '' : e.reviewerId !== adminId
        })
        commit(SET_ASSIGNED_FOR_EVERYONE, resp)
      } catch(error) {
        const resp = error;
        return resp;
      }
    } else {
      return;
    }
  },
  getAssignedToEveryOneSearched({commit, getters}, searchKey) {
    if(getters.getAssignedForEveryOne === undefined) {
      return;
    }
    const searchedVal = getters.getAssignedForEveryOne.filter(function(e) {
      return e.newLicenseCode === undefined ? '': e.newLicenseCode
             .toLowerCase()
             .includes(searchKey.toLowerCase())
             || (e.applicant.profile.name + 
              " " +
               e.applicant.profile.fatherName)
            .toLowerCase()
            .includes(searchKey.toLowerCase())
             || e.applicant.profile.name
             .toLowerCase()
             .includes(searchKey.toLowerCase())
             || e.applicant.profile.fatherName
             .toLowerCase()
             .includes(searchKey.toLowerCase())
             || e.reviewer.name
             .toLowerCase()
             .includes(searchKey.toLowerCase())

    })
    commit(SET_ASSIGNED_FOR_EVERYONE_SEARCHED, searchedVal)
  },
  async getUnassigned({commit}) {
    try {
      // const resp = await ApiService.get("https://randomuser.me/api/?results=10");
      // const resp = await ApiService.get(baseUrl + "/newLicenses/status/3");
      const resp = await ApiService.get(baseUrl + "/applications/unassigned");
      commit(SET_UNASSIGNED, resp.data.data)
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  getUnassignedSearched({commit, getters}, searchKey) {
    if(getters.getUnassigned === undefined) {
      return;
    }
    const searchedVal = getters.getUnassigned.filter(function(e) {
      return e.newLicenseCode
        .toLowerCase()
        .includes(searchKey.toLowerCase())
        || (e.applicant.profile.name + 
          " " +
           e.applicant.profile.fatherName)
        .toLowerCase()
        .includes(searchKey.toLowerCase())
        || e.applicant.profile.name
        .toLowerCase()
        .includes(searchKey.toLowerCase())
        || e.applicant.profile.fatherName
        .toLowerCase()
        .includes(searchKey.toLowerCase())
    })
    commit(SET_UNASSIGNED_SEARCHED, searchedVal)
  },
  async getRecentlyFinished({commit}, adminId) {
    try {
      console.log("admin -id", adminId)
      const resp = await ApiService.get(baseUrl + "/applications/finished/"+adminId)

      const certifiedUsers = resp.data.data.filter(function(e) {
        return e.certified == true;
      })
      // const approvedUsers = resp.data.data.filter(function(e) {
      //   return 
      // })
      
      const approvedUsers = resp.data.data.filter(function(e) {
        return e.applicationStatus.name !== null 
                ? e.applicationStatus.name == "Approve" : ''
      })
      console.log("all c: ", certifiedUsers)
      console.log("mmmmhmm", approvedUsers)
      const finishedDatas = [resp.data.data, certifiedUsers, approvedUsers]
      commit(SET_RECENTLY_FINISHED, finishedDatas)
    } catch (error) {
      const resp = error;
      return resp;
    }
  },
  getRecentlyFinishedSearched({commit, getters}, searchKey) {
    if(getters.getRecentlyFinished === undefined) {
      return;
    }
    const searchedVal = getters.getRecentlyFinished.filter(function(e) {
      return e.newLicenseCode
              .toLowerCase()
              .includes(searchKey.toLowerCase())
              || (e.applicant.profile.name + 
                " " +
                 e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase())
              || e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase())
              || e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase())
    })
    commit(SET_RECENTLY_FINISHED_SEARCHED, searchedVal)
  },

  async getAllRecentlyFinished({commit}) {
    try {
      console.log("\\\\\\\\\\\\")
      const resp = await ApiService.get(baseUrl + "/applications/allFinished")
      console.log("all finished: ", resp.data.data)
      // console.log("-+++++-", resp.data.data)
      const certifiedUsers = resp.data.data.filter(function(e) {
        return e.certified == true;
      })
      // const approvedUsers = resp.data.data.filter(function(e) {
      //   return 
      // })
      console.log("all c: ", certifiedUsers)
      console.log("mmmmhmm", resp.data.data)
      const approvedUsers = resp.data.data.filter(function(e) {
        return e.applicationStatus.name !== null 
                ? e.applicationStatus.name == "Approve" : ''
      })
      console.log("approved", approvedUsers)
      commit(SET_ALL_RECENTLY_FINISHED, resp.data.data, certifiedUsers, approvedUsers)
    } catch(error) {
      const resp = error;
      return resp;
    }
  },
  
  async getAllCertifiedUsers({commit}) {
    try {
      const resp = await ApiService.get(baseUrl + "/applications/allFinished")
      console.log("all finished: ", resp.data.data)
      const certifiedUsers = resp.data.data.filter(function(e) {
        return e.certified == true;
      })
      console.log("all c: ", certifiedUsers)
      return certifiedUsers
    } catch(error) {
      const resp = error;
      return resp;
    }
  },
  getAllRecentlyFinishedSearched({commit, getters}, searchKey) {
    if(getters.getAllRecentlyFinishedSearched === undefined) {
      return;
    }
    const searchedVal = getters.getAllRecentlyFinishedSearched.filter(function(e) {
      return e.newLicenseCode
              .toLowerCase()
              .includes(searchKey.toLowerCase())
              || (e.applicant.profile.name + 
                " " +
                 e.applicant.profile.fatherName)
              .toLowerCase()
              .includes(searchKey.toLowerCase())
              || e.applicant.profile.name
              .toLowerCase()
              .includes(searchKey.toLowerCase())
              || e.applicant.profile.fatherName
              .toLowerCase()
              .includes(searchKey.toLowerCase())
    })
    console.log("searched val: ", searchedVal)
    commit(SET_ALL_RECENTLY_FINISHED_SEARCHED, searchedVal)
  },
  async getAllPendingPayments({commit}) {
    const url = baseUrl + "/applications/allPendingPayments";
    const resp = await ApiService.get(url);
    console.log("pending paymentss",resp)
    commit(SET_ALL_PENDING_PAYMENTS, resp.data.data)
  },

  getAllPendingPaymentSearched({commit, getters}, searchKey) {
    if(getters.getAllPendingPayment === undefined) {
      return;
    }
    const searchedVal = getters.getAllPendingPayment.filter(function(e) {
      return e.newLicenseCode === undefined ? '': e.newLicenseCode
        .toLowerCase()
        .includes(searchKey.toLowerCase())
        || (e.applicant.profile.name + 
          " " +
           e.applicant.profile.fatherName)
        .toLowerCase()
        .includes(searchKey.toLowerCase())
        || e.applicant.profile.name
        .toLowerCase()
        .includes(searchKey.toLowerCase())
        || e.applicant.profile.fatherName
        .toLowerCase()
        .includes(searchKey.toLowerCase())
        || e.reviewer.name
        .toLowerCase()
        .includes(searchKey.toLowerCase())

    })
    console.log("key: ", searchedVal)
    commit(SET_ALL_PENDING_PAYMENTS_SEARCHED, searchedVal)
  },

  async getPendingPayments({commit}, adminId) {
    const url = baseUrl + "/applications/adminsPendingPayments/" + adminId
    const resp = await ApiService.get(url);
    console.log("my pendings", resp.data.data)
    commit(SET_PENDING_PAYMENTS, resp.data.data)
  },

  async getProfile(context, id) {
    try {
      console.log(id);
      const url = baseUrl + "/profiles/" + id;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getNewLicenseApplication(context, id) {
    try {
      console.log(id);
      const url = baseUrl + "/newLicenses/" + id;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getGoodStandingApplication(context, id) {
    try {
      console.log(id);
      const url = baseUrl + "/goodStandings/" + id;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getRenewalApplication(context, id) {
    try {
      console.log(id);
      const url = baseUrl + "/renewals/" + id;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getVerificationApplication(context, id) {
    try {
      console.log(id);
      const url = baseUrl + "/verifications/" + id;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getAdmins() {
    try {
      const url = baseUrl + "/admins";
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getRoles(context, userID) {
    try {
      const url = baseUrl + "/admins/" + userID;
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async assignReviewer({ commit }, assign) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/licenseReviewers/assign",
        assign
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async assignRenewalReviewer({ commit }, assign) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/renewalReviewers/assign",
        assign
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async assignVerificationReviewer({ commit }, assign) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/verificationReviewers/assign",
        assign
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async assignGoodStandingReviewer({ commit }, assign) {
    try {
      const resp = await ApiService.post(
        baseUrl + "/goodStandingReviewers/assign",
        assign
      );
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getApplication(context, applicationId) {
    try {
      const url = baseUrl + "/newLicenses/" + applicationId;
      // const urll = baseUrl + "/newLicenses/125";
      const urll = baseUrl + "/newLicenses/49";
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async getDocumentTypes() {
    try {
      const url = baseUrl + "/documentTypes";
      const resp = await ApiService.get(url);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async editVerification({ commit }, license) {
    try {
      console.log(license);
      const resp = await ApiService.put(
        baseUrl + "/verifications/" + license.data.id,
        license
      );
      // const resp = await ApiService.put(url + "newLicenses/" + license);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async editGoodStanding({ commit }, license) {
    try {
      console.log(license);
      const resp = await ApiService.put(
        baseUrl + "/goodStandings/" + license.data.id,
        license
      );
      // const resp = await ApiService.put(url + "newLicenses/" + license);
      return resp;
    } catch (error) {
      return error;
    }
  },
  async editRenewal({ commit }, license) {
    try {
      console.log(license);
      const resp = await ApiService.put(
        baseUrl + "/renewals/" + license.data.id,
        license
      );
      // const resp = await ApiService.put(url + "newLicenses/" + license);
      return resp;
    } catch (error) {
      return error;
    }
  },
};
