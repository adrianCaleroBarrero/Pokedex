import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { HttpPokemon } from './services/http.pokemon';
import * as acPoke from './redux/pokemon-reducer/action.creator';
import { iStore } from './interfaces/interfaces';
import PokedexPage from './pages/pokedex/PokedexPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import DetailPage from './pages/detail/DetailPage';
import FavoritesPage from './pages/favorites/FavoritesPage';

function App() {
  const options = [
    { path: '', label: 'Home', page: <PokedexPage></PokedexPage> },
    { path: '/pokedex', label: 'Home', page: <PokedexPage></PokedexPage> },
    { path: '/detail/:id', label: 'Detail', page: <DetailPage></DetailPage> },
    {
      path: '/favorites',
      label: 'Favorite',
      page: <FavoritesPage></FavoritesPage>,
    },
  ];
  const dispatch = useDispatch();
  const url = useSelector((state: iStore) => state.url);
  const apiPoke = useMemo(() => new HttpPokemon(), []);

  useEffect(() => {
    apiPoke
      .getAllPokemons(url || 'https://pokeapi.co/api/v2/pokemon')
      .then((resp) => {
        const array = resp.results.map((item) =>
          apiPoke.getOnePokemon(item.url).then((resp) => resp)
        );
        Promise.all(array).then((resp) =>
          dispatch(acPoke.loadPokemonAction(resp))
        );
      });
  }, [url]);

  return (
    <React.Suspense>
      <Routes>
        {options.map((page) => (
          <Route key={page.label} path={page.path} element={page.page}></Route>
        ))}
        <Route path="*" element={<Navigate replace to="" />}></Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
