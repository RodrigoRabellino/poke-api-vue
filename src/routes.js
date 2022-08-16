import Home from "./components/Home.vue";
import Pokedex from "./components/Pokedex.vue";
import GameScreen from "./components/GameScreen.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/pokedex",
    component: Pokedex,
  },
  {
    path: "/game",
    component: GameScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
