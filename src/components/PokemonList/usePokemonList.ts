import { useQuery } from 'react-query';
import type { Pokemon } from '../../types/pokemon';

type UserPokemonReturnValue = {
  pokemons: Pokemon[];
  pokemonsIsError: boolean;
  pokemonsIsLoading: boolean;
};
type UsePokemonList = (id: number) => UserPokemonReturnValue;

export const usePokemonList: UsePokemonList = (id) => {
  const getPokemons = async () => {
    const pokemons = await fetch(
      `https://pokeapi.co/api/v2/generation/${id}/`,
    ).then((res) => res.json());

    return pokemons.pokemon_species;
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
