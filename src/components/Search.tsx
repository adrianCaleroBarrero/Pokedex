import { SyntheticEvent, useState } from 'react';
import { HttpPokemon } from '../services/http.pokemon';
import { useNavigate } from 'react-router-dom';

export function Search() {
  const api = new HttpPokemon();
  const navigate = useNavigate();
  const [pokemonName, setPokemonName] = useState('');

  function handleChange(ev: SyntheticEvent) {
    const element = ev.target as HTMLFormElement;
    setPokemonName(element.value);
  }

  function handleSubmit(ev: SyntheticEvent) {
    ev.preventDefault();

    api
      .getOnePokemon(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      .then((resp) => navigate(`/detail/${resp.id}`, { state: resp }));
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="search" onChange={handleChange} />
      <button type="submit" className="pokeball">
        <img src="/img/pokeball.png" alt="pokeball" />
      </button>
    </form>
  );
}
