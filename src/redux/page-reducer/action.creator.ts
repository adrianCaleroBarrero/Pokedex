import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "./action.types";

export const loadUrlAction = createAction<string>(actionTypes["url@load"]);
