import React from 'react';
import { useDispatch } from 'react-redux';
import { iOnePokemon } from '../interfaces/interfaces';
import { LocalStorage } from '../services/localStorage';
import * as ac from '../redux/team-reducer/action.creator';

export default function CardFavorite({ pokemon }: { pokemon: iOnePokemon }) {
  const dispatch = useDispatch();
  const localStorage = new LocalStorage();
  const myFavoritesPokemons = localStorage.getItem();

  function handleDelete() {
    const newTeam = myFavoritesPokemons.filter(
      (poke: iOnePokemon) => poke.name !== pokemon.name
    );
    localStorage.setItem(newTeam);
    dispatch(ac.loadTeamAction(newTeam));
  }
  console.log(myFavoritesPokemons);

  return (
    <div className="myTeamCard">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div className="myTeamCard-info">
        <p>Lv. 100</p>
        <h3>{pokemon.name}</h3>
        <div className="life"></div>
        <p>
          {pokemon.stats[0].base_stat}/{pokemon.stats[0].base_stat}
        </p>
      </div>
      <button onClick={handleDelete}>
        <img src="/img/delete.png" alt="delete" />
      </button>
    </div>
  );
}
