import { defineStore } from "pinia";
import axios from "axios";
const api_url = "https://pokeapi.co/api/v2";

export const usePokeStore = defineStore({
  id: "pokeStore",
  state: () => {
    return {
      pokemonList: [],
      pokemonFilter: [],
      pokemonCurrent: {},
    };
  },
  actions: {
    async fetchPokemonList() {
      const { data } = await axios.get(`${api_url}/pokedex/kanto`);
      this.pokemonList = [...data.pokemon_entries];
      this.pokemonFilter = [...data.pokemon_entries];
    },
    async fetchPokemon(pokeId) {
      const { data } = await axios.get(`${api_url}/pokemon/${pokeId}`);
      this.pokemonCurrent = { ...data };
      console.log("current", this.pokemonCurrent);
    },
    filterPokemonList(text) {
      if (text === "") {
        this.pokemonFilter = [...this.pokemonList];
      } else {
        this.pokemonFilter = [
          ...this.pokemonList.filter((pokemon) =>
            pokemon.pokemon_species.name.includes(text)
          ),
        ];
      }
    },
  },
});
