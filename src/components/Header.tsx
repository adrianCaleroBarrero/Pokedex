import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <Link to={'/'} className="title">
        <img src="/img/pokemon.png" alt="title" />
      </Link>

      <Link to={'/favorites'}>
        <img src="/img/pokedex.png" alt="pokedex" />
      </Link>
    </header>
  );
}
