import { useQuery } from 'react-query';

export const useGetPokemons = () => {
  const getPokemons = async () => {
    const pokemons = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=151`,
    ).then((res) => res.json());

    return pokemons.results;
  };

  const { data: pokemons } = useQuery('pokemons', getPokemons, {
    staleTime: Infinity,
  });

  return { pokemons };
};
