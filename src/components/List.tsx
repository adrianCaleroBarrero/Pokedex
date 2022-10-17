import { useDispatch, useSelector } from 'react-redux';
import { iStore } from '../interfaces/interfaces';
import { HttpPokemon } from '../services/http.pokemon';
import { Card } from './Card';
import * as ac from '../redux/page-reducer/action.creator';
import { Search } from './Search';

export function List() {
  const pokemons = useSelector((state: iStore) => state.pokemon);
  const url = useSelector((state: iStore) => state.url);
  const api = new HttpPokemon();
  const dispatch = useDispatch();

  function handleNext() {
    api
      .getAllPokemons(url || 'https://pokeapi.co/api/v2/pokemon')
      .then((resp) => dispatch(ac.loadUrlAction(resp.next as string)));
  }

  function handleBack() {
    api
      .getAllPokemons(url || 'https://pokeapi.co/api/v2/pokemon')
      .then(
        (resp) =>
          resp.previous && dispatch(ac.loadUrlAction(resp.previous as string))
      );
  }

  return (
    <>
      <Search />
      <ul>
        {pokemons?.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
      <div className="pages-button">
        <button onClick={handleBack}>
          <img src="/img/back.png" alt="back" />
        </button>
        <button onClick={handleNext}>
          <img src="/img/next.png" alt="next" />
        </button>
      </div>
    </>
  );
}
