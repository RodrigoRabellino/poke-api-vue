<script setup>
import { getPokemon } from "@/services/pokeApi";
import { usePokeStore } from "@/store/store";
import { onMounted, ref } from "vue";
import Loader from "./Loader.vue";
const store = usePokeStore();

let isLoading = ref(false);
let isHidden = ref(true);

const getRandomPokemon = async () => {
  let randomNum = Math.floor(Math.random() * store.pokemonList.length);
  await store.fetchPokemon(randomNum);
};

onMounted(async () => {
  await getRandomPokemon();
});
</script>
<template>
  <div class="container">
    <h1>Who's That Pokemon</h1>
    <Loader v-if="store.isLoading" />
    <div v-else class="poke-container">
      <img
        :class="isHidden ? 'img-hidden' : ''"
        :src="store.pokemonCurrent.sprites.front_default"
        alt="pokemon hidden"
      />
      <input
        v-model="inputName"
        placeholder="Type Name"
        class="search-input"
        v-on:input="handleChange"
      />
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
.poke-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  transition: 0.4s;
  width: 300px;
}
.img-hidden {
  transition: 0.4s;
  filter: brightness(0%);
}

.search-input {
  width: 100%;
  margin-bottom: 1rem;
  transition: 0.4s;
  background-color: rgb(83, 13, 148);
  border: none;
  color: white;
  font-size: 20px;
  border-radius: 5rem;
  padding: 0.65rem;
  text-align: center;
}
.search-input:focus-visible {
  transition: 0.4s;
  background-color: white;
  color: black;
  border: none;
  outline: none;
}
</style>
