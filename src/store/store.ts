import { configureStore } from "@reduxjs/toolkit";
import { iOnePokemon, iStore } from "../interfaces/interfaces";
import { urlReducer } from "../redux/page-reducer/action.reducer";
import { pokemonReducer } from "../redux/pokemon-reducer/action.reducer";

export const preloadedState: iStore = {
  pokemon: [] as iOnePokemon[],
  url: "" as string,
};

export const store = configureStore({
  reducer: { pokemon: pokemonReducer, url: urlReducer },
  preloadedState,
});
