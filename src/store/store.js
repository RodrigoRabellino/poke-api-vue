import { defineStore } from "pinia";
import { getPokemons, getPokemon } from "@/services/pokeApi";

export const usePokeStore = defineStore({
  id: "pokeStore",
  state: () => {
    return {
      pokemonList: [],
      pokemonFilter: [],
      pokemonCurrent: {},
      isLoading: false,
    };
  },
  actions: {
    async fetchPokemonList() {
      const resp = await getPokemons();
      this.pokemonList = [...resp];
      this.pokemonFilter = [...resp];
    },
    async fetchPokemon(pokeId) {
      this.isLoading = true;
      const resp = await getPokemon(pokeId);
      this.pokemonCurrent = { ...resp };
      this.isLoading = false;
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
