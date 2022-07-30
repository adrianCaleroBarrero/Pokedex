import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { HttpPokemon } from "./services/http.pokemon";
import * as acPoke from "./redux/pokemon-reducer/action.creator";
import { List } from "./components/list";
import { iStore } from "./interfaces/interfaces";

function App() {
  const dispatch = useDispatch();
  const url = useSelector((state: iStore) => state.url);
  const apiPoke = useMemo(() => new HttpPokemon(), []);

  useEffect(() => {
    apiPoke
      .getAllPokemons(url || "https://pokeapi.co/api/v2/pokemon")
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
    <div className="App">
      <List />
    </div>
  );
}

export default App;
