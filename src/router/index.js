import { createRouter, createWebHistory } from "vue-router";
import Landing from "../components/Landing/Landing.vue";
const routes = [
  {
    /******************************************************************************************************************************************/
    /**************1-COMMON ROUTES*****************/
    /******************************************************************************************************************************************/
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/404Page.vue"),

    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../components/Landing/AdminLanding.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: Landing,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/landing",
    name: "Landing",
    component: () => import("../components/Landing/Landing.vue"),
  },
  {
    path: "/update-profile/:id",
    name: "UpdateProfile",
    component: () => import("../components/Profile/UpdateProfile.vue"),
  },
  {
    path: "/addProfile",
    name: "NewProfile",
    component: () => import("../components/Profile/NewProfile.vue"),
  },
  {
    path: "/verifyOTP",
    name: "verifyOTP",
    component: () => import("../components/Signup/verifyOTP.vue"),
  },

  {
    path: "/admin/resetpassword/:id/:token",
    name: "ResetPasswordAdmin",
    component: () => import("../views/ResetPassword.vue"),
  },
  {
    path: "/resetpassword/:id/:token",
    name: "ResetPassword",
    component: () => import("../views/ResetPasswordUser.vue"),
  },

  {
    name: "Google-Form",
    path: "/google-form",
    component: {},
    meta: {
      RedirectExternalUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSdHJh4WF9bBHgw7ewMHUzEr3a4dhvOjdF9aWu50PdQo_7no0Q/viewform",
    },
  },
  {
    path: "/scanned-certified-user/:applicationType/:userId/:applicationId",
    name: "scannedCertifiedUser",
    component: () =>
      import("../components/Applicant/Shared/ScannedCertificate.vue"),
  },
  /******************************************************************************************************************************************/
  /**************2-APPLICANT SIDE ROUTES*****************/
  /******************************************************************************************************************************************/
  {
    path: "/menu",
    name: "Menu",
    component: () => import("../components/Applicant/HomePage/Menu.vue"),
  },

  //Applicant Side New License
  {
    path: "/Applicant/NewLicense/approved",
    name: "ApplicantNewLicenseApproved",
    component: () =>
      import("../components/Applicant/NewLicense/approved/approved.vue"),
  },
  {
    path: "/Applicant/NewLicense/approved/detail/:id",
    name: "ApplicantNewLicenseApprovedDetail",
    component: () =>
      import("../components/Applicant/NewLicense/approved/approvedDetail.vue"),
  },
  {
    path: "/Applicant/NewLicense/submitted",
    name: "ApplicantNewLicenseSubmitted",
    component: () =>
      import("../components/Applicant/NewLicense/submitted/submitted.vue"),
  },
  {
    path: "/Applicant/NewLicense/submitted/detail/:id",
    name: "ApplicantNewLicenseSubmittedDetail",
    component: () =>
      import(
        "../components/Applicant/NewLicense/submitted/submittedDetail.vue"
      ),
  },
  {
    path: "/Applicant/NewLicense/inReview",
    name: "ApplicantNewLicenseInReview",
    component: () =>
      import("../components/Applicant/NewLicense/inReview/inReview.vue"),
  },
  {
    path: "/Applicant/NewLicense/undersupervision",
    name: "ApplicantNewLicenseUnderSupervision",
    component: () =>
      import(
        "../components/Applicant/NewLicense/underSupervision/underSupervision.vue"
      ),
  },
  {
    path: "/Applicant/NewLicense/withdraw",
    name: "ApplicantNewLicenseWithdraw",
    component: () =>
      import("../components/Applicant/NewLicense/withdraw/withdraw.vue"),
  },
  {
    path: "/Applicant/NewLicense/pendingPayment",
    name: "ApplicantNewLicensePendingPayment",
    component: () =>
      import(
        "../components/Applicant/NewLicense/pendingPayment/pendingPayment.vue"
      ),
  },
  {
    path: "/Applicant/NewLicense/declined",
    name: "ApplicantNewLicenseDeclined",
    component: () =>
      import("../components/Applicant/NewLicense/declined/declined.vue"),
  },
  {
    path: "/Applicant/NewLicense/draft",
    name: "ApplicantNewLicenseDraft",
    component: () =>
      import("../components/Applicant/NewLicense/draft/draft.vue"),
  },
  {
    path: "/Applicant/NewLicense/draft/detail/:id",
    name: "ApplicantNewLicenseDraftDetail",
    component: () =>
      import("../components/Applicant/NewLicense/draft/draftDetail.vue"),
  },
  {
    path: "/Applicant/Newlicense",
    name: "ApplicantNewLicense",
    component: () =>
      import("../components/Applicant/NewLicense/newLicense.vue"),
  },
  {
    path: "/Applicant/NewLicense/returned",
    name: "ApplicantNewLicenseReturned",
    component: () =>
      import("../components/Applicant/NewLicense/returned/returned.vue"),
  },
  {
    path: "/Applicant/NewLicense/suspended",
    name: "ApplicantNewLicenseSuspended",
    component: () =>
      import("../components/Applicant/NewLicense/suspended/suspended.vue"),
  },
  {
    path: "/Applicant/NewLicense/revoked",
    name: "ApplicantNewLicenseRevoked",
    component: () =>
      import("../components/Applicant/NewLicense/revoked/revoked.vue"),
  },
  //Applicant Side Renewal
  {
    path: "/Applicant/Renewal",
    name: "ApplicantRenewal",
    component: () => import("../components/Applicant/Renewal/Renewal.vue"),
  },
  {
    path: "/Applicant/Renewal/submitted",
    name: "ApplicantRenewalSubmitted",
    component: () =>
      import("../components/Applicant/Renewal/submitted/submitted.vue"),
  },
  {
    path: "/Applicant/Renewal/submitted/detail/:id",
    name: "ApplicantRenewalSubmittedDetail",
    component: () =>
      import("../components/Applicant/Renewal/submitted/submittedDetail.vue"),
  },
  {
    path: "/Applicant/Renewal/approved",
    name: "ApplicantRenewalApproved",
    component: () =>
      import("../components/Applicant/Renewal/approved/approved.vue"),
  },
  {
    path: "/Applicant/Renewal/declined",
    name: "ApplicantRenewalDeclined",
    component: () =>
      import("../components/Applicant/Renewal/declined/declined.vue"),
  },
  {
    path: "/Applicant/Renewal/withdraw",
    name: "ApplicantRenewalWithdraw",
    component: () =>
      import("../components/Applicant/Renewal/withdraw/withdraw.vue"),
  },
  {
    path: "/Applicant/Renewal/underSupervision",
    name: "ApplicantRenewalUnderSupervision",
    component: () =>
      import(
        "../components/Applicant/Renewal/underSupervision/underSupervision.vue"
      ),
  },
  {
    path: "/Applicant/Renewal/pendingPayment",
    name: "ApplicantRenewalPendingPayment",
    component: () =>
      import(
        "../components/Applicant/Renewal/pendingPayment/pendingPayment.vue"
      ),
  },
  {
    path: "/Applicant/Renewal/draft",
    name: "ApplicantRenewalDraft",
    component: () => import("../components/Applicant/Renewal/draft/draft.vue"),
  },
  {
    path: "/Applicant/Renewal/draft/detail/:id",
    name: "ApplicantRenewalDraftDetail",
    component: () =>
      import("../components/Applicant/Renewal/draft/draftDetail.vue"),
  },
  {
    path: "/Applicant/Renewal/inReview",
    name: "ApplicantRenewalInReview",
    component: () =>
      import("../components/Applicant/Renewal/inReview/inReview.vue"),
  },
  {
    path: "/Applicant/Renewal/returned",
    name: "ApplicantRenewalReturned",
    component: () =>
      import("../components/Applicant/Renewal/returned/returned.vue"),
  },
  {
    path: "/Applicant/Renewal/suspended",
    name: "ApplicantRenewalSuspended",
    component: () =>
      import("../components/Applicant/Renewal/suspended/suspended.vue"),
  },
  {
    path: "/Applicant/Renewal/revoked",
    name: "ApplicantRenewalRevoked",
    component: () =>
      import("../components/Applicant/Renewal/revoked/revoked.vue"),
  },
  //Applicant Side Good Standing
  {
    path: "/Applicant/GoodStanding",
    name: "ApplicantGoodStanding",
    component: () =>
      import("../components/Applicant/GoodStanding/goodStanding.vue"),
  },
  {
    path: "/Applicant/GoodStanding/approved",
    name: "ApplicantGoodStandingApproved",
    component: () =>
      import("../components/Applicant/GoodStanding/approved/approved.vue"),
  },
  {
    path: "/Applicant/GoodStanding/submitted",
    name: "ApplicantGoodStandingSubmitted",
    component: () =>
      import("../components/Applicant/GoodStanding/submitted/submitted.vue"),
  },
  {
    path: "/Applicant/GoodStanding/submitted/detail/:id",
    name: "ApplicantGoodStandingSubmittedDetail",
    component: () =>
      import(
        "../components/Applicant/GoodStanding/submitted/submittedDetail.vue"
      ),
  },
  {
    path: "/Applicant/GoodStanding/assigned",
    name: "ApplicantGoodStandingInReview",
    component: () =>
      import("../components/Applicant/GoodStanding/assigned/assigned.vue"),
  },

  {
    path: "/Applicant/GoodStanding/withdraw",
    name: "ApplicantGoodStandingWithdraw",
    component: () =>
      import("../components/Applicant/GoodStanding/withdraw/withdraw.vue"),
  },

  {
    path: "/Applicant/GoodStanding/declined",
    name: "ApplicantDeclined",
    component: () =>
      import("../components/Applicant/GoodStanding/declined/declined.vue"),
  },
  {
    path: "/Applicant/GoodStanding/declined/detail/:id",
    name: "ApplicantGoodStandingDeclinedDetail",
    component: () =>
      import(
        "../components/Applicant/GoodStanding/declined/declinedDetail.vue"
      ),
  },
  {
    path: "/Applicant/GoodStanding/draft",
    name: "ApplicantGoodStandingDraft",
    component: () =>
      import("../components/Applicant/GoodStanding/draft/draft.vue"),
  },
  {
    path: "/Applicant/GoodStanding/draft/detail/:id",
    name: "ApplicantGoodStandingDraftDetail",
    component: () =>
      import("../components/Applicant/GoodStanding/draft/draftDetail.vue"),
  },

  //Applicant Profile Management
  {
    path: "/applicant/profile",
    name: "ApplicantProfileManagement",
    component: () => import("../components/Applicant/Profile/profile.vue"),
  },

  /******************************************************************************************************************************************/
  /**************1-END OF APPLICANT SIDE ROUTES*****************/
  /******************************************************************************************************************************************/

  {
    path: "/admin/review",
    name: "ReviewerHome",
    component: () => import("../components/Reviewer/ReviewerMenu.vue"),
  },

  {
    path: "/admin/changePassword",
    name: "changeadminPassword",
    component: () =>
      import(
        "../components/Reviewer/Configurations/ChangePassword/ChangePassword.vue"
      ),
  },

  /******************************************************************************************************************************************/
  /**************1-ADMIN SIDE ROUTES*****************/
  /******************************************************************************************************************************************/
  //Admin New license section
  {
    path: "/admin/newLicense",
    name: "AdminNewLicenseHome",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/NewLicense/Unassigned/unassigned.vue"
      ),
  },
  {
    path: "/admin/newLicense/inReview",
    name: "AdminNewLicenseInReview",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/NewLicense/InReview/inReview.vue"
      ),
  },
  {
    path: "/admin/newLicense/draft",
    name: "AdminNewLicenseDraft",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/NewLicense/Draft/draft.vue"
      ),
  },
  {
    path: "/admin/newLicense/approved",
    name: "AdminNewLicenseApproved",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/NewLicense/Approved/approved.vue"
      ),
  },
  {
    path: "/admin/newLicense/declined",
    name: "AdminNewLicenseDeclined",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/NewLicense/Declined/declined.vue"
      ),
  },
  {
    path: "/admin/newLicense/underSupervision",
    name: "AdminNewLicenseUnderSupervision",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/NewLicense/UnderSupervision/underSupervision.vue"
      ),
  },
  {
    path: "/admin/newLicense/licensed",
    name: "AdminNewLicenseLicensed",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/NewLicense/Licensed/licensed.vue"
      ),
  },

  {
    path: "/admin/newLicense/revoked",
    name: "AdminNewLicenseRevoked",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/NewLicense/Revoked/revoked.vue"
      ),
  },

  {
    path: "/admin/newLicense/suspended",
    name: "AdminNewLicenseSuspended",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/NewLicense/Suspended/suspended.vue"
      ),
  },

  {
    path: "/admin/newLicense/returned",
    name: "AdminNewLicenseReturned",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/NewLicense/Returned/returned.vue"
      ),
  },
  {
    path: "/admin/newLicense/evaluate/:id",
    name: "AdminNewLicenseEvaluate",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/NewLicense/InReview/inReviewEvaluation.vue"
      ),
  },

  //Admin Renewal Section
  {
    path: "/admin/renewal",
    name: "RenewalHome",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/Renewal/Unassigned/unassigned.vue"
      ),
  },
  {
    path: "/admin/renewal/inReview",
    name: "AdminRenewalInReview",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/Renewal/InReview/inReview.vue"
      ),
  },
  {
    path: "/admin/renewal/draft",
    name: "RenewalDraft",
    component: () =>
      import("../components/Reviewer/HomeComponents/Renewal/Draft/draft.vue"),
  },
  {
    path: "/admin/renewal/approved",
    name: "RenewalApproved",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/Renewal/Approved/approved.vue"
      ),
  },
  {
    path: "/admin/renewal/declined",
    name: "RenewalDeclined",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/Renewal/Declined/declined.vue"
      ),
  },
  {
    path: "/admin/renewal/underSupervision",
    name: "RenewalUnderSupervision",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/Renewal/UnderSupervision/underSupervision.vue"
      ),
  },
  {
    path: "/admin/renewal/licensed",
    name: "RenewalLicensed",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/Renewal/Licensed/licensed.vue"
      ),
  },
  {
    path: "/admin/renewal/revoked",
    name: "AdminRenewalRevoked",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/Renewal/Revoked/revoked.vue"
      ),
  },

  {
    path: "/admin/renewal/suspended",
    name: "AdminRenewalSuspended",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/Renewal/Suspended/suspended.vue"
      ),
  },

  {
    path: "/admin/renewal/returned",
    name: "AdminRenewalReturned",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/Renewal/Returned/returned.vue"
      ),
  },
  {
    path: "/admin/renewal/evaluate/:id",
    name: "RenewalEvaluate",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/Renewal/InReview/inReviewEvaluation.vue"
      ),
  },

  //Admin Good Standing Section
  {
    path: "/admin/goodStanding",
    name: "GoodStandingHome",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/GoodStanding/Unassigned/unassigned.vue"
      ),
  },
  {
    path: "/admin/goodStanding/assigned",
    name: "GoodStandingAssigned",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/GoodStanding/Assigned/assigned.vue"
      ),
  },
  {
    path: "/admin/goodStanding/draft",
    name: "GoodStandingDraft",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/GoodStanding/Draft/draft.vue"
      ),
  },
  {
    path: "/admin/goodStanding/approved",
    name: "GoodStandingApproved",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/GoodStanding/Approved/approved.vue"
      ),
  },
  {
    path: "/admin/goodStanding/declined",
    name: "GoodStandingDeclined",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/GoodStanding/Declined/declined.vue"
      ),
  },
  {
    path: "/admin/goodStanding/printed",
    name: "GoodStandingPrinted",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/GoodStanding/Printed/printed.vue"
      ),
  },
  {
    path: "/admin/goodStanding/evaluate/:id",
    name: "GoodStandingEvaluate",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/GoodStanding/Assigned/assignedEvaluation.vue"
      ),
  },

  //Admin Verification part
  {
    path: "/admin/verification",
    name: "AdminVerification",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/Verification/verification.vue"
      ),
  },

  //Admin CPD part
  {
    path: "/admin/cpdCertified",
    name: "AdminCpdCertified",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/CpdCertified/cpdCertified.vue"
      ),
  },
  {
    path: "/admin/cpdCertified",
    name: "AdminCpdCertified",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/CpdCertified/cpdCertified.vue"
      ),
  },

  //Admin Dashboard
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    component: () =>
      import("../components/Reviewer/HomeComponents/Dashboard/dashboard.vue"),
  },

  //Admin User Management
  {
    path: "/admin/userManagement",
    name: "UserManagement",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/UserManagement/userManagement.vue"
      ),
  },
  {
    path: "/admin/list",
    name: "AdminUserManagement",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/UserManagement/userManagement.vue"
      ),
  },

  //Admin Import Results
  {
    path: "/admin/importResults",
    name: "ImportResults",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/ImportResults/importResults.vue"
      ),
  },

  //Admin Report
  {
    path: "/admin/report",
    name: "AdminReport",
    component: () =>
      import("../components/Reviewer/HomeComponents/Report/Report.vue"),
  },
  {
    path: "/admin/report/individualReport",
    name: "IndividualAdminReport",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/Report/IndividualReport.vue"
      ),
  },

  //Admin Legacy Data
  {
    path: "/admin/legacyData",
    name: "LegacyData",
    component: () =>
      import("../components/Reviewer/HomeComponents/LegacyData/legacy.vue"),
  },
  {
    path: "/admin/AALegacyData",
    name: "AALegacyData",
    component: () =>
      import("../components/Reviewer/HomeComponents/LegacyData/AALegacy.vue"),
  },

  //Admin Lookup Management
  {
    path: "/admin/lookupManagement",
    name: "LookupManagement",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/LookupManagement/location/location.vue"
      ),
  },
  {
    path: "/admin/lookupManagement/departments",
    name: "DepartmentsLookupManagement",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/LookupManagement/department/departments.vue"
      ),
  },
  {
    path: "/admin/lookupManagement/applicantTitle",
    name: "ApplicantTitleLookupManagement",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/LookupManagement/applicantTitle/applicantTitle.vue"
      ),
  },
  {
    path: "/admin/lookupManagement/applicantPosition",
    name: "ApplicantPositionLookupManagement",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/LookupManagement/applicantPosition/applicantPosition.vue"
      ),
  },
  {
    path: "/admin/lookupManagement/educationLevel",
    name: "EducationLevelLookupManagement",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/LookupManagement/educationLevel/educationLevel.vue"
      ),
  },
  {
    path: "/admin/lookupManagement/professionalPrefix",
    name: "ProfessionalPrefixLookupManagement",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/LookupManagement/professionalPrefix/professionalPrefix.vue"
      ),
  },
  {
    path: "/admin/lookupManagement/professionalType",
    name: "ProfessionalTypeLookupManagement",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/LookupManagement/professionalType/professionalType.vue"
      ),
  },
  {
    path: "/admin/lookupManagement/documentSpec",
    name: "DocumentSpecLookupManagement",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/LookupManagement/documentSpec/documentSpec.vue"
      ),
  },
  {
    path: "/admin/lookupManagement/documentType",
    name: "DocumentTypeLookupManagement",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/LookupManagement/documentType/documentType.vue"
      ),
  },
  {
    path: "/admin/lookupManagement/licenseExpirationDate",
    name: "LicenseExpirationDateLookupManagement",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/LookupManagement/licenseExpirationDate/licenseExpirationDate.vue"
      ),
  },
  {
    path: "/admin/lookupManagement/regional/licenseExpirationDate",
    name: "RegionalLicenseExpirationDateLookupManagement",
    component: () =>
      import(
        "../components/Reviewer/HomeComponents/LookupManagement/Regional/licenseExpirationDate/licenseExpirationDate.vue"
      ),
  },

  //Admin Profile Management
  {
    path: "/admin/profile",
    name: "AdminProfileManagement",
    component: () =>
      import("../components/Reviewer/HomeComponents/Profile/profile.vue"),
  },
  //Status Log
  {
    path: "/admin/statusLog",
    name: "StatusLog",
    component: () =>
      import("../components/Reviewer/HomeComponents/StatusLog/statusLog.vue"),
  },

  /******************************************************************************************************************************************/
  /**************End of routes*****************/
  /******************************************************************************************************************************************/
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(async (to, from, next) => {
  const auth = localStorage.getItem("token");
  if (
    to.path != "/admin/list" &&
    to.path != "/admin/create" &&
    localStorage.getItem("role") === "UM"
  ) {
    next("/admin/list");
  }
  if (to.path != "/Applicant/NewLicense") {
    window.localStorage.removeItem("NLApplicationData");
    window.indexedDB.deleteDatabase("NLdocumentUploads");
  }
  if (to.path != "/Applicant/Renewal") {
    window.localStorage.removeItem("RNApplicationData");
    window.indexedDB.deleteDatabase("RNdocumentUploads");
  }
  if (to.path != "/Applicant/GoodStanding") {
    window.localStorage.removeItem("GSApplicationData");
    window.indexedDB.deleteDatabase("GSdocumentUploads");
  }

  if (to.matched.some((record) => record.meta.RedirectExternalUrl)) {
    const url = to.meta.RedirectExternalUrl;
    window.open(url, "_blank");
    return;
  }
  if (to.path.includes("/resetpassword")) {
    next();
  } else if (
    !auth &&
    to.path != "/landing" &&
    to.path != "/" &&
    to.path != "/verifyOTP" &&
    to.path != "/admin" &&
    to.name != "scannedCertifiedUser"
  )
    next("/landing");
  else next();
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    // eslint-disable-next-line no-undef
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  // eslint-disable-next-line no-undef
  NProgress.done();
});

export default router;
