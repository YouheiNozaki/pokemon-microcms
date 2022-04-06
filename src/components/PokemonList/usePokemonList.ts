import { useQuery } from 'react-query';

export const usePokemonList = () => {
  const getPokemons = async () => {
    const pokemons = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=151`,
    ).then((res) => res.json());

    return pokemons.results;
  };

  const {
    data: pokemons,
    isError: pokemonsIsError,
    isLoading: pokemonsIsLoading,
  } = useQuery('pokemons', getPokemons, {
    staleTime: Infinity,
  });

  return { pokemons, pokemonsIsError, pokemonsIsLoading };
};
