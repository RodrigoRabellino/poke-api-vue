<script setup>
import { usePokeStore } from "../store/store";
const store = usePokeStore();
const { pokemonCurrent } = store;
</script>
<template>
  <div class="pokemon__container" v-if="pokemonCurrent.name">
    <h1>{{ pokemonCurrent.name }}</h1>
    <div class="sprite__container">
      <img
        :src="pokemonCurrent.sprites.back_default"
        :alt="pokemonCurrent.name"
      />
      <img
        :src="pokemonCurrent.sprites.front_default"
        :alt="pokemonCurrent.name"
      />
    </div>
    <div class="stat__container"></div>
  </div>
</template>

<style scoped>
.pokemon__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.pokemon__container h1::first-letter {
  text-transform: uppercase;
}
</style>
