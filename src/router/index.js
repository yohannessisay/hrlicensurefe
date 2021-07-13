import { createRouter, createWebHistory } from "vue-router";
import Landing from "../components/Landing/Landing.vue";
const routes = [
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/404Page.vue"),

    meta: {
      requiresAuth: false,
    },
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
    path: "/addProfile",
    name: "NewProfile",
    component: () => import("../components/Profile/NewProfile.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("../views/Menu.vue"),
  },
  {
    path: "/licenseRequests",
    name: "LicenseRequests",
    component: () => import("../views/LicenseRequests.vue"),
  },
  // {
  //   path: "/approved",
  //   name: "Approved",
  //   component: () => import("../views/Approved.vue"),
  // },
  // {
  //   path: "/inReview",
  //   name: "InReview",
  //   component: () => import("../views/InReview.vue"),
  // },
  // {
  //   path: "/undersupervision",
  //   name: "UnderSupervision",
  //   component: () => import("../views/UnderSupervision.vue"),
  // },
  // {
  //   path: "/declined",
  //   name: "Declined",
  //   component: () => import("../views/Declined.vue"),
  // },
  // {
  //   path: "/withdrawn",
  //   name: "Withdraw",
  //   component: () => import("../views/Withdraw.vue"),
  // },
  // {
  //   path: "/pendingPayment",
  //   name: "PendingPayment",
  //   component: () => import("../views/PendingPayment.vue"),
  // },
  // {
  //   path: "/approvedPayment",
  //   name: "ApprovedPayment",
  //   component: () => import("../views/ApprovedPayment.vue"),
  // },
  // {
  //   path: "/declinedPayment",
  //   name: "DeclinedPayment",
  //   component: () => import("../views/DeclinedPayment.vue"),
  // },
  // {
  //   path: "/draft",
  //   name: "Draft",
  //   component: () => import("../views/Draft.vue"),
  // },
  {
    path: "/newlicense",
    name: "NewLicense",
    component: () => import("../components/NewLicense/NewLicense.vue"),
  },

  {
    path: "/renewal",
    name: "Renewal",
    component: () => import("../components/Renewal/Renewal.vue"),
  },
  {
    path: "/verification",
    name: "Verification",
    component: () => import("../components/Verification/Verification.vue"),
  },
  {
    path: "/goodstanding",
    name: "GoodStanding",
    component: () => import("../components/GoodStanding/GoodStanding.vue"),
  },
  {
    path: "/submitted",
    name: "Submitted",
    component: () => import("../views/Submitted.vue"),
  },
  {
    path: "/admin/review",
    name: "ReviewerHome",
    component: () => import("../components/Reviewer/Home.vue"),
  },
  {
    path: "/admin/changePassword",
    name: "changeadminPassword",
    component: () =>
      import(
        "../components/Reviewer/Configurations/ChangePassword/ChangePassword.vue"
      ),
  },
   {
    path: "/admin/report",
    name: "report",
    component: () =>
      import(
        "../components/Report/report.vue"
      ),
  },
  {
    path: "/myWork",
    name: "myWork",
    component: () => import("../components/Reviewer/MyWork.vue"),
  },
  {
    path: "/allWork",
    name: "allWork",
    component: () => import("../components/Reviewer/AllWork.vue"),
  },
  {
    path: "/admin/unfinished",
    name: "unfinished",
    component: () => import("../components/Reviewer/Unfinished.vue"),
  },
  {
    path: "/admin/unfinishedAll",
    name: "allUnfinished",
    component: () => import("../components/Reviewer/AllUnfinished.vue"),
  },
  {
    path: "/admin/unconfirmed",
    name: "unconfirmed",
    component: () => import("../components/Reviewer/Unconfirmed.vue"),
  },
  {
    path: "/admin/onreview",
    name: "onreview",
    component: () => import("../components/Reviewer/OnReview.vue")
  },
  {
    path: "/admin/evaluateReview",
    name: "evaluateReview",
    component: () => import("../components/Reviewer/EvaluateReview.vue")
  },
  {
    path: "/admin/assignedToYou",
    name: "assignedToYou",
    component: () => import("../components/Reviewer/AssignedToYou.vue"),
  },
  {
    path: "/admin/assignedToAll",
    name: "assignedToAll",
    component: () => import("../components/Reviewer/AllAssigned.vue"),
  },
  {
    path: "/admin/unassigned",
    name: "unassigned",
    component: () => import("../components/Reviewer/Unassigned.vue"),
  },
  {
    path: "/admin/allCertifiedUsers",
    name: "allCertifiedUsers",
    component: () => import("../components/Reviewer/AllCertifiedUsers.vue"),
  },
  {
    path: "/admin/allRegionCertifiedUsers",
    name: "allRegionCertifiedUsers",
    component: () => import("../components/Reviewer/AllRegionCertifiedUsers.vue"),
  },
  {
    path: "/admin/certifiedUsers",
    name: "certifiedusers",
    component: () => import("../components/Reviewer/CertifiedUsers.vue"),
  },
  {
    path:
      "/admin/certifiedUsersDetail/:applicationType/:applicationId/:applicantId",
    name: "certifiedUsersDetail",
    component: () =>
      import("../components/Reviewer/Detail/CertifiedUsersDetail.vue"),
  },
  {
    path: "/admin/pendingPayments",
    name: "pendingPayments",
    component: () => import("../components/Reviewer/PendingPayments.vue"),
  },
  {
    path: "/admin/allPendingPayments",
    name: "allPendingPayments",
    component: () => import("../components/Reviewer/AllPendingPayments.vue"),
  },
  {
    path: "/admin/pendingDetail/:applicationType/:applicationId/:applicantId",
    name: "pendingDetail",
    component: () => import("../components/Reviewer/Detail/PendingDetail.vue"),
  },
  {
    path: "/admin/evaluate/:applicationType/:applicationId",
    name: "evaluate",
    component: () => import("../components/Reviewer/Evaluate.vue"),
  },
  {
    path: "/admin/evaluatePayment/:applicationType/:applicationId",
    name: "evaluatePayment",
    component: () => import("../components/Reviewer/EvaluatePayment.vue"),
  },
  {
    path: "/admin/detail/:applicationType/:applicationId/:applicantId",
    name: "detail",
    component: () => import("../components/Reviewer/Detail/LicenseDetail.vue"),
  },
  {
    path:
      "/admin/unfinishedDetail/:applicationType/:applicationId/:applicantId",
    name: "unfinishedDetail",
    component: () =>
      import("../components/Reviewer/Detail/UnfinishedDetail.vue"),
  },
  {
    path: "/admin/finishedDetail/:applicationType/:applicationId/:status",
    name: "recentlyFinishedDetail",
    component: () =>
      import("../components/Reviewer/Detail/RecentlyFinishedDetail.vue"),
  },
  {
    path: "/admin/confirmReview/:applicationType/:applicantId",
    name: "confirmReview",
    component: () => import("../components/Reviewer/ConfirmAdminReview.vue"),
  },
  {
    path: "/admin/confirmReviewDetail/:applicationType/:applicationId/:status",
    name: "confirmReviewDetail",
    component: () =>
      import("../components/Reviewer/Detail/ConfirmReviewDetail.vue"),
  },
  {
    path: "/admin/evaluateApplicationDetail/:applicationType/:applicationId/:status",
    name: "evaluateApplicationDetail",
    component: () =>
      import("../components/Reviewer/Detail/EvaluateApplicationDetail.vue"),
  },

  {
    path:
      "/admin/unassignedDetail/:applicationType/:applicationId/:applicantId",
    name: "unassignedDetail",
    component: () =>
      import("../components/Reviewer/Detail/UnassignedDetail.vue"),
  },
  {
    path:
      "/admin/returnedToMeDetail/:applicationType/:applicationId/:applicantId",
    name: "returnedToMeDetail",
    component: () =>
      import("../components/Reviewer/Detail/ReturnedToMeDetail.vue"),
  },
  {
    path: "/admin/reviewReturnedApplication/:applicationType/:applicationId",
    name: "reviewReturnedApplication",
    component: () =>
      import("../components/Reviewer/ReviewReturnedApplication.vue"),
  },
  {
    path: "/admin/confirmAssignedApplication/:applicationType/:applicationId",
    name: "confirmAssignedApplication",
    component: () =>
      import("../components/Reviewer/ConfirmAssignedApplication.vue"),
  },
  {
    path:
      "/admin/unconfirmedDetail/:applicationType/:applicationId/:applicantId",
    name: "unconfirmedDetail",
    component: () =>
      import("../components/Reviewer/Detail/UnconfirmedDetail.vue"),
  },
  {
    path:
      "/admin/othersUnconfirmedDetail/:applicationType/:applicationId/:applicantId",
    name: "othersUnconfirmedDetail",
    component: () =>
      import("../components/Reviewer/Detail/OthersUnconfirmedDetail.vue"),
  },
  {
    path:
      "/admin/returnedToOthersDetail/:applicationType/:applicationId/:applicantId",
    name: "returnedToOthersDetail",
    component: () =>
      import("../components/Reviewer/Detail/ReturnedToOthersDetail.vue"),
  },
  {
    path: "/admin/applicantDetail/:applicationType/:applicationId/:applicantId",
    name: "applicantDetail",
    component: () =>
      import("../components/Reviewer/Detail/ApplicantDetail.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../components/Landing/AdminLanding.vue"),
  },
  {
    path: "/admin/create",
    name: "CreateAdmin",
    component: () => import("../components/Reviewer/CreateAdmin.vue"),
  },
  {
    path: "/admin/newLicense/unassigned",
    name: "NewLicenseUnassigned",
    component: () => import("../components/Reviewer/ApplicationTypes/NewLicense/newLicenseUnassigned.vue"),
  },
  {
    path: "/admin/newlicense/unfinished",
    name: "NewLicenseUnfinished",
    component: () => import("../components/Reviewer/ApplicationTypes/NewLicense/NewLicenseUnfinished.vue"),
  },
  {
    path: "/admin/newlicense/othersUnfinished",
    name: "NewLicenseOthersUnfinished",
    component: () => import("../components/Reviewer/ApplicationTypes/NewLicense/NewLicenseOthersUnfinished.vue"),
  },
  {
    path: "/admin/verification/unassigned",
    name: "VerificationUnassigned",
    component: () => import("../components/Reviewer/ApplicationTypes/Verification/VerificationUnassigned.vue"),
  },
  {
    path: "/admin/verification/unfinished",
    name: "VerificationUnfinished",
    component: () => import("../components/Reviewer/ApplicationTypes/Verification/VerificationUnfinished.vue"),
  },
  {
    path: "/admin/verification/othersUnfinished",
    name: "VerificationOthersUnfinished",
    component: () => import("../components/Reviewer/ApplicationTypes/Verification/VerificationOthersUnfinished.vue"),
  },
  {
    path: "/admin/renewal/unassigned",
    name: "RenewalUnassigned",
    component: () => import("../components/Reviewer/ApplicationTypes/Renewal/RenewalUnassigned.vue"),
  },
  {
    path: "/admin/renewal/unfinished",
    name: "RenewalUnfinished",
    component: () => import("../components/Reviewer/ApplicationTypes/Renewal/RenewalUnfinished.vue"),
  },
  {
    path: "/admin/renewal/othersUnfinished",
    name: "RenewalOthersUnfinished",
    component: () => import("../components/Reviewer/ApplicationTypes/Renewal/RenewalOthersUnfinished.vue"),
  },
  {
    path: "/admin/goodstanding/unassigned",
    name: "GoodStandingUnassigned",
    component: () => import("../components/Reviewer/ApplicationTypes/GoodStanding/GoodStandingUnassigned.vue"),
  },
  {
    path: "/admin/goodstanding/unfinished",
    name: "GoodStandingUnfinished",
    component: () => import("../components/Reviewer/ApplicationTypes/GoodStanding/GoodStandingUnfinished.vue"),
  },
  {
    path: "/admin/goodstanding/othersUnfinished",
    name: "GoodStandingOthersUnfinished",
    component: () => import("../components/Reviewer/ApplicationTypes/GoodStanding/GoodStandingOthersUnfinished.vue"),
  },
  
  

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const auth = localStorage.getItem("token");
  if (
    !auth &&
    to.path !== "/landing" &&
    to.path !== "/" &&
    to.path !== "/admin"
  )
    next("/landing");
  else next();
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;
