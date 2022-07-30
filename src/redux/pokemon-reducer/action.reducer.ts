import { createReducer } from "@reduxjs/toolkit";
import { iOnePokemon } from "../../interfaces/interfaces";
import * as ac from "./action.creator";

const initialState: iOnePokemon[] = [];

export const pokemonReducer = createReducer(initialState, (builder) => {
  return builder

    .addCase(ac.loadPokemonAction, (state, action) => [...action.payload])
    .addDefaultCase((state) => state);
});
