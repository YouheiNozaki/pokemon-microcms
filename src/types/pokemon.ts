export type Pokemon = {
  name: string;
  sprites?: {
    front_default: string;
  };
};

export type GetPokemonParam = {
  limit: number;
  offset: number;
};
