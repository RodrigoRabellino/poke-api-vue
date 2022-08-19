<script setup>
import { ref } from "vue";
import PokemonView from "./PokemonView.vue";
import pokeball from "@/assets/pokeball.svg";
import pokeballOpen from "@/assets/pokeball-open.svg";
import { usePokeStore } from "../store/store";

const store = usePokeStore();
let inputName = ref("");

const handleClick = async (pokeId) => {
  await store.fetchPokemon(pokeId);
};

const handleChange = (e) => {
  let text = e.target.value.toLowerCase();
  store.filterPokemonList(text);
};

// onMounted(() => {
//   store.fetchPokemonList();
// });
</script>
<template>
  <div class="container">
    <div class="pokemon-list">
      <div class="input-container">
        <input
          v-model="inputName"
          placeholder="Search"
          class="search-input"
          v-on:input="handleChange"
        />
      </div>

      <div
        class="item-list"
        v-for="pokemon in store.pokemonFilter"
        :key="pokemon.entry_number"
        @click.prevent="handleClick(pokemon.entry_number)"
      >
        <img
          :src="
            pokemon.entry_number === store.pokemonCurrent.id
              ? pokeballOpen
              : pokeball
          "
          alt=""
        />
        <p>{{ pokemon.entry_number }}-</p>
        <p>{{ pokemon.pokemon_species.name }}</p>
      </div>
    </div>
    <PokemonView />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: calc(100vh - 64px);
}
.pokemon-list {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 0;
  width: 300px;
  overflow-y: scroll;
  height: calc(100vh - 64px);
  gap: 10px;
}
.input-container {
  position: sticky;
  padding-top: 1rem;
  top: 0;
}
.search-input {
  width: 100%;
  margin-bottom: 1rem;
  transition: 0.4s;
  background-color: rgb(83, 13, 148);
  border: none;
  color: white;
  border-radius: 5rem;
  padding: 0.65rem;
}

.item-list {
  align-items: center;
  display: flex;
  cursor: pointer;
  transition: 0.4s;
  background-color: #efefef;
  padding: 1rem;
}
.item-list img {
  width: 24px;
  margin-right: 10px;
}

.item-list:hover {
  transition: 0.4s;
  background-color: white;
  border-radius: 15px;
}
.item-list p::first-letter {
  text-transform: uppercase;
}
</style>
