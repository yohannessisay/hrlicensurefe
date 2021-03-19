import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
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
    path: "/license",
    name: "License",
    component: () => import("../views/License.vue"),
  },
  {
    path: "/newlicense",
    name: "NewLicense",
    component: () => import("../views/NewLicense.vue"),
  },
  {
    path: "/renewal",
    name: "Renewal",
    component: () => import("../views/Renewal.vue"),
  },
  {
    path: "/verification",
    name: "Verification",
    component: () => import("../views/Verification.vue"),
  },
  {
    path: "/goodstanding",
    name: "GoodStanding",
    component: () => import("../views/GoodStanding.vue"),
  },
  {
    path: "/institution",
    name: "Institution",
    component: () => import("../views/Institution.vue"),
  },
  {
    path: "/photo",
    name: "Photo",
    component: () => import("../views/Photo.vue"),
  },
  {
    path: "/id",
    name: "ID",
    component: () => import("../views/Passport.vue"),
  },
  {
    path: "/certificate",
    name: "Certificate",
    component: () => import("../views/HealthExamCert.vue"),
  },
  {
    path: "/licenseSummary",
    name: "LicenseSummary",
    component: () => import("../views/LicenseSummary.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const auth = localStorage.getItem("token");
  if (!auth && to.path !== "/login" && to.path !== "/signup" && to.path !== "/") next("/login");
  else next();
});

export default router;
