import { useEffect } from 'react';
import { useQuery } from 'react-query';
import type { Pokemon, GetPokemonParam } from '../types/pokemon';

type UsePokemonReturnValue = {
  pokemons: Pokemon[];
  pokemonsIsError: boolean;
  pokemonsIsLoading: boolean;
  pokemonRefetch: any;
  pokemonIsRefetching: boolean;
  pokemonIsRefetchError: boolean;
};
type UsePokemonList = ({
  limit,
  offset,
}: GetPokemonParam) => UsePokemonReturnValue;

export const usePokemonList: UsePokemonList = (generationParam) => {
  const getPokemons = async () => {
    const pokemons = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species?limit=${generationParam.limit}&offset=${generationParam.offset}`,
    ).then((res) => res.json());

    return pokemons.results;
  };

  const {
    data: pokemons,
    isError: pokemonsIsError,
    isLoading: pokemonsIsLoading,
    refetch: pokemonRefetch,
    isRefetching: pokemonIsRefetching,
    isRefetchError: pokemonIsRefetchError,
  } = useQuery('pokemons', getPokemons, {
    staleTime: Infinity,
  });

  useEffect(() => {
    if (generationParam) {
      pokemonRefetch();
    }
  }, [generationParam, pokemonRefetch]);

  return {
    pokemons,
    pokemonsIsError,
    pokemonsIsLoading,
    pokemonRefetch,
    pokemonIsRefetching,
    pokemonIsRefetchError,
  };
};
