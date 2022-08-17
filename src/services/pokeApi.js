import axios from "axios";
const api_url = "https://pokeapi.co/api/v2";

export const getPokemons = async () => {
  const resp = await axios.get(`${api_url}/pokedex/kanto`);
  return resp.data.pokemon_entries;
};

export const getPokemon = async (pokeId) => {
  const resp = await axios.get(`${api_url}/pokemon/${pokeId}`);
  return resp.data;
};
