import Vue from "vue";
import VueRouter from "vue-router";
// import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    name: "Table",
    path: "/",
    component: () =>
        import(/* webpackChunkName: "table"*/ "../views/Table.vue"),
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem('access_token')) {
        next({path:'/auth'})
      } else next();
    }

  },
  {
    path: "/auth",
    name: "Auth",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Auth.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
