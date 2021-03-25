// import axios from "axios";
// import ApiService from "../../../services/api.service";
import {
  SET_RENEWAL,
  SET_RENEWAL_PHOTO,
  SET_RENEWAL_PASSPORT,
  SET_RENEWAL_HEALTH_EXAM_CERT,
  SET_RENEWAL_SERVICE_FEE,
  SET_RENEWAL_CPD,
  SET_RENEWAL_WORK_EXPERIENCE,
  SET_DOCS
} from "./mutation-types";

export default {
  setRenewal({ commit }, renewalLicense) {
    commit(SET_RENEWAL, renewalLicense);
  },
  setRenewalPhoto({ commit }, renewalPhoto) {
    commit(SET_RENEWAL_PHOTO, renewalPhoto);
  },
  setRenewalPassport({ commit }, renewalPassport) {
    commit(SET_RENEWAL_PASSPORT, renewalPassport);
  },
  setRenewalHealthExamCert({ commit }, renewalHealthExamCert) {
    commit(SET_RENEWAL_HEALTH_EXAM_CERT, renewalHealthExamCert);
  },
  setRenewalServiceFee({ commit }, renewalServiceFee) {
    commit(SET_RENEWAL_SERVICE_FEE, renewalServiceFee);
  },
  setRenewalCpd({ commit }, renewalCpd) {
    commit(SET_RENEWAL_CPD, renewalCpd);
  },
  setRenewalWorkExperience({ commit }, renewalWorkExperience) {
    commit(SET_RENEWAL_WORK_EXPERIENCE, renewalWorkExperience);
  },
  setDocs({ commit }, docs) {
    commit(SET_DOCS, docs);
  },
  // async uploadRenewalDocs(docFormData) {
  //   const resp = {};
  //   try {
  //     this.resp = await axios.post(
  //       "http://localhost:5000/api/documentUploads/renewal/RA",
  //       docFormData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         }
  //       }
  //     );
  //   } catch (error) {
  //     this.resp = error;
  //   }
  //   return resp;
  // },
  // setActiveState({ commit }, state) {
  //   console.log(state);
  //   commit(SET_ACTIVE_STATE, state);
  // },
  // async newLicense({ commit }, license) {
  //   try {
  //     const rep = await axios.post(
  //       "https://ca9dee52bc55.ngrok.io/api/newLicenses/add",
  //       license
  //     );
  //   } catch (error) {
  //     const resp = error;
  //   }
  //   return resp;
  // },
  // async getUserType() {
  //   try {
  //     const resp = await ApiService.get("/api/lookups/userTypes");
  //   } catch (error) {
  //     const resp = error;
  //   }
  //   return resp;
  // },
  // async getInstitutionType() {
  //   try {
  //     const resp = await axios.post(
  //       "https://ca9dee52bc55.ngrok.io/api/newLicenses/add",
  //       profile
  //     );
  //   } catch (error) {
  //     const resp = error;
  //   }
  // },
  // async getInstitutions() {
  //   try {
  //     const resp = await ApiService.get("/api/lookups/institutions");
  //   } catch (error) {
  //     const resp = error;
  //   }
  //   return resp;
  // },
  // async getApplicantType() {
  //   try {
  //     const resp = await ApiService.get("/api/lookups/applicantTypes");
  //   } catch (error) {
  //     const resp = error;
  //   }
  //   return resp;
  // },
};
