import { useQuery } from 'react-query';
import type { Pokemon, GetPokemonParam } from '../types/pokemon';

type UsePokemonReturnValue = {
  pokemons: Pokemon[];
  pokemonsIsError: boolean;
  pokemonsIsLoading: boolean;
  pokemonRefetch: any;
};
type UsePokemonList = ({
  limit,
  offset,
}: GetPokemonParam) => UsePokemonReturnValue;

export const usePokemonList: UsePokemonList = ({ limit, offset }) => {
  const getPokemons = async () => {
    const pokemons = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species?limit=${limit}&offset=${offset}`,
    ).then((res) => res.json());

    return pokemons.results;
  };

  const {
    data: pokemons,
    isError: pokemonsIsError,
    isLoading: pokemonsIsLoading,
    refetch: pokemonRefetch,
  } = useQuery('pokemons', getPokemons, {
    staleTime: Infinity,
  });

  return { pokemons, pokemonsIsError, pokemonsIsLoading, pokemonRefetch };
};
