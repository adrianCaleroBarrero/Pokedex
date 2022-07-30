import { iOnePokemon } from "../interfaces/interfaces";

export function Card({ pokemon }: { pokemon: iOnePokemon }) {
  return (
    <li>
      <img
        src={
          pokemon.sprites.versions["generation-v"]["black-white"].animated
            .front_default
        }
        alt={pokemon.name}
      />
      <p>{pokemon.name}</p>
    </li>
  );
}
