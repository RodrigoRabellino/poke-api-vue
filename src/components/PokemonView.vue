<script setup>
import { usePokeStore } from "../store/store";
import Loader from "./Loader.vue";
const store = usePokeStore();
</script>
<template>
  <div class="container" v-if="store.pokemonCurrent.name">
    <Loader v-if="store.isLoading" />
    <div v-else class="pokemon__container">
      <h1>{{ store.pokemonCurrent.name }}</h1>
      <div class="sprite__container">
        <img
          loading="lazy"
          :src="store.pokemonCurrent.sprites.back_default"
          :alt="store.pokemonCurrent.name"
        />
        <img
          loading="lazy"
          :src="store.pokemonCurrent.sprites.front_default"
          :alt="store.pokemonCurrent.name"
        />
      </div>
      <div class="stat__container"></div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.pokemon__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.pokemon__container img {
  width: 200px;
}

.pokemon__container h1::first-letter {
  text-transform: uppercase;
}
</style>
