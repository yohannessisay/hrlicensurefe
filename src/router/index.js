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
    path: "/renewal",
    name: "Renewal",
    component: () => import("../views/Renewal.vue"),
  },
   {
    path: "/renewal",
    name: "Renewal",
    component: () => import("../views/Renewal.vue"),
  },
  {
    path: "/institution",
    name: "Renewal",
    component: () => import("../views/Institution.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
// router.beforeEach((to, from, next) => {
// const auth = store.state.auth;
// if (!auth && to.path !== "/login") next("/login");
// else next();
// });

export default router;
