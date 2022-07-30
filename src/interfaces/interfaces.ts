export interface iPokemonResult {
  name: string;
  url: string;
}

export interface iData {
  count: number;
  next?: string;
  previous?: string;
  results: iPokemonResult[];
}

export interface iStore {
  pokemon: iOnePokemon[];
  url: string;
}

export interface iOnePokemon {
  id: number;
  height: number;
  name: string;
  weight: number;
  sprites: {
    versions: {
      "generation-v": {
        "black-white": {
          animated: { front_default: string };
        };
      };
    };
  };
}

export interface iPokemonStore {
  id: number;
  height: number;
  name: string;
  weight: number;
  img: string;
}
