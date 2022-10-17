import { Link } from 'react-router-dom';
import { iOnePokemon } from '../interfaces/interfaces';

export function Card({ pokemon }: { pokemon: iOnePokemon }) {
  return pokemon.sprites.front_default ? (
    <Link to={`detail/${pokemon.id}`} state={pokemon}>
      <li>
        <img
          src={
            pokemon.sprites.other['official-artwork'].front_default
              ? pokemon.sprites.other['official-artwork'].front_default
              : pokemon.sprites.front_default
          }
          alt={pokemon.name}
        />
        <p>{pokemon.name}</p>
      </li>
    </Link>
  ) : (
    <></>
  );
}
