import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/addProfile",
    name: "NewProfile",
    component: () => import("../components/profile/NewProfile.vue")
  },
  {
    path: "/about",
    name: "About",
    component: About,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// router.beforeEach((to, from, next) => {
//   const auth = localStorage.getItem("token");
//   if (!auth && to.path !== "/login" && to.path !== "/signup" && to.path !== "/")
//     next("/login");
//   else next();
// });

export default router;
