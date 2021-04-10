import Vue from "vue";
import VueRouter from "vue-router";
import GameInfo from "../components/GameInfo.vue";
import HomePage from "../views/HomePage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,

  },
    {
      path: "/gameInfo/:gameID",
      name: "GameInfo",
      component: GameInfo,

    },
]
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
