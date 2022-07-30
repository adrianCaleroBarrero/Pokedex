import { createReducer } from "@reduxjs/toolkit";
import * as ac from "./action.creator";

const initialState: string = "";

export const urlReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(ac.loadUrlAction, (state, action) => action.payload)
    .addDefaultCase((state) => state);
});
