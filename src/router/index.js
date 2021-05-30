import { createRouter, createWebHistory } from "vue-router";
import Landing from "../components/Landing/Landing.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Landing,
  },
  {
    path: "/landing",
    name: "Landing",
    component: () => import("../components/Landing/Landing.vue"),
  },
  {
    path: "/addProfile",
    name: "NewProfile",
    component: () => import("../components/profile/NewProfile.vue"),
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
    path: "/approved",
    name: "Approved",
    component: () => import("../views/Approved.vue"),
  },
  {
    path: "/inReview",
    name: "InReview",
    component: () => import("../views/InReview.vue"),
  },
  {
    path: "/undersupervision",
    name: "UnderSupervision",
    component: () => import("../views/UnderSupervision.vue"),
  },
  {
    path: "/declined",
    name: "Declined",
    component: () => import("../views/Declined.vue"),
  },
  {
    path: "/withdrawn",
    name: "Withdraw",
    component: () => import("../views/Withdraw.vue"),
  },
  {
    path: "/pendingPayment",
    name: "PendingPayment",
    component: () => import("../views/PendingPayment.vue"),
  },
  {
    path: "/approvedPayment",
    name: "ApprovedPayment",
    component: () => import("../views/ApprovedPayment.vue"),
  },
  {
    path: "/declinedPayment",
    name: "DeclinedPayment",
    component: () => import("../views/DeclinedPayment.vue"),
  },
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
    name: "certifiedUsers",
    component: () => import("../components/Reviewer/AllCertifiedUsers.vue"),
  },
  {
    path: "/admin/certifiedUsers",
    name: "allCertifiedusers",
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
    path: "/draft",
    name: "Draft",
    component: () => import("../views/Draft.vue"),
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
    path: "/admin/finishedDetail/:applicationType/:applicationId",
    name: "recentlyFinishedDetail",
    component: () =>
      import("../components/Reviewer/Detail/RecentlyFinishedDetail.vue"),
  },
  {
    path:
      "/admin/unassignedDetail/:applicationType/:applicationId/:applicantId",
    name: "unassignedDetail",
    component: () =>
      import("../components/Reviewer/Detail/UnassignedDetail.vue"),
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
