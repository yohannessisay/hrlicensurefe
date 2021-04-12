import { createRouter, createWebHistory } from "vue-router";
import Landing from "../components/Landing/Landing.vue";
const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  // {
  //   path: "/landing",
  //   name: "Landing",
  //   component: () => import("../components/Landing/Landing.vue"),
  // },
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
    component: () => import("../views/GoodStandingSubmitted.vue"),
  },

  {
    path: "/draft",
    name: "draft",
    component: () => import("../views/Draft.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
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
