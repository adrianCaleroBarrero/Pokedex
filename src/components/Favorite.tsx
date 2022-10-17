import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iOnePokemon, iStore } from '../interfaces/interfaces';
import { LocalStorage } from '../services/localStorage';
import CardFavorite from './CardFavorite';
import * as ac from '../redux/team-reducer/action.creator';

export default function Favorite() {
  const dispatch = useDispatch();
  const myTeam = useSelector((state: iStore) => state.team);
  const localStorage = new LocalStorage();
  const myFavoritesPokemons = localStorage.getItem();

  useEffect(() => {
    dispatch(ac.loadTeamAction(myFavoritesPokemons));
  }, []);

  return (
    <div className="my-team">
      {myTeam.map((pokemon: iOnePokemon) => (
        <CardFavorite key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}
