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
    path: "/license",
    name: "License",
    component: () => import("../views/License.vue"),
  },
  {
    path: "/newlicense",
    name: "NewLicense",
    component: () => import("../components/NewLicense/NewLicense.vue"),
  },
  {
    path: "/lis",
    name: "LIs",
    component: () => import("../components/NewLicense/LicenseSummary.vue"),
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
    path: "/renewalSubmitted",
    name: "renewalSubmitted",
    component: () => import("../views/RenewalSubmitted.vue"),
  },
  {
    path: "/verificationSubmitted",
    name: "verificationSubmitted",
    component: () => import("../views/VerificationSubmitted.vue"),
  },
  {
    path: "/goodStandingSubmitted",
    name: "goodStandingSubmitted",
    component: () => import("../views/GoodStandingSubmitted.vue")
  },
  {
    path: "/review",
    name: "ReviewerHome",
    component: () => import("../components/Reviewer/Home.vue")
  },
  {
    path: "/myWork",
    name: "myWork",
    component: () => import("../components/Reviewer/MyWork.vue")
  },
  {
    path: "/unfinished",
    name: "unfinished",
    component: () => import("../components/Reviewer/Unfinished.vue")
  },
  {
    path: "/assignedToYou",
    name: "assignedToYou",
    component: () => import("../components/Reviewer/AssignedToYou.vue")
  },
  {
    path: "/unassigned",
    name: "unassigned",
    component: () => import("../components/Reviewer/Unassigned.vue")
  },
  {
    path: "/prodoc",
    name: "professionalDocument",
    component: () =>
      import("../components/NewLicense/Foreigner/ProfessionalDocument.vue")
  },
  {
    path: "/educational",
    name: "educational",
    component: () =>
      import("../components/NewLicense/Ethiopians L/EducationalDoc.vue")
  },
  {
    path: "/lang",
    name: "lang",
    component: () => import("../components/NewLicense/Photo.vue")
  },

  {
    path: "/evaluate/:applicationId",
    name: "evaluate",
    component: () => import("../components/Reviewer/Evaluate.vue")
  },
  {
    path: "/draft",
    name: "draft",
    component: () => import("../views/Draft.vue"),
  },
  {
    path: "/detail/:applicationId/:applicantId",
    name: "detail",
    component: () => import("../components/Reviewer/Detail/LicenseDetail.vue")
  },
  {
    path: "/unfinishedDetail/:applicationId/:applicantId",
    name: "unfinishedDetail",
    component: () =>
      import("../components/Reviewer/Detail/UnfinishedDetail.vue")
  },
  {
    path: "/recentlyFinishedDetail",
    name: "recentlyFinishedDetail",
    component: () =>
      import("../components/Reviewer/Detail/RecentlyFinishedDetail.vue")
  },
  {
    path: "/unassignedDetail/:applicationId/:applicantId",
    name: "unassignedDetail",
    component: () =>
      import("../components/Reviewer/Detail/UnassignedDetail.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../components/Landing/AdminLanding.vue")
  },
  {
    path: "/admin/create",
    name: "CreateAdmin",
    component: () => import("../components/Reviewer/CreateAdmin.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const auth = localStorage.getItem("token");
  if (!auth && to.path !== "/landing" && to.path !== "/" && to.path !== "/admin") next("/landing");
  else next();
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router;
