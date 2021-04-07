import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/landing",
    name: "Landing",
    component: () => import("../components/Landing/Landing.vue")
  },
  {
    path: "/addProfile",
    name: "NewProfile",
    component: () => import("../components/profile/NewProfile.vue")
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("../views/Menu.vue")
  },
  {
    path: "/license",
    name: "License",
    component: () => import("../views/License.vue")
  },
  {
    path: "/newlicense",
    name: "NewLicense",
    component: () => import("../components/NewLicense/NewLicense.vue")
  },
  {
    path: "/lis",
    name: "LIs",
    component: () => import("../components/NewLicense/LicenseSummary.vue")
  },
  {
    path: "/renewal",
    name: "Renewal",
    component: () => import("../components/Renewal/Renewal.vue")
  },
  {
    path: "/verification",
    name: "Verification",
    component: () => import("../components/Verification/Verification.vue")
  },
  {
    path: "/goodstanding",
    name: "GoodStanding",
    component: () => import("../components/GoodStanding/GoodStanding.vue")
  },
  {
    path: "/submitted",
    name: "Submitted",
    component: () => import("../views/Submitted.vue")
  },
  {
    path: "/renewalSubmitted",
    name: "renewalSubmitted",
    component: () => import("../views/RenewalSubmitted.vue")
  },
  {
    path: "/verificationSubmitted",
    name: "verificationSubmitted",
    component: () => import("../views/VerificationSubmitted.vue")
  },
  {
    path: "/goodStandingSubmitted",
    name: "goodStandingSubmitted",
    component: () => import("../views/GoodStandingSubmitted.vue")
  },
  {
    path: "/review",
    name: "Home",
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
      import("../components/NewLicense/Foreigner/ProfessionalDocument.vue"),
  },
  {
    path: "/educational",
    name: "educational",
    component: () =>
      import("../components/NewLicense/Ethiopians L/EducationalDoc.vue"),
  },
  {
    path: "/lang",
    name: "lang",
    component: () => import("../components/NewLicense/Photo.vue"),
  },
  {
    path: "/evaluate",
    name: "evaluate",
    component: () => import("../components/Reviewer/Evaluate.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
// router.beforeEach((to, from, next) => {
//   const auth = localStorage.getItem("token");
//   if (
//     !auth &&
//     to.path !== "/login" &&
//     to.path !== "/signup" &&
//     to.path !== "/landing" &&
//     to.path !== "/"
//   )
//     next("/login");
//   else next();
// });

export default router;
