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
  team: iOnePokemon[];
}

export interface iOnePokemon {
  id: number;
  height: number;
  name: string;
  weight: number;
  sprites: {
    other: { 'official-artwork': { front_default: string } };
    front_default: string;
  };
  stats: [{ base_stat: number; stat: { name: string } }];
  types: [{ type: { name: string } }];
}

export interface iPokemonStore {
  id: number;
  height: number;
  name: string;
  weight: number;
  img: string;
}

export interface iStat {
  stat: { name: string };
  base_stat: number;
}
export interface iLocation {
  state: iOnePokemon;
}
