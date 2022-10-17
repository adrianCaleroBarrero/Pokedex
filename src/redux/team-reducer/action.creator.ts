import { createAction } from '@reduxjs/toolkit';
import { iOnePokemon } from '../../interfaces/interfaces';
import { actionTypes } from './action.types';

export const loadTeamAction = createAction<iOnePokemon[]>(
  actionTypes['team@load']
);
