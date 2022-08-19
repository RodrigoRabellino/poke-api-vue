import Home from "./components/Home.vue";
import Pokedex from "./components/Pokedex.vue";
import Game from "./components/Game.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pokedex",
    name: "Pokedex",
    component: Pokedex,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
