import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import PrincipalView from "../views/PrincipalView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/about",
      name: "about",

      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/",
      name: "home",
      component: PrincipalView,
    },
  ],
});

export default router;
