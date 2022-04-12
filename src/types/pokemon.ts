export type Pokemon = {
  id: number;
  name: string;
  sprites?: {
    front_default: string;
  };
  types?: [
    {
      slot: number;
      type: {
        name: string;
      };
    },
  ];
  abilities: [
    {
      ability: {
        name: string;
      };
    },
  ];
  height: number;
  weight: number;
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
  ];
};

export type GetPokemonParam = {
  limit: number;
  offset: number;
};
