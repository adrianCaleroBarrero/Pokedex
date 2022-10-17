import { configureStore } from '@reduxjs/toolkit';
import { iOnePokemon, iStore } from '../interfaces/interfaces';
import { urlReducer } from '../redux/page-reducer/action.reducer';
import { pokemonReducer } from '../redux/pokemon-reducer/action.reducer';
import { teamReducer } from '../redux/team-reducer/action.reducer';

export const preloadedState: iStore = {
  pokemon: [] as iOnePokemon[],
  url: '' as string,
  team: [] as iOnePokemon[],
};

export const store = configureStore({
  reducer: { pokemon: pokemonReducer, url: urlReducer, team: teamReducer },
  preloadedState,
});
