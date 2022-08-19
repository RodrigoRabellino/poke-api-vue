<script setup>
import { onMounted, ref } from "vue";
import { getPokemon } from "@/services/pokeApi";
import { usePokeStore } from "@/store/store";
import Loader from "./Loader.vue";

const store = usePokeStore();
let isHidden = ref(true);
let isLoading = ref(true);
let message = ref("");
let pokemonSelected = "";

onMounted(async () => {
  await getRandomPokemon();
  isLoading.value = false;
});

const getRandomPokemon = async () => {
  isHidden.value = true;
  isLoading.value = true;
  message.value = "";
  pokemonSelected = "";
  let randomNum = Math.floor(Math.random() * 151);
  await store.fetchPokemon(randomNum);
  isLoading.value = false;
};

const selectItemEventHandler = (e) => (pokemonSelected = e);

const handleSubmit = () => {
  isHidden.value = false;
  if (store.pokemonCurrent.name === pokemonSelected) {
    message.value = `Yes!! is: ${store.pokemonCurrent.name}`;
  } else {
    message.value = `Nop, is: ${store.pokemonCurrent.name}`;
  }
};
</script>
<template>
  <div class="container">
    <h1>Who's That Pokemon?</h1>
    <button @click="getRandomPokemon">refresh</button>
    <Loader v-if="isLoading" />
    <div v-else class="poke-container">
      <img
        :class="isHidden ? 'img-hidden' : ''"
        :src="store.pokemonCurrent.sprites.front_default"
        alt="pokemon hidden"
      />
    </div>
    <div class="message">
      <p>{{ message }}</p>
    </div>
    <form action="" @submit.prevent="handleSubmit">
      <vue3-simple-typeahead
        ref="inputRef"
        id="typeahead_id"
        placeholder="Start writing"
        :items="store.pokemonList.map((poke) => poke.pokemon_species.name)"
        :minInputLength="3"
        :itemProjection="(item) => item"
        @selectItem="selectItemEventHandler"
      >
      </vue3-simple-typeahead>
      <button>Send</button>
    </form>
  </div>
</template>

<style scoped>
@import "../assets/autocomplete.css";
.container {
  display: flex;
  padding-top: 1rem;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: calc(100vh - 64px);
  overflow: hidden;
}
.poke-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.message p {
  font-size: 20px;
}

img {
  transition: 0.4s;
  width: 300px;
}
.img-hidden {
  transition: 0.4s;
  filter: brightness(0%);
}

.search-input:focus-visible {
  transition: 0.4s;
  background-color: white;
  color: black;
  border: none;
  outline: none;
}

button {
  width: 75px;
  transition: 0.4s;
  padding: 0.65rem;
  border-radius: 5rem;
  border: none;
  background-color: rgb(83, 13, 148);
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
}
button:hover {
  transition: 0.4s;
  background-color: rgba(83, 13, 148, 0.3);
  color: rgb(83, 13, 148);
}
</style>
