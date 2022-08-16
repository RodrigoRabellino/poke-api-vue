<script setup>
import { ref } from "vue";
import { usePokeStore } from "../store/store";
import Loader from "./Loader.vue";
const store = usePokeStore();

const isShiny = ref(true);
</script>
<template>
  <div class="container" v-if="store.pokemonCurrent.name">
    <Loader v-if="store.isLoading" />
    <div v-else class="pokemon__container">
      <h1>{{ store.pokemonCurrent.name }}</h1>
      <p>Pokedex: {{ store.pokemonCurrent.id }}</p>
      <div class="info">
        <p>Height: {{ store.pokemonCurrent.height / 10 }} mts.</p>
        <p>Weight: {{ store.pokemonCurrent.weight / 10 }} pds.</p>
      </div>
      <div class="sprite__container">
        <img
          loading="lazy"
          :src="
            isShiny
              ? store.pokemonCurrent.sprites.back_shiny
              : store.pokemonCurrent.sprites.back_default
          "
          :alt="store.pokemonCurrent.name"
        />
        <img
          loading="lazy"
          :src="
            isShiny
              ? store.pokemonCurrent.sprites.front_shiny
              : store.pokemonCurrent.sprites.front_default
          "
          :alt="store.pokemonCurrent.name"
        />
      </div>
      <div class="stat__container">
        <div
          class="stat"
          v-for="stat in store.pokemonCurrent.stats"
          :key="stat.id"
        >
          <p id="statName">{{ stat.stat.name }}:</p>
          <p>{{ stat.base_stat }}</p>
        </div>
      </div>
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

.info {
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  font-weight: 500;
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
.stat p::first-letter {
  text-transform: uppercase;
}
.stat {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
}
.stat__container {
  display: grid;
  grid-template-columns: repeat(2, 15fr);
  column-gap: 15px;
}
</style>
