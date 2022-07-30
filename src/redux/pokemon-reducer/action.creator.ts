import { createAction } from "@reduxjs/toolkit";
import { iOnePokemon } from "../../interfaces/interfaces";
import { actionTypes } from "./action.types";

export const loadPokemonAction = createAction<iOnePokemon[]>(
  actionTypes["pokemon@load"]
);
